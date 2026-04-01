// CEC Calculators - Real formulas from the Canadian Electrical Code

// Resistivity values (Ω·mm²/km)
const COPPER_RESISTIVITY = 17.2 // at 20°C
const ALUMINUM_RESISTIVITY = 28.3 // at 20°C

// AWG to cross-sectional area (mm²) - exact values
const AWG_TO_MM2: Record<string, number> = {
  '18': 0.823,
  '16': 1.31,
  '14': 2.08,
  '12': 3.31,
  '10': 5.26,
  '8': 8.37,
  '6': 13.3,
  '4': 21.2,
  '3': 26.7,
  '2': 33.6,
  '1': 42.4,
  '1/0': 53.5,
  '2/0': 67.4,
  '3/0': 85.0,
  '4/0': 107.2,
  '250': 127,
  '300': 152,
  '350': 177,
  '400': 203,
  '500': 253,
  '600': 304,
  '750': 380,
}

// CEC Table 1 - Base ampacity for copper conductors in conduit (T90, 90°C)
const COPPER_AMPACITY_T90: Record<string, number> = {
  '14': 20,
  '12': 25,
  '10': 30,
  '8': 45,
  '6': 55,
  '4': 70,
  '3': 85,
  '2': 95,
  '1': 110,
  '1/0': 125,
  '2/0': 145,
  '3/0': 165,
  '4/0': 195,
  '250': 215,
  '300': 240,
  '350': 260,
  '400': 280,
  '500': 320,
  '600': 355,
  '750': 400,
}

// Standard breaker/fuse sizes (amperes)
const STANDARD_BREAKER_SIZES = [
  15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200,
  225, 250, 300, 350, 400, 450, 500, 600,
]

// Standard service sizes
const STANDARD_SERVICE_SIZES = [60, 100, 125, 150, 200, 225, 250, 300, 400, 600]

function getNextStandardBreaker(amps: number): number {
  for (const size of STANDARD_BREAKER_SIZES) {
    if (size >= amps) return size
  }
  return STANDARD_BREAKER_SIZES[STANDARD_BREAKER_SIZES.length - 1]
}

function getNextStandardService(amps: number): number {
  for (const size of STANDARD_SERVICE_SIZES) {
    if (size >= amps) return size
  }
  return STANDARD_SERVICE_SIZES[STANDARD_SERVICE_SIZES.length - 1]
}

function getWireSizeForAmpacity(amps: number, material: 'copper' | 'aluminum'): string {
  const table = material === 'copper' ? COPPER_AMPACITY_T90 : ALUMINUM_AMPACITY_RW90
  const sizes = Object.keys(table)
  for (const size of sizes) {
    if (table[size] >= amps) return size + ' AWG'
  }
  return '4/0 AWG (consult engineer)'
}

// CEC Table 2 - Base ampacity for aluminum conductors in conduit (RW90, 90°C)
const ALUMINUM_AMPACITY_RW90: Record<string, number> = {
  '12': 20,
  '10': 25,
  '8': 35,
  '6': 45,
  '4': 60,
  '3': 70,
  '2': 80,
  '1': 95,
  '1/0': 110,
  '2/0': 125,
  '3/0': 145,
  '4/0': 165,
  '250': 185,
  '300': 210,
  '350': 230,
  '400': 250,
  '500': 285,
  '600': 320,
  '750': 360,
}

// Table 5A - Temperature correction factors for T90 (90°C rated) conductors
// Base ambient = 30°C
const TABLE_5A_T90: Record<number, number> = {
  10: 1.15,
  15: 1.12,
  20: 1.08,
  25: 1.04,
  30: 1.00,
  35: 0.96,
  40: 0.91,
  45: 0.87,
  50: 0.82,
  55: 0.76,
  60: 0.71,
  65: 0.65,
  70: 0.58,
  75: 0.50,
  80: 0.41,
}

// Table 5A - Temperature correction factors for TWN75 (75°C rated) conductors
const TABLE_5A_TWN75: Record<number, number> = {
  10: 1.20,
  15: 1.15,
  20: 1.11,
  25: 1.05,
  30: 1.00,
  35: 0.94,
  40: 0.88,
  45: 0.82,
  50: 0.75,
  55: 0.67,
  60: 0.58,
  65: 0.47,
  70: 0.33,
}

// Table 5A - Temperature correction factors for T60 (60°C rated) conductors
const TABLE_5A_T60: Record<number, number> = {
  10: 1.29,
  15: 1.22,
  20: 1.15,
  25: 1.08,
  30: 1.00,
  35: 0.91,
  40: 0.82,
  45: 0.71,
  50: 0.58,
  55: 0.41,
}

