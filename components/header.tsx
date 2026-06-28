import Link from "next/link";
import { Hexagon } from "lucide-react";
import { navItems } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-neon/40 bg-neon/10 text-neon green-glow">
            <Hexagon size={18} />
          </span>
          <span>SaaS Service Studio</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-white/68 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">{item.label}</Link>
          ))}
        </nav>
        <Link href="/book-call" className="rounded-full border border-neon/45 bg-neon/10 px-4 py-2 text-sm font-semibold text-neon transition hover:bg-neon hover:text-black">
          Book a Call
        </Link>
      </div>
    </header>
  );
}
