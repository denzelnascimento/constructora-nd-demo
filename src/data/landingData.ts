import { CapabilityItem, ProcessStage, FAQItem } from '../types';

export const CAPABILITIES_DATA: CapabilityItem[] = [
  {
    id: 'obras-civiles',
    number: '01',
    title: 'Obras civiles',
    description: 'Ejecución de estructuras de hormigón armado, cimentaciones, muros de contención y adecuación de terrenos conforme a normas constructivas vigentes.',
    scopePoints: [
      'Fundaciones y vaciado de concreto estructural',
      'Muros de contención y estabilización',
      'Canalizaciones y obras de drenaje pluvial',
      'Pavimentación y adecuaciones de suelo'
    ],
    imageKey: 'obrasCiviles'
  },
  {
    id: 'infraestructura-comunitaria',
    number: '02',
    title: 'Infraestructura comunitaria',
    description: 'Desarrollo de obras de beneficio social e infraestructura pública barrial orientadas a mejorar la calidad de vida y el acceso en comunidades.',
    scopePoints: [
      'Espacios recreativos y áreas públicas',
      'Estructuras de uso comunitario',
      'Veredas, aceras y pasos peatonales',
      'Facilidades comunales y cercado perimetral'
    ],
    imageKey: 'comunitaria'
  },
  {
    id: 'acueductos',
    number: '03',
    title: 'Acueductos',
    description: 'Trabajos vinculados a sistemas de conducción de agua, instalación de tuberías principales, interconexiones y obras hidrosanitarias básicas.',
    scopePoints: [
      'Zanjado y tendido de tuberías de distribución',
      'Conexiones y válvulas de control de flujo',
      'Obras civiles para tanques y captación',
      'Pruebas hidrostáticas de hermeticidad'
    ],
    imageKey: 'acueductos'
  },
  {
    id: 'iluminacion-publica',
    number: '04',
    title: 'Iluminación pública',
    description: 'Instalación y adecuación de postes, canalizaciones eléctricas y luminarias para vías públicas, senderos y plazas.',
    scopePoints: [
      'Tendido aéreo y subterráneo de redes eléctricas',
      'Colocación de postes de concreto y metálicos',
      'Instalación de luminarias de bajo consumo',
      'Puesta a tierra y tableros de protección'
    ],
    imageKey: 'iluminacion'
  },
  {
    id: 'construccion',
    number: '05',
    title: 'Construcción',
    description: 'Edificación y desarrollo de obras arquitectónicas e institucionales con apego estricto a especificaciones técnicas y requerimientos de planos.',
    scopePoints: [
      'Levantamiento de mampostería y muros',
      'Instalaciones mecánicas y electromecánicas',
      'Cubiertas, cerramientos y acabados de obra',
      'Coordinación técnica en campo'
    ],
    imageKey: 'ejecucion'
  },
  {
    id: 'otros-proyectos',
    number: '06',
    title: 'Otros proyectos de infraestructura',
    description: 'Actuaciones complementarias de ingeniería y obras especiales requeridas para el soporte operativo de infraestructuras existentes.',
    scopePoints: [
      'Mantenimiento mayor de obras civiles',
      'Reparaciones estructurales y rehabilitación',
      'Mejoras viales y obras de mitigación',
      'Intervenciones técnicas bajo requerimiento'
    ],
    imageKey: 'obrasCiviles'
  }
];

