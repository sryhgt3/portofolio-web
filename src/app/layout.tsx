import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "@/components/ParticlesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surya Haganta | High-End Developer Portfolio",
  description: "Modern, minimal portfolio of Surya Haganta, a full-stack developer specializing in visually stunning digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-white`}
      >
        <ParticlesBackground />
        <main className="relative z-0">
          {children}
        </main>
      </body>
    </html>
  );
}
