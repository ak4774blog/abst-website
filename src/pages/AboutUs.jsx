import { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

// --- DATA ---
const allMembers = {
  // Founders
  aarush: { id: 'aarush', name: 'Aarush Kulkarni', role: 'Head of Technology', shortBio: 'Loves math, chemistry, and physics', longBio: 'Aarush is a student at Acton-Boxborough Regional High School. In his free time, he likes to study math and chemistry. He also enjoys playing frisbee and spikeball with his friends.' },
  tanish: { id: 'tanish', name: 'Tanish Parida', role: 'Head of Problem Writing', shortBio: 'Loves math, CS, astronomy, and donuts', longBio: 'Tanish is a student at Acton-Boxborough Regional High School. In his free time, he likes to do math, CS, and astronomy related things. He also likes eating donuts and playing sports with his friends.' },
  nathan: { id: 'nathan', name: 'Nathan Tan', role: 'Head of Problem Writing', shortBio: 'Loves physics, math, CS, and frisbee', longBio: 'Nathan is a student at Acton-Boxborough Regional High School. In his free time, he likes to explore physics, math, and computer science. He also enjoys playing frisbee, video games, and practicing the piano.' },
  ryan: { id: 'ryan', name: 'Ryan Xia', role: 'Team Coordinator', shortBio: 'Loves earth science and chemistry', longBio: 'Ryan is a student at Acton-Boxborough Regional High School. In his free time, he likes to explore topics in earth science and chemistry. He also enjoys reading and the pursuit of new knowledge.' },
  anirudh: { id: 'anirudh', name: 'Anirudh Pulugurtha', role: 'Head of Communications', shortBio: 'Loves math, robotics, and geology', longBio: 'Anirudh is a student at Acton-Boxborough Regional High School. In his free time, he likes to work on robotics and explore geology. He also enjoys playing basketball and solving math problems.' },
  minho: { id: 'minho', name: 'Minho Shin', role: 'Head of Communications', shortBio: 'Loves astronomy, guitar, and reading', longBio: 'Minho is a student at Acton-Boxborough Regional High School. In his free time, he enjoys exploring science through astronomy and playing the guitar. He also likes to read literature.' },
  yiyi: { id: 'yiyi', name: 'Yiyi Song', role: 'Logistics Director', shortBio: 'Loves biology, baking, violin, and cats', longBio: 'Yiyi is a student at Acton-Boxborough Regional High School. In her free time, she likes to study biology and bake new things. She also really, really loves cats.' },
  aaron: { id: 'aaron', name: 'Aaron Wang', role: 'Logistics Director', shortBio: 'Loves biology, writing, and engineering', longBio: 'Aaron is a student at Acton-Boxborough Regional High School. In his free time, he likes to learn about biology, earth science, and engineering. He also enjoys playing tennis and writing.' },

  // Volunteers
  helen: { id: 'helen', name: 'Helen Xia', role: 'Head of Branding & Design' },
  ethan: { id: 'ethan', name: 'Ethan Li', role: 'Problem Writing Team' },
  lucas: { id: 'lucas', name: 'Lucas Zhang', role: 'Problem Writing Team' },
  warren: { id: 'warren', name: 'Warren Zha', role: 'Problem Writing Team' },
  sarthak: { id: 'sarthak', name: 'Sarthak Jindal', role: 'Problem Writing Team' },
  kevin: { id: 'kevin', name: 'Kevin Gao', role: 'Problem Writing Team' },
  richard: { id: 'richard', name: 'Richard Huang', role: 'Problem Writing Team' },
  jonathan: { id: 'jonathan', name: 'Jonathan Ren', role: 'Problem Writing Team' },
  avanithar: { id: 'avanithar', name: 'Avanithar Ananthkumar', role: 'Problem Writing Team' },
  benjamin: { id: 'benjamin', name: 'Benjamin Li', role: 'Problem Writing Team' },
};

const founders = [
  allMembers.aarush, allMembers.tanish, allMembers.nathan, allMembers.ryan,
  allMembers.anirudh, allMembers.minho, allMembers.yiyi, allMembers.aaron
];

// CHANGE: Removed the undefined placeholder members. The list now contains only the real volunteers.
const volunteers = [
  allMembers.helen, allMembers.ethan, allMembers.lucas, allMembers.warren,
  allMembers.sarthak, allMembers.kevin, allMembers.richard, allMembers.jonathan,
  allMembers.avanithar, allMembers.benjamin,
];

// --- COMPONENTS ---

function ExpandableCard({ member, isExpanded, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="cursor-pointer pb-4 border-b border-[var(--border-color)] hover:opacity-80 transition-opacity"
    >
      <h3 className="text-base font-semibold text-[var(--text-heading)]">{member.name}</h3>
      <p className="text-xs font-medium text-[var(--text-brand)] mb-1">{member.role}</p>
      <p className="text-sm text-[var(--text-body)] leading-relaxed">
        {isExpanded ? member.longBio : member.shortBio}
      </p>
      <p className="mt-2 text-xs text-[var(--text-muted)]">{isExpanded ? 'Click to collapse' : 'Click to read more'}</p>
    </div>
  );
}

function VolunteerCard({ member }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[var(--text-heading)]">{member.name}</h3>
      <p className="text-xs text-[var(--text-caption)] mt-0.5">{member.role}</p>
    </div>
  );
}

export default function AboutUs() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (uniqueCardId) => {
    setExpandedCard(expandedCard === uniqueCardId ? null : uniqueCardId);
  };

  return (
    <AnimatedPage>
      <title>Our Team | ABST</title>
      <meta name="description" content="Meet the founders and volunteers of the Acton-Boxborough Science Tournament. Our team is composed of passionate students from ABRHS." />

      {/* Page header band */}
      <div>
        <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-10 pb-6">
          <h1 className="font-serif heading-bold text-4xl font-bold text-[var(--text-heading)]">About Our Team</h1>
          <p className="mt-2 text-base text-[var(--text-caption)]">
            ABST is organized entirely by students at Acton-Boxborough Regional High School, all members of the ABRHS Science Olympiad Team.
          </p>
        </div>
      </div>

      {/* Founders / Board of Directors */}
      <div>
        <div className="mx-auto max-w-5xl px-6 sm:px-8 py-6">
          <h2 className="mb-5 text-lg font-semibold text-[var(--text-heading)]">Board of Directors</h2>
          <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {founders.map((member) => {
              const uniqueCardId = `founder-${member.id}`;
              return (
                <ExpandableCard
                  key={uniqueCardId}
                  member={member}
                  isExpanded={expandedCard === uniqueCardId}
                  onToggle={() => handleCardClick(uniqueCardId)}
                />
              );
            })}
          </div>
        </div>
      </div>
        
      {/* Volunteers */}
      <div>
        <div className="mx-auto max-w-5xl px-6 sm:px-8 py-8 border-t border-[var(--border-color)]">
          <h2 className="mb-5 text-lg font-semibold text-[var(--text-heading)]">Volunteers</h2>
          <div className="grid grid-cols-2 items-start gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {volunteers.map((member) => (
              <VolunteerCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
