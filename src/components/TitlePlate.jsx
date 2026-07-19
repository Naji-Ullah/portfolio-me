import { useEffect, useState } from "react";
import { BOREHOLE } from "../data/strata";

// Elapsed drilling time since the job started. Renders a static string on
// the server and first client paint (no hydration mismatch), then ticks.
function useDrillClock(startISO) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tick = () => setNow(Date.now());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, reduced ? 60_000 : 1000);
    return () => {
      clearTimeout(first);
      clearInterval(id);
    };
  }, []);

  if (now == null) return null;

  const start = new Date(startISO);
  const cur = new Date(now);
  let months =
    (cur.getFullYear() - start.getFullYear()) * 12 +
    (cur.getMonth() - start.getMonth());
  const anchor = new Date(start);
  anchor.setMonth(start.getMonth() + months);
  if (anchor > cur) {
    months -= 1;
    anchor.setMonth(anchor.getMonth() - 1);
  }
  let rem = Math.max(0, Math.floor((cur - anchor) / 1000));
  const d = Math.floor(rem / 86_400);
  rem -= d * 86_400;
  const pad = (n) => String(n).padStart(2, "0");
  const h = pad(Math.floor(rem / 3600));
  const m = pad(Math.floor((rem % 3600) / 60));
  const s = pad(rem % 60);
  return `${Math.floor(months / 12)}y ${months % 12}mo ${d}d ${h}:${m}:${s}`;
}

export default function TitlePlate() {
  const clock = useDrillClock(BOREHOLE.startDate);

  return (
    <header className="plate" id="surface">
      <div className="plate__frame">
        <p className="plate__row mono">
          <span>BOREHOLE LOG {BOREHOLE.id}</span>
          <span className="plate__sheet">SHEET 1 OF 1</span>
          <span className="plate__status">STATUS: IN PROGRESS</span>
        </p>

        <h1 className="plate__name">
          <span className="plate__eyebrow mono">DRILLED BY</span>
          <span className="plate__big">Naji Ullah</span>
          <span className="plate__role">Full-Stack Software Engineer — Lahore</span>
        </h1>

        <dl className="plate__meta mono">
          <div>
            <dt>SITE</dt>
            <dd>{BOREHOLE.site}</dd>
          </div>
          <div>
            <dt>COORDINATES</dt>
            <dd>{BOREHOLE.coords}</dd>
          </div>
          <div>
            <dt>GROUND ELEV.</dt>
            <dd>{BOREHOLE.elevation}</dd>
          </div>
          <div>
            <dt>METHOD</dt>
            <dd>{BOREHOLE.method}</dd>
          </div>
          <div>
            <dt>COMMENCED</dt>
            <dd>{BOREHOLE.started}</dd>
          </div>
          <div className="plate__clock">
            <dt>DRILLING FOR</dt>
            <dd>{clock ? `${clock} — and counting` : "IN PROGRESS"}</dd>
          </div>
        </dl>

        <p className="plate__stamp mono" aria-hidden="true">
          SHIPS BY DAY
          <br />
          STUDIES BY NIGHT
        </p>

        <p className="plate__lede">
          This site is a drilling log of everything I&rsquo;ve shipped — React
          and Next.js where people can see it, Django and Firebase where they
          can&rsquo;t. Recent work lies near the surface; the foundations are at
          the bottom. <strong>Scroll to drill.</strong>
        </p>

        <p className="plate__actions">
          <a className="marker" href="#topsoil-title">
            Begin drilling ↓
          </a>
          <a className="marker marker--ghost" href="#contact">
            Skip to contact
          </a>
        </p>
      </div>

      <p className="plate__cue mono" aria-hidden="true">
        ▼ GROUND LEVEL — 0.0 m
      </p>
    </header>
  );
}
