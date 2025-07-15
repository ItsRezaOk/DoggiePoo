import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
            <p className="text-green-300 mb-4">CycleScoop Iowa is committed to eco-friendly practices. After every scoop, we fertilize affected areas, restoring nutrients and supporting healthy soil for a cleaner, greener community.</p>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🐾</span>
              </div>
              <span className="text-2xl font-bold">CycleScoop Iowa</span>
            </div>
            <p className="text-gray-300 mb-4">
              Making yards cleaner and dogs happier, one scoop at a time.
            </p>
            <div className="flex space-x-4">
              <Facebook size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter size={24} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Weekly or Bi-WeeklyWaste Removal</li>
              <li>Eco-Friendly Fertilizer</li>
              <li>Lawn Spot Treatment</li>
              <li>Pet Waste Composting</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={18} />
                <span>(555) 776-7304</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} />
                <span>hello@cyclescoop.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Serving Ames, Iowa & Iowa State University</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2">The Daily Bark Newsletter</h5>
              <form className="flex" onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).email.value;
                if (email) {
                  alert(`Thanks for subscribing to The Daily Bark! 🐕`);
                  (e.target as HTMLFormElement).reset();
                }
              }}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button 
                  type="submit"
                  className="bg-green-500 px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Service Area Map */}
        <div className="mb-12">
          <h4 className="text-xl font-semibold mb-4 text-center">Service Areas</h4>
          <div className="bg-gray-700 rounded-lg p-6 text-center">
            <div className="inline-flex items-center space-x-4 text-green-400">
              <span>🗺️</span>
              <span>Ames, Ankeny, Iowa State Campus</span>
            </div>
            <p className="text-gray-300 mt-2">
              Don't see your area? Contact us - we're always expanding our mission for a cleaner, greener Iowa!
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            
            <div className="flex items-center space-x-4 text-gray-300">
              <span>© 2025 CycleScoop Iowa. All rights reserved.</span>
              <span className="text-2xl">🐾</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;