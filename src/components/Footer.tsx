import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 px-8 py-12 max-w-7xl mx-auto border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="/" className="font-display text-2xl tracking-tight text-hero-black">
          Aethera<sup className="text-xs align-super">®</sup>
        </a>

        <div className="flex items-center gap-6">
          {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-body text-hero-gray transition-colors hover:text-hero-black"
            >
              {link}
            </a>
          ))}
        </div>

        <p className="text-sm font-body text-hero-gray">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
