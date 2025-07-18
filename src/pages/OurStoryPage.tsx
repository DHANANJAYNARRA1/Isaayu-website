import React, { useEffect, useRef, useState } from 'react';
import JourneyTimeline from '../components/JourneyTimeline';

const journey = [
  { year: '2020', label: 'ISAAYU Founded', description: 'ISAAYU was founded with a vision to revolutionize urban agriculture and smart farming.' },
  { year: '2021', label: 'Grow Your Greens', description: 'Launched the Grow Your Greens initiative, empowering urban dwellers to cultivate fresh produce at home.' },
  { year: '2022', label: 'Smart Home Farm', description: 'Introduced Smart Home Farm, integrating IoT for automated home gardening.' },
  { year: '2023', label: 'Smartscapes', description: 'Expanded to Smartscapes, offering smart solutions for larger landscapes and communities.' },
  { year: '2024', label: 'Urban Water Management', description: 'Launched Urban Water Management systems for efficient and sustainable water use.' },
  { year: '2025', label: 'Agri360', description: 'Unveiled Agri360, a comprehensive platform for 360° farm automation and analytics.' },
];

const OurStoryPage = () => {
  return (
    <div className="pt-20">
      {/* ABOUT US Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-4">ABOUT US</h2>
          <p className="text-center text-green-700 text-lg mb-2">Isaayu in Sanskrit means ‘Fresh’</p>
          <p className="text-center text-gray-700 text-lg mb-10">We believe –</p>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-3xl mx-auto">
              <div className="flex flex-col items-center md:w-1/2">
                <svg width="48" height="48" fill="none" stroke="#4CAF50" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17v-2a4 4 0 014-4h10a4 4 0 014 4v2"/><path d="M7 13V7a2 2 0 012-2h6a2 2 0 012 2v6"/><path d="M12 17v2"/></svg>
                <p className="mt-4 text-lg text-gray-700 text-center">The closer your farm – the fresher the produce;</p>
              </div>
              <div className="flex flex-col items-center md:w-1/2">
                <svg width="48" height="48" fill="none" stroke="#FFC107" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20"/><path d="M5 12h14"/><path d="M7 7l10 10"/><path d="M17 7L7 17"/></svg>
                <p className="mt-4 text-lg text-gray-700 text-center">The fresher the produce – The fresher you eat;</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-3xl mx-auto">
              <div className="flex flex-col items-center md:w-1/2">
                <svg width="48" height="48" fill="none" stroke="#4CAF50" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
                <p className="mt-4 text-lg text-gray-700 text-center">The fresher you eat  – the healthier your diet.</p>
              </div>
              <div className="flex flex-col items-center md:w-1/2">
                <svg width="48" height="48" fill="none" stroke="#FFC107" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                <p className="mt-4 text-lg text-gray-700 text-center">The healthier your diet – the sooner you attain “The Green Health”.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR MISSION Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center mb-6">OUR MISSION</h2>
          <div className="bg-white border border-green-100 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <p className="text-green-900 text-xl text-center font-semibold">
              Join THE ISAAYU MOVEMENT and attain “The Green Health”<br/>
              At Isaayu we are introducing the idea of growing your greens, herbs, vegetables and fruits in your own space and eating the freshly harvested produce. As the saying goes, “Food is a medicine by itself”.
            </p>
          </div>
        </div>
      </section>

      {/* OUR VISION Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 text-center mb-6">OUR VISION</h2>
          <div className="bg-white border border-orange-100 rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <p className="text-gray-800 text-xl text-center font-semibold">
              With each passing day, people are becoming more conscious and aware of the benefits of a healthy and nutritious diet.<br/>
              Isaayu encourages everyone to be an urban cultivator and adapt to the idea of “The Green Health”<br/>
              by bringing Mother Nature close to them and contributing towards a sustainable and healthy lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* The ISAAYU Difference Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-6">The ISAAYU Difference</h2>
          <div className="bg-white border border-green-100 rounded-2xl p-8 max-w-5xl mx-auto shadow-sm">
            <p className="text-gray-800 text-lg md:text-xl text-center font-medium mb-4">
              <span className="font-bold text-orange-500">Ancient India</span> considered <span className="font-bold text-orange-400">‘Food’</span> to be a form of the <span className="font-bold text-orange-400">“Divine-Annam Parabrahma Swaroopam”</span>, which means Supreme Power<br/>
              and <span className="font-bold text-orange-400">‘Culinary’</span> to be one of the finest arts that was even practiced by the Kings like Nala and Bhima.<br/>
              Our ancestors consumed fresh greens, vegetables, fruits and other food items and lived with the fullest health.<br/>
              They followed the saying, <span className="font-bold text-orange-400">“We are what we eat”.</span><br/>
              As centuries passed by, people started buying food which was sold to them.<br/>
              Food that predominantly contains pesticides used during farming, having an adverse effect to their health.<br/>
              Thus, arose the need for adapting to our ancestral ways of eating fresh.<br/>
              The idea of providing access to freshly grown food at home is revolutionary in itself.
            </p>
          </div>
        </div>
      </section>

      {/* ISAAYU JOURNEY TIMELINE */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-orange-50 to-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">ISAAYU JOURNEY</h2>
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