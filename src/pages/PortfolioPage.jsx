import React from 'react';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import Stats from '../components/Stats';
import CTA from '../components/CTA';

const PortfolioPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">OUR WORK</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-4">
            Portfolio & Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects and open-source contributions that make a difference
          </p>
        </div>
      </section>

      <Stats />
      <Projects />
      <OpenSource />
      <CTA />
    </>
  );
};

export default PortfolioPage;