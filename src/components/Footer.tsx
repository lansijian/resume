export function Footer({ text }: { text: string }) {
  const y = new Date().getFullYear();
  return (
    <footer className="no-print mx-auto mt-16 max-w-5xl border-t border-zinc-200 px-4 py-10 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500 sm:px-6">
      <p>
        © {y} · {text}
      </p>
    </footer>
  );
}
