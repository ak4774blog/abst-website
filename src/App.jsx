import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompetitionInfo from './pages/CompetitionInfo';
import Register from './pages/Register';
import Sponsors from './pages/Sponsors';
import AboutUs from './pages/AboutUs';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        {/* ===== THEME UPDATE IS HERE ===== */}
        <div className="flex min-h-screen flex-col bg-slate-900 text-slate-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/info" element={<CompetitionInfo />} />
              <Route path="/register" element={<Register />} />
              <Route path="/sponsors" element={<Sponsors />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Wrapper>
    </BrowserRouter>
  );
}
