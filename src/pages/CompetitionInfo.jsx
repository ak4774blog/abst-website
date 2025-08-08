function InfoSection({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-2">{title}</h2>
      <div className="text-lg text-slate-300 space-y-4">
        {children}
      </div>
    </section>
  );
}

export default function CompetitionInfo() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white text-center mb-12">
        Competition Information
      </h1>
      <div className="space-y-12">
        <InfoSection title="Date & Location">
          <p>The competition will take place in <strong className="text-slate-100">April 2026</strong> (final date TBD) at <strong className="text-slate-100">RJ Grey Junior High School</strong> (16 Charter Road, Acton, MA).</p>
        </InfoSection>

        <InfoSection title="Tentative Format">
          <p>There will be 6 individual rounds: Math, Computer Science, Physics, Earth & Space Science, Biology, and Chemistry. Each competitor chooses 2 rounds to participate in.</p>
          <p>Additionally, there will be a team round and a "Guts" round, both featuring questions from all fields of science and completed as a team.</p>
        </InfoSection>

        <InfoSection title="Tentative Schedule">
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-slate-100">Individual Block 1:</strong> 8:30 - 9:15</li>
            <li><strong className="text-slate-100">Individual Block 2:</strong> 9:30 - 10:15</li>
            <li><strong className="text-slate-100">Team Round:</strong> 10:30 - 11:30</li>
            <li><strong className="text-slate-100">Lunch:</strong> 11:45 - 12:45</li>
            <li><strong className="text-slate-100">Guts Round:</strong> 1:00 - 2:00</li>
            <li><strong className="text-slate-100">Awards Ceremony:</strong> 2:30 - 3:15</li>
          </ul>
        </InfoSection>

        <InfoSection title="Tentative Scoring">
          <p>Awards will be given for top individuals in each event, top overall individuals, and top teams in the Team and Guts rounds. A Sweepstakes award will be given to the top overall teams based on a weighted combination of all event scores.</p>
          <p className="text-sm text-slate-400 mt-4">*A "Scaled Score" will be used to normalize scores across different events. It is calculated as: (your score / highest score) * 50.</p>
        </InfoSection>
      </div>
    </div>
  );
}
