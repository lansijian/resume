import type { LifePhoto } from "../content/resume";
import { publicAssetUrl } from "../utils/publicAssetUrl";

type Props = {
  photos: LifePhoto[];
  emptyHint: string;
};

export function LifeGallery({ photos, emptyHint }: Props) {
  if (!photos.length) {
    return (
      <p className="rounded-lg border border-dashed border-zinc-300 px-4 py-8 text-center text-sm text-zinc-500 dark:border-zinc-600 dark:text-zinc-400">
        {emptyHint}
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {photos.map((p) => (
        <figure
          key={p.id}
          className="card-surface overflow-hidden print-break"
        >
          <img
            src={publicAssetUrl(p.src)}
            alt={p.caption}
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
          <figcaption className="border-t border-zinc-200 px-4 py-3 text-sm leading-relaxed text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            {p.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
