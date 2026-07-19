import { useEffect, useMemo, useState } from "react";
import { EDUCATION, EXPERIENCE, PROJECTS } from "./data/portfolio";
import { NAV_STRATA, STRATA, stratumFor } from "./data/strata";
import { projectsForSkill } from "./lib/assay";
import AssayReport from "./components/AssayReport";
import Chrome from "./components/Chrome";
import CoreLog from "./components/CoreLog";
import EndOfBorehole from "./components/EndOfBorehole";
import StrataColumn from "./components/StrataColumn";
import Stratum from "./components/Stratum";
import TitlePlate from "./components/TitlePlate";
import useActiveStratum from "./hooks/useActiveStratum";
import useReveal from "./hooks/useReveal";
import "./styles/borehole.css";

const NAV_IDS = NAV_STRATA.map((s) => s.id);
const PROJECT_STRATA = STRATA.filter((s) => s.kind === "project");
const PROJECT_BY_ID = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));

export default function App() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [plain, setPlain] = useState(false);
  const activeId = useActiveStratum(NAV_IDS);
  useReveal();

  useEffect(() => {
    const el = document.documentElement;
    if (plain) el.setAttribute("data-plain", "true");
    else el.removeAttribute("data-plain");
  }, [plain]);

  const litIds = useMemo(() => {
    if (!activeSkill) return null;
    return new Set(projectsForSkill(activeSkill, PROJECTS).map((p) => p.id));
  }, [activeSkill]);

  return (
    <>
      <Chrome plain={plain} onTogglePlain={() => setPlain((v) => !v)} />
      <StrataColumn activeId={activeId} litIds={litIds} />

      <main className="log">
        <TitlePlate />

        <section className="corezone" aria-labelledby="topsoil-title">
          <h2 id="topsoil-title" className="zone__title" style={{ paddingInline: "var(--gutter)" }}>
            Experience <span className="zone__flavor mono">— RECENT DEPOSITS</span>
          </h2>
          {EXPERIENCE.map((exp, i) => (
            <Stratum key={exp.id} s={stratumFor(exp.id)} index={i}>
              <p className="corelog__role mono">
                {exp.role.toUpperCase()} · {exp.company.toUpperCase()} ·{" "}
                {exp.period.toUpperCase()}
              </p>
              {exp.log.map((t) => (
                <p key={t.slice(0, 24)} className="corelog__log">
                  {t}
                </p>
              ))}
            </Stratum>
          ))}
        </section>

        <section className="corezone" aria-labelledby="work-title">
          <h2 id="work-title" className="sr-only">
            Selected work — seven project case studies
          </h2>
          {PROJECT_STRATA.map((s, i) => (
            <Stratum
              key={s.id}
              s={s}
              index={i + 1}
              dim={Boolean(litIds) && !litIds.has(s.id)}
              lit={Boolean(litIds) && litIds.has(s.id)}
            >
              <CoreLog project={PROJECT_BY_ID[s.id]} />
            </Stratum>
          ))}
        </section>

        <Stratum s={stratumFor("assay")} index={8}>
          <AssayReport activeSkill={activeSkill} onSelect={setActiveSkill} />
        </Stratum>

        <Stratum s={stratumFor("bedrock")} index={9}>
          <h2 id="bedrock-title" className="zone__title">
            Education <span className="zone__flavor mono">— BEDROCK</span>
          </h2>
          <p className="corelog__role mono">
            {EDUCATION.degree.toUpperCase()} · {EDUCATION.school.toUpperCase()} ·{" "}
            {EDUCATION.period}
          </p>
          <p className="corelog__log">
            Bedrock, still forming. {EDUCATION.aside} Refusal not expected
            before 2028.
          </p>
        </Stratum>

        <EndOfBorehole />
      </main>

      {activeSkill && litIds && (
        <p className="tracechip mono" role="status">
          TRACING: {activeSkill} — {litIds.size}{" "}
          {litIds.size === 1 ? "STRATUM" : "STRATA"}
          <button type="button" onClick={() => setActiveSkill(null)}>
            CLEAR ✕
          </button>
        </p>
      )}
    </>
  );
}
