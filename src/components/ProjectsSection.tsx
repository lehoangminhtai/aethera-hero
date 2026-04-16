import React from 'react';

const projects = [
  {
    title: 'aethera-hero',
    description: 'Personal portfolio built with React, TypeScript, Tailwind, and Vite. This live site highlights UX, motion, and responsive design.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    year: '2026',
    url: 'https://github.com/lehoangminhtai/aethera-hero',
  },
   {
    title: 'Microservices Fintech Platform',
    description: 'Full-stack fintech system with Kafka event streaming, JWT authentication, Saga pattern transactions, and real-time Socket.IO updates.',
    tags: ['Node.js', 'Kafka', 'PostgreSQL', 'Docker', 'Microservices'],
    year: '2026',
    url: '/project',
  },
  {
    title: 'BookShop',
    description: 'Full-stack bookstore platform with frontend and backend services, Docker deployment, and recommendation features.',
    tags: ['JavaScript', 'Docker', 'Node.js', 'React'],
    year: '2025',
    url: 'https://github.com/lehoangminhtai/BookShop',
  },
  {
    title: 'toeicpracticeapp',
    description: 'Android TOEIC practice app using Java, Firebase, and SQLite. Includes user login, listening practice, vocabulary drills, and admin CRUD.',
    tags: ['Java', 'Firebase', 'Android', 'SQLite'],
    year: '2024',
    url: 'https://github.com/lehoangminhtai/toeicpracticeapp',
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
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group block border border-border rounded-2xl p-8 transition-all duration-300 hover:border-hero-black/20 hover:shadow-lg cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-display text-2xl text-hero-black group-hover:text-hero-black/80 transition-colors">
                {project.title}
              </h3>
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
