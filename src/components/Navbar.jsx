import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseLinkClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const getLinkClass = ({ isActive }) =>
    isActive
      ? `${baseLinkClass} bg-slate-900 text-white`
      : `${baseLinkClass} text-slate-300 hover:bg-slate-700 hover:text-white`;

  const getMobileLinkClass = ({ isActive }) =>
    isActive
      ? `block ${baseLinkClass} bg-slate-900 text-white text-base`
      : `block ${baseLinkClass} text-slate-300 hover:bg-slate-700 hover:text-white text-base`;

  return (
    <nav className="bg-slate-800 shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl tracking-tight">
              ABST
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={getLinkClass}>Home</NavLink>
              <NavLink to="/info" className={getLinkClass}>Competition Info</NavLink>
              <NavLink to="/register" className={getLinkClass}>Register</NavLink>
              <NavLink to="/sponsors" className={getLinkClass}>Sponsors</NavLink>
              <NavLink to="/about" className={getLinkClass}>About Us</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-800"
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
  );
}
