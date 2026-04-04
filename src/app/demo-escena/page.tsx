'use client'

import PermitSteps from '../../shared/components/sketches/PermitSteps'

export default function DemoEscenaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Demo: Sketch Scene</h1>
        <p className="text-gray-400 text-sm mt-1">
          Click any bubble for full CEC rule details — built entirely from SketchAssets constants
        </p>
      </div>

      <div className="rounded-2xl overflow-hidden">
        <PermitSteps />
      </div>
    </div>
  )
}
