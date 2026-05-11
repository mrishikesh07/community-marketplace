import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go Home
      </Link>
    </div>
  );
}