import React from 'react';
import { Check, Award } from 'lucide-react';

interface PricingPlansProps {
  calculatedPrice: number;
  selectedDogs: number;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ calculatedPrice, selectedDogs }) => {
  const basePlans = [
    {
      name: 'Small Yard',
      basePrice: 25,
      description: 'Perfect for cozy spaces',
      features: ['Weekly waste removal', 'Eco-friendly fertilization of affected areas (supports soil health and the environment)', 'Spot treatment', 'Service guarantee']
    },
    {
      name: 'Medium Yard',
      basePrice: 35,
      description: 'Most popular choice',
      features: ['Weekly waste removal', 'Eco-friendly fertilization of affected areas (supports soil health and the environment)', 'Spot treatment', 'Service guarantee', 'Priority scheduling']
    },
    {
      name: 'Large Yard',
      basePrice: 45,
      description: 'For spacious properties',
      features: ['Weekly waste removal', 'Eco-friendly fertilization of affected areas (supports soil health and the environment)', 'Spot treatment', 'Service guarantee', 'Priority scheduling', 'Lawn health report']
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your yard size, add your dogs, and get started today!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {basePlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative ${
                index === 1 ? 'border-2 border-green-500 scale-105' : 'border border-gray-200'
              }`}
            >
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Award size={16} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-green-600">${plan.basePrice}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                
                <p className="text-sm text-gray-500">
                  + $10/month for each additional dog
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                index === 1
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => {
                const onboardingSection = document.getElementById('onboarding');
                if (onboardingSection) {
                  onboardingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
        
        {/* Guarantee Badge */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Guarantee
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              "If we miss a scoop, next month is free — no ifs, ands, or butts!"
            </p>
            <div className="inline-flex items-center space-x-2 text-yellow-600">
              <span className="font-semibold">✨ 100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;