// Single source of truth for the site. Edit here; both languages render from this file.

export type Locale = "fr" | "en";

export const contact = {
  name: "Yasser Mecherrem",
  email: "yasser.mechrem29@gmail.com",
  phone: "+213 555 34 37 65",
  phoneHref: "+213555343765",
  github: "https://github.com/yasdev08",
  githubLabel: "github.com/yasdev08",
  linkedin: "https://www.linkedin.com/in/yasser-mechrem-306358209/",
  linkedinLabel: "linkedin.com/in/yasser-mechrem",
  site: "https://yasserm.vercel.app",
};

export type Status = "live" | "progress" | "done" | "academic";

type Entry = { period: string; title: string; place: string; points: string[] };

type Project = {
  name: string;
  year: string;
  status: Status;
  description: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
};

export type WorkCategory = "installed" | "print";

export type Work = {
  file: string;
  w: number;
  h: number;
  category: WorkCategory;
  client: string;
  spec: string;
  size?: string;
};

type SkillGroup = { label: string; items: string[] };

export type Cv = {
  locale: Locale;
  otherLocale: { href: string; label: string };
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroLead: string;
  heroAccent: string;
  heroText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  figCaption: string;
  figHint: string;
  disciplines: string[];
  basedIn: string;
  location: string;
  intro: string;
  facts: { value: string; label: string }[];
  labels: {
    profile: string;
    softSkills: string;
    experience: string;
    education: string;
    projects: string;
    projectsTitle: string;
    projectsLead: string;
    work: string;
    workTitle: string;
    workLead: string;
    skills: string;
    languages: string;
    contact: string;
    contactTitle: string;
    contactText: string;
    email: string;
    phone: string;
    copy: string;
    copied: string;
    close: string;
    all: string;
    installed: string;
    print: string;
    updated: string;
    status: Record<Status, string>;
  };
  softSkills: { name: string; proof: string }[];
  education: Entry[];
  experience: Entry[];
  projects: Project[];
  work: Work[];
  skills: SkillGroup[];
  languages: { name: string; level: string }[];
};

const links = {
  studio: "https://yesir-design-3d.vercel.app",
  storeiq: "https://github.com/yasdev08/StoreIQ",
  souk: "https://github.com/yasdev08/soukb2b",
  tips: "https://github.com/yasdev08/tips-prediction",
  sorting: "https://github.com/yasdev08/sorting-algos",
  scriptily: "https://github.com/yasdev08/scriptily",
  mbpub: "https://brahimpub.vercel.app",
};

// Photos of work produced at MB Pub, Oran (2026). Sizes are the print sizes on the production files.
const workBase: Omit<Work, "spec">[] = [
  { file: "pizzeria-fantasia-facade", w: 900, h: 1200, category: "installed", client: "Pizzeria Fantasia" },
  { file: "saphir-bleu-letters", w: 900, h: 1200, category: "installed", client: "Saphir Bleu" },
  { file: "rezki-phone-wall", w: 900, h: 1200, category: "installed", client: "Rezki Phone" },
  { file: "falcon-thalassa-panel", w: 900, h: 1200, category: "installed", client: "Falcon Thalassa" },
  { file: "zizou-snack-facade", w: 900, h: 1200, category: "installed", client: "Zizou Snack" },
  { file: "latino-luxury-lightbox", w: 900, h: 1200, category: "installed", client: "Latino Luxury" },
  { file: "pizza-fantasia-lightbox", w: 900, h: 1200, category: "installed", client: "Pizza Fantasia" },
  { file: "rezki-phone-neon", w: 900, h: 1200, category: "installed", client: "Rezki Phone" },
  { file: "latino-luxury-print", w: 1200, h: 975, category: "print", client: "Latino Luxury", size: "160 × 130 cm" },
  { file: "wonder-food-menu", w: 1200, h: 676, category: "print", client: "Wonder Food" },
  { file: "ali-mini-shop-perf", w: 1200, h: 942, category: "print", client: "Ali Mini Shop", size: "135 × 106 cm" },
  { file: "pizza-fantasia-uv", w: 1200, h: 1131, category: "print", client: "Pizza Fantasia", size: "120 × 113 cm" },
  { file: "good-sport-banner", w: 480, h: 1200, category: "print", client: "Good Sport", size: "200 × 80 cm" },
  { file: "barber-shop-vinyl", w: 1200, h: 801, category: "print", client: "Barber Shop", size: "120 × 180 cm" },
  { file: "panoramic-backlight", w: 1200, h: 433, category: "print", client: "Shop display" },
  { file: "mb-pub-poster", w: 900, h: 1200, category: "print", client: "MB Pub", size: "150 × 200 cm" },
];

