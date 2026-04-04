'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SketchScene from '../../shared/components/SketchScene'
import SketchBubble from '../../shared/components/SketchBubble'
import SketchBox from '../../shared/components/SketchBox'
import SketchCharacter from '../../shared/components/sketches/SketchCharacter'
import SketchArrow from '../../shared/components/sketches/SketchArrow'
import SketchIcon from '../../shared/components/sketches/SketchIcon'
import { FileText, DollarSign, ClipboardCheck, Eye, Zap, X, Clock, RotateCcw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// --- Data ---

interface StepData {
  id: string
  icon: LucideIcon
  color: string
  title: string
  shortDesc: string
  detail: string
  rule: string
}

const permitSteps: StepData[] = [
  {
    id: 'permit',
    icon: FileText,
    color: '#333',
    title: 'Get Permit',
    shortDesc: 'Before any work — Rule 2-004',
    detail:
      'Electrical contractors must obtain a permit from the inspection department BEFORE commencing any installation, alteration, repair, or extension of electrical equipment.',
    rule: 'Rule 2-004',
  },
  {
    id: 'fees',
    icon: DollarSign,
    color: '#333',
    title: 'Pay Fees',
    shortDesc: 'At time of application — Rule 2-008',
    detail:
      'Fees prescribed by the inspection department shall be paid at the time the application for a permit is filed. No fee, no permit.',
    rule: 'Rule 2-008',
  },
  {
    id: 'post',
    icon: ClipboardCheck,
    color: '#333',
    title: 'Post on Site',
    shortDesc: 'Visible until done — Rule 2-010',
    detail:
      'A copy of the permit shall be posted in a conspicuous place at the work site and shall not be removed until the inspection is completed.',
    rule: 'Rule 2-010',
  },
  {
    id: 'notify',
    icon: Eye,
    color: '#333',
    title: 'Notify Inspector',
    shortDesc: 'In writing — Rule 2-012',
    detail:
      'The inspection department shall be notified in writing that work is ready for inspection before any work is concealed.',
    rule: 'Rule 2-012',
  },
  {
    id: 'inspect',
    icon: Eye,
    color: '#333',
    title: 'Pass Inspection',
    shortDesc: 'Fix deficiencies if needed',
    detail:
      'The inspector reviews the work for compliance with the CEC. Deficiencies must be corrected and the inspector re-notified.',
    rule: 'Rules 2-012 / 2-016',
  },
  {
    id: 'energize',
    icon: Zap,
    color: '#333',
    title: 'Energize!',
    shortDesc: 'Current-permit — Rule 2-016',
    detail:
      'A current-permit authorizes connection to the supply of electrical energy. Without this, the utility cannot legally energize the service.',
    rule: 'Rule 2-016',
  },
]

// --- Detail Modal ---

function DetailModal({
  data,
  onClose,
}: {
  data: { title: string; detail: string; rule: string; color: string }
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
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div
          className="relative z-10 w-full max-w-md font-hand"
          style={{ background: '#fdfbf7' }}
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <SketchBubble color="#333" tail="none">
            <div className="pr-8">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-20 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={18} strokeWidth={2} />
              </button>
              <h3 className="text-xl font-bold mb-2 text-slate-800">{data.title}</h3>
              <p className="text-base text-slate-700 leading-relaxed mb-3">{data.detail}</p>
              <span className="inline-block text-sm font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                {data.rule}
              </span>
            </div>
          </SketchBubble>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

// --- Interactive Bubble ---

function ClickableBubble({
  step,
  tail,
  children,
}: {
  step: StepData
  tail: 'left' | 'right' | 'none'
  children: React.ReactNode
}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setShowModal(true)}
      >
        <SketchBubble color="#333" tail={tail}>
          {children}
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
          Click any bubble to see full CEC rule details
        </p>
      </div>

      {/* === SCENE 1: Permit Process — matching reference image style === */}
      <SketchScene title="EL PROCESO" titleColor="#1e293b" className="rounded-2xl mb-8">
        <div className="flex gap-4 items-start">
          {/* LEFT: Character + speech bubbles */}
          <div className="flex-1 flex flex-col items-end gap-1">
            {/* Bubbles pointing right toward character */}
            <ClickableBubble step={permitSteps[0]} tail="right">
              <span className="text-sm font-bold">Hazlo en formato tabla</span>
            </ClickableBubble>

            <ClickableBubble step={permitSteps[1]} tail="right">
              <span className="text-sm font-bold">Usa este tono</span>
            </ClickableBubble>

            <div className="flex items-end gap-2">
              <div className="flex flex-col gap-1">
                <ClickableBubble step={permitSteps[2]} tail="right">
                  <span className="text-sm font-bold">Siempre en formato</span>
                </ClickableBubble>
                <ClickableBubble step={permitSteps[3]} tail="none">
                  <span className="text-xs">No olvides el logo</span>
                </ClickableBubble>
              </div>
            </div>

            <ClickableBubble step={permitSteps[4]} tail="right">
              <span className="text-sm font-bold">Sigue estos pasos</span>
            </ClickableBubble>
          </div>

          {/* CENTER: Stickman */}
          <div className="flex flex-col items-center pt-6 flex-shrink-0">
            <SketchCharacter posture="thinking" color="#333" size={90} />

            {/* Arrow from character to clock */}
            <SketchArrow
              from={{ x: 15, y: 8 }}
              to={{ x: 85, y: 8 }}
              curve={-18}
              color="#d4856a"
              strokeWidth={3}
              width={100}
              height={30}
            />
          </div>

          {/* RIGHT: Clock + side text */}
          <div className="flex-1 flex flex-col items-start gap-4 pt-4">
            {/* Clock icon — central object */}
            <div className="flex flex-col items-center">
              <SketchIcon icon={Clock} color="#d4856a" fillColor="rgba(212,133,106,0.12)" size={72} />
              <span
                className="text-lg font-black uppercase mt-1 tracking-wide"
                style={{ fontFamily: "'Arial Black', sans-serif", color: '#333' }}
              >
                Tiempo Perdido
              </span>
            </div>

            {/* Arrow curving to text */}
            <SketchArrow
              from={{ x: 10, y: 12 }}
              to={{ x: 100, y: 12 }}
              curve={-15}
              color="#d4856a"
              strokeWidth={3}
              width={110}
              height={28}
            />

            {/* Side text — free-form */}
            <div className="font-hand text-xl text-slate-800 leading-snug">
              Cada vez que<br />
              abres el chat...<br />
              <SketchBox type="highlight" color="rgba(212,133,106,0.25)" padding={3}>
                <span className="font-bold text-2xl">empieza de cero</span>
              </SketchBox>
            </div>

            {/* Recycle icon */}
            <div className="mt-2">
              <SketchIcon icon={RotateCcw} color="#6b8e6b" fillColor="rgba(107,142,107,0.1)" size={48} />
            </div>
          </div>
        </div>

        {/* Bottom: page number style */}
        <div className="flex justify-center mt-6">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-slate-300 text-slate-500 text-sm font-bold"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            1/11
          </span>
        </div>
      </SketchScene>

      {/* === SCENE 2: CEC Permit Steps — practical === */}
      <SketchScene title="PERMIT STEPS" titleColor="#1e293b" className="rounded-2xl mt-8">
        <div className="flex items-start gap-6">
          {/* Character pointing at the steps */}
          <div className="flex-shrink-0 pt-4">
            <SketchCharacter posture="pointing" color="#333" size={85} />
          </div>

          {/* Steps in a free layout */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-3">
              {permitSteps.map((step, i) => (
                <ClickableBubble key={step.id} step={step} tail="none">
                  <div className="flex items-center gap-2">
                    <SketchIcon icon={step.icon} color="#d4856a" size={28} />
                    <div>
                      <div className="text-base font-bold text-slate-800">
                        {i + 1}. {step.title}
                      </div>
                      <div className="text-sm text-slate-500">{step.shortDesc}</div>
                    </div>
                  </div>
                </ClickableBubble>
              ))}
            </div>

            {/* Arrow spanning across */}
            <div className="mt-2">
              <SketchArrow
                from={{ x: 20, y: 15 }}
                to={{ x: 380, y: 15 }}
                curve={-20}
                color="#d4856a"
                strokeWidth={2.5}
                width={400}
                height={35}
              />
            </div>

            {/* Bottom motto */}
            <div className="mt-4 flex items-center gap-3">
              <SketchCharacter posture="celebrating" color="#333" size={55} />
              <SketchBox type="underline" color="#d4856a" strokeWidth={3} padding={2}>
                <span className="text-xl font-bold text-slate-700">
                  No permit = No work. Always.
                </span>
              </SketchBox>
            </div>
          </div>
        </div>
      </SketchScene>
    </div>
  )
}
