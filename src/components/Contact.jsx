import { PERSON } from "../data/portfolio";
import Monogram from "./Monogram";

const GMAIL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  PERSON.email
)}&su=${encodeURIComponent("Project / opportunity")}&body=${encodeURIComponent(
  "Hi Naji,\n\nI came across the logbook and wanted to reach out about:\n\n— \n\n(Your message)\n"
)}`;

const LINKS = [
  { label: "Email", value: PERSON.email, href: `mailto:${PERSON.email}` },
  { label: "GitHub", value: "Naji-Ullah", href: PERSON.github, ext: true },
  {
    label: "LinkedIn",
    value: "naji-ullah",
    href: PERSON.linkedin,
    ext: true,
  },
];

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <header className="section__head">
        <span className="kicker">End of the entries</span>
        <h2 className="section__title section__title--accent">Send Word</h2>
        <p className="section__intro">
          If any of this is useful to you, get in touch. Email is fastest — I
          read everything, and reply to the messages that aren&rsquo;t selling
          me SEO.
        </p>
      </header>

      {/* Structured CTA block */}
      <div className="contact__cta">
        <a
          className="btn btn--primary"
          href={GMAIL}
          target="_blank"
          rel="noreferrer"
        >
          Compose in Gmail
          <span aria-hidden="true"> →</span>
        </a>
        <a
          className="btn btn--ghost"
          href={`mailto:${PERSON.email}?subject=${encodeURIComponent(
            "Project / opportunity"
          )}&body=${encodeURIComponent(
            "Hi Naji,\n\nI came across the logbook and wanted to reach out about:\n\n— \n\n(Your message)\n"
          )}`}
        >
          Default mail app
        </a>
        <span className="contact__cta-note">replies within ~24h</span>
      </div>

      <dl className="contact__list">
        {LINKS.map((l) => (
          <div key={l.label} className="contact__item">
            <dt>{l.label}</dt>
            <dd>
              <a
                href={l.href}
                className="link-underline"
                {...(l.ext ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {l.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <div className="seal-wrap">
        <Monogram />
        <p className="seal-wrap__sign">Thanks for reading this far.</p>
      </div>
    </section>
  );
}