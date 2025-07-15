import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import QuoteModal from './QuoteModal';

type HeroProps = {
  setCurrentPage?: (page: string) => void;
};

const Hero: React.FC<HeroProps> = ({ setCurrentPage: _ }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formType, setFormType] = useState<'quotation' | 'demo'>('quotation');

  // Updated carousel with accurate product descriptions and relevant images
  const carouselImages = [
    {
      src: "/src/assets/terracegarden.jpg", // <-- Place your terrace garden image path here
      title: "Smart Home Farm - Terrace Gardens",
      subtitle: "Automated Terrace Farming Solutions",
      description: "Transform your terrace into a thriving automated garden with customized farming systems for your family's nutritional needs"
    },
    {
      src: "/src/assets/Hydroponic.webp", // <-- Place your Grow Your Greens image path here
      title: "Grow Your Greens - Hydroponic Balcony Systems",
      subtitle: "Automated Nutrient Dosing for Balconies",
      description: "Hydroponic systems with automatic water and nutrition delivery for fresh greens right on your balcony"
    },
    {
      src: "/src/assets/watermanagement.jpg", // <-- Place your Urban Water Management image path here
      title: "Urban Water Management - Smart Home Control",
      subtitle: "Water & Electricity Monitoring via Mobile",
      description: "Control and monitor your home's water usage, save electricity, and manage everything through your mobile app"
    },
    {
      src: "/src/assets/smartscape.JPEG", // <-- Place your Smartscapes image path here
      title: "Smartscapes - Large Landscape Automation",
      subtitle: "Sensor-Based Irrigation for Open Lawns",
      description: "Fully automated watering systems for universities, parks, and large open spaces with smart sensors and scheduling"
    },
    {
      src: "/src/assets/agri360.jpg", // <-- Place your Agri360 image path here
      title: "Agri360 - Complete Farm Automation",
      subtitle: "NPK Auto-Dosing for Agricultural Fields",
      description: "Complete agricultural solution with automatic NPK dosing and comprehensive farm management for large-scale farming"
    }
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const scrollToProducts = () => {
    const element = document.getElementById('why-isaayu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openQuoteForm = (type: 'quotation' | 'demo') => {
    setFormType(type);
    setShowQuoteForm(true);
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full Screen Carousel */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative h-full">
                  <div className="w-full h-full relative flex items-center justify-center">
                    {image.src ? (
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-orange-100 flex items-center justify-center">
                        <div className="text-center text-green-600 max-w-md">
                          <div className="text-6xl mb-4">🌱</div>
                          <p className="text-2xl font-bold mb-2">{image.title}</p>
                          <p className="text-lg">{image.subtitle}</p>
                          <p className="text-sm mt-4 text-gray-600">Upload high-resolution {image.title.split(' - ')[0]} image here</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 text-left max-w-7xl mx-auto px-4 pt-20">
          <div className="max-w-4xl">
            {/* Badge with ISAAYU Logo */}
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full px-8 py-4 mb-8 shadow-xl">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="/src/assets/IsaayuLogo_HD.png" 
                  alt="ISAAYU Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <Sparkles className="text-orange-500" size={24} />
              <span className="text-white font-bold text-lg">Smart Agriculture Revolution</span>
            </div>

            {/* Dynamic Content Based on Current Slide */}
            <div className="transition-all duration-500">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
                {carouselImages[currentSlide].title}
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-orange-400 font-bold drop-shadow-lg">
                {carouselImages[currentSlide].subtitle}
              </p>
              
              <p className="text-lg md:text-xl mb-12 text-white/95 leading-relaxed max-w-3xl drop-shadow-lg">
                {carouselImages[currentSlide].description}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button
                onClick={scrollToProducts}
                className="mt-8 bg-green-600 text-white hover:bg-green-700 py-4 px-8 rounded-xl font-bold text-xl shadow-md border border-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
              >
                Explore Solutions
              </button>
              
              <button 
                onClick={() => openQuoteForm('quotation')}
                className="group border-3 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 md:px-12 py-5 md:py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3 justify-center backdrop-blur-md bg-white/15 shadow-xl"
              >
                <Play size={24} className="group-hover:scale-110 transition-transform" />
                Get Quotation
              </button>

              <button 
                onClick={() => openQuoteForm('demo')}
                className="group border-3 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 md:px-12 py-5 md:py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3 justify-center backdrop-blur-md bg-white/15 shadow-xl"
              >
                <Play size={24} className="group-hover:scale-110 transition-transform" />
                Book Free Demo
              </button>
            </div>

            {/* Stats */}
           
          </div>
        </div>
      </section>

      {/* Quote/Demo Form Modal */}
      <QuoteModal open={showQuoteForm} onClose={() => setShowQuoteForm(false)} product="Landing Page" action={formType} />
    </>
  );
};

export default Hero;