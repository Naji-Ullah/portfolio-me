import cx from "../lib/cx";
import ContactLine from "./ContactLine";

// One geological layer of the page: tinted, hatched, torn open at the top,
// with a sample tag in the margin and all readable content on a solid panel.
export default function Stratum({ s, index = 0, dim = false, lit = false, children }) {
  return (
    <section
      id={s.id}
      aria-labelledby={`${s.id}-title`}
      className={cx(
        "stratum",
        `tint-${s.tint}`,
        s.hatch,
        dim && "stratum--dim",
        lit && "stratum--lit"
      )}
    >
      <ContactLine variant={index} />

      <span className="stratum__ruler mono" aria-hidden="true">
        <span>{s.top.toFixed(1)} m</span>
        <span>{s.base.toFixed(1)} m</span>
      </span>

      <div className="stratum__inner">
        {s.sample && (
          <p className="sampletag mono" data-reveal>
            <span className="sampletag__no">{s.sample}</span>
            <span className="sampletag__depth">
              {s.top.toFixed(1)}–{s.base.toFixed(1)} m
            </span>
            <span className="sampletag__mat">{s.material}</span>
            <span className="sampletag__rec">{s.recovery}</span>
          </p>
        )}

        <div className="stratum__panel" data-reveal>
          {children}
        </div>

        {s.kind === "project" && <span className="corestrip" aria-hidden="true" />}

        {s.aside && (
          <p className="stratum__aside mono" data-reveal>
            ※ {s.aside}
          </p>
        )}
      </div>
    </section>
  );
}
