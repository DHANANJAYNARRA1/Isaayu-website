import { Award, TrendingUp, Users, Globe } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Best AgriTech Startup 2024',
      description: 'Recognized by Indian AgriTech Awards for innovation in urban farming solutions',
      year: '2024'
    },
    {
      icon: TrendingUp,
      title: '300% Growth in 2024',
      description: 'Achieved remarkable growth with over 2,500 installations across 15 cities',
      year: '2024'
    },
    {
      icon: Users,
      title: '10,000+ Community Members',
      description: 'Built a thriving community of urban gardeners sharing knowledge and experiences',
      year: '2024'
    },
    {
      icon: Globe,
      title: 'Expanding to 25 Cities',
      description: 'Rapid expansion across India with plans to reach 25 cities by end of 2025',
      year: '2025'
    }
  ];

  const milestones = [
    { year: '2022', event: 'ISAAYU Founded', desc: 'Started with a vision to revolutionize urban farming' },
    { year: '2023', event: 'First 100 Installations', desc: 'Reached our first major milestone in Hyderabad' },
    { year: '2024', event: 'Multi-City Expansion', desc: 'Expanded to 15 cities across South India' },
    { year: '2025', event: 'National Presence', desc: 'Planning nationwide expansion and new product lines' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-semibold mb-6">
            Our Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            Growing Success Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a small startup to India's leading smart agriculture company, 
            we're proud of the milestones we've achieved together with our community.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <achievement.icon className="text-green-600" size={32} />
              </div>
              
              <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                {achievement.year}
              </div>
              
              <h3 className="text-xl font-bold text-green-800 mb-4">
                {achievement.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Our Journey</h3>
            <p className="text-gray-600 text-lg">
              Key milestones in our mission to transform urban agriculture
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-orange-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-green-800 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-600 to-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Be Part of Our Success Story</h3>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of urban gardeners who are already transforming their spaces 
              and contributing to a more sustainable future.
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              Start Your Garden Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;