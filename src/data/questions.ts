import type { Question } from '../lib/types'

export const questions: Question[] = [
  // ============================================================
  // SECTION 0 - General / Definitions (8 questions)
  // ============================================================
  {
    id: 'q001',
    section: '0',
    sectionTitle: 'General / Definitions',
    question: 'Under the CEC, what is the definition of "ampacity"?',
    options: [
      'The maximum continuous current a conductor can carry without exceeding its voltage rating',
      'The current-carrying capacity of a conductor expressed in amperes under stated conditions of use',
      'The short-circuit current rating of a conductor',
      'The overcurrent protection rating assigned to a conductor by the manufacturer',
    ],
    correctAnswer: 1,
    explanation:
      'Ampacity is defined in Section 0 of the CEC as the current-carrying capacity of a conductor expressed in amperes, under stated conditions of use. It depends on insulation type, ambient temperature, and installation conditions.',
    difficulty: 'easy',
    tags: ['definitions', 'ampacity', 'section-0'],
  },
  {
    id: 'q002',
    section: '0',
    sectionTitle: 'General / Definitions',
    question: 'In the CEC, what voltage range defines "low voltage"?',
    options: [
      '0 V to 30 V',
      '0 V to 750 V',
      '0 V to 150 V',
      '0 V to 600 V',
    ],
    correctAnswer: 1,
    explanation:
      'The CEC defines "low voltage" as voltages not exceeding 750 V. This is an important threshold that affects which rules and wiring methods apply to an installation.',
    difficulty: 'medium',
    tags: ['definitions', 'voltage', 'section-0'],
  },
  {
    id: 'q003',
    section: '0',
    sectionTitle: 'General / Definitions',
    question: 'Which CEC definition best describes a "bonding conductor"?',
    options: [
      'A conductor used to carry fault current back to the source',
      'A conductor that connects two or more conductive parts to ensure electrical continuity',
      'A conductor that connects the neutral of a system to ground',
      'A conductor used only for equipment grounding purposes',
    ],
    correctAnswer: 1,
    explanation:
      'A bonding conductor connects two or more conductive parts to ensure electrical continuity and the capacity to conduct safely any current likely to be imposed on it. This is distinct from a grounding electrode conductor.',
    difficulty: 'medium',
    tags: ['definitions', 'bonding', 'section-0'],
  },
  {
    id: 'q004',
    section: '0',
    sectionTitle: 'General / Definitions',
    question: 'What does the term "identified" mean when applied to conductors in the CEC?',
    options: [
      'The conductor has been tested and approved by a certification body',
      'The conductor is recognized as suitable for use as the neutral (grounded) conductor',
      'The conductor is marked with the manufacturer\'s name and gauge',
      'The conductor is suitable for use in identified hazardous locations',
    ],
    correctAnswer: 1,
    explanation:
      'In the CEC, "identified" when applied to a conductor or terminal means it is recognized as suitable for use as the grounded (neutral) conductor, typically by white or grey colour coding. This ensures proper polarity in all installations.',
    difficulty: 'medium',
    tags: ['definitions', 'neutral', 'section-0'],
  },
  {
    id: 'q005',
    section: '0',
    sectionTitle: 'General / Definitions',
    question: 'Under the CEC, what is a "separately derived system"?',
    options: [
      'A system whose power is derived from a battery or solar panel',
      'A premises wiring system whose power is derived from a source with no direct electrical connection to supply conductors',
      'A system that is metered separately from the main electrical service',
      'Any system operating at a different voltage than the utility supply',
    ],
    correctAnswer: 1,
    explanation:
      'A separately derived system is a premises wiring system whose power is derived from a source of electric energy having no direct electrical connection, including a solidly connected grounded circuit conductor, to supply conductors originating in another system. Examples include transformers and generators.',
    difficulty: 'hard',
    tags: ['definitions', 'separately-derived', 'section-0'],
  },
  {
    id: 'q006',
    section: '0',
    sectionTitle: 'General / Definitions',
    question: 'What is the CEC definition of a "branch circuit"?',
    options: [
      'Any circuit protected by a breaker rated 15 A or 20 A',
      'The circuit conductors between the final overcurrent device protecting the circuit and the outlet(s)',
      'The wiring between the service entrance and the first overcurrent device',
      'Any circuit supplying only one outlet or load',
    ],
    correctAnswer: 1,
    explanation:
      'A branch circuit is defined as the circuit conductors between the final overcurrent device protecting the circuit and the outlet(s). It begins at the last OCPD (breaker or fuse) and ends at the load or outlet.',
    difficulty: 'easy',
    tags: ['definitions', 'branch-circuit', 'section-0'],
  },
  {
    id: 'q007',
    section: '0',
    sectionTitle: 'General / Definitions',
    question: 'In the CEC, "listed" equipment refers to equipment that:',
    options: [
      'Has been registered with the provincial electrical authority',
      'Is included in a list published by a certification organization and found to meet specific requirements',
      'Has been tested and approved by the manufacturer',
      'Is on the approved list maintained by the contractor',
    ],
    correctAnswer: 1,
    explanation:
      'Listed equipment in the CEC refers to equipment included in a list published by a certification organization (such as CSA, UL, or other approved bodies) showing that the equipment meets specific requirements or that the organization periodically inspects production.',
    difficulty: 'easy',
    tags: ['definitions', 'listed', 'certification', 'section-0'],
  },
  {
    id: 'q008',
    section: '0',
    sectionTitle: 'General / Definitions',
    question: 'What is the maximum voltage considered "extra-low voltage" (ELV) under the CEC?',
    options: ['24 V', '30 V', '32 V', '48 V'],
    correctAnswer: 1,
    explanation:
      'Extra-low voltage (ELV) in the CEC is defined as voltage not exceeding 30 V AC rms or 42.4 V peak, or 60 V DC. These lower thresholds allow relaxed installation requirements in certain circuits such as Class 2 and SELV circuits.',
    difficulty: 'hard',
    tags: ['definitions', 'extra-low-voltage', 'section-0'],
  },

  // ============================================================
  // SECTION 4 - Conductors (10 questions)
  // ============================================================
  {
    id: 'q009',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'What is the minimum conductor size permitted for branch circuit wiring in a residential occupancy per the CEC?',
    options: ['18 AWG', '16 AWG', '14 AWG', '12 AWG'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 4-006, the minimum conductor size for branch circuits is 14 AWG copper. Smaller conductors (16 AWG and 18 AWG) are only permitted in specific applications such as fixture wire, control circuits, and Class 2 circuits.',
    difficulty: 'easy',
    tags: ['conductors', 'minimum-size', 'residential', 'section-4'],
  },
  {
    id: 'q010',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Which CEC Table is used to determine the allowable ampacity of copper conductors with 90°C insulation (RW90/T90) installed in conduit?',
    options: ['Table 1', 'Table 2', 'Table 4', 'Table 5A'],
    correctAnswer: 0,
    explanation:
      'CEC Table 1 provides the allowable ampacity for copper conductors with 60°C, 75°C, and 90°C insulation ratings in various installation conditions. Table 5A provides temperature correction factors when ambient temperature differs from the 30°C base assumption.',
    difficulty: 'medium',
    tags: ['conductors', 'ampacity', 'table-1', 'section-4'],
  },
  {
    id: 'q011',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'A 12 AWG T90 copper conductor has a base ampacity of 25 A from Table 1. If the ambient temperature is 45°C, what correction factor applies (from Table 5A)?',
    options: ['0.71', '0.82', '0.87', '0.58'],
    correctAnswer: 0,
    explanation:
      'Per CEC Table 5A, for a 90°C-rated conductor (T90/RW90) at an ambient temperature of 45°C, the temperature correction factor is 0.71. The corrected ampacity would be 25 A × 0.71 = 17.75 A, which must be used for circuit design.',
    difficulty: 'hard',
    tags: ['conductors', 'ampacity', 'temperature-correction', 'table-5A', 'section-4'],
  },
  {
    id: 'q012',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-004, what colour must be used for the grounded (neutral) conductor in a single-phase system?',
    options: ['Green', 'White or grey', 'Red', 'Blue'],
    correctAnswer: 1,
    explanation:
      'CEC Rule 4-004 requires the grounded conductor (neutral) to be identified by white or grey insulation, or three continuous white stripes on other than green insulation. This colour coding must be maintained throughout the installation.',
    difficulty: 'easy',
    tags: ['conductors', 'colour-coding', 'neutral', 'section-4'],
  },
  {
    id: 'q013',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'In a 3-phase 4-wire system at 600 V (phase-to-phase), what colour identifies the equipment grounding conductor?',
    options: ['White', 'Green or bare', 'Orange', 'Red'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 4-004, the equipment grounding conductor must be identified by green insulation or may be bare copper. This applies regardless of voltage level and is a fundamental safety requirement for all installations.',
    difficulty: 'easy',
    tags: ['conductors', 'colour-coding', 'grounding', 'section-4'],
  },
  {
    id: 'q014',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'What is the bundling derating factor for 7 current-carrying conductors installed together per CEC Table 5C?',
    options: ['0.70', '0.80', '0.50', '0.60'],
    correctAnswer: 0,
    explanation:
      'Per CEC Table 5C (Correction Factors for Bundling), when 7 to 9 current-carrying conductors are bundled together or installed in conduit, a correction factor of 0.70 must be applied to the base ampacity. This accounts for reduced heat dissipation.',
    difficulty: 'medium',
    tags: ['conductors', 'bundling', 'derating', 'table-5C', 'section-4'],
  },
  {
    id: 'q015',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Under CEC Rule 4-010, what is the maximum number of current-carrying conductors permitted in a conduit before derating is required?',
    options: ['2', '3', '4', '6'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 4-010, ampacity correction factors from Table 5C must be applied when more than 3 current-carrying conductors are installed in a conduit, cable tray, or bundled together. The grounding conductor is not counted as a current-carrying conductor.',
    difficulty: 'medium',
    tags: ['conductors', 'bundling', 'conduit', 'section-4'],
  },
  {
    id: 'q016',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'A 4/0 AWG aluminum conductor has a base ampacity of 180 A per CEC Table 2. What is the equivalent copper conductor size with similar ampacity?',
    options: ['3/0 AWG', '2/0 AWG', '2 AWG', '1 AWG'],
    correctAnswer: 0,
    explanation:
      'Aluminum conductors require approximately one to two wire gauges larger than copper to achieve the same ampacity due to aluminum\'s lower conductivity (61% of copper). A 4/0 AWG aluminum (180 A) is approximately equivalent to 3/0 AWG copper (200 A) in terms of ampacity.',
    difficulty: 'hard',
    tags: ['conductors', 'aluminum', 'copper', 'ampacity', 'section-4'],
  },
  {
    id: 'q017',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per the CEC, when may a conductor be re-identified by wrapping with coloured tape?',
    options: [
      'At any point along its length where access is available',
      'Only at the terminal connections and at each accessible point',
      'Never; conductors must always have the correct colour insulation',
      'Only for conductors 4 AWG and larger',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 4-032, conductors may be re-identified at terminal connections and at each accessible point by using coloured tape or paint. This is commonly used when a white (neutral) wire is re-identified as a hot conductor in switch loops. For conductors 6 AWG and larger, re-identification with tape is always permitted.',
    difficulty: 'medium',
    tags: ['conductors', 'identification', 're-identification', 'section-4'],
  },
  {
    id: 'q018',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'What is the minimum ampacity of the service entrance conductor for a 200 A residential service?',
    options: ['160 A', '200 A', '175 A', '250 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 8-202, service conductors must have an ampacity not less than the calculated service load. For a 200 A service, the conductors must be rated at minimum 200 A. The standard 200 A service uses 4/0 AWG copper or 350 kcmil aluminum conductors in conduit.',
    difficulty: 'medium',
    tags: ['conductors', 'service', 'ampacity', 'section-4'],
  },

  // ============================================================
  // SECTION 6 - Services (10 questions)
  // ============================================================
  {
    id: 'q019',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'Per CEC Rule 6-206, what is the minimum clearance required between service conductors and a building rooftop that is not readily accessible?',
    options: ['2.5 m', '3.0 m', '900 mm', '1.0 m'],
    correctAnswer: 0,
    explanation:
      'Per CEC Rule 6-206, overhead service conductors must have a minimum clearance of 2.5 m above rooftops that are not readily accessible to persons. This clearance requirement ensures safety from inadvertent contact.',
    difficulty: 'medium',
    tags: ['services', 'clearance', 'overhead', 'section-6'],
  },
  {
    id: 'q020',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'What is the minimum height above finished grade for overhead service entrance conductors crossing a public roadway per the CEC?',
    options: ['4.5 m', '5.5 m', '6.0 m', '4.9 m'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 6-206, overhead service conductors crossing a public roadway or alley subject to truck traffic must have a minimum clearance of 5.5 m above grade. This accommodates standard truck heights and ensures safe passage.',
    difficulty: 'medium',
    tags: ['services', 'clearance', 'overhead', 'section-6'],
  },
  {
    id: 'q021',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'Under CEC Rule 6-200, where must the service disconnecting means be located?',
    options: [
      'Anywhere inside the building, within 9 m of the service entrance point',
      'At the point of service entrance to the building, as near as practicable',
      'In the basement or mechanical room only',
      'Outside the building near the utility meter',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 6-200, the service disconnecting means must be located at the point where the service conductors enter the building or as near as practicable to that point. This ensures that the service can be quickly disconnected in an emergency.',
    difficulty: 'medium',
    tags: ['services', 'disconnect', 'location', 'section-6'],
  },
  {
    id: 'q022',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'How many service disconnects are permitted to serve a single building under the CEC?',
    options: [
      'Only one disconnect is permitted',
      'Up to 6 disconnects grouped together',
      'Unlimited, if properly grouped',
      'Up to 4 disconnects',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 6-200, a maximum of 6 service disconnects may be grouped together in one location to serve a single building. All 6 must be grouped in one location and must disconnect all ungrounded service conductors simultaneously.',
    difficulty: 'hard',
    tags: ['services', 'disconnect', 'section-6'],
  },
  {
    id: 'q023',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'Per CEC Rule 6-114, what is the minimum burial depth for underground service conductors in rigid PVC conduit?',
    options: ['300 mm', '450 mm', '600 mm', '750 mm'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 6-114 and Table 53, underground service conductors in rigid PVC conduit require a minimum burial depth of 600 mm (24 inches). Direct-buried cables require 600 mm, while cables under concrete slabs require 100 mm.',
    difficulty: 'hard',
    tags: ['services', 'underground', 'burial-depth', 'section-6'],
  },
  {
    id: 'q024',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'What is the minimum clearance required between service entrance conductors and windows that can be opened?',
    options: ['300 mm', '600 mm', '900 mm', '1.0 m'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 6-206, service entrance conductors must maintain a minimum clearance of 900 mm from windows designed to be opened, doors, porches, balconies, ladders, stairs, fire escapes, or similar locations.',
    difficulty: 'medium',
    tags: ['services', 'clearance', 'windows', 'section-6'],
  },
  {
    id: 'q025',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'Per CEC Rule 6-302, what protection is required for a service box installed in a damp location?',
    options: [
      'GFCI protection on all circuits',
      'A weatherproof enclosure with a drip shield over openings',
      'A locked enclosure to prevent unauthorized access',
      'Double insulation on all internal components',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 6-302, service boxes in damp or wet locations must be housed in a weatherproof enclosure. When installed in outdoor or exposed locations, a drip shield or raintight design prevents moisture ingress and corrosion of internal components.',
    difficulty: 'medium',
    tags: ['services', 'weatherproof', 'section-6'],
  },
  {
    id: 'q026',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'For a 400 A service, the CEC requires the service conductor to have an ampacity of at least:',
    options: ['320 A', '400 A', '350 A', '500 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 8-202, the service conductor ampacity must not be less than the calculated load demand for the premises. A 400 A service requires conductors rated for at least 400 A. Common conductors for 400 A service include 400 kcmil copper or 750 kcmil aluminum.',
    difficulty: 'easy',
    tags: ['services', 'ampacity', 'section-6'],
  },
  {
    id: 'q027',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'Per the CEC, a meter base must be installed so that the meter can be read from:',
    options: [
      'Inside the building at grade level',
      'Outside the building without entering the building',
      'From the utility pole',
      'From any adjacent property line',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC requirements and utility regulations, the kilowatt-hour meter must be installed so that it is accessible to the utility for reading, testing, and maintenance from outside the building without requiring entry into any occupancy.',
    difficulty: 'easy',
    tags: ['services', 'metering', 'section-6'],
  },
  {
    id: 'q028',
    section: '6',
    sectionTitle: 'Services and Service Equipment',
    question:
      'Under CEC Rule 6-104, which of the following is NOT permitted as service entrance equipment?',
    options: [
      'A listed panelboard with a main breaker',
      'A listed service entrance switch rated for the service current',
      'A standard distribution panelboard with individual circuit breakers but no main disconnect',
      'A combination meter-main disconnect unit',
    ],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 6-104, all ungrounded service conductors must be capable of being disconnected by a single operation or by no more than 6 simultaneous operations. A panelboard with only individual circuit breakers but no main disconnect does not meet this requirement unless each individual breaker can serve as a separate service disconnect (maximum 6).',
    difficulty: 'hard',
    tags: ['services', 'disconnect', 'panelboard', 'section-6'],
  },

  // ============================================================
  // SECTION 8 - Ampacity & Wire Sizing / Rules 8-100 to 8-400 (20 questions)
  // ============================================================
  {
    id: 'q029',
    section: '8-102',
    sectionTitle: 'Voltage Drop',
    question:
      'Per CEC Rule 8-102, what is the maximum recommended voltage drop for a branch circuit supplying sensitive equipment?',
    options: ['5%', '3%', '2%', '1%'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 8-102, the voltage drop on any branch circuit should not exceed 3%. The total voltage drop from service entrance to the farthest outlet should not exceed 5%. These are recommendations, not mandatory limits, but are widely enforced as best practice.',
    difficulty: 'easy',
    tags: ['voltage-drop', 'branch-circuit', 'rule-8-102'],
  },
  {
    id: 'q030',
    section: '8-102',
    sectionTitle: 'Voltage Drop',
    question:
      'What is the voltage drop formula used for single-phase circuits per CEC guidelines?',
    options: [
      'VD = I × R × L (one-way length)',
      'VD = 2 × I × R × L (one-way length)',
      'VD = √3 × I × R × L',
      'VD = I × R / L',
    ],
    correctAnswer: 1,
    explanation:
      'For single-phase circuits, voltage drop = 2 × I × R × L, where I is the current in amps, R is the resistance per unit length (Ω/m), and L is the one-way circuit length in metres. The factor of 2 accounts for both the hot and neutral conductors.',
    difficulty: 'medium',
    tags: ['voltage-drop', 'formula', 'rule-8-102'],
  },
  {
    id: 'q031',
    section: '8-102',
    sectionTitle: 'Voltage Drop',
    question:
      'A 120 V, 15 A single-phase circuit uses 12 AWG copper wire (resistance 5.21 Ω/km) and runs 35 m one-way. What is the approximate voltage drop?',
    options: ['3.2 V', '5.5 V', '2.7 V', '7.3 V'],
    correctAnswer: 1,
    explanation:
      'VD = 2 × I × R × L = 2 × 15 A × (5.21 Ω/km ÷ 1000 m/km) × 35 m = 2 × 15 × 0.00521 × 35 = 5.47 V ≈ 5.5 V. This represents a 4.6% voltage drop, which exceeds the 3% CEC recommendation for branch circuits.',
    difficulty: 'hard',
    tags: ['voltage-drop', 'calculation', 'rule-8-102'],
  },
  {
    id: 'q032',
    section: '8-200',
    sectionTitle: 'Residential Demand Calculation',
    question:
      'Per CEC Rule 8-200, what demand factor applies to the first 1000 W of residential load in a basic load calculation?',
    options: ['80%', '75%', '100%', '60%'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 8-200(1), the first 1000 W of the basic residential load is taken at 100% demand factor. The next 9000 W (1001 W to 10,000 W) is taken at 75%, and the remainder above 10,000 W is at 40%. This graduated demand factor reflects the statistical reality that not all loads operate simultaneously.',
    difficulty: 'medium',
    tags: ['demand-calculation', 'residential', 'rule-8-200'],
  },
  {
    id: 'q033',
    section: '8-200',
    sectionTitle: 'Residential Demand Calculation',
    question:
      'What is the basic load per square metre of floor area used in the CEC Rule 8-200 residential demand calculation?',
    options: ['45 VA/m²', '33 VA/m²', '55 VA/m²', '40 VA/m²'],
    correctAnswer: 0,
    explanation:
      'Per CEC Rule 8-200, the basic load for a residential occupancy is calculated at 45 VA per square metre of habitable floor area. This load accounts for general lighting and convenience outlets in the living space.',
    difficulty: 'medium',
    tags: ['demand-calculation', 'residential', 'basic-load', 'rule-8-200'],
  },
  {
    id: 'q034',
    section: '8-200',
    sectionTitle: 'Residential Demand Calculation',
    question:
      'A house has 180 m² of floor area. What is the minimum basic load before demand factors are applied per Rule 8-200?',
    options: ['5,400 VA', '8,100 VA', '7,200 VA', '6,000 VA'],
    correctAnswer: 1,
    explanation:
      'Basic load = 180 m² × 45 VA/m² = 8,100 VA. This is the raw basic load. Then demand factors are applied: first 1000 W at 100% = 1000 W, next 7100 W at 75% = 5325 W. Total demand = 1000 + 5325 = 6325 W. Note: the question asks for basic load BEFORE demand factors, which is 8,100 VA.',
    difficulty: 'medium',
    tags: ['demand-calculation', 'residential', 'rule-8-200'],
  },
  {
    id: 'q035',
    section: '8-200',
    sectionTitle: 'Residential Demand Calculation',
    question:
      'Per CEC Rule 8-200, what demand factor applies to an electric range rated at 12 kW?',
    options: ['80%', '100%', '60%', '75%'],
    correctAnswer: 0,
    explanation:
      'Per CEC Rule 8-200, an electric range rated from 10 kW to 12.5 kW is taken at 80% demand factor. Ranges rated over 12.5 kW use 80% of the first 10 kW plus the additional load above 10 kW at 80%.',
    difficulty: 'hard',
    tags: ['demand-calculation', 'residential', 'electric-range', 'rule-8-200'],
  },
  {
    id: 'q036',
    section: '8-200',
    sectionTitle: 'Residential Demand Calculation',
    question:
      'In a Rule 8-200 residential demand calculation, electric space heating and electric air conditioning:',
    options: [
      'Are both added at 100% because they represent the highest demand period',
      'Only the larger of the two loads needs to be included, not both',
      'Are both included at 100% of nameplate rating',
      'Are averaged together and added at 50%',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 8-200, when calculating residential service load, only the larger of the electric heating load or the electric air conditioning load needs to be included, since they are not normally operated simultaneously in Canada\'s climate. This is a significant reduction in calculated service demand.',
    difficulty: 'hard',
    tags: ['demand-calculation', 'residential', 'heating', 'cooling', 'rule-8-200'],
  },
  {
    id: 'q037',
    section: '8-202',
    sectionTitle: 'Service Calculation',
    question:
      'Per CEC Rule 8-202, the minimum service size for a single-family dwelling is:',
    options: ['60 A', '100 A', '125 A', '200 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 8-202, the minimum service size for a single-family dwelling with 60 m² or more of habitable floor area is 100 A. Dwellings less than 60 m² may use a 60 A service if the calculated load permits.',
    difficulty: 'easy',
    tags: ['service-calculation', 'residential', 'rule-8-202'],
  },
  {
    id: 'q038',
    section: '8-210',
    sectionTitle: 'Service Calculation',
    question:
      'Under CEC Rule 8-210, what is the minimum number of small appliance circuits required for a residential kitchen?',
    options: ['One 15 A circuit', 'Two 20 A circuits', 'One 20 A circuit', 'Three 15 A circuits'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 8-210, a minimum of two 20 A small appliance branch circuits must be provided for kitchen receptacle outlets. These circuits serve countertop areas and may extend to pantry, breakfast room, and dining room areas, but must not supply other outlets.',
    difficulty: 'medium',
    tags: ['service-calculation', 'kitchen', 'small-appliance', 'rule-8-210'],
  },
  {
    id: 'q039',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'A continuous load of 30 A must be supplied. What is the minimum conductor ampacity required per the CEC?',
    options: ['30 A', '37.5 A', '35 A', '40 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 8-104, conductors supplying a continuous load must have an ampacity of at least 125% of the continuous load. 30 A × 1.25 = 37.5 A minimum. The conductor must be sized to at least 37.5 A, so the next standard size (40 A rated conductor) would be selected.',
    difficulty: 'medium',
    tags: ['ampacity', 'continuous-load', 'section-8'],
  },
  {
    id: 'q040',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'What is the ampacity of a 10 AWG T90 copper conductor installed in conduit (from CEC Table 1)?',
    options: ['25 A', '30 A', '35 A', '40 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Table 1, a 10 AWG copper conductor with T90 (90°C rated) insulation installed in conduit has an ampacity of 30 A at 30°C ambient temperature. Temperature or bundling correction factors may reduce this value.',
    difficulty: 'easy',
    tags: ['ampacity', 'table-1', 'section-8'],
  },
  {
    id: 'q041',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'A 3-phase, 4-wire feeder has 9 current-carrying conductors in one conduit. The base ampacity of each conductor is 100 A. What is the corrected ampacity?',
    options: ['80 A', '70 A', '60 A', '50 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Table 5C, when 7 to 9 current-carrying conductors are installed in a conduit, a bundling correction factor of 0.70 applies. Corrected ampacity = 100 A × 0.70 = 70 A. The grounding conductor is not counted as a current-carrying conductor.',
    difficulty: 'hard',
    tags: ['ampacity', 'bundling', 'table-5C', 'section-8'],
  },
  {
    id: 'q042',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'Under CEC Rule 8-104, what is the maximum overcurrent protection permitted for a 14 AWG copper branch circuit conductor?',
    options: ['15 A', '20 A', '25 A', '30 A'],
    correctAnswer: 0,
    explanation:
      'Per CEC Rule 8-104, a 14 AWG copper conductor must be protected by an overcurrent device rated no more than 15 A. Using a 20 A breaker on 14 AWG wire is a serious code violation and fire hazard.',
    difficulty: 'easy',
    tags: ['overcurrent', 'conductor-protection', 'rule-8-104'],
  },
  {
    id: 'q043',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'What conductor size is required for a 240 V, 40 A circuit supplying a fixed appliance (continuous load)?',
    options: ['10 AWG', '8 AWG', '6 AWG', '12 AWG'],
    correctAnswer: 1,
    explanation:
      'A 40 A continuous load requires conductors rated at 40 A × 1.25 = 50 A. Per CEC Table 1, an 8 AWG T90 copper conductor has an ampacity of 45 A in conduit (or 50 A for certain configurations). The 8 AWG conductor is the minimum acceptable size for a 40 A continuous load.',
    difficulty: 'medium',
    tags: ['ampacity', 'conductor-sizing', 'continuous-load', 'section-8'],
  },
  {
    id: 'q044',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'A 20 AWG thermostat wire operates at 24 V. Per the CEC, the ampacity of control circuit conductors:',
    options: [
      'Must be derated if more than 3 conductors are bundled',
      'Is not limited by Table 1 because it is a Class 2 circuit',
      'Must be at least 0.5 A per conductor',
      'Is governed by the equipment connected, not CEC Table 1',
    ],
    correctAnswer: 3,
    explanation:
      'Control circuit conductors (such as thermostat wiring) are governed by the requirements of the specific equipment or appliance they serve. Class 2 and Class 3 circuits have their own rules under Section 16 of the CEC, and their ampacity is limited by the power source, not by CEC Table 1.',
    difficulty: 'hard',
    tags: ['control-circuits', 'low-voltage', 'section-8'],
  },
  {
    id: 'q045',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'Per CEC Rule 8-108, when the calculated overcurrent protection size for a conductor does not match a standard fuse or breaker size, what is permitted?',
    options: [
      'The next lower standard size must always be used',
      'The next higher standard size may be used if the calculated size is not available',
      'The conductor must be upsized to match the next standard overcurrent device',
      'Any size within 10% of the calculated value is acceptable',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 8-108, where the calculated overcurrent protection size does not correspond to a standard device rating, the next higher standard rating may be used, provided the conductor ampacity equals or exceeds the calculated load. This allows the use of available standard device sizes.',
    difficulty: 'hard',
    tags: ['overcurrent', 'standard-sizes', 'rule-8-108'],
  },
  {
    id: 'q046',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'For a 3-phase 208V system, what formula is used to calculate the voltage drop?',
    options: [
      'VD = 2 × I × R × L',
      'VD = √3 × I × R × L',
      'VD = I × R × L',
      'VD = 3 × I × R × L',
    ],
    correctAnswer: 1,
    explanation:
      'For 3-phase circuits, the voltage drop formula is VD = √3 × I × R × L, where √3 ≈ 1.732. This accounts for the phase relationship between conductors in a balanced 3-phase system. This contrasts with single-phase where VD = 2 × I × R × L.',
    difficulty: 'medium',
    tags: ['voltage-drop', '3-phase', 'formula', 'section-8'],
  },
  {
    id: 'q047',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'A 240 V, 60 Hz, 3-wire, single-phase residential service uses 2/0 AWG aluminum conductors. Per CEC Table 2, the ampacity is approximately:',
    options: ['125 A', '150 A', '100 A', '175 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Table 2, 2/0 AWG aluminum conductors with 90°C (RW90) insulation in a 3-wire service entrance configuration have an ampacity of approximately 150 A. This size is commonly used for 150 A residential services.',
    difficulty: 'medium',
    tags: ['ampacity', 'aluminum', 'service-entrance', 'table-2'],
  },
  {
    id: 'q048',
    section: '8',
    sectionTitle: 'Ampacity and Wire Sizing',
    question:
      'According to the CEC, what is the minimum wire size required for a 30 A clothes dryer circuit in a residence?',
    options: ['14 AWG', '12 AWG', '10 AWG', '8 AWG'],
    correctAnswer: 2,
    explanation:
      'A 30 A dryer circuit requires conductors rated for at least 30 A. Per CEC Table 1, 10 AWG T90 copper conductors have an ampacity of 30 A. This is the minimum acceptable size for a 30 A dryer branch circuit, typically protected by a 30 A double-pole breaker.',
    difficulty: 'easy',
    tags: ['ampacity', 'residential', 'dryer', 'section-8'],
  },

  // ============================================================
  // SECTION 10 - Grounding and Bonding (10 questions)
  // ============================================================
  {
    id: 'q049',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'Per CEC Rule 10-200, what is the minimum size for a grounding electrode conductor for a 200 A service using copper conductors?',
    options: ['6 AWG', '4 AWG', '2 AWG', '1/0 AWG'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 10-200 and associated tables, the minimum grounding electrode conductor for a 200 A service is 4 AWG copper. This conductor connects the service neutral to the grounding electrode system. For larger services, larger conductors are required.',
    difficulty: 'medium',
    tags: ['grounding', 'electrode-conductor', 'rule-10-200'],
  },
  {
    id: 'q050',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'What is the minimum size of the bonding jumper required between the neutral bus and the equipment grounding bus in a service entrance panel?',
    options: [
      'Same size as the largest ungrounded service conductor',
      'Calculated per CEC Table 16 based on the largest service phase conductor',
      'A minimum of 6 AWG copper regardless of service size',
      'Sized at 12.5% of the largest service phase conductor',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 10-616, the main bonding jumper at the service entrance must be sized using CEC Table 16, based on the cross-sectional area of the largest service phase conductor. This calculation ensures the bonding jumper can carry fault current effectively.',
    difficulty: 'hard',
    tags: ['grounding', 'bonding-jumper', 'service', 'rule-10-616'],
  },
  {
    id: 'q051',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'Per the CEC, which of the following is an acceptable grounding electrode?',
    options: [
      'A 1.5 m (5 ft) copper-clad ground rod driven vertically',
      'A 2.4 m (8 ft) copper-clad ground rod driven vertically or at an angle',
      'Any metallic underground water pipe',
      'The metal frame of a building if it contacts bare earth',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 10-700, ground rods used as grounding electrodes must be at least 2.4 m (8 ft) in length and made of copper, copper-clad steel, or stainless steel with a minimum diameter of 15.9 mm (5/8 in). The rod must be driven into the earth vertically or at an angle not exceeding 45° from vertical.',
    difficulty: 'medium',
    tags: ['grounding', 'electrode', 'ground-rod', 'rule-10-700'],
  },
  {
    id: 'q052',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'Why is the neutral conductor bonded to the equipment ground at the service panel but NOT at subpanels?',
    options: [
      'Because subpanel neutral buses are not rated for bonding',
      'To prevent multiple ground paths that could carry normal current on grounding conductors, causing shock hazards',
      'Because the bonding jumper is only large enough for one connection',
      'Because provincial electrical codes prohibit it in subpanels',
    ],
    correctAnswer: 1,
    explanation:
      'The neutral-to-ground bond is made only at the service entrance (one point in the system). If neutral and ground were also bonded at a subpanel, normal load current would split between the neutral and the grounding conductor, causing current to flow on metallic conduit, equipment enclosures, and other grounding paths, creating a shock hazard and objectionable current on grounding conductors.',
    difficulty: 'hard',
    tags: ['grounding', 'bonding', 'subpanel', 'neutral', 'section-10'],
  },
  {
    id: 'q053',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'Per CEC Rule 10-406, what is the minimum size of the equipment grounding conductor for a 40 A circuit using copper conductors?',
    options: ['14 AWG', '12 AWG', '10 AWG', '8 AWG'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 10-406 and Table 16, for a circuit protected by a 40 A overcurrent device, the minimum equipment grounding conductor is 10 AWG copper. The EGC provides a low-impedance path for fault current back to the source.',
    difficulty: 'medium',
    tags: ['grounding', 'equipment-grounding-conductor', 'rule-10-406'],
  },
  {
    id: 'q054',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'Which of the following is the purpose of bonding metallic water piping in a building per CEC Rule 10-612?',
    options: [
      'To provide an additional grounding electrode for the electrical system',
      'To equalize potential differences and prevent electric shock from stray current',
      'To protect water pipes from galvanic corrosion',
      'To provide grounding for bathroom receptacles',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 10-612, interior metallic water piping must be bonded to the grounding electrode system to equalize potential differences between all metallic parts and prevent electric shock hazards. This bonding jumper must be connected as close as possible to the point where the water service enters the building.',
    difficulty: 'medium',
    tags: ['grounding', 'bonding', 'water-pipe', 'rule-10-612'],
  },
  {
    id: 'q055',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'What is the minimum resistance to earth (ground resistance) required for a ground rod installation per the CEC?',
    options: ['5 Ω', '10 Ω', '25 Ω', '50 Ω'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 10-700, if a single ground rod does not achieve 25 Ω resistance to earth, an additional rod or supplementary electrode must be added. The 25 Ω threshold is the maximum acceptable resistance; lower values are better. In practice, multiple rods are often installed to achieve lower resistance.',
    difficulty: 'hard',
    tags: ['grounding', 'ground-resistance', 'rule-10-700'],
  },
  {
    id: 'q056',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'Under the CEC, a grounding electrode conductor connected to a concrete-encased electrode (Ufer ground) must be:',
    options: [
      'At least 4 AWG copper insulated with T90 insulation',
      'The same size as the largest service conductor',
      'At least 4 AWG copper bare or insulated',
      'At least 6 AWG copper encased in PVC conduit',
    ],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 10-700, the grounding electrode conductor connected to a concrete-encased electrode (rebar or wire in the foundation) must be at least 4 AWG copper. The conductor may be bare or insulated. The concrete-encased electrode is one of the most effective grounding electrodes due to the large contact area with earth.',
    difficulty: 'hard',
    tags: ['grounding', 'concrete-encased-electrode', 'ufer', 'section-10'],
  },
  {
    id: 'q057',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'Per CEC Rule 10-104, the resistance of the grounding conductor from the service to the electrode must not exceed:',
    options: ['1 Ω', '5 Ω', '25 Ω', 'There is no maximum resistance specified for the conductor itself'],
    correctAnswer: 3,
    explanation:
      'The CEC does not specify a maximum resistance for the grounding electrode conductor itself. The 25 Ω resistance limit applies to the grounding electrode system (the electrode-to-earth resistance). The GEC must be properly sized and installed without splices to ensure low-impedance connection.',
    difficulty: 'hard',
    tags: ['grounding', 'conductor-resistance', 'section-10'],
  },
  {
    id: 'q058',
    section: '10',
    sectionTitle: 'Grounding and Bonding',
    question:
      'In a 3-phase 4-wire wye system, the system is grounded by connecting:',
    options: [
      'One phase conductor to earth at the distribution transformer',
      'The neutral point (wye center) to the grounding electrode at the service',
      'All three phase conductors to earth at each panel',
      'The delta winding center tap to the grounding electrode',
    ],
    correctAnswer: 1,
    explanation:
      'In a solidly grounded 3-phase 4-wire wye system, the neutral point (the common connection point of all three wye windings) is connected to the grounding electrode at the service entrance. This establishes the system neutral as the reference for all phase voltages and provides a path for fault current.',
    difficulty: 'medium',
    tags: ['grounding', '3-phase', 'wye', 'system-grounding', 'section-10'],
  },

  // ============================================================
  // SECTION 12 - Wiring Methods (8 questions)
  // ============================================================
  {
    id: 'q059',
    section: '12',
    sectionTitle: 'Wiring Methods',
    question:
      'Per CEC Rule 12-1000, what is the maximum fill percentage for conductors in a conduit?',
    options: ['25%', '40%', '53%', '60%'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 12-1000 and Table 8, the maximum conduit fill is 40% of the internal cross-sectional area when three or more conductors are installed. For one conductor, 53% is permitted; for two conductors, 31% is permitted. These limits ensure proper heat dissipation and allow future conductor additions.',
    difficulty: 'medium',
    tags: ['wiring-methods', 'conduit-fill', 'rule-12-1000'],
  },
  {
    id: 'q060',
    section: '12',
    sectionTitle: 'Wiring Methods',
    question:
      'What is the minimum bending radius for a 1 inch (27 mm) rigid metal conduit without a bender?',
    options: ['6 times the conduit diameter', '8 times the internal diameter', '10 times the outside diameter', '5 times the outside diameter'],
    correctAnswer: 0,
    explanation:
      'Per CEC Rule 12-916, conduit bends must not damage the conduit or reduce its internal diameter. For rigid metal conduit, the minimum bending radius for field bends is typically 6 times the internal diameter, which prevents conductor insulation damage during pulling.',
    difficulty: 'hard',
    tags: ['wiring-methods', 'conduit', 'bending-radius', 'section-12'],
  },
  {
    id: 'q061',
    section: '12',
    sectionTitle: 'Wiring Methods',
    question:
      'Under CEC Rule 12-516, armoured cable (BX/AC90) must be supported within what distance of a box or fitting?',
    options: ['150 mm', '300 mm', '500 mm', '600 mm'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 12-516, armoured cable (Type AC or ACG, commonly called BX) must be supported within 300 mm of every box, fitting, or cabinet, and at intervals not exceeding 1.5 m along the run. This prevents sagging and mechanical damage to the cable.',
    difficulty: 'medium',
    tags: ['wiring-methods', 'armoured-cable', 'support', 'rule-12-516'],
  },
  {
    id: 'q062',
    section: '12',
    sectionTitle: 'Wiring Methods',
    question:
      'Which of the following wiring methods is NOT permitted in a residential attic with blown-in insulation?',
    options: [
      'NMD-90 cable (Romex)',
      'Armoured cable (AC90)',
      'Flexible metal conduit',
      'Aluminum SET cable',
    ],
    correctAnswer: 2,
    explanation:
      'Flexible metal conduit (Greenfield) is generally not permitted for use in concealed locations such as attics with insulation, as it is not approved for this application. NMD-90, AC90, and SET cable are all listed and approved for use in residential attics and concealed locations per CEC Section 12.',
    difficulty: 'hard',
    tags: ['wiring-methods', 'attic', 'flexible-conduit', 'section-12'],
  },
  {
    id: 'q063',
    section: '12',
    sectionTitle: 'Wiring Methods',
    question:
      'Per CEC Rule 12-100, what is the maximum number of 90-degree bends permitted between conduit boxes or fittings?',
    options: ['Two 90° bends (180° total)', 'Three 90° bends (270° total)', 'Four 90° bends (360° total)', 'No limit if conductors can be pulled'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 12-1010, the total bends between boxes or pull points must not exceed 360° (equivalent to four 90° bends). This limit ensures conductors can be properly pulled through without excessive force that could damage insulation.',
    difficulty: 'medium',
    tags: ['wiring-methods', 'conduit', 'bends', 'rule-12-100'],
  },
  {
    id: 'q064',
    section: '12',
    sectionTitle: 'Wiring Methods',
    question:
      'NMD-90 cable is permitted to be run exposed in a residential garage:',
    options: [
      'Anywhere in the garage provided it is 2.1 m above the floor',
      'Only if installed in conduit',
      'Yes, but only on the wall from the floor up to the ceiling if protected from physical damage',
      'It is not permitted in garages; only armoured cable may be used',
    ],
    correctAnswer: 0,
    explanation:
      'Per CEC Rule 12-506, NMD-90 cable may be run exposed in residential garages provided it is installed at least 2.1 m (7 ft) above the floor to protect it from physical damage. Below 2.1 m, physical protection such as conduit is required.',
    difficulty: 'medium',
    tags: ['wiring-methods', 'nmd-90', 'garage', 'section-12'],
  },
  {
    id: 'q065',
    section: '12',
    sectionTitle: 'Wiring Methods',
    question:
      'What protection is required for cables passing through a framing member (stud or joist) drilled hole?',
    options: [
      'No protection required for holes of any size',
      'A steel nail plate if the edge of the hole is within 32 mm of the face of the framing member',
      'A bushing or grommet in all holes regardless of location',
      'The hole must be at the center of the framing member at all times',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 12-516, when cables pass through holes in framing members and the edge of the hole is within 32 mm (1-1/4 in) of the face of the member, a steel nail plate at least 1.6 mm thick must be installed to protect the cable from nails or screws.',
    difficulty: 'medium',
    tags: ['wiring-methods', 'nail-plate', 'protection', 'section-12'],
  },
  {
    id: 'q066',
    section: '12',
    sectionTitle: 'Wiring Methods',
    question:
      'Per CEC Rule 12-902, rigid PVC conduit must be supported at intervals not exceeding:',
    options: ['900 mm', '1.2 m', '1.5 m', '3.0 m'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 12-902, rigid PVC conduit must be supported at intervals not exceeding 1.5 m (5 ft) and within 900 mm of every box, fitting, or other termination. PVC requires more frequent support than rigid metal conduit due to its lower rigidity.',
    difficulty: 'medium',
    tags: ['wiring-methods', 'PVC-conduit', 'support', 'rule-12-902'],
  },

  // ============================================================
  // SECTION 14 - Protective Devices (10 questions)
  // ============================================================
  {
    id: 'q067',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'Per CEC Rule 14-010, where is a fuse or circuit breaker NOT required to be accessible?',
    options: [
      'When installed in a locked electrical room accessible only to qualified persons',
      'When installed inside factory-built equipment like appliances',
      'When installed inside a meter base',
      'Both B and C',
    ],
    correctAnswer: 3,
    explanation:
      'Per CEC Rule 14-010, overcurrent devices must be readily accessible. Exceptions include OCPDs in factory-built equipment where they are an integral part of the equipment (like a built-in thermal cutout) and those in meter bases, which are accessible only to utility personnel.',
    difficulty: 'hard',
    tags: ['protective-devices', 'accessibility', 'rule-14-010'],
  },
  {
    id: 'q068',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'A 20 A breaker is in a panelboard. Per the CEC, the maximum current it is designed to carry continuously (3 hours or more) is:',
    options: ['20 A (100%)', '16 A (80%)', '15 A (75%)', '25 A (125%)'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 14-104, a standard circuit breaker must not be loaded continuously to more than 80% of its rating unless it is specifically listed for 100% continuous duty. Therefore, a 20 A breaker has a maximum continuous load of 20 A × 0.80 = 16 A.',
    difficulty: 'medium',
    tags: ['protective-devices', 'continuous-load', 'breaker-rating', 'rule-14-104'],
  },
  {
    id: 'q069',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'Under CEC Rule 14-012, what is the maximum height above finished floor for the center of an overcurrent device operating handle in a panelboard?',
    options: ['1.7 m', '1.8 m', '2.0 m', '2.2 m'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 14-012, overcurrent device handles must not be located more than 1.8 m (6 ft) above the finished floor or working platform. This ensures they can be reached and operated safely without a ladder.',
    difficulty: 'medium',
    tags: ['protective-devices', 'panel-height', 'rule-14-012'],
  },
  {
    id: 'q070',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'What type of overcurrent protection is required for a 15 A receptacle circuit in a bathroom per CEC Rule 26-700?',
    options: [
      'Standard circuit breaker only',
      'GFCI protection (breaker or receptacle)',
      'AFCI protection only',
      'Time-delay fuse',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 26-700, all receptacles in bathroom areas must be GFCI (Ground Fault Circuit Interrupter) protected. GFCI protection trips at approximately 5 mA ground fault current, preventing electrocution in wet locations. This can be achieved with a GFCI circuit breaker or GFCI receptacle.',
    difficulty: 'easy',
    tags: ['protective-devices', 'GFCI', 'bathroom', 'rule-26-700'],
  },
  {
    id: 'q071',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'Per CEC Rule 14-200, at how many milliamps does a Class A GFCI device trip?',
    options: ['5 mA', '10 mA', '20 mA', '30 mA'],
    correctAnswer: 0,
    explanation:
      'A Class A GFCI (the standard type used for personnel protection in residential and commercial installations) trips when ground fault current reaches approximately 5 mA (±1 mA). This level is below the threshold for cardiac fibrillation but can be felt as a tingle.',
    difficulty: 'medium',
    tags: ['protective-devices', 'GFCI', 'trip-level', 'rule-14-200'],
  },
  {
    id: 'q072',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'Which type of fuse is preferred for motor circuits due to its ability to withstand high inrush currents?',
    options: [
      'Fast-acting fuse (type P)',
      'Time-delay fuse (type D or dual-element)',
      'Current-limiting fuse (type C)',
      'Plug fuse (Edison base)',
    ],
    correctAnswer: 1,
    explanation:
      'Time-delay (dual-element) fuses are used for motor circuits because motors draw a starting current 6-10 times their full load current. Time-delay fuses withstand this inrush for several seconds without blowing, while still providing protection against sustained overloads and short circuits.',
    difficulty: 'medium',
    tags: ['protective-devices', 'fuses', 'motors', 'time-delay', 'section-14'],
  },
  {
    id: 'q073',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'Under CEC Rule 14-104, what is the maximum size overcurrent protection permitted for a conductor with an ampacity that falls between two standard breaker sizes?',
    options: [
      'Always the next lower standard size',
      'The next higher standard size if the conductor ampacity equals or exceeds the load',
      'Exactly the calculated ampacity (custom breaker must be used)',
      'The same as the previous overcurrent device upstream',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 14-104, when the conductor ampacity does not correspond to a standard overcurrent device rating, the next higher standard rating is permitted provided the conductor ampacity equals or exceeds the calculated load current. This allows use of available standard device sizes.',
    difficulty: 'hard',
    tags: ['protective-devices', 'overcurrent', 'standard-sizes', 'rule-14-104'],
  },
  {
    id: 'q074',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'Arc Fault Circuit Interrupters (AFCIs) are required by the CEC in bedrooms of new residential construction. An AFCI detects:',
    options: [
      'Ground faults as low as 5 mA',
      'High-frequency arc signatures indicating arcing in series or parallel faults',
      'Overloads greater than 125% of rated current',
      'Short circuits causing current exceeding 1000 A',
    ],
    correctAnswer: 1,
    explanation:
      'AFCIs detect the unique high-frequency arc signatures produced by both series arcing (damaged wire) and parallel arcing (arcing between conductors). Unlike standard breakers that trip on current magnitude alone, AFCIs analyze current waveform to detect arcing before it starts a fire.',
    difficulty: 'medium',
    tags: ['protective-devices', 'AFCI', 'arc-fault', 'section-14'],
  },
  {
    id: 'q075',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'What is the interrupting rating required for a circuit breaker installed in a location where the available short-circuit current is 22,000 A symmetrical?',
    options: [
      'Any listed breaker; the utility limits fault current automatically',
      'A breaker rated for at least 22,000 A interrupting capacity',
      'A breaker rated for 10,000 A (standard residential rating) is always sufficient',
      'Interrupting rating only applies to fuses, not breakers',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 14-018, overcurrent devices must have an interrupting rating at least equal to the maximum available short-circuit current at their location. Installing a breaker with insufficient interrupting capacity can result in catastrophic failure (explosion) during a fault. The breaker must be rated for at least 22,000 A in this location.',
    difficulty: 'hard',
    tags: ['protective-devices', 'interrupting-rating', 'short-circuit', 'rule-14-018'],
  },
  {
    id: 'q076',
    section: '14',
    sectionTitle: 'Protective Devices',
    question:
      'A panelboard in a residential basement has its main breaker rated at 200 A. The service entrance conductors are rated at 200 A. The main breaker serves as:',
    options: [
      'The service overcurrent protection only',
      'Both the service disconnect and overcurrent protection for the feeder conductors',
      'Only the service disconnect; separate overcurrent protection is required',
      'Protection against utility faults only, not internal branch circuit faults',
    ],
    correctAnswer: 1,
    explanation:
      'The main breaker in a service entrance panel simultaneously serves as: (1) the service disconnecting means per Rule 6-200, and (2) the overcurrent protection for all branch circuit and feeder conductors within the panel per Rule 14-010. This dual function is intentional and code-compliant.',
    difficulty: 'medium',
    tags: ['protective-devices', 'main-breaker', 'service', 'section-14'],
  },

  // ============================================================
  // SECTION 26 - Installation of Electrical Equipment (8 questions)
  // ============================================================
  {
    id: 'q077',
    section: '26',
    sectionTitle: 'Installation of Electrical Equipment',
    question:
      'Per CEC Rule 26-710, GFCI protection is required for outdoor receptacles in a residential installation. This protection must be:',
    options: [
      'Only at the receptacle itself (GFCI receptacle)',
      'At the breaker or at the receptacle (either method is acceptable)',
      'Only at the main panel with a GFCI breaker',
      'Required only if the outdoor receptacle is below grade',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 26-710, GFCI protection for outdoor receptacles may be provided by either a GFCI circuit breaker at the panel protecting the entire circuit, or by a GFCI receptacle at the outlet. A standard receptacle downstream of a GFCI receptacle\'s "load" terminals also receives protection.',
    difficulty: 'easy',
    tags: ['installation', 'GFCI', 'outdoor', 'rule-26-710'],
  },
  {
    id: 'q078',
    section: '26',
    sectionTitle: 'Installation of Electrical Equipment',
    question:
      'What is the maximum distance between receptacle outlets along a wall in a residential living area per CEC Rule 26-712?',
    options: ['1.5 m', '1.8 m', '2.4 m', '3.6 m'],
    correctAnswer: 0,
    explanation:
      'Per CEC Rule 26-712, in residential occupancies, receptacle outlets must be installed so that no point along the floor line of any usable wall space is more than 1.8 m from an outlet. This effectively means outlets are required at maximum 3.6 m intervals (1.8 m from any point to the nearest outlet on either side).',
    difficulty: 'medium',
    tags: ['installation', 'receptacles', 'spacing', 'rule-26-712'],
  },
  {
    id: 'q079',
    section: '26',
    sectionTitle: 'Installation of Electrical Equipment',
    question:
      'Per CEC Rule 26-714, how many kitchen counter receptacles are required within 900 mm of a kitchen sink?',
    options: [
      'None; receptacles must be at least 900 mm away from a sink',
      'At least one receptacle on each side of the sink if wall space exists',
      'One GFCI receptacle anywhere within 900 mm',
      'Two GFCI receptacles, one on each side of the sink',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 26-714, kitchen counter receptacles must be provided so that no point along the counter wall line is more than 900 mm from an outlet. Where wall space exists on both sides of the sink, at least one outlet must be provided on each side. All kitchen counter receptacles require GFCI protection.',
    difficulty: 'medium',
    tags: ['installation', 'kitchen', 'receptacles', 'rule-26-714'],
  },
  {
    id: 'q080',
    section: '26',
    sectionTitle: 'Installation of Electrical Equipment',
    question:
      'Per CEC Rule 26-700, in which of the following locations is GFCI protection NOT required for a 15 A or 20 A, 125 V receptacle?',
    options: [
      'Bathroom',
      'Garage attached to dwelling',
      'Basement utility room',
      'Interior bedroom',
    ],
    correctAnswer: 3,
    explanation:
      'Per CEC Rule 26-700, GFCI protection is required in: bathrooms, garages, crawl spaces, unfinished basements, outdoors, within 1.5 m of sinks, boat houses, and other specified locations. Interior bedroom receptacles (away from sinks or wet areas) generally do not require GFCI protection, though AFCI protection is required in new construction.',
    difficulty: 'medium',
    tags: ['installation', 'GFCI', 'required-locations', 'rule-26-700'],
  },
  {
    id: 'q081',
    section: '26',
    sectionTitle: 'Installation of Electrical Equipment',
    question:
      'How many dedicated circuits are required for a refrigerator per the CEC in a new residential installation?',
    options: [
      'None; a refrigerator may share a kitchen circuit',
      'One dedicated 15 A or 20 A circuit',
      'One dedicated 20 A circuit minimum',
      'Two circuits for redundancy',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 26-712, a refrigerator must be supplied by a dedicated branch circuit (not shared with other outlets). This prevents the refrigerator motor from tripping a breaker that also powers other kitchen loads. A 15 A or 20 A circuit is acceptable depending on the refrigerator\'s specifications.',
    difficulty: 'medium',
    tags: ['installation', 'dedicated-circuit', 'refrigerator', 'section-26'],
  },
  {
    id: 'q082',
    section: '26',
    sectionTitle: 'Installation of Electrical Equipment',
    question:
      'Per CEC Rule 26-000, what working clearance is required in front of electrical equipment operating at 120 V to ground in a residential setting?',
    options: ['600 mm', '900 mm', '1.0 m', '1.2 m'],
    correctAnswer: 0,
    explanation:
      'Per CEC Rule 26-300, a minimum working clearance of 600 mm (2 ft) is required in front of electrical equipment for voltages up to 150 V to ground. This clearance allows safe access for operation, inspection, and maintenance of the equipment.',
    difficulty: 'medium',
    tags: ['installation', 'working-clearance', 'rule-26-300'],
  },
  {
    id: 'q083',
    section: '26',
    sectionTitle: 'Installation of Electrical Equipment',
    question:
      'A smoke detector power supply circuit in a residential dwelling must be:',
    options: [
      'A dedicated circuit with no other loads',
      'Connected to an uninterruptible power supply (UPS)',
      'A branch circuit that also powers lighting loads in the area',
      'Fed from a 20 A GFCI-protected circuit',
    ],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 32-100, smoke detectors in dwellings must be connected to a branch circuit that also powers lighting outlets in the area. This ensures the detector is operational when the light is on, and the light being off (during power outage) alerts occupants that the detector may be without power. A dedicated circuit is NOT required.',
    difficulty: 'hard',
    tags: ['installation', 'smoke-detector', 'rule-32-100', 'section-26'],
  },
  {
    id: 'q084',
    section: '26',
    sectionTitle: 'Installation of Electrical Equipment',
    question:
      'Per CEC Rule 26-954, what type of cover is required for a receptacle installed in a wet location (outdoor, permanently exposed to weather)?',
    options: [
      'A standard weatherproof cover (flip-up style)',
      'An in-use weatherproof cover rated for use while a plug is inserted',
      'An indoor rated cover if the receptacle is on a covered porch',
      'A GFCI receptacle does not require a weatherproof cover',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 26-954, receptacles installed in wet locations must be equipped with a weatherproof cover that maintains its weather protection while a plug is inserted (an "in-use" or "while-in-use" cover). Standard flip-up covers do not protect when a plug is connected and are insufficient for wet locations.',
    difficulty: 'medium',
    tags: ['installation', 'weatherproof', 'outdoor-receptacle', 'rule-26-954'],
  },

  // ============================================================
  // SECTION 28 - Motors (16 questions)
  // ============================================================
  {
    id: 'q085',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'Per CEC Rule 28-200, what is the maximum overcurrent protection (time-delay fuse) for a 10 HP, 3-phase, 208 V motor with an FLA of 30.8 A?',
    options: ['46.2 A (150%)', '77 A (250%)', '46.2 A (150% next standard)', '100 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 28-200, the maximum overcurrent protection for a motor using a time-delay fuse is 175% of FLA, or if this doesn\'t allow starting, up to 225% may be used. For a non-time-delay fuse, the maximum is 300%. For a circuit breaker, the maximum is 250% of FLA. 30.8 A × 250% = 77 A maximum circuit breaker size.',
    difficulty: 'hard',
    tags: ['motors', 'overcurrent', 'rule-28-200'],
  },
  {
    id: 'q086',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'Per CEC Rule 28-304, the branch circuit conductors for a motor must have an ampacity of at least:',
    options: ['100% of the motor FLA', '115% of the motor FLA', '125% of the motor FLA', '150% of the motor FLA'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 28-304, the conductors supplying a single motor must have an ampacity of not less than 125% of the motor full-load current (FLA). This accounts for the continuous nature of motor loads and provides a safety margin for heat buildup.',
    difficulty: 'easy',
    tags: ['motors', 'conductor-sizing', 'rule-28-304'],
  },
  {
    id: 'q087',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'A 5 HP, single-phase, 240 V motor has an FLA of 28 A (from CEC Table 44). What is the minimum conductor ampacity required?',
    options: ['28 A', '35 A', '40 A', '30 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 28-304, conductor ampacity = FLA × 125% = 28 A × 1.25 = 35 A. The conductors must be rated for at least 35 A. Per CEC Table 1, 8 AWG T90 copper conductors (rated 45 A) would be selected as the minimum conductor size meeting this requirement.',
    difficulty: 'medium',
    tags: ['motors', 'conductor-sizing', 'FLA', 'rule-28-304'],
  },
  {
    id: 'q088',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'Per CEC Rule 28-302, what is the maximum setting for an overload relay protecting a motor where the overload element is selected to permit motor starting?',
    options: ['115% of FLA', '125% of FLA', '140% of FLA', '150% of FLA'],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 28-302, the overload protection setting must not exceed 125% of the motor\'s nameplate full-load current rating (for motors with a service factor of 1.15 or more, or with a temperature rise of 40°C or less). For motors without these features, the maximum is 115% of FLA.',
    difficulty: 'medium',
    tags: ['motors', 'overload', 'rule-28-302'],
  },
  {
    id: 'q089',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'Per CEC Rule 28-600, the motor disconnecting means must be capable of being locked in the open position. The disconnect must be rated at:',
    options: [
      '100% of the motor FLA',
      'At least 115% of the motor FLA',
      'At least the horsepower rating of the motor',
      'The same ampere rating as the OCPD protecting the branch circuit',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 28-600, the motor disconnect must have an ampere rating of at least 115% of the motor\'s full-load current. The disconnect must also be rated for the horsepower of the motor. A switch rated for a specific HP at the appropriate voltage is the standard disconnecting means.',
    difficulty: 'medium',
    tags: ['motors', 'disconnect', 'rule-28-600'],
  },
  {
    id: 'q090',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'What is the approximate full-load amperage of a 3 HP, single-phase, 120 V motor per CEC Table 44?',
    options: ['20 A', '34 A', '28 A', '40 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Table 44, a 3 HP single-phase 120 V motor has a full-load current of approximately 34 A. Single-phase 120 V motors are relatively high-current for their HP rating compared to 240 V or 3-phase motors, which is why 3 HP is often the practical maximum for 120 V single-phase circuits.',
    difficulty: 'hard',
    tags: ['motors', 'FLA', 'table-44', 'single-phase'],
  },
  {
    id: 'q091',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'A 3-phase, 3 HP, 600 V motor has an FLA of 3.7 A. What is the maximum time-delay fuse size per Rule 28-200?',
    options: ['6.5 A (175%)', '9.25 A (250%)', '8 A (next standard)', '10 A (next standard)'],
    correctAnswer: 3,
    explanation:
      'Maximum time-delay fuse = 175% of FLA = 3.7 A × 1.75 = 6.475 A. Since 6.475 A is not a standard fuse size, the next higher standard size of 7 A or the next commonly available standard (8 A or 10 A) may be used, provided this allows starting. Standard fuse sizes near this value are 6 A and 10 A; 10 A is the typical choice.',
    difficulty: 'hard',
    tags: ['motors', 'fuse-sizing', 'rule-28-200'],
  },
  {
    id: 'q092',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'Per CEC Rule 28-600, the motor disconnecting means must be located:',
    options: [
      'At the motor starter only',
      'Within sight of and within 9 m of the motor controller',
      'In the main panel feeding the motor branch circuit',
      'At the motor terminal box or within 9 m in sight of the motor',
    ],
    correctAnswer: 3,
    explanation:
      'Per CEC Rule 28-600, the motor disconnecting means must be located within sight of and within 9 m of the motor location, or within sight of and within 9 m of the motor controller. "Within sight" means visible and not more than 9 m away. This allows safe lockout/tagout procedures.',
    difficulty: 'medium',
    tags: ['motors', 'disconnect', 'location', 'rule-28-600'],
  },
  {
    id: 'q093',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'What is the full-load current of a 10 HP, 3-phase, 600 V induction motor per CEC Table 44?',
    options: ['9.6 A', '12 A', '14 A', '10.9 A'],
    correctAnswer: 3,
    explanation:
      'Per CEC Table 44, a 10 HP 3-phase 600 V motor has a full-load current of approximately 10.9 A. The higher voltage (600 V vs 208 V or 480 V) results in lower current for the same horsepower, following the power formula P = √3 × V × I × PF.',
    difficulty: 'hard',
    tags: ['motors', 'FLA', 'table-44', '3-phase', '600V'],
  },
  {
    id: 'q094',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'A motor controller (magnetic starter) must have a horsepower rating:',
    options: [
      'Equal to or greater than the motor horsepower',
      'Equal to only the full-load current of the motor',
      'One horsepower higher than the motor rating',
      'Rated for 125% of the motor horsepower',
    ],
    correctAnswer: 0,
    explanation:
      'Per CEC Rule 28-500, the motor controller (magnetic starter) must have a horsepower rating at least equal to the horsepower of the motor it controls at the supply voltage. Using an undersized starter results in contact damage from excessive inrush current and premature failure.',
    difficulty: 'medium',
    tags: ['motors', 'controller', 'starter', 'rule-28-500'],
  },
  {
    id: 'q095',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'Thermal overload heaters in a motor starter are selected based on:',
    options: [
      'The motor horsepower rating',
      'The motor\'s full-load current (nameplate FLA)',
      'The branch circuit breaker size',
      'The motor\'s locked rotor current (LRC)',
    ],
    correctAnswer: 1,
    explanation:
      'Thermal overload heaters (and solid-state overload relays) are selected based on the motor\'s nameplate full-load ampere (FLA) rating. The heater or overload setting must be within CEC Rule 28-302 limits (115-125% of FLA) to provide proper motor protection without nuisance tripping during starting.',
    difficulty: 'medium',
    tags: ['motors', 'overload', 'thermal-heater', 'section-28'],
  },
  {
    id: 'q096',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'What is the locked rotor current (LRC) typically for an across-the-line started NEMA Design B induction motor?',
    options: [
      '2 to 3 times the FLA',
      '6 to 10 times the FLA',
      '4 to 5 times the FLA',
      '12 to 15 times the FLA',
    ],
    correctAnswer: 1,
    explanation:
      'NEMA Design B induction motors (the most common general-purpose type) have a locked rotor current of 6 to 10 times the full-load ampere (FLA) rating. This high inrush lasts for the duration of the starting period (typically 3-10 seconds) and is why time-delay fuses and thermal overloads are required for motor protection.',
    difficulty: 'medium',
    tags: ['motors', 'locked-rotor-current', 'NEMA', 'section-28'],
  },
  {
    id: 'q097',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'Several motors on a feeder total 50 A FLA. Per CEC Rule 28-106, what is the minimum feeder conductor ampacity?',
    options: [
      '50 A (sum of all FLA)',
      '62.5 A (125% of total FLA)',
      'FLA of largest motor × 125% + sum of remaining FLA',
      'Sum of all FLA × 125%',
    ],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 28-106, the feeder conductor ampacity for multiple motors must be at least: 125% of the largest motor\'s FLA + 100% of the sum of all other motors\' FLA. This accounts for the fact that only the largest motor operates continuously at starting load, while others are at running load.',
    difficulty: 'hard',
    tags: ['motors', 'feeder', 'multiple-motors', 'rule-28-106'],
  },
  {
    id: 'q098',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'A motor has a service factor of 1.15. This means:',
    options: [
      'The motor can operate at 115% of its nameplate horsepower continuously without damage',
      'The motor efficiency is 115% better than a standard motor',
      'The motor requires a feeder conductor at 115% capacity',
      'The motor disconnect must be rated 115% of the nameplate current',
    ],
    correctAnswer: 0,
    explanation:
      'A motor with a service factor (SF) of 1.15 is designed to handle a load of 115% of its nameplate horsepower rating on a continuous basis under rated operating conditions without exceeding allowable temperature rise. This provides built-in overload capability for intermittent heavy loads.',
    difficulty: 'medium',
    tags: ['motors', 'service-factor', 'section-28'],
  },
  {
    id: 'q099',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'Per CEC Rule 28-600, a motor disconnecting means is NOT required to be within sight of the motor if:',
    options: [
      'The motor is less than 1 HP and 120 V',
      'The disconnecting means can be locked in the open position',
      'The motor is in the same room as the panel',
      'A motor starter is installed within sight of the motor',
    ],
    correctAnswer: 1,
    explanation:
      'Per CEC Rule 28-600, an alternative to locating the disconnect within sight of the motor is to provide a disconnect that is capable of being locked in the open (off) position. This allows the electrician to lock out the remote disconnect before working on the motor, meeting the intent of the lockout/tagout safety requirement.',
    difficulty: 'hard',
    tags: ['motors', 'disconnect', 'lockout', 'rule-28-600'],
  },
  {
    id: 'q100',
    section: '28',
    sectionTitle: 'Motors and Controls',
    question:
      'A 7.5 HP, 3-phase, 208 V motor (FLA = 26.3 A) requires a motor branch circuit. The maximum circuit breaker size per CEC Rule 28-200 is:',
    options: ['33 A (125%)', '46 A (175%)', '66 A (250%)', '79 A (300%)'],
    correctAnswer: 2,
    explanation:
      'Per CEC Rule 28-200, the maximum overcurrent protection for a motor using an inverse time circuit breaker is 250% of FLA. Maximum breaker = 26.3 A × 2.50 = 65.75 A. The next standard breaker size is 70 A. However, the code allows the next standard size if the calculated value is not a standard size, so 70 A is the correct maximum breaker for this motor.',
    difficulty: 'hard',
    tags: ['motors', 'breaker-sizing', 'rule-28-200'],
  },

  // ============================================================
  // TABLES (1, 2, 5A, 5B, 5C, D3, D4) - 12 questions
  // ============================================================
  {
    id: 'q101',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'CEC Table 1 provides ampacity for copper conductors. What is the ampacity of a 6 AWG T90 copper conductor installed in conduit at 30°C ambient?',
    options: ['55 A', '65 A', '75 A', '45 A'],
    correctAnswer: 0,
    explanation:
      'Per CEC Table 1, a 6 AWG copper conductor with T90 (90°C) insulation installed in conduit at 30°C ambient has an ampacity of 55 A. This is the uncorrected base value; temperature or bundling correction factors would reduce this value in hotter environments or crowded conduits.',
    difficulty: 'medium',
    tags: ['tables', 'table-1', 'ampacity', 'copper'],
  },
  {
    id: 'q102',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'What is the ampacity of 3/0 AWG aluminum conductor (RW90 insulation) in conduit per CEC Table 2?',
    options: ['130 A', '150 A', '165 A', '175 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Table 2, 3/0 AWG aluminum with RW90 (90°C) insulation installed in conduit at 30°C ambient has an ampacity of 150 A. Aluminum conductors require a larger size than copper to achieve the same ampacity due to their lower conductivity.',
    difficulty: 'medium',
    tags: ['tables', 'table-2', 'ampacity', 'aluminum'],
  },
  {
    id: 'q103',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'Per CEC Table 5A, what temperature correction factor applies to a T90 conductor when the ambient temperature is 40°C?',
    options: ['0.91', '0.82', '0.87', '0.77'],
    correctAnswer: 1,
    explanation:
      'Per CEC Table 5A, for a 90°C-rated conductor (T90/RW90) at an ambient temperature of 40°C, the temperature correction factor is 0.82. The corrected ampacity = base ampacity × 0.82. For example, 6 AWG T90 (55 A base) would be derated to 55 × 0.82 = 45.1 A.',
    difficulty: 'medium',
    tags: ['tables', 'table-5A', 'temperature-correction', 'T90'],
  },
  {
    id: 'q104',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'CEC Table 5A temperature correction factors are based on which standard ambient temperature?',
    options: ['25°C', '30°C', '35°C', '20°C'],
    correctAnswer: 1,
    explanation:
      'CEC Table 5A temperature correction factors are calculated using a standard base ambient temperature of 30°C. If the actual ambient temperature differs from 30°C, the correction factor from Table 5A must be applied. In Canada, 30°C is a conservative assumption for most indoor locations.',
    difficulty: 'easy',
    tags: ['tables', 'table-5A', 'ambient-temperature', 'base-temperature'],
  },
  {
    id: 'q105',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'From CEC Table 5C, when 4 to 6 current-carrying conductors are bundled, what correction factor applies?',
    options: ['0.70', '0.80', '0.50', '0.60'],
    correctAnswer: 1,
    explanation:
      'Per CEC Table 5C, when 4 to 6 current-carrying conductors are installed in a conduit, cable, or bundle, a bundling correction factor of 0.80 must be applied. This accounts for reduced heat dissipation when conductors are grouped together.',
    difficulty: 'easy',
    tags: ['tables', 'table-5C', 'bundling', 'correction-factor'],
  },
  {
    id: 'q106',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'CEC Table D3 is used for calculating demand loads for what type of occupancy?',
    options: [
      'Industrial facilities with large motor loads',
      'Multiple dwelling units (apartment buildings)',
      'Commercial office buildings',
      'Educational facilities',
    ],
    correctAnswer: 1,
    explanation:
      'CEC Table D3 provides demand factors for multi-unit residential buildings (apartment complexes and condominiums). It gives percentage demand factors based on the number of dwelling units, reflecting the statistical diversity of simultaneous load usage across multiple units.',
    difficulty: 'hard',
    tags: ['tables', 'table-D3', 'demand', 'multi-unit'],
  },
  {
    id: 'q107',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'In CEC Table D3, the demand factor for electric ranges in a 10-unit apartment building is approximately:',
    options: ['100%', '85%', '75%', '65%'],
    correctAnswer: 2,
    explanation:
      'Per CEC Table D3, for 10 dwelling units with electric ranges, the demand factor is approximately 75%. As the number of units increases, the demand factor decreases further because it is statistically unlikely that all ranges are operating simultaneously at full load.',
    difficulty: 'hard',
    tags: ['tables', 'table-D3', 'demand', 'electric-range'],
  },
  {
    id: 'q108',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'What is the base ampacity of a 1/0 AWG copper conductor with RW90 insulation in conduit per CEC Table 1?',
    options: ['125 A', '150 A', '175 A', '200 A'],
    correctAnswer: 0,
    explanation:
      'Per CEC Table 1, a 1/0 AWG copper conductor with RW90 (90°C) insulation installed in conduit at 30°C ambient has a base ampacity of 125 A. This size is commonly used for service entrance or feeder conductors in medium-sized commercial applications.',
    difficulty: 'medium',
    tags: ['tables', 'table-1', 'ampacity', '1/0-AWG', 'copper'],
  },
  {
    id: 'q109',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'CEC Table 5B provides correction factors for conductors with what type of insulation?',
    options: [
      '75°C-rated insulation (TWN75)',
      '60°C-rated insulation (T60/TW)',
      'Mineral-insulated cable',
      'Cross-linked polyethylene (XLPE/RW90)',
    ],
    correctAnswer: 0,
    explanation:
      'CEC Table 5B provides temperature correction factors for conductors rated at 75°C (TWN75 insulation). Table 5A covers 90°C-rated conductors, and separate correction factors exist for 60°C conductors. The specific temperature rating of the insulation determines which correction table applies.',
    difficulty: 'hard',
    tags: ['tables', 'table-5B', 'insulation', 'temperature-rating'],
  },
  {
    id: 'q110',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'Using CEC Table 1, what is the ampacity of a 2 AWG copper conductor with T90 insulation installed in free air (not in conduit)?',
    options: ['95 A', '115 A', '130 A', '110 A'],
    correctAnswer: 1,
    explanation:
      'Per CEC Table 1, a 2 AWG copper conductor with T90 insulation installed in free air (not in conduit or bundled) at 30°C ambient has an ampacity of 115 A. Conductors installed in free air have higher ampacity than the same conductor in conduit because heat dissipates more effectively.',
    difficulty: 'hard',
    tags: ['tables', 'table-1', 'ampacity', 'free-air', '2AWG'],
  },
  {
    id: 'q111',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'Per CEC Table 5C, what correction factor applies when 10 to 20 current-carrying conductors are bundled together?',
    options: ['0.70', '0.60', '0.50', '0.45'],
    correctAnswer: 2,
    explanation:
      'Per CEC Table 5C, when 10 to 20 current-carrying conductors are bundled or installed in a conduit, the correction factor is 0.50. This significant derating (50% of base ampacity) reflects the substantially reduced ability to dissipate heat from a large bundle of conductors.',
    difficulty: 'medium',
    tags: ['tables', 'table-5C', 'bundling', 'correction-factor'],
  },
  {
    id: 'q112',
    section: 'Tables',
    sectionTitle: 'CEC Tables',
    question:
      'CEC Table D4 is referenced for calculating demand load for which of the following?',
    options: [
      'Commercial laundry equipment',
      'Electric vehicle charging stations',
      'Electric heating in multi-unit residential buildings',
      'Industrial welding equipment',
    ],
    correctAnswer: 2,
    explanation:
      'CEC Table D4 provides demand factors for electric space heating in multi-unit residential buildings. It gives percentage demand factors based on the number of units and allows a reduction in the calculated heating load for service sizing, reflecting the diversity in heating usage across multiple units.',
    difficulty: 'hard',
    tags: ['tables', 'table-D4', 'demand', 'electric-heating'],
  },

  // ============================================================
  // OHM'S LAW & POWER CALCULATIONS (8 questions)
  // ============================================================
  {
    id: 'q113',
    section: "Ohm's Law",
    sectionTitle: "Ohm's Law & Power Calculations",
    question:
      'A 240 V, 4800 W electric baseboard heater draws how much current?',
    options: ['10 A', '20 A', '15 A', '25 A'],
    correctAnswer: 1,
    explanation:
      'Using the power formula P = V × I, rearranged to I = P ÷ V: I = 4800 W ÷ 240 V = 20 A. This heater requires a minimum 20 A circuit and 12 AWG conductors (or 10 AWG for longer runs). For a continuous load, the circuit should be sized at 20 A ÷ 0.80 = 25 A minimum circuit capacity.',
    difficulty: 'easy',
    tags: ['ohms-law', 'power', 'current', 'calculation'],
  },
  {
    id: 'q114',
    section: "Ohm's Law",
    sectionTitle: "Ohm's Law & Power Calculations",
    question:
      'A circuit has a resistance of 8 Ω and is connected to 120 V. What is the power consumed?',
    options: ['960 W', '1800 W', '240 W', '480 W'],
    correctAnswer: 1,
    explanation:
      'First find current: I = V ÷ R = 120 V ÷ 8 Ω = 15 A. Then find power: P = V × I = 120 V × 15 A = 1800 W. Alternatively, P = V² ÷ R = (120)² ÷ 8 = 14400 ÷ 8 = 1800 W.',
    difficulty: 'medium',
    tags: ['ohms-law', 'power', 'resistance', 'calculation'],
  },
  {
    id: 'q115',
    section: "Ohm's Law",
    sectionTitle: "Ohm's Law & Power Calculations",
    question:
      'A 3-phase, 208 V system delivers 30 kVA to a balanced load. What is the line current?',
    options: ['48 A', '83 A', '144 A', '72 A'],
    correctAnswer: 1,
    explanation:
      'For 3-phase power: S = √3 × V_L × I_L. Rearranging: I_L = S ÷ (√3 × V_L) = 30,000 VA ÷ (1.732 × 208 V) = 30,000 ÷ 360.3 = 83.3 A ≈ 83 A. This is the line current in each of the three phase conductors.',
    difficulty: 'hard',
    tags: ['ohms-law', '3-phase', 'power', 'calculation'],
  },
  {
    id: 'q116',
    section: "Ohm's Law",
    sectionTitle: "Ohm's Law & Power Calculations",
    question:
      'Two resistors of 6 Ω and 12 Ω are connected in parallel across 120 V. What is the total current?',
    options: ['10 A', '20 A', '30 A', '15 A'],
    correctAnswer: 2,
    explanation:
      'Parallel circuit: current through each resistor = V ÷ R. I₁ = 120 ÷ 6 = 20 A; I₂ = 120 ÷ 12 = 10 A. Total current = 20 + 10 = 30 A. Alternatively, find equivalent resistance: 1/R_eq = 1/6 + 1/12 = 3/12 = 1/4; R_eq = 4 Ω; I_total = 120 ÷ 4 = 30 A.',
    difficulty: 'medium',
    tags: ['ohms-law', 'parallel', 'current', 'calculation'],
  },
  {
    id: 'q117',
    section: "Ohm's Law",
    sectionTitle: "Ohm's Law & Power Calculations",
    question:
      'A single-phase motor operates at 240 V with a power factor of 0.85 and draws 15 A. What is the true power (watts)?',
    options: ['3,060 W', '3,600 W', '2,601 W', '4,235 W'],
    correctAnswer: 0,
    explanation:
      'True power (W) = V × I × PF = 240 V × 15 A × 0.85 = 3,060 W. The apparent power (VA) = 240 × 15 = 3,600 VA. The difference (3,600 - 3,060 = 540 VAR) is the reactive power. Power factor correction capacitors can reduce the reactive component.',
    difficulty: 'medium',
    tags: ['ohms-law', 'power-factor', 'power', 'calculation'],
  },
  {
    id: 'q118',
    section: "Ohm's Law",
    sectionTitle: "Ohm's Law & Power Calculations",
    question:
      'What is the resistance of a 100 W, 120 V light bulb when operating at rated conditions?',
    options: ['84 Ω', '120 Ω', '144 Ω', '12 Ω'],
    correctAnswer: 2,
    explanation:
      'First find current: I = P ÷ V = 100 W ÷ 120 V = 0.833 A. Then find resistance: R = V ÷ I = 120 V ÷ 0.833 A = 144 Ω. Alternatively: R = V² ÷ P = (120)² ÷ 100 = 14,400 ÷ 100 = 144 Ω. Note that this is the hot resistance; cold resistance is much lower.',
    difficulty: 'easy',
    tags: ['ohms-law', 'resistance', 'power', 'calculation'],
  },
  {
    id: 'q119',
    section: "Ohm's Law",
    sectionTitle: "Ohm's Law & Power Calculations",
    question:
      'A feeder circuit has a total resistance of 0.25 Ω (hot + neutral). If the load draws 80 A, what is the power lost in the conductors?',
    options: ['400 W', '800 W', '1,600 W', '200 W'],
    correctAnswer: 2,
    explanation:
      'Power lost in conductors: P_loss = I² × R = (80 A)² × 0.25 Ω = 6,400 × 0.25 = 1,600 W. This power is dissipated as heat in the conductors. Reducing voltage drop (using larger conductors) also reduces this energy loss, improving efficiency and reducing operating costs.',
    difficulty: 'hard',
    tags: ['ohms-law', 'power-loss', 'conductors', 'calculation'],
  },
  {
    id: 'q120',
    section: "Ohm's Law",
    sectionTitle: "Ohm's Law & Power Calculations",
    question:
      'A 480 V, 3-phase, 4-wire system has a line-to-neutral voltage of approximately:',
    options: ['240 V', '277 V', '208 V', '347 V'],
    correctAnswer: 1,
    explanation:
      'Line-to-neutral voltage (phase voltage) = Line-to-line voltage ÷ √3 = 480 V ÷ 1.732 = 277.1 V ≈ 277 V. This is why commercial lighting circuits in Canada often operate at 277 V (single-phase to neutral from a 480/277 V wye system). Similarly, a 208/120 V system has 208 ÷ √3 = 120 V phase-to-neutral.',
    difficulty: 'medium',
    tags: ['ohms-law', '3-phase', 'voltage', 'calculation'],
  },
]

export const questionsBySection = questions.reduce<Record<string, Question[]>>(
  (acc, q) => {
    if (!acc[q.section]) acc[q.section] = []
    acc[q.section].push(q)
    return acc
  },
  {}
)

export const allSections = [...new Set(questions.map((q) => q.section))]
