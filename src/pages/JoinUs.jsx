import AnimatedPage from '../components/AnimatedPage';

export default function JoinUs() {
  return (
    <AnimatedPage>
      <title>Join Us | ABST</title>
      <meta name="description" content="Volunteer for the Acton-Boxborough Science Tournament. ABRHS students can earn volunteer hours, develop leadership skills, and inspire younger students." />
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 space-y-12">

        <div>
          <h1 className="font-serif heading-bold text-4xl font-bold text-[var(--text-heading)]">
            Join Our Team
          </h1>
          <p className="mt-2 text-base text-[var(--text-caption)]">
            Become a part of the team that brings the Acton-Boxborough Science Tournament to life.
          </p>
        </div>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-heading)] mb-3">Sign Up</h2>
            <p className="text-base text-[var(--text-body)] mb-5">
              Click the link below to fill out our volunteer sign-up form. We can't wait to have you on the team! Note that you must be a student from Acton-Boxborough Regional High School.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeg_cXFT7uI3uRrUoJr9BRtJwnPTAfaZ5Z9lfFc-YdamJa0kw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--accent)] text-white font-semibold py-2 px-6 rounded text-sm hover:bg-[var(--accent-hover)] transition-colors"
            >
              Sign Up Now
            </a>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--text-heading)] mb-4">
              Why Volunteer with ABST?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-heading)]">Earn Volunteer Hours</h3>
                <p className="text-sm text-[var(--text-body)]">You will get plenty of official community service hours for your contribution, which may be useful for your resume / college application.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-heading)]">Learn About Organizing Events</h3>
                <p className="text-sm text-[var(--text-body)]">You will learn about handling logistics for a competition, how to communicate as part of a large team, and organize an event from the ground up.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-heading)]">Inspire The Youth</h3>
                <p className="text-sm text-[var(--text-body)]">You can show your passion for science and inspire younger students by helping to organize a competition to help them grow.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-heading)]">Connect With Talented Peers</h3>
                <p className="text-sm text-[var(--text-body)]">You will work alongside other like-minded and driven high school students, which can form friendships and valuable connections.</p>
              </div>
            </div>
          </section>

      </div>
    </AnimatedPage>
  );
}
