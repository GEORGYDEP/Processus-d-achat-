
import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = questions[currentIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onComplete();
    }
  };

  return (
    <div className="bg-slate-800 text-white p-6 rounded-xl shadow-inner mt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
          {currentIdx + 1}
        </div>
        <h3 className="text-lg font-semibold">Test de compréhension</h3>
      </div>

      <p className="text-slate-300 mb-6 text-lg">{question.question}</p>

      <div className="space-y-3">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border transition-all ${
              isAnswered
                ? i === question.correctAnswer
                  ? 'border-green-500 bg-green-900/30'
                  : i === selectedOption
                  ? 'border-red-500 bg-red-900/30 opacity-70'
                  : 'border-slate-700 opacity-50'
                : selectedOption === i
                ? 'border-blue-500 bg-blue-900/30'
                : 'border-slate-700 hover:border-slate-500 hover:bg-slate-700/50'
            }`}
          >
            <div className="flex justify-between items-center">
              <span>{opt}</span>
              {isAnswered && i === question.correctAnswer && <CheckCircle2 className="text-green-500" size={20} />}
              {isAnswered && i === selectedOption && i !== question.correctAnswer && <XCircle className="text-red-500" size={20} />}
            </div>
          </button>
        ))}
      </div>

      {isAnswered && (
        <div className={`mt-6 p-4 rounded-lg ${selectedOption === question.correctAnswer ? 'bg-green-900/20 text-green-200' : 'bg-red-900/20 text-red-200'}`}>
          <p className="text-sm font-bold uppercase mb-1">
            {selectedOption === question.correctAnswer ? 'Bien joué !' : 'Oups...'}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}

      <div className="mt-8 flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-slate-600 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Vérifier
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-green-600 hover:bg-green-500 px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-colors"
          >
            {currentIdx < questions.length - 1 ? 'Suivant' : 'Valider cette étape'}
            <ArrowRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
