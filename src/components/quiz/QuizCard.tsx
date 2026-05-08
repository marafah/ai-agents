'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';
import type { QuizQuestion } from '@/types';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer?: (correct: boolean) => void;
  showNumber?: number;
  total?: number;
}

export default function QuizCard({ question, onAnswer, showNumber, total }: QuizCardProps) {
  const { locale } = useLocale();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const isCorrect = selectedAnswer === question.correctAnswer;
  const options = question.options?.[locale] || [];

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setShowResult(true);
    onAnswer?.(isCorrect);
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setShowResult(false);
  };

  return (
    <div
      className="rounded-xl p-6 border"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
    >
      {showNumber && total && (
        <div className="text-sm mb-2" style={{ color: 'var(--text-tertiary)' }}>
          {locale === 'en' ? `Question ${showNumber} of ${total}` : `السؤال ${showNumber} من ${total}`}
        </div>
      )}

      <div className="flex items-start gap-3 mb-4">
        <HelpCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
        <h3 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
          {question.question[locale]}
        </h3>
      </div>

      <div className="space-y-2 mb-4">
        {options.map((option, index) => {
          let borderColor = 'var(--border-primary)';
          let bg = 'transparent';

          if (showResult) {
            if (index === question.correctAnswer) {
              borderColor = '#10b981';
              bg = 'rgba(16, 185, 129, 0.08)';
            } else if (index === selectedAnswer && !isCorrect) {
              borderColor = '#ef4444';
              bg = 'rgba(239, 68, 68, 0.08)';
            }
          } else if (index === selectedAnswer) {
            borderColor = 'var(--color-primary)';
            bg = 'rgba(99, 102, 241, 0.08)';
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && setSelectedAnswer(index)}
              disabled={showResult}
              className="w-full text-start rounded-lg p-3 border transition-all flex items-center gap-3"
              style={{ borderColor, background: bg }}
            >
              <span
                className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  borderColor: index === selectedAnswer ? 'var(--color-primary)' : 'var(--border-secondary)',
                  color: index === selectedAnswer ? 'var(--color-primary)' : 'var(--text-tertiary)',
                }}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-sm" style={{ color: 'var(--text-primary)' }}>
                {option}
              </span>
              {showResult && index === question.correctAnswer && (
                <CheckCircle className="h-4 w-4 text-green-500 ms-auto flex-shrink-0" />
              )}
              {showResult && index === selectedAnswer && !isCorrect && (
                <XCircle className="h-4 w-4 text-red-500 ms-auto flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full py-2.5 rounded-lg font-semibold text-white gradient-bg disabled:opacity-50 transition-opacity"
        >
          {t('common.submit', locale)}
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <div
              className="flex items-center gap-2 p-3 rounded-lg"
              style={{
                background: isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                color: isCorrect ? '#10b981' : '#ef4444',
              }}
            >
              {isCorrect ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
              <span className="font-semibold">
                {isCorrect ? t('common.correct', locale) : t('common.incorrect', locale)}
              </span>
            </div>

            <div
              className="p-3 rounded-lg border"
              style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-secondary)' }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {t('common.explanation', locale)}
              </p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {question.explanation[locale]}
              </p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-2 rounded-lg font-medium border transition-colors hover:bg-[var(--bg-tertiary)]"
              style={{ borderColor: 'var(--border-primary)', color: 'var(--text-secondary)' }}
            >
              {locale === 'en' ? 'Try Again' : 'حاول مرة أخرى'}
            </button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
