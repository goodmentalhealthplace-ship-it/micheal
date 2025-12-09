import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./Header";   // ✅ ADDED
import Footer from "./Footer";   // ✅ ADDED

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowthFairness Psychiatry PLLC",
  description: "Mental Health Company in Texas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {/* ✅ HEADER IS NOW GLOBAL */}
        <Header />

        {/* 🟡 All pages render here */}
        {children}

        {/* ✅ FOOTER IS NOW GLOBAL */}
        <Footer />

      </body>
    </html>
  );
}
