import { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

// --- DATA ---
const allMembers = {
  aarush: { id: 'aarush', name: 'Aarush Kulkarni', role: 'Head of Technology', shortBio: 'Loves math, chemistry, frisbee, and spikeball.', longBio: 'Aarush is a student at Acton-Boxborough Regional High School. In his free time, he likes to study math and chemistry. He also enjoys playing frisbee and spikeball with his friends.' },
  tanish: { id: 'tanish', name: 'Tanish Parida', role: 'Head of Problem Writing', shortBio: 'Loves math, CS, astronomy, and donuts.', longBio: 'Tanish is a student at Acton-Boxborough Regional High School. In his free time, he likes to do math, CS, and astronomy related things. He also likes eating donuts and playing sports with his friends.' },
  nathan: { id: 'nathan', name: 'Nathan Tan', role: 'Head of Problem Writing', shortBio: 'Loves physics, math, CS, and frisbee.', longBio: 'Nathan is a student at Acton-Boxborough Regional High School. In his free time, he likes to explore physics, math, and computer science. He also enjoys playing frisbee, video games, and practicing the piano.' },
  ryan: { id: 'ryan', name: 'Ryan Xia', role: 'Head of Coordination', shortBio: 'Loves earth science, chemistry, and reading.', longBio: 'Ryan is a student at Acton-Boxborough Regional High School. In his free time, he likes to explore topics in earth science and chemistry. He also enjoys reading and the pursuit of new knowledge.' },
  anirudh: { id: 'anirudh', name: 'Anirudh Pulugurtha', role: 'Head of Communications', shortBio: 'Loves math, robotics, basketball, and geology.', longBio: 'Anirudh is a student at Acton-Boxborough Regional High School. In his free time, he likes to work on robotics and explore geology. He also enjoys playing basketball and solving math problems.' },
  minho: { id: 'minho', name: 'Minho Shin', role: 'Head of Communications', shortBio: 'Loves astronomy, Minecraft, and reading.', longBio: 'Minho is a student at Acton-Boxborough Regional High School. In his free time, he enjoys exploring through astronomy and building in Minecraft. He also likes to read; especially manhua and manga.' },
  yiyi: { id: 'yiyi', name: 'Yiyi Song', role: 'Head of Logistics', shortBio: 'Loves biology, baking, Kakegurui, and cats.', longBio: 'Yiyi is a student at Acton-Boxborough Regional High School. In her free time, she likes to study biology and bake new things. She also really, really loves cats.' },
  aaron: { id: 'aaron', name: 'Aaron Wang', role: 'Head of Logistics', shortBio: 'Loves biology, building, tennis, and writing.', longBio: 'Aaron is a student at Acton-Boxborough Regional High School. In his free time, he likes to learn about biology, earth science, and engineering. He also enjoys playing tennis and writing.' },
  helen: { id: 'helen', name: 'Helen Xia', role: 'Head of Branding & Design', shortBio: 'Loves graphic design, and creating visuals.', longBio: 'Helen is a student at Acton-Boxborough Regional High School. In her free time, she likes to practice her art and work on graphic design projects. She also enjoys creating strong branding and visuals for the team.' },
  ethan: { id: 'ethan', name: 'Ethan Li', role: 'Problem Writing Team' },
  lucas: { id: 'lucas', name: 'Lucas Zhang', role: 'Problem Writing Team' },
  warren: { id: 'warren', name: 'Warren Zha', role: 'Problem Writing Team' },
  sarthak: { id: 'sarthak', name: 'Sarthak Jindal', role: 'Problem Writing Team' },
  kevin: { id: 'kevin', name: 'Kevin Gao', role: 'Problem Writing Team' },
};

const founders = [
  allMembers.aarush, allMembers.tanish, allMembers.nathan, allMembers.ryan,
  allMembers.anirudh, allMembers.minho, allMembers.yiyi, allMembers.aaron
];

const teams = [
  { title: "Technology", heads: [allMembers.aarush], members: [] },
  { title: "Problem Writing", heads: [allMembers.tanish, allMembers.nathan], members: [allMembers.ethan, allMembers.lucas, allMembers.warren, allMembers.sarthak, allMembers.kevin] },
  { title: "Coordination", heads: [allMembers.ryan], members: [] },
  { title: "Communications", heads: [allMembers.anirudh, allMembers.minho], members: [] },
  { title: "Logistics", heads: [allMembers.yiyi, allMembers.aaron], members: [] },
  { title: "Branding & Design", heads: [allMembers.helen], members: [] }
];

// --- COMPONENTS ---

function ExpandableCard({ member, isExpanded, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="flex min-h-[120px] cursor-pointer flex-col rounded-lg border border-slate-700 bg-slate-800 p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-cyan-500/10"
    >
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="mb-3 font-semibold text-sky-400">{member.role}</p>
      <p className={`text-sm text-slate-400 transition-all duration-300 ${isExpanded ? 'text-left' : 'text-center'}`}>
        {isExpanded ? member.longBio : member.shortBio}
      </p>
    </div>
  );
}

function MemberCard({ member }) {
  return (
    <div className="flex h-full min-h-[120px] flex-col justify-center rounded-lg border border-slate-800 bg-slate-900 p-6 text-center shadow-lg">
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="font-semibold text-sky-400">{member.role}</p>
    </div>
  );
}

function TeamSection({ team, expandedCard, onToggle }) {
  return (
    <section className="mb-10">
      <h2 className="mb-8 text-center text-2xl font-bold text-slate-200">{team.title}</h2>
      
      {/* CHANGE: Converted the heads container to use Flexbox for proper centering */}
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
        {team.heads.map((head) => {
          const uniqueCardId = `${team.title}-${head.id}`;
          return (
            // No more conditional classes needed, flexbox handles both 1 and 2 items.
            <div key={uniqueCardId} className="w-full max-w-md"> 
              <ExpandableCard
                member={head}
                isExpanded={expandedCard === uniqueCardId}
                onToggle={() => onToggle(uniqueCardId)}
              />
            </div>
          );
        })}
      </div>

      {team.members.length > 0 && (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {team.members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </section>
  );
}

export default function AboutUs() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (uniqueCardId) => {
    setExpandedCard(expandedCard === uniqueCardId ? null : uniqueCardId);
  };

  return (
    <AnimatedPage>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">About Our Team</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
            Our founders are all members of the ABRHS Science Olympiad Team. Many have also placed highly in STEM olympiads and have gone on to qualify for the USAJMO, USAPhO, etc.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-200">Founders</h2>
          <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((member) => {
              const uniqueCardId = `founder-${member.id}`;
              return (
                <ExpandableCard
                  key={uniqueCardId}
                  member={member}
                  isExpanded={expandedCard === uniqueCardId}
                  onToggle={() => handleCardClick(uniqueCardId)}
                />
              )
            })}
          </div>
        </section>
        
        {teams.map((team) => (
          <TeamSection 
            key={team.title}
            team={team}
            expandedCard={expandedCard}
            onToggle={handleCardClick}
          />
        ))}
      </div>
    </AnimatedPage>
  );
}
