import heroImg from '../../assets/images/hydro.jpeg';
import gallery1 from '../../assets/images/hydro.jpeg';
import gallery2 from '../../assets/images/hydro.jpeg';
import gallery3 from '../../assets/images/hydro.jpeg';

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
            24/7 technical support and regular maintenance to keep your smart garden running perfectly.
          </p>
          <div className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-8 py-4 rounded-2xl inline-block font-bold text-xl shadow-xl">
            We're Here for You, Always!
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 md:h-[500px] flex items-center justify-center shadow-2xl border border-gray-200">
            <img src={heroImg} alt="Maintenance & Support" className="object-cover w-full h-full rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 text-center">Service Features</h2>
        <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <li className="bg-green-50 rounded-2xl p-6 shadow-lg text-lg text-gray-700 font-medium">24/7 technical support</li>
          <li className="bg-green-50 rounded-2xl p-6 shadow-lg text-lg text-gray-700 font-medium">Regular maintenance plans</li>
          <li className="bg-green-50 rounded-2xl p-6 shadow-lg text-lg text-gray-700 font-medium">Remote diagnostics and troubleshooting</li>
          <li className="bg-green-50 rounded-2xl p-6 shadow-lg text-lg text-gray-700 font-medium">Warranty coverage and repairs</li>
        </ul>
      </div>
    </section>
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Gallery</h2>
          <p className="text-xl md:text-2xl text-gray-600">See our support in action</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[gallery1, gallery2, gallery3].map((imgSrc, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              <img src={imgSrc} alt={`Gallery ${idx + 1}`} className="object-cover w-full h-full rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default MaintenanceSupportPage; 