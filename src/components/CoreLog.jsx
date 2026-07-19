// The body of one project stratum. Every word is plain, crawlable HTML;
// the geology stays in the margins.
export default function CoreLog({ project: p }) {
  return (
    <article className="corelog">
      <h3 id={`${p.id}-title`} className="corelog__title">
        {p.title}{" "}
        <span className="corelog__domain mono">— {p.domain.toUpperCase()}</span>
      </h3>

      <p className="corelog__standfirst">{p.standfirst}</p>

      <p className="corelog__role mono">
        ROLE: {p.role.toUpperCase()} · {p.no.toUpperCase()}
      </p>

      <p className="corelog__log">{p.log}</p>

      {p.correction && (
        <p className="corelog__correction">
          <span className="corelog__correction-label mono">
            FIELD CORRECTION —{" "}
          </span>
          <del>{p.correction.logged}</del> <ins>{p.correction.corrected}</ins>
        </p>
      )}

      <h4 className="corelog__sub mono">FIELD OBSERVATIONS</h4>
      <ul className="corelog__notes">
        {p.notes.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>

      <h4 className="corelog__sub mono">INCLUSIONS DETECTED</h4>
      <ul className="chips">
        {p.tags.map((t) => (
          <li key={t} className="chip-static mono">
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}
