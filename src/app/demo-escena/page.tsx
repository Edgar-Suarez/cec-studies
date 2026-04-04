'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SketchScene from '../../shared/components/SketchScene'
import SketchBubble from '../../shared/components/SketchBubble'
import SketchBox from '../../shared/components/SketchBox'
import { FileText, DollarSign, ClipboardCheck, Eye, Zap, X } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SketchCharacter from '../../shared/components/sketches/SketchCharacter'
import SketchArrow from '../../shared/components/sketches/SketchArrow'
import SketchIcon from '../../shared/components/sketches/SketchIcon'

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
    color: '#0ea5e9',
    title: '1. Get Permit',
    shortDesc: 'Before any work — Rule 2-004',
    detail:
      'Electrical contractors must obtain a permit from the inspection department BEFORE commencing any installation, alteration, repair, or extension of electrical equipment. This applies to ALL electrical work — residential, commercial, and industrial.',
    rule: 'Rule 2-004',
  },
  {
    id: 'fees',
    icon: DollarSign,
    color: '#f59e0b',
    title: '2. Pay Fees',
    shortDesc: 'At time of application — Rule 2-008',
    detail:
      'Fees prescribed by the inspection department shall be paid at the time the application for a permit is filed. No fee, no permit. The fee schedule is set by the local authority having jurisdiction.',
    rule: 'Rule 2-008',
  },
  {
    id: 'post',
    icon: ClipboardCheck,
    color: '#10b981',
    title: '3. Post on Site',
    shortDesc: 'Visible until done — Rule 2-010',
    detail:
      'A copy of the permit shall be posted in a conspicuous place at the work site and shall not be removed until the inspection is completed. The inspector needs to verify that the permit is valid and matches the scope of work.',
    rule: 'Rule 2-010',
  },
  {
    id: 'notify',
    icon: Eye,
    color: '#8b5cf6',
    title: '4. Notify Inspector',
    shortDesc: 'In writing — Rule 2-012',
    detail:
      'The inspection department shall be notified in writing by the electrical contractor that work is ready for inspection at such time(s) allowing inspection before any work or portion of work is concealed. Always written — email or paper notice.',
    rule: 'Rule 2-012',
  },
  {
    id: 'inspect',
    icon: Eye,
    color: '#f43f5e',
    title: '5. Pass Inspection',
    shortDesc: 'Fix deficiencies if needed',
    detail:
      'The inspector reviews the work for compliance with the CEC. If deficiencies are found, they must be corrected and the inspector re-notified. Only once all work passes does the process continue to energization.',
    rule: 'Rules 2-012 / 2-016',
  },
  {
    id: 'energize',
    icon: Zap,
    color: '#059669',
    title: '6. Energize!',
    shortDesc: 'Current-permit — Rule 2-016',
    detail:
      'A current-permit is issued by the inspection department authorizing connection to the supply of electrical energy. Without this, the utility cannot legally energize the service. This is the final green light.',
    rule: 'Rule 2-016',
  },
]

interface TableData {
  id: string
  name: string
  desc: string
  color: string
  detail: string
  highlight?: boolean
}

const ampacityTables: TableData[] = [
  {
    id: 't1',
    name: 'Table 1',
    desc: 'Cu — Free Air',
    color: '#0ea5e9',
    detail:
      'Single-conductor copper cables in free air with spacing not less than 100% of the largest cable diameter. Used for overhead runs, cable tray with wide spacing, and open installations.',
  },
  {
    id: 't2',
    name: 'Table 2',
    desc: 'Cu — Raceway',
    color: '#10b981',
    highlight: true,
    detail:
      'One, two, or three copper conductors in a run of raceway or 2/3-conductor cable. This is the MOST COMMONLY USED table for everyday residential and commercial wiring — conduit, NMD cable, etc.',
  },
  {
    id: 't3',
    name: 'Table 3',
    desc: 'Al — Free Air',
    color: '#8b5cf6',
    detail:
      'Single-conductor aluminum cables in free air. Same spacing rules as Table 1 but for aluminum conductors, which have lower ampacity per size due to higher resistivity.',
  },
  {
    id: 't4',
    name: 'Table 4',
    desc: 'Al — Raceway',
    color: '#f59e0b',
    detail:
      'One, two, or three aluminum conductors in raceway. The aluminum equivalent of Table 2. Remember: aluminum needs a larger wire size than copper for the same ampacity.',
  },
]

// --- Components ---

