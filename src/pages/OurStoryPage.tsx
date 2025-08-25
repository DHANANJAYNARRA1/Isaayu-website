import React, { useEffect, useRef, useState } from 'react';
import JourneyTimeline from '../components/JourneyTimeline';

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
    <div className="pt-20 bg-gradient-to-b from-green-50 to-orange-50">
      {/* Our Story Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="bg-white border border-green-200 border-t-orange-400 border-t-4 rounded-2xl p-8 max-w-5xl mx-auto shadow-lg">
            <p className="text-gray-800 text-lg md:text-xl text-center font-medium mb-4 leading-relaxed">
              <span className="font-bold text-orange-500">Ancient India</span> considered <span className="font-bold text-green-600">'Food'</span> to be a form of the <span className="font-bold text-orange-500">"Divine-Annam Parabrahma Swaroopam"</span>, which means Supreme Power<br/>
              and <span className="font-bold text-green-600">'Culinary'</span> to be one of the finest arts that was even practiced by the Kings like Nala and Bhima.<br/>
              Our ancestors consumed fresh greens, vegetables, fruits and other food items and lived with the fullest health.<br/>
              They followed the saying, <span className="font-bold text-orange-500">"We are what we eat".</span><br/>
              As centuries passed by, people started buying food which was sold to them.<br/>
              Food that predominantly contains pesticides used during farming, having an adverse effect to their health.<br/>
              Thus, arose the need for adapting to our ancestral ways of eating fresh.<br/>
              The idea of providing access to <span className="font-bold text-green-600">freshly grown food at home</span> is revolutionary in itself.
            </p>
          </div>
        </div>
      </section>
      
    {/* Fresh Philosophy Section - Reformatted as poem with Image */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-end gap-8 lg:gap-12 max-w-6xl ml-auto mr-8 lg:mr-16">
            {/* Left side - Text content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Isaayu in Sanskrit means 'Fresh'</h3>
              <p className="text-2xl md:text-3xl text-orange-500 font-bold mb-10">We believe –</p>
              
              <div className="bg-gradient-to-br from-green-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-gray-800 font-medium">The closer your farm – the fresher the produce;</p>
                  <p className="text-xl md:text-2xl text-gray-800 font-medium">The fresher the produce – The fresher you eat;</p>
                  <p className="text-xl md:text-2xl text-gray-800 font-medium">The fresher you eat – the healthier your diet;</p>
                  <p className="text-xl md:text-2xl text-gray-800 font-medium">The healthier your diet – the sooner you attain "The Green Health".</p>
                </div>
              </div>
            </div>
            
            
            {/* Right side - Image placeholder */}
            <div className="flex-shrink-0">
              <img 
                src="/assets/story.png" 
                alt="Sanskrit Fresh Theme" 
                className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[30rem] object-cover rounded-2xl shadow-lg border-2 border-green-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION Section */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-orange-500 to-green-500">OUR MISSION</span>
          </h2>
          <div className="bg-white border-t-4 border-b-4 border-t-orange-400 border-b-green-400 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <p className="text-gray-800 text-xl text-center font-semibold">
              Join <span className="text-orange-500 font-bold">THE ISAAYU MOVEMENT</span> and attain <span className="text-green-600 font-bold">"The Green Health"</span><br/>
              At Isaayu we are introducing the idea of growing your greens, herbs, vegetables and fruits in your own space and eating the freshly harvested produce. As the saying goes, <span className="text-orange-500 font-bold">"Food is a medicine by itself"</span>.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VISION Section */}
      <section className="py-12 bg-gradient-to-b from-green-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-green-600 to-orange-500">OUR VISION</span>
          </h2>
          <div className="bg-white border-l-4 border-r-4 border-l-green-400 border-r-orange-400 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <p className="text-gray-800 text-xl text-center font-semibold">
              With each passing day, people are becoming more conscious and aware of the benefits of a <span className="text-green-600 font-bold">healthy and nutritious diet</span>.<br/>
              Isaayu encourages everyone to be an <span className="text-orange-500 font-bold">urban cultivator</span> and adapt to the idea of <span className="text-green-600 font-bold">"The Green Health"</span><br/>
              by bringing Mother Nature close to them and contributing towards a <span className="text-orange-500 font-bold">sustainable and healthy lifestyle</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ISAAYU JOURNEY TIMELINE */}
      <JourneyTimeline />
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
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-orange-400 border-4 border-white shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-125 animate-pulse">
            <span className="text-white font-bold">{journey[idx].year.slice(2)}</span>
          </div>
          {/* Tooltip on hover */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-24 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-20">
            <div className="bg-white border border-green-200 shadow-lg rounded-xl px-4 py-2 text-center min-w-[120px] sm:min-w-[150px] md:min-w-[180px]">
              <div className="font-bold text-green-700">{journey[idx].year}</div>
              <div className="text-gray-700 text-sm">{journey[idx].label}</div>
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
    const segmentTime = 2500; // 2.5 seconds to travel between nodes
    const pauseTime = 2500; // 2.5 seconds pause at each node
    let isMounted = true;
    let currentIdx = 0;

    function goToNode(idx: number) {
      if (!isMounted || !path) return;
      setActiveIdx(idx);
      // Move dot to node position
      const t = idx / (n - 1);
      const point = path.getPointAtLength(t * length);
      if (dotRef.current) {
        dotRef.current.style.left = `${point.x - 12}px`;
        dotRef.current.style.top = `${point.y - 12}px`;
      }
      // Pause at node, then animate to next
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
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="M12 12C12 7 16 4 20 4"/><path d="M12 12C12 7 8 4 4 4"/></svg>
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