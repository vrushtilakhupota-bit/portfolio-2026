import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('01');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Next project logic for seamless browsing
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const scrollToSection = (secNum: string) => {
    setActiveSection(secNum);
    const el = document.getElementById(`section-${secNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 overflow-y-auto bg-[#141413]/80 backdrop-blur-md flex justify-center"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          ref={contentRef}
          className="relative w-full max-w-5xl my-0 sm:my-8 bg-[#FAF7F3] min-h-screen sm:min-h-0 sm:rounded-2xl sm:border sm:border-[#E8E2D9] shadow-2xl flex flex-col"
        >
          {/* Sticky Navigation Header inside Case Study */}
          <div className="sticky top-0 z-30 bg-[#FAF7F3]/95 backdrop-blur-md border-b border-[#E8E2D9] px-6 sm:px-10 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C84B2F]">
                Case Study
              </span>
              <span aria-hidden="true" className="text-[#C5BDAF]">/</span>
              <span className="text-sm font-bold text-[#141413] truncate max-w-[200px] sm:max-w-md">
                {project.title}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Quick Section Dropdown / Pill on Desktop */}
              <div className="hidden md:flex items-center gap-1 overflow-x-auto max-w-sm py-1">
                {project.caseStudy.sections.map((sec) => (
                  <button
                    key={sec.number}
                    onClick={() => scrollToSection(sec.number)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      activeSection === sec.number
                        ? 'bg-[#141413] text-[#FAF7F3] font-semibold'
                        : 'text-[#8A857D] hover:text-[#141413]'
                    }`}
                  >
                    {sec.number}
                  </button>
                ))}
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#EAE4DC] text-[#141413] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F]"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Case Study Body */}
          <div className="px-6 sm:px-12 lg:px-16 py-10 sm:py-16 space-y-16">
            {/* Title & Header Block */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C84B2F]">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>

              <h1
                id="case-study-title"
                className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] leading-tight text-balance"
              >
                {project.title}
              </h1>

              <p className="text-xl sm:text-2xl text-[#383531] font-serif italic max-w-3xl leading-relaxed">
                "{project.caseStudy.heroQuote}"
              </p>

              <p className="text-base sm:text-lg text-[#55514B] leading-relaxed max-w-3xl">
                {project.summary}
              </p>

              {/* Project Metadata Grid (Zero-Pill Discipline) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 pb-4 border-y border-[#E8E2D9]">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8A857D] font-medium block">
                    My Role
                  </span>
                  <span className="text-sm font-semibold text-[#141413] mt-1 block">
                    {project.role}
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8A857D] font-medium block">
                    Timeline
                  </span>
                  <span className="text-sm font-semibold text-[#141413] mt-1 block">
                    {project.timeline}
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8A857D] font-medium block">
                    Team & Scope
                  </span>
                  <span className="text-sm font-semibold text-[#141413] mt-1 block">
                    {project.team}
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#8A857D] font-medium block">
                    Tools Used
                  </span>
                  <span className="text-sm font-semibold text-[#141413] mt-1 block">
                    {project.tools.join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Visual Hero Asset */}
            <div className="rounded-2xl overflow-hidden bg-[#E2D9CC] border border-[#D5CCC0] shadow-sm">
              <img
                src={project.coverImage}
                alt={`${project.title} Primary Interface Mockup`}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* The 10 Sections Structure */}
            <div className="space-y-20 pt-6">
              {project.caseStudy.sections.map((section) => (
                <section
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-24 border-t border-[#E8E2D9] pt-12 space-y-6"
                >
                  {/* Section Label */}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono font-bold text-[#C84B2F]">
                      {section.number} —
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413]">
                      {section.title}
                    </h2>
                  </div>

                  {section.subtitle && (
                    <h3 className="text-lg font-semibold text-[#423F3A]">
                      {section.subtitle}
                    </h3>
                  )}

                  {/* Prose Paragraphs */}
                  <div className="space-y-4 text-base sm:text-lg text-[#55514B] leading-relaxed max-w-3xl">
                    {section.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {/* Bullet Points */}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="space-y-3 pt-2 max-w-3xl text-sm sm:text-base text-[#383531]">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#C84B2F] shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Metrics Row */}
                  {section.metrics && section.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-xl bg-[#F4EDE2] border border-[#E7DECE]">
                      {section.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <span className="text-2xl sm:text-3xl font-bold text-[#141413] block tabular-nums">
                            {m.value}
                          </span>
                          <span className="text-xs text-[#6B6760] font-medium mt-1 block">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Section Image Asset if provided */}
                  {section.image && (
                    <div className="my-8 rounded-xl overflow-hidden bg-[#E2D9CC] border border-[#D5CCC0]">
                      <img
                        src={section.image}
                        alt={section.imageCaption || `${section.title} visual`}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                      {section.imageCaption && (
                        <div className="p-3.5 bg-[#FAF7F3] border-t border-[#E8E2D9] text-xs text-[#6B6760] italic">
                          {section.imageCaption}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Key Takeaway Callout */}
                  {section.keyTakeaway && (
                    <div className="p-5 rounded-xl bg-[#FAF0E6] border-l-4 border-[#C84B2F] text-sm text-[#423F3A] leading-relaxed">
                      <strong className="block text-xs font-bold uppercase tracking-wider text-[#C84B2F] mb-1">
                        Key Design Takeaway
                      </strong>
                      <p>{section.keyTakeaway}</p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Gallery Images if any */}
            {project.caseStudy.galleryImages && project.caseStudy.galleryImages.length > 1 && (
              <div className="pt-12 border-t border-[#E8E2D9]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A857D] mb-6">
                  Design Artifacts & Interface Screens
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.caseStudy.galleryImages.map((img, gIdx) => (
                    <div
                      key={gIdx}
                      className="rounded-xl overflow-hidden bg-[#E2D9CC] border border-[#D5CCC0] group"
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                      <div className="p-3 bg-[#FAF7F3] border-t border-[#E8E2D9] text-xs text-[#6B6760]">
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Next Project Footer Switcher */}
            <div className="pt-16 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8A857D] block mb-1">
                  Next Case Study
                </span>
                <span className="text-2xl font-bold text-[#141413]">
                  {nextProject.title}
                </span>
                <p className="text-xs text-[#6B6760] mt-1">
                  {nextProject.category} · {nextProject.year}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-[#D5CCC0] text-xs font-semibold text-[#141413] hover:bg-[#EAE4DC] transition-colors"
                >
                  Close Case Study
                </button>
                <button
                  onClick={() => {
                    onSelectProject(nextProject);
                    if (contentRef.current) {
                      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#141413] text-[#FAF7F3] hover:bg-[#2A2926] text-xs font-semibold transition-colors"
                >
                  <span>View {nextProject.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
