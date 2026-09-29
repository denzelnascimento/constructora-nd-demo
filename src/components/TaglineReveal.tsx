import React, { useEffect, useRef, useState } from 'react';

export const TaglineReveal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeWordCount, setActiveWordCount] = useState<number>(0);

  // Concept phrase: "Construir infraestructura es crear espacios que funcionan hoy y siguen sirviendo mañana."
  const phrase = "Construir infraestructura es crear espacios que funcionan hoy y siguen sirviendo mañana.";
  const words = phrase.split(' ');

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when the container enters the middle of the viewport
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.35;

      const progress = Math.min(
        Math.max((startTrigger - rect.top) / (startTrigger - endTrigger), 0),
        1
      );

      const wordIndex = Math.floor(progress * (words.length + 1));
      setActiveWordCount(wordIndex);
    };

    const throttledScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [words.length]);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-36 px-4 md:px-8 bg-[#181818] border-y border-[#272727] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Editorial Subtitle Marker */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-6 h-[1px] bg-[#E5A93C]" />
          <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
            Propósito constructivo
          </span>
          <span className="w-6 h-[1px] bg-[#E5A93C]" />
        </div>

        {/* Word by word animated text per SKILL.md B11 */}
        <h2 className="max-w-[680px] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-snug">
          {words.map((word, index) => {
            const isRevealed = index < activeWordCount;
            return (
              <span
                key={index}
                className={`inline-block mr-[0.3em] mb-1 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  isRevealed
                    ? 'text-white opacity-100 scale-100'
                    : 'text-[#9B9B9B] opacity-30 scale-[0.98]'
                }`}
              >
                {word}
              </span>
            );
          })}
        </h2>

        {/* Supporting Editorial Clarification without hyphens */}
        <p className="mt-8 text-sm sm:text-base text-[#9B9B9B] max-w-[560px] leading-relaxed">
          Cada obra pública o civil requiere planificación rigurosa, durabilidad en los materiales y estricto apego a las normas técnicas panameñas.
        </p>

        {/* Location attribution */}
        <div className="mt-8 flex items-center gap-2 text-xs font-medium text-[#9B9B9B]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
          <span>CONSTRUCTORA ND, S.A. | Panamá</span>
        </div>
      </div>
    </section>
  );
};
