import React, { useState } from 'react';
import { Play, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-green-400 via-blue-400 to-green-500 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-700"></div>
        
        {/* Floating paw prints */}
        <div className="absolute top-1/4 left-1/4 text-white/20 text-6xl animate-pulse">🐾</div>
        <div className="absolute top-1/3 right-1/3 text-white/20 text-4xl animate-pulse delay-200">🐾</div>
        <div className="absolute bottom-1/4 left-1/3 text-white/20 text-5xl animate-pulse delay-400">🐾</div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center min-h-screen">
          {/* Left side - Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Weekly Poop-Free Yards with Eco-Friendly Lawn Fertilization,
              <span className="block text-yellow-200">Happy Dogs,</span>
              <span className="block text-blue-200">Happier Owners, and a Greener Iowa</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              We chase the mess so you can chase the ball! Professional Eco-Friendly Dog Waste Removal & Lawn Fertilization with eco-friendly fertilizer treatment.
            </p>
            <img src="/images/me-with-dogs.jpg" alt="Me playing with dogs on the lawn" className="mx-auto rounded-lg shadow-md w-full max-w-md mb-6" />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={onGetStarted}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>🏷️ Fetch My Quote</span>
              </button>
              
              <button 
                onClick={() => setShowVideo(true)}
                className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all transform hover:scale-105 backdrop-blur-sm flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>Watch How CycleScoop Iowa Works</span>
              </button>
            </div>
          </div>
          
          {/* Right side - Illustration */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              {/* Main dog illustration */}
              <div className="w-96 h-96 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="text-8xl animate-bounce">🐕</div>
              </div>
              
              {/* Floating elements around the dog */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-spin">
                <span className="text-2xl">🦴</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">🏷️</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-14 h-14 bg-green-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-xl">🌱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
      
      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">How CycleScoop Iowa Works</h3>
              <button 
                onClick={() => setShowVideo(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-8 text-center">
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-gray-600">Video: Professional tech scooping waste, applying eco-friendly fertilizer, giving thumbs up with happy dog</p>
                </div>
              </div>
              <p className="text-gray-600">
                We remove dog waste and fertilize your lawn, restoring nutrients and supporting a cleaner, greener Iowa. Professional, eco-conscious, and your dogs will love us!
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;