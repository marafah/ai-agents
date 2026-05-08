'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Eye, CheckCircle } from 'lucide-react';

const nodes = [
  { en: 'Thought', ar: 'التفكير', color: '#3b82f6', icon: Brain },
  { en: 'Action', ar: 'الإجراء', color: '#f59e0b', icon: Zap },
  { en: 'Observation', ar: 'المراقبة', color: '#10b981', icon: Eye },
];

export default function ReActCycleDiagram({ locale }: { locale: 'en' | 'ar' }) {
  const isAr = locale === 'ar';

  // Triangle positions
  const positions = [
    { x: 170, y: 50 },  // top - Thought
    { x: 290, y: 210 }, // bottom-right - Action
    { x: 50, y: 210 },  // bottom-left - Observation
  ];

  const finalAnswerPos = { x: 170, y: 290 };

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
        {isAr ? 'نمط ReAct' : 'ReAct Pattern'}
      </motion.h3>

      <svg viewBox="0 0 340 330" width="100%" style={{ maxHeight: 320 }}>
        <defs>
          {nodes.map((n, i) => (
            <marker
              key={`m-${i}`}
              id={`react-arrow-${i}`}
              markerWidth="8"
              markerHeight="6"
              refX="7"
              refY="3"
              orient="auto"
            >
              <polygon points="0 0, 8 3, 0 6" fill={n.color} opacity={0.7} />
            </marker>
          ))}
          <marker id="react-arrow-final" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#f43f5e" opacity={0.8} />
          </marker>
        </defs>

        {/* Arrows between nodes */}
        {nodes.map((_, i) => {
          const from = positions[i];
          const to = positions[(i + 1) % 3];
          const dx = to.x - from.x;
          const dy = to.y - from.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const offsetStart = 30;
          const offsetEnd = 30;
          const sx = from.x + (dx / len) * offsetStart;
          const sy = from.y + (dy / len) * offsetStart;
          const ex = to.x - (dx / len) * offsetEnd;
          const ey = to.y - (dy / len) * offsetEnd;
          return (
            <motion.line
              key={`line-${i}`}
              x1={sx}
              y1={sy}
              x2={ex}
              y2={ey}
              stroke={nodes[i].color}
              strokeWidth={2}
              strokeOpacity={0.5}
              strokeDasharray="6 3"
              markerEnd={`url(#react-arrow-${i})`}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
            />
          );
        })}

        {/* Arrow from Observation to Final Answer */}
        <motion.line
          x1={positions[2].x + 20}
          y1={positions[2].y + 24}
          x2={finalAnswerPos.x - 30}
          y2={finalAnswerPos.y}
          stroke="#f43f5e"
          strokeWidth={2}
          strokeOpacity={0.6}
          markerEnd="url(#react-arrow-final)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.4 }}
        />

        {/* Animated pulse dot traveling */}
        <motion.circle
          r={4}
          fill="#60a5fa"
          animate={{
            cx: [...positions.map((p) => p.x), positions[0].x],
            cy: [...positions.map((p) => p.y), positions[0].y],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Step nodes */}
        {nodes.map((node, i) => {
          const pos = positions[i];
          const Icon = node.icon;
          return (
            <motion.g
              key={node.en}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
              style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
            >
              <circle cx={pos.x} cy={pos.y} r={28} fill={`${node.color}18`} stroke={node.color} strokeWidth={2.5} />
              <foreignObject x={pos.x - 11} y={pos.y - 11} width={22} height={22}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22 }}>
                  <Icon size={18} color={node.color} />
                </div>
              </foreignObject>
              <text
                x={pos.x}
                y={i === 0 ? pos.y - 36 : pos.y + 46}
                textAnchor="middle"
                fill="var(--text-primary)"
                fontSize={12}
                fontWeight={700}
              >
                {isAr ? node.ar : node.en}
              </text>
            </motion.g>
          );
        })}

        {/* Final Answer node */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
          style={{ transformOrigin: `${finalAnswerPos.x}px ${finalAnswerPos.y}px` }}
        >
          <rect
            x={finalAnswerPos.x - 55}
            y={finalAnswerPos.y - 16}
            width={110}
            height={32}
            rx={16}
            fill="#f43f5e18"
            stroke="#f43f5e"
            strokeWidth={2}
          />
          <foreignObject x={finalAnswerPos.x - 50} y={finalAnswerPos.y - 10} width={20} height={20}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20 }}>
              <CheckCircle size={14} color="#f43f5e" />
            </div>
          </foreignObject>
          <text
            x={finalAnswerPos.x + 8}
            y={finalAnswerPos.y + 5}
            textAnchor="middle"
            fill="#f43f5e"
            fontSize={11}
            fontWeight={700}
          >
            {isAr ? 'الإجابة النهائية' : 'Final Answer'}
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
