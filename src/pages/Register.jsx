import { Link } from 'react-router-dom';

const forms = [
  {
    name: 'Team registration',
    who: 'For a complete team of 4 to 6 students.',
    button: 'Register a team',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfj1MqIIpU5M713IXIl8iPdvQp3EmuB8KxrYiVPlYNJGaQ8Ng/viewform',
  },
  {
    name: 'Individual & small team registration',
    who: 'For individuals, or groups of fewer than 4 students.',
    button: 'Register individually',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe8ChYLYZHThTvqs5FKxsXjmS1AMFH9XK2Kb_hX6FL5V9Nmkg/viewform',
  },
  {
    name: 'Release form',
    who: 'Every participant needs to fill this out, no matter how they registered.',
    button: 'Release form',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfQ371XKuhBy4M4C0jvcLaKoW8G9F6DMCSj600nGBilyI5xSQ/viewform',
  },
];

export default function Register() {
  return (
    <>
      <title>Register | ABST</title>
      <meta name="description" content="Register for the Acton-Boxborough Science Tournament, a science competition for students in grade 8 and below." />

      <div className="wrap content py-8">
        <div className="max-w-[780px]">
          <h1>Registration</h1>
          <p className="notice">
            <strong>Registration is open.</strong> Fill out the form that matches your group below.
            Every participant also needs a release form.
          </p>

          <h2>Forms</h2>
          <div className="border border-[var(--rule)] divide-y divide-[var(--rule)] mb-4">
            {forms.map((f) => (
              <div key={f.name} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
                <div className="flex-1">
                  <h3 className="!m-0">{f.name}</h3>
                  <p className="!m-0">{f.who}</p>
                </div>
                <a href={f.href} target="_blank" rel="noopener noreferrer" className="btn shrink-0 self-start sm:self-auto">
                  {f.button}
                </a>
              </div>
            ))}
          </div>
          <p className="note">The forms open in Google Forms.</p>

          <h2>Fees</h2>
          <p>
            We collect payment <strong>in person at the door</strong> on the day of the event,
            and we <strong>only accept cash</strong>.
          </p>
          <div className="table-wrap">
            <table className="data">
              <thead>
                <tr><th>Registration</th><th>Price</th><th>Includes</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Team (4 to 6 students)</td>
                  <td className="nowrap">$5 per person</td>
                  <td>Competition, lunch, raffle entry</td>
                </tr>
                <tr>
                  <td>Individual &amp; small team, basic</td>
                  <td className="nowrap">$5 per person</td>
                  <td>Competition only</td>
                </tr>
                <tr>
                  <td>Individual &amp; small team, full</td>
                  <td className="nowrap">$7 per person</td>
                  <td>Competition, lunch, raffle entry</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Full registration is $2 more than basic. It covers lunch (at least 2 slices of pizza, plus snacks
            like chips and cookies, and drinks) and gets you into a raffle for more prizes. The basic option
            is for anyone who won't be eating the food we provide.
          </p>
          <p>
            Teams of 4, 5, or 6 get the full package at the basic price as a group discount. All teams that
            register are expected to compete in both the Team and Guts rounds.
          </p>

          <h2>Who can compete</h2>
          <ul>
            <li>Students in grade 8 and below.</li>
            <li>Individual rounds are split into grades 1–5 and grades 6–8. Team rounds are not split.</li>
            <li>Teams can have up to 6 students.</li>
            <li>There are 6 individual rounds and 2 team rounds. Each competitor takes 2 of the 6 individual rounds.</li>
          </ul>

          <h2>Parents and coaches</h2>
          <p>
            Parents, guardians, and coaches don't need to stay with the team after registration. If you'd
            like to watch, most of the competition happens in one large hall. Competitors sit in the main
            area, and parents and coaches are welcome to stand or sit along the walls on the opposite side
            of the room.
          </p>

          <p className="mt-10 pt-4 border-t border-[var(--rule)]">
            The full schedule is on the <Link to="/info">Competition Info</Link> page. Other questions? Email
            us at <a href="mailto:absciencetournament@gmail.com">absciencetournament@gmail.com</a>.
          </p>
        </div>
      </div>
    </>
  );
}
