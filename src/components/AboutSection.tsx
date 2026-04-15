import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-hero-black mb-8" style={{ letterSpacing: '-1.5px' }}>
            Introduce<br />
            <span className="text-hero-black italic">Lê Hoàng Minh Tài</span>
          </h2>
        </div>

        <div className="space-y-6">
          <p className="font-body text-hero-black leading-relaxed text-lg">
            I am <strong>Lê Hoàng Minh Tài</strong>, a full-stack developer with over 1 years of experience building web products and SaaS platforms. I specialize in React, TypeScript, Node.js, microservices architecture, and user experience.
          </p>
          <p className="font-body text-hero-black leading-relaxed">
            I have partnered with startups, fintech companies, and health-tech teams to deliver high-performance, scalable applications that drive measurable business outcomes. My work focuses on performance, accessibility, and security.
          </p>
          <p className="font-body text-hero-black leading-relaxed">
            Outside of development, I maintain open-source projects on GitHub and share insights about React, TypeScript, and Node.js on LinkedIn. My personal brand is LHMT, where I turn digital ideas into real products.
          </p>

          <div className="flex gap-8 pt-4">
            <div>
              <p className="font-display text-3xl text-hero-black">1+</p>
              <p className="text-sm font-body text-hero-black">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl text-hero-black">5+</p>
              <p className="text-sm font-body text-hero-black">Projects Delivered</p>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
