import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-center px-4">
      <h1 className="text-9xl font-bold text-emerald-200">404</h1>
      <h2 className="text-2xl font-bold text-emerald-900 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}