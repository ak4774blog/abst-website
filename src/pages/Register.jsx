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
          {/* Registration Links Section */}
          <h2 className="text-xl font-semibold text-[var(--text-heading)]">Registration is Open</h2>
          <p className="text-base text-[var(--text-body)] mt-2">
            Please fill out the appropriate registration form below. <strong>Note:</strong> Every participant must also complete the release form.
          </p>
          
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfj1MqIIpU5M713IXIl8iPdvQp3EmuB8KxrYiVPlYNJGaQ8Ng/viewform"
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-8 py-3 rounded-md bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-colors text-center shadow-sm"
            >
              Team Registration
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSe8ChYLYZHThTvqs5FKxsXjmS1AMFH9XK2Kb_hX6FL5V9Nmkg/viewform"
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-8 py-3 rounded-md bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-colors text-center shadow-sm"
            >
              Individual Registration
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfQ371XKuhBy4M4C0jvcLaKoW8G9F6DMCSj600nGBilyI5xSQ/viewform"
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-8 py-3 rounded-md bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-hover)] transition-colors text-center shadow-sm"
            >
              Release Form
            </a>
          </div>

          <p className="text-sm text-[var(--text-body)] mt-6">
            Have any questions? Feel free to email us at <a href="mailto:absciencetournament@gmail.com" className="text-[var(--text-brand)] font-medium hover:underline">absciencetournament@gmail.com</a>.
          </p>

          {/* What to Expect Section */}
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
                <p className="text-sm text-[var(--text-caption)] mt-1 italic">Each competitor only takes 2/6 individual rounds.</p>
              </div>
            </div>
          </div>

          {/* Registration Fees Section */}
          <div className="mt-10 pt-8 border-t border-[var(--border-color)]">
            <h2 className="text-xl font-semibold text-[var(--text-heading)] mb-6">Registration Fees</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Individual Fees */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--text-heading)]">Individual</h3>
                <ul className="space-y-1">
                  <li className="text-base text-[var(--text-body)]"><span className="font-semibold">$5/person</span> - Basic registration</li>
                  <li className="text-base text-[var(--text-body)]"><span className="font-semibold">+$2/person</span> - Full registration</li>
                </ul>
                <p className="text-sm text-[var(--text-caption)] leading-relaxed">
                  The full registration package covers food during the lunch block of the event, which includes (at least) 2 slices of pizza, snacks (chips, cookies, etc.), and beverages, as well as entry into a raffle for more prizes. The basic registration fee is available for those who will not be having the provided food.
                </p>
              </div>

              {/* Team Fees */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[var(--text-heading)]">Team</h3>
                <ul className="space-y-1">
                  <li className="text-base text-[var(--text-body)]"><span className="font-semibold">$5/person</span> - Full registration</li>
                </ul>
                <p className="text-sm text-[var(--text-caption)] leading-relaxed">
                  Those registering as part of a 4, 5, or 6 member team are exempt from the full registration cost as a form of group discount. All teams who register are expected to compete in both the team and guts rounds.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-[var(--border-color)]">
            <p className="text-base text-[var(--text-caption)]">
              For full details, see our <Link to="/info" className="text-[var(--text-brand)] font-medium hover:underline">Competition Info</Link> page.
            </p>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
}
