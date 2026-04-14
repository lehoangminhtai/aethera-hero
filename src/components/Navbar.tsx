import React from 'react';

const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Projects', href: '#projects', active: false },
  { label: 'Skills', href: '#skills', active: false },
  { label: 'About', href: '#about', active: false },
  { label: 'Contact', href: '#contact', active: false },
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
                href={item.href}
                className={`text-sm font-body transition-colors hover:text-hero-black ${
                  item.active ? 'text-hero-black' : 'text-hero-black'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="rounded-full px-6 py-2.5 text-sm bg-hero-black text-hero-white font-body transition-transform hover:scale-[1.03]">
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
