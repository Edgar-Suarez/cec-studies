import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 16 — Class 1 and Class 2 Circuits (CEC 2021, CSA C22.1:21)
 * COMPLETE — Every rule from 16-000 to 16-350 is covered.
 * Source: PDF scan of CEC Section 16
 */

export const section16Guide: StudyGuideSection = {
  section: '16',
  title: 'Section 16 — Class 1 and Class 2 Circuits',
  description:
    'Section 16 covers low-voltage and low-energy circuits used for remote control, signaling, and power-limited applications. It defines Class 1 (extra-low-voltage power) and Class 2 (low-energy) circuit classifications, their voltage and power limitations, wiring methods, overcurrent protection, conductor requirements, separation from other circuits, and special rules for ducts, plenums, vertical shafts, and hazardous locations. Rules 16-000 through 16-350.',
  subsections: [
    // =========================================================================
    // 1. GENERAL — Scope, Classifications & Special Conditions (Rules 16-000 to 16-012)
    // =========================================================================
    {
      id: '16-general',
      title: 'General — Scope, Classifications & Special Conditions',
      rules: 'Rules 16-000 to 16-012',
      explanation:
        'These opening rules establish the entire framework for low-voltage and low-energy circuits in the CEC. Understanding these definitions is critical because the classification of a circuit as Class 1 or Class 2 determines every wiring method, protection, and separation rule that follows.\n\nRule 16-000 (Scope): Section 16 applies to five types of circuits: (a) Class 1 and Class 2 remote control circuits; (b) Class 1 and Class 2 signal circuits; (c) Class 1 extra-low-voltage power circuits; (d) Class 2 low-energy power circuits; and (e) Class 2 power and data communication circuits connecting power sourcing equipment (PSE) and powered devices (PD). Importantly, Section 16 does NOT apply to communication circuits covered by Section 60, nor to circuits forming an integral part of a device.\n\nRule 16-002 (Classifications): The classification boundary is the load side of the overcurrent device or power-limited supply. Class 1 circuits are supplied from sources limited per Rule 16-100, and Class 2 circuits are supplied from sources limited per Rule 16-200.\n\nRule 16-004 (Class 1 extra-low-voltage power circuits): Circuits that are NOT remote control or signal circuits, operate at 30 V or less, with current NOT limited per Rule 16-200, and supplied from a transformer or device restricted to 1000 VA output — these are classified as Class 1 extra-low-voltage power circuits.\n\nRule 16-006 (Class 2 low-energy power circuits): Circuits that are NOT remote control or signal circuits but where current IS limited per Rule 16-200 — these are classified as Class 2 low-energy power circuits.\n\nRule 16-008 (Hazardous locations): When circuits under Section 16 are installed in hazardous locations, they must ALSO comply with the applicable rules of Section 18.\n\nRule 16-010 (Safety control devices): This is a critical safety escalation rule — if failure of a remote control circuit would introduce a direct fire or life hazard, that circuit SHALL be deemed Class 1, regardless of its voltage or power level. This means stricter wiring methods and protection apply.\n\nRule 16-012 (Circuits in communication cables): (1) Class 1 circuits shall NOT be run in the same cable with communication circuits. (2) Class 2 remote control and signal circuits that share conductors in a cable assembly with communication circuits are deemed communication circuits and must follow Section 60. (3) Class 2 power and data communication circuits must comply with Rules 16-300 to 16-350.',
      fieldScenario:
        'You are wiring a fire alarm annunciator panel in a commercial building. The panel has a 24 V power supply feeding smoke detectors throughout the building. The power supply is current-limited per Rule 16-200, so normally this would be a Class 2 circuit. However, Rule 16-010 changes everything — because failure of this circuit would introduce a direct life hazard (people would not be alerted to a fire), it must be treated as a Class 1 circuit. That means you must use wiring methods per Rules 16-102 through 16-118 (heavier conductors, overcurrent protection per Section 14, possibly conduit for mechanical protection).\n\nSeparately, the building has a Cat6 cable tray running PoE (Power over Ethernet) cables to security cameras. Those PoE cables are Class 2 power and data communication circuits per Rule 16-000(1)(e), and must follow Rules 16-300 to 16-350.\n\nThe building is also classified as Zone 2 hazardous in the loading dock area. Any Class 2 thermostat wiring running through that area must also comply with Section 18 per Rule 16-008.',
      keyPoints: [
        'Section 16 applies to Class 1 and Class 2 remote control, signal, extra-low-voltage power, low-energy power, and power-and-data communication circuits (Rule 16-000)',
        'Section 16 does NOT apply to communication circuits (Section 60) or circuits integral to a device (Rule 16-000(2))',
        'Classification boundary is the load side of the overcurrent device or power-limited supply (Rule 16-002)',
        'Class 1 extra-low-voltage power: not more than 30 V, not current-limited, source restricted to 1000 VA (Rule 16-004)',
        'Class 2 low-energy power: current limited per Rule 16-200 (Rule 16-006)',
        'Circuits in hazardous locations must ALSO comply with Section 18 (Rule 16-008)',
        'If failure of a remote control circuit creates a fire or life hazard, it SHALL be deemed Class 1 (Rule 16-010)',
        'Class 1 circuits shall NOT share a cable with communication circuits (Rule 16-012(1))',
        'Class 2 circuits sharing cable with communication circuits are deemed communication circuits under Section 60 (Rule 16-012(2))',
        'Class 2 power and data communication circuits must comply with Rules 16-300 to 16-350 (Rule 16-012(3))',
      ],
      diagramaMermaid: `graph TD
    A["Section 16 Scope\\n(Rule 16-000)"] --> B["Class 1 Circuits"]
    A --> C["Class 2 Circuits"]
    B --> D["Remote Control\\n& Signal"]
    B --> E["Extra-Low-Voltage\\nPower ≤30V, ≤1000VA\\n(Rule 16-004)"]
    C --> F["Remote Control\\n& Signal"]
    C --> G["Low-Energy Power\\nCurrent-limited\\n(Rule 16-006)"]
    C --> H["Power & Data Comm\\n(Rules 16-300 to 16-350)"]
    I["Safety Escalation\\n(Rule 16-010)"] -->|"Fire/life hazard\\non failure"| B
    J["Hazardous Location?\\n(Rule 16-008)"] -->|"Yes"| K["Also comply with\\nSection 18"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style K fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'Class 1 = Higher Power', note: 'Sources limited per Rule 16-100 — up to 600 V for remote control/signal, 30 V/1000 VA for ELV power', color: 'sky' },
        { icon: 'shield', title: 'Class 2 = Current-Limited', note: 'Sources limited per Rule 16-200 — inherently safer, allowing relaxed wiring methods', color: 'emerald' },
        { icon: 'fire', title: 'Safety Escalation', note: 'If circuit failure = fire/life hazard, it MUST be treated as Class 1 — Rule 16-010', color: 'rose' },
        { icon: 'warning', title: 'Hazardous Locations', note: 'Section 16 circuits in hazardous areas must also comply with Section 18 — Rule 16-008', color: 'amber' },
        { icon: 'wire', title: 'No Mixing Class 1 + Comm', note: 'Class 1 conductors shall NOT be in the same cable as communication circuits — Rule 16-012(1)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 2. CLASS 1 — Source Limitations & Installation Methods (Rules 16-100 to 16-108)
    // =========================================================================
    {
      id: '16-class1-sources',
      title: 'Class 1 — Source Limitations & Installation Methods',
      rules: 'Rules 16-100 to 16-108',
      explanation:
        'These rules define the power source limitations and general installation requirements for Class 1 circuits.\n\nRule 16-100 (Limitations of Class 1 circuits): Two subrules establish the voltage and power limits:\n(1) Class 1 extra-low-voltage power circuits: source rated output shall NOT exceed 30 V and 1000 VA.\n(2) Class 1 remote control and signal circuits: source shall NOT exceed 600 V.\n\nThis is a fundamental distinction — extra-low-voltage power circuits are strictly limited to 30 V and 1000 VA, while remote control and signal circuits can operate at much higher voltages up to 600 V. The key difference between a Class 1 ELV power circuit and a Class 2 circuit is that Class 1 ELV is NOT current-limited per Rule 16-200.\n\nRule 16-102 (Methods of installation): Class 1 circuit equipment and conductors shall be installed in accordance with the requirements of OTHER appropriate Sections of the Code (i.e., the same standards as regular power wiring), EXCEPT as modified by Rules 16-104 to 16-118. This means Class 1 circuits are essentially treated like power circuits with a few specific modifications.\n\nRule 16-108 (ELV power circuit sources including transformers): To comply with the 1000 VA limitation, the source shall NOT exceed 2500 VA maximum power output, AND the product of maximum current times maximum voltage shall NOT exceed 10,000 VA with overcurrent protection bypassed. This two-part test ensures that even under fault conditions, the source cannot deliver excessive energy.',
      fieldScenario:
        'You are installing a 24 V Class 1 extra-low-voltage power circuit for a commercial door-holder system. The transformer is rated 24 V, 800 VA — this passes Rule 16-100(1) since it is under 30 V and under 1000 VA. You must verify the transformer also passes Rule 16-108: the maximum power output cannot exceed 2500 VA, and with overcurrent protection bypassed, max current times max voltage must not exceed 10,000 VA.\n\nBecause this is a Class 1 circuit, Rule 16-102 tells you to install it per the regular wiring methods of the Code (Section 12, etc.), except for the specific modifications in Rules 16-104 to 16-118. So you will use approved raceways, boxes, and wiring methods just like a regular power circuit.\n\nDown the hall, there is a 480 V motor starter with a 120 V remote control circuit to a start/stop station. That 120 V control circuit is a Class 1 remote control circuit per Rule 16-100(2), since it is under 600 V.',
      keyPoints: [
        'Class 1 ELV power circuits: source shall not exceed 30 V and 1000 VA (Rule 16-100(1))',
        'Class 1 remote control and signal circuits: source shall not exceed 600 V (Rule 16-100(2))',
        'Class 1 circuits installed per other Code sections (same as power wiring), except Rules 16-104 to 16-118 (Rule 16-102)',
        'ELV power source max power output shall not exceed 2500 VA (Rule 16-108)',
        'With overcurrent protection bypassed, max current x max voltage shall not exceed 10,000 VA (Rule 16-108)',
        'The 1000 VA limit in Rule 16-100 is the rated output; Rule 16-108 provides the fault-condition test',
        'Class 1 ELV power differs from Class 2 because current is NOT limited per Rule 16-200 (Rule 16-004)',
        'Class 1 remote control circuits up to 600 V use full Code wiring methods — no relaxed rules',
      ],
      diagramaMermaid: `graph TD
    A["Class 1 Source\\nLimitations"] --> B["Extra-Low-Voltage Power\\n(Rule 16-100-1)"]
    A --> C["Remote Control & Signal\\n(Rule 16-100-2)"]
    B --> D["≤ 30 V\\n≤ 1000 VA rated"]
    C --> E["≤ 600 V"]
    B --> F["Transformer Test\\n(Rule 16-108)"]
    F --> G["Max output ≤ 2500 VA"]
    F --> H["Vmax × Imax ≤ 10,000 VA\\nwith OCP bypassed"]
    I["Installation Method\\n(Rule 16-102)"] --> J["Follow other Code sections\\nsame as power wiring"]
    J --> K["Except modifications in\\nRules 16-104 to 16-118"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: '30 V / 1000 VA', note: 'Maximum for Class 1 ELV power circuit sources — Rule 16-100(1)', color: 'sky' },
        { icon: 'power', title: '600 V Maximum', note: 'Class 1 remote control and signal circuits can go up to 600 V — Rule 16-100(2)', color: 'amber' },
        { icon: 'inspect', title: '2500 VA / 10,000 VA Test', note: 'Rule 16-108 dual test for ELV transformer fault conditions', color: 'violet' },
        { icon: 'ruler', title: 'Same as Power Wiring', note: 'Class 1 circuits follow standard Code wiring methods per Rule 16-102', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 3. CLASS 1 — Overcurrent Protection (Rules 16-104 to 16-106)
    // =========================================================================
    {
      id: '16-class1-ocp',
      title: 'Class 1 — Overcurrent Protection',
      rules: 'Rules 16-104 to 16-106',
      explanation:
        'Overcurrent protection for Class 1 circuits follows Section 14 with important modifications for smaller conductors.\n\nRule 16-104 (Overcurrent protection of Class 1 circuits):\n(1) Conductors shall be protected per Section 14, EXCEPT:\n(a) where other Code rules specifically permit or require other overcurrent protection; or\n(b) where No. 18 AWG or No. 16 AWG copper conductors extend beyond the equipment enclosure, they shall be protected by overcurrent devices rated at a maximum of 5 A (for No. 18 AWG) and 10 A (for No. 16 AWG) respectively.\n(2) Where overcurrent protection is installed at the secondary terminals of the transformer AND the transformer is suitably enclosed, overcurrent protection is NOT required on the primary side other than the normal branch circuit overcurrent protection supplying the transformer.\n\nRule 16-106 (Location of overcurrent devices):\n(1) Overcurrent devices shall be located at the point where the conductor to be protected receives its supply.\n(2) The overcurrent device is permitted to be an integral part of the power supply.\n\nThese rules recognize that Class 1 circuits often use smaller conductors (No. 16 and No. 18 AWG) which have lower ampacity and need tighter overcurrent protection. The 5 A / 10 A limits for No. 18 / No. 16 AWG are frequently tested on the certification exam.',
      fieldScenario:
        'You are wiring a Class 1 remote control circuit from a control transformer to a bank of contactors in a motor control center. The control transformer secondary is 120 V. You run No. 16 AWG conductors in conduit from the transformer to the contactors 30 meters away.\n\nPer Rule 16-104(1)(b), the No. 16 AWG conductors extending beyond the enclosure must be protected at a maximum of 10 A. You install a 10 A fuse at the transformer secondary terminals.\n\nPer Rule 16-104(2), since the fuse is at the transformer secondary and the transformer is in a suitable enclosure, you do NOT need additional overcurrent protection on the primary side beyond the normal branch circuit breaker feeding the transformer.\n\nPer Rule 16-106(1), the fuse must be located at the point where the conductor receives its supply — right at the transformer secondary terminals, not downstream.',
      keyPoints: [
        'Class 1 circuit conductors protected per Section 14, with exceptions (Rule 16-104(1))',
        'No. 18 AWG copper conductors beyond enclosure: max 5 A overcurrent protection (Rule 16-104(1)(b))',
        'No. 16 AWG copper conductors beyond enclosure: max 10 A overcurrent protection (Rule 16-104(1)(b))',
        'Secondary OCP on enclosed transformer eliminates need for primary OCP beyond branch circuit protection (Rule 16-104(2))',
        'Overcurrent device located at point where conductor receives its supply (Rule 16-106(1))',
        'Overcurrent device may be integral part of the power supply (Rule 16-106(2))',
        'The 5 A / 10 A limits for No. 18 / No. 16 AWG are specific to Class 1 circuits extending beyond enclosures',
        'These overcurrent rules are modifications to the general Section 14 requirements',
      ],
      diagramaMermaid: `graph TD
    A["Class 1 Overcurrent\\nProtection (Rule 16-104)"] --> B["General Rule:\\nProtect per Section 14"]
    B --> C["Exception for Small Conductors"]
    C --> D["No. 18 AWG → Max 5 A\\n(Rule 16-104-1-b)"]
    C --> E["No. 16 AWG → Max 10 A\\n(Rule 16-104-1-b)"]
    A --> F["Transformer Rule\\n(Rule 16-104-2)"]
    F --> G["OCP at secondary\\n+ enclosed transformer"]
    G --> H["No extra primary OCP\\nneeded beyond branch ckt"]
    I["OCP Location\\n(Rule 16-106)"] --> J["At point where conductor\\nreceives supply"]
    I --> K["May be integral to\\npower supply"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: '5 A for No. 18 AWG', note: 'Maximum OCP when extending beyond enclosure — Rule 16-104(1)(b)', color: 'rose' },
        { icon: 'shield', title: '10 A for No. 16 AWG', note: 'Maximum OCP when extending beyond enclosure — Rule 16-104(1)(b)', color: 'amber' },
        { icon: 'box', title: 'Enclosed Transformer', note: 'Secondary OCP eliminates need for separate primary OCP — Rule 16-104(2)', color: 'emerald' },
        { icon: 'ruler', title: 'OCP at Supply Point', note: 'Device must be where conductor receives its supply — Rule 16-106(1)', color: 'sky' },
      ],
    },

    // =========================================================================
    // 4. CLASS 1 — Conductors, Insulation & Wiring (Rules 16-110 to 16-112)
    // =========================================================================
    {
      id: '16-class1-conductors',
      title: 'Class 1 — Conductors, Insulation & Wiring',
      rules: 'Rules 16-110 to 16-112',
      explanation:
        'These rules specify the minimum conductor sizes and insulation types permitted in Class 1 circuits.\n\nRule 16-110 (Conductor material and sizes):\n(1) Conductors smaller than No. 14 AWG copper ARE permitted in Class 1 circuits IF installed in one of three ways:\n(a) in a raceway;\n(b) as a cable assembly; or\n(c) within a flexible cord per Rule 12-402.\n(2) Subject to Subrule 1), minimum conductor sizes are:\n(a) No. 16 AWG for individual conductors PULLED into raceways;\n(b) No. 18 AWG for individual conductors LAID in raceways;\n(c) No. 18 AWG for an integral assembly of two or more conductors.\n\nNote the distinction between "pulled" and "laid" — pulled conductors experience more mechanical stress, so the minimum is larger (No. 16 vs No. 18).\n\nRule 16-112 (Insulated conductors for Class 1 wiring):\n(1) Conductors LARGER than No. 16 AWG: use any type per Rule 12-102(3) — standard building wire types.\n(2) Conductors of No. 18 or No. 16 AWG: must be equipment wire of a type suitable for such use per Rule 12-122(1).\n\nThis creates a two-tier insulation system: larger wires use standard building wire, while smaller wires (No. 18 and No. 16) must use specifically rated equipment wire.',
      fieldScenario:
        'You are installing a Class 1 control circuit in an industrial plant. The circuit runs from a control panel to a valve actuator 50 meters away. You decide to use No. 16 AWG conductors in EMT (electrical metallic tubing).\n\nPer Rule 16-110(1)(a), using conductors smaller than No. 14 AWG is allowed because they are in a raceway. Per Rule 16-110(2)(a), No. 16 AWG is the minimum for individual conductors pulled into raceways — and since you are pulling wire through EMT, this meets the requirement.\n\nPer Rule 16-112(2), because you are using No. 16 AWG, you must select equipment wire suitable per Rule 12-122(1), not standard building wire like T90 or RW90.\n\nIf instead you were using a multi-conductor cable assembly (e.g., a 2-conductor control cable), Rule 16-110(2)(c) would allow you to go as small as No. 18 AWG. And if you were laying conductors into an open wireway without pulling, Rule 16-110(2)(b) allows No. 18 AWG individual conductors.',
      keyPoints: [
        'Conductors smaller than No. 14 AWG permitted in Class 1 circuits only in raceway, cable assembly, or flexible cord (Rule 16-110(1))',
        'No. 16 AWG minimum for individual conductors PULLED into raceways (Rule 16-110(2)(a))',
        'No. 18 AWG minimum for individual conductors LAID in raceways (Rule 16-110(2)(b))',
        'No. 18 AWG minimum for integral assembly of 2+ conductors (Rule 16-110(2)(c))',
        'Pulled vs. laid distinction: pulling creates more stress, so minimum size is larger',
        'Conductors larger than No. 16 AWG: use standard building wire types per Rule 12-102(3) (Rule 16-112(1))',
        'No. 18 or No. 16 AWG conductors: must be equipment wire per Rule 12-122(1) (Rule 16-112(2))',
        'All conductors must be copper (Rule 16-110)',
      ],
      diagramaMermaid: `graph TD
    A["Class 1 Conductor\\nRequirements"] --> B["Smaller than No. 14 AWG\\n(Rule 16-110-1)"]
    B --> C["Must be in:\\nRaceway OR Cable Assembly\\nOR Flex Cord"]
    C --> D["Pulled into raceway:\\nMin No. 16 AWG\\n(Rule 16-110-2-a)"]
    C --> E["Laid in raceway:\\nMin No. 18 AWG\\n(Rule 16-110-2-b)"]
    C --> F["Cable assembly 2+:\\nMin No. 18 AWG\\n(Rule 16-110-2-c)"]
    A --> G["Insulation Types\\n(Rule 16-112)"]
    G --> H["Larger than No. 16 AWG:\\nStandard wire per 12-102-3"]
    G --> I["No. 18 or No. 16 AWG:\\nEquipment wire per 12-122-1"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Pulled = No. 16 AWG Min', note: 'Individual conductors pulled into raceways — Rule 16-110(2)(a)', color: 'sky' },
        { icon: 'wire', title: 'Laid = No. 18 AWG Min', note: 'Individual conductors laid in raceways — Rule 16-110(2)(b)', color: 'emerald' },
        { icon: 'label', title: 'Equipment Wire', note: 'No. 18 and No. 16 AWG must be equipment wire per Rule 12-122(1) — Rule 16-112(2)', color: 'violet' },
        { icon: 'ruler', title: 'Standard Wire OK', note: 'Conductors larger than No. 16 AWG use standard types per Rule 12-102(3) — Rule 16-112(1)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 5. CLASS 1 — Mixing Circuits, Mechanical Protection & Aerial (Rules 16-114 to 16-118)
    // =========================================================================
    {
      id: '16-class1-mixing',
      title: 'Class 1 — Mixing Circuits, Mechanical Protection & Aerial Runs',
      rules: 'Rules 16-114 to 16-118',
      explanation:
        'These rules govern when Class 1 circuits can share enclosures with other circuits, mechanical protection requirements, and aerial extensions.\n\nRule 16-114 (Different circuits in the same enclosure, cable, or raceway):\n(1) Different Class 1 circuits MAY share the same enclosure, cable, or raceway — regardless of whether they are AC or DC — PROVIDED all conductors are insulated for the maximum voltage of any conductor in the enclosure, cable, or raceway.\n(2) Insulated power circuits and Class 1 circuits shall NOT share the same enclosure, cable, or raceway EXCEPT when they are connected to the same equipment, AND all conductors are insulated for the maximum voltage of any conductor present.\n\nThis is an important exam topic: you CAN mix different Class 1 circuits together (even AC and DC), but you can only mix power circuits with Class 1 circuits if they serve the same equipment and insulation ratings are met.\n\nRule 16-116 (Mechanical protection of remote control circuits): When mechanical damage to a remote control circuit would result in a hazardous condition per Rule 16-010, ALL conductors of that circuit shall be installed in conduit, EMT, or otherwise suitably protected from mechanical damage, moisture, excessive heat, or corrosive action.\n\nRule 16-118 (Class 1 circuits extending aerially beyond a building): Class 1 circuits that extend aerially beyond a building shall comply with Rules 12-300 to 12-318 (the overhead wiring rules).',
      fieldScenario:
        'In a motor control center (MCC), you have a 480 V motor feeder and a 120 V Class 1 control circuit, both going to the same motor starter. Per Rule 16-114(2), you CAN run both the power and control conductors in the same conduit because they connect to the same equipment. However, ALL conductors must be insulated for 480 V (the maximum voltage present).\n\nIn a separate scenario, you have two Class 1 circuits — one is 120 V AC for lighting control, the other is 24 V DC for a HVAC damper actuator. Per Rule 16-114(1), these CAN share the same raceway even though one is AC and one is DC, as long as all conductors are insulated for 120 V (the maximum voltage).\n\nA safety-critical remote control circuit for an emergency shutdown valve in a chemical plant must be installed in conduit or EMT per Rule 16-116, since mechanical damage could result in a hazardous condition. You cannot just run the cable exposed along the wall.\n\nFinally, a Class 1 control circuit running from a building to an outdoor antenna tower must follow the aerial wiring rules of Rules 12-300 to 12-318 per Rule 16-118.',
      keyPoints: [
        'Different Class 1 circuits (AC or DC) may share the same enclosure if all insulated for max voltage (Rule 16-114(1))',
        'Power circuits and Class 1 circuits shall NOT share enclosures UNLESS connected to the same equipment (Rule 16-114(2))',
        'When power and Class 1 share an enclosure, ALL conductors must be insulated for the maximum voltage present (Rule 16-114(2))',
        'Safety-critical remote control circuits must be in conduit, EMT, or suitably protected (Rule 16-116)',
        'Protection required against mechanical damage, moisture, excessive heat, and corrosive action (Rule 16-116)',
        'Rule 16-116 applies when damage would create a hazardous condition per Rule 16-010',
        'Class 1 circuits extending aerially beyond a building must follow Rules 12-300 to 12-318 (Rule 16-118)',
        'Mixing circuits requires insulation rated for the HIGHEST voltage present in the shared enclosure',
      ],
      diagramaMermaid: `graph TD
    A["Mixing Circuits\\n(Rule 16-114)"] --> B{"Same equipment?"}
    B -->|"Yes"| C["Power + Class 1\\nCAN share raceway"]
    B -->|"No"| D["Power + Class 1\\nCANNOT share raceway"]
    C --> E["ALL conductors insulated\\nfor max voltage"]
    F["Class 1 + Class 1\\n(Rule 16-114-1)"] --> G["CAN share raceway\\nAC or DC mixed OK"]
    G --> E
    H["Safety-Critical Circuits\\n(Rule 16-116)"] --> I["Must use conduit, EMT,\\nor suitable protection"]
    I --> J["Protect from damage,\\nmoisture, heat, corrosion"]
    K["Aerial Extension\\n(Rule 16-118)"] --> L["Follow Rules\\n12-300 to 12-318"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Class 1 + Class 1 OK', note: 'Different Class 1 circuits can share raceway regardless of AC/DC — Rule 16-114(1)', color: 'emerald' },
        { icon: 'warning', title: 'Power + Class 1 Restricted', note: 'Only when connected to the same equipment — Rule 16-114(2)', color: 'rose' },
        { icon: 'shield', title: 'Conduit for Safety Circuits', note: 'Mechanical protection required for hazardous-condition circuits — Rule 16-116', color: 'amber' },
        { icon: 'post', title: 'Aerial = Section 12 Rules', note: 'Class 1 circuits going outside must follow overhead wiring rules — Rule 16-118', color: 'sky' },
      ],
    },

    // =========================================================================
    // 6. CLASS 2 — Source Limitations (Rule 16-200)
    // =========================================================================
    {
      id: '16-class2-limitations',
      title: 'Class 2 — Source Limitations & Current Limiting',
      rules: 'Rule 16-200',
      explanation:
        'Rule 16-200 is the heart of Class 2 circuit classification. It establishes four voltage tiers with specific current-limiting requirements that make Class 2 circuits inherently safer.\n\nRule 16-200(1) — Four voltage tiers:\n\n(a) 0 to 20 V: overcurrent protection rated not exceeding 5 A. Exceptions — no OCP required when supplied from: (i) primary batteries that under short-circuit will not supply more than 7.5 A after 1 minute; (ii) a transformer or power supply with Class 2 output; or (iii) a device that limits output to 5 A and output VA to 5 A times open-circuit voltage.\n\n(b) Over 20 V to 30 V: OCP rated not exceeding 100 VA divided by open-circuit voltage. Exceptions — no OCP required from: (i) primary batteries not exceeding 5 A after 1 min short-circuit; (ii) Class 2 output transformer/supply; (iii) device limiting current to 100 VA divided by open-circuit voltage.\n\n(c) Over 30 V to 60 V: OCP rated not exceeding 100 VA divided by open-circuit voltage. Exceptions from: (i) Class 2 output transformer/supply; or (ii) device limiting current to 100 VA divided by open-circuit voltage. NOTE: primary batteries are NOT an exception at this voltage level.\n\n(d) Over 60 V to 150 V: OCP rated not exceeding 100 VA divided by open-circuit voltage, AND in addition, current-limiting means (other than OCP) that limits output to 100 VA divided by open-circuit voltage. This tier requires BOTH overcurrent protection AND additional current limiting.\n\nRule 16-200(2): Energy-limiting device may be a series resistor of suitable rating or similar device.\n\nRule 16-200(3): Class 2 power supplies shall NOT be connected in series or parallel with another Class 2 source. This prevents defeating the current/voltage limitations.\n\nRule 16-200(4): A device with Class 2 output may serve as the energy-limiting device, provided it is marked as suitable.',
      fieldScenario:
        'You are designing a 24 V security system for a commercial building. The open-circuit voltage of the power supply is 24 V, which falls in the "over 20 V to 30 V" tier (Rule 16-200(1)(b)). The maximum OCP rating is 100 VA / 24 V = 4.17 A. You would use a 4 A fuse.\n\nAlternatively, if the power supply has a Class 2 rated output, no separate OCP is needed per the exception in (b)(ii).\n\nA colleague asks if they can parallel two 24 V Class 2 power supplies to get more current for a large sensor network. Rule 16-200(3) says NO — Class 2 supplies shall not be connected in series or parallel. Each zone needs its own independent Class 2 source.\n\nFor a 48 V PoE midspan injector (over 30 V to 60 V tier), the max OCP is 100 VA / 48 V = 2.08 A. At this voltage, you cannot use primary batteries as an exception — only a Class 2 rated output or inherently current-limiting device qualifies.\n\nFor a 120 V Class 2 signaling circuit (over 60 V to 150 V tier), you need BOTH a fuse rated at 100 VA / 120 V = 0.83 A AND a separate current-limiting device such as a series resistor.',
      keyPoints: [
        '0-20 V: OCP max 5 A; exceptions for batteries ≤7.5 A at 1 min, Class 2 output, or current-limiting device (Rule 16-200(1)(a))',
        'Over 20-30 V: OCP max = 100 VA / open-circuit voltage; same three exceptions with battery limit of 5 A (Rule 16-200(1)(b))',
        'Over 30-60 V: OCP max = 100 VA / open-circuit voltage; only two exceptions — NO primary batteries (Rule 16-200(1)(c))',
        'Over 60-150 V: OCP max = 100 VA / open-circuit voltage PLUS additional current-limiting means required (Rule 16-200(1)(d))',
        'Energy-limiting device may be a series resistor or similar device (Rule 16-200(2))',
        'Class 2 power supplies shall NOT be connected in series or parallel (Rule 16-200(3))',
        'Device with Class 2 output may serve as energy-limiting device if marked suitable (Rule 16-200(4))',
        'The 100 VA formula applies at all tiers above 20 V: max amps = 100 VA ÷ open-circuit voltage',
        'Primary batteries are only allowed as exceptions in the 0-20 V and 20-30 V tiers',
        'The over 60-150 V tier is the only one requiring BOTH OCP and a separate current-limiting device',
      ],
      diagramaMermaid: `graph TD
    A["Class 2 Voltage Tiers\\n(Rule 16-200)"] --> B["0 to 20 V"]
    A --> C["Over 20 V to 30 V"]
    A --> D["Over 30 V to 60 V"]
    A --> E["Over 60 V to 150 V"]
    B --> F["OCP ≤ 5 A\\nBattery ≤ 7.5 A exception"]
    C --> G["OCP ≤ 100 VA / Voc\\nBattery ≤ 5 A exception"]
    D --> H["OCP ≤ 100 VA / Voc\\nNO battery exception"]
    E --> I["OCP ≤ 100 VA / Voc\\n+ Current-limiting device"]
    J["NEVER series or\\nparallel Class 2 sources\\n(Rule 16-200-3)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style J fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: '100 VA Formula', note: 'Max amps = 100 VA ÷ open-circuit voltage — applies above 20 V', color: 'sky' },
        { icon: 'warning', title: 'No Series or Parallel', note: 'Class 2 sources shall never be combined — Rule 16-200(3)', color: 'rose' },
        { icon: 'thermometer', title: 'Four Voltage Tiers', note: '0-20 V, 20-30 V, 30-60 V, 60-150 V — each with different rules', color: 'amber' },
        { icon: 'shield', title: 'Dual Protection Above 60 V', note: 'Over 60-150 V requires OCP AND separate current-limiting — Rule 16-200(1)(d)', color: 'violet' },
        { icon: 'lock', title: 'Battery Exceptions Limited', note: 'Primary batteries only excepted at 0-20 V and 20-30 V tiers — not above 30 V', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 7. CLASS 2 — Supply Side Installation, Marking & OCP (Rules 16-202 to 16-208)
    // =========================================================================
    {
      id: '16-class2-supply-marking',
      title: 'Class 2 — Supply Side Installation, Marking & Overcurrent Protection',
      rules: 'Rules 16-202 to 16-208',
      explanation:
        'These rules cover the supply side of Class 2 circuits, equipment marking requirements, and overcurrent protection details.\n\nRule 16-202 (Methods of installation on supply side):\n(1) Conductors and equipment on the SUPPLY SIDE of overcurrent protection, transformers, or Class 2 output devices shall be installed per the requirements of other appropriate Code sections — just like regular power wiring. The relaxed Class 2 wiring rules only apply on the LOAD side.\n(2) Transformers or devices with Class 2 outputs shall be protected on the supply side by an overcurrent device rated or set at not more than 20 A.\n\nRule 16-204 (Marking): Class 2 power supply units must have PERMANENT markings that are readily visible AFTER installation, indicating: (a) the class of supply and its electrical rating; and (b) suitability for wet locations when intended for wet locations.\n\nRule 16-206 (Overcurrent protection for Class 2 circuits):\n(1) Overcurrent protection of different ratings shall NOT be of an interchangeable type — you cannot swap in a larger fuse.\n(2) The overcurrent protection is permitted to be an integral part of the transformer or power supply device.\n\nRule 16-208 (Location of overcurrent devices): Overcurrent devices shall be located at the point where the conductors to be protected receive their supply — at the source, not downstream.',
      fieldScenario:
        'You are installing a Class 2 thermostat circuit in a commercial building. The 24 V transformer is mounted near the furnace. On the SUPPLY side (120 V primary), Rule 16-202(1) requires standard power wiring methods — you use NMD90 cable protected by the 15 A branch circuit breaker. Rule 16-202(2) confirms the primary side protection cannot exceed 20 A.\n\nThe transformer must have permanent markings visible after mounting: "Class 2, 120 V Primary / 24 V Secondary, 40 VA" per Rule 16-204(a). If this transformer were rated for outdoor use, it would also need a wet location marking per Rule 16-204(b).\n\nThe transformer has a built-in 2 A fuse on the secondary — this is permitted per Rule 16-206(2). The fuse is a special type that cannot be replaced with a larger one, meeting Rule 16-206(1). The fuse is right at the transformer secondary terminals, satisfying Rule 16-208.',
      keyPoints: [
        'Supply side of Class 2 circuits must be installed per standard Code wiring methods (Rule 16-202(1))',
        'Transformers/devices with Class 2 outputs: supply side OCP max 20 A (Rule 16-202(2))',
        'Class 2 power supply must have permanent markings visible after installation (Rule 16-204)',
        'Markings must indicate class of supply, electrical rating, and wet location suitability if applicable (Rule 16-204)',
        'OCP of different ratings shall NOT be interchangeable — prevents upsizing (Rule 16-206(1))',
        'OCP may be integral part of transformer or power supply (Rule 16-206(2))',
        'OCP located at point where conductors receive their supply (Rule 16-208)',
        'The 20 A maximum on the supply side protects the transformer itself',
        'Relaxed Class 2 wiring methods only apply on the LOAD side of the overcurrent protection',
      ],
      diagramaMermaid: `graph TD
    A["Class 2 Circuit\\nSupply & Load Sides"] --> B["SUPPLY Side\\n(Rule 16-202)"]
    A --> C["LOAD Side\\n(Class 2 rules apply)"]
    B --> D["Standard Code\\nwiring methods"]
    B --> E["OCP ≤ 20 A on\\nprimary (Rule 16-202-2)"]
    C --> F["Relaxed wiring\\nmethods allowed"]
    G["Marking\\n(Rule 16-204)"] --> H["Class, rating,\\nwet location\\npermanent & visible"]
    I["OCP Details"] --> J["Non-interchangeable\\n(Rule 16-206-1)"]
    I --> K["May be integral\\n(Rule 16-206-2)"]
    I --> L["At supply point\\n(Rule 16-208)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Supply Side = Full Code', note: 'Standard wiring methods required on the supply side — Rule 16-202(1)', color: 'sky' },
        { icon: 'shield', title: 'Max 20 A Primary', note: 'Supply side OCP for Class 2 transformers capped at 20 A — Rule 16-202(2)', color: 'amber' },
        { icon: 'label', title: 'Permanent Markings', note: 'Class, rating, wet location suitability — visible after installation — Rule 16-204', color: 'emerald' },
        { icon: 'lock', title: 'Non-Interchangeable OCP', note: 'Cannot swap in a larger fuse — different ratings not interchangeable — Rule 16-206(1)', color: 'rose' },
      ],
    },

    // =========================================================================
    // 8. CLASS 2 — Conductors and Cables (Rule 16-210)
    // =========================================================================
    {
      id: '16-class2-conductors',
      title: 'Class 2 — Conductors and Cables',
      rules: 'Rule 16-210',
      explanation:
        'Rule 16-210 is a comprehensive rule with seven subrules covering conductor types, cable types, minimum sizes, and ampacity for Class 2 circuits.\n\nRule 16-210(1) (Conductor types): Conductors shall be suitable per Rule 12-102(3), except that where smaller than No. 14 AWG are permitted, equipment wire types REW, SEW-1, SEWF-1, TEW, and TEWN are permitted provided they are installed in raceways.\n\nRule 16-210(2) (Type ELC cables): Limited to: (a) Class 2 circuits at 30 V or less; (b) dwelling units in combustible construction; (c) dry locations; and (d) where not subject to mechanical damage. Type ELC is a lightweight cable that cannot handle harsh conditions.\n\nRule 16-210(3): Type ELC cables shall NOT be used for heating control circuits or fire safety circuits (fire alarm, smoke alarm).\n\nRule 16-210(4) (Minimum conductor sizes — copper only):\n(a) No. 16 AWG for individual conductors pulled into raceways;\n(b) No. 19 AWG for individual conductors laid in raceways;\n(c) No. 19 AWG for an assembly of 2+ conductors;\n(d) No. 22 AWG for an assembly of 4+ conductors;\n(e) No. 24 AWG for an assembly of 6+ conductors;\n(f) No. 26 AWG for an assembly of 10+ conductors.\n\nNote: more conductors in the assembly = smaller minimum size allowed.\n\nRule 16-210(5): Notwithstanding (4)(d), Type ELC copper conductors are permitted in an assembly of 2+ conductors where NOT pulled into raceways.\n\nRule 16-210(6): Max allowable current per Table 57 for No. 16 AWG and smaller, but never exceeding the current limits of Rule 16-200.\n\nRule 16-210(7): Notwithstanding (4) and (6), eight-conductor cables for Class 2 power and data communication circuits are permitted per Table 60.',
      fieldScenario:
        'You are wiring a low-voltage thermostat circuit in a new house (combustible construction). You want to use Type ELC cable. Per Rule 16-210(2), this is allowed because: (a) the circuit is 24 V (under 30 V); (b) it is a dwelling unit in combustible construction; (c) it will be in dry locations behind walls; and (d) it will be concealed and not subject to mechanical damage.\n\nHowever, if this were a fire alarm circuit, Rule 16-210(3) prohibits Type ELC — you must use a more robust cable type.\n\nFor a commercial security system using a multi-conductor cable with 8 conductors, Rule 16-210(4)(e) allows you to go as small as No. 24 AWG (assembly of 6+ conductors). If the cable had 12 conductors, Rule 16-210(4)(f) allows No. 26 AWG (assembly of 10+).\n\nIn all cases, Rule 16-210(6) caps the current per Table 57 values and Rule 16-200 limitations — the small wire does not mean unlimited current.',
      keyPoints: [
        'Conductor types per Rule 12-102(3); equipment wire types REW, SEW-1, SEWF-1, TEW, TEWN permitted in raceways (Rule 16-210(1))',
        'Type ELC limited to: ≤30 V, dwelling units in combustible construction, dry locations, no mechanical damage (Rule 16-210(2))',
        'Type ELC NOT permitted for heating control or fire safety circuits (Rule 16-210(3))',
        'No. 16 AWG min for individual conductors pulled into raceways (Rule 16-210(4)(a))',
        'No. 19 AWG min for individual conductors laid in raceways (Rule 16-210(4)(b))',
        'No. 19 AWG min for 2+ conductor assembly; No. 22 for 4+; No. 24 for 6+; No. 26 for 10+ (Rule 16-210(4))',
        'Type ELC permitted in 2+ conductor assembly where not pulled into raceways (Rule 16-210(5))',
        'Max current per Table 57 for No. 16 AWG and smaller, never exceeding Rule 16-200 limits (Rule 16-210(6))',
        'Eight-conductor cables for Class 2 power and data comm circuits permitted per Table 60 (Rule 16-210(7))',
        'All Class 2 conductors must be copper',
      ],
      diagramaMermaid: `graph TD
    A["Class 2 Conductors\\n(Rule 16-210)"] --> B["Conductor Types\\n(Subrule 1)"]
    A --> C["Type ELC Cable\\n(Subrules 2-3)"]
    A --> D["Minimum Sizes\\n(Subrule 4)"]
    A --> E["Ampacity\\n(Subrules 6-7)"]
    C --> F["≤30 V, dwelling,\\ndry, no damage"]
    C --> G["NOT for fire alarm\\nor heating control"]
    D --> H["Pulled: No. 16 AWG"]
    D --> I["Laid: No. 19 AWG"]
    D --> J["2+ assembly: No. 19"]
    D --> K["4+: No. 22\\n6+: No. 24\\n10+: No. 26"]
    E --> L["Table 57 limits\\n+ Rule 16-200 caps"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Type ELC Restrictions', note: 'Only for ≤30 V, dwellings, dry, no damage — NOT for fire alarm — Rule 16-210(2)(3)', color: 'rose' },
        { icon: 'ruler', title: 'Size Scales with Count', note: 'More conductors in assembly = smaller minimum: 2+→No.19, 4+→No.22, 6+→No.24, 10+→No.26', color: 'sky' },
        { icon: 'bolt', title: 'Table 57 Ampacity', note: 'Max current for No. 16 AWG and smaller, capped by Rule 16-200 — Rule 16-210(6)', color: 'amber' },
        { icon: 'label', title: 'Equipment Wire in Raceway', note: 'Types REW, SEW-1, SEWF-1, TEW, TEWN allowed when in raceways — Rule 16-210(1)', color: 'emerald' },
        { icon: 'inspect', title: 'Table 60 for PoE', note: 'Eight-conductor cables for power/data comm per Table 60 — Rule 16-210(7)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 9. CLASS 2 — Separation from Other Circuits (Rules 16-212 to 16-214)
    // =========================================================================
    {
      id: '16-class2-separation',
      title: 'Class 2 — Separation from Other Circuits',
      rules: 'Rules 16-212 to 16-214',
      explanation:
        'Rule 16-212 is one of the most important and most-tested rules in Section 16. It establishes strict separation requirements between Class 2 circuits and power/lighting/Class 1 circuits.\n\nRule 16-212(1) (Physical separation): Class 2 conductors and cables shall be separated from power, lighting, or Class 1 circuits:\n- At least 50 mm from circuits operating at 300 V or less\n- At least 600 mm from circuits operating at more than 300 V\nUNLESS effective separation is provided by:\n(a) metal raceways (bonded to ground) for either the Class 2 or the power circuits;\n(b) metal-sheathed or armoured cable for the power circuits (sheath/armour bonded to ground);\n(c) non-metallic-sheathed cable for power circuits at 300 V or less; or\n(d) non-metallic conduit, ENT, insulated tubing, or equivalent for the power circuits.\n\nRule 16-212(2) (Bare conductors): Where power conductors are BARE, ALL Class 2 circuits in the same room must be in a bonded metal raceway, with no openings (outlet boxes) within 2 m of bare conductors up to 15 kV, or 3 m above 15 kV.\n\nRule 16-212(3) (No sharing enclosures): Class 2 circuits shall NOT be in any raceway, box, or fitting with power/lighting/Class 1 conductors, unless separated by an acceptable barrier.\n\nRule 16-212(4) (Exception for power supply): Subrule 3 does not apply when power conductors are in the enclosure solely to supply the Class 2 circuit, all conductors are insulated for the max voltage, and no Class 2 conductor shows green insulation (unless completely in a jacketed cable throughout the shared enclosure).\n\nRule 16-212(5) (Hybrid cable exception): Power and Class 1 conductors may be in a cable containing Class 2 conductors if the cable is marked suitable for the application, the Class 2 conductors are intended for supply/control of remote devices associated with the non-Class 2 conductors, and all are insulated for max voltage.\n\nRule 16-214 (Different Class 2 circuits together): Multiple Class 2 circuits MAY share the same cable, enclosure, or raceway, provided all conductors are insulated for the maximum voltage of any conductor present.',
      fieldScenario:
        'In a commercial office, you are running 24 V Class 2 thermostat cable alongside 120/208 V branch circuit wiring. Per Rule 16-212(1), you need at least 50 mm separation since the power circuits are under 300 V. However, if you run the power circuits in EMT (metal raceway bonded to ground), no separation distance is needed per exception (a).\n\nAt the HVAC unit, the 120 V power and 24 V thermostat wires must enter the same junction box. Rule 16-212(4) allows this because the 120 V power is there solely to supply the HVAC unit (which the Class 2 circuit serves), and all conductors are insulated for 120 V. But the thermostat wire CANNOT have green insulation in that box unless it is in a jacketed cable.\n\nA contractor asks if two different Class 2 circuits (24 V thermostat and 12 V door chime) can share the same raceway. Rule 16-214 says yes — as long as both are insulated for the higher voltage (24 V).\n\nIn a substation with 25 kV bare busbars, Rule 16-212(2) says any Class 2 wiring in that room must be in bonded metal raceway with no outlet boxes within 3 m of the busbars.',
      keyPoints: [
        'Class 2 separated at least 50 mm from power/Class 1 at ≤300 V, 600 mm from >300 V (Rule 16-212(1))',
        'Separation not required if metal raceway (bonded), armoured cable, NMS cable, or non-metallic conduit is used (Rule 16-212(1)(a-d))',
        'Where power conductors are bare: Class 2 in bonded metal raceway, no outlets within 2 m (≤15 kV) or 3 m (>15 kV) (Rule 16-212(2))',
        'Class 2 shall NOT share enclosures with power/Class 1 unless separated by a barrier (Rule 16-212(3))',
        'Exception: power conductors in enclosure solely to supply the Class 2 circuit, all insulated for max voltage (Rule 16-212(4))',
        'No green insulation on Class 2 conductors in shared enclosure unless in jacketed cable throughout (Rule 16-212(4))',
        'Hybrid cable with power + Class 2 permitted if cable marked suitable and Class 2 serves the same devices (Rule 16-212(5))',
        'Different Class 2 circuits may share cable/enclosure/raceway if insulated for max voltage (Rule 16-214)',
        'The 50 mm and 600 mm separation distances are among the most frequently tested values in exam prep',
      ],
      diagramaMermaid: `graph TD
    A["Class 2 Separation\\n(Rule 16-212)"] --> B["From ≤300 V circuits:\\n≥ 50 mm"]
    A --> C["From >300 V circuits:\\n≥ 600 mm"]
    A --> D["Exceptions to\\ndistance rules"]
    D --> E["Metal raceway\\nbonded to ground"]
    D --> F["Armoured/metal-sheathed\\ncable bonded"]
    D --> G["NMS cable ≤300 V"]
    D --> H["Non-metallic conduit\\nor ENT"]
    I["No Shared Enclosures\\n(Rule 16-212-3)"] --> J["Exception: power feeding\\nClass 2 circuit\\n(Rule 16-212-4)"]
    J --> K["No green insulation\\non Class 2 unless\\nin jacketed cable"]
    L["Class 2 + Class 2\\n(Rule 16-214)"] --> M["CAN share enclosure\\nInsulate for max voltage"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style M fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '50 mm / 600 mm', note: 'Separation from ≤300 V / >300 V circuits unless barriers used — Rule 16-212(1)', color: 'amber' },
        { icon: 'shield', title: 'Metal Raceway Exception', note: 'Bonded metal raceway eliminates separation distance — Rule 16-212(1)(a)', color: 'emerald' },
        { icon: 'warning', title: 'No Green Insulation', note: 'Class 2 wire in shared enclosure cannot show green unless in jacketed cable — Rule 16-212(4)', color: 'rose' },
        { icon: 'wire', title: 'Class 2 + Class 2 OK', note: 'Multiple Class 2 circuits can share raceway, insulate for max voltage — Rule 16-214', color: 'sky' },
        { icon: 'lock', title: 'Bare Conductors = 2-3 m', note: 'No outlets within 2 m of bare ≤15 kV or 3 m of bare >15 kV — Rule 16-212(2)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 10. CLASS 2 — Fire Separations, Vertical Shafts, Ducts & Plenums (Rules 16-216 to 16-220)
    // =========================================================================
    {
      id: '16-class2-fire-ducts',
      title: 'Class 2 — Fire Separations, Vertical Shafts, Ducts & Plenums',
      rules: 'Rules 16-216 to 16-220',
      explanation:
        'These rules ensure that Class 2 wiring does not compromise fire safety in critical building areas.\n\nRule 16-216 (Penetration of a fire separation): Class 2 conductors and cables extending through a fire separation shall be installed so as to LIMIT FIRE SPREAD in accordance with Rule 2-128. This means proper firestopping is required — you cannot just poke a cable through a fire-rated wall without sealing the penetration.\n\nRule 16-218 (Conductors in vertical shafts and hoistways): Class 2 conductors and cables installed in a vertical shaft or hoistway shall meet the requirements of Rules 2-128 AND 2-130. Rule 2-128 addresses fire separation penetrations, and Rule 2-130 addresses wiring in vertical shafts — requiring fire-resistant cables or metal raceways to prevent fire from traveling vertically through the building.\n\nRule 16-220 (Ducts and plenum chambers): Class 2 conductors, cables, and equipment shall NOT be placed in ducts or plenum chambers EXCEPT as permitted by Rules 2-130 and 12-010. Air ducts and plenums are particularly dangerous because smoke and toxic fumes from burning cable insulation can be distributed throughout the building by the HVAC system. Only plenum-rated cables or cables in metal conduit are typically permitted.\n\nThese three rules are frequently tested because they involve life safety. Many electricians make the mistake of treating Class 2 wiring as "just low voltage" and running it casually through fire-rated assemblies, shafts, and plenums without proper protection.',
      fieldScenario:
        'You are running Class 2 security camera cables in a 10-story office building. The cables must travel vertically from floor to floor through a vertical shaft.\n\nPer Rule 16-218, the cables in the vertical shaft must comply with Rule 2-128 (firestopping at each fire separation penetration) and Rule 2-130 (vertical shaft wiring requirements). You will need to use fire-rated cable or install the cables in metal conduit, and firestop every floor penetration.\n\nThe building designer asks you to run the camera cables through the return-air plenum above the ceiling. Rule 16-220 says NO — unless the cables are plenum-rated (FT6 or equivalent) or run in metal conduit as permitted by Rules 2-130 and 12-010. Standard PVC-jacketed Class 2 cable would produce toxic smoke if it burned in the plenum, and the HVAC system would spread that smoke throughout the building.\n\nAt each floor, the cable passes through a 2-hour fire-rated wall into the corridor. Per Rule 16-216, every penetration must be firestopped per Rule 2-128 to limit fire spread. A simple rubber grommet is not sufficient — you need listed firestop material rated for the assembly.',
      keyPoints: [
        'Fire separation penetrations: install to limit fire spread per Rule 2-128 (Rule 16-216)',
        'Vertical shafts and hoistways: must meet Rules 2-128 AND 2-130 (Rule 16-218)',
        'Ducts and plenums: Class 2 conductors NOT permitted except per Rules 2-130 and 12-010 (Rule 16-220)',
        'Firestopping required at every penetration of a fire-rated assembly',
        'Vertical shafts require fire-resistant cable or metal raceways to prevent fire spread between floors',
        'Plenum spaces require plenum-rated cable (FT6 or equivalent) or metal conduit',
        'Standard PVC-jacketed cable is NOT permitted in plenums due to toxic smoke',
        'These rules apply equally to Class 2 low-voltage wiring — "low voltage" does not mean "no fire risk"',
      ],
      diagramaMermaid: `graph TD
    A["Class 2 in\\nFire-Critical Areas"] --> B["Fire Separations\\n(Rule 16-216)"]
    A --> C["Vertical Shafts\\n(Rule 16-218)"]
    A --> D["Ducts & Plenums\\n(Rule 16-220)"]
    B --> E["Limit fire spread\\nper Rule 2-128"]
    E --> F["Listed firestop\\nmaterial required"]
    C --> G["Comply with\\nRules 2-128 + 2-130"]
    G --> H["Fire-resistant cable\\nor metal raceway"]
    D --> I["NOT permitted\\nexcept per\\nRules 2-130 + 12-010"]
    I --> J["Plenum-rated cable\\nor metal conduit"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Firestop Every Penetration', note: 'Listed firestop material per Rule 2-128 at every fire separation — Rule 16-216', color: 'rose' },
        { icon: 'box', title: 'Vertical Shaft Rules', note: 'Fire-resistant cable or metal raceway per Rules 2-128 and 2-130 — Rule 16-218', color: 'amber' },
        { icon: 'warning', title: 'No Standard Cable in Plenums', note: 'Only plenum-rated or in metal conduit — toxic smoke risk — Rule 16-220', color: 'violet' },
        { icon: 'shield', title: 'Low Voltage ≠ No Fire Risk', note: 'Class 2 wiring still requires full fire safety compliance in critical areas', color: 'sky' },
      ],
    },

    // =========================================================================
    // 11. CLASS 2 — Equipment on Load Side & Operating Voltages (Rule 16-222)
    // =========================================================================
    {
      id: '16-class2-equipment',
      title: 'Class 2 — Load-Side Equipment & Operating Voltage Limits',
      rules: 'Rule 16-222',
      explanation:
        'Rule 16-222 defines what equipment is acceptable on the load side of Class 2 circuits and establishes maximum operating voltages.\n\nRule 16-222(1) (Equipment requirements):\n(a) For circuits at not more than 42.4 V peak: equipment must be acceptable for the particular application (no formal approval needed).\n(b) For circuits at more than 42.4 V peak: equipment must comply with Rule 2-024(1) — it must be formally approved.\n\nThe 42.4 V peak threshold is significant because it is generally considered the shock hazard threshold.\n\nRule 16-222(2) (Exceptions requiring approval): Even at 42.4 V or less, lighting products, electromedical equipment, equipment for hazardous locations, and thermostats incorporating heat anticipators must comply with Rule 2-024(1) — they must be formally approved regardless of voltage.\n\nRule 16-222(3) (Maximum operating voltages):\n(a) Dry or damp locations:\n(i) 30 V rms for sinusoidal AC;\n(ii) 42.4 V peak for nonsinusoidal AC;\n(iii) 60 V continuous DC;\n(iv) 24.8 V peak for interrupted DC (square wave at 10 to 200 Hz).\n(b) Wet locations (not including immersion):\n(i) 15 V rms for sinusoidal AC;\n(ii) 21.2 V peak for nonsinusoidal AC;\n(iii) 30 V continuous DC;\n(iv) 12.4 V peak for interrupted DC.\n\nNotice that wet location limits are exactly HALF of the dry location limits. This is a common exam question.',
      fieldScenario:
        'You are installing Class 2 landscape lighting (wet location) powered by a 12 V AC transformer. Per Rule 16-222(3)(b)(i), the maximum for sinusoidal AC in wet locations is 15 V rms — your 12 V system is fine. If someone tried to use a 24 V transformer for outdoor landscape lighting, it would exceed the 15 V wet location limit.\n\nInside the building, you are installing Class 2 LED strip lighting at 24 V DC in a dry ceiling cavity. Per Rule 16-222(3)(a)(iii), the dry location DC limit is 60 V — well within limits. However, per Rule 16-222(2), lighting products must comply with Rule 2-024(1) and be formally approved, even though they operate below 42.4 V peak.\n\nA security camera at 48 V DC (continuous) in a dry location is within the 60 V DC limit per Rule 16-222(3)(a)(iii). Since 48 V DC exceeds 42.4 V peak, the camera must be formally approved per Rule 16-222(1)(b).\n\nA thermostat operating at 24 V AC seems like it would only need to be "acceptable for the application" under Rule 16-222(1)(a), but Rule 16-222(2) specifically calls out thermostats with heat anticipators as needing formal approval.',
      keyPoints: [
        'Equipment at ≤42.4 V peak: must be acceptable for the application (Rule 16-222(1)(a))',
        'Equipment at >42.4 V peak: must be formally approved per Rule 2-024(1) (Rule 16-222(1)(b))',
        'Lighting, electromedical, hazardous location equipment, and thermostats with heat anticipators always need approval (Rule 16-222(2))',
        'Dry/damp: max 30 V rms AC, 42.4 V peak non-sinusoidal AC, 60 V DC, 24.8 V peak interrupted DC (Rule 16-222(3)(a))',
        'Wet location: max 15 V rms AC, 21.2 V peak non-sinusoidal AC, 30 V DC, 12.4 V peak interrupted DC (Rule 16-222(3)(b))',
        'Wet location voltage limits are exactly HALF of dry location limits',
        'The 42.4 V peak threshold divides "acceptable" from "must be approved" equipment',
        'Interrupted DC means square wave DC at a rate of 10 to 200 Hz (Rule 16-222(3))',
        'Wet location limits do NOT include immersion — immersion has separate requirements',
      ],
      diagramaMermaid: `graph TD
    A["Load-Side Equipment\\n(Rule 16-222)"] --> B{"Voltage ≤ 42.4 V peak?"}
    B -->|"Yes"| C["Acceptable for\\napplication (Rule 16-222-1-a)"]
    B -->|"No"| D["Must be approved\\nper Rule 2-024-1"]
    C --> E{"Lighting, electromedical,\\nhazloc, or thermostat\\nwith heat anticipator?"}
    E -->|"Yes"| D
    E -->|"No"| F["No formal\\napproval needed"]
    G["Max Voltages\\n(Rule 16-222-3)"] --> H["DRY/DAMP"]
    G --> I["WET"]
    H --> J["30 Vrms AC\\n60 V DC\\n42.4 V peak"]
    I --> K["15 Vrms AC\\n30 V DC\\n21.2 V peak"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style K fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: '42.4 V Peak Threshold', note: 'Below = acceptable for application; above = must be approved — Rule 16-222(1)', color: 'sky' },
        { icon: 'sun', title: 'Wet = Half of Dry', note: 'Wet location voltage limits are exactly half: 15 V vs 30 V AC, 30 V vs 60 V DC', color: 'amber' },
        { icon: 'inspect', title: 'Always Approve These', note: 'Lighting, electromedical, hazloc equipment, thermostats w/ heat anticipators — Rule 16-222(2)', color: 'rose' },
        { icon: 'thermometer', title: 'Interrupted DC', note: 'Square wave at 10-200 Hz: 24.8 V peak dry, 12.4 V peak wet — Rule 16-222(3)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 12. CLASS 2 — Beyond Buildings & Underground (Rules 16-224 to 16-226)
    // =========================================================================
    {
      id: '16-class2-exterior',
      title: 'Class 2 — Extending Beyond Buildings & Underground Installations',
      rules: 'Rules 16-224 to 16-226',
      explanation:
        'These rules address Class 2 circuits that leave the building environment, either aerially or underground.\n\nRule 16-224 (Extending beyond a building): Where Class 2 cables or conductors extend beyond a building and are run in a manner subject to accidental contact with lighting or power conductors operating at more than 300 V between conductors, the Class 2 circuits shall ALSO meet the requirements of Section 60 (Communication Systems). This protects against the scenario where a low-voltage Class 2 cable could become energized at high voltage from accidental contact with overhead power lines.\n\nRule 16-226 (Underground installations):\n(1) Underground Class 2 circuits shall be installed per Rule 12-012 (the general underground wiring rule).\n(2) Direct buried Class 2 circuits shall maintain a minimum horizontal separation of 300 mm from other underground systems, EXCEPT as permitted by Subrule 3.\n(3) Direct buried Class 2 circuits may be placed at random separation in a common trench with power circuits that SOLELY supply power to the Class 2 circuits, PROVIDED:\n(a) the Class 2 circuit is in metal-sheathed cable with sheath bonded to ground;\n(b) the power circuit operates at 750 V or less; and\n(c) all cables are insulated for the maximum voltage of any cable in the trench.\n\nThe 300 mm horizontal separation rule and the three conditions for the common-trench exception are important exam topics. Note that the common trench exception only applies when the power circuit is dedicated to supplying the Class 2 circuit — not for unrelated power circuits.',
      fieldScenario:
        'You are installing a Class 2 circuit for gate access control, running from the building to a gate post 50 meters away. The cable crosses under a parking lot where 600 V overhead power lines run nearby.\n\nPer Rule 16-224, since the Class 2 cable extends beyond the building and could accidentally contact the 600 V power lines (which exceed 300 V), the Class 2 circuit must also meet Section 60 requirements.\n\nFor the underground portion, Rule 16-226(1) requires installation per Rule 12-012. You plan to direct-bury the Class 2 cable. A 120 V power cable for the gate motor is also being buried in the same trench.\n\nPer Rule 16-226(2), the Class 2 cable normally needs 300 mm horizontal separation from the power cable. However, since the 120 V power cable solely supplies the gate system (which the Class 2 circuit also serves), Rule 16-226(3) allows random separation in the common trench IF: (a) the Class 2 cable is metal-sheathed with bonded sheath; (b) the power cable is under 750 V (120 V qualifies); and (c) all cables are insulated for 120 V (the maximum voltage in the trench).',
      keyPoints: [
        'Class 2 circuits beyond a building subject to contact with >300 V must also meet Section 60 (Rule 16-224)',
        'Underground Class 2 circuits installed per Rule 12-012 (Rule 16-226(1))',
        'Direct buried Class 2 circuits: minimum 300 mm horizontal separation from other underground systems (Rule 16-226(2))',
        'Common trench exception: power circuit must solely supply the Class 2 circuit (Rule 16-226(3))',
        'Common trench requires metal-sheathed Class 2 cable with bonded sheath (Rule 16-226(3)(a))',
        'Common trench power circuit must operate at 750 V or less (Rule 16-226(3)(b))',
        'All cables in common trench insulated for maximum voltage of any cable present (Rule 16-226(3)(c))',
        'The 300 mm separation and 750 V limit are frequently tested values',
      ],
      diagramaMermaid: `graph TD
    A["Class 2 Beyond Building"] --> B["Aerial Extension\\n(Rule 16-224)"]
    A --> C["Underground\\n(Rule 16-226)"]
    B --> D{"Subject to contact\\nwith >300 V?"}
    D -->|"Yes"| E["Must ALSO meet\\nSection 60"]
    D -->|"No"| F["Standard Class 2\\nrules apply"]
    C --> G["Install per\\nRule 12-012"]
    C --> H["Direct Buried:\\n300 mm separation\\n(Rule 16-226-2)"]
    H --> I["Common Trench\\nException (16-226-3)"]
    I --> J["Metal-sheathed cable\\nbonded to ground"]
    I --> K["Power ≤ 750 V"]
    I --> L["All insulated for\\nmax voltage"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style H fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'post', title: 'Section 60 for Aerial', note: 'Class 2 beyond building near >300 V must also meet Section 60 — Rule 16-224', color: 'sky' },
        { icon: 'ruler', title: '300 mm Separation', note: 'Minimum horizontal separation for direct buried Class 2 — Rule 16-226(2)', color: 'amber' },
        { icon: 'wire', title: 'Metal-Sheathed in Trench', note: 'Common trench requires metal-sheathed Class 2 cable, bonded — Rule 16-226(3)(a)', color: 'emerald' },
        { icon: 'bolt', title: '750 V Max in Trench', note: 'Power circuit in common trench limited to 750 V — Rule 16-226(3)(b)', color: 'rose' },
      ],
    },

    // =========================================================================
    // 13. CLASS 2 POWER AND DATA COMMUNICATION — Scope, Terminology & Equipment (Rules 16-300 to 16-320)
    // =========================================================================
    {
      id: '16-pdc-scope',
      title: 'Class 2 Power & Data Communication — Scope, Terminology & Equipment Output',
      rules: 'Rules 16-300 to 16-320',
      explanation:
        'These rules establish the framework for Power over Ethernet (PoE) and similar Class 2 power and data communication systems, which are increasingly common in modern buildings.\n\nRule 16-300 (Scope): Rules 16-300 to 16-350 apply specifically to Class 2 power and data communication circuits — a subset of Class 2 circuits where conductors transmit power, data, or both.\n\nRule 16-310 (Special terminology): Key definitions:\n- Cable bundle: two or more cables tied together or in contact for at least 1 m in a closely packed configuration.\n- Class 2 power and data communication circuit: a Class 2 circuit where conductors transmit power or data, or both.\n- Power sourcing equipment (PSE): equipment that supplies power to powered devices and may communicate data. Think PoE switches and injectors.\n- Powered device (PD): equipment supplied with power from PSE and may communicate data. Think IP cameras, wireless access points, VoIP phones.\n\nRule 16-320 (Equipment output limitations): Class 2 power and data communication circuits shall be supplied from PSE with output limited to 100 VA and 60 V DC. This is the fundamental power limitation — no PSE port can deliver more than 100 VA at up to 60 V DC.\n\nThese rules were added to the CEC to address the rapid growth of PoE technology. As PoE wattage increases (IEEE 802.3bt allows up to 90-100 W per port), proper cable derating and bundling rules become critical to prevent overheating.',
      fieldScenario:
        'You are designing a PoE system for a new office building. A 48-port PoE+ switch (the PSE) will power 48 wireless access points (the PDs) throughout the building. Each port can deliver up to 30 W at 48 V DC.\n\nPer Rule 16-320, the PSE output is limited to 100 VA and 60 V DC. Your switch at 48 V and 30 W per port (30 VA) is well within both limits.\n\nThe Cat6 cables from the switch run in cable trays. Where 24 cables are bundled together (in contact for more than 1 m), Rule 16-310 defines this as a "cable bundle" — and Rule 16-330 will require derating based on the bundle size.\n\nThe switch is the "power sourcing equipment" and each access point is a "powered device" — these definitions from Rule 16-310 are used throughout Rules 16-330 to 16-350.',
      keyPoints: [
        'Rules 16-300 to 16-350 apply to Class 2 power and data communication circuits (Rule 16-300)',
        'Cable bundle: 2+ cables tied together or in contact for at least 1 m (Rule 16-310)',
        'Power sourcing equipment (PSE): supplies power, may communicate data — e.g., PoE switch (Rule 16-310)',
        'Powered device (PD): receives power from PSE, may communicate data — e.g., IP camera (Rule 16-310)',
        'PSE output limited to 100 VA and 60 V DC (Rule 16-320)',
        'The 100 VA / 60 V DC limit applies per circuit from the PSE',
        'These rules address PoE and similar technologies with combined power and data transmission',
        'Cable bundling definitions are critical for ampacity derating calculations in Rule 16-330',
      ],
      diagramaMermaid: `graph TD
    A["Class 2 Power & Data\\nCommunication\\n(Rules 16-300 to 16-350)"] --> B["Power Sourcing Equipment\\n(PSE)\\ne.g., PoE Switch"]
    B --> C["Cable Bundle\\n2+ cables in contact ≥1 m"]
    C --> D["Powered Device (PD)\\ne.g., IP Camera,\\nWAP, VoIP Phone"]
    E["Output Limit\\n(Rule 16-320)"] --> F["≤ 100 VA"]
    E --> G["≤ 60 V DC"]
    H["Scope\\n(Rule 16-300)"] --> I["Rules 16-300\\nto 16-350"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style G fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: '100 VA / 60 V DC', note: 'Maximum PSE output per circuit — Rule 16-320', color: 'rose' },
        { icon: 'wire', title: 'Cable Bundle = 1 m', note: '2+ cables in contact for at least 1 m = a bundle for derating — Rule 16-310', color: 'sky' },
        { icon: 'bolt', title: 'PSE = Power Source', note: 'PoE switches, injectors — supplies power to devices — Rule 16-310', color: 'amber' },
        { icon: 'box', title: 'PD = Powered Device', note: 'IP cameras, WAPs, VoIP phones — receives power from PSE — Rule 16-310', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 14. CLASS 2 POWER AND DATA COMMUNICATION — Cable Ampacity & Bundling (Rule 16-330)
    // =========================================================================
    {
      id: '16-pdc-ampacity',
      title: 'Class 2 Power & Data Communication — Cable Ampacity & Bundling',
      rules: 'Rule 16-330',
      explanation:
        'Rule 16-330 is the most detailed rule in the power-and-data communication subsection, with nine subrules addressing conductor suitability, ampacity, cable bundling, and temperature correction.\n\nRule 16-330(1): Conductors shall be suitable for the application per Rule 12-102(3).\n\nRule 16-330(2) (Cables marked "-LP"): When communication cable is marked with "-LP" suffix: (a) max current limited to the current rating marked on the cable; (b) ampacities for conductors smaller than No. 26 AWG or bundles of more than 192 cables may be determined by a qualified person with a deviation per Rule 2-030.\n\nRule 16-330(3) (Cables NOT marked "-LP"): (a) Max current per Table 60, based on conductor size, cable temperature rating, number of cables in the bundle, and smallest conductor size/lowest temperature rating in the bundle; (b) not more than 192 cables in a bundle; (c) where not more than 4 conductors per cable transmit power, multiply Table 60 values by 1.4.\n\nRule 16-330(4): Max current shall not exceed the rating of connectors or components in the circuit.\n\nRule 16-330(5): Table 5A correction factors apply when ambient temperature exceeds 30 degrees C.\n\nRule 16-330(6): Notwithstanding Rule 8-102(1), circuit length must ensure voltage at utilization point is within the connected device rating or tolerance.\n\nRule 16-330(7): Where more than one cable bundle is in a ventilated ladder-type cable tray, bundles shall be spaced at least 25 mm apart.\n\nRule 16-330(8): Cable bundling requirements do not apply where: (a) PSE output cannot exceed 0.3 A per load conductor; AND (b) cables have minimum No. 24 AWG conductors.\n\nRule 16-330(9): Where max conductor termination temperature is not marked, it shall be considered 60 degrees C.',
      fieldScenario:
        'You are installing 96 Cat6A PoE cables from a network room to offices throughout a floor. The cables run in a cable tray for 40 meters and are bundled together.\n\nUsing standard (non "-LP") cable, Rule 16-330(3) applies. You look up Table 60 for the conductor size (23 AWG for Cat6A), the cable temperature rating, and a bundle of 96 cables. The table gives you a per-conductor ampacity.\n\nSince each cable has only 4 conductors carrying power (PoE uses 4 pairs but each pair counts as one), you can apply the 1.4 multiplier per Rule 16-330(3)(c).\n\nThe cable tray runs through a mechanical room at 40 degrees C. Per Rule 16-330(5), you must apply Table 5A correction factors for the 10-degree-above-30-degrees C ambient.\n\nYou have a second cable tray nearby with another bundle of 48 cables. Per Rule 16-330(7), the two bundles in the ladder tray must be spaced at least 25 mm apart.\n\nA small IoT system uses a PSE that delivers only 0.25 A per conductor with No. 24 AWG cables. Per Rule 16-330(8), this system is exempt from the bundling requirements because it meets both conditions: ≤0.3 A per conductor AND ≥No. 24 AWG.\n\nThe PoE cameras do not have a termination temperature marking. Per Rule 16-330(9), you assume 60 degrees C.',
      keyPoints: [
        'Conductors must be suitable per Rule 12-102(3) (Rule 16-330(1))',
        'Cables marked "-LP": max current is the marked rating; deviations needed for <No. 26 or >192 cables (Rule 16-330(2))',
        'Non "-LP" cables: ampacity from Table 60 based on size, temp rating, bundle count, and weakest cable (Rule 16-330(3)(a))',
        'Maximum 192 cables per bundle for non "-LP" cables (Rule 16-330(3)(b))',
        '1.4 multiplier when 4 or fewer conductors per cable transmit power (Rule 16-330(3)(c))',
        'Current shall not exceed connector/component ratings (Rule 16-330(4))',
        'Apply Table 5A correction when ambient exceeds 30 degrees C (Rule 16-330(5))',
        'Circuit length must ensure voltage at device is within its rating/tolerance (Rule 16-330(6))',
        'Multiple bundles in ladder tray: minimum 25 mm spacing (Rule 16-330(7))',
        'Bundling rules exempt if PSE ≤0.3 A per conductor AND min No. 24 AWG (Rule 16-330(8))',
        'Unmarked termination temperature assumed to be 60 degrees C (Rule 16-330(9))',
      ],
      diagramaMermaid: `graph TD
    A["Cable Ampacity\\n(Rule 16-330)"] --> B{"-LP marked?"}
    B -->|"Yes"| C["Use marked current\\nrating (16-330-2)"]
    B -->|"No"| D["Use Table 60\\n(16-330-3)"]
    D --> E["Based on: size,\\ntemp rating, bundle\\ncount, weakest cable"]
    D --> F["Max 192 cables\\nper bundle"]
    D --> G["≤4 power conductors:\\nx 1.4 multiplier"]
    H["Corrections"] --> I["Ambient >30°C:\\nTable 5A factors\\n(16-330-5)"]
    H --> J["Voltage drop:\\ncheck device rating\\n(16-330-6)"]
    K["Exemption\\n(16-330-8)"] --> L["PSE ≤0.3 A/conductor\\n+ Min No. 24 AWG"]
    M["Tray Spacing\\n(16-330-7)"] --> N["≥25 mm between\\nbundles in ladder tray"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Max 192 Cables/Bundle', note: 'Non "-LP" cables limited to 192 per bundle — Rule 16-330(3)(b)', color: 'rose' },
        { icon: 'bolt', title: '1.4x Multiplier', note: 'When 4 or fewer conductors per cable carry power — Rule 16-330(3)(c)', color: 'emerald' },
        { icon: 'thermometer', title: '30°C Correction', note: 'Apply Table 5A correction factors above 30°C ambient — Rule 16-330(5)', color: 'amber' },
        { icon: 'ruler', title: '25 mm Bundle Spacing', note: 'Multiple bundles in ladder tray must be 25 mm apart — Rule 16-330(7)', color: 'sky' },
        { icon: 'shield', title: 'Exemption at ≤0.3 A', note: 'No bundling rules if PSE ≤0.3 A/conductor and min No. 24 AWG — Rule 16-330(8)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 15. CLASS 2 POWER AND DATA COMMUNICATION — Wiring Method & Marking (Rules 16-340 to 16-350)
    // =========================================================================
    {
      id: '16-pdc-wiring-marking',
      title: 'Class 2 Power & Data Communication — Wiring Method & Marking',
      rules: 'Rules 16-340 to 16-350',
      explanation:
        'These final rules establish wiring methods and marking requirements for Class 2 power and data communication circuits.\n\nRule 16-340 (Wiring method):\n(1) Conductors shall only be used when part of a common cable assembly marked as suitable for the application. You cannot use loose individual wires for PoE — they must be in a proper cable.\n(2) Conductors extending beyond a building shall be installed per Rule 16-224 — the same rule that requires Section 60 compliance when near >300 V circuits.\n(3) Underground installations shall comply with Rule 12-012.\n(4) Conductors shall NOT be connected in series or parallel with other Class 2 power and data communication circuit conductors. Just like Rule 16-200(3) prohibits paralleling Class 2 sources, this rule prohibits paralleling conductors to increase current capacity.\n\nRule 16-350 (Marking): Power sourcing equipment must have permanent markings indicating the class of supply and electrical rating, readily visible for inspection after installation. This mirrors Rule 16-204 for general Class 2 supplies, but specifically applies to PSE (PoE switches, injectors, etc.).\n\nThese rules complete the regulatory framework for PoE installations. The prohibition on series/parallel connections in Rule 16-340(4) is particularly important — you cannot combine conductors from multiple cables to get more current to a device.',
      fieldScenario:
        'You are installing PoE lighting in a new office. The LED fixtures (powered devices) are connected to a PoE switch (PSE) via Cat6A cables.\n\nPer Rule 16-340(1), the Cat6A cable must be marked as suitable for the application — you cannot strip individual twisted pairs and run them loose. The cable assembly as a whole must be rated.\n\nA fixture needs more power than one PoE port can deliver. A colleague suggests running two Cat6 cables to it and paralleling the conductors. Rule 16-340(4) prohibits this — conductors for Class 2 power and data communication circuits shall NOT be connected in series or parallel. You need a higher-wattage single PSE port or a separate dedicated power supply.\n\nSome of the PoE cables run outside to outdoor access points. Per Rule 16-340(2) and Rule 16-224, these exterior runs must comply with Section 60 requirements if they could contact conductors over 300 V.\n\nThe PoE switch must have a permanent label showing "Class 2, 48 V DC, 30 W per port" (or similar) that remains visible after rack mounting, per Rule 16-350.',
      keyPoints: [
        'Conductors must be part of a cable assembly marked suitable for the application (Rule 16-340(1))',
        'Conductors beyond a building installed per Rule 16-224 (Rule 16-340(2))',
        'Underground installations per Rule 12-012 (Rule 16-340(3))',
        'Conductors shall NOT be connected in series or parallel with other power/data comm conductors (Rule 16-340(4))',
        'PSE must have permanent markings of class and electrical rating, visible after installation (Rule 16-350)',
        'No loose individual wires for PoE — must be in a proper cable assembly',
        'The series/parallel prohibition prevents defeating the current limitations of the system',
        'Marking requirements ensure inspectors can verify the PSE rating on-site',
      ],
      diagramaMermaid: `graph TD
    A["Wiring Method\\n(Rule 16-340)"] --> B["Must be in marked\\ncable assembly\\n(16-340-1)"]
    A --> C["Beyond building:\\nper Rule 16-224\\n(16-340-2)"]
    A --> D["Underground:\\nper Rule 12-012\\n(16-340-3)"]
    A --> E["NO series or parallel\\nconnections\\n(16-340-4)"]
    F["Marking\\n(Rule 16-350)"] --> G["PSE must show:\\nClass + Rating"]
    G --> H["Permanent markings\\nVisible after install"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Cable Assembly Required', note: 'No loose wires — must be in a marked cable assembly — Rule 16-340(1)', color: 'sky' },
        { icon: 'warning', title: 'No Series or Parallel', note: 'Cannot combine conductors from multiple cables — Rule 16-340(4)', color: 'rose' },
        { icon: 'label', title: 'PSE Marking', note: 'Permanent, visible after install: class and electrical rating — Rule 16-350', color: 'emerald' },
        { icon: 'post', title: 'Exterior Runs', note: 'Cables beyond building follow Rule 16-224 / Section 60 — Rule 16-340(2)', color: 'amber' },
      ],
    },
  ],
}
