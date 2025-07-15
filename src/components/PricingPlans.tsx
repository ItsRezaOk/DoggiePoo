import React from 'react';
import { Check, Award } from 'lucide-react';

interface PricingPlansProps {
  calculatedPrice: number;
  selectedDogs: number;
}

const PricingPlans: React.FC<PricingPlansProps> = ({ calculatedPrice, selectedDogs }) => {
  // New pricing structure: per dog per month
  const dogPricing = [
    { dogs: 1, price: 45 },
    { dogs: 2, price: 70 },
    { dogs: 3, price: 85 },
    { dogs: 4, price: 110, note: '4 or more' }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Add your dogs and get started today!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Monthly Pricing</h3>
            <ul className="space-y-4 mb-4">
              <li className="flex justify-between items-center border-b pb-2">
                <span>1 Dog</span>
                <span className="text-green-600 font-bold text-xl">$45/mo</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>2 Dogs</span>
                <span className="text-green-600 font-bold text-xl">$70/mo</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>3 Dogs</span>
                <span className="text-green-600 font-bold text-xl">$85/mo</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>4+ Dogs</span>
                <span className="text-green-600 font-bold text-xl">$110/mo</span>
              </li>
            </ul>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mb-4 text-green-800 font-semibold">
              Add biweekly visits for just <span className="font-bold">$10 per week</span> extra &mdash; no matter how many dogs!
            </div>
            <div className="text-sm text-gray-500 mb-2">
              All plans include: Weekly waste removal, eco-friendly post treatment fertilization, spot treatment, and our satisfaction guarantee.
            </div>
            <button
              className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors mt-4"
              onClick={() => {
                const onboardingSection = document.getElementById('onboarding');
                if (onboardingSection) {
                  onboardingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Started
            </button>
          </div>
        </div>
        
        {/* Guarantee Badge */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Guarantee
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              "If we miss a scoop, your week of service is free, no ifs, ands, or butts!"
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