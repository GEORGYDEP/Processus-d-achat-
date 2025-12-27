
import React, { useState, useEffect } from 'react';
import { SCENARIO_STEPS } from './constants';
import { StepStatus } from './types';
import AccountingDoc from './components/AccountingDoc';
import Quiz from './components/Quiz';
import { ChevronRight, CheckCircle, FileText, LayoutDashboard, History, Info, BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const currentStep = SCENARIO_STEPS[currentStepIdx];

  const handleStepComplete = () => {
    if (!completedSteps.includes(currentStep.id)) {
      setCompletedSteps([...completedSteps, currentStep.id]);
    }
    if (currentStepIdx < SCENARIO_STEPS.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const jumpToStep = (idx: number) => {
    if (idx <= completedSteps.length) {
      setCurrentStepIdx(idx);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-xl border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg shadow-inner">
              <LayoutDashboard size={24} />
            </div>
            <div>
              <h1 className="font-black text-xl tracking-tight leading-none">COMPTASIM</h1>
              <p className="text-[10px] uppercase text-blue-400 font-bold tracking-widest mt-1">Édition Technique 2026</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowHistory(!showHistory)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-semibold text-sm ${showHistory ? 'bg-blue-600 text-white shadow-lg' : 'hover:bg-slate-800 text-slate-400'}`}
            >
              <History size={18} />
              <span className="hidden sm:inline">Dossier Archivé ({completedSteps.length})</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Timeline Sidebar */}
        <aside className="lg:col-span-3 space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 border-b pb-4">Cycle d'Achat Standard</h2>
            <div className="space-y-6">
              {SCENARIO_STEPS.map((step, idx) => {
                const isCompleted = completedSteps.includes(step.id);
                const isCurrent = currentStepIdx === idx;
                
                return (
                  <button
                    key={step.id}
                    onClick={() => jumpToStep(idx)}
                    disabled={!isCompleted && !isCurrent}
                    className={`flex items-start gap-4 text-left w-full group relative ${(!isCompleted && !isCurrent) ? 'opacity-30 cursor-not-allowed' : 'hover:translate-x-1 transition-transform'}`}
                  >
                    <div className="relative flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all z-10 ${
                        isCompleted ? 'bg-green-500 text-white scale-110' : isCurrent ? 'bg-blue-600 text-white ring-4 ring-blue-100 scale-110' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {isCompleted ? <CheckCircle size={16} /> : idx + 1}
                      </div>
                      {idx !== SCENARIO_STEPS.length - 1 && (
                        <div className={`w-0.5 h-12 -mb-6 mt-1 transition-colors ${isCompleted ? 'bg-green-200' : 'bg-slate-100'}`}></div>
                      )}
                    </div>
                    <div className="pt-1">
                      <p className={`text-sm font-bold leading-tight transition-colors ${isCurrent ? 'text-blue-600' : isCompleted ? 'text-slate-800' : 'text-slate-400'}`}>
                        {step.title}
                      </p>
                      {isCurrent && <div className="h-1 w-8 bg-blue-600 rounded-full mt-1 animate-pulse"></div>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={20} className="text-blue-200" />
              <h3 className="font-bold text-sm uppercase tracking-wide">Note métier</h3>
            </div>
            <p className="text-xs text-blue-100 leading-relaxed opacity-90">
              Chaque étape doit être tracée pour permettre le <strong>lettrage comptable</strong>. Un document manquant peut invalider la déduction de TVA lors d'un contrôle fiscal.
            </p>
          </div>
        </aside>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-8">
          {/* Active Step Header */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 border-l-8 border-l-blue-600">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest">
                <FileText size={16} />
                Phase {currentStepIdx + 1}
              </div>
              <div className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">
                BELGIAN ACCOUNTING STD
              </div>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">{currentStep.title}</h2>
            <p className="text-lg text-slate-500 leading-relaxed">{currentStep.description}</p>
          </div>

          {/* Document Display */}
          <div className="min-h-[500px] animate-in zoom-in-95 duration-300">
            <AccountingDoc 
               key={`doc-${currentStep.id}`}
               type={currentStep.documentType} 
               isSigned={completedSteps.includes(currentStep.id)} 
            />
          </div>

          {/* Interaction */}
          <div className="animate-in slide-in-from-bottom-8 duration-500">
            <Quiz 
              key={`quiz-${currentStep.id}`}
              questions={currentStep.questions} 
              onComplete={handleStepComplete} 
            />
          </div>
        </div>
      </main>

      {/* History Modal Overlay */}
      {showHistory && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/20">
            <div className="p-8 border-b flex justify-between items-center bg-slate-50">
              <div>
                <h3 className="text-2xl font-black flex items-center gap-3 text-slate-800">
                  <History className="text-blue-600" />
                  Archives HD Construct
                </h3>
                <p className="text-slate-500 text-sm font-medium">Répertoire des documents validés (Cycle 2026-001)</p>
              </div>
              <button onClick={() => setShowHistory(false)} className="bg-slate-200 hover:bg-red-100 hover:text-red-600 p-2 rounded-full transition-colors font-bold">×</button>
            </div>
            <div className="p-8 overflow-y-auto space-y-4 bg-slate-50/30">
              {completedSteps.length === 0 ? (
                <div className="text-center py-24 text-slate-400">
                   <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText size={32} />
                   </div>
                   <p className="font-bold">Dossier vide</p>
                   <p className="text-sm">Validez les premières étapes pour voir les documents ici.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SCENARIO_STEPS.filter(s => completedSteps.includes(s.id)).map(s => (
                    <div key={s.id} className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-4 cursor-pointer group">
                      <div className="bg-green-100 text-green-700 p-3 rounded-xl group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <CheckCircle size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="font-black text-slate-800 tracking-tight">{s.title}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mt-1">Status : ARCHIVÉ ✓</p>
                      </div>
                      <ChevronRight className="text-slate-300 group-hover:text-blue-500" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 bg-slate-100 border-t flex justify-end">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Technique de Comptabilité - 4e Année</p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t p-10 mt-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-md">
            <h4 className="font-black text-slate-900 mb-2">ComptaSim Pédagogie</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Outil de simulation réaliste pour l'apprentissage du cycle d'achat en Belgique. 
              Respect des normes TVA et des principes de contrôle interne.
            </p>
          </div>
          <div className="flex gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
             <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-tighter">Powered by</p>
                <p className="font-bold text-indigo-600">Odoo UI</p>
             </div>
             <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-tighter">Legal Base</p>
                <p className="font-bold text-slate-900">SPF Finances</p>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
