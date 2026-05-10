import AnimatedPage from '../components/AnimatedPage';

// --- DATA ---
// We've reorganized the sponsors into their correct tier arrays.

const platinumSponsors = [
  { 
    name: 'Overleaf', 
    href: 'https://www.overleaf.com/',
    logoSrc: '/overleaf-logo.jpg',
    description: 'The easy-to-use, online, collaborative LaTeX editor.'
  },
  { 
    name: 'RSM (Russian School of Mathematics)', 
    href: 'https://www.mathschool.com/',
    logoSrc: '/rsm-logo.png',
    description: 'Award-winning after-school math enrichment program.'
  }
];

const goldSponsors = [
  { 
    name: 'Jane Street', 
    href: 'https://www.janestreet.com/',
    logoSrc: '/jane-street-logo.png',
    description: 'A quantitative trading firm focused on technology and collaborative problem solving.'
  },
  { 
    name: 'Wolfram', 
    href: 'https://www.wolfram.com/',
    logoSrc: '/wolfram-logo.png',
    description: 'Creators of Mathematica, Wolfram|Alpha, and the Wolfram Language.'
  }
];

const silverSponsors = [
  { 
    name: 'Areteem', 
    href: 'https://areteem.org/',
    logoSrc: '/areteem-logo.png',
    description: 'Educational institution developing future leaders in STEM fields.'
  },
  { 
    name: 'Mehta+', 
    href: 'https://mehtaplus.com/',
    logoSrc: '/mehtaplus-logo.png',
    description: 'Providing comprehensive STEM educational programs and resources.'
  }
];

const bronzeSponsors = [
  { 
    name: 'Hack Club', 
    href: 'https://hackclub.com/',
    logoSrc: '/hack-club-logo.png',
    description: 'Our 501(c)(3) fiscal sponsor, helping us operate as a non-profit.'
  }
];

// --- COMPONENTS ---

// This component remains the same.
function SponsorCard({ sponsor }) {
  return (
    <a 
      href={sponsor.href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block border border-[var(--border-color)] rounded p-5 h-full hover:border-[var(--text-muted)] transition-colors"
    >
      <div className="relative h-16 mb-3 flex items-center justify-start">
        <img
          src={sponsor.logoSrc}
          alt={`${sponsor.name} logo`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <h3 className="text-base font-semibold text-[var(--text-heading)] mb-1">{sponsor.name}</h3>
      <p className="text-sm text-[var(--text-body)]">{sponsor.description}</p>
    </a>
  );
}

function TierSection({ title, sponsors }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-[var(--text-heading)] mb-4 border-b border-[var(--border-color)] pb-2">
        {title}
      </h2>
      {sponsors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map(sponsor => <SponsorCard key={sponsor.name} sponsor={sponsor} />)}
        </div>
      ) : (
        <p className="text-sm text-[var(--text-muted)] italic">Sponsorship opportunities available.</p>
      )}
    </section>
  );
}

// The main Sponsors page component with updated order.
export default function Sponsors() {
  return (
    <AnimatedPage>
      {/* Page header band */}
      <div>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-10 pb-6">
          <h1 className="font-serif heading-bold text-4xl font-bold text-[var(--text-heading)]">
            Our Sponsors
          </h1>
          <p className="mt-2 text-base text-[var(--text-caption)]">
            We are incredibly grateful for the support of our sponsors, whose contributions make this event possible.
          </p>
        </div>
      </div>

      <div>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 pb-12">
          <p className="text-sm text-[var(--text-body)] mb-10">
            Interested in sponsoring ABST? Email us at{' '}
            <a href="mailto:absciencetournament@gmail.com" className="text-[var(--text-brand)] font-medium hover:underline">
              absciencetournament@gmail.com
            </a>.
          </p>

          <div className="space-y-12">
            <TierSection 
              title="Platinum Sponsors"
              sponsors={platinumSponsors}
            />
            <TierSection 
              title="Gold Sponsors"
              sponsors={goldSponsors}
            />
            <TierSection 
              title="Silver Sponsors"
              sponsors={silverSponsors}
            />
            <TierSection 
              title="Bronze Sponsors"
              sponsors={bronzeSponsors}
            />
          </div>

          <div className="mt-16 pt-10 border-t border-[var(--border-color)]">
            <h2 className="text-lg font-semibold text-[var(--text-heading)] mb-4">
              In-Kind Sponsors
            </h2>
            <div className="max-w-md">
              <h3 className="text-base font-semibold text-[var(--text-heading)]">Jukebox</h3>
              <p className="mt-1 text-sm text-[var(--text-body)]">
                Big shoutout to Jukebox for our{' '}
                <a 
                  href="https://www.jukeboxprint.com/custom-stickers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-brand)] underline hover:opacity-80"
                >
                  custom stickers
                </a>!
              </p>
            </div>
          </div>
        
        </div>
      </div>
    </AnimatedPage>
  );
}
