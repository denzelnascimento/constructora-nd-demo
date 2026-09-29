import React, { useState } from 'react';
import { ArrowUpRight, Check, CaretRight } from '@phosphor-icons/react';
import { CAPABILITIES_DATA } from '../data/landingData';
import { CapabilityItem } from '../types';

interface CapacidadesProps {
  onSelectCapability: (capability: CapabilityItem) => void;
}

export const Capacidades: React.FC<CapacidadesProps> = ({ onSelectCapability }) => {
  const [selectedId, setSelectedId] = useState<string>(CAPABILITIES_DATA[0].id);

  return (
    <section
      id="capacidades"
      className="py-24 px-4 md:px-8 bg-[#181818] border-b border-[#272727] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Áreas documentadas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Capacidades para distintos tipos de obra.
            </h2>
            <p className="max-w-2xl text-base text-[#9B9B9B] leading-relaxed">
              Áreas de actuación documentadas con base en registros públicos y antecedentes constructivos de la empresa en Panamá.
            </p>
          </div>

          <div className="p-3 bg-[#1F1F1F] border border-[#272727] rounded-xl max-w-sm">
            <p className="text-xs text-[#9B9B9B] leading-snug">
              <span className="font-semibold text-white">Nota aclaratoria:</span> Estas categorías corresponden a áreas documentadas según la información disponible y registros públicos verificables.
            </p>
          </div>
        </div>

        {/* 6 Cards Grid (2 cols on tablet, 3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES_DATA.map((item) => {
            const isHovered = selectedId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedId(item.id)}
                className={`flex flex-col justify-between p-6 rounded-2xl bg-[#1F1F1F] border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  isHovered
                    ? 'border-[#E5A93C] shadow-lg shadow-black/40 translate-y-[-2px]'
                    : 'border-[#272727] hover:border-[#313131]'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Category Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#E5A93C] bg-[#272727] px-2.5 py-1 rounded-md">
                      {item.number}
                    </span>
                    <button
                      onClick={() => onSelectCapability(item)}
                      className="w-8 h-8 rounded-full bg-[#272727] text-white hover:text-[#E5A93C] hover:bg-[#313131] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                      aria-label={`Ver detalles de ${item.title}`}
                    >
                      <ArrowUpRight size={16} weight="bold" />
                    </button>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9B9B9B] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Documented Scope Items */}
                  <div className="space-y-2 pt-4 border-t border-[#272727]">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#D1D5DB] block">
                      Alcances representativos:
                    </span>
                    <ul className="space-y-1.5">
                      {item.scopePoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#9B9B9B]">
                          <Check size={14} weight="bold" className="text-[#E5A93C] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-[#272727]">
                  <button
                    onClick={() => onSelectCapability(item)}
                    className="w-full py-2 px-3 text-xs font-semibold text-white bg-[#272727] hover:bg-[#E5A93C] hover:text-[#131209] rounded-lg transition-all duration-300 flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                  >
                    <span>Consultar requerimiento de esta área</span>
                    <CaretRight size={14} weight="bold" className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
