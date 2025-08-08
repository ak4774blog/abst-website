import { useState } from 'react';

function TeamMemberCard({ member, isExpanded, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="flex h-full cursor-pointer flex-col rounded-lg border border-slate-700 bg-slate-800 p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:shadow-cyan-500/10 hover:scale-[1.02]"
    >
      <h3 className="text-xl font-bold text-white">{member.name}</h3>
      <p className="mb-3 font-semibold text-sky-400">{member.role}</p>
      <p className="text-left text-sm text-slate-400">
        {isExpanded ? member.longBio : member.shortBio}
      </p>
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

  const teamData = [
    { name: "Aarush Kulkarni", role: "Tech Specialist", shortBio: "Enjoys math, chemistry, frisbee, and spikeball.", longBio: "Aarush is a student at Acton-Boxborough Regional High School. For fun, he likes going outside and playing frisbee, or spikeball inside. Additionally, he enjoys studying math and chemistry in his free time." },
    { name: "Tanish Parida", role: "Head of Problem Writing", shortBio: "Loves math, CS, astronomy, donuts, and sports.", longBio: "Tanish is a student at Acton-Boxborough Regional High School. In his free time, he likes to do math/cs/astronomy things. He also like eating donuts and playing/watching sports with his friends." },
    { name: "Anirudh Pulugurtha", role: "Communications Manager", shortBio: "Passionate about math, robotics, basketball, and geology.", longBio: "Anirudh Pulugurtha is a student at Acton-Boxborough Regional High School. Outside of science, he enjoys math, robotics, and basketball. Within science, he enjoys geology, and also likes testing his thinking with different inquiry topics. Anirudh felt left out of Science as a middle schooler, and he hopes to change this for as many people as possible through ABST." },
    { name: "Minho Shin", role: "Communications Manager", shortBio: "A student at Acton-Boxborough Regional High School.", longBio: "Minho Shin is a student at Acton-Boxborough Regional High School." },
    { name: "Yiyi Song", role: "Logistics Director", shortBio: "The resident biology main who also loves baking and cats.", longBio: "Yiyi Song is a student from Acton-Boxborough Regional High School. Within science, she is the resident bio main, and apart from that she likes baking, sleeping, cats, cats, and cats." },
    { name: "Nathan Tan", role: "Head of Problem Writing", shortBio: "Enjoys physics, math, CS, frisbee, video games, and piano.", longBio: "Nathan Tan is a student from Acton-Boxborough Regional High School. He enjoys physics and math, as well as computer science. In his free time, he also enjoys playing frisbee, video games, and also practicing the piano." },
    { name: "Aaron Wang", role: "Logistics Director", shortBio: "Loves biology, earth science, engineering, tennis, and writing.", longBio: "Aaron Wang is a student from Acton-Boxborough Regional High School. He enjoys biology, earth science, as well as engineering. Aside from science, he enjoys tennis and writing. Aaron felt the lack of engaging science competitions, and he hopes ABST brings just that to the community." },
    { name: "Ryan Xia", role: "Team Coordinator", shortBio: "An earth science and chemistry enthusiast who believes in building confidence.", longBio: "Ryan Xia is a student from Acton-Boxborough Regional High School who enjoys earth science and chemistry. His free time is forever spent in the pursuit of knowledge and imagination, and he hopes young minds will seek to do the same. Ryan strongly believes that building confidence and trust is the key to learning, and co-founded ABST in order to create a better environment for nurturing essential skills and understanding new concepts." },
    { name: "Helen Xia", role: "Branding & Design", shortBio: "Contributes her expertise to the team's branding and design efforts.", longBio: "Helen Xia contributes her expertise to the team's branding and design efforts." }
  ];

  const founders = teamData.filter(member => member.name !== "Helen Xia");
  const volunteers = teamData.filter(member => member.name === "Helen Xia");

  const renderTeamGrid = (teamMembers) => (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {teamMembers.map((member) => (
        <TeamMemberCard
          key={member.name}
          member={member}
          isExpanded={expandedCard === member.name}
          onToggle={() => handleCardClick(member.name)}
        />
      ))}
    </div>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">About Our Team</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-400">
          Our founders are all members of the ABRHS Science Olympiad Team.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-200">Founders</h2>
        {renderTeamGrid(founders)}
      </section>

      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-200">Volunteers</h2>
        {renderTeamGrid(volunteers)}
      </section>
    </div>
  );
}
