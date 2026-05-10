import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const subjects = ['Math', 'Physics', 'Chemistry', 'Biology', 'Earth Science', 'Technology'];

export default function Home() {
  return (
    <AnimatedPage>
      <title>ABST - Acton-Boxborough Science Tournament</title>
      <meta name="description" content="The official website for the Acton-Boxborough Science Tournament (ABST), a premier science competition for middle schoolers in Massachusetts, founded by ABRHS students." />

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 sm:px-8 text-center">

        <p className="text-sm uppercase tracking-[0.25em] text-[var(--text-caption)] mb-6 animate-[fadeIn_0.6s_ease]">
          2026 Onsite Competition
        </p>

        <div className="w-12 h-1 bg-[var(--accent)] rounded-full mb-8 animate-[fadeIn_0.7s_ease]" />

        <h1 className="font-serif heading-bold text-5xl sm:text-7xl font-bold text-[var(--text-heading)] tracking-tight leading-[1.1] animate-[fadeIn_0.8s_ease]">
          Acton-Boxborough<br />Science Tournament
        </h1>

        <p className="mt-6 text-lg text-[var(--text-body)] animate-[fadeIn_1s_ease]">
          May 30, 2026 @ Acton Congregational Church
          <span className="block text-xs text-[var(--text-caption)] mt-1 italic">Not a religious event</span>
        </p>

        <p className="mt-8 text-xl text-[var(--text-body)] max-w-2xl leading-relaxed animate-[fadeIn_1.2s_ease]">
          Dedicated to making STEM education more accessible for middle and elementary schoolers across New England. A fun, competitive environment designed by a committed team of ABRHS students.
        </p>

        <div className="mt-10 flex gap-4 animate-[fadeIn_1.4s_ease]">
          <Link
            to="/register"
            className="bg-[var(--accent)] text-white font-semibold text-base px-8 py-3 rounded-md hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
          >
            Register
          </Link>
          <Link
            to="/info"
            className="text-[var(--text-heading)] font-semibold text-base px-8 py-3 rounded-md border border-[var(--border-color)] hover:bg-[var(--surface-muted)] transition-colors"
          >
            More info
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
}

