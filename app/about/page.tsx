import { ExternalSiteLink } from "@/components/external-site-link";
import { SectionHeading } from "@/components/section-heading";
import { manifesto } from "@/lib/content";

function renderParagraph(paragraph: string) {
  const url = "https://iamvibecoder.cn";

  if (!paragraph.includes(url)) {
    return paragraph;
  }

  const [before, after] = paragraph.split(url);

  return (
    <>
      {before}
      <ExternalSiteLink className="inline-flex items-center gap-1 align-baseline transition hover:text-white" />
      {after}
    </>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-12 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Manifesto"
        title="为什么是「人人都是程序员」"
        description="这不是一个传统教程站、软件下载站或开发者社区，而是一个在大模型时代重写软件入口的网站。"
      />
      <div className="space-y-5 rounded-[32px] border border-white/10 bg-white/5 p-8">
        {manifesto.map((paragraph) => (
          <p key={paragraph} className="text-base leading-8 text-brand-soft sm:text-lg">
            {renderParagraph(paragraph)}
          </p>
        ))}
      </div>
      <div className="rounded-[32px] border border-brand-accent/30 bg-brand-accent/10 p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-brand-accent">Core Line</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">想要某个软件，不用下载，直接 vibe 一个。</h2>
        <p className="mt-4 text-base leading-7 text-brand-soft">今天你 vibe 了吗？</p>
      </div>
    </div>
  );
}
