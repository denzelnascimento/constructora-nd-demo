import React from 'react';
import { X, Check, ArrowUpRight, Phone, ShieldCheck } from '@phosphor-icons/react';
import { CapabilityItem, COMPANY_INFO } from '../types';
import { siteImages } from '../assets/images';

interface CapabilityDetailModalProps {
  capability: CapabilityItem | null;
  onClose: () => void;
  onRequestInquiry: (topic: string) => void;
}

export const CapabilityDetailModal: React.FC<CapabilityDetailModalProps> = ({
  capability,
  onClose,
  onRequestInquiry,
}) => {
  if (!capability) return null;

  const imageSrc = siteImages[capability.imageKey];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#181818] border border-[#272727] rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Top Image Banner */}
        <div className="relative h-48 sm:h-56 bg-[#1F1F1F] shrink-0">
          <img
            src={imageSrc}
            alt={capability.title}
            className="w-full h-full object-cover object-center filter brightness-[0.75]"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#181818]/90 text-white hover:text-[#E5A93C] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
            aria-label="Cerrar modal"
          >
            <X size={18} weight="bold" />
          </button>

          <div className="absolute bottom-4 left-6">
            <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#E5A93C] text-[#131209] rounded-md">
              Área {capability.number}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {capability.title}
            </h3>
            <p className="text-sm text-[#D1D5DB] leading-relaxed">
              {capability.description}
            </p>
          </div>

          {/* Scope Points */}
          <div className="p-5 bg-[#1F1F1F] border border-[#272727] rounded-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C] block">
              Alcances y partidas vinculadas
            </span>
            <ul className="space-y-2">
              {capability.scopePoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9B9B9B]">
                  <Check size={16} weight="bold" className="text-[#E5A93C] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verification note */}
          <div className="flex items-start gap-2.5 text-xs text-[#9B9B9B] p-3 bg-[#131209] border border-[#272727] rounded-lg">
            <ShieldCheck size={18} weight="fill" className="text-[#E5A93C] shrink-0 mt-0.5" />
            <span>
              Actividad correspondiente a categorías documentadas en registros de obra pública e infraestructura en la República de Panamá.
            </span>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#272727] flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={COMPANY_INFO.phoneTel}
              className="w-full sm:w-auto px-4 py-2.5 bg-[#272727] hover:bg-[#313131] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 border border-[#313131]"
            >
              <Phone size={15} weight="bold" className="text-[#E5A93C]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onRequestInquiry(`Consulta sobre ${capability.title}`);
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#E5A93C] hover:bg-[#F3B74E] text-[#131209] text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>Solicitar información de esta área</span>
              <ArrowUpRight size={14} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
