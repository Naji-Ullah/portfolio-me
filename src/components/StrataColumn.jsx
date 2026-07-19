import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../data/portfolio";
import { BOREHOLE, NAV_STRATA } from "../data/strata";
import cx from "../lib/cx";

const TITLES = {
  topsoil: "Experience — Devflovv",
  assay: "Skills — lab analysis",
  bedrock: "Education — COMSATS",
  contact: "Contact — end of borehole",
};

const titleFor = (s) =>
  TITLES[s.id] || (PROJECTS.find((p) => p.id === s.id)?.title ?? s.label);

const pct = (v) => (v / BOREHOLE.totalDepth) * 100;

// The stratigraphic index: a to-scale column of the whole borehole that
// doubles as navigation. Desktop shows it as a sticky rail; on small
// screens it collapses to an edge strip that opens a drawer.
export default function StrataColumn({ activeId, litIds }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const opener = stripRef.current;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [open]);

  const active = NAV_STRATA.find((s) => s.id === activeId);
  const markerTop = active ? pct((active.top + active.base) / 2) : 0;

  const bandClass = (s) =>
    cx(
      "band",
      `tint-${s.tint || "plain"}`,
      activeId === s.id && "is-active",
      litIds && (litIds.has(s.id) ? "is-lit" : "is-dim")
    );

  const bandStyle = (s) => ({
    top: `${pct(s.top)}%`,
    height: `${Math.max(pct(s.base - s.top), 1.4)}%`,
  });

  return (
    <>
      <nav className="colnav" aria-label="Strata index">
        <span className="colnav__cap mono" aria-hidden="true">
          0 m
        </span>
        <div className="colnav__track">
          {NAV_STRATA.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={bandClass(s)}
              style={bandStyle(s)}
              aria-current={activeId === s.id ? "true" : undefined}
              title={`${titleFor(s)} · ${s.top}–${s.base} m`}
            >
              <span className="sr-only">{titleFor(s)}</span>
            </a>
          ))}
          <span
            className="colnav__bit"
            style={{ top: `${markerTop}%` }}
            aria-hidden="true"
          />
        </div>
        <span className="colnav__cap mono" aria-hidden="true">
          {BOREHOLE.totalDepth} m
        </span>
      </nav>

      <button
        ref={stripRef}
        type="button"
        className="strip"
        aria-label="Open strata index"
        onClick={() => setOpen(true)}
      >
        <span className="strip__track" aria-hidden="true">
          {NAV_STRATA.map((s) => (
            <span key={s.id} className={bandClass(s)} style={bandStyle(s)} />
          ))}
        </span>
      </button>

      {open && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Strata index">
          <button
            type="button"
            className="drawer__scrim"
            aria-label="Close strata index"
            onClick={() => setOpen(false)}
          />
          <div className="drawer__panel">
            <p className="drawer__head mono">
              BOREHOLE {BOREHOLE.id} — STRATA INDEX
              <button
                ref={closeRef}
                type="button"
                className="chip mono"
                onClick={() => setOpen(false)}
              >
                CLOSE ✕
              </button>
            </p>
            <ul className="drawer__list">
              {NAV_STRATA.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={cx("drawer__link", activeId === s.id && "is-active")}
                  >
                    <span
                      className={cx("drawer__swatch", `tint-${s.tint || "plain"}`)}
                      aria-hidden="true"
                    />
                    <span className="drawer__depth mono">
                      {s.top}–{s.base} m
                    </span>
                    <span className="drawer__title">{titleFor(s)}</span>
                    <span className="drawer__mat mono">
                      {(s.label || "").toUpperCase()}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
