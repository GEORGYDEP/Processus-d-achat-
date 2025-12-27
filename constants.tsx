
import { PurchaseStep, CompanyInfo } from './types';

export const BUYER: CompanyInfo = {
  name: "HD Construct SRL",
  address: "Rue Montavaux 122 bte 2, 7080 Frameries",
  tva: "BE 0665.844.325",
  email: "info@hdconstruct.be",
  phone: "+32 65 00 00 00",
  iban: "BE64 0012 3456 7890",
  bic: "GEBABEBB"
};

export const SUPPLIER_BUROTEC: CompanyInfo = {
  name: "Buro-Tec Services SRL",
  address: "Avenue Maréchal Foch 775, 7012 Jemappes",
  tva: "BE 0444.555.552",
  email: "contact@buro-tec.be",
  phone: "+32 65 11 11 11",
  iban: "BE99 9876 5432 1098",
  bic: "BNPABEBB"
};

export const SCENARIO_STEPS: PurchaseStep[] = [
  {
    id: 1,
    title: "1. Besoin interne (DA)",
    description: "5 nouveaux collaborateurs arrivent le 13/01. On crée une Demande d'Achat interne.",
    documentType: 'DA',
    questions: [
      {
        question: "Quel est l'intérêt principal de la Demande d'Achat (DA) interne ?",
        options: ["Commander directement au fournisseur", "Vérifier la disponibilité budgétaire et obtenir l'accord de la direction", "Payer la facture", "Calculer la TVA"],
        correctAnswer: 1,
        explanation: "La DA est un document de contrôle interne qui assure que l'achat est autorisé avant d'engager les fonds de l'entreprise."
      }
    ]
  },
  {
    id: 2,
    title: "2. Comparaison Fournisseurs",
    description: "Analyse des offres de WEBA, BuroDepo et Buro-Tec.",
    documentType: 'COMPARISON',
    questions: [
      {
        question: "Pourquoi HD Construct choisit-elle Buro-Tec (le plus cher) ?",
        options: ["Par erreur de calcul", "Pour le mobilier pro intensif, le service local et la garantie 10 ans", "Parce qu'ils sont à Frameries", "Parce que WEBA ne livre pas"],
        correctAnswer: 1,
        explanation: "En comptabilité de gestion, on regarde le TCO (coût total de possession) et la qualité, pas seulement le prix facial."
      }
    ]
  },
  {
    id: 3,
    title: "3. Demande d'offre",
    description: "Envoi d'un courriel formel à Buro-Tec Services SRL.",
    documentType: 'EMAIL_RFP',
    questions: [
      {
        question: "Qu'est-ce qui doit impérativement figurer dans cette demande ?",
        options: ["Le nom du futur employé", "Les quantités, dimensions, lieu de livraison et demande de conditions de paiement", "Le RIB de l'entreprise", "Une photo du bureau actuel"],
        correctAnswer: 1,
        explanation: "Le fournisseur a besoin de ces précisions pour calculer les frais de transport et appliquer ses remises."
      }
    ]
  },
  {
    id: 4,
    title: "4. Réception du devis",
    description: "Analyse du devis DEV-2025-331 envoyé par Buro-Tec.",
    documentType: 'QUOTE',
    questions: [
      {
        question: "Quelle est la durée de validité de cette offre ?",
        options: ["30 jours", "15 jours calendrier", "7 jours ouvrables", "Indéterminée"],
        correctAnswer: 1,
        explanation: "Les conditions générales de Buro-Tec précisent une validité de 15 jours calendrier."
      }
    ]
  },
  {
    id: 5,
    title: "5. Acceptation (Bon pour accord)",
    description: "Signature du devis pour validation contractuelle.",
    documentType: 'QUOTE_SIGNED',
    questions: [
      {
        question: "Que signifie la mention 'Bon pour accord' sur un devis ?",
        options: ["C'est une simple information", "Cela transforme le devis en contrat ferme liant les deux parties", "Cela signifie que le paiement est déjà fait", "Cela annule les conditions générales"],
        correctAnswer: 1,
        explanation: "La signature du devis vaut acceptation du prix, de la chose et des conditions générales de vente."
      }
    ]
  },
  {
    id: 6,
    title: "6. Bon de commande (Odoo)",
    description: "Génération du BC officiel dans le logiciel de gestion.",
    documentType: 'PO',
    questions: [
      {
        question: "Quelle est l'utilité du Bon de Commande (BC) pour la comptabilité ?",
        options: ["Payer la TVA", "Servir de base au futur rapprochement avec la facture et la livraison", "Remplacer le devis", "C'est un document inutile"],
        correctAnswer: 1,
        explanation: "Le BC permet de bloquer le budget et servira à vérifier que la facture reçue plus tard est conforme à ce qui a été commandé."
      }
    ]
  },
  {
    id: 7,
    title: "7. Acompte 50% & Paiement",
    description: "Facture d'acompte à la commande (1.372,14 €).",
    documentType: 'INVOICE_50',
    questions: [
      {
        question: "La TVA est-elle due sur un acompte en Belgique ?",
        options: ["Non, jamais", "Oui, elle est exigible au moment de l'encaissement de l'acompte", "Seulement pour les montants > 5000€", "Seulement si le client est un particulier"],
        correctAnswer: 1,
        explanation: "En Belgique, la réception d'un acompte rend la TVA exigible sur ce montant."
      }
    ]
  },
  {
    id: 8,
    title: "8. Planification Livraison",
    description: "Échanges de courriels pour fixer la date au 08/01.",
    documentType: 'EMAIL_PLAN',
    questions: [
      {
        question: "Buro-Tec peut-il être attaqué si la livraison a 2 jours de retard ?",
        options: ["Oui, c'est automatique", "Non, car leurs conditions précisent que les dates sont indicatives", "Oui, avec une amende de 10%", "Seulement si le client appelle la police"],
        correctAnswer: 1,
        explanation: "Leurs conditions générales précisent que les délais sont fournis à titre indicatif, ce qui les protège contre des pénalités automatiques."
      }
    ]
  },
  {
    id: 9,
    title: "9. Acompte 30% (Avant liv.)",
    description: "Paiement de la deuxième tranche (823,28 €).",
    documentType: 'INVOICE_30',
    questions: [
      {
        question: "Pourquoi le fournisseur demande-t-il 30% AVANT la livraison ?",
        options: ["Pour s'enrichir", "Pour sécuriser sa trésorerie et s'assurer du sérieux du client avant d'envoyer le camion", "C'est une taxe d'État", "Pour payer ses ouvriers en avance"],
        correctAnswer: 1,
        explanation: "C'est une pratique courante en B2B pour limiter le risque d'impayé sur des marchandises déjà sorties du stock."
      }
    ]
  },
  {
    id: 10,
    title: "10. Livraison + Bon de Livraison",
    description: "Contrôle de la marchandise à Frameries.",
    documentType: 'BL',
    questions: [
      {
        question: "Que se passe-t-il si vous signez le BL sans noter de réserves alors qu'un bureau est cassé ?",
        options: ["On peut réclamer 1 mois plus tard", "La marchandise est présumée reçue en bon état, le recours devient très difficile", "Le livreur doit revenir le lendemain", "Rien, la garantie joue toujours"],
        correctAnswer: 1,
        explanation: "Le Bon de Livraison est la preuve de la délivrance conforme. Sans réserve, le transfert des risques est total."
      }
    ]
  },
  {
    id: 11,
    title: "11. Réception dans Odoo",
    description: "Le magasinier valide l'entrée en stock informatiquement.",
    documentType: 'ODOO_RECEIPT',
    questions: [
      {
        question: "Quel est l'impact de cette validation dans le logiciel ?",
        options: ["Cela paie le fournisseur", "Cela augmente le stock et permet à la compta de valider la facture finale", "Cela envoie un mail au patron", "Cela crée un nouveau devis"],
        correctAnswer: 1,
        explanation: "La réception informatique fait le lien entre le physique (entrepôt) et le financier (comptabilité)."
      }
    ]
  },
  {
    id: 12,
    title: "12. Facture finale (Solde 20%)",
    description: "Dernière facture (548,86 €) et rapprochement 3-pièces.",
    documentType: 'INVOICE_20',
    questions: [
      {
        question: "Qu'est-ce que le 'rapprochement 3-pièces' ?",
        options: ["Vérifier 3 chiffres", "Comparer Bon de Commande, Bon de Livraison et Facture", "Demander l'avis de 3 comptables", "Payer en 3 fois"],
        correctAnswer: 1,
        explanation: "C'est la procédure de contrôle ultime : Commandé = Reçu = Facturé."
      }
    ]
  },
  {
    id: 13,
    title: "13. Clôture & Archivage",
    description: "Paiement final et classement légal du dossier.",
    documentType: 'ARCHIVE',
    questions: [
      {
        question: "Pendant combien de temps devez-vous conserver ce dossier en Belgique ?",
        options: ["2 ans", "5 ans", "10 ans", "À vie"],
        correctAnswer: 2,
        explanation: "La loi comptable et fiscale belge impose une conservation des documents pendant 10 ans."
      }
    ]
  }
];
