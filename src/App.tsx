import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhyIsaayu from './components/WhyIsaayu';
import UrbanCultivator from './components/UrbanCultivator';
import AwardsCarousel from './components/AwardsCarousel';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ProductsPage from './pages/ProductsPage';
import PlantDiariesPage from './pages/PlantDiariesPage';
import EventsPage from './pages/EventsPage';
import OurStoryPage from './pages/OurStoryPage';
import MyAccountPage from './pages/MyAccountPage';
import SmartHomeFarmPage from './pages/products/SmartHomeFarmPage';
import GrowYourGreensPage from './pages/products/GrowYourGreensPage';
import UrbanWaterManagementPage from './pages/products/UrbanWaterManagementPage';
import SmartscapesPage from './pages/products/SmartscapesPage';
import Agri360Page from './pages/products/Agri360Page';
import ExperientialFarmingProgramPage from './pages/products/ExperientialFarmingProgramPage';
import InstallationSetupPage from './pages/products/InstallationSetupPage';
import MaintenanceSupportPage from './pages/products/MaintenanceSupportPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <UrbanCultivator />
            <WhyIsaayu />
            <AwardsCarousel />
            {/* <PartnersCarousel /> removed as incubators will be shown in the footer only */}
          </>
        );
      case 'products':
        return <ProductsPage setCurrentPage={setCurrentPage} />;
      case 'smart-home-farm':
        return <SmartHomeFarmPage setCurrentPage={setCurrentPage} />;
      case 'grow-your-greens':
        return <GrowYourGreensPage setCurrentPage={setCurrentPage} />;
      case 'urban-water-management':
        return <UrbanWaterManagementPage setCurrentPage={setCurrentPage} />;
      case 'smartscapes':
        return <SmartscapesPage setCurrentPage={setCurrentPage} />;
      case 'agri360':
        return <Agri360Page setCurrentPage={setCurrentPage} />;
      case 'plant-diaries':
        return <PlantDiariesPage />;
      case 'events':
        return <EventsPage />;
      case 'our-story':
        return <OurStoryPage />;
      case 'contact':
        return <Contact />;
      case 'my-account':
        return <MyAccountPage />;
      case 'experiential-farming':
        return <ExperientialFarmingProgramPage />;
      case 'installation-setup':
        return <InstallationSetupPage />;
      case 'maintenance-support':
        return <MaintenanceSupportPage />;
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <UrbanCultivator />
            <WhyIsaayu />
            <AwardsCarousel />
            {/* <PartnersCarousel /> removed as incubators will be shown in the footer only */}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;