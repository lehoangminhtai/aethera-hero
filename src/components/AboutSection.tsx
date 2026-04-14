import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-body text-hero-gray tracking-widest uppercase mb-4">About</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-hero-black mb-8" style={{ letterSpacing: '-1.5px' }}>
            The person behind<br />
            <span className="text-hero-gray italic">the code.</span>
          </h2>
        </div>

        <div className="space-y-6">
          <p className="font-body text-hero-gray leading-relaxed text-lg">
            I'm a full-stack developer with 6+ years of experience building digital products that people love to use. My approach combines technical precision with a deep appreciation for design and user experience.
          </p>
          <p className="font-body text-hero-gray leading-relaxed">
            Previously, I've worked with startups and agencies across fintech, health-tech, and SaaS, shipping products used by millions. I believe great software sits at the intersection of engineering rigor and creative intuition.
          </p>
          <p className="font-body text-hero-gray leading-relaxed">
            When I'm not coding, you'll find me exploring generative art, contributing to open-source projects, or experimenting with new frameworks before they hit the mainstream.
          </p>

          <div className="flex gap-8 pt-4">
            <div>
              <p className="font-display text-3xl text-hero-black">6+</p>
              <p className="text-sm font-body text-hero-gray">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl text-hero-black">40+</p>
              <p className="text-sm font-body text-hero-gray">Projects Delivered</p>
            </div>
            <div>
              <p className="font-display text-3xl text-hero-black">12</p>
              <p className="text-sm font-body text-hero-gray">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
