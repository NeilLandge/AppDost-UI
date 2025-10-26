import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Let's discuss how we can help transform your ideas into reality with cutting-edge technology and expert development.
          </p>
          
          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>On-Time Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl font-semibold inline-flex items-center justify-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold inline-flex items-center justify-center gap-2">
              View Our Services
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">10+</p>
            <p className="text-white/80">Web Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">4+</p>
            <p className="text-white/80">Android Apps</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">1</p>
            <p className="text-white/80">CRM System</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-white mb-2">100%</p>
            <p className="text-white/80">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;