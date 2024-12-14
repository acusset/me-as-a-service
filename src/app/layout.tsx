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
      <body className="bg-eerie min-h-screen">
        {/* Background layer */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-eerie via-eerie to-tekhelet/20" />
          <div 
            className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tekhelet/10 rounded-full blur-3xl
              animate-shape-1 transform-gpu will-change-transform origin-center"
          />
          <div 
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-xanthous/10 rounded-full blur-3xl
              animate-shape-2 transform-gpu will-change-transform origin-center"
          />
          <div 
            className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tekhelet/20 rounded-full blur-2xl
              animate-shape-3 transform-gpu will-change-transform origin-center"
          />
        </div>

        {/* Content layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <NavHeader />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
