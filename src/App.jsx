import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scene from "./components/Scene";
import Home from "./pages/Home";
import CompetitionInfo from "./pages/CompetitionInfo";
import Register from "./pages/Register";
import Sponsors from "./pages/Sponsors";
import AboutUs from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-slate-300">
      {/* 3D Canvas lives here, in the background, on all pages */}
      <Canvas className="!fixed inset-0 -z-10">
        <Scene />
      </Canvas>

      <Navbar />
      <main className="flex-grow">
        {/* AnimatePresence allows for exit animations on page changes */}
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
      <Analytics />
    </div>
  );
}

// We also need to wrap the App in BrowserRouter in main.jsx now
