import { SectionHeading } from "@/components/section-heading";
import { communityFeatures } from "@/lib/content";

export default function CommunityPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Community"
        title="社区与成长机制"
        description="这里既是内容门户，也是生成式软件时代的创作社区，让每个人都能晒作品、追趋势、参加挑战。"
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {communityFeatures.map((feature) => (
          <article key={feature.title} className="rounded-[30px] border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-semibold text-white">{feature.title}</h2>
            <p className="mt-4 text-sm leading-6 text-brand-soft">{feature.description}</p>
          </article>
        ))}
      </div>
      <div className="rounded-[32px] border border-brand-secondary/30 bg-brand-secondary/10 p-8 shadow-glow">
        <p className="text-sm uppercase tracking-[0.28em] text-brand-secondary">Growth Path</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">围观者 → 尝试者 → 生成者 → 创作者 → 场景专家</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-soft">
          平台通过发布作品、晒出今天生成了什么、参与挑战和进入榜单，持续推动用户从使用者成长为有表达力与创造力的生成者。
        </p>
      </div>
    </div>
  );
}
