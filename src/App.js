import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import './App.css';


import HeaderTop from './components/HeaderTop/HeaderTop';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';

import Home from './pages/Home';
import Contact from './pages/Contact';
import University from './pages/University';
import UniversityDetailPage from './pages/UniversityDetailPage';
import BlogSingle from './pages/BlogSingle';

// Component to handle hash navigation
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToSection />
        <FloatingWhatsApp />
        <HeaderTop />

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/universities" element={<University />} />
          <Route path="/university/:slug" element={<UniversityDetailPage />} />
          <Route path="/blog/:slug" element={<BlogSingle />} />
          {/* Add more routes as needed */}
        </Routes>

      </Router>
      <Footer />


    </div>
  );
}

export default App;
