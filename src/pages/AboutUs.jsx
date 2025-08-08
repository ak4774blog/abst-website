import { useState } from 'react';

// This is the new, self-contained Team Member Card.
// It receives a boolean `isExpanded` to decide what to show.
function TeamMemberCard({ member, isExpanded, onToggle }) {
  return (
    <div
      // The onClick handler is now passed from the parent
      onClick={onToggle}
      // The `h-full` class ensures cards in the same row have the same starting height
      className="flex h-full cursor-pointer flex-col rounded-lg border border-slate-200 bg-slate-50 p-6 text-center shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]"
    >
      <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
      <p className="mb-3 font-semibold text-sky-700">{member.role}</p>
      
      {/* 
        This is the core logic:
        - If `isExpanded` is true, show the long bio.
        - Otherwise, show the short bio.
      */}
      <p className="text-left text-sm text-slate-700">
        {isExpanded ? member.longBio : member.shortBio}
      </p>
    </div>
  );
}


// The main AboutUs page component, now with new structure and logic.
export default function AboutUs() {
  // This state will hold the NAME of the member whose card is currently expanded.
  // It starts as `null`, meaning no cards are expanded.
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (memberName) => {
    // If the clicked card is already the expanded one, collapse it.
    if (expandedCard === memberName) {
      setExpandedCard(null);
    } else {
      // Otherwise, expand the clicked card.
      setExpandedCard(memberName);
    }
  };

  // The full team data, with short and long bios.
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

  // We split the data into two separate arrays based on your request.
  const founders = teamData.filter(member => member.name !== "Helen Xia");
  const volunteers = teamData.filter(member => member.name === "Helen Xia");

  // This is a helper function to avoid repeating the grid code.
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
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">About Our Team</h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          We are a group of students from Acton-Boxborough Regional High School's Science Olympiad Team, passionate about making STEM more accessible and exciting for younger students.
        </p>
      </div>

      {/* Founders Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-800">Founders</h2>
        {renderTeamGrid(founders)}
      </section>

      {/* Volunteers Section */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-800">Volunteers</h2>
        {renderTeamGrid(volunteers)}
      </section>
    </div>
  );
}
