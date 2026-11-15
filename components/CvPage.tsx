import { contact, type Cv } from "@/data/cv";
import SignScene from "./SignScene";
import WorkWall from "./WorkWall";
import CopyButton from "./CopyButton";

function SectionHead({ n, label, title, lead }: { n: string; label: string; title?: string; lead?: string }) {
  return (
    <header className="sec-head">
      <p className="eyebrow">
        <span className="eyebrow-n">{n}</span>
        {label}
      </p>
      {title && <h2 className="sec-title">{title}</h2>}
      {lead && <p className="sec-lead">{lead}</p>}
    </header>
  );
}

function Timeline({ entries }: { entries: Cv["education"] }) {
  return (
    <ol className="timeline">
      {entries.map((e) => (
        <li key={e.period + e.title} className="t-row">
          <p className="t-period">{e.period}</p>
          <div>
            <h3 className="t-title">{e.title}</h3>
            <p className="t-place">{e.place}</p>
            {e.points.length > 0 && (
              <ul className="t-points">
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function CvPage({ cv }: { cv: Cv }) {
  const l = cv.labels;
  // Relative paths so the static export works from any folder (Vercel root or a preview host).
  const base = cv.locale === "fr" ? "./" : "../";
  const home = "./";
  return (
    <div className="site" lang={cv.locale}>
      <header className="topbar">
        <a href={home} className="brand" aria-label={contact.name}>
          <span className="brand-mark" aria-hidden="true">
            Y<b>M</b>
          </span>
          <span className="brand-name">
            Yasser
            <br />
            Mecherrem
          </span>
        </a>
        <nav className="topnav" aria-label="Sections">
          <a href="#projects">{l.projects}</a>
          <a href="#work">{l.work}</a>
          <a href="#experience">{l.experience}</a>
          <a href="#contact">{l.contact}</a>
        </nav>
        <a href={cv.locale === "fr" ? "./en/" : "../"} className="lang" hrefLang={cv.locale === "fr" ? "en" : "fr"}>
          <span aria-current={cv.locale === "fr" ? "true" : undefined}>FR</span>
          <span aria-current={cv.locale === "en" ? "true" : undefined}>EN</span>
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-rule">{cv.eyebrow}</p>
            <h1 className="hero-title">
              {cv.heroLead} <em>{cv.heroAccent}</em>
            </h1>
            <p className="hero-text">{cv.heroText}</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                {cv.ctaPrimary} <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                {cv.ctaSecondary}
              </a>
            </div>
          </div>

          <figure className="hero-fig">
            <div className="fig-frame">
              <SignScene hint={cv.figHint} />
              <span className="dim dim-w" aria-hidden="true">
                <i />2 480 MM<i />
              </span>
              <span className="dim dim-h" aria-hidden="true">
                <i />1 200 MM<i />
              </span>
              <span className="anno anno-a" aria-hidden="true">
                LED 6500K
              </span>
              <span className="anno anno-b" aria-hidden="true">
                #2B63F0
              </span>
              <span className="anno anno-c" aria-hidden="true">
                DEPTH 260
              </span>
            </div>
            <figcaption className="fig-cap">{cv.figCaption}</figcaption>
          </figure>

          <dl className="hero-strip">
            {cv.disciplines.map((d, i) => (
              <div key={d}>
                <dt>{String(i + 1).padStart(2, "0")}</dt>
                <dd>{d}</dd>
              </div>
            ))}
            <div className="strip-wide">
              <dt>{cv.basedIn}</dt>
              <dd>{cv.location}</dd>
            </div>
          </dl>
        </section>

        {/* Profile */}
        <section id="profile" className="sec">
          <SectionHead n="01" label={l.profile} />
          <div className="profile">
            <p className="profile-text">{cv.intro}</p>
            <dl className="facts">
              {cv.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Soft skills */}
        <section id="soft-skills" className="sec">
          <SectionHead n="02" label={l.softSkills} />
          <ol className="soft">
            {cv.softSkills.map((s, i) => (
              <li key={s.name}>
                <span className="soft-n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.name}</h3>
                <p>{s.proof}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects */}
        <section id="projects" className="sec">
          <SectionHead n="03" label={l.projects} title={l.projectsTitle} lead={l.projectsLead} />
          <ul className="legend" aria-hidden="true">
            {(["live", "progress", "done", "academic"] as const).map((s) => (
              <li key={s} className={`pill pill-${s}`}>
                {l.status[s]}
              </li>
            ))}
          </ul>
          <ul className="cards">
            {cv.projects.map((p) => (
              <li key={p.name} className="card">
                <div className="card-top">
                  <span className={`pill pill-${p.status}`}>{l.status[p.status]}</span>
                  <span className="card-year">{p.year}</span>
                </div>
                <h3 className="card-title">{p.name}</h3>
                <p className="card-desc">{p.description}</p>
                <p className="card-stack">{p.stack.join(" · ")}</p>
                {p.href && (
                  <a className="card-link" href={p.href} target="_blank" rel="noopener">
                    {p.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Signage work */}
        <section id="work" className="sec">
          <SectionHead n="04" label={l.work} title={l.workTitle} lead={l.workLead} />
          <WorkWall cv={cv} base={base} />
        </section>

        {/* Experience */}
        <section id="experience" className="sec">
          <SectionHead n="05" label={l.experience} />
          <Timeline entries={cv.experience} />
        </section>

        {/* Education */}
        <section id="education" className="sec">
          <SectionHead n="06" label={l.education} />
          <Timeline entries={cv.education} />
        </section>

        {/* Skills + languages */}
        <section id="skills" className="sec">
          <SectionHead n="07" label={l.skills} />
          <div className="skills-grid">
            <dl className="skills">
              {cv.skills.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.items.join(" · ")}</dd>
                </div>
              ))}
            </dl>
            <div>
              <p className="mini-label">{l.languages}</p>
              <ul className="langs">
                {cv.languages.map((x) => (
                  <li key={x.name}>
                    <span>{x.name}</span>
                    <span>{x.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <p className="eyebrow eyebrow-rule">{l.contact}</p>
          <h2 className="contact-title">{l.contactTitle}</h2>
          <p className="sec-lead">{l.contactText}</p>
          <dl className="contact-list">
            <div>
              <dt>{l.email}</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <CopyButton text={contact.email} label={l.copy} done={l.copied} />
              </dd>
            </div>
            <div>
              <dt>{l.phone}</dt>
              <dd>
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
                <CopyButton text={contact.phone} label={l.copy} done={l.copied} />
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={contact.github} target="_blank" rel="noopener">
                  {contact.githubLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={contact.linkedin} target="_blank" rel="noopener">
                  {contact.linkedinLabel}
                </a>
              </dd>
            </div>
          </dl>
        </section>
      </main>

      <footer className="foot">
        <span>© 2026 {contact.name}</span>
        <span>{l.updated}</span>
      </footer>
    </div>
  );
}
