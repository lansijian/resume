export function CampusBlock({
  period,
  lines,
}: {
  period: string;
  lines: string[];
}) {
  return (
    <div className="card-surface print-break p-6">
      <p className="font-mono text-sm text-zinc-500 dark:text-zinc-400">{period}</p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
