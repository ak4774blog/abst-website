import { useState, useEffect } from 'react';

function initialDark() {
  if (typeof window === 'undefined') return false;
  const stored = localStorage.getItem('theme');
  if (stored) return stored === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function Footer() {
  const [isDark, setIsDark] = useState(initialDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <footer className="content mt-16 border-t border-[var(--rule)] bg-[var(--bg-alt)] text-[0.95rem] text-[var(--muted)]">
      <div className="wrap py-8 flex flex-col gap-4 md:flex-row md:justify-between">
        <div>
          <p className="!mb-1 font-semibold text-[var(--ink)]">Acton-Boxborough Science Tournament</p>
          <p className="!mb-1">Run by students at Acton-Boxborough Regional High School.</p>
          <p className="!mb-0">
            Fiscally sponsored by <a href="https://hackclub.com/" target="_blank" rel="noopener noreferrer">Hack Club</a>, a 501(c)(3) nonprofit.
          </p>
        </div>
        <div className="md:text-right">
          <p className="!mb-1">
            <a href="mailto:absciencetournament@gmail.com">absciencetournament@gmail.com</a>
          </p>
          <p className="!mb-1">&copy; {new Date().getFullYear()} ABST</p>
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="underline underline-offset-2 hover:text-[var(--ink)]"
          >
            {isDark ? 'Light mode' : 'Dark mode'}
          </button>
        </div>
      </div>
    </footer>
  );
}
