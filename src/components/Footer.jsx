import { PERSON } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__colophon">
        Set in Fraunces &amp; Newsreader. Hand-built, no template, kept
        deliberately quiet.
      </p>
      <p className="footer__copy">
        © {year} {PERSON.name} ·{" "}
        <a href="#top" className="link-underline">
          Back to top
        </a>
      </p>
    </footer>
  );
}
