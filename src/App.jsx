// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CompetitionInfo from './pages/CompetitionInfo';
import Register from './pages/Register';
import Sponsors from './pages/Sponsors';
import AboutUs from './pages/AboutUs';

// A helper component to scroll to the top of the page on route changes.
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

// This is the correct, simple App component.
export default function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <div className="flex min-h-screen flex-col bg-white">
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
