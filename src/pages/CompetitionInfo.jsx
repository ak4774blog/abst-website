const schedule = [
  { time: '9:00 – 9:45', label: 'Individual Round 1' },
  { time: '10:00 – 10:45', label: 'Individual Round 2' },
  { time: '11:00 – 12:00', label: 'Team Round' },
  { time: '12:00 – 1:00', label: 'Lunch (+ guest speaker)' },
  { time: '1:00 – 1:45', label: 'Guts Round' },
  { time: '2:00 – 3:00', label: 'Awards Ceremony' },
];

const individualEvents = [
  'Math', 'Computer Science', 'Physics', 'Earth & Space Science', 'Biology', 'Chemistry',
];

export default function CompetitionInfo() {
  return (
    <>
      <title>Competition Information | ABST</title>
      <meta name="description" content="Format, schedule, and scoring for the Acton-Boxborough Science Tournament. Events include Math, Computer Science, Physics, Earth & Space Science, Biology, and Chemistry." />

      <div className="wrap content py-8">
        <div className="max-w-[780px]">
          <h1>Competition Information</h1>
          <p className="note">
            Everything on this page is tentative and will be finalized closer to the event.
          </p>

          <h2>Date and location</h2>
          <p>
            <strong>Saturday, June 6, 2026</strong>, 9:00 AM to 3:00 PM<br />
            Acton Congregational Church, 12 Concord Road, Acton, MA
          </p>
          <p className="note">
            The competition is held at a church, but the event itself is not religious and has no religious content.
          </p>

          <h2>Format</h2>
          <p>
            There are <strong>6 individual subject rounds</strong>, and each competitor picks 2 of them:
          </p>
          <ul>
            {individualEvents.map((e) => <li key={e}>{e}</li>)}
          </ul>
          <p>
            All teams also compete in a <strong>Team Round</strong> and a fast-paced <strong>Guts Round</strong>.
            Both have questions from all of the subjects.
          </p>

          <h2>Schedule</h2>
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr><th className="w-40">Time</th><th>Event</th></tr>
              </thead>
              <tbody>
                {schedule.map(({ time, label }) => (
                  <tr key={label}>
                    <td className="nowrap">{time}</td>
                    <td>{label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Scoring and awards</h2>
          <p>
            Awards will be given for top individuals in each event, top overall individuals, and top teams
            in the Team and Guts rounds. A Sweepstakes award goes to the top overall teams, based on a
            weighted combination of all event scores.
          </p>
          <p className="note">
            To compare results across events we use a scaled score: (your score &divide; highest score) &times; 50.
          </p>

          <p className="mt-10 pt-4 border-t border-[var(--rule)]">
            Questions? Email us at <a href="mailto:absciencetournament@gmail.com">absciencetournament@gmail.com</a>.
          </p>
        </div>
      </div>
    </>
  );
}
