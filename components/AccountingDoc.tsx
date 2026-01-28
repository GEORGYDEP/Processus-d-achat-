
import React from 'react';
import { BUYER, SUPPLIER_BUROTEC } from '../constants';
// Added CheckCircle to the imports from lucide-react
import { Mail, Box, Package, FileCheck, Landmark, ReceiptText, Calendar, Search, ShieldCheck, Database, Truck, CheckCircle } from 'lucide-react';

interface AccountingDocProps {
  type: string;
  isSigned?: boolean;
}

const AccountingDoc: React.FC<AccountingDocProps> = ({ type, isSigned }) => {
  const renderDA = () => (
    <div className="bg-white p-8 doc-shadow border border-slate-200 max-w-2xl mx-auto rounded-sm border-t-4 border-t-blue-600 animate-fade">
        <div className="flex justify-between items-start border-b pb-4 mb-6">
            <div>
                <h1 className="text-xl font-bold text-blue-800 uppercase tracking-tight">Demande d'Achat Interne</h1>
                <p className="text-sm text-slate-500 font-mono">REF: DA-2025-0128</p>
            </div>
            <div className="text-right">
                <p className="font-bold text-slate-800">{BUYER.name}</p>
                <p className="text-xs text-slate-500 italic">Service: Ressources Humaines</p>
            </div>
        </div>
        <div className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Demandeur</label>
                    <p className="text-sm font-semibold">Jean Dupont (RH)</p>
                </div>
                <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Date du besoin</label>
                    <p className="text-sm font-semibold">13 / 01 / 2026</p>
                </div>
            </div>
            <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Objet détaillé</label>
                <p className="text-base font-medium text-slate-900 border-b pb-1">5 Bureaux de travail 160×80 cm (Plateau bois/pieds métal)</p>
            </div>
            <div className="bg-slate-50 p-4 rounded border border-slate-100">
                 <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Justificatif métier</label>
                 <p className="text-xs text-slate-600 leading-relaxed italic">
                    "Arrivée de 5 nouveaux techniciens pour le projet 'Frameries 2026'. Nécessité de mobilier professionnel ergonomique pour usage intensif."
                 </p>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t flex justify-end gap-16">
            <div className="text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-4">Responsable RH</p>
                <div className="h-12 w-32 border-b border-dashed border-slate-300 mx-auto flex items-center justify-center italic text-slate-300 text-[10px]">Signé Dupont J.</div>
            </div>
            <div className="text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-4">Direction Générale</p>
                <div className={`h-12 w-32 border-b border-dashed border-slate-300 mx-auto flex items-center justify-center font-bold uppercase text-xs ${isSigned ? 'text-blue-600' : 'text-slate-300'}`}>
                    {isSigned ? <div className="border-2 border-blue-600 px-2 py-1 rotate-12">APPROUVÉ</div> : 'Visa Direction'}
                </div>
            </div>
        </div>
    </div>
  );

  const renderComparison = () => (
    <div className="bg-white p-6 doc-shadow border border-slate-200 rounded-xl overflow-hidden animate-fade">
        <div className="bg-slate-800 p-4 -mx-6 -mt-6 mb-6 flex justify-between items-center">
            <h2 className="text-white font-bold flex items-center gap-2">
                <Search size={18} />
                Analyse Comparative Fournisseurs
            </h2>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest">REF: COMP-2025-01</span>
        </div>
        <table className="w-full text-sm border-collapse">
            <thead>
                <tr className="bg-slate-100 text-slate-600 uppercase text-[9px] font-black tracking-widest">
                    <th className="p-4 text-left border">Critères / Fournisseurs</th>
                    <th className="p-4 text-center border">WEBA</th>
                    <th className="p-4 text-center border">BuroDepo</th>
                    <th className="p-4 text-center border bg-blue-50 text-blue-700">Buro-Tec Services</th>
                </tr>
            </thead>
            <tbody className="divide-y text-slate-700">
                <tr>
                    <td className="p-4 font-bold bg-slate-50 border">Prix HT (Total)</td>
                    <td className="p-4 text-center border">845,00 €</td>
                    <td className="p-4 text-center border">1.900,00 €</td>
                    <td className="p-4 text-center border font-bold text-blue-600">2.268,00 €</td>
                </tr>
                <tr>
                    <td className="p-4 font-bold bg-slate-50 border">Qualité / Usage</td>
                    <td className="p-4 text-center border">Ménager (Basique)</td>
                    <td className="p-4 text-center border">Pro (Moyen)</td>
                    <td className="p-4 text-center border font-bold">Pro Intensif (Premium)</td>
                </tr>
                <tr>
                    <td className="p-4 font-bold bg-slate-50 border">Garantie</td>
                    <td className="p-4 text-center border">2 ans</td>
                    <td className="p-4 text-center border">5 ans</td>
                    <td className="p-4 text-center border font-bold">10 ans</td>
                </tr>
            </tbody>
        </table>
    </div>
  );

  const renderEmail = (from: string, to: string, subject: string, body: string) => (
    <div className="bg-white doc-shadow border rounded-lg overflow-hidden max-w-2xl mx-auto animate-fade">
        <div className="bg-slate-100 p-4 border-b flex items-center justify-between">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Outlook Business - HD Construct</p>
        </div>
        <div className="p-6 space-y-2 border-b bg-white">
            <p className="text-sm"><span className="text-slate-400">De :</span> <span className="font-bold">{from}</span></p>
            <p className="text-sm"><span className="text-slate-400">À :</span> <span className="font-bold">{to}</span></p>
            <p className="text-sm"><span className="text-slate-400">Objet :</span> <span className="font-bold text-blue-700">{subject}</span></p>
        </div>
        <div className="p-8 text-sm text-slate-700 whitespace-pre-line font-serif leading-relaxed min-h-32 bg-white">
            {body}
        </div>
    </div>
  );

  const renderQuote = (signed: boolean) => (
    <div className="bg-white p-8 doc-shadow border-2 border-slate-100 max-w-2xl mx-auto rounded-sm relative animate-fade">
        {signed && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-blue-600 text-blue-600 font-black px-12 py-6 rounded-2xl transform -rotate-12 opacity-90 text-4xl pointer-events-none uppercase tracking-tighter z-30 flex flex-col items-center">
                <span>Bon pour accord</span>
                <span className="text-[10px] font-normal mt-1 italic tracking-widest">Signé le 05/12/2025</span>
            </div>
        )}
        <div className="flex justify-between mb-10 border-b-2 border-slate-800 pb-4">
            <div className="text-sm">
                <p className="font-black text-xl text-blue-900 italic tracking-tighter">BURO-TEC SERVICES</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold">Mobilier & Solutions Tertiaires</p>
                <p className="text-xs leading-none">{SUPPLIER_BUROTEC.address}</p>
                <p className="text-xs">TVA: {SUPPLIER_BUROTEC.tva}</p>
            </div>
            <div className="text-right">
                <h2 className="text-4xl font-black text-slate-800 uppercase tracking-tighter">Offre</h2>
                <p className="text-sm text-slate-500 font-mono">N° DEV-2025-331</p>
            </div>
        </div>
        <div className="mb-8 p-4 bg-slate-50 rounded border-l-4 border-slate-300">
            <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Client Destinataire</p>
            <p className="font-bold text-lg">{BUYER.name}</p>
        </div>
        <table className="w-full text-sm mb-6">
            <thead className="bg-slate-900 text-white text-[10px] uppercase tracking-widest">
                <tr>
                    <th className="p-2 text-left">Désignation</th>
                    <th className="p-2 text-center">Qté</th>
                    <th className="p-2 text-right">Total HT</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                <tr>
                    <td className="p-2 font-medium">Bureau Professionnel 160×80 (Chêne Naturel)</td>
                    <td className="p-2 text-center font-bold">5</td>
                    <td className="p-2 text-right">2.400,00 €</td>
                </tr>
            </tbody>
        </table>
        <div className="flex justify-end pt-4 border-t-2 border-slate-800">
            <div className="w-64 space-y-1 text-right">
                <div className="flex justify-between text-2xl font-black text-blue-700 mt-2"><span>TOTAL TTC :</span><span>2.744,28 €</span></div>
            </div>
        </div>
    </div>
  );

  const renderPO = () => (
    <div className="bg-white p-8 doc-shadow border-2 border-slate-900 max-w-2xl mx-auto rounded-sm animate-fade">
        <div className="flex justify-between items-center mb-6 border-b-8 border-slate-900 pb-4">
            <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Bon de Commande</h2>
                <p className="font-mono text-sm bg-slate-900 text-white px-2 py-0.5 inline-block">N° BC-2025-0097</p>
            </div>
            <div className="text-right">
                 <p className="font-black text-sm uppercase">{BUYER.name}</p>
                 <p className="text-[9px] text-slate-500 italic">Document généré via Odoo ERP</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6 text-sm">
            <div className="bg-slate-50 p-4 rounded border-l-4 border-slate-300">
                <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Fournisseur</p>
                <p className="font-bold">{SUPPLIER_BUROTEC.name}</p>
                <p className="text-xs text-slate-600">{SUPPLIER_BUROTEC.address}</p>
                <p className="text-xs text-slate-500">TVA: {SUPPLIER_BUROTEC.tva}</p>
            </div>
            <div className="bg-slate-50 p-4 rounded border-l-4 border-blue-300">
                <p className="text-[9px] text-slate-400 font-bold uppercase mb-1">Détails logistiques</p>
                <p className="text-xs text-slate-600"><span className="font-semibold">Date de commande :</span> 05/12/2025</p>
                <p className="text-xs text-slate-600"><span className="font-semibold">Réf. Devis :</span> <span className="text-blue-700 font-bold">DEV-2025-331</span></p>
                <p className="text-xs text-slate-600"><span className="font-semibold">Lieu de livraison :</span> <a href="#" className="text-blue-600 hover:underline">Frameries (Bureau 1.02)</a></p>
            </div>
        </div>
        <div className="mb-4">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Détail des marchandises commandées</p>
        </div>
        <table className="w-full text-sm mb-6">
            <thead className="bg-slate-900 text-white text-[10px] uppercase tracking-widest">
                <tr>
                    <th className="p-2 text-left">Désignation</th>
                    <th className="p-2 text-center">Qté</th>
                    <th className="p-2 text-right">P.U. HT</th>
                    <th className="p-2 text-right">Total HT</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                <tr>
                    <td className="p-3">
                        <p className="font-medium">Bureau Professionnel 160×80</p>
                        <p className="text-xs text-slate-500">Plateau: Chêne Naturel | Piétement: Métal noir</p>
                        <p className="text-xs text-slate-500">Dimensions: 160 × 80 × 75 cm | Garantie: 10 ans</p>
                    </td>
                    <td className="p-2 text-center font-bold">5</td>
                    <td className="p-2 text-right">441,60 €</td>
                    <td className="p-2 text-right">2.208,00 €</td>
                </tr>
                <tr>
                    <td className="p-3">
                        <p className="font-medium">Installation & Réglages</p>
                        <p className="text-xs text-slate-500">Montage sur site, réglages ergonomiques inclus</p>
                    </td>
                    <td className="p-2 text-center font-bold">1</td>
                    <td className="p-2 text-right">60,00 €</td>
                    <td className="p-2 text-right">60,00 €</td>
                </tr>
            </tbody>
            <tfoot className="bg-slate-50">
                <tr>
                    <td colSpan={3} className="p-2 text-right font-bold text-xs uppercase text-slate-500">Sous-total HT</td>
                    <td className="p-2 text-right font-bold">2.268,00 €</td>
                </tr>
                <tr>
                    <td colSpan={3} className="p-2 text-right font-bold text-xs uppercase text-slate-500">TVA (21%)</td>
                    <td className="p-2 text-right font-bold">476,28 €</td>
                </tr>
            </tfoot>
        </table>
        <div className="bg-slate-900 text-white p-4 rounded flex justify-between items-center mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest">Montant Total TTC :</span>
            <span className="text-2xl font-black">2.744,28 €</span>
        </div>
        <div className="grid grid-cols-2 gap-6 text-xs border-t pt-4">
            <div className="bg-blue-50 p-4 rounded border border-blue-100">
                <p className="font-bold text-blue-800 mb-2 uppercase text-[10px] tracking-wide">Conditions de paiement</p>
                <ul className="text-slate-600 space-y-1">
                    <li><span className="font-semibold">50%</span> à la commande (1.372,14 €)</li>
                    <li><span className="font-semibold">30%</span> avant livraison (823,28 €)</li>
                    <li><span className="font-semibold">20%</span> solde après livraison (548,86 €)</li>
                </ul>
                <p className="text-slate-500 mt-2 text-[10px]">Mode: Virement bancaire</p>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-100">
                <p className="font-bold text-green-800 mb-2 uppercase text-[10px] tracking-wide">Conditions de livraison</p>
                <ul className="text-slate-600 space-y-1">
                    <li><span className="font-semibold">Date prévue :</span> 08/01/2026</li>
                    <li><span className="font-semibold">Adresse :</span> Rue Montavaux 122, 7080 Frameries</li>
                    <li><span className="font-semibold">Incoterm :</span> DDP (Franco de port)</li>
                </ul>
                <p className="text-slate-500 mt-2 text-[10px]">Délais indicatifs selon CGV</p>
            </div>
        </div>
        <div className="mt-4 text-[10px] text-slate-400 italic text-center border-t pt-4">
            Document interne à valeur contractuelle. Engage la société {BUYER.name} à réception de la marchandise.
        </div>
    </div>
  );

  const renderInvoice = (pct: number) => {
    const totalTTC = 2744.28;
    const amount = totalTTC * (pct / 100);
    const label = pct === 20 ? "SOLDE FINAL (20%)" : `ACOMPTE ${pct}%`;
    const invNo = `INV-2025-${pct === 50 ? '042' : pct === 30 ? '088' : '102'}`;

    return (
        <div className="bg-white p-8 doc-shadow border border-slate-200 max-w-2xl mx-auto rounded-sm relative animate-fade">
            {isSigned && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-green-500 text-green-500 font-bold px-8 py-4 rounded-lg transform -rotate-12 opacity-30 text-4xl pointer-events-none uppercase tracking-tighter z-20">
                    Paiement Lettré ✓
                </div>
            )}
            <div className="flex justify-between items-start mb-8 text-slate-800">
                <h1 className="text-4xl font-black tracking-tighter leading-none">FACTURE</h1>
                <p className="font-bold text-sm uppercase">{SUPPLIER_BUROTEC.name}</p>
            </div>
            <div className="ml-auto w-64 space-y-1 border-t-2 border-slate-900 pt-4">
                <div className="flex justify-between text-2xl font-black text-blue-600 bg-slate-50 px-2 py-1 mt-2"><span>TOTAL TTC :</span><span>{amount.toLocaleString('fr-BE', { minimumFractionDigits: 2 })} €</span></div>
            </div>
        </div>
    );
  };

  const renderBL = () => (
    <div className="bg-white p-8 doc-shadow border border-slate-300 max-w-2xl mx-auto rounded-sm animate-fade">
        <h1 className="text-4xl font-black uppercase text-slate-800 mb-8 border-l-8 border-slate-800 pl-4 tracking-tighter">Bon de Livraison</h1>
        <div className="grid grid-cols-2 gap-8 h-32 mt-12">
            <div className="border border-dashed p-4 flex flex-col justify-between rounded">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Visa Chauffeur</p>
            </div>
            <div className="border-4 border-slate-900 p-4 flex flex-col justify-between bg-yellow-50 rounded">
                <p className="text-[9px] font-black text-slate-900 uppercase tracking-widest">Réceptionnaire</p>
                {isSigned ? (
                    <div className="text-blue-700 font-bold text-xs italic">"Reçu OK. Pas de réserves."</div>
                ) : (
                    <div className="text-slate-200 italic text-[10px]">Signature client...</div>
                )}
            </div>
        </div>
    </div>
  );

  const renderOdoo = () => (
    <div className="bg-slate-200 rounded-lg shadow-2xl border border-slate-400 max-w-4xl mx-auto overflow-hidden animate-fade">
        <div className="bg-indigo-800 p-2 text-white text-xs font-bold uppercase">Odoo Inventory / Reception</div>
        <div className="p-10 bg-white">
            <h2 className="text-2xl font-black text-slate-800 mb-4">RECEP/2026/0001</h2>
            {isSigned && (
                <div className="mt-10 p-5 bg-green-50 border-2 border-green-100 rounded-xl flex items-center gap-5 text-green-800 shadow-sm">
                    <ShieldCheck size={20} className="text-green-500" />
                    <p className="text-xs font-black uppercase tracking-widest">Inventaire Mis à jour ✓</p>
                </div>
            )}
        </div>
    </div>
  );

  const renderArchive = () => (
    <div className="bg-white p-12 rounded-2xl shadow-2xl border-t-[12px] border-slate-900 max-w-4xl mx-auto animate-fade text-center">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h1 className="text-3xl font-black text-slate-900 uppercase">Dossier Archivé</h1>
        <div className="bg-slate-900 text-white p-8 rounded-2xl flex justify-between items-center mt-12">
            <div className="text-left">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Archivé</p>
                <p className="text-4xl font-black tracking-tighter">2.744,28 €</p>
            </div>
            <div className="text-right">
                <p className="text-xs font-black text-green-400 uppercase">Conservation : 10 Ans</p>
            </div>
        </div>
    </div>
  );

  switch(type) {
    case 'DA': return renderDA();
    case 'COMPARISON': return renderComparison();
    case 'EMAIL_RFP': return renderEmail(BUYER.email, SUPPLIER_BUROTEC.email, "Demande de devis - 5 Bureaux", "Bonjour,\nNous souhaitons un devis pour 5 bureaux pro.\nMerci.");
    case 'QUOTE': return renderQuote(false);
    case 'QUOTE_SIGNED': return renderQuote(true);
    case 'PO': return renderPO();
    case 'INVOICE_50': return renderInvoice(50);
    case 'EMAIL_PLAN': return renderEmail(SUPPLIER_BUROTEC.email, BUYER.email, "Livraison fixée", "Bonjour,\nLivraison le 08/01.");
    case 'INVOICE_30': return renderInvoice(30);
    case 'BL': return renderBL();
    case 'ODOO_RECEIPT': return renderOdoo();
    case 'INVOICE_20': return renderInvoice(20);
    case 'ARCHIVE': return renderArchive();
    default: return <div className="p-10 text-center italic text-slate-400">Préparation...</div>;
  }
};

export default AccountingDoc;
