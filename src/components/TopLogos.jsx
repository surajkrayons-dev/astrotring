import { useEffect, useState } from 'react';
import lowerLogo from "/lowerLogo.jpeg";
import upperLogo from "/upperLogo.jpeg";

const TopLogos = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 5000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`
        w-full
        overflow-hidden
        transition-all
        duration-500
        ease-in-out
        
        ${isVisible ? 'max-h-48 ' : 'max-h-0 py-0'}
      `}
    >
      <div className="flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white ">
        
        {/* Upper rotating logo - responsive size */}
        <div className="animate-spin-slow  mb-1 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
          <img 
            src={upperLogo} 
            alt="upper" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Lower static logo - responsive size */}
        <div className="text-sm font-semibold text-gray-700 ">
          <img 
            src={lowerLogo} 
            alt="lower" 
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TopLogos;