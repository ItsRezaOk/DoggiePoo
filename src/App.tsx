import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import OnboardingWidget from './components/OnboardingWidget';
import PricingPlans from './components/PricingPlans';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from "./components/Testimonials";
import ImageGallery from "./components/ImageGallery";
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [selectedDogs, setSelectedDogs] = useState(1);
  const [selectedDay, setSelectedDay] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  // Calculate price based on number of dogs
  useEffect(() => {
    const dogPrices: Record<number, number> = {
      1: 45,
      2: 70,
      3: 85
    };

    const price = selectedDogs >= 4 ? 110 : dogPrices[selectedDogs];
    setCalculatedPrice(price);
  }, [selectedDogs]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-green-100 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🐾</span>
              </div>
              <span className="text-xl font-bold text-gray-800">PawClean Pro</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-green-500 transition-colors"
              >
                FAQ
              </button>
            </div>
            
            <button 
              onClick={() => scrollToSection('onboarding')}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <HeroSection onGetStarted={() => scrollToSection('onboarding')} />
        <HowItWorks />
        <OnboardingWidget
          selectedDogs={selectedDogs}
          setSelectedDogs={setSelectedDogs}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          calculatedPrice={calculatedPrice}
        />
        <PricingPlans calculatedPrice={calculatedPrice} selectedDogs={selectedDogs} />
        <WhyChooseUs />
        <Testimonials />
          <ImageGallery />
        <FAQ />
        
        {/* CTA Strip */}
        <section className="bg-gradient-to-r from-green-400 to-blue-400 py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 transform rotate-12">🦴</div>
            <div className="absolute top-8 right-8 w-6 h-6 transform -rotate-12">🦴</div>
            <div className="absolute bottom-4 left-1/4 w-10 h-10 transform rotate-45">🦴</div>
            <div className="absolute bottom-8 right-1/4 w-6 h-6 transform -rotate-45">🦴</div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Wagging?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of happy dogs and their owners!
            </p>
              <img src="/images/iowa-landscape.jpg" alt="Peaceful Iowa landscape reminding me of home" className="mx-auto rounded-lg shadow-md w-full max-w-md mb-6" />
            <button 
              onClick={() => scrollToSection('onboarding')}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105"
            >
              Fetch My Quote Now! 🐾
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;