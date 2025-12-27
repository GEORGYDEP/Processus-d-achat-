
export enum StepStatus {
  LOCKED = 'LOCKED',
  CURRENT = 'CURRENT',
  COMPLETED = 'COMPLETED'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface PurchaseStep {
  id: number;
  title: string;
  description: string;
  documentType: 'DA' | 'COMPARISON' | 'EMAIL_RFP' | 'QUOTE' | 'QUOTE_SIGNED' | 'PO' | 'INVOICE_50' | 'EMAIL_PLAN' | 'INVOICE_30' | 'BL' | 'ODOO_RECEIPT' | 'INVOICE_20' | 'ARCHIVE';
  questions: QuizQuestion[];
}

export interface CompanyInfo {
  name: string;
  address: string;
  tva: string;
  email: string;
  phone: string;
  iban?: string;
  bic?: string;
}
