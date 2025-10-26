import React from 'react';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

const BlogPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">INSIGHTS & ARTICLES</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-3 mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest tech trends, insights, and industry expertise
          </p>
        </div>
      </section>

      <Blog />
      <CTA />
    </>
  );
};

export default BlogPage;