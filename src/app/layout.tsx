import type { Metadata } from "next";
import "./globals.css";
import NavHeader from "@/components/NavHeader";
import React from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The best for your teams | Antoine.io",
  description: "Empower your teams to deliver high-quality code"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-eerie">
        <NavHeader />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
