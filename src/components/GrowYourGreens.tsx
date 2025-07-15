import { Leaf, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const GrowYourGreens = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      title: 'INDIAN GREENS',
      color: 'text-orange-500',
      bgColor: 'from-orange-50 to-orange-100',
      items: [
        { name: 'Spinach', icon: '🥬' },
        { name: 'Amaranthus', icon: '🌿' },
        { name: 'Coriander', icon: '🌱' },
        { name: 'Methi', icon: '🍃' },
        { name: 'Sorrel', icon: '🥬' }
      ]
    },
    {
      title: 'HERBS & EXOTIC GREENS',
      color: 'text-green-600',
      bgColor: 'from-green-50 to-green-100',
      items: [
        { name: 'Mint', icon: '🌿' },
        { name: 'Basil', icon: '🌱' },
        { name: 'Thyme', icon: '🍃' },
        { name: 'Leafy Lettuce', icon: '🥬' },
        { name: 'Butterhead Lettuce', icon: '🥗' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-green-50 to-orange-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-200/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-orange-300/10 rounded-full blur-xl"></div>
        
        {/* Organic pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(34, 197, 94, 0.3) 2px, transparent 0),
                             radial-gradient(circle at 60px 60px, rgba(249, 115, 22, 0.3) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100/80 to-orange-100/80 backdrop-blur-sm text-green-600 px-8 py-3 rounded-full font-bold mb-8 text-lg shadow-lg border border-white/30">
            <Sparkles className="text-orange-500" size={24} />
            Fresh Harvest
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            <span className="text-green-800">GROW YOUR</span>{' '}
            <span className="text-orange-500">GREENS</span>
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 mb-8">
            & OWN YOUR FRESH HARVEST
          </h3>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white/50">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  activeCategory === index
                    ? `${category.color} bg-gradient-to-r ${category.bgColor} shadow-lg`
                    : 'text-slate-600 hover:text-slate-800'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Category Display */}
        <div className="max-w-5xl mx-auto">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 ${
                activeCategory === categoryIndex
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8 absolute'
              }`}
            >
              <div className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50`}>
                <h3 className={`text-3xl md:text-4xl font-bold ${category.color} text-center mb-12`}>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                  {category.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="group text-center transform transition-all duration-500 hover:-translate-y-4"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:border-orange-300">
                        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Leaf className="text-white" size={28} />
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg group-hover:text-orange-600 transition-colors duration-300">
                          {item.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeCategory ? 'bg-orange-500 w-8' : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowYourGreens;