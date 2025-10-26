import React from 'react';
import { Layers, Smartphone, Target, TrendingUp } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Layers className="w-10 h-10" />,
      number: '10+',
      label: 'WEB PROJECTS',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      number: '4+',
      label: 'ANDROID APPS',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <Target className="w-10 h-10" />,
      number: '1',
      label: 'CRM PROJECT',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600'
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      number: '2025',
      label: 'FOUNDED YEAR',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${stat.bgColor} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                <div className={stat.iconColor}>
                  {stat.icon}
                </div>
              </div>
              <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </h3>
              <p className="text-sm font-medium text-gray-600 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;