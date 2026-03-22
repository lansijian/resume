import type { SkillGroup } from "../content/resume";

export function SkillsBlock({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((g) => (
        <div key={g.name} className="card-surface print-break p-5">
          <h3 className="font-mono text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            {g.name}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {g.items.map((item) => (
              <span
                key={item}
                className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-sm text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
