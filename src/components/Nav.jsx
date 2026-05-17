import { useState } from "react";
import useScrolled from "../hooks/useScrolled";
import useTheme from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS, PERSON } from "../data/portfolio";

export default function Nav() {
  const scrolled = useScrolled();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <a href="#top" className="nav__brand" onClick={close}>
        {PERSON.name}
      </a>

      <nav className="nav__links" aria-label="Sections">
        {NAV_LINKS.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="nav__link">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav__right">
        <ThemeToggle theme={theme} onToggle={toggle} />
        <button
          type="button"
          className="nav__menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="nav__sheet">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="nav__sheet-link"
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
