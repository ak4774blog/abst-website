import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Scene from './components/Scene';
import Home from './pages/Home';
import CompetitionInfo from './pages/CompetitionInfo';
import Register from './pages/Register';
import Sponsors from './pages/Sponsors';
import AboutUs from './pages/AboutUs';
import JoinUs from './pages/JoinUs';

// Wrapper to scroll to top on page change (no changes here)
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

// Main App component
export default function App() {
  const location = useLocation();

  // This is the new logic: check if the current path is the homepage ('/').
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-slate-300">
      
      {/* ===== CONDITIONAL 3D CANVAS ===== */}
      {/* We only render the 3D Scene if it's NOT the homepage */}
      {!isHomePage && (
        <Canvas className="!fixed inset-0 -z-10">
          <Scene />
        </Canvas>
      )}
      
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<CompetitionInfo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/join" element={<JoinUs />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
