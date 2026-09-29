import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { INFRAESTRUCTURA_SHOWCASE } from '../data/landingData';
import { siteImages } from '../assets/images';

interface InfraestructuraProps {
  onOpenInquiry: () => void;
}

export const InfraestructuraImpacto: React.FC<InfraestructuraProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="infraestructura"
      className="py-24 px-4 md:px-8 bg-[#131209] border-b border-[#272727] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Funcionalidad y escala
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Infraestructura que responde a necesidades reales.
            </h2>
            <p className="max-w-2xl text-base text-[#9B9B9B] leading-relaxed">
              La infraestructura cobra valor cuando resuelve requerimientos comunitarios concretos de movilidad, salubridad y durabilidad bajo las condiciones del territorio panameño.
            </p>
          </div>

          <button
            onClick={onOpenInquiry}
            className="self-start md:self-end px-4 py-2 text-xs font-semibold text-[#131209] bg-[#E5A93C] hover:bg-[#F3B74E] rounded-full transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
          >
            <span>Consultar requerimientos</span>
            <ArrowUpRight size={14} weight="bold" />
          </button>
        </div>

        {/* 2x2 Showcase Grid with Real Problem / Solution framing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {INFRAESTRUCTURA_SHOWCASE.map((item, idx) => {
            const imageSrc = siteImages[item.imageKey];
            return (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-[#181818] border border-[#272727] hover:border-[#313131] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col"
              >
                {/* Photo container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#1F1F1F]">
                  <img
                    src={imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider bg-[#181818]/90 text-[#E5A93C] border border-[#272727] rounded-md backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-4">
                      {item.needSolved}
                    </p>
                  </div>

                  {/* Technical focus callout */}
                  <div className="pt-3 border-t border-[#272727] flex items-center justify-between text-xs">
                    <span className="text-[#9B9B9B]">Criterio técnico:</span>
                    <span className="font-medium text-white">{item.focus}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