export const INFRAESTRUCTURA_SHOWCASE = [
  {
    title: 'Redes de distribución y acueductos',
    category: 'Infraestructura hídrica',
    needSolved: 'Suministro continuo de agua potable hacia sectores poblados mediante redes seguras y zanjado técnico con tuberías de alta resistencia.',
    focus: 'Precisión topográfica y control de presiones hidrostáticas.',
    imageKey: 'acueductos' as const
  },
  {
    title: 'Vías, senderos e iluminación pública',
    category: 'Infraestructura vial y lumínica',
    needSolved: 'Seguridad nocturna y movilidad eficiente para peatones y vehículos mediante postes normalizados y luminarias viales de alto rendimiento.',
    focus: 'Canalización subterránea protegida y tableros regulados.',
    imageKey: 'iluminacion' as const
  },
  {
    title: 'Obras de concreto y fundaciones estructurales',
    category: 'Ingeniería y obras civiles',
    needSolved: 'Estabilidad permanente para edificaciones, puentes peatonales, cajas pluviales y muros que soportan cargas y empuje de suelo.',
    focus: 'Dosificación controlada y armaduras de refuerzo continuo.',
    imageKey: 'obrasCiviles' as const
  },
  {
    title: 'Espacios comunitarios de uso público',
    category: 'Infraestructura social y comunitaria',
    needSolved: 'Integración vecinal y recreación segura con canchas techadas, parques comunales y accesos protegidos de lluvia en clima tropical.',
    focus: 'Durabilidad ante intemperie y facilidad de mantenimiento.',
    imageKey: 'comunitaria' as const
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    phase: 'Fase inicial',
    title: 'Entendimiento del proyecto',
    description: 'Revisión preliminar del alcance solicitado, ubicación geográfica de la obra y objetivos funcionales establecidos por el contratante.',
    deliverables: 'Levantamiento de necesidades y parámetros de partida'
  },
  {
    step: '02',
    phase: 'Fase técnica',
    title: 'Evaluación técnica',
    description: 'Inspección de las condiciones del sitio, análisis de planos existentes y revisión de especificaciones constructivas aplicables.',
    deliverables: 'Criterio técnico de viabilidad y alcance constructivo'
  },
  {
    step: '03',
    phase: 'Fase organizativa',
    title: 'Planificación',
    description: 'Estructuración de la secuencia operativa, logística de materiales, cronograma de trabajo y asignación de cuadrillas especializadas.',
    deliverables: 'Cronograma de ejecución y programación de recursos'
  },
  {
    step: '04',
    phase: 'Fase operativa',
    title: 'Ejecución',
    description: 'Desarrollo de los trabajos en sitio bajo supervisión técnica constante, respetando tolerancias, materiales especificados y seguridad.',
    deliverables: 'Avance controlado en campo y control de calidad'
  },
  {
    step: '05',
    phase: 'Fase de cierre',
    title: 'Entrega y seguimiento',
    description: 'Verificación final de acabados o pruebas funcionales, revisión conjunta con la inspección y entrega formal de la obra concluida.',
    deliverables: 'Acta de entrega y soporte de finiquito'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: '¿Qué tipo de proyectos desarrolla CONSTRUCTORA ND, S.A.?',
    answer: 'La empresa desarrolla actividades de construcción e infraestructura en Panamá, con actividad en categorías de obras civiles, infraestructura comunitaria, acueductos, iluminación pública y proyectos afines.'
  },
  {
    question: '¿Trabajan proyectos de infraestructura?',
    answer: 'Sí. Dentro de sus áreas de actuación se encuentran proyectos de infraestructura tanto comunitaria como civil, orientados a brindar soluciones funcionales y duraderas.'
  },
  {
    question: '¿Realizan obras civiles?',
    answer: 'Sí. Las obras civiles forman parte de las capacidades de la empresa, abarcando fundaciones, estructuras de concreto, canalizaciones pluviales y adecuaciones de terreno.'
  },
  {
    question: '¿Han participado en proyectos de acueductos?',
    answer: 'Sí. El tendido de líneas de conducción y distribución de agua potable para comunidades forma parte de sus áreas de actuación.'
  },
  {
    question: '¿Trabajan proyectos de iluminación pública?',
    answer: 'Sí. La instalación de postes, cableado y luminarias para vías y áreas comunales forma parte de sus áreas de actuación.'
  },
  {
    question: '¿Cómo puedo solicitar información sobre un proyecto?',
    answer: 'Puede enviar su consulta mediante el formulario institucional en esta página o comunicarse de manera directa al teléfono público +507 204-1602 para coordinar una atención técnica.'
  },
  {
    question: '¿Dónde está ubicada la empresa?',
    answer: 'La sede se encuentra en PH Residencial Villa España, Departamento 20, en la ciudad de Panamá, Provincia de Panamá, República de Panamá.'
  },
  {
    question: '¿Cómo puedo contactar a CONSTRUCTORA ND, S.A.?',
    answer: 'El canal telefónico directo es el +507 204-1602. También puede dejar sus datos en la sección de contacto para recibir respuesta oportuna sobre sus requerimientos de obra.'
  }
];
