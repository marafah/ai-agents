'use client';

import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';
import type { ReactNode } from 'react';

type CalloutType = 'info' | 'success' | 'warning' | 'error';

const styles: Record<CalloutType, { icon: typeof Info; bg: string; border: string; iconColor: string }> = {
  info: { icon: Info, bg: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.3)', iconColor: '#3b82f6' },
  success: { icon: CheckCircle, bg: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.3)', iconColor: '#10b981' },
  warning: { icon: AlertTriangle, bg: 'rgba(245, 158, 11, 0.08)', border: 'rgba(245, 158, 11, 0.3)', iconColor: '#f59e0b' },
  error: { icon: XCircle, bg: 'rgba(239, 68, 68, 0.08)', border: 'rgba(239, 68, 68, 0.3)', iconColor: '#ef4444' },
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

export default function Callout({ type = 'info', title, children }: CalloutProps) {
  const style = styles[type];
  const Icon = style.icon;

  return (
    <div
      className="rounded-xl p-4 border flex gap-3"
      style={{ background: style.bg, borderColor: style.border }}
    >
      <span className="flex-shrink-0 mt-0.5" style={{ color: style.iconColor }}><Icon className="h-5 w-5" /></span>
      <div>
        {title && (
          <p className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
            {title}
          </p>
        )}
        <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
