'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  calculateResidentialDemand,
  calculateVoltageDrop,
  calculateCorrectedAmpacity,
  calculateMotorProtection,
  type ResidentialDemandParams,
  type VoltageDropParams,
  type AmpacityCorrectionParams,
  type MotorProtectionParams,
} from '../../lib/calculators'
import { Button, Card, Input } from '@/shared/components/ui'

type Tab = 'demand' | 'vdrop' | 'ampacity' | 'motor'

// Retokenized native <select>. Stays local until Fase 3 creates a <Select> primitive.
function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-secondary">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 bg-surface-base border border-subtle text-primary rounded-md px-3 text-base outline-none focus:border-strong transition-colors duration-75"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function Toggle({
  label,
  checked,
  onToggle,
}: {
  label: string
  checked: boolean
  onToggle: () => void
}) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-primary text-sm font-medium">{label}</label>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={onToggle}
        className={`w-10 h-5 rounded-pill transition-colors duration-75 ${
          checked ? 'bg-accent' : 'bg-surface-elevated-2'
        }`}
      >
        <div
          className={`w-4 h-4 bg-primary rounded-pill transition-all m-0.5 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  )
}

function RuleChip({ rule, children }: { rule: string; children: React.ReactNode }) {
  return (
    <Card elevation="elev-1" padding="sm">
      <div className="text-accent text-xs font-mono font-semibold">{rule}</div>
      <div className="text-secondary text-xs mt-1 leading-relaxed">{children}</div>
    </Card>
  )
}

function ResultRow({
  item,
  value,
  highlight,
  rule,
}: {
  item: string
  value: string | number
  highlight?: boolean
  rule?: string
}) {
  return (
    <div
      className={`flex items-center justify-between py-2.5 px-3 rounded-md ${
        highlight ? 'bg-surface-elevated-2 border border-subtle' : 'bg-surface-elevated'
      }`}
    >
      <div>
        <div
          className={`text-sm font-medium ${
            highlight ? 'text-accent' : 'text-primary'
          }`}
        >
          {item}
        </div>
        {rule ? <div className="text-muted text-xs mt-0.5">{rule}</div> : null}
      </div>
      <div
        className={`font-mono font-bold ${
          highlight ? 'text-accent text-base' : 'text-primary text-sm'
        }`}
      >
        {value}
      </div>
    </div>
  )
}

// ============================================================
// TAB 1: Residential Demand
// ============================================================
function ResidentialDemandCalc() {
  const [floorArea, setFloorArea] = useState('150')
  const [smallApp, setSmallApp] = useState('2')
  const [hasRange, setHasRange] = useState(true)
  const [rangeRating, setRangeRating] = useState('12000')
  const [hasDryer, setHasDryer] = useState(true)
  const [dryerRating, setDryerRating] = useState('5000')
  const [hasHVAC, setHasHVAC] = useState(false)
  const [hvacRating, setHvacRating] = useState('6000')
  const [result, setResult] = useState<ReturnType<typeof calculateResidentialDemand> | null>(null)

  function calculate() {
    const params: ResidentialDemandParams = {
      floorAreaSqM: parseFloat(floorArea) || 0,
      smallApplianceCircuits: parseInt(smallApp) || 2,
      hasElectricRange: hasRange,
      rangeRating: parseFloat(rangeRating) || 0,
      hasElectricDryer: hasDryer,
      dryerRating: parseFloat(dryerRating) || 0,
      hasElectricHVAC: hasHVAC,
      hvacRating: parseFloat(hvacRating) || 0,
      additionalLoads: [],
    }
    setResult(calculateResidentialDemand(params))
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <RuleChip rule="CEC Rule 8-200">
          Basic load: 45 VA/m² · Demand factors: 100% (first 1 kW), 75% (1–10 kW), 40% (over 10 kW)
        </RuleChip>

        <Input
          label="Habitable Floor Area"
          type="number"
          min={0}
          unit="m²"
          value={floorArea}
          onChange={(e) => setFloorArea(e.target.value)}
          hint="Total heated floor area (not including garage/basement if unfinished)"
        />
        <Input
          label="Small Appliance Circuits"
          type="number"
          min={2}
          value={smallApp}
          onChange={(e) => setSmallApp(e.target.value)}
          hint="Minimum 2 required per Rule 8-210 (1500 W each)"
        />

        <Card elevation="elev-1" padding="md" className="space-y-3">
          <Toggle label="Electric Range" checked={hasRange} onToggle={() => setHasRange(!hasRange)} />
          {hasRange ? (
            <Input
              label="Range Rating"
              type="number"
              min={0}
              unit="W"
              value={rangeRating}
              onChange={(e) => setRangeRating(e.target.value)}
              hint="Typical: 8000–14 400 W. Demand factor: 80% for ≤10 kW, 8 kW for ≤12.5 kW"
            />
          ) : null}
        </Card>

        <Card elevation="elev-1" padding="md" className="space-y-3">
          <Toggle label="Electric Dryer" checked={hasDryer} onToggle={() => setHasDryer(!hasDryer)} />
          {hasDryer ? (
            <Input
              label="Dryer Rating"
              type="number"
              min={5000}
              unit="W"
              value={dryerRating}
              onChange={(e) => setDryerRating(e.target.value)}
              hint="Minimum 5000 W per CEC Rule 8-200"
            />
          ) : null}
        </Card>

        <Card elevation="elev-1" padding="md" className="space-y-3">
          <Toggle label="Electric HVAC" checked={hasHVAC} onToggle={() => setHasHVAC(!hasHVAC)} />
          {hasHVAC ? (
            <Input
              label="HVAC Rating (larger of heating or cooling)"
              type="number"
              min={0}
              unit="W"
              value={hvacRating}
              onChange={(e) => setHvacRating(e.target.value)}
              hint="Only the larger of heating or cooling per Rule 8-200"
            />
          ) : null}
        </Card>

        <Button variant="primary" size="lg" className="w-full" onClick={calculate}>
          Calculate Service Load
        </Button>
      </div>

      {result ? (
        <div className="space-y-3">
          <h3 className="text-primary font-display font-semibold">Results</h3>
          <div className="space-y-1.5">
            {result.breakdown.map((row, i) => (
              <div
                key={i}
                className="flex justify-between text-sm py-1.5 border-b border-subtle"
              >
                <span className="text-secondary pr-2">{row.item}</span>
                <div className="text-right shrink-0">
                  <div className="text-primary font-mono font-medium">
                    {(row.watts / 1000).toFixed(2)} kW
                  </div>
                  <div className="text-muted text-xs">{row.demandFactor}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2 mt-4">
            <ResultRow
              item="Total Demand Load"
              value={`${(result.totalDemand / 1000).toFixed(2)} kW`}
            />
            <ResultRow
              item="Required Service Current (240 V)"
              value={`${result.serviceAmps.toFixed(1)} A`}
            />
            <ResultRow
              item="Recommended Service Size"
              value={`${result.recommendedService} A`}
              highlight
              rule="Rule 8-202: Min 100 A for dwellings ≥60 m²"
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

// ============================================================
// TAB 2: Voltage Drop
// ============================================================
function VoltageDropCalc() {
  const [voltage, setVoltage] = useState('120')
  const [current, setCurrent] = useState('15')
  const [length, setLength] = useState('30')
  const [material, setMaterial] = useState<'copper' | 'aluminum'>('copper')
  const [wireSize, setWireSize] = useState('12')
  const [phases, setPhases] = useState<'1' | '3'>('1')
  const [result, setResult] = useState<ReturnType<typeof calculateVoltageDrop> | null>(null)

  const wireSizeOptions = [
    '14', '12', '10', '8', '6', '4', '3', '2', '1',
    '1/0', '2/0', '3/0', '4/0', '250', '300', '350', '400', '500',
  ].map((s) => ({ value: s, label: `${s} AWG` }))

  function calculate() {
    const params: VoltageDropParams = {
      voltage: parseFloat(voltage) || 120,
      current: parseFloat(current) || 0,
      wireLength: parseFloat(length) || 0,
      conductorMaterial: material,
      conductorSizeAWG: wireSize,
      phases: parseInt(phases) as 1 | 3,
    }
    setResult(calculateVoltageDrop(params))
  }

  const vdPct = result?.voltageDropPercent ?? 0
  const vdTone = vdPct <= 3 ? 'bg-success' : vdPct <= 5 ? 'bg-warning' : 'bg-danger'

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <RuleChip rule="CEC Rule 8-102">
          Single-phase: VD = 2 × I × R × L · Three-phase: VD = √3 × I × R × L · Max 3%
          branch circuit, 5% total
        </RuleChip>

        <SelectField
          label="System Voltage"
          value={voltage}
          onChange={setVoltage}
          options={[
            { value: '120', label: '120 V (1-phase L-N)' },
            { value: '240', label: '240 V (1-phase L-L)' },
            { value: '208', label: '208 V (3-phase L-L)' },
            { value: '347', label: '347 V (1-phase L-N from 600 V)' },
            { value: '480', label: '480 V (3-phase L-L)' },
            { value: '600', label: '600 V (3-phase L-L)' },
          ]}
        />
        <SelectField
          label="Phases"
          value={phases}
          onChange={(v) => setPhases(v as '1' | '3')}
          options={[
            { value: '1', label: 'Single-phase' },
            { value: '3', label: 'Three-phase' },
          ]}
        />
        <Input
          label="Load Current"
          type="number"
          min={0}
          unit="A"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
        />
        <Input
          label="One-Way Circuit Length"
          type="number"
          min={0}
          unit="m"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          hint="Length from panel to load (one-way only)"
        />
        <SelectField
          label="Conductor Material"
          value={material}
          onChange={(v) => setMaterial(v as 'copper' | 'aluminum')}
          options={[
            { value: 'copper', label: 'Copper (ρ = 17.2 Ω·mm²/km)' },
            { value: 'aluminum', label: 'Aluminum (ρ = 28.3 Ω·mm²/km)' },
          ]}
        />
        <SelectField
          label="Conductor Size"
          value={wireSize}
          onChange={setWireSize}
          options={wireSizeOptions}
        />

        <Button variant="primary" size="lg" className="w-full" onClick={calculate}>
          Calculate Voltage Drop
        </Button>
      </div>

      {result ? (
        <div className="space-y-3">
          <h3 className="text-primary font-display font-semibold">Results</h3>
          <div className="space-y-2">
            <ResultRow item="Voltage Drop" value={`${result.voltageDrop} V`} />
            <ResultRow
              item="Voltage Drop %"
              value={`${result.voltageDropPercent}%`}
              highlight
            />
            <ResultRow item="Receiving End Voltage" value={`${result.receivingVoltage} V`} />
            <div
              className={`flex items-center gap-2 p-3 rounded-md bg-surface-elevated text-sm font-medium ${
                result.isWithinCode ? 'text-success' : 'text-danger'
              }`}
            >
              {result.isWithinCode ? '✓ Within Code (≤3%)' : '✗ Exceeds 3% Limit'}
            </div>
          </div>
          <Card elevation="elev-1" padding="sm" className="text-sm text-secondary leading-relaxed">
            {result.recommendation}
          </Card>

          {/* Semantic gauge — 3 discrete zones (success / warning / danger) */}
          <div>
            <div className="flex justify-between text-xs mb-1 font-mono">
              <span className="text-muted">0%</span>
              <span className="text-success">3% limit</span>
              <span className="text-danger">5% limit</span>
            </div>
            <div className="relative h-4 bg-surface-elevated-2 rounded-pill overflow-hidden">
              <div
                className={`h-full rounded-pill transition-all duration-300 ${vdTone}`}
                style={{ width: `${Math.min((vdPct / 6) * 100, 100)}%` }}
              />
              <div
                className="absolute top-0 h-full w-px bg-success"
                style={{ left: '50%' }}
                aria-hidden="true"
              />
              <div
                className="absolute top-0 h-full w-px bg-danger"
                style={{ left: '83.3%' }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

// ============================================================
// TAB 3: Ampacity Correction
// ============================================================
function AmpacityCorrectionCalc() {
  const [baseAmpacity, setBaseAmpacity] = useState('55')
  const [ambientTemp, setAmbientTemp] = useState('30')
  const [insulation, setInsulation] = useState<'T90' | 'TWN75' | 'RW90' | 'XHHW-2' | 'T60'>('T90')
  const [numConductors, setNumConductors] = useState('3')
  const [result, setResult] = useState<ReturnType<typeof calculateCorrectedAmpacity> | null>(null)

  function calculate() {
    const params: AmpacityCorrectionParams = {
      baseAmpacity: parseFloat(baseAmpacity) || 0,
      ambientTemp: parseFloat(ambientTemp) || 30,
      conductorInsulation: insulation,
      numberOfConductors: parseInt(numConductors) || 1,
    }
    setResult(calculateCorrectedAmpacity(params))
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <RuleChip rule="CEC Tables 5A & 5C">
          Corrected ampacity = Base × Temperature Factor (Table 5A) × Bundling Factor (Table 5C).
          Base ambient temperature: 30°C.
        </RuleChip>

        <Input
          label="Base Ampacity (from Table 1 or 2)"
          type="number"
          min={0}
          unit="A"
          value={baseAmpacity}
          onChange={(e) => setBaseAmpacity(e.target.value)}
          hint="From CEC Table 1 (copper) or Table 2 (aluminum)"
        />
        <SelectField
          label="Conductor Insulation Type"
          value={insulation}
          onChange={(v) => setInsulation(v as typeof insulation)}
          options={[
            { value: 'T90', label: 'T90 — 90°C rated' },
            { value: 'RW90', label: 'RW90 — 90°C rated (wet/dry)' },
            { value: 'XHHW-2', label: 'XHHW-2 — 90°C rated (wet/dry)' },
            { value: 'TWN75', label: 'TWN75 — 75°C rated' },
            { value: 'T60', label: 'T60 — 60°C rated' },
          ]}
        />
        <Input
          label="Ambient Temperature"
          type="number"
          min={10}
          max={80}
          unit="°C"
          value={ambientTemp}
          onChange={(e) => setAmbientTemp(e.target.value)}
          hint="Actual temperature at installation location (base = 30°C)"
        />
        <Input
          label="Number of Current-Carrying Conductors"
          type="number"
          min={1}
          value={numConductors}
          onChange={(e) => setNumConductors(e.target.value)}
          hint="Do not count grounding conductors. No derating if ≤3."
        />

        <Button variant="primary" size="lg" className="w-full" onClick={calculate}>
          Calculate Corrected Ampacity
        </Button>

        <Card elevation="elev-1" padding="sm">
          <div className="text-secondary text-xs font-medium mb-2">
            Table 5C Bundling Factors
          </div>
          <div className="grid grid-cols-4 gap-1 text-xs">
            {[
              ['1–3', '1.00'],
              ['4–6', '0.80'],
              ['7–9', '0.70'],
              ['10–20', '0.50'],
            ].map(([range, factor]) => (
              <div
                key={range}
                className="bg-surface-elevated-2 rounded-sm p-1.5 text-center"
              >
                <div className="text-primary font-medium">{range}</div>
                <div className="text-accent font-mono">{factor}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {result ? (
        <div className="space-y-3">
          <h3 className="text-primary font-display font-semibold">Results</h3>
          <div className="space-y-2">
            {result.breakdown.map((row, i) => (
              <ResultRow
                key={i}
                item={row.factor}
                value={
                  typeof row.value === 'number'
                    ? Number.isInteger(row.value)
                      ? `${row.value} A`
                      : row.value.toFixed(2)
                    : `${row.value} A`
                }
                highlight={i === result.breakdown.length - 1}
              />
            ))}
          </div>
          <Card elevation="elev-1" padding="sm">
            <div className="text-muted text-xs mb-1">Insulation Rating</div>
            <div className="text-primary font-mono font-medium">{result.insulation}</div>
          </Card>
          <Card elevation="elev-1" padding="sm">
            <div className="text-sm text-accent leading-relaxed">
              Use the corrected ampacity to select the appropriate overcurrent protection device.
              The OCPD must not exceed the corrected ampacity.
            </div>
          </Card>
        </div>
      ) : null}
    </div>
  )
}

// ============================================================
// TAB 4: Motor Protection
// ============================================================
function MotorProtectionCalc() {
  const [hp, setHp] = useState('5')
  const [voltage, setVoltage] = useState('208')
  const [phases, setPhases] = useState<'1' | '3'>('3')
  const [serviceClass, setServiceClass] = useState<'A' | 'B'>('B')
  const [result, setResult] = useState<ReturnType<typeof calculateMotorProtection> | null>(null)

  function calculate() {
    const params: MotorProtectionParams = {
      motorHP: parseFloat(hp) || 1,
      voltage: parseFloat(voltage) || 208,
      phases: parseInt(phases) as 1 | 3,
      serviceClass,
      motorType: 'induction',
    }
    setResult(calculateMotorProtection(params))
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <RuleChip rule="CEC Section 28">
          Conductors: 125% FLA (Rule 28-304) · OCPD: 250% FLA for CB (Rule 28-200) · Disconnect:
          115% FLA (Rule 28-600) · Overload: 125% FLA (Rule 28-302)
        </RuleChip>

        <SelectField
          label="Motor Horsepower"
          value={hp}
          onChange={setHp}
          options={[
            '0.17', '0.25', '0.33', '0.5', '0.75', '1', '1.5', '2', '3', '5', '7.5',
            '10', '15', '20', '25', '30', '40', '50', '60', '75', '100',
          ].map((v) => ({ value: v, label: `${v} HP` }))}
        />
        <SelectField
          label="Supply Voltage"
          value={voltage}
          onChange={setVoltage}
          options={[
            { value: '120', label: '120 V (1-phase)' },
            { value: '240', label: '240 V' },
            { value: '208', label: '208 V (3-phase)' },
            { value: '480', label: '480 V (3-phase)' },
            { value: '600', label: '600 V (3-phase)' },
          ]}
        />
        <SelectField
          label="Number of Phases"
          value={phases}
          onChange={(v) => setPhases(v as '1' | '3')}
          options={[
            { value: '1', label: 'Single-phase' },
            { value: '3', label: 'Three-phase' },
          ]}
        />
        <SelectField
          label="Motor Service Factor"
          value={serviceClass}
          onChange={(v) => setServiceClass(v as 'A' | 'B')}
          options={[
            { value: 'B', label: 'Service Factor ≥1.15 (use 125% overload)' },
            { value: 'A', label: 'Service Factor 1.0 (use 115% overload)' },
          ]}
        />

        <Button variant="primary" size="lg" className="w-full" onClick={calculate}>
          Calculate Motor Protection
        </Button>
      </div>

      {result ? (
        <div className="space-y-2">
          <h3 className="text-primary font-display font-semibold">Motor Protection Schedule</h3>
          {result.breakdown.map((row, i) => (
            <div
              key={i}
              className="flex items-start justify-between py-2 px-3 rounded-md bg-surface-elevated gap-2"
            >
              <div className="min-w-0">
                <div className="text-primary text-sm font-medium">{row.item}</div>
                <div className="text-muted text-xs">{row.rule}</div>
              </div>
              <div className="text-primary font-mono font-semibold text-sm shrink-0 text-right">
                {String(row.value)}
              </div>
            </div>
          ))}
          <div className="rounded-md bg-surface-elevated p-3 text-sm text-warning mt-2 border border-subtle">
            Note: If motor does not start with the calculated OCPD size, the next higher standard
            size may be used per CEC Rule 28-200.
          </div>
        </div>
      ) : null}
    </div>
  )
}

// ============================================================
// MAIN PAGE
// ============================================================
export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState<Tab>('demand')

  const tabs: { id: Tab; label: string }[] = [
    { id: 'demand', label: 'Residential Demand' },
    { id: 'vdrop', label: 'Voltage Drop' },
    { id: 'ampacity', label: 'Ampacity Correction' },
    { id: 'motor', label: 'Motor Protection' },
  ]

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/"
          className="text-secondary hover:text-primary transition-colors duration-75"
          aria-label="Back to dashboard"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-display font-bold text-primary">CEC Calculators</h1>
          <p className="text-secondary text-sm">Canadian Electrical Code formulas</p>
        </div>
      </div>

      {/* Tabs */}
      <Card elevation="elev-1" padding="sm" className="flex gap-1 mb-6 overflow-x-auto">
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
      </Card>

      {/* Tab content */}
      <Card elevation="elev-1" padding="lg">
        {activeTab === 'demand' ? <ResidentialDemandCalc /> : null}
        {activeTab === 'vdrop' ? <VoltageDropCalc /> : null}
        {activeTab === 'ampacity' ? <AmpacityCorrectionCalc /> : null}
        {activeTab === 'motor' ? <MotorProtectionCalc /> : null}
      </Card>
    </div>
  )
}
