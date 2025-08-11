import React from 'react';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const EventsPage = () => {
  const events = [
    {
      title: 'Experiential Farming Activity by Isaayu at Hyderabad Public School, Ramanthapur',
      description: 'Educational farming workshop for students to learn about sustainable agriculture and smart farming techniques.',
      date: '2024',
      location: 'Hyderabad Public School, Ramanthapur',
      type: 'Educational Workshop',
      images: 6
    },
    {
      title: 'The Food Conclave by The Government of Telangana at Hitex',
      description: 'Golden Prize Awards from the Department of Horticulture, Government of Telangana under the categories - Innovation in Horticulture and Technology (IOT).',
      date: '2024',
      location: 'Hitex, Hyderabad',
      type: 'Government Recognition',
      images: 6
    },
    {
      title: 'Isaayu at AgFoodTech 2022 held at T-Hub Hyderabad',
      description: 'Showcasing innovative agricultural technology solutions at one of India\'s premier agtech events.',
      date: '2022',
      location: 'T-Hub, Hyderabad',
      type: 'Technology Exhibition',
      images: 6
    },
    {
      title: 'Global Vertical Farming 3rd Edition held at New Delhi, India Nov 2022',
      description: 'Participating in the global vertical farming conference to share insights on urban agriculture innovations.',
      date: 'Nov 2022',
      location: 'New Delhi, India',
      type: 'International Conference',
      images: 6
    },
    {
      title: 'Exhibition at International Conference on Innovations to Transform Drylands held at ICRISAT, Hyderabad, India during Feb 2023',
      description: 'Presenting smart irrigation solutions for dryland agriculture transformation at ICRISAT.',
      date: 'Feb 2023',
      location: 'ICRISAT, Hyderabad',
      type: 'Research Conference',
      images: 6
    }
  ];

  const installations = {
    title: 'Few Home Gardening Automation Systems and Terrace Farms set up by Isaayu for our clients at Hyderabad',
    description: 'Real installations showcasing our smart farming solutions in residential spaces across Hyderabad.',
    images: 6
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full font-semibold mb-6">
              Events & Exhibitions
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Our Journey in Events
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From educational workshops to international conferences, see how ISAAYU is making an impact 
              in the smart agriculture community across India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {events.map((event, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-orange-50 rounded-3xl p-8 shadow-lg">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.type}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-orange-600">
                      <Users size={16} />
                      <span className="font-medium">{event.images} Photos Available</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Installations */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full font-semibold mb-6">
              Client Installations
            </div>
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              {installations.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {installations.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* No installation photo placeholders */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Feature ISAAYU at Your Event?
          </h2>
          <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
            We're always excited to share our smart farming innovations at conferences, 
            workshops, and exhibitions. Let's collaborate!
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Us for Events
          </button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;