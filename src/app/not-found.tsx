import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="notFound">
      <p>404</p>
      <h1>This page could not be found.</h1>
      <Link href="/">Return to the portfolio</Link>
    </main>
  );
}
