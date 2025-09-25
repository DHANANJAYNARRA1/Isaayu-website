import { Headphones } from 'lucide-react';

const supportFeatures = [
  '24/7 Technical Support',
  'Remote Diagnostics',
  'Regular Maintenance',
  'Warranty Coverage',
  'Agronomist Support',
  'On-call Assistance',
  'System Health Monitoring',
  'Personalized Guidance'
];

const Services = () => (
  <section id="services" className="py-24 bg-gradient-to-b from-orange-50 to-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full font-semibold mb-6">
          Our Support
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Maintenance & Support
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Get 24/7 technical and agronomist support for your smart garden.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col items-center">
        <div className="relative w-full flex items-center justify-center bg-green-50 py-8">
          <img
            src="https://via.placeholder.com/300x200?text=Support+Image"
            alt="Maintenance & Support"
            className="w-60 h-40 object-cover rounded-lg shadow"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
            <Headphones className="text-green-600" size={24} />
          </div>
        </div>
        <div className="p-8 w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-orange-50 rounded-lg px-4 py-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full inline-block"></span>
                <span className="text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Services;