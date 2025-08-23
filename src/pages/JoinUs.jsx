import AnimatedPage from '../components/AnimatedPage';

function PerkCard({ title, description }) {
  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 h-full">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

export default function JoinUs() {
  return (
    <AnimatedPage>
      <title>Join Us | ABST</title>
      <meta name="description" content="Volunteer for the Acton-Boxborough Science Tournament. ABRHS students can earn volunteer hours, develop leadership skills, and inspire younger students." />
      
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Join Our Team
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
            Become a part of the team that brings the Acton-Boxborough Science Tournament to life.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            {/* The "Sign Up" box now contains the images and caption */}
            <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
              
              {/* ===== IMAGE GALLERY MOVED INSIDE HERE ===== */}
              <div className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  <div className="md:col-span-2 overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="/teamimage2.jpg" 
                      alt="ABST team posing for a group photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-center mt-4 text-sm text-slate-500 italic">
                  Photo from our first meeting!
                </p>
              </div>
              {/* ======================================= */}
              
              <div className="text-center">
                <p className="mb-6 text-lg text-slate-300">
                  Click the link below to fill out our volunteer sign-up form. We can't wait to have you on the team! Note that you must be a student from Acton-Boxborough Regional High School.
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeg_cXFT7uI3uRrUoJr9BRtJwnPTAfaZ5Z9lfFc-YdamJa0kw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-sky-400 transition-colors"
                >
                  Sign Up Now
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Why Volunteer with ABST?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PerkCard
                title="Earn Volunteer Hours"
                description="You will get plenty of official community service hours for your contribution, which may be useful for your resume / college application."
              />
              <PerkCard
                title="Learn About Organizing Events"
                description="You will learn about handling logistics for a competition, how to communicate as part of a large team, and organize an event from the ground up."
              />
              <PerkCard
                title="Inspire The Youth"
                description="You can show your passion for science and inspire younger students by helping to organize a competetive to help them grow more."
              />
              <PerkCard
                title="Connect With Talented Peers"
                description="You will work alongside other like-minded and driven high school students, which can form friendships and valuable connections, especially since we are from the same school!"
              />
            </div>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
}
