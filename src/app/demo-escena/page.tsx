'use client'

import SketchScene from '../../shared/components/SketchScene'
import SketchBubble from '../../shared/components/SketchBubble'
import SketchBox from '../../shared/components/SketchBox'
import { FileText, DollarSign, ClipboardCheck, Eye, Zap } from 'lucide-react'

function CentralIcon() {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#c4a882"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-60"
      >
        <rect x="20" y="10" width="60" height="80" rx="4" />
        <path d="M35 28h30M35 38h30M35 48h20" />
        <circle cx="65" cy="70" r="12" strokeDasharray="4 3" />
        <path d="M61 70l3 3 6-7" />
        <path d="M30 10v-6h10M60 4h10v6" />
      </svg>
    </div>
  )
}

function StepIcon({ icon: Icon, color }: { icon: typeof FileText; color: string }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full" style={{ color }}>
      <Icon size={18} strokeWidth={1.5} />
    </span>
  )
}

export default function DemoEscenaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Demo: Sketch Scene</h1>
        <p className="text-gray-400 text-sm mt-1">
          Composable sketchnote components — SketchScene + SketchBubble + SketchBox
        </p>
      </div>

      {/* === SCENE 1: Permit Process === */}
      <SketchScene title="THE PERMIT PROCESS" titleColor="#0ea5e9" className="rounded-2xl mb-8">
        <div className="grid grid-cols-3 gap-6 items-start">
          {/* Left column: bubbles */}
          <div className="flex flex-col gap-4">
            <SketchBubble color="#0ea5e9" tail="right">
              <div className="flex items-center gap-2">
                <StepIcon icon={FileText} color="#0ea5e9" />
                <div>
                  <div className="text-base font-bold">1. Get Permit</div>
                  <div className="text-sm text-slate-500">Before any work — Rule 2-004</div>
                </div>
              </div>
            </SketchBubble>

            <SketchBubble color="#f59e0b" tail="right">
              <div className="flex items-center gap-2">
                <StepIcon icon={DollarSign} color="#f59e0b" />
                <div>
                  <div className="text-base font-bold">2. Pay Fees</div>
                  <div className="text-sm text-slate-500">At time of application — Rule 2-008</div>
                </div>
              </div>
            </SketchBubble>

            <SketchBubble color="#10b981" tail="right">
              <div className="flex items-center gap-2">
                <StepIcon icon={ClipboardCheck} color="#10b981" />
                <div>
                  <div className="text-base font-bold">3. Post on Site</div>
                  <div className="text-sm text-slate-500">Visible until done — Rule 2-010</div>
                </div>
              </div>
            </SketchBubble>
          </div>

          {/* Center: main object */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <CentralIcon />
            <SketchBox type="highlight" color="#fbbf2480" padding={4}>
              <span className="text-lg font-bold text-slate-700">Your Permit</span>
            </SketchBox>
            <p className="text-sm text-slate-500 text-center leading-snug">
              The document that authorizes<br />all electrical work on site
            </p>
          </div>

          {/* Right column: bubbles */}
          <div className="flex flex-col gap-4">
            <SketchBubble color="#8b5cf6" tail="left">
              <div className="flex items-center gap-2">
                <StepIcon icon={Eye} color="#8b5cf6" />
                <div>
                  <div className="text-base font-bold">4. Notify Inspector</div>
                  <div className="text-sm text-slate-500">In writing — Rule 2-012</div>
                </div>
              </div>
            </SketchBubble>

            <SketchBubble color="#f43f5e" tail="left">
              <div className="flex items-center gap-2">
                <StepIcon icon={Eye} color="#f43f5e" />
                <div>
                  <div className="text-base font-bold">5. Pass Inspection</div>
                  <div className="text-sm text-slate-500">Fix deficiencies if needed</div>
                </div>
              </div>
            </SketchBubble>

            <SketchBubble color="#059669" tail="left">
              <div className="flex items-center gap-2">
                <StepIcon icon={Zap} color="#059669" />
                <div>
                  <div className="text-base font-bold">6. Energize!</div>
                  <div className="text-sm text-slate-500">Current-permit — Rule 2-016</div>
                </div>
              </div>
            </SketchBubble>
          </div>
        </div>

        {/* Bottom annotation */}
        <div className="mt-8 flex justify-center">
          <SketchBox type="underline" color="#0ea5e9" strokeWidth={3} padding={2}>
            <span className="text-xl font-bold text-slate-700">
              No permit = No work. Always.
            </span>
          </SketchBox>
        </div>
      </SketchScene>

      {/* === SCENE 2: Simple concept === */}
      <SketchScene title="AMPACITY AT A GLANCE" titleColor="#10b981" className="rounded-2xl">
        <div className="flex flex-wrap justify-center gap-6">
          <SketchBubble color="#0ea5e9" tail="none">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700">Table 1</div>
              <div className="text-sm text-slate-500">Cu — Free Air</div>
            </div>
          </SketchBubble>

          <SketchBubble color="#10b981" tail="none">
            <div className="text-center">
              <SketchBox type="circle" color="#10b981" padding={6}>
                <span className="text-2xl font-bold text-slate-700">Table 2</span>
              </SketchBox>
              <div className="text-sm text-slate-500 mt-1">Cu — Raceway</div>
              <div className="text-xs text-emerald-600 mt-0.5">Most common!</div>
            </div>
          </SketchBubble>

          <SketchBubble color="#8b5cf6" tail="none">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700">Table 3</div>
              <div className="text-sm text-slate-500">Al — Free Air</div>
            </div>
          </SketchBubble>

          <SketchBubble color="#f59e0b" tail="none">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-700">Table 4</div>
              <div className="text-sm text-slate-500">Al — Raceway</div>
            </div>
          </SketchBubble>
        </div>

        <div className="mt-6 flex justify-center">
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
