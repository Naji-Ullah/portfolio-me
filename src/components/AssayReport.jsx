import { INSTRUMENTS, PROJECTS } from "../data/portfolio";
import { projectsForSkill } from "../lib/assay";
import cx from "../lib/cx";

// The skills section as a lab report. Skills found in project tags become
// provenance queries: tap one and the matching strata light up in the
// column while the rest of the core dims. The bar shows how many of the
// seven cores actually contain the compound — real counts, not vibes.
export default function AssayReport({ activeSkill, onSelect }) {
  return (
    <div className="assay">
      <h2 id="assay-title" className="zone__title">
        Skills <span className="zone__flavor mono">— LAB ANALYSIS</span>
      </h2>
      <p className="assay__intro mono">
        SAMPLE ASSAY · COMPOSITION BY CATEGORY · TAP A COMPOUND TO TRACE IT
        THROUGH THE CORE
      </p>

      <div className="assay__groups">
        {INSTRUMENTS.map((g) => (
          <section key={g.label} className="assay__group">
            <h3 className="assay__head mono">{g.label.toUpperCase()}</h3>
            <p className="assay__note">{g.note}</p>
            <ul className="assay__rows">
              {g.items.map((item) => {
                const n = projectsForSkill(item, PROJECTS).length;
                const active = activeSkill === item;
                return (
                  <li key={item} className="assay__row">
                    {n > 0 ? (
                      <button
                        type="button"
                        className={cx("assay__skill", active && "is-on")}
                        aria-pressed={active}
                        onClick={() => onSelect(active ? null : item)}
                      >
                        {item}
                        <span className="assay__count mono">×{n}</span>
                      </button>
                    ) : (
                      <span className="assay__skill assay__skill--flat">
                        {item}
                      </span>
                    )}
                    <span
                      className="assay__bar"
                      style={{ width: `${Math.max(6, (n / PROJECTS.length) * 100)}%` }}
                      aria-hidden="true"
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <p className="assay__foot mono">
        ×N = COMPOUND DETECTED IN N OF {PROJECTS.length} CORES. UNMARKED
        COMPOUNDS PRESENT IN THE TOOLBOX, NOT YET IN A LOGGED CORE.
      </p>
    </div>
  );
}
