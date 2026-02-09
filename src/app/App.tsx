import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { AcademicsPage } from './components/AcademicsPage';
import { AdmissionsPage } from './components/AdmissionsPage';
import { CampusesPage } from './components/CampusesPage';
import { ResultsPage } from './components/ResultsPage';
import { NewsEventsPage } from './components/NewsEventsPage';
import { ContactPage } from './components/ContactPage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll to top when section changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'academics':
      case 'curriculum':
      case 'methodology':
      case 'programs':
        return <AcademicsPage />;
      case 'admissions':
        return <AdmissionsPage />;
      case 'campuses':
        return <CampusesPage />;
      case 'results':
        return <ResultsPage />;
      case 'news':
        return <NewsEventsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
