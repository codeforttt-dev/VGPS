import React from 'react';
import SEO from '../../component/layout/SEO';
import HeroSection from '../../component/section/HeroSection';
import { AboutSection } from './About';
import WhyChooseUsSection from '../../component/section/WhyChooseUsSection';
import GallerySection from '../../component/section/GallerySection';
import CtaSection from '../../component/section/CtaSection';

const Home = () => {
  return (
    <>
      <SEO 
        title="Valley Green Public School | Best Primary School in Gwalior (Nursery to 5th)"
        description="Valley Green Public School (VGPS) Gwalior is the leading primary school offering quality education from Nursery to Class 5th. Modern classrooms, safe environment & holistic development."
        keywords="Valley Green Public School, VGPS Gwalior, best primary school near me, best school in Gwalior, nursery to class 5 school in Gwalior, top school near me Gwalior"
      />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <GallerySection limit={3} />
      <CtaSection />
    </>
  );
};

export default Home;



