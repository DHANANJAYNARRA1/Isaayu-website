import React, { useState } from 'react';
import { ArrowLeft, Zap, Wifi, Gauge, Smartphone, CheckCircle, Star, BarChart3, Cloud } from 'lucide-react';
import heroImg from '../../assets/images/agri3.webp';
import gallery1 from '../../assets/images/agri1.jpg';
import gallery2 from '../../assets/images/agri2.jpg';
import gallery3 from '../../assets/images/agri4.webp';
import gallery4 from '../../assets/images/agri6.jpg';
import gallery5 from '../../assets/images/agri7.jpg';
import gallery6 from '../../assets/images/agri8.jpg';
import QuoteModal from '../../components/QuoteModal';

interface Agri360PageProps {
  setCurrentPage: (page: string) => void;
}

const Agri360Page: React.FC<Agri360PageProps> = ({ setCurrentPage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<'consultation' | 'pricing'>('consultation');

  const features = [
    'Complete Farm Automation',
    '360° Monitoring System',
    'Weather Integration & Forecasting',
    'Crop Analytics & Insights',
    'Multi-Zone Management',
    'Advanced Sensor Network',
    'AI-Powered Decision Making',
    'Real-Time Data Dashboard',
    'Mobile & Web Interface',
    'Scalable Architecture',
    'Cloud-Based Storage',
    'Predictive Analytics'
  ];

  const benefits = [
    'Comprehensive Farm Management: Complete oversight of all farming operations',
    'Increased Productivity: Optimize crop yields with data-driven insights',
    'Resource Optimization: Efficient use of water, nutrients, and energy',
    'Risk Mitigation: Early detection of potential issues and threats',
    'Cost Reduction: Minimize operational costs through automation',
    'Sustainability: Environmentally friendly farming practices',
    'Remote Monitoring: Manage your farm from anywhere in the world',
    'Scalable Solution: Grows with your farming operations'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            <div className="inline-block bg-gradient-to-r from-orange-100 to-green-100 text-green-700 px-8 py-3 rounded-full font-bold mb-8 text-lg">
              Agri360
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-orange-500">AGRI</span><span className="text-green-800">360</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-8 italic">
              Future Of Agriculture
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Experience the future of agriculture with our comprehensive Agri360 solution. This all-in-one platform 
              combines advanced IoT sensors, AI analytics, and automated systems to provide complete farm management 
              from seed to harvest. Monitor, control, and optimize every aspect of your agricultural operations with 
              unprecedented precision and efficiency.
            </p>
            <div className="bg-white text-green-700 px-8 py-4 rounded-2xl inline-block font-bold text-xl shadow-md border border-green-200">
              Revolutionize your farming with 360° visibility, control, and intelligence for maximum productivity and sustainability!
            </div>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 md:h-[500px] flex items-center justify-center shadow-2xl border border-gray-200">
              <img
                src={heroImg}
                alt="Agri360 Farm Setup"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4"><span className="text-orange-500">AGRI</span><span className="text-green-700">360</span></h2>
          <p className="text-lg text-gray-700 mb-4">
            <b>Agri360</b> is a comprehensive solution for agriculture, encompassing a 360-degree approach to managing various aspects of agricultural operations. The IoT Based Automation Control System is a multifunctional automation solution designed to revolutionize farm management. With the ability to operate a variety of devices, from irrigation motors to soil sensors, Agri 360 enhances operational efficiency, safety, and productivity on farms. This comprehensive control system allows farmers to manage their equipment seamlessly, ensuring optimal performance and resource management.
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Features */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <Zap className="text-purple-600" size={28} />
                Product Features:
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-purple-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Benefits */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                <Star className="text-indigo-600" size={28} />
                Benefits
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-indigo-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
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

      {/* System Components */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Complete System Components
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Everything you need for comprehensive farm management in one integrated solution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gauge, title: 'Sensor Network', desc: 'Comprehensive monitoring of soil, weather, and crop conditions' },
              { icon: Cloud, title: 'Weather Station', desc: 'Real-time weather monitoring and forecasting capabilities' },
              { icon: BarChart3, title: 'Analytics Engine', desc: 'AI-powered insights and predictive analytics for optimization' },
              { icon: Smartphone, title: 'Control Center', desc: 'Centralized dashboard for complete farm management' }
            ].map((component, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <component.icon className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">{component.title}</h3>
                <p className="text-gray-600">{component.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Advanced Technology Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'IoT Integration', desc: 'Seamless connectivity across all farm devices and sensors' },
              { icon: Cloud, title: 'Cloud Computing', desc: 'Scalable cloud infrastructure for data processing and storage' },
              { icon: BarChart3, title: 'AI & Machine Learning', desc: 'Intelligent algorithms for predictive analytics and optimization' },
              { icon: Smartphone, title: 'Mobile & Web Apps', desc: 'User-friendly interfaces for remote farm management' }
            ].map((tech, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">{tech.title}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Agri360 Implementations
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Complete farm automation projects across different agricultural settings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((imgSrc, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              <img src={imgSrc} alt={`Gallery ${idx + 1}`} className="object-cover w-full h-full rounded-2xl" />
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Ready to Revolutionize Your Farm?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Experience the future of agriculture with Agri360. Get a personalized consultation and professional installation.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300"
              onClick={() => { setModalAction('consultation'); setModalOpen(true); }}
            >
              Revolutionize Your Farm
            </button>
          </div>
        </div>
        <QuoteModal open={modalOpen} onClose={() => setModalOpen(false)} product="Agri360" action={modalAction} />
      </section>
    </div>
  );
};

export default Agri360Page;