import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Smart Gardening Tips for Urban Farmers',
      excerpt: 'Discover how IoT sensors can revolutionize your home garden with automated watering and monitoring systems.',
      image: 'https://images.pexels.com/photos/4505155/pexels-photo-4505155.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      date: 'March 15, 2025',
      author: 'Dr. Sarah Chen',
      category: 'Smart Gardening'
    },
    {
      title: 'IoT in Agriculture: Success Stories',
      excerpt: 'Real-world case studies showing how farmers increased yields by 40% using smart irrigation systems.',
      image: 'https://images.pexels.com/photos/4505158/pexels-photo-4505158.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      date: 'March 12, 2025',
      author: 'John Martinez',
      category: 'Case Studies'
    },
    {
      title: 'New Features: Advanced Analytics Dashboard',
      excerpt: 'Introducing our new AI-powered analytics that provide deeper insights into your agricultural data.',
      image: 'https://images.pexels.com/photos/4505163/pexels-photo-4505163.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      date: 'March 10, 2025',
      author: 'Isaayu Team',
      category: 'Product Updates'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest Insights</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and innovations in smart agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-emerald-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center gap-1 transition-colors">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;