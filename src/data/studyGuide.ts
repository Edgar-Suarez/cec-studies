import type { StudyGuideSection } from '../lib/types'

export const studyGuideSections: StudyGuideSection[] = [
  {
    section: '2',
    title: 'Section 2 — General Rules',
    description:
      'The foundation of all electrical work in Canada. Section 2 covers the administrative procedures (permits, inspections), equipment standards, installation requirements, working space, and enclosure types that apply to every electrical installation.',
    subsections: [
      {
        id: '2-admin',
        title: 'Administrative Procedures',
        rules: 'Rules 2-000 to 2-032',
        explanation:
          'Think of the administrative rules as the "rules of the game" before any electrical work begins. Just like you need a driver\'s license before getting on the road, an electrician needs a PERMIT before touching any wiring.\n\nThe inspection department acts like a referee — they have the authority to adopt and enforce the CEC (Rule 2-000), and they can inspect, reject, or require changes at any time.\n\nKey sequence every job must follow:\n1. Get a PERMIT before starting (Rule 2-004)\n2. File an APPLICATION for inspection (Rule 2-006)\n3. Pay FEES at time of permit (Rule 2-008)\n4. POST the permit on site (Rule 2-010)\n5. NOTIFY the inspector in writing before covering any work (Rule 2-012)\n6. Get a CURRENT-PERMIT before energizing (Rule 2-016)',
        fieldScenario:
          'You\'re hired to add a 200A subpanel and 4 new circuits in a commercial shop. Before picking up your tools, you go to the city permit office, fill out the application (Rule 2-006), pay the fees (Rule 2-008), and post the permit on the wall near the panel (Rule 2-010).\n\nWhen the rough-in is done and before you drywall, you call the inspector in writing — an email or paper notice (Rule 2-012). The inspector comes, approves the work, and only then can you cover the walls.\n\nOnce everything is done, the inspection department issues a current-permit (Rule 2-016) authorizing the utility to energize the service.',
        keyPoints: [
          'Permit BEFORE work starts — not after (Rule 2-004)',
          'Post permit conspicuously and leave it until inspection is COMPLETE (Rule 2-010)',
          'Written notification required BEFORE concealing any work (Rule 2-012)',
          'Current-permit required BEFORE connecting to any power source (Rule 2-016)',
          'Reconnection after non-payment or occupant change: NO current-permit needed IF no alterations were made (Rule 2-018)',
          'Special permission must be obtained BEFORE any deviation from the Code (Rule 2-030)',
          'Equipment exposed to water ingress must be EVALUATED before returning to service (Rule 2-032)',
          'Plans and specs in duplicate required for public buildings, large installations (Rule 2-014)',
        ],
      },
      {
        id: '2-marking',
        title: 'Equipment Marking & Ratings',
        rules: 'Rules 2-100 to 2-108',
        explanation:
          'Every piece of electrical equipment must speak for itself — through its markings. Rule 2-100 requires equipment to carry the information needed to verify it\'s right for the job: manufacturer, voltage, amperage, phases, frequency, duty type, and evidence of approval.\n\nThink of equipment markings like the nutrition label on food — it tells you exactly what\'s inside and if it\'s safe for your use case.\n\nImportant markings required at specific locations:\n- SERVICE BOX: Must show maximum overcurrent device rating (Rule 2-100(2))\n- DISTRIBUTION POINTS: Breakers/fuses must show what they protect AND maximum OCPD rating (Rule 2-100(3))\n- CAUTION LABEL: Required when maximum continuous load is less than the breaker\'s marked rating (Rule 2-100(4))\n\nRebuilt equipment (Rule 2-106): If a motor or apparatus is rebuilt with a change in rating, it needs a new nameplate. CRITICAL: Rebuilt or refurbished moulded case circuit breakers (MCCBs) are NOT considered approved — never use them.',
        fieldScenario:
          'You\'re installing a 400A service panel. Rule 2-100(2) requires you to mark the service box with the maximum overcurrent device rating. Inside, each breaker must be labeled with what circuit or equipment it protects, and the maximum OCPD allowed (Rule 2-100(3)).\n\nA client offers you used "reconditioned" circuit breakers at a bargain. Rule 2-106(4) says NO — rebuilt or refurbished MCCBs are not considered approved. Reject them.',
        keyPoints: [
          'Equipment must show: manufacturer, catalog number, voltage, amperes, watts/HP, AC/DC, phases, Hz, RPM, terminal ID, duty type, short-circuit rating, approval evidence (Rule 2-100(1))',
          'Service box must be permanently marked with maximum OCPD rating (Rule 2-100(2))',
          'Distribution points: mark what is protected AND maximum OCPD (Rule 2-100(3))',
          'Caution label required when max continuous load < breaker rating (Rule 2-100(4))',
          'Never change equipment markings to indicate unapproved use (Rule 2-100(5))',
          'Warning markings must be in language mandated by local authority (Rule 2-102)',
          'Equipment must have fault current rating ≥ available fault current at terminals (Rule 2-104(1))',
          'Rebuilt MCCBs or moulded case switches are NOT approved (Rule 2-106(4))',
          'AWG size references mean COPPER unless otherwise specified (Rule 2-120)',
        ],
      },
      {
        id: '2-installation',
        title: 'Installation & Safety Requirements',
        rules: 'Rules 2-110 to 2-140',
        explanation:
          'These rules govern the physical safety of electrical installations in buildings.\n\nVoltage to ground in dwellings (Rule 2-110): Branch circuits in homes can\'t exceed 150V to ground. This is why your outlets run at 120V (well within 150V). Exception: In large apartment buildings (>250 kVA service load) with qualified maintenance staff, 347V to ground is permitted for fixed equipment like electric heat and AC.\n\nThermal insulation (Rule 2-126): One of the most misunderstood rules. Insulation traps heat, reducing a conductor\'s ampacity. Key points:\n- Loose fill insulation: any CEC wiring method OK, but watch for strain\n- Batt insulation installed FIRST: no special precaution needed\n- Metal-faced insulation: 25mm gap required for knob-and-tube (NMD cable can touch it)\n\nFire spread (Rule 2-128): Where raceways or cables pierce fire separations (firewalls, floors, etc.), the openings MUST be sealed per the National Building Code.\n\nSunlight resistance (Rule 2-136): Any conductor installed in direct sunlight must be MARKED as sunlight resistant. If the outer jacket is removed for termination and inner insulation is exposed to sun, those inner conductors must also be sunlight resistant or protected.',
        fieldScenario:
          'You\'re wiring a new home. The insulation contractor says they\'ll blow in loose-fill cellulose insulation in the walls AFTER you rough in. Rule 2-126(1b) says this is OK with any wiring method, but you must ensure no strain on the cables from the insulation weight.\n\nOn another job, a rooftop solar installation requires conduit running in direct sunlight. Rule 2-136 requires the conduit and conductors to be marked as sunlight resistant. Where you strip the outer jacket to terminate inside the inverter box, the inner conductors must also be sunlight resistant or covered with rated tape.',
        keyPoints: [
          'Max 150V-to-ground for dwelling branch circuits (Rule 2-110)',
          'Exception: >250 kVA service + qualified maintenance = up to 347V for fixed heating/cooling/water heating (Rule 2-110)',
          'Wall thermostats for space heating: max 300V-to-ground (Rule 2-110)',
          'Wood/similar materials cannot anchor electrical equipment to masonry (Rule 2-114)',
          'Dissimilar metals: avoid where galvanic action possible (Rule 2-116(2))',
          'Solder flux on copper must be non-corrosive (Rule 2-118)',
          'Metal-faced insulation: 25mm separation from knob-and-tube; NMD cable may touch (Rule 2-126(1d))',
          'Mineral-insulated, aluminum-sheathed, copper-sheathed cables: avoid corrosive insulation (Rule 2-126(1e))',
          'NO thermal insulation inside outlet boxes, junction boxes, or enclosures (Rule 2-126(2))',
          'Fire separation penetrations must be sealed per NBC (Rule 2-128(2))',
          'Conductors in sunlight must be marked sunlight resistant (Rule 2-136)',
          'Class A GFCIs = supplementary shock protection ONLY, not a substitute for insulation or grounding (Rule 2-140)',
        ],
      },
      {
        id: '2-protection',
        title: 'Protection of Persons & Property',
        rules: 'Rules 2-200 to 2-202',
        explanation:
          'These rules exist for one reason: keeping people alive.\n\nRule 2-200 (General): All electrical equipment must be installed and GUARDED so people and property are safe, and equipment is protected from damage.\n\nRule 2-202 (Bare live parts): Any exposed energized conductor or terminal must be behind an enclosure — UNLESS it\'s in a locked room or vault accessible only to qualified persons.\n\nWhen non-electrical components (like a panel-mounted thermostat, gauge, or display) are within 900mm of bare live parts AND require servicing by unqualified persons, barriers or covers must be installed to protect those live parts.\n\nDoors to rooms with exposed live parts must have WARNING SIGNS visible to anyone who might enter.',
        fieldScenario:
          'You\'re installing a 600V switchgear lineup in a manufacturing facility. The bus bars inside are bare copper energized at 600V. Rule 2-202(1) requires these to be in an enclosure. The room itself is kept locked (Rule 2-202(1a)), so the bus bars are protected by restricted access.\n\nHowever, there\'s a process display screen mounted on the outside of the switchgear that maintenance staff sometimes service. Since non-electrical components requiring unqualified service are within 900mm of the bare bus, Rule 2-202(2) requires barriers or covers over the live parts when that panel door is open.',
        keyPoints: [
          'Bare live parts must be enclosed OR in a room accessible only to qualified persons (Rule 2-202(1))',
          'Non-electrical components within 900mm of bare live parts serviced by unqualified persons = barriers required (Rule 2-202(2))',
          'Entrances to rooms with exposed live parts must have conspicuous WARNING SIGNS (Rule 2-202(3))',
        ],
      },
      {
        id: '2-maintenance',
        title: 'Maintenance, Working Space & Disconnection',
        rules: 'Rules 2-300 to 2-328',
        explanation:
          'These rules protect the electrician doing the work — not just the end user.\n\n**Working Space (Rule 2-308):** Think of it like a surgeon needing room to operate. The minimum is 1m in front of any equipment requiring maintenance. For switchboards and MCCs with exposed live parts:\n- Working space: per Table 56\n- Minimum headroom: 2.2m\n\n**Egress (Rule 2-310):** If a room contains equipment rated 1200A or more, OR rated over 750V, the room must allow escape WITHOUT passing the failure point. If this is impossible, working space increases to 1.5m minimum.\n\n**Disconnection (Rule 2-304):** Three-way and four-way switches are NOT disconnecting means. Locks on breakers, warning tags, sentries — all valid means of preventing accidental energization.\n\n**Arc flash marking (Rule 2-306):** Switchboards, panelboards, MCCs, meter socket enclosures in NON-DWELLING locations that may be serviced while energized MUST be field marked with shock and arc flash hazard warnings.',
        fieldScenario:
          'You\'re doing maintenance on a 1600A MCC in an industrial plant. Rule 2-308 requires 1m clear working space in front. The headroom must be at least 2.2m (Rule 2-308(5)).\n\nBecause the MCC is rated over 1200A, Rule 2-310(2) requires you to be able to exit the room WITHOUT passing the MCC in case of a failure (explosion, arc blast). The electrician\'s lockout (lock on breaker + warning tag) is your safety against Rule 2-304(3).\n\nThe MCC must have arc flash labels already applied by the owner before you work on it (Rule 2-306).',
        keyPoints: [
          'Minimum working space: 1m with secure footing (Rule 2-308(1))',
          'Working space NOT required behind equipment with no renewable parts and accessible connections from elsewhere (Rule 2-308(2))',
          'Drawout equipment: working space + room for full extension of drawout, doors open ≥90° (Rule 2-308(3))',
          'Minimum headroom at switchboards/MCCs with bare live parts: 2.2m (Rule 2-308(5))',
          'Equipment rated ≥1200A or >750V: room must allow escape without passing failure point (Rule 2-310(2))',
          'If dual egress impossible: minimum working space increases to 1.5m (Rule 2-310(2))',
          'Doors/gates in electrical rooms: operable from equipment side without key or tool (Rule 2-310(4))',
          'Transformers >50 kVA: 1m horizontal working space on conductor-access sides (Rule 2-312)',
          'Working space cannot be used for storage (Rule 2-314)',
          'Rooftop HVAC/mechanical equipment (non-dwelling): at least 1 receptacle required for maintenance (Rule 2-316)',
          'Three-way and four-way switches are NOT disconnecting means (Rule 2-304(2))',
          'Arc flash labels required on switchboards, panelboards, MCCs, meter sockets — NOT in dwelling units (Rule 2-306)',
          'All electrical equipment: kept in safe and proper working condition (Rule 2-300(1))',
          'Defective equipment: put in good order OR permanently disconnected (Rule 2-300(4))',
        ],
      },
      {
        id: '2-enclosures',
        title: 'Enclosures',
        rules: 'Rules 2-400 to 2-404',
        explanation:
          'Enclosures are the armor that protects electrical equipment from the environment — and the environment from the equipment. The CEC defines specific "Types" for different environments:\n\n| Type | Environment |\n|------|-------------|\n| Type 1 | Indoors, ordinary locations |\n| Type 2 | Indoors, with dripping condensation |\n| Type 3R | Outdoors (most common outdoor rating) |\n| Type 4 | Where direct water streams may hit |\n| Type 5 | Indoors with settling dust, lint, fibres |\n| General-purpose | Indoors, ordinary (no type mark needed) |\n\nYou can always substitute a HIGHER protection type — never a lower one (Rule 2-400(2)).\n\nMotor markings (Rule 2-404): Motors have their own shorthand:\n- Drip-proof = "DP"\n- Weatherproof = "WP"\n- Totally Enclosed = "TE"',
        fieldScenario:
          'You\'re installing a disconnect switch for an outdoor AC condenser unit. Rule 2-400(1c) requires a Type 3R enclosure minimum. Your supplier is out of Type 3R — they have Type 4. Rule 2-400(2) says Type 4 is acceptable as a substitute since it offers equal or greater protection.\n\nThe motor on the condenser is marked "TE" — totally enclosed (Rule 2-404(1c)), meaning no ventilation openings and the motor is sealed from the environment.',
        keyPoints: [
          'Type 1 = indoors, ordinary (Rule 2-400(1a))',
          'Type 2 = indoors, condensation/dripping (Rule 2-400(1b))',
          'Type 3R = outdoors — minimum for outdoor equipment (Rule 2-400(1c))',
          'Type 4 = direct water streams (Rule 2-400(1d))',
          'Type 5 = settling dust, lint, fibres indoors (Rule 2-400(1e))',
          'Can substitute HIGHER protection types, never lower (Rule 2-400(2))',
          'Hazardous location enclosures: designated per Rule 18-052 (Rule 2-400(3))',
          'General-purpose enclosures do NOT need type designation marked (Rule 2-402(1))',
          'Motor abbreviations: DP = Drip-proof, WP = Weatherproof, TE = Totally Enclosed (Rule 2-404(1))',
        ],
      },
    ],
  },
]
