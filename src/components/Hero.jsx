import { useState, useEffect } from "react";
import Button from "./ui/Button";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Building Digital Experiences";

  useEffect(() => {
    let timeout;

    const typeSpeed = isDeleting ? 50 : 100;
    const pauseAfterTyping = 5000;
    const pauseAfterDeleting = 500;

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => setIsDeleting(false), pauseAfterDeleting);
    } else {
      timeout = setTimeout(() => {
        setText(current => {
          if (isDeleting) {
            return current.slice(0, -1);
          } else {
            return fullText.slice(0, current.length + 1);
          }
        });
      }, typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, fullText]);

  return (
    <section className="hero" id="top">
      <div className="hero__bg-word" aria-hidden="true">
        PRECISION
      </div>
      <div className="hero__code-bg" aria-hidden="true">
        <span className="hero__code-line">const developer = &#123;</span>
        <span className="hero__code-line">  name: "Naji Ullah",</span>
        <span className="hero__code-line">  role: "Full Stack Engineer",</span>
        <span className="hero__code-line">  location: "Lahore, PK",</span>
        <span className="hero__code-line">  skills: ["React", "Django", "Firebase"]</span>
        <span className="hero__code-line">&#125;;</span>
      </div>
      <div className="hero__content">
        <div className="hero__tag">
          <span className="hero__bracket">{"<"}</span>
          Full Stack Developer
          <span className="hero__bracket">{"/>"}</span>
        </div>
        <h1 className="hero__headline">
          {text.slice(0, 16)}
          <span className="hero__highlight">{text.slice(16)}</span>
          <span className="hero__cursor">_</span>
        </h1>
        <p className="hero__sub">
          Crafting robust, scalable web applications with React, Next.js, Django
          and Firebase. Focused on clean code, performance optimization, and
          delivering production-ready solutions.
        </p>
        <div className="hero__cta-row">
          <Button href="#projects">View Projects</Button>
          <Button href="#contact" variant="ghost">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
