import { CalendarDays, MessageSquare, RadioTower } from "lucide-react";
import PageShell from "@/components/page-shell";
import SectionHeading from "@/components/section-heading";
import LeadForm from "@/components/lead-form";

export default function BookCallPage() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neon">Book a call</p>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">Start with a clean project request.</h1>
          <p className="mt-6 text-lg leading-8 text-white/60">This is not just a contact form. Your request is scored, logged and routed into the correct service channel.</p>
        </div>
        <div className="glass rounded-[2rem] p-7 green-glow">
          {[
            [CalendarDays, "Submit the requirement"],
            [RadioTower, "Discord alert is triggered"],
            [MessageSquare, "Owner reviews and follows up"]
          ].map(([Icon, text], index) => {
            const Component = Icon as typeof CalendarDays;
            return (
              <div key={String(text)} className="mb-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 last:mb-0">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-neon/10 text-neon"><Component size={18} /></span>
                <div>
                  <p className="text-sm text-white/40">Step 0{index + 1}</p>
                  <p className="font-semibold">{String(text)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Qualification form" title="Tell us what you want to build." center />
        <div className="mt-10"><LeadForm sourcePage="book-call" /></div>
      </section>
    </PageShell>
  );
}
