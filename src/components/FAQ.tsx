import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often do you visit?",
      answer: "We visit your yard once per week any day chose by you. Consistency is key to maintaining a clean, healthy yard for your furry friends!"
    },
    {
      question: "What if my dog is protective or aggressive?",
      answer: "Our team is experienced with all types of dogs. We'll work with you to find the best approach. Safety is our top priority!"
    },
    {
      question: "Do you work in bad weather?",
      answer: "We service yards in most weather conditions, including rain and snow. During severe weather (thunderstorms, etc.), we'll reschedule to the next available day at no extra charge."
    },
    {
      question: "What's included in the fertilizer treatment?",
      answer: "Our eco-friendly fertilizer treatment includes organic nutrients that help repair damaged grass spots and promote healthy growth. It's completely safe for pets and children!"
    },
    {
      question: "How do I cancel or change my service?",
      answer: "You can modify or cancel your service anytime with 24-hour notice. No long-term contracts or cancellation fees - we believe in earning your business every week!"
    },
    {
      question: "What if you miss a scheduled visit?",
      answer: "If we miss a scheduled visit, we'll make it up within 24 hours AND your next month is completely free!"
    },
    {
      question: "Do you bring your own equipment?",
      answer: "Absolutely! We arrive fully equipped with professional-grade tools, biodegradable bags, sanitizer, and our eco-friendly fertilizer. You don't need to provide anything."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers! Here are the most common questions from our happy customers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-gray-50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp size={24} className="text-green-500" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400" />
                  )}
                </div>
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ${
                openItem === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <div className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-green-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Reach out to our friendly team anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:515-776-7304"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>📞</span>
                <span>Call Us: (555) PAW-CLEAN</span>
              </a>
              <a 
                href="mailto:idk@cyclescoop.com"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>✉️</span>
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;