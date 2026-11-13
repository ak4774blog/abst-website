import { sponsorTiers } from '../data/sponsors';

function Sponsor({ sponsor }) {
  const logo = sponsor.logoSrc ? (
    <img src={sponsor.logoSrc} alt={`${sponsor.name} logo`} className="max-h-full max-w-full object-contain" />
  ) : (
    <span className="font-serif text-lg font-semibold text-[var(--ink)] text-center px-2">{sponsor.name}</span>
  );

  return (
    <div>
      <div className="h-28 border border-[var(--rule)] bg-white flex items-center justify-center p-4 mb-2">
        {sponsor.href ? (
          <a href={sponsor.href} target="_blank" rel="noopener noreferrer" className="h-full w-full flex items-center justify-center">
            {logo}
          </a>
        ) : logo}
      </div>
      <h3 className="!mt-0 !mb-0.5">
        {sponsor.href ? (
          <a href={sponsor.href} target="_blank" rel="noopener noreferrer">{sponsor.name}</a>
        ) : sponsor.name}
      </h3>
      <p className="!mb-0 text-[0.975rem]">{sponsor.description}</p>
    </div>
  );
}

export default function Sponsors() {
  return (
    <>
      <title>Sponsors | ABST</title>
      <meta name="description" content="The sponsors who support the Acton-Boxborough Science Tournament." />

      <div className="wrap content py-8">
        <h1>Sponsors</h1>
        <p className="max-w-[780px]">
          ABST wouldn't be possible without our sponsors. Thank you for supporting the tournament!
          If your organization would like to sponsor ABST, email us
          at <a href="mailto:absciencetournament@gmail.com">absciencetournament@gmail.com</a>.
        </p>

        {sponsorTiers.map(({ tier, sponsors }) => (
          <section key={tier}>
            <h2>{tier}</h2>
            {sponsors.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {sponsors.map((s) => <Sponsor key={s.name} sponsor={s} />)}
              </div>
            ) : (
              <p className="note">Open for sponsorship.</p>
            )}
          </section>
        ))}

        <h2>In-kind</h2>
        <p>
          Thanks to <strong>Jukebox</strong> for our{' '}
          <a href="https://www.jukeboxprint.com/custom-stickers" target="_blank" rel="noopener noreferrer">custom stickers</a>!
        </p>
      </div>
    </>
  );
}
