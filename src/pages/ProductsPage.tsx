import React from 'react';
import { ArrowRight, Smartphone, Leaf, Settings, Droplets, Beaker, Cloud, Zap } from 'lucide-react';
// AppDownload component hidden as per request
// import AppDownload from '../components/AppDownload';

interface ProductCategory {
  title: string;
  description: string;
  features: string[];
  page: string;
  color: string;
  hoverColor: string;
  icon: React.ElementType;
  image: string;
}

interface ProductsPageProps {
  setCurrentPage: (page: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ setCurrentPage }) => {
  const productCategories = [
    {
      title: 'Smart Home Farm',
      description: 'Customised terrace farms for your family\'s nutritional needs with IoT-based automated water management',
      features: ['Quick-install design', 'Monitoring & Alert system', 'Advanced IoT Technology implemented', 'Soil-based and soilless options'],
      page: 'smart-home-farm',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      icon: Leaf,
      image: '/assets/terracegarden.jpg'
    },
    {
      title: 'Grow Your Greens',
      description: 'Hydroponic Kits with Automated Nutrient Management System for fresh, nutritious homegrown produce',
      features: ['Space-Saving Design', 'IoT Based Automated Nutrient Management', 'Optimal Light Management System', 'Size: 24 pocket to 72 pocket'],
      page: 'grow-your-greens',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      icon: Beaker,
      image: '/assets/growyougreen.jpg'
    },
    {
      title: 'Urban Water Management',
      description: 'Intelligent water management system for efficient usage, sustainability, and ease with IoT technology',
      features: ['Tank Water Level Monitoring', 'Flow Meter Integration', 'Real-Time Data & Alerts', 'IoT-Based Real-Time Monitoring'],
      page: 'urban-water-management',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      icon: Droplets,
      image: '/assets/urbanwatermanagement.jpg'
    },
    {
      title: 'Smartscapes',
      description: 'Smart Irrigation Systems for Large Landscapes with advanced water-level sensing and moisture sensors',
      features: ['Real-Time Soil Moisture Monitoring', 'Remote Control and Monitoring', 'Zone Management', 'Customizable Alerts and Notifications'],
      page: 'smartscapes',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      icon: Cloud,
      image: '/assets/smartscape.JPEG'
    },
    {
      title: 'Agri360',
      description: 'Comprehensive agricultural solution with complete farm automation and monitoring capabilities',
      features: ['Drone Technology Implementation', 'Smart & Drip Irrigation Systems', 'Soil Sensors & Analytics', 'Auto Nutrients Dosage System'],
      page: 'agri360',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      icon: Zap,
      image: '/assets/agri360.jpg'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero section removed completely */}

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-green-600 to-orange-500">
              Innovative Agricultural Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              From <span className="text-orange-500 font-semibold">compact home systems</span> to <span className="text-green-600 font-semibold">large landscape management</span>, we have the perfect smart farming solution for every need and space.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                {/* Product Image */}
                <div className="h-64 md:h-80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-green-500/10 z-10"></div>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white z-20">
                    <p className="font-bold text-xl">{category.title}</p>
                  </div>
                </div>
                
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-600">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${idx % 2 === 0 ? 'from-orange-500 to-orange-600' : 'from-green-500 to-green-600'} rounded-full flex-shrink-0`}></div>
                        <span className="text-gray-700 font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <button 
                      onClick={() => setCurrentPage(category.page)}
                      className={`w-full bg-gradient-to-r ${category.color} ${category.hoverColor} hover:shadow-xl text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg`}
                    >
                      Explore {category.title}
                      <ArrowRight size={24} />
                    </button>
                    
                    {/* AppDownload component hidden as per request */}
                    {/* <AppDownload variant="compact" productName={category.title} animationDelay={index * 300} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-500 to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-orange-300 font-extrabold">ISAAYU</span> Products?
            </h2>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              Advanced <span className="text-orange-200 font-semibold">technology</span> meets <span className="text-orange-200 font-semibold">sustainable agriculture</span> for the future of farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: 'IoT Integration', desc: 'Advanced IoT technology for remote monitoring and control' },
              { icon: Droplets, title: 'Water Efficiency', desc: 'Up to 95% water savings with smart irrigation systems' },
              { icon: Settings, title: 'Easy Setup', desc: 'Quick-install design for immediate productivity' },
              { icon: Leaf, title: 'Sustainable', desc: 'Eco-friendly solutions for a greener future' }
            ].map((feature, index) => (
              <div key={index} className={`text-center ${index % 2 === 0 ? 'bg-orange-500/20' : 'bg-green-500/20'} backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border ${index % 2 === 0 ? 'border-orange-300/30' : 'border-green-300/30'}`}>
                <div className={`${index % 2 === 0 ? 'bg-orange-500/30' : 'bg-green-500/30'} backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;