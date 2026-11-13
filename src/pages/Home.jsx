import { Link } from 'react-router-dom';
import { sponsorTiers } from '../data/sponsors';

const sponsorNames = sponsorTiers.flatMap((t) => t.sponsors.map((s) => s.shortName || s.name));

export default function Home() {
  return (
    <>
      <title>ABST - Acton-Boxborough Science Tournament</title>
      <meta name="description" content="The Acton-Boxborough Science Tournament (ABST) is a science competition for elementary and middle school students in Massachusetts, run by students at Acton-Boxborough Regional High School." />

      <div className="wrap content py-8">
        <p className="notice mb-8">
          <strong>Registration for ABST 2026 is open.</strong>{' '}
          Forms and fees are on the <Link to="/register">registration page</Link>.
        </p>

        <div className="grid gap-10 md:grid-cols-[1fr_300px]">
          <div>
            <h1>ABST 2026</h1>
            <p>
              The Acton-Boxborough Science Tournament is a science competition for students in grade 8 and below.
              The tests are written and the event is run by students on the Acton-Boxborough Regional High School
              Science Olympiad team.
            </p>
            <p>
              We started ABST to give elementary and middle schoolers around New England more chances to do
              competitive science, and to have fun doing it.
            </p>

            <h2>How it works</h2>
            <p>
              Each student picks two of the six individual subject tests: Math, Computer Science, Physics,
              Earth &amp; Space Science, Biology, and Chemistry. Grades 1–5 and grades 6–8 take separate
              individual tests.
            </p>
            <p>
              After that, teams work together on a Team Round and a fast-paced Guts Round, both with questions
              from every subject. Awards go to top individuals in each subject, top overall individuals, and
              top teams.
            </p>
            <p>
              You can register as a team of 4 to 6 students, or on your own or in a smaller group.
              See <Link to="/info">Competition Info</Link> for the full schedule.
            </p>

            <h2>Sponsors</h2>
            <p>
              ABST is supported by {sponsorNames.slice(0, -1).join(', ')}, and {sponsorNames[sponsorNames.length - 1]}.
              Thank you! <Link to="/sponsors">See all sponsors</Link>.
            </p>
          </div>

          {/* on phones the info box shows first; the other two boxes are desktop-only */}
          <aside className="order-first md:order-none">
            <div className="sidebox">
              <div className="sidebox-title">Tournament info</div>
              <dl className="sidebox-body">
                <dt>Date</dt>
                <dd>Saturday, June 6, 2026<br />9:00 AM – 3:00 PM</dd>
                <dt>Location</dt>
                <dd>
                  Acton Congregational Church<br />12 Concord Road, Acton, MA
                  <span className="block text-[0.9rem] text-[var(--muted)] mt-1">
                    The venue is a church, but the event is not religious.
                  </span>
                </dd>
                <dt>Who can compete</dt>
                <dd>Students in grade 8 and below</dd>
                <dt>Cost</dt>
                <dd>From $5 per person, paid in cash at the door</dd>
              </dl>
              <div className="px-[0.9rem] pb-4">
                <Link to="/register" className="btn">Register</Link>
              </div>
            </div>

            <div className="sidebox hidden md:block">
              <div className="sidebox-title">Questions?</div>
              <div className="sidebox-body">
                Email us at
                <br />
                <a href="mailto:absciencetournament@gmail.com">absciencetournament@gmail.com</a>
              </div>
            </div>

            <div className="sidebox hidden md:block">
              <div className="sidebox-title">ABRHS students</div>
              <div className="sidebox-body">
                We're always looking for more volunteers. <Link to="/join">Sign up to help</Link>.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
