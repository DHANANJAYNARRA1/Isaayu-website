import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, ChevronDown } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  };

  // Updated products list with all 5 products
  const products = [
    { name: 'Smart Home Farm', page: 'smart-home-farm' },
    { name: 'Grow Your Greens', page: 'grow-your-greens' },
    { name: 'Urban Water Management', page: 'urban-water-management' },
    { name: 'Smartscapes', page: 'smartscapes' },
    { name: 'Agri360', page: 'agri360' }
  ];

  const services = [
    { name: 'Experiential Farming Program', page: 'experiential-farming' },
    { name: 'Installation & Setup', page: 'installation-setup' },
    { name: 'Maintenance & Support', page: 'maintenance-support' }
  ];

  // Updated searchable content
  const searchableContent = [
    { title: 'Smart Home Farm', page: 'smart-home-farm', type: 'Product' },
    { title: 'Grow Your Greens', page: 'grow-your-greens', type: 'Product' },
    { title: 'Urban Water Management', page: 'urban-water-management', type: 'Product' },
    { title: 'Smartscapes', page: 'smartscapes', type: 'Product' },
    { title: 'Agri360', page: 'agri360', type: 'Product' },
    { title: 'Plant Diaries', page: 'plant-diaries', type: 'Page' },
    { title: 'Our Story', page: 'our-story', type: 'Page' },
    { title: 'Events', page: 'events', type: 'Page' },
    { title: 'Contact Us', page: 'contact', type: 'Page' },
    { title: 'My Account', page: 'my-account', type: 'Page' },
    { title: 'Smart Farming', page: 'products', type: 'Category' },
    { title: 'Urban Agriculture', page: 'products', type: 'Category' },
    { title: 'IoT Solutions', page: 'products', type: 'Category' }
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  // Handle dropdown with mouse events for better UX
  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-[4.5rem] md:h-20">
          {/* Logo - Direct in navbar without container/card */}
          <button 
            onClick={() => handlePageChange('home')}
            className="flex items-center"
          >
            <img
                src="/assets/IsaayuLogo_HD.png"
                alt="Logo"
                className="h-20 md:h-20 w-auto object-contain" // medium size logo
              />
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('products')}
            >
              <button 
                onClick={() => handlePageChange('products')}
                className={`flex items-center gap-2 transition-colors duration-200 font-medium ${
                  currentPage.includes('products') || currentPage.includes('smart-home-farm') || 
                  currentPage.includes('grow-your-greens') || currentPage.includes('urban-water-management') ||
                  currentPage.includes('smartscapes') || currentPage.includes('agri360')
                    ? 'text-green-600' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Products
                <span onClick={e => { e.stopPropagation(); handleDropdownClick('products'); }} className="ml-1 cursor-pointer flex items-center"><ChevronDown size={16} /></span>
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {products.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(product.page)}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {product.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => handleDropdownEnter('services')}
            >
              <button 
                onClick={() => handleDropdownClick('services')}
                className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
              >
                Services <ChevronDown size={16} />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(service.page)}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handlePageChange('plant-diaries')}
              className={`transition-colors duration-200 font-medium ${
                currentPage === 'plant-diaries' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Plant Diaries
            </button>

            <button
              onClick={() => handlePageChange('our-story')}
              className={`transition-colors duration-200 font-medium ${
                currentPage === 'our-story' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Our Story
            </button>

            <button
              onClick={() => handlePageChange('events')}
              className={`transition-colors duration-200 font-medium ${
                currentPage === 'events' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Events
            </button>
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center space-x-2 lg:space-x-3">
            {/* Search */}
            <div className="relative">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 w-40 lg:w-48 xl:w-56"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              {/* Search Results */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handlePageChange(result.page);
                        setShowSearchResults(false);
                        setSearchQuery('');
                      }}
                      className="block w-full text-left px-4 py-3 hover:bg-green-50 transition-colors"
                    >
                      <div className="font-medium text-gray-800">{result.title}</div>
                      <div className="text-sm text-gray-500">{result.type}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => handlePageChange('my-account')}
              className={`p-2 transition-colors ${
                currentPage === 'my-account' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <User size={20} />
            </button>

            {/* Contact Us Button */}
            <button 
              onClick={() => handlePageChange('contact')}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 lg:px-5 py-2 lg:py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md text-sm lg:text-base"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 transition-colors ml-auto self-center"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-xl">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Products</p>
                {products.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(product.page)}
                    className="block w-full text-left pl-4 py-2 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {product.name}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => handlePageChange('plant-diaries')}
                className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Plant Diaries
              </button>
              
              <button
                onClick={() => handlePageChange('our-story')}
                className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Our Story
              </button>
              
              <button
                onClick={() => handlePageChange('events')}
                className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Events
              </button>

              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Services</p>
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(service.page)}
                    className="block w-full text-left pl-4 py-2 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {service.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange('my-account')}
                className="block w-full text-left py-2 text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                My Account
              </button>

              {/* Mobile Contact Us Button */}
              <button 
                onClick={() => handlePageChange('contact')}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md text-sm sm:text-base"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;