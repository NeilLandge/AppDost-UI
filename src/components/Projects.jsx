import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'BEU Mate - Bihar Engineering',
      category: 'AI-Powered Educational Platform',
      description: 'An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation. Built with React Native for seamless mobile experience.',
      tags: ['React Native', 'Node.js', 'AI/ML'],
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      icon: '🎓',
      links: {
        playstore: '#',
        website: '#'
      }
    },
    {
      title: 'Devskillquest',
      category: 'Educational Platform',
      description: 'An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, coding challenges, and real-world applications.',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      image: 'bg-gradient-to-br from-purple-400 to-indigo-600',
      icon: '💻',
      links: {
        website: '#'
      }
    },
    {
      title: 'The Weddings Chapter',
      category: 'Wedding Planning Portal',
      description: 'A premium wedding planning platform connecting couples with top vendors, venues, and services. Features vendor portfolio showcase, booking system, and quotation management.',
      tags: ['PHP', 'Laravel', 'MySQL'],
      image: 'bg-gradient-to-br from-pink-400 to-red-600',
      icon: '💑',
      links: {
        website: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">OUR PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real solutions for real businesses - explore our successful projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image/Icon */}
              <div className={`${project.image} h-48 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.links.playstore && (
                    <a 
                      href={project.links.playstore}
                      className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 transition-all text-sm font-medium"
                    >
                      <Play className="w-4 h-4" />
                      Play Store
                    </a>
                  )}
                  <a 
                    href={project.links.website}
                    className={`${project.links.playstore ? 'flex-1' : 'flex-1'} flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-all text-sm font-medium`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all hover:shadow-xl font-medium inline-flex items-center gap-2">
            View All Projects
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;