import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData';
import { LayoutGrid, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 scroll-mt-20"
      aria-label="Capabilities and Services"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#E8E2D9] pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C84B2F] mb-3">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
            What I Bring to the Table
          </h2>
          <p className="text-base text-[#6B6760] mt-3 max-w-xl">
            A balanced synthesis of generative research, precise UI craftsmanship, and end-to-end design execution.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl bg-[#F6F1EA] border border-[#E7E0D5] p-8 sm:p-9 transition-all duration-300 hover:border-[#D5CCC0] hover:shadow-[0_8px_30px_-8px_rgba(20,20,19,0.06)]"
          >
            <div>
              <div className="text-sm font-mono font-semibold text-[#C84B2F] mb-4">
                {service.number}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#141413] mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-[#55514B] leading-relaxed mb-8">
                {service.summary}
              </p>
            </div>

            <div className="pt-6 border-t border-[#E8E0D2]">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8A857D] mb-3">
                Specializations
              </h4>
              <ul className="space-y-2 text-xs text-[#2A2926] font-medium">
                {service.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C84B2F]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
