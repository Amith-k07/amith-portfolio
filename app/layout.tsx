import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KOLLA P S N V AMITH KUMAR — AI & Data Science Developer",
  description:
    "Portfolio of KOLLA P S N V AMITH KUMAR, an Artificial Intelligence & Data Science student and developer building AI-powered products and web experiences.",
  keywords: [
    "KOLLA P S N V AMITH KUMAR",
    "AI Data Science",
    "Artificial Intelligence",
    "Web Developer",
    "Portfolio",
    "Next.js",
    "Python",
    "AI Developer",
  ],
  authors: [
    {
      name: "KOLLA P S N V AMITH KUMAR",
    },
  ],
  creator: "KOLLA P S N V AMITH KUMAR",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}