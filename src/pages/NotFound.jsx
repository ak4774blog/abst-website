import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

export default function NotFound() {
  return (
    <AnimatedPage>
      <title>404: Page Not Found | ABST</title>
      <meta
        name="description"
        content="The page you are looking for could not be found on the ABST website."
      />

      <div className="flex min-h-[70vh] items-center justify-center text-center">
        <div className="max-w-md">
          <p className="text-9xl font-extrabold text-sky-400">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg leading-7 text-slate-400">
            Oops! The page you’re looking for doesn’t exist. It might have been
            moved or deleted.
          </p>
          <div className="mt-10">
            <Link
              to="/"
              className="inline-block rounded-md bg-sky-500 px-6 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
