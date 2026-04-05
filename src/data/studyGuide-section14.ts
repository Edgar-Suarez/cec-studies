import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 14 — Protection and Control (CEC 2021, CSA C22.1:21, pages 160–169)
 * COMPLETE — Every rule from 14-000 to 14-704 is covered.
 * Source: PDF scan "Section 14 — Protection and control"
 */

export const section14Guide: StudyGuideSection = {
  section: '14',
  title: 'Section 14 — Protection and Control',
  description:
    'Section 14 governs overcurrent protection, ground fault protection, fuses, circuit breakers, control devices, and switches. It defines how conductors must be protected from overcurrent, the ratings and types of protective devices, the location and grouping of OCPDs, circuit breaker requirements, switch ratings and installation, panelboard protection, and ground fault protection systems. Rules 14-000 through 14-704.',
  subsections: [
    // =========================================================================
    // 1. SCOPE & GENERAL REQUIREMENTS (Rules 14-000, 14-010, 14-012, 14-014, 14-016)
    // =========================================================================
    {
      id: '14-scope-general',
      title: 'Scope & General Requirements',
      rules: 'Rules 14-000, 14-010, 14-012, 14-014, 14-016',
      explanation:
        'Section 14 applies to the protection and control of all electrical circuits and apparatus. It establishes the fundamental requirement that every installation needs both automatic protection and manual control.\n\nRule 14-000 (Scope): This Section applies to the protection and control of electrical circuits and apparatus installed in accordance with this Section and other Sections of the Code.\n\nRule 14-010 (Protective and control devices required): Every electrical apparatus and ungrounded conductor SHALL be provided with three categories of protection: (a) automatic overcurrent devices — (i) if current reaches a dangerous temperature level, and (ii) in the event of a ground fault per Rule 14-102; (b) manual control devices that safely disconnect ALL ungrounded conductors simultaneously at the point of supply — EXCEPTION: multi-wire branch circuits supplying only fixed lighting or non-split receptacles connected to neutral and one ungrounded conductor; (c) devices to open the circuit on voltage failure, when necessary.\n\nRule 14-012 (Ratings of protective and control equipment): In circuits of 750 V and less: (a) equipment required to interrupt FAULT currents must be rated for the voltage employed AND the available fault current at its terminals; (b) equipment interrupting current at OTHER than fault levels must be rated for the voltage and the current it must interrupt.\n\nRule 14-014 (Series rated combinations): A moulded case circuit breaker MAY be installed where available fault current exceeds its rating, PROVIDED: (a) it is a recognized component of a series rated combination; (b) it is on the load side of an OCPD with interrupting rating >= available fault current; (c) the line-side OCPD is as specified on the equipment; (d) the equipment is marked with a series combination interrupting rating >= available fault current; (e) the OCPDs are marked at installation — conspicuously and legibly — indicating they must be replaced ONLY with same type and rating; (f) the sum of motor full-load currents connected between the series devices does not exceed 1% of the lower-rated breaker\'s interrupting rating.\n\nRule 14-016 (Connection of devices): Protective devices shall NOT be connected in grounded conductors EXCEPT: (a) where devices simultaneously or previously disconnect all ungrounded conductors; (b) an OCPD is in a 2-wire circuit with one grounded conductor where unreliable grounding could create dangerous voltage; (c) OCPDs in a circuit connected by a 2-pole polarized or unpolarized attachment plug rated 15 A, 125 V or less.',
      fieldScenario:
        'You\'re installing a new 600A distribution panel in a commercial building. The available fault current at the panel is calculated at 42,000A. Rule 14-012(a) requires that every breaker and fuse in this panel must have an interrupting rating of at least 42,000A.\n\nThe engineer specifies a 100A moulded case breaker downstream with only a 22,000A interrupting rating. Rule 14-014 permits this IF the 100A breaker is part of a listed series rated combination with the upstream 600A device, the equipment is properly marked with the series combination rating, and the OCPDs are labeled at installation so future replacements use only the same type and rating.\n\nFor a multi-wire branch circuit feeding three non-split receptacles connected between neutral and one ungrounded conductor each, Rule 14-010(b) allows each branch to be switched individually rather than requiring simultaneous disconnection of all ungrounded conductors.',
      keyPoints: [
        'Section 14 governs protection and control of ALL electrical circuits and apparatus (Rule 14-000)',
        'Every ungrounded conductor needs: (1) automatic overcurrent protection, (2) manual disconnect, (3) undervoltage protection where needed (Rule 14-010)',
        'Manual control must disconnect ALL ungrounded conductors simultaneously at point of supply (Rule 14-010(b))',
        'Exception to simultaneous disconnect: multi-wire branch circuits for fixed lighting or non-split receptacles (Rule 14-010(b))',
        'Fault-interrupting equipment must be rated for both voltage AND available fault current at terminals (Rule 14-012(a))',
        'Non-fault interrupting equipment must be rated for voltage and current it must interrupt (Rule 14-012(b))',
        'Series rated combinations allow lower-rated breakers downstream IF all 6 conditions of Rule 14-014 are met',
        'Series rated devices must be marked at installation — replace ONLY with same type and rating (Rule 14-014(e))',
        'Motor full-load currents between series devices must not exceed 1% of lower breaker interrupting rating (Rule 14-014(f))',
        'Protective devices shall NOT be in grounded conductors unless all ungrounded conductors are also disconnected (Rule 14-016)',
        'Exception: OCPD permitted in grounded conductor of 2-wire circuit with unreliable grounding (Rule 14-016(b))',
        'Exception: OCPD permitted in 2-pole plug-connected circuit rated 15 A, 125 V or less (Rule 14-016(c))',
      ],
      diagramaMermaid: `graph TD
    A["Section 14 Scope\\n(Rule 14-000)"] --> B["Protection & Control\\nof ALL circuits"]
    B --> C["Automatic Protection\\n(Rule 14-010a)"]
    B --> D["Manual Control\\n(Rule 14-010b)"]
    B --> E["Voltage Failure\\n(Rule 14-010c)"]
    C --> F["Overcurrent:\\nDangerous temp"]
    C --> G["Ground Fault:\\nPer Rule 14-102"]
    D --> H["Disconnect ALL\\nungrounded conductors\\nsimultaneously"]
    I["Equipment Ratings\\n(Rule 14-012)"] --> J["Fault current:\\nrated >= available"]
    I --> K["Normal current:\\nrated >= interrupt"]
    L["Series Rated\\n(Rule 14-014)"] --> M["6 conditions\\nmust ALL be met"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style J fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Three Layers of Protection', note: 'Overcurrent + manual disconnect + undervoltage — Rule 14-010', color: 'sky' },
        { icon: 'bolt', title: 'Match Fault Current', note: 'Equipment interrupting rating must meet available fault current — Rule 14-012', color: 'rose' },
        { icon: 'label', title: 'Series Rated Marking', note: 'Must be marked at installation — same type/rating replacements only — Rule 14-014(e)', color: 'amber' },
        { icon: 'neutral', title: 'No Devices in Grounded Conductor', note: 'Unless all ungrounded conductors also disconnect — Rule 14-016', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 2. OVERCURRENT PROTECTION OF CONDUCTORS (Rules 14-100, 14-102, 14-104)
    // =========================================================================
    {
      id: '14-overcurrent-conductors',
      title: 'Overcurrent Protection of Conductors',
      rules: 'Rules 14-100, 14-102, 14-104',
      explanation:
        'These rules form the backbone of conductor protection — where OCPDs must be placed and how they must be sized.\n\nRule 14-100(1) (Overcurrent protection): Each ungrounded conductor SHALL be protected by an OCPD at the point where it receives its supply AND at each point where conductor size decreases. Seven exceptions exist:\n(a) Where the larger conductor\'s OCPD properly protects the smaller conductor.\n(b) Where the smaller conductor: (i) has ampacity >= combined computed loads AND >= the device it supplies; (ii) is not over 3 m long; (iii) does not extend beyond the device it supplies; (iv) is in non-ventilated raceway, armoured cable, or metal-sheathed cable.\n(c) Where the smaller conductor: (i) has ampacity >= 1/3 of the larger conductor; (ii) is suitably protected from mechanical damage, not more than 7.5 m long, and terminates in a single OCPD rated at or below its ampacity.\n(d) Where the conductor forms part of the only circuit from a transformer >750V with primary protection per Rule 26-250, terminates at a single OCPD <= its ampacity, and is protected from mechanical damage.\n(e) Where the smaller conductor is No. 14 AWG or larger in a control circuit external to the enclosure, and: (i) branch circuit OCPD is not more than 300% of the control circuit conductor ampacity; or (ii) opening the control circuit would create a hazard.\n(f) Where the smaller conductor supplies a transformer with specific ampacity, length (7.5 m max combined primary + secondary), and termination requirements.\n(g) Where the smaller conductor is supplied at not more than 750 V from an overhead/underground circuit, installed per Section 6, and terminates in service equipment.\n\nRule 14-100(2): Consumer\'s service conductors may be protected by an OCPD at the service equipment (not necessarily at the point of supply).\n\nRule 14-104 (Rating of overcurrent devices):\n(1) OCPD rating shall NOT exceed conductor ampacity, EXCEPT: (a) where exact rating is not available and load complies with Section 8, Table 13 ratings are permitted up to 800A max; (b) equipment wire, flexible cord in sizes 16, 18, 20 AWG copper, and tinsel cord are considered protected by 15A OCPDs; (c) as provided by other Rules.\n(2) Maximum OCPD ratings: (a) 15A for No. 14 AWG copper; (b) 20A for No. 12 AWG copper; (c) 30A for No. 10 AWG copper; (d) 15A for No. 12 AWG aluminum; (e) 25A for No. 10 AWG aluminum.',
      fieldScenario:
        'You\'re feeding a subpanel from a 200A main panel. The feeder is 3/0 AWG copper. At the subpanel, a 30A branch circuit taps off using No. 10 AWG copper. Rule 14-100(1) says you need an OCPD at the tap point UNLESS an exception applies.\n\nIf the No. 10 AWG tap is less than 3 m long, has ampacity >= the load it feeds, does not extend beyond the subpanel, and is in a raceway — exception (b) lets you omit the OCPD at the tap.\n\nAlternatively, if the tap has ampacity >= 1/3 of the feeder\'s ampacity, is protected from damage, is no more than 7.5 m long, and terminates at a single 30A breaker — exception (c) applies.\n\nFor conductor sizing, you have a circuit with 25A calculated load. No. 10 AWG copper has 30A ampacity. Rule 14-104(1) says the OCPD cannot exceed 30A. Rule 14-104(2)(c) confirms No. 10 AWG copper can have a maximum 30A OCPD. If the load were 45A, you\'d need No. 6 AWG minimum, and if a standard 45A breaker doesn\'t exist, Table 13 lets you use the next standard size up — but never above 800A.',
      keyPoints: [
        'Each ungrounded conductor must be protected at the point it receives supply AND where size decreases (Rule 14-100(1))',
        'Exception (b): tap conductor <= 3 m, ampacity >= load, in raceway — no OCPD needed at tap (Rule 14-100(1)(b))',
        'Exception (c): tap conductor ampacity >= 1/3 of feeder, <= 7.5 m, terminates at single OCPD (Rule 14-100(1)(c))',
        'Exception (e): control circuit conductor No. 14+ with branch OCPD <= 300% of its ampacity (Rule 14-100(1)(e))',
        'Exception (f): transformer tap — combined primary + secondary conductor max 7.5 m (Rule 14-100(1)(f))',
        'Service conductors may be protected at service equipment rather than point of supply (Rule 14-100(2))',
        'OCPD rating shall NOT exceed conductor ampacity (Rule 14-104(1))',
        'If exact OCPD rating unavailable, use next standard size from Table 13 — max 800A (Rule 14-104(1)(a))',
        'Flexible cord 16, 18, 20 AWG copper considered protected by 15A OCPD (Rule 14-104(1)(b))',
        'Max OCPD: 15A for No. 14 AWG Cu, 20A for No. 12 AWG Cu, 30A for No. 10 AWG Cu (Rule 14-104(2))',
        'Max OCPD: 15A for No. 12 AWG Al, 25A for No. 10 AWG Al (Rule 14-104(2))',
      ],
      diagramaMermaid: `graph TD
    A["Conductor Receives Supply"] --> B{"Size decreases?"}
    B -->|Yes| C["OCPD Required\\nat tap point"]
    B -->|No| D["Protected by\\nupstream OCPD"]
    C --> E{"Exception applies?"}
    E -->|"(b) <= 3m tap"| F["No OCPD needed\\nif in raceway,\\nampacity >= load"]
    E -->|"(c) 1/3 rule"| G["No OCPD needed\\nif <= 7.5m,\\nterminates at OCPD"]
    E -->|No exception| H["Install OCPD\\nat tap point"]
    I["OCPD Sizing\\n(Rule 14-104)"] --> J["Rating <= conductor\\nampacity"]
    J --> K["No. 14 Cu = 15A max\\nNo. 12 Cu = 20A max\\nNo. 10 Cu = 30A max"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style K fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Protect at Every Tap', note: 'OCPD required where conductor size decreases — Rule 14-100(1)', color: 'sky' },
        { icon: 'ruler', title: '3m and 7.5m Tap Rules', note: 'Two key exceptions for tap conductors — Rule 14-100(1)(b)(c)', color: 'amber' },
        { icon: 'bolt', title: 'Never Exceed Ampacity', note: 'OCPD rating must not exceed conductor ampacity — Rule 14-104(1)', color: 'rose' },
        { icon: 'label', title: 'AWG Maximums', note: '14 Cu=15A, 12 Cu=20A, 10 Cu=30A, 12 Al=15A, 10 Al=25A — Rule 14-104(2)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 3. LOCATION & GROUPING OF OVERCURRENT DEVICES (Rules 14-106 to 14-114)
    // =========================================================================
    {
      id: '14-location-grouping',
      title: 'Location & Grouping of Overcurrent Devices',
      rules: 'Rules 14-106, 14-108, 14-110, 14-112, 14-114',
      explanation:
        'These rules dictate WHERE overcurrent devices must be placed, HOW they must be enclosed, and restrictions on parallel use.\n\nRule 14-106 (Location and grouping): OCPDs SHALL be located in readily accessible places (except as provided elsewhere) and SHALL be grouped where practicable.\n\nRule 14-108 (Enclosure of overcurrent devices):\n(1) OCPDs shall be enclosed in cut-out boxes or cabinets UNLESS: they form part of an assembly providing equivalent protection, OR they are mounted as part of switchboards/panelboards/controllers in rooms free from easily ignitable material and dampness, accessible only to authorized persons.\n(2) Circuit breaker operating handles must be accessible WITHOUT opening any door or cover that gives access to live parts.\n\nRule 14-110 (Grouping at distribution centre):\n(1) Where the number of lighting branch circuits from a common enclosure exceeds: (a) two in a single-phase 3-wire system, or (b) three in a three-phase 4-wire system — the OCPDs SHALL be in a panelboard.\n(2) Where a panelboard is not required and a fusible switch is used, all OCPDs shall have the SAME rating.\n(3) Each ungrounded conductor of a multi-wire branch circuit counts as a SEPARATE circuit for this rule.\n\nRule 14-112 (Overcurrent devices in parallel):\n(1) OCPDs shall NOT be connected in parallel in circuits of 750 V or less.\n(2) Exception: semiconductor fuses with interrupting ratings >= 100,000A at 750 V or less, and circuit breakers rated 750 V or less, may be connected in parallel if FACTORY ASSEMBLED in parallel as a single unit.\n\nRule 14-114 (Supplementary protectors): Supplementary overcurrent protection shall NOT be used as a substitute for branch circuit OCPDs or in place of branch circuit protective devices specified in this Section.',
      fieldScenario:
        'You\'re wiring a commercial kitchen with 8 lighting branch circuits from a single-phase 3-wire system. Rule 14-110(1)(a) says that since you have more than 2 lighting branch circuits, all OCPDs MUST be in a panelboard — you cannot use individual fusible switches scattered around.\n\nThe building owner wants to save money by putting the panel in a storage room. Rule 14-106 requires the panel to be in a readily accessible location. If the storage room is always accessible and not blocked by stored items, it may qualify. But if items routinely block access, find a better location.\n\nRule 14-108(2) is critical: the breaker handles must be operable WITHOUT opening any door that exposes live parts. A dead-front panel meets this — you flip breakers through the outer door, and only the inner cover exposes live busbars.\n\nA colleague suggests paralleling two 200A fuses to get 400A capacity. Rule 14-112(1) says NO — you cannot parallel OCPDs in circuits of 750V or less unless they are factory-assembled as a single unit.',
      keyPoints: [
        'OCPDs must be in readily accessible locations and grouped where practicable (Rule 14-106)',
        'OCPDs must be enclosed in cut-out boxes or cabinets unless in protected assembly or authorized-access rooms (Rule 14-108(1))',
        'Circuit breaker handles must be accessible WITHOUT opening doors exposing live parts (Rule 14-108(2))',
        'More than 2 lighting circuits (1-phase 3-wire) or 3 (3-phase 4-wire) from one enclosure = panelboard required (Rule 14-110(1))',
        'Where panelboard not required and fusible switch used, all OCPDs must have SAME rating (Rule 14-110(2))',
        'Each ungrounded conductor of a multi-wire branch circuit counts as a separate circuit (Rule 14-110(3))',
        'OCPDs shall NOT be connected in parallel in circuits 750V or less (Rule 14-112(1))',
        'Exception: factory-assembled parallel semiconductor fuses (>= 100,000A) or breakers permitted (Rule 14-112(2))',
        'Supplementary protectors are NOT a substitute for branch circuit OCPDs (Rule 14-114)',
      ],
      diagramaMermaid: `graph TD
    A["OCPD Location\\n(Rule 14-106)"] --> B["Readily Accessible\\n+ Grouped"]
    C["Enclosures\\n(Rule 14-108)"] --> D["Cut-out boxes\\nor cabinets"]
    C --> E["Breaker handles:\\naccessible without\\nopening live parts door"]
    F["Grouping at\\nDistribution Centre\\n(Rule 14-110)"] --> G{"> 2 circuits\\n(1ph-3w)?"}
    G -->|Yes| H["PANELBOARD\\nrequired"]
    G -->|No| I["Fusible switch OK\\nall same rating"]
    J["Parallel OCPDs\\n(Rule 14-112)"] --> K["NOT permitted\\nat 750V or less"]
    K --> L["Exception: factory\\nassembled units only"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0
    style K fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'box', title: 'Readily Accessible', note: 'OCPDs must be easy to reach and grouped — Rule 14-106', color: 'sky' },
        { icon: 'lock', title: 'No Live Parts Exposed', note: 'Breaker handles accessible without exposing live busbars — Rule 14-108(2)', color: 'emerald' },
        { icon: 'warning', title: 'Panelboard Threshold', note: '> 2 lighting circuits (1ph) or > 3 (3ph) = panelboard required — Rule 14-110', color: 'amber' },
        { icon: 'shield', title: 'No Parallel OCPDs', note: 'Only factory-assembled parallel units are permitted — Rule 14-112', color: 'rose' },
      ],
    },

    // =========================================================================
    // 4. FUSES — TYPES & RATINGS (Rules 14-200 to 14-208)
    // =========================================================================
    {
      id: '14-fuse-types',
      title: 'Fuses — Types & Ratings',
      rules: 'Rules 14-200, 14-202, 14-204, 14-206, 14-208',
      explanation:
        'These rules classify fuses and define their application limits.\n\nRule 14-200 (Time-delay and low-melting-point fuses):\n(1) Plug and cartridge fuses of low-melting-point types, including time-delay fuses that also have low melting points, SHALL be marked to be readily distinguishable.\n(2) Marking: letter "P" for low-melting-point types WITHOUT time-delay; letter "D" for time-delay fuses.\n\nRule 14-202 (Use of plug fuses): Plug fuses and fuseholders shall NOT be used in circuits exceeding 125 V between conductors, EXCEPT in circuits supplied from a system with a grounded neutral and no conductor operating at more than 150 volts-to-ground.\n\nRule 14-204 (Non-interchangeable fuses):\n(1) Where plug fuses are used in branch circuits, they SHALL be of a type that is non-interchangeable with a fuse of larger rating.\n(2) Where alterations or additions are made to an existing fusible panelboard, ALL plug fuses SHALL be made non-interchangeable, where practicable.\n\nRule 14-206 (Fuseholders for plug fuses): Fuseholders for plug fuses shall be of the "covered" type where readily accessible to unauthorized persons.\n\nRule 14-208 (Rating of fuses):\n(1) Plug fuses: rated at NOT more than 30A.\n(2) Standard cartridge fuses: not used in capacities larger than 600A or in circuits at more than 600V.\n(3) Fuses per Rule 14-212 (b), (c), and (d) used at 750V or less: NOT limited in current rating.\n(4) Fuses for circuits more than 750V: NOT limited in current or voltage rating.',
      fieldScenario:
        'You\'re replacing fuses in an older residential panel that still uses plug-type fuses. The homeowner has been putting 30A fuses in a 15A branch circuit to "stop them from blowing." Rule 14-204(1) requires non-interchangeable plug fuses in branch circuits — the correct approach is to install Type S fuse adapters so that only a 15A fuse physically fits in a 15A circuit.\n\nSince this is a residential panel accessible to the homeowner, Rule 14-206 requires "covered" type fuseholders. The fuse must be letter "P" marked if it is a low-melting-point type, or "D" if it is time-delay (Rule 14-200).\n\nFor a commercial 600V, 3-phase system, plug fuses are NOT permitted since the circuit exceeds 125V between conductors (Rule 14-202). You must use cartridge fuses. But standard cartridge fuses max out at 600A and 600V (Rule 14-208(2)). For higher ratings, you need Class J, L, or similar high-interrupting-capacity fuses per Rule 14-212(b), which are not limited in current rating.',
      keyPoints: [
        'Low-melting-point fuses without time-delay: marked with letter "P" (Rule 14-200(2))',
        'Time-delay fuses: marked with letter "D" (Rule 14-200(2))',
        'Plug fuses and fuseholders shall not be used in circuits exceeding 125V between conductors (Rule 14-202)',
        'Exception: plug fuses allowed in grounded neutral systems with no conductor > 150V-to-ground (Rule 14-202)',
        'Plug fuses in branch circuits must be non-interchangeable with larger ratings (Rule 14-204(1))',
        'When altering existing fusible panelboard, make ALL plug fuses non-interchangeable where practicable (Rule 14-204(2))',
        'Fuseholders for plug fuses must be "covered" type where accessible to unauthorized persons (Rule 14-206)',
        'Plug fuses: max 30A (Rule 14-208(1))',
        'Standard cartridge fuses: max 600A and 600V (Rule 14-208(2))',
        'High-interrupting fuses per Rule 14-212(b)(c)(d) at 750V or less: no current limit (Rule 14-208(3))',
        'Fuses for circuits > 750V: no current or voltage limit (Rule 14-208(4))',
      ],
      diagramaMermaid: `graph TD
    A["Fuse Types\\n(Rule 14-200)"] --> B["'P' = Low-melting-point\\n(no time-delay)"]
    A --> C["'D' = Time-delay"]
    D["Plug Fuses\\n(Rules 14-202/204)"] --> E["Max 125V between\\nconductors"]
    D --> F["Must be non-\\ninterchangeable\\nin branch circuits"]
    D --> G["Max 30A\\n(Rule 14-208-1)"]
    H["Cartridge Fuses\\n(Rule 14-208)"] --> I["Standard: max\\n600A / 600V"]
    H --> J["HRC types:\\nno current limit\\nat 750V or less"]
    K["Fuseholders\\n(Rule 14-206)"] --> L["'Covered' type\\nif accessible to\\nunauthorized persons"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style I fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'label', title: '"P" and "D" Markings', note: 'P = low-melting-point, D = time-delay — Rule 14-200', color: 'sky' },
        { icon: 'lock', title: 'Non-Interchangeable', note: 'Plug fuses in branch circuits must prevent oversizing — Rule 14-204', color: 'emerald' },
        { icon: 'shield', title: 'Covered Fuseholders', note: 'Required where accessible to unauthorized persons — Rule 14-206', color: 'amber' },
        { icon: 'bolt', title: '30A Plug Fuse Max', note: 'Plug fuses shall not exceed 30A — Rule 14-208(1)', color: 'rose' },
      ],
    },

    // =========================================================================
    // 5. FUSES — USE & APPLICATION (Rules 14-210, 14-212)
    // =========================================================================
    {
      id: '14-fuse-use',
      title: 'Fuses — Use & Application',
      rules: 'Rules 14-210, 14-212',
      explanation:
        'These rules specify proper fuse usage and the classification system for fuses.\n\nRule 14-210 (Fuses and fuseholders): Only fuses and fuseholders of PROPER RATING shall be used. No bridging or short-circuiting of either component shall be permitted. This is a fundamental safety rule — never bypass a fuse.\n\nRule 14-212 (Use of fuses): Defines which fuse classes can be used and for what purpose. Classes C, CA, CB, CC, G, H, J, K, L, R, T, HRCI-MISC, and HRCII-MISC are permitted as follows:\n(a) Class H fuses: where a standard interrupting rating of 10,000A symmetrical or less is required.\n(b) Class CA, CB, CC, G, J, K, L, R, T, or HRCI-MISC: have higher interrupting ratings and may be used INSTEAD of Class H fuses.\n(c) Class C and HRCII-MISC fuses: permitted ONLY for overcurrent protection where circuit overload protection is provided by OTHER means (they don\'t provide overload protection on their own).\n(d) Class C and HRCII-MISC fuses: permitted where the Code allows fuses greater than the load ampere rating, PROVIDED the fuse rating does not exceed 85% of the maximum permitted rating.',
      fieldScenario:
        'A maintenance worker finds a blown fuse in a motor starter and wraps it with copper wire to "get things running." This is a direct violation of Rule 14-210 — no bridging or short-circuiting of fuses is permitted. The fuse must be replaced with one of the proper rating.\n\nYou\'re specifying fuses for a 480V distribution panel with 50,000A available fault current. Class H fuses only have a 10,000A interrupting rating (Rule 14-212(a)), so they are NOT adequate. You need Class J, R, or L fuses that have higher interrupting ratings (Rule 14-212(b)).\n\nFor a motor circuit where the motor starter provides overload protection, you can use Class C or HRCII-MISC fuses for short-circuit protection only (Rule 14-212(c)). But if the Code allows oversized fuses (like motor branch circuit protection), those Class C fuses cannot exceed 85% of the maximum permitted rating (Rule 14-212(d)).',
      keyPoints: [
        'Only fuses and fuseholders of PROPER rating shall be used (Rule 14-210)',
        'No bridging or short-circuiting of fuses or fuseholders — EVER (Rule 14-210)',
        'Class H fuses: standard 10,000A interrupting rating (Rule 14-212(a))',
        'Class CA, CB, CC, G, J, K, L, R, T, HRCI-MISC: higher interrupting ratings, can replace Class H (Rule 14-212(b))',
        'Class C and HRCII-MISC: overcurrent protection ONLY when overload protection is provided by other means (Rule 14-212(c))',
        'Class C and HRCII-MISC in oversized applications: must not exceed 85% of maximum permitted rating (Rule 14-212(d))',
        'The 85% derating applies where the Code permits fuses larger than the load ampere rating (Rule 14-212(d))',
        'High-rupture-capacity fuses (HRC) are essential when fault current exceeds 10,000A (Rule 14-212(b))',
      ],
      diagramaMermaid: `graph TD
    A["Fuse Selection\\n(Rule 14-212)"] --> B{"Available fault\\ncurrent?"}
    B -->|"<= 10,000A"| C["Class H\\npermitted"]
    B -->|"> 10,000A"| D["Class J, K, L,\\nR, T, or HRCI-MISC\\nrequired"]
    D --> E["Can replace Class H\\nin any application"]
    F{"Overload protection\\nby other means?"} -->|Yes| G["Class C or\\nHRCII-MISC OK\\n(short-circuit only)"]
    F -->|No| H["Class C/HRCII-MISC\\nNOT permitted"]
    G --> I{"Code allows\\noversized fuses?"}
    I -->|Yes| J["Max 85% of\\npermitted rating\\n(Rule 14-212d)"]
    K["NEVER\\n(Rule 14-210)"] --> L["Bridge a fuse"]
    K --> M["Short-circuit\\na fuseholder"]
    style K fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Never Bypass a Fuse', note: 'No bridging or short-circuiting — EVER — Rule 14-210', color: 'rose' },
        { icon: 'bolt', title: 'Class H = 10,000A', note: 'Standard interrupting rating — use HRC types for higher fault current', color: 'sky' },
        { icon: 'shield', title: 'Class C/HRCII Limits', note: 'Short-circuit only — need separate overload protection — Rule 14-212(c)', color: 'amber' },
        { icon: 'ruler', title: '85% Derating', note: 'Class C/HRCII-MISC in oversized applications — Rule 14-212(d)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 6. CIRCUIT BREAKERS (Rules 14-300 to 14-308)
    // =========================================================================
    {
      id: '14-circuit-breakers',
      title: 'Circuit Breakers',
      rules: 'Rules 14-300, 14-302, 14-304, 14-306, 14-308',
      explanation:
        'These rules govern the construction, operation, and special requirements for circuit breakers.\n\nRule 14-300 (Circuit breakers, general):\n(1) Circuit breakers SHALL be of the trip-free type. This means the breaker cannot be held closed against an overcurrent condition — if it trips, it trips regardless of handle position.\n(2) Indications shall be provided at the breaker AND at the point of operation to show whether the circuit breaker is open or closed.\n\nRule 14-302 (Construction of circuit breakers): Breakers protecting apparatus or ungrounded conductors shall open ALL ungrounded conductors by manual operation of a single handle AND by overcurrent action. EXCEPTIONS: (a) single-pole breakers permitted by Rule 14-010(b) for multi-wire branch circuits; (b) in branch circuits from a 3-wire grounded neutral system, two single-pole breakers may be used instead of a 2-pole breaker PROVIDED: (i) handles are interlocked with a manufacturer-provided device so all ungrounded conductors open when any handle is operated; (ii) each breaker has voltage ratings not less than the multi-wire branch circuit voltage.\n\nRule 14-304 (Non-tamperable circuit breakers): Branch circuit breakers, unless accessible only to authorized persons, shall be designed so that any alteration of tripping current or time by the user is DIFFICULT. Users should not be able to easily change trip settings.\n\nRule 14-306 (Tripping elements): Circuit breakers shall be equipped with tripping elements as specified in Table 25.\n\nRule 14-308 (Battery control power):\n(1) When a circuit breaker\'s overcurrent element is powered by a battery, the battery voltage SHALL be continuously monitored.\n(2) If battery voltage drops below operating threshold: (a) the breaker SHALL automatically trip; OR (b) an alarm shall operate continuously until voltage is restored.\n(3) A warning notice shall be placed on or adjacent to the breaker indicating that battery control power must be available before the breaker is closed.',
      fieldScenario:
        'You\'re inspecting a panel and find a breaker with its handle held in the ON position using tape. Someone did this because the breaker kept tripping. Rule 14-300(1) requires trip-free breakers — even if held ON, the mechanism must be able to trip internally. The tape is a serious violation and fire hazard. Remove it and investigate why the breaker trips.\n\nFor a 120/240V residential panel, you need a 2-pole breaker for a 240V dryer circuit. Rule 14-302 requires all ungrounded conductors to open with a single handle operation. If using two single-pole breakers on a 3-wire grounded neutral system, Rule 14-302(b) requires factory-provided handle ties — field-improvised ties using wire or tape are NOT acceptable.\n\nIn a large industrial switchgear room, the main breaker uses a battery-powered shunt trip. Rule 14-308(1) requires continuous battery monitoring. If the battery fails, Rule 14-308(2) says the breaker must either auto-trip or sound a continuous alarm. A warning sign must be posted per Rule 14-308(3).',
      keyPoints: [
        'All circuit breakers must be TRIP-FREE — cannot be held closed against overcurrent (Rule 14-300(1))',
        'Breakers must indicate open/closed status at the breaker AND point of operation (Rule 14-300(2))',
        'Breakers must open ALL ungrounded conductors by single handle AND by overcurrent (Rule 14-302)',
        'Two single-pole breakers on 3-wire grounded neutral: handles must be interlocked with manufacturer device (Rule 14-302(b))',
        'Each breaker in a handle-tied pair must have voltage rating >= multi-wire branch circuit voltage (Rule 14-302(b)(ii))',
        'Branch circuit breakers must be non-tamperable — altering trip settings must be difficult (Rule 14-304)',
        'Tripping elements must comply with Table 25 (Rule 14-306)',
        'Battery-powered overcurrent elements: battery voltage must be CONTINUOUSLY monitored (Rule 14-308(1))',
        'Low battery: breaker must auto-trip OR continuous alarm must sound (Rule 14-308(2))',
        'Warning notice required: battery power must be available before closing the breaker (Rule 14-308(3))',
      ],
      diagramaMermaid: `graph TD
    A["Circuit Breakers\\n(Rule 14-300)"] --> B["TRIP-FREE\\ntype required"]
    A --> C["Open/Closed\\nindication required"]
    D["Construction\\n(Rule 14-302)"] --> E["Single handle opens\\nALL ungrounded\\nconductors"]
    D --> F["Exception: 2 single-pole\\nwith factory handle ties\\non 3-wire system"]
    G["Non-tamperable\\n(Rule 14-304)"] --> H["Users cannot easily\\nalter trip settings"]
    I["Battery Power\\n(Rule 14-308)"] --> J["Continuous\\nmonitoring"]
    J --> K{"Battery low?"}
    K -->|Option A| L["Auto-trip\\nbreaker"]
    K -->|Option B| M["Continuous\\nalarm"]
    I --> N["Warning notice:\\nbattery needed\\nbefore closing"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#065f46,stroke:#10b981,color:#e2e8f0
    style L fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Trip-Free Required', note: 'Breaker must trip even if handle is held ON — Rule 14-300(1)', color: 'sky' },
        { icon: 'bolt', title: 'Single Handle Operation', note: 'All ungrounded conductors must open together — Rule 14-302', color: 'emerald' },
        { icon: 'lock', title: 'Non-Tamperable', note: 'Users cannot easily change trip current or time — Rule 14-304', color: 'amber' },
        { icon: 'warning', title: 'Battery Monitoring', note: 'Continuous monitoring — auto-trip or alarm on low voltage — Rule 14-308', color: 'rose' },
        { icon: 'label', title: 'Warning Notice', note: 'Battery power must be available before closing — Rule 14-308(3)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 7. CONTROL DEVICES — RATINGS & REQUIREMENTS (Rules 14-400 to 14-416)
    // =========================================================================
    {
      id: '14-control-devices',
      title: 'Control Devices — Ratings & Requirements',
      rules: 'Rules 14-400, 14-402, 14-404, 14-406, 14-408, 14-410, 14-412, 14-414, 14-416',
      explanation:
        'These rules govern manual control devices — disconnects, switches, and their installation requirements.\n\nRule 14-400 (Rating of control devices): Control devices shall have ratings suitable for the connected load. With the exception of isolating switches, they must be capable of safely ESTABLISHING and INTERRUPTING the load. Isolating switches are for de-energizing only — never under load.\n\nRule 14-402 (Disconnecting means for fused circuits): Fused circuits SHALL have disconnecting means integral with or adjacent to the fuseholders so all live fuse-mounting parts can be made dead. EXCEPTIONS: (a) instrument/control circuits on switchboards at 250V or less; (b) primary circuits of voltage transformers (750V or less) on switchboards; (c) a circuit with only one ungrounded conductor using a plug fuse.\n\nRule 14-404 (Control devices ahead of overcurrent devices): Control devices used with OCPDs shall be connected so the OCPDs are DEAD when the control device is open, except where impracticable.\n\nRule 14-406 (Location of control devices):\n(1) Control devices (except isolating switches) shall be readily accessible.\n(2) Remotely controlled devices are considered readily accessible if the means of controlling them is readily accessible.\n\nRule 14-408 (Indication of positions): Manually operable control devices shall indicate ON and OFF positions, unless the application makes this unnecessary.\n\nRule 14-410 (Enclosure of control devices): Unless located or guarded to prevent access by unauthorized persons and fire hazards, control devices shall have all current-carrying parts in enclosures of metal or other fire-resisting material.\n\nRule 14-412 (Grouping): Control devices for feeders and branch circuits shall be grouped where practicable.\n\nRule 14-414 (Connection to different circuits):\n(1) Equipment supplied by two or more sources: (a) a single disconnect that isolates ALL ungrounded conductors shall be integral with or adjacent to the equipment; OR (b) each supply circuit shall have its own disconnect, and they shall be grouped together.\n(2) Control circuits from beyond the equipment at 150V-to-ground or less: disconnect at the equipment is not required if bare live parts are protected by barriers.\n(3) Where multiple disconnects exist per (1)(b): warning signs shall be on each disconnect stating all must be opened for complete de-energization.\n(4) Where barriers are used per (2): warning sign required indicating multiple sources of supply.\n\nRule 14-416 (Control devices for switching only): Control devices performing only switching functions shall disconnect ALL ungrounded conductors when in the OFF position, except as permitted by other Rules.',
      fieldScenario:
        'You\'re installing a disconnect switch for a fused motor starter. Rule 14-404 says the disconnect must be wired so that when you open it, the fuses are DEAD — the disconnect goes on the line side. This way, you can safely change fuses with the disconnect open.\n\nA rooftop HVAC unit is fed by two sources — normal power and an emergency generator through an automatic transfer switch. Rule 14-414(1) requires either a single disconnect that kills both sources, or separate disconnects for each source grouped together at the unit. If separate, Rule 14-414(3) requires warning signs on each: "CAUTION: Multiple sources of supply — open ALL disconnects before servicing."\n\nThe building manager uses a small toggle switch to control a 40A heating circuit. Rule 14-400 requires the switch to be rated for the connected load. A standard 15A toggle switch on a 40A circuit is a fire hazard and a code violation.',
      keyPoints: [
        'Control devices must be rated for the connected load and capable of making/breaking it (Rule 14-400)',
        'Isolating switches are the exception — for de-energizing only, not load interruption (Rule 14-400)',
        'Fused circuits must have disconnecting means to make fuse-mounting parts dead (Rule 14-402)',
        'Exceptions: switchboard instrument circuits <= 250V, VT primaries <= 750V, single plug-fuse circuits (Rule 14-402)',
        'Control devices ahead of OCPDs: OCPDs must be dead when control is open (Rule 14-404)',
        'Control devices (except isolating switches) must be readily accessible (Rule 14-406(1))',
        'Remotely controlled devices: accessible if the remote control is accessible (Rule 14-406(2))',
        'ON/OFF indication required on manual control devices (Rule 14-408)',
        'Current-carrying parts must be in metal or fire-resisting enclosures (Rule 14-410)',
        'Feeder and branch circuit controls shall be grouped where practicable (Rule 14-412)',
        'Equipment with multiple sources: single disconnect for all, OR grouped individual disconnects with warning signs (Rule 14-414)',
        'Warning signs required when multiple disconnects serve same equipment (Rule 14-414(3))',
        'Control-only switches must disconnect ALL ungrounded conductors in OFF position (Rule 14-416)',
      ],
      diagramaMermaid: `graph TD
    A["Control Devices\\n(Rule 14-400)"] --> B["Rated for\\nconnected load"]
    A --> C["Isolating switches:\\nde-energize only"]
    D["Fused Circuits\\n(Rule 14-402)"] --> E["Disconnect means\\nintegral or adjacent\\nto fuseholders"]
    F["Wiring Order\\n(Rule 14-404)"] --> G["Control device\\nLINE side →\\nOCPD LOAD side"]
    H["Multiple Sources\\n(Rule 14-414)"] --> I{"Single disconnect\\nor grouped?"}
    I -->|Single| J["Isolates ALL\\nsources at once"]
    I -->|Grouped| K["Each source has\\nown disconnect"]
    K --> L["WARNING SIGNS\\non each disconnect"]
    M["Requirements"] --> N["Readily accessible\\n(Rule 14-406)"]
    M --> O["ON/OFF indication\\n(Rule 14-408)"]
    M --> P["Grouped where\\npracticable\\n(Rule 14-412)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style L fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Rated for the Load', note: 'Control devices must safely make and break the connected load — Rule 14-400', color: 'sky' },
        { icon: 'bolt', title: 'Dead When Open', note: 'OCPDs must be de-energized when control device is open — Rule 14-404', color: 'emerald' },
        { icon: 'warning', title: 'Multiple Source Warning', note: 'Warning signs required when grouped disconnects serve one equipment — Rule 14-414(3)', color: 'rose' },
        { icon: 'label', title: 'ON/OFF Indication', note: 'All manual control devices must show their position — Rule 14-408', color: 'amber' },
        { icon: 'box', title: 'Group Controls', note: 'Feeder and branch circuit controls grouped where practicable — Rule 14-412', color: 'violet' },
      ],
    },

    // =========================================================================
    // 8. SWITCHES — INSTALLATION & RATINGS (Rules 14-500 to 14-514)
    // =========================================================================
    {
      id: '14-switches',
      title: 'Switches — Installation & Ratings',
      rules: 'Rules 14-500, 14-502, 14-504, 14-506, 14-508, 14-510, 14-512, 14-514',
      explanation:
        'These rules specify how switches must be installed, mounted, and rated for different loads.\n\nRule 14-500 (Operation of switches): Knife switches and control devices, unless inaccessible to unauthorized persons, shall be constructed so they can be switched to OFF without exposing live parts.\n\nRule 14-502 (Mounting of knife switches):\n(1) Single-throw knife switches shall be mounted with bases in a vertical plane.\n(2) Mounted so gravity will NOT tend to close them — blades must hang open, not fall closed.\n(3) Double-throw knife switches may be mounted for vertical or horizontal throw. If vertical, a positive locking device or stop is required to keep blades in the open position, unless the switch is not intended to be left open.\n\nRule 14-504 (Maximum rating of switches): Knife switches rated more than 600A at 750V or less shall be used ONLY as isolating switches (unless of special design).\n\nRule 14-506 (Connection of switches): Single-throw switches, breakers, or magnetic switches shall be connected so blades/moving contacts are DEAD when the device is open. EXCEPTIONS: (a) branch-circuit breakers with sealed live parts where line/load can be interchanged; (b) sectionalizing switchgear with caution notice; (c) liquid-immersed switches with caution notice; (d) switches designed with all live parts inaccessible when open; (e) magnetic switches preceded by a breaker or manual switch in the same enclosure or immediately adjacent, marked to indicate it controls the magnetic switch circuit.\n\nRule 14-508 (Rating of AC/DC switches):\n(a) Non-inductive loads (not tungsten lamps): ampere rating >= load.\n(b) Tungsten-filament lamp loads: must be "T" rated, EXCEPT in dwelling units, private hospital/hotel rooms (not public areas), controlling fixed luminaires in one room or continuous hallway, and rated at minimum 10A/125V or 5A/250V (or 5A/125V, 2A/250V for 4-way).\n(c) Canopy switches for tungsten lamps: "T" rated or ampere rating >= 3x the load.\n(d) Inductive loads: ampere rating >= 2x the load.\n\nRule 14-510 (General-use AC switches):\n(1) Must have ampere rating >= current rating of the load for: (a) tungsten lamps at 120V max; (b) non-inductive loads; (c) inductive loads at >= 75% power factor lag.\n(2) Current rating not less than 15A with voltage rating of 120V or 277V.\n(3) Must be adapted for mounting in flush or surface boxes or be self-enclosed.\n\nRule 14-512 (347V AC switches):\n(1) Used ONLY for non-inductive loads (not tungsten lamps) and inductive loads at >= 75% PF lagging.\n(2) Current rating >= 15A at 347V.\n(3) Must NOT be readily interchangeable with switches in Rules 14-508 and 14-510.\n\nRule 14-514 (Switches in circuits > 300V-to-ground): Switches per Rules 14-508 and 14-512 shall NOT be ganged or grouped in the same enclosure UNLESS the enclosure provides permanently installed barriers.',
      fieldScenario:
        'You\'re installing a knife switch in a workshop. Rule 14-502 says mount it vertically with the blades hanging DOWN when open — gravity should tend to open the switch, not close it. If you mount it upside down, the blades could fall closed and energize a circuit unexpectedly.\n\nFor a 480V motor circuit with a magnetic contactor, Rule 14-506(e) says the contactor must be preceded by a breaker or manual switch in the same enclosure or immediately adjacent, marked to show it controls the contactor circuit. This ensures the contactor\'s load-side contacts are dead when the upstream device is open.\n\nYou\'re wiring a commercial space with 347V lighting. The switches must comply with Rule 14-512 — rated at least 15A/347V, and they must NOT be interchangeable with standard 120V or 277V switches. Rule 14-514 adds that if 347V switches and 277V switches are in the same area, they cannot share an enclosure unless permanently installed barriers separate them.',
      keyPoints: [
        'Knife switches must allow switching to OFF without exposing live parts (Rule 14-500)',
        'Single-throw knife switches: mount vertically, gravity must NOT tend to close them (Rule 14-502(1)(2))',
        'Double-throw knife switches: vertical throw requires positive locking device in open position (Rule 14-502(3))',
        'Knife switches > 600A at 750V or less: isolating use ONLY (Rule 14-504)',
        'Switches must be connected so moving contacts are DEAD when open (Rule 14-506)',
        'AC/DC switches for tungsten lamps: must be "T" rated except in specific residential settings (Rule 14-508(b))',
        'Canopy switches for tungsten lamps: "T" rated or ampere rating >= 3x load (Rule 14-508(c))',
        'AC/DC switches for inductive loads: ampere rating >= 2x the load (Rule 14-508(d))',
        'General-use AC switches: minimum 15A at 120V or 277V (Rule 14-510(2))',
        '347V switches: non-inductive and inductive >= 75% PF only — NOT for tungsten lamps (Rule 14-512(1))',
        '347V switches must NOT be interchangeable with 120V/277V switches (Rule 14-512(3))',
        'Circuits > 300V-to-ground: switches NOT ganged in same enclosure unless barriers installed (Rule 14-514)',
      ],
      diagramaMermaid: `graph TD
    A["Knife Switches\\n(Rule 14-502)"] --> B["Mount vertically"]
    A --> C["Gravity opens,\\nnot closes"]
    A --> D["> 600A = isolating\\nuse only (Rule 14-504)"]
    E["Switch Ratings\\n(Rule 14-508)"] --> F["Non-inductive:\\namps >= load"]
    E --> G["Tungsten lamps:\\n'T' rated"]
    E --> H["Inductive loads:\\namps >= 2x load"]
    E --> I["Canopy switches:\\n'T' or >= 3x load"]
    J["347V Switches\\n(Rule 14-512)"] --> K["Non-inductive and\\ninductive >= 75% PF"]
    J --> L["NOT interchangeable\\nwith 120V/277V"]
    J --> M["NOT ganged with\\nother voltages\\nunless barriers\\n(Rule 14-514)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style L fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Gravity Opens, Not Closes', note: 'Single-throw knife switches must not fall closed — Rule 14-502(2)', color: 'sky' },
        { icon: 'bolt', title: '> 600A = Isolating Only', note: 'Large knife switches cannot interrupt load — Rule 14-504', color: 'rose' },
        { icon: 'sun', title: '"T" Rated for Tungsten', note: 'Tungsten lamp switches need "T" rating or dwelling exception — Rule 14-508(b)', color: 'amber' },
        { icon: 'lock', title: '347V Non-Interchangeable', note: '347V switches must not fit in 120V/277V boxes — Rule 14-512(3)', color: 'emerald' },
        { icon: 'shield', title: 'Barriers for > 300V', note: 'Different voltage switches need barriers in same enclosure — Rule 14-514', color: 'violet' },
      ],
    },

    // =========================================================================
    // 9. PROTECTION OF RECEPTACLES & SPECIAL CIRCUITS (Rules 14-600 to 14-612)
    // =========================================================================
    {
      id: '14-receptacles-special',
      title: 'Protection of Receptacles & Special Circuits',
      rules: 'Rules 14-600, 14-602, 14-604, 14-606, 14-608, 14-610, 14-612',
      explanation:
        'These rules cover receptacle protection, panelboard protection, remote control circuits, cycling loads, and transfer equipment.\n\nRule 14-600 (Protection of receptacles): Receptacles shall NOT be connected to a branch circuit having OCPD rated or set at MORE than the ampere rating of the receptacle, except as permitted by other Sections. A 15A receptacle on a 20A circuit is only permitted if the specific Section allows it.\n\nRule 14-602 (Additional control devices not necessary): Portable appliances need NOT have additional control devices if: (a) rated at not more than 1500 W; AND (b) provided with cord connectors, attachment plugs, or other means for ready disconnection.\n\nRule 14-604 (Outlet control from more than one point): Where switches control outlets from multiple points (3-way and 4-way switching), ALL switching shall be done ONLY in the ungrounded conductor. Never switch the neutral in a multi-point control circuit.\n\nRule 14-606 (Panelboard overcurrent protection):\n(1) Every panelboard SHALL be protected on the supply side by OCPDs rated not greater than the panelboard rating. EXCEPTION: panelboards where more than 90% of the OCPDs supply feeders or motor branch circuits.\n(2) The supply-side protection may be in the primary of a transformer, provided the panelboard rating in amperes >= OCPD rating x (primary voltage / secondary voltage).\n\nRule 14-608 (Remote control circuits): Remote control circuits shall be arranged so they can be conveniently disconnected from their source at the controller. Alternative: disconnecting the apparatus from supply may also disconnect the remote control circuit.\n\nRule 14-610 (Protection of circuits supplying cycling loads): Where fuses protect circuits with MORE than 50% cycling load (thermostatic heaters, clothes dryers, water heaters), they SHALL be time-delay ("D") or low-melting-point ("P") fuses per Rule 14-200, or HRC fuses per Rule 14-212(b). In dwelling units, the Rule 14-212(b) fuses must also have low-melting-point characteristics.\n\nRule 14-612 (Transfer equipment for standby power): Transfer equipment shall PREVENT inadvertent interconnection of normal and standby sources in ANY operation of the transfer equipment.',
      fieldScenario:
        'You\'re wiring a commercial kitchen with multiple 20A receptacle circuits. The chef wants to plug a 15A-rated receptacle into a 20A circuit. Rule 14-600 says the receptacle OCPD must not exceed the receptacle rating — so a 15A receptacle on a 20A circuit violates this rule unless another Section specifically permits it (such as Section 26 for specific receptacle configurations).\n\nA building has electric baseboard heaters on thermostats, and the heating load is 70% of the circuit capacity. Since cycling loads exceed 50%, Rule 14-610 requires time-delay ("D") or low-melting-point ("P") fuses — standard fast-acting fuses would nuisance-trip from the inrush cycling.\n\nYou\'re installing a generator transfer switch. Rule 14-612 absolutely prohibits any possibility of connecting the generator and utility simultaneously. The transfer mechanism must be mechanically interlocked so that the normal and standby sources can NEVER be paralleled, even momentarily during a transfer operation.',
      keyPoints: [
        'Receptacles: OCPD rating must not exceed receptacle ampere rating (Rule 14-600)',
        'Portable appliances <= 1500W with plug disconnection do not need additional control devices (Rule 14-602)',
        'Multi-point switching must switch ONLY the ungrounded conductor — never the neutral (Rule 14-604)',
        'Every panelboard must have supply-side OCPD rated <= panelboard rating (Rule 14-606(1))',
        'Exception: panelboards where > 90% of OCPDs supply feeders or motor circuits (Rule 14-606(1))',
        'Panelboard protection may be in transformer primary if ampere ratio is maintained (Rule 14-606(2))',
        'Remote control circuits must be disconnectable at the controller (Rule 14-608)',
        'Cycling loads > 50% of circuit: use time-delay "D" or low-melting-point "P" fuses (Rule 14-610)',
        'In dwelling units, HRC fuses for cycling loads must also have low-melting-point characteristics (Rule 14-610)',
        'Transfer equipment must PREVENT interconnection of normal and standby sources — in ANY operation (Rule 14-612)',
      ],
      diagramaMermaid: `graph TD
    A["Receptacle Protection\\n(Rule 14-600)"] --> B["OCPD rating <=\\nreceptacle rating"]
    C["Panelboard Protection\\n(Rule 14-606)"] --> D["Supply-side OCPD\\n<= panelboard rating"]
    D --> E{"90%+ feeders\\nor motor circuits?"}
    E -->|Yes| F["Exception:\\nno main OCPD needed"]
    E -->|No| G["Main OCPD\\nrequired"]
    H["Cycling Loads\\n(Rule 14-610)"] --> I{"> 50% of\\ncircuit?"}
    I -->|Yes| J["Time-delay 'D'\\nor low-melting 'P'\\nfuses required"]
    I -->|No| K["Standard fuses\\npermitted"]
    L["Transfer Equipment\\n(Rule 14-612)"] --> M["PREVENT interconnection\\nof normal & standby\\nALWAYS"]
    N["Multi-point Control\\n(Rule 14-604)"] --> O["Switch only\\nungrounded conductor"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style M fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style J fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Match Receptacle Rating', note: 'OCPD cannot exceed receptacle ampere rating — Rule 14-600', color: 'sky' },
        { icon: 'shield', title: 'Panelboard Main Breaker', note: 'Supply-side OCPD required unless 90%+ feeders/motors — Rule 14-606', color: 'emerald' },
        { icon: 'thermometer', title: 'Cycling Load Fuses', note: 'Over 50% cycling = time-delay or low-melting-point fuses — Rule 14-610', color: 'amber' },
        { icon: 'warning', title: 'Never Parallel Sources', note: 'Transfer equipment must prevent ANY interconnection — Rule 14-612', color: 'rose' },
        { icon: 'neutral', title: 'Switch the Hot Only', note: 'Multi-point control: never switch the neutral — Rule 14-604', color: 'violet' },
      ],
    },

    // =========================================================================
    // 10. GROUND FAULT PROTECTION (Rules 14-102, 14-700, 14-702, 14-704)
    // =========================================================================
    {
      id: '14-ground-fault',
      title: 'Ground Fault Protection',
      rules: 'Rules 14-102, 14-700, 14-702, 14-704',
      explanation:
        'These rules establish when ground fault protection (GFP) is mandatory, how it must function, and requirements for solid-state protective devices.\n\nRule 14-102 (Ground fault protection):\n(1) GFP shall de-energize all normally ungrounded conductors of a faulted circuit downstream from points marked with an asterisk in Diagram 3:\n(a) Solidly grounded systems > 150V-to-ground, < 750V phase-to-phase, and 1000A or more.\n(b) Solidly grounded systems <= 150V-to-ground and 2000A or more.\n(2) Maximum GFP setting: 1200A pickup, maximum 1 second time delay for ground fault currents >= 3000A (except per Subrule 8).\n(3) Circuit ampere rating is determined by: (a) largest fuse that can be installed in a fusible disconnect; (b) highest trip setting of the actual overcurrent device in a breaker; (c) ampacity of main conductors feeding the points in Diagram 3 when no main disconnect is provided.\n(4) GFP may be provided by: (a) an OCPD with integral GFP; (b) a ground fault tripping system (sensor + relay + auxiliary trip mechanism); (c) other means.\n(5) Sensors shall be: (a) vectorial totalizing type — sum all conductor currents including grounded conductor, excluding ground return path current; (b) sensors in the ground return path; (c) a combination.\n(6) Vectorial sensors (5)(a) can be installed anywhere between supply transformer and downstream side of the disconnect in Diagram 3, but if downstream, placed as close as practicable to load terminals.\n(7) Ground return path sensors (5)(b) shall be on each neutral-to-ground connection. Where neutral is grounded at both transformer and switching centre, the transformer sensor is not required if GFP relay pickup does not exceed 1000A.\n(8) Coordinated GFP: Where two or more GFP devices are in series, upstream device settings may exceed Subrule 2) values if the final downstream device complies with Subrule 2).\n\nRule 14-700 (Restriction of use): Solid-state devices shall NOT be used as isolating switches or disconnecting means.\n\nRule 14-702 (Disconnecting means required):\n(1) Supplementary disconnecting means required where failure of a solid-state device could transfer energy between two or more power sources.\n(2) The disconnect must prevent energy transfer between sources when open, and shall be: (a) integral to the solid-state device; or (b) installed as close as practicable to, and in sight of, the device.\n\nRule 14-704 (Warning notices required): Warning notices shall be placed:\n(a) On the supplementary disconnect per Rule 14-702: (i) stating it must be opened on failure of any power source or when servicing components; (ii) warning that both line and load terminals may be energized when open.\n(b) On all other upstream disconnects: warning that an alternative power source exists and the supplementary disconnect must also be opened to prevent feedback.',
      fieldScenario:
        'You\'re designing a 2000A, 600V, 3-phase, solidly grounded service for a large commercial building. The system voltage is 347/600V — that is more than 150V-to-ground. Rule 14-102(1)(a) requires GFP because the system exceeds 150V-to-ground and is 1000A or more.\n\nThe GFP must be set to pick up at no more than 1200A with a maximum 1-second delay for ground faults of 3000A or more (Rule 14-102(2)). You choose a zero-sequence sensor (vectorial totalizing type) around all phase and neutral conductors per Rule 14-102(5)(a).\n\nDownstream, you have a 1200A sub-distribution panel that also requires GFP. For coordination, Rule 14-102(8) allows the upstream 2000A GFP to have settings exceeding the 1200A/1s limits, provided the downstream 1200A device meets those limits.\n\nA solar inverter (solid-state device) feeds back to the grid. Rule 14-700 says the inverter cannot serve as the disconnect. Rule 14-702 requires a supplementary disconnect, and Rule 14-704 requires warning labels on BOTH the supplementary disconnect AND upstream disconnects indicating alternative power source exists.',
      keyPoints: [
        'GFP required: solidly grounded > 150V-to-ground, < 750V, >= 1000A (Rule 14-102(1)(a))',
        'GFP required: solidly grounded <= 150V-to-ground, >= 2000A (Rule 14-102(1)(b))',
        'GFP settings: max 1200A pickup, max 1 second delay at >= 3000A fault current (Rule 14-102(2))',
        'Circuit rating = largest fuse installable, or highest breaker trip setting, or main conductor ampacity (Rule 14-102(3))',
        'GFP provided by: integral OCPD, sensor/relay/trip system, or other means (Rule 14-102(4))',
        'Vectorial sensors totalize all conductor currents excluding ground return path (Rule 14-102(5)(a))',
        'Ground return sensors required on each neutral-to-ground connection (Rule 14-102(7))',
        'Coordinated GFP: upstream may exceed limits if final downstream device complies (Rule 14-102(8))',
        'Solid-state devices shall NOT be used as isolating switches or disconnecting means (Rule 14-700)',
        'Supplementary disconnect required where solid-state failure could transfer energy between sources (Rule 14-702)',
        'Disconnect must be integral to or in sight of the solid-state device (Rule 14-702(2))',
        'Warning notices on supplementary disconnect: open on failure, both terminals may be energized (Rule 14-704(a))',
        'Warning notices on upstream disconnects: alternative source exists, supplementary disconnect must be opened (Rule 14-704(b))',
      ],
      diagramaMermaid: `graph TD
    A["Ground Fault Protection\\n(Rule 14-102)"] --> B{"> 150V-to-ground\\n< 750V phase-phase?"}
    B -->|Yes| C{">= 1000A?"}
    C -->|Yes| D["GFP REQUIRED"]
    B -->|No| E{"<= 150V-to-ground?"}
    E -->|Yes| F{">= 2000A?"}
    F -->|Yes| D
    D --> G["Max 1200A pickup\\nMax 1s at >= 3000A"]
    H["Solid-State Devices\\n(Rules 14-700/702)"] --> I["NOT an isolating\\nswitch or disconnect"]
    H --> J["Supplementary\\ndisconnect required"]
    J --> K["Integral or\\nin sight of device"]
    K --> L["WARNING NOTICES\\non all disconnects\\n(Rule 14-704)"]
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style L fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'GFP Threshold: 1000A', note: '> 150V-to-ground systems need GFP at 1000A+ — Rule 14-102(1)(a)', color: 'sky' },
        { icon: 'shield', title: '1200A / 1 Second', note: 'Maximum GFP settings for fault currents >= 3000A — Rule 14-102(2)', color: 'emerald' },
        { icon: 'warning', title: 'Solid-State ≠ Disconnect', note: 'Inverters and SCRs cannot serve as disconnecting means — Rule 14-700', color: 'rose' },
        { icon: 'label', title: 'Warning Notices Required', note: 'On ALL disconnects — alternative source and feedback risk — Rule 14-704', color: 'amber' },
        { icon: 'magnet', title: 'Vectorial Sensors', note: 'Sum all currents excluding ground return path — Rule 14-102(5)(a)', color: 'violet' },
      ],
    },
  ],
}
