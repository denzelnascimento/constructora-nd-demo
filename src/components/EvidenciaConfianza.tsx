import React from 'react';
import { ShieldCheck, Files, CheckSquare, Phone, ArrowUpRight } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../types';

interface EvidenciaConfianzaProps {
  onOpenInquiry: (topic?: string) => void;
}

export const EvidenciaConfianza: React.FC<EvidenciaConfianzaProps> = ({ onOpenInquiry }) => {
  const auditPoints = [
    {
      title: 'Transparencia en contrataciones',
      desc: 'Las actuaciones en obras públicas y contratos civiles se sujetan a los procedimientos de consulta pública vigentes en Panamá.'
    },
    {
      title: 'Registro de información técnica',
      desc: 'La empresa cuenta con documentación de soporte para especificaciones, inspección técnica y formalización de entregas.'
    },
    {
      title: 'Validación institucional',
      desc: 'Atendemos requerimientos de verificación de proponentes, contratistas principales y entidades auditoras.'
    },
    {
      title: 'Atención personalizada directa',
      desc: 'Canal de comunicación abierto para coordinar visitas técnicas, aclaraciones de pliegos y solicitudes de información.'
    }
  ];

  return (
    <section
      id="experiencia"
      className="py-24 px-4 md:px-8 bg-[#181818] border-b border-[#272727] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Trust Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Credibilidad y respaldo
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Experiencia que se puede consultar.
            </h2>

            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
              Los antecedentes de CONSTRUCTORA ND, S.A. en proyectos de construcción e infraestructura pueden consultarse con la documentación de respaldo correspondiente.
            </p>

            <p className="text-xs sm:text-sm text-[#9B9B9B] leading-relaxed">
              La solidez institucional se fundamenta en hechos comprobables, apego a los compromisos de entrega y claridad contractual frente a clientes y administraciones públicas.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onOpenInquiry('Verificación de antecedentes')}
                className="px-5 py-2.5 bg-[#E5A93C] text-[#131209] text-xs font-bold rounded-lg hover:bg-[#F3B74E] transition-all flex items-center justify-center gap-2"
              >
                <span>Solicitar verificación técnica</span>
                <ArrowUpRight size={14} weight="bold" />
              </button>

              <a
                href={COMPANY_INFO.phoneTel}
                className="px-5 py-2.5 bg-[#272727] text-white hover:text-[#E5A93C] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 border border-[#313131]"
              >
                <Phone size={14} weight="bold" className="text-[#E5A93C]" />
                <span>Llamar al {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Transparent Verification Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 bg-[#1F1F1F] border border-[#272727] rounded-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#272727] pb-4">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={24} weight="fill" className="text-[#E5A93C]" />
                  <span className="text-sm font-bold text-white">
                    Protocolo de verificación documental
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 bg-[#272727] text-[#9B9B9B] rounded-full">
                  Panamá
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {auditPoints.map((point, idx) => (
                  <div key={idx} className="p-4 bg-[#181818] border border-[#272727] rounded-xl space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckSquare size={16} weight="fill" className="text-[#E5A93C]" />
                      <h4 className="text-xs font-bold text-white">
                        {point.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#9B9B9B] leading-snug">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Consultation Framework Note */}
              <div className="p-4 bg-[#131209] border border-[#272727] rounded-xl flex items-start gap-3">
                <Files size={20} weight="fill" className="text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white font-semibold mb-0.5">
                    Acceso a expedientes de obra
                  </p>
                  <p className="text-xs text-[#9B9B9B] leading-snug">
                    Para requerimientos de homologación o acreditación de experiencia previa, remitimos la constancia correspondiente previa solicitud formal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