const specFr: Record<string, string> = {
  "pizzeria-fantasia-facade": "Enseigne de façade, lettres lumineuses",
  "saphir-bleu-letters": "Lettres 3D lumineuses LED",
  "rezki-phone-wall": "Logo néon LED sur mur végétal",
  "falcon-thalassa-panel": "Panneau d'accueil, découpe sur bois",
  "zizou-snack-facade": "Enseigne de façade lumineuse",
  "latino-luxury-lightbox": "Caisson lumineux",
  "pizza-fantasia-lightbox": "Logo lumineux découpé",
  "rezki-phone-neon": "Logo néon LED",
  "latino-luxury-print": "Backlight",
  "wonder-food-menu": "Menu mural, boissons",
  "ali-mini-shop-perf": "Vitrophanie microperforée",
  "pizza-fantasia-uv": "Adhésif transparent, impression UV",
  "good-sport-banner": "Bâche",
  "barber-shop-vinyl": "Adhésif",
  "panoramic-backlight": "Backlight panoramique",
  "mb-pub-poster": "Affiche de l'agence",
};

const specEn: Record<string, string> = {
  "pizzeria-fantasia-facade": "Shopfront sign, illuminated letters",
  "saphir-bleu-letters": "Illuminated 3D LED letters",
  "rezki-phone-wall": "LED neon logo on a green wall",
  "falcon-thalassa-panel": "Welcome panel, cut lettering on wood",
  "zizou-snack-facade": "Illuminated shopfront sign",
  "latino-luxury-lightbox": "Backlit lightbox",
  "pizza-fantasia-lightbox": "Illuminated cut-out logo",
  "rezki-phone-neon": "LED neon logo",
  "latino-luxury-print": "Backlit film",
  "wonder-food-menu": "Menu board, drinks",
  "ali-mini-shop-perf": "Perforated window film",
  "pizza-fantasia-uv": "Clear vinyl, UV print",
  "good-sport-banner": "PVC banner",
  "barber-shop-vinyl": "Adhesive vinyl",
  "panoramic-backlight": "Panoramic backlit film",
  "mb-pub-poster": "Agency poster",
};

