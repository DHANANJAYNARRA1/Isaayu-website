import { Target, Eye, Users, Leaf } from 'lucide-react';

const About = () => {
  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2 md:mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Isaayu is a forward-thinking agri-tech company dedicated to revolutionizing agriculture through IoT solutions. We empower urban gardeners, farmers, and rural communities with smart automation, data-driven insights, and sustainable practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/4505170/pexels-photo-4505170.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
              alt="Smart farming technology"
              className="rounded-lg shadow-xl w-full h-40 md:h-80 object-cover"
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Target className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To make agriculture efficient, sustainable, and accessible for everyone through innovative IoT solutions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 p-3 rounded-full">
                <Eye className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Smart farming for a smarter planet - creating a sustainable future for agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Users className="text-emerald-600 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Happy Farmers</p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Leaf className="text-emerald-600 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">1000+</h3>
            <p className="text-gray-600">Acres Monitored</p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Target className="text-emerald-600 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">95%</h3>
            <p className="text-gray-600">Water Savings</p>
          </div>
          
          <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Eye className="text-emerald-600 mx-auto mb-4" size={48} />
            <h3 className="text-3xl font-bold text-gray-800 mb-2">24/7</h3>
            <p className="text-gray-600">Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;