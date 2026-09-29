import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TaglineReveal } from './components/TaglineReveal';
import { Empresa } from './components/Empresa';
import { Capacidades } from './components/Capacidades';
import { InfraestructuraImpacto } from './components/InfraestructuraImpacto';
import { ProyectosTrayectoria } from './components/ProyectosTrayectoria';
import { Proceso } from './components/Proceso';
import { EvidenciaConfianza } from './components/EvidenciaConfianza';
import { FAQ } from './components/FAQ';
import { Contacto } from './components/Contacto';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { CapabilityDetailModal } from './components/CapabilityDetailModal';
import { LegalModal } from './components/LegalModals';
import { CapabilityItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [inquiryInitialTopic, setInquiryInitialTopic] = useState<string>('Obras civiles');
  const [selectedCapability, setSelectedCapability] = useState<CapabilityItem | null>(null);
  const [legalModalState, setLegalModalState] = useState<{
    isOpen: boolean;
    type: 'privacy' | 'terms';
  }>({
    isOpen: false,
    type: 'privacy',
  });

  // Track active section for fluid island navbar highlighting
  useEffect(() => {
    const sectionIds = [
      'inicio',
      'empresa',
      'capacidades',
      'infraestructura',
      'proyectos',
      'proceso',
      'experiencia',
      'faq',
      'contacto',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleOpenInquiry = (topic?: string) => {
    if (topic) {
      setInquiryInitialTopic(topic);
    }
    setInquiryModalOpen(true);
  };

  const handleExploreCompany = () => {
    const el = document.getElementById('empresa');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#131209] text-[#F3F4F6] selection:bg-[#E5A93C] selection:text-[#131209] relative">
      {/* Keyboard Accessibility: Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E5A93C] focus:text-[#131209] focus:font-bold focus:rounded-md focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      {/* Floating Island Navbar */}
      <Navbar
        onOpenInquiry={() => handleOpenInquiry('Consulta general de proyectos')}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry('Requerimiento de proyecto')}
          onExploreCompany={handleExploreCompany}
        />

        {/* 2. Mandatory Tagline Reveal Section per SKILL.md B11 */}
        <TaglineReveal />

        {/* 3. Empresa Section */}
        <Empresa
          onOpenInquiry={() => handleOpenInquiry('Consulta institucional')}
        />

        {/* 4. Capacidades Section */}
        <Capacidades
          onSelectCapability={(cap) => setSelectedCapability(cap)}
        />

        {/* 5. Infraestructura y Necesidades Reales */}
        <InfraestructuraImpacto
          onOpenInquiry={() => handleOpenInquiry('Consulta sobre infraestructura')}
        />

        {/* 6. Proyectos y Trayectoria Documentada */}
        <ProyectosTrayectoria
          onOpenInquiry={(subject) => handleOpenInquiry(subject || 'Consulta de proyectos documentados')}
        />

        {/* 7. Proceso de Trabajo */}
        <Proceso />

        {/* 8. Evidencia y Confianza Institucional */}
        <EvidenciaConfianza
          onOpenInquiry={(topic) => handleOpenInquiry(topic || 'Consulta sobre antecedentes de obra')}
        />

        {/* 9. FAQ Section */}
        <FAQ
          onOpenInquiry={() => handleOpenInquiry('Consulta específica')}
        />

        {/* 10. Contacto Section */}
        <Contacto />

        {/* 11. Final CTA */}
        <FinalCTA
          onOpenInquiry={() => handleOpenInquiry('Nuevo proyecto de construcción')}
        />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalState({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModalState({ isOpen: true, type: 'terms' })}
      />

      {/* Modals & Dialogs */}
      <QuickInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialTopic={inquiryInitialTopic}
      />

      <CapabilityDetailModal
        capability={selectedCapability}
        onClose={() => setSelectedCapability(null)}
        onRequestInquiry={(topic) => handleOpenInquiry(topic)}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        onClose={() => setLegalModalState({ ...legalModalState, isOpen: false })}
        type={legalModalState.type}
      />
    </div>
  );
}
