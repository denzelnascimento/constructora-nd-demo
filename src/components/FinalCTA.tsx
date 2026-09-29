import React from 'react';
import { ArrowUpRight, Phone, ShieldCheck } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../types';

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#131209] border-b border-[#272727] overflow-hidden text-center relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Pill marker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#272727] mb-6">
          <ShieldCheck size={14} weight="fill" className="text-[#E5A93C]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-white">
            Atención a licitaciones y proyectos
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 leading-tight max-w-[680px]">
          ¿Tiene un proyecto de construcción o infraestructura?
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-[#9B9B9B] max-w-[560px] leading-relaxed mb-10">
          Conversemos sobre las necesidades de su proyecto y coordinemos una evaluación técnica adecuada.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-6 py-3 bg-[#E5A93C] text-[#131209] text-base font-semibold rounded-full hover:bg-[#F3B74E] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
          >
            <span>Solicitar información</span>
            <ArrowUpRight size={18} weight="bold" />
          </button>

          <a
            href={COMPANY_INFO.phoneTel}
            className="w-full sm:w-auto px-6 py-3 bg-[#181818] border border-[#272727] text-white hover:text-[#E5A93C] text-base font-medium rounded-full active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#272727]"
          >
            <Phone size={18} weight="bold" className="text-[#E5A93C]" />
            <span>Llamar al {COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>

        <p className="mt-8 text-xs text-[#9B9B9B]">
          Panamá, República de Panamá | Atención técnica institucional
        </p>
      </div>
    </section>
  );
};
