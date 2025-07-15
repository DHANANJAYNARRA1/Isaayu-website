import React, { useState, useEffect } from 'react';
import { Leaf, Heart, Sprout, Home, Recycle, ArrowRight, Shield } from 'lucide-react';
import illustrativeImg from '../assets/illustrative.jpg';

const UrbanCultivator = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: Leaf,
      title: 'Environment Friendly',
      description: 'Reduce carbon footprint with sustainable urban farming practices that help heal our planet',
      color: 'from-green-500 to-green-600',
      position: { top: '5%', left: '50%', transform: 'translateX(-50%)' },
      tooltipPosition: 'bottom'
    },
    {
      icon: Heart,
      title: 'Having your nutritions in your own space',
      description: 'Fresh, organic produce rich in vitamins and minerals right at your doorstep',
      color: 'from-orange-500 to-orange-600',
      position: { top: '25%', right: '10%' },
      tooltipPosition: 'left'
    },
    {
      icon: Home,
      title: 'All time access to Fresh Harvest',
      description: '24/7 availability of pesticide-free vegetables and herbs for your family',
      color: 'from-green-500 to-green-600',
      position: { bottom: '25%', right: '10%' },
      tooltipPosition: 'left'
    },
    {
      icon: Sprout,
      title: 'Growing More in Less Space',
      description: 'Maximize yield with vertical and smart farming techniques in minimal space',
      color: 'from-emerald-500 to-emerald-600',
      position: { bottom: '5%', left: '50%', transform: 'translateX(-50%)' },
      tooltipPosition: 'top'
    },
    {
      icon: Recycle,
      title: 'Self Sustainable',
      description: 'Complete ecosystem for sustainable food production and waste management',
      color: 'from-orange-500 to-orange-600',
      position: { bottom: '25%', left: '10%' },
      tooltipPosition: 'right'
    },
    {
      icon: Shield,
      title: 'Healthy Living',
      description: 'Pesticide-free, chemical-free fresh produce for your family\'s optimal health',
      color: 'from-blue-500 to-blue-600',
      position: { top: '25%', left: '10%' },
      tooltipPosition: 'right'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getTooltipClasses = (position: string) => {
    const baseClasses = "absolute z-50 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-orange-200 max-w-xs animate-fadeIn";
    
    switch (position) {
      case 'top':
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 mb-4`;
      case 'bottom':
        return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-4`;
      case 'left':
        return `${baseClasses} right-full top-1/2 transform -translate-y-1/2 mr-4`;
      case 'right':
        return `${baseClasses} left-full top-1/2 transform -translate-y-1/2 ml-4`;
      default:
        return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 mt-4`;
    }
  };

  const getArrowClasses = (position: string) => {
    const baseClasses = "absolute w-4 h-4 bg-white border";
    
    switch (position) {
      case 'top':
        return `${baseClasses} top-full left-1/2 transform -translate-x-1/2 -mt-2 border-b border-r border-orange-200 rotate-45`;
      case 'bottom':
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 -mb-2 border-t border-l border-orange-200 rotate-45`;
      case 'left':
        return `${baseClasses} left-full top-1/2 transform -translate-y-1/2 -ml-2 border-t border-r border-orange-200 rotate-45`;
      case 'right':
        return `${baseClasses} right-full top-1/2 transform -translate-y-1/2 -mr-2 border-b border-l border-orange-200 rotate-45`;
      default:
        return `${baseClasses} bottom-full left-1/2 transform -translate-x-1/2 -mb-2 border-t border-l border-orange-200 rotate-45`;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: THE GREEN AFFAIR */}
          <div className="text-left md:text-left text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">THE GREEN AFFAIR</h2>
            <p className="text-lg text-gray-700 mb-4">There is something so satisfying about eating Freshly Harvested Greens & Vegetables</p>
            <div className="font-bold text-green-700 space-y-1">
              <div>Grown at home!</div>
              <div>Grown with love!</div>
            </div>
          </div>

          {/* Center: Illustration Image */}
          <div className="flex justify-center">
            <img src={illustrativeImg} alt="Illustration" className="max-h-72 md:max-h-96 w-auto rounded-xl shadow-lg object-contain" />
          </div>

          {/* Right: ISAAYU AND YOU */}
          <div className="text-right md:text-right text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">ISAAYU AND YOU</h2>
            <p className="text-lg text-gray-700 mb-4">
              Ever Imagined Farming without getting your hands dirty? Farming without soil and manure? Farming within the little space available at home? Isaayu brings to you the ease of home farming at your doorstep with our <span className="text-orange-500 font-bold">"Grow Your Greens"</span> Home Kits. Inspiring a green and sustainable living!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrbanCultivator;