import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseLinkClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const getLinkClass = ({ isActive }) =>
    isActive
      ? `${baseLinkClass} bg-black/30 text-white`
      : `${baseLinkClass} text-slate-300 hover:bg-black/20 hover:text-white`;

  const getMobileLinkClass = ({ isActive }) =>
    isActive
      ? `block ${baseLinkClass} bg-black/30 text-white text-base`
      : `block ${baseLinkClass} text-slate-300 hover:bg-black/20 hover:text-white text-base`;

  return (
    // ===== THIS WRAPPER NOW HAS RESPONSIVE PADDING & CENTERING =====
    // On mobile (default): It is a sticky block with no padding.
    // On desktop (md:): It becomes a flex container to center the navbar and adds padding for the float effect.
    <div className="sticky top-0 z-50 md:p-4 md:flex md:justify-center">
    
      {/* ===== THIS NAV ELEMENT NOW HAS RESPONSIVE STYLING ===== */}
      {/* On mobile: Sharp corners. On desktop: Rounded corners. */}
      {/* Opacity is now 60% (`bg-slate-900/60`) */}
      <nav className="shadow-lg bg-slate-900/60 backdrop-blur-lg ring-1 ring-white/10 md:rounded-xl">
        <div className="px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between space-x-6">
            
            <Link to="/" className="flex items-center">
              {/* Desktop View: Logo + Full Title */}
              <div className="hidden md:flex items-center space-x-3">
                <img
                  className="h-8 w-auto"
                  src="/logoabst.jpeg"
                  alt="ABST Logo"
                />
                <span className="font-semibold text-white">
                  Acton-Boxborough Science Tournament
                </span>
              </div>
              
              {/* Mobile View: "ABST" Text Only */}
              <div className="md:hidden">
                <span className="text-xl font-bold text-white">ABST</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-baseline space-x-2">
              <NavLink to="/" className={getLinkClass}>Home</NavLink>
              <NavLink to="/info" className={getLinkClass}>Competition Info</NavLink>
              <NavLink to="/register" className={getLinkClass}>Register</NavLink>
              <NavLink to="/sponsors" className={getLinkClass}>Sponsors</NavLink>
              <NavLink to="/about" className={getLinkClass}>About Us</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown panel */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <NavLink to="/" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/info" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Competition Info</NavLink>
              <NavLink to="/register" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Register</NavLink>
              <NavLink to="/sponsors" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Sponsors</NavLink>
              <NavLink to="/about" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
