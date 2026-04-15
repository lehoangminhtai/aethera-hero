import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{ paddingTop: 'calc(8rem - 75px)' }}
    >
      <p className="text-sm uppercase tracking-widest text-hero-gray mb-4 animate-stagger-item" style={{ '--delay': '0s' } as React.CSSProperties}>
        Personal Portfolio
      </p>

      <h1
        className="font-display text-5xl sm:text-7xl md:text-8xl font-normal max-w-7xl"
        style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
      >
        <span
          className="inline-block text-hero-black animate-stagger-item"
          style={{ '--delay': '0.08s' } as React.CSSProperties}
        >
          Lê Hoàng Minh Tài
        </span>
        <span
          className="text-hero-black italic block animate-stagger-item"
          style={{ '--delay': '0.16s' } as React.CSSProperties}
        >
          Full-stack developer
        </span>
      </h1>

      <p
        className="font-body text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-hero-black animate-stagger-item"
        style={{ '--delay': '0.34s' } as React.CSSProperties}
      >
        I am <strong>Lê Hoàng Minh Tài</strong> (lehoangminhtai), a full-stack developer building high-performance web applications using React, TypeScript, and Node.js. I create digital solutions that prioritize UX, performance, and scalability.
      </p>


      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#projects"
          className="button-smooth inline-flex rounded-full px-14 py-5 text-base bg-hero-black text-hero-white font-body"
        >
          Projects
        </a>

        <a
          href="mailto:hello@example.com"
          className="button-smooth inline-flex rounded-full px-14 py-5 text-base border border-hero-black text-hero-black bg-white/90"
        >
          Contact Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
