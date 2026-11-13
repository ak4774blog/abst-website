import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <title>Page Not Found | ABST</title>
      <meta name="description" content="This page doesn't exist on the ABST website." />

      <div className="wrap content py-8 min-h-[50vh]">
        <h1>Page not found</h1>
        <p>
          There's nothing at this address. It may have moved, or the link might have a typo.
        </p>
        <p>
          Try the <Link to="/">home page</Link>, or use the menu above.
        </p>
      </div>
    </>
  );
}
