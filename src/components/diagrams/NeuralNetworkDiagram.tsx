'use client';

import { motion } from 'framer-motion';

const layers = [
  { count: 3, color: '#10b981', labelEn: 'Input', labelAr: 'مدخلات' },
  { count: 4, color: '#3b82f6', labelEn: 'Hidden 1', labelAr: 'مخفية 1' },
  { count: 4, color: '#8b5cf6', labelEn: 'Hidden 2', labelAr: 'مخفية 2' },
  { count: 2, color: '#f59e0b', labelEn: 'Output', labelAr: 'مخرجات' },
];

const SVG_WIDTH = 600;
const SVG_HEIGHT = 320;
const PADDING_X = 80;
const PADDING_TOP = 30;
const USABLE_HEIGHT = 230;

function getNodePositions() {
  const positions: { x: number; y: number; color: string }[][] = [];
  const layerSpacing =
    (SVG_WIDTH - PADDING_X * 2) / (layers.length - 1);

  for (let li = 0; li < layers.length; li++) {
    const layer = layers[li];
    const x = PADDING_X + li * layerSpacing;
    const nodeSpacing = USABLE_HEIGHT / (layer.count + 1);
    const layerPositions: { x: number; y: number; color: string }[] = [];

    for (let ni = 0; ni < layer.count; ni++) {
      layerPositions.push({
        x,
        y: PADDING_TOP + nodeSpacing * (ni + 1),
        color: layer.color,
      });
    }
    positions.push(layerPositions);
  }
  return positions;
}

export default function NeuralNetworkDiagram({
  locale,
}: {
  locale: 'en' | 'ar';
}) {
  const isAr = locale === 'ar';
  const positions = getNodePositions();

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '16px 0',
        direction: isAr ? 'rtl' : 'ltr',
      }}
    >
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        style={{ width: '100%', maxWidth: 640, height: 'auto' }}
      >
        {/* Connections between layers */}
        {positions.map((layer, li) => {
          if (li >= positions.length - 1) return null;
          const nextLayer = positions[li + 1];
          return layer.map((from, fi) =>
            nextLayer.map((to, ti) => (
              <motion.line
                key={`c-${li}-${fi}-${ti}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--border-primary)"
                strokeWidth={1}
                strokeOpacity={0.5}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  delay: li * 0.3,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
              />
            )),
          );
        })}

        {/* Pulse animation lines (highlighted connections) */}
        {positions.map((layer, li) => {
          if (li >= positions.length - 1) return null;
          const nextLayer = positions[li + 1];
          // Pick one connection per layer pair to animate
          const from = layer[0];
          const to = nextLayer[0];
          return (
            <motion.line
              key={`pulse-${li}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={from.color}
              strokeWidth={2.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{
                delay: li * 0.5,
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          );
        })}

        {/* Nodes */}
        {positions.map((layer, li) =>
          layer.map((node, ni) => (
            <motion.g key={`n-${li}-${ni}`}>
              {/* Glow ring */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={16}
                fill="none"
                stroke={node.color}
                strokeWidth={2}
                strokeOpacity={0.3}
                initial={{ scale: 0 }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{
                  delay: li * 0.3 + ni * 0.08,
                  duration: 2.5,
                  repeat: Infinity,
                }}
              />
              {/* Main circle */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={12}
                fill={node.color}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: li * 0.2 + ni * 0.06,
                  duration: 0.4,
                  type: 'spring',
                  stiffness: 200,
                }}
              />
              {/* Inner highlight */}
              <circle
                cx={node.x - 3}
                cy={node.y - 3}
                r={4}
                fill="#ffffff"
                fillOpacity={0.3}
              />
            </motion.g>
          )),
        )}

        {/* Layer labels */}
        {layers.map((layer, li) => {
          const x = PADDING_X + li * ((SVG_WIDTH - PADDING_X * 2) / (layers.length - 1));
          return (
            <motion.text
              key={`label-${li}`}
              x={x}
              y={SVG_HEIGHT - 16}
              textAnchor="middle"
              fill={layer.color}
              fontSize={13}
              fontWeight={600}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: li * 0.2 + 0.5, duration: 0.4 }}
            >
              {isAr ? layer.labelAr : layer.labelEn}
            </motion.text>
          );
        })}
      </svg>
    </div>
  );
}
