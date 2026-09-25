import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F0F0E] text-[#8C8880] py-14 border-t border-[#22211F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left: Brand & copyright */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xl font-bold tracking-tight text-[#FAF7F3]">
              Vrushti
            </span>
            <span className="text-xs text-[#6B6760]">/ UI·UX Portfolio</span>
          </div>
          <p className="text-xs text-[#706C64]">
            © {new Date().getFullYear()} Vrushti Lakhupota. Designed with intention, user research, and interaction craft.
          </p>
        </div>

        {/* Center: Navigation quick links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#B5B0A6]">
          <a href="#work" className="hover:text-[#FAF7F3] transition-colors">
            Work
          </a>
          <a href="#process" className="hover:text-[#FAF7F3] transition-colors">
            Process
          </a>
          <a href="#services" className="hover:text-[#FAF7F3] transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-[#FAF7F3] transition-colors">
            About
          </a>
          <a href="#field-notes" className="hover:text-[#FAF7F3] transition-colors">
            Field Notes
          </a>
          <a href="#contact" className="hover:text-[#FAF7F3] transition-colors">
            Contact
          </a>
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#FAF7F3] hover:text-[#E8A598] transition-colors p-2 rounded-lg bg-[#1C1C1A] border border-[#2F2E2B]"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
