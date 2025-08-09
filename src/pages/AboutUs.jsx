import { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

// Card for Founders with expandable bio
function TeamMemberCard({ member, isExpanded, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="flex cursor-pointer flex-col rounded-lg border border-slate-700 bg-slate-800 p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-cyan-500/10"
    >
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="mb-3 font-semibold text-sky-400">{member.role}</p>
      {/* CHANGE: The className is now dynamic. It's 'text-center' for shortBio and 'text-left' for longBio. */}
      <p 
        className={`min-h-[20px] text-sm text-slate-400 ${isExpanded ? 'text-left' : 'text-center'}`}
      >
        {isExpanded ? member.longBio : member.shortBio}
      </p>
    </div>
  );
}

// Card for Volunteers (no bio)
function VolunteerCard({ member }) {
  return (
    <div
      className="flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-6 text-center shadow-lg"
    >
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="font-semibold text-sky-400">{member.role}</p>
    </div>
  );
}


export default function AboutUs() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (memberName) => {
    if (expandedCard === memberName) {
      setExpandedCard(null);
    } else {
      setExpandedCard(memberName);
    }
  };

  const foundersData = [
  { 
        "name": "Aarush Kulkarni", 
        "role": "Head of Technology", 
        "shortBio": "Loves math, chemistry, frisbee, and spikeball.", 
        "longBio": "Aarush is a student at Acton-Boxborough Regional High School. In his free time, he likes to study math and chemistry. He also enjoys playing frisbee and spikeball with his friends." 
    },
    { 
        "name": "Tanish Parida", 
        "role": "Head of Problem Writing", 
        "shortBio": "Loves math, CS, astronomy, and donuts.", 
        "longBio": "Tanish is a student at Acton-Boxborough Regional High School. In his free time, he likes to do math, CS, and astronomy related things. He also likes eating donuts and playing sports with his friends." 
    },
    { 
        "name": "Nathan Tan", 
        "role": "Head of Problem Writing", 
        "shortBio": "Loves physics, math, CS, and frisbee.", 
        "longBio": "Nathan is a student at Acton-Boxborough Regional High School. In his free time, he likes to explore physics, math, and computer science. He also enjoys playing frisbee, video games, and practicing the piano." 
    },
    { 
        "name": "Ryan Xia", 
        "role": "Head of Coordination", 
        "shortBio": "Loves earth science, chemistry, and reading.", 
        "longBio": "Ryan is a student at Acton-Boxborough Regional High School. In his free time, he likes to explore topics in earth science and chemistry. He also enjoys reading and the pursuit of new knowledge." 
    },
    { 
        "name": "Anirudh Pulugurtha", 
        "role": "Head of Communications", 
        "shortBio": "Loves math, robotics, basketball, and geology.", 
        "longBio": "Anirudh is a student at Acton-Boxborough Regional High School. In his free time, he likes to work on robotics and explore geology. He also enjoys playing basketball and solving math problems." 
    },
    { 
        "name": "Minho Shin", 
        "role": "Head of Communications", 
        "shortBio": "Loves astronomy, Minecraft, and reading.", 
        "longBio": "Minho is a student at Acton-Boxborough Regional High School. In his free time, he enjoys exploring through astronomy and building in Minecraft. He also likes to read; especially manhua and manga." 
    },
    { 
        "name": "Yiyi Song", 
        "role": "Head of Logistics", 
        "shortBio": "Loves biology, baking, and cats.", 
        "longBio": "Yiyi is a student at Acton-Boxborough Regional High School. In her free time, she likes to study biology and bake new things. She also really, really loves cats." 
    },
    { 
        "name": "Aaron Wang", 
        "role": "Head of Logistics", 
        "shortBio": "Loves biology, building, tennis, and writing.", 
        "longBio": "Aaron is a student at Acton-Boxborough Regional High School. In his free time, he likes to learn about biology, earth science, and engineering. He also enjoys playing tennis and writing." 
    },
    { 
        "name": "Helen Xia", 
        "role": "Head of Branding & Design", 
        "shortBio": "Loves graphic design, and creating visuals.", 
        "longBio": "Helen is a student at Acton-Boxborough Regional High School. In her free time, she likes to practice her art and work on graphic design projects. She also enjoys creating strong branding and visuals for the team." 
    }
  ];
  
  const volunteersData = [
    { name: "Ethan Li", role: "Problem Writing Team" },
    { name: "Lucas Zhang", role: "Problem Writing Team" },
    { name: "Warren Zha", role: "Problem Writing Team" },
    { name: "Sarthak Jindal", role: "Problem Writing Team" }
  ];
  
  return (
  <AnimatedPage>
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">About Our Team</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
          Our founders are all members of the ABRHS Science Olympiad Team. Many have also placed highly in STEM olympiads and have gone on to qualify for the USAJMO, USAPhO, etc.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-200">Founders</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 items-start">
            {foundersData.map((member) => (
                <TeamMemberCard
                key={member.name}
                member={member}
                isExpanded={expandedCard === member.name}
                onToggle={() => handleCardClick(member.name)}
                />
            ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-200">Volunteers</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {volunteersData.map((member) => (
                <VolunteerCard key={member.name} member={member} />
            ))}
        </div>
      </section>
    </div>
    </AnimatedPage>
  );
}
