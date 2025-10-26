import React from 'react';
import { Palette, Code2, Globe, Smartphone, Cog, Lightbulb } from 'lucide-react';

const About = () => {
  const coreServices = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'UI/UX Design Excellence',
      description: 'Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement. We believe great design is invisible—it just works.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Custom Software Development',
      description: 'Building robust, scalable enterprise solutions tailored to your unique business requirements. From concept to deployment, we deliver excellence at every stage.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Web Application Development',
      description: 'Creating responsive, high-performance web applications using the latest frameworks and technologies. Your digital presence, perfected.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile App Development',
      description: 'Developing native and cross-platform mobile applications that users love. iOS, Android, or hybrid—we\'ve got you covered.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: 'Full-Stack Development',
      description: 'End-to-end development expertise covering frontend elegance, backend power, database optimization, and cloud infrastructure.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance to help businesses navigate their digital journey, from legacy system modernization to cloud migration.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const whyChoose = [
    {
      title: 'Complete Lifecycle Expertise',
      description: 'From ideation to deployment and beyond',
      icon: '✅'
    },
    {
      title: 'Cutting-Edge Technology Stack',
      description: 'We work with the latest tools and frameworks',
      icon: '✅'
    },
    {
      title: 'Agile Development Process',
      description: 'Fast iterations, continuous feedback, rapid delivery',
      icon: '✅'
    },
    {
      title: 'Quality-First Approach',
      description: 'Rigorous testing and code reviews ensure excellence',
      icon: '✅'
    },
    {
      title: 'Scalable Solutions',
      description: 'Built to grow with your business',
      icon: '✅'
    },
    {
      title: 'Client-Centric Focus',
      description: 'Your success is our success',
      icon: '✅'
    }
  ];

  const culture = [
    { icon: '🎯', title: 'Innovation First', subtitle: 'Encouraging creative problem-solving' },
    { icon: '🤝', title: 'Collaborative Environment', subtitle: 'Cross-functional teamwork' },
    { icon: '📚', title: 'Continuous Learning', subtitle: 'Regular training & workshops' },
    { icon: '🌱', title: 'Growth Mindset', subtitle: 'Diverse projects & new technologies' },
    { icon: '⚖️', title: 'Work-Life Balance', subtitle: 'Flexible arrangements' },
    { icon: '🏆', title: 'Recognition & Rewards', subtitle: 'Celebrating achievements' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">🚀 ABOUT APPDOST</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Your Trusted Partner for
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Complete Digital Transformation
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            AppDost is your trusted partner for complete digital transformation. We are a dynamic, innovation-driven IT solutions provider specializing in turning visionary ideas into powerful, market-ready products. Our mission is to empower businesses with cutting-edge technology solutions that drive growth, enhance user experiences, and create lasting digital impact.
          </p>
        </div>

        {/* Core Expertise Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">💼 What We Do</h3>
            <p className="text-xl text-gray-600">Our Core Expertise</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                  <div className={service.color}>
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">🌟 Why Choose AppDost?</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Culture Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3">👥 Work Culture & Values</h3>
            <p className="text-xl text-white/90">At AppDost, we believe in:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culture.map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-white/80">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;