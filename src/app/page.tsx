import AboutSection from "@/components/AboutSection";
import BioSection from "@/components/BioSection";
import ContactSection from "@/components/ContactSection";
import Email from "@/components/Email";
import GoUp from "@/components/GoUp";
import Social from "@/components/Social";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import { aboutSectionData } from "@/static/components/aboutSection/aboutSectionData";
import { bioSectionData } from "@/static/components/bioSection/bioSection";
import { socialLinksAndSvg } from "@/static/components/social/social";

const siteUrl = "https://alizabetpour.ir";
const description =
  "Ali Zabetpour is a Front-end Developer and Software Engineer building modern, responsive web applications with React, Next.js, and TypeScript.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Ali Zabetpour",
      url: siteUrl,
    },
    {
      "@type": "ProfilePage",
      url: siteUrl,
      mainEntity: {
        "@type": "Person",
        name: bioSectionData.name,
        url: siteUrl,
        jobTitle: bioSectionData.position,
        description,
        image: `${siteUrl}/assets/images/personalpic.jpg`,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "University of Mazandaran",
        },
        knowsAbout: aboutSectionData.skills.map(({ name }) => name),
        sameAs: socialLinksAndSvg.map(({ link }) => link),
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a className="skipLink" href="#main-content">Skip to content</a>
      <main id="main-content">
        <BioSection />
        <AboutSection />
        <WorkExperienceSection />
        <ContactSection />
      </main>
      <footer aria-label="Social links and return to top">
        <GoUp />
        <Email />
        <Social />
      </footer>
    </>
  );
}
