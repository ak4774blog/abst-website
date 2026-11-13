import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/info', label: 'Competition Info' },
  { to: '/register', label: 'Register' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/about', label: 'Our Team' },
  { to: '/join', label: 'Volunteer' },
];

const linkClass = ({ isActive }) =>
  'block px-4 py-2.5 text-white font-semibold ' +
  (isActive ? 'bg-black/25' : 'hover:bg-white/10');

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="wrap flex items-center gap-4 py-4">
        <Link to="/" className="shrink-0">
          <img className="h-12 w-12 sm:h-14 sm:w-14 rounded-md object-cover" src="/logoabst.png" alt="ABST logo" />
        </Link>
        <div>
          <Link to="/" className="font-serif text-xl sm:text-[1.65rem] font-semibold leading-tight text-[var(--ink)]">
            Acton-Boxborough Science Tournament
          </Link>
          <p className="text-[0.95rem] text-[var(--muted)] leading-snug mt-0.5">
            A science competition for grades 1–8, run by students at ABRHS
          </p>
        </div>
      </div>

      <nav className="bg-[var(--brand)]">
        <div className="wrap !px-0 sm:!px-5">
          <ul className="hidden md:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} end className={linkClass}>{l.label}</NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden w-full text-left px-5 py-2.5 text-white font-semibold"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            Menu {menuOpen ? '▴' : '▾'}
          </button>
          {menuOpen && (
            <ul id="mobile-menu" className="md:hidden border-t border-white/15 pb-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end className={(s) => linkClass(s) + ' !px-5'} onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
