import React from 'react';
import { PROCESS_STAGES } from '../data/landingData';

export const Proceso: React.FC = () => {
  return (
    <section
      id="proceso"
      className="py-24 px-4 md:px-8 bg-[#131209] border-b border-[#272727] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Metodología de trabajo
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            De la planificación a la ejecución.
          </h2>
          <p className="max-w-2xl text-base text-[#9B9B9B] leading-relaxed">
            Estructura operativa para el desarrollo ordenado de proyectos de infraestructura y construcción, garantizando control técnico y seguimiento en cada fase.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative p-6 bg-[#181818] border border-[#272727] rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#E5A93C]/50 transition-colors"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#E5A93C] px-2 py-0.5 bg-[#272727] rounded">
                    {stage.step}
                  </span>
                  <span className="text-xs font-medium text-[#9B9B9B]">
                    {stage.phase}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {stage.title}
                </h3>
                <p className="text-xs text-[#9B9B9B] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Deliverable footnote */}
              <div className="pt-4 border-t border-[#272727]">
                <span className="text-xs font-semibold text-white block mb-0.5">
                  Resultado de fase:
                </span>
                <span className="text-xs text-[#9B9B9B] leading-snug block">
                  {stage.deliverables}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-8 p-4 bg-[#181818]/60 border border-[#272727] rounded-xl text-center">
          <p className="text-xs text-[#9B9B9B]">
            Esta secuencia constituye una estructura metodológica de trabajo para comunicar el proceso operativo y se adapta a las condiciones particulares de cada pliego o contrato.
          </p>
        </div>
      </div>
    </section>
  );
};
