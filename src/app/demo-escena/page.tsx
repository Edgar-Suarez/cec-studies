'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SketchScene from '../../shared/components/SketchScene'
import SketchBubble from '../../shared/components/SketchBubble'
import SketchBox from '../../shared/components/SketchBox'
import SketchCharacter from '../../shared/components/sketches/SketchCharacter'
import SketchPath from '../../shared/components/sketches/SketchPath'
import SketchIcon from '../../shared/components/sketches/SketchIcon'
import SketchBlob from '../../shared/components/sketches/SketchBlob'
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

// Blob positions scattered organically along the S-curve
const blobLayout = [
  { top: 70, left: 70, w: 110, h: 70, rot: -3 },
  { top: 50, left: 240, w: 100, h: 65, rot: 2 },
  { top: 150, left: 370, w: 105, h: 70, rot: -2 },
  { top: 260, left: 200, w: 110, h: 65, rot: 3 },
  { top: 245, left: 440, w: 105, h: 70, rot: -1 },
  { top: 340, left: 560, w: 115, h: 75, rot: 2 },
]

// Character positions along the flow
const characters: { posture: 'pointing' | 'working' | 'thinking' | 'celebrating' | 'standing'; top: number; left: number; size: number; color: string; delay: number }[] = [
  { posture: 'pointing', top: 100, left: 0, size: 75, color: '#333', delay: 0.1 },
  { posture: 'working', top: 30, left: 170, size: 55, color: '#d4856a', delay: 0.4 },
  { posture: 'thinking', top: 190, left: 290, size: 60, color: '#64748b', delay: 0.7 },
  { posture: 'standing', top: 285, left: 370, size: 55, color: '#333', delay: 1.0 },
  { posture: 'celebrating', top: 320, left: 660, size: 70, color: '#059669', delay: 1.3 },
]

// The organic S-curve path — flows behind/under the blobs
const flowPath = [
  { x: 50, y: 140 },
  { x: 120, y: 105 },
  { x: 220, y: 80 },
  { x: 310, y: 95 },
  { x: 400, y: 160 },
  { x: 350, y: 240 },
  { x: 260, y: 285 },
  { x: 360, y: 300 },
  { x: 490, y: 280 },
  { x: 580, y: 330 },
  { x: 640, y: 370 },
]

// --- Detail Modal ---

function DetailModal({ data, onClose }: { data: StepData; onClose: () => void }) {
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
            <button onClick={onClose} className="absolute top-2 right-2 z-20 text-slate-400 hover:text-slate-700">
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

// --- Floating organic blob step ---

function FloatingBlob({
  step,
  index,
  layout,
}: {
  step: StepData
  index: number
  layout: typeof blobLayout[0]
}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        className="absolute cursor-pointer z-10"
        style={{ top: layout.top, left: layout.left }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, rotate: layout.rot }}
        transition={{ delay: 0.2 * index, duration: 0.5, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1, rotate: 0 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setShowModal(true)}
      >
        <SketchBlob color="#333" width={layout.w} height={layout.h}>
          <div className="text-sm font-bold leading-tight">{index + 1}. {step.title}</div>
          <div className="text-xs text-slate-500 mt-0.5">{step.shortDesc}</div>
        </SketchBlob>
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

      {/* === SCENE 1: "EL PROBLEMA" — reference replica === */}
      <SketchScene title="EL PROBLEMA" titleColor="#1e293b" className="rounded-2xl mb-8">
        <div className="relative" style={{ height: 320 }}>
          {/* Stickman thinking */}
          <div className="absolute" style={{ top: 40, left: 10 }}>
            <SketchCharacter posture="thinking" color="#333" size={100} />
          </div>

          {/* Floating speech blobs around character */}
          <motion.div className="absolute" style={{ top: 0, left: 115 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
            <SketchBlob color="#333" width={140} height={50}>
              <span className="text-sm font-bold">Hazlo en formato tabla</span>
            </SketchBlob>
          </motion.div>

          <motion.div className="absolute" style={{ top: 55, left: 210 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <SketchBlob color="#333" width={110} height={45}>
              <span className="text-sm font-bold">Usa este tono</span>
            </SketchBlob>
          </motion.div>

          <motion.div className="absolute" style={{ top: 115, left: 140 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <SketchBlob color="#333" width={130} height={45}>
              <span className="text-xs">Siempre en español</span>
            </SketchBlob>
          </motion.div>

          <motion.div className="absolute" style={{ top: 185, left: 15 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            <SketchBlob color="#333" width={120} height={45}>
              <span className="text-xs">No olvides el logo</span>
            </SketchBlob>
          </motion.div>

          <motion.div className="absolute" style={{ top: 180, left: 165 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <SketchBlob color="#333" width={120} height={45}>
              <span className="text-xs">Sigue estos pasos</span>
            </SketchBlob>
          </motion.div>

          {/* Coral S-curve from bubbles to clock */}
          <div className="absolute" style={{ top: 70, left: 300 }}>
            <SketchPath
              points={[
                { x: 15, y: 60 },
                { x: 50, y: 30 },
                { x: 90, y: 65 },
                { x: 130, y: 35 },
              ]}
              color="#d4856a"
              strokeWidth={3.5}
              width={140}
              height={80}
            />
          </div>

          {/* Clock */}
          <div className="absolute flex flex-col items-center" style={{ top: 55, left: 430 }}>
            <SketchIcon icon={Clock} color="#d4856a" fillColor="rgba(212,133,106,0.1)" size={80} />
            <span className="text-base font-black uppercase mt-1 tracking-wide"
              style={{ fontFamily: "'Arial Black', sans-serif", color: '#333' }}>
              Tiempo Perdido
            </span>
          </div>

          {/* Arrow clock → text */}
          <div className="absolute" style={{ top: 45, left: 555 }}>
            <SketchPath
              points={[{ x: 10, y: 55 }, { x: 40, y: 25 }, { x: 65, y: 45 }]}
              color="#d4856a" strokeWidth={3.5} width={75} height={65}
            />
          </div>

          {/* Right side text */}
          <motion.div className="absolute font-hand" style={{ top: 20, left: 615 }}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
            <div className="text-xl text-slate-800 leading-snug">
              Cada vez<br />que abres<br />el chat...<br />
              <SketchBox type="highlight" color="rgba(212,133,106,0.3)" padding={2}>
                <span className="font-bold text-2xl">empieza<br />de cero</span>
              </SketchBox>
            </div>
          </motion.div>

          {/* Recycle icon */}
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

      {/* === SCENE 2: Permit Steps — organic blob flow === */}
      <SketchScene title="PERMIT STEPS" titleColor="#1e293b" className="rounded-2xl mt-8">
        <div className="relative" style={{ height: 450 }}>
          {/* S-curve path — rendered FIRST so it sits behind blobs */}
          <div className="absolute inset-0 z-0">
            <SketchPath
              points={flowPath}
              color="#d4856a"
              strokeWidth={3}
              width={720}
              height={420}
              showArrow
            />
          </div>

          {/* Characters scattered along the flow */}
          {characters.map((c, i) => (
            <motion.div
              key={i}
              className="absolute z-5"
              style={{ top: c.top, left: c.left }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: c.delay }}
            >
              <SketchCharacter posture={c.posture} color={c.color} size={c.size} />
            </motion.div>
          ))}

          {/* Organic blob steps — floating along the curve */}
          {permitSteps.map((step, i) => (
            <FloatingBlob key={step.id} step={step} index={i} layout={blobLayout[i]} />
          ))}

          {/* Final annotation */}
          <motion.div
            className="absolute z-20"
            style={{ bottom: 5, left: 140 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
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
