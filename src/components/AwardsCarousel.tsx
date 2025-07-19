import React from 'react';
import { Trophy, ChevronLeft, ChevronRight, Calendar, MapPin, Image as ImageIcon } from 'lucide-react';

const awards = [
  {
    title: 'THE AVISHKAR KISAN KRANTHI AWARD',
    event: 'Agritech Pavilion, 2nd Edition of Startup Mahakumbh',
    location: 'Delhi',
    year: '2025',
    description: 'Received THE AVISHKAR KISAN KRANTHI AWARD @ THE AGRITECH PAVILION, 2nd EDITION of STARTUP MAHAKUMBH.',
    image: '/assets/startup-mahakumbh-award.jpeg',
    color: 'from-yellow-400 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50'
  },
  {
    title: 'Best Agritech Startup',
    event: 'World Association of Medium and Small Enterprises, Powered by MSME, GoI',
    location: 'Coimbatore',
    year: '2024',
    description: 'Received the Award for Best Agritech Startup from World Association of Medium and Small Enterprises, Powered by MSME, GoI.',
    image: '/assets/Award From WASME 2024.JPG',
    color: 'from-blue-400 to-blue-600',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    title: 'Award for IoT and Automation',
    event: 'Department of Horticulture, Government of Telangana',
    location: 'Hyderabad',
    year: '2024',
    description: 'Award for IoT and Automation from The Department of Horticulture, Government of Telangana.',
    image: '/assets/AWARD FROM TELANGANA HORTICULTURE 2025.jpeg',
    color: 'from-green-400 to-green-600',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    title: 'Innovation and Technology in Urban Farming',
    event: 'Department of Horticulture, Government of Telangana',
    location: 'Hyderabad',
    year: '2024',
    description: 'Awards for Innovation and Technology in Urban Farming by Department of Horticulture, Government of Telangana.',
    image: '/assets/Telangana Horticulture Awards - 2024.jpeg',
    color: 'from-orange-400 to-orange-600',
    bgGradient: 'from-orange-50 to-yellow-50'
  },
  {
    title: 'Urban Farming Initiatives',
    event: 'Department of Horticulture, Government of Telangana',
    location: 'Hyderabad',
    year: '2023',
    description: 'Award for Urban Farming Initiatives by the Department of Horticulture, Government of Telangana.',
    image: '/assets/Telangana Horticulture Awards - Image 2.jpeg', // Placeholder, user will provide
    color: 'from-green-500 to-green-700',
    bgGradient: 'from-green-50 to-emerald-50'
  },
  {
    title: 'Innovation in Horticulture Technology',
    event: 'Department of Horticulture, Government of Telangana',
    location: 'Hyderabad',
    year: '2023',
    description: 'Award for Innovation in Horticulture Technology by Department of Horticulture, Government of Telangana.',
    image: '/src/assets/IMG_4384.JPEG', // Placeholder, user will provide
    color: 'from-purple-400 to-purple-600',
    bgGradient: 'from-purple-50 to-pink-50'
  }
];

const AwardsCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % awards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awards.length) % awards.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-orange-50 to-green-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-orange-300/15 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-600 px-8 py-3 rounded-full font-bold mb-8 text-lg shadow-lg">
            <Trophy className="text-yellow-500" size={24} />
            Awards & Recognition
          </div>
          <h2 className="text-2xl md:text-5xl font-semibold mb-4 md:mb-6">
            <span className="text-green-800">Celebrating Our</span><br/>
            <span className="text-orange-500">Achievements</span>
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto">
            Proud to be recognized by leading organizations for our innovation in smart agriculture and sustainable farming solutions
          </p>
        </div>

        {/* Awards Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex flex-nowrap overflow-x-auto md:overflow-x-visible">
                {awards.map((award, index) => (
                  <div key={index} className="min-w-[90vw] md:min-w-0 w-full flex-shrink-0">
                    <div className={`bg-gradient-to-br ${award.bgGradient} rounded-3xl p-4 md:p-12 shadow-2xl border border-white/50 backdrop-blur-sm`}>
                      <div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
                        {/* Award Content */}
                        <div className="space-y-3 md:space-y-6">
                          <div className="flex items-center gap-2 md:gap-4">
                            <div className={`bg-gradient-to-br ${award.color} w-10 h-10 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                              <Trophy className="text-white" size={20} md:size={32} />
                            </div>
                            <div>
                              <h3 className="text-lg md:text-3xl font-semibold md:font-bold text-slate-800">
                                {award.title}
                              </h3>
                              <div className="text-orange-600 font-medium md:font-semibold text-xs md:text-base mt-1">{award.event}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 text-slate-600">
                              <Calendar size={16} className="text-green-500" />
                              <span className="font-semibold">{award.year}</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-600">
                              <MapPin size={16} className="text-blue-500" />
                              <span className="font-semibold">{award.location}</span>
                            </div>
                          </div>
                          <p className="text-slate-700 leading-relaxed text-lg">
                            {award.description}
                          </p>
                        </div>
                        {/* Award Image */}
                        <div className="lg:order-first">
                          <div className="bg-white/80 backdrop-blur-sm rounded-2xl h-80 flex items-center justify-center shadow-xl border border-white/50 overflow-hidden">
                            {award.image ? (
                              <img 
                                src={award.image} 
                                alt={award.title}
                                className="w-full h-full object-cover rounded-2xl"
                              />
                            ) : (
                              <div className="flex flex-col items-center justify-center w-full h-full text-slate-400">
                                <ImageIcon size={64} />
                                <span className="mt-2 text-lg">Image coming soon</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-600 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-slate-600 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight size={24} />
          </button>
          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-orange-500 to-green-500 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsCarousel;