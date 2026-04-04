import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 4 — Conductors (CEC 2021, CSA C22.1:21)
 * COMPLETE — Every rule from 4-000 to 4-034 is covered.
 * Source: PDF scan of CEC Section 4
 */

export const section4Guide: StudyGuideSection = {
  section: '4',
  title: 'Section 4 — Conductors',
  description:
    'Section 4 is the backbone of wire sizing in the CEC. It covers how to determine the maximum current a conductor can safely carry (ampacity), how to select the correct table, when and how to apply correction factors, termination temperature limits, neutral conductor sizing and identification, and the complete color coding system for Canadian electrical installations. Rules 4-000 through 4-034.',
  subsections: [
    // =========================================================================
    // 1. SCOPE & CONDUCTOR SIZING (Rules 4-000, 4-002)
    // =========================================================================
    {
      id: '4-scope-sizing',
      title: 'Scope & Conductor Sizing',
      rules: 'Rules 4-000, 4-002',
      explanation:
        'Rule 4-000 defines the scope of Section 4. This section applies to conductors used in services, feeders, branch circuits, and photovoltaic source and output circuits. It is the primary reference for wire sizing in the entire CEC.\n\nRule 4-002 establishes the minimum conductor sizes allowed. For copper conductors, the minimum size is #14 AWG. For aluminum conductors, the minimum size is #12 AWG. These minimums apply to most general wiring situations.\n\nHowever, there are important exceptions to these minimums. Flexible cords are governed by Rule 4-010 and may use smaller conductors — as small as #18 AWG for general use and #27 AWG for tinsel cord. Equipment wire used inside equipment enclosures is governed by Rule 4-014 and may also be smaller than #14 AWG. Control circuits that are part of listed equipment may use smaller conductors as specified in their equipment standards.\n\nThese exceptions recognize that certain applications — portable appliances, factory-wired equipment internals, and low-energy control circuits — operate under different conditions than permanent building wiring and can safely use smaller conductors.\n\nThe minimum sizing rules are a floor, not a ceiling. The actual conductor size for any installation must be determined by calculating the load and selecting a conductor with sufficient ampacity using the tables and correction factors in Rule 4-004.',
      fieldScenario:
        'You are wiring a new commercial kitchen with a 200A service, feeders to subpanels, and branch circuits for equipment. All of this falls under Section 4 per Rule 4-000.\n\nFor a 15A general-purpose branch circuit, you reach for #14 AWG copper — the minimum per Rule 4-002. Your apprentice asks why the client\'s dishwasher has #18 AWG wire inside it. You explain that factory-wired equipment internals are exempt under Rule 4-014.\n\nThe client wants to use aluminum wire for the 100A feeder to save money. That\'s fine, but you remind them that the minimum aluminum size is #12 AWG per Rule 4-002. For a 100A feeder, you would actually need much larger aluminum — but the minimum rule ensures nobody tries to use a tiny aluminum conductor for even the smallest circuit.\n\nA solar installer is connecting a PV array on the roof. Rule 4-000 confirms that photovoltaic source and output circuits also fall under Section 4 for conductor sizing.',
      keyPoints: [
        'Section 4 applies to conductors for services, feeders, branch circuits, and PV source/output circuits (Rule 4-000)',
        'Minimum copper conductor size is #14 AWG (Rule 4-002)',
        'Minimum aluminum conductor size is #12 AWG (Rule 4-002)',
        'Exception: Flexible cords may be smaller — #18 AWG general, #27 AWG tinsel (Rule 4-010)',
        'Exception: Equipment wire inside enclosures may be smaller than #14 AWG (Rule 4-014)',
        'Exception: Control circuits in listed equipment may use smaller conductors per equipment standards',
        'Minimum size is a floor — actual size must be based on calculated ampacity (Rules 4-004 ff.)',
      ],
      diagramaMermaid: `graph TD
    A["Section 4 Scope\\n(Rule 4-000)"] --> B["Services"]
    A --> C["Feeders"]
    A --> D["Branch Circuits"]
    A --> E["PV Source &\\nOutput Circuits"]
    F["Minimum Conductor Sizes\\n(Rule 4-002)"] --> G["Copper: #14 AWG min"]
    F --> H["Aluminum: #12 AWG min"]
    G --> I{"Exceptions?"}
    H --> I
    I -->|"Flex cord"| J["#18 AWG Cu\\n(Rule 4-010)"]
    I -->|"Tinsel cord"| K["#27 AWG\\n(Rule 4-010)"]
    I -->|"Equipment wire"| L["Per Rule 4-014"]
    I -->|"Control circuits"| M["Per equipment\\nstandards"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style I fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Copper Minimum', note: '#14 AWG — the smallest copper for permanent wiring — Rule 4-002', color: 'sky' },
        { icon: 'wire', title: 'Aluminum Minimum', note: '#12 AWG — aluminum must be one size larger minimum — Rule 4-002', color: 'amber' },
        { icon: 'ruler', title: 'Scope Covers All', note: 'Services, feeders, branch circuits, PV circuits — Rule 4-000', color: 'emerald' },
        { icon: 'warning', title: 'Exceptions Exist', note: 'Flex cord, equipment wire, and control circuits may go smaller', color: 'rose' },
      ],
    },

    // =========================================================================
    // 2. AMPACITY TABLES — COPPER (Rule 4-004(1))
    // =========================================================================
    {
      id: '4-ampacity-copper',
      title: 'Ampacity Tables — Copper',
      rules: 'Rule 4-004(1)',
      explanation:
        'Rule 4-004(1) specifies which ampacity tables to use for copper conductors, depending on the installation method.\n\nTable 1 applies to copper conductors in FREE AIR — single conductors supported with spacing of at least 100% of the cable diameter between adjacent conductors. Free air means the conductor has unrestricted airflow around it, which provides superior cooling. This gives the highest ampacity values.\n\nTable 2 applies to copper conductors installed in RACEWAY (conduit, EMT, etc.) with 1 to 3 current-carrying conductors. The raceway restricts heat dissipation, so ampacities are lower than free air.\n\nWhen there are 4 or more current-carrying conductors in a raceway, you start with Table 2 values and then apply the correction factors from Table 5C. This is because more conductors in an enclosed space generate more heat, and each conductor must be derated.\n\nFor UNDERGROUND installations of conductors sized 1/0 AWG and larger, the code provides specialized tables: Tables D8A through D11B, which correspond to installation Diagrams D8 through D11. These diagrams show specific burial configurations — direct burial, in duct banks, in conduit — and the tables give ampacities that account for earth thermal resistivity and mutual heating between conductors.\n\nFor underground conductors smaller than 1/0 AWG, or for configurations not covered by the D-series diagrams, the ampacity must be calculated using IEEE 835 (Standard Power Cable Ampacity Tables).\n\nFor SHIELDED high-voltage cables rated 5 kV to 46 kV, Tables D17A through D17N provide ampacity values. These tables account for the additional heating from dielectric losses in high-voltage insulation systems.\n\nSelecting the correct table is the FIRST and most critical step in any conductor sizing calculation. Using the wrong table will produce an incorrect ampacity that could lead to an oversized (wasteful) or undersized (dangerous) conductor.',
      fieldScenario:
        'You are sizing a 200A copper feeder from the main service to a subpanel 30 meters away.\n\nScenario A — The feeder runs through EMT conduit along the ceiling of a mechanical room. There are 3 current-carrying conductors (2 hots + neutral carrying harmonic load). You use Table 2 for copper in raceway, 1-3 conductors. A #3/0 AWG THWN-2 at 75 degrees C gives you 200A.\n\nScenario B — The same feeder runs as individual conductors on a cable tray with full spacing. You use Table 1 (free air). A #2/0 AWG gives you 220A — one size smaller works because of better cooling.\n\nScenario C — The feeder runs underground in PVC conduit from the building to an outdoor subpanel. The conductors are 1/0 AWG and larger, so you consult Diagram D8 (direct buried, single conduit) and use Table D8A for the ampacity. The earth acts as a heat sink but also traps heat, so underground ampacities differ from above-ground tables.\n\nScenario D — You are installing a 15 kV shielded cable feed to a transformer. You use Table D17 series for the appropriate voltage and installation method.',
      keyPoints: [
        'Table 1: Copper in free air, single conductors with >=100% spacing (Rule 4-004(1))',
        'Table 2: Copper in raceway with 1 to 3 current-carrying conductors (Rule 4-004(1))',
        'Table 2 + Table 5C correction: Copper in raceway with 4 or more current-carrying conductors (Rule 4-004(1))',
        'Tables D8A-D11B: Underground copper 1/0 AWG and larger, per Diagrams D8-D11 (Rule 4-004(1))',
        'IEEE 835: Underground copper smaller than 1/0 AWG or configurations not in D-series tables (Rule 4-004(1))',
        'Tables D17A-D17N: Shielded copper cables rated 5 kV to 46 kV (Rule 4-004(1))',
        'Selecting the correct table is the FIRST step — wrong table = wrong ampacity (Rule 4-004(1))',
      ],
      diagramaMermaid: `graph TD
    A["Copper Conductor\\nAmpacity\\n(Rule 4-004-1)"] --> B{"Installation\\nMethod?"}
    B -->|"Free Air\\n>=100% spacing"| C["TABLE 1\\nHighest ampacity"]
    B -->|"Raceway\\n1-3 conductors"| D["TABLE 2"]
    B -->|"Raceway\\n4+ conductors"| E["TABLE 2\\n× Table 5C"]
    B -->|"Underground\\n>=1/0 AWG"| F["Tables D8A-D11B\\n(Diagrams D8-D11)"]
    B -->|"Underground\\n<1/0 AWG"| G["IEEE 835\\nCalculation"]
    B -->|"Shielded HV\\n5-46 kV"| H["Tables D17A-D17N"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C fill:#065f46,stroke:#10b981,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Table 1 — Free Air', note: 'Best cooling, highest ampacity — single conductors with full spacing', color: 'emerald' },
        { icon: 'box', title: 'Table 2 — Raceway', note: '1-3 current-carrying conductors in conduit — lower ampacity', color: 'sky' },
        { icon: 'warning', title: '4+ in Raceway', note: 'Table 2 values MULTIPLIED by Table 5C derating factors', color: 'rose' },
        { icon: 'ruler', title: 'Underground D-Tables', note: 'Tables D8A-D11B for 1/0 AWG+ per specific burial diagrams', color: 'amber' },
        { icon: 'bolt', title: 'HV Shielded', note: 'Tables D17A-D17N for 5-46 kV shielded cables', color: 'violet' },
      ],
    },

    // =========================================================================
    // 3. AMPACITY TABLES — ALUMINUM & COUNTING RULES (Rules 4-004(2)-(6))
    // =========================================================================
    {
      id: '4-ampacity-aluminum-counting',
      title: 'Ampacity Tables — Aluminum & Counting Rules',
      rules: 'Rules 4-004(2) to 4-004(6)',
      explanation:
        'Rule 4-004(2) specifies the ampacity tables for ALUMINUM conductors. The structure mirrors copper exactly:\n\n- Table 3: Aluminum in free air (single conductors with >=100% spacing)\n- Table 4: Aluminum in raceway with 1 to 3 current-carrying conductors\n- Table 4 + Table 5C: Aluminum in raceway with 4 or more current-carrying conductors\n- Tables D8A-D11B: Underground aluminum 1/0 AWG and larger (same D-series tables, but use the aluminum columns)\n- IEEE 835: Underground aluminum not covered by D-series\n- Tables D17A-D17N: Shielded aluminum cables 5-46 kV\n\nAluminum has roughly 61% the conductivity of copper, so for the same ampacity, aluminum conductors must be larger. This is why the minimum aluminum size is #12 AWG vs #14 AWG for copper.\n\nRules 4-004(3) through 4-004(6) establish the critical COUNTING RULES — which conductors count as "current-carrying" for the purpose of applying derating factors:\n\nRule 4-004(3): A neutral conductor that carries ONLY the unbalanced current of a circuit does NOT count as a current-carrying conductor. In a balanced 3-phase, 4-wire system, the neutral carries little to no current and generates negligible heat, so it is excluded from the conductor count.\n\nRule 4-004(4): However, if a neutral carries current that IS part of the load (such as in a circuit supplying non-linear loads like LED drivers, VFDs, or computers that produce triplen harmonics), it DOES count as a current-carrying conductor. Triplen harmonics (3rd, 9th, 15th, etc.) add on the neutral rather than cancel, making the neutral carry significant current.\n\nRule 4-004(5): Where a neutral is a supported conductor (for example, a messenger cable that physically supports other conductors), its ampacity is determined from Tables 36A or 36B, not from the standard ampacity tables.\n\nRule 4-004(6): The bonding conductor (equipment grounding conductor) is NEVER counted as a current-carrying conductor. It carries current only during fault conditions, not during normal operation.',
      fieldScenario:
        'You are pulling wire for a 3-phase, 4-wire feeder to an office floor panel through a 2-inch EMT conduit. The feeder has 3 phase conductors, 1 neutral, and 1 bonding conductor — 5 wires total.\n\nThe office has mostly computers, LED lighting, and VFDs for the HVAC. These are non-linear loads that produce triplen harmonics. Per Rule 4-004(4), the neutral counts as current-carrying because it carries harmonic currents. Per Rule 4-004(6), the bonding conductor never counts.\n\nSo your count is: 3 phases + 1 neutral = 4 current-carrying conductors. Since that exceeds 3, you must use Table 4 (aluminum in raceway) multiplied by the Table 5C derating factor for 4 conductors (which is 0.65).\n\nContrast this with a feeder to a balanced resistive heating load. The neutral carries only unbalanced current. Per Rule 4-004(3), the neutral does NOT count. Your count is 3 current-carrying conductors, and you use Table 4 without any Table 5C derating.\n\nThe difference in conductor sizing between these two scenarios is significant — counting rules directly impact the wire size and cost of the installation.',
      keyPoints: [
        'Table 3: Aluminum in free air, single conductors with >=100% spacing (Rule 4-004(2))',
        'Table 4: Aluminum in raceway with 1 to 3 current-carrying conductors (Rule 4-004(2))',
        'Table 4 + Table 5C: Aluminum in raceway with 4 or more current-carrying conductors (Rule 4-004(2))',
        'Underground aluminum uses same D-series tables (D8A-D11B) as copper, but aluminum columns (Rule 4-004(2))',
        'Neutral carrying ONLY unbalanced current does NOT count as current-carrying (Rule 4-004(3))',
        'Neutral carrying load current (e.g., triplen harmonics from non-linear loads) DOES count (Rule 4-004(4))',
        'Supported neutral (messenger cable): use Tables 36A/36B for ampacity (Rule 4-004(5))',
        'Bonding conductor is NEVER counted as current-carrying (Rule 4-004(6))',
      ],
      diagramaMermaid: `graph TD
    A["Aluminum Ampacity\\n(Rule 4-004-2)"] --> B["Table 3: Free Air"]
    A --> C["Table 4: Raceway 1-3"]
    A --> D["Table 4 × 5C: Raceway 4+"]
    E["Counting Rules"] --> F{"What type\\nof conductor?"}
    F -->|"Unbalanced neutral"| G["DO NOT count\\n(Rule 4-004-3)"]
    F -->|"Neutral with\\nharmonic load"| H["COUNT it\\n(Rule 4-004-4)"]
    F -->|"Supported neutral\\n(messenger)"| I["Tables 36A/36B\\n(Rule 4-004-5)"]
    F -->|"Bonding\\nconductor"| J["NEVER count\\n(Rule 4-004-6)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0
    style H fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style J fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'neutral', title: 'Unbalanced Neutral', note: 'Does NOT count — carries only imbalance current — Rule 4-004(3)', color: 'emerald' },
        { icon: 'warning', title: 'Harmonic Neutral', note: 'DOES count — triplen harmonics add up on neutral — Rule 4-004(4)', color: 'rose' },
        { icon: 'wire', title: 'Bonding = Never', note: 'Equipment grounding conductor never counts — Rule 4-004(6)', color: 'sky' },
        { icon: 'ruler', title: 'Messenger Neutral', note: 'Supported conductor uses Tables 36A/36B — Rule 4-004(5)', color: 'amber' },
        { icon: 'bolt', title: 'Al vs Cu', note: 'Aluminum uses Tables 3/4 — same structure as Cu Tables 1/2', color: 'violet' },
      ],
    },

    // =========================================================================
    // 4. CORRECTION FACTORS — AMBIENT, SPACING & BUNDLING (Rules 4-004(7)-(13))
    // =========================================================================
    {
      id: '4-correction-ambient-bundling',
      title: 'Correction Factors — Ambient, Spacing & Bundling',
      rules: 'Rules 4-004(7) to 4-004(13)',
      explanation:
        'The base ampacity tables assume ideal conditions: 30 degrees C ambient temperature, adequate spacing, and limited numbers of conductors. Rules 4-004(7) through 4-004(13) provide correction factors when real-world conditions differ.\n\nRule 4-004(7) — Ambient Temperature Above 30 degrees C: When the surrounding air temperature exceeds 30 degrees C, use the correction factors in Table 5A. Higher ambient means less temperature differential for heat dissipation, reducing the allowable current. Each insulation type (60, 75, 90 degrees C) has its own correction factor.\n\nRule 4-004(8) — Spacing Less Than 25%: When cables in free air are maintained with LESS THAN 25% of cable diameter spacing (but not touching), and there are 4 or fewer cables, apply the correction factors from Table 5B. This accounts for reduced airflow when cables are close together but not bundled.\n\nRule 4-004(9) — Bundled Cables or Non-Ventilated Trays: When 4 or more cables are bundled together, or when cables are in non-ventilated cable trays, apply the correction factors from Table 5C. Table 5C is the most commonly applied derating factor in commercial and industrial work. It applies based on the total number of current-carrying conductors.\n\nRule 4-004(9) also covers ventilated cable trays with spacing between 25% and 100% — in that case, use Table 5D instead.\n\nEXEMPTIONS from Table 5C: Auxiliary gutters containing 30 or fewer current-carrying conductors are exempt. Conductors entering equipment enclosures solely for the purpose of termination are also exempt.\n\nRule 4-004(10) — MI Cable Exception: When 4 or fewer non-jacketed mineral-insulated (MI) cables are supported on a messenger with spacing of at least 2.15 times the cable diameter, Table 5B does not apply. The metallic sheath of MI cable dissipates heat effectively enough with this spacing.\n\nRule 4-004(11) — More Than 4 Cables Close Together: When MORE than 4 cables are maintained with less than 25% spacing, Table 5C must be used instead of Table 5B. Table 5B only applies to groups of 4 or fewer.\n\nRule 4-004(12) — Short Bundled Lengths: When cables are bundled for a distance of less than 600 mm (about 2 feet), the derating factors of Table 5C do not apply. This covers situations like cables passing through a wall penetration or grouped briefly at a junction box.\n\nRule 4-004(13) — Multi-Conductor Cables Touching: When multi-conductor cables touch each other over a distance of more than 600 mm, Table 5C derating applies. Even though each cable has its own jacket, sustained contact over long distances traps heat between them.',
      fieldScenario:
        'You are running cables in a mechanical room that averages 40 degrees C due to boilers and steam pipes.\n\nFirst, apply Table 5A for the 40 degrees C ambient. For 90 degrees C insulation (THWN-2), the correction factor is 0.87. A #3/0 THWN-2 copper normally rated 200A at 75 degrees C in raceway becomes: 200A x 0.87 = 174A.\n\nIn the cable tray, you have 12 single-conductor cables in a non-ventilated tray. Table 5C applies: for 10-24 conductors, the factor is 0.50. Each cable\'s ampacity is halved.\n\nAt one point, the cables pass through a fire-rated wall sleeve that bundles them together for about 400 mm. Rule 4-004(12) says since this bundled distance is less than 600 mm, no additional Table 5C derating is needed for the transition.\n\nYour apprentice asks about the 6 MC cables lying side by side in a gutter with 28 other conductors. Since the total is 34 (over 30), the auxiliary gutter exemption does not apply and Table 5C must be used.',
      keyPoints: [
        'Table 5A: Correction for ambient temperature above 30 degrees C — each insulation rating has its own factor (Rule 4-004(7))',
        'Table 5B: Correction for cables with less than 25% spacing, 4 or fewer cables in free air (Rule 4-004(8))',
        'Table 5C: Correction for 4+ bundled cables OR cables in non-ventilated trays (Rule 4-004(9))',
        'Table 5D: Correction for ventilated trays with 25-100% spacing (Rule 4-004(9))',
        'Exempt from Table 5C: Auxiliary gutters with 30 or fewer conductors (Rule 4-004(9))',
        'Exempt from Table 5C: Conductors entering equipment solely for termination (Rule 4-004(9))',
        'MI cable exception: 4 or fewer non-jacketed MI cables on messenger with >=2.15x spacing — no Table 5B (Rule 4-004(10))',
        'More than 4 cables with <25% spacing must use Table 5C, not Table 5B (Rule 4-004(11))',
        'Bundled distance less than 600 mm — Table 5C does NOT apply (Rule 4-004(12))',
        'Multi-conductor cables touching for more than 600 mm — Table 5C DOES apply (Rule 4-004(13))',
      ],
      diagramaMermaid: `graph TD
    A["Correction Factors\\n(Rules 4-004-7 to 13)"] --> B{"Ambient\\n>30°C?"}
    B -->|Yes| C["Apply Table 5A\\n(Rule 4-004-7)"]
    B -->|No| D["No ambient\\ncorrection"]
    A --> E{"Cable\\nSpacing?"}
    E -->|"<25%, <=4 cables"| F["Table 5B\\n(Rule 4-004-8)"]
    E -->|"<25%, >4 cables"| G["Table 5C\\n(Rule 4-004-11)"]
    E -->|"25-100%\\nventilated tray"| H["Table 5D\\n(Rule 4-004-9)"]
    E -->|">=100%"| I["No spacing\\ncorrection"]
    A --> J{"Bundled\\nlength?"}
    J -->|"<600 mm"| K["NO derating\\n(Rule 4-004-12)"]
    J -->|">=600 mm"| L["Table 5C applies\\n(Rule 4-004-13)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style K fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'thermometer', title: 'Table 5A — Heat', note: 'Ambient above 30 degrees C reduces ampacity — each insulation type differs', color: 'rose' },
        { icon: 'wire', title: 'Table 5B — Close', note: 'Less than 25% spacing, max 4 cables in free air — Rule 4-004(8)', color: 'amber' },
        { icon: 'warning', title: 'Table 5C — Bundled', note: 'The most common derating: 4+ bundled or non-ventilated trays — Rule 4-004(9)', color: 'rose' },
        { icon: 'ruler', title: '600 mm Rule', note: 'Bundled less than 600 mm = no Table 5C derating — Rule 4-004(12)', color: 'emerald' },
        { icon: 'shield', title: 'MI Cable Exception', note: '4 or fewer MI cables, 2.15x spacing on messenger — no 5B — Rule 4-004(10)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 5. CORRECTION FACTORS — TRANSITIONS, CABLE TRAYS & SPECIAL (Rules 4-004(14)-(25))
    // =========================================================================
    {
      id: '4-correction-transitions-special',
      title: 'Correction Factors — Transitions, Cable Trays & Special',
      rules: 'Rules 4-004(14) to 4-004(25)',
      explanation:
        'Rules 4-004(14) through 4-004(25) address complex situations where conductors transition between environments, run in cable trays, or use special materials.\n\nRule 4-004(14) — Mixed Temperature Ratings in Same Raceway: When conductors with DIFFERENT temperature ratings are installed in the same raceway, the ampacity of ALL conductors must be determined based on the LOWEST temperature rating present. If you mix 90 degrees C THWN-2 with 60 degrees C TW wire in the same conduit, every conductor is limited to the 60 degrees C column.\n\nRule 4-004(15) — Added Conductors: When additional conductors are added to an existing raceway or cable assembly, the ampacity of ALL conductors — both existing and new — must be re-rated based on the new total number of current-carrying conductors.\n\nRule 4-004(16) — Underground-to-Above Transition: Where a conductor run transitions from underground to above ground, the ampacity used for the ENTIRE run is the LOWER of the two values (underground or above-ground).\n\nRule 4-004(17) — Transition Exceptions: The transition rule of 4-004(16) does not apply if the above-ground portion is 10% or less of the total run length, OR if the above-ground portion is 3 metres or less. In these cases, the underground ampacity can be used for the whole run.\n\nRule 4-004(18) — Underground Load Factor: For underground installations, a load factor less than 1.00 may be applied where the load is cyclical or intermittent rather than continuous. This recognizes that earth has thermal inertia — it takes time to heat up, and if the load cycles on and off, the conductor never reaches its maximum temperature.\n\nRule 4-004(19) — No Further Diversity: When a load factor is applied per Rule 4-004(18), no FURTHER diversity factor may be applied. You cannot double-dip on load reduction.\n\nRule 4-004(20) — Nickel-Clad or Nickel Conductors: Ampacity must be determined using IEEE 835. Standard tables do not cover nickel conductors.\n\nRule 4-004(21) — Bare or Covered Conductors in Free Air: Use Table 66 for ampacity. These are not insulated conductors and have different heat dissipation characteristics.\n\nRule 4-004(22) — Ventilated Cable Trays, Greater Than 100% Spacing: For single-conductor cables in ventilated trays with more than 100% spacing, use Tables 1 (copper) or 3 (aluminum) — same as free air. For multi-conductor cables in ventilated trays with more than 100% spacing, use Tables 2 (copper) or 4 (aluminum) and apply Table 5C correction factors.\n\nRule 4-004(23) — Ventilated Trays, 25-100% Spacing: Apply Table 5D correction factors to the applicable base table.\n\nRule 4-004(24) — Less Than 25% Spacing or Non-Ventilated Trays: Apply Table 5C correction factors.\n\nRule 4-004(25) — Cablebus Above 30 degrees C: Where cablebus is in an ambient above 30 degrees C, apply Table 5A correction factors to the cablebus NAMEPLATE ampacity rating, not to the standard table values.',
      fieldScenario:
        'You are installing a 150A feeder that runs 80 metres underground from Building A to Building B, then rises 5 metres up the wall inside Building B to reach the subpanel.\n\nThe underground ampacity from Table D8A for your cable is 165A. The above-ground ampacity from Table 2 (in conduit on the wall) is 150A. Rule 4-004(16) says you must use the LOWER value: 150A.\n\nBut wait — the above-ground portion is 5 metres out of 85 metres total = 5.9%. That is less than 10%, so Rule 4-004(17) says the transition exception applies. You can use the underground value of 165A for the entire run.\n\nInside Building B, you need to add 3 more circuits to an existing conduit that already has 6 current-carrying conductors. Rule 4-004(15) says you must rerate ALL 9+ conductors using the new total count with Table 5C factors.\n\nOne of the existing circuits in that conduit uses old TW (60 degrees C) wire, while your new cables are THWN-2 (90 degrees C). Rule 4-004(14) forces you to derate ALL conductors to the 60 degrees C column. This alone might require upsizing the new conductors.',
      keyPoints: [
        'Mixed temp ratings in same raceway: ALL conductors use the LOWEST temp rating present (Rule 4-004(14))',
        'Adding conductors to existing raceway: rerate ALL conductors based on new total count (Rule 4-004(15))',
        'Underground-to-above transition: use the LOWER ampacity for entire run (Rule 4-004(16))',
        'Transition exception: above-ground portion <=10% of total run OR <=3 metres — use underground value (Rule 4-004(17))',
        'Underground load factor <1.00 allowed for cyclical/intermittent loads (Rule 4-004(18))',
        'No further diversity factor when load factor already applied (Rule 4-004(19))',
        'Nickel conductors: use IEEE 835 only (Rule 4-004(20))',
        'Bare/covered conductors in free air: use Table 66 (Rule 4-004(21))',
        'Ventilated tray >100% spacing: Tables 1/3 for single conductors, Tables 2/4 with 5C for multi-conductor (Rule 4-004(22))',
        'Ventilated tray 25-100% spacing: apply Table 5D (Rule 4-004(23))',
        'Less than 25% spacing or non-ventilated trays: apply Table 5C (Rule 4-004(24))',
        'Cablebus above 30 degrees C: apply Table 5A to nameplate ampacity (Rule 4-004(25))',
      ],
      diagramaMermaid: `graph TD
    A["Transitions &\\nSpecial Cases"] --> B["Mixed Temp Ratings\\nin Same Raceway"]
    B --> C["Use LOWEST rating\\nfor ALL conductors\\n(Rule 4-004-14)"]
    A --> D["Underground to\\nAbove Ground"]
    D --> E{"Above-ground\\n<=10% or <=3m?"}
    E -->|Yes| F["Use underground\\nampacity\\n(Rule 4-004-17)"]
    E -->|No| G["Use LOWER of\\nthe two values\\n(Rule 4-004-16)"]
    H["Cable Tray\\nSpacing"] --> I{">100%\\nspacing?"}
    I -->|"Single cond"| J["Tables 1/3\\n(Rule 4-004-22)"]
    I -->|"Multi cond"| K["Tables 2/4 × 5C\\n(Rule 4-004-22)"]
    H --> L{"25-100%?"}
    L -->|Yes| M["Apply Table 5D\\n(Rule 4-004-23)"]
    H --> N{"<25% or\\nnon-ventilated?"}
    N -->|Yes| O["Apply Table 5C\\n(Rule 4-004-24)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'thermometer', title: 'Lowest Temp Wins', note: 'Mixed ratings in one raceway: all derate to the lowest — Rule 4-004(14)', color: 'rose' },
        { icon: 'wire', title: 'Rerate All', note: 'Adding conductors means recalculating everything — Rule 4-004(15)', color: 'amber' },
        { icon: 'ruler', title: '10% or 3m Rule', note: 'Short above-ground transitions can use underground ampacity — Rule 4-004(17)', color: 'emerald' },
        { icon: 'sun', title: 'Cablebus Ambient', note: 'Apply Table 5A to NAMEPLATE rating, not table values — Rule 4-004(25)', color: 'violet' },
        { icon: 'box', title: 'Tray Spacing Matters', note: '>100%, 25-100%, <25% each uses different correction tables', color: 'sky' },
      ],
    },

    // =========================================================================
    // 6. TEMPERATURE LIMITATIONS AT TERMINATIONS (Rule 4-006)
    // =========================================================================
    {
      id: '4-termination-temp',
      title: 'Temperature Limitations at Terminations',
      rules: 'Rule 4-006',
      explanation:
        'Rule 4-006 is one of the most exam-tested rules in the CEC. It limits the temperature rating you can use for ampacity calculations based on the termination (connection point) of the conductor, not just the conductor insulation itself.\n\nRule 4-006(1) — Marked Temperature: Where equipment terminations are MARKED with a temperature rating, the ampacity of the conductor connected to that termination must be determined using the MARKED temperature column. If a panel is marked "75 degrees C terminations," you must use the 75 degrees C ampacity column even if your wire is rated 90 degrees C.\n\nRule 4-006(2)(a) — Unmarked, 100A or Less: Where equipment terminations are NOT marked and the circuit is rated 100A OR LESS, the ampacity must be based on the 60 degrees C column. This is a conservative rule that protects against overheating at connections. Most residential panels and small commercial equipment fall into this category.\n\nRule 4-006(2)(b) — Unmarked, Over 100A: Where equipment terminations are NOT marked and the circuit is rated OVER 100A, the ampacity must be based on the 75 degrees C column. Larger equipment is generally built with better terminations that can handle more heat.\n\nRule 4-006(3) — High Voltage, Unmarked: For high-voltage equipment without marked termination temperatures, consult the manufacturer for the appropriate temperature rating. Do not assume.\n\nRule 4-006(4) — First 1.2 Metres Only: The termination temperature limitation of Rule 4-006 applies ONLY to the first 1.2 metres (about 4 feet) of conductor from the termination point. Beyond that distance, the conductor can be rated at its full insulation temperature for ampacity purposes. This means that for long runs, the termination temperature rule may not be the limiting factor.\n\nRule 4-006(5) — Transition Conductor: Where a transition is made from a higher-ampacity conductor to a lower-ampacity conductor at a termination, the transition conductor (pigtail or jumper) must be a minimum of 1.2 metres long. This prevents hot spots at the junction.\n\nRule 4-006(6) — Underground Tables: The termination temperature rules still apply even when the conductor ampacity was determined from the underground tables (D-series). You must still check the termination temperature and ensure it is not the limiting factor.',
      fieldScenario:
        'You are connecting a 90 degrees C rated THWN-2 #3 AWG copper conductor to a 100A breaker in a panelboard. The panel terminations are NOT marked with a temperature rating.\n\nSince the circuit is 100A or less and unmarked, Rule 4-006(2)(a) says you must use the 60 degrees C column for ampacity. Looking at Table 2 for copper in raceway, #3 AWG at 60 degrees C is only 75A — not enough for 100A. You need to upsize to #1 AWG (110A at 60 degrees C).\n\nHowever, your journeyman points out that the panel has a sticker reading "75 degrees C terminations." Now Rule 4-006(1) applies instead. At 75 degrees C, #3 AWG copper gives 100A — exactly what you need.\n\nFor the 200A main feeder (over 100A, unmarked terminations), Rule 4-006(2)(b) says use the 75 degrees C column. At 75 degrees C, #3/0 AWG copper gives 200A.\n\nThe feeder runs 50 metres. The termination temperature only governs the first 1.2 metres per Rule 4-006(4). For the remaining 48.8 metres, you could theoretically use the 90 degrees C column — but since you are already sized for the termination, the rest of the run is more than adequate.',
      keyPoints: [
        'Marked terminations: use the MARKED temperature column for ampacity (Rule 4-006(1))',
        'Unmarked terminations, 100A or less: use 60 degrees C column (Rule 4-006(2)(a))',
        'Unmarked terminations, over 100A: use 75 degrees C column (Rule 4-006(2)(b))',
        'High-voltage unmarked terminations: consult manufacturer (Rule 4-006(3))',
        'Termination temperature applies ONLY to first 1.2 metres from the connection (Rule 4-006(4))',
        'Transition conductor (pigtail) must be minimum 1.2 metres long (Rule 4-006(5))',
        'Underground table ampacities are still subject to termination temperature limits (Rule 4-006(6))',
      ],
      diagramaMermaid: `graph TD
    A["Termination Temperature\\n(Rule 4-006)"] --> B{"Is termination\\nMARKED?"}
    B -->|Yes| C["Use MARKED temp\\ncolumn\\n(Rule 4-006-1)"]
    B -->|No| D{"Circuit rating?"}
    D -->|"<=100A"| E["Use 60°C column\\n(Rule 4-006-2a)"]
    D -->|">100A"| F["Use 75°C column\\n(Rule 4-006-2b)"]
    D -->|"High Voltage"| G["Consult manufacturer\\n(Rule 4-006-3)"]
    A --> H["Applies ONLY to\\nfirst 1.2 m\\n(Rule 4-006-4)"]
    A --> I["Transition conductor\\nmin 1.2 m long\\n(Rule 4-006-5)"]
    A --> J["Underground tables\\nstill subject to\\nthis rule\\n(Rule 4-006-6)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'thermometer', title: '60 degrees C Default', note: 'Unmarked terminations <=100A: always derate to 60 degrees C — Rule 4-006(2)(a)', color: 'rose' },
        { icon: 'thermometer', title: '75 degrees C for >100A', note: 'Unmarked terminations over 100A: use 75 degrees C column — Rule 4-006(2)(b)', color: 'amber' },
        { icon: 'label', title: 'Check the Marking', note: 'Marked terminations override the default — Rule 4-006(1)', color: 'emerald' },
        { icon: 'ruler', title: '1.2 m Boundary', note: 'Temperature limit applies only within 1.2 m of termination — Rule 4-006(4)', color: 'sky' },
        { icon: 'wire', title: 'Pigtail Min 1.2 m', note: 'Transition conductors must be at least 1.2 m long — Rule 4-006(5)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 7. INDUCED VOLTAGES & SHEATH CURRENTS (Rule 4-008)
    // =========================================================================
    {
      id: '4-induced-voltages',
      title: 'Induced Voltages & Sheath Currents',
      rules: 'Rule 4-008',
      explanation:
        'Rule 4-008 addresses a critical but often overlooked hazard: electromagnetic effects in single-conductor cables and armoured cables carrying high currents. When AC current flows through a conductor, it creates a magnetic field that can induce voltages and currents in nearby metallic sheaths, armour, and ferrous (steel/iron) raceways.\n\nRule 4-008(1) — Sheath Current Derating: Where cables have metallic sheaths (such as lead or aluminum sheath) and sheath currents can flow, the ampacity must be DERATED to 70% of the table value, UNLESS the cable manufacturer provides specific derating data, OR precautions are taken to prevent sheath current flow. A 200A cable becomes a 140A cable if sheath currents are flowing.\n\nRule 4-008(2) — Armoured Cable: The same 70% derating or manufacturer data or prevention applies to armoured cables where armour currents can flow.\n\nRule 4-008(3) — Over 200A, Individual Ferrous Openings: Where conductors carry more than 200A, they shall NOT enter individual ferrous (steel) openings. Each phase conductor in its own steel knockout creates a single-conductor electromagnet that induces eddy currents in the steel, causing severe overheating. All conductors of a circuit must pass through the same opening.\n\nRule 4-008(4) — Over 200A Entering Ferrous Enclosures: Where conductors carrying more than 200A enter a ferrous enclosure, precautions must be taken to prevent overheating of the enclosure from induced currents.\n\nRule 4-008(5) — Precautions Required: The precautions for preventing overheating include using non-ferrous (aluminum or stainless steel) connectors, glands, locknuts, and bushings at the point where conductors enter ferrous enclosures. This breaks the magnetic circuit.\n\nRule 4-008(6) — Non-Ferrous Plate: As an alternative, all conductors of a circuit may be routed through a single non-ferrous plate at least 6 mm thick. This single opening eliminates the induced current problem because the magnetic fields of the individual conductors cancel each other out when grouped together.\n\nRule 4-008(7) — MI Cables: For mineral-insulated (MI) cables, all current-carrying conductors of a circuit must be grouped together to minimize induction effects. MI cable has a metallic sheath that is particularly susceptible to induced heating.',
      fieldScenario:
        'You are installing parallel 400A feeders using single-conductor 500 kcmil cables to a large motor control centre (MCC) housed in a steel enclosure.\n\nThe MCC has individual steel knockouts for each cable. Rule 4-008(3) prohibits using individual ferrous openings for conductors over 200A. If you run each 500 kcmil through its own steel knockout, the steel will overheat from eddy currents and could start a fire.\n\nSolution: Per Rule 4-008(6), you install a 6 mm thick aluminum plate over a single large opening. All three phase conductors plus the neutral pass through this one non-ferrous plate. The magnetic fields cancel out, and the aluminum plate does not support eddy currents like steel would.\n\nAlternatively, per Rule 4-008(5), you use aluminum locknuts, aluminum bushings, and aluminum connectors at each knockout, breaking the magnetic circuit at each entry point.\n\nThe cables have aluminum sheaths. If sheath currents flow through the installation, Rule 4-008(1) says you must derate to 70% — your 400A cables become 280A cables. To avoid this, you ensure the sheaths are bonded only at one end, preventing circulating sheath currents.',
      keyPoints: [
        'Metallic sheath with sheath currents: derate to 70% OR use manufacturer data OR prevent flow (Rule 4-008(1))',
        'Armoured cable with armour currents: same 70% derating rules apply (Rule 4-008(2))',
        'Over 200A: do NOT use individual ferrous (steel) openings for each conductor (Rule 4-008(3))',
        'Over 200A entering ferrous enclosures: take precautions to prevent overheating (Rule 4-008(4))',
        'Precautions: use non-ferrous connectors, glands, locknuts, bushings (Rule 4-008(5))',
        'Alternative: all conductors through ONE non-ferrous plate minimum 6 mm thick (Rule 4-008(6))',
        'MI cables: group ALL current-carrying conductors together to minimize induction (Rule 4-008(7))',
      ],
      diagramaMermaid: `graph TD
    A["Induced Voltages\\n& Sheath Currents\\n(Rule 4-008)"] --> B{"Metallic sheath\\nor armour?"}
    B -->|Yes| C{"Sheath/armour\\ncurrents flowing?"}
    C -->|Yes| D["Derate to 70%\\nOR manufacturer data\\nOR prevent flow\\n(Rules 4-008-1,2)"]
    C -->|"Prevented"| E["Full ampacity"]
    A --> F{">200A\\nconductors?"}
    F -->|Yes| G["NO individual\\nferrous openings\\n(Rule 4-008-3)"]
    G --> H["Use non-ferrous\\nconnectors/glands\\n(Rule 4-008-5)"]
    G --> I["OR single non-ferrous\\nplate >=6 mm\\n(Rule 4-008-6)"]
    F -->|"<=200A"| J["Standard\\ninstallation"]
    A --> K["MI cables: group\\nALL conductors\\n(Rule 4-008-7)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'magnet', title: '70% Derating', note: 'Sheath or armour currents reduce ampacity to 70% — Rules 4-008(1)(2)', color: 'rose' },
        { icon: 'fire', title: '>200A Warning', note: 'Individual steel knockouts become electromagnets — Rule 4-008(3)', color: 'rose' },
        { icon: 'shield', title: 'Non-Ferrous Fix', note: 'Aluminum connectors, glands, locknuts, bushings — Rule 4-008(5)', color: 'emerald' },
        { icon: 'bolt', title: '6 mm Plate', note: 'All conductors through one non-ferrous plate >=6 mm — Rule 4-008(6)', color: 'sky' },
        { icon: 'wire', title: 'MI Cable Rule', note: 'Group all current-carrying conductors together — Rule 4-008(7)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 8. FLEXIBLE CORDS, EQUIPMENT WIRE & PORTABLE CABLE (Rules 4-010, 4-012, 4-014, 4-034)
    // =========================================================================
    {
      id: '4-flex-cord-equipment-wire',
      title: 'Flexible Cords, Equipment Wire & Portable Cable',
      rules: 'Rules 4-010, 4-012, 4-014, 4-034',
      explanation:
        'These rules govern conductors used in flexible applications — cords, equipment internals, and portable power cables.\n\nRule 4-010 — Flexible Cord Minimum Sizes: The minimum conductor size for flexible cord is #18 AWG copper. For tinsel cord (used in very light-duty applications like headphone cables and small appliance cords), the minimum is #27 AWG. For specific devices such as decorative lighting strings and similar applications, #20 AWG is the minimum. These are exceptions to the general #14 AWG minimum in Rule 4-002.\n\nRule 4-012 — Flexible Cord Ampacity: The ampacity of flexible cords is determined from Table 12. The base values in Table 12 apply to cords with 2 or 3 conductors (100% of table value). When more conductors are present in a single cord, derating factors apply:\n- 4 to 6 conductors: 80% of Table 12 value\n- 7 to 24 conductors: 70% of Table 12 value\n- 25 to 42 conductors: 60% of Table 12 value\n- 43 or more conductors: 50% of Table 12 value\n\nImportant counting exceptions for flexible cords: the bonding conductor and the unbalanced neutral conductor are NOT counted when determining the number of current-carrying conductors for derating purposes. This is consistent with Rules 4-004(3) and 4-004(6).\n\nRule 4-014 — Equipment Wire: The ampacity of equipment wire (used inside equipment enclosures, control panels, and switchgear) is also determined from Table 12. Equipment wire is factory-installed wiring within an enclosure that is not subject to the same installation conditions as building wiring.\n\nRule 4-034 — Portable Power Cable: The ampacity of portable power cable is determined from Table 12A. For DLO (diesel locomotive) cable used in cable trays, ampacity is from Table 12E, and the correction factors of Rule 4-004 also apply. When counting conductors in portable power cables, the bonding conductor and unbalanced neutral are NOT counted, consistent with the other counting rules.',
      fieldScenario:
        'You are wiring a portable stage lighting rig for a concert venue. The main power distribution uses a 37-conductor portable cable to run power to individual dimmer channels.\n\nUsing Rule 4-012, the base ampacity comes from Table 12. Since there are 37 current-carrying conductors (after excluding the bonding conductor and unbalanced neutral), you apply the 25-42 conductor derating: 60% of Table 12 value.\n\nFor #12 AWG flexible cord, Table 12 gives 25A base. With the 60% factor: 25A x 0.60 = 15A per conductor. Each dimmer channel can handle 15A maximum.\n\nIn the venue\'s machine shop, a large portable welder uses DLO cable run across a cable tray to reach the work area. Rule 4-034 says to use Table 12E for the DLO cable in the tray, and then apply Rule 4-004 correction factors (Table 5C for multiple cables in the tray).\n\nInside the welder\'s control panel, the internal wiring is #16 AWG equipment wire. Its ampacity comes from Table 12 per Rule 4-014. Since this is factory-wired equipment, the #16 AWG is acceptable even though it is smaller than the #14 AWG building wire minimum.',
      keyPoints: [
        'Flexible cord minimum: #18 AWG copper for general use (Rule 4-010)',
        'Tinsel cord minimum: #27 AWG (Rule 4-010)',
        'Specific devices (decorative lighting): minimum #20 AWG (Rule 4-010)',
        'Flexible cord ampacity from Table 12: 2-3 conductors = 100% (Rule 4-012)',
        'Flexible cord derating: 4-6 conductors = 80% of Table 12 (Rule 4-012)',
        'Flexible cord derating: 7-24 conductors = 70% of Table 12 (Rule 4-012)',
        'Flexible cord derating: 25-42 conductors = 60% of Table 12 (Rule 4-012)',
        'Flexible cord derating: 43+ conductors = 50% of Table 12 (Rule 4-012)',
        'Bonding and unbalanced neutral NOT counted for flex cord derating (Rule 4-012)',
        'Equipment wire ampacity from Table 12 (Rule 4-014)',
        'Portable power cable ampacity from Table 12A (Rule 4-034)',
        'DLO cable in cable tray: Table 12E + Rule 4-004 correction factors (Rule 4-034)',
        'Bonding and unbalanced neutral NOT counted for portable cable derating (Rule 4-034)',
      ],
      diagramaMermaid: `graph TD
    A["Flexible Conductors"] --> B["Flexible Cord\\n(Rule 4-010)"]
    A --> C["Equipment Wire\\n(Rule 4-014)"]
    A --> D["Portable Power Cable\\n(Rule 4-034)"]
    B --> E["Min #18 AWG Cu\\n#27 tinsel\\n#20 specific devices"]
    B --> F["Ampacity: Table 12\\n(Rule 4-012)"]
    F --> G["2-3 cond: 100%"]
    F --> H["4-6 cond: 80%"]
    F --> I["7-24 cond: 70%"]
    F --> J["25-42 cond: 60%"]
    F --> K["43+ cond: 50%"]
    C --> L["Ampacity: Table 12"]
    D --> M["Ampacity: Table 12A"]
    D --> N["DLO in tray:\\nTable 12E + 4-004"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Flex Cord Min', note: '#18 AWG copper general, #27 tinsel, #20 specific devices — Rule 4-010', color: 'sky' },
        { icon: 'ruler', title: 'Table 12 Base', note: '2-3 conductors = 100% of Table 12 ampacity — Rule 4-012', color: 'emerald' },
        { icon: 'warning', title: 'Heavy Derating', note: '43+ conductors in a single cord = only 50% ampacity — Rule 4-012', color: 'rose' },
        { icon: 'neutral', title: 'Don\'t Count These', note: 'Bonding and unbalanced neutral excluded from cord conductor count', color: 'amber' },
        { icon: 'power', title: 'DLO Special', note: 'DLO in cable tray uses Table 12E plus Rule 4-004 corrections — Rule 4-034', color: 'violet' },
      ],
    },

    // =========================================================================
    // 9. NEUTRAL CONDUCTOR — INSULATION & SIZING (Rules 4-016, 4-018)
    // =========================================================================
    {
      id: '4-neutral-insulation-sizing',
      title: 'Neutral Conductor — Insulation & Sizing',
      rules: 'Rules 4-016, 4-018',
      explanation:
        'Rules 4-016 and 4-018 govern the insulation requirements and sizing of the neutral (identified) conductor.\n\nRule 4-016(1) — Insulation Required: The neutral conductor SHALL be insulated. Exceptions are limited to specific situations covered by Rules 6-302 (service entrance), 6-308 (overhead services), 12-302 (bare neutral for certain consumer services), and 12-318 (bare neutral for specific installations). In all other cases, the neutral must have full insulation.\n\nRule 4-016(2) — Temperature Rating: The insulation temperature rating of the neutral conductor must be at LEAST EQUAL TO the temperature rating of the ungrounded (phase) conductors in the same circuit. You cannot use a 60 degrees C neutral with 90 degrees C phase conductors.\n\nRule 4-018(1) — Sufficient Ampacity: The neutral conductor must have sufficient ampacity to carry the maximum unbalanced load current. It need not be the same size as the phase conductors if the unbalanced load is less than the phase load.\n\nRule 4-018(2) — Maximum Unbalanced Load: The maximum unbalanced load is defined as the maximum net calculated load between the neutral and any ONE ungrounded conductor, as determined by Section 8 demand calculations.\n\nRule 4-018(2)(a)(i) — Electric-Discharge Lighting: For circuits supplying electric-discharge lighting (fluorescent, HID, LED), NO reduction in neutral size is permitted. The neutral carries harmonic currents and must be full-sized.\n\nRule 4-018(2)(a)(ii) — Non-Linear 3-Phase 4-Wire: For non-linear loads on 3-phase, 4-wire circuits (computers, VFDs, electronic ballasts), NO reduction in neutral size is permitted. Triplen harmonics add on the neutral.\n\nRule 4-018(2)(b) — 70% Demand on Excess Over 200A: For loads that DO permit neutral reduction, a demand factor of 70% may be applied to the portion of the unbalanced load that EXCEEDS 200A. The first 200A must be at 100%. Example: 300A unbalanced load = 200A at 100% + 100A at 70% = 200 + 70 = 270A neutral.\n\nRule 4-018(3)(a) — Service Neutral Minimum: The neutral conductor of a service shall be not smaller than #10 AWG copper or #8 AWG aluminum.\n\nRule 4-018(3)(b) — Service Neutral Sizing: The service neutral must be sized per Rule 10-210(b), which specifies sizing based on the calculated service load.\n\nRule 4-018(4) — Uninsulated Neutral in Raceway: Where an uninsulated neutral is permitted and installed in a raceway with insulated conductors, its ampacity must be treated as if it has the LOWEST temperature rating of any adjacent insulated conductor. Since bare wire has no insulation, it adopts the thermal limitation of its neighbours.',
      fieldScenario:
        'You are sizing the neutral for a 400A, 3-phase, 4-wire service feeding a commercial building.\n\nThe building has a mix of loads: 200A of resistive heating (balanced) and 200A of office equipment (computers, LED lighting — non-linear loads).\n\nFor the non-linear load portion: Rule 4-018(2)(a)(ii) says NO reduction is permitted. The neutral must carry the full 200A for this portion.\n\nFor the resistive load: it is balanced, so the neutral carries only the unbalanced portion. Assume 50A unbalanced. Rule 4-018(2)(b) allows 70% demand on the excess over 200A, but since the unbalanced resistive load is only 50A, no reduction applies.\n\nTotal neutral: 200A (non-linear, no reduction) + 50A (unbalanced resistive) = 250A. The neutral must be sized for 250A minimum.\n\nThe phase conductors are THWN-2 (90 degrees C). Per Rule 4-016(2), the neutral must also be rated at least 90 degrees C. You cannot save money by using a cheaper 60 degrees C neutral insulation.\n\nThe service neutral must be at least #10 AWG copper per Rule 4-018(3)(a), but for this 250A load, you will need much larger — a 250 kcmil copper at 75 degrees C gives 255A.',
      keyPoints: [
        'Neutral conductor SHALL be insulated — exceptions only per Rules 6-302, 6-308, 12-302, 12-318 (Rule 4-016(1))',
        'Neutral insulation temperature rating must be >= phase conductor rating (Rule 4-016(2))',
        'Neutral must have sufficient ampacity for maximum unbalanced load (Rule 4-018(1))',
        'Maximum unbalanced load = max load between neutral and any ONE ungrounded conductor per Section 8 (Rule 4-018(2))',
        'NO neutral reduction for electric-discharge lighting circuits (Rule 4-018(2)(a)(i))',
        'NO neutral reduction for non-linear 3-phase 4-wire circuits (Rule 4-018(2)(a)(ii))',
        '70% demand factor allowed on unbalanced load exceeding 200A (Rule 4-018(2)(b))',
        'Service neutral minimum: #10 AWG copper or #8 AWG aluminum (Rule 4-018(3)(a))',
        'Service neutral sized per Rule 10-210(b) (Rule 4-018(3)(b))',
        'Uninsulated neutral in raceway: use lowest adjacent conductor temp rating (Rule 4-018(4))',
      ],
      diagramaMermaid: `graph TD
    A["Neutral Conductor\\nRules 4-016, 4-018"] --> B["Must be INSULATED\\n(Rule 4-016-1)"]
    B --> C["Exceptions: Rules\\n6-302, 6-308,\\n12-302, 12-318"]
    A --> D["Temp rating >=\\nphase conductors\\n(Rule 4-016-2)"]
    A --> E["Sizing for\\nUnbalanced Load"]
    E --> F{"Load Type?"}
    F -->|"Electric-discharge\\nlighting"| G["NO reduction\\n(Rule 4-018-2a-i)"]
    F -->|"Non-linear\\n3Φ 4-wire"| H["NO reduction\\n(Rule 4-018-2a-ii)"]
    F -->|"Other loads"| I["70% on excess\\nover 200A\\n(Rule 4-018-2b)"]
    A --> J["Service neutral:\\nmin #10 Cu / #8 Al\\n(Rule 4-018-3a)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style H fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style I fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'neutral', title: 'Must Be Insulated', note: 'Bare neutral only in specific service entrance situations — Rule 4-016(1)', color: 'sky' },
        { icon: 'thermometer', title: 'Match the Phases', note: 'Neutral insulation temp rating must equal or exceed phase rating — Rule 4-016(2)', color: 'amber' },
        { icon: 'warning', title: 'No Reduction', note: 'Electric-discharge and non-linear loads: full-size neutral required — Rule 4-018(2)(a)', color: 'rose' },
        { icon: 'ruler', title: '70% Over 200A', note: 'Only for non-harmonic loads, only on the portion exceeding 200A — Rule 4-018(2)(b)', color: 'emerald' },
        { icon: 'wire', title: 'Service Minimum', note: '#10 Cu or #8 Al minimum for service neutral — Rule 4-018(3)(a)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 10. COMMON NEUTRAL & IDENTIFIED CONDUCTOR INSTALLATION (Rules 4-020, 4-022)
    // =========================================================================
    {
      id: '4-common-neutral-installation',
      title: 'Common Neutral & Identified Conductor Installation',
      rules: 'Rules 4-020, 4-022',
      explanation:
        'Rule 4-020 — Common Neutral: A common neutral conductor is permitted to serve multiple sets of feeders under specific conditions. It may serve:\n\n- 2 or 3 sets of 3-wire, single-phase feeders, OR\n- 2 sets of 4-wire, 3-phase feeders\n\nALL sets sharing the common neutral must be installed in the SAME metallic enclosure (raceway). This is critical because the metallic enclosure ensures that all conductors sharing the neutral are in close proximity, maintaining proper magnetic field cancellation and preventing overheating of the enclosure from unbalanced currents.\n\nThe common neutral must be sized for the maximum unbalanced load of all circuits it serves, not just one. This is a larger conductor than would be needed for a single set.\n\nRule 4-022 — Identified Conductor Installation: This rule specifies where the identified (neutral) conductor must be present and how it must be treated at various points in the system.\n\nRule 4-022(1)(a): The identified conductor must be present in ALL switches and circuit breakers. Every switch enclosure that contains ungrounded conductors must also contain the neutral.\n\nRule 4-022(1)(b): The identified conductor must be present in ALL distribution centres (panelboards, switchboards, etc.).\n\nRule 4-022(1)(c): The identified conductor must be present at ALL connections within enclosures — splices, taps, junctions.\n\nRule 4-022(1)(d): Each identified conductor must be capable of being disconnected INDEPENDENTLY of other identified conductors. You cannot daisy-chain neutrals such that disconnecting one breaks the neutral path for another circuit.\n\nRule 4-022(2): The identified conductor must be present at EACH luminaire (lighting fixture) control device location. Every switch that controls a light must have the neutral available. This was added to support occupancy sensors and smart switches that require a neutral connection to operate.',
      fieldScenario:
        'You are installing a 600A service for a small apartment building. The design calls for 3 sets of 200A, 3-wire, single-phase feeders sharing a common neutral to reduce copper costs.\n\nRule 4-020 permits this — up to 3 sets of 3-wire single-phase feeders may share a common neutral, provided they are all in the same metallic raceway. You install all conductors in a single 3-inch rigid steel conduit.\n\nThe common neutral must be sized for the worst-case unbalanced load across all three sets combined. With 3 x 200A feeders, the maximum unbalanced could be significant — you size the neutral accordingly using Section 8 calculations.\n\nInside the building, a new smart dimmer switch requires a neutral connection to power its electronics. Rule 4-022(2) requires the neutral to be present at each luminaire control device location. In an older building where the neutral was not run to switch boxes, you would need to pull a new neutral wire to every switch location.\n\nAt the panel, Rule 4-022(1)(d) requires each neutral to be independently disconnectable. You use individual neutral termination bars and ensure no neutrals are shared on the same termination point where disconnecting one would interrupt another.',
      keyPoints: [
        'Common neutral may serve 2-3 sets of 3-wire single-phase feeders (Rule 4-020)',
        'Common neutral may serve 2 sets of 4-wire 3-phase feeders (Rule 4-020)',
        'All sets sharing common neutral must be in the SAME metallic enclosure (Rule 4-020)',
        'Identified conductor required in ALL switches and circuit breakers (Rule 4-022(1)(a))',
        'Identified conductor required in ALL distribution centres (Rule 4-022(1)(b))',
        'Identified conductor required at ALL connections in enclosures (Rule 4-022(1)(c))',
        'Each identified conductor must be independently disconnectable (Rule 4-022(1)(d))',
        'Identified conductor required at EACH luminaire control device location (Rule 4-022(2))',
      ],
      diagramaMermaid: `graph TD
    A["Common Neutral\\n(Rule 4-020)"] --> B["2-3 sets of 3-wire\\n1Φ feeders"]
    A --> C["2 sets of 4-wire\\n3Φ feeders"]
    B --> D["ALL in same\\nmetallic enclosure"]
    C --> D
    E["Identified Conductor\\nInstallation\\n(Rule 4-022)"] --> F["In ALL switches\\n& breakers (1a)"]
    E --> G["In ALL distribution\\ncentres (1b)"]
    E --> H["At ALL connections\\nin enclosures (1c)"]
    E --> I["Independently\\ndisconnectable (1d)"]
    E --> J["At EACH luminaire\\ncontrol location (2)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style J fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'neutral', title: 'Common Neutral', note: 'Max 3 sets of 3-wire 1-phase or 2 sets of 4-wire 3-phase — Rule 4-020', color: 'sky' },
        { icon: 'box', title: 'Same Enclosure', note: 'All feeder sets sharing a common neutral must be in the same raceway — Rule 4-020', color: 'amber' },
        { icon: 'lock', title: 'Independent Disconnect', note: 'Each neutral independently disconnectable — Rule 4-022(1)(d)', color: 'rose' },
        { icon: 'bolt', title: 'Smart Switches', note: 'Neutral required at every light switch location — Rule 4-022(2)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 11. NEUTRAL IDENTIFICATION (Rules 4-024, 4-026, 4-028)
    // =========================================================================
    {
      id: '4-neutral-identification',
      title: 'Neutral Identification',
      rules: 'Rules 4-024, 4-026, 4-028',
      explanation:
        'Rules 4-024 through 4-028 specify exactly how the neutral (identified) conductor must be visually distinguished from other conductors.\n\nRule 4-024(1) — Small Conductors (#2 AWG and Smaller): The identified conductor must be finished in WHITE or have THREE CONTINUOUS WHITE STRIPES along its entire length. This marking must be visible without stripping the outer jacket. The white identification must be continuous — not just at the ends.\n\nRule 4-024(2) — Two Systems in Same Raceway: When conductors from two different systems (e.g., a 120/208V system and a 277/480V system) are in the same raceway or enclosure, the second system\'s identified conductor must be WHITE with a readily distinguishable COLORED STRIPE. The colored stripe must NOT be green (to avoid confusion with the grounding conductor). For example: white with a blue stripe, or white with a red stripe.\n\nRule 4-024(3) — Other Conductors: All OTHER conductors (ungrounded/phase conductors) must have an outer finish that is clearly distinguishable by CONTRASTING COLOR from the identified (white) and grounding (green) conductors. For flexible cords, conductors may be identified by ridges (raised ribs on the insulation) rather than color.\n\nRule 4-024(4) — Multi-Conductor Cable: In multi-conductor cables where the original conductor colors may not be visible at access points, the identified conductor must be re-identified by PAINTING at each access point (junction box, panel, etc.). The re-identification paint must not obscure any numbering or other markings on the cable.\n\nRule 4-026 — Large Conductors (Larger Than #2 AWG): For conductors larger than #2 AWG, the identified conductor may be identified by a CONTINUOUS white finish along its entire length, OR it may be identified at EACH END where the conductor is accessible by white markings (paint, tape, or heat-shrink). This is a practical accommodation because large conductors are often only available in black insulation.\n\nRule 4-028 — MI Cable: For mineral-insulated (MI) cable, the identified conductor must be marked at EACH END during installation. MI cable has a metallic outer sheath with no visible insulation color on the individual conductors, so field identification at termination points is essential.',
      fieldScenario:
        'You are pulling wire in a commercial building with two voltage systems: 120/208V and 347/600V. Both systems share a common wireway in the electrical room.\n\nFor the 120/208V system, the neutral is standard WHITE per Rule 4-024(1). For the 347/600V system, Rule 4-024(2) requires the neutral to be WHITE with a COLORED STRIPE — you choose white with a blue stripe. You cannot use white with a green stripe because green is reserved for grounding.\n\nYou are terminating 500 kcmil feeders at the main switchboard. The conductors are all black. Rule 4-026 says that for conductors larger than #2 AWG, you can identify the neutral with white tape or paint at each end. You wrap white tape around the neutral at both the switchboard end and the panel end.\n\nThe HVAC contractor ran MI cable from the rooftop unit. The individual conductors inside MI cable all look the same — copper. Rule 4-028 requires the installer to mark the identified conductor at each end during installation. You verify that the neutral conductor is marked with white tape at both the junction box on the roof and the disconnect inside the building.',
      keyPoints: [
        '#2 AWG and smaller: neutral must be WHITE or have 3 continuous white stripes (Rule 4-024(1))',
        'Two systems in same raceway: second neutral is white with colored stripe, NOT green (Rule 4-024(2))',
        'Phase conductors must contrast with white (neutral) and green (grounding) (Rule 4-024(3))',
        'Flexible cord: conductors may be identified by ridges instead of color (Rule 4-024(3))',
        'Multi-conductor cable: re-identify neutral by painting at each access point (Rule 4-024(4))',
        'Painting must NOT obscure numbering or other cable markings (Rule 4-024(4))',
        'Larger than #2 AWG: continuous white finish OR marked white at each accessible end (Rule 4-026)',
        'MI cable: identified conductor marked at each end DURING installation (Rule 4-028)',
      ],
      diagramaMermaid: `graph TD
    A["Neutral Identification"] --> B{"Conductor\\nSize?"}
    B -->|"<= #2 AWG"| C["WHITE or\\n3 white stripes\\nCONTINUOUS\\n(Rule 4-024-1)"]
    B -->|"> #2 AWG"| D["Continuous white\\nOR marked at\\neach end\\n(Rule 4-026)"]
    A --> E{"Two systems\\nin same raceway?"}
    E -->|Yes| F["2nd neutral:\\nwhite + colored stripe\\nNOT green\\n(Rule 4-024-2)"]
    E -->|No| G["Standard white"]
    A --> H{"MI Cable?"}
    H -->|Yes| I["Mark at each end\\nduring installation\\n(Rule 4-028)"]
    A --> J{"Multi-conductor\\ncable?"}
    J -->|Yes| K["Paint neutral at\\neach access point\\n(Rule 4-024-4)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#065f46,stroke:#10b981,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style I fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'label', title: 'White = Neutral', note: 'Continuous white or 3 white stripes for #2 AWG and smaller — Rule 4-024(1)', color: 'sky' },
        { icon: 'palette', title: 'Two Systems', note: 'Second system neutral: white + colored stripe, never green — Rule 4-024(2)', color: 'amber' },
        { icon: 'wire', title: 'Large Wire', note: 'Over #2 AWG: mark white at each accessible end — Rule 4-026', color: 'emerald' },
        { icon: 'label', title: 'MI Cable', note: 'Must be field-marked at each end during installation — Rule 4-028', color: 'rose' },
        { icon: 'warning', title: 'Don\'t Obscure', note: 'Painting for ID must not cover up numbering — Rule 4-024(4)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 12. USE OF IDENTIFIED CONDUCTORS & COLOR CODING (Rules 4-030, 4-032)
    // =========================================================================
    {
      id: '4-color-coding',
      title: 'Use of Identified Conductors & Color Coding',
      rules: 'Rules 4-030, 4-032',
      explanation:
        'Rules 4-030 and 4-032 complete the conductor identification system by specifying when the neutral identification can be removed and establishing the mandatory color coding for all conductors in Canadian electrical installations.\n\nRule 4-030(1) — Use Only Where Required: The identified (white) conductor must NOT be used where it is not required as a neutral. However, in AC90, ACWU, armoured (AC/AL), copper-sheathed, and NMD (non-metallic sheathed) cables where a white conductor is present but not needed as a neutral, it may be rendered unidentifiable by PAINTING or taping it a different color at each accessible point. This commonly occurs in 240V circuits using 2-wire NMD where both conductors carry phase current.\n\nRule 4-030(2) — Switch Loops: In switch loops (where power goes down to a switch and back up to a light), the white conductor used as a traveller does NOT need to be re-identified at the SWITCH end, provided the RETURN conductor from the switch to the luminaire is the identified (white) conductor. This is a practical exception for traditional switch wiring.\n\nRule 4-030(3) — Not Part of Circuit: Where an identified conductor is present in a cable or raceway but is NOT part of any circuit, it must be cut short or clearly indicated so it is not mistaken for an active neutral. An abandoned neutral left long and unterminated could be confused for a live conductor.\n\nRule 4-030(4) — Multi-Wire Branch Circuit Neutral Continuity: In a multi-wire branch circuit (shared neutral), the neutral conductor must maintain continuity INDEPENDENT of device connections. This means the neutral cannot simply pass through the device screw terminals — it must be spliced independently so that removing a receptacle or switch does not break the neutral for other circuits sharing it. An open neutral on a multi-wire branch circuit creates a dangerous series circuit with unequal voltages.\n\nRule 4-032(1) — Grounding Conductor Color: The grounding conductor (equipment bonding conductor) must be finished in GREEN or GREEN WITH YELLOW STRIPE. This color combination is reserved exclusively for grounding.\n\nRule 4-032(2) — Green is Exclusive: No conductor OTHER than the grounding conductor may be green or green with yellow stripe. This color is permanently and exclusively reserved.\n\nRule 4-032(3) — Standard Color Code: The CEC mandates specific conductor colors:\n- Single-phase 2-wire: BLACK and RED, or BLACK and WHITE (with neutral)\n- Single-phase 3-wire: BLACK, RED, and WHITE (neutral)\n- Three-phase: RED (Phase A), BLACK (Phase B), BLUE (Phase C), WHITE (Neutral)\n\nThis is the Canadian color code and differs from the US NEC code where Phase A is black.\n\nRule 4-032(4) — 4-Wire Delta, High Leg: In a 4-wire delta system, Phase A (RED) is the HIGH LEG — the phase with a higher voltage to ground than the other two phases. The high leg must be clearly identified because connecting single-phase loads to it produces a higher-than-expected voltage that can damage equipment.\n\nRule 4-032(5) — Delta Panelboard High Leg Separation: In a panelboard supplied by a 4-wire delta system, the high leg must be connected to a BARRIERED COMPARTMENT, physically separated from the other phases. This prevents accidental connection of single-phase loads to the high leg.',
      fieldScenario:
        'You are wiring a residential kitchen. A 240V circuit to the range uses 8/2 NMD cable (black, white, ground). Since this is a straight 240V circuit with no neutral needed, the white wire carries Phase B. Rule 4-030(1) requires you to re-identify it by wrapping red tape at the panel and at the range outlet box, so nobody mistakes it for a neutral.\n\nIn the hallway, you wire a standard switch loop. The 14/2 NMD runs from the light box down to the switch. The black wire brings power down, and the white wire brings the switched power back up. Rule 4-030(2) says you do not need to re-identify the white wire at the switch, since the white is the return conductor.\n\nThe kitchen has two 20A small appliance circuits sharing a neutral (multi-wire branch circuit). Rule 4-030(4) requires the shared neutral to be spliced independently with wire nuts in each box, not just passed through the receptacle terminals. If someone removes a receptacle, the neutral must remain continuous for the other circuit.\n\nAt the 3-phase panel in a commercial fit-up, the wiring follows the Canadian color code per Rule 4-032(3): Phase A is RED, Phase B is BLACK, Phase C is BLUE, Neutral is WHITE. The grounding conductor is GREEN per Rule 4-032(1).\n\nA factory has a 120/240V 4-wire delta transformer. Phase A (red) is the high leg at 208V to ground. Rule 4-032(4) requires it to be identified as such, and Rule 4-032(5) requires the panelboard to have a barriered compartment separating the high leg from the other breaker spaces.',
      keyPoints: [
        'Identified conductor not used where not required; in NMD/AC cable, re-identify by painting (Rule 4-030(1))',
        'Switch loops: white used as traveller does not need re-identification at switch if it is the return conductor (Rule 4-030(2))',
        'Unused identified conductor: cut short or clearly indicate it is not active (Rule 4-030(3))',
        'Multi-wire branch circuit: neutral must maintain continuity independent of device connections (Rule 4-030(4))',
        'Grounding conductor: GREEN or GREEN with YELLOW STRIPE, exclusively reserved (Rule 4-032(1))',
        'NO conductor other than grounding may be green or green/yellow (Rule 4-032(2))',
        'Single-phase 2-wire: BLACK + RED or BLACK + WHITE (Rule 4-032(3))',
        'Single-phase 3-wire: BLACK + RED + WHITE (Rule 4-032(3))',
        'Three-phase color code: RED (Phase A) + BLACK (Phase B) + BLUE (Phase C) + WHITE (Neutral) (Rule 4-032(3))',
        '4-wire delta: Phase A (RED) is the HIGH LEG with higher voltage to ground (Rule 4-032(4))',
        'Delta panelboard: high leg in barriered compartment, physically separated (Rule 4-032(5))',
      ],
      diagramaMermaid: `graph TD
    A["Color Coding\\n(Rule 4-032)"] --> B["Phase A = RED"]
    A --> C["Phase B = BLACK"]
    A --> D["Phase C = BLUE"]
    A --> E["Neutral = WHITE"]
    A --> F["Ground = GREEN\\nor GREEN/YELLOW"]
    G["Use of Identified\\nConductor\\n(Rule 4-030)"] --> H["Not needed as neutral?\\nRe-identify by painting\\n(Rule 4-030-1)"]
    G --> I["Switch loop: no\\nre-ID at switch\\n(Rule 4-030-2)"]
    G --> J["Unused: cut short\\nor mark clearly\\n(Rule 4-030-3)"]
    G --> K["Multi-wire: neutral\\ncontinuity independent\\nof devices\\n(Rule 4-030-4)"]
    L["4-Wire Delta\\n(Rule 4-032-4,5)"] --> M["Phase A = HIGH LEG\\nHigher V to ground"]
    L --> N["Barriered compartment\\nin panelboard"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style M fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'palette', title: 'Canadian 3-Phase', note: 'RED (A) + BLACK (B) + BLUE (C) + WHITE (N) — Rule 4-032(3)', color: 'sky' },
        { icon: 'shield', title: 'Green is Sacred', note: 'Only grounding conductor may be green or green/yellow — Rule 4-032(1)(2)', color: 'emerald' },
        { icon: 'warning', title: 'High Leg = Red', note: 'Phase A in 4-wire delta has higher voltage to ground — Rule 4-032(4)', color: 'rose' },
        { icon: 'lock', title: 'Neutral Continuity', note: 'Multi-wire branch circuit neutral must be independent of device — Rule 4-030(4)', color: 'amber' },
        { icon: 'label', title: 'Re-Identify White', note: 'In NMD used as phase: paint or tape at each access point — Rule 4-030(1)', color: 'violet' },
      ],
    },
  ],
}
