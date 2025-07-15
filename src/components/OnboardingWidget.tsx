import React, { useState } from 'react';
import { Calendar, MapPin, CreditCard, Apple } from 'lucide-react';

interface OnboardingWidgetProps {
  selectedDogs: number;
  setSelectedDogs: (dogs: number) => void;
  selectedYardSize: string;
  setSelectedYardSize: (size: string) => void;
  selectedDay: string;
  setSelectedDay: (day: string) => void;
  calculatedPrice: number;
}

const OnboardingWidget: React.FC<OnboardingWidgetProps> = ({
  selectedDogs,
  setSelectedDogs,
  selectedYardSize,
  setSelectedYardSize,
  selectedDay,
  setSelectedDay,
  calculatedPrice
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const yardSizes = [
    { id: 'small', name: 'Small', description: 'Up to 1,000 sq ft', price: 25, icon: '🏠' },
    { id: 'medium', name: 'Medium', description: '1,000 - 5,000 sq ft', price: 35, icon: '🏡' },
    { id: 'large', name: 'Large', description: '5,000+ sq ft', price: 45, icon: '🏘️' }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (selectedDay && calculatedPrice > 0) {
      setShowOrderForm(true);
    }
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Simulate order processing
    const orderData = {
      customer: formData,
      service: {
        dogs: selectedDogs,
        yardSize: selectedYardSize,
        visitDay: selectedDay,
        monthlyPrice: calculatedPrice
      },
      timestamp: new Date().toISOString()
    };
    
    console.log('Order submitted:', orderData);
    
    // Show success message
    alert(`🎉 Welcome to CycleScoop Iowa, ${formData.name}! Your ${selectedDay} service starts next week. We'll send confirmation details to ${formData.email}.`);
    
    // Reset form
    setShowOrderForm(false);
    setFormData({ name: '', email: '', phone: '', address: '' });
  };

  return (
    <section id="onboarding" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Answer a few quick questions and we'll fetch you a personalized quote!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((step) => (
                <div 
                  key={step}
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${
                    step <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-green-100">
            {/* Step 1: Number of Dogs */}
            {currentStep === 1 && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  How many dogs roam your yard?
                </h3>
                
                <div className="mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={selectedDogs}
                      onChange={(e) => setSelectedDogs(Number(e.target.value))}
                      className="w-64 h-3 bg-green-200 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #10b981 0%, #10b981 ${((selectedDogs - 1) / 4) * 100}%, #e5e7eb ${((selectedDogs - 1) / 4) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {Array.from({ length: selectedDogs }, (_, i) => '🐕').join('')}
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      {selectedDogs} Dog{selectedDogs > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleNext}
                  className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  Next Step 🦴
                </button>
              </div>
            )}

            {/* Step 2: Yard Size */}
            {currentStep === 2 && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  What's your yard size?
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {yardSizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedYardSize(size.id)}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        selectedYardSize === size.id
                          ? 'border-green-500 bg-green-50 scale-105'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <div className="text-4xl mb-2">{size.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-800">{size.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{size.description}</p>
                      <p className="text-xl font-bold text-green-600">${size.price}/month</p>
                    </button>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleBack}
                    className="bg-gray-200 text-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!selectedYardSize}
                    className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors disabled:opacity-50"
                  >
                    Next Step 🏷️
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Select Day */}
            {currentStep === 3 && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Pick your weekly visit day
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                  {weekDays.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedDay === day
                          ? 'border-green-500 bg-green-50 scale-105'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <div className="text-2xl mb-1">🐾</div>
                      <span className="text-sm font-medium">{day}</span>
                    </button>
                  ))}
                </div>
                
                {/* Price Display */}
                <div className="bg-green-50 rounded-xl p-6 mb-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🥣</div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Your Monthly Price</h4>
                    <p className="text-4xl font-bold text-green-600">${calculatedPrice}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedDogs} dog{selectedDogs > 1 ? 's' : ''} • {selectedYardSize} yard • Weekly service
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={handleBack}
                    className="bg-gray-200 text-gray-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedDay}
                    className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors disabled:opacity-50"
                  >
                    Fetch Service! 🎾
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order Form Modal */}
      {showOrderForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Almost there!</h3>
                <p className="text-gray-600">Just a few details to get started</p>
              </div>
              
              <form onSubmit={handleOrderSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Address
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="123 Main St, City, State 12345"
                  />
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Order Summary</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span>Weekly dog waste removal</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dogs:</span>
                      <span>{selectedDogs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Yard size:</span>
                      <span>{selectedYardSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Visit day:</span>
                      <span>{selectedDay}</span>
                    </div>
                    <div className="flex justify-between font-bold text-green-600 pt-2 border-t">
                      <span>Monthly total:</span>
                      <span>${calculatedPrice}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <CreditCard size={20} />
                    <span>Pay with Card</span>
                  </button>
                  
                  <button
                    type="button"
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Apple size={20} />
                    <span>Pay with Apple Pay</span>
                  </button>
                </div>
                
                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={() => setShowOrderForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OnboardingWidget;