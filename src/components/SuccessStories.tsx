import React from 'react';
import { Star, MapPin, Calendar } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Priya Sharma',
      location: 'Hyderabad',
      year: '2024',
      image: 'https://images.pexels.com/photos/4505170/pexels-photo-4505170.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      testimonial: 'ISAAYU transformed my small balcony into a thriving vegetable garden. I now grow fresh tomatoes, lettuce, and herbs year-round with minimal effort!',
      rating: 5,
      harvest: '15kg vegetables/month'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      year: '2024',
      image: 'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      testimonial: 'The terrace automation system is incredible. My rooftop garden now produces enough vegetables for my entire family, and the app makes monitoring so easy.',
      rating: 5,
      harvest: '40kg vegetables/month'
    },
    {
      name: 'Anita Reddy',
      location: 'Chennai',
      year: '2023',
      image: 'https://images.pexels.com/photos/4505155/pexels-photo-4505155.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      testimonial: 'As a working professional, I never thought I could maintain a garden. ISAAYU\'s smart systems do everything automatically. Fresh salads every day!',
      rating: 5,
      harvest: '8kg greens/month'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-semibold mb-6">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Real Gardens, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how urban gardeners across India are transforming their spaces and 
            harvesting fresh, healthy food with ISAAYU's smart farming solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={`${story.name}'s garden`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="text-yellow-500 fill-current" size={16} />
                  <span className="font-semibold text-gray-800">{story.rating}.0</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {story.harvest}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-gray-600">
                    <MapPin size={16} />
                    <span className="font-medium">{story.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Calendar size={16} />
                    <span className="font-medium">{story.year}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-green-800 mb-4">{story.name}</h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{story.testimonial}"
                </p>
                
                <div className="flex items-center gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Growing Community Impact</h3>
            <p className="text-green-100 text-lg">
              Join thousands of satisfied customers who are already growing their own food
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2,500+', label: 'Happy Customers' },
              { number: '50,000+', label: 'Plants Growing' },
              { number: '15 Cities', label: 'Across India' },
              { number: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;