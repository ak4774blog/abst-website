import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

export default function Register() {
  return (
    <AnimatedPage>
    <title>Register | ABST</title>
      <meta name="description" content="Register your team for the Acton-Boxborough Science Tournament. Sign up here to compete in our middle school science competition." />

      {/* Page header band */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 space-y-10">

        <div>
          <h1 className="font-serif heading-bold text-4xl font-bold text-[var(--text-heading)]">Register for ABST!</h1>
          <p className="mt-2 text-base text-[var(--text-caption)]">
            You can find all the information about the competition on the Competition Information tab.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-[var(--text-heading)]">Registration Form Coming Soon</h2>
          <p className="text-base text-[var(--text-body)] mt-2">Please check back closer to the event date. In the meantime, feel free to email us with any questions.</p>
          <a href="mailto:absciencetournament@gmail.com" className="inline-block mt-4 text-base text-[var(--text-brand)] font-medium hover:underline">absciencetournament@gmail.com</a>

          <div className="mt-10 pt-8 border-t border-[var(--border-color)]">
            <h2 className="text-xl font-semibold text-[var(--text-heading)] mb-4">What to Expect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[var(--text-caption)] font-semibold mb-1">Team Size</p>
                <p className="text-base text-[var(--text-body)]">Up to 6 students per team</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text-caption)] font-semibold mb-1">Grade Level</p>
                <p className="text-sm text-[var(--text-body)]">Grade 8 and below</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-[var(--text-caption)] font-semibold mb-1">Events</p>
                <p className="text-sm text-[var(--text-body)]">6 individual + 2 team rounds</p>
              </div>
            </div>
            <p className="mt-6 text-base text-[var(--text-caption)]">
              For full details, see our <Link to="/info" className="text-[var(--text-brand)] font-medium hover:underline">Competition Info</Link> page.
            </p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
