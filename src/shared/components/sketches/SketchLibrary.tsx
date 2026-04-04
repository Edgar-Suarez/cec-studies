/**
 * SketchLibrary — Unified export of all sketch/sketchnote visual components.
 *
 * Usage:
 *   import { Scene, Blob, Bubble, Path, Arrow, Character, Icon, Box, Annotation } from '@/shared/components/sketches/SketchLibrary'
 *
 * Every component uses roughjs for organic hand-drawn strokes.
 * Default palette: cream (#fdfbf7), dark text (#1e293b), coral accents (#d4856a).
 * All text uses font-hand (Caveat) via Tailwind.
 */

// --- Re-exports with short aliases ---

export { default as Scene } from '../SketchScene'
export { default as Blob } from './SketchBlob'
export { default as Bubble } from '../SketchBubble'
export { default as Path } from './SketchPath'
export { default as Arrow } from './SketchArrow'
export { default as Character } from './SketchCharacter'
export { default as Icon } from './SketchIcon'
export { default as Box } from '../SketchBox'
export { default as IllustrationBox } from '../SketchIllustrationBox'

// --- Preset colors (matching reference sketchnote style) ---

export const palette = {
  paper: '#fdfbf7',
  ink: '#1e293b',
  stroke: '#333',
  coral: '#d4856a',
  green: '#059669',
  muted: '#64748b',
  amber: '#f59e0b',
  red: '#f43f5e',
  blue: '#0ea5e9',
  violet: '#8b5cf6',
} as const

// --- Annotation helper: wraps text with a highlight/underline/circle ---

export { default as Annotation } from '../SketchBox'
