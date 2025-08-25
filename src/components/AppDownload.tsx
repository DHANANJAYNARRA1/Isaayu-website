import React, { useEffect } from 'react';
import { Smartphone, Download, ArrowDown, ChevronRight } from 'lucide-react';

// This component is hidden as per request

interface AppDownloadProps {
  productName?: string;
  className?: string;
  variant?: 'full' | 'compact' | 'floating';
  animationDelay?: number;
}

const AppDownload: React.FC<AppDownloadProps> = ({
  productName = '',
  className = '',
  variant = 'full',
  animationDelay = 0
}) => {
  // Hidden as per request
  return null; // Component is hidden - all functionality below is ignored
  
  // The code below is not executed due to the early return above
  // Placeholder for actual Play Store link
  const playStoreLink = 'https://play.google.com/store/apps/details?id=com.isaayu.app';
  
  // Animation effect
  useEffect(() => {
    const element = document.getElementById('app-download-animation');
    if (element) {
      setTimeout(() => {
        element.classList.add('animate-bounce');
        
        // Stop animation after 3 seconds
        setTimeout(() => {
          element.classList.remove('animate-bounce');
        }, 3000);
      }, animationDelay);
    }
  }, [animationDelay]);

  if (variant === 'compact') {
    return (
      <div className={`flex items-center ${className}`}>
        <a 
          href={playStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg text-xs"
        >
          {/* Mini Phone Mockup */}
          <div className="relative w-4 sm:w-5 h-6 sm:h-7 bg-black rounded-lg overflow-hidden flex items-center justify-center border border-gray-700">
            <div className="w-full h-full bg-white flex items-center justify-center">
              <img 
                src="/assets/IsaayuLogo_HD.png" 
                alt="ISAAYU App" 
                className="w-2.5 sm:w-3 h-2.5 sm:h-3 object-contain" 
              />
            </div>
          </div>
          <span>Get the App</span>
        </a>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className={`fixed bottom-3 sm:bottom-4 right-3 sm:right-4 z-50 ${className}`}>
        <div className="relative">
          <div id="app-download-animation" className="absolute -top-6 sm:-top-7 right-3 text-green-600">
            <ArrowDown size={16} className="animate-bounce" />
          </div>
          <a 
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-110 shadow-xl text-xs sm:text-sm"
          >
            {/* Mini Phone Mockup */}
            <div className="relative w-5 sm:w-6 h-7 sm:h-8 bg-black rounded-lg overflow-hidden flex items-center justify-center border border-white/30">
              <div className="w-full h-full bg-white flex items-center justify-center">
                <img 
                  src="/assets/IsaayuLogo_HD.png" 
                  alt="ISAAYU App" 
                  className="w-3 sm:w-4 h-3 sm:h-4 object-contain" 
                />
              </div>
            </div>
            <span>Download App</span>
          </a>
        </div>
      </div>
    );
  }

  // Default full variant
  return (
    <div className={`bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-700 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-4">
          {/* Mobile Phone Mockup */}
          <div className="relative w-14 sm:w-16 h-28 sm:h-32 bg-black rounded-xl p-1 border-2 border-gray-800 shadow-xl mb-2 md:mb-0">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-1 sm:h-1.5 bg-black rounded-b-lg z-10"></div>
            <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col items-center justify-center p-1.5">
              {/* ISAAYU Logo */}
              <img 
                src="/assets/IsaayuLogo_HD.png" 
                alt="ISAAYU App" 
                className="w-6 sm:w-8 h-6 sm:h-8 object-contain mb-1" 
              />
              <div className="text-green-700 text-center">
                <div className="text-[10px] font-bold mb-0.5">ISAAYU</div>
                <div className="text-[8px]">Smart Agriculture</div>
              </div>
              <div className="mt-1 animate-pulse">
                <ChevronRight size={8} className="text-green-600" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-0.5 text-center md:text-left">
              Start Automating {productName ? productName : 'Your Garden'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 text-center md:text-left">
              Download our app and control your smart garden from anywhere!
            </p>
          </div>
        </div>
        
        <a 
          href={playStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg group mt-2 md:mt-0 text-xs sm:text-sm"
        >
          <Download size={14} className="group-hover:animate-bounce" />
          <span>Get it on Play Store</span>
        </a>
      </div>
    </div>
  );
};

export default AppDownload;