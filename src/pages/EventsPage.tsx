import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
  type: string;
  year: number;
  image?: string;
  imageSet?: string[];
}

const EventsPage = () => {
  const events: Event[] = [
    {
      title: 'Isaayu participated and exhibited its products at Startup Mahakumbh Delhi 2025 as an Agritech Startup showcasing our products to a national platform',
      description: 'We presented our sustainable farming solutions at Mahakumbh 2025, demonstrating how traditional agricultural wisdom can be enhanced with modern technology. Our exhibit attracted farmers, spiritual leaders, and environmental enthusiasts interested in combining heritage with innovation.',
      date: '15th March 2025',
      location: 'Delhi',
      type: 'Startup Mahakumbh',
      year: 2025,
      imageSet: [
        '/assets/startup-mahakumbh-award.jpeg',
        '/assets/ISAAYU@STARTUP MAHAKUMBH 2025_1.jpeg',
        '/assets/ISAAYU@STARTUP MAHAKUMBH 2025_2.jpeg',
        '/assets/ISAAYU@STARTUP MAHAKUMBH 2025_3.jpeg',
        '/assets/ISAAYU@STARTUP MAHAKUMBH 2025_4.jpeg',
        '/assets/ISAAYU@STARTUP MAHAKUMBH 2025_5.jpeg'
      ]   
    },
    {
      title: 'Isaayu participated as Panel and exhibited its products at The National Conference of Building Sustainable Startups in India by ICAR aIDEA NAARM',
      description: 'ISAAYU participated as a panelist at the National Conference on Building Sustainable Startups organized by ICAR aIDEA NAARM. We shared our journey of building sustainable agricultural solutions and exhibited our innovative products that support India\'s agricultural startup ecosystem.',
      date: '12th-13th November 2024',
      location: 'ICAR aIDEA NAARM Campus',
      type: 'Startup Conference',
      year: 2024,
      imageSet: [
        '/assets/ISAAYU AS PANEL AT NAtional Conference of Building Sustainable Startup\'s in India by ICAR aIDEA NAARM_1.JPG',
        '/assets/ISAAYU AS PANEL AT NAtional Conference of Building Sustainable Startup\'s in India by ICAR aIDEA NAARM_2.JPG',
      ]
    },
    {
      title: 'Isaayu had the opportunity to meet our minister Shri KT Ramarao on the event of Telangana Food Festival conducted by the Govt of Telangana',
      description: 'ISAAYU had the privilege of meeting Minister Shri KT Ramarao at the Telangana Food Festival. The minister showed keen interest in understanding our agricultural products and provided valuable encouragement for our startup journey. This interaction reinforced our commitment to contributing to Telangana\'s agricultural innovation ecosystem.',
      date: '29th April 2023',
      location: 'Telangana Food Festival Venue',
      type: 'Government Event',
      year: 2023,
      imageSet: [
        '/assets/ISAAYU@THE FOOD CONCLAVE 2023.jpeg',
        '/assets/ISAAYU@THE FOOD CONCLAVE 2023_2.jpeg',
        '/assets/ISAAYU@THE FOOD CONCLAVE 2023_3.jpeg',
      ]
    },
    {
      title: 'The Directors of Isaayu Mrs B V Pavani and Mrs G L Preeti were privileged to receive the opportunity to participate in the Agriculture Ministers Meeting, G20 Summit',
      description: 'ISAAYU Directors Mrs B V Pavani and Mrs G L Preeti had the prestigious opportunity to participate in the Agriculture Ministers Meeting during the G20 Summit. This high-level participation allowed us to showcase India\'s agricultural innovation capabilities and network with global agricultural leaders and policy makers.',
      date: '15th-17th June 2023',
      location: 'Hyderabad, Telangana',
      type: 'G20 Summit',
      year: 2023,
      imageSet: [ 
        '/assets/IMG_8734.jpg',
        '/assets/WhatsApp Image 2025-07-10 at 14.20.03.jpeg',
        '/assets/WhatsApp Image 2025-07-10 at 14.20.02.jpeg',
      ]
    },
    {
      title: 'Isaayu exhibited at the 7th Garden Festival and the 1st Urban Farming Festival organized by the Telangana Horticulture Department, Govt of Telangana',
      description: 'ISAAYU showcased its innovative agricultural and horticultural solutions at the prestigious Garden Festival and Urban Farming Festival. We demonstrated our commitment to sustainable urban agriculture and modern farming techniques. The event provided valuable opportunities to connect with horticulture professionals, government officials, and urban farming enthusiasts across Telangana.',
      date: '15th April 2023',
      location: 'Telangana',
      type: 'Garden & Urban Farming Festival',
      year: 2023,
      image: '/assets/ISAAYU @ TELANGANA HORTICULTURE GARDEN FESTIVAL 2023_1.jpg',
    },
    {
      title: 'Isaayu was awarded the Graduation Certificate conducted by aIDEA ICAR NAARM',
      description: 'Our team showcased innovative hydroponic solutions and smart farming technologies at this prestigious national conference. We engaged with agricultural entrepreneurs, researchers, and policy makers to discuss sustainable farming practices for urban environments. The event provided valuable networking opportunities and insights into the evolving agritech landscape in India.',
      date: '1st March 2023',
      location: 'ICAR aIDEA NAARM',
      type: 'Graduation Certificate',
      year: 2023,
      imageSet: [
        '/assets/Start Up Graduation Ph 1.jpeg',
        '/assets/Start Up Graduation Ph 2.jpeg',
        '/assets/Start Up Graduation Ph 3.jpeg',
        '/assets/Start Up Graduation Ph 4.jpeg',
        '/assets/ISAAYU@COHORT NETWORKING aIDEA NAARM.jpg'
      ]
    },
    {
      title: 'Isaayu exhibited its products at the International Conference on Innovations to Transform Drylands held by ICRISAT',
      description: 'ISAAYU showcased innovative IoT solutions for dryland agriculture at ICRISAT\'s international conference. Our technology demonstration received appreciation from Agriculture Minister Shri S Niranjan Reddy, highlighting our commitment to transforming agricultural practices in challenging dryland environments through smart technology.',
      date: '21st-23rd February 2023',
      location: 'ICRISAT Campus, Hyderabad',
      type: 'Agricultural Conference',
      year: 2023,
      imageSet: [
        '/assets/IMG_7181.jpg',
        '/assets/IMG_7179.jpg',
        '/assets/IMG_7192.jpg',
        '/assets/IMG_7203.jpg',
        '/assets/IMG_7185.jpg'
      ]
    },
    {
      title: 'Isaayu exhibited at the 3rd Global Vertical Farming Show at Delhi',
      description: 'ISAAYU demonstrated our latest eco-friendly farming technologies at this international expo. Our booth featured working models of solar-powered hydroponic systems and water-efficient irrigation solutions that attracted significant attention from sustainability advocates and investors.',
      date: '29th-30th November 2022',
      location: 'Delhi',
      type: 'Vertical Farming Show',
      year: 2022,
      imageSet: [
        '/assets/ISAAYU@GVF 2023 Delhi.JPG',
        '/assets/ISAAYU@GVF 2023 Delhi.JPG',
        '/assets/Photo 9.JPG',
        '/assets/Stall 8.JPG',
      ]
    },
    {
      title: 'Isaayu participated as Panel in a session on "Driving Inclusive Growth" at Goldman Sachs Sustainability Week and exhibited its products',
      description: 'ISAAYU participated as a panelist in Goldman Sachs Sustainability Week, contributing to discussions on driving inclusive growth through sustainable agricultural solutions. We showcased our products and shared insights on how technology can create inclusive opportunities in the agricultural sector.',
      date: '23rd November 2022',
      location: 'Goldman Sachs Sustainability Week Venue',
      type: 'Sustainability Panel',
      year: 2022,
      imageSet: [
        '/assets/ISAAYU@GoldmanSach Sustainability Week_3.jpg',
        '/assets/ISAAYU@GoldmanSachs Hyd_3.jpeg',
        '/assets/ISAAYU@GoldmanSachs Hyderabad_2.jpeg',
        '/assets/ISAAYU@GoldmanSachs Hyderabad.jpeg',
        '/assets/ISAAYU@GoldmanSachs Sustainability Week_1.jpg',
        '/assets/ISAAYU@GoldmanSachs Sustainability Week_2.jpg'
      ]
    },
    {
      title: 'Isaayu participated and sponsored the 2nd Global Vertical Farming Show at Dubai',
      description: 'Our team presented research findings on hydroponic yield optimization at this prestigious summit. We shared data-driven insights on nutrient management and environmental control systems that can significantly improve crop quality and quantity in controlled environments.',
      date: '27th-28th July 2022',
      location: 'Dubai',
      type: 'Vertical Farming Show',
      year: 2022,
      image: '/assets/GVF DUBAI 2022.jpg'
    },
    {
      title: 'Isaayu participated and exhibited its products at TechBharat-2022 Conclave with the theme Transforming India\'s Food Technology and Agronomic Landscape held at CSIR-CFTRI campus',
      description: 'ISAAYU showcased innovative food technology and agronomic solutions at TechBharat-2022. We demonstrated how modern agricultural practices can be enhanced with smart technology solutions. The event provided excellent networking opportunities with researchers, industry experts, and policy makers in the food and agriculture sector.',
      date: '19th-21st May 2022',
      location: 'CSIR-CFTRI Campus',
      type: 'Food Conclave',
      year: 2022,
      image: '/assets/ISAAYU@TECHBHARAT, MYSORE 2022.jpeg'
    },
  ];

  // Group events by year and sort them
  const eventsByYear = events.reduce((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = [];
    }
    acc[event.year].push(event);
    return acc;
  }, {} as Record<number, Event[]>);

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(eventsByYear)
    .map(year => parseInt(year))
    .sort((a, b) => b - a);

  // Function to render images based on whether it's single image or imageSet
  const renderEventImages = (event: Event) => {
    // If event has imageSet (multiple images)
    if (event.imageSet && event.imageSet.length > 0) {
      const imageCount = event.imageSet.length;
      
      // Layout for exactly 2 images - side by side
      if (imageCount === 2) {
        return (
          <div className="bg-white p-4 rounded-xl shadow-md h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              {event.imageSet.map((img, i) => (
                <div key={i} className="w-full h-full">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${event.title} - Photo ${i+1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/placeholder-event.jpg';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      
      // Layout for exactly 3 images - one large on left, two stacked on right
      if (imageCount === 3) {
        return (
          <div className="bg-white p-4 rounded-xl shadow-md h-full">
            <div className="grid grid-cols-2 gap-3 h-full">
              {/* Large image on the left */}
              <div className="aspect-[3/4]">
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <img 
                    src={event.imageSet[0]} 
                    alt={`${event.title} - Main photo`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/placeholder-event.jpg';
                    }}
                  />
                </div>
              </div>
              {/* Two smaller images stacked on the right */}
              <div className="grid grid-rows-2 gap-2">
                {event.imageSet.slice(1, 3).map((img, i) => (
                  <div key={i} className="aspect-[1/1]">
                    <div className="w-full h-full rounded-lg overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${event.title} - Photo ${i+2}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/placeholder-event.jpg';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
      
      // Default layout for 4+ images
      return (
        <div className="bg-white p-4 rounded-xl shadow-md h-full">
          <div className="grid grid-cols-2 gap-3 h-full">
            {/* Main large image */}
            <div className="aspect-[3/4] row-span-2">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img 
                  src={event.imageSet[0]} 
                  alt={`${event.title} - Main photo`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/placeholder-event.jpg';
                  }}
                />
              </div>
            </div>
            {/* Grid of smaller images */}
            <div className="grid grid-cols-2 gap-2">
              {event.imageSet.slice(1, 5).map((img, i) => (
                <div key={i} className="aspect-[1/1]">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${event.title} - Photo ${i+2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/placeholder-event.jpg';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    // If event has single image
    if (event.image) {
      return (
        <div className="bg-white p-4 rounded-xl shadow-md h-full">
          <div className="w-full h-64 lg:h-full rounded-lg overflow-hidden">
            <img 
              src={event.image} 
              alt={`${event.title} - Event photo`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/placeholder-event.jpg';
              }}
            />
          </div>
        </div>
      );
    }

    // Fallback if no images
    return (
      <div className="bg-white p-4 rounded-xl shadow-md h-full flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <div className="text-4xl mb-2">📷</div>
          <p>No images available</p>
        </div>
      </div>
    );
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
           
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
  From Exhibitional To International Conferences See How Isaayu Is Making An Impact In The Smart Agriculture Community Across India And Beyond
</p>

<p className="text-xl text-black-800 max-w-3xl mx-auto leading-relaxed">
  Isaayu Exhibiting Its Products At Various Residential Communities In Hyderabad Encouraging Urbanites To Grow At Home And Live Sustainably
</p>


          </div>
        </div>
      </section>

      {/* Year-wise Events Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {sortedYears.map(year => (
            <div key={year} className="mb-20">
              {/* Year Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-green-800 mb-4">{year}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto rounded-full"></div>
              </div>

              {/* Events for this year */}
              <div className="space-y-12">
                {eventsByYear[year].map((event, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-orange-50 rounded-3xl p-8 shadow-lg">
                    <div className="grid lg:grid-cols-5 gap-8">
                      <div className="lg:col-span-3">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
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
                        
                        <h3 className="text-2xl text-green-800 mb-4 leading-relaxed">
                          <strong>
                            {(() => {
                              // Find the phrase to highlight in this title
                              const phrase = highlightPhrases.find(p =>
                                event.title.toLowerCase().includes(p.toLowerCase())
                              );
                              if (!phrase) return event.title;
                              // Split the title around the phrase (case-insensitive)
                              const parts = event.title.split(new RegExp(`(${phrase})`, 'i'));
                              return parts.map((part, idx) =>
                                part.toLowerCase() === phrase.toLowerCase() ? (
                                  <span
                                    key={idx}
                                    className="text-orange-600 font-bold bg-orange-100 px-1 rounded"
                                  >
                                    &quot;{part}&quot;
                                  </span>
                                ) : (
                                  part
                                )
                              );
                            })()}
                          </strong>
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {event.description}
                        </p>
                      </div>
                      
                      {/* Dynamic Image Rendering */}
                      <div className="lg:col-span-2">
                        {renderEventImages(event)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Feature Isaayu at Your Event?
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

const highlightPhrases = [
  "Startup Mahakumbh Delhi 2025",
  "The National Conference of Building Sustainable Startups in India by ICAR aIDEA NAARM",
  "Telangana Food Festival conducted by the Govt of Telangana",
  "participate in the Agriculture Ministers Meeting, G20 Summit",
  "7th Garden Festival and the 1st Urban Farming Festival",
  "Graduation Certificate conducted by aIDEA ICAR NAARM",
  "the International Conference on Innovations to Transform Drylands held by ICRISAT",
  "the 3rd Global Vertical Farming Show at Delhi",
  "at Goldman Sachs Sustainability Week and exhibited its products",
  "2nd Global Vertical Farming Show at Dubai",
  "TechBharat-2022 Conclave with the theme Transforming India's Food Technology and Agronomic Landscape"
];

export default EventsPage;