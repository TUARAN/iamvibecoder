import { ArrowUpRight } from "lucide-react";

type ExternalSiteLinkProps = {
  className?: string;
  showIcon?: boolean;
};

export function ExternalSiteLink({ className, showIcon = true }: ExternalSiteLinkProps) {
  return (
    <a
      href="https://iamvibecoder.cn"
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      <span>https://iamvibecoder.cn</span>
      {showIcon ? <ArrowUpRight className="h-3.5 w-3.5 shrink-0" /> : null}
    </a>
  );
}