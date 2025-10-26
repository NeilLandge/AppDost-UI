import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import Technologies from '../components/Technologies';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Projects />
      <OpenSource />
      <Technologies />
      <Blog />
      <CTA />
    </>
  );
};

export default HomePage;