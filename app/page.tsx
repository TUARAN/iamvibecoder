import Link from "next/link";
import { ArrowRight, Flame, Layers, Rocket, Sparkles, Zap } from "lucide-react";

import { ExternalSiteLink } from "@/components/external-site-link";
import { SectionHeading } from "@/components/section-heading";
import {
  challenges,
  creators,
  demandRankings,
  discussions,
  gettingStarted,
  heroMetrics,
  hotApps,
  latestCases,
  sceneGroups,
  templates,
  trendNotes,
  vibeFeed
} from "@/lib/content";

export default function Home() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-10 lg:px-8 lg:py-16">
      <section id="hero" className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-brand-soft shadow-glow">
            <Sparkles className="h-4 w-4 text-brand-accent" />
            不是找软件，而是生成软件
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              想要什么软件，<br className="hidden sm:block" />直接 <span className="text-brand-secondary">vibe</span> 一个。
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-soft sm:text-xl">
              「人人都是程序员」是一座生成式软件时代的门户与创作社区。不会写代码也没关系，只要能说清需求，你就能把页面、工具、小应用和工作流直接做出来。
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-glow">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex-1 rounded-2xl border border-white/10 bg-brand-panel/70 px-5 py-4 text-base text-white/90">
                我想要一个帮我自动汇总活动报名信息、生成跟进表和提醒待办的工具。
              </div>
              <div className="flex gap-3">
                <Link
                  href="/scenes"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-ink transition hover:opacity-90"
                >
                  立即 Vibe
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  了解主张
                </Link>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-4">
            {heroMetrics.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-brand-soft">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-glow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-brand-secondary">今日生成态势</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">大家都在 vibe 什么</h2>
            </div>
            <Zap className="h-9 w-9 text-brand-warm" />
          </div>
          <div className="space-y-3">
            {vibeFeed.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-brand-panel/65 px-4 py-3 text-sm text-brand-soft">
                {item}
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-dashed border-brand-secondary/40 bg-brand-secondary/10 p-5">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-secondary">今日问题</p>
            <p className="mt-3 text-xl font-semibold text-white">今天你 vibe 了吗？</p>
            <p className="mt-2 text-sm leading-6 text-brand-soft">
              先把你想要的结果说出来，再让大模型帮你补齐页面、逻辑和交互。
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Hot Apps"
            title="今日热门 vibe 应用"
            description="这里不是软件榜单，而是当下最值得直接生成的应用方向。"
          />
          <div className="grid gap-4 md:grid-cols-2">
            {hotApps.map((app) => (
              <article key={app.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-brand-accent">{app.tag}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{app.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-soft">{app.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Demand Rank"
            title="热门需求榜"
            description="高频需求正在定义新一代软件入口。"
          />
          <div className="mt-8 space-y-4">
            {demandRankings.map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-brand-panel/55 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-6 text-brand-soft">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Case Stream"
            title="最新生成案例"
            description="展示从一句需求到一个结果的完整链路，让普通人也能看到自己动手的可能性。"
          />
          <div className="mt-8 space-y-5">
            {latestCases.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-brand-panel/60 p-5">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-soft">需求：{item.demand}</p>
                <p className="mt-2 text-sm leading-6 text-brand-soft">结果：{item.result}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Templates"
            title="模板入口"
            description="不会表达需求没关系，先从模板开始，把第一次成功率拉起来。"
          />
          <div className="space-y-4">
            {templates.map((template) => (
              <article key={template.title} className="rounded-3xl border border-white/10 bg-brand-panel/60 p-5">
                <h3 className="text-lg font-semibold text-white">{template.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-soft">{template.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Scene Entry"
          title="场景入口"
          description="用户需要的不是抽象技术概念，而是一个立刻可生成、立刻可用的结果。"
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sceneGroups.map((scene) => (
            <article key={scene.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <Layers className="h-5 w-5 text-brand-secondary" />
                <h3 className="text-xl font-semibold text-white">{scene.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-brand-soft">{scene.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Creators"
            title="精选创造者"
            description="平台既是门户，也是生成式软件时代的创作社区。"
          />
          <div className="mt-8 space-y-4">
            {creators.map((creator) => (
              <article key={creator.name} className="rounded-3xl border border-white/10 bg-brand-panel/60 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{creator.name}</h3>
                    <p className="mt-1 text-sm text-brand-secondary">{creator.role}</p>
                  </div>
                  <Flame className="h-5 w-5 text-brand-warm" />
                </div>
                <p className="mt-3 text-sm leading-6 text-brand-soft">{creator.highlight}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Start Here"
            title="新手入门区"
            description="先学需求表达，再逐步把页面、工具和工作流拼起来。"
          />
          <div className="mt-8 space-y-4">
            {gettingStarted.map((item, index) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-brand-panel/60 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-brand-soft">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
          <SectionHeading
            eyebrow="Trend Watch"
            title="趋势观察区"
            description="这里不仅展示工具，更解释一种新的软件生产方式正在发生。"
          />
          <div className="mt-8 space-y-4">
            {trendNotes.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-brand-panel/60 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-soft">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
            <SectionHeading
              eyebrow="Discussion"
              title="社区讨论区"
              description="让需求、经验和生成结果在社区里持续发酵。"
            />
            <div className="mt-8 space-y-4">
              {discussions.map((item) => (
                <article key={item} className="rounded-3xl border border-white/10 bg-brand-panel/60 p-5 text-sm leading-6 text-brand-soft">
                  {item}
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-brand-primary/25 via-white/5 to-brand-secondary/20 p-6 shadow-glow">
            <SectionHeading
              eyebrow="Challenges"
              title="挑战活动区"
              description="通过挑战、榜单和打卡，把‘今天我做了什么软件’变成平台氛围。"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {challenges.map((item) => (
                <article key={item.title} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-brand-accent">{item.meta}</p>
                  <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-glow lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-secondary">Brand Line</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              从使用软件，转向生成软件。<br />
              从软件消费者，转向软件创造者。
            </h2>
            <p className="text-base leading-7 text-brand-soft sm:text-lg">
              <ExternalSiteLink className="inline-flex items-center gap-1 align-baseline transition hover:text-white" />{" "}
              想做的，不是一个传统技术站，而是一个让每个人都能把需求变成应用的新入口。
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-ink transition hover:opacity-90"
          >
            查看完整品牌主张
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
