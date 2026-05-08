'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe, Bot } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';

const navLinks = [
  { href: '/paths', key: 'nav.paths' },
  { href: '/lessons', key: 'nav.lessons' },
  { href: '/playground', key: 'nav.playground' },
  { href: '/simulations', key: 'nav.simulations' },
  { href: '/exams', key: 'nav.exams' },
  { href: '/projects', key: 'nav.projects' },
  { href: '/about', key: 'nav.about' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, direction } = useLocale();

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'var(--bg-primary)',
        borderColor: 'var(--border-primary)',
      }}
      dir={direction}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="rounded-lg p-1.5" style={{ background: '#06b6d4' }}>
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              {t('site.title', locale)}
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--bg-tertiary)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                {t(link.key, locale)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLocale}
              className="p-2 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">{locale === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors hover:bg-[var(--bg-tertiary)]"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t overflow-hidden"
            style={{ borderColor: 'var(--border-primary)', background: 'var(--bg-primary)' }}
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--bg-tertiary)]"
                  style={{ color: 'var(--text-secondary)' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.key, locale)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
