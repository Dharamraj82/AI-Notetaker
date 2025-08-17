import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const navLinkClass =
  "text-white font-medium px-3 py-1 text-lg rounded-md transition-colors duration-200 hover:bg-black/20 focus:bg-white/30 outline-none";

  return (
    
    <header className="bg-gradient-to-r from-blue-500 to-cyan-400 text-black border border-blue-100 shadow-2xl mb-8 py-4">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6">
        <Link to={'/'} className="flex items-center font-bold text-3xl tracking-wide">
          AI Notetaker
        </Link>
        {/* Navigation */}
        <nav className="flex items-center gap-6 ">
          <Link to={'/upload'} className={navLinkClass}>Generate Summary</Link>
          <Link to={'/about'} className={navLinkClass}>About</Link>
          <Link to={'/privacy'} className={navLinkClass}>Privacy</Link>
        </nav>
      </div>
    </header>
  );
}


export default Header;