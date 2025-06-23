import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './assets/components/Header';
import { HomePage } from './pages/Home/HomePage';
import { AboutSection } from './pages/AboutSection/AboutSection';
import { GalleryPage } from './pages/Gallery/GalleryPage';
import { PricesPage } from './pages/Prices/PricesPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import CalendarPage from './pages/CalendarPage/CalendarPage';

export const App = () => {
  return (
    <Router>
      <Header /> {/* 🔹 будет отображаться всегда */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
         <Route path="/calendar" element={<CalendarPage />} />

      
      </Routes>
    </Router>
  );
};