// Table 5C - Bundling correction factors
const TABLE_5C_BUNDLING: Array<{ min: number; max: number; factor: number }> = [
  { min: 1, max: 3, factor: 1.00 },
  { min: 4, max: 6, factor: 0.80 },
  { min: 7, max: 9, factor: 0.70 },
  { min: 10, max: 20, factor: 0.50 },
  { min: 21, max: 30, factor: 0.45 },
  { min: 31, max: 40, factor: 0.40 },
  { min: 41, max: 999, factor: 0.35 },
]

// CEC Table 44 - Motor Full-Load Currents (approximate)
// Single-phase motors
const MOTOR_FLA_1PH: Record<string, Record<number, number>> = {
  '120': { 0.17: 4.4, 0.25: 5.8, 0.33: 7.2, 0.5: 9.8, 0.75: 13.8, 1: 16, 1.5: 20, 2: 24, 3: 34 },
  '240': { 0.17: 2.2, 0.25: 2.9, 0.33: 3.6, 0.5: 4.9, 0.75: 6.9, 1: 8, 1.5: 10, 2: 12, 3: 17, 5: 28, 7.5: 40, 10: 50 },
}

// Three-phase motors (approximate FLA values from CEC Table 44)
const MOTOR_FLA_3PH: Record<number, Record<number, number>> = {
  208: { 0.5: 2.4, 0.75: 3.5, 1: 4.6, 1.5: 6.6, 2: 7.5, 3: 10.6, 5: 16.7, 7.5: 24.2, 10: 30.8, 15: 46.2, 20: 59.4, 25: 74.8, 30: 88, 40: 114, 50: 143, 60: 169, 75: 211, 100: 273 },
  240: { 0.5: 2.1, 0.75: 3.0, 1: 4.0, 1.5: 5.7, 2: 6.5, 3: 9.2, 5: 14.5, 7.5: 21, 10: 26.3, 15: 40, 20: 52, 25: 64, 30: 78, 40: 104, 50: 125, 60: 150, 75: 185, 100: 246 },
  480: { 0.5: 1.1, 0.75: 1.6, 1: 2.1, 1.5: 3.0, 2: 3.4, 3: 4.8, 5: 7.6, 7.5: 11, 10: 14, 15: 21, 20: 27, 25: 34, 30: 40, 40: 52, 50: 65, 60: 77, 75: 96, 100: 124 },
  600: { 0.5: 0.9, 0.75: 1.3, 1: 1.7, 1.5: 2.4, 2: 2.7, 3: 3.9, 5: 6.1, 7.5: 9, 10: 10.9, 15: 17, 20: 22, 25: 27, 30: 32, 40: 41, 50: 52, 60: 62, 75: 77, 100: 99 },
}

function getMotorFLA(hp: number, voltage: number, phases: 1 | 3): number {
  if (phases === 1) {
    const table = MOTOR_FLA_1PH[voltage.toString()]
    if (!table) return hp * 5 // fallback approximation
    // Find closest HP
    const hpValues = Object.keys(table).map(Number).sort((a, b) => a - b)
    for (const h of hpValues) {
      if (h >= hp) return table[h]
    }
    return table[hpValues[hpValues.length - 1]] * (hp / hpValues[hpValues.length - 1])
  } else {
    // Find closest voltage
    const voltages = Object.keys(MOTOR_FLA_3PH).map(Number).sort((a, b) => a - b)
    let closestVoltage = voltages[0]
    for (const v of voltages) {
      if (Math.abs(v - voltage) < Math.abs(closestVoltage - voltage)) {
        closestVoltage = v
      }
    }
    const table = MOTOR_FLA_3PH[closestVoltage]
    const hpValues = Object.keys(table).map(Number).sort((a, b) => a - b)
    for (const h of hpValues) {
      if (h >= hp) return table[h]
    }
    return table[hpValues[hpValues.length - 1]] * (hp / hpValues[hpValues.length - 1])
  }
}

function getTempCorrectionFactor(
  ambientTemp: number,
  insulation: 'T90' | 'TWN75' | 'RW90' | 'XHHW-2' | 'T60'
): number {
  let table: Record<number, number>
  if (insulation === 'T90' || insulation === 'RW90' || insulation === 'XHHW-2') {
    table = TABLE_5A_T90
  } else if (insulation === 'TWN75') {
    table = TABLE_5A_TWN75
  } else {
    table = TABLE_5A_T60
  }

  // Find the nearest temperature entry
  const temps = Object.keys(table).map(Number).sort((a, b) => a - b)
  let closest = temps[0]
  for (const t of temps) {
    if (Math.abs(t - ambientTemp) < Math.abs(closest - ambientTemp)) {
      closest = t
    }
  }
  return table[closest] ?? 1.0
}

