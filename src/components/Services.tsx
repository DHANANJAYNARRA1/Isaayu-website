import { Home, Wrench, Headphones, Leaf, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Garden Automation',
      description: 'Complete automation solutions for balconies, terraces, and indoor spaces with smart sensors and mobile control.',
      features: ['Smart Irrigation', 'Climate Control', 'Growth Monitoring', 'Mobile App'],
      image: 'https://images.pexels.com/photos/4505152/pexels-photo-4505152.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      icon: Leaf,
      title: 'Experiential Farming Program',
      description: 'Custom landscape design with smart irrigation zones and automated maintenance systems for larger spaces.',
      features: ['Custom Design', 'Zone Control', 'Weather Integration', 'Professional Install'],
      image: '../../assets/images/exp1.jpg'
    },
    {
      icon: Wrench,
      title: 'Installation & Setup',
      description: 'Professional installation service with complete system setup, calibration, and user training included.',
      features: ['Expert Installation', 'System Calibration', 'User Training', 'Quality Assurance'],
      image: 'https://images.pexels.com/photos/4505155/pexels-photo-4505155.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    },
    {
      icon: Headphones,
      title: 'Maintenance & Support',
      description: '24/7 technical support with regular maintenance plans to keep your smart garden running perfectly.',
      features: ['24/7 Support', 'Regular Maintenance', 'Remote Diagnostics', 'Warranty Coverage'],
      image: 'https://images.pexels.com/photos/4505158/pexels-photo-4505158.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full font-semibold mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Complete Smart Farming Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From design to installation to ongoing support, we provide everything you need 
            to create and maintain your perfect smart garden.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                    <service.icon className="text-green-600" size={24} />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-2 transition-colors group-hover:gap-3">
                    Learn More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Simple Process</h3>
            <p className="text-green-100 text-lg">
              From consultation to harvest, we make smart farming effortless
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free site visit and custom design' },
              { step: '02', title: 'Installation', desc: 'Professional setup and calibration' },
              { step: '03', title: 'Training', desc: 'Learn to use your smart garden' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and support' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{process.step}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{process.title}</h4>
                <p className="text-green-100">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;