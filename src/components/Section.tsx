import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className = "" }: Props) {
  return (
    <section id={id} className={`scroll-mt-24 print-break ${className}`}>
      <div className="mb-8 border-b border-zinc-200 pb-4 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
