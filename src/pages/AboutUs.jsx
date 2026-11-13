// Board members are shown with their long bios. Volunteers are grouped by role,
// in the order they appear in the list below.
const allMembers = {
  // Founders
  aarush: { id: 'aarush', name: 'Aarush Kulkarni', shortBio: 'Loves math, chemistry, and physics', longBio: 'Aarush is a student at Acton-Boxborough Regional High School. In his free time, he likes to study math and chemistry. He also enjoys playing frisbee and spikeball with his friends.' },
  tanish: { id: 'tanish', name: 'Tanish Parida', shortBio: 'Loves math, CS, astronomy, and donuts', longBio: 'Tanish is a student at Acton-Boxborough Regional High School. In his free time, he likes to do math, CS, and astronomy related things. He also likes eating donuts and playing sports with his friends.' },
  nathan: { id: 'nathan', name: 'Nathan Tan', shortBio: 'Loves physics, math, CS, and frisbee', longBio: 'Nathan is a student at Acton-Boxborough Regional High School. In his free time, he likes to explore physics, math, and computer science. He also enjoys playing frisbee, video games, and practicing the piano.' },
  ryan: { id: 'ryan', name: 'Ryan Xia', shortBio: 'Loves earth science and chemistry', longBio: 'Ryan is a student at Acton-Boxborough Regional High School. In his free time, he likes to explore topics in earth science and chemistry. He also enjoys reading and the pursuit of new knowledge.' },
  anirudh: { id: 'anirudh', name: 'Anirudh Pulugurtha', shortBio: 'Loves math, robotics, and geology', longBio: 'Anirudh is a student at Acton-Boxborough Regional High School. In his free time, he likes to work on robotics and explore geology. He also enjoys playing basketball and solving math problems.' },
  minho: { id: 'minho', name: 'Minho Shin', shortBio: 'Loves astronomy, guitar, and reading', longBio: 'Minho is a student at Acton-Boxborough Regional High School. In his free time, he enjoys exploring science through astronomy and playing the guitar. He also likes to read literature.' },
  yiyi: { id: 'yiyi', name: 'Yiyi Song', shortBio: 'Loves biology, baking, violin, and cats', longBio: 'Yiyi is a student at Acton-Boxborough Regional High School. In her free time, she likes to study biology and bake new things. She also really, really loves cats.' },
  aaron: { id: 'aaron', name: 'Aaron Wang', shortBio: 'Loves biology, writing, and engineering', longBio: 'Aaron is a student at Acton-Boxborough Regional High School. In his free time, he likes to learn about biology, earth science, and engineering. He also enjoys playing tennis and writing.' },

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
  andrew: { id: 'andrew', name: 'Andrew Geng', role: 'Problem Writing Team' },
  cindy: { id: 'cindy', name: 'Cindy Xu', role: 'Problem Writing Team' },
  eric: { id: 'eric', name: 'Eric S Chen', role: 'Problem Writing Team' },
  ryanz: { id: 'ryanz', name: 'Ryan Zhang', role: 'Problem Writing Team' },
  tommy: { id: 'tommy', name: 'Tommy Liu', role: 'Problem Writing Team' },
};

const founders = [
  allMembers.ryan, allMembers.yiyi, allMembers.nathan, allMembers.minho,
  allMembers.aarush, allMembers.aaron, allMembers.tanish, allMembers.anirudh
];

const volunteers = [
  allMembers.helen, allMembers.ethan, allMembers.lucas, allMembers.warren,
  allMembers.sarthak, allMembers.kevin, allMembers.richard, allMembers.jonathan,
  allMembers.avanithar, allMembers.benjamin, allMembers.andrew, allMembers.cindy,
  allMembers.eric, allMembers.ryanz, allMembers.tommy
];

function groupByRole(members) {
  const groups = [];
  for (const m of members) {
    let g = groups.find((x) => x.role === m.role);
    if (!g) groups.push((g = { role: m.role, names: [] }));
    g.names.push(m.name);
  }
  return groups;
}

export default function AboutUs() {
  return (
    <>
      <title>Our Team | ABST</title>
      <meta name="description" content="The students who run the Acton-Boxborough Science Tournament. ABST is organized entirely by students at Acton-Boxborough Regional High School." />

      <div className="wrap content py-8">
        <h1>Our Team</h1>
        <p className="max-w-[780px]">
          ABST is organized entirely by students at Acton-Boxborough Regional High School. All of us are
          on the ABRHS Science Olympiad team.
        </p>

        <h2>Board of Directors</h2>
        <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
          {founders.map((m) => (
            <div key={m.id}>
              <h3 className="!mt-0 !mb-1">{m.name}</h3>
              <p className="!mb-0 text-[0.975rem]">{m.longBio}</p>
            </div>
          ))}
        </div>

        <h2>Volunteers &amp; PR Team</h2>
        {groupByRole(volunteers).map((g) => (
          <div key={g.role}>
            <h3>{g.role}</h3>
            <p className="max-w-[780px]">{g.names.join(', ')}</p>
          </div>
        ))}
      </div>
    </>
  );
}
