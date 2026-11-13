import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CompetitionInfo from "./pages/CompetitionInfo";
import Register from "./pages/Register";
import Sponsors from "./pages/Sponsors";
import AboutUs from "./pages/AboutUs";
import JoinUs from "./pages/JoinUs";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  // jump to the top when switching pages
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<CompetitionInfo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
