import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 mt-12">
      <div className="max-w-8xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">&copy; 2025 AI Notetaker. All rights reserved.</div>
        <div className="flex gap-4 text-xs">
          <Link to={'/about'} className="hover:text-white transition-colors">About</Link>
          <Link to={'/privacy'} className="hover:text-white transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;