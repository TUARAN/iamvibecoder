import Link from "next/link";
import { Sparkles } from "lucide-react";

import { ExternalSiteLink } from "@/components/external-site-link";
import { navItems } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-brand-ink/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              <Sparkles className="h-5 w-5 text-brand-secondary" />
            </span>
            <span>人人都是程序员</span>
          </Link>
          <ExternalSiteLink className="inline-flex items-center gap-1 pl-[3.25rem] text-xs font-normal text-brand-soft transition hover:text-white" />
        </div>
        <nav className="hidden items-center gap-6 text-sm text-brand-soft md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#hero"
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
        >
          今天就 Vibe 一个
        </Link>
      </div>
    </header>
  );
}
