const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeg_cXFT7uI3uRrUoJr9BRtJwnPTAfaZ5Z9lfFc-YdamJa0kw/viewform';

export default function JoinUs() {
  return (
    <>
      <title>Volunteer | ABST</title>
      <meta name="description" content="ABRHS students can volunteer for the Acton-Boxborough Science Tournament, earn community service hours, and help run a science competition for younger students." />

      <div className="wrap content py-8">
        <div className="max-w-[780px]">
          <h1>Volunteer with ABST</h1>
          <p>
            ABST is run entirely by ABRHS students, and we're always happy to have more help.
            You need to be a student at Acton-Boxborough Regional High School to join.
          </p>
          <p>
            <a href={formUrl} target="_blank" rel="noopener noreferrer" className="btn">Volunteer sign-up form</a>
          </p>

          <h2>Why volunteer?</h2>
          <h3>Community service hours</h3>
          <p>You'll get verified community service hours for the time you put in.</p>

          <h3>Learn how an event gets made</h3>
          <p>
            You'll help with planning and logistics for a real competition, and get practice working with
            a big team.
          </p>

          <h3>Help younger students get into science</h3>
          <p>
            You'll get to share what you like about science with elementary and middle schoolers, and help
            them get more confident in it.
          </p>

          <h3>Work with other ABRHS students</h3>
          <p>You'll be working with a group of students who like science as much as you do.</p>

          <p className="mt-10 pt-4 border-t border-[var(--rule)]">
            Questions about volunteering? Email us at{' '}
            <a href="mailto:absciencetournament@gmail.com">absciencetournament@gmail.com</a>.
          </p>
        </div>
      </div>
    </>
  );
}