function getBundlingFactor(numberOfConductors: number): number {
  for (const range of TABLE_5C_BUNDLING) {
    if (numberOfConductors >= range.min && numberOfConductors <= range.max) {
      return range.factor
    }
  }
  return 0.35
}

// ============================================================
// CALCULATOR 1: Residential Demand (Rule 8-200)
// ============================================================

export interface ResidentialDemandParams {
  floorAreaSqM: number
  smallApplianceCircuits: number
  hasElectricRange: boolean
  rangeRating: number
  hasElectricDryer: boolean
  dryerRating: number
  hasElectricHVAC: boolean
  hvacRating: number
  additionalLoads: { name: string; watts: number }[]
}

export interface ResidentialDemandResult {
  basicLoad: number
  smallApplianceLoad: number
  rangeLoad: number
  dryerLoad: number
  hvacLoad: number
  additionalLoad: number
  totalDemand: number
  serviceAmps: number
  recommendedService: number
  breakdown: { item: string; watts: number; demandFactor: string }[]
}

function applyBasicDemandFactors(rawWatts: number): number {
  // Rule 8-200: 100% for first 1000W, 75% for next 9000W (1001-10000W), 40% for remainder
  if (rawWatts <= 1000) {
    return rawWatts
  } else if (rawWatts <= 10000) {
    return 1000 + (rawWatts - 1000) * 0.75
  } else {
    return 1000 + 9000 * 0.75 + (rawWatts - 10000) * 0.40
  }
}

function applyRangeDemand(rangeRating: number): number {
  // Rule 8-200 range demand:
  // Up to 10kW: 80%
  // 10-12.5kW: use 8kW
  // Over 12.5kW: 80% of first 10kW + amount over 10kW
  if (rangeRating <= 10000) {
    return rangeRating * 0.80
  } else if (rangeRating <= 12500) {
    return 8000
  } else {
    return 8000 + (rangeRating - 10000) * 0.80
  }
}

export function calculateResidentialDemand(
  params: ResidentialDemandParams
): ResidentialDemandResult {
  const breakdown: { item: string; watts: number; demandFactor: string }[] = []

  // 1. Basic load: 45 VA/m²
  const basicLoadRaw = params.floorAreaSqM * 45
  const basicLoadDemand = applyBasicDemandFactors(basicLoadRaw)
  breakdown.push({
    item: `Basic load (${params.floorAreaSqM} m² × 45 VA/m²)`,
    watts: basicLoadDemand,
    demandFactor: `100%/75%/40% graduated`,
  })

  // 2. Small appliance circuits: 1500W each (Rule 8-210)
  const smallAppRaw = Math.max(params.smallApplianceCircuits, 2) * 1500
  const smallAppDemand = applyBasicDemandFactors(smallAppRaw)
  breakdown.push({
    item: `Small appliance circuits (${Math.max(params.smallApplianceCircuits, 2)} × 1500W)`,
    watts: smallAppDemand,
    demandFactor: `100%/75%/40% graduated`,
  })

  // 3. Electric range
  let rangeLoad = 0
  if (params.hasElectricRange && params.rangeRating > 0) {
    rangeLoad = applyRangeDemand(params.rangeRating)
    const factor = params.rangeRating <= 10000 ? '80%' : params.rangeRating <= 12500 ? '8000W fixed' : '80% + excess'
    breakdown.push({
      item: `Electric range (${(params.rangeRating / 1000).toFixed(1)} kW)`,
      watts: rangeLoad,
      demandFactor: factor,
    })
  }

  // 4. Electric dryer: 5000W minimum or rating, at 100%
  let dryerLoad = 0
  if (params.hasElectricDryer && params.dryerRating > 0) {
    dryerLoad = Math.max(params.dryerRating, 5000)
    breakdown.push({
      item: `Electric dryer (min 5000W)`,
      watts: dryerLoad,
      demandFactor: '100%',
    })
  }

  // 5. Electric HVAC: only the larger of heating or cooling
  let hvacLoad = 0
  if (params.hasElectricHVAC && params.hvacRating > 0) {
    hvacLoad = params.hvacRating
    breakdown.push({
      item: `Electric HVAC (larger of heating/cooling)`,
      watts: hvacLoad,
      demandFactor: '100%',
    })
  }

  // 6. Additional loads at 100%
  let additionalLoad = 0
  for (const load of params.additionalLoads) {
    if (load.watts > 0) {
      additionalLoad += load.watts
      breakdown.push({
        item: load.name,
        watts: load.watts,
        demandFactor: '100%',
      })
    }
  }

  const totalDemand =
    basicLoadDemand +
    smallAppDemand +
    rangeLoad +
    dryerLoad +
    hvacLoad +
    additionalLoad

  // Service amps at 240 V
  const serviceAmps = totalDemand / 240
  const recommendedService = getNextStandardService(serviceAmps)

  return {
    basicLoad: basicLoadDemand,
    smallApplianceLoad: smallAppDemand,
    rangeLoad,
    dryerLoad,
    hvacLoad,
    additionalLoad,
    totalDemand,
    serviceAmps: Math.ceil(serviceAmps * 10) / 10,
    recommendedService,
    breakdown,
  }
}

