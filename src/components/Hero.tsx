import type { PersonalInfo, ResumeContent, ResumeLabels } from "../content/resume";
import { publicAssetUrl } from "../utils/publicAssetUrl";

type Props = {
  content: ResumeContent["meta"];
  labels: ResumeLabels;
  personal: PersonalInfo;
};

export function Hero({ content, labels, personal }: Props) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="flex min-h-[60vh] flex-col justify-center pt-24 print-break"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              {content.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300 sm:text-xl">
              {content.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              {content.heroSubtitle}
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
              <div className="flex gap-2">
                <dt className="shrink-0 text-zinc-500 dark:text-zinc-400">{labels.genderLabel}</dt>
                <dd className="text-zinc-800 dark:text-zinc-200">{personal.gender}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-zinc-500 dark:text-zinc-400">{labels.ageLabel}</dt>
                <dd className="text-zinc-800 dark:text-zinc-200">{personal.age}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-zinc-500 dark:text-zinc-400">{labels.politicalLabel}</dt>
                <dd className="text-zinc-800 dark:text-zinc-200">{personal.politicalStatus}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-zinc-500 dark:text-zinc-400">{labels.phoneLabel}</dt>
                <dd>
                  <a
                    className="text-zinc-800 underline-offset-2 hover:underline dark:text-zinc-200"
                    href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  >
                    {personal.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="no-print mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
              >
                {labels.viewProjects}
              </button>
              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
              >
                {labels.contact}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="rounded-lg border border-dashed border-zinc-300 px-5 py-2.5 text-sm text-zinc-600 transition hover:border-zinc-400 dark:border-zinc-600 dark:text-zinc-400"
              >
                {labels.printPdf}
              </button>
            </div>
          </div>

          {personal.photoSrc ? (
            <div className="mx-auto shrink-0 sm:ml-auto sm:mr-0">
              <img
                src={publicAssetUrl(personal.photoSrc)}
                alt={content.name}
                className="aspect-[3/4] w-32 rounded-lg border border-zinc-200 object-cover object-top shadow-sm dark:border-zinc-700 sm:w-36"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
