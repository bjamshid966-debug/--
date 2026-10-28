import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "서울 · Seul — Koreya olami",
  description: "Koreya madaniyati, taomlari, K-pop va Hangul haqida zamonaviy sayt.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  );
}
