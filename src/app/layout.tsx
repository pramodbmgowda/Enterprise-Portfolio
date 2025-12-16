import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: "Kaalabhyraveshwara  Enterprises",
  description: "Premium Agricultural Solutions for Karnataka Farmers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* REMOVED: 'Inter' font class. 
         ADDED: 'antialiased' for smoother text rendering.
      */}
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}