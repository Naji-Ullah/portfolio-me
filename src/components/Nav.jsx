import { useState } from "react";
import useScrolled from "../hooks/useScrolled";
import { NAV_LINKS } from "../data/portfolio";

function NavLinks({ links, onClick }) {
  return (
    <>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="nav__link"
          onClick={onClick}
        >
          {link}
        </a>
      ))}
    </>
  );
}

function MobileMenu({ isOpen, links, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="nav__mobile">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="nav__mobile-link"
          onClick={onClose}
        >
          {link}
        </a>
      ))}
    </div>
  );
}

function BurgerButton({ onClick }) {
  return (
    <button className="nav__burger" onClick={onClick} aria-label="Menu">
      <span />
      <span />
      <span />
    </button>
  );
}

export default function Nav() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <a href="#top" className="nav__logo">
        NAJI ULLAH
      </a>
      <div className="nav__links">
        <NavLinks links={NAV_LINKS} />
      </div>
      <BurgerButton onClick={toggleMenu} />
      <MobileMenu isOpen={menuOpen} links={NAV_LINKS} onClose={closeMenu} />
    </nav>
  );
}
