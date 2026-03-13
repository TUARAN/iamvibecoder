import Link from "next/link";

import { ExternalSiteLink } from "@/components/external-site-link";

const footerLinks = [
  { label: "场景造物", href: "/scenes" },
  { label: "栏目体系", href: "/columns" },
  { label: "社区机制", href: "/community" },
  { label: "品牌主张", href: "/about" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-line bg-[#050814]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">人人都是程序员</p>
          <p className="max-w-xl text-sm leading-6 text-brand-soft">
            在大模型与 vibe 编程时代，每个人都可以把需求直接变成软件。想要什么工具，不必到处找，直接 vibe 一个。
          </p>
          <ExternalSiteLink className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.28em] text-brand-soft/70 transition hover:text-white" />
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-brand-soft">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
