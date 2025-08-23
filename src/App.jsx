import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import NotFound from "./pages/NotFound"; // <-- 1. Import the new page

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-slate-300">
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

            {/* 2. Add the catch-all route at the very end */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
