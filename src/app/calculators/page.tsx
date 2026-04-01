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

type Tab = 'demand' | 'vdrop' | 'ampacity' | 'motor'

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
        active
          ? 'bg-blue-600 text-white'
          : 'text-gray-400 hover:text-white hover:bg-gray-800'
      }`}
    >
      {children}
    </button>
  )
}

function InputField({
  label,
  value,
  onChange,
  type = 'number',
  min,
  max,
  step,
  unit,
  hint,
}: {
  label: string
  value: string | number
  onChange: (v: string) => void
  type?: string
  min?: number
  max?: number
  step?: number
  unit?: string
  hint?: string
}) {
  return (
    <div>
      <label className="block text-gray-300 text-sm font-medium mb-1">
        {label}
        {unit && <span className="text-gray-500 ml-1">({unit})</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        step={step}
        className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
      />
      {hint && <div className="text-gray-500 text-xs mt-1">{hint}</div>}
    </div>
  )
}

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
    <div>
      <label className="block text-gray-300 text-sm font-medium mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
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
      className={`flex items-center justify-between py-2.5 px-3 rounded-lg ${
        highlight ? 'bg-blue-600/20 border border-blue-500/40' : 'bg-gray-800/50'
      }`}
    >
      <div>
        <div className={`text-sm font-medium ${highlight ? 'text-blue-300' : 'text-gray-300'}`}>
          {item}
        </div>
        {rule && <div className="text-gray-500 text-xs">{rule}</div>}
      </div>
      <div className={`font-bold tabular-nums ${highlight ? 'text-blue-300 text-base' : 'text-white text-sm'}`}>
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
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
          <div className="text-blue-400 text-xs font-semibold">CEC Rule 8-200</div>
          <div className="text-gray-300 text-xs mt-1">
            Basic load: 45 VA/m² · Demand factors: 100% (first 1kW), 75% (1-10kW), 40% (over 10kW)
          </div>
        </div>

        <InputField
          label="Habitable Floor Area"
          value={floorArea}
          onChange={setFloorArea}
          unit="m²"
          min={0}
          hint="Total heated floor area (not including garage/basement if unfinished)"
        />
        <InputField
          label="Small Appliance Circuits"
          value={smallApp}
          onChange={setSmallApp}
          min={2}
          hint="Minimum 2 required per Rule 8-210 (1500W each)"
        />

        <div className="border border-gray-700 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-gray-300 text-sm font-medium">Electric Range</label>
            <button
              onClick={() => setHasRange(!hasRange)}
              className={`w-10 h-5 rounded-full transition-all ${hasRange ? 'bg-blue-600' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-all m-0.5 ${hasRange ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>
          {hasRange && (
            <InputField
              label="Range Rating"
              value={rangeRating}
              onChange={setRangeRating}
              unit="watts"
              min={0}
              hint="Typical: 8000-14400W. Demand factor: 80% for ≤10kW, 8kW for ≤12.5kW"
            />
          )}
        </div>

        <div className="border border-gray-700 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-gray-300 text-sm font-medium">Electric Dryer</label>
            <button
              onClick={() => setHasDryer(!hasDryer)}
              className={`w-10 h-5 rounded-full transition-all ${hasDryer ? 'bg-blue-600' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-all m-0.5 ${hasDryer ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>
          {hasDryer && (
            <InputField
              label="Dryer Rating"
              value={dryerRating}
              onChange={setDryerRating}
              unit="watts"
              min={5000}
              hint="Minimum 5000W per CEC Rule 8-200"
            />
          )}
        </div>

        <div className="border border-gray-700 rounded-xl p-4 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-gray-300 text-sm font-medium">Electric HVAC</label>
            <button
              onClick={() => setHasHVAC(!hasHVAC)}
              className={`w-10 h-5 rounded-full transition-all ${hasHVAC ? 'bg-blue-600' : 'bg-gray-700'}`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-all m-0.5 ${hasHVAC ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
          </div>
          {hasHVAC && (
            <InputField
              label="HVAC Rating (larger of heating or cooling)"
              value={hvacRating}
              onChange={setHvacRating}
              unit="watts"
              min={0}
              hint="Only the larger of heating or cooling per Rule 8-200"
            />
          )}
        </div>

        <button
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all"
        >
          Calculate Service Load
        </button>
      </div>

      {result && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Results</h3>
          <div className="space-y-1.5">
            {result.breakdown.map((row, i) => (
              <div key={i} className="flex justify-between text-sm py-1.5 border-b border-gray-800">
                <span className="text-gray-400 pr-2">{row.item}</span>
                <div className="text-right shrink-0">
                  <div className="text-white font-medium">{(row.watts / 1000).toFixed(2)} kW</div>
                  <div className="text-gray-500 text-xs">{row.demandFactor}</div>
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
              item="Required Service Current (240V)"
              value={`${result.serviceAmps.toFixed(1)} A`}
            />
            <ResultRow
              item="Recommended Service Size"
              value={`${result.recommendedService} A`}
              highlight
              rule="Rule 8-202: Min 100A for dwellings ≥60m²"
            />
          </div>
        </div>
      )}
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

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
          <div className="text-blue-400 text-xs font-semibold">CEC Rule 8-102</div>
          <div className="text-gray-300 text-xs mt-1">
            Single-phase: VD = 2 × I × R × L · Three-phase: VD = √3 × I × R × L
            · Max 3% branch circuit, 5% total
          </div>
        </div>

        <SelectField
          label="System Voltage"
          value={voltage}
          onChange={setVoltage}
          options={[
            { value: '120', label: '120 V (1-phase L-N)' },
            { value: '240', label: '240 V (1-phase L-L)' },
            { value: '208', label: '208 V (3-phase L-L)' },
            { value: '347', label: '347 V (1-phase L-N from 600V)' },
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
        <InputField
          label="Load Current"
          value={current}
          onChange={setCurrent}
          unit="amps"
          min={0}
        />
        <InputField
          label="One-Way Circuit Length"
          value={length}
          onChange={setLength}
          unit="metres"
          min={0}
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

        <button
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all"
        >
          Calculate Voltage Drop
        </button>
      </div>

      {result && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Results</h3>
          <div className="space-y-2">
            <ResultRow item="Voltage Drop" value={`${result.voltageDrop} V`} />
            <ResultRow
              item="Voltage Drop %"
              value={`${result.voltageDropPercent}%`}
              highlight
            />
            <ResultRow item="Receiving End Voltage" value={`${result.receivingVoltage} V`} />
            <div
              className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium ${
                result.isWithinCode
                  ? 'bg-green-500/10 border-green-500/30 text-green-400'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}
            >
              {result.isWithinCode ? '✓ Within Code (≤3%)' : '✗ Exceeds 3% Limit'}
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-3 text-sm text-gray-300 leading-relaxed">
            {result.recommendation}
          </div>

          {/* Visual gauge */}
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>0%</span>
              <span className="text-green-400">3% limit</span>
              <span className="text-red-400">5% limit</span>
            </div>
            <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 opacity-20 w-full" />
              <div
                className={`h-full rounded-full transition-all ${
                  result.voltageDropPercent <= 3 ? 'bg-green-500' : result.voltageDropPercent <= 5 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${Math.min((result.voltageDropPercent / 6) * 100, 100)}%` }}
              />
              <div className="absolute top-0 h-full w-px bg-green-400" style={{ left: '50%' }} />
              <div className="absolute top-0 h-full w-px bg-red-400" style={{ left: '83.3%' }} />
            </div>
          </div>
        </div>
      )}
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
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
          <div className="text-blue-400 text-xs font-semibold">CEC Tables 5A & 5C</div>
          <div className="text-gray-300 text-xs mt-1">
            Corrected ampacity = Base × Temperature Factor (Table 5A) × Bundling Factor (Table 5C).
            Base ambient temperature: 30°C.
          </div>
        </div>

        <InputField
          label="Base Ampacity (from Table 1 or 2)"
          value={baseAmpacity}
          onChange={setBaseAmpacity}
          unit="amps"
          min={0}
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
        <InputField
          label="Ambient Temperature"
          value={ambientTemp}
          onChange={setAmbientTemp}
          unit="°C"
          min={10}
          max={80}
          hint="Actual temperature at installation location (base = 30°C)"
        />
        <InputField
          label="Number of Current-Carrying Conductors"
          value={numConductors}
          onChange={setNumConductors}
          min={1}
          hint="Do not count grounding conductors. No derating if ≤3."
        />

        <button
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all"
        >
          Calculate Corrected Ampacity
        </button>

        <div className="bg-gray-900 border border-gray-700 rounded-xl p-3">
          <div className="text-gray-400 text-xs font-medium mb-2">Table 5C Bundling Factors</div>
          <div className="grid grid-cols-4 gap-1 text-xs">
            {[
              ['1-3', '1.00'],
              ['4-6', '0.80'],
              ['7-9', '0.70'],
              ['10-20', '0.50'],
            ].map(([range, factor]) => (
              <div key={range} className="bg-gray-800 rounded p-1.5 text-center">
                <div className="text-gray-300 font-medium">{range}</div>
                <div className="text-blue-400">{factor}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <h3 className="text-white font-semibold">Results</h3>
          <div className="space-y-2">
            {result.breakdown.map((row, i) => (
              <ResultRow
                key={i}
                item={row.factor}
                value={typeof row.value === 'number' ? (Number.isInteger(row.value) ? `${row.value} A` : row.value.toFixed(2)) : `${row.value} A`}
                highlight={i === result.breakdown.length - 1}
              />
            ))}
          </div>
          <div className="bg-gray-800 rounded-xl p-3">
            <div className="text-gray-400 text-xs mb-1">Insulation Rating</div>
            <div className="text-white font-medium">{result.insulation}</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3 text-sm text-blue-300">
            Use the corrected ampacity to select the appropriate overcurrent protection device.
            The OCPD must not exceed the corrected ampacity.
          </div>
        </div>
      )}
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
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
          <div className="text-blue-400 text-xs font-semibold">CEC Section 28</div>
          <div className="text-gray-300 text-xs mt-1">
            Conductors: 125% FLA (Rule 28-304) · OCPD: 250% FLA for CB (Rule 28-200)
            · Disconnect: 115% FLA (Rule 28-600) · Overload: 125% FLA (Rule 28-302)
          </div>
        </div>

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

        <button
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all"
        >
          Calculate Motor Protection
        </button>
      </div>

      {result && (
        <div className="space-y-2">
          <h3 className="text-white font-semibold">Motor Protection Schedule</h3>
          {result.breakdown.map((row, i) => (
            <div
              key={i}
              className="flex items-start justify-between py-2 px-3 rounded-lg bg-gray-800/50 gap-2"
            >
              <div className="min-w-0">
                <div className="text-gray-300 text-sm font-medium">{row.item}</div>
                <div className="text-gray-500 text-xs">{row.rule}</div>
              </div>
              <div className="text-white font-semibold text-sm shrink-0 text-right">
                {String(row.value)}
              </div>
            </div>
          ))}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-3 text-sm text-yellow-300 mt-2">
            Note: If motor does not start with the calculated OCPD size, the next higher
            standard size may be used per CEC Rule 28-200.
          </div>
        </div>
      )}
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
        <Link href="/" className="text-gray-400 hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">CEC Calculators</h1>
          <p className="text-gray-400 text-sm">Canadian Electrical Code formulas</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-900 border border-gray-700 rounded-xl p-1 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
        {activeTab === 'demand' && <ResidentialDemandCalc />}
        {activeTab === 'vdrop' && <VoltageDropCalc />}
        {activeTab === 'ampacity' && <AmpacityCorrectionCalc />}
        {activeTab === 'motor' && <MotorProtectionCalc />}
      </div>
    </div>
  )
}
