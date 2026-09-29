import React, { useState } from 'react';
import { CaretDown, Question } from '@phosphor-icons/react';
import { FAQ_DATA } from '../data/landingData';

interface FAQProps {
  onOpenInquiry: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenInquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 px-4 md:px-8 bg-[#131209] border-b border-[#272727] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
            <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
              Resolución de dudas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            Preguntas frecuentes sobre nuestros servicios.
          </h2>
          <p className="text-base text-[#9B9B9B] max-w-xl mx-auto leading-relaxed">
            Respuestas claras y prudentes sobre el alcance constructivo, ubicación y canales de atención de CONSTRUCTORA ND, S.A.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#181818] border border-[#272727] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#E5A93C]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#272727] flex items-center justify-center text-white shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E5A93C]' : ''
                    }`}
                  >
                    <CaretDown size={14} weight="bold" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#9B9B9B] leading-relaxed border-t border-[#272727]/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact fallback */}
        <div className="mt-12 text-center p-6 bg-[#181818] border border-[#272727] rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Question size={20} className="text-[#E5A93C]" weight="bold" />
            <p className="text-xs sm:text-sm text-[#D1D5DB]">
              ¿Tiene una consulta técnica específica sobre su proyecto que no aparece aquí?
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="mt-4 px-4 py-2 bg-[#272727] hover:bg-[#E5A93C] hover:text-[#131209] text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Escríbanos directamente para atenderle
          </button>
        </div>
      </div>
    </section>
  );
};
