import AppDownload from '../../components/AppDownload';

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

const MaintenanceSupportPage = () => (
  <div className="pt-20">
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-green-100 to-orange-100 text-green-600 px-8 py-3 rounded-full font-bold mb-8 text-lg">
            Maintenance & Support
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-orange-500">MAINTENANCE</span> <span className="text-green-800">& SUPPORT</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            24/7 technical and agronomist support to keep your smart garden running perfectly.
          </p>
          <div className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-8 py-4 rounded-2xl inline-block font-bold text-xl shadow-xl">
            We're Here for You, Always!
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl aspect-[4/3] flex items-center justify-center shadow-2xl border border-gray-200 overflow-hidden">
            <img
              src="/assets/images/20250305_160856.jpg"
              alt="Maintenance & Support"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 text-center">Service Features</h2>
        <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {supportFeatures.map((feature, idx) => (
            <li key={idx} className="bg-green-50 rounded-2xl p-6 shadow-lg text-lg text-gray-700 font-medium">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
    {/* CTA Section with App Download */}
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">Support at Your Fingertips</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Download our app to request maintenance, get instant support, and access troubleshooting guides.
        </p>
        <div className="w-full max-w-md mx-auto">
          <AppDownload variant="full" productName="Maintenance & Support" animationDelay={500} />
        </div>
      </div>
    </section>
  </div>
);

export default MaintenanceSupportPage;