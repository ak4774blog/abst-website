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

      <div className="flex min-h-[70vh] items-center justify-center text-center bg-[var(--surface-card)]">
        <div className="max-w-md px-4">
          <p className="text-8xl font-bold text-[var(--text-brand)]">404</p>
          <h1 className="mt-4 text-3xl font-bold text-[var(--text-heading)]">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-[var(--text-body)]">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-block bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-white rounded hover:bg-[var(--accent-hover)] transition-colors"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
