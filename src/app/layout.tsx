import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const calibre = localFont({
  src: [
    { path: "../../public/assets/fonts/Calibre-Regular.woff2", weight: "400" },
    { path: "../../public/assets/fonts/Calibre-Bold.woff2", weight: "700" },
  ],
  variable: "--font-calibre",
  display: "swap",
});

const siteUrl = "https://alizabetpour.ir";
const description =
  "Ali Zabetpour is a Front-end Developer and Software Engineer building modern, responsive web applications with React, Next.js, and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ali Zabetpour | Front-end Developer & Software Engineer",
    template: "%s | Ali Zabetpour",
  },
  description,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Ali Zabetpour",
    title: "Ali Zabetpour | Front-end Developer & Software Engineer",
    description,
    firstName: "Ali",
    lastName: "Zabetpour",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Zabetpour, Front-end Developer and Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Zabetpour | Front-end Developer & Software Engineer",
    description,
    images: [{ url: "/og-image.png", alt: "Ali Zabetpour, Front-end Developer and Software Engineer" }],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={calibre.variable}>{children}</body>
    </html>
  );
}
