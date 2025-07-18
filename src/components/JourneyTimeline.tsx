import React from 'react';

const timelineData = [
  {
    year: '2020',
    title: 'Isaayu Founded',
    description: 'The journey of Isaayu begins.',
    logo: '/src/assets/IsaayuLogo_HD.png',
    color: '#00bcd4', // blue
    textColor: 'text-cyan-600',
  },
  {
    year: '2021',
    title: 'Agri360',
    description: 'Launch of Agri360, revolutionizing agriculture.',
    logo: '/src/assets/agri360.jpg',
    color: '#4caf50', // green
    textColor: 'text-green-600',
  },
  {
    year: '2022',
    title: 'Urban Cultivator',
    description: 'Urban Cultivator brings farming to the city.',
    logo: '/src/assets/urban1.jpg',
    color: '#ffc107', // yellow
    textColor: 'text-yellow-600',
  },
  {
    year: '2023',
    title: 'Grow Your Greens',
    description: 'Empowering everyone to grow their own greens.',
    logo: '/src/assets/growyougreen.jpg',
    color: '#8e24aa', // purple
    textColor: 'text-purple-600',
  },
  {
    year: '2024',
    title: 'Smartscapes',
    description: 'Smartscapes for sustainable landscapes.',
    logo: '/src/assets/smartscape.JPEG',
    color: '#f44336', // red
    textColor: 'text-red-600',
  },
  {
    year: '2025',
    title: 'Hydroponics',
    description: 'Hydroponics for water-efficient farming.',
    logo: '/src/assets/Hydroponic.webp',
    color: '#3f51b5', // indigo
    textColor: 'text-indigo-600',
  },
];

const svgWidth = 1100;
const svgHeight = 350;
const startX = 80;
const startY = 300;
const endX = 1020;
const endY = 60;
const step = (endX - startX) / (timelineData.length - 1);
const stepY = (endY - startY) / (timelineData.length - 1);

const getMilestonePositions = () => {
  return timelineData.map((_, idx) => ({
    x: startX + idx * step,
    y: startY + idx * stepY,
  }));
};

const JourneyTimeline: React.FC = () => {
  const positions = getMilestonePositions();

  return (
    <div className="w-full flex flex-col items-center">
      {/* Desktop/Tablet: Slanted SVG Timeline */}
      <div className="hidden md:block w-full overflow-x-auto">
        <div className="relative mx-auto" style={{ maxWidth: svgWidth, minHeight: svgHeight }}>
          <svg width={svgWidth} height={svgHeight} viewBox={`0 0 ${svgWidth} ${svgHeight}`} fill="none" className="w-full h-auto">
            <defs>
              <linearGradient id="timeline-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00bcd4" />
                <stop offset="20%" stopColor="#4caf50" />
                <stop offset="40%" stopColor="#ffc107" />
                <stop offset="60%" stopColor="#8e24aa" />
                <stop offset="80%" stopColor="#f44336" />
                <stop offset="100%" stopColor="#3f51b5" />
              </linearGradient>
            </defs>
            <line
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="url(#timeline-gradient)"
              strokeWidth="18"
              strokeLinecap="round"
            />
          </svg>
          {/* Milestones */}
          {positions.map((pos, idx) => (
            <div
              key={timelineData[idx].year}
              className="absolute flex flex-col items-center"
              style={{ left: pos.x - 60, top: pos.y - 140, width: 120 }}
            >
              {/* Logo above the circle */}
              <div className="mb-2 flex justify-center">
                <img
                  src={timelineData[idx].logo}
                  alt={timelineData[idx].title}
                  className="w-14 h-14 object-contain rounded-full shadow-lg border-4 border-white bg-white"
                  style={{ marginBottom: '-12px', zIndex: 2 }}
                />
              </div>
              {/* Milestone Circle with Year */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-8 border-white text-2xl font-bold"
                style={{
                  background: `radial-gradient(circle at 60% 40%, #fff 60%, ${timelineData[idx].color} 100%)`,
                  color: timelineData[idx].color,
                  boxShadow: `0 8px 32px 0 ${timelineData[idx].color}55`,
                  zIndex: 1,
                }}
              >
                <span>{timelineData[idx].year}</span>
              </div>
              {/* Title and Description */}
              <div className={`mt-4 text-center font-bold text-lg ${timelineData[idx].textColor}`}>{timelineData[idx].title}</div>
              <div className="text-gray-600 text-sm text-center max-w-[140px] mt-1">{timelineData[idx].description}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile: Vertical Timeline */}
      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-cyan-400 via-green-400 via-yellow-400 via-purple-400 via-red-400 to-indigo-400 opacity-30 z-0" style={{ height: '90%' }}></div>
          {timelineData.map((item, idx) => (
            <div key={item.year} className="flex flex-col items-center mb-16 relative z-10">
              <div className="mb-2 flex justify-center">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="w-14 h-14 object-contain rounded-full shadow-lg border-4 border-white bg-white"
                  style={{ marginBottom: '-12px', zIndex: 2 }}
                />
              </div>
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl border-8 border-white text-2xl font-bold"
                style={{
                  background: `radial-gradient(circle at 60% 40%, #fff 60%, ${item.color} 100%)`,
                  color: item.color,
                  boxShadow: `0 8px 32px 0 ${item.color}55`,
                  zIndex: 1,
                }}
              >
                <span>{item.year}</span>
              </div>
              <div className={`mt-4 text-center font-bold text-lg ${item.textColor}`}>{item.title}</div>
              <div className="text-gray-600 text-sm text-center max-w-[140px] mt-1">{item.description}</div>
              {idx < timelineData.length - 1 && (
                <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-100 my-2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline; 