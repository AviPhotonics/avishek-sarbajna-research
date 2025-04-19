
import React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/sections/AboutSection';
import CVSection from '@/components/sections/CVSection';
import ResearchSection from '@/components/sections/ResearchSection';
import PublicationsSection from '@/components/sections/PublicationsSection';
import GallerySection from '@/components/sections/GallerySection';
import ResourcesSection from '@/components/sections/ResourcesSection';
import NewsSection from '@/components/sections/NewsSection';
{/*import TalksSection from '@/components/sections/TalksSection';*/}
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <Navbar />
        
        <main>
          <AboutSection />
          <CVSection />
          <ResearchSection />
          <PublicationsSection />
          <GallerySection />
          <ResourcesSection />
          <NewsSection />
          <TalksSection />
          <ContactSection />
        </main>
        
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
