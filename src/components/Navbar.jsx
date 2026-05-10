import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const getLinkClass = ({ isActive }) =>
    isActive
      ? 'text-lg font-semibold text-[var(--text-nav-active)]'
      : 'text-lg font-medium text-[var(--text-nav)] hover:text-[var(--text-nav-active)] transition-colors';

  const getMobileLinkClass = ({ isActive }) =>
    isActive
      ? 'block px-2 py-2.5 text-base font-semibold text-[var(--text-nav-active)]'
      : 'block px-2 py-2.5 text-base font-medium text-[var(--text-nav)] hover:text-[var(--text-nav-active)]';

  return (
    <nav className="w-full px-8 sm:px-12 lg:px-16 border-b border-[var(--border-color)]">
        <div className="flex h-16 items-center justify-between">

          <Link to="/">
            <img className="h-9 w-9 rounded-md object-cover" src="/logoabst.png" alt="ABST Logo" />
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center space-x-8">
              <NavLink to="/" className={getLinkClass}>Home</NavLink>
              <NavLink to="/info" className={getLinkClass}>Competition Info</NavLink>
              <NavLink to="/register" className={getLinkClass}>Register</NavLink>
              <NavLink to="/sponsors" className={getLinkClass}>Sponsors</NavLink>
              <NavLink to="/about" className={getLinkClass}>About Us</NavLink>
              <NavLink to="/join" className={getLinkClass}>Join Us</NavLink>
            </div>

            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-[var(--text-nav)] hover:text-[var(--text-nav-active)] transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="p-2 text-[var(--text-nav)] hover:text-[var(--text-nav-active)] lg:hidden"
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen
                ? <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                : <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              }
            </button>
          </div>
        </div>

      {isMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-4 py-3 space-y-1">
            <NavLink to="/" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            <NavLink to="/info" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Competition Info</NavLink>
            <NavLink to="/register" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Register</NavLink>
            <NavLink to="/sponsors" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Sponsors</NavLink>
            <NavLink to="/about" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/join" className={getMobileLinkClass} onClick={() => setIsMenuOpen(false)}>Join Us</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
