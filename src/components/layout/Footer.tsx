'use client';

import Link from 'next/link';
import { Bot, ExternalLink, Heart } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { t } from '@/lib/i18n';

export default function Footer() {
  const { locale, direction } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t mt-auto"
      style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-primary)' }}
      dir={direction}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="gradient-bg rounded-lg p-1.5">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                {t('site.title', locale)}
              </span>
            </Link>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {t('footer.description', locale)}
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('footer.resources', locale)}
            </h3>
            <ul className="space-y-2">
              {[
                { href: '/paths', label: t('nav.paths', locale) },
                { href: '/lessons', label: t('nav.lessons', locale) },
                { href: '/playground', label: t('nav.playground', locale) },
                { href: '/projects', label: t('nav.projects', locale) },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--color-primary)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('footer.community', locale)}
            </h3>
            <ul className="space-y-2">
              {[
                { href: 'https://github.com', label: 'GitHub', external: true },
                { href: '/about', label: t('nav.about', locale) },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--color-primary)]"
                    style={{ color: 'var(--text-secondary)' }}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('footer.legal', locale)}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors hover:text-[var(--color-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  MIT License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'var(--border-primary)' }}
        >
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            &copy; {year} AI Agents Academy. {t('footer.rights', locale)}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm flex items-center gap-1" style={{ color: 'var(--text-tertiary)' }}>
              {locale === 'en' ? 'Created by' : 'أنشأه'}{' '}
              <a
                href="https://marafah.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-[var(--color-primary)]"
                style={{ color: 'var(--text-secondary)' }}
              >
                Dr. Mohammad Arafah
              </a>
              {' '}<Heart className="h-3 w-3 text-red-500" />
            </span>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--color-primary)]"
              style={{ color: 'var(--text-tertiary)' }}
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
