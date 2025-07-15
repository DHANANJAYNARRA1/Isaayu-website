import React from 'react';
import { Calendar, Leaf, TrendingUp, Camera, BookOpen, Heart, Apple, Sprout } from 'lucide-react';

const PlantDiariesPage = () => {
  const educationalArticles = [
    {
      title: 'The Power of Leafy Greens: Why Spinach Should Be Your Daily Superfood',
      date: 'March 15, 2025',
      category: 'Nutrition Education',
      readTime: '5 min read',
      description: 'Discover the incredible health benefits of spinach - from iron content that fights anemia to antioxidants that protect your heart. Learn why this humble green leaf is considered nature\'s multivitamin.',
      keyPoints: ['Rich in Iron & Folate', 'Boosts Immune System', 'Supports Eye Health', 'Anti-inflammatory Properties'],
      nutritionFacts: { iron: '2.7mg', vitaminK: '483mcg', folate: '194mcg', calories: '23' }
    },
    {
      title: 'Herbs That Heal: The Medicinal Magic of Fresh Basil, Mint & Coriander',
      date: 'March 12, 2025',
      category: 'Herbal Medicine',
      readTime: '7 min read',
      description: 'Explore how common kitchen herbs are powerful natural medicines. From basil\'s anti-bacterial properties to mint\'s digestive benefits and coriander\'s detox power.',
      keyPoints: ['Natural Antibiotics', 'Digestive Health', 'Stress Relief', 'Detoxification'],
      nutritionFacts: { antioxidants: 'High', vitamins: 'A,C,K', minerals: 'Potassium', benefits: 'Multiple' }
    },
    {
      title: 'Rainbow Nutrition: Why Colorful Vegetables Are Your Health Insurance',
      date: 'March 10, 2025',
      category: 'Healthy Living',
      readTime: '6 min read',
      description: 'Learn the science behind eating the rainbow. Each color represents different phytonutrients that protect your body in unique ways. Red tomatoes, orange carrots, green lettuce - each has a special role.',
      keyPoints: ['Phytonutrient Diversity', 'Cancer Prevention', 'Heart Health', 'Brain Function'],
      nutritionFacts: { colors: '7 types', nutrients: '100+', protection: 'Full spectrum', variety: 'Essential' }
    },
    {
      title: 'Fresh vs Store-Bought: The Nutritional Truth About Home-Grown Vegetables',
      date: 'March 8, 2025',
      category: 'Food Science',
      readTime: '8 min read',
      description: 'Scientific comparison of nutrient levels in fresh-picked vs store-bought vegetables. Understand why timing of harvest and storage methods dramatically affect nutritional value.',
      keyPoints: ['Nutrient Degradation', 'Harvest Timing', 'Storage Impact', 'Freshness Benefits'],
      nutritionFacts: { freshness: '300% more', vitamins: 'Peak levels', minerals: 'Bioavailable', taste: 'Superior' }
    },
    {
      title: 'Building Immunity Naturally: Foods That Strengthen Your Body\'s Defense System',
      date: 'March 5, 2025',
      category: 'Immune Health',
      readTime: '9 min read',
      description: 'Discover which vegetables and herbs naturally boost your immune system. Learn about vitamin C powerhouses, zinc-rich foods, and natural antibiotics growing in your garden.',
      keyPoints: ['Vitamin C Sources', 'Natural Antibiotics', 'Zinc-Rich Foods', 'Immune Boosters'],
      nutritionFacts: { vitaminC: '200mg+', zinc: '15mg', immunity: 'Enhanced', protection: 'Natural' }
    },
    {
      title: 'The Microgreen Revolution: Tiny Plants with Massive Nutritional Impact',
      date: 'March 2, 2025',
      category: 'Superfoods',
      readTime: '4 min read',
      description: 'Explore the concentrated nutrition in microgreens - some contain 40x more nutrients than mature plants. Perfect for small spaces and maximum health benefits.',
      keyPoints: ['Concentrated Nutrition', 'Easy to Grow', 'Space Efficient', 'Quick Harvest'],
      nutritionFacts: { concentration: '40x more', vitamins: 'All types', minerals: 'Dense', growth: '7-14 days' }
    }
  ];

  const healthBenefits = [
    {
      icon: Heart,
      title: 'Heart Health',
      description: 'Fresh vegetables provide nitrates, potassium, and antioxidants that support cardiovascular health',
      color: 'from-red-100 to-red-200'
    },
    {
      icon: Apple,
      title: 'Weight Management',
      description: 'High fiber, low calorie fresh produce helps maintain healthy weight naturally',
      color: 'from-green-100 to-green-200'
    },
    {
      icon: Sprout,
      title: 'Digestive Health',
      description: 'Fresh fiber and enzymes support gut health and improve digestion',
      color: 'from-blue-100 to-blue-200'
    },
    {
      icon: BookOpen,
      title: 'Mental Clarity',
      description: 'Nutrient-dense foods support brain function and cognitive performance',
      color: 'from-purple-100 to-purple-200'
    }
  ];

  const nutritionTips = [
    'Eat vegetables within 24 hours of harvest for maximum nutrition',
    'Different colored vegetables provide different types of antioxidants',
    'Raw vegetables often retain more vitamin C than cooked ones',
    'Herbs are concentrated sources of vitamins and minerals',
    'Fresh vegetables have higher water content, keeping you hydrated',
    'Home-grown vegetables are free from harmful pesticides and chemicals'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-600 px-6 py-2 rounded-full font-semibold mb-6">
              Plant Diaries - Health Education
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6">
              Nourish Your Knowledge
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the incredible health benefits of fresh vegetables and herbs. Learn how proper nutrition 
              from home-grown produce can transform your health and well-being naturally.
            </p>
          </div>

          {/* Featured Health Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {healthBenefits.map((benefit, index) => (
              <div key={index} className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <benefit.icon className="text-green-600" size={32} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Articles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Health & Nutrition Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based articles about the health benefits of fresh vegetables, herbs, and home-grown produce
            </p>
          </div>

          <div className="space-y-12">
            {educationalArticles.map((article, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-orange-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <BookOpen size={16} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {article.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Key Health Benefits:</h4>
                        {article.keyPoints.map((point, idx) => (
                          <div key={idx} className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{point}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-2">Nutrition Facts:</h4>
                        {Object.entries(article.nutritionFacts).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 capitalize">{key}:</span>
                            <span className="text-green-600 font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <Leaf size={48} className="mx-auto mb-3 text-green-600" />
                        <p className="font-bold">Health Education</p>
                        <p className="text-sm">Nutritional infographic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Tips */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              Quick Nutrition Tips
            </h2>
            <p className="text-xl text-gray-600">
              Simple ways to maximize the nutritional value of your fresh produce
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Statistics */}
      <section className="py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              The Science of Fresh Nutrition
            </h2>
            <p className="text-xl text-gray-600">
              Research-backed benefits of consuming fresh, home-grown vegetables
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '300%', label: 'More Vitamin C in fresh vs stored vegetables', icon: TrendingUp },
              { number: '40x', label: 'Higher nutrient density in microgreens', icon: Sprout },
              { number: '95%', label: 'Reduction in pesticide exposure', icon: Heart },
              { number: '24hrs', label: 'Optimal consumption window for max nutrition', icon: Calendar }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-green-600" size={32} />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Healthy Living Journey
          </h2>
          <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
            Knowledge is the first step. Now discover how you can grow your own nutritious, 
            fresh vegetables and herbs at home for optimal health.
          </p>
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Learn About Home Growing
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlantDiariesPage;