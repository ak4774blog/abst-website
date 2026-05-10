import AnimatedPage from '../components/AnimatedPage';

const schedule = [
  { time: '8:30 – 9:15',   label: 'Individual Block 1' },
  { time: '9:30 – 10:15',  label: 'Individual Block 2' },
  { time: '10:30 – 11:30', label: 'Team Round' },
  { time: '11:45 – 12:45', label: 'Lunch' },
  { time: '1:00 – 2:00',   label: 'Guts Round' },
  { time: '2:30 – 3:15',   label: 'Awards Ceremony' },
];

const individualEvents = [
  'Math', 'Computer Science', 'Physics', 'Earth & Space Science', 'Biology', 'Chemistry'
];

export default function CompetitionInfo() {
  return (
    <AnimatedPage>
      <title>Competition Information | ABST</title>
      <meta name="description" content="View the official format, schedule, and scoring details for the Acton-Boxborough Science Tournament. Events include Math, Physics, Biology, and more." />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-10 space-y-14">

        <div>
          <h1 className="font-serif heading-bold text-4xl font-bold text-[var(--text-heading)]">Competition Information</h1>
          <p className="mt-2 text-base text-[var(--text-caption)]">
            All information below is tentative and will be finalized closer to the event date.
          </p>
        </div>

        {/* Date & Location */}
        <section className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-2 md:gap-8">
          <p className="text-xs uppercase tracking-widest text-[var(--text-caption)] font-semibold pt-1">Date &amp; Location</p>
          <div>
            <p className="text-base text-[var(--text-body)]"><span className="font-medium text-[var(--text-heading)]">Date:</span> May 30, 2026</p>
            <p className="text-base text-[var(--text-body)]"><span className="font-medium text-[var(--text-heading)]">Venue:</span> Acton Congregational Church</p>
            <p className="text-sm text-[var(--text-caption)]">12 Concord Road, Acton, MA</p>
            <p className="mt-3 text-sm text-[var(--text-caption)] italic">
              Although the onsite competition is held at a church, the event itself is not religious and does not contain any religious content.
            </p>
          </div>
        </section>

        {/* Format */}
        <section className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-2 md:gap-8">
          <p className="text-xs uppercase tracking-widest text-[var(--text-caption)] font-semibold pt-1">Format</p>
          <div>
            <p className="text-base text-[var(--text-body)] mb-3">
              There are <strong>6 individual subject rounds</strong>. Each competitor picks 2 to compete in.
              All teams also compete together in a <strong>Team Round</strong> and a fast-paced <strong>Guts Round</strong>,
              both covering questions from across all sciences.
            </p>
            <p className="text-base text-[var(--text-body)]">
              {individualEvents.join(' · ')}
            </p>
          </div>
        </section>

        {/* Schedule */}
        <section className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-2 md:gap-8">
          <p className="text-xs uppercase tracking-widest text-[var(--text-caption)] font-semibold pt-1">Schedule</p>
          <div className="space-y-1.5">
            {schedule.map(({ time, label }) => (
              <div key={label} className="flex items-baseline">
                <span className="w-36 text-base text-[var(--text-caption)] shrink-0">{time}</span>
                <span className="text-base text-[var(--text-body)]">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Scoring */}
        <section className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-2 md:gap-8">
          <p className="text-xs uppercase tracking-widest text-[var(--text-caption)] font-semibold pt-1">Scoring &amp; Awards</p>
          <div>
            <p className="text-base text-[var(--text-body)]">
              Awards will be given for top individuals in each event, top overall individuals, and top teams
              in the Team and Guts rounds. A Sweepstakes award will go to the top overall teams based on a
              weighted combination of all event scores.
            </p>
            <p className="mt-3 text-sm text-[var(--text-caption)]">
              * A &ldquo;Scaled Score&rdquo; normalizes results across events: (your score &divide; highest score) &times; 50.
            </p>
          </div>
        </section>

        {/* Contact */}
        <p className="text-base text-[var(--text-caption)] pt-4 border-t border-[var(--border-color)]">
          Questions? Email us at{' '}
          <a href="mailto:absciencetournament@gmail.com" className="text-[var(--text-brand)] hover:underline">absciencetournament@gmail.com</a>.
        </p>

      </div>

    </AnimatedPage>
  );
}
