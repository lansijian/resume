import type { EducationEntry } from "../content/resume";

export function EducationBlock({ entries }: { entries: EducationEntry[] }) {
  return (
    <div className="space-y-6">
      {entries.map((e) => (
        <article
          key={`${e.school}-${e.period}`}
          className="card-surface print-break p-6 transition hover:border-zinc-300 dark:hover:border-zinc-600"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {e.school}
              </h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-300">{e.degree}</p>
            </div>
            <div className="font-mono text-sm sm:text-right">
              <span className="block text-zinc-500 dark:text-zinc-400">{e.period}</span>
              {e.gpa ? (
                <span className="mt-1 block text-zinc-600 dark:text-zinc-400">{e.gpa}</span>
              ) : null}
            </div>
          </div>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {e.details.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
