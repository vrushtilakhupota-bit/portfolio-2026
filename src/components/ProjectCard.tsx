import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isFeatured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  isFeatured = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (isFeatured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => onSelect(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(project);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`View featured case study for ${project.title}`}
        data-cursor="project"
        className="group relative cursor-pointer block rounded-2xl bg-[#F6F1EA] border border-[#E7E0D5] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#D5CCC0] hover:shadow-[0_12px_40px_-12px_rgba(20,20,19,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Container */}
          <div className="lg:col-span-7 overflow-hidden rounded-xl bg-[#EBE4D8] relative aspect-[16/10] flex items-center justify-center">
            {/* Fallback pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EAE2D5] to-[#DFD6C7] opacity-80" />

            {!imageError ? (
              <img
                src={project.coverImage}
                alt={`${project.title} interface preview`}
                loading="eager"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : (
              <div className="relative z-10 text-center p-6 text-[#6B6760]">
                <span className="font-semibold text-lg text-[#141413]">{project.title}</span>
                <p className="text-xs mt-1">{project.summary}</p>
              </div>
            )}

            {/* Quick Interactive Overlay Pill on Mobile / Hover */}
            <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#141413]/90 text-[#FAF7F3] text-xs font-medium backdrop-blur-sm shadow-md">
              <span>View Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              {/* Unboxed Metadata Header */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C84B2F] mb-3">
                <span>Featured Project</span>
                <span aria-hidden="true" className="text-[#C84B2F]/40">·</span>
                <span>{project.category}</span>
                <span aria-hidden="true" className="text-[#C84B2F]/40">·</span>
                <span>{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141413] mb-4 group-hover:text-[#C84B2F] transition-colors">
                {project.title}
              </h3>

              {/* Tagline & Summary */}
              <p className="text-base text-[#423F3A] font-medium mb-3 leading-snug">
                {project.tagline}
              </p>
              <p className="text-sm text-[#6B6760] leading-relaxed mb-6">
                {project.summary}
              </p>

              {/* Metadata specs */}
              <div className="pt-4 border-t border-[#E4DDD2] grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="block text-[#8A857D] font-medium">Role</span>
                  <span className="font-medium text-[#141413] mt-0.5 block">{project.role}</span>
                </div>
                <div>
                  <span className="block text-[#8A857D] font-medium">Focus Area</span>
                  <span className="font-medium text-[#141413] mt-0.5 block">
                    {project.category} · End-to-End UX
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-6 mt-6 border-t border-[#E4DDD2] flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#141413] group-hover:text-[#C84B2F] transition-colors">
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <span className="text-xs text-[#8A857D] font-medium">10-step UX breakdown</span>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  // Secondary Project Card Layout (Clean 2-column or list)
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View case study for ${project.title}`}
      data-cursor="project"
      className="group relative cursor-pointer flex flex-col justify-between rounded-2xl bg-[#F6F1EA] border border-[#E7E0D5] p-5 sm:p-6 transition-all duration-300 hover:border-[#D5CCC0] hover:shadow-[0_8px_30px_-8px_rgba(20,20,19,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F]"
    >
      <div>
        {/* Visual Container */}
        <div className="overflow-hidden rounded-xl bg-[#EBE4D8] relative aspect-[16/10] mb-5 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EAE2D5] to-[#DFD6C7] opacity-80" />

          {!imageError ? (
            <img
              src={project.coverImage}
              alt={`${project.title} interface preview`}
              loading="lazy"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : (
            <div className="relative z-10 text-center p-4 text-[#6B6760]">
              <span className="font-semibold text-base text-[#141413]">{project.title}</span>
            </div>
          )}

          {/* Quick Hover Indicator */}
          <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#141413] text-[#FAF7F3] shadow-md">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs text-[#8A857D] font-medium mb-2">
          <span>{project.category}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
        </div>

        {/* Title */}
        <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141413] mb-2 group-hover:text-[#C84B2F] transition-colors">
          {project.title}
        </h4>

        {/* Short Summary */}
        <p className="text-sm text-[#55514B] line-clamp-2 leading-relaxed mb-4">
          {project.summary}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-[#E7E0D5] flex items-center justify-between">
        <span className="text-xs font-semibold text-[#141413] group-hover:text-[#C84B2F] transition-colors inline-flex items-center gap-1">
          <span>Explore Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
        <span className="text-[11px] text-[#8A857D] font-medium">{project.role}</span>
      </div>
    </motion.article>
  );
};
