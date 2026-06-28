import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation/lead-schema";
import { isSpamSubmission } from "@/lib/security/honeypot";
import { checkRateLimit } from "@/lib/security/rate-limit";
import { generateLeadId } from "@/lib/utils/generate-lead-id";
import { scoreLead } from "@/lib/utils/lead-score";
import { getStorage } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const limited = checkRateLimit(ip);
    if (!limited.allowed) {
      return NextResponse.json({ error: "Too many submissions. Try again later." }, { status: 429 });
    }

    const body = await request.json();
    if (isSpamSubmission(body.companyWebsite)) {
      await getStorage().saveSystemLog({ event: "spam_blocked", payload: body });
      return NextResponse.json({ ok: true });
    }

    const parsed = leadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data", issues: parsed.error.flatten() }, { status: 400 });
    }

    const leadId = generateLeadId();
    const { score, priority } = scoreLead(parsed.data);
    const lead = {
      ...parsed.data,
      leadId,
      score,
      priority,
      createdAt: new Date().toISOString()
    };

    await getStorage().saveLead(lead);
    return NextResponse.json({ ok: true, leadId, priority });
  } catch (error) {
    await getStorage().saveSystemLog({
      event: "lead_api_error",
      payload: { message: error instanceof Error ? error.message : "Unknown error" }
    });
    return NextResponse.json({ error: "Unable to submit request" }, { status: 500 });
  }
}
