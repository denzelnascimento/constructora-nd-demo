import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, List, X, MapPin } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../types';

interface NavbarProps {
  onOpenInquiry: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Empresa', href: '#empresa', id: 'empresa' },
    { label: 'Capacidades', href: '#capacidades', id: 'capacidades' },
    { label: 'Infraestructura', href: '#infraestructura', id: 'infraestructura' },
    { label: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { label: 'Proceso', href: '#proceso', id: 'proceso' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#131209]/95 backdrop-blur-md border-b border-[#272727] shadow-xl'
          : 'bg-[#131209]/80 backdrop-blur-sm border-b border-[#272727]/60'
      }`}
    >
      {/* Top micro-bar for institutional presence on large screens */}
      <div className="hidden lg:block border-b border-[#272727]/50 bg-[#181818]/60 text-xs text-[#9B9B9B]">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} weight="fill" className="text-[#E5A93C]" />
              <span>Panamá, Provincia de Panamá · República de Panamá</span>
            </span>
            <span className="text-[#272727]">|</span>
            <span className="text-[#A1A1AA]">
              Obras civiles e infraestructura comunitaria
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#9B9B9B]">Línea directa institucional:</span>
            <a
              href={COMPANY_INFO.phoneTel}
              className="text-[#E5A93C] font-semibold hover:underline flex items-center gap-1"
            >
              <Phone size={12} weight="bold" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          {/* Logo / Brand Mark */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#E5A93C] rounded-lg p-1"
          >
            {/* Architectural Monogram Icon */}
            <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#272727] group-hover:border-[#E5A93C] flex items-center justify-center transition-colors shadow-inner">
              <div className="flex items-center gap-0.5 font-bold tracking-tighter text-sm">
                <span className="text-white">N</span>
                <span className="text-[#E5A93C]">D</span>
              </div>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col text-left">
              <span className="whitespace-nowrap text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#E5A93C] transition-colors leading-tight">
                CONSTRUCTORA ND
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-[#9B9B9B] leading-none mt-0.5">
                S.A. · Panamá
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-2 xl:px-3 py-2 text-[13px] xl:text-sm font-semibold rounded-lg transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-[#E5A93C] ${
                    isActive
                      ? 'text-white bg-[#181818]'
                      : 'text-[#9B9B9B] hover:text-white hover:bg-[#181818]/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-2 right-2 xl:left-3 xl:right-3 h-[2px] bg-[#E5A93C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Phone button */}
            <a
              href={COMPANY_INFO.phoneTel}
              className="hidden xl:flex items-center gap-2 whitespace-nowrap shrink-0 px-3 py-2 text-xs xl:text-sm font-semibold text-white/90 hover:text-[#E5A93C] bg-[#181818] hover:bg-[#272727] border border-[#272727] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
              aria-label="Llamar al teléfono público +507 204-1602"
            >
              <Phone size={16} weight="bold" className="text-[#E5A93C]" />
              <span className="hidden 2xl:inline">{COMPANY_INFO.phoneDisplay}</span>
              <span className="2xl:hidden">Llamar</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenInquiry}
              className="whitespace-nowrap shrink-0 px-4 py-2.5 bg-[#E5A93C] hover:bg-[#F3B74E] text-[#131209] text-sm font-bold rounded-lg active:scale-[0.98] transition-all flex items-center gap-1.5 shadow-md focus:outline-none focus:ring-2 focus:ring-[#E5A93C] focus:ring-offset-2 focus:ring-offset-[#131209]"
            >
              <span className="2xl:hidden">Solicitar</span>
              <span className="hidden 2xl:inline">Solicitar información</span>
              <ArrowUpRight size={16} weight="bold" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={COMPANY_INFO.phoneTel}
              className="w-10 h-10 rounded-lg bg-[#181818] border border-[#272727] text-[#E5A93C] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
              aria-label="Llamar a CONSTRUCTORA ND"
            >
              <Phone size={18} weight="bold" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-[#181818] border border-[#272727] text-white flex items-center justify-center hover:bg-[#272727] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
              aria-label={mobileMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={20} weight="bold" />
              ) : (
                <List size={20} weight="bold" />
              )}
            </button>
          </div>

          {/* Tablet Hamburger (when width between sm and lg) */}
          <div className="hidden sm:flex lg:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-2 rounded-lg bg-[#181818] border border-[#272727] text-white flex items-center gap-2 hover:bg-[#272727] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
              aria-label={mobileMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
            >
              {mobileMenuOpen ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
              <span className="text-xs font-semibold">Menú</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#181818] border-b border-[#272727] px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors text-left ${
                    isActive
                      ? 'text-white bg-[#272727]'
                      : 'text-[#9B9B9B] hover:text-white hover:bg-[#272727]/50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#272727] space-y-3">
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center justify-between w-full px-4 py-3 bg-[#131209] border border-[#272727] rounded-lg text-white font-medium hover:border-[#E5A93C] transition-colors text-xs"
            >
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-[#E5A93C]" weight="bold" />
                <span className="font-semibold">Llamar directamente</span>
              </div>
              <span className="text-[#E5A93C] font-bold">{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 px-4 bg-[#E5A93C] hover:bg-[#F3B74E] text-[#131209] font-bold text-sm rounded-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>Solicitar información</span>
              <ArrowUpRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
