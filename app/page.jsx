'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CoreExpertise from '@/components/CoreExpertise';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Achievements from '@/components/Achievements';
import Industries from '@/components/Industries';
import Strengths from '@/components/Strengths';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CvModal from '@/components/CvModal';

export default function Home() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] dark:bg-[#060b17] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Sticky Navigation */}
      <Navbar onOpenCv={() => setCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenCv={() => setCvModalOpen(true)} />
        <About />
        <CoreExpertise />
        <Experience />
        <Certifications />
        <Achievements />
        <Industries />
        <Strengths />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenCv={() => setCvModalOpen(true)} />

      {/* CV Preview & Print/Download Modal */}
      <CvModal 
        isOpen={cvModalOpen} 
        onClose={() => setCvModalOpen(false)} 
      />
    </div>
  );
}
