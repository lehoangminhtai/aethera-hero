import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 pb-40"
      style={{ paddingTop: 'calc(8rem - 75px)' }}
    >
      <h1
        className="font-display text-5xl sm:text-7xl md:text-8xl font-normal max-w-7xl animate-fade-rise"
        style={{ lineHeight: 0.95, letterSpacing: '-2.46px' }}
      >
        <span className="text-hero-black">Beyond </span>
        <span className="text-hero-gray italic">silence,</span>
        <span className="text-hero-black"> we build </span>
        <span className="text-hero-gray italic">the eternal.</span>
      </h1>

      <p className="font-body text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-hero-gray animate-fade-rise-delay">
        Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.
      </p>

      <button className="rounded-full px-14 py-5 text-base bg-hero-black text-hero-white font-body mt-12 transition-transform hover:scale-[1.03] animate-fade-rise-delay-2">
        Begin Journey
      </button>
    </section>
  );
};

export default HeroSection;
