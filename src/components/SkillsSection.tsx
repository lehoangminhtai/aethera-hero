import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Vercel', 'Terraform'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'UI/UX', 'Typography'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="relative z-10 px-8 py-32 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-sm font-body text-hero-gray tracking-widest uppercase mb-4">Expertise</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-hero-black" style={{ letterSpacing: '-1.5px' }}>
          Skills & Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="font-display text-xl text-hero-black mb-6">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="font-body text-hero-gray text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-hero-black/30" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
