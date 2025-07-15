import React from 'react';
import { ArrowLeft, Leaf, Beaker, TrendingUp, Shield } from 'lucide-react';

interface HydroponicsPageProps {
  setCurrentPage: (page: string) => void;
}

const HydroponicsPage: React.FC<HydroponicsPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </button>
          
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-6 py-2 rounded-full font-semibold mb-6">
              Hydroponic Systems
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Soil-Free Growing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soil-free growing systems perfect for clean, efficient urban farming. 
              No soil required, faster growth, higher yields, pest-free growing.
            </p>
          </div>

          {/* Hero Image Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Beaker size={64} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Hydroponic System Hero Image</p>
                <p className="text-sm">Upload your best hydroponic setup image here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                The Future of Farming
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the cleanest, most efficient way to grow food. Our hydroponic 
                systems deliver superior results with minimal resources.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Beaker, title: 'No Soil Required', desc: 'Clean, mess-free growing environment' },
                  { icon: TrendingUp, title: 'Faster Growth', desc: 'Plants grow 30-50% faster than soil' },
                  { icon: Leaf, title: 'Higher Yields', desc: 'Produce more food in less space' },
                  { icon: Shield, title: 'Pest-Free Growing', desc: 'Reduced risk of soil-borne diseases' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <feature.icon className="text-purple-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <TrendingUp size={64} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Hydroponic Growth Process</p>
                <p className="text-sm">Upload growth process images here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Hydroponic Systems Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Different hydroponic setups for various needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center text-gray-500">
                  <Beaker size={32} className="mx-auto mb-2" />
                  <p className="font-medium">Hydroponic Setup {item}</p>
                  <p className="text-sm">Upload system photo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Hydroponic Journey
          </h2>
          <p className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto">
            Experience the future of farming with our advanced hydroponic systems. 
            Clean, efficient, and incredibly productive.
          </p>
          <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Explore Hydroponic Options
          </button>
        </div>
      </section>
    </div>
  );
};

export default HydroponicsPage;