import useReveal from "../hooks/useReveal";
import { INSTRUMENTS } from "../data/portfolio";

function Row({ label, note, items }) {
  const [ref, shown] = useReveal();
  return (
    <div ref={ref} className={`inst__row${shown ? " is-in" : ""}`}>
      <div className="inst__head">
        <h3 className="inst__label">{label}</h3>
        <p className="inst__note">{note}</p>
      </div>
      <p className="inst__items">
        {items.map((item, i) => (
          <span key={item}>
            {item}
            {i < items.length - 1 && (
              <span className="inst__dot" aria-hidden="true">
                &nbsp;·&nbsp;
              </span>
            )}
          </span>
        ))}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="instruments">
      <header className="section__head">
        <span className="kicker">The toolkit, honestly</span>
        <h2 className="section__title">The Instruments</h2>
        <p className="section__intro">
          Tools I actually reach for — not a wishlist, not a word cloud.
        </p>
      </header>

      <div className="inst">
        {INSTRUMENTS.map((group) => (
          <Row
            key={group.label}
            label={group.label}
            note={group.note}
            items={group.items}
          />
        ))}
      </div>
    </section>
  );
}
