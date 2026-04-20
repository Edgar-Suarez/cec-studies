import type { CostSnapshot } from './types'

export class CostTracker {
  private snapshot: CostSnapshot = {
    inputTokens: 0,
    cachedInputTokens: 0,
    cacheCreationTokens: 0,
    outputTokens: 0,
    totalUsd: 0,
  }

  add(other: CostSnapshot): void {
    this.snapshot = {
      inputTokens: this.snapshot.inputTokens + other.inputTokens,
      cachedInputTokens: this.snapshot.cachedInputTokens + other.cachedInputTokens,
      cacheCreationTokens: this.snapshot.cacheCreationTokens + other.cacheCreationTokens,
      outputTokens: this.snapshot.outputTokens + other.outputTokens,
      totalUsd: this.snapshot.totalUsd + other.totalUsd,
    }
  }

  get current(): CostSnapshot {
    return { ...this.snapshot }
  }

  format(): string {
    const s = this.snapshot
    const totalInput = s.inputTokens + s.cachedInputTokens + s.cacheCreationTokens
    const cacheHitRate =
      totalInput > 0 ? ((s.cachedInputTokens / totalInput) * 100).toFixed(1) : '0.0'
    return [
      `  Input tokens (fresh):    ${s.inputTokens.toLocaleString()}`,
      `  Input tokens (cached):   ${s.cachedInputTokens.toLocaleString()}  (${cacheHitRate}% hit rate)`,
      `  Cache creation:          ${s.cacheCreationTokens.toLocaleString()}`,
      `  Output tokens:           ${s.outputTokens.toLocaleString()}`,
      `  Total cost (USD):        $${s.totalUsd.toFixed(4)}`,
    ].join('\n')
  }
}
