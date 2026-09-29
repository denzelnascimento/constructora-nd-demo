import { submitInquiry, IS_DEMO_FORM } from '../lib/submitInquiry';
import React, { useState } from 'react';
import { Phone, MapPin, ArrowUpRight, CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { COMPANY_INFO, InquiryFormData } from '../types';

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    tipoProyecto: 'Obras civiles',
    ubicacionProyecto: '',
    descripcionProyecto: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const projectTypes = [
    'Obras civiles',
    'Infraestructura comunitaria',
    'Acueductos y saneamiento',
    'Iluminación pública',
    'Construcción y edificaciones',
    'Otros proyectos de infraestructura',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) {
      setStatus('error');
      setErrorMessage('Por favor ingrese su nombre completo.');
      return;
    }

    if (!formData.telefono.trim()) {
      setStatus('error');
      setErrorMessage('Por favor ingrese un número de teléfono de contacto.');
      return;
    }

    if (!formData.correo.trim() || !formData.correo.includes('@')) {
      setStatus('error');
      setErrorMessage('Por favor ingrese una dirección de correo electrónico válida.');
      return;
    }

    if (!formData.descripcionProyecto.trim()) {
      setStatus('error');
      setErrorMessage('Por favor describa brevemente el requerimiento de su obra.');
      return;
    }

    setStatus('submitting');

    submitInquiry(formData).then((res) => {
      if (!res.ok) {
        setStatus('error');
        setErrorMessage('No se pudo enviar la consulta. Inténtelo de nuevo o llame al ' + COMPANY_INFO.phoneDisplay + '.');
        return;
      }
      setStatus('success');
      setFormData({
        nombre: '',
        empresa: '',
        telefono: '',
        correo: '',
        tipoProyecto: 'Obras civiles',
        ubicacionProyecto: '',
        descripcionProyecto: '',
      });
    });
  };

  return (
    <section
      id="contacto"
      className="py-24 px-4 md:px-8 bg-[#181818] border-b border-[#272727] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Verified Physical Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
              <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                Atención directa
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Conversemos sobre su próximo proyecto.
            </h2>

            <p className="text-sm sm:text-base text-[#9B9B9B] leading-relaxed">
              Cuéntenos brevemente qué necesita y nos pondremos en contacto con usted para evaluar los requerimientos técnicos de su obra.
            </p>

            {/* Direct Phone Callout Box */}
            <div className="p-6 bg-[#1F1F1F] border border-[#272727] rounded-2xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#272727] flex items-center justify-center text-[#E5A93C]">
                  <Phone size={22} weight="bold" />
                </div>
                <div>
                  <span className="text-xs text-[#9B9B9B] uppercase font-semibold tracking-wider">
                    Línea telefónica pública
                  </span>
                  <a
                    href={COMPANY_INFO.phoneTel}
                    className="text-lg font-bold text-[#E5A93C] hover:underline block"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#9B9B9B]">
                Comuníquese directamente para consultas de obras o requerimientos institucionales.
              </p>
            </div>

            {/* Physical Address Box (Strictly per prompt instructions) */}
            <div className="p-6 bg-[#1F1F1F] border border-[#272727] rounded-2xl space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#272727] flex items-center justify-center text-[#E5A93C] shrink-0 mt-0.5">
                  <MapPin size={22} weight="bold" />
                </div>
                <div>
                  <span className="text-xs text-[#9B9B9B] uppercase font-semibold tracking-wider">
                    Sede de la empresa
                  </span>
                  <p className="text-sm font-bold text-white mt-1">
                    {COMPANY_INFO.addressLine1}
                  </p>
                  <p className="text-xs text-[#9B9B9B]">
                    {COMPANY_INFO.addressLine2}
                  </p>
                </div>
              </div>
            </div>

            {/* Response notice */}
            <div className="p-4 bg-[#131209] border border-[#272727] rounded-xl text-xs text-[#9B9B9B]">
              <span className="text-white font-semibold block mb-0.5">Atención profesional en Panamá</span>
              Toda comunicación es tratada con estricta reserva y seriedad institucional.
            </div>
          </div>

          {/* Right Column: Institutional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-[#1F1F1F] border border-[#272727] rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Formulario institucional de consulta
              </h3>
              <p className="text-xs text-[#9B9B9B] mb-6">
                Complete los datos para recibir atención técnica formal sobre su proyecto.
              </p>

              {status === 'success' ? (
                <div className="p-8 bg-[#181818] border border-[#272727] rounded-xl text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#272727] text-[#E5A93C] flex items-center justify-center mx-auto">
                    <CheckCircle size={28} weight="fill" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Solicitud recibida correctamente
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9B9B9B] leading-relaxed max-w-md mx-auto">
                    Hemos registrado su consulta. Un encargado técnico se pondrá en contacto al teléfono o correo suministrado.
                  </p>
                  {IS_DEMO_FORM && (
                <p className="text-[11px] text-[#666666]">Versión de demostración: el envío es simulado.</p>
              )}

                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 bg-[#272727] text-white text-xs font-semibold rounded-lg hover:bg-[#313131]"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 bg-[#311] border border-red-800 text-red-300 rounded-lg text-xs flex items-center gap-2">
                      <WarningCircle size={16} weight="bold" className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Ing. Carlos Méndez"
                        className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                        Empresa o entidad
                      </label>
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        placeholder="Entidad contratante o proponente"
                        className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                        Teléfono de contacto *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+507 6000-0000"
                        className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C] focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        name="correo"
                        required
                        value={formData.correo}
                        onChange={handleChange}
                        placeholder="contacto@organizacion.com"
                        className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                        Tipo de proyecto *
                      </label>
                      <select
                        name="tipoProyecto"
                        value={formData.tipoProyecto}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#272727] rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E5A93C] focus:border-transparent transition-all"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#181818] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                        Ubicación del proyecto
                      </label>
                      <input
                        type="text"
                        name="ubicacionProyecto"
                        value={formData.ubicacionProyecto}
                        onChange={handleChange}
                        placeholder="Distrito, corregimiento o provincia"
                        className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1.5">
                      Descripción del proyecto *
                    </label>
                    <textarea
                      name="descripcionProyecto"
                      required
                      rows={3}
                      value={formData.descripcionProyecto}
                      onChange={handleChange}
                      placeholder="Describa el alcance de la obra, etapas requeridas o plazos de ejecución estimados..."
                      className="w-full px-3.5 py-2.5 bg-[#181818] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3 px-4 bg-[#E5A93C] text-[#131209] text-base font-semibold rounded-lg hover:bg-[#F3B74E] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                    >
                      {status === 'submitting' ? (
                        <span>Procesando consulta...</span>
                      ) : (
                        <>
                          <span>Solicitar información</span>
                          <ArrowUpRight size={18} weight="bold" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-[#9B9B9B] pt-2">
                    Sus datos se emplearán exclusivamente para responder al requerimiento de su proyecto.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
