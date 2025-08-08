export default function Sponsors() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-white text-center mb-12">Our Sponsors</h1>
      <div className="max-w-2xl mx-auto bg-slate-800 border border-slate-700 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-rose-500">Hack Club</h2>
        <p className="mt-4 text-lg text-slate-300">
          We are a 501(c)(3) nonprofit fiscally sponsored by{' '}
          <a
            href="https://hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-medium"
          >
            Hack Club Bank
          </a>.
        </p>
      </div>
    </div>
  );
}
