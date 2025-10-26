import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">GET IN TOUCH</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help transform your ideas into reality
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default ContactPage;