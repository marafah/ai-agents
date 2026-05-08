'use client';

import { motion } from 'framer-motion';
import { Eye, Brain, Zap, Search } from 'lucide-react';

const steps = [
  { en: 'Perceive', ar: 'الإدراك', desc_en: 'Receive input', desc_ar: 'استقبال المدخلات', color: '#10b981', icon: Eye, angle: 270 },
  { en: 'Think', ar: 'التفكير', desc_en: 'Reason with LLM', desc_ar: 'التفكير مع LLM', color: '#3b82f6', icon: Brain, angle: 0 },
  { en: 'Act', ar: 'التنفيذ', desc_en: 'Use tools', desc_ar: 'استخدام الأدوات', color: '#f59e0b', icon: Zap, angle: 90 },
  { en: 'Observe', ar: 'المراقبة', desc_en: 'Check results', desc_ar: 'فحص النتائج', color: '#8b5cf6', icon: Search, angle: 180 },
];

export default function AgentLoopDiagram({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';
  const radius = 110;
  const cx = 170;
  const cy = 160;

  const getPos = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  };

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        width: '100%',
        maxWidth: 440,
        margin: '0 auto',
        padding: 16,
        minHeight: 340,
        fontFamily: 'sans-serif',
      }}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          color: 'var(--text-primary)',
          fontSize: 16,
          fontWeight: 700,
          marginBottom: 8,
          textAlign: 'center',
        }}
      >
        {isAr ? 'حلقة الوكيل' : 'Agent Loop'}
      </motion.h3>

      <svg viewBox="0 0 340 320" width="100%" style={{ maxHeight: 300 }}>
        {/* Circular path */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          stroke="var(--border-primary)"
          strokeWidth={2}
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Arrows between nodes */}
        {steps.map((_, i) => {
          const from = getPos(steps[i].angle);
          const to = getPos(steps[(i + 1) % 4].angle);
          const midAngle = (steps[i].angle + steps[(i + 1) % 4].angle) / 2 + (i === 3 ? 180 : 0);
          const midR = radius + 18;
          const midRad = (midAngle * Math.PI) / 180;
          const mx = cx + midR * Math.cos(midRad);
          const my = cy + midR * Math.sin(midRad);
          return (
            <motion.path
              key={`arrow-${i}`}
              d={`M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`}
              fill="none"
              stroke={steps[i].color}
              strokeWidth={2}
              strokeOpacity={0.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8 + i * 0.2, duration: 0.5 }}
              markerEnd={`url(#arrowhead-${i})`}
            />
          );
        })}

        {/* Arrowhead markers */}
        <defs>
          {steps.map((step, i) => (
            <marker
              key={`marker-${i}`}
              id={`arrowhead-${i}`}
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill={step.color} />
            </marker>
          ))}
        </defs>

        {/* Animated traveling dot */}
        <motion.circle
          r={5}
          fill="#f43f5e"
          animate={{
            cx: steps.map((s) => getPos(s.angle).x),
            cy: steps.map((s) => getPos(s.angle).y),
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Center label */}
        <motion.text
          x={cx}
          y={cy - 6}
          textAnchor="middle"
          fill="var(--text-primary)"
          fontSize={13}
          fontWeight={700}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {isAr ? 'حلقة' : 'Agent'}
        </motion.text>
        <motion.text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          fill="var(--text-secondary)"
          fontSize={12}
          fontWeight={600}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {isAr ? 'الوكيل' : 'Loop'}
        </motion.text>

        {/* Step nodes */}
        {steps.map((step, i) => {
          const pos = getPos(step.angle);
          const Icon = step.icon;
          const labelOffsetY = step.angle === 270 ? -30 : step.angle === 90 ? 30 : 0;
          const labelOffsetX = step.angle === 0 ? 40 : step.angle === 180 ? -40 : 0;
          return (
            <motion.g
              key={step.en}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 200 }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
            >
              <circle cx={pos.x} cy={pos.y} r={24} fill={`${step.color}22`} stroke={step.color} strokeWidth={2} />
              <foreignObject x={pos.x - 10} y={pos.y - 10} width={20} height={20}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20 }}>
                  <Icon size={16} color={step.color} />
                </div>
              </foreignObject>
              <text
                x={pos.x + labelOffsetX}
                y={pos.y + labelOffsetY - 4}
                textAnchor="middle"
                fill="var(--text-primary)"
                fontSize={11}
                fontWeight={700}
              >
                {isAr ? step.ar : step.en}
              </text>
              <text
                x={pos.x + labelOffsetX}
                y={pos.y + labelOffsetY + 10}
                textAnchor="middle"
                fill="var(--text-secondary)"
                fontSize={9}
              >
                {isAr ? step.desc_ar : step.desc_en}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
