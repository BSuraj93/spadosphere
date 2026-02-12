// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Spadosphere | Strategy & Product Design for Early-Stage Startups",
  description:
    "Spadosphere is a premium consulting boutique for very early to early-stage startups, combining Strategy and Product Design to build Minimum Lovable Products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body>
        <div className="app-shell">
          <Navbar />
          <main className="app-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
