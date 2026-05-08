'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Locale } from '@/types';
import { defaultLocale, isRtl, getDirection } from '@/lib/i18n';

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isRtl: boolean;
  direction: 'ltr' | 'rtl';
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: defaultLocale,
      isRtl: isRtl(defaultLocale),
      direction: getDirection(defaultLocale),
      setLocale: (locale: Locale) =>
        set({
          locale,
          isRtl: isRtl(locale),
          direction: getDirection(locale),
        }),
    }),
    {
      name: 'ai-agents-locale',
    }
  )
);

export function useLocale() {
  return useLocaleStore();
}
