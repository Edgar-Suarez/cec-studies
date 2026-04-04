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
        diagramaMermaid: `graph TD
    A["Start: Electrical Work Required"] --> B["1. Obtain PERMIT\\n(Rule 2-004)"]
    B --> C["2. File APPLICATION\\n(Rule 2-006)"]
    C --> D["3. Pay FEES\\n(Rule 2-008)"]
    D --> E["4. POST permit on site\\n(Rule 2-010)"]
    E --> F["5. Do the work"]
    F --> G["6. NOTIFY inspector in writing\\n(Rule 2-012)"]
    G --> H{"Inspector approves?"}
    H -->|Yes| I["7. Get CURRENT-PERMIT\\n(Rule 2-016)"]
    H -->|No| J["Fix deficiencies"]
    J --> G
    I --> K["8. Utility energizes service"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style K fill:#065f46,stroke:#10b981,color:#e2e8f0`,
        infoCards: [
          { icon: 'permit', title: 'Get the Permit', note: 'Before touching a single wire — Rule 2-004', color: 'sky' },
          { icon: 'fee', title: 'Pay Your Fees', note: 'At time of application, not after — Rule 2-008', color: 'amber' },
          { icon: 'post', title: 'Post It Visibly', note: 'On-site until inspection is done — Rule 2-010', color: 'emerald' },
          { icon: 'write', title: 'Notify in Writing', note: 'Give the inspector time before you cover anything — Rule 2-012', color: 'violet' },
          { icon: 'inspect', title: 'Pass Inspection', note: 'Fix any deficiencies, then re-notify', color: 'rose' },
          { icon: 'power', title: 'Current-Permit', note: 'Only then can the utility energize — Rule 2-016', color: 'emerald' },
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
        diagramaMermaid: `graph TD
    A["Equipment Marking\\n(Rule 2-100)"] --> B["Required Info"]
    B --> B1["Manufacturer"]
    B --> B2["Voltage / Amps"]
    B --> B3["Phases / Hz"]
    B --> B4["Approval Evidence"]
    A --> C["Location-Specific Marks"]
    C --> C1["SERVICE BOX\\nMax OCPD rating\\n(Rule 2-100-2)"]
    C --> C2["DISTRIBUTION POINTS\\nWhat is protected +\\nMax OCPD\\n(Rule 2-100-3)"]
    C --> C3["CAUTION LABEL\\nWhen continuous load\\n< breaker rating\\n(Rule 2-100-4)"]
    A --> D["Rebuilt Equipment\\n(Rule 2-106)"]
    D --> D1["New nameplate if\\nrating changed"]
    D --> D2["Rebuilt MCCBs =\\nNOT APPROVED"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D2 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
        infoCards: [
          { icon: 'label', title: 'Read the Nameplate', note: 'Voltage, amps, phases, Hz, approval — it must all be there', color: 'sky' },
          { icon: 'bolt', title: 'Service Box Mark', note: 'Permanently show max OCPD rating — Rule 2-100(2)', color: 'amber' },
          { icon: 'warning', title: 'Caution Label', note: 'When continuous load is less than breaker rating — Rule 2-100(4)', color: 'rose' },
          { icon: 'shield', title: 'Never Use Rebuilt MCCBs', note: 'Refurbished breakers are NOT approved — Rule 2-106(4)', color: 'rose' },
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
        diagramaMermaid: `graph TD
    A["Installation Safety\\nDecision Tree"] --> B{"Dwelling unit?"}
    B -->|Yes| C["Max 150V to ground\\n(Rule 2-110)"]
    B -->|No| D{"Service > 250 kVA +\\nqualified staff?"}
    D -->|Yes| E["Up to 347V permitted\\nfor fixed equipment"]
    D -->|No| C
    A --> F{"Thermal insulation\\npresent?"}
    F -->|Loose fill after wiring| G["Any wiring method OK\\nWatch for strain"]
    F -->|Batt installed first| H["No special precaution"]
    F -->|Metal-faced| I["25mm gap for K&T\\nNMD cable may touch"]
    A --> J{"Penetrating fire\\nseparation?"}
    J -->|Yes| K["SEAL per NBC\\n(Rule 2-128)"]
    A --> L{"Direct sunlight?"}
    L -->|Yes| M["Must be marked\\nsunlight resistant\\n(Rule 2-136)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style K fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style M fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
        infoCards: [
          { icon: 'bolt', title: 'Max 150V to Ground', note: 'Dwelling branch circuits stay within safe limits — Rule 2-110', color: 'sky' },
          { icon: 'fire', title: 'Thermal Insulation', note: 'Traps heat! Know the exceptions for loose fill, batt & metal-faced — Rule 2-126', color: 'amber' },
          { icon: 'shield', title: 'Seal Fire Penetrations', note: 'Every raceway or cable through a firewall must be sealed per NBC — Rule 2-128', color: 'rose' },
          { icon: 'sun', title: 'Sunlight Resistant', note: 'Conductors in direct sunlight must be marked accordingly — Rule 2-136', color: 'emerald' },
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
        diagramaMermaid: `graph TD
    A["Bare Live Parts\\n(Rule 2-202)"] --> B{"Enclosed?"}
    B -->|Yes| C["OK - Standard\\ninstallation"]
    B -->|No| D{"In locked room/vault\\nfor qualified persons only?"}
    D -->|Yes| E["OK with\\nWARNING SIGNS\\nat all entrances"]
    D -->|No| F["VIOLATION -\\nMust enclose or\\nrestrict access"]
    E --> G{"Non-electrical components\\nwithin 900mm?"}
    G -->|Yes| H["BARRIERS required\\nover live parts\\n(Rule 2-202-2)"]
    G -->|No| I["No additional\\nprotection needed"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style H fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
        infoCards: [
          { icon: 'shield', title: 'Guard & Enclose', note: 'All equipment must protect people and property — Rule 2-200', color: 'emerald' },
          { icon: 'lock', title: 'Bare Parts = Locked Room', note: 'Exposed live parts only behind enclosures or restricted access — Rule 2-202', color: 'rose' },
          { icon: 'warning', title: '900mm Barrier Zone', note: 'Non-electrical parts near live parts need barriers for unqualified service — Rule 2-202(2)', color: 'amber' },
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
        diagramaMermaid: `graph TD
    A["Working Space\\nRequirements"] --> B["Min 1m clear\\nin front of equipment\\n(Rule 2-308-1)"]
    B --> C{"Switchboard/MCC\\nwith bare live parts?"}
    C -->|Yes| D["Headroom min 2.2m\\n(Rule 2-308-5)"]
    C -->|No| E["Standard 1m\\nsufficient"]
    D --> F{"Equipment rated\\n>= 1200A or > 750V?"}
    F -->|Yes| G{"Dual egress\\npossible?"}
    G -->|Yes| H["Exit without\\npassing equipment\\n(Rule 2-310-2)"]
    G -->|No| I["Working space\\nincreases to 1.5m"]
    F -->|No| J["Standard egress\\nrequirements"]
    A --> K["Arc Flash Labels\\nRequired on:\\nSwitchboards, Panels,\\nMCCs, Meter Sockets\\n(NOT dwellings)\\n(Rule 2-306)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style K fill:#065f46,stroke:#10b981,color:#e2e8f0`,
        infoCards: [
          { icon: 'ruler', title: '1m Clear Space', note: 'Minimum working distance in front of any equipment — Rule 2-308', color: 'sky' },
          { icon: 'warning', title: '2.2m Headroom', note: 'Switchboards & MCCs with bare live parts need full height — Rule 2-308(5)', color: 'amber' },
          { icon: 'shield', title: 'Escape Route', note: 'Equipment >= 1200A: exit without passing the failure point — Rule 2-310', color: 'rose' },
          { icon: 'label', title: 'Arc Flash Labels', note: 'Required on panels, MCCs, meter sockets — not in dwellings — Rule 2-306', color: 'violet' },
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
        diagramaMermaid: `graph TD
    A["Select Enclosure Type"] --> B{"Location?"}
    B -->|Indoors, ordinary| C["Type 1"]
    B -->|Indoors, condensation| D["Type 2"]
    B -->|Outdoors| E["Type 3R\\n(most common outdoor)"]
    B -->|Direct water streams| F["Type 4"]
    B -->|Dust, lint, fibres| G["Type 5"]
    H["Substitution Rule\\n(Rule 2-400-2)"] --> I["Can ALWAYS use\\nHIGHER type"]
    H --> J["NEVER use\\nLOWER type"]
    K["Motor Markings"] --> L["DP = Drip-proof"]
    K --> M["WP = Weatherproof"]
    K --> N["TE = Totally Enclosed"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style J fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
        infoCards: [
          { icon: 'box', title: 'Type 1 — Indoors', note: 'Ordinary dry locations, the default choice', color: 'sky' },
          { icon: 'box', title: 'Type 3R — Outdoors', note: 'Most common outdoor rating — your go-to for exterior work', color: 'emerald' },
          { icon: 'box', title: 'Type 4 — Water Streams', note: 'Direct hose-down or heavy rain exposure', color: 'amber' },
          { icon: 'box', title: 'Type 5 — Dusty', note: 'Settling dust, lint, fibres indoors (workshops, mills)', color: 'violet' },
          { icon: 'shield', title: 'Substitution Rule', note: 'Always go HIGHER, never lower — Rule 2-400(2)', color: 'rose' },
        ],
      },
    ],
  },
  {
    section: '4',
    title: 'Section 4 — Conductors',
    description:
      'Section 4 is the backbone of wire sizing in the CEC. It covers how to determine the maximum current a conductor can safely carry (ampacity), how to apply correction factors for heat, bundling, and ambient temperature, termination temperature limits, neutral conductor sizing, and the color coding system that identifies every wire in Canadian electrical installations.',
    subsections: [
      {
        id: '4-scope-sizing',
        title: 'Scope & Conductor Sizing',
        rules: 'Rules 4-000 to 4-002',
        explanation:
          'Section 4 applies to conductors for services, feeders, branch circuits, and photovoltaic circuits. Think of it as the "sizing bible" — it tells you how fat your wire needs to be and how much current it can handle.\n\nThe scope covers five key areas:\n1. Maximum allowable conductor ampacity (how much current)\n2. Maximum conductor termination temperature (how hot at the connection point)\n3. Selection of neutral conductors\n4. Selecting conductor type for specific conditions of use\n5. Conductor identification (color coding)\n\nRule 4-002 sets the minimum wire sizes: No. 14 AWG for copper and No. 12 AWG for aluminum. Why is aluminum one size bigger? Because aluminum has about 61% the conductivity of copper — it needs more cross-sectional area to carry the same current safely.\n\nExceptions exist for flexible cord (No. 18 AWG minimum), equipment wire, and control circuits, which are allowed to be smaller because they carry lighter loads or are used in protected environments.',
        fieldScenario:
          'You\'re wiring a new commercial office. The foreman hands you a box of No. 16 AWG THHN copper wire and says "use this for the receptacle circuits." You stop him — Rule 4-002 requires a minimum of No. 14 AWG copper for general wiring. The No. 16 AWG is only suitable for control circuits, not branch circuits feeding receptacles.\n\nOn another job, a supplier delivers No. 14 AWG aluminum for a 15A branch circuit. Rule 4-002 says aluminum must be minimum No. 12 AWG — you reject the delivery and order the correct size.',
        keyPoints: [
          'Section 4 applies to services, feeders, branch circuits, and PV circuits (Rule 4-000)',
          'Minimum copper conductor: No. 14 AWG (Rule 4-002)',
          'Minimum aluminum conductor: No. 12 AWG (Rule 4-002)',
          'Exceptions: flexible cord, equipment wire, and control circuit conductors may be smaller',
          'Flexible cord minimum: No. 18 AWG copper; tinsel cord may be No. 27 AWG (Rule 4-010)',
          'Cords for specific devices may be No. 20 AWG copper (Rule 4-010(b))',
        ],
        diagramaMermaid: `graph TD
    A["Minimum Conductor Sizes\\n(Rule 4-002)"] --> B{"Material?"}
    B -->|Copper| C["Min No. 14 AWG"]
    B -->|Aluminum| D["Min No. 12 AWG"]
    A --> E["Exceptions"]
    E --> F["Flexible Cord\\nMin No. 18 AWG"]
    E --> G["Equipment Wire\\n(smaller OK)"]
    E --> H["Control Circuits\\n(smaller OK)"]
    F --> I["Tinsel Cord\\nNo. 27 AWG"]
    F --> J["Specific Devices\\nNo. 20 AWG"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#065f46,stroke:#10b981,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0`,
        infoCards: [
          { icon: 'wire', title: 'Copper Min: #14 AWG', note: 'The baseline for all general copper wiring — Rule 4-002', color: 'sky' },
          { icon: 'wire', title: 'Aluminum Min: #12 AWG', note: 'Two sizes larger than copper — lower conductivity — Rule 4-002', color: 'violet' },
          { icon: 'wire', title: 'Flex Cord: #18 AWG', note: 'Smaller is OK for cords, tinsel goes down to #27 — Rule 4-010', color: 'slate' },
        ],
      },
      {
        id: '4-ampacity',
        title: 'Ampacity Tables & Selection',
        rules: 'Rules 4-004(1) to 4-004(6)',
        explanation:
          'Ampacity is the maximum current a conductor can carry continuously without exceeding its insulation temperature rating. Choosing the right table is like choosing the right map — use the wrong one and you\'ll end up in trouble.\n\nHere\'s your cheat sheet for copper:\n- Table 1: Single conductor in FREE AIR (spacing ≥ 100% of cable diameter)\n- Table 2: 1, 2, or 3 conductors in RACEWAY (or 2/3-conductor cable) — the everyday table\n\nFor aluminum:\n- Table 3: Single conductor in FREE AIR\n- Table 4: 1, 2, or 3 conductors in RACEWAY\n\nCritical counting rules for which conductors to include when determining derating:\n- A NEUTRAL carrying only unbalanced current in a balanced circuit: DO NOT count (Rule 4-004(3))\n- A NEUTRAL in a 3-phase 4-wire system with single-phase loads on each phase: DO count — it carries comparable current (Rule 4-004(4))\n- A BONDING conductor: DO NOT count (Rule 4-004(6))\n- The allowable ampacity of NEUTRAL SUPPORTED cable: Tables 36A and 36B (Rule 4-004(5))',
        fieldScenario:
          'You\'re sizing conductors for a 200A 3-phase feeder in EMT conduit. The circuit has 3 phase conductors, 1 neutral, and 1 bonding conductor — 5 wires total in the raceway.\n\nStep 1: The bonding conductor doesn\'t count (Rule 4-004(6)).\nStep 2: Is the neutral carrying only unbalanced current? If the load is balanced (e.g., a 3-phase motor), the neutral doesn\'t count (Rule 4-004(3)) — you have 3 current-carrying conductors, use Table 2 directly.\nStep 3: But if it\'s feeding single-phase loads from each phase to neutral (like lighting), the neutral counts (Rule 4-004(4)) — you have 4 current-carrying conductors and must apply Table 5C derating factors.',
        keyPoints: [
          'Copper in free air: Table 1 (single conductor, spacing ≥ 100% diameter) (Rule 4-004(1)(a))',
          'Copper in raceway (1-3 conductors): Table 2 — the most commonly used table (Rule 4-004(1)(b))',
          'Copper in raceway (4+ conductors): Table 2 × Table 5C correction factors (Rule 4-004(1)(c))',
          'Aluminum in free air: Table 3 (Rule 4-004(2)(a))',
          'Aluminum in raceway: Table 4 (Rule 4-004(2)(b))',
          'Neutral carrying unbalanced current only: DO NOT count (Rule 4-004(3))',
          'Neutral carrying comparable current (single-phase loads on 3Φ 4-wire): DO count (Rule 4-004(4))',
          'Bonding conductor: NEVER count (Rule 4-004(6))',
          'Neutral supported cable: Tables 36A and 36B (Rule 4-004(5))',
        ],
        diagramaMermaid: `graph TD
    A["Which Ampacity Table?"] --> B{"Conductor Material?"}
    B -->|Copper| C{"Installation?"}
    B -->|Aluminum| D{"Installation?"}
    C -->|Free Air| E["TABLE 1"]
    C -->|Raceway 1-3 cond.| F["TABLE 2\\n(most common)"]
    C -->|Raceway 4+ cond.| G["TABLE 2 x TABLE 5C"]
    D -->|Free Air| H["TABLE 3"]
    D -->|Raceway 1-3 cond.| I["TABLE 4"]
    D -->|Raceway 4+ cond.| J["TABLE 4 x TABLE 5C"]
    K["Count These Conductors?"] --> L["Neutral unbalanced only\\nDO NOT count"]
    K --> M["Neutral with single-phase loads\\nDO count"]
    K --> N["Bonding conductor\\nNEVER count"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style N fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
        infoCards: [
          { icon: 'wire', title: 'Cu Free Air = Tbl 1', note: 'Single conductor, spacing >= 100% diameter', color: 'sky' },
          { icon: 'wire', title: 'Cu Raceway = Tbl 2', note: 'The everyday table — 1 to 3 conductors in conduit', color: 'emerald' },
          { icon: 'wire', title: 'Al Free Air = Tbl 3', note: 'Same concept as Table 1 but for aluminum', color: 'violet' },
          { icon: 'wire', title: 'Al Raceway = Tbl 4', note: 'Aluminum equivalent of Table 2', color: 'violet' },
          { icon: 'neutral', title: 'Neutral: Count It?', note: 'Unbalanced only = NO. Carrying load = YES. Bond = NEVER.', color: 'rose' },
        ],
      },
      {
        id: '4-correction',
        title: 'Correction Factors & Special Conditions',
        rules: 'Rules 4-004(7) to 4-004(25)',
        explanation:
          'Correction factors are the reality checks of conductor sizing. The ampacity tables assume ideal conditions (30°C ambient, proper spacing). When real-world conditions deviate, you must correct.\n\nThink of it like speed limits: the posted limit assumes dry roads and clear visibility. Rain (high ambient temp), fog (bundled cables), or construction (cable tray spacing) all require you to slow down.\n\nKey correction factor tables:\n- Table 5A: Ambient temperature > 30°C — heat from the environment\n- Table 5B: Single-conductor cables in free air at < 25% spacing — cables too close together\n- Table 5C: 4+ conductors bundled, or cables in non-ventilated trays — heat from neighbors\n- Table 5D: Single-conductor cables at 25%–100% spacing — moderate proximity\n\nImportant exemptions:\n- Auxiliary gutters with ≤ 30 conductors: NO correction needed (Rule 4-004(7)(a)(i))\n- Conductors inside equipment for termination: NO correction needed (Rule 4-004(7)(a)(ii))\n- Cable runs < 600 mm at close spacing: NO Table 5C correction (Rule 4-004(12))\n\nTransition rule (Rule 4-004(16)–(17)): When a cable goes underground to aboveground, use the LOWER ampacity — unless the lower portion is ≤ 10% of circuit length or ≤ 3 m (whichever is less).\n\nDifferent temperature ratings in same raceway (Rule 4-004(14)): Use the LOWEST rated conductor\'s temperature for sizing ALL conductors.',
        fieldScenario:
          'You\'re running 8 current-carrying conductors in a single conduit through a boiler room where ambient temperature reaches 45°C. You need TWO corrections:\n\n1. Table 5A: Ambient temp factor for 45°C (e.g., for 90°C rated RW90 wire, the factor is 0.87)\n2. Table 5C: 8 conductors means a factor of 0.7\n\nMultiply both: Start with Table 2 ampacity × 0.87 × 0.7 = your actual allowed ampacity. A No. 12 AWG RW90 copper at 30A (Table 2, 90°C column) becomes 30 × 0.87 × 0.7 = 18.3A.\n\nOn another job, you\'re pulling a short 400 mm jumper of cables grouped closely to enter a junction box. Rule 4-004(12) says that since the bundled run is less than 600 mm, you DON\'T need to apply Table 5C derating — this exemption saves you from oversizing a short transition.',
        keyPoints: [
          'Table 5A: ambient temperature > 30°C correction (Rule 4-004(7)(b)(i))',
          'Table 5B: single-conductor cables in free air < 25% spacing (Rule 4-004(9))',
          'Table 5C: 4+ conductors bundled / non-ventilated cable trays (Rule 4-004(7)(b)(iii))',
          'Table 5D: cables at 25%–100% spacing in free air (Rule 4-004(8))',
          'Auxiliary gutters ≤ 30 conductors: NO correction factors apply (Rule 4-004(7)(a)(i))',
          'Conductors inside equipment for termination: NO correction (Rule 4-004(7)(a)(ii))',
          'Cable runs < 600 mm at close spacing: Table 5C does NOT apply (Rule 4-004(12))',
          'Multi-conductor cables touching > 600 mm: apply Table 5C for total conductor count (Rule 4-004(13))',
          'Different temp ratings in same raceway: use the LOWEST rating (Rule 4-004(14))',
          'Underground-to-aboveground transition: use lower ampacity, UNLESS ≤ 10% or ≤ 3 m (Rule 4-004(16)–(17))',
          'Known load factor < 1.00: may increase underground ampacity (Rule 4-004(18)) — no further diversity permitted (Rule 4-004(19))',
          'Cablebus in > 30°C ambient: apply Table 5A to nameplate ampacity (Rule 4-004(25))',
        ],
        diagramaMermaid: `graph TD
    A["Correction Factor\\nDecision Tree"] --> B{"Ambient temp\\n> 30C?"}
    B -->|Yes| C["Apply TABLE 5A"]
    B -->|No| D["No temp correction"]
    A --> E{"How many conductors\\nin raceway?"}
    E -->|1-3| F["No bundling\\ncorrection"]
    E -->|4+| G["Apply TABLE 5C"]
    A --> H{"Cable spacing\\nin free air?"}
    H -->|">= 100%"| I["No correction\\n(Tables 1/3 direct)"]
    H -->|"25% - 100%"| J["Apply TABLE 5D"]
    H -->|"< 25%"| K["Apply TABLE 5B\\n(up to 4 cables)"]
    A --> L["EXEMPTIONS"]
    L --> M["Aux gutters <= 30 cond."]
    L --> N["Inside equipment"]
    L --> O["Bundled run < 600mm"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style G fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
        infoCards: [
          { icon: 'thermometer', title: 'Tbl 5A: Ambient > 30C', note: 'Hot room? Derate for the environment', color: 'rose' },
          { icon: 'wire', title: 'Tbl 5C: 4+ Bundled', note: 'More wires together = more heat = lower ampacity', color: 'amber' },
          { icon: 'wire', title: 'Tbl 5D: 25-100% Spacing', note: 'Moderate proximity in free air cables', color: 'sky' },
          { icon: 'shield', title: 'Exempt: < 600mm', note: 'Short bundled runs under 600mm skip Table 5C derating', color: 'emerald' },
          { icon: 'thermometer', title: 'Lowest Temp Wins', note: 'Mixed insulation ratings in same raceway? Use the lowest — Rule 4-004(14)', color: 'violet' },
        ],
      },
      {
        id: '4-temperature',
        title: 'Temperature Limitations at Terminations',
        rules: 'Rule 4-006',
        explanation:
          'Even if your wire can handle 90°C, the equipment it connects to might melt at anything above 60°C. Rule 4-006 is about matching the conductor\'s capabilities to the weakest link — the TERMINATION point.\n\nThink of it like a water hose: the hose might handle 100 PSI, but the nozzle is rated for 60 PSI. You size for the nozzle, not the hose.\n\nThe two default termination temperatures when equipment is NOT marked:\n- ≤ 100A equipment OR ≤ No. 1 AWG conductors: assume 60°C\n- > 100A equipment OR > No. 1 AWG conductors: assume 75°C\n\nCritical detail: This rule only applies to the first 1.2 m of conductor from the termination (Rule 4-006(4)). Beyond 1.2 m, you can use the wire\'s full insulation rating.\n\nIf you need to make a cable transition to meet termination rules, the transitioning conductor must be at least 1.2 m long (Rule 4-006(5)).',
        fieldScenario:
          'You\'re connecting a 60A subpanel using RW90 copper conductors. The panel has no termination temperature marking. Since it\'s rated ≤ 100A, Rule 4-006(2)(a) says you must assume 60°C terminations.\n\nYou look up Table 2 in the 60°C column — a No. 6 AWG copper is rated for 65A at 60°C. That works for your 60A breaker.\n\nIf you had used the 90°C column (which shows 80A for No. 6), you might have been tempted to use No. 8 AWG (55A at 90°C but only 40A at 60°C). The termination temperature rule prevents this dangerous mistake.\n\nHowever, for a 200A service panel (> 100A), Rule 4-006(2)(b) allows you to use the 75°C column since the assumed termination temp is 75°C.',
        keyPoints: [
          'Equipment marked with termination temp: use that temp column in Tables 1–4 (Rule 4-006(1))',
          '≤ 100A or ≤ No. 1 AWG, unmarked: assume 60°C termination (Rule 4-006(2)(a))',
          '> 100A or > No. 1 AWG, unmarked: assume 75°C termination (Rule 4-006(2)(b))',
          'High-voltage equipment unmarked: consult manufacturer (Rule 4-006(3))',
          'Termination rule applies only to first 1.2 m from connection point (Rule 4-006(4))',
          'Cable transition to meet termination rules: minimum 1.2 m length (Rule 4-006(5))',
          'Underground tables (D8A–D11B, D17A–D17N, 12E): termination rules still apply (Rule 4-006(6))',
        ],
        diagramaMermaid: `graph TD
    A["Temperature Limitation\\nat Terminations\\n(Rule 4-006)"] --> B{"Equipment marked\\nwith temp?"}
    B -->|Yes| C["Use MARKED\\ntemp column"]
    B -->|No| D{"Equipment rated\\n> 100A?"}
    D -->|No| E["Assume 60C\\n(Rule 4-006-2a)"]
    D -->|Yes| F["Assume 75C\\n(Rule 4-006-2b)"]
    E --> G["Use 60C column\\nin Tables 1-4"]
    F --> H["Use 75C column\\nin Tables 1-4"]
    A --> I["Applies only to\\nfirst 1.2m from\\ntermination point\\n(Rule 4-006-4)"]
    I --> J["Beyond 1.2m:\\nuse full insulation\\ntemp rating"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
        infoCards: [
          { icon: 'thermometer', title: '<= 100A: Assume 60C', note: 'Unmarked equipment? Default to the conservative column — Rule 4-006(2a)', color: 'sky' },
          { icon: 'thermometer', title: '> 100A: Assume 75C', note: 'Larger equipment gets the 75C column — Rule 4-006(2b)', color: 'emerald' },
          { icon: 'ruler', title: 'First 1.2m Only', note: 'Termination temp rule only applies near the connection point — Rule 4-006(4)', color: 'amber' },
        ],
      },
      {
        id: '4-induced',
        title: 'Induced Voltages, Flexible Cords & Equipment Wire',
        rules: 'Rules 4-008, 4-010, 4-012, 4-014',
        explanation:
          'When large currents flow through a single conductor inside a steel (ferrous) enclosure, the alternating magnetic field induces eddy currents in the metal — heating it up like an induction cooktop. Rule 4-008 prevents this dangerous scenario.\n\nKey rules for high-current installations (> 200A):\n- Single conductors over 200A cannot enter ferrous metal boxes through INDIVIDUAL openings (Rule 4-008(3))\n- All conductors of a circuit must enter through ONE common non-ferrous or insulating plate, minimum 6 mm thick (Rule 4-008(6))\n- For mineral-insulated cables: group all current-carrying conductors together to minimize induced voltage on the sheath (Rule 4-008(7))\n\nFor cables with continuous metal sheaths (lead, aluminum, stainless steel, copper) where sheath currents cause overheating, three options:\n- Derate to 70% (Rule 4-008(1)(a))\n- Derate per manufacturer recommendations with deviation per Rule 2-030 (Rule 4-008(1)(b))\n- Install to prevent sheath current flow (Rule 4-008(1)(c))\n\nFlexible cords (Rule 4-012) use Table 12 for ampacity, with derating based on conductor count:\n- 2 or 3 conductors: 100% of Table 12\n- 4–6 conductors: 80%\n- 7–24 conductors: 70%\n- 25–42 conductors: 60%\n- 43+ conductors: 50%',
        fieldScenario:
          'You\'re installing a 400A single-phase service to a manufacturing facility. The cables terminate in a steel junction box. Rule 4-008(3) says you CANNOT bring each phase conductor through its own knockout — the single conductors carrying > 200A must NOT enter through individual openings.\n\nSolution: Use a common non-ferrous (aluminum) plate with a minimum thickness of 6 mm (Rule 4-008(6)), and bring ALL conductors through one opening. This ensures the magnetic fields cancel out instead of heating the steel box.\n\nIf you had run them through separate steel knockouts, the box could overheat, melt conductor insulation, and potentially start a fire.',
        keyPoints: [
          'Conductors > 200A: cannot enter ferrous boxes through individual openings (Rule 4-008(3))',
          'All circuit conductors through ONE common non-ferrous/insulating plate, min 6 mm thick (Rule 4-008(6))',
          'Metal sheath overheating: derate to 70%, follow manufacturer, or prevent sheath currents (Rule 4-008(1))',
          'MI cables: group all current-carrying conductors together (Rule 4-008(7))',
          'Flexible cord minimum: No. 18 AWG copper (Rule 4-010)',
          'Tinsel cord exception: No. 27 AWG permitted (Rule 4-010(a))',
          'Flexible cord ampacity: Table 12; 4–6 conductors = 80%, 7–24 = 70%, 25–42 = 60%, 43+ = 50% (Rule 4-012)',
          'Equipment wire ampacity: Table 12 (Rule 4-014)',
        ],
        diagramaMermaid: `graph TD
    A["Conductors > 200A\\nEntering Ferrous Box\\n(Rule 4-008)"] --> B{"Individual\\nopenings?"}
    B -->|Yes| C["VIOLATION\\nRule 4-008-3"]
    B -->|No| D["All conductors through\\nONE common plate"]
    D --> E["Non-ferrous or\\ninsulating plate\\nmin 6mm thick\\n(Rule 4-008-6)"]
    F["Metal Sheath\\nOverheating?"] --> G["Option 1:\\nDerate to 70%"]
    F --> H["Option 2:\\nManufacturer specs"]
    F --> I["Option 3:\\nPrevent sheath\\ncurrent flow"]
    J["Flexible Cord Derating\\n(Table 12)"] --> K["2-3 cond: 100%"]
    J --> L["4-6 cond: 80%"]
    J --> M["7-24 cond: 70%"]
    J --> N["25-42 cond: 60%"]
    J --> O["43+ cond: 50%"]
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0`,
        infoCards: [
          { icon: 'magnet', title: '> 200A = One Plate', note: 'All conductors through a single non-ferrous plate to avoid induction heating — Rule 4-008', color: 'rose' },
          { icon: 'bolt', title: 'Sheath Currents: 70%', note: 'Metal-sheathed cables overheating? Derate to 70% — Rule 4-008(1a)', color: 'amber' },
          { icon: 'wire', title: 'Flex Cord: Table 12', note: '2-3 cond = 100%, 4-6 = 80%, 7-24 = 70%, 25+ keep dropping', color: 'sky' },
        ],
      },
      {
        id: '4-neutral',
        title: 'Neutral Conductor Rules',
        rules: 'Rules 4-016, 4-018, 4-020',
        explanation:
          'The neutral is the return path for current in a circuit. Getting it wrong can cause overheating, voltage imbalances, or even fire.\n\nInsulation (Rule 4-016): Neutrals must be INSULATED (with a few exceptions in Sections 6 and 12). The insulation must have a temperature rating at least equal to the ungrounded conductors — you can\'t use a 60°C neutral with 90°C phase conductors.\n\nSizing (Rule 4-018): The neutral must carry the unbalanced load. The maximum unbalanced load = the maximum load between neutral and any one ungrounded conductor. Important nuances:\n- Electric-discharge lighting (fluorescent, HID): NO reduction in neutral size allowed\n- Non-linear loads on 3Φ 4-wire systems: NO reduction — triplen harmonics (3rd, 9th, 15th) add in the neutral\n- For other loads: 70% demand factor permitted on the unbalanced portion EXCEEDING 200A\n\nService neutral minimum: No. 10 AWG copper or No. 8 AWG aluminum — regardless of calculation.\n\nCommon neutral (Rule 4-020): One neutral may serve multiple feeder sets IF all conductors are in the same metal enclosure:\n- Up to 3 sets of 3-wire single-phase feeders, OR\n- Up to 2 sets of 4-wire three-phase feeders',
        fieldScenario:
          'You\'re designing a 600A service for a commercial building with mixed loads: 300A of fluorescent lighting and 300A of receptacle loads on a 3-phase 4-wire system.\n\nFor the lighting portion (300A): Rule 4-018(2)(a)(i) — electric-discharge lighting gets NO neutral reduction. You need the full 300A capacity.\n\nFor the receptacle portion (300A): The first 200A stays at 100%. The excess (300A - 200A = 100A) gets a 70% demand factor per Rule 4-018(2)(b): 100A × 0.70 = 70A.\n\nNeutral sizing: 300A (lighting) + 200A (first portion of receptacles) + 70A (demand-factored excess) = 570A minimum neutral capacity.',
        keyPoints: [
          'Neutrals must be insulated, with temp rating ≥ ungrounded conductors (Rule 4-016)',
          'Neutral must carry the maximum unbalanced load (Rule 4-018(1))',
          'Electric-discharge lighting: NO neutral size reduction (Rule 4-018(2)(a)(i))',
          'Non-linear loads on 3Φ 4-wire: NO neutral size reduction (Rule 4-018(2)(a)(ii))',
          '70% demand factor permitted on unbalanced load exceeding 200A (Rule 4-018(2)(b))',
          'Service neutral minimum: No. 10 AWG copper or No. 8 AWG aluminum (Rule 4-018(3)(a))',
          'Uninsulated neutral in raceway: treated as insulated with the LOWEST adjacent conductor temp rating (Rule 4-018(4))',
          'Common neutral: up to 3 sets of 3-wire 1Φ feeders OR 2 sets of 4-wire 3Φ feeders — all in same enclosure (Rule 4-020)',
        ],
        diagramaMermaid: `graph TD
    A["Neutral Sizing\\n(Rule 4-018)"] --> B["Calculate max\\nunbalanced load"]
    B --> C{"Load type?"}
    C -->|"Electric-discharge\\nlighting"| D["NO reduction\\n100% of load\\n(Rule 4-018-2a-i)"]
    C -->|"Non-linear loads\\n3P 4-wire"| E["NO reduction\\n100% of load\\n(Rule 4-018-2a-ii)"]
    C -->|"Other loads"| F{"Exceeds 200A?"}
    F -->|"First 200A"| G["100% capacity"]
    F -->|"Excess over 200A"| H["70% demand factor\\n(Rule 4-018-2b)"]
    G --> I["Add all portions\\n= Neutral size"]
    H --> I
    D --> I
    E --> I
    I --> J["Min service neutral:\\nNo. 10 Cu / No. 8 Al\\n(Rule 4-018-3a)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style H fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
        infoCards: [
          { icon: 'neutral', title: 'Must Be Insulated', note: 'Temp rating >= phase conductors — no cheap insulation on neutrals — Rule 4-016', color: 'sky' },
          { icon: 'bolt', title: 'Lighting = No Reduction', note: 'Electric-discharge and non-linear loads: full neutral size, no exceptions', color: 'rose' },
          { icon: 'fee', title: '70% Over 200A', note: 'Demand factor on the excess portion only — Rule 4-018(2b)', color: 'amber' },
          { icon: 'wire', title: 'Min: #10 Cu / #8 Al', note: 'Service neutral floor regardless of calculations — Rule 4-018(3a)', color: 'emerald' },
        ],
      },
      {
        id: '4-identification',
        title: 'Conductor Identification & Color Coding',
        rules: 'Rules 4-022, 4-024, 4-026, 4-028, 4-030, 4-032',
        explanation:
          'Color coding is the universal language of electrical wiring. Every conductor tells you what it is by its color — get it wrong and someone could die.\n\nNeutral identification (≤ No. 2 AWG): WHITE or 3 continuous white stripes (Rule 4-024)\nNeutral identification (> No. 2 AWG): Continuous white marking OR clearly marked/labeled at each end (Rule 4-026)\nMineral-insulated cable neutrals: Marked at each end during installation (Rule 4-028)\n\nGrounding/bonding: GREEN or green with yellow stripes — RESERVED exclusively, no other use (Rule 4-032(1)–(2))\n\nPhase color coding for 3-phase AC (Rule 4-032(3)(c)):\n- Phase A = RED\n- Phase B = BLACK\n- Phase C = BLUE\n- Neutral = WHITE\n\nSingle-phase (Rule 4-032(3)(b)): Black, Red, and White (for 3-wire)\n\n4-wire delta "high leg" (Rule 4-032(4)): Phase A (red) is the conductor with the higher voltage-to-ground — the "wild leg" at ~208V instead of 120V.\n\nMulti-wire branch circuits (Rule 4-030(4)): The neutral continuity must be INDEPENDENT of device connections. If you pigtail the neutral and connect devices with a separate wire, removing a receptacle won\'t break the neutral for the entire circuit.',
        fieldScenario:
          'You open a panel fed by a 4-wire delta system. Rule 4-032(4) identifies Phase A (red) as the high leg — it\'s 208V to ground instead of 120V. Rule 4-032(5) requires the panelboard to have a barriered compartment for single-phase connections, and the high-leg must be SEPARATED from that compartment.\n\nA new apprentice starts to connect a 120V receptacle circuit to the red Phase A bus bar. You stop him — connecting 120V loads to the high leg would apply 208V and destroy the equipment. The high leg is for 208V or 240V loads only.\n\nOn another job, you\'re pulling conductors from two different voltage systems into the same raceway. Rule 4-024(2) says one system uses plain white for its neutral; the second system\'s neutral must be white with an identifiable colored stripe (not green) to distinguish the two.',
        keyPoints: [
          'Neutral ≤ No. 2 AWG: white or 3 continuous white stripes (Rule 4-024(1))',
          'Neutral > No. 2 AWG: continuous white OR labeled at each end (Rule 4-026)',
          'Two systems in same raceway: one white neutral, other gets white with colored stripe — NOT green (Rule 4-024(2))',
          'MI cable neutral: marked at each end during installation (Rule 4-028)',
          'Multi-wire branch circuit: neutral continuity must be independent of device connections (Rule 4-030(4))',
          'Grounding/bonding: GREEN or green/yellow — exclusively reserved (Rule 4-032(1)–(2))',
          '3-phase AC: Red = A, Black = B, Blue = C, White = neutral (Rule 4-032(3)(c))',
          '1-phase 3-wire: Black, Red, White (Rule 4-032(3)(b))',
          '4-wire delta high leg: Phase A (red) has higher voltage-to-ground (Rule 4-032(4))',
          'Delta panelboard: barriered compartment required; high leg separated (Rule 4-032(5))',
          'Identified conductor not forming part of circuit: cut short or clearly indicate unused (Rule 4-030(3))',
        ],
        diagramaMermaid: `graph TD
    A["CEC Color Code\\n(Rule 4-032)"] --> B["3-Phase AC"]
    B --> C["Phase A = RED"]
    B --> D["Phase B = BLACK"]
    B --> E["Phase C = BLUE"]
    B --> F["Neutral = WHITE"]
    A --> G["1-Phase 3-Wire"]
    G --> H["BLACK + RED + WHITE"]
    A --> I["Grounding/Bonding"]
    I --> J["GREEN or\\nGreen/Yellow\\n(RESERVED)"]
    A --> K["Neutral ID by Size"]
    K --> L["<= No. 2 AWG:\\nWhite or 3 white stripes\\n(Rule 4-024)"]
    K --> M["> No. 2 AWG:\\nWhite or labeled\\nat each end\\n(Rule 4-026)"]
    A --> N["4-Wire Delta"]
    N --> O["Phase A RED =\\nHigh Leg 208V\\n(Rule 4-032-4)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style J fill:#065f46,stroke:#10b981,color:#e2e8f0
    style O fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
        infoCards: [
          { icon: 'palette', title: 'Phase A = Red', note: 'First phase — and the high leg in delta systems', color: 'rose' },
          { icon: 'palette', title: 'Phase B = Black', note: 'Second phase — the darkest conductor', color: 'slate' },
          { icon: 'palette', title: 'Phase C = Blue', note: 'Third phase — distinct from the first two', color: 'sky' },
          { icon: 'neutral', title: 'Neutral = White', note: 'Or 3 white stripes for <= #2 AWG — Rule 4-024', color: 'slate' },
          { icon: 'shield', title: 'Ground = Green', note: 'Green or green/yellow — exclusively reserved, never repurpose — Rule 4-032', color: 'emerald' },
          { icon: 'warning', title: 'Delta High Leg', note: 'Phase A (red) at ~208V to ground — keep separated! — Rule 4-032(4)', color: 'rose' },
        ],
      },
    ],
  },
]
