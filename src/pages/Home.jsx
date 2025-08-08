export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Acton-Boxborough Science Tournament
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-300">
            A new premier science competition for middle schoolers, coming April 2026.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-lg text-slate-300 space-y-6 leading-relaxed">
          <p>
            Welcome! This is the first year ABST will be held. We are thrilled to create new opportunities for middle schoolers to explore and enjoy science through friendly competition.
          </p>
          <p className="p-6 bg-sky-900/50 border-l-4 border-sky-400 text-sky-200">
            The Acton-Boxborough Science Tournament (ABST) is a 501(c)(3) nonprofit founded by high school students from Acton-Boxborough Regional High School. We noticed that while there are plenty of math tournaments, science competitions for middle school students are much harder to find. We started ABST to help change that!
          </p>
        </div>
      </div>
    </>
  );
}
