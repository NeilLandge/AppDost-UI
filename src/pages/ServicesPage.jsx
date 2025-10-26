import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';
import Technologies from '../components/Technologies';
import CTA from '../components/CTA';

const ServicesPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">OUR SERVICES</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-4">
            What We Offer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
      </section>

      <Services />
      <Process />
      <Technologies />
      <CTA />
    </>
  );
};

export default ServicesPage;