import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 sm:pt-40 sm:pb-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      aria-label="Introduction"
    >
      {/* Subtle background ambient warmth */}
      <div
        className="pointer-events-none absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#EFE8DC]/50 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="flex-1 flex flex-col justify-center max-w-4xl">
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-medium text-[#6B6760] mb-6"
        >
          <span className="text-[#141413] font-semibold tracking-wide uppercase text-[11px] sm:text-xs">
            Hi, I'm Vrushti Lakhupota
          </span>
          <span aria-hidden="true" className="text-[#BDB7AB]">·</span>
          <span className="flex items-center gap-1.5 text-[#4D4943]">
            <MapPin className="w-3.5 h-3.5 text-[#C84B2F]" />
            Ahmedabad, India
          </span>
          <span aria-hidden="true" className="text-[#BDB7AB]">·</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Seeking 1st UI/UX Role
          </span>
        </motion.div>

        {/* Primary Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#141413] leading-[1.08] mb-8 text-balance"
        >
          UI/UX Designer{' '}
          <span className="font-normal font-serif italic text-[#383531]">
            crafting thoughtful
          </span>{' '}
          digital experiences through research, interaction, and visual clarity.
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-2xl text-base sm:text-lg text-[#55514B] leading-relaxed mb-10"
        >
          <p>
            I design products so people don't have to think twice — unless it's about how good it feels to use.
            Focusing on turning complex user friction into intuitive, human-centered journeys.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <button
            onClick={onExploreWork}
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#FAF7F3] bg-[#141413] hover:bg-[#262523] rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#141413]"
          >
            <span>View Featured Work</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={onContactClick}
            className="group inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#141413] hover:text-[#C84B2F] bg-transparent hover:bg-[#EAE4DC]/50 border border-[#D8D0C5] rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F]"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#6B6760] group-hover:text-[#C84B2F]" />
          </button>
        </motion.div>
      </div>

      {/* Bottom Proof Strip: Scannable stats adhering to Zero-Pill discipline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.32 }}
        className="pt-12 sm:pt-16 mt-12 border-t border-[#E8E2D9] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
      >
        {DESIGNER_INFO.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#141413] tabular-nums">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-[#6B6760] mt-1 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
