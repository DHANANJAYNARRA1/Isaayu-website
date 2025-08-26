import React, { useEffect, useRef, useState } from 'react';
import JourneyTimeline from '../components/JourneyTimeline';

// Data for the journey timeline
const journey = [
  { year: '2020', label: 'ISAAYU Founded', description: 'ISAAYU was founded with a vision to revolutionize urban agriculture and smart farming.' },
  { year: '2021', label: 'Smart Home Farm', description: 'Introduced Smart Home Farm, integrating IoT for automated home gardening.' },
  { year: '2022', label: 'Grow Your Greens', description: 'Launched the Grow Your Greens initiative, empowering urban dwellers to cultivate fresh produce at home.' },
  { year: '2023', label: 'Urban Water Management', description: 'Launched Urban Water Management systems for efficient and sustainable water use.' },
  { year: '2024', label: 'Smartscapes', description: 'Expanded to Smartscapes, offering smart solutions for larger landscapes and communities.' },
  { year: '2025', label: 'Agri360', description: 'Unveiled Agri360, a comprehensive platform for 360° farm automation and analytics.' },
];

const OurStoryPage = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-green-50 via-orange-50 to-green-100 min-h-screen">
      {/* Hero Section with Enhanced Card */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-orange-50 to-green-100 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-300 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 border-t-orange-400 border-t-8 rounded-3xl p-8 md:p-12 max-w-6xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Decorative Corner Elements */}
           
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-orange-500 to-green-600">
                  Our Sacred Story
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg md:prose-xl max-w-none text-center">
              <p className="text-gray-800 text-lg md:text-xl font-medium mb-6 leading-relaxed">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full font-bold text-xl mb-2">Ancient India</span> 
                <br />considered <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full font-bold">'Food'</span> to be a form of the 
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-orange-100 to-green-100 text-orange-600 rounded-full font-bold mx-2">"Divine-Annam Parabrahma Swaroopam"</span>, 
                which means Supreme Power
              </p>
              
              <p className="text-gray-800 text-lg md:text-xl font-medium mb-6 leading-relaxed">
                and <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full font-bold">'Culinary'</span> to be one of the finest arts that was even practiced by the Kings like Nala and Bhima.
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-orange-50 p-6 rounded-2xl border border-green-200 mb-6">
                <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
                  Our ancestors consumed fresh greens, vegetables, fruits and other food items and lived with the fullest health.<br />
                  They followed the saying, <span className="inline-block px-4 py-2 bg-orange-200 text-orange-700 rounded-full font-bold text-xl">"We are what we eat".</span>
                </p>
              </div>
              
              <p className="text-gray-800 text-lg md:text-xl font-medium mb-6 leading-relaxed">
                As centuries passed by, people started buying food which was sold to them.<br />
                Food that predominantly contains pesticides used during farming, having an adverse effect to their health.<br />
                Thus, arose the need for adapting to our ancestral ways of eating fresh.
              </p>
              
              <div className="bg-gradient-to-br from-green-100 to-orange-100 p-8 rounded-3xl border-2 border-green-300 mt-8">
                <p className="text-gray-800 text-xl md:text-2xl font-bold leading-relaxed">
                  The idea of providing access to <span className="text-green-600 bg-white px-4 py-2 rounded-full shadow-lg">freshly grown food at home</span> is revolutionary in itself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fresh Philosophy Section with Video Support */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-orange-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-7xl mx-auto">
            
            {/* Left side - Enhanced Text content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 mb-4">
                  Isaayu in Sanskrit means 
                  <span className="block text-orange-500 mt-2">'Fresh'</span>
                </h3>
                <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-orange-400 rounded-full mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-3xl md:text-4xl text-orange-500 font-bold mb-12 relative">
                We believe –
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full"></div>
              </p>
              
              {/* Enhanced Philosophy Cards */}
              <div className="space-y-6">
                {[
                  "The closer your farm – the fresher the produce;",
                  "The fresher the produce – The fresher you eat;",
                  "The fresher you eat – the healthier your diet;",
                  "The healthier your diet – the sooner you attain \"The Green Health\"."
                ].map((text, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-white via-green-50 to-orange-50 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-green-300 transition-all duration-500 transform hover:-translate-y-1">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {index + 1}
                        </div>
                        <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed flex-1">
                          {text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          {/* Right side - Enhanced Image Section */}
          <div className="flex-shrink-0 relative">
              <div className="relative group">
                
                {/* Main Image Container */}
                <div className="relative bg-white p-4 rounded-3xl shadow-2xl border-4 border-green-200 hover:border-orange-300 transition-all duration-500 transform group-hover:scale-105">
                  
                  {/* Enhanced Image with loading states */}
                  <img
                    src="/assets/i1.webp"
                    alt="Sanskrit Fresh Theme - Isaayu Philosophy"
                    className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Image Overlay Effect on Hover */}
                  <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                   
                  </div>
                  
                  {/* Corner Decorations */}
                 
                </div>
                
                {/* Floating Elements */}
                
              </div>
            </div>
          </div>
        </div>
      </section>
              
              

      {/* Enhanced Mission Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-green-50 to-orange-100 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-orange-500 to-green-500">
                OUR MISSION
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm border-t-8 border-b-8 border-t-orange-400 border-b-green-400 rounded-3xl p-10 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100 to-orange-100"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-100 to-green-100 px-8 py-4 rounded-full border-2 border-orange-300 shadow-lg">
                    <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7i10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                    <span className="text-2xl font-bold text-orange-600">MOVEMENT</span>
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.72c.48-.15 1.04-.25 1.34-.25 2.76 0 5-2.24 5-5 0-2.76-2.24-5-5-5-.26 0-.53.01-.78.05L7 7l10 1z"/>
                    </svg>
                  </div>
                </div>

                <p className="text-gray-800 text-xl md:text-2xl text-center font-semibold leading-relaxed">
                  Join{' '}
                  <span className="inline-block px-4 py-2 bg-orange-200 text-orange-600 rounded-full font-bold text-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                    THE ISAAYU MOVEMENT
                  </span>{' '}
                  and attain{' '}
                  <span className="inline-block px-4 py-2 bg-green-200 text-green-600 rounded-full font-bold text-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                    "The Green Health"
                  </span>
                </p>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl border border-green-200">
                  <p className="text-gray-800 text-lg md:text-xl text-center font-medium leading-relaxed">
                    At Isaayu we are introducing the idea of growing your greens, herbs, vegetables and fruits in your own space and eating the freshly harvested produce. As the saying goes,{' '}
                    <span className="inline-block px-4 py-2 bg-orange-300 text-orange-700 rounded-full font-bold text-xl shadow-md">
                      "Food is a medicine by itself"
                    </span>.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
             
            </div>
          </div>
        </div>
      </section>

                

      {/* Enhanced Mission Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-green-50 to-orange-100 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/4 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-orange-500 to-green-500">
                OUR MISSION
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-green-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm border-t-8 border-b-8 border-t-orange-400 border-b-green-400 rounded-3xl p-10 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100 to-orange-100"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-100 to-green-100 px-8 py-4 rounded-full border-2 border-orange-300 shadow-lg">
                    <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7i10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                    <span className="text-2xl font-bold text-orange-600">MOVEMENT</span>
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.72c.48-.15 1.04-.25 1.34-.25 2.76 0 5-2.24 5-5 0-2.76-2.24-5-5-5-.26 0-.53.01-.78.05L7 7l10 1z"/>
                    </svg>
                  </div>
                </div>

                <p className="text-gray-800 text-xl md:text-2xl text-center font-semibold leading-relaxed">
                  Join{' '}
                  <span className="inline-block px-4 py-2 bg-orange-200 text-orange-600 rounded-full font-bold text-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                    THE ISAAYU MOVEMENT
                  </span>{' '}
                  and attain{' '}
                  <span className="inline-block px-4 py-2 bg-green-200 text-green-600 rounded-full font-bold text-2xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                    "The Green Health"
                  </span>
                </p>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl border border-green-200">
                  <p className="text-gray-800 text-lg md:text-xl text-center font-medium leading-relaxed">
                    At Isaayu we are introducing the idea of growing your greens, herbs, vegetables and fruits in your own space and eating the freshly harvested produce. As the saying goes,{' '}
                    <span className="inline-block px-4 py-2 bg-orange-300 text-orange-700 rounded-full font-bold text-xl shadow-md">
                      "Food is a medicine by itself"
                    </span>.
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Vision Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-orange-50 to-green-100 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-16 w-48 h-48 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 left-16 w-36 h-36 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-green-600 to-orange-500">
                OUR VISION
              </span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-400 to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm border-l-8 border-r-8 border-l-green-400 border-r-orange-400 rounded-3xl p-10 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-orange-100 to-green-100"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-100 to-orange-100 px-8 py-4 rounded-full border-2 border-green-300 shadow-lg">
                    <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-2xl font-bold text-green-600">VISION</span>
                    <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-800 text-xl md:text-2xl text-center font-semibold leading-relaxed">
                    With each passing day, people are becoming more conscious and aware of the benefits of a{' '}
                    <span className="inline-block px-4 py-2 bg-green-200 text-green-600 rounded-full font-bold shadow-lg">
                      healthy and nutritious diet
                    </span>.
                  </p>

                  <div className="bg-gradient-to-r from-orange-50 to-green-50 p-6 rounded-2xl border border-orange-200">
                    <p className="text-gray-800 text-xl md:text-2xl text-center font-semibold leading-relaxed">
                      Isaayu encourages everyone to be an{' '}
                      <span className="inline-block px-4 py-2 bg-orange-200 text-orange-600 rounded-full font-bold shadow-lg">
                        urban cultivator
                      </span>{' '}
                      and adapt to the idea of{' '}
                      <span className="inline-block px-4 py-2 bg-green-200 text-green-600 rounded-full font-bold shadow-lg">
                        "The Green Health"
                      </span>
                    </p>
                  </div>

                  <p className="text-gray-800 text-xl md:text-2xl text-center font-semibold leading-relaxed">
                    by bringing Mother Nature close to them and contributing towards a{' '}
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-200 to-green-200 text-gray-800 rounded-full font-bold shadow-lg">
                      sustainable and healthy lifestyle
                    </span>.
                  </p>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-white via-green-50 to-orange-50">
        <div className="container mx-auto px-4">
          
          <JourneyTimeline />
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;

const JourneyNodes = ({ fixedWidth, vertical = false }: { fixedWidth: number, vertical?: boolean }) => {
  const [positions, setPositions] = useState<{x: number, y: number}[]>([]);
  useEffect(() => {
    const path = document.getElementById(vertical ? 'journey-path-vertical' : 'journey-path') as SVGPathElement | null;
    if (!path) return;
    const length = path.getTotalLength();
    const n = journey.length;
    const posArr = [];
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      const point = path.getPointAtLength(t * length);
      posArr.push({ x: point.x, y: point.y });
    }
    setPositions(posArr);
  }, [vertical]);
  if (positions.length !== journey.length) return null;
  return (
    <div className={`absolute left-0 top-0 z-10 ${vertical ? 'w-[60px] h-[500px]' : 'w-full min-w-[600px] sm:min-w-[700px] md:min-w-[900px] h-[220px]'} pointer-events-none`}>
      {positions.map((pos, idx) => (
        <div
          key={journey[idx].year}
          className="group absolute"
          style={vertical ? { left: `${pos.x - 20}px`, top: `${pos.y - 20}px` } : { left: `${pos.x - 20}px`, top: `${pos.y - 20}px` }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-orange-400 border-4 border-white shadow-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-125 animate-pulse">
            <span className="text-white font-bold text-sm">{journey[idx].year.slice(2)}</span>
          </div>
          {/* Enhanced Tooltip */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-28 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-20">
            <div className="bg-white border-2 border-green-200 shadow-2xl rounded-2xl px-6 py-4 text-center min-w-[160px] sm:min-w-[200px] md:min-w-[240px] transform scale-95 group-hover:scale-100 transition-transform duration-300">
              <div className="font-bold text-green-700 text-lg">{journey[idx].year}</div>
              <div className="text-orange-600 text-base font-semibold mb-2">{journey[idx].label}</div>
              <div className="text-gray-600 text-sm leading-relaxed">{journey[idx].description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const AnimatedJourneyDot = ({ fixedWidth, vertical = false }: { fixedWidth: number, vertical?: boolean }) => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  useEffect(() => {
    const path = document.getElementById(vertical ? 'journey-path-vertical' : 'journey-path') as SVGPathElement | null;
    if (!path) return;
    const length = path.getTotalLength();
    const n = journey.length;
    const segmentTime = 2500;
    const pauseTime = 2500;
    let isMounted = true;
    let currentIdx = 0;

    function goToNode(idx: number) {
      if (!isMounted || !path) return;
      setActiveIdx(idx);
      const t = idx / (n - 1);
      const point = path.getPointAtLength(t * length);
      if (dotRef.current) {
        dotRef.current.style.left = `${point.x - 15}px`;
        dotRef.current.style.top = `${point.y - 15}px`;
      }
      setTimeout(() => {
        if (!isMounted || !path) return;
        const nextIdx = (idx + 1) % n;
        animateToNextNode(idx, nextIdx);
      }, pauseTime);
    }

    function animateToNextNode(fromIdx: number, toIdx: number) {
      if (!isMounted || !path) return;
      setActiveIdx(-1); // Hide popup while traveling
      const fromT = fromIdx / (n - 1);
      const toT = toIdx / (n - 1);
      const fromLen = fromT * length;
      const toLen = toT * length;
      let startTime: number | null = null;
      function animate(ts: number) {
        if (!isMounted || !path) return;
        if (startTime === null) startTime = ts;
        const elapsed = ts - startTime;
        const progress = Math.min(elapsed / segmentTime, 1);
        const currentLen = fromLen + (toLen - fromLen) * progress;
        const point = path.getPointAtLength(currentLen);
        if (dotRef.current) {
          dotRef.current.style.left = `${point.x - 12}px`;
          dotRef.current.style.top = `${point.y - 12}px`;
        }
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          goToNode(toIdx);
        }
      }
      requestAnimationFrame(animate);
    }

    // Start at the first node
    goToNode(0);
    return () => { isMounted = false; };
  }, [vertical]);
  return (
    <>
      <div ref={dotRef} className="absolute z-20 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-orange-300 border-2 border-white shadow-lg flex items-center justify-center animate-pulse" style={{ minWidth: 0 }}>
        {/* Sapling icon (simple SVG) */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22i12"/><path d="M12 12C12 7 16 4 20 4"/><path d="M12 12C12 7 8 4 4 4"/></svg>
      </div>
      {/* Animated popup for active node (only show when paused at a node) */}
      {activeIdx >= 0 && <JourneyPopup idx={activeIdx} fixedWidth={fixedWidth} vertical={vertical} />}
    </>
  );
};

const JourneyPopup = ({ idx, fixedWidth, vertical = false }: { idx: number, fixedWidth: number, vertical?: boolean }) => {
  const [pos, setPos] = useState<{x: number, y: number} | null>(null);
  useEffect(() => {
    const path = document.getElementById(vertical ? 'journey-path-vertical' : 'journey-path') as SVGPathElement | null;
    if (!path) return;
    const length = path.getTotalLength();
    const t = idx / (journey.length - 1);
    const point = path.getPointAtLength(t * length);
    setPos({ x: point.x, y: point.y });
  }, [idx, vertical]);
  if (!pos) return null;
  return (
    <div
      className={`absolute z-30 left-0 top-0 ${vertical ? 'w-[60px] h-[500px]' : 'w-full min-w-[600px] sm:min-w-[700px] md:min-w-[900px] h-[220px]'} pointer-events-none`}
      style={{ pointerEvents: 'none' }}
    >
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-32 animate-fade-in-up"
        style={vertical ? { left: `${pos.x}px`, top: `${pos.y - 60}px` } : { left: `${pos.x}px`, top: `${pos.y - 60}px` }}
      >
        <div className="bg-white border-2 border-green-300 shadow-2xl rounded-2xl px-4 sm:px-6 md:px-8 py-4 text-center min-w-[140px] sm:min-w-[180px] md:min-w-[220px] max-w-xs mx-auto transition-all duration-300 scale-100 opacity-100">
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-700 mb-1">{journey[idx].year}</div>
          <div className="text-base sm:text-lg font-semibold text-orange-600 mb-2">{journey[idx].label}</div>
          <div className="text-gray-700 text-xs sm:text-sm md:text-base">{journey[idx].description}</div>
        </div>
      </div>
    </div>
  );
};
