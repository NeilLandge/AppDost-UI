import React from 'react';
import { Clock, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      category: 'Design',
      title: 'The Future of UI/UX: Trends Shaping Digital Experiences in 2025',
      excerpt: 'Explore the latest UI/UX design trends that are revolutionizing how users interact with digital products. From AI-powered interfaces to immersive experiences...',
      author: 'AppDost Team',
      readTime: '12 min',
      date: 'Oct 12, 2025',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50'
    },
    {
      category: 'Development',
      title: 'Building Scalable Applications with Microservices Architecture',
      excerpt: 'Learn how microservices architecture can help you build robust, scalable applications that grow with your business needs. Best practices and real-world examples...',
      author: 'AppDost Team',
      readTime: '15 min',
      date: 'Oct 8, 2025',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      category: 'Technology',
      title: 'AI and Machine Learning: Transforming Modern Web Applications',
      excerpt: 'Discover how artificial intelligence and machine learning are being integrated into web applications to create smarter, more personalized user experiences...',
      author: 'AppDost Team',
      readTime: '10 min',
      date: 'Oct 5, 2025',
      gradient: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-50 to-indigo-50'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">LATEST UPDATES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Insights & Tech Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest insights, tech trends, and industry expertise
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index}
              className={`group bg-gradient-to-br ${article.bgGradient} rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Header Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${article.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 bg-gradient-to-r ${article.gradient} text-white text-xs font-semibold rounded-full mb-3`}>
                  {article.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Date & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <a 
                    href="#" 
                    className={`flex items-center gap-1 text-sm font-semibold bg-gradient-to-r ${article.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all hover:shadow-xl font-medium inline-flex items-center gap-2">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;