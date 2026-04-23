import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], rootMargin = "-40% 0px -50% 0px") {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActiveId(e.target.id);
            break;
          }
        }
      },
      { root: null, rootMargin, threshold: [0, 0.25, 0.5] }
    );

    for (const el of els) obs.observe(el);
    return () => obs.disconnect();
  }, [sectionIds, rootMargin]);

  return activeId;
}
