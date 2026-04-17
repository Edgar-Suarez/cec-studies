'use client'

import dynamic from 'next/dynamic'

/**
 * Heavy visual components — Mermaid (uses `document`), roughjs (uses
 * `<canvas>`), and the canvas-based InfoCards. Wrapped with
 * `next/dynamic({ ssr: false })` so the bundler emits separate chunks
 * that only load when the user actually opens the matching tab.
 *
 * Bundle impact:
 *   - mermaid: ~400KB → only fetched when "Diagram" tab is clicked
 *   - roughjs: ~80KB  → only fetched when "Sketch" or "Explanation" tab is clicked
 *   - lucide icons: bundled with Infografia
 *
 * IMPORTANT: This file MUST stay 'use client'. `next/dynamic({ ssr: false })`
 * is only allowed inside client components.
 */

const loadingFallback = (label: string) => (
  <div className="rounded-2xl border border-gray-700 bg-gray-900/40 p-6 text-center text-xs text-gray-500">
    Loading {label}…
  </div>
)

export const LazyDiagrama = dynamic(
  () => import('../../../components/DiagramaExplicativo'),
  {
    ssr: false,
    loading: () => loadingFallback('diagram'),
  }
)

export const LazySketch = dynamic(
  () => import('../../../components/SketchRenderer'),
  {
    ssr: false,
    loading: () => loadingFallback('sketch'),
  }
)

export const LazyInfografia = dynamic(
  () => import('../../../components/InfografiaCreativa'),
  {
    ssr: false,
    loading: () => loadingFallback('illustration'),
  }
)
