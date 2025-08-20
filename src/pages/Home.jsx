import AnimatedPage from '../components/AnimatedPage';
export default function Home() {
  return (
    <AnimatedPage>
    <title>ABST - Acton-Boxborough Science Tournament</title>
      <meta name="description" content="The official website for the Acton-Boxborough Science Tournament (ABST), a premier science competition for middle schoolers in Massachusetts, founded by ABRHS students." />
      <div className="backdrop-blur-sm">
        {/* The py-20 class was changed to pt-20 pb-8 to reduce bottom padding */}
        <div className="max-w-5xl mx-auto px-4 pt-20 pb-8 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Acton-Boxborough Science Tournament
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
            A new premier science competition for middle schoolers, coming April 2026.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-lg text-slate-300 space-y-6 leading-relaxed">
          <p className="p-6 bg-sky-900/50 border-l-4 border-sky-400 text-sky-200 rounded-r-lg mb-4">
            Welcome! ABST was created by the members of ABRHS for a middle school and below level science competition. We noticed that while there are plenty of math tournaments, science competitions for middle school students are much harder to find. We started ABST to help change that!
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
}
