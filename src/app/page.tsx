'use client';

import ContactSection from '@/components/sections/Home/Contact';
import EducationsSection from '@/components/sections/Home/Educations';
import ExperiencesSection from '@/components/sections/Home/Experiences';
import HeroSection from '@/components/sections/Home/Hero';
import SkillsSection from '@/components/sections/Home/Skills';
import TestimonialsSection from '@/components/sections/Home/Testimonials';
import WorksSection from '@/components/sections/Home/Works';

const Home = () => {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <WorksSection />
      <EducationsSection />
      <SkillsSection />
      <ExperiencesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
