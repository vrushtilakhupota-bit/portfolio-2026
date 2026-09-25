import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Case Studies', count: PROJECTS.length },
    { id: 'Mobile App', label: 'Mobile Apps', count: PROJECTS.filter(p => p.category === 'Mobile App').length },
    { id: 'Campus UX', label: 'Campus Systems', count: PROJECTS.filter(p => p.category === 'Campus UX').length },
    { id: 'Sustainable Product', label: 'Product & Eco UX', count: PROJECTS.filter(p => p.category === 'Sustainable Product').length },
  ];

  const featuredProject = PROJECTS.find((p) => p.featured) || PROJECTS[0];
  const secondaryProjects = PROJECTS.filter((p) => !p.featured);

  const filteredSecondary =
    activeFilter === 'all'
      ? secondaryProjects
      : secondaryProjects.filter((p) => p.category === activeFilter);

  const showFeatured = activeFilter === 'all' || featuredProject.category === activeFilter;

  return (
    <section
      id="work"
      className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 scroll-mt-20"
      aria-label="Selected Projects"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#E8E2D9] pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C84B2F] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
            Curated Case Studies
          </h2>
          <p className="text-base text-[#6B6760] mt-3 max-w-xl">
            Real problems solved through empathetic user research, structured information architecture, and rigorous prototyping.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFE9DF] rounded-xl self-start md:self-auto">
          {filterOptions.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 rounded-lg whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F] ${
                  isActive
                    ? 'bg-[#141413] text-[#FAF7F3] shadow-sm'
                    : 'text-[#5A5650] hover:text-[#141413] hover:bg-[#E5DEC7]/50'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 text-[10px] opacity-70 ${isActive ? 'text-[#FAF7F3]' : 'text-[#7D776E]'}`}>
                  ({tab.count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Flagship Featured Project Showcase */}
      {showFeatured && (
        <div className="mb-14 sm:mb-20">
          <ProjectCard
            project={featuredProject}
            onSelect={onSelectProject}
            isFeatured={true}
          />
        </div>
      )}

      {/* Secondary Projects Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#8A857D] px-1">
          <span>Additional Explorations & Client Projects</span>
          <span>{filteredSecondary.length} Projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSecondary.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onSelect={onSelectProject}
              isFeatured={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
