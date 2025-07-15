import React from 'react';
import { ArrowLeft, Leaf, Droplets, Smartphone, Settings } from 'lucide-react';

interface BalconyFarmsPageProps {
  setCurrentPage: (page: string) => void;
}

const BalconyFarmsPage: React.FC<BalconyFarmsPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </button>
          
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full font-semibold mb-6">
              Balcony Farms
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Transform Your Balcony
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compact solutions that transform small balconies into productive gardens. 
              Space efficient, easy setup, low maintenance, high productivity.
            </p>
          </div>

          {/* Hero Image Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Leaf size={64} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Balcony Farm Hero Image</p>
                <p className="text-sm">Upload your best balcony garden setup image here</p>
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
                Perfect for Small Spaces
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our balcony farm systems are specifically designed for urban dwellers with limited space. 
                Get maximum yield from minimum footprint.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Leaf, title: 'Space Efficient', desc: 'Vertical growing systems maximize your growing area' },
                  { icon: Settings, title: 'Easy Setup', desc: 'Ready to install in under 30 minutes' },
                  { icon: Droplets, title: 'Low Maintenance', desc: 'Automated watering and monitoring' },
                  { icon: Smartphone, title: 'High Productivity', desc: 'Grow 3x more than traditional methods' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-xl">
                      <feature.icon className="text-green-600" size={24} />
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
                <Settings size={64} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Balcony Setup Process</p>
                <p className="text-sm">Upload setup process images here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Balcony Farm Gallery
            </h2>
            <p className="text-xl text-gray-600">
              See how our customers have transformed their balconies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center text-gray-500">
                  <Leaf size={32} className="mx-auto mb-2" />
                  <p className="font-medium">Balcony Setup {item}</p>
                  <p className="text-sm">Upload customer photo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Balcony Farm?
          </h2>
          <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
            Transform your balcony into a productive garden today. 
            Get a free consultation and custom design for your space.
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default BalconyFarmsPage;