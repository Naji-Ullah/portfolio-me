import SectionLabel from "./ui/SectionLabel";

const CONTACT_LINKS = [
  {
    label: "Direct Email",
    value: "najiu1836@gmail.com",
    href: "mailto:najiu1836@gmail.com",
  },
  {
    label: "Portfolio",
    value: "naji.codes",
    href: "https://naji.codes",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/naji-ullah-53222624b/",
    external: true,
  },
  {
    label: "Github",
    value: "Github",
    href: "https://github.com/naji-ullah",
    external: true,
  }
];

function ContactLink({ label, value, href, external }) {
  const props = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <a href={href} className="contact__link" {...props}>
      <span className="contact__link-label">{label}</span>
      <span className="contact__link-value">{value}</span>
    </a>
  );
}

function Divider() {
  return <div className="contact__divider" aria-hidden="true" />;
}

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__bg-word" aria-hidden="true">
        CONNECT
      </div>
      <div className="contact__content">
        <SectionLabel>Inquiry</SectionLabel>
        <h2 className="contact__headline">
          Ready to
          <br />
          Collaborate?
        </h2>
        <div className="contact__links">
          {CONTACT_LINKS.map((link, index) => (
            <div key={link.label}>
              <ContactLink {...link} />
              {index < CONTACT_LINKS.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
