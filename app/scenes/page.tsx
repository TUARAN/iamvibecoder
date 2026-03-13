import { Rocket } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const sceneDetails = [
  {
    title: "办公提效",
    examples: ["会议纪要质检台", "日报周报生成器", "审批追踪看板"],
    summary: "围绕组织协作中的高频重复动作，让每个岗位都能做自己的轻应用。"
  },
  {
    title: "内容创作",
    examples: ["选题库", "脚本助手", "封面文案生成器"],
    summary: "把内容生产从灵感消耗战，变成可被流程化和模板化的系统。"
  },
  {
    title: "数据处理",
    examples: ["CSV 清洗器", "日报汇总器", "异常提醒面板"],
    summary: "把原本散落在表格与聊天记录里的数据变成即时可用结果。"
  },
  {
    title: "小生意工具",
    examples: ["报价单生成器", "订单跟进板", "库存小系统"],
    summary: "让个体经营者也能拥有刚好够用、成本极低的软件能力。"
  },
  {
    title: "学习辅助",
    examples: ["错题整理器", "复习排程器", "知识点问答页"],
    summary: "把学习过程拆成可操作、可追踪、可反馈的小工具。"
  },
  {
    title: "活动与营销",
    examples: ["活动报名页", "落地页", "传播海报页"],
    summary: "从传播物料到转化承接，一句话生成一整套前台页面。"
  }
];

export default function ScenesPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Scene Builder"
        title="场景造物"
        description="不是告诉用户什么是 AI 编程，而是直接给他一个能做出来、能用起来的结果入口。"
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {sceneDetails.map((scene) => (
          <article key={scene.title} className="rounded-[30px] border border-white/10 bg-white/5 p-7">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-white/10 bg-brand-panel/70 p-3">
                <Rocket className="h-5 w-5 text-brand-secondary" />
              </div>
              <h2 className="text-2xl font-semibold text-white">{scene.title}</h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-brand-soft">{scene.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {scene.examples.map((example) => (
                <span key={example} className="rounded-full border border-white/10 bg-brand-panel/70 px-4 py-2 text-sm text-brand-soft">
                  {example}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
