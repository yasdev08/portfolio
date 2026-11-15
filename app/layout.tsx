import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter-tight/index.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource-variable/jetbrains-mono/index.css";
import "./globals.css";
import { fr } from "@/data/cv";

export const metadata: Metadata = {
  metadataBase: new URL("https://yasserm.vercel.app"),
  title: fr.metaTitle,
  description: fr.metaDescription,
  openGraph: {
    title: fr.metaTitle,
    description: fr.metaDescription,
    url: "https://yasserm.vercel.app",
    type: "profile",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "/",
    languages: { fr: "/", en: "/en/" },
  },
};

export const viewport: Viewport = {
  themeColor: "#04060c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
