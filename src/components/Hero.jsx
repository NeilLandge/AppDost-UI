import React from 'react';
import { ArrowRight, CheckCircle, Shield, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-medium text-gray-700">Complete IT Solution Provider Since 2025</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Ideas</span> Into <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Digital Reality</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project with our expert team of developers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all hover:shadow-xl flex items-center justify-center gap-2 font-medium">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all font-medium">
                Get Free Consultation
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-600" />
                <span className="text-sm text-gray-600">Secure & Scalable</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600" />
                <span className="text-sm text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    💻
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Web Development</p>
                    <p className="text-2xl font-bold text-indigo-600">+10 Projects</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 text-2xl">
                  📱
                </div>
                <p className="text-sm text-gray-500">Mobile Apps</p>
                <p className="text-2xl font-bold text-purple-600">+4 Apps</p>
              </div>

              <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 shadow-lg text-white">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3 text-2xl">
                  ⚡
                </div>
                <p className="text-sm text-white/90">Fast Delivery</p>
                <p className="text-2xl font-bold">On Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;