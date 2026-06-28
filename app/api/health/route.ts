import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ ok: true, service: "saas-service-studio", timestamp: new Date().toISOString() });
}
