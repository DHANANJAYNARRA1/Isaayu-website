import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Leaf, Settings } from 'lucide-react';

const ProductShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    {
      title: 'Hydroponic Systems',
      description: 'Soil-free growing systems perfect for clean, efficient urban farming',
      image: 'https://images.pexels.com/photos/4505152/pexels-photo-4505152.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      features: ['No Soil Required', 'Faster Growth', 'Higher Yields', 'Pest-Free Growing']
    },
    {
      title: 'Terrace Garden Kits',
      description: 'Complete automation systems for rooftop and terrace gardens',
      image: 'https://images.pexels.com/photos/4505148/pexels-photo-4505148.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      features: ['Weather Resistant', 'Auto Irrigation', 'Mobile Control', 'Custom Design']
    },
    {
      title: 'Smart App Interface',
      description: 'Control and monitor your entire garden from your smartphone',
      image: 'https://images.pexels.com/photos/4505155/pexels-photo-4505155.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      features: ['Real-time Monitoring', 'Remote Control', 'Growth Analytics', 'Alert System']
    },
    {
      title: 'Balcony Gardens',
      description: 'Compact solutions that transform small balconies into productive gardens',
      image: 'https://images.pexels.com/photos/4505158/pexels-photo-4505158.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      features: ['Space Efficient', 'Easy Setup', 'Low Maintenance', 'High Productivity']
    },
    {
      title: 'Smart Irrigation',
      description: 'Intelligent watering systems with moisture sensors and automated scheduling',
      image: 'https://images.pexels.com/photos/4505163/pexels-photo-4505163.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      features: ['Moisture Sensors', 'Auto Scheduling', 'Water Conservation', 'Zone Control']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full font-semibold mb-6">
            Product Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Plug & Play Agriculture Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of smart farming products designed to make urban agriculture 
            accessible, efficient, and incredibly rewarding.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-0 bg-white">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-96 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-green-800 mb-4">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 w-fit">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-green-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-green-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: Smartphone,
              title: 'Mobile App Control',
              description: 'Monitor and control your garden from anywhere with our intuitive mobile app.'
            },
            {
              icon: Leaf,
              title: 'Eco-Friendly Design',
              description: 'Sustainable materials and energy-efficient systems for a greener future.'
            },
            {
              icon: Settings,
              title: 'Easy Installation',
              description: 'Professional installation and setup included with every purchase.'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;