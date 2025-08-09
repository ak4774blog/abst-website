import { useState } from 'react';
import { useFloating, useHover, useInteractions, offset, flip, shift } from '@floating-ui/react';
import AnimatedPage from '../components/AnimatedPage';

// This PerkCard component includes the tooltip logic.
function PerkCard({ title, description, icon, tooltipText }) {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'top',
    middleware: [offset(10), flip(), shift()],
  });

  const hover = useHover(context, { delay: { open: 100 } });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 h-full">
      <div 
        ref={refs.setReference}
        {...getReferenceProps()}
        className="flex items-center justify-center h-12 w-12 rounded-md bg-sky-500 text-white mb-4"
      >
        {icon}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="bg-slate-900 text-white text-xs px-2 py-1 rounded-md shadow-lg z-10"
        >
          {tooltipText}
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}

export default function JoinUs() {
  return (
    <AnimatedPage>
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white text-center mb-4">
            Join Our Team
          </h1>
          <p className="mt-0 max-w-3xl mx-auto text-lg text-slate-400">
            Become a part of the team that brings the Acton-Boxborough Science Tournament to life.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <div className="text-center bg-slate-800 p-10 rounded-lg border border-slate-700">
              <h2 className="text-2xl font-bold text-slate-100">Ready to Make a Difference?</h2>
              <p className="mt-2 mb-6 text-lg text-slate-300">
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
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-2 text-center">
              Why Volunteer with ABST?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PerkCard
                title="Earn Volunteer Hours"
                description="You will get plenty of official community service hours for your contribution, which may be useful for your resume / college application."
                icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                tooltipText="Official Hours"
              />
              <PerkCard
                title="Develop Real-World Skills"
                description="You will learn about handling logistics for a competition, how to communicate as part of a large team, and organize an event from the ground up."
                icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                tooltipText="Leadership & Organization"
              />
              <PerkCard
                title="Mentor and Inspire"
                description="You will be able to inspire the younger generation through the problems which will introduce them to interesting parts of science."
                icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                tooltipText="Community Impact"
              />
              <PerkCard
                title="Connect With Peers"
                description="You will work alongside other like-minded and driven high school students, which can form friendships and valuable connections."
                icon={<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                tooltipText="Team Building"
              />
            </div>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
}
