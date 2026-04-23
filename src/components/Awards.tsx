import type { AwardEntry } from "../content/resume";
import { publicAssetUrl } from "../utils/publicAssetUrl";

function AwardText({ a }: { a: AwardEntry }) {
  return (
    <>
      <p className="font-medium text-zinc-900 dark:text-zinc-50">{a.title}</p>
      {a.role ? (
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{a.role}</p>
      ) : null}
      {a.issuer ? (
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{a.issuer}</p>
      ) : null}
      {a.note ? (
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{a.note}</p>
      ) : null}
      {a.paragraphs?.map((p) => (
        <p
          key={p.slice(0, 48)}
          className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
        >
          {p}
        </p>
      ))}
      {a.bullets?.length ? (
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
          {a.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export function AwardsBlock({ entries }: { entries: AwardEntry[] }) {
  return (
    <ul className="space-y-4">
      {entries.map((a) =>
        a.imageSrc ? (
          <li
            key={`${a.title}-${a.period}`}
            className="card-surface print-break flex flex-col gap-4 p-4 sm:flex-row sm:items-start"
          >
            <div className="no-print w-full shrink-0 sm:w-44">
              <img
                src={publicAssetUrl(a.imageSrc)}
                alt=""
                className="h-40 w-full rounded-lg border border-zinc-200 object-cover object-center dark:border-zinc-700 sm:h-36 sm:w-44"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 flex-1">
              <AwardText a={a} />
              <span className="mt-3 inline-block font-mono text-sm text-zinc-500 dark:text-zinc-400">
                {a.period}
              </span>
            </div>
          </li>
        ) : (
          <li
            key={`${a.title}-${a.period}`}
            className="card-surface print-break flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="min-w-0">
              <AwardText a={a} />
            </div>
            <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400 sm:shrink-0">
              {a.period}
            </span>
          </li>
        )
      )}
    </ul>
  );
}
