'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MONIGOTE, BUBBLE, ARROW_CURVE, ICONS, PAPER_BORDER, DOT } from './SketchAssets'

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const steps = [
  { id: 'permit', title: 'Permit', desc: 'Before work', icon: ICONS.document, rule: 'Rule 2-004', detail: 'Obtain a permit BEFORE commencing any installation, alteration, repair, or extension of electrical equipment.' },
  { id: 'fees', title: 'Fees', desc: 'Pay upfront', icon: ICONS.dollar, rule: 'Rule 2-008', detail: 'Fees shall be paid at the time the application for a permit is filed.' },
  { id: 'post', title: 'Post it', desc: 'On site', icon: ICONS.clipboard, rule: 'Rule 2-010', detail: 'A copy shall be posted conspicuously at the work site until inspection is completed.' },
  { id: 'notify', title: 'Notify', desc: 'In writing', icon: ICONS.eye, rule: 'Rule 2-012', detail: 'Notify the inspection department in writing before any work is concealed.' },
  { id: 'inspect', title: 'Inspect', desc: 'Fix issues', icon: ICONS.eye, rule: 'Rule 2-012', detail: 'The inspector reviews for CEC compliance. Deficiencies must be corrected.' },
  { id: 'energize', title: 'Energize!', desc: 'Go live', icon: ICONS.bolt, rule: 'Rule 2-016', detail: 'Current-permit authorizes connection to electrical energy.' },
]

// Organic positions along the S-curve
const positions = [
  { x: 80, y: 115, rot: -3, char: 'pointing' as const },
  { x: 230, y: 80, rot: 2, char: 'working' as const },
  { x: 380, y: 140, rot: -2, char: null },
  { x: 240, y: 240, rot: 3, char: 'thinking' as const },
  { x: 440, y: 235, rot: -1, char: null },
  { x: 570, y: 310, rot: 2, char: 'celebrating' as const },
]

const STROKE = '#333'
const CORAL = '#d4856a'

// ---------------------------------------------------------------------------
// Monigote renderer
// ---------------------------------------------------------------------------

function Monigote({ posture, x, y, size = 55, color = STROKE }: {
  posture: keyof typeof MONIGOTE; x: number; y: number; size?: number; color?: string
}) {
  const scale = size / 80
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      {MONIGOTE[posture].map((d, i) => (
        <path key={i} d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </g>
  )
}

// ---------------------------------------------------------------------------
// Step blob with icon
// ---------------------------------------------------------------------------

function StepBlob({ step, pos, index, onSelect }: {
  step: typeof steps[0]
  pos: typeof positions[0]
  index: number
  onSelect: () => void
}) {
  return (
    <motion.g
      className="cursor-pointer"
      style={{ transformOrigin: `${pos.x + 60}px ${pos.y + 35}px` }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1, rotate: pos.rot }}
      transition={{ delay: 0.15 * index, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08, rotate: 0 }}
      whileTap={{ scale: 0.94 }}
      onClick={onSelect}
    >
      {/* Blob outline */}
      <g transform={`translate(${pos.x},${pos.y})`}>
        <path
          d={BUBBLE.blob}
          fill="#fdfbf7"
          stroke={STROKE}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Step icon (small) */}
        <g transform="translate(15,12) scale(0.55)" opacity="0.5">
          {step.icon.map((d, i) => (
            <path key={i} d={d} fill="none" stroke={CORAL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          ))}
        </g>
        {/* Text */}
        <text x="60" y="32" textAnchor="middle" fill={STROKE} fontSize="14" fontWeight="700" fontFamily="'Caveat', cursive">
          {index + 1}. {step.title}
        </text>
        <text x="60" y="48" textAnchor="middle" fill="#64748b" fontSize="11" fontFamily="'Caveat', cursive">
          {step.desc}
        </text>
      </g>

      {/* Dot on the path */}
      <g transform={`translate(${pos.x + 60},${pos.y + 35})`}>
        <path d={DOT} fill={CORAL} opacity="0.4" />
      </g>
    </motion.g>
  )
}

// ---------------------------------------------------------------------------
// Detail modal
// ---------------------------------------------------------------------------

function DetailModal({ step, onClose }: { step: typeof steps[0]; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <motion.div
          className="relative z-10 w-full max-w-sm p-6 rounded-xl"
          style={{ background: '#fdfbf7' }}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 22, stiffness: 280 }}
        >
          {/* Hand-drawn border via SVG overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 440 220" preserveAspectRatio="none">
            <path d={PAPER_BORDER} fill="none" stroke={STROKE} strokeWidth="1.5" />
          </svg>

          <button onClick={onClose} className="absolute top-3 right-3 z-20 text-slate-400 hover:text-slate-700 text-lg">×</button>

          <div className="relative z-10 flex items-start gap-3 font-hand">
            <svg viewBox="0 0 48 48" className="w-10 h-10 flex-shrink-0" style={{ color: CORAL }}>
              {step.icon.map((d, i) => (
                <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ))}
            </svg>
            <div>
              <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed mt-1">{step.detail}</p>
              <span className="inline-block mt-2 text-sm font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">{step.rule}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function PermitSteps() {
  const [selected, setSelected] = useState<typeof steps[0] | null>(null)

  return (
    <div className="relative font-hand" style={{ background: '#fdfbf7' }}>
      {/* Paper border */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 440 220" preserveAspectRatio="none">
        <path d={PAPER_BORDER} fill="none" stroke="#c4a882" strokeWidth="1.2" />
      </svg>

      {/* Title */}
      <div className="pt-6 pb-2 px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-center"
          style={{ fontFamily: "'Arial Black', sans-serif", color: '#1e293b' }}>
          PERMIT STEPS
        </h2>
        {/* Hand-drawn underline */}
        <svg className="mx-auto mt-1" width="250" height="8" viewBox="0 0 250 8">
          <path d="M5 5c30-3 70-3 120-2 40 0.8 80 1 120 0" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Main SVG canvas */}
      <div className="relative z-10 px-4 pb-8">
        <svg viewBox="0 0 720 420" className="w-full h-auto">
          {/* S-curve flow path — behind everything */}
          <path d={ARROW_CURVE.longFlow} fill="none" stroke={CORAL} strokeWidth="3" strokeLinecap="round" />
          <path d={ARROW_CURVE.longFlowHead} fill="none" stroke={CORAL} strokeWidth="3.5" strokeLinecap="round" />

          {/* Characters along the flow */}
          <Monigote posture="pointing" x={10} y={100} size={65} />
          <Monigote posture="working" x={170} y={30} size={50} color={CORAL} />
          <Monigote posture="thinking" x={295} y={185} size={50} color="#64748b" />
          <Monigote posture="standing" x={375} y={275} size={45} />
          <Monigote posture="celebrating" x={650} y={310} size={60} color="#059669" />

          {/* Step blobs */}
          {steps.map((step, i) => (
            <StepBlob key={step.id} step={step} pos={positions[i]} index={i} onSelect={() => setSelected(step)} />
          ))}

          {/* Bottom motto */}
          <g transform="translate(200,395)">
            <path d="M0 2c60-2 130-2 200 0" fill="none" stroke={CORAL} strokeWidth="3" strokeLinecap="round" />
            <text x="100" y="-4" textAnchor="middle" fill="#334155" fontSize="16" fontWeight="700" fontFamily="'Caveat', cursive">
              No permit = No work. Always.
            </text>
          </g>
        </svg>
      </div>

      {/* Modal */}
      {selected && <DetailModal step={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
