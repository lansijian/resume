import type { CertificateEntry } from "../content/resume";

export function CertificatesBlock({ entries }: { entries: CertificateEntry[] }) {
  return (
    <ul className="space-y-3">
      {entries.map((c) => (
        <li
          key={c.title + (c.detail ?? "")}
          className="card-surface print-break px-5 py-4 text-sm text-zinc-700 dark:text-zinc-300"
        >
          <span className="font-medium text-zinc-900 dark:text-zinc-50">{c.title}</span>
          {c.detail ? (
            <span className="text-zinc-600 dark:text-zinc-400"> — {c.detail}</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