// ============================================================
// CALCULATOR 2: Voltage Drop (Rule 8-102)
// ============================================================

export interface VoltageDropParams {
  voltage: number
  current: number
  wireLength: number
  conductorMaterial: 'copper' | 'aluminum'
  conductorSizeAWG: number | string
  phases: 1 | 3
}

export interface VoltageDropResult {
  voltageDrop: number
  voltageDropPercent: number
  receivingVoltage: number
  isWithinCode: boolean
  recommendation: string
}

export function calculateVoltageDrop(params: VoltageDropParams): VoltageDropResult {
  const sizeKey = String(params.conductorSizeAWG)
  const areaMm2 = AWG_TO_MM2[sizeKey] ?? 5.26 // default 10 AWG

  const resistivity =
    params.conductorMaterial === 'copper'
      ? COPPER_RESISTIVITY
      : ALUMINUM_RESISTIVITY

  // Resistance in Ω/m: ρ / A, where ρ is in Ω·mm²/km → convert to Ω/m
  const resistancePerMeter = (resistivity / areaMm2) / 1000 // Ω/m

  let voltageDrop: number
  if (params.phases === 1) {
    // Single-phase: VD = 2 × I × R × L
    voltageDrop = 2 * params.current * resistancePerMeter * params.wireLength
  } else {
    // Three-phase: VD = √3 × I × R × L
    voltageDrop = Math.sqrt(3) * params.current * resistancePerMeter * params.wireLength
  }

  const voltageDropPercent = (voltageDrop / params.voltage) * 100
  const receivingVoltage = params.voltage - voltageDrop
  const isWithinCode = voltageDropPercent <= 3.0 // CEC Rule 8-102 branch circuit recommendation

  let recommendation: string
  if (voltageDropPercent <= 1) {
    recommendation = 'Excellent. Voltage drop is well within code limits.'
  } else if (voltageDropPercent <= 2) {
    recommendation = 'Good. Voltage drop is within the recommended 3% for branch circuits.'
  } else if (voltageDropPercent <= 3) {
    recommendation = 'Acceptable. Voltage drop meets the 3% CEC recommendation for branch circuits.'
  } else if (voltageDropPercent <= 5) {
    recommendation = 'Warning: Exceeds 3% branch circuit limit. Acceptable only if total drop from service is ≤5%. Consider upsizing conductors.'
  } else {
    recommendation = 'Non-compliant: Exceeds 5% total allowable voltage drop. Upsize conductors or reduce circuit length.'
  }

  return {
    voltageDrop: Math.round(voltageDrop * 100) / 100,
    voltageDropPercent: Math.round(voltageDropPercent * 100) / 100,
    receivingVoltage: Math.round(receivingVoltage * 100) / 100,
    isWithinCode,
    recommendation,
  }
}

// ============================================================
// CALCULATOR 3: Ampacity Correction (Tables 5A, 5C)
// ============================================================

export interface AmpacityCorrectionParams {
  baseAmpacity: number
  ambientTemp: number
  conductorInsulation: 'T90' | 'TWN75' | 'RW90' | 'XHHW-2' | 'T60'
  numberOfConductors: number
}

export interface AmpacityCorrectionResult {
  tempCorrectionFactor: number
  bundlingCorrectionFactor: number
  correctedAmpacity: number
  insulation: string
  breakdown: { factor: string; value: number }[]
}

