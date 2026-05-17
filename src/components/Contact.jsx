import { PERSON } from "../data/portfolio";
import Monogram from "./Monogram";

const LINKS = [
  { label: "Email", value: PERSON.email, href: `mailto:${PERSON.email}` },
  { label: "Website", value: PERSON.site, href: `https://${PERSON.site}`, ext: true },
  { label: "GitHub", value: "Naji-Ullah", href: PERSON.github, ext: true },
  { label: "LinkedIn", value: "naji-ullah", href: PERSON.linkedin, ext: true },
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