export const fr: Cv = {
  locale: "fr",
  otherLocale: { href: "/en/", label: "EN" },
  metaTitle: "Yasser Mecherrem · Développeur web et étudiant en Master informatique",
  metaDescription:
    "Portfolio de Yasser Mecherrem : étudiant en Master 2 Ingénierie des Systèmes Intelligents, développeur web full-stack (Next.js, React, TypeScript, Python) et production signalétique.",
  eyebrow: "Master 2 Systèmes Intelligents · Développeur full-stack · Algérie",
  heroLead: "Je code pour l'écran",
  heroAccent: "et pour la rue.",
  heroText:
    "Je conçois des sites et applications web pour des commerces algériens depuis 2023, et je prépare des enseignes en atelier. Je cherche un Master en France pour aller plus loin en génie logiciel.",
  ctaPrimary: "Voir les projets",
  ctaSecondary: "Me contacter",
  figCaption: "FIG. 01 — Initiales en lettres boîtiers lumineuses",
  figHint: "Glissez pour tourner",
  disciplines: ["Web", "IA", "Signalétique"],
  basedIn: "Basé à",
  location: "Mascara · Oran, Algérie",
  intro:
    "Titulaire d'une licence en informatique, je conçois et livre depuis 2023 des sites et applications web pour des commerces algériens, et je développe des projets personnels en apprentissage automatique. Je souhaite intégrer un Master en France pour approfondir le génie logiciel, le développement web et mobile et le cloud, avec une première expérience en entreprise par le stage.",
  facts: [
    { value: "2023", label: "Freelance web depuis" },
    { value: "M2", label: "Systèmes Intelligents, en cours" },
    { value: "3", label: "Langues : arabe, français, anglais" },
  ],
  labels: {
    profile: "Profil",
    softSkills: "Savoir-être",
    experience: "Expérience",
    education: "Formation",
    projects: "Projets",
    projectsTitle: "Des projets réels, présentés tels quels.",
    projectsLead: "Chaque projet indique son état : en ligne, en cours, terminé ou académique.",
    work: "Atelier",
    workTitle: "De l'écran à la façade.",
    workLead:
      "Réalisations de MB Pub à Oran en 2026, où je prépare les maquettes et les fichiers de production et je travaille en atelier. Les tailles sont celles des fichiers d'impression.",
    skills: "Compétences",
    languages: "Langues",
    contact: "Contact",
    contactTitle: "Parlons de votre programme ou de votre projet.",
    contactText: "Je réponds par e-mail ou par téléphone, en français, en anglais ou en arabe.",
    email: "E-mail",
    phone: "Téléphone",
    copy: "Copier",
    copied: "Copié",
    close: "Fermer",
    all: "Tout",
    installed: "Installé",
    print: "Fichiers d'impression",
    updated: "Mis à jour en novembre 2026",
    status: { live: "En ligne", progress: "En cours", done: "Terminé", academic: "Académique" },
  },
  softSkills: [
    { name: "Relation client", proof: "Recueil du besoin, devis et suivi de commandes chez MB Pub ; accompagnement de clients freelance de la proposition à la mise en ligne." },
    { name: "Autonomie", proof: "Gestion seul de projets web de bout en bout depuis 2023, de la négociation au déploiement." },
    { name: "Adaptabilité", proof: "Passage du développement web à la production en atelier (CNC, plotter, enseignes LED) en quelques mois." },
    { name: "Travail en équipe", proof: "Coordination quotidienne entre les clients, le gérant et l'atelier de fabrication." },
    { name: "Persévérance", proof: "Reprise du parcours universitaire après un échec en Master 1 : M1 validé à Mascara avec 14,11/20 au second semestre." },
    { name: "Communication multilingue", proof: "Échanges professionnels en arabe, en français et en anglais." },
  ],
  education: [
    {
      period: "2025 – 2027",
      title: "Master Ingénierie des Systèmes Intelligents",
      place: "Université Mustapha Stambouli, Mascara",
      points: [
        "Master 1 validé (2025 – 2026), moyenne 12,33/20, dont 14,11/20 au second semestre",
        "Master 2 en cours : mémoire de fin d'études et stage au second semestre",
      ],
    },
    {
      period: "2023 – 2025",
      title: "Master 1 Intelligence Artificielle et ses Applications",
      place: "USTO-MB, Oran",
      points: ["Année non validée ; réorientation vers le Master de Mascara en 2025"],
    },
    {
      period: "2020 – 2023",
      title: "Licence en Informatique, spécialité Systèmes Informatiques",
      place: "USTO-MB, Oran",
      points: ["Projet de fin d'études : Swift Click, plateforme de dropshipping"],
    },
    {
      period: "2020",
      title: "Baccalauréat Technique Mathématique, option Génie Électrique",
      place: "Moyenne 15,44/20",
      points: [],
    },
  ],
  experience: [
    {
      period: "Depuis juin 2026",
      title: "Conception graphique, production et développement web",
      place: "MB Pub, agence de signalétique et d'impression, Oran",
      points: [
        "Conception du site vitrine de l'agence en Next.js (brahimpub.vercel.app)",
        "Maquettes et fichiers de production sous CorelDRAW ; préparation des fichiers de découpe CNC",
        "Découpe sur routeur CNC et plotter : Alucobond, Forex/PVC, plexiglas, vinyle ; enseignes et lettres lumineuses LED",
        "Accueil des clients, devis, suivi des commandes et coordination avec l'atelier",
      ],
    },
    {
      period: "Depuis 2023",
      title: "Développeur web indépendant",
      place: "YESIR DESIGN, Oran et Mascara",
      points: [
        "Menus digitaux par QR code pour des restaurants : Wonder Food, Eyüp Sultan (bilingue français-arabe)",
        "Site de prise de rendez-vous pour le salon Maison Mia, Oran",
        "Recueil du besoin, proposition commerciale, développement, déploiement sur Vercel et suivi du client",
        "Campagnes Meta Ads et supports visuels pour des commerces locaux",
      ],
    },
    {
      period: "2023 – 2025",
      title: "Projet entrepreneurial e-commerce",
      place: "Oran",
      points: ["Lancement et gestion d'une activité de vente en ligne, menée en parallèle des études"],
    },
  ],
  projects: [
    { name: "3D Sign Studio", year: "2026", status: "live", description: "Studio en ligne de visualisation 3D d'enseignes pour les agences de signalétique, avec une version Pro par abonnement.", stack: ["Application web 3D"], href: links.studio, linkLabel: "Ouvrir le studio" },
    { name: "StoreIQ", year: "2026", status: "progress", description: "Application de bureau hors-ligne de gestion de stock pour les petits commerces.", stack: ["Tauri (Rust)", "React", "SQLite"], href: links.storeiq, linkLabel: "Code source" },
    { name: "SoukB2B", year: "2026", status: "progress", description: "Place de marché B2B qui relie fournisseurs et e-commerçants algériens.", stack: ["Next.js", "Supabase"], href: links.souk, linkLabel: "Code source" },
    { name: "Site MB Pub", year: "2026", status: "live", description: "Site vitrine et portfolio d'une agence de signalétique et d'impression à Oran.", stack: ["Next.js"], href: links.mbpub, linkLabel: "Voir le site" },
    { name: "Tips Prediction", year: "2026", status: "done", description: "Machine learning de bout en bout : comparaison de modèles de régression pour prédire un pourboire, avec une interface de démonstration.", stack: ["Python", "Gradio"], href: links.tips, linkLabel: "Code source" },
    { name: "Sorting Algorithms Analyser", year: "2025", status: "done", description: "Comparaison et visualisation des performances d'algorithmes de tri selon la taille des données.", stack: ["Next.js", "TypeScript"], href: links.sorting, linkLabel: "Code source" },
    { name: "Scriptily", year: "2024", status: "done", description: "Générateur de scripts publicitaires par IA pour des produits e-commerce.", stack: ["Hugging Face (GPT-2, T5)", "TypeScript"], href: links.scriptily, linkLabel: "Code source" },
    { name: "Swift Click", year: "2023", status: "academic", description: "Plateforme de dropshipping, projet de fin d'études de licence.", stack: ["Application web"] },
  ],
  work: workBase.map((w) => ({ ...w, spec: specFr[w.file] })),
  skills: [
    { label: "Langages", items: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "Rust (notions)"] },
    { label: "Web", items: ["Next.js", "React", "Tailwind CSS", "Node.js", "Supabase", "SQLite"] },
    { label: "IA et données", items: ["Apprentissage automatique", "Traitement du langage naturel", "Hugging Face Transformers", "Gradio"] },
    { label: "Outils", items: ["Git et GitHub", "Vercel"] },
    { label: "Conception et fabrication", items: ["CorelDRAW", "Fichiers CNC", "AutoCAD (notions)", "VCarve/Aspire (notions)"] },
    { label: "Marketing digital", items: ["Meta Ads", "E-commerce", "QR codes"] },
  ],
  languages: [
    { name: "Arabe", level: "Langue maternelle" },
    { name: "Français", level: "B2 · TCF" },
    { name: "Anglais", level: "C1 · EF SET 64/100" },
  ],
};

