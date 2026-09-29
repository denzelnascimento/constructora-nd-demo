import React, { useState } from 'react';
import { FileText, ShieldCheck, MagnifyingGlass, ArrowUpRight, CheckCircle, Info } from '@phosphor-icons/react';

interface ProyectosTrayectoriaProps {
  onOpenInquiry: (subject?: string) => void;
}

export const ProyectosTrayectoria: React.FC<ProyectosTrayectoriaProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas las áreas' },
    { id: 'obras-civiles', label: 'Obras civiles' },
    { id: 'comunitaria', label: 'Infraestructura comunitaria' },
    { id: 'acueductos', label: 'Acueductos' },
    { id: 'iluminacion', label: 'Iluminación pública' },
  ];

  // Documented framework categories according to public record structure
  const registryCategories = [
    {
      code: 'ACT-01',
      tab: 'obras-civiles',
      category: 'Obras civiles e ingeniería',
      scope: 'Construcción y adecuación estructural de obras civiles, contenciones y pavimentos.',
      verificationNote: 'Consulte por alcances y proyectos específicos.'
    },
    {
      code: 'ACT-02',
      tab: 'comunitaria',
      category: 'Infraestructura comunitaria',
      scope: 'Intervenciones en espacios de beneficio social, facilidades públicas y recreativas.',
      verificationNote: 'Consulte por alcances y proyectos específicos.'
    },
    {
      code: 'ACT-03',
      tab: 'acueductos',
      category: 'Sistemas de acueductos y saneamiento',
      scope: 'Tendido de líneas principales de conducción, distribución de agua y pruebas de presión.',
      verificationNote: 'Consulte por alcances y proyectos específicos.'
    },
    {
      code: 'ACT-04',
      tab: 'iluminacion',
      category: 'Iluminación pública y tendido eléctrico',
      scope: 'Postes, canalizaciones y montaje de luminarias para iluminación de vías públicas.',
      verificationNote: 'Consulte por alcances y proyectos específicos.'
    }
  ];

  return (
    <section
      id="proyectos"
      className="py-24 px-4 md:px-8 bg-[#181818] border-b border-[#272727] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Áreas de actuación
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Proyectos y áreas de experiencia.
            </h2>
            <p className="max-w-2xl text-base text-[#9B9B9B] leading-relaxed">
              Áreas en las que CONSTRUCTORA ND, S.A. desarrolla actividades de construcción e infraestructura. Consulte por antecedentes y alcances específicos.
            </p>
          </div>

          <div className="flex items-center gap-2 p-3 bg-[#1F1F1F] border border-[#272727] rounded-xl text-xs text-[#9B9B9B]">
            <ShieldCheck size={20} weight="fill" className="text-[#E5A93C] shrink-0" />
            <span>Antecedentes disponibles bajo solicitud formal</span>
          </div>
        </div>

        {/* Transparency Protocol Banner */}
        <div className="mb-10 p-6 bg-[#131209] border border-[#272727] rounded-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Info size={22} weight="fill" className="text-[#E5A93C] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white mb-1">
                  Información de antecedentes
                </h3>
                <p className="text-xs text-[#9B9B9B] leading-relaxed max-w-3xl">
                  Las referencias de obras, contratos y entidades se facilitan bajo solicitud formal, con la documentación de respaldo correspondiente.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('Solicitud de expediente técnico')}
              className="shrink-0 px-4 py-2 bg-[#272727] hover:bg-[#313131] text-white text-xs font-semibold rounded-lg transition-colors border border-[#313131] flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
            >
              <FileText size={15} weight="bold" className="text-[#E5A93C]" />
              <span>Solicitar expediente de obra</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E5A93C] ${
                activeTab === cat.id
                  ? 'bg-[#E5A93C] text-[#131209] shadow-md'
                  : 'bg-[#1F1F1F] text-[#9B9B9B] hover:text-white border border-[#272727]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Structured Framework Layout for Documented Records */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {registryCategories.filter((r) => activeTab === 'todos' || r.tab === activeTab).map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#1F1F1F] border border-[#272727] rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#313131] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 bg-[#272727] text-[#E5A93C] rounded">
                    {item.code}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#9B9B9B]">
                    <CheckCircle size={14} weight="fill" className="text-[#E5A93C]" />
                    Área de actuación
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {item.category}
                </h4>
                <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed mb-4">
                  {item.scope}
                </p>

                {/* Audit Fields Architecture (Ready for direct official contract values) */}
                <div className="p-3 bg-[#181818] border border-[#272727] rounded-xl space-y-1.5 text-xs">
                  <div className="flex justify-between text-[#9B9B9B]">
                    <span>Ámbito geográfico:</span>
                    <span className="text-white font-medium">Panamá</span>
                  </div>
                  <div className="flex justify-between text-[#9B9B9B]">
                    <span>Sector:</span>
                    <span className="text-[#E5A93C] font-semibold">Construcción e infraestructura</span>
                  </div>
                  <div className="flex justify-between text-[#9B9B9B]">
                    <span>Consulta documental:</span>
                    <span className="text-white font-medium">Disponible bajo solicitud formal</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#272727] flex items-center justify-between">
                <span className="text-xs text-[#9B9B9B]">{item.verificationNote}</span>
                <button
                  onClick={() => onOpenInquiry(`Consulta sobre ${item.category}`)}
                  className="px-3 py-1.5 bg-[#272727] hover:bg-[#E5A93C] hover:text-[#131209] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Consultar</span>
                  <ArrowUpRight size={13} weight="bold" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Public Registry Consultation Guide */}
        <div className="mt-12 p-6 bg-[#181818] border border-[#272727] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#272727] flex items-center justify-center text-[#E5A93C] shrink-0">
              <MagnifyingGlass size={24} weight="bold" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                ¿Requiere verificar antecedentes para una licitación o contrato?
              </h4>
              <p className="text-xs text-[#9B9B9B] leading-relaxed max-w-2xl">
                Ponemos a disposición de entidades gubernamentales, promotores y fiscalizadores la información complementaria requerida sobre actuaciones previas de CONSTRUCTORA ND, S.A.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry('Requerimiento de documentación oficial')}
            className="w-full md:w-auto px-5 py-2.5 bg-[#E5A93C] text-[#131209] text-xs font-bold rounded-lg hover:bg-[#F3B74E] transition-all flex items-center justify-center gap-2 shrink-0"
          >
            <span>Contactar oficina técnica</span>
            <ArrowUpRight size={14} weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};
