import React, { useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';

const timelineData = [
  {
    year: '2020',
    title: 'Isaayu Founded',
    description: 'The journey of Isaayu begins with a vision for sustainable urban agriculture.',
    logo: '/assets/IsaayuLogo_HD.png',
    color: '#FF9800', // orange
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    year: '2021',
    title: 'Smart Home Farm',
    description: 'Launch of Smart Home Farm, bringing automated farming to terraces and homes.',
    logo: '/assets/terracegarden.jpg',
    color: '#4CAF50', // green
    textColor: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    year: '2022',
    title: 'Grow Your Greens',
    description: 'Grow Your Greens initiative empowers urban dwellers to cultivate fresh produce at home.',
    logo: '/assets/growyougreen.jpg',
    color: '#FF9800', // orange
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    year: '2023',
    title: 'Urban Water Management',
    description: 'Introduction of Urban Water Management systems for efficient and sustainable water use.',
    logo: '/assets/watermanagement.jpg',
    color: '#4CAF50', // green
    textColor: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    year: '2024',
    title: 'Smartscapes',
    description: 'Smartscapes launched for intelligent management of larger landscapes and communities.',
    logo: '/assets/smartscape.JPEG',
    color: '#FF9800', // orange
    textColor: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  {
    year: '2025',
    title: 'Agri360',
    description: 'Unveiling Agri360, a comprehensive platform for complete farm automation and analytics.',
    logo: '/assets/agri360.jpg',
    color: '#4CAF50', // green
    textColor: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];



const JourneyTimeline: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-green-600 to-orange-500">ISAAYU JOURNEY</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our path of innovation and growth in sustainable agriculture
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-orange-300 via-green-400 to-orange-500 top-1/2 transform -translate-y-1/2 rounded-full"></div>
          
          <div className="grid grid-cols-6 gap-4 relative">
            {timelineData.map((item, index) => (
              <div 
                key={item.year} 
                className="flex flex-col items-center relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Year Circle */}
                <div 
                  className={`w-24 h-24 rounded-full bg-white border-4 shadow-lg flex items-center justify-center mb-6 z-10 transition-all duration-300 ${hoveredIndex === index ? index % 2 === 0 ? 'border-orange-500 scale-110' : 'border-green-500 scale-110' : 'border-gray-100'}`}
                  style={{ boxShadow: hoveredIndex === index ? `0 0 20px ${item.color}80` : '' }}
                >
                  <span className={`text-3xl font-bold transition-all duration-300 ${hoveredIndex === index ? item.textColor : index % 2 === 0 ? 'text-orange-500' : 'text-green-500'}`}>{item.year}</span>
                </div>
                
                {/* Content Card - Only visible on hover */}
                <div 
                  className={`bg-white rounded-xl shadow-lg p-4 w-full border ${index % 2 === 0 ? 'border-orange-100' : 'border-green-100'} absolute top-0 -translate-y-full -mt-4 z-50 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  style={{ boxShadow: hoveredIndex === index ? `0 10px 25px -5px ${item.color}40` : '' }}
                >
                  <div className="flex items-center mb-3">
                    <img 
                      src={item.logo} 
                      alt={item.title} 
                      className="w-12 h-12 object-cover rounded-lg mr-3 border border-gray-100"
                    />
                    <h3 className={`font-bold text-lg ${item.textColor}`}>{item.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
                
                {/* Product Title (Always Visible) */}
                <div className={`text-center transition-all duration-300 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className={`font-bold ${item.textColor}`}>{item.title}</h3>
                </div>
                
                {/* Connector Line */}
                {index < timelineData.length - 1 && (
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-20 flex items-center">
                    <div className="relative">
                      {/* Animated connector line */}
                      <div className="absolute top-1/2 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-green-500 transform -translate-y-1/2"></div>
                      <div className="absolute top-1/2 left-0 w-12 h-0.5 bg-white opacity-50 transform -translate-y-1/2 animate-pulse"></div>
                      <ArrowRight className={`${index % 2 === 0 ? 'text-orange-500' : 'text-green-500'} relative z-10`} size={24} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical Line with animation */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 via-green-400 to-orange-500 rounded-full"></div>
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-white opacity-30 rounded-full animate-pulse"></div>
            
            {timelineData.map((item, index) => (
              <div 
                key={item.year} 
                className="flex mb-12 relative"
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setHoveredIndex(null)}
              >
                {/* Year Circle */}
                <div 
                  className={`w-16 h-16 rounded-full bg-white border-4 shadow-lg flex items-center justify-center z-10 mr-6 transition-all duration-300 ${hoveredIndex === index ? index % 2 === 0 ? 'border-orange-500' : 'border-green-500' : index % 2 === 0 ? 'border-orange-200' : 'border-green-200'}`}
                >
                  <span className={`text-xl font-bold ${index % 2 === 0 ? 'text-orange-600' : 'text-green-600'}`}>{item.year}</span>
                </div>
                
                {/* Content - Expanded on touch for mobile */}
                <div 
                  className={`bg-white rounded-xl shadow-lg p-4 flex-1 border ${index % 2 === 0 ? 'border-orange-100' : 'border-green-100'} transition-all duration-300 ${hoveredIndex === index ? 'scale-105' : ''}`}
                >
                  <div className="flex items-center mb-2">
                    <img 
                      src={item.logo} 
                      alt={item.title} 
                      className="w-10 h-10 object-cover rounded-lg mr-3 border border-gray-100"
                    />
                    <h3 className={`font-bold text-lg ${item.textColor}`}>{item.title}</h3>
                  </div>
                  <p className={`text-gray-700 text-sm leading-relaxed transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 max-h-40 mt-2' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;