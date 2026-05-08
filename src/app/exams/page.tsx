'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardCheck,
  Clock,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  BarChart3,
  Lightbulb,
  Target,
  Filter,
} from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { useProgress } from '@/hooks/useProgress';
import { t } from '@/lib/i18n';
import { quizQuestions } from '@/data/quizzes';
import DifficultyBadge from '@/components/ui/DifficultyBadge';
import type { Difficulty, QuizQuestion } from '@/types';

type ExamPhase = 'setup' | 'quiz' | 'results';

interface AnswerRecord {
  questionId: string;
  selected: number;
  correct: boolean;
  category: string;
}

const difficultyFilters: Array<{ key: 'all' | Difficulty; labelKey: string }> = [
  { key: 'all', labelKey: 'lessons.filter.all' },
  { key: 'beginner', labelKey: 'lessons.filter.beginner' },
  { key: 'intermediate', labelKey: 'lessons.filter.intermediate' },
  { key: 'advanced', labelKey: 'lessons.filter.advanced' },
];

export default function ExamsPage() {
  const { locale, direction } = useLocale();
  const { setExamScore } = useProgress();

  const [phase, setPhase] = useState<ExamPhase>('setup');
  const [difficultyFilter, setDifficultyFilter] = useState<'all' | Difficulty>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [animationDirection, setAnimationDirection] = useState<1 | -1>(1);

  const filteredQuestions = useMemo(() => {
    if (difficultyFilter === 'all') return quizQuestions;
    return quizQuestions.filter((q) => q.difficulty === difficultyFilter);
  }, [difficultyFilter]);

  const currentQuestion: QuizQuestion | undefined = filteredQuestions[currentIndex];
  const totalQuestions = filteredQuestions.length;

  const startQuiz = useCallback(() => {
    setPhase('quiz');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setAnswers([]);
    setStartTime(Date.now());
    setAnimationDirection(1);
  }, []);

  const handleSubmitAnswer = useCallback(() => {
    if (selectedAnswer === null || !currentQuestion) return;
    const correct = selectedAnswer === currentQuestion.correctAnswer;
    setHasSubmitted(true);
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selected: selectedAnswer,
        correct,
        category: currentQuestion.category,
      },
    ]);
  }, [selectedAnswer, currentQuestion]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setAnimationDirection(1);
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
    } else {
      const now = Date.now();
      setEndTime(now);
      setPhase('results');
      const correctCount = [...answers].filter((a) => a.correct).length +
        (selectedAnswer === currentQuestion?.correctAnswer ? 1 : 0);
      const score = Math.round((correctCount / totalQuestions) * 100);
      setExamScore('main-exam', score);
    }
  }, [currentIndex, totalQuestions, answers, selectedAnswer, currentQuestion, setExamScore]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setAnimationDirection(-1);
      setCurrentIndex((i) => i - 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
    }
  }, [currentIndex]);

  const handleRetake = useCallback(() => {
    setPhase('setup');
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setHasSubmitted(false);
    setAnswers([]);
  }, []);

  // Results calculations
  const correctCount = answers.filter((a) => a.correct).length;
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const timeTaken = endTime - startTime;
  const minutes = Math.floor(timeTaken / 60000);
  const seconds = Math.floor((timeTaken % 60000) / 1000);

  const categoryBreakdown = useMemo(() => {
    const map: Record<string, { total: number; correct: number }> = {};
    answers.forEach((a) => {
      if (!map[a.category]) map[a.category] = { total: 0, correct: 0 };
      map[a.category].total++;
      if (a.correct) map[a.category].correct++;
    });
    return map;
  }, [answers]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // ── SETUP PHASE ──
  if (phase === 'setup') {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" dir={direction}>
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('exams.title', locale)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('exams.subtitle', locale)}
          </motion.p>
        </div>

        {/* Difficulty Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div
            className="inline-flex rounded-xl p-1 gap-1"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            {difficultyFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setDifficultyFilter(f.key)}
                className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: difficultyFilter === f.key ? 'var(--bg-card)' : 'transparent',
                  color: difficultyFilter === f.key ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  boxShadow: difficultyFilter === f.key ? 'var(--shadow-sm)' : 'none',
                }}
              >
                {t(f.labelKey, locale)}
              </button>
            ))}
          </div>
        </div>

        {/* Start Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto rounded-2xl p-8 border text-center"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: 'rgba(99, 102, 241, 0.1)' }}
          >
            <ClipboardCheck className="h-10 w-10" style={{ color: 'var(--color-primary)' }} />
          </div>

          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            {locale === 'ar' ? 'ابدأ الاختبار' : 'Start Exam'}
          </h2>
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'ar'
              ? `${filteredQuestions.length} أسئلة جاهزة لك`
              : `${filteredQuestions.length} questions are ready for you`}
          </p>

          <div
            className="flex items-center justify-center gap-6 mb-8 text-sm"
            style={{ color: 'var(--text-tertiary)' }}
          >
            <span className="flex items-center gap-1.5">
              <Target className="h-4 w-4" />
              {filteredQuestions.length} {locale === 'ar' ? 'سؤال' : 'Questions'}
            </span>
            <span className="flex items-center gap-1.5">
              <Filter className="h-4 w-4" />
              {difficultyFilter === 'all'
                ? t('lessons.filter.all', locale)
                : t(`common.${difficultyFilter}`, locale)}
            </span>
          </div>

          <button
            onClick={startQuiz}
            disabled={filteredQuestions.length === 0}
            className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-40"
            style={{ background: 'var(--color-primary)' }}
          >
            {t('common.start', locale)}
          </button>
        </motion.div>
      </div>
    );
  }

  // ── RESULTS PHASE ──
  if (phase === 'results') {
    const passed = scorePercent >= 70;
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12" dir={direction}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl p-8 border"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
        >
          {/* Trophy / Score */}
          <div className="text-center mb-8">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                background: passed ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
              }}
            >
              <Trophy
                className="h-12 w-12"
                style={{ color: passed ? '#10b981' : '#ef4444' }}
              />
            </div>
            <h2 className="text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
              {passed
                ? locale === 'ar' ? 'أحسنت!' : 'Great Job!'
                : locale === 'ar' ? 'حاول مرة أخرى' : 'Keep Practicing'}
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {locale === 'ar'
                ? 'إليك ملخص نتائجك'
                : 'Here is your results summary'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: 'var(--bg-tertiary)' }}
            >
              <BarChart3 className="h-5 w-5 mx-auto mb-2" style={{ color: 'var(--color-primary)' }} />
              <p className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {scorePercent}%
              </p>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                {t('common.score', locale)}
              </p>
            </div>
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: 'var(--bg-tertiary)' }}
            >
              <CheckCircle2 className="h-5 w-5 mx-auto mb-2" style={{ color: '#10b981' }} />
              <p className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {correctCount}/{totalQuestions}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                {t('common.correct', locale)}
              </p>
            </div>
            <div
              className="rounded-xl p-4 text-center"
              style={{ background: 'var(--bg-tertiary)' }}
            >
              <Clock className="h-5 w-5 mx-auto mb-2" style={{ color: 'var(--color-accent)' }} />
              <p className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {minutes}:{seconds.toString().padStart(2, '0')}
              </p>
              <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                {locale === 'ar' ? 'الوقت' : 'Time'}
              </p>
            </div>
          </div>

          {/* Category Breakdown */}
          {Object.keys(categoryBreakdown).length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {locale === 'ar' ? 'التفاصيل حسب الفئة' : 'Breakdown by Category'}
              </h3>
              <div className="space-y-3">
                {Object.entries(categoryBreakdown).map(([cat, data]) => {
                  const pct = Math.round((data.correct / data.total) * 100);
                  return (
                    <div key={cat}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span
                          className="capitalize font-medium"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {cat.replace(/-/g, ' ')}
                        </span>
                        <span style={{ color: 'var(--text-tertiary)' }}>
                          {data.correct}/{data.total} ({pct}%)
                        </span>
                      </div>
                      <div
                        className="h-2 rounded-full overflow-hidden"
                        style={{ background: 'var(--bg-tertiary)' }}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              pct >= 70 ? '#10b981' : pct >= 40 ? '#f59e0b' : '#ef4444',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Retake */}
          <button
            onClick={handleRetake}
            className="w-full py-3 px-6 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90"
            style={{ background: 'var(--color-primary)' }}
          >
            <RotateCcw className="h-4 w-4" />
            {locale === 'ar' ? 'إعادة الاختبار' : 'Retake Exam'}
          </button>
        </motion.div>
      </div>
    );
  }

  // ── QUIZ PHASE ──
  if (!currentQuestion) return null;

  const isCorrect = hasSubmitted && selectedAnswer === currentQuestion.correctAnswer;
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const questionAlreadyAnswered = answers.some((a) => a.questionId === currentQuestion.id);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12" dir={direction}>
      {/* Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
            {locale === 'ar'
              ? `السؤال ${currentIndex + 1} من ${totalQuestions}`
              : `Question ${currentIndex + 1} of ${totalQuestions}`}
          </span>
          <DifficultyBadge difficulty={currentQuestion.difficulty} />
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ background: 'var(--bg-tertiary)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'var(--color-primary)' }}
            initial={false}
            animate={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question Card with Animation */}
      <AnimatePresence mode="wait" custom={animationDirection}>
        <motion.div
          key={currentQuestion.id}
          custom={animationDirection}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="rounded-2xl p-6 sm:p-8 border"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-primary)' }}
        >
          {/* Question Type Badge */}
          <div className="mb-4">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
              style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
            >
              {currentQuestion.type === 'mcq'
                ? locale === 'ar' ? 'اختيار من متعدد' : 'Multiple Choice'
                : currentQuestion.type === 'true-false'
                  ? locale === 'ar' ? 'صح أو خطأ' : 'True / False'
                  : locale === 'ar' ? 'سيناريو' : 'Scenario'}
            </span>
          </div>

          {/* Question Text */}
          <h2
            className="text-xl font-semibold mb-6 leading-relaxed"
            style={{ color: 'var(--text-primary)' }}
          >
            {currentQuestion.question[locale]}
          </h2>

          {/* Options */}
          {currentQuestion.type === 'true-false' ? (
            /* True / False — Two Big Buttons */
            <div className="grid grid-cols-2 gap-4 mb-6">
              {currentQuestion.options?.[locale]?.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const showCorrect = hasSubmitted && idx === currentQuestion.correctAnswer;
                const showWrong = hasSubmitted && isSelected && idx !== currentQuestion.correctAnswer;

                let borderColor = 'var(--border-primary)';
                let bgColor = 'var(--bg-secondary)';
                if (showCorrect) { borderColor = '#10b981'; bgColor = 'rgba(16, 185, 129, 0.08)'; }
                else if (showWrong) { borderColor = '#ef4444'; bgColor = 'rgba(239, 68, 68, 0.08)'; }
                else if (isSelected) { borderColor = 'var(--color-primary)'; bgColor = 'rgba(99, 102, 241, 0.08)'; }

                return (
                  <button
                    key={idx}
                    onClick={() => !hasSubmitted && setSelectedAnswer(idx)}
                    disabled={hasSubmitted}
                    className="rounded-xl p-6 border-2 text-center font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
                    style={{ borderColor, background: bgColor, color: 'var(--text-primary)' }}
                  >
                    {showCorrect && <CheckCircle2 className="h-5 w-5" style={{ color: '#10b981' }} />}
                    {showWrong && <XCircle className="h-5 w-5" style={{ color: '#ef4444' }} />}
                    {opt}
                  </button>
                );
              })}
            </div>
          ) : (
            /* MCQ & Scenario — Radio-style Options */
            <div className="space-y-3 mb-6">
              {currentQuestion.options?.[locale]?.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const showCorrect = hasSubmitted && idx === currentQuestion.correctAnswer;
                const showWrong = hasSubmitted && isSelected && idx !== currentQuestion.correctAnswer;

                let borderColor = 'var(--border-primary)';
                let bgColor = 'transparent';
                if (showCorrect) { borderColor = '#10b981'; bgColor = 'rgba(16, 185, 129, 0.08)'; }
                else if (showWrong) { borderColor = '#ef4444'; bgColor = 'rgba(239, 68, 68, 0.08)'; }
                else if (isSelected) { borderColor = 'var(--color-primary)'; bgColor = 'rgba(99, 102, 241, 0.06)'; }

                return (
                  <button
                    key={idx}
                    onClick={() => !hasSubmitted && setSelectedAnswer(idx)}
                    disabled={hasSubmitted}
                    className="w-full flex items-center gap-4 rounded-xl p-4 border-2 text-start transition-all duration-200"
                    style={{ borderColor, background: bgColor }}
                  >
                    {/* Radio Circle */}
                    <span
                      className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
                      style={{
                        borderColor: showCorrect
                          ? '#10b981'
                          : showWrong
                            ? '#ef4444'
                            : isSelected
                              ? 'var(--color-primary)'
                              : 'var(--border-secondary)',
                      }}
                    >
                      {isSelected && !hasSubmitted && (
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ background: 'var(--color-primary)' }}
                        />
                      )}
                      {showCorrect && <CheckCircle2 className="h-4 w-4" style={{ color: '#10b981' }} />}
                      {showWrong && <XCircle className="h-4 w-4" style={{ color: '#ef4444' }} />}
                    </span>

                    <span
                      className="text-sm font-medium"
                      style={{
                        color: showCorrect
                          ? '#10b981'
                          : showWrong
                            ? '#ef4444'
                            : 'var(--text-primary)',
                      }}
                    >
                      {opt}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Explanation after submit */}
          <AnimatePresence>
            {hasSubmitted && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div
                  className="rounded-xl p-4 mb-6 flex gap-3"
                  style={{
                    background: isCorrect
                      ? 'rgba(16, 185, 129, 0.08)'
                      : 'rgba(239, 68, 68, 0.08)',
                    border: `1px solid ${isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
                  }}
                >
                  <Lightbulb
                    className="h-5 w-5 flex-shrink-0 mt-0.5"
                    style={{ color: isCorrect ? '#10b981' : '#ef4444' }}
                  />
                  <div>
                    <p
                      className="text-sm font-semibold mb-1"
                      style={{ color: isCorrect ? '#10b981' : '#ef4444' }}
                    >
                      {isCorrect ? t('common.correct', locale) : t('common.incorrect', locale)}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {currentQuestion.explanation[locale]}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="flex items-center gap-1 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-30"
              style={{ color: 'var(--text-secondary)' }}
            >
              {direction === 'rtl' ? (
                <ChevronRight className="h-4 w-4" />
              ) : (
                <ChevronLeft className="h-4 w-4" />
              )}
              {t('common.previous', locale)}
            </button>

            <div className="flex items-center gap-3">
              {!hasSubmitted && !questionAlreadyAnswered && (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-40"
                  style={{ background: 'var(--color-primary)' }}
                >
                  {t('common.submit', locale)}
                </button>
              )}

              {(hasSubmitted || questionAlreadyAnswered) && (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: 'var(--color-primary)' }}
                >
                  {isLastQuestion
                    ? locale === 'ar' ? 'عرض النتائج' : 'View Results'
                    : t('common.next', locale)}
                  {direction === 'rtl' ? (
                    <ChevronLeft className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
