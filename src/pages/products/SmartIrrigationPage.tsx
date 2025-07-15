import React from 'react';
import { ArrowLeft, Droplets, Smartphone, Clock, Zap } from 'lucide-react';

interface SmartIrrigationPageProps {
  setCurrentPage: (page: string) => void;
}

const SmartIrrigationPage: React.FC<SmartIrrigationPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Products
          </button>
          
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-semibold mb-6">
              Smart Irrigation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Intelligent Watering
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Intelligent watering systems with moisture sensors and automated scheduling. 
              Moisture sensors, auto scheduling, water conservation, zone control.
            </p>
          </div>

          {/* Hero Image Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Droplets size={64} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Smart Irrigation Hero Image</p>
                <p className="text-sm">Upload your best irrigation system image here</p>
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
                Smart Water Management
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Save water while ensuring your plants get exactly what they need, when they need it. 
                Our smart irrigation systems reduce water usage by up to 95%.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Droplets, title: 'Moisture Sensors', desc: 'Real-time soil moisture monitoring' },
                  { icon: Clock, title: 'Auto Scheduling', desc: 'Weather-based watering schedules' },
                  { icon: Zap, title: 'Water Conservation', desc: 'Up to 95% water savings' },
                  { icon: Smartphone, title: 'Zone Control', desc: 'Individual control for different areas' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-xl">
                      <feature.icon className="text-orange-600" size={24} />
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
                <Clock size={64} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Irrigation Control System</p>
                <p className="text-sm">Upload control system images here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Smart Irrigation Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Various irrigation solutions for different garden types
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-center text-gray-500">
                  <Droplets size={32} className="mx-auto mb-2" />
                  <p className="font-medium">Irrigation System {item}</p>
                  <p className="text-sm">Upload system photo</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Upgrade to Smart Irrigation
          </h2>
          <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto">
            Stop wasting water and start growing smarter. Our intelligent irrigation 
            systems ensure perfect watering every time.
          </p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Get Irrigation Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default SmartIrrigationPage;