import { useEffect, useState } from "react";

// Tracks which stratum currently crosses the middle band of the viewport,
// so the strata column can show where the drill bit is.
export default function useActiveStratum(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      // Only the section overlapping the 40–55% viewport band intersects.
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return active;
}
