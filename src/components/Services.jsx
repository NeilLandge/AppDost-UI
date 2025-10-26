import React from 'react';
import { Smartphone, Globe, Briefcase, Cloud, Shield, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Android App Development',
      description: 'Building native Android applications for better distributions to bring your business to life',
      features: [
        'Native & Hybrid Apps',
        'Play Store Deployment',
        'Maintenance & Support'
      ],
      color: 'from-green-500 to-emerald-600',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Responsive and scalable web applications tailored to your business',
      features: [
        'Responsive Design',
        'E-commerce Solutions',
        'Progressive Web Apps'
      ],
      color: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Development',
      description: 'Creating beautiful, intuitive interfaces that enhance user experience and engagement',
      features: [
        'User Research',
        'Wireframing',
        'Brand Identity'
      ],
      color: 'from-pink-500 to-rose-600',
      iconBg: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'CRM Software',
      description: 'Custom CRM solutions for streamline your sales, improve customer relationships and boost productivity',
      features: [
        'Customer Management',
        'Integration Services',
        'Training & Support'
      ],
      color: 'from-purple-500 to-violet-600',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services for modern businesses and workloads',
      features: [
        'AWS, Azure, GCP',
        'Migration Services',
        'Cost Optimization'
      ],
      color: 'from-sky-500 to-blue-600',
      iconBg: 'bg-sky-50',
      iconColor: 'text-sky-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with robust security solutions and risk management',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Encryption Systems'
      ],
      color: 'from-orange-500 to-amber-600',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Comprehensive Solutions for
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Your Digital Success
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                <div className={service.iconColor}>
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <a 
                href="#contact" 
                className={`inline-flex items-center text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;