import React from 'react';
import { ArrowLeft, Leaf, Cloud, Smartphone, Cog } from 'lucide-react';

interface TerraceFarmsPageProps {
  setCurrentPage: (page: string) => void;
}

const TerraceFarmsPage: React.FC<TerraceFarmsPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </button>
          
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full font-semibold mb-6">
              Terrace Farms
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Rooftop Revolution
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete automation systems for rooftop and terrace gardens. 
              Weather resistant, auto irrigation, mobile control, custom design.
            </p>
          </div>

          {/* Hero Image Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Cloud size={64} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Terrace Farm Hero Image</p>
                <p className="text-sm">Upload your best terrace garden setup image here</p>
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
                Large Scale Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your entire rooftop into a productive farm with our comprehensive 
                terrace automation systems designed for maximum efficiency.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Cloud, title: 'Weather Resistant', desc: 'Built to withstand all weather conditions' },
                  { icon: Cog, title: 'Auto Irrigation', desc: 'Smart watering based on weather and soil data' },
                  { icon: Smartphone, title: 'Mobile Control', desc: 'Complete control from your smartphone' },
                  { icon: Leaf, title: 'Custom Design', desc: 'Tailored to your specific space and needs' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <feature.icon className="text-blue-600" size={24} />
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
                <Cog size={64} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Terrace Automation System</p>
                <p className="text-sm">Upload automation system images here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Terrace Farm Installations
            </h2>
            <p className="text-xl text-gray-600">
              Large scale rooftop transformations across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center text-gray-500">
                  <Cloud size={32} className="mx-auto mb-2" />
                  <p className="font-medium">Terrace Project {item}</p>
                  <p className="text-sm">Upload installation photo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform Your Rooftop Today
          </h2>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Get a custom terrace farm design and professional installation. 
            Turn your rooftop into a productive, automated garden.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Get Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default TerraceFarmsPage;