import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: "dotCMS - Headless Content Management System",
  description: "Experience the power of headless content management. Build faster, scale better, and deliver exceptional digital experiences with dotCMS.",
  keywords: "dotCMS, headless CMS, content management, API-first CMS, digital experience platform",
  authors: [{ name: "dotCMS Team" }],
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="antialiased">
      <Header/>
      {children}
      <Footer/>
      </body>
      </html>
  );
}
