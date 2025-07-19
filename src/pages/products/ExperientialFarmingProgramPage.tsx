const heroImg = '/assets/images/exp1.jpg';
const gallery1 = '/assets/images/exp1.jpg';
const gallery2 = '/assets/images/exp2.jpg';
const gallery3 = '/assets/images/exp3.jpg';
const gallery4 = '/assets/images/exp4.jpg';
const gallery5 = '/assets/images/exp5.jpg';
const gallery6 = '/assets/images/exp6.jpg';

const ExperientialFarmingProgramPage = () => (
  <div className="pt-20">
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-green-100 to-orange-100 text-green-600 px-8 py-3 rounded-full font-bold mb-8 text-lg">
            Experiential Farming Program
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-orange-500">EXPERIENTIAL</span> <span className="text-green-800">FARMING</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Join our hands-on farming program and experience the joy of growing your own food with expert guidance and smart technology.
          </p>
          <div className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-8 py-4 rounded-2xl inline-block font-bold text-xl shadow-xl">
            Learn, Grow, and Harvest with Us!
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 md:h-[500px] flex items-center justify-center shadow-2xl border border-gray-200">
            <img src={heroImg} alt="Experiential Farming Program" className="object-cover w-full h-full rounded-3xl" />
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-4"><span className="text-orange-500">EXPERIENTIAL</span> <span className="text-green-700">FARMING PROGRAM</span></h2>
            <p className="text-lg text-gray-700 mb-4">
              Isaayu offers an <b>Experiential Farming Program</b> for educational institutions, designed to help children learn the process of growing food as part of sustainability education. This hands-on program takes place on school campuses, with the harvests being donated to the school kitchen. Students engage in every step, from preparing the land to harvesting the crops, and connect their farm experiences with other subjects, such as mathematics. This holistic approach not only teaches children how to grow their own food and embrace sustainability, but also fosters a deeper understanding of nature and its connection to their broader academic learning.
            </p>
            <p className="text-lg text-gray-700">
              A few images of our Experiential Farming Program with <b>Hyderabad Public School, Ramanthapur</b> for academic year 2022-23, 2023-24 & 2024-25.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-8 text-center">Program Features</h2>
        <ul className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <li className="bg-green-50 rounded-2xl p-6 shadow-lg text-lg text-gray-700 font-medium">Hands-on learning with expert mentors</li>
          <li className="bg-green-50 rounded-2xl p-6 shadow-lg text-lg text-gray-700 font-medium">Smart irrigation and climate control systems</li>
          <li className="bg-green-50 rounded-2xl p-6 shadow-lg text-lg text-gray-700 font-medium">Grow a variety of crops and herbs</li>
          <li className="bg-green-50 rounded-2xl p-6 shadow-lg text-lg text-gray-700 font-medium">Community events and harvest festivals</li>
        </ul>
      </div>
    </section>
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Gallery</h2>
          <p className="text-xl md:text-2xl text-gray-600">See our program in action</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((imgSrc, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
              <img src={imgSrc} alt={`Gallery ${idx + 1}`} className="object-cover w-full h-full rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ExperientialFarmingProgramPage; 