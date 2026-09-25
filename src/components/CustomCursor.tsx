import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'project' | 'text'>('default');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid, premium lag-free movement
  const springX = useSpring(mouseX, { damping: 28, stiffness: 450 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 450 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const interactive = target.closest('button, a, input, textarea, [role="button"], [data-cursor="pointer"]');

      if (projectCard) {
        setCursorType('project');
      } else if (interactive) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer subtle following ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorType === 'project' ? 84 : cursorType === 'pointer' ? 44 : 26,
          height: cursorType === 'project' ? 84 : cursorType === 'pointer' ? 44 : 26,
          backgroundColor:
            cursorType === 'project'
              ? 'rgba(20, 20, 19, 0.92)'
              : cursorType === 'pointer'
              ? 'rgba(200, 75, 47, 0.12)'
              : 'rgba(20, 20, 19, 0.04)',
          borderColor:
            cursorType === 'project'
              ? 'transparent'
              : cursorType === 'pointer'
              ? 'rgba(200, 75, 47, 0.4)'
              : 'rgba(20, 20, 19, 0.22)',
          borderWidth: cursorType === 'project' ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
      >
        {cursorType === 'project' && (
          <span className="text-[11px] font-medium tracking-wider uppercase text-[#FAF7F3] select-none">
            View
          </span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: cursorType === 'project' ? 0 : 1,
          scale: cursorType === 'pointer' ? 1.4 : 1,
          backgroundColor: cursorType === 'pointer' ? '#C84B2F' : '#141413',
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};
