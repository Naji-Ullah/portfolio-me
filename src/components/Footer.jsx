const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/Naji-Ullah" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/naji-ullah-53222624b/" },
  { label: "Website", href: "https://naji.codes" },
];

function FooterLink({ label, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="footer__link">
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__copy">© 2026 Naji Ullah. Architectural Precision.</span>
      <div className="footer__links">
        {FOOTER_LINKS.map((link) => (
          <FooterLink key={link.label} {...link} />
        ))}
      </div>
    </footer>
  );
}
