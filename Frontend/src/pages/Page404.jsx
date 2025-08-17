import React from 'react';
import { Link } from 'react-router-dom';

function Page404() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center py-20 px-2">
      <div className="w-full max-w-lg p-10 flex flex-col items-center gap-8">
        <img
          src="https://undraw.co/api/illustrations/404.svg"
          alt="404 Not Found"
          className="w-48 h-48 object-contain mb-2"
          loading="lazy"
          onError={e => { e.target.style.display = 'none'; }}
        />
        <h1 className="text-5xl font-extrabold text-red-700 text-center">404</h1>
        <p className="text-lg text-gray-700 text-center">Oops! The page you are looking for does not exist or has been moved.</p>
        <Link
          to="/"
          className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}

export default Page404;