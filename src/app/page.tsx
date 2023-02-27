'use client';

import ContactSection from '@/components/sections/Home/Contact';
import EducationsSection from '@/components/sections/Home/Educations';
import ExperiencesSection from '@/components/sections/Home/Experiences';
import HeroSection from '@/components/sections/Home/Hero';
import SkillsSection from '@/components/sections/Home/Skills';
import WorksSection from '@/components/sections/Home/Works';

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <WorksSection />
      <EducationsSection />
      <SkillsSection />
      <ExperiencesSection />
      <ContactSection />
    </main>
  );
}
