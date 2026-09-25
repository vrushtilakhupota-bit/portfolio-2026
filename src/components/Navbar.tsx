import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, Mail } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Field Notes', href: '#field-notes' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#FAF7F3]/90 backdrop-blur-md border-b border-[#E8E2D9]/80 shadow-[0_4px_20px_-4px_rgba(20,20,19,0.03)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Single text wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F] rounded-md"
            aria-label="Vrushti Lakhupota Home"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#141413] transition-colors group-hover:text-[#C84B2F]">
              Vrushti
            </span>
            <span className="hidden sm:inline-block text-xs font-medium tracking-wider text-[#6B6760] transition-opacity">
              / UI·UX
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm tracking-normal transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F] rounded ${
                    isActive ? 'text-[#141413] font-semibold' : 'text-[#6B6760] hover:text-[#141413] font-medium'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C84B2F]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Status */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Availability indicator */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-[#4D4943]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Roles</span>
            </div>

            <button
              onClick={onContactClick}
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-[#FAF7F3] bg-[#141413] hover:bg-[#2A2926] rounded-full transition-all duration-200 active:scale-[0.98] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#141413]"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#141413] hover:bg-[#EAE4DC] rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-[#FAF7F3] border-b border-[#E8E2D9] px-6 py-6 md:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-lg font-medium text-[#141413] hover:text-[#C84B2F] transition-colors py-1.5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E8E2D9] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-medium text-[#6B6760]">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>{DESIGNER_INFO.status}</span>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-[#FAF7F3] bg-[#141413] rounded-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>Start a Conversation</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