export const en: Cv = {
  locale: "en",
  otherLocale: { href: "/", label: "FR" },
  metaTitle: "Yasser Mecherrem · Web developer and computer science Master's student",
  metaDescription:
    "Portfolio of Yasser Mecherrem: Master's student in Intelligent Systems Engineering, full-stack web developer (Next.js, React, TypeScript, Python) and signage production.",
  eyebrow: "Master's in Intelligent Systems · Full-stack developer · Algeria",
  heroLead: "I build for the screen",
  heroAccent: "and the street.",
  heroText:
    "I have designed and shipped websites and web apps for Algerian businesses since 2023, and I prepare signs in a production workshop. I am applying for a Master's abroad to go deeper into software engineering.",
  ctaPrimary: "See the projects",
  ctaSecondary: "Get in touch",
  figCaption: "FIG. 01 — Initials as illuminated channel letters",
  figHint: "Drag to rotate",
  disciplines: ["Web", "AI", "Signage"],
  basedIn: "Based in",
  location: "Mascara · Oran, Algeria",
  intro:
    "I hold a Bachelor's degree in computer science. Since 2023 I have designed and shipped websites and web applications for Algerian businesses, and I build personal machine learning projects. I am applying to a Master's programme abroad to go deeper into software engineering, web and mobile development and cloud, with a first industry experience through the internship.",
  facts: [
    { value: "2023", label: "Freelance web since" },
    { value: "M2", label: "Intelligent Systems, in progress" },
    { value: "3", label: "Languages: Arabic, French, English" },
  ],
  labels: {
    profile: "Profile",
    softSkills: "Soft skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    projectsTitle: "Real projects, presented as they are.",
    projectsLead: "Each project shows its status: live, in progress, completed or academic.",
    work: "Workshop",
    workTitle: "From screen to facade.",
    workLead:
      "Work produced at MB Pub in Oran in 2026, where I prepare mock-ups and production files and work in the workshop. Sizes are the print sizes on the production files.",
    skills: "Skills",
    languages: "Languages",
    contact: "Contact",
    contactTitle: "Let's talk about your programme or your project.",
    contactText: "I reply by email or phone, in English, French or Arabic.",
    email: "Email",
    phone: "Phone",
    copy: "Copy",
    copied: "Copied",
    close: "Close",
    all: "All",
    installed: "Installed",
    print: "Print files",
    updated: "Updated November 2026",
    status: { live: "Live", progress: "In progress", done: "Completed", academic: "Academic" },
  },
  softSkills: [
    { name: "Client relations", proof: "Requirements, quotations and order follow-up at MB Pub; guiding freelance clients from proposal to launch." },
    { name: "Autonomy", proof: "Running web projects alone end to end since 2023, from negotiation to deployment." },
    { name: "Adaptability", proof: "Moved from web development to workshop production (CNC, plotter, LED signs) within a few months." },
    { name: "Teamwork", proof: "Daily coordination between clients, the manager and the fabrication workshop." },
    { name: "Perseverance", proof: "Got back on track after a failed Master's year: first year validated in Mascara, 14.11/20 in the second semester." },
    { name: "Multilingual communication", proof: "Professional exchanges in Arabic, French and English." },
  ],
  education: [
    {
      period: "2025 – 2027",
      title: "Master's in Intelligent Systems Engineering",
      place: "Mustapha Stambouli University, Mascara",
      points: [
        "First year validated (2025 – 2026), average 12.33/20, with 14.11/20 in the second semester",
        "Second year in progress: thesis and internship in the second semester",
      ],
    },
    {
      period: "2023 – 2025",
      title: "Master's year 1, Artificial Intelligence and its Applications",
      place: "USTO-MB, Oran",
      points: ["Year not validated; moved to the Mascara Master's programme in 2025"],
    },
    {
      period: "2020 – 2023",
      title: "Bachelor's in Computer Science, Computer Systems track",
      place: "USTO-MB, Oran",
      points: ["Final-year project: Swift Click, a dropshipping platform"],
    },
    {
      period: "2020",
      title: "Baccalaureate, Technical Mathematics (Electrical Engineering)",
      place: "Average 15.44/20",
      points: [],
    },
  ],
  experience: [
    {
      period: "Since June 2026",
      title: "Graphic design, production and web development",
      place: "MB Pub, signage and printing agency, Oran",
      points: [
        "Built the agency's website in Next.js (brahimpub.vercel.app)",
        "Mock-ups and production files in CorelDRAW; CNC cutting file preparation",
        "CNC router and plotter cutting: aluminium composite, PVC foam board, acrylic, vinyl; LED signs and channel letters",
        "Client intake, quotations, order follow-up and coordination with the workshop",
      ],
    },
    {
      period: "Since 2023",
      title: "Freelance web developer",
      place: "YESIR DESIGN, Oran and Mascara",
      points: [
        "QR-code digital menus for restaurants: Wonder Food, Eyüp Sultan (French and Arabic)",
        "Booking site for the Maison Mia salon, Oran",
        "Requirements, commercial proposal, development, deployment on Vercel and client follow-up",
        "Meta Ads campaigns and visual assets for local businesses",
      ],
    },
    {
      period: "2023 – 2025",
      title: "E-commerce venture",
      place: "Oran",
      points: ["Launched and ran an online sales business alongside my studies"],
    },
  ],
  projects: [
    { name: "3D Sign Studio", year: "2026", status: "live", description: "Online studio for 3D visualisation of signs, built for signage agencies, with a subscription Pro plan.", stack: ["3D web application"], href: links.studio, linkLabel: "Open the studio" },
    { name: "StoreIQ", year: "2026", status: "progress", description: "Offline desktop inventory management application for small shops.", stack: ["Tauri (Rust)", "React", "SQLite"], href: links.storeiq, linkLabel: "Source code" },
    { name: "SoukB2B", year: "2026", status: "progress", description: "B2B marketplace connecting suppliers and e-commerce sellers in Algeria.", stack: ["Next.js", "Supabase"], href: links.souk, linkLabel: "Source code" },
    { name: "MB Pub website", year: "2026", status: "live", description: "Website and portfolio for a signage and printing agency in Oran.", stack: ["Next.js"], href: links.mbpub, linkLabel: "Visit site" },
    { name: "Tips Prediction", year: "2026", status: "done", description: "End-to-end machine learning project comparing regression models to predict restaurant tips, with a demo interface.", stack: ["Python", "Gradio"], href: links.tips, linkLabel: "Source code" },
    { name: "Sorting Algorithms Analyser", year: "2025", status: "done", description: "Compares and visualises the performance of sorting algorithms across input sizes.", stack: ["Next.js", "TypeScript"], href: links.sorting, linkLabel: "Source code" },
    { name: "Scriptily", year: "2024", status: "done", description: "AI generator of advertising scripts for e-commerce products.", stack: ["Hugging Face (GPT-2, T5)", "TypeScript"], href: links.scriptily, linkLabel: "Source code" },
    { name: "Swift Click", year: "2023", status: "academic", description: "Dropshipping platform, Bachelor's final-year project.", stack: ["Web application"] },
  ],
  work: workBase.map((w) => ({ ...w, spec: specEn[w.file] })),
  skills: [
    { label: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "Rust (basics)"] },
    { label: "Web", items: ["Next.js", "React", "Tailwind CSS", "Node.js", "Supabase", "SQLite"] },
    { label: "AI and data", items: ["Machine learning", "Natural language processing", "Hugging Face Transformers", "Gradio"] },
    { label: "Tools", items: ["Git and GitHub", "Vercel"] },
    { label: "Design and fabrication", items: ["CorelDRAW", "CNC files", "AutoCAD (basics)", "VCarve/Aspire (basics)"] },
    { label: "Digital marketing", items: ["Meta Ads", "E-commerce", "QR codes"] },
  ],
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "B2 · TCF" },
    { name: "English", level: "C1 · EF SET 64/100" },
  ],
};
