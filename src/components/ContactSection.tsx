import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-body text-hero-black tracking-widest uppercase mb-4">Contact</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-hero-black" style={{ letterSpacing: '-1.5px' }}>
          Let's build something<br />
          <span className="text-hero-black italic">together.</span>
        </h2>
      </div>

      <div className="max-w-xl mx-auto">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-5 py-4 rounded-xl border border-border bg-background font-body text-sm text-hero-black placeholder:text-hero-black/50 focus:outline-none focus:border-hero-black/30 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-4 rounded-xl border border-border bg-background font-body text-sm text-hero-black placeholder:text-hero-black/50 focus:outline-none focus:border-hero-black/30 transition-colors"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-5 py-4 rounded-xl border border-border bg-background font-body text-sm text-hero-black placeholder:text-hero-black/50 focus:outline-none focus:border-hero-black/30 transition-colors"
          />
          <textarea
            rows={5}
            placeholder="Your message..."
            className="w-full px-5 py-4 rounded-xl border border-border bg-background font-body text-sm text-hero-black placeholder:text-hero-black/50 focus:outline-none focus:border-hero-black/30 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full rounded-full px-14 py-5 text-base bg-hero-black text-hero-white font-body transition-transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
