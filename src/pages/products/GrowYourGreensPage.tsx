import React from 'react';
import { ArrowLeft, Beaker, Wifi, Lightbulb, Smartphone, CheckCircle, Star } from 'lucide-react';
const heroImg = '/assets/images/hydro5.jpg';
const galleryImg1 = '/assets/images/hydro.jpeg';
const galleryImg2 = '/assets/images/hydro1.jpeg';
const galleryImg3 = '/assets/images/hydro2.jpeg';
const galleryImg4 = '/assets/images/hydro3.jpg';
const galleryImg5 = '/assets/images/hydro4.jpg';
const galleryImg6 = '/assets/growyougreen.jpg';
import QuoteModal from '../../components/QuoteModal';
import { useState } from 'react';

interface GrowYourGreensPageProps {
  setCurrentPage: (page: string) => void;
}

const GrowYourGreensPage: React.FC<GrowYourGreensPageProps> = ({ setCurrentPage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<'consultation' | 'pricing'>('consultation');

  const features = [
    'Space-Saving Design',
    'High-Quality Components',
    'IoT Based Automated Nutrient Management using 4G',
    'User Friendly interface',
    'Technology Used: 4G/WiFi',
    'Easy Assembly',
    'Integrated LED Grow Lights',
    'Sensing and Monitoring',
    'Data Logging and Analysis',
    'Size: 24 pocket to 72 pocket'
  ];

  const benefits = [
    'Access fresh, nutritious, flavorful homegrown produce',
    'Notifications and Alerts to let you know if your plants are watered',
    'Agronomist guidance on pest & diseases',
    'Works even when you are away from your home'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors font-semibold text-lg"
          >
            <ArrowLeft size={24} />
            Back to Products
          </button>
          
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-600 px-8 py-3 rounded-full font-bold mb-8 text-lg">
              Grow Your Greens
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-8">
              <span className="text-green-600">G</span><span className="text-orange-500">Row</span> <span className="text-green-600">Y</span><span className="text-orange-500">Our</span> <span className="text-green-800">GREENS</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-gray-700 mb-4 md:mb-8 italic">
              Hydroponic Kits with Automated Nutrient Management System
            </h2>
            <p className="text-base md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4 md:mb-8">
              Transform your balcony/indoor home spaces into a lush green oasis with our 
              Hydroponic Home Kits to "GRow YOur GREENS"! Perfect for urban gardeners living 
              in apartments, this all-in-one system makes growing fresh greens easy and efficient.
            </p>
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-4 md:px-8 py-2 md:py-4 rounded-2xl inline-block font-semibold md:font-bold text-base md:text-xl shadow-xl">
              Elevate your gardening game with our Hydroponic Kits and enjoy fresh, home-grown greens right from your own outdoor and indoor spaces!
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
          <h2 className="text-3xl font-bold mb-4"><span className="text-orange-500">GR</span><span className="text-green-700">ow YOur GREENS</span></h2>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Hydroponic Kits with Automated Nutrient Management System</h3>
          <p className="text-lg text-gray-700 mb-4">
            Transform your balcony/indoor home spaces into a lush green oasis with our Hydroponic Home Kits to <b><span className="text-orange-500">GR</span><span className="text-green-700">ow YOur GREENS</span></b>!<br/>
            Perfect for urban gardeners living in apartments, this all-in-one system makes growing fresh greens easy and efficient.
          </p>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Features */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center gap-3">
                <Beaker className="text-emerald-600" size={28} />
                Product Features:
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-emerald-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
                      <CheckCircle size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Column - Benefits */}
            <div className="space-y-8">
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

              {/* Size Options */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">Available Sizes</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">24</div>
                    <div className="text-gray-600">Pocket System</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">72</div>
                    <div className="text-gray-600">Pocket System</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              Advanced Technology Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'IoT Connectivity', desc: '4G/WiFi enabled for remote monitoring' },
              { icon: Lightbulb, title: 'LED Grow Lights', desc: 'Integrated lighting for optimal growth' },
              { icon: Beaker, title: 'Auto Nutrients', desc: 'Automated nutrient management system' },
              { icon: Smartphone, title: 'Mobile Control', desc: 'User-friendly mobile interface' }
            ].map((feature, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-emerald-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-emerald-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Hydroponic Systems Gallery
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Different hydroponic setups for various spaces and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              galleryImg1,
              galleryImg2,
              galleryImg3,
              galleryImg4,
              galleryImg5,
              galleryImg6
            ].map((imgSrc, idx) => (
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Grow Your Greens?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Start your hydroponic journey today. Get a personalized consultation and professional installation.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => { setModalAction('consultation'); setModalOpen(true); }}
            >
              Grow Your Greens Now
            </button>
          </div>
        </div>
        <QuoteModal open={modalOpen} onClose={() => setModalOpen(false)} product="Grow Your Greens" action={modalAction} />
      </section>
    </div>
  );
};

export default GrowYourGreensPage;