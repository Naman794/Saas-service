import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { iconMap, type IconKey } from "@/components/icon-map";

export default function ServiceCard({ icon, label, short, href }: { icon: IconKey; label: string; short: string; href: string }) {
  const Icon = iconMap[icon];
  return (
    <Link href={href} className="group glass rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:border-neon/40">
      <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-neon/10 text-neon">
        <Icon size={23} />
      </div>
      <h3 className="text-xl font-bold">{label}</h3>
      <p className="mt-3 min-h-24 leading-7 text-white/55">{short}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neon">
        Explore service <ArrowRight size={16} className="transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