export function calculateCorrectedAmpacity(
  params: AmpacityCorrectionParams
): AmpacityCorrectionResult {
  const tempFactor = getTempCorrectionFactor(params.ambientTemp, params.conductorInsulation)
  const bundlingFactor = getBundlingFactor(params.numberOfConductors)

  const correctedAmpacity = params.baseAmpacity * tempFactor * bundlingFactor

  const insulation = params.conductorInsulation === 'RW90' || params.conductorInsulation === 'T90' || params.conductorInsulation === 'XHHW-2'
    ? '90°C rated'
    : params.conductorInsulation === 'TWN75'
    ? '75°C rated'
    : '60°C rated'

  const breakdown = [
    { factor: 'Base ampacity', value: params.baseAmpacity },
    { factor: `Temperature correction (Table 5A, ${params.ambientTemp}°C ambient)`, value: tempFactor },
    { factor: `Bundling correction (Table 5C, ${params.numberOfConductors} conductors)`, value: bundlingFactor },
    { factor: 'Corrected ampacity', value: Math.floor(correctedAmpacity * 10) / 10 },
  ]

  return {
    tempCorrectionFactor: tempFactor,
    bundlingCorrectionFactor: bundlingFactor,
    correctedAmpacity: Math.floor(correctedAmpacity * 10) / 10,
    insulation,
    breakdown,
  }
}

// ============================================================
// CALCULATOR 4: Motor Protection (Section 28)
// ============================================================

export interface MotorProtectionParams {
  motorHP: number
  voltage: number
  phases: 1 | 3
  serviceClass: 'A' | 'B'
  motorType: 'induction' | 'synchronous' | 'wound-rotor'
}

export interface MotorProtectionResult {
  fullLoadAmps: number
  minimumWireAmpacity: number
  maximumOCPD: number
  disconnectAmpRating: number
  overloadProtection: number
  wireSize: string
  breakerSize: number
  breakdown: { item: string; value: number | string; rule: string }[]
}

export function calculateMotorProtection(
  params: MotorProtectionParams
): MotorProtectionResult {
  const fla = getMotorFLA(params.motorHP, params.voltage, params.phases)
  const minimumWireAmpacity = fla * 1.25 // Rule 28-304
  const maximumOCPD = fla * 2.50 // Rule 28-200: 250% for circuit breaker
  const disconnectAmpRating = fla * 1.15 // Rule 28-600: 115% minimum
  const overloadProtection = fla * 1.25 // Rule 28-302: 125% max for Class B

  const wireSize = getWireSizeForAmpacity(minimumWireAmpacity, 'copper')
  const breakerSize = getNextStandardBreaker(maximumOCPD)

  const breakdown: { item: string; value: number | string; rule: string }[] = [
    {
      item: 'Full Load Amperes (FLA)',
      value: `${fla.toFixed(1)} A`,
      rule: 'CEC Table 44',
    },
    {
      item: 'Min. Conductor Ampacity (FLA × 125%)',
      value: `${minimumWireAmpacity.toFixed(1)} A`,
      rule: 'Rule 28-304',
    },
    {
      item: 'Recommended Wire Size',
      value: wireSize,
      rule: 'CEC Table 1',
    },
    {
      item: 'Max. OCPD - Circuit Breaker (FLA × 250%)',
      value: `${maximumOCPD.toFixed(1)} A → ${breakerSize} A standard`,
      rule: 'Rule 28-200',
    },
    {
      item: 'Max. OCPD - Time-Delay Fuse (FLA × 175%)',
      value: `${(fla * 1.75).toFixed(1)} A`,
      rule: 'Rule 28-200',
    },
    {
      item: 'Max. OCPD - Non-TD Fuse (FLA × 300%)',
      value: `${(fla * 3.0).toFixed(1)} A`,
      rule: 'Rule 28-200',
    },
    {
      item: 'Min. Disconnect Rating (FLA × 115%)',
      value: `${disconnectAmpRating.toFixed(1)} A`,
      rule: 'Rule 28-600',
    },
    {
      item: 'Max. Overload Setting (FLA × 125%)',
      value: `${overloadProtection.toFixed(1)} A`,
      rule: 'Rule 28-302',
    },
  ]

  return {
    fullLoadAmps: Math.round(fla * 10) / 10,
    minimumWireAmpacity: Math.round(minimumWireAmpacity * 10) / 10,
    maximumOCPD: Math.round(maximumOCPD * 10) / 10,
    disconnectAmpRating: Math.round(disconnectAmpRating * 10) / 10,
    overloadProtection: Math.round(overloadProtection * 10) / 10,
    wireSize,
    breakerSize,
    breakdown,
  }
}

// Export helper functions for use in components
export { getNextStandardBreaker, getNextStandardService, getTempCorrectionFactor, getBundlingFactor, getMotorFLA }
