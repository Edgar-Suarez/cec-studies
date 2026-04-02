import type { Question } from '../../lib/types'

// =============================================================================
// SECTION 2 — General Rules (CEC 2021, CSA C22.1:21, pages 70–77)
// Source: PDF scan provided by user
// 25 questions — Block 1 of N
// =============================================================================

export const section2Questions: Question[] = [
  // ---------------------------------------------------------------------------
  // ADMINISTRATIVE (Rules 2-000 to 2-032)
  // ---------------------------------------------------------------------------
  {
    id: 's2-001',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'According to CEC Rule 2-004, when must a permit be obtained for electrical work?',
    options: [
      'Within 48 hours of starting work',
      'Before commencing any installation, alteration, repair, or extension of electrical equipment',
      'Only for new installations, not for repairs',
      'After the rough-in is complete but before the final inspection',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 2-004: "Electrical contractors or others responsible for carrying out the work shall obtain a permit from the inspection department BEFORE commencing work with respect to installation, alteration, repair, or extension of any electrical equipment." This applies to ALL electrical work — not just new installations.',
    difficulty: 'easy',
    tags: ['administrative', 'permit', 'rule-2-004'],
  },
  {
    id: 's2-002',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-010, a posted permit at the work site shall not be removed until:',
    options: [
      'The rough-in inspection is passed',
      'The utility makes the final connection',
      'The inspection is completed',
      'The contractor leaves the site',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-010: "A copy of the permit shall be posted in a conspicuous place at the work site and shall not be removed until the inspection is completed." The permit must remain visible during the entire process.',
    difficulty: 'easy',
    tags: ['administrative', 'permit', 'rule-2-010'],
  },
  {
    id: 's2-003',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'CEC Rule 2-012 requires notification of the inspection department. What form must this notification take?',
    options: [
      'A verbal phone call at least 24 hours in advance',
      'Written notification allowing inspection before any work is concealed',
      'An email sent on the day the drywall will be installed',
      'No notification is required; the inspector decides when to visit',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 2-012: "The inspection department shall be notified in writing by the electrical contractor that work is ready for inspection at such time(s) allowing inspection before any work or portion of work is concealed." The notification must be WRITTEN and given with enough lead time.',
    difficulty: 'medium',
    tags: ['administrative', 'inspection', 'rule-2-012'],
  },
  {
    id: 's2-004',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-014, plans and specifications must be submitted to the inspection department before work begins on which of the following?',
    options: [
      'Any residential renovation over $10,000',
      'Wiring installations of public buildings, industrial establishments, and factories where public safety is involved',
      'Only commercial projects exceeding 200A service',
      'Every electrical installation regardless of size',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 2-014: Plans and specifications in duplicate must be submitted before work on (a) wiring installations of public buildings, industrial establishments, factories, and buildings where public safety is involved; (b) large light and power installations with generators, transformers, switchboards, large batteries, etc.; or (c) other installations prescribed by the inspection department.',
    difficulty: 'medium',
    tags: ['administrative', 'plans', 'rule-2-014'],
  },
  {
    id: 's2-005',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Under CEC Rule 2-018, a supply authority does NOT require a current-permit for reconnection when:',
    options: [
      'The service was cut off for safety reasons and has been repaired',
      'The service was cut off for non-payment or change of occupant AND no alterations or additions have been made since the last current-permit',
      'The customer provides a signed declaration that the wiring is safe',
      'A licensed electrician verifies the installation within the past year',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 2-018: "A supply authority shall not require a current-permit for reconnection in cases where the service has been cut off for non-payment of bills or a change of occupant, provided that there have been no alterations or additions subsequent to the issuance of the last current-permit." Both conditions must be met: (1) cut off for non-payment or occupant change, AND (2) no electrical work done.',
    difficulty: 'medium',
    tags: ['administrative', 'current-permit', 'reconnection', 'rule-2-018'],
  },
  {
    id: 's2-006',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-024, what is required of all electrical equipment used in installations?',
    options: [
      'It must be purchased from a Canadian manufacturer',
      'It must be approved and of a kind, type, and rating approved for the specific purpose',
      'It must carry a minimum 5-year warranty',
      'It must be less than 10 years old',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 2-024(1): "Electrical equipment used in electrical installations within the jurisdiction of the inspection department shall be approved and shall be of a kind or type and rating approved for the specific purpose for which it is to be employed." Equipment must be both APPROVED and suitable for its SPECIFIC use.',
    difficulty: 'easy',
    tags: ['administrative', 'approved-equipment', 'rule-2-024'],
  },
  {
    id: 's2-007',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-028, electrical work shall not be rendered inaccessible by lathing, boarding, or building construction until:',
    options: [
      'The contractor has taken photographs of the work',
      'It has been accepted by the inspection department',
      '48 hours have passed since the notification was sent',
      'The general contractor signs off on the installation',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 2-028: "No electrical work shall be rendered inaccessible by lathing, boarding, or other building construction until it has been accepted by the inspection department." The inspector must approve BEFORE anything is covered up.',
    difficulty: 'easy',
    tags: ['administrative', 'inspection', 'rule-2-028'],
  },
  {
    id: 's2-008',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-032(3), electrical equipment that has been exposed to water ingress shall:',
    options: [
      'Be replaced immediately with new equipment',
      'Be dried out and returned to service',
      'Be subjected to evaluation to determine if it may be placed back into service',
      'Be de-energized for a minimum of 72 hours before reuse',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-032(3): "Electrical equipment that has been exposed to ingress of water shall be subjected to evaluation to ascertain whether or not the equipment may be placed back into service." It does not automatically require replacement — it must be EVALUATED first.',
    difficulty: 'medium',
    tags: ['administrative', 'water-damage', 'rule-2-032'],
  },

  // ---------------------------------------------------------------------------
  // EQUIPMENT MARKING & RATINGS (Rules 2-100 to 2-108)
  // ---------------------------------------------------------------------------
  {
    id: 's2-009',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-100(2), each service box must be marked at the time of installation to indicate:',
    options: [
      'The name of the installing contractor',
      'The date of installation',
      'The maximum rating of the overcurrent device that may be used',
      'The utility company account number',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-100(2): "At the time of installation, each service box shall be marked in a conspicuous, legible, and permanent manner, to indicate clearly the maximum rating of the overcurrent device that may be used for this installation." This is a field-applied marking, not a factory label.',
    difficulty: 'medium',
    tags: ['marking', 'service-box', 'rule-2-100'],
  },
  {
    id: 's2-010',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'CEC Rule 2-100(4) requires a permanent caution marking adjacent to a fused switch or circuit breaker when:',
    options: [
      'The equipment is installed in a damp location',
      'The maximum continuous load allowed is less than the continuous operating marking of the device',
      'The equipment is rated over 200A',
      'The equipment is accessible to unqualified persons',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 2-100(4): Where the maximum continuous load allowed on a fused switch or circuit breaker (as determined per Rule 8-104(5) and (6)) is less than the continuous operating marking of the device, a permanent, legible caution marking shall be field applied adjacent to the nameplate indicating the maximum continuous loading permitted.',
    difficulty: 'hard',
    tags: ['marking', 'caution-label', 'rule-2-100'],
  },
  {
    id: 's2-011',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-104(1), when selecting electrical equipment marked with a short-circuit current rating, the equipment must have a rating sufficient for:',
    options: [
      'The maximum load current expected in normal operation',
      'The voltage employed and the fault current available at the equipment terminals',
      'Twice the normal operating current',
      'The maximum demand load of the building',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 2-104(1): "Where electrical equipment is marked with a short-circuit current rating or withstand rating, the equipment selected for installation shall have a rating sufficient for the voltage employed and for the fault current that is available at the equipment terminals." This ensures the equipment can safely handle a short-circuit event.',
    difficulty: 'hard',
    tags: ['ratings', 'short-circuit', 'rule-2-104'],
  },
  {
    id: 's2-012',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-106(4), rebuilt or refurbished moulded case circuit breakers (MCCBs) are:',
    options: [
      'Permitted if recertified by the original manufacturer',
      'Permitted if tested by a licensed electrician on site',
      'Not considered to be approved for the purpose of Rule 2-024',
      'Permitted only in residential installations',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-106(4): "Rebuilt or refurbished moulded case circuit breakers or moulded case switches shall not be considered to be approved for the purpose of Rule 2-024." This is absolute — no testing, recertification, or special approval can override this rule. Never use rebuilt MCCBs.',
    difficulty: 'medium',
    tags: ['rebuilt-equipment', 'MCCB', 'rule-2-106'],
  },

  // ---------------------------------------------------------------------------
  // INSTALLATION REQUIREMENTS (Rules 2-110 to 2-140)
  // ---------------------------------------------------------------------------
  {
    id: 's2-013',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-110, what is the maximum voltage-to-ground for branch circuits in a dwelling unit?',
    options: ['120 V', '150 V', '240 V', '277 V'],
    correctAnswer: 1,
    explanation:
      'Rule 2-110: "Branch circuits in dwelling units shall not have a voltage exceeding 150 volts-to-ground." Standard 120V circuits comply; 240V circuits with 120V-to-ground also comply. This protects homeowners from higher voltages on accessible outlets.',
    difficulty: 'easy',
    tags: ['voltage', 'dwelling', 'rule-2-110'],
  },
  {
    id: 's2-014',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'CEC Rule 2-110 permits voltages up to 600Y/347V in a dwelling unit for fixed equipment ONLY when:',
    options: [
      'The dwelling is a detached single-family home with a 200A service',
      'The apartment building service exceeds 250 kVA and qualified electrical maintenance personnel are available',
      'The homeowner signs a waiver accepting the risk',
      'The dwelling has a dedicated electrical room with restricted access',
    ],
    correctAnswer: 1,
    explanation:
      'Rule 2-110 exception: Where the calculated load on the service conductors of an apartment or similar building exceeds 250 kVA AND qualified electrical maintenance personnel are available, higher voltages up to 600Y/347V to ground may supply fixed (not portable) equipment: (a) space heating (thermostats max 300V-to-ground), (b) water heating, and (c) air conditioning.',
    difficulty: 'hard',
    tags: ['voltage', 'dwelling', 'exception', 'rule-2-110'],
  },
  {
    id: 's2-015',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-114, what material shall NOT be used as an anchor into masonry or concrete for supporting electrical equipment?',
    options: [
      'Stainless steel expansion anchors',
      'Concrete sleeve anchors',
      'Wood or other similar material',
      'Plastic wall plugs rated for the load',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-114: "Wood or other similar material shall not be used as an anchor into masonry or concrete for the support of any electrical equipment." Wood plugs in masonry dry out, shrink, and lose holding strength — creating a safety hazard.',
    difficulty: 'easy',
    tags: ['installation', 'anchoring', 'rule-2-114'],
  },
  {
    id: 's2-016',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-126(1d)(i), when thermal insulation made of or faced with metal is installed near knob-and-tube wiring, what minimum separation is required?',
    options: ['10 mm', '15 mm', '25 mm', '50 mm'],
    correctAnswer: 2,
    explanation:
      'Rule 2-126(1d)(i): "A 25 mm separation shall be provided between the thermal insulation and knob-and-tube wiring." This 25mm (approximately 1 inch) air gap prevents the metal-faced insulation from contacting the knob-and-tube conductors, which have no outer sheath.',
    difficulty: 'medium',
    tags: ['thermal-insulation', 'knob-and-tube', 'rule-2-126'],
  },
  {
    id: 's2-017',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-126(2), thermal insulation material shall NOT be sprayed or introduced into:',
    options: [
      'Wall cavities containing NMD cable',
      'Attic spaces above electrical panels',
      'The interior of outlet boxes, junction boxes, or enclosures for electrical equipment',
      'Spaces between rafters containing electrical wiring',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-126(2): "Thermal insulation material shall not be sprayed or otherwise introduced into the interior of outlet boxes, junction boxes, or enclosures for other electrical equipment." Insulation inside boxes would interfere with connections and prevent heat dissipation.',
    difficulty: 'medium',
    tags: ['thermal-insulation', 'outlet-boxes', 'rule-2-126'],
  },
  {
    id: 's2-018',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-128(2), when a raceway or cable pierces a fire separation, the opening around it must be:',
    options: [
      'Left open for ventilation as long as the raceway is metal',
      'Filled with non-combustible mineral wool loosely packed',
      'Properly closed or sealed in compliance with the National Building Code of Canada',
      'Covered with a metal plate on both sides of the separation',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-128(2): "Where a fire separation is pierced by a raceway or cable, any openings around the raceway or cable shall be properly closed or sealed in compliance with the National Building Code of Canada." Fire-stopping products (putty pads, intumescent caulk, etc.) are typically used.',
    difficulty: 'medium',
    tags: ['fire-spread', 'firestopping', 'rule-2-128'],
  },
  {
    id: 's2-019',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-140, a Class A ground fault circuit interrupter (GFCI) shall NOT be used as a substitute for:',
    options: [
      'An arc fault circuit interrupter (AFCI)',
      'A surge protective device (SPD)',
      'Insulation or grounding (except as permitted by Rule 26-702(2))',
      'An equipment ground conductor',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-140: "Class A ground fault circuit interrupters shall be permitted as supplementary protection from shock hazard, but shall not be used as a substitute for insulation or grounding except as permitted by Rule 26-702(2)." GFCIs add a layer of protection but cannot replace fundamental safety measures.',
    difficulty: 'medium',
    tags: ['GFCI', 'supplementary-protection', 'rule-2-140'],
  },

  // ---------------------------------------------------------------------------
  // PROTECTION OF PERSONS (Rules 2-200 to 2-202)
  // ---------------------------------------------------------------------------
  {
    id: 's2-020',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-202(2), when non-electrical components requiring servicing by unqualified persons are mounted within what distance of bare live parts, suitable barriers or covers must be provided?',
    options: ['300 mm', '600 mm', '900 mm', '1200 mm'],
    correctAnswer: 2,
    explanation:
      'Rule 2-202(2): "Where electrical equipment has mounted on it, within 900 mm of bare live parts, non-electrical components that require servicing by unqualified persons, suitable barriers or covers shall be provided for the bare live parts." The 900mm (about 3 feet) threshold ensures anyone reaching in to service a non-electrical component is protected.',
    difficulty: 'hard',
    tags: ['protection', 'bare-live-parts', 'rule-2-202'],
  },

  // ---------------------------------------------------------------------------
  // MAINTENANCE & WORKING SPACE (Rules 2-300 to 2-328)
  // ---------------------------------------------------------------------------
  {
    id: 's2-021',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-304(2), which of the following is NOT considered a disconnecting means?',
    options: [
      'A single-pole toggle switch',
      'A circuit breaker',
      'A three-way or four-way switch',
      'A fused disconnect switch',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-304(2): "Three-way or four-way switches shall not be considered as disconnecting means." These switches change the path of current between multiple locations but do not guarantee a positive disconnection — flipping one switch may still leave the circuit live via another path.',
    difficulty: 'medium',
    tags: ['disconnection', 'three-way-switch', 'rule-2-304'],
  },
  {
    id: 's2-022',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-308(1), what is the minimum working space with secure footing required around electrical equipment containing disconnecting means?',
    options: ['600 mm', '750 mm', '1 m', '1.5 m'],
    correctAnswer: 2,
    explanation:
      'Rule 2-308(1): "A minimum working space of 1 m with secure footing shall be provided and maintained about electrical equipment that (a) contains renewable parts, disconnecting means, or operating means; or (b) requires examination, adjustment, operation, or maintenance." This 1m clearance is the general minimum.',
    difficulty: 'easy',
    tags: ['working-space', 'rule-2-308'],
  },
  {
    id: 's2-023',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-308(5), what is the minimum headroom in working spaces around switchboards or motor control centres where bare live parts are exposed?',
    options: ['1.8 m', '2.0 m', '2.2 m', '2.5 m'],
    correctAnswer: 2,
    explanation:
      'Rule 2-308(5): "The minimum headroom of working spaces around switchboards or motor control centres where bare live parts are exposed at any time shall be 2.2 m." This ensures workers can stand fully upright with clearance from overhead live parts.',
    difficulty: 'medium',
    tags: ['working-space', 'headroom', 'rule-2-308'],
  },
  {
    id: 's2-024',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-310(2), when a room contains equipment rated 1200 A or more or rated over 750 V, and dual egress cannot be achieved, the minimum working space must be:',
    options: ['1 m', '1.2 m', '1.5 m', '2.0 m'],
    correctAnswer: 2,
    explanation:
      'Rule 2-310(2): Where equipment is rated ≥1200A or >750V, the room must be arranged so escape is possible without passing the failure point. "Except that where this cannot be done, the working space requirement of Rule 2-308(1) and (2) shall be not less than 1.5 m." The 1.5m provides additional buffer when a second exit is not feasible.',
    difficulty: 'hard',
    tags: ['working-space', 'egress', 'rule-2-310'],
  },
  {
    id: 's2-025',
    section: '2',
    sectionTitle: 'General Rules',
    question:
      'Per CEC Rule 2-400(1), which enclosure type designation is required for equipment used outdoors?',
    options: [
      'Type 1',
      'Type 2',
      'Type 3R',
      'Type 5',
    ],
    correctAnswer: 2,
    explanation:
      'Rule 2-400(1): The CEC designates enclosure types for intended use: (a) Type 1 — indoors, ordinary; (b) Type 2 — indoors, dripping/condensation; (c) Type 3R — outdoors; (d) Type 4 — direct water streams; (e) Type 5 — indoor settling dust; (f) general-purpose — indoors, ordinary. Type 3R is the minimum for outdoor installations. A higher type (e.g., Type 4) may be substituted per Rule 2-400(2).',
    difficulty: 'easy',
    tags: ['enclosures', 'Type-3R', 'outdoor', 'rule-2-400'],
  },
]
