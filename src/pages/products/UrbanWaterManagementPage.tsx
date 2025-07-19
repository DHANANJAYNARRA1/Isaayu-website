import React, { useState } from 'react';
import { ArrowLeft, Droplets, Wifi, Gauge, Smartphone, CheckCircle, Star, BarChart3 } from 'lucide-react';

const heroImg = '/assets/urbanwatermanagement.jpg';
const galleryImg1 = '/assets/images/urban1.jpg';
const galleryImg2 = '/assets/images/urban2.jpg';
const galleryImg3 = '/assets/images/urban3.jpg';
const galleryImg4 = '/assets/images/urban4.jpg';
const galleryImg5 = '/assets/images/urban5.jpg';
const galleryImg6 = '/assets/images/urban6.jpg';
import QuoteModal from '../../components/QuoteModal';

interface UrbanWaterManagementPageProps {
  setCurrentPage: (page: string) => void;
}

const UrbanWaterManagementPage: React.FC<UrbanWaterManagementPageProps> = ({ setCurrentPage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<'consultation' | 'pricing'>('consultation');

  const features = [
    'Tank Water Level Monitoring',
    'Sump Level Monitoring',
    'Flow Meter Integration',
    'Smart Motor Controller',
    'User friendly interface',
    'Technology Used: 4G/WiFi',
    'Real-Time Data & Alerts',
    'IoT-Based Real-Time Monitoring'
  ];

  const benefits = [
    'Efficient Water Usage: Prevents wastage by monitoring and controlling usage in real time',
    'Automation & Convenience: Reduces manual intervention with intelligent pump control',
    'Consistent Water Supply: Ensures tanks are filled on time and prevents dry-out situations',
    'Energy Saving: Optimizes pump operations, lowering electricity consumption',
    'User-Friendly Access: Monitor and manage your system anytime via mobile or dashboard',
    'Data-Driven Decisions: Helps you understand water usage patterns and improve efficiency',
    'Flexible Deployment: Easily adaptable for homes, apartments, offices, or public utilities'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center gap-2 text-green-700 hover:text-orange-700 mb-8 transition-colors font-semibold text-lg"
          >
            <ArrowLeft size={24} />
            Back to Products
          </button>
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-100 to-orange-100 text-green-700 px-8 py-3 rounded-full font-bold mb-8 text-lg">
              Urban Water Management
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-8">
              <span className="text-orange-500">URBAN</span> <span className="text-green-800">WATER MANAGEMENT</span>
            </h1>
            <p className="text-base md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 md:mb-8">
              Take control of your water usage with our smart, automated solutions for urban environments. Monitor, manage, and optimize your water resources efficiently and sustainably.
            </p>
            <div className="bg-white text-green-700 px-4 md:px-8 py-2 md:py-4 rounded-2xl inline-block font-semibold md:font-bold text-base md:text-xl shadow-md border border-green-200">
              Make your city smarter, greener, and more water-efficient!
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-48 md:h-96 flex items-center justify-center shadow-2xl border border-gray-200">
              <img
                src={heroImg}
                alt="Urban Water Management Setup"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4"><span className="text-orange-500">URBAN</span> <span className="text-green-700">WATER MANAGEMENT</span></h2>
          <p className="text-lg text-gray-700 mb-4">
            Streamline your water usage in urban spaces with our intelligent water management system designed for efficiency, sustainability, and ease. Powered by IoT technology, it integrates sump and tank level monitoring, motor control, and flow meters to give you real-time insights and automated control over your entire water system.<br/><br/>
            Whether for residential complexes, commercial buildings, or public infrastructure, our solution ensures optimal water supply, reduced wastage, and smarter usage.
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Features */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <Droplets className="text-blue-600" size={28} />
                Product Features:
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-blue-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Benefits */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <Star className="text-cyan-600" size={28} />
                Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-cyan-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Perfect for Multiple Applications
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Whether for residential complexes, commercial buildings, or public infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Droplets, title: 'Residential Complexes', desc: 'Automated water management for apartments and housing societies' },
              { icon: Gauge, title: 'Commercial Buildings', desc: 'Efficient water usage monitoring for offices and retail spaces' },
              { icon: BarChart3, title: 'Public Infrastructure', desc: 'Smart water distribution for municipal and government facilities' },
              { icon: Smartphone, title: 'Industrial Facilities', desc: 'Large-scale water management with real-time monitoring' }
            ].map((useCase, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-24 bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Advanced IoT Technology
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'IoT Connectivity', desc: '4G/WiFi enabled for remote monitoring and control' },
              { icon: Gauge, title: 'Real-time Monitoring', desc: 'Live data on water levels, flow rates, and usage' },
              { icon: Smartphone, title: 'Mobile Control', desc: 'User-friendly mobile app for complete system control' },
              { icon: BarChart3, title: 'Data Analytics', desc: 'Comprehensive usage patterns and efficiency insights' }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-cyan-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Water Management Installations
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Real implementations across residential and commercial properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[galleryImg1, galleryImg2, galleryImg3,galleryImg4, galleryImg5, galleryImg6].map((imgSrc, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <img
                  src={imgSrc}
                  alt={`Installation ${idx + 1}`}
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
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Ready to Manage Your Water Smartly?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Take control of your urban water usage. Get a personalized consultation and professional installation.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => { setModalAction('consultation'); setModalOpen(true); }}
            >
              Smart Water Management
            </button>
          </div>
        </div>
        <QuoteModal open={modalOpen} onClose={() => setModalOpen(false)} product="Urban Water Management" action={modalAction} />
      </section>
    </div>
  );
};

export default UrbanWaterManagementPage;