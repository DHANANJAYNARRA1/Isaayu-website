import React, { useState } from 'react';
import { ArrowLeft, Settings, CheckCircle, Star } from 'lucide-react';
import heroImg from '../../assets/terracegarden.jpg';
import galleryImg1 from '../../assets/images/hydro.jpeg';
import galleryImg2 from '../../assets/images/hydro.jpeg';
import galleryImg3 from '../../assets/images/hydro.jpeg';
import galleryImg4 from '../../assets/images/hydro.jpeg';
import galleryImg5 from '../../assets/images/hydro.jpeg';
import galleryImg6 from '../../assets/images/hydro.jpeg';
import QuoteModal from '../../components/QuoteModal';

interface SmartHomeFarmPageProps {
  setCurrentPage: (page: string) => void;
}

const SmartHomeFarmPage: React.FC<SmartHomeFarmPageProps> = ({ setCurrentPage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState<'consultation' | 'pricing'>('consultation');

  const features = [
    'Farm Type: Customised terrace farms for your family\'s nutritional needs',
    'Set Up: Quick-install design enables immediate, effortless growing at home',
    'Monitoring and Alert system',
    'Technology Used: 4G/Wi Fi',
    'With soil-based and soilless options',
    'IoT Based Automated Water Management using 4G',
    'User friendly interface'
  ];

  const benefits = [
    'Harvests: Access fresh, nutritious, flavorful homegrown produce',
    'Support: Agronomist guidance for pests, diseases',
    'Effortless: Efficient, practical, sustainable urban farming'
  ];

  const growOptions = [
    'Herbs, Greens, Vegetables and Fruits',
    'Root Crops Like Turmeric, Ginger etc.'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-green-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <button
            onClick={() => setCurrentPage('products')}
            className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 transition-colors font-semibold text-lg"
          >
            <ArrowLeft size={24} />
            Back to Products
          </button>
          
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-100 to-orange-100 text-green-600 px-8 py-3 rounded-full font-bold mb-8 text-lg">
              Smart Home Farm
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="text-orange-500">SMART</span> <span className="text-green-800">HOME FARM</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Ever wished you could just step outside and pick your own fresh veggies and herbs? With our Smart Home Farm, you can! We’ve made it super easy for families to grow their own food right on the terrace—no green thumb required. Everything’s set up for you, and our tech keeps things running smoothly, so you can enjoy real, homegrown goodness every day.
            </p>
            <div className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-8 py-4 rounded-2xl inline-block font-bold text-xl shadow-xl">
              Turn your terrace into a mini farm and enjoy the taste of truly fresh food at home!
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 md:h-[500px] flex items-center justify-center shadow-2xl border border-gray-200">
              <img
                src={heroImg}
                alt="Smart Home Farm Setup"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">About Smart Home Farm</h2>
            <p className="text-lg text-gray-700">
              We know city life can make it tough to eat fresh, so we created the Smart Home Farm—a simple, plug-and-play way to grow your own food at home. With easy automation, expert help just a call away, and a friendly app, you’ll be amazed at how simple (and fun!) it is to harvest your own veggies and herbs. No more guessing, no more hassle—just real food, grown by you.
            </p>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Description */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
                What can you Grow?
              </h2>
              <div className="space-y-6 mb-12">
                {growOptions.map((option, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <CheckCircle className="text-green-600" size={20} />
                    </div>
                    <p className="text-xl text-gray-700 font-medium">{option}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-green-50 to-orange-50 rounded-3xl p-8 shadow-xl border border-green-100">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Product Description</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Imagine picking your salad right from your own terrace! Our Smart Home Farm is designed for busy families who want to eat better without the fuss. We’ll help you plan what to grow, set everything up, and our smart system keeps your plants happy—whether you prefer soil or soilless. Plus, our team is always here to answer your questions and make sure your garden thrives. It’s fresh food, made easy.
                </p>
              </div>
            </div>
            
            {/* Right Column - Features & Benefits */}
            <div className="space-y-8">
              {/* Product Features */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                  <Settings className="text-green-600" size={28} />
                  Product Features:
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-green-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-3">
                  <Star className="text-orange-600" size={28} />
                  Benefits
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-orange-500 text-white rounded-full p-1 mt-1 flex-shrink-0">
                        <CheckCircle size={16} />
                      </div>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
              Smart Home Farm Gallery
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Take a look at some of our real-life terrace farms! These are actual homes where families are now enjoying their own fresh harvests, thanks to our Smart Home Farm setup.
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Smart Home Farm?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Want to see how easy it is to grow your own food? Let’s chat! We’ll help you get started and handle the setup, so you can enjoy your own homegrown harvest in no time.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={() => { setModalAction('consultation'); setModalOpen(true); }}
            >
              Start Your Terrace Farm
            </button>
          </div>
        </div>
        <QuoteModal open={modalOpen} onClose={() => setModalOpen(false)} product="Smart Home Farm" action={modalAction} />
      </section>
    </div>
  );
};

export default SmartHomeFarmPage;