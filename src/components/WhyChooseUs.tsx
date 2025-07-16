import React from 'react';
import { Shield, Leaf, Users, TrendingUp } from 'lucide-react';

const WhyChooseUs: React.FC = () => {

  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Software Engineer at Iowa State University',
      description: 'Working hard to develop software for the future Americans',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Post Scoop Fertilization',
      description: 'After every scoop, we fertilize affected areas to restore nutrients and improve soil health; Keeping your yard Greener ',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <Users size={32} />,
      title: 'Eco-Friendly Treatments',
      description: 'Our eco-friendly treatments are safe for pets and the environment.',
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
            Built on my Iowa State software engineering drive and experience,
            fueled by entrepreneurial dreams and a lifelong love for dogs,
            PawClean Pro delivers smart, caring service you can count on
          </p>
        </div>
                    <img src="/images/iowa-state-dogs.jpg" alt="Playing with dogs on the Iowa State University lawn" className="mx-auto rounded-lg shadow-md w-full max-w-md mt-6" />
        
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