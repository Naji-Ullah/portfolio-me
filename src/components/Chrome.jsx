import DepthGauge from "./DepthGauge";
import useTheme from "../hooks/useTheme";
import { BOREHOLE } from "../data/strata";
import cx from "../lib/cx";

// The fixed instrument bar: brand, plain-log escape hatch, shift toggle,
// depth gauge. Theme labels are swapped by CSS ([data-theme]) so server
// and client markup always match.
export default function Chrome({ plain, onTogglePlain }) {
  const { toggle } = useTheme();

  return (
    <div className="chrome">
      <a className="chrome__brand mono" href="#surface">
        {BOREHOLE.id} · NAJI ULLAH
      </a>
      <div className="chrome__tools">
        <button
          type="button"
          className={cx("chip mono", plain && "chip--on")}
          aria-pressed={plain}
          onClick={onTogglePlain}
        >
          PLAIN LOG
        </button>
        <button
          type="button"
          className="chip mono"
          aria-label="Toggle day / night shift"
          onClick={toggle}
        >
          <span className="only-day">NIGHT SHIFT</span>
          <span className="only-night">DAY SHIFT</span>
        </button>
        <DepthGauge total={BOREHOLE.totalDepth} />
      </div>
    </div>
  );
}
