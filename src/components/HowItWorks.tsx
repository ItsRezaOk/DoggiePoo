import React from 'react';
import { useInView } from '../hooks/useIntersectionObserver';

const HowItWorks: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: '🐾',
      title: 'We Visit Weekly',
      description: 'Our friendly team arrives on your scheduled day, ready to make your yard pristine.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: '🥄',
      title: 'Scoop & Clean',
      description: 'We carefully remove all waste and sanitize the areas, leaving no trace behind.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: '🌱',
      title: 'Fertilize & Treat',
      description: 'We apply eco-friendly fertilizer to every affected area, restoring nutrients, improving soil health, and reducing runoff. This sustainable approach keeps your lawn and the environment healthy.',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to a cleaner yard and happier pups
          </p>
        </div>
        
        <div ref={ref} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg text-center transform transition-all duration-500 hover:scale-105 ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mx-auto mb-6`}>
                <span className="text-4xl">{step.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                    <span className="text-green-600">→</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <img src="/images/happy-dog-lawn.jpg" alt="Happy dog running on a lush green Iowa lawn" className="mx-auto rounded-lg shadow-md w-full max-w-md mb-6" />
        </div>
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-6 py-3 rounded-full">
            <span className="text-green-600 font-semibold">✨ It's that simple!</span>
            <span className="text-2xl animate-bounce">🐕</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;