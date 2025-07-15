import React, { useState, useEffect } from 'react';
import { Shield, Leaf, Users, TrendingUp } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [stats, setStats] = useState({
    yards: 0,
    pounds: 0,
    customers: 0,
    years: 0
  });

  const finalStats = {
    yards: 2500,
    pounds: 15000,
    customers: 1200,
    years: 5
  };

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const intervalTime = 50;
      const steps = duration / intervalTime;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setStats({
          yards: Math.floor(finalStats.yards * easeProgress),
          pounds: Math.floor(finalStats.pounds * easeProgress),
          customers: Math.floor(finalStats.customers * easeProgress),
          years: Math.floor(finalStats.years * easeProgress)
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setStats(finalStats);
        }
      }, intervalTime);
      
      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const cleanup = animateStats();
          observer.disconnect();
          return cleanup;
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Eco-Friendly Fertilization',
      description: 'After every scoop, we fertilize affected areas to restore nutrients, improve soil health, and reduce pollution. Our sustainable process helps lawns thrive and supports a greener Iowa.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Users size={32} />,
      title: 'Vet-Approved',
      description: 'Recommended by local veterinarians for maintaining healthy outdoor spaces.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Proven Results',
      description: 'Over 5 years of making yards cleaner and dogs happier.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose CycleScoop Iowa?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Local, eco-friendly, and trusted by Iowa pet owners for our quality and care.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Carbon Offset Badge */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Carbon Negative Service
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Our eco-friendly fertilizer treatments actually remove more carbon from the atmosphere than our service vehicles produce!
            </p>
            <div className="inline-flex items-center space-x-2 text-green-600">
              <span className="font-semibold">🌍 Helping heal the planet, one yard at a time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;