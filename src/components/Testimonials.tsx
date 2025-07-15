import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown',
      rating: 5,
      text: "PawClean Pro has been a game-changer! My golden retriever Max loves playing in our clean yard, and I love not having to worry about cleanup. The team is reliable and friendly.",
      image: '👩‍🦰',
      dogName: 'Max',
      dogBreed: 'Golden Retriever'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Suburbia',
      rating: 5,
      text: "Three dogs, one yard, and endless mess - until PawClean Pro! They're punctual, thorough, and my grass has never looked greener. Worth every penny!",
      image: '👨‍🦲',
      dogName: 'Bella, Rocky & Luna',
      dogBreed: 'Mixed Breeds'
    },
    {
      name: 'Jennifer Lee',
      location: 'Riverside',
      rating: 5,
      text: "I was skeptical at first, but after three months of service, I'm a believer. My backyard barbecues are worry-free, and my kids can play safely. Highly recommend!",
      image: '👩‍🦱',
      dogName: 'Charlie',
      dogBreed: 'Labrador'
    },
    {
      name: 'David Thompson',
      location: 'Hillside',
      rating: 5,
      text: "Professional, reliable, and they genuinely care about our pets. They even send cute photos of our dogs when they visit. My wife and I couldn't be happier!",
      image: '👨‍🦳',
      dogName: 'Daisy',
      dogBreed: 'Beagle'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy pet owners who trust PawClean Pro
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Customer Photo */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center text-4xl">
                    {testimonials[currentIndex].image}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  {/* Customer Info */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600 mb-2">{testimonials[currentIndex].location}</p>
                    <p className="text-green-600 font-medium">
                      Pet parent to {testimonials[currentIndex].dogName} ({testimonials[currentIndex].dogBreed})
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <Star size={20} className="text-yellow-400 fill-current" />
              <span className="font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold">Best Pet Service 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">💯</span>
              <span className="font-semibold">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;