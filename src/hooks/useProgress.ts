'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProgressData } from '@/types';

interface ProgressState extends ProgressData {
  completeLesson: (slug: string) => void;
  setQuizScore: (quizId: string, score: number) => void;
  setExamScore: (examId: string, score: number) => void;
  setCurrentPath: (pathId: string | null) => void;
  setLastVisited: (slug: string) => void;
  addTime: (minutes: number) => void;
  resetProgress: () => void;
  isLessonComplete: (slug: string) => boolean;
}

const initialState: ProgressData = {
  completedLessons: [],
  quizScores: {},
  examScores: {},
  currentPath: null,
  lastVisited: null,
  totalTimeMinutes: 0,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,
      completeLesson: (slug) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(slug)
            ? state.completedLessons
            : [...state.completedLessons, slug],
        })),
      setQuizScore: (quizId, score) =>
        set((state) => ({
          quizScores: { ...state.quizScores, [quizId]: score },
        })),
      setExamScore: (examId, score) =>
        set((state) => ({
          examScores: { ...state.examScores, [examId]: score },
        })),
      setCurrentPath: (pathId) => set({ currentPath: pathId }),
      setLastVisited: (slug) => set({ lastVisited: slug }),
      addTime: (minutes) =>
        set((state) => ({
          totalTimeMinutes: state.totalTimeMinutes + minutes,
        })),
      resetProgress: () => set(initialState),
      isLessonComplete: (slug) => get().completedLessons.includes(slug),
    }),
    {
      name: 'ai-agents-progress',
    }
  )
);

export function useProgress() {
  return useProgressStore();
}
