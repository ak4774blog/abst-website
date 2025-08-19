import AnimatedPage from '../components/AnimatedPage';

// --- DATA ---
const bronzeSponsors = [
  { 
    name: 'Hack Club', 
    href: 'https://hackclub.com/',
    logoSrc: '/hack-club-logo.png',
    description: 'Our 501(c)(3) fiscal sponsor, helping us operate as a non-profit.'
  },
  { 
    name: 'Jane Street', 
    href: 'https://www.janestreet.com/',
    logoSrc: '/jane-street-logo.png',
    description: 'A quantitative trading firm focused on technology and collaborative problem solving.'
  },
  { 
    name: 'Overleaf', 
    href: 'https://www.overleaf.com/',
    logoSrc: '/overleaf-logo.jpg',
    description: 'The easy-to-use, online, collaborative LaTeX editor.'
  }
];

// --- COMPONENTS ---

function SponsorCard({ sponsor }) {
  return (
    <a 
      href={sponsor.href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-slate-800 p-6 rounded-lg border border-slate-700 h-full transition-all duration-300 hover:border-sky-500 hover:scale-105"
    >
      <div className="relative h-20 mb-4 flex items-center justify-center bg-white rounded-md p-2">
        <img
          src={sponsor.logoSrc}
          alt={`${sponsor.name} logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{sponsor.name}</h3>
      <p className="text-slate-400">{sponsor.description}</p>
    </a>
  );
}

function TierSection({ title, colorClass, sponsors }) {
  return (
    <section>
      <h2 className={`text-3xl font-bold text-center mb-8 ${colorClass}`}>
        {title}
      </h2>
      {sponsors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor} />)}
        </div>
      ) : (
        <div className="text-center text-slate-500 border border-dashed border-slate-700 rounded-lg py-12">
          <p>Sponsorship opportunities available!</p>
        </div>
      )}
    </section>
  );
}

// The main Sponsors page component.
export default function Sponsors() {
  return (
    <AnimatedPage>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Sponsors
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
            We are incredibly grateful for the support of our sponsors, whose contributions make this event possible.
          </p>
          <p className="mt-6 text-sky-300">
            Interested in sponsoring ABST? Please email us at{' '}
            <a href="mailto:absciencetournament@gmail.com" className="font-bold underline hover:text-sky-200">
              absciencetournament@gmail.com
            </a>!
          </p>
        </div>

        <div className="space-y-16">
          <TierSection 
            title="Bronze"
            colorClass="text-orange-400"
            sponsors={bronzeSponsors}
          />
          <TierSection 
            title="Silver"
            colorClass="text-slate-400"
            sponsors={[]}
          />
          <TierSection 
            title="Gold"
            colorClass="text-amber-400"
            sponsors={[]}
          />
          <TierSection 
            title="Platinum"
            colorClass="text-blue-300" 
            sponsors={[]} 
          />
        </div>

        {/* ===== JUKEBOX SECTION ADDED HERE ===== */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            In-Kind (Service) Sponsors
          </h2>
          <div className="max-w-2xl mx-auto text-center bg-slate-800 p-8 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-bold text-white">Jukebox</h3>
            <p className="mt-4 text-lg text-slate-300">
              Big shoutout to Jukebox for our{' '}
              <a 
                href="https://www.jukeboxprint.com/custom-stickers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300"
              >
                custom stickers
              </a>!
            </p>
          </div>
        </div>
        {/* ===================================== */}
        
      </div>
    </AnimatedPage>
  );
}
