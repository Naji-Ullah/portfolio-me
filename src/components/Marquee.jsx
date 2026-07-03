import { MARQUEE_ITEMS } from "../data/portfolio";

// Duplicated once so the translateX(-50%) loop is seamless.
const LOOP = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {LOOP.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
            <span className="marquee__sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
