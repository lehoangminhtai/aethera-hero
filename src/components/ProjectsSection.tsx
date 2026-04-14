import React from 'react';

const projects = [
  {
    title: 'CloudSync Dashboard',
    description: 'Real-time analytics platform with live data streaming, interactive charts, and team collaboration features.',
    tags: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
    year: '2026',
  },
  {
    title: 'Lumina Design System',
    description: 'A comprehensive component library powering 12+ products with accessible, performant UI primitives.',
    tags: ['React', 'Storybook', 'Tailwind CSS', 'a11y'],
    year: '2025',
  },
  {
    title: 'Vaultline API',
    description: 'High-throughput REST & GraphQL API serving 2M+ requests/day with edge caching and rate limiting.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL'],
    year: '2025',
  },
  {
    title: 'Meridian Mobile',
    description: 'Cross-platform fitness tracking app with offline-first architecture and real-time sync.',
    tags: ['React Native', 'SQLite', 'TypeScript'],
    year: '2024',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-body text-hero-black tracking-widest uppercase mb-4 opacity-0.5">Selected Work</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-hero-black" style={{ letterSpacing: '-1.5px' }}>
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className=" group border border-border rounded-2xl p-8 transition-all duration-300 hover:border-hero-black/20 hover:shadow-lg cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-2xl text-hero-black">{project.title}</h3>
              <span className="text-sm font-body text-hero-black">{project.year}</span>
            </div>
            <p className="font-body text-hero-black leading-relaxed mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-body px-3 py-1 rounded-full border border-border text-hero-black"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
