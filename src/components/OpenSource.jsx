import React from 'react';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

const OpenSource = () => {
  const projects = [
    {
      title: 'DeepFake Detection',
      subtitle: 'AI/ML Summer Internship Project',
      description: 'Advanced deep learning model for detecting manipulated media using computer vision and neural networks. Built during summer internship research project with cutting-edge AI/ML techniques.',
      tags: ['AI/ML', 'Jupyter', 'Python'],
      gradient: 'from-purple-500 to-blue-500',
      bgGradient: 'from-purple-50 to-blue-50',
      stars: '150+',
      forks: '45+'
    },
    {
      title: 'NooBot',
      subtitle: 'Intelligent Python Automation Bot',
      description: 'Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation. Designed to streamline repetitive tasks efficiently.',
      tags: ['Python', 'Automation', 'AI'],
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      stars: '230+',
      forks: '67+'
    },
    {
      title: 'EduTools',
      subtitle: 'Educational Web Platform',
      description: 'Collection of educational tools and utilities for students and teachers. Interactive learning resources, study aids, and comprehensive educational web platform built with modern web technologies.',
      tags: ['HTML/CSS', 'JavaScript', 'Education'],
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      stars: '180+',
      forks: '52+'
    },
    {
      title: 'DialogFlow Chatbot',
      subtitle: 'Conversational AI Assistant',
      description: 'Intelligent chatbot using Google\'s DialogFlow ES for natural language processing and automated customer support. Features advanced NLP capabilities for seamless conversations.',
      tags: ['DialogFlow', 'NLP', 'Node.js'],
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50',
      stars: '320+',
      forks: '89+'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">OPEN SOURCE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Open Source & Innovation Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our contributions to AI, automation, and educational technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${project.bgGradient} rounded-2xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <Github className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {project.title}
              </h3>
              <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}>
                {project.subtitle}
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-white/80 text-gray-700 text-xs rounded-lg font-medium border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats & Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <GitFork className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.forks}</span>
                  </div>
                </div>

                <button className={`flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all text-sm font-medium`}>
                  View on GitHub
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Interested in working with us on your next project?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our open-source community or start your custom project with our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold inline-flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              View on GitHub
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold inline-flex items-center justify-center gap-2">
              Start Your Project
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;