import { useEffect, useState } from "react";

// Scroll position rendered as drilled depth. rAF-throttled scroll listener —
// deliberately the primary implementation, not a CSS scroll-timeline trick,
// so it behaves identically in every browser.
export default function DepthGauge({ total }) {
  const [depth, setDepth] = useState("000.0");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const f = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setDepth((f * total).toFixed(1).padStart(5, "0"));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [total]);

  return (
    <span className="gauge mono" aria-hidden="true">
      DEPTH <span className="gauge__num">{depth}</span> m
    </span>
  );
}
