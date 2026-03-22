import type { ProjectEntry } from "../content/resume";

export function ProjectsBlock({ entries }: { entries: ProjectEntry[] }) {
  return (
    <div className="grid gap-6">
      {entries.map((p) => (
        <article
          key={p.title}
          className="card-surface print-break p-6 transition hover:border-zinc-300 dark:hover:border-zinc-600"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {p.title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {p.role}
              <span className="mx-2 text-zinc-300 dark:text-zinc-600">·</span>
              <span className="font-mono text-zinc-600 dark:text-zinc-300">{p.period}</span>
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {p.summary}
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          {p.links?.length ? (
            <div className="no-print mt-5 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <a
                  key={l.href + l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-xs text-zinc-700 underline-offset-4 transition hover:text-zinc-900 hover:underline dark:text-zinc-300 dark:hover:text-white"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}
