import type { Question } from '../../lib/types'

// =============================================================================
// SECTION 4 — Conductors (CEC 2021, CSA C22.1:21, pages 78–85)
// Source: PDF scan provided by user
// 25 questions — Block 1 of N
// =============================================================================

export const section4Questions: Question[] = [
  // ---------------------------------------------------------------------------
  // SCOPE & CONDUCTOR SIZING (Rules 4-000 to 4-002)
  // ---------------------------------------------------------------------------
  {
    id: 's4-001',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'According to CEC Rule 4-002, the minimum size of copper insulated conductors (excluding flexible cord, equipment wire, and control circuit conductors) shall be:',
    options: [
      'No. 18 AWG',
      'No. 16 AWG',
      'No. 14 AWG',
      'No. 12 AWG',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-002: Insulated conductors shall be not smaller than No. 14 AWG when made of copper and not smaller than No. 12 AWG when made of aluminum. Flexible cord, equipment wire, and control circuit conductors are exceptions to this rule.',
    difficulty: 'easy',
    tags: ['conductor-sizing', 'minimum-size', 'rule-4-002'],
  },
  {
    id: 's4-002',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-002, what is the minimum size of aluminum insulated conductors for general wiring?',
    options: [
      'No. 14 AWG',
      'No. 12 AWG',
      'No. 10 AWG',
      'No. 8 AWG',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-002: Aluminum insulated conductors shall be not smaller than No. 12 AWG. This is two sizes larger than the copper minimum (No. 14 AWG) because aluminum has higher resistivity and requires a larger cross-section to carry the same current safely.',
    difficulty: 'easy',
    tags: ['conductor-sizing', 'aluminum', 'rule-4-002'],
  },

  // ---------------------------------------------------------------------------
  // AMPACITY OF WIRES & CABLES (Rule 4-004)
  // ---------------------------------------------------------------------------
  {
    id: 's4-003',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-004(1)(a), the ampacity of a single copper conductor in free air with spacing not less than 100% of the largest cable diameter is found in which table?',
    options: [
      'Table 2',
      'Table 1',
      'Table 3',
      'Table 4',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-004(1)(a): For single-conductor copper cables in free air with spacing ≥100% of the largest cable diameter, use Table 1. Table 2 is for conductors in raceway, Table 3 is for aluminum in free air, and Table 4 is for aluminum in raceway.',
    difficulty: 'medium',
    tags: ['ampacity', 'free-air', 'table-1', 'rule-4-004'],
  },
  {
    id: 's4-004',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'For one, two, or three copper conductors in a raceway, the ampacity is determined from which CEC table?',
    options: [
      'Table 1',
      'Table 2',
      'Table 3',
      'Table 4',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-004(1)(b): One, two, or three copper conductors in a run of raceway, or 2- or 3-conductor cable, shall have ampacity as specified in Table 2. This is the most commonly used table for everyday residential and commercial wiring.',
    difficulty: 'easy',
    tags: ['ampacity', 'raceway', 'table-2', 'rule-4-004'],
  },
  {
    id: 's4-005',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'When four or more copper conductors are installed in a raceway, the ampacity is determined by Table 2 with correction factors from which table?',
    options: [
      'Table 5A',
      'Table 5B',
      'Table 5C',
      'Table 5D',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-004(1)(c): Four or more conductors in a run of raceway or cable use Table 2 ampacities multiplied by the correction factors from Table 5C. The more conductors bundled together, the greater the derating because of heat buildup.',
    difficulty: 'medium',
    tags: ['ampacity', 'derating', 'table-5C', 'rule-4-004'],
  },
  {
    id: 's4-006',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-004(3), a neutral conductor that carries only the unbalanced current from other conductors in a normally balanced circuit:',
    options: [
      'Must always be counted for ampacity derating purposes',
      'Shall not be counted in determining ampacities',
      'Shall be counted only if it is larger than No. 6 AWG',
      'Shall be counted only in three-phase systems',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-004(3): A neutral conductor that carries only the unbalanced current from other conductors, as in the case of normally balanced circuits of three or more conductors, shall NOT be counted in determining ampacities. This is because it carries minimal current under balanced conditions.',
    difficulty: 'medium',
    tags: ['ampacity', 'neutral', 'derating', 'rule-4-004'],
  },
  {
    id: 's4-007',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'In a three-phase, 4-wire system where a load is connected between each phase conductor and the neutral, what does Rule 4-004(4) require regarding the neutral?',
    options: [
      'The neutral shall not be counted for ampacity purposes',
      'The neutral shall be counted in determining ampacities because it carries comparable current',
      'The neutral may be reduced to 50% of the phase conductor size',
      'The neutral is exempt from all correction factors',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-004(4): When load is connected between a single-phase conductor and the neutral, or between each of two phase conductors and the neutral of a 3-phase 4-wire system, the common conductor carries current comparable to the phase conductors and SHALL be counted in determining ampacities.',
    difficulty: 'hard',
    tags: ['ampacity', 'neutral', 'three-phase', 'rule-4-004'],
  },

  // ---------------------------------------------------------------------------
  // AMPACITY CORRECTION FACTORS (Rule 4-004 Subrules 7–25)
  // ---------------------------------------------------------------------------
  {
    id: 's4-008',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-004(7)(b)(i), when conductors are installed in an ambient temperature exceeding 30°C, which correction factor table applies?',
    options: [
      'Table 5A',
      'Table 5B',
      'Table 5C',
      'Table 5D',
    ],
    correctAnswer: 0,
    explanation:
      'Rule 4-004(7)(b)(i): The ampacity correction factors of Table 5A apply where conductors are installed in an ambient temperature exceeding or anticipated to exceed 30°C. Higher ambient temperatures reduce the conductor\'s ability to dissipate heat, requiring a derating.',
    difficulty: 'medium',
    tags: ['ampacity', 'ambient-temperature', 'table-5A', 'rule-4-004'],
  },
  {
    id: 's4-009',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'CEC Rule 4-004(7)(a)(i) states that ampacity correction factors shall NOT apply to conductors installed in:',
    options: [
      'Underground raceways',
      'Auxiliary gutters containing 30 conductors or less',
      'Cable trays with more than 4 cables',
      'Raceways exposed to direct sunlight',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-004(7)(a)(i): Correction factors shall not apply to conductors installed in auxiliary gutters containing 30 conductors or less. This exemption recognizes that auxiliary gutters are typically short runs where heat accumulation is not a significant concern.',
    difficulty: 'hard',
    tags: ['ampacity', 'correction-factors', 'auxiliary-gutter', 'rule-4-004'],
  },
  {
    id: 's4-010',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-004(14), when conductors of different temperature ratings are installed in the same raceway, the ampacity shall be determined based on:',
    options: [
      'The conductor with the highest temperature rating',
      'An average of all temperature ratings',
      'The conductor having the lowest temperature rating',
      '75°C for all conductors regardless of individual ratings',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-004(14): The ampacity of conductors of different temperature ratings installed in the same raceway shall be determined on the basis of the conductor having the LOWEST temperature rating. The weakest link principle — you must protect the most vulnerable insulation.',
    difficulty: 'medium',
    tags: ['ampacity', 'temperature-rating', 'raceway', 'rule-4-004'],
  },
  {
    id: 's4-011',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'According to CEC Rule 4-004(17), the higher ampacity is permitted when the lower ampacity portion of a cable run (not more than 4 conductors) does not exceed:',
    options: [
      '5% of the circuit length or 1.5 m, whichever is less',
      '10% of the circuit length or 3 m, whichever is less',
      '15% of the circuit length or 5 m, whichever is less',
      '20% of the circuit length or 6 m, whichever is less',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-004(17): Where the lower ampacity portion does not exceed 10% of the circuit length or 3 m, whichever is less, the higher ampacity shall be permitted. This allows a short underground-to-aboveground transition without penalizing the entire circuit.',
    difficulty: 'hard',
    tags: ['ampacity', 'transition', 'rule-4-004'],
  },
  {
    id: 's4-012',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-004(6), a bonding conductor in a raceway:',
    options: [
      'Shall always be counted for ampacity derating',
      'Shall not be counted in determining ampacities',
      'Must be counted if larger than No. 8 AWG',
      'Is counted only in three-phase systems',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-004(6): A bonding conductor shall NOT be counted in determining ampacities as provided for in Subrules 1) and 2). Bonding conductors do not carry load current under normal conditions, so they do not contribute to heat buildup.',
    difficulty: 'easy',
    tags: ['ampacity', 'bonding', 'derating', 'rule-4-004'],
  },

  // ---------------------------------------------------------------------------
  // TEMPERATURE LIMITATIONS (Rule 4-006)
  // ---------------------------------------------------------------------------
  {
    id: 's4-013',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-006(2)(a), for equipment rated not more than 100A where the maximum conductor termination temperature is NOT marked, the termination temperature shall be considered:',
    options: [
      '60°C',
      '75°C',
      '90°C',
      '105°C',
    ],
    correctAnswer: 0,
    explanation:
      'Rule 4-006(2)(a): Where the maximum conductor termination temperature is not marked, it shall be considered 60°C for equipment rated not more than 100A or marked for use with No. 1 AWG or smaller conductors. This means you must use the 60°C ampacity column from the tables.',
    difficulty: 'medium',
    tags: ['temperature', 'termination', '60C', 'rule-4-006'],
  },
  {
    id: 's4-014',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-006(2)(b), for equipment rated more than 100A where termination temperature is NOT marked, the termination temperature is considered to be:',
    options: [
      '60°C',
      '75°C',
      '90°C',
      '110°C',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-006(2)(b): For equipment rated more than 100A or marked for use with conductors larger than No. 1 AWG, where termination temperature is not marked, it shall be considered 75°C. This is why most large feeders are sized using the 75°C column.',
    difficulty: 'medium',
    tags: ['temperature', 'termination', '75C', 'rule-4-006'],
  },
  {
    id: 's4-015',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'CEC Rule 4-006(4) states that the temperature limitation rules for conductor terminations apply only to the first _____ of conductor length from the termination point.',
    options: [
      '600 mm',
      '900 mm',
      '1.2 m',
      '1.5 m',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-006(4): Subrules 1) and 2) shall apply only to the first 1.2 m of conductor length measured from the point of termination on the equipment. Beyond 1.2 m, you can use the conductor\'s full insulation temperature rating for ampacity.',
    difficulty: 'hard',
    tags: ['temperature', 'termination', '1.2m', 'rule-4-006'],
  },

  // ---------------------------------------------------------------------------
  // INDUCED VOLTAGES & FLEXIBLE CORDS (Rules 4-008, 4-010, 4-012)
  // ---------------------------------------------------------------------------
  {
    id: 's4-016',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-008(3), single-conductor cables carrying more than 200A shall NOT enter ferrous metal boxes through:',
    options: [
      'Common non-ferrous plates',
      'Non-metallic box connectors',
      'Individual openings',
      'Grouped cable glands',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-008(3): Single-conductor cables and single insulated conductors carrying more than 200A shall not enter ferrous metal boxes through individual openings. This prevents induction heating of the ferrous metal. All conductors of a circuit must enter through one common non-ferrous or insulating plate (Rule 4-008(6)).',
    difficulty: 'hard',
    tags: ['induced-voltage', 'ferrous', '200A', 'rule-4-008'],
  },
  {
    id: 's4-017',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-008(1), when sheath currents in single-conductor cables with continuous metal sheaths may overheat the insulation, one option is to derate the cables to:',
    options: [
      '50% of the otherwise applicable rating',
      '60% of the otherwise applicable rating',
      '70% of the otherwise applicable rating',
      '80% of the otherwise applicable rating',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-008(1)(a): Where sheath currents in single-conductor cables having continuous sheaths of lead, aluminum, stainless steel, or copper are likely to cause overheating, the cables shall be derated to 70% of the current-carrying rating that would otherwise apply.',
    difficulty: 'hard',
    tags: ['sheath-currents', 'derating', '70-percent', 'rule-4-008'],
  },
  {
    id: 's4-018',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'According to CEC Rule 4-010, the minimum size for flexible cord shall be No. 18 AWG copper, except for tinsel cord which may be:',
    options: [
      'No. 20 AWG',
      'No. 22 AWG',
      'No. 24 AWG',
      'No. 27 AWG',
    ],
    correctAnswer: 3,
    explanation:
      'Rule 4-010(a): Tinsel cord shall be permitted to be No. 27 AWG copper. This is the smallest conductor size recognized by the CEC and is used for lightweight applications like telephone handsets and similar devices.',
    difficulty: 'medium',
    tags: ['flexible-cord', 'tinsel', 'minimum-size', 'rule-4-010'],
  },

  // ---------------------------------------------------------------------------
  // NEUTRAL CONDUCTORS (Rules 4-016, 4-018, 4-020)
  // ---------------------------------------------------------------------------
  {
    id: 's4-019',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-018(2)(b), a demand factor of _____ may be applied to the portion of the unbalanced neutral load in excess of 200A.',
    options: [
      '50%',
      '60%',
      '70%',
      '80%',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-018(2)(b): A demand factor of 70% shall be permitted to be applied to that portion of the unbalanced load in excess of 200A. However, this does NOT apply to electric-discharge lighting or non-linear loads from 3-phase 4-wire systems (Rule 4-018(2)(a)).',
    difficulty: 'hard',
    tags: ['neutral', 'demand-factor', '70-percent', 'rule-4-018'],
  },
  {
    id: 's4-020',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'According to CEC Rule 4-018(3)(a), the minimum size of a service neutral shall be:',
    options: [
      'No. 14 AWG copper or No. 12 AWG aluminum',
      'No. 12 AWG copper or No. 10 AWG aluminum',
      'No. 10 AWG copper or No. 8 AWG aluminum',
      'No. 8 AWG copper or No. 6 AWG aluminum',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-018(3)(a): The size of a service neutral shall be not smaller than No. 10 AWG copper or No. 8 AWG aluminum. This minimum applies regardless of the calculated unbalanced load.',
    difficulty: 'medium',
    tags: ['neutral', 'service', 'minimum-size', 'rule-4-018'],
  },

  // ---------------------------------------------------------------------------
  // CONDUCTOR IDENTIFICATION & COLOR CODING (Rules 4-024, 4-030, 4-032)
  // ---------------------------------------------------------------------------
  {
    id: 's4-021',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-024(1), insulated neutral conductors up to and including No. 2 AWG shall be identified by:',
    options: [
      'A blue covering',
      'A white covering or three continuous white stripes',
      'A gray covering',
      'A red covering with white stripes',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-024(1): All insulated neutral conductors up to and including No. 2 AWG copper or aluminum shall be identified by a white covering or by three continuous white stripes along the entire length of the conductor.',
    difficulty: 'easy',
    tags: ['identification', 'neutral', 'white', 'rule-4-024'],
  },
  {
    id: 's4-022',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-032(1), insulated grounding or bonding conductors shall have a continuous outer finish that is:',
    options: [
      'White or white with a colored stripe',
      'Red or red with a yellow stripe',
      'Green or green with one or more yellow stripes',
      'Blue or blue with a white stripe',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-032(1)(a): Insulated grounding or bonding conductors shall have a continuous outer finish that is either green or green with one or more yellow stripes. These colors are RESERVED exclusively for grounding/bonding — no other conductor may use them (Rule 4-032(2)).',
    difficulty: 'easy',
    tags: ['identification', 'grounding', 'green', 'rule-4-032'],
  },
  {
    id: 's4-023',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-032(3)(c), in a three-phase AC system, the correct color coding for phases A, B, and C respectively is:',
    options: [
      'Black, Red, Blue',
      'Red, Black, Blue',
      'Red, Blue, Black',
      'Black, Blue, Red',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-032(3)(c): For 3-phase AC — Red (phase A), Black (phase B), Blue (phase C), and White (neutral where required). This is the Canadian standard and differs from the US (NEC) color code.',
    difficulty: 'easy',
    tags: ['identification', 'color-code', 'three-phase', 'rule-4-032'],
  },
  {
    id: 's4-024',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-030(4), in a multi-wire branch circuit with an identified conductor, the continuity of the identified conductor shall be:',
    options: [
      'Dependent on device connections for reliability',
      'Independent of device connections so devices can be removed without interrupting the neutral',
      'Connected in series with each device',
      'Terminated at the first device only',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 4-030(4): The continuity of the identified (neutral) conductor shall be independent of device connections such as lampholders, receptacles, ballasts, etc., so that the devices can be disconnected without interrupting the continuity of the neutral. This prevents dangerous voltage on remaining devices if one is removed.',
    difficulty: 'medium',
    tags: ['neutral', 'multi-wire', 'continuity', 'rule-4-030'],
  },
  {
    id: 's4-025',
    section: '4',
    sectionTitle: 'Conductors',
    question:
      'Per CEC Rule 4-032(3)(c), in a 4-wire delta-connected system with a grounded midpoint, the phase conductor with the higher voltage-to-ground is designated as:',
    options: [
      'Phase B (black)',
      'Phase C (blue)',
      'Phase A (red)',
      'The neutral (white)',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 4-032(4): Where the midpoint of one phase of a 4-wire delta-connected secondary is grounded, the phase A insulated conductor (red) shall be the insulated conductor having the higher voltage-to-ground. This is the "wild leg" or "high leg" that carries approximately 208V to ground instead of 120V.',
    difficulty: 'hard',
    tags: ['identification', 'delta', 'high-leg', 'rule-4-032'],
  },
]
