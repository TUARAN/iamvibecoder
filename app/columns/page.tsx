import { SectionHeading } from "@/components/section-heading";
import { columns } from "@/lib/content";

export default function ColumnsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Columns"
        title="核心栏目体系"
        description="栏目命名围绕新范式展开：用需求定义软件，用生成替代下载，用表达替代门槛。"
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {columns.map((column) => (
          <article key={column.title} className="rounded-[30px] border border-white/10 bg-white/5 p-7">
            <h2 className="text-2xl font-semibold text-white">{column.title}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {column.items.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-brand-panel/70 px-4 py-2 text-sm text-brand-soft">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
