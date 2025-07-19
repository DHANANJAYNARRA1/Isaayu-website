import React from 'react';
import { ArrowRight, Smartphone, Leaf, Settings, Droplets, Beaker, Cloud, Zap } from 'lucide-react';

interface ProductsPageProps {
  setCurrentPage: (page: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ setCurrentPage }) => {
  const productCategories = [
    {
      title: 'Smart Home Farm',
      description: 'Customised terrace farms for your family\'s nutritional needs with IoT-based automated water management',
      features: ['Quick-install design', 'Monitoring & Alert system', '4G/Wi-Fi Technology', 'Soil-based and soilless options'],
      page: 'smart-home-farm',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      icon: Leaf
    },
    {
      title: 'Grow Your Greens',
      description: 'Hydroponic Kits with Automated Nutrient Management System for fresh, nutritious homegrown produce',
      features: ['Space-Saving Design', 'IoT Based Automated Nutrient Management', 'Integrated LED Grow Lights', 'Size: 24 pocket to 72 pocket'],
      page: 'grow-your-greens',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
      icon: Beaker
    },
    {
      title: 'Urban Water Management',
      description: 'Intelligent water management system for efficient usage, sustainability, and ease with IoT technology',
      features: ['Tank Water Level Monitoring', 'Flow Meter Integration', 'Real-Time Data & Alerts', 'IoT-Based Real-Time Monitoring'],
      page: 'urban-water-management',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      icon: Droplets
    },
    {
      title: 'Smartscapes',
      description: 'Smart Irrigation Systems for Large Landscapes with advanced water-level sensing and moisture sensors',
      features: ['Real-Time Soil Moisture Monitoring', 'Remote Control and Monitoring', 'Zone Management', 'Customizable Alerts and Notifications'],
      page: 'smartscapes',
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'hover:from-teal-600 hover:to-teal-700',
      icon: Cloud
    },
    {
      title: 'Agri360',
      description: 'Comprehensive agricultural solution with complete farm automation and monitoring capabilities',
      features: ['Complete Farm Automation', '360° Monitoring', 'Weather Integration', 'Crop Analytics'],
      page: 'agri360',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      icon: Zap
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-green-50 to-orange-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-200/30 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block bg-gradient-to-r from-orange-100 to-green-100 text-orange-600 px-8 py-3 rounded-full font-bold mb-8 text-lg shadow-lg">
              Our Products
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold text-green-800 mb-4 md:mb-8 leading-tight">
              <span className="text-orange-500">SMART</span> HOME FARM<br/>
              <span className="text-orange-500">GROW</span> YOUR GREENS<br/>
              <span className="text-orange-500">URBAN</span> WATER MANAGEMENT<br/>
              <span className="text-orange-500">SMARTSCAPES</span><br/>
              <span className="text-orange-500">AGRI360</span>
            </h1>
            <p className="text-base md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our complete range of smart farming products designed to revolutionize 
              urban agriculture with cutting-edge IoT technology and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Choose Your Perfect Solution
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
              From compact home systems to large landscape management, we have the perfect smart farming solution for every need.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100">
                {/* Image Placeholder */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 md:h-80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-green-500/10"></div>
                  <div className="text-center text-gray-500 relative z-10">
                    <category.icon size={64} className="mx-auto mb-4 text-green-600" />
                    <p className="font-bold text-xl">{category.title}</p>
                    <p className="text-sm">Product showcase image</p>
                  </div>
                </div>
                
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setCurrentPage(category.page)}
                    className={`w-full bg-gradient-to-r ${category.color} ${category.hoverColor} hover:shadow-xl text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg`}
                  >
                    Explore {category.title}
                    <ArrowRight size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-600 via-green-700 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-orange-300">ISAAYU</span> Products?
            </h2>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
              Advanced technology meets sustainable agriculture for the future of farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smartphone, title: 'IoT Integration', desc: '4G/WiFi connectivity for remote monitoring and control' },
              { icon: Droplets, title: 'Water Efficiency', desc: 'Up to 95% water savings with smart irrigation systems' },
              { icon: Settings, title: 'Easy Setup', desc: 'Quick-install design for immediate productivity' },
              { icon: Leaf, title: 'Sustainable', desc: 'Eco-friendly solutions for a greener future' }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-green-100 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;