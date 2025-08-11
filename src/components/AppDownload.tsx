import React, { useEffect } from 'react';
import { Smartphone, Download, ArrowDown, ChevronRight } from 'lucide-react';

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
          className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {/* Mini Phone Mockup */}
          <div className="relative w-6 h-9 bg-black rounded-lg overflow-hidden flex items-center justify-center border border-gray-700">
            <div className="w-full h-full bg-white flex items-center justify-center">
              <img 
                src="/assets/IsaayuLogo_HD.png" 
                alt="ISAAYU App" 
                className="w-4 h-4 object-contain" 
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
      <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
        <div className="relative">
          <div id="app-download-animation" className="absolute -top-10 right-4 text-green-600">
            <ArrowDown size={24} className="animate-bounce" />
          </div>
          <a 
            href={playStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-5 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-110 shadow-xl"
          >
            {/* Mini Phone Mockup */}
            <div className="relative w-8 h-11 bg-black rounded-lg overflow-hidden flex items-center justify-center border border-white/30">
              <div className="w-full h-full bg-white flex items-center justify-center">
                <img 
                  src="/assets/IsaayuLogo_HD.png" 
                  alt="ISAAYU App" 
                  className="w-5 h-5 object-contain" 
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
    <div className={`bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 shadow-xl border border-slate-700 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Mobile Phone Mockup */}
          <div className="relative w-20 h-36 bg-black rounded-xl p-1 border-2 border-gray-800 shadow-lg mb-4 md:mb-0">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black rounded-b-lg z-10"></div>
            <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col items-center justify-center p-2">
              {/* ISAAYU Logo */}
              <img 
                src="/assets/IsaayuLogo_HD.png" 
                alt="ISAAYU App" 
                className="w-10 h-10 object-contain mb-1" 
              />
              <div className="text-green-600 text-center">
                <div className="text-[10px] font-medium">Download</div>
              </div>
              <div className="mt-1 animate-pulse">
                <ChevronRight size={12} className="text-green-600" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 text-center md:text-left">
              Start Automating {productName ? productName : 'Your Garden'}
            </h3>
            <p className="text-slate-300 text-center md:text-left">
              Download our app and control your smart garden from anywhere!
            </p>
          </div>
        </div>
        
        <a 
          href={playStoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg group mt-4 md:mt-0"
        >
          <Download size={20} className="group-hover:animate-bounce" />
          <span>Get it on Play Store</span>
        </a>
      </div>
    </div>
  );
};

export default AppDownload;