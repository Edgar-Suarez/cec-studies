'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor: '#1e3a5f',
    primaryTextColor: '#e2e8f0',
    primaryBorderColor: '#3b82f6',
    lineColor: '#64748b',
    secondaryColor: '#1e293b',
    tertiaryColor: '#0f172a',
    background: '#0f172a',
    mainBkg: '#1e3a5f',
    nodeBorder: '#3b82f6',
    clusterBkg: '#1e293b',
    clusterBorder: '#334155',
    titleColor: '#e2e8f0',
    edgeLabelBackground: '#1e293b',
    nodeTextColor: '#e2e8f0',
  },
  flowchart: {
    htmlLabels: true,
    curve: 'basis',
    padding: 16,
    nodeSpacing: 30,
    rankSpacing: 40,
  },
})

let diagramCounter = 0

export default function DiagramaExplicativo({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [svg, setSvg] = useState<string>('')
  const [error, setError] = useState(false)
  const idRef = useRef(`mermaid-${Date.now()}-${diagramCounter++}`)

  useEffect(() => {
    if (!chart.trim()) return

    let cancelled = false

    async function render() {
      try {
        const { svg: rendered } = await mermaid.render(idRef.current, chart.trim())
        if (!cancelled) {
          setSvg(rendered)
          setError(false)
        }
      } catch {
        if (!cancelled) setError(true)
      }
    }

    render()
    return () => { cancelled = true }
  }, [chart])

  if (!chart.trim()) return null
  if (error) return null

  return (
    <div className="my-4 rounded-xl border border-blue-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-4 overflow-x-auto">
      <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
        Concept Diagram
      </div>
      <div
        ref={containerRef}
        className="flex justify-center [&_svg]:max-w-full [&_svg]:h-auto"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  )
}
