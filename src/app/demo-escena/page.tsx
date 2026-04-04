'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SketchScene from '../../shared/components/SketchScene'
import SketchBubble from '../../shared/components/SketchBubble'
import SketchBox from '../../shared/components/SketchBox'
import SketchCharacter from '../../shared/components/sketches/SketchCharacter'
import SketchPath from '../../shared/components/sketches/SketchPath'
import SketchIcon from '../../shared/components/sketches/SketchIcon'
import { FileText, DollarSign, ClipboardCheck, Eye, Zap, X, Clock, RotateCcw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// --- Data ---

interface StepData {
  id: string
  icon: LucideIcon
  title: string
  shortDesc: string
  detail: string
  rule: string
}

const permitSteps: StepData[] = [
  { id: 'permit', icon: FileText, title: 'Permit', shortDesc: 'Before work', detail: 'Obtain a permit from the inspection department BEFORE commencing any installation, alteration, repair, or extension of electrical equipment.', rule: 'Rule 2-004' },
  { id: 'fees', icon: DollarSign, title: 'Fees', shortDesc: 'Pay upfront', detail: 'Fees shall be paid at the time the application for a permit is filed. No fee, no permit.', rule: 'Rule 2-008' },
  { id: 'post', icon: ClipboardCheck, title: 'Post it', shortDesc: 'On site', detail: 'A copy of the permit shall be posted conspicuously at the work site and not removed until inspection is completed.', rule: 'Rule 2-010' },
  { id: 'notify', icon: Eye, title: 'Notify', shortDesc: 'In writing', detail: 'Notify the inspection department in writing that work is ready for inspection before any work is concealed.', rule: 'Rule 2-012' },
  { id: 'inspect', icon: Eye, title: 'Inspect', shortDesc: 'Fix issues', detail: 'The inspector reviews for CEC compliance. Deficiencies must be corrected and re-inspected.', rule: 'Rule 2-012' },
  { id: 'energize', icon: Zap, title: 'Energize!', shortDesc: 'Go live', detail: 'Current-permit authorizes connection to electrical energy. The final green light from the inspection department.', rule: 'Rule 2-016' },
]

// Positions along the S-curve for each step (percentage-based for responsive feel)
const stepPositions = [
  { top: 100, left: 60 },
  { top: 80, left: 220 },
  { top: 160, left: 340 },
  { top: 240, left: 180 },
  { top: 220, left: 420 },
  { top: 310, left: 530 },
]

// Path waypoints for the S-curve connecting all steps
const pathPoints = [
  { x: 90, y: 130 },
  { x: 200, y: 100 },
  { x: 310, y: 110 },
  { x: 380, y: 180 },
  { x: 260, y: 260 },
  { x: 380, y: 250 },
  { x: 480, y: 280 },
  { x: 570, y: 340 },
]

// --- Detail Modal ---

function DetailModal({
  data,
  onClose,
}: {
  data: StepData
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="absolute inset-0 bg-black/40" onClick={onClose} />
        <motion.div
          className="relative z-10 w-full max-w-sm"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 22, stiffness: 280 }}
        >
          <SketchBubble color="#333" tail="none">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-20 text-slate-400 hover:text-slate-700"
            >
              <X size={16} />
            </button>
            <div className="flex items-start gap-3">
              <SketchIcon icon={data.icon} color="#d4856a" size={32} />
              <div>
                <h3 className="text-lg font-bold text-slate-800">{data.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">{data.detail}</p>
                <span className="inline-block mt-2 text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                  {data.rule}
                </span>
              </div>
            </div>
          </SketchBubble>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// --- Floating Step Bubble ---

function FloatingStep({
  step,
  index,
  style,
}: {
  step: StepData
  index: number
  style: React.CSSProperties
}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        className="absolute cursor-pointer"
        style={style}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 * index, duration: 0.4 }}
        whileHover={{ scale: 1.08, rotate: Math.random() > 0.5 ? 2 : -2 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setShowModal(true)}
      >
        <SketchBubble color="#333" tail="none">
          <div className="flex items-center gap-2">
            <SketchIcon icon={step.icon} color="#d4856a" size={24} />
            <div>
              <div className="text-sm font-bold text-slate-800">{index + 1}. {step.title}</div>
              <div className="text-xs text-slate-500">{step.shortDesc}</div>
            </div>
          </div>
        </SketchBubble>
      </motion.div>
      {showModal && <DetailModal data={step} onClose={() => setShowModal(false)} />}
    </>
  )
}

// --- Page ---

