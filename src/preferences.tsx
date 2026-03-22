import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";
export type Locale = "zh" | "en";

type Ctx = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const STORAGE = { theme: "resume-theme", locale: "resume-locale" } as const;

const PreferencesCtx = createContext<Ctx | null>(null);

function readTheme(): Theme {
  try {
    const v = localStorage.getItem(STORAGE.theme);
    if (v === "light" || v === "dark") return v;
  } catch {
    /* ignore */
  }
  return "light";
}

function readLocale(): Locale {
  try {
    const v = localStorage.getItem(STORAGE.locale);
    if (v === "zh" || v === "en") return v;
  } catch {
    /* ignore */
  }
  return "zh";
}

export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readTheme);
  const [locale, setLocaleState] = useState<Locale>(readLocale);

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE.theme, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  useLayoutEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    try {
      localStorage.setItem(STORAGE.locale, locale);
    } catch {
      /* ignore */
    }
  }, [locale]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

  const value = useMemo(
    () => ({ theme, setTheme, locale, setLocale }),
    [theme, locale, setTheme, setLocale]
  );

  return <PreferencesCtx.Provider value={value}>{children}</PreferencesCtx.Provider>;
}

export function usePreferences(): Ctx {
  const ctx = useContext(PreferencesCtx);
  if (!ctx) throw new Error("usePreferences must be used within PreferencesProvider");
  return ctx;
}
