import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { InteractiveBackground } from "@/components/InteractiveBackground";
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
  title: "Ángel - Senior BI & Low-Code Developer",
  description: "Portfolio de Inteligencia de Negocios y Desarrollo Low-Code. Transformo datos en decisiones y procesos en software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-transparent`}
      >
        <InteractiveBackground />
        {children}
      </body>
    </html>
  );
}
