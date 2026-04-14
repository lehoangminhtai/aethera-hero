import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{ paddingTop: 'calc(8rem - 75px)' }}
    >
      {/* Readability backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-[1]" />

      <h1
        className="font-display text-5xl sm:text-7xl md:text-8xl font-normal max-w-7xl animate-fade-rise"
        style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
      >
        <span className="text-hero-black">Crafting </span>
        <span className="text-hero-dark italic">digital </span>
        <span className="text-hero-black">experiences </span>
        <span className="text-hero-dark italic">that matter.</span>
      </h1>

      <p className="font-body text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-hero-mid animate-fade-rise-delay">
        Full-stack developer building performant, elegant applications. I turn complex problems into clean, intuitive solutions with modern technologies.
      </p>

      <a href="#projects" className="rounded-full px-14 py-5 text-base bg-hero-black text-hero-white font-body mt-12 transition-transform hover:scale-[1.03] animate-fade-rise-delay-2">
        View My Work
      </a>
    </section>
  );
};

export default HeroSection;
