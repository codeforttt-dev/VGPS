import React from 'react';
import HeroSection from '../../component/section/HeroSection';
import AboutSection from '../../component/section/AboutSection';
import WhyChooseUsSection from '../../component/section/WhyChooseUsSection';
import GallerySection from '../../component/section/GallerySection';
import CtaSection from '../../component/section/CtaSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <GallerySection limit={3} />
      <CtaSection />
    </>
  );
};

export default Home;
