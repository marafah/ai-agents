'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = 'python', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      dir="ltr"
      className="rounded-xl overflow-hidden border"
      style={{ borderColor: 'var(--border-primary)' }}
    >
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{
          background: 'var(--bg-tertiary)',
          borderColor: 'var(--border-primary)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          </div>
          {title && (
            <span className="text-xs font-medium ml-2" style={{ color: 'var(--text-secondary)' }}>
              {title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
            {language}
          </span>
          <button
            onClick={copyToClipboard}
            className="p-1 rounded transition-colors hover:bg-[var(--bg-secondary)]"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Copy code"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <pre
        dir="ltr"
        className="p-4 overflow-x-auto text-sm leading-relaxed"
        style={{ background: 'var(--bg-code)', color: '#e2e8f0', textAlign: 'left' }}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
