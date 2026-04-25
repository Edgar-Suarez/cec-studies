'use client'

import { useState } from 'react'
import type { StudyGuideSubsection } from '../../../lib/types'
import { Button } from '@/shared/components/ui'
import { LazyDiagrama, LazySketch, LazyInfografia } from './lazy-visuals'

type Tab = 'explanation' | 'scenario' | 'keypoints' | 'diagram' | 'sketch'

interface SubsectionTabsProps {
  subsection: StudyGuideSubsection
}

/**
 * Client island. Owns the tab-switching state for ONE subsection card.
 * The pedagogical content (explanation/scenario/keypoints) is plain
 * server-serialized strings — we just toggle visibility here. Heavy
 * visuals (Diagram, Sketch, Infografia) are loaded lazily via
 * `next/dynamic` only when the matching tab is activated.
 */
export function SubsectionTabs({ subsection }: SubsectionTabsProps) {
  const hasInfoCards = subsection.infoCards != null && subsection.infoCards.length > 0
  const hasDiagram = subsection.diagramaMermaid?.trim().length > 0
  const hasSketch =
    subsection.sketchData != null && subsection.sketchData.nodes.length > 0

  const [activeTab, setActiveTab] = useState<Tab>('explanation')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'explanation', label: 'Explanation' },
    { id: 'scenario', label: 'Field Scenario' },
    { id: 'keypoints', label: 'Key Points' },
    ...(hasDiagram ? [{ id: 'diagram' as Tab, label: 'Diagram' }] : []),
    ...(hasSketch ? [{ id: 'sketch' as Tab, label: 'Sketch' }] : []),
  ]

  return (
    <>
      <div className="flex gap-1 px-2 py-2 border-b border-subtle bg-surface-elevated-2 overflow-x-auto">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab(tab.id)}
            className="whitespace-nowrap"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      <div className="p-5">
        {activeTab === 'explanation' ? (
          <div>
            {hasInfoCards ? <LazyInfografia cards={subsection.infoCards!} /> : null}
            <div className="prose prose-invert prose-sm max-w-none">
              {subsection.explanation.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-primary leading-relaxed mb-3 last:mb-0">
                  {paragraph.split('\n').map((line, j, arr) => (
                    <span key={j}>
                      {line}
                      {j < arr.length - 1 ? <br /> : null}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        ) : null}

        {activeTab === 'scenario' ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-warning text-xs font-semibold uppercase tracking-wider font-mono">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Real-World Scenario
            </div>
            {subsection.fieldScenario.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-primary leading-relaxed text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        ) : null}

        {activeTab === 'keypoints' ? (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-success text-xs font-semibold uppercase tracking-wider font-mono mb-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Remember for the Exam
            </div>
            <ul className="space-y-2">
              {subsection.keyPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-primary bg-surface-elevated-2 rounded-md px-4 py-3 border border-subtle"
                >
                  <span className="text-success font-mono font-bold mt-0.5 shrink-0">
                    {i + 1}.
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {activeTab === 'diagram' && hasDiagram ? (
          <LazyDiagrama chart={subsection.diagramaMermaid} />
        ) : null}

        {activeTab === 'sketch' && hasSketch ? (
          <LazySketch data={subsection.sketchData!} />
        ) : null}
      </div>
    </>
  )
}
