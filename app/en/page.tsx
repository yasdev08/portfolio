import type { Metadata } from "next";
import CvPage from "@/components/CvPage";
import { en } from "@/data/cv";

export const metadata: Metadata = {
  title: en.metaTitle,
  description: en.metaDescription,
  openGraph: {
    title: en.metaTitle,
    description: en.metaDescription,
    url: "https://yasserm.vercel.app/en/",
    type: "profile",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/",
    languages: { fr: "/", en: "/en/" },
  },
};

export default function HomeEn() {
  return <CvPage cv={en} />;
}
