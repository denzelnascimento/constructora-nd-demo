import React from 'react';
import { Phone, MapPin, ShieldCheck } from '@phosphor-icons/react';
import { COMPANY_INFO } from '../types';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Empresa', href: '#empresa' },
    { label: 'Servicios', href: '#capacidades' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#181818] border-t border-[#272727] text-white pt-16 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#272727]">
          {/* Brand & Slogan */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5A93C]" />
              <span className="font-bold text-lg tracking-wider text-white">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="text-sm text-[#D1D5DB]">
              Construcción e infraestructura en Panamá.
            </p>

            <p className="text-xs text-[#9B9B9B] max-w-sm leading-relaxed">
              Desarrollo de proyectos de obras civiles, infraestructura comunitaria, acueductos y tendidos de iluminación pública con rigor técnico en la República de Panamá.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1F1F1F] border border-[#272727] rounded-lg text-xs text-[#9B9B9B]">
              <ShieldCheck size={16} weight="fill" className="text-[#E5A93C]" />
              <span>Registros públicos y actuaciones documentadas</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Navegación
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs text-[#9B9B9B] hover:text-[#E5A93C] transition-colors focus:outline-none focus:ring-1 focus:ring-[#E5A93C]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white">
              Contacto y ubicación
            </h4>

            <div className="space-y-3 text-xs text-[#9B9B9B]">
              <div className="flex items-start gap-2.5">
                <Phone size={16} weight="bold" className="text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Teléfono público:</span>
                  <a
                    href={COMPANY_INFO.phoneTel}
                    className="text-[#E5A93C] hover:underline font-bold text-sm block mt-0.5"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={16} weight="bold" className="text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Dirección institucional:</span>
                  <p className="mt-0.5 leading-snug">
                    {COMPANY_INFO.addressLine1}
                  </p>
                  <p className="leading-snug">
                    {COMPANY_INFO.addressLine2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9B9B9B]">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos los derechos reservados. (Página de inicio de demostración creada por Veylor.)
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#E5A93C]"
            >
              Política de privacidad
            </button>
            <span className="text-[#272727]">|</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#E5A93C]"
            >
              Términos y condiciones
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
