import type { Metadata } from "next";
import { contact, en } from "@/data/cv";
import WorkWall from "@/components/WorkWall";
import CopyButton from "@/components/CopyButton";

// /signage — the signage portfolio page linked in job applications to sign companies.
// Restored from the earlier React site (branch signage-section) in the current blueprint design.

const title = "Signage work — Yasser Mecherrem";
const description =
  "Installed sign projects from MB Pub, Oran: illuminated channel letters, ACM cladding, lightboxes, pylons and window vinyl. Design in CorelDRAW, production files, fabrication and installation coordination.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "https://yasserm.vercel.app/signage/", type: "profile", locale: "en_US" },
  alternates: { canonical: "/signage/" },
};

const projects = [
  {
    title: "Force Gym",
    caption: "Illuminated 3D channel letters with logo, installed from an aerial lift.",
    images: [
      { file: "force-gym", label: "Result" },
      { file: "force-gym-mockup", label: "Client mockup" },
      { file: "force-gym-install", label: "Installation" },
    ],
  },
  {
    title: "Pharmacie La Poste / Ma Parapharmacie",
    caption: "ACM (Alucobond) façade cladding, illuminated channel letters and a bilingual French/Arabic lightbox.",
    images: [
      { file: "pharmacie-la-poste", label: "Result" },
      { file: "pharmacie-cladding", label: "ACM cladding install" },
    ],
  },
  {
    title: "Wake Up Pastry & Brunch",
    caption: "Illuminated letters and five perforated window-vinyl panels (212 cm high).",
    images: [{ file: "wake-up", label: "Result" }],
  },
  {
    title: "Rezki Phone",
    caption: "Double-sided illuminated pylon with brand blades, plus the shop front.",
    images: [{ file: "rezki-phone", label: "Result" }],
  },
  {
    title: "CIM Santé",
    caption: "Round lightbox and LED-outlined façade.",
    images: [{ file: "cim-sante", label: "Result" }],
  },
  {
    title: "Wonder Food's Maraval",
    caption: "Illuminated pole sign.",
    images: [{ file: "wonder-food", label: "Result" }],
  },
];

export default function SignagePage() {
  const l = en.labels;
  const base = "../";
  return (
    <div className="site" lang="en">
      <header className="topbar">
        <a href="../en/" className="brand" aria-label={contact.name}>
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
          <a href="#projects">Projects</a>
          <a href="#work">{l.work}</a>
          <a href="#contact">{l.contact}</a>
          <a href="../cv.pdf">CV</a>
        </nav>
        <a href="../en/" className="lang">
          <span>Full profile</span>
        </a>
      </header>

      <main>
        <section className="sec signage-hero">
          <p className="eyebrow eyebrow-rule">Signage · MB Pub, Oran</p>
          <h1 className="hero-title">
            From client brief to <em>installed sign.</em>
          </h1>
          <p className="hero-text">
            Sign designer &amp; production coordinator at MB Pub (Oran). Design in CorelDRAW, quotations, production
            files, fabrication and coordination of production and installation.
          </p>
          <p className="signage-materials">Materials: acrylic (PMMA), ACM (Alucobond), Forex/PVC, vinyl, LED.</p>
        </section>

        <section id="projects" className="sec">
          <header className="sec-head">
            <p className="eyebrow">
              <span className="eyebrow-n">01</span>
              Installed projects
            </p>
          </header>
          <ul className="sg-grid">
            {projects.map((p) => (
              <li key={p.title} className="sg-card">
                <div className={`sg-images sg-n${p.images.length}`}>
                  {p.images.map((img) => (
                    <figure key={img.file}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${base}signs/${img.file}.jpg`}
                        width={600}
                        height={800}
                        loading="lazy"
                        decoding="async"
                        alt={`${p.title}: ${img.label}`}
                      />
                      {p.images.length > 1 && <figcaption>{img.label}</figcaption>}
                    </figure>
                  ))}
                </div>
                <h2 className="card-title">{p.title}</h2>
                <p className="card-desc">{p.caption}</p>
              </li>
            ))}
          </ul>
          <p className="sg-note">Projects produced at MB Pub, Oran (2026). Shared with the owner&apos;s permission.</p>
        </section>

        <section id="work" className="sec">
          <header className="sec-head">
            <p className="eyebrow">
              <span className="eyebrow-n">02</span>
              {l.work}
            </p>
            <h2 className="sec-title">{l.workTitle}</h2>
            <p className="sec-lead">{l.workLead}</p>
          </header>
          <WorkWall cv={en} base={base} />
        </section>

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
        <a href="../en/">Full profile →</a>
      </footer>
    </div>
  );
}
