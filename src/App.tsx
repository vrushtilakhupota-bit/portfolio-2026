import React, { useState, useEffect } from 'react';
import { Project } from './types/portfolio';
import { PROJECTS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { DesignProcess } from './components/DesignProcess';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { BeyondScreens } from './components/BeyondScreens';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Handle URL hashes for direct project linking
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const foundProject = PROJECTS.find(
        (p) => p.id === hash || hash.includes(p.id)
      );
      if (foundProject) {
        setSelectedProject(foundProject);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['hero', 'work', 'process', 'services', 'about', 'field-notes', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    window.history.replaceState(null, '', `#${project.id}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.history.replaceState(null, '', '#work');
  };

  const handleContactClick = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F3] text-[#141413] flex flex-col selection:bg-[#E8DCC4] selection:text-[#141413]">
      {/* Subtle Custom Cursor for desktop fine pointers */}
      <CustomCursor />

      {/* Sticky Clean Navigation */}
      <Navbar
        onContactClick={handleContactClick}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <Hero
          onExploreWork={handleExploreWork}
          onContactClick={handleContactClick}
        />

        <ProjectsSection
          onSelectProject={handleOpenProject}
        />

        <DesignProcess />

        <ServicesSection />

        <AboutSection />

        <BeyondScreens />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Comprehensive Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={handleCloseProject}
          onSelectProject={handleOpenProject}
        />
      )}
    </div>
  );
}
