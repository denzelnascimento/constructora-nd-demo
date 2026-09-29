import React from 'react';
import { X, ShieldCheck } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../types';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#181818] border border-[#272727] rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#272727]">
          <div className="flex items-center gap-2">
            <ShieldCheck size={22} weight="fill" className="text-[#E5A93C]" />
            <h3 className="text-xl font-bold text-white">
              {type === 'privacy' ? 'Política de Privacidad' : 'Términos y Condiciones'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#272727] text-white hover:text-[#E5A93C] flex items-center justify-center transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={16} weight="bold" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#9B9B9B] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong className="text-white">1. Responsable del tratamiento:</strong> {COMPANY_INFO.name}, con domicilio en {COMPANY_INFO.addressLine1}, {COMPANY_INFO.addressLine2}, República de Panamá.
              </p>
              <p>
                <strong className="text-white">2. Finalidad:</strong> La información recopilada a través del formulario de contacto o llamada telefónica se utiliza exclusivamente para atender solicitudes de cotización, requerimientos técnicos y coordinaciones vinculadas a proyectos constructivos.
              </p>
              <p>
                <strong className="text-white">3. Confidencialidad:</strong> Los datos suministrados por los usuarios no se comparten, comercializan ni transfieren a terceros sin autorización expresa, salvo requerimiento fundamentado de autoridades competentes panameñas.
              </p>
              <p>
                <strong className="text-white">4. Ejercicio de derechos:</strong> Para solicitar la actualización o supresión de sus datos de contacto en nuestros registros, puede comunicarse al teléfono {COMPANY_INFO.phoneDisplay}.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-white">1. Ámbito de aplicación:</strong> Este portal web tiene carácter informativo e institucional sobre las capacidades y actuaciones de {COMPANY_INFO.name} en la República de Panamá.
              </p>
              <p>
                <strong className="text-white">2. Veracidad de la información:</strong> Los contenidos expuestos sobre categorías de obras, infraestructura y registros se presentan bajo criterio de estricta verificación con base en antecedentes públicos y documentación técnica.
              </p>
              <p>
                <strong className="text-white">3. Alcances contractuales:</strong> Las consultas formuladas por este medio no constituyen compromiso vinculante ni adjudicación contractual hasta tanto se formalice el acuerdo o pliego correspondiente entre las partes.
              </p>
              <p>
                <strong className="text-white">4. Legislación aplicable:</strong> Cualquier controversia derivada del uso de este sitio se regirá por las leyes de la República de Panamá y la jurisdicción de sus tribunales ordinarios.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#272727] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#272727] hover:bg-[#313131] text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
