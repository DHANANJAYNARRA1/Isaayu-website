import React from 'react';
import { Zap, Wifi, Droplets, Home, ArrowRight, Sparkles } from 'lucide-react';

const WhyIsaayu = () => {
  const features = [
    {
      icon: Zap,
      title: 'Plug & Play Agriculture',
      description: 'Ready-to-use systems that require no technical expertise. Just plug in and start growing!',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      icon: Wifi,
      title: 'IoT-Based Automation',
      description: 'Smart sensors and automated controls manage your garden while you focus on harvesting.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: Droplets,
      title: 'Water-Saving Technology',
      description: 'Advanced irrigation systems that reduce water usage by up to 95% compared to traditional methods.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: Home,
      title: 'Urban Space Friendly',
      description: 'Designed specifically for balconies, terraces, and small urban spaces. Maximum yield, minimum footprint.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  return (
    <section id="why-isaayu" className="py-24 bg-gradient-to-br from-slate-50 via-green-50 to-orange-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-purple-200/15 rounded-full blur-xl"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%), 
                             linear-gradient(-45deg, rgba(249, 115, 22, 0.1) 25%, transparent 25%), 
                             linear-gradient(45deg, transparent 75%, rgba(34, 197, 94, 0.1) 75%), 
                             linear-gradient(-45deg, transparent 75%, rgba(249, 115, 22, 0.1) 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100/80 to-green-100/80 backdrop-blur-sm text-orange-600 px-8 py-3 rounded-full font-bold mb-8 text-lg shadow-lg border border-white/30">
            <Sparkles className="text-orange-500" size={24} />
            Why Choose ISAAYU?
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="text-green-800">The Future of</span><br/>
            <span className="text-orange-500">Urban Farming</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing how people grow food in urban environments with smart, 
            sustainable, and incredibly easy-to-use agricultural solutions.
          </p>
        </div>

        {/* Modern Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border-t-4 border-b-4 border-orange-100 hover:border-orange-400 transition-all duration-300 hover:shadow-2xl">
              <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Move the CTA section to the end */}
      </div>
      {/* CTA Section: Ready to Start Your Smart Garden Journey? */}
      <div className="container mx-auto px-4 pb-12">
        <div className="text-center">
          <div className="bg-gradient-to-br from-white/90 to-slate-50/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-5xl mx-auto border border-white/50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-green-500/5 rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Ready to Start Your <span className="text-orange-500">Smart Garden</span> Journey?
              </h3>
              <p className="text-slate-600 mb-8 text-lg md:text-xl max-w-3xl mx-auto">
                Join thousands of urban gardeners who are already growing fresh, healthy food at home 
                with our intelligent farming solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
                  Get Started Today
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 bg-white/50 backdrop-blur-sm">
                  Book Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIsaayu;