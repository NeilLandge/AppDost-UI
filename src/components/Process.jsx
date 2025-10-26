import React from 'react';
import { Lightbulb, Pencil, Code, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '1',
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Discovery & Planning',
      description: 'We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap.',
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      number: '2',
      icon: <Pencil className="w-6 h-6" />,
      title: 'Design & Prototype',
      description: 'Our design team creates intuitive wireframes, interactive mockups, and pixel-perfect prototypes that bring your vision to life before development begins.',
      color: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      number: '3',
      icon: <Code className="w-6 h-6" />,
      title: 'Development & Testing',
      description: 'Expert developers write clean, scalable code using QA best-practice rigorous testing to ensure flawless functionality and device and platform.',
      color: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      number: '4',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Deployment & Support',
      description: 'We launch the complete deployment pipeline, including staging, production updates, and 24/7 technical support to keep your delivery running smoothly.',
      color: 'from-orange-500 to-red-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Development Process
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A proven methodology that ensures quality, efficiency, and client satisfaction
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Connector Line - Hidden on mobile, shown on larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-white/30 -translate-x-1/2 z-0"></div>
              )}

              {/* Card */}
              <div className="relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 z-10">
                {/* Number Badge */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${step.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={step.iconColor}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white text-lg mb-6">
            Ready to start your project with our proven process?
          </p>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl font-semibold">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;