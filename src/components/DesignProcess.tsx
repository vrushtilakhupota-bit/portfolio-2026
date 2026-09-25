import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Compass, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

export const DesignProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length);
  };

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-[#F5EFE6] border-y border-[#E8E0D2] scroll-mt-20"
      aria-label="Design Methodology"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C84B2F] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
              From Curiosity to Clarity
            </h2>
            <p className="text-base text-[#6B6760] mt-3 max-w-xl">
              How I tackle ambiguity: an iterative framework grounded in deep user empathy, rapid tactile testing, and systematic craft.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-[#D5CCC0] text-[#141413] hover:bg-[#EAE2D4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F]"
              aria-label="Previous step"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold text-[#8A857D] tabular-nums px-2">
              {activeStepIndex + 1} / {PROCESS_STEPS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-[#D5CCC0] text-[#141413] hover:bg-[#EAE2D4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F]"
              aria-label="Next step"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stepper Navigation Ribbon */}
        <div className="relative mb-12 sm:mb-16">
          {/* Background Track Line */}
          <div className="absolute top-5 left-0 right-0 h-[2px] bg-[#E2D9CC] -z-0" />

          {/* Active Progress Line */}
          <div
            className="absolute top-5 left-0 h-[2px] bg-[#C84B2F] transition-all duration-300 -z-0"
            style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
          />

          {/* Steps */}
          <div className="relative z-10 grid grid-cols-3 sm:grid-cols-6 gap-2">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F] rounded-lg p-1.5"
                >
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 mb-2.5 ${
                      isActive
                        ? 'bg-[#141413] text-[#FAF7F3] ring-4 ring-[#FAF7F3] shadow-md scale-110'
                        : isPast
                        ? 'bg-[#C84B2F] text-white'
                        : 'bg-[#FAF7F3] text-[#8A857D] border border-[#D5CCC0] group-hover:border-[#141413]'
                    }`}
                  >
                    {isPast ? <CheckCircle2 className="w-4 h-4" /> : step.step}
                  </div>
                  <span
                    className={`text-xs font-semibold tracking-tight transition-colors ${
                      isActive ? 'text-[#141413]' : 'text-[#8A857D] group-hover:text-[#141413]'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-[#FAF7F3] border border-[#E4DDD0] p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Number, Title, Description */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C84B2F] mb-2">
                  <span>Phase {activeStep.step}</span>
                  <span aria-hidden="true">/</span>
                  <span>{activeStep.title}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#141413] mb-3">
                  {activeStep.subtitle}
                </h3>

                <p className="text-base sm:text-lg text-[#55514B] leading-relaxed mb-8">
                  {activeStep.description}
                </p>

                {/* Quote block */}
                <div className="p-4 sm:p-5 rounded-xl bg-[#F4EDE2] border-l-2 border-[#C84B2F] text-sm text-[#4D4943] italic font-serif leading-relaxed">
                  {activeStep.quote}
                </div>
              </div>

              {/* Right Column: Methods & Deliverables (Zero-Pill clean lists) */}
              <div className="lg:col-span-5 space-y-6 pt-2 lg:border-l lg:border-[#E8E0D2] lg:pl-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A857D] mb-3">
                    Methods & Techniques
                  </h4>
                  <ul className="space-y-2 text-sm text-[#141413]">
                    {activeStep.methods.map((method, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C84B2F]" />
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8E0D2]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A857D] mb-3">
                    Tangible Outputs
                  </h4>
                  <ul className="space-y-2 text-sm text-[#55514B]">
                    {activeStep.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="text-[#8A857D] font-mono text-xs mt-0.5">·</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
