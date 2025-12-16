'use client';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OwnerSection from '@/components/OwnerSection';
import Features from '@/components/Features';
import ProductGrid from '@/components/ProductGrid';
import FarmVisit from '@/components/FarmVisit';
import CropSolutions from '@/components/CropSolutions';
import FarmerFAQ from '@/components/FarmerFAQ';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

// ... imports
export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen font-sans bg-[#021c16]"> {/* Ensure dark bg matches */}
        <Navbar />
        <Hero />
        <OwnerSection />
        {/* <Features />  <-- COMMENT THIS OUT OR REMOVE IT */}
        <ProductGrid />
        <FarmVisit />
        <CropSolutions />
        <FarmerFAQ />
        <Footer />
        <WhatsAppFloat />
      </main>
    </LanguageProvider>
  );
}