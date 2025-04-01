
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import ProgramsSection from '@/components/ProgramsSection';
import TrainersSection from '@/components/TrainersSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gym-dark text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FacilitiesSection />
      <ProgramsSection />
      <TrainersSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
