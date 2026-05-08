'use client';

import { useEffect, type ReactNode } from 'react';
import { useLocale } from '@/hooks/useLocale';

export function DirectionProvider({ children }: { children: ReactNode }) {
  const { locale, direction } = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [locale, direction]);

  return <>{children}</>;
}
