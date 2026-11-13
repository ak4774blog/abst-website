// Sponsor list, used on the Sponsors page and the home page.
// For a sponsor without a website, leave href as null. Same for logoSrc.

export const sponsorTiers = [
  {
    tier: 'Platinum',
    sponsors: [
      {
        name: 'Overleaf',
        href: 'https://www.overleaf.com/',
        logoSrc: '/overleaf-logo.jpg',
        description: 'The easy-to-use, online, collaborative LaTeX editor.',
      },
      {
        name: 'RSM (Russian School of Mathematics)',
        shortName: 'RSM',
        href: 'https://www.mathschool.com/',
        logoSrc: '/rsm-logo.png',
        description: 'Award-winning after-school math enrichment program.',
      },
    ],
  },
  {
    tier: 'Gold',
    sponsors: [
      {
        name: 'Jane Street',
        href: 'https://www.janestreet.com/',
        logoSrc: '/jane-street-logo.png',
        description: 'A quantitative trading firm focused on technology and collaborative problem solving.',
      },
      {
        name: 'Wolfram',
        href: 'https://www.wolfram.com/',
        logoSrc: '/wolfram-logo.png',
        description: 'Creators of Mathematica, Wolfram|Alpha, and the Wolfram Language.',
      },
    ],
  },
  {
    tier: 'Silver',
    sponsors: [
      {
        name: 'Areteem',
        href: 'https://areteem.org/',
        logoSrc: '/areteem-logo.png',
        description: 'Educational institution developing future leaders in STEM fields.',
      },
      {
        name: 'Mehta+',
        href: 'https://mehtaplus.com/',
        logoSrc: '/mehtaplus-logo.png',
        description: 'Providing comprehensive STEM educational programs and resources.',
      },
    ],
  },
  {
    tier: 'Bronze',
    sponsors: [
      {
        name: 'Hack Club',
        href: 'https://hackclub.com/',
        logoSrc: '/hack-club-logo.png',
        description: 'Our 501(c)(3) fiscal sponsor, helping us operate as a non-profit.',
      },
      {
        name: 'Fun Learning Place',
        href: null, // TODO: add website
        logoSrc: null,
        description: 'Supporting STEM education and empowering students.',
      },
    ],
  },
];
