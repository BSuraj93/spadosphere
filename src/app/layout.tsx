// src/app/layout.tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Spadosphere | Strategy, Product and Design",
  description:
    "Spadosphere is a Strategy, Product and Design focused atmosphere for anyone who loves to build or do anything they love.",
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
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