export default function DemoEscenaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Demo: Sketch Scene</h1>
        <p className="text-gray-400 text-sm mt-1">
          Click any bubble for full CEC rule details
        </p>
      </div>

      {/* === SCENE 1: Reference-style — "EL PROBLEMA" === */}
      <SketchScene title="EL PROBLEMA" titleColor="#1e293b" className="rounded-2xl mb-8">
        <div className="relative" style={{ height: 320 }}>
          {/* Stickman — left side, thinking */}
          <div className="absolute" style={{ top: 40, left: 10 }}>
            <SketchCharacter posture="thinking" color="#333" size={100} />
          </div>

          {/* Floating speech bubbles around character */}
          <motion.div className="absolute" style={{ top: 0, left: 120 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <SketchBubble color="#333" tail="left">
              <span className="text-sm font-bold">Hazlo en formato tabla</span>
            </SketchBubble>
          </motion.div>

          <motion.div className="absolute" style={{ top: 60, left: 180 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <SketchBubble color="#333" tail="left">
              <span className="text-sm font-bold">Usa este tono</span>
            </SketchBubble>
          </motion.div>

          <motion.div className="absolute" style={{ top: 120, left: 110 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <SketchBubble color="#333" tail="left">
              <span className="text-xs">Siempre en español</span>
            </SketchBubble>
          </motion.div>

          <motion.div className="absolute" style={{ top: 190, left: 20 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            <SketchBubble color="#333" tail="top">
              <span className="text-xs">No olvides el logo</span>
            </SketchBubble>
          </motion.div>

          <motion.div className="absolute" style={{ top: 190, left: 160 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <SketchBubble color="#333" tail="top">
              <span className="text-xs">Sigue estos pasos</span>
            </SketchBubble>
          </motion.div>

          {/* Coral arrows from bubbles toward clock */}
          <div className="absolute" style={{ top: 100, left: 310 }}>
            <SketchPath
              points={[
                { x: 10, y: 40 },
                { x: 50, y: 20 },
                { x: 90, y: 50 },
                { x: 130, y: 30 },
              ]}
              color="#d4856a"
              strokeWidth={3}
              width={140}
              height={70}
            />
          </div>

          {/* Clock — central object */}
          <div className="absolute flex flex-col items-center" style={{ top: 60, left: 430 }}>
            <SketchIcon icon={Clock} color="#d4856a" fillColor="rgba(212,133,106,0.1)" size={80} />
            <span
              className="text-base font-black uppercase mt-1 tracking-wide"
              style={{ fontFamily: "'Arial Black', sans-serif", color: '#333' }}
            >
              Tiempo Perdido
            </span>
          </div>

          {/* Arrow from clock to text */}
          <div className="absolute" style={{ top: 50, left: 560 }}>
            <SketchPath
              points={[
                { x: 10, y: 60 },
                { x: 40, y: 30 },
                { x: 70, y: 50 },
              ]}
              color="#d4856a"
              strokeWidth={3}
              width={80}
              height={70}
            />
          </div>

          {/* Right side text */}
          <motion.div className="absolute font-hand" style={{ top: 20, left: 620 }}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="text-xl text-slate-800 leading-snug">
              Cada vez<br />que abres<br />el chat...<br />
              <SketchBox type="highlight" color="rgba(212,133,106,0.3)" padding={2}>
                <span className="font-bold text-2xl">empieza<br />de cero</span>
              </SketchBox>
            </div>
          </motion.div>

          {/* Recycle icon — bottom right */}
          <div className="absolute" style={{ bottom: 10, right: 20 }}>
            <SketchIcon icon={RotateCcw} color="#6b8e6b" fillColor="rgba(107,142,107,0.08)" size={50} />
          </div>

          {/* Page number */}
          <div className="absolute" style={{ bottom: 5, left: '50%', transform: 'translateX(-50%)' }}>
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border-2 border-slate-300 text-slate-500 text-xs font-bold">
              1/11
            </span>
          </div>
        </div>
      </SketchScene>

      {/* === SCENE 2: Permit Steps — organic flow === */}
      <SketchScene title="PERMIT STEPS" titleColor="#1e293b" className="rounded-2xl mt-8">
        <div className="relative" style={{ height: 420 }}>
          {/* The S-curve path connecting all steps */}
          <div className="absolute inset-0">
            <SketchPath
              points={pathPoints}
              color="#d4856a"
              strokeWidth={2.5}
              width={700}
              height={400}
              showArrow
            />
          </div>

          {/* Character in the middle of the flow, pointing along the path */}
          <motion.div
            className="absolute z-10"
            style={{ top: 155, left: 60 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          >
            <SketchCharacter posture="pointing" color="#333" size={90} />
          </motion.div>

          {/* Floating step bubbles scattered along the curve */}
          {permitSteps.map((step, i) => (
            <FloatingStep
              key={step.id}
              step={step}
              index={i}
              style={{ top: stepPositions[i].top, left: stepPositions[i].left }}
            />
          ))}

          {/* Bottom: celebrating character at the end of the path */}
          <motion.div
            className="absolute z-10"
            style={{ top: 330, left: 620 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <SketchCharacter posture="celebrating" color="#059669" size={70} />
          </motion.div>

          {/* Final annotation */}
          <motion.div
            className="absolute z-10"
            style={{ bottom: 10, left: 180 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
          >
            <SketchBox type="underline" color="#d4856a" strokeWidth={3} padding={2}>
              <span className="text-lg font-bold text-slate-700 font-hand">
                No permit = No work. Always.
              </span>
            </SketchBox>
          </motion.div>
        </div>
      </SketchScene>
    </div>
  )
}
