import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectPage';
import LegalLandingPage from './pages/LegalLandingPage';
import LegalPage from './pages/LegalPage';
import ScrollToTop from './components/ScrollToTop';
import CookieConsent from './components/CookieConsent';

// A simple 404 page component
const NotFoundPage = () => (
  <div className="flex-grow flex items-center justify-center p-8 text-center bg-background text-text">
    <div>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl">The page you are looking for does not exist.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
       <ScrollToTop />
       <CookieConsent />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/*
          The main content area is set to grow and take up remaining space.
          pt-[70px] pushes content down to prevent it from being hidden
          behind the fixed Navbar.
        */}
        <main className="flex-grow pt-[70px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            {/* Route for the Legal Landing Page */}
            <Route path="/legal" element={<LegalLandingPage />} />
        
            {/* Dynamic Route for individual legal documents */}
            <Route path="/legal/:docType" element={<LegalPage />} />
            {/*
              This wildcard route will catch any URL that doesn't match
              the routes above and display the NotFoundPage.
            */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;