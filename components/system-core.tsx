import { Bot, Globe2, Server, Users2, Workflow } from "lucide-react";

const orbit = [
  { label: "Community", icon: Users2, className: "left-1/2 top-0 -translate-x-1/2" },
  { label: "Websites", icon: Globe2, className: "left-0 top-1/2 -translate-y-1/2" },
  { label: "Backend", icon: Server, className: "bottom-0 left-1/2 -translate-x-1/2" },
  { label: "Automation", icon: Workflow, className: "right-0 top-1/2 -translate-y-1/2" }
];

export default function SystemCore() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px] rounded-full border border-neon/10 bg-[radial-gradient(circle,rgba(34,197,94,0.16),transparent_58%)] p-8">
      <div className="absolute inset-10 rounded-full border border-neon/15" />
      <div className="absolute inset-24 rounded-full border border-aqua/10" />
      <div className="absolute left-1/2 top-1/2 grid h-36 w-36 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[2rem] border border-neon/40 bg-neon/10 text-neon shadow-glow">
        <div className="grid h-24 w-24 place-items-center rounded-3xl border border-neon/30 bg-black/50">
          <Bot size={44} />
        </div>
      </div>
      {orbit.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className={`absolute ${item.className} rounded-2xl border border-white/10 bg-black/70 px-4 py-3 shadow-soft backdrop-blur`}>
            <div className="flex items-center gap-2 text-sm">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-neon/10 text-neon"><Icon size={16} /></span>
              <span>{item.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
