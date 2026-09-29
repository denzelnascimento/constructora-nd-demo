import React from 'react';
import { Buildings, MapPin, Phone, ShieldCheck, CheckCircle } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../types';
import { siteImages } from '../assets/images';

interface EmpresaProps {
  onOpenInquiry: () => void;
}

export const Empresa: React.FC<EmpresaProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="empresa"
      className="py-24 px-4 md:px-8 bg-[#131209] border-b border-[#272727] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Institucional
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Una empresa orientada a la ejecución.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-[#9B9B9B] leading-relaxed">
            CONSTRUCTORA ND, S.A. desarrolla y ejecuta actividades de construcción e infraestructura en la República de Panamá, con capacidad para articular proyectos civiles, comunitarios e hídricos.
          </p>
        </div>

        {/* Two Column Layout: Verified Facts & Editorial Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Documentary Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 bg-[#181818] border border-[#272727] rounded-2xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#272727] flex items-center justify-center text-[#E5A93C]">
                  <Buildings size={22} weight="bold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs text-[#9B9B9B]">
                    Sociedad mercantil inscrita en la República de Panamá
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#D1D5DB] leading-relaxed">
                La organización concentra su actividad en obras civiles, infraestructura comunitaria, redes de acueductos, tendidos de iluminación pública y proyectos constructivos afines.
              </p>

              {/* Verified Points */}
              <div className="pt-2 space-y-2.5 border-t border-[#272727]">
                <div className="flex items-center gap-2 text-xs text-[#9B9B9B]">
                  <CheckCircle size={16} weight="fill" className="text-[#E5A93C] shrink-0" />
                  <span>Enfoque en obra civil, infraestructura hídrica y comunitaria</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9B9B9B]">
                  <CheckCircle size={16} weight="fill" className="text-[#E5A93C] shrink-0" />
                  <span>Coordinación de obra con supervisión técnica en campo</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9B9B9B]">
                  <CheckCircle size={16} weight="fill" className="text-[#E5A93C] shrink-0" />
                  <span>Atención técnica directa para entidades y proponentes</span>
                </div>
              </div>
            </div>

            {/* Official Identification & Physical Location Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#181818] border border-[#272727] rounded-xl flex items-start gap-3">
                <MapPin size={20} weight="fill" className="text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-semibold tracking-wider text-white">
                    Ubicación oficial
                  </p>
                  <p className="text-xs text-[#9B9B9B] mt-1 leading-snug">
                    {COMPANY_INFO.addressLine1}
                  </p>
                  <p className="text-xs text-[#9B9B9B]">
                    {COMPANY_INFO.addressLine2}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-[#181818] border border-[#272727] rounded-xl flex items-start gap-3">
                <Phone size={20} weight="fill" className="text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase font-semibold tracking-wider text-white">
                    Línea institucional
                  </p>
                  <a
                    href={COMPANY_INFO.phoneTel}
                    className="text-sm font-semibold text-[#E5A93C] hover:underline mt-1 block"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                  <p className="text-xs text-[#9B9B9B]">
                    Atención a proyectos y consultas
                  </p>
                </div>
              </div>
            </div>

            {/* Verification Note */}
            <div className="p-4 bg-[#1F1F1F]/60 border border-[#272727] rounded-xl flex items-center gap-3">
              <ShieldCheck size={24} weight="fill" className="text-[#E5A93C] shrink-0" />
              <p className="text-xs text-[#9B9B9B] leading-relaxed">
                <span className="font-semibold text-white">Transparencia:</span> la información de antecedentes se entrega con documentación de respaldo, previa solicitud formal.
              </p>
            </div>
          </div>

          {/* Right Column: Execution Imagery and Detail */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#272727] bg-[#181818]">
              <img
                src={siteImages.ejecucion}
                alt="Imagen ilustrativa de ejecución de obra"
                className="w-full h-[420px] object-cover object-center filter brightness-[0.85] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80" />
              <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] rounded bg-black/60 text-[#D1D5DB]">Imagen ilustrativa</span>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#131209] bg-[#E5A93C] rounded-md">
                  Capacidad operativa
                </span>
                <h4 className="text-xl font-bold text-white">
                  Coordinación técnica y control en campo
                </h4>
                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  Supervisión directa de partidas constructivas, cumplimiento de tolerancias estructurales y cronogramas de obra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
