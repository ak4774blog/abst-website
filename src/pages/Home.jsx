import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

// --- DATA for the FAQ Section with ANSWERS ---
const faqData = [
  {
    question: "Who is eligible to compete in ABST?",
    answer: "ABST is open to all students currently enrolled in grades 8 and below. Students can form teams with peers from their own school or from different schools."
  },
  {
    question: "How many students can be on a team?",
    answer: "Teams can consist of up to 6 students. We recommend teams of at least 4 members to ensure all events can be covered effectively throughout the day."
  },
  {
    question: "What is the registration fee?",
    answer: "The registration fee will be finalized closer to the event date. We are committed to making this event accessible, and information about fee waivers will be available on our registration page."
  },
  {
    question: "What topics will the competition cover?",
    answer: "Our events span a wide range of scientific disciplines, including Biology, Chemistry, Physics, Earth & Space Science, and Computer Science. For detailed information on each event, please see the Competition Info page."
  },
  {
    question: "Do we need a coach or adult supervisor?",
    answer: "While a coach is not required to register a team, we do require at least one designated adult chaperone to be present for each team on the day of the tournament for safety and supervision."
  }
];

// --- REUSABLE FAQ COMPONENT (Accordion Item) ---
// Simplified to render text directly
function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-700">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-slate-200 hover:text-white"
      >
        <span>{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-base text-slate-400">
              <p>{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- MAIN HOME PAGE COMPONENT ---
export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <AnimatedPage>
      <title>ABST - Acton-Boxborough Science Tournament</title>
      <meta name="description" content="The official website for the Acton-Boxborough Science Tournament (ABST), a premier science competition for middle schoolers in Massachusetts, founded by ABRHS students." />

      {/* ===== NEW IMAGE BANNER SECTION ===== */}
      <div 
        className="relative h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `url(/background-home.jpg)` }}
      >
        {/* This div creates a dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-mono text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              Acton-Boxborough Science Tournament
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              A new premier science competition for middle schoolers, coming April 2026.
            </p>
          </div>
        </div>
      </div>
      {/* ==================================== */}

      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-lg text-slate-300 space-y-6 leading-relaxed mb-20">
          <p className="p-6 bg-sky-900/50 border-l-4 border-sky-400 text-sky-200 rounded-r-lg">
            Welcome! ABST was created by the members of ABRHS for a middle school and below level science competition. We noticed that while there are plenty of math tournaments, science competitions for middle school students are much harder to find. We started ABST to help change that!
          </p>
        </div>

        <section>
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openFaq === index}
                onToggle={() => handleFaqToggle(index)}
              />
            ))}
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}
