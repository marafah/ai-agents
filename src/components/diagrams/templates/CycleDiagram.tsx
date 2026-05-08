'use client';

import { motion } from 'framer-motion';
import type { CycleData } from './types';

export default function CycleDiagram({ data, locale }: { data: CycleData; locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const { nodes, centerLabel } = data;
  const count = nodes.length;
  const radius = 110;
  const cx = 170;
  const cy = 160;

  const getPos = (index: number) => {
    const angle = ((index * 360) / count - 90) * (Math.PI / 180);
    return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
  };

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} style={{ width: '100%', maxWidth: 440, margin: '0 auto', padding: 16, minHeight: 340, fontFamily: 'sans-serif' }}>
      <svg viewBox="0 0 340 320" width="100%" style={{ maxHeight: 300 }}>
        <motion.circle
          cx={cx} cy={cy} r={radius}
          fill="none" stroke="var(--border-primary)" strokeWidth={2} strokeDasharray="6 4"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }}
        />

        {nodes.map((_, i) => {
          const from = getPos(i);
          const to = getPos((i + 1) % count);
          return (
            <motion.line
              key={`line-${i}`}
              x1={from.x} y1={from.y} x2={to.x} y2={to.y}
              stroke={nodes[i].color} strokeWidth={1.5} strokeOpacity={0.3}
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
            />
          );
        })}

        <motion.circle
          r={5} fill="#f43f5e"
          animate={{
            cx: nodes.map((_, i) => getPos(i).x),
            cy: nodes.map((_, i) => getPos(i).y),
          }}
          transition={{ duration: count, repeat: Infinity, ease: 'easeInOut' }}
        />

        {centerLabel && (
          <>
            <motion.text x={cx} y={cy - 6} textAnchor="middle" fill="var(--text-primary)" fontSize={13} fontWeight={700}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              {isAr ? centerLabel.ar : centerLabel.en}
            </motion.text>
          </>
        )}

        {nodes.map((node, i) => {
          const pos = getPos(i);
          const Icon = node.icon;
          const labelAngle = ((i * 360) / count - 90);
          const labelR = radius + 36;
          const labelRad = labelAngle * (Math.PI / 180);
          const lx = cx + labelR * Math.cos(labelRad);
          const ly = cy + labelR * Math.sin(labelRad);
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 200 }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
            >
              <circle cx={pos.x} cy={pos.y} r={22} fill={`${node.color}22`} stroke={node.color} strokeWidth={2} />
              <foreignObject x={pos.x - 9} y={pos.y - 9} width={18} height={18}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18 }}>
                  <Icon size={14} color={node.color} />
                </div>
              </foreignObject>
              <text x={lx} y={ly} textAnchor="middle" fill={node.color} fontSize={10} fontWeight={700}>
                {isAr ? node.label.ar : node.label.en}
              </text>
              {node.description && (
                <text x={lx} y={ly + 12} textAnchor="middle" fill="var(--text-tertiary)" fontSize={8}>
                  {isAr ? node.description.ar : node.description.en}
                </text>
              )}
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
