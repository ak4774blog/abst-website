export default function Sponsors() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 text-center mb-12">Our Sponsors</h1>
      <div className="max-w-2xl mx-auto bg-white border rounded-lg p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-rose-600">Hack Club</h2>
        <p className="mt-4 text-lg text-slate-700">
          We are a 501(c)(3) nonprofit fiscally sponsored by{' '}
          <a
            href="https://hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Hack Club Bank
          </a>.
        </p>
      </div>
    </div>
  );
}
