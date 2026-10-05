import { motion } from 'framer-motion';

export const NetworkNode = ({ x, y, label }: { x: number, y: number, label: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    className="absolute w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(204,255,0,0.5)]"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs text-text-muted whitespace-nowrap">
      {label}
    </span>
  </motion.div>
);

export const NetworkConnection = ({ from, to }: { from: [number, number], to: [number, number] }) => (
  <motion.svg className="absolute inset-0 w-full h-full pointer-events-none">
    <motion.line
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      x1={`${from[0]}%`}
      y1={`${from[1]}%`}
      x2={`${to[0]}%`}
      y2={`${to[1]}%`}
      stroke="white"
      strokeWidth="1"
    />
  </motion.svg>
);
