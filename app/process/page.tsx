import PageShell from "@/components/page-shell";
import SectionHeading from "@/components/section-heading";
import LeadForm from "@/components/lead-form";
import { processSteps } from "@/lib/site-data";

export default function ProcessPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-neon">Process</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight md:text-7xl">From idea to infrastructure in five clear stages.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">The process is designed to prevent messy builds. We map the system before development starts.</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-5">
          {processSteps.map((step) => (
            <div key={step.step} className="glass grid gap-5 rounded-[2rem] p-7 md:grid-cols-[160px_1fr] md:p-9">
              <p className="text-4xl font-black text-neon">{step.step}</p>
              <div>
                <h2 className="text-3xl font-black">{step.title}</h2>
                <p className="mt-3 max-w-3xl text-lg leading-8 text-white/58">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <SectionHeading eyebrow="Start the process" title="Share your current stage and goal." center />
        <div className="mt-10"><LeadForm initialService="consulting" sourcePage="process" /></div>
      </section>
    </PageShell>
  );
}
