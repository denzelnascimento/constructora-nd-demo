import React from 'react';
import { ArrowDown, ArrowUpRight, Phone, ShieldCheck, MapPin } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../types';
import { siteImages } from '../assets/images';

interface HeroProps {
  onOpenInquiry: () => void;
  onExploreCompany: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onExploreCompany }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 lg:pt-40 pb-20 px-4 md:px-8 overflow-hidden bg-[#131209]"
    >
      {/* Background Photography with flat dark framing */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteImages.hero}
          alt="Vista aérea ilustrativa de infraestructura vial en construcción"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle dark overlay per dark color palette */}
        <div className="absolute inset-0 bg-[#131209]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Location & Entity Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181818]/90 border border-[#272727] mb-8 shadow-sm">
          <MapPin size={14} weight="fill" className="text-[#E5A93C]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-white">
            {COMPANY_INFO.locationBadge}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#272727]" />
          <span className="text-xs text-[#9B9B9B]">Actividad en Panamá</span>
        </div>

        {/* Hero Heading: Left-to-right text gradient per SKILL.md B5, max-w-[680px], meaningful line breaks */}
        <h1 className="max-w-[680px] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-[#FFFFFF] to-[#9B9B9B] bg-clip-text text-transparent leading-[1.1]">
          Construcción e infraestructura para proyectos que dejan huella.
        </h1>

        {/* Subheading: max-w-[680px] */}
        <p className="max-w-[680px] text-base sm:text-lg md:text-xl text-[#9B9B9B] font-normal leading-relaxed mb-10">
          CONSTRUCTORA ND, S.A. desarrolla y ejecuta proyectos de construcción e infraestructura en Panamá, con criterios de rigor técnico y solidez constructiva.
        </p>

        {/* Call to Actions (No competing CTAs: Primary is high contrast gold, Secondary is subtle bordered) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-6 py-3 bg-[#E5A93C] text-[#131209] text-base font-semibold rounded-full hover:bg-[#F3B74E] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E5A93C] focus:ring-offset-2 focus:ring-offset-[#131209]"
          >
            <span>Solicitar información</span>
            <ArrowUpRight size={18} weight="bold" />
          </button>

          <button
            onClick={onExploreCompany}
            className="w-full sm:w-auto px-6 py-3 bg-[#181818] border border-[#272727] text-white hover:text-[#E5A93C] hover:border-[#E5A93C]/40 text-base font-medium rounded-full active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#272727]"
          >
            <span>Conocer la empresa</span>
            <ArrowDown size={16} weight="bold" />
          </button>
        </div>

        {/* Proof Signal Bar without fake statistics */}
        <div className="w-full max-w-3xl pt-8 border-t border-[#272727]/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-start gap-3 p-3 bg-[#181818]/60 border border-[#272727] rounded-xl">
            <ShieldCheck size={20} weight="fill" className="text-[#E5A93C] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">
                Antecedentes
              </p>
              <p className="text-xs text-[#9B9B9B] mt-0.5">
                Información disponible bajo solicitud formal
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-[#181818]/60 border border-[#272727] rounded-xl">
            <MapPin size={20} weight="fill" className="text-[#E5A93C] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">
                Sede institucional
              </p>
              <p className="text-xs text-[#9B9B9B] mt-0.5">
                PH Residencial Villa España, Panamá
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-[#181818]/60 border border-[#272727] rounded-xl">
            <Phone size={20} weight="fill" className="text-[#E5A93C] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">
                Contacto directo
              </p>
              <a
                href={COMPANY_INFO.phoneTel}
                className="text-xs text-[#E5A93C] hover:underline mt-0.5 block font-semibold"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
