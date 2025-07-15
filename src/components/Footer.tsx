import { useState } from 'react';
import { Leaf, ArrowRight, Facebook, Instagram, Twitter, Linkedin, Youtube, QrCode, Phone, Mail, MapPin, Globe } from 'lucide-react';
import aIdeaLogo from '../assets/a-idea.png';
import naarmLogo from '../assets/naarmlogo.png';
import icarLogo from '../assets/icarlogo.png';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-400/5 rounded-full blur-xl"></div>
      </div>

      {/* Incubators Row above the main footer grid */}
      <div className="w-full flex flex-col items-center mb-4">
        <span className="text-xl font-bold mb-6 text-orange-400">Our Incubators</span>
        <div className="flex gap-8 items-center">
          <img src={aIdeaLogo} alt="A-IDEA" className="h-20 md:h-24 w-auto object-contain rounded bg-white p-2 shadow" />
          <img src={naarmLogo} alt="NAARM" className="h-20 md:h-24 w-auto object-contain rounded bg-white p-2 shadow" />
          <img src={icarLogo} alt="ICAR" className="h-20 md:h-24 w-auto object-contain rounded bg-white p-2 shadow" />
        </div>
      </div>
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-orange-500">ISAAYU</span>
                <p className="text-sm text-green-400 font-medium">The Green Health</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empowering urban agriculture with smart IoT solutions. 
              Transform your space into a thriving, automated garden.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <a 
                href="tel:+917527866666" 
                className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Phone size={18} className="text-orange-400" />
                <span>+91 7527866666</span>
              </a>
              
              <a 
                href="mailto:isaayufarms@gmail.com" 
                className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Mail size={18} className="text-orange-400" />
                <span>isaayufarms@gmail.com</span>
              </a>
              
              <a 
                href="https://www.isaayu.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Globe size={18} className="text-orange-400" />
                <span>www.isaayu.com</span>
              </a>
              
              <div className="flex items-start gap-3 text-slate-300">
                <MapPin size={18} className="text-orange-400 mt-1" />
                <div className="text-sm">
                  <div>Plot No 26, Amar Society,</div>
                  <div>Kavuri Hills, Madhapur,</div>
                  <div>Hyderabad, Telangana</div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: 'https://facebook.com/isaayuofficial', color: 'hover:bg-blue-600' },
                { icon: Instagram, href: 'https://instagram.com/isaayuofficial', color: 'hover:bg-pink-600' },
                { icon: Twitter, href: 'https://twitter.com/isaayuofficial', color: 'hover:bg-blue-500' },
                { icon: Linkedin, href: 'https://linkedin.com/company/isaayu', color: 'hover:bg-blue-700' },
                { icon: Youtube, href: 'https://youtube.com/@isaayuofficial', color: 'hover:bg-red-600' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-slate-700/50 backdrop-blur-sm p-3 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-slate-600/30`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
            <h3 className="text-xl font-bold mb-6 text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', page: 'home' },
                { name: 'Products', page: 'products' },
                { name: 'Plant Diaries', page: 'plant-diaries' },
                { name: 'Our Story', page: 'our-story' },
                { name: 'Events', page: 'events' }
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handlePageChange(link.page)}
                    className="text-slate-300 hover:text-orange-400 transition-all duration-200 hover:translate-x-2 transform flex items-center gap-2 group"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-125 transition-transform"></div>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products & Services */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
            <h3 className="text-xl font-bold mb-6 text-orange-400">Our Solutions</h3>
            <ul className="space-y-3 text-slate-300">
              <li>
                <button 
                  onClick={() => handlePageChange('smart-home-farm')}
                  className="hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  Smart Home Farm
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('grow-your-greens')}
                  className="hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  Grow Your Greens
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('urban-water-management')}
                  className="hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  Urban Water Management
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('smartscapes')}
                  className="hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  Smartscapes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageChange('agri360')}
                  className="hover:text-orange-400 transition-colors flex items-center gap-2 group"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-125 transition-transform"></div>
                  Agri360
                </button>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Mobile App Control
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Professional Installation
              </li>
            </ul>
          </div>
          
          {/* Newsletter & Contact */}
          <div className="bg-gradient-to-br from-slate-800/40 to-orange-900/20 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
            <h3 className="text-xl font-bold mb-6 text-orange-400">Stay Connected</h3>
            <p className="text-slate-300 mb-4">
              Get the latest updates on smart gardening tips and new products.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-slate-400 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>

            {/* WhatsApp Contact */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-4 text-center border border-green-500/30">
              <QrCode className="mx-auto mb-2 text-green-400" size={48} />
              <p className="text-sm text-slate-300 mb-2">Scan for WhatsApp</p>
              <a 
                href="https://wa.me/917527866666" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-300 text-center md:text-left">
              © 2025 <span className="text-orange-500 font-bold">ISAAYU</span> - The Green Health. All rights reserved. | Empowering Smart Agriculture
            </p>
            
            <div className="flex gap-6 text-sm">
              <button className="text-slate-300 hover:text-orange-400 transition-colors">
                Privacy Policy
              </button>
              <button className="text-slate-300 hover:text-orange-400 transition-colors">
                Terms of Service
              </button>
              <button className="text-slate-300 hover:text-orange-400 transition-colors">
                Warranty
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;