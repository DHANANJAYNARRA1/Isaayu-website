import React, { useState } from 'react';
import { ArrowLeft, Cloud, Wifi, Gauge, Smartphone, CheckCircle, Star, TreePine, Droplets } from 'lucide-react';
const heroImg = '/assets/images/scape (1).JPEG.jpg';
const galleryImg1 = '/assets/images/scape (1).JPEG.jpg';
const galleryImg2 = '/assets/images/scape (2).JPEG.jpg';
const galleryImg3 = '/assets/images/scape (3).JPEG.jpg';
const galleryImg4 = '/assets/images/scape (4).JPEG.jpg';
const galleryImg5 = '/assets/images/scape (5).JPEG.jpg';
const galleryImg6 = '/assets/images/scape (6).JPEG.jpg';
import QuoteModal from '../../components/QuoteModal';

interface SmartscapesPageProps {
  setCurrentPage: (page: string) => void;
}

const SmartscapesPage: React.FC<SmartscapesPageProps> = ({ setCurrentPage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<'consultation' | 'pricing'>('consultation');

  const features = [
    'Real-Time Soil Moisture Monitoring',
    'Weather Integration',
    'Remote Control and Monitoring',
    'Automated Scheduling',
    'Water Usage Analytics',
    'Zone Management',
    'Smart Sensor Integration',
    'User-Friendly Interface',
    'Customizable Alerts and Notifications',
    'Scalable Design',
    'Durable and Weather-Resistant',
    'Data Security'
  ];

  const benefits = [
    'Water Conservation',
    'Remote Monitoring and Control',
    'Increased Efficiency',
    'Improved Plant Health',
    'Environmental Impact',
    'Water Conservation',
    'Reduced Labor',
    'Data-Driven Insights',
    'Early Problem Detection',
    'Easy Adaptability',
    'Cost Savings'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-teal-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-8 transition-colors font-semibold text-lg"
          >
            <ArrowLeft size={24} />
            Back to Products
          </button>
          
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-teal-100 to-green-100 text-teal-600 px-8 py-3 rounded-full font-bold mb-8 text-lg">
              Smartscapes
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-8">
              <span className="text-orange-500">SMART</span><span className="text-green-800">SCAPES</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mb-4 md:mb-8 italic">
              Smart Irrigation Systems for Large Landscapes:
            </h2>
            <p className="text-base md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 md:mb-8">
              Revitalize large landscapes with our IoTpowered Smart Irrigation Systems. Equipped with advanced 
              water-level sensing, moisture sensors, and IoT & AI management, it ensures precise, efficient watering 
              tailored to your plants' needs. Customizable schedules and real-time data prevent over or under watering, 
              making lush, vibrant landscapes effortless to maintain.
            </p>
            <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-4 md:px-8 py-2 md:py-4 rounded-2xl inline-block font-semibold md:font-bold text-base md:text-xl shadow-xl">
              Transform your landscape management experience with IoT connectivity and achieve lush, vibrant surroundings with minimal effort and maximum efficiency!
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-48 md:h-96 flex items-center justify-center shadow-2xl border border-gray-200">
            <img
                src={heroImg}
                alt="Smart Home Farm Setup"
                className="object-cover w-full h-full rounded-3xl"
              />
            
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4"><span className="text-orange-500">SMART</span><span className="text-green-700">SCAPES</span></h2>
          <h3 className="text-xl font-semibold text-green-800 mb-2 italic">Smart Irrigation Systems for Large Landscapes:</h3>
          <p className="text-lg text-gray-700 mb-4">
            Revitalize large landscapes with our IoT-powered Smart Irrigation Systems. Equipped with advanced water-level sensing, moisture sensors, motor & valve management, it ensures precise, efficient watering tailored to your plants' needs. Customizable schedules and real-time data prevent over- or under-watering, making lush, vibrant landscapes effortless to maintain.
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Features */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-teal-800 mb-6 flex items-center gap-3">
                <Cloud className="text-teal-600" size={28} />
                Product Features:
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-teal-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Benefits */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <Star className="text-green-600" size={28} />
                Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape Types Section */}
      <section className="py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
              Perfect for All Landscape Types
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              From residential gardens to commercial complexes and public parks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TreePine, title: 'Public Parks', desc: 'Large-scale irrigation for municipal parks and recreational areas' },
              { icon: Cloud, title: 'Golf Courses', desc: 'Precision watering for maintaining perfect playing conditions' },
              { icon: Droplets, title: 'Commercial Complexes', desc: 'Automated landscape management for office buildings and malls' },
              { icon: Gauge, title: 'Residential Communities', desc: 'Smart irrigation for housing societies and gated communities' }
            ].map((landscape, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-teal-100 to-teal-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <landscape.icon className="text-teal-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-4">{landscape.title}</h3>
                <p className="text-gray-600">{landscape.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Advanced IoT & AI Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'IoT Connectivity', desc: 'Real-time monitoring and control via cloud connectivity' },
              { icon: Gauge, title: 'Moisture Sensors', desc: 'Advanced soil moisture monitoring for precise watering' },
              { icon: Cloud, title: 'Weather Integration', desc: 'Automatic adjustments based on weather conditions' },
              { icon: Smartphone, title: 'Zone Management', desc: 'Individual control for different landscape areas' }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
              Smartscapes Installations
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Large-scale landscape irrigation projects across various environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6].map((imgSrc, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <img
                  src={imgSrc}
                  alt={`Smartscapes Installation ${idx + 1}`}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Landscape?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Discover the power of smart automation for large landscapes. Get a personalized consultation and professional installation.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => { setModalAction('consultation'); setModalOpen(true); }}
            >
              Transform Your Landscape
            </button>
          </div>
        </div>
        <QuoteModal open={modalOpen} onClose={() => setModalOpen(false)} product="Smartscapes" action={modalAction} />
      </section>
    </div>
  );
};

export default SmartscapesPage;