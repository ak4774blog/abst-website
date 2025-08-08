export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-slate-400">
          &copy; {currentYear} Acton-Boxborough Science Tournament. All Rights Reserved.
        </p>
        <p className="mt-1 text-xs text-slate-500">
          A 501(c)(3) nonprofit organization fiscally sponsored by Hack Club.
        </p>
      </div>
    </footer>
  );
}
