import { useState } from "react";
import type { ResumeContent, ResumeLabels } from "../content/resume";

type Props = {
  contact: ResumeContent["contact"];
  labels: ResumeLabels;
};

export function ContactBlock({ contact, labels }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="card-surface print-break p-6 sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {contact.phone ? (
            <>
              <p className="font-mono text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {labels.phoneLabel}
              </p>
              <a
                className="mt-2 block text-lg text-zinc-900 underline-offset-2 transition hover:underline dark:text-zinc-50"
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
              >
                {contact.phone}
              </a>
            </>
          ) : null}
          <p
            className={`font-mono text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 ${contact.phone ? "mt-6" : ""}`}
          >
            {labels.emailLabel}
          </p>
          <a
            className="mt-2 block text-lg text-zinc-900 underline-offset-2 transition hover:underline dark:text-zinc-50"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <button
            type="button"
            onClick={copy}
            className="no-print mt-3 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-1.5 font-mono text-xs text-zinc-700 transition hover:border-zinc-300 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {copied ? labels.copied : labels.copyEmail}
          </button>
        </div>
        {contact.location ? (
          <div className="text-left sm:text-right">
            <p className="font-mono text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {labels.locationLabel}
            </p>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300">{contact.location}</p>
          </div>
        ) : null}
      </div>

      <div className="no-print mt-8 flex flex-wrap gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-700">
        {contact.github ? (
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-sm text-zinc-600 underline-offset-4 transition hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
        ) : null}
        {contact.linkedin ? (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-sm text-zinc-600 underline-offset-4 transition hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            LinkedIn
          </a>
        ) : null}
      </div>
    </div>
  );
}
