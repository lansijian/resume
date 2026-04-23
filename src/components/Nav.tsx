import type { NavItem, ResumeLabels } from "../content/resume";
import { usePreferences } from "../preferences";

type Props = {
  items: NavItem[];
  activeId: string;
  labels: ResumeLabels;
};

function tabClass(active: boolean) {
  return active
    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
    : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100";
}

export function Nav({ items, activeId, labels }: Props) {
  const { theme, setTheme, locale, setLocale } = usePreferences();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="no-print fixed left-0 right-0 top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <nav
        className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="text-sm font-medium text-zinc-800 dark:text-zinc-100"
        >
          {labels.navBrand}
        </button>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div
            className="inline-flex overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-700"
            role="group"
            aria-label={locale === "zh" ? "主题" : "Theme"}
          >
            <button
              type="button"
              className={`px-2.5 py-1 text-xs ${tabClass(theme === "light")}`}
              onClick={() => setTheme("light")}
            >
              {labels.themeLight}
            </button>
            <button
              type="button"
              className={`border-l border-zinc-200 px-2.5 py-1 text-xs dark:border-zinc-700 ${tabClass(theme === "dark")}`}
              onClick={() => setTheme("dark")}
            >
              {labels.themeDark}
            </button>
          </div>

          <div
            className="inline-flex overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-700"
            role="group"
            aria-label={locale === "zh" ? "语言" : "Language"}
          >
            <button
              type="button"
              className={`px-2.5 py-1 text-xs ${tabClass(locale === "zh")}`}
              onClick={() => setLocale("zh")}
            >
              {labels.langZh}
            </button>
            <button
              type="button"
              className={`border-l border-zinc-200 px-2.5 py-1 text-xs dark:border-zinc-700 ${tabClass(locale === "en")}`}
              onClick={() => setLocale("en")}
            >
              {labels.langEn}
            </button>
          </div>

          <ul className="flex flex-wrap items-center justify-end gap-1 text-sm">
            {items
              .filter((i) => i.id !== "hero")
              .map((item) => {
                const active = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollTo(item.id)}
                      className={`rounded-md px-2 py-1.5 transition sm:px-2.5 ${
                        active
                          ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50"
                          : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
