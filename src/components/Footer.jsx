import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[var(--accent)] text-white/80 mt-16">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div>
            <p className="font-bold text-white text-lg tracking-wide">Acton-Boxborough Science Tournament</p>
            <p className="mt-1 text-sm text-white/50">Acton-Boxborough Regional High School</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/info" className="hover:text-white transition-colors">Details</Link>
            <Link to="/register" className="hover:text-white transition-colors">Register</Link>
            <Link to="/sponsors" className="hover:text-white transition-colors">Sponsors</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/join" className="hover:text-white transition-colors">Join Us</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/40">
          <p>&copy; {currentYear} Acton-Boxborough Science Tournament. Student-organized.</p>
          <a href="mailto:absciencetournament@gmail.com" className="hover:text-white/70 transition-colors">
            absciencetournament@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
