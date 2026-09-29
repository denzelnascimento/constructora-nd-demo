export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  description: string;
  scopePoints: string[];
  imageKey: 'obrasCiviles' | 'comunitaria' | 'acueductos' | 'iluminacion' | 'ejecucion';
}

export interface ProjectRecord {
  id: string;
  title: string;
  category: string;
  location: string;
  clientOrEntity: string;
  periodOrDate: string;
  description: string;
  status: string;
  verificationSource: string;
  isRegisteredRecord: boolean;
}

export interface ProcessStage {
  step: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InquiryFormData {
  nombre: string;
  empresa: string;
  telefono: string;
  correo: string;
  tipoProyecto: string;
  ubicacionProyecto: string;
  descripcionProyecto: string;
}

export const COMPANY_INFO = {
  name: 'CONSTRUCTORA ND, S.A.',
  tagline: 'Construcción e infraestructura para proyectos que dejan huella.',
  subheadline: 'CONSTRUCTORA ND, S.A. desarrolla y ejecuta proyectos de construcción e infraestructura en Panamá.',
  phoneDisplay: '+507 204-1602',
  phoneTel: 'tel:+5072041602',
  addressLine1: 'PH Residencial Villa España, Departamento 20',
  addressLine2: 'Panamá, Provincia de Panamá, Panamá',
  locationBadge: 'Panamá, República de Panamá',
};
