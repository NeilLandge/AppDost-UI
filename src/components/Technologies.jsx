import React from 'react';

const Technologies = () => {
  const technologies = [
    {
      name: 'React',
      icon: '⚛️',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'bg-cyan-50',
      description: 'Modern UI Development'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      description: 'Backend Development'
    },
    {
      name: 'Python',
      icon: '🐍',
      color: 'from-blue-500 to-yellow-500',
      bgColor: 'bg-blue-50',
      description: 'AI/ML & Automation'
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      description: 'NoSQL Database'
    },
    {
      name: 'AWS',
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      description: 'Cloud Services'
    },
    {
      name: 'Docker',
      icon: '🐳',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Containerization'
    },
    {
      name: 'Kotlin',
      icon: '📱',
      color: 'from-purple-500 to-indigo-600',
      bgColor: 'bg-purple-50',
      description: 'Android Development'
    },
    {
      name: 'TypeScript',
      icon: '💙',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      description: 'Type-Safe JavaScript'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">OUR TECH STACK</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`group ${tech.bgColor} rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h3 className={`text-xl font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent mb-2`}>
                {tech.name}
              </h3>
              <p className="text-sm text-gray-600">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            And many more technologies including <span className="font-semibold text-gray-900">Laravel, MySQL, PostgreSQL, Redis, GraphQL, Next.js,</span> and more...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;