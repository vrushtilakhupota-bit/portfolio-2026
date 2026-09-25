import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { User, Check, FileText, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#F5EFE6] border-y border-[#E8E0D2] scroll-mt-20"
      aria-label="About the Designer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#E2D9CC] border border-[#D5CCC0] shadow-sm aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <img
                src="/assets/vrushti-portrait.jpeg"
                alt="Vrushti Lakhupota - UI/UX Designer"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141413]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-[#FAF7F3]">
                <span className="text-xs uppercase tracking-wider font-semibold opacity-90 block">
                  Vrushti Lakhupota
                </span>
                <span className="text-sm font-light text-stone-200">
                  UI/UX Designer · Ahmedabad, India
                </span>
              </div>
            </div>

            {/* Quick action bar under photo */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#6B6760] px-1">
              <span>Looking for my first UX/UI role</span>
              <button
                onClick={handleCopyEmail}
                className="font-semibold text-[#141413] hover:text-[#C84B2F] transition-colors focus:outline-none focus-visible:underline"
              >
                {copiedEmail ? 'Email Copied!' : 'Copy Email'}
              </button>
            </div>
          </motion.div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C84B2F] mb-3">
                <User className="w-3.5 h-3.5" />
                <span>About Me</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141413] mb-6">
                Designing with intention, curiosity, and high craft.
              </h2>

              {/* Bio Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-[#55514B] leading-relaxed mb-10">
                <p className="font-medium text-[#141413]">
                  {DESIGNER_INFO.bio}
                </p>
                <p className="text-sm sm:text-base text-[#6B6760]">
                  {DESIGNER_INFO.extendedBio}
                </p>
              </div>

              {/* Small Visual Information Blocks (Strict Zero-Pill Discipline) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#E2D9CC]">
                {/* Disciplines Block */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A857D] mb-4">
                    Disciplines
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#141413] font-medium">
                    {DESIGNER_INFO.disciplines.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C84B2F]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Block */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A857D] mb-4">
                    Tools & Stack
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#141413] font-medium">
                    {DESIGNER_INFO.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#141413]" />
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-[#E8E0D2] space-y-4">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A857D] mb-1.5">
                        Fresh Perspective & Drive
                      </h3>
                      <p className="text-xs text-[#55514B] leading-relaxed">
                        Entering the field with zero bad habits, an obsession with modern Figma workflows, and deep eagerness to learn and contribute from day one.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#8A857D] mb-1.5">
                        Design Ethos
                      </h3>
                      <p className="text-xs text-[#6B6760] leading-relaxed italic font-serif">
                        "Clarity first, elegance always. Good UX removes friction so human intent can flourish."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume / Connect links */}
            <div className="pt-8 mt-10 border-t border-[#E2D9CC] flex flex-wrap items-center gap-4">
              <a
                href={DESIGNER_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] hover:text-[#C84B2F] transition-colors py-1"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span aria-hidden="true" className="text-[#C5BDAF]">·</span>

              <a
                href={DESIGNER_INFO.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] hover:text-[#C84B2F] transition-colors py-1"
              >
                <span>Behance Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span aria-hidden="true" className="text-[#C5BDAF]">·</span>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] hover:text-[#C84B2F] transition-colors py-1 focus:outline-none"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileText className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Email Copied to Clipboard!' : 'Copy Direct Email'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
