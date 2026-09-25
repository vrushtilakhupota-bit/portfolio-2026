import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BEYOND_SCREENS } from '../data/portfolioData';
import { BeyondScreenItem } from '../types/portfolio';
import { Compass, Eye, X, Calendar, MapPin } from 'lucide-react';

export const BeyondScreens: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<BeyondScreenItem | null>(null);

  return (
    <section
      id="field-notes"
      className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 scroll-mt-20"
      aria-label="Beyond the Screens Field Notes"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#E8E2D9] pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C84B2F] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Observational Field Notes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
            Beyond the Screens
          </h2>
          <p className="text-base text-[#6B6760] mt-3 max-w-xl">
            How architecture, heritage, and physical spaces inform my approach to spatial hierarchy, storytelling, and pacing in digital software.
          </p>
        </div>
      </div>

      {/* Grid of Notes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {BEYOND_SCREENS.map((item, idx) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedNote(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedNote(item);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Read field note on ${item.title}`}
            className="group cursor-pointer rounded-2xl bg-[#F6F1EA] border border-[#E7E0D5] p-5 sm:p-6 transition-all duration-300 hover:border-[#D5CCC0] hover:shadow-[0_8px_30px_-8px_rgba(20,20,19,0.06)] flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C84B2F]"
          >
            <div>
              {/* Photo Container */}
              <div className="overflow-hidden rounded-xl bg-[#E2D9CC] aspect-[4/3] mb-5 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#141413]/80 text-[#FAF7F3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Date & Tag */}
              <div className="flex items-center gap-2 text-xs text-[#8A857D] font-medium mb-2">
                <span>{item.date}</span>
                <span aria-hidden="true">·</span>
                <span>{item.tag}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold tracking-tight text-[#141413] mb-2.5 group-hover:text-[#C84B2F] transition-colors">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-sm text-[#55514B] leading-relaxed line-clamp-3 mb-6">
                {item.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E0D2] flex items-center justify-between text-xs font-semibold text-[#141413] group-hover:text-[#C84B2F]">
              <span>Read Reflection</span>
              <span className="text-[#8A857D] font-normal">{item.location}</span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Field Note Modal / Lightbox */}
      <AnimatePresence>
        {selectedNote && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#141413]/70 backdrop-blur-sm"
            onClick={() => setSelectedNote(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#FAF7F3] rounded-2xl border border-[#E8E2D9] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/9] w-full bg-[#E2D9CC] overflow-hidden shrink-0">
                <img
                  src={selectedNote.image}
                  alt={selectedNote.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedNote(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#141413]/80 text-[#FAF7F3] flex items-center justify-center hover:bg-[#141413] transition-colors focus:outline-none"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Note Content */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#8A857D] font-medium mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C84B2F]" />
                    {selectedNote.date}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C84B2F]" />
                    {selectedNote.location}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#C84B2F] font-semibold">{selectedNote.tag}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141413] mb-4">
                  {selectedNote.title}
                </h3>

                <p className="text-base text-[#423F3A] leading-relaxed mb-6 font-medium">
                  {selectedNote.summary}
                </p>

                <div className="p-5 rounded-xl bg-[#F5EFE6] border-l-2 border-[#C84B2F] text-sm text-[#4D4943] leading-relaxed space-y-2">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#8A857D]">
                    UX Takeaway & Spatial Insight
                  </span>
                  <p>{selectedNote.reflection}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
