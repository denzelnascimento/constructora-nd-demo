import { submitInquiry, IS_DEMO_FORM } from '../lib/submitInquiry';
import React, { useState, useEffect } from 'react';
import { X, Phone, ArrowUpRight, CheckCircle, WarningCircle } from '@phosphor-icons/react';
import { COMPANY_INFO, InquiryFormData } from '../types';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({
  isOpen,
  onClose,
  initialTopic,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    tipoProyecto: initialTopic || 'Obras civiles',
    ubicacionProyecto: '',
    descripcionProyecto: '',
  });

  useEffect(() => {
    if (initialTopic) {
      setFormData((prev) => ({ ...prev, tipoProyecto: initialTopic }));
    }
  }, [initialTopic]);

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const projectTypes = [
    'Obras civiles',
    'Infraestructura comunitaria',
    'Acueductos',
    'Iluminación pública',
    'Construcción',
    'Otros proyectos de infraestructura',
    'Solicitud de expediente técnico',
    'Consulta institucional',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) {
      setStatus('error');
      setErrorMessage('Por favor ingrese su nombre.');
      return;
    }
    if (!formData.telefono.trim()) {
      setStatus('error');
      setErrorMessage('Por favor ingrese su teléfono de contacto.');
      return;
    }
    if (!formData.correo.trim() || !formData.correo.includes('@')) {
      setStatus('error');
      setErrorMessage('Por favor ingrese un correo electrónico válido.');
      return;
    }
    if (!formData.descripcionProyecto.trim()) {
      setStatus('error');
      setErrorMessage('Por favor detalle brevemente el proyecto.');
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
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#181818] border border-[#272727] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#272727] text-white hover:text-[#E5A93C] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
          aria-label="Cerrar modal"
        >
          <X size={18} weight="bold" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Atención directa
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white">
            Solicitar información de obra
          </h3>
          <p className="text-xs text-[#9B9B9B] mt-1">
            CONSTRUCTORA ND, S.A. | Panamá
          </p>
        </div>

        {status === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#272727] text-[#E5A93C] flex items-center justify-center mx-auto">
              <CheckCircle size={32} weight="fill" />
            </div>
            <h4 className="text-lg font-bold text-white">
              Solicitud remitida con éxito
            </h4>
            <p className="text-xs sm:text-sm text-[#9B9B9B] max-w-md mx-auto">
              Su requerimiento ha sido registrado en nuestro sistema. Nos comunicaremos a la brevedad posible para atender su consulta.
            </p>
            {IS_DEMO_FORM && (
                <p className="text-[11px] text-[#666666]">Versión de demostración: el envío es simulado.</p>
              )}

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#E5A93C] text-[#131209] text-xs font-bold rounded-lg hover:bg-[#F3B74E] transition-all"
            >
              Cerrar ventana
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Nombre y apellido"
                  className="w-full px-3 py-2 bg-[#1F1F1F] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Empresa o institución
                </label>
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  placeholder="Organización contratante"
                  className="w-full px-3 py-2 bg-[#1F1F1F] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Teléfono de contacto *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  placeholder="+507 6000-0000"
                  className="w-full px-3 py-2 bg-[#1F1F1F] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  required
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  placeholder="correo@entidad.com"
                  className="w-full px-3 py-2 bg-[#1F1F1F] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Área o categoría *
                </label>
                <select
                  value={formData.tipoProyecto}
                  onChange={(e) => setFormData({ ...formData, tipoProyecto: e.target.value })}
                  className="w-full px-3 py-2 bg-[#1F1F1F] border border-[#272727] rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#181818] text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">
                  Ubicación de la obra
                </label>
                <input
                  type="text"
                  value={formData.ubicacionProyecto}
                  onChange={(e) => setFormData({ ...formData, ubicacionProyecto: e.target.value })}
                  placeholder="Provincia / distrito"
                  className="w-full px-3 py-2 bg-[#1F1F1F] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-1">
                Descripción del requerimiento *
              </label>
              <textarea
                required
                rows={3}
                value={formData.descripcionProyecto}
                onChange={(e) => setFormData({ ...formData, descripcionProyecto: e.target.value })}
                placeholder="Detalle los objetivos del proyecto, partidas estimadas o documentación requerida..."
                className="w-full px-3 py-2 bg-[#1F1F1F] border border-[#272727] rounded-lg text-xs sm:text-sm text-white placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#E5A93C] resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 px-4 bg-[#E5A93C] text-[#131209] font-bold text-sm rounded-lg hover:bg-[#F3B74E] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <span>Enviando información...</span>
                ) : (
                  <>
                    <span>Solicitar información</span>
                    <ArrowUpRight size={16} weight="bold" />
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 border-t border-[#272727] flex items-center justify-between text-xs text-[#9B9B9B]">
              <span>O llame directamente:</span>
              <a
                href={COMPANY_INFO.phoneTel}
                className="text-[#E5A93C] font-semibold flex items-center gap-1 hover:underline"
              >
                <Phone size={14} weight="bold" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
