import type { ResearchEntry } from "../content/resume";

export function ResearchBlock({ entries }: { entries: ResearchEntry[] }) {
  return (
    <div className="space-y-6">
      {entries.map((r) => (
        <article
          key={r.title}
          className="card-surface print-break p-6 transition hover:border-zinc-300 dark:hover:border-zinc-600"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{r.title}</h3>
            <span className="shrink-0 font-mono text-sm text-zinc-500 dark:text-zinc-400">
              {r.period}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{r.summary}</p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {r.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
