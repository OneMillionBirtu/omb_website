import Link from "next/link";
import MyAnimation from "./construction";

// app/under-development/page.tsx
export default function UnderDevelopment() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-10 text-center space-y-3">
        <div className="flex justify-center">
          <MyAnimation />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Page Under Development</h1>
        <p className="text-gray-600">
          This part of the site hasn’t caught up with the rest of the world yet. We’re polishing
          things up, so check back soon.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
