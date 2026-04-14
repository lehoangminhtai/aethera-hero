import React from 'react';

const navItems = [
  { label: 'Home', active: true },
  { label: 'Studio', active: false },
  { label: 'About', active: false },
  { label: 'Journal', active: false },
  { label: 'Reach Us', active: false },
];

const Navbar: React.FC = () => {
  return (
    <nav className="relative z-10 w-full">
      <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <a href="/" className="font-display text-3xl tracking-tight text-hero-black">
          Aethera<sup className="text-sm align-super">®</sup>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`text-sm font-body transition-colors hover:text-hero-black ${
                  item.active ? 'text-hero-black' : 'text-hero-gray'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="rounded-full px-6 py-2.5 text-sm bg-hero-black text-hero-white font-body transition-transform hover:scale-[1.03]">
          Begin Journey
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
