'use client'

import { useState } from 'react'
import { studyGuideSections } from '../../data/studyGuide'
import { questions, allSections } from '../../data/questions'
import Link from 'next/link'
import DiagramaExplicativo from '../../components/DiagramaExplicativo'

type Tab = 'explanation' | 'scenario' | 'keypoints' | 'diagram'

function SectionSelector({
  selectedSection,
  onSelect,
}: {
  selectedSection: string | null
  onSelect: (section: string) => void
}) {
  const availableSections = studyGuideSections.map((s) => ({
    id: s.section,
    title: s.title,
    questionCount: questions.filter((q) => q.section === s.section).length,
    subsectionCount: s.subsections.length,
  }))

  const comingSoon = allSections.filter(
    (s) => !studyGuideSections.find((sg) => sg.section === s)
  )

  return (
    <div className="space-y-2">
      {availableSections.map((s) => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
            selectedSection === s.id
              ? 'bg-blue-600/20 border-blue-500/60 text-blue-300'
              : 'bg-gray-800/50 border-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-800'
          }`}
        >
          <div className="font-semibold text-sm">{s.title}</div>
          <div className="text-xs text-gray-500 mt-1">
            {s.subsectionCount} topics · {s.questionCount} questions
          </div>
        </button>
      ))}
      {comingSoon.map((s) => {
        const sample = questions.find((q) => q.section === s)
        return (
          <div
            key={s}
            className="w-full text-left px-4 py-3 rounded-xl border border-gray-800 text-gray-600 opacity-50"
          >
            <div className="font-semibold text-sm">
              Section {s} — {sample?.sectionTitle ?? 'Coming Soon'}
            </div>
            <div className="text-xs mt-1">Study guide pending</div>
          </div>
        )
      })}
    </div>
  )
}

function SubsectionCard({
  subsection,
}: {
  subsection: (typeof studyGuideSections)[0]['subsections'][0]
}) {
  const [activeTab, setActiveTab] = useState<Tab>('explanation')

  const hasDiagram = subsection.diagramaMermaid?.trim().length > 0

  const tabs: { id: Tab; label: string }[] = [
    { id: 'explanation', label: 'Explanation' },
    { id: 'scenario', label: 'Field Scenario' },
    { id: 'keypoints', label: 'Key Points' },
    ...(hasDiagram ? [{ id: 'diagram' as Tab, label: 'Diagram' }] : []),
  ]

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-700">
        <h3 className="text-lg font-bold text-white">{subsection.title}</h3>
        <span className="text-xs text-blue-400 font-mono mt-1 inline-block">
          {subsection.rules}
        </span>
      </div>

      <div className="flex border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-4 py-2.5 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-500/5'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-5">
        {activeTab === 'explanation' && (
          <div className="prose prose-invert prose-sm max-w-none">
            {subsection.explanation.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-300 leading-relaxed mb-3 last:mb-0">
                {paragraph.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < paragraph.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
        )}

        {activeTab === 'scenario' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-yellow-400 text-xs font-semibold uppercase tracking-wider">
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
              <p key={i} className="text-gray-300 leading-relaxed text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        {activeTab === 'keypoints' && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-400 text-xs font-semibold uppercase tracking-wider mb-3">
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
                  className="flex items-start gap-3 text-sm text-gray-300 bg-gray-900/50 rounded-lg px-4 py-3 border border-gray-700/50"
                >
                  <span className="text-green-400 font-bold mt-0.5 shrink-0">
                    {i + 1}.
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'diagram' && hasDiagram && (
          <DiagramaExplicativo chart={subsection.diagramaMermaid} />
        )}
      </div>
    </div>
  )
}

export default function StudyGuidePage() {
  const [selectedSection, setSelectedSection] = useState<string | null>(
    studyGuideSections.length > 0 ? studyGuideSections[0].section : null
  )

  const currentGuide = studyGuideSections.find((s) => s.section === selectedSection)
  const sectionQuestionCount = selectedSection
    ? questions.filter((q) => q.section === selectedSection).length
    : 0

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Study Guide</h1>
        <p className="text-gray-400 text-sm mt-1">
          Learn each CEC section with clear explanations, real scenarios, and exam key points
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar: Section selector */}
        <div className="lg:w-72 shrink-0">
          <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">
            CEC Sections
          </div>
          <SectionSelector
            selectedSection={selectedSection}
            onSelect={setSelectedSection}
          />
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {currentGuide ? (
            <div className="space-y-4">
              {/* Section header */}
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl px-5 py-4">
                <h2 className="text-xl font-bold text-white">
                  {currentGuide.title}
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  {currentGuide.description}
                </p>
                <div className="flex gap-4 mt-3">
                  <span className="text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full">
                    {currentGuide.subsections.length} topics
                  </span>
                  <span className="text-xs text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full">
                    {sectionQuestionCount} quiz questions
                  </span>
                  <Link
                    href="/quiz"
                    className="text-xs text-yellow-400 bg-yellow-500/10 px-2.5 py-1 rounded-full hover:bg-yellow-500/20 transition-colors"
                  >
                    Practice this section →
                  </Link>
                </div>
              </div>

              {/* Subsection cards */}
              {currentGuide.subsections.map((sub) => (
                <SubsectionCard key={sub.id} subsection={sub} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <svg
                className="w-12 h-12 mx-auto mb-3 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              Select a section to start studying
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