function StepIcon({ icon, color }: { icon: LucideIcon; color: string }) {
  return <SketchIcon icon={icon} color={color} size={32} />
}

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
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative z-10 w-full max-w-md font-hand"
          style={{ background: '#fdfbf7' }}
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <SketchBubble color={data.color} tail="none">
            <div className="pr-8">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 z-20 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X size={18} strokeWidth={2} />
              </button>

              <h3
                className="text-xl font-bold mb-2"
                style={{ color: data.color }}
              >
                {data.title}
              </h3>

              <p className="text-base text-slate-700 leading-relaxed mb-3">
                {data.detail}
              </p>

              <span
                className="inline-block text-sm font-bold px-2 py-0.5 rounded"
                style={{ color: data.color, background: `${data.color}15` }}
              >
                {data.rule}
              </span>
            </div>
          </SketchBubble>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function InteractiveStep({ step, side }: { step: StepData; side: 'left' | 'right' }) {
  const [active, setActive] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
        onClick={() => setShowModal(true)}
        style={{ filter: active ? `drop-shadow(0 0 8px ${step.color}40)` : 'none' }}
      >
        <SketchBubble color={step.color} tail={side === 'left' ? 'right' : 'left'}>
          <div className="flex items-center gap-2">
            <StepIcon icon={step.icon} color={step.color} />
            <div>
              <div className="text-base font-bold text-slate-800">{step.title}</div>
              <div className="text-sm text-slate-500">{step.shortDesc}</div>
            </div>
          </div>
        </SketchBubble>
      </motion.div>

      {showModal && (
        <DetailModal
          data={step}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

function InteractiveTable({ table }: { table: TableData }) {
  const [active, setActive] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setActive(true)}
        onHoverEnd={() => setActive(false)}
        onClick={() => setShowModal(true)}
        style={{ filter: active ? `drop-shadow(0 0 10px ${table.color}50)` : 'none' }}
      >
        <SketchBubble color={table.color} tail="none">
          <div className="text-center">
            {table.highlight ? (
              <SketchBox type="circle" color={table.color} padding={6}>
                <span className="text-2xl font-bold text-slate-700">{table.name}</span>
              </SketchBox>
            ) : (
              <div className="text-2xl font-bold text-slate-700">{table.name}</div>
            )}
            <div className="text-sm text-slate-500 mt-1">{table.desc}</div>
            {table.highlight && (
              <div className="text-xs mt-0.5" style={{ color: table.color }}>
                Most common! Tap for details
              </div>
            )}
          </div>
        </SketchBubble>
      </motion.div>

      {showModal && (
        <DetailModal
          data={{
            title: `${table.name} — ${table.desc}`,
            detail: table.detail,
            rule: 'Rule 4-004',
            color: table.color,
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}

// --- Page ---

export default function DemoEscenaPage() {
  const leftSteps = permitSteps.slice(0, 3)
  const rightSteps = permitSteps.slice(3)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Demo: Sketch Scene</h1>
        <p className="text-gray-400 text-sm mt-1">
          Click any card to see the full CEC rule details
        </p>
      </div>

      {/* === SCENE 1: Permit Process === */}
      <SketchScene title="THE PERMIT PROCESS" titleColor="#0ea5e9" className="rounded-2xl mb-8">
        <div className="grid grid-cols-3 gap-6 items-start">
          <div className="flex flex-col gap-4">
            {leftSteps.map((step) => (
              <InteractiveStep key={step.id} step={step} side="left" />
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 pt-2">
            <SketchCharacter posture="working" color="#0ea5e9" size={80} />
            <SketchArrow
              from={{ x: 40, y: 5 }}
              to={{ x: 40, y: 35 }}
              curve={-15}
              color="#c4a882"
              width={80}
              height={40}
            />
            <SketchIcon icon={FileText} color="#c4a882" size={48} />
            <SketchBox type="highlight" color="#fbbf2480" padding={4}>
              <span className="text-lg font-bold text-slate-700">Your Permit</span>
            </SketchBox>
            <p className="text-sm text-slate-500 text-center leading-snug">
              Click any step to see<br />the full CEC rule
            </p>
            <SketchCharacter posture="celebrating" color="#059669" size={70} className="mt-2" />
          </div>

          <div className="flex flex-col gap-4">
            {rightSteps.map((step) => (
              <InteractiveStep key={step.id} step={step} side="right" />
            ))}
          </div>
        </div>

        {/* Connecting arrows between left steps */}
        <div className="flex justify-between px-8 -mt-2">
          <SketchArrow from={{ x: 10, y: 5 }} to={{ x: 70, y: 5 }} curve={-12} color="#94a3b8" width={80} height={20} />
          <SketchArrow from={{ x: 10, y: 5 }} to={{ x: 70, y: 5 }} curve={-12} color="#94a3b8" width={80} height={20} />
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <SketchCharacter posture="pointing" color="#0ea5e9" size={60} />
          <SketchBox type="underline" color="#0ea5e9" strokeWidth={3} padding={2}>
            <span className="text-xl font-bold text-slate-700">
              No permit = No work. Always.
            </span>
          </SketchBox>
        </div>
      </SketchScene>

      {/* === SCENE 2: Ampacity Tables === */}
      <SketchScene title="AMPACITY AT A GLANCE" titleColor="#10b981" className="rounded-2xl">
        <div className="flex items-start gap-4 justify-center">
          <SketchCharacter posture="thinking" color="#10b981" size={75} className="mt-4 flex-shrink-0" />
          <div className="flex flex-wrap justify-center gap-6">
            {ampacityTables.map((table) => (
              <InteractiveTable key={table.id} table={table} />
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <SketchArrow from={{ x: 20, y: 25 }} to={{ x: 180, y: 25 }} curve={-20} color="#10b981" width={200} height={35} />
        </div>

        <div className="mt-2 flex items-center justify-center gap-3">
          <SketchCharacter posture="pointing" color="#ef4444" size={55} />
          <SketchBox type="highlight" color="rgba(239,68,68,0.2)" padding={4}>
            <span className="text-base text-slate-700">
              4+ conductors in raceway? Multiply by <strong>Table 5C</strong> correction factor
            </span>
          </SketchBox>
        </div>
      </SketchScene>
    </div>
  )
}
