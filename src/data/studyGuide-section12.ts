import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 12 — Wiring Methods (CEC 2021, CSA C22.1:21)
 * COMPLETE — Rules 12-000 through 12-3036 covered across 14 subsections.
 * Source: PDF scan of Section 12 — Wiring Methods
 */

export const section12Guide: StudyGuideSection = {
  section: '12',
  title: 'Section 12 — Wiring Methods',
  description:
    'Section 12 is the largest section of the CEC, governing every method of installing electrical conductors and cables in buildings. It covers general wiring requirements, underground installation depths, specific cable types (NMD, armoured, MI, flexible cord), all raceway types (rigid conduit, EMT, PVC, ENT, HDPE, surface raceways), busways, wireways, cable trays, cablebus, outlet boxes, and fittings. Rules 12-000 through 12-3036.',
  subsections: [
    // =========================================================================
    // 1. SCOPE & GENERAL REQUIREMENTS (Rules 12-000 to 12-022)
    // =========================================================================
    {
      id: '12-scope-general',
      title: 'Scope & General Requirements',
      rules: 'Rules 12-000 to 12-022',
      explanation:
        'Section 12 applies to all wiring installations operating at 750 V or less, with specific exceptions for Class 2 circuits (Section 16), community antenna systems (Section 54), optical fiber (Section 56), communication circuits (Section 60), and conductors integral to factory-built equipment. It also applies to installations over 750 V as modified by Section 36.\n\nRule 12-010 (Ducts & plenums): No electrical equipment shall be installed in ducts transporting dust, loose stock, or flammable vapours unless marked for the purpose. Cables in plenums or environmental air systems must comply with Rules 2-130 and 12-100. A special allowance exists for flexible cord up to 3 m with attachment plug to supply pole-type multi-outlet assemblies in suspended ceiling plenums, provided the cord is hard-usage rated and voltage does not exceed 300 V. Cold-air return ducts formed by boxing between joists must also comply with Rules 2-130 and 2-132.\n\nRule 12-012 (Underground installations): Direct buried cables or raceways must meet the minimum cover requirements of Table 53. The minimum cover can be reduced by 150 mm where mechanical protection (treated planking 38 mm thick, concrete 50 mm thick, or other suitable material extending 50 mm beyond cables on each side) is placed over the installation. Direct buried cables must run adjacent to each other (no crossovers) with screened sand or earth at least 75 mm deep above and below. Where cables rise for terminations, protection is required from 300 mm above trench bottom to at least 2 m above finished grade. Marking tape must be buried approximately halfway between the installation and grade level.\n\nRule 12-014 (Hoistways): Conductors other than elevator supply require a deviation per Rule 2-030 and must be MI cable, aluminum-sheathed, copper-sheathed, armoured cable, or in rigid/flexible metal conduit or EMT. Terminal boxes must open outside the hoistway.\n\nRule 12-016 (Lightning down conductors): Electrical wiring shall be kept at least 2 m from lightning down conductors, except where bonding is provided per Rule 10-104.\n\nRule 12-018 (Building entry): Holes in outer walls or roofs through which raceways or cables pass shall be filled to prevent moisture infiltration.\n\nRule 12-020 (Raised floors for data processing): Flexible cords/cables under raised floors for data processing must have non-combustible raised floor construction, cords not exceeding 4.5 m between terminations, strain-relief connectors at junction boxes, and branch circuit conductors supplying receptacles under raised floors must be in rigid conduit, EMT, flexible metal conduit, armoured cable, or metal-sheathed cable.\n\nRule 12-022 (Roof decking): Cables or raceways shall NOT be concealed within roof decking systems that use screws or metal penetrating fasteners, except for Class 2 circuits under 30 V open-circuit and embedded trace heat. Warning labels are required at permanently installed roof access points.',
      fieldScenario:
        'You are running cables through a suspended ceiling plenum that doubles as an air return for the HVAC system. Rule 12-010(3) requires the cables to comply with Rules 2-130 and 12-100 — meaning they must have FT4 or FT6 flame-tested ratings suitable for plenums. The general contractor asks if you can just run regular NMD90 through the plenum space. The answer is no — only cables specifically rated for plenum use are allowed.\n\nNext, you are trenching for a 200A underground feeder to a detached garage. Table 53 tells you the required burial depth. You lay the cable on a bed of screened sand at least 75 mm deep per Rule 12-012(4), place the cable, cover with another 75 mm of sand, then install marking tape approximately halfway to grade per Rule 12-012(11). Where the cable rises into the garage panel, you protect it with rigid conduit from 300 mm above the trench bottom to at least 2 m above finished grade per Rule 12-012(5).',
      keyPoints: [
        'Section 12 applies to all wiring at 750 V or less, and above 750 V as modified by Section 36 (Rule 12-000)',
        'No electrical equipment in ducts with dust, loose stock, or flammable vapours unless marked for the purpose (Rule 12-010(1))',
        'Cables in plenums/environmental air systems must comply with Rules 2-130 and 12-100 (Rule 12-010(3))',
        'Flexible cord up to 3 m allowed in suspended ceiling plenums for pole-type multi-outlet assemblies if hard-usage and max 300 V (Rule 12-010(4))',
        'Underground cables/raceways must meet minimum cover per Table 53 (Rule 12-012(1))',
        'Cover may be reduced 150 mm with mechanical protection extending 50 mm beyond cables each side (Rule 12-012(2)(3))',
        'Direct buried cables must not cross over each other; screened sand/earth 75 mm above and below (Rule 12-012(4))',
        'Rising cables protected from 300 mm above trench bottom to at least 2 m above grade (Rule 12-012(5))',
        'Marking tape buried approximately halfway between installation and grade level (Rule 12-012(11))',
        'Electrical wiring kept at least 2 m from lightning down conductors unless bonded per Rule 10-104 (Rule 12-016)',
        'Holes in outer walls/roofs for raceways/cables shall be filled to prevent moisture infiltration (Rule 12-018)',
        'Branch circuits under raised floors for data processing must be in rigid conduit, EMT, flex conduit, armoured or metal-sheathed cable (Rule 12-020(5))',
        'No cables/raceways concealed in roof decking with metal penetrating fasteners, except Class 2 under 30 V and trace heat (Rule 12-022)',
      ],
      diagramaMermaid: `graph TD
    A["Section 12 Scope\\n750 V or less"] --> B["General\\nRequirements"]
    B --> C["Ducts & Plenums\\nRule 12-010\\nFT4/FT6 rated cables"]
    B --> D["Underground\\nRule 12-012\\nTable 53 depth"]
    B --> E["Hoistways\\nRule 12-014\\nMI/AC/conduit only"]
    B --> F["Lightning\\nRule 12-016\\n2 m separation"]
    B --> G["Building Entry\\nRule 12-018\\nSeal penetrations"]
    B --> H["Raised Floors\\nRule 12-020\\nMetal wiring methods"]
    B --> I["Roof Decking\\nRule 12-022\\nNo metal fastener areas"]
    D --> J["Sand bed 75 mm\\nabove & below"]
    D --> K["Marking tape\\nat mid-depth"]
    D --> L["Rising cables\\nprotected to 2 m"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Plenum-Rated Only', note: 'Cables in air-handling plenums must meet Rules 2-130 and 12-100 — Rule 12-010(3)', color: 'rose' },
        { icon: 'ruler', title: 'Table 53 Depth', note: 'Underground cover requirements — reducible by 150 mm with mechanical protection — Rule 12-012', color: 'sky' },
        { icon: 'bolt', title: '2 m from Lightning', note: 'Keep wiring 2 m from lightning down conductors unless bonded — Rule 12-016', color: 'amber' },
        { icon: 'warning', title: 'No Roof Deck Concealment', note: 'Metal fastener roof systems — no cables except Class 2 under 30 V — Rule 12-022', color: 'violet' },
        { icon: 'wire', title: 'Sand Bedding Required', note: 'Direct buried cables need 75 mm screened sand above and below — Rule 12-012(4)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 2. CONDUCTORS & CABLES — TYPES & INSTALLATION (Rules 12-100 to 12-122)
    // =========================================================================
    {
      id: '12-conductors-cables',
      title: 'Conductors & Cables — Types & Installation',
      rules: 'Rules 12-100 to 12-122',
      explanation:
        'These rules establish the fundamental requirements for selecting, handling, and installing conductors and cables.\n\nRule 12-100 (Types): Conductors must be suitable for their location regarding moisture, temperature, enclosure, and mechanical protection. Where harmful condensed vapours, acids, alkalis, or organic solvents contact insulation, the insulation must resist them or be protected by a lead sheath or impervious material.\n\nRule 12-102 (Installation): Conductors shall NOT be handled or installed when ambient temperature is low enough to damage insulation. Conductors must be of types specified in Table 19 for the condition of use. T90 Nylon exposed to oil is limited to 60 degrees C. Special markings PR I (60 C), PR II (75 C) for oil exposure, and GR I (60 C), GR II (75 C) for alkaline/petroleum conditions.\n\nRule 12-104 (Flame-tested coverings): Where insulation has a flame-tested covering, the covering must be removed at terminals and splices to prevent creepage of current.\n\nRule 12-106 (Multi/single-conductor cables): All conductors of a circuit SHALL be in the same multi-conductor cable. For parallel circuits, each additional cable must include equal conductors from each phase and neutral. Single-conductor armoured cable carrying current must have non-magnetic armour. Cables carrying over 200 A shall not be encircled by magnetic material.\n\nRule 12-108 (Parallel conductors): Permitted in sizes 1/0 AWG and larger. Each parallel set must have conductors that are: splice-free, same circular mil area, same insulation type, terminated the same way, same conductor material, and same length. Orientation must minimize inductive reactance and unequal current division.\n\nRule 12-110 (Bending): Bend radii must be large enough to prevent damage to conductors, insulation, covering, or sheathing.\n\nRule 12-112 (Joints & splices): Made with splicing devices, brazing, welding, or soldering. Soldered splices must be mechanically and electrically secure BEFORE soldering. Joints covered with insulation equivalent to conductor insulation. All joints must be accessible. Underground splices permitted in junction boxes at least 1 m above grade or with direct-burial splice kits.\n\nRule 12-116 (Termination): Conductors connect via pressure connectors, solder lugs, or splices. No. 10 AWG and smaller may use binding screws. Larger than No. 10 AWG must use solderless connectors.\n\nRule 12-118 (Aluminum termination): Requires wire brushing of stranded conductors, joint compound to penetrate oxide film (unless marked for use without), equipment must be marked for aluminum use, and no aluminum terminations in wet locations unless protected against corrosion. Bolted connections 9.5 mm+ diameter require expansion provisions (conical spring washer, heavy helical washer, or all-aluminum hardware).\n\nRule 12-120 (Supporting conductors): Conductors supported to prevent strain on terminals. Vertical runs in raceways supported per Table 21. Vertical armoured/sheathed cables supported per Table 21 or with 90-degree bends at specified intervals.',
      fieldScenario:
        'You are installing a 400A parallel feeder using two sets of 3/0 AWG copper TECK90 cable. Rule 12-108 requires each parallel set to have the same length, same insulation, same circular mil area, same termination method, and no splices. You carefully measure both runs to ensure they are identical length. You orient the cables so that phase A, B, C, and neutral are balanced between raceways to minimize inductive reactance per Rule 12-108(4).\n\nAt the termination end, you are connecting to aluminum bus bars. Rule 12-118 requires you to wire-brush the stranded aluminum conductors and apply joint compound (anti-oxidant) before making the connection. The bolted lug connections use 3/8-inch (9.5 mm) bolts, so Rule 12-118(5) requires conical spring washers or heavy helical spring washers to accommodate thermal expansion.\n\nYou notice the temperature has dropped to -15 degrees C overnight. Rule 12-102(1) says you must NOT install cables when ambient temperature is low enough to damage insulation. You wait until mid-morning when the cable warms sufficiently to handle safely.',
      keyPoints: [
        'Conductors must be suitable for moisture, temperature, enclosure, and mechanical protection per Table 19 (Rule 12-100/12-102)',
        'Do NOT install conductors when ambient temperature could damage insulation (Rule 12-102(1))',
        'T90 Nylon exposed to oil: max 60 degrees C (Rule 12-102(4))',
        'Flame-tested covering removed at terminals/splices to prevent current creepage (Rule 12-104)',
        'All conductors of a circuit in the same multi-conductor cable; single-conductor armoured cable must have non-magnetic armour (Rule 12-106)',
        'Cables carrying over 200 A shall not be encircled by magnetic material (Rule 12-106(5))',
        'Parallel conductors: min 1/0 AWG, same length, same size, same insulation, same termination, no splices (Rule 12-108)',
        'Soldered splices must be mechanically and electrically secure BEFORE soldering (Rule 12-112(2))',
        'All joints and splices must be accessible (Rule 12-112(4))',
        'Conductors larger than No. 10 AWG must be terminated with solderless connectors (Rule 12-116(4))',
        'Aluminum conductors: wire brush stranded, apply joint compound, equipment marked for aluminum (Rule 12-118)',
        'Aluminum bolted connections 9.5 mm+ diameter need expansion provisions — conical or heavy helical spring washer (Rule 12-118(5))',
        'Vertical conductors in raceways supported per Table 21 (Rule 12-120(2))',
        'Equipment wire per Table 11; luminaire wiring minimum No. 18 AWG copper (Rule 12-122)',
      ],
      diagramaMermaid: `graph TD
    A["Conductor Selection\\nRule 12-100"] --> B["Table 19\\nCondition of Use"]
    B --> C["Wet / Dry / Damp\\nLocation"]
    B --> D["Temperature\\nRating"]
    B --> E["Mechanical\\nProtection"]
    F["Installation Rules"] --> G["No cold-weather\\ninstall if damage risk\\nRule 12-102"]
    F --> H["Parallel: min 1/0 AWG\\nSame length/size/type\\nRule 12-108"]
    F --> I["Bends: no damage\\nto insulation\\nRule 12-110"]
    F --> J["Splices: mechanical\\nfirst, then solder\\nRule 12-112"]
    K["Aluminum"] --> L["Wire brush +\\njoint compound\\nRule 12-118"]
    K --> M["Spring washers for\\nbolts 9.5 mm+\\nRule 12-118-5"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style K fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'thermometer', title: 'Cold Weather Warning', note: 'Never install cables when cold enough to damage insulation — Rule 12-102(1)', color: 'rose' },
        { icon: 'wire', title: 'Parallel Conductor Rules', note: 'Min 1/0 AWG, same everything, no splices — Rule 12-108', color: 'sky' },
        { icon: 'bolt', title: 'Aluminum Terminations', note: 'Wire brush, joint compound, spring washers for 9.5 mm+ bolts — Rule 12-118', color: 'amber' },
        { icon: 'lock', title: 'Splices Must Be Accessible', note: 'Underground: junction box 1 m above grade or direct-burial kit — Rule 12-112', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 3. OPEN WIRING & EXTERIOR EXPOSED WIRING (Rules 12-200 to 12-320)
    // =========================================================================
    {
      id: '12-open-exterior-wiring',
      title: 'Open Wiring & Exterior Exposed Wiring',
      rules: 'Rules 12-200 to 12-320',
      explanation:
        'Rules 12-202 to 12-206 cover open wiring (single insulated conductors not in raceways). Except as permitted elsewhere, insulated conductors SHALL be installed in raceways (Rule 12-202). Existing open wiring conductors cannot dead-end more than 300 mm from the last supporting insulator (Rule 12-204). Where existing open wiring connects to raceway or cable systems, a box or fitting with separately bushed holes is required (Rule 12-206).\n\nRules 12-300 to 12-320 cover exposed wiring on building exteriors and between buildings on the same premises.\n\nRule 12-302: Conductors and cables must be types suitable for weather exposure per Table 19.\n\nRule 12-304: Exterior cables must be at least 4.5 m from ground (deviation possible per Rule 2-030), and where exposed to mechanical damage from awnings, signs, or shutters, must be run in watertight rigid conduit.\n\nRule 12-306: Exterior supports at intervals not more than 3 m; conductors at least 150 mm apart and 50 mm from surfaces. Petticoat insulators at max 4.5 m intervals holding conductors 300 mm apart. Higher-voltage conductors (over 300 V) mounted ABOVE lower-voltage with at least 300 mm separation.\n\nRule 12-308: Overhead spans between buildings limited to 4.5 m unless installed with messenger cables per Rule 12-318.\n\nRule 12-310: Clearances — at least 2.5 m above flat roofs, 1 m above peaked roofs.\n\nRule 12-316: Power conductors at least 300 mm from communication cables unless separated by conduit or fixed non-conductor.\n\nRule 12-318 (Overhead/neutral-supported): NS75/NS90 cables not mounted directly on surface, secured at least 1 m from building (or 50 mm if marked FT1), spans max 38 m. Bare neutral messenger must be from grounded AC system and attached to insulators at supports.\n\nRule 12-320 (Messenger cables): Securely attached, bonded per Section 10. Cables permanently lashed — cable ties shall NOT be the sole means of lashing. Messenger must be galvanized steel (min 45 g/m2 coating), copper-coated steel, or stainless steel, stranded with min 7 strands. Ultimate strength at least 3 times max working load.',
      fieldScenario:
        'You need to run a 100A feeder from the main building to a workshop 30 m away. The span exceeds the 4.5 m maximum of Rule 12-308, so you must use a messenger cable system per Rule 12-318. You select a galvanized steel messenger with 7 strands and verify its ultimate strength is at least 3 times the calculated working load including ice and wind per Rule 12-320(5). You permanently lash the TECK90 cable to the messenger — Rule 12-320(3) says cable ties alone are NOT acceptable as the sole lashing method; you use proper lashing wire.\n\nThe cable approaches the workshop building. Rule 12-318(1)(b)(i) requires NS75/NS90 cables to be at least 1 m from the building (or 50 mm if FT1 marked). At the building entry point, Rule 12-018 requires you to seal the penetration hole against moisture. You verify the cable is at least 4.5 m above ground per Rule 12-304 and at least 300 mm from the telephone cable on the same wall per Rule 12-316.',
      keyPoints: [
        'Except as permitted, insulated conductors SHALL be in raceways (Rule 12-202)',
        'Existing open wiring dead-ends: max 300 mm from last insulator; No. 8 AWG+ use strain insulators (Rule 12-204)',
        'Open wiring to raceway/cable junction requires a box with bushed holes (Rule 12-206)',
        'Exterior cables must be weather-suitable per Table 19 (Rule 12-302)',
        'Exterior cables minimum 4.5 m above ground; in watertight conduit where exposed to mechanical damage (Rule 12-304)',
        'Exterior supports max 3 m intervals; conductors 150 mm apart, 50 mm from surfaces (Rule 12-306)',
        'Overhead spans max 4.5 m between buildings unless on messenger cable (Rule 12-308)',
        'Clearance: 2.5 m above flat roofs, 1 m above peaked roofs (Rule 12-310)',
        'Power cables at least 300 mm from communication cables (Rule 12-316)',
        'NS75/NS90 cables: at least 1 m from building (50 mm if FT1), max 38 m spans (Rule 12-318)',
        'Messenger cables: bonded per Section 10, cable ties NOT sole lashing means (Rule 12-320)',
        'Messenger: galvanized steel min 45 g/m2, 7+ strands, ultimate strength 3x max working load (Rule 12-320(4)(5))',
      ],
      diagramaMermaid: `graph TD
    A["Exterior Wiring\\nRules 12-300 to 12-320"] --> B["Weather-rated\\ncables per Table 19\\nRule 12-302"]
    A --> C["Min 4.5 m\\nabove ground\\nRule 12-304"]
    A --> D["Supports every\\n3 m max\\nRule 12-306"]
    A --> E["Overhead spans\\nmax 4.5 m\\nRule 12-308"]
    E --> F{"Span > 4.5 m?"}
    F -->|Yes| G["Use messenger\\ncable system\\nRule 12-318"]
    F -->|No| H["Direct span\\npermitted"]
    G --> I["Galvanized steel\\n7+ strands\\n3x working load\\nRule 12-320"]
    G --> J["Permanent lashing\\nNO cable ties alone\\nRule 12-320-3"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '4.5 m Above Ground', note: 'Exterior cables minimum height unless deviation granted — Rule 12-304', color: 'sky' },
        { icon: 'wire', title: 'Messenger Required', note: 'Spans over 4.5 m need messenger cable with proper lashing — Rule 12-318/12-320', color: 'emerald' },
        { icon: 'warning', title: 'No Cable Ties Alone', note: 'Cable ties cannot be sole means of lashing to messenger — Rule 12-320(3)', color: 'rose' },
        { icon: 'shield', title: '300 mm from Comm', note: 'Power cables at least 300 mm from communication cables — Rule 12-316', color: 'amber' },
      ],
    },

    // =========================================================================
    // 4. FLEXIBLE CORD & PORTABLE POWER CABLE (Rules 12-400 to 12-406)
    // =========================================================================
    {
      id: '12-flexible-cord',
      title: 'Flexible Cord & Portable Power Cable',
      rules: 'Rules 12-400 to 12-406',
      explanation:
        'These rules govern the proper use (and prohibited uses) of flexible cord and portable power cable.\n\nRule 12-402 (Flexible cord uses): Cord must be suitable per Table 11 for the specific condition including moisture, corrosive action, temperature, enclosure, and mechanical exposure. PERMITTED uses include: household equipment that is moved or detachably connected, industrial equipment that must move, pendants, cranes and hoists, preventing noise/vibration transmission, connection of moving components, ranges and dryers, and data processing systems with extra-hard-usage cord and attachment plug.\n\nRule 12-402(3) (Prohibited uses): Flexible cord shall NOT be used as a substitute for fixed wiring — it shall NOT be permanently secured to structural members, run through holes in walls/ceilings/floors, or run through doorways/windows. It shall not be used above its temperature rating or at excessively low temperatures. It cannot suspend devices over 2.3 kg unless the assembly is marked for up to 11 kg.\n\nRule 12-402(4): Cord must be protected by an insulating bushing where it enters enclosures or lampholders.\n\nRule 12-402(5): Extension cords must not expose live parts when one end is free and the other is connected to supply.\n\nRule 12-404 (Show windows): Flexible cord in show windows/cases must be at least hard-usage type (except chain-type luminaires).\n\nRule 12-406 (Portable power cable): Types per Table 11. Permitted for movable equipment, cranes/hoists, stationary equipment interchange, moving components, and travelling amusement rides. Same prohibitions as flexible cord — NOT a substitute for fixed wiring, not permanently secured, not through walls/floors of permanent structures. Type DLO cable 1/0 or larger is permitted in permanent cable tray installations when marked as Type TC and meets all TC requirements.',
      fieldScenario:
        'A maintenance worker in a factory has run an extension cord from a receptacle through a hole drilled in a partition wall to power equipment in the next room. Rule 12-402(3)(a)(ii) explicitly prohibits running flexible cord through holes in walls. You explain that a permanent wiring method must be installed instead.\n\nIn the same facility, a large CNC machine vibrates heavily during operation. The machine is fed with a flexible cord to prevent transmission of vibration to the building wiring per Rule 12-402(2)(f) — this is a valid permitted use. The cord enters the machine junction box through an insulating bushing per Rule 12-402(4).\n\nA show window in a retail store uses flexible cord to power display lights. Rule 12-404 requires at least hard-usage type cord for show windows. The store manager asks about hanging a 5 kg decorative lamp from the cord. Rule 12-402(3)(c) says cord cannot suspend devices over 2.3 kg unless the cord/device assembly is marked for up to 11 kg.',
      keyPoints: [
        'Flexible cord must be suitable per Table 11 for moisture, temperature, mechanical exposure (Rule 12-402(1))',
        'Permitted: movable equipment, pendants, cranes, vibration isolation, ranges/dryers, data processing (Rule 12-402(2))',
        'PROHIBITED: substitute for fixed wiring — never permanently secured, never through walls/ceilings/floors (Rule 12-402(3)(a))',
        'Cannot run cord through doorways, windows, or similar openings (Rule 12-402(3)(a)(iii))',
        'Max 2.3 kg suspended from cord unless assembly marked for up to 11 kg (Rule 12-402(3)(c))',
        'Cord protected by insulating bushing at enclosure/lampholder entry (Rule 12-402(4))',
        'Extension cords: no live parts exposed when one end is free (Rule 12-402(5))',
        'Show windows: at least hard-usage type cord (Rule 12-404)',
        'Portable power cable: same prohibitions as flex cord for permanent structures (Rule 12-406(3))',
        'Type DLO 1/0+ permitted in permanent cable tray if marked as Type TC and meets TC conditions (Rule 12-406(4))',
      ],
      diagramaMermaid: `graph TD
    A["Flexible Cord\\nRule 12-402"] --> B["PERMITTED Uses"]
    A --> C["PROHIBITED Uses"]
    B --> D["Movable equipment\\nPendants\\nCranes & hoists"]
    B --> E["Vibration isolation\\nRanges & dryers\\nData processing"]
    C --> F["NOT substitute\\nfor fixed wiring"]
    C --> G["NOT through walls\\nceilings or floors"]
    C --> H["NOT permanently\\nsecured to structure"]
    C --> I["Max 2.3 kg\\nsuspended weight"]
    J["Portable Power Cable\\nRule 12-406"] --> K["Movable equipment\\nCranes\\nAmusement rides"]
    J --> L["Type DLO 1/0+\\nin cable tray\\nif marked TC"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style B fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'Not Fixed Wiring', note: 'Cord is NEVER a substitute for permanent wiring — Rule 12-402(3)(a)', color: 'rose' },
        { icon: 'wire', title: 'Table 11 Types', note: 'Select cord type from Table 11 matching the specific condition of use — Rule 12-402(1)', color: 'sky' },
        { icon: 'shield', title: 'Bushing at Entry', note: 'Cord must be protected by bushing where entering enclosure — Rule 12-402(4)', color: 'emerald' },
        { icon: 'ruler', title: '2.3 kg Max Weight', note: 'Cannot suspend more than 2.3 kg from cord unless marked to 11 kg — Rule 12-402(3)(c)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 5. NON-METALLIC SHEATHED CABLE — NMD (Rules 12-500 to 12-526)
    // =========================================================================
    {
      id: '12-nmd-cable',
      title: 'Non-Metallic Sheathed Cable (NMD)',
      rules: 'Rules 12-500 to 12-526',
      explanation:
        'Rules 12-502 to 12-526 apply to NMD90 and NMWU cable — the most common residential wiring method in Canada.\n\nRule 12-502 (Max voltage): NMD cable shall NOT be used where voltage exceeds 300 V between any two conductors. This means 120/240V single-phase is fine (240 V between hots), but 347/600V systems are NOT.\n\nRule 12-504 (Use): Permitted in or on buildings of combustible construction and on other construction types where acceptable.\n\nRule 12-506 (Method): Cable run in continuous lengths between boxes as a loop system — all joints, splices, and taps in boxes. Minimum air space from heat sources: 25 mm from heating ducts/piping, 50 mm from masonry/concrete chimneys, 150 mm from chimney/flue cleanouts. Two-conductor cable shall NOT be stapled on edge.\n\nRule 12-508 (Bending & stapling): Cable shall not be bent, handled, or stapled so as to damage conductors or outer covering.\n\nRule 12-510 (Support): Supported by straps, Type 2S/21S cable ties, or other devices within 300 mm of every box or fitting AND at intervals not more than 1.5 m. Cables through holes in joists/studs are considered supported. Concealed cable may be fished without support between boxes when metal sheeting, metal joists/studs are NOT used. At switches/receptacles with integral clamps, support within 300 mm of wall opening with at least 300 mm loop or 150 mm of cable end on interior side.\n\nRule 12-512: NMD cable shall NOT be buried in plaster, cement, or similar finish.\n\nRule 12-514 (Non-concealed protection): Running boards or guard strips required when cables are on upper faces of ceiling joists in attics (over 1 m clearance), lower faces of exposed ceiling joists, open face of wall studs, or exposed less than 1.5 m above floor. Running boards minimum 19 mm x 38 mm, edges projecting 12 mm beyond cables.\n\nRule 12-516 (Concealed protection): Through studs/joists — outer surface at least 32 mm from edges, or protect with protector plate or cylindrical bushing extending 13 mm beyond both sides. Along studs/joists — minimum 32 mm from edges or protected by 1.3 mm ferrous metal. Through metal studs — protected by insert adequately secured. Behind baseboard — protected from driven nails.\n\nRule 12-518 (Exposed protection): Cable protected where passing through floors, less than 1.5 m above floor, or exposed to damage. Non-metallic conduit/tubing may serve as a sleeve for NMD cable protection.\n\nRule 12-526 (Bonding): Bonding provisions per Section 10.',
      fieldScenario:
        'You are rough-wiring a new house with NMD90. Running cable through 2x4 studs, Rule 12-516(1) requires the cable to be at least 32 mm from the edge of the stud. Since a 2x4 is only 89 mm deep, you drill the hole in the center. Where the cable must pass close to the edge (say within 32 mm), you install a steel protector plate (nail plate) covering the width of the stud per Rule 12-516(1)(a).\n\nIn the unfinished basement, cables run along the face of the joists. Since they are exposed and less than 1.5 m above the floor, Rule 12-514(1)(d) and 12-518(1)(b) require protection. You install running boards — minimum 19 mm x 38 mm lumber with edges projecting 12 mm beyond the cables per Rule 12-514(2).\n\nAt each box, you staple the cable within 300 mm per Rule 12-510(1)(a), and then every 1.5 m along the run per Rule 12-510(1)(b). The drywall installer asks if you want them to plaster over a junction box. Rule 12-512 says NMD cable shall NOT be buried in plaster or cement, and Rule 12-3014 requires junction boxes to remain accessible.',
      keyPoints: [
        'NMD cable max 300 V between any two conductors — not for 347/600V systems (Rule 12-502)',
        'Permitted on combustible and other acceptable construction (Rule 12-504)',
        'Run in continuous lengths between boxes; all joints/splices/taps in boxes (Rule 12-506(1))',
        'Air space from heat: 25 mm from ducts, 50 mm from chimneys, 150 mm from cleanouts (Rule 12-506(4))',
        'Two-conductor cable shall NOT be stapled on edge (Rule 12-506(6))',
        'Support within 300 mm of every box AND every 1.5 m; through holes = supported (Rule 12-510)',
        'Cable may be fished in concealed work when no metal studs/joists/sheathing present (Rule 12-510(3))',
        'NOT embedded in plaster, cement, or similar finish (Rule 12-512)',
        'Exposed cable less than 1.5 m above floor requires running boards or guard strips (Rule 12-514/12-518)',
        'Running boards: min 19 mm x 38 mm, edges project 12 mm beyond cables (Rule 12-514(2))',
        'Through studs/joists: 32 mm from edges OR protector plate OR bushing extending 13 mm each side (Rule 12-516(1))',
        'Along studs/joists: 32 mm from edges OR 1.3 mm ferrous metal protection (Rule 12-516(2))',
        'Through metal studs: protected by insert adequately secured in place (Rule 12-516(3))',
        'At integral-clamp switches/receptacles: 300 mm loop or 150 mm cable end available for replacement (Rule 12-510(4))',
      ],
      diagramaMermaid: `graph TD
    A["NMD90 / NMWU\\nRules 12-500 to 12-526"] --> B["Max 300V\\nbetween conductors\\nRule 12-502"]
    A --> C["Support Rules\\nRule 12-510"]
    A --> D["Protection Rules"]
    C --> E["Within 300 mm\\nof every box"]
    C --> F["Every 1.5 m\\nalong run"]
    C --> G["Through holes\\n= supported"]
    D --> H["Concealed:\\n32 mm from edge\\nor nail plate\\nRule 12-516"]
    D --> I["Exposed < 1.5 m:\\nrunning boards\\nRule 12-514"]
    D --> J["NOT in plaster\\nor cement\\nRule 12-512"]
    K["Heat Sources\\nRule 12-506-4"] --> L["25 mm from ducts"]
    K --> M["50 mm from chimney"]
    K --> N["150 mm from cleanout"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style J fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '300 mm + 1.5 m', note: 'Support within 300 mm of box and every 1.5 m — Rule 12-510', color: 'sky' },
        { icon: 'shield', title: '32 mm from Edge', note: 'Through studs/joists — 32 mm or use nail plate — Rule 12-516', color: 'emerald' },
        { icon: 'warning', title: 'Max 300V', note: 'NMD cable cannot be used for systems over 300V between conductors — Rule 12-502', color: 'rose' },
        { icon: 'fire', title: 'Heat Clearance', note: '25 mm ducts, 50 mm chimneys, 150 mm cleanouts — Rule 12-506(4)', color: 'amber' },
        { icon: 'bolt', title: 'Not in Plaster', note: 'NMD shall not be buried in plaster, cement, or similar — Rule 12-512', color: 'violet' },
      ],
    },

    // =========================================================================
    // 6. ARMOURED CABLE (Rules 12-600 to 12-618)
    // =========================================================================
    {
      id: '12-armoured-cable',
      title: 'Armoured Cable',
      rules: 'Rules 12-600 to 12-618',
      explanation:
        'Rules 12-602 to 12-618 cover armoured cable (AC90, ACWU90, TECK90, etc.).\n\nRule 12-602 (Use): Permitted in or on buildings of combustible or non-combustible construction. For underground, masonry/concrete (embedded in at least 50 mm), or continuous moisture/weather/oil locations, must be of a type listed in Table 19 as suitable for direct burial. Aluminum armour SHALL NOT be embedded in concrete with reinforcing steel unless the concrete has no chloride additives OR the armour is treated with bituminous paint. In cinder concrete, cables must be protected by 25 mm non-cinder concrete grouting unless 450 mm+ under the cinders. In non-combustible buildings, armoured cable up to No. 10 AWG may be laid on masonry surfaces and buried in plaster for extensions from existing outlets only. Armoured cable with overall jacket may be installed in raceway per Rule 12-902(2).\n\nRule 12-604 (Lanes): Below 2 m above grade in lanes/driveways, protect with No. 10 MSG steel guards unless otherwise protected.\n\nRule 12-606: Direct-burial armoured cable with thermoplastic covering: use only where outer covering won\'t be subject to mechanical damage.\n\nRule 12-608 (Continuity): Armour must be mechanically AND electrically continuous throughout and secured to all equipment.\n\nRule 12-610 (Terminating): Conductors issuing from armour protected by insulating bushing between conductors and armour, or by inner jacket protruding minimum 5 mm beyond armour. For No. 8 AWG+ conductors: insulated-type bushings or insulating material securely fastened. Connector design must leave bushing visible for inspection. ACG90/ACGWU90 connectors must be suitable per applicable Standard.\n\nRule 12-612 (Proximity to K&T/NMD): In buildings with concealed knob-and-tube or NMD, armoured cable shall NOT be fished if there is a possibility of damaging existing wiring.\n\nRule 12-614 (Bending): Minimum bend radius is 6 times external diameter. No undue distortion of armour. For armoured cable in raceways: 10.5x diameter for low-voltage, 18x for high-voltage, or per manufacturer.\n\nRule 12-616 (Concealed): Through studs/joists — at least 32 mm from edges, or protector plate, or bushing extending 13 mm each side. Behind baseboards — protected from driven nails.\n\nRule 12-618 (Support): Supported at max 1.5 m intervals. Near boxes: within 300 mm for trade size 35 or smaller connectors, 600 mm for trade size 35-78, 900 mm for trade size over 78. Through holes in joists/studs = supported. Concealed cable may be fished.',
      fieldScenario:
        'You are installing TECK90 armoured cable in a commercial building. At each termination, Rule 12-610 requires an insulating bushing between the conductors and the cut armour edge. For the 3/0 AWG conductors, Rule 12-610(2) specifically requires insulated-type bushings. The connector must be designed so the bushing is visible for inspection per Rule 12-610(3).\n\nThe cable runs through a mechanical room where it passes close to some structural steel studs. You maintain the minimum bend radius of 6 times the external diameter per Rule 12-614. Where the cable passes through a wall, you ensure it stays 32 mm from the edges of the framing member per Rule 12-616, or install a nail plate.\n\nThe building has an existing NMD cable system behind the walls. Rule 12-612 warns that you must NOT fish the armoured cable through the wall cavity if there is any possibility of damaging the existing NMD wiring. You route around it instead.',
      keyPoints: [
        'Permitted on combustible and non-combustible construction (Rule 12-602(1))',
        'Underground/wet/moisture exposure: must be direct-burial type per Table 19 (Rule 12-602(2))',
        'Aluminum armour NOT in concrete with rebar unless no chlorides or bituminous-treated (Rule 12-602(3))',
        'In cinder concrete: 25 mm non-cinder grouting protection unless 450 mm+ deep (Rule 12-602(4))',
        'Armour must be mechanically AND electrically continuous throughout the run (Rule 12-608)',
        'Insulating bushing at termination; inner jacket may protrude min 5 mm instead (Rule 12-610(1))',
        'No. 8 AWG+ conductors: insulated-type bushings required (Rule 12-610(2))',
        'Connector must leave bushing visible for inspection (Rule 12-610(3))',
        'Do NOT fish armoured cable near existing K&T or NMD if damage is possible (Rule 12-612)',
        'Minimum bend radius: 6x external diameter; no armour distortion (Rule 12-614)',
        'Support at max 1.5 m intervals; within 300 mm of boxes with trade size 35 or smaller connectors (Rule 12-618)',
        'Within 600 mm for trade size 35-78 connectors; within 900 mm for trade size over 78 (Rule 12-618(1))',
        'Concealed: 32 mm from edges of studs/joists or use protector plate/bushing (Rule 12-616)',
      ],
      diagramaMermaid: `graph TD
    A["Armoured Cable\\nRules 12-600 to 12-618"] --> B["Use Permitted\\nRule 12-602"]
    A --> C["Termination\\nRule 12-610"]
    A --> D["Support\\nRule 12-618"]
    B --> E["Combustible &\\nnon-combustible"]
    B --> F["Underground:\\ndirect-burial type\\nper Table 19"]
    B --> G["No Al armour in\\nrebar concrete\\nunless treated"]
    C --> H["Insulating bushing\\nor 5 mm inner jacket"]
    C --> I["No. 8+ AWG:\\ninsulated bushings"]
    C --> J["Bushing visible\\nfor inspection"]
    D --> K["Max 1.5 m\\nintervals"]
    D --> L["300/600/900 mm\\nfrom boxes by\\nconnector size"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'inspect', title: 'Bushing Visible', note: 'Connector must leave insulating bushing visible for inspection — Rule 12-610(3)', color: 'sky' },
        { icon: 'ruler', title: '6x Bend Radius', note: 'Minimum bend radius = 6 times external cable diameter — Rule 12-614', color: 'emerald' },
        { icon: 'warning', title: 'Do Not Fish Near NMD', note: 'If existing concealed NMD/K&T may be damaged — Rule 12-612', color: 'rose' },
        { icon: 'shield', title: '32 mm from Edge', note: 'Through studs/joists: 32 mm from edges or use protector plate — Rule 12-616', color: 'amber' },
      ],
    },

    // =========================================================================
    // 7. MI, ALUMINUM-SHEATHED & COPPER-SHEATHED CABLE (Rules 12-700 to 12-718)
    // =========================================================================
    {
      id: '12-mi-metal-sheathed',
      title: 'MI, Aluminum-Sheathed & Copper-Sheathed Cable',
      rules: 'Rules 12-700 to 12-718',
      explanation:
        'Rules 12-702 to 12-718 cover mineral-insulated (MI) cable, aluminum-sheathed cable, and copper-sheathed cable.\n\nRule 12-702 (Use): Permitted on combustible and non-combustible construction. Lightweight MI cable shall be used only in multi-conductor assemblies. In dry, damp, or wet locations without jacket, must comply with Rule 2-116 (corrosion protection).\n\nRule 12-704 (Embedded): MI cable (round), aluminum-sheathed, and copper-sheathed permitted for underplaster extensions from existing outlets only OR when encased/embedded in at least 50 mm of masonry or poured concrete. Flat two-conductor aluminum-sheathed: underplaster extensions only OR embedded in masonry with a deviation. Aluminum sheath NOT in concrete with reinforcing steel unless no chloride additives or treated with bituminous paint.\n\nRule 12-706 (Support): Secured by staples, straps, hangers, Type 2S/21S cable ties at intervals not exceeding 2 m (or fished with supports at terminations). Provision for settlement in grain storage type occupancies. May run on walls, partitions, ceilings, or structural members.\n\nRule 12-708 (Direct burial): MI cable with aluminum outer sheath and aluminum-sheathed cable in direct earth contact must have a jacket or corrosion-resisting covering.\n\nRule 12-710 (Mechanical protection): Required where subject to damage — within 1.5 m of floor and in areas with vehicles, equipment, stockpiling, or excessive vibration. Protected so that a 2-1/2 inch common nail cannot be driven into it where run through wood members, secured to underside of flooring, or behind baseboards. Pipe stub-up protection from grade to at least 300 mm above, with free-sliding encasement where frost heaving may occur.\n\nRule 12-712 (Bending): MI cable — min 6x external diameter. Smooth aluminum-sheathed: 10x (up to 19 mm), 12x (19-38 mm), 15x (over 38 mm). Corrugated aluminum/copper-sheathed: 9x external diameter.\n\nRule 12-714 (MI termination): Cable end must be sealed IMMEDIATELY after stripping to prevent moisture entry. Each conductor extended beyond sheath provided with proper insulation. MI cable box connectors must be used.\n\nRule 12-718 (Max sheath temp): MI cable permitted up to 250 degrees C maximum sheath temperature. Protective covering must be suitable for that temperature.',
      fieldScenario:
        'You are installing MI cable for a high-temperature application in an industrial oven room where ambient temperatures regularly exceed 100 degrees C. Rule 12-718 allows MI cable sheath temperatures up to 250 degrees C, making it ideal for this application. No other common cable type can handle these temperatures.\n\nWhen you strip the MI cable sheath for termination, Rule 12-714(a) requires you to seal the end IMMEDIATELY after stripping — the magnesium oxide insulation is extremely hygroscopic and absorbs moisture within minutes, destroying the insulation value. You use an approved MI cable termination kit with a heat-shrink seal.\n\nThe cable routes through a mechanical room at 1.2 m above floor level. Rule 12-710(2) requires mechanical protection because it is within 1.5 m of the floor. You install it behind a protective guard. Where it runs through wood joists, you ensure it is positioned so a 2-1/2 inch common nail cannot be driven into it per Rule 12-710(3).',
      keyPoints: [
        'MI, aluminum-sheathed, copper-sheathed: permitted on combustible and non-combustible construction (Rule 12-702)',
        'Lightweight MI cable used ONLY in multi-conductor assemblies (Rule 12-702(2))',
        'Embedded: underplaster extensions only, or encased in at least 50 mm masonry/concrete (Rule 12-704)',
        'Aluminum sheath NOT in rebar concrete unless no chlorides or bituminous-treated (Rule 12-704(3))',
        'Support at max 2 m intervals with staples, straps, hangers, or Type 2S/21S cable ties (Rule 12-706)',
        'Aluminum outer sheath in direct earth: must have jacket or corrosion-resisting covering (Rule 12-708)',
        'Protected within 1.5 m of floor and where vehicles/equipment present (Rule 12-710)',
        'Must be positioned so 2-1/2 inch nail cannot be driven into it in wood members (Rule 12-710(3))',
        'MI cable bend radius: min 6x external diameter (Rule 12-712(1))',
        'Smooth aluminum-sheathed bend radius: 10x/12x/15x by size (Rule 12-712(2))',
        'MI cable: seal end IMMEDIATELY after stripping to prevent moisture entry (Rule 12-714(a))',
        'MI cable max sheath temperature: 250 degrees C (Rule 12-718)',
      ],
      diagramaMermaid: `graph TD
    A["MI / Al-Sheathed /\\nCu-Sheathed Cable"] --> B["Use: Combustible &\\nnon-combustible\\nRule 12-702"]
    A --> C["Support: max 2 m\\nRule 12-706"]
    A --> D["Bend Radii\\nRule 12-712"]
    D --> E["MI: 6x diameter"]
    D --> F["Smooth Al:\\n10x/12x/15x"]
    D --> G["Corrugated:\\n9x diameter"]
    H["MI Cable Special"] --> I["Seal IMMEDIATELY\\nafter stripping\\nRule 12-714"]
    H --> J["Max sheath temp\\n250 C\\nRule 12-718"]
    H --> K["Lightweight MI:\\nmulti-conductor only\\nRule 12-702-2"]
    L["Protection"] --> M["1.5 m above floor\\nRule 12-710-2"]
    L --> N["Nail-proof in wood\\nRule 12-710-3"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style J fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'thermometer', title: '250 C Max Sheath', note: 'MI cable handles extreme heat — max 250 degrees C sheath temp — Rule 12-718', color: 'rose' },
        { icon: 'warning', title: 'Seal Immediately', note: 'MI insulation absorbs moisture within minutes of stripping — Rule 12-714', color: 'amber' },
        { icon: 'ruler', title: '2 m Support Spacing', note: 'Secure at intervals not exceeding 2 m with proper hardware — Rule 12-706', color: 'sky' },
        { icon: 'shield', title: 'Nail-Proof Placement', note: 'Position so a 2-1/2 inch nail cannot reach it in wood — Rule 12-710(3)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 8. RACEWAY GENERAL RULES (Rules 12-900 to 12-944)
    // =========================================================================
    {
      id: '12-raceway-general',
      title: 'Raceway General Rules',
      rules: 'Rules 12-900 to 12-944',
      explanation:
        'Rules 12-902 to 12-944 establish the universal requirements for all raceway types.\n\nRule 12-902: Conductors must be types suitable for raceways per Table 19. Armoured cable in conduit/tubing is permitted if fill per Table 8 is not exceeded and pulling tension/sidewall pressure limits are met (or limited run lengths: 15 m for 3-conductor copper, 45 m for single copper, 35 m for 3-conductor aluminum, 100 m for single aluminum between draw-in points with max two 90-degree bends).\n\nRule 12-904 (Conductors in raceways): ALL insulated conductors of a circuit in the SAME metal raceway. Parallel circuits: each enclosure must have equal phase and neutral conductors, same material and physical characteristics. Conductors from different sources NOT in the same raceway unless separated by metal armour, 1.34 mm steel barrier, or 1.5 mm non-metallic barrier, or they supply interconnected equipment.\n\nRule 12-906 (Bushing at ends): Bushings or equivalent required at raceway ends. No. 8 AWG+ requires insulated-type bushings unless equipment has a smoothly rounded hub throat.\n\nRule 12-908 (Inserting conductors): No electrically conducting lubricants or those harmful to insulation. Use conductor pulling compound, talc, or soapstone only.\n\nRule 12-910 (Fill): Conduit/tubing shall be large enough to draw in and withdraw conductors without damage. Max 200 conductors per conduit. Fill determined by Table 8 with usable areas from Tables 9A-9H and conductor sizes from Tables 6A-6K.\n\nRule 12-912: NO joints or splices within raceways — except busways, wireways, cable trays, and surface raceways with removable covers.\n\nRule 12-914: Conductors No. 8 AWG+ in raceways must be stranded (except busbars and MI cables).\n\nRule 12-916: Metal raceways electrically continuous throughout and to all attached equipment.\n\nRule 12-918: Raceways mechanically continuous throughout.\n\nRule 12-920: Raceways supported independently of equipment.\n\nRule 12-922: Fins and burrs removed from raceway ends.\n\nRule 12-924: Bend radius per Table 7 to centreline; no undue distortion.\n\nRule 12-928: Underground conduit entering building sealed with suitable compound.\n\nRule 12-930: Underground raceways comply with Section 22 (Category 1 wet locations).\n\nRule 12-936: Aluminum raceways NOT embedded in rebar concrete unless no chlorides or bituminous-treated. Metal raceways in cinder concrete: 25 mm non-cinder grouting unless 450 mm+ deep.\n\nRule 12-938: Raceways installed as COMPLETE system BEFORE pulling conductors.\n\nRule 12-940: Spare/unused raceways capped at enclosures.\n\nRule 12-942: Max four 90-degree bends between outlets or draw-in points.\n\nRule 12-944: Metal raceways in parking lots/pavement must comply with Rule 2-116(1).',
      fieldScenario:
        'You are pulling wire into a conduit run in a commercial building. Before pulling, you verify the run has no more than four 90-degree bends per Rule 12-942 — your run has three 90s plus one at the outlet, totaling four, which is the maximum. You use talc as a lubricant per Rule 12-908. The raceway system was installed complete with all fittings before you started pulling per Rule 12-938.\n\nThe conduit contains a 200A feeder with three 3/0 AWG conductors and a ground. You check Table 8 and Tables 9A-9H to verify the fill does not exceed the permitted percentage per Rule 12-910. The conductors are stranded since they are larger than No. 8 AWG per Rule 12-914.\n\nAt a junction point, the foreman suggests making a splice inside the conduit to save time. Rule 12-912 says NO — no joints or splices within raceways. You pull through to the next box and make the splice there. You install a bushing on the conduit end per Rule 12-906 — insulated-type since the conductors are No. 8+ AWG.',
      keyPoints: [
        'Conductors in raceways must be types per Table 19 (Rule 12-902)',
        'ALL conductors of a circuit in the SAME metal raceway (Rule 12-904(1))',
        'Different sources separated by metal armour, 1.34 mm steel, or 1.5 mm non-metallic barrier (Rule 12-904(2))',
        'Bushings at raceway ends; No. 8 AWG+ requires insulated-type bushings (Rule 12-906)',
        'Lubricants: pulling compound, talc, or soapstone only — no conducting lubricants (Rule 12-908)',
        'Max 200 conductors per conduit; fill per Table 8 with Tables 9A-9H (Rule 12-910)',
        'NO joints or splices in raceways — except busways, wireways, cable trays, surface raceways (Rule 12-912)',
        'No. 8 AWG+ conductors in raceways must be stranded (Rule 12-914)',
        'Metal raceways electrically AND mechanically continuous throughout (Rules 12-916, 12-918)',
        'Raceways supported independently of equipment (Rule 12-920)',
        'Bend radius per Table 7; max FOUR 90-degree bends between outlets/draw-in points (Rules 12-924, 12-942)',
        'Raceway installed as COMPLETE system BEFORE pulling conductors (Rule 12-938)',
        'Spare/unused raceways capped at enclosures (Rule 12-940)',
        'Underground conduit entering building sealed with compound against moisture/gases (Rule 12-928)',
        'Aluminum raceways NOT in rebar concrete unless no chlorides or bituminous-treated (Rule 12-936)',
      ],
      diagramaMermaid: `graph TD
    A["Raceway General Rules\\n12-900 to 12-944"] --> B["Before Pulling"]
    A --> C["During Pulling"]
    A --> D["Critical Limits"]
    B --> E["Complete system\\ninstalled first\\nRule 12-938"]
    B --> F["Remove fins\\nand burrs\\nRule 12-922"]
    B --> G["Bushings at ends\\nRule 12-906"]
    C --> H["Talc, soapstone,\\nor pulling compound\\nRule 12-908"]
    C --> I["All circuit conductors\\nin same raceway\\nRule 12-904"]
    D --> J["Max 4 x 90-deg\\nbends\\nRule 12-942"]
    D --> K["Max 200 conductors\\nFill per Table 8\\nRule 12-910"]
    D --> L["NO splices in\\nraceways\\nRule 12-912"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style L fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'No Splices in Raceways', note: 'Joints only in busways, wireways, cable trays, or surface raceways — Rule 12-912', color: 'rose' },
        { icon: 'ruler', title: 'Max 4 Bends', note: 'No more than four 90-degree bends between draw-in points — Rule 12-942', color: 'sky' },
        { icon: 'wire', title: 'Complete System First', note: 'Install all raceways and fittings before pulling wire — Rule 12-938', color: 'emerald' },
        { icon: 'shield', title: 'Table 8 Fill', note: 'Check conduit fill tables before pulling — max 200 conductors — Rule 12-910', color: 'amber' },
        { icon: 'bolt', title: 'Stranded Required', note: 'No. 8 AWG and larger in raceways must be stranded — Rule 12-914', color: 'violet' },
      ],
    },

    // =========================================================================
    // 9. METAL CONDUIT, EMT & FLEXIBLE CONDUIT (Rules 12-1000 to 12-1414)
    // =========================================================================
    {
      id: '12-metal-conduit-emt',
      title: 'Metal Conduit, EMT & Flexible Conduit',
      rules: 'Rules 12-1000 to 12-1414',
      explanation:
        'These rules cover rigid metal conduit, flexible metal conduit, liquid-tight flexible conduit, and EMT.\n\nRIGID & FLEXIBLE METAL CONDUIT (Rules 12-1000 to 12-1014):\n\nRule 12-1002: Permitted on combustible and non-combustible construction. In damp/wet locations, rigid metal conduit must be threaded with watertight joints and fittings.\n\nRule 12-1004: Minimum 16 trade size. Exception: 12 trade size flexible metal conduit for runs up to 1.5 m for equipment connection, and 12 trade size liquid-tight as permitted by Code.\n\nRule 12-1006: Threads must be tapered (1 to 16 taper). Running threads NOT permitted. Field threading per Table 40.\n\nRule 12-1010 (Supports): Rigid metal conduit — 1.5 m for 16 and 21 trade size, 2 m for 27 and 35, 3 m for 41 and larger. Mixed sizes: use spacing of smallest conduit. Flexible metal conduit: 1.5 m intervals and within 300 mm of every box, except when fished or for flex lengths up to 900 mm at terminals.\n\nRule 12-1012 (Expansion): In extreme temperature locations, provide expansion joints or two 90-degree bends for surface-mounted rigid metal conduit. With expansion joints, bonding jumpers per Rule 10-608.\n\nLIQUID-TIGHT FLEXIBLE CONDUIT (Rules 12-1300 to 12-1308):\n\nRule 12-1302: Permitted for flexible connections in dry, damp, or wet locations. 12 trade size runs up to 1.5 m for equipment connection. NOT where subject to mechanical damage, gasoline/petroleum solvents, corrosive liquids, or temperatures exceeding 60 degrees C (unless marked higher). Permitted for direct burial if marked. Must comply with Rule 2-132 in buildings.\n\nRule 12-1306: Separate bonding conductor required.\nRule 12-1308: Support within 300 mm of every box and at max 1.5 m intervals.\n\nEMT (Rules 12-1400 to 12-1414):\n\nRule 12-1402: Permitted for exposed, concealed, wet, outdoor, combustible and non-combustible construction. Steel type permitted in concrete/masonry slabs in contact with earth.\n\nRule 12-1404: NOT where subject to mechanical damage, corrosive vapour, or for direct earth burial.\n\nRule 12-1406: Secured within 1 m of each box/fitting, spacing per Rule 12-1010.\n\nRule 12-1412: Fittings — concrete-tight for poured concrete, wet-location type for wet/outdoor, standard for ordinary locations.\n\nRule 12-1414: Separate insulated bonding conductor required in EMT in: concrete slabs in contact with earth, wet locations, and outdoor locations. Exception: consumer\'s service raceway per Rule 10-604.',
      fieldScenario:
        'You are installing EMT in a wet mechanical room. Rule 12-1402 confirms EMT is permitted in wet locations. However, Rule 12-1412 requires wet-location type fittings for all couplings and connectors. Rule 12-1414 also requires a separate insulated bonding conductor inside the EMT because it is a wet location — you cannot rely on the EMT itself as the sole bonding path.\n\nYou secure the EMT within 1 m of each box per Rule 12-1406. The spacing between supports follows Rule 12-1010 — for 21 trade size (3/4 inch), that is 1.5 m maximum.\n\nIn another area, you are connecting a rooftop HVAC unit with liquid-tight flexible conduit. Rule 12-1302 permits this for the flexible connection needed. The ambient temperature does not exceed 60 degrees C. You run a separate bonding conductor inside per Rule 12-1306 and support the liquid-tight within 300 mm of the unit junction box per Rule 12-1308.',
      keyPoints: [
        'Rigid metal conduit in wet/damp: must be threaded with watertight joints (Rule 12-1002(2))',
        'Minimum conduit size: 16 trade size; 12 trade size flex limited to 1.5 m equipment connections (Rule 12-1004)',
        'Conduit threads: tapered 1:16, running threads NOT permitted, field per Table 40 (Rule 12-1006)',
        'Rigid metal conduit support: 1.5 m (16/21), 2 m (27/35), 3 m (41+) (Rule 12-1010)',
        'Flexible metal conduit: support at 1.5 m and within 300 mm of boxes; 900 mm flex at terminals (Rule 12-1010(3))',
        'Expansion joints or two 90-degree bends for extreme temperature changes; bonding jumper required (Rule 12-1012)',
        'Liquid-tight flex: max 60 degrees C unless marked higher; not for mechanical damage or solvents (Rule 12-1302)',
        'Liquid-tight flex needs separate bonding conductor (Rule 12-1306)',
        'EMT permitted: exposed, concealed, wet, outdoor, combustible/non-combustible (Rule 12-1402)',
        'EMT NOT permitted: mechanical damage areas, corrosive vapour, direct earth burial (Rule 12-1404)',
        'EMT secured within 1 m of each box or fitting (Rule 12-1406)',
        'EMT fittings: concrete-tight in concrete, wet-location in wet/outdoor, standard elsewhere (Rule 12-1412)',
        'EMT in wet/outdoor/earth-contact concrete: separate insulated bonding conductor required (Rule 12-1414)',
      ],
      diagramaMermaid: `graph TD
    A["Metal Conduit\\n& EMT"] --> B["Rigid Metal\\nConduit"]
    A --> C["Flexible Metal\\nConduit"]
    A --> D["Liquid-Tight\\nFlex"]
    A --> E["EMT"]
    B --> F["Supports:\\n1.5/2/3 m by size\\nRule 12-1010"]
    B --> G["Threaded watertight\\nin wet locations\\nRule 12-1002"]
    C --> H["Max 1.5 m intervals\\n300 mm from boxes\\nRule 12-1010-3"]
    D --> I["Max 60 C\\nBonding conductor\\nRules 12-1302/1306"]
    E --> J["Within 1 m of box\\nRule 12-1406"]
    E --> K["NOT direct burial\\nNOT mechanical damage\\nRule 12-1404"]
    E --> L["Bonding conductor\\nin wet/outdoor\\nRule 12-1414"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style K fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style L fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'EMT Support', note: 'Secured within 1 m of each box, spacing per Rule 12-1010 — Rule 12-1406', color: 'sky' },
        { icon: 'warning', title: 'No EMT Direct Burial', note: 'EMT cannot be directly buried in earth — Rule 12-1404', color: 'rose' },
        { icon: 'shield', title: 'Bonding in Wet EMT', note: 'Separate insulated bonding conductor required in wet/outdoor EMT — Rule 12-1414', color: 'emerald' },
        { icon: 'thermometer', title: 'Liquid-Tight Max 60 C', note: 'Not for temperatures over 60 degrees C unless marked higher — Rule 12-1302(3)(c)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 10. NON-METALLIC CONDUIT & TUBING (Rules 12-1100 to 12-1514)
    // =========================================================================
    {
      id: '12-non-metallic-conduit',
      title: 'Non-Metallic Conduit & Tubing',
      rules: 'Rules 12-1100 to 12-1514',
      explanation:
        'These rules cover rigid PVC conduit, rigid Types EB1/DB2/ES2, rigid RTRC conduit, HDPE conduit, and electrical non-metallic tubing (ENT).\n\nRIGID PVC CONDUIT (Rules 12-1100 to 12-1124):\n\nRule 12-1100: Permitted for exposed and concealed work above and below ground. Permitted in cinders without grouting.\nRule 12-1102: NOT where enclosed in thermal insulation.\nRule 12-1104: Max 75 degrees C for any part of the conduit. Conductors rated over 75 C permitted but ampacity limited to 90 C values.\nRule 12-1108: Field bends permitted with proper equipment; minimum radius per Rule 12-924.\nRule 12-1112: PVC not threaded — use adapters and couplings with solvent cement. Female threaded PVC adapters with metal nipple at metal enclosure entries.\nRule 12-1114: Support spacing — 750 mm (16/21/27), 1.2 m (35/41), 1.5 m (53), 1.8 m (63/78), 2.1 m (91/103/129), 2.5 m (155). Not clamped tightly unless embedded — allow for expansion/contraction.\nRule 12-1116: PVC conduit shall NOT support electrical equipment.\nRule 12-1118: Expansion joint required where expansion exceeds 45 mm.\nRule 12-1122: Separate bonding conductor per Rule 10-614.\n\nRIGID TYPES EB1 & DB2/ES2 (Rules 12-1150 to 12-1166):\n\nRule 12-1150: Underground per Rule 12-930 (EB1 must be encased in 50 mm concrete), or in walls/floors/ceilings with 50 mm masonry/concrete.\nRule 12-1152: NOT above ground except embedded per 12-1150(b).\nRule 12-1158: Not threaded; adapters permitted.\n\nRIGID RTRC CONDUIT (Rules 12-1200 to 12-1220):\n\nRule 12-1202: Types AG and XW permitted underground and exposed/concealed. Type BG underground and embedded only.\nRule 12-1204: Not in non-combustible buildings unless flame spread/smoke rating meets NBC.\nRule 12-1208: RTRC cannot be bent in the field.\nRule 12-1210: Max 110 degrees C temperature limit.\nRule 12-1214: Expansion joint where expansion exceeds 45 mm.\n\nHDPE CONDUIT (Rules 12-1250 to 12-1268):\n\nRule 12-1250: Underground per Rule 12-930 or embedded in 50 mm masonry/concrete.\nRule 12-1252: NOT above ground except embedded.\nRule 12-1254: Horizontal directional drilling and plow-trenching permitted with breakaway device, DR 11 or thicker walls, continuous runs without couplings. Fusion methods creating internal lip not permitted.\nRule 12-1258: Bend radius per manufacturer or 12x external diameter.\n\nENT (Rules 12-1500 to 12-1514):\n\nRule 12-1500: Underground per Rule 12-012 and exposed/concealed locations.\nRule 12-1502: Must have mechanical protection where subject to damage.\nRule 12-1504: Secured within 1 m of each box, support max 1 m intervals.\nRule 12-1508: Max 75 degrees C.\nRule 12-1514: Separate bonding conductor per Rule 10-614.',
      fieldScenario:
        'You are running PVC conduit for a parking lot lighting project. The conduit is exposed to temperature swings from -30 to +35 degrees C. Rule 12-1114 says do NOT clamp PVC tightly unless it is embedded — you must allow for expansion and contraction. For the long straight run, Rule 12-1118 requires an expansion joint because the expansion from the temperature range will exceed 45 mm.\n\nYou select appropriate support spacing per Rule 12-1114: for 27 trade size PVC, supports are every 750 mm. The PVC enters metal enclosures using female threaded PVC adapters with a metal nipple per Rule 12-1112(2). You install a separate bonding conductor inside per Rule 12-1122.\n\nFor the underground portion, the engineer specifies HDPE conduit installed by horizontal directional drilling. Rule 12-1254(5) requires a breakaway device set to maximum pulling tension, DR 11 or thicker walls, continuous runs without couplings, and pipe elongation compensated before cutting.',
      keyPoints: [
        'Rigid PVC: NOT where enclosed in thermal insulation; max 75 degrees C (Rules 12-1102, 12-1104)',
        'PVC not threaded — solvent cement with adapters; female threaded adapter + metal nipple at metal enclosures (Rule 12-1112)',
        'PVC support: 750 mm (16/21/27), 1.2 m (35/41), 1.5 m (53), 1.8 m (63/78); not clamped tightly (Rule 12-1114)',
        'PVC cannot support electrical equipment (Rule 12-1116)',
        'Expansion joint required where PVC expansion exceeds 45 mm (Rule 12-1118)',
        'PVC requires separate bonding conductor per Rule 10-614 (Rule 12-1122)',
        'EB1 conduit: underground only, must be encased in 50 mm concrete (Rule 12-1150)',
        'RTRC Types AG/XW: exposed and concealed; Type BG: underground/embedded only (Rule 12-1202)',
        'RTRC cannot be bent in the field; max 110 degrees C (Rules 12-1208, 12-1210)',
        'HDPE: underground or embedded only; not above ground (Rule 12-1252)',
        'HDPE horizontal directional drilling: breakaway device, DR 11 walls, continuous runs, no internal lip fusion (Rule 12-1254)',
        'ENT: secured within 1 m of box, support max 1 m intervals; max 75 degrees C (Rules 12-1504, 12-1508)',
        'ENT requires separate bonding conductor per Rule 10-614 (Rule 12-1514)',
      ],
      diagramaMermaid: `graph TD
    A["Non-Metallic\\nConduit & Tubing"] --> B["Rigid PVC\\n12-1100"]
    A --> C["EB1/DB2/ES2\\n12-1150"]
    A --> D["RTRC\\n12-1200"]
    A --> E["HDPE\\n12-1250"]
    A --> F["ENT\\n12-1500"]
    B --> G["Max 75 C\\nNot in insulation\\nSolvent cement"]
    C --> H["Underground only\\n50 mm concrete\\nencasement"]
    D --> I["Max 110 C\\nNO field bends\\nAG/XW exposed"]
    E --> J["Underground only\\nHDD permitted\\nDR 11+ walls"]
    F --> K["Within 1 m of box\\nSupport every 1 m\\nMax 75 C"]
    L["ALL Non-Metallic"] --> M["Separate bonding\\nconductor required\\nRule 10-614"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style M fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'thermometer', title: 'PVC Max 75 C', note: 'Not in thermal insulation; allow expansion — Rules 12-1102/12-1104', color: 'amber' },
        { icon: 'wire', title: 'Bonding Conductor', note: 'ALL non-metallic raceways need a separate bonding conductor — Rule 10-614', color: 'sky' },
        { icon: 'ruler', title: 'ENT Support Every 1 m', note: 'Secured within 1 m of box and supported every 1 m — Rule 12-1504', color: 'emerald' },
        { icon: 'warning', title: 'RTRC No Field Bends', note: 'Rigid RTRC conduit cannot be bent in the field — Rule 12-1208', color: 'rose' },
        { icon: 'shield', title: 'HDPE Underground Only', note: 'Not above ground except when embedded in 50 mm concrete — Rule 12-1252', color: 'violet' },
      ],
    },

    // =========================================================================
    // 11. SURFACE RACEWAYS, UNDERFLOOR & CELLULAR FLOORS (Rules 12-1600 to 12-1904)
    // =========================================================================
    {
      id: '12-surface-underfloor-cellular',
      title: 'Surface Raceways, Underfloor & Cellular Floors',
      rules: 'Rules 12-1600 to 12-1904',
      explanation:
        'SURFACE RACEWAYS (Rules 12-1600 to 12-1614):\n\nRule 12-1602: Permitted ONLY for exposed surface installation in dry locations. May extend through walls/partitions/floors in unbroken lengths with removable caps. NOT where subject to mechanical damage.\nRule 12-1604: Max ambient 50 degrees C unless marked higher. Conductors with ratings over 75 C limited to 75 C ampacity.\nRule 12-1606: Conductor fill max 40% of raceway cross-section.\nRule 12-1608: Max 300 V between conductors unless marked for higher voltage.\nRule 12-1610: Joints and splices PERMITTED in surface raceways with removable covers — fill max 75% at splice point.\nRule 12-1612: Non-metallic surface raceways need bonding conductor per Rule 10-614.\nRule 12-1614 (Flat cable systems): Only in branch circuits, horizontal runs with conductors uppermost.\n\nUNDERFLOOR RACEWAYS (Rules 12-1700 to 12-1718):\n\nRule 12-1700: Permitted under surface of concrete or flooring material — NOT below the floor, NOT in corrosive vapour areas, commercial garages, or battery rooms.\nRule 12-1702: Installed per manufacturer instructions, centreline aligned between junction boxes, waterproof cement at all joints.\nRule 12-1706: Taps and splices only in header access units or junction boxes.\nRule 12-1712: Discontinued outlets — conductors SHALL be removed from the raceway.\nRule 12-1714: Conductor fill max 40% of interior cross-section.\nRule 12-1716: Junction boxes shall NOT be used as outlet boxes.\n\nCELLULAR FLOORS (Rules 12-1800 to 12-1820):\n\nRule 12-1800: Installed per manufacturer instructions.\nRule 12-1802: NOT in corrosive areas, commercial garages, or battery rooms. No conductors in cells/headers containing non-electrical pipes. All conductors of a circuit in the same cell.\nRule 12-1804: Max conductor size No. 0 AWG (copper or aluminum) without deviation.\nRule 12-1806: Conductor fill max 40% of header cross-section.\nRule 12-1810: Markers required for cell location and system identification, extending through the floor.\nRule 12-1812: Junction boxes levelled to floor grade, sealed against water, metal construction, electrically continuous with headers via spot welding.\nRule 12-1814: Separate bonding conductor in cells and headers per Table 16.\nRule 12-1820: Discontinued outlets — remove conductors.\n\nAUXILIARY GUTTERS (Rules 12-1900 to 12-1904):\n\nRule 12-1900: Supplement wiring spaces at meter/distribution centres and switchboards. Max 6 m beyond equipment they supplement. NOT for busbars, switches, or overcurrent devices.\nRule 12-1902: Supported every 1.5 m unless marked for greater intervals.\nRule 12-1904: Fill max 20% at any cross-section. Max 200 conductors per compartment.',
      fieldScenario:
        'A client wants surface raceway installed in their office renovation to add circuits to interior walls without opening drywall. Rule 12-1602 permits surface raceways for exposed surface installation in dry locations — this office qualifies. The voltage between conductors is 120/240V — within the 300 V limit of Rule 12-1608. You verify conductor fill does not exceed 40% per Rule 12-1606.\n\nThe raceway extends through a partition wall. Rule 12-1602(2) allows this as long as it is in unbroken lengths and all exposed portions have removable caps. You need to make a splice at one point — Rule 12-1610 permits splices in surface raceways with removable covers, but fill at that point must not exceed 75%.\n\nIn a large commercial building, the original underfloor raceway system has some outlets that are no longer needed. Rule 12-1712 requires you to REMOVE the conductors supplying those discontinued outlets — you cannot just cap them and leave dead conductors in the raceway.',
      keyPoints: [
        'Surface raceways: exposed surface in dry locations ONLY; may pass through walls in unbroken lengths (Rule 12-1602)',
        'Surface raceways: max 50 degrees C ambient; max 300 V between conductors (Rules 12-1604, 12-1608)',
        'Surface raceways: 40% conductor fill; splices permitted in removable-cover type up to 75% fill (Rules 12-1606, 12-1610)',
        'Flat cables: branch circuits only, horizontal, conductors uppermost (Rule 12-1614)',
        'Underfloor raceways: under concrete surface, NOT below floor; NOT in garages or battery rooms (Rule 12-1700)',
        'Underfloor: taps/splices only in header access units or junction boxes (Rule 12-1706)',
        'Underfloor: discontinued outlet conductors SHALL be removed (Rule 12-1712)',
        'Cellular floors: NOT with non-electrical pipes in same cell; all circuit conductors in same cell (Rule 12-1802)',
        'Cellular floors: max conductor size No. 0 AWG without deviation (Rule 12-1804)',
        'Cellular floor markers required extending through floor for cell location (Rule 12-1810)',
        'Cellular floor junction boxes: levelled, sealed against water, spot welded for continuity (Rule 12-1812)',
        'Auxiliary gutters: max 6 m beyond supplemented equipment; NOT for busbars/switches/OCPD (Rule 12-1900)',
        'Auxiliary gutters: fill max 20%, max 200 conductors, supported every 1.5 m (Rules 12-1902, 12-1904)',
      ],
      diagramaMermaid: `graph TD
    A["Surface & Floor\\nSystems"] --> B["Surface Raceway\\n12-1600"]
    A --> C["Underfloor\\n12-1700"]
    A --> D["Cellular Floor\\n12-1800"]
    A --> E["Auxiliary Gutter\\n12-1900"]
    B --> F["Dry locations only\\nMax 300 V\\n40% fill"]
    B --> G["Splices OK with\\nremovable cover\\n75% at splice"]
    C --> H["Under concrete\\nonly; NOT below\\nfloor"]
    C --> I["Remove conductors\\nat discontinued\\noutlets"]
    D --> J["Max No. 0 AWG\\nAll circuit conductors\\nin same cell"]
    D --> K["Floor markers\\nrequired"]
    E --> L["Max 6 m beyond\\nequipment\\n20% fill"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'box', title: 'Surface = Dry Only', note: 'Surface raceways permitted only in dry exposed locations — Rule 12-1602', color: 'sky' },
        { icon: 'warning', title: 'Remove Dead Conductors', note: 'Discontinued underfloor/cellular outlets: remove the wire — Rules 12-1712/12-1820', color: 'rose' },
        { icon: 'ruler', title: 'Auxiliary Gutter Max 6 m', note: 'Cannot extend more than 6 m beyond equipment — Rule 12-1900', color: 'amber' },
        { icon: 'wire', title: 'Same Cell = Same Circuit', note: 'All conductors of a circuit in the same cellular floor cell — Rule 12-1802(4)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 12. BUSWAYS, WIREWAYS, CABLE TRAYS & CABLEBUS (Rules 12-2000 to 12-2258)
    // =========================================================================
    {
      id: '12-busways-wireways-tray',
      title: 'Busways, Wireways, Cable Trays & Cablebus',
      rules: 'Rules 12-2000 to 12-2258',
      explanation:
        'BUSWAYS & SPLITTERS (Rules 12-2000 to 12-2020):\n\nRule 12-2000: Exposed work only (exceptions for false ceilings with deviation and flush-mounted splitters). NOT outdoors/wet/damp unless marked. NOT where subject to mechanical damage, corrosive vapours, in hoistways, or battery rooms. Permitted as risers in non-combustible buildings with fire stops per Rule 2-128. In false ceilings: adequate ventilation (30 C ambient or derate to 82%/71%/58% for 40/45/50 C); totally enclosed type (ventilated OK with insulated busbars and non-combustible ceiling).\n\nRule 12-2006: Horizontal busways supported max 1.5 m unless marked for greater intervals. Vertical busways supported at each floor and at max 1.5 m.\n\nRule 12-2008: Through dry walls in unbroken lengths, totally enclosed in combustible walls. Through floors: totally enclosed through floor and 300 mm above, with fire stops. Dead-ends closed by fittings. Protection for 2 m above floor in public areas.\n\nRule 12-2012: Size reduction without OCPD permitted if smaller busway is max 15 m, at least 1/3 the rating of upstream OCPD, free from combustible material, and has adequate ampacity.\n\nRule 12-2014: Branch circuit busway length in metres should not exceed its ampere rating.\n\nWIREWAYS (Rules 12-2100 to 12-2112):\n\nRule 12-2100: Exposed work only, not outdoors/wet/damp unless marked. Same restrictions as busways. Risers permitted with fire stops.\nRule 12-2102: Supported max 1.5 m; dead-ends closed; 2 m protection above floor in public areas.\nRule 12-2104: Max 200 conductors, fill max 20%. No conductor over 500 kcmil copper or 750 kcmil aluminum. Signal/control wireways: any number of conductors, 40% fill.\nRule 12-2106: Taps and splices permitted — accessible and insulated.\n\nCABLE TRAYS (Rules 12-2200 to 12-2208):\n\nRule 12-2200: Complete system installed before cables. Max load/span per tray ratings. Cannot pass through walls except non-combustible. Vertically through floors with fire stops and 2 m enclosed above floor. Non-combustible supports. Minimum clearances: 150 mm between tiers (300 mm for 50 mm+ cables), 300 mm to ceilings/heating, 600 mm horizontal on one or both sides.\n\nRule 12-2202: Cables must have continuous metal sheath or interlocking armour. Exceptions: Type TC/TC-ER in industrial areas with qualified persons (min 1/0 AWG for single conductor). TC-ER may transition between trays and equipment. Single R90/RW75/RW90 1/0+ in vaults/service rooms.\nRule 12-2208: Metal cable tray bonded at 15 m intervals. Not required if all cables have metal armour/sheath. Warning notice "INTERLOCKING METAL ARMOUR CABLES ONLY" at max 10 m if tray is not bonded.\n\nCABLEBUS (Rules 12-2250 to 12-2258):\n\nRule 12-2252: Class A — public accessible or where Class B permitted. Class B — authorized persons only, isolated by elevation/barriers, maintained by qualified electrical personnel.\nRule 12-2254: Supported max 3.7 m (longer spans by specific design). Non-combustible supports. Same clearances as cable tray. Fire stops per Rule 2-128.',
      fieldScenario:
        'You are designing a cable tray installation for a data centre. Rule 12-2200(6) requires minimum clearances: 150 mm between cable tray tiers (300 mm since some cables exceed 50 mm diameter), 300 mm above the tray to the ceiling, and 600 mm horizontal clearance on each side because the tray installation width exceeds 1 m per Rule 12-2200(6)(d).\n\nAll cables are TECK90 with interlocking armour. Per Rule 12-2208(3), the metal cable tray does NOT need to be bonded since all cables have interlocking metal armour. However, Rule 12-2208(4) requires permanent warning notices every 10 m maximum stating "INTERLOCKING METAL ARMOUR CABLES OR CONTINUOUS METAL SHEATH CABLES ONLY."\n\nIn a separate area, the engineer wants to run Type TC tray cable. Rule 12-2202(3) permits this in industrial areas inaccessible to the public, with single conductors min 1/0 AWG, only where qualified persons service the installation. Type TC-ER can transition between tray and equipment per Rule 12-2202(4), supported at 1.5 m intervals outside the tray.',
      keyPoints: [
        'Busways: exposed work only; not in wet/damp, corrosive, hoistways, or battery rooms (Rule 12-2000)',
        'Busway in false ceiling: max 30 C ambient or derate (82%/71%/58% for 40/45/50 C) (Rule 12-2000(5))',
        'Busways supported max 1.5 m horizontal; at each floor + max 1.5 m vertical (Rule 12-2006)',
        'Busway reduction without OCPD: max 15 m, min 1/3 upstream OCPD rating, free from combustibles (Rule 12-2012)',
        'Wireways: max 200 conductors, 20% fill, max 500 kcmil Cu or 750 kcmil Al; taps/splices permitted (Rules 12-2104, 12-2106)',
        'Cable tray: complete system before cables; non-combustible supports; fire stops at floors (Rule 12-2200)',
        'Cable tray clearances: 150/300 mm vertical, 300 mm to ceiling, 600 mm horizontal (Rule 12-2200(6))',
        'Cable tray cables: continuous metal sheath or interlocking armour required (Rule 12-2202(2))',
        'Type TC in tray: industrial only, qualified persons, min 1/0 AWG single conductor (Rule 12-2202(3))',
        'Cable tray bonded at 15 m intervals; not required if all cables have armour/sheath (Rule 12-2208)',
        'Warning notices max 10 m apart if cable tray not bonded (Rule 12-2208(4))',
        'Cablebus: Class A public, Class B authorized only; supported max 3.7 m (Rules 12-2252, 12-2254)',
      ],
      diagramaMermaid: `graph TD
    A["Distribution\\nSystems"] --> B["Busways\\n12-2000"]
    A --> C["Wireways\\n12-2100"]
    A --> D["Cable Trays\\n12-2200"]
    A --> E["Cablebus\\n12-2250"]
    B --> F["Exposed only\\nSupport 1.5 m\\nDerate in ceiling"]
    C --> G["Max 200 conductors\\n20% fill\\nSplices OK"]
    D --> H["Metal sheath or\\narmour required\\nBonded at 15 m"]
    D --> I["Clearances:\\n150/300 mm vertical\\n600 mm horizontal"]
    E --> J["Class A: public\\nClass B: authorized\\nSupport 3.7 m"]
    D --> K["Type TC: industrial\\nqualified persons\\nmin 1/0 AWG"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Armour Required in Tray', note: 'Cable tray cables need metal sheath or interlocking armour — Rule 12-2202(2)', color: 'sky' },
        { icon: 'ruler', title: 'Cable Tray Clearances', note: '150/300 mm vertical tiers, 300 mm ceiling, 600 mm sides — Rule 12-2200(6)', color: 'emerald' },
        { icon: 'thermometer', title: 'Busway Derating', note: 'In false ceilings: 82% at 40 C, 71% at 45 C, 58% at 50 C — Rule 12-2000(5)', color: 'amber' },
        { icon: 'warning', title: 'Warning Notices', note: 'If tray not bonded: "ARMOUR CABLES ONLY" every 10 m max — Rule 12-2208(4)', color: 'rose' },
        { icon: 'shield', title: 'Fire Stops Required', note: 'Busways, wireways, cable trays through floors need fire stops — Rule 2-128', color: 'violet' },
      ],
    },

    // =========================================================================
    // 13. SPECIAL WIRING — FCC, EXTRA-LOW-VOLTAGE, PV & BARE BUSBARS
    //     (Rules 12-800 to 12-824, 12-2300 to 12-2600)
    // =========================================================================
    {
      id: '12-special-wiring',
      title: 'Special Wiring — FCC, Extra-Low-Voltage, Manufactured Systems & Bare Busbars',
      rules: 'Rules 12-800 to 12-824, 12-2300 to 12-2600',
      explanation:
        'TYPE FCC UNDER-CARPET WIRING (Rules 12-800 to 12-824):\n\nRule 12-802: FCC = flat conductor cable system for under-carpet installation, consisting of flat separated conductors in an insulating assembly with bottom shield, top shield, metal tape, transition assemblies, and connectors.\n\nRule 12-804: Permitted ONLY for extending general-purpose and appliance branch circuits in dry or damp locations, on hard smooth floors (concrete, ceramic, wood). Permitted on heated floors over 30 C if marked.\nRule 12-806: PROHIBITED outdoors, wet locations, dwelling units, schools/hospitals/institutions (except offices), on walls, under permanent partitions, over 150 V-to-ground or 300 V, over 30 A.\nRule 12-808: Covered with carpet squares max 750 mm, release-type adhesive.\nRule 12-812: Must include bottom shield; metal top shield over all floor-mounted FCC components.\nRule 12-814: Shields, tapes, boxes must be electrically continuous and bonded to ground.\nRule 12-820: Crossings permitted with metal shielding between cables.\nRule 12-824: Stacked runs NOT permitted.\n\nEXTRA-LOW-VOLTAGE SUSPENDED CEILING SYSTEMS (Rules 12-2300 to 12-2320):\n\nRule 12-2304: Complete system with identified utilization equipment, Class 2 power supply, and fittings.\nRule 12-2306: Permitted with Class 2 circuits in dry locations, residential/commercial/industrial. Permitted in air-handling spaces with suitable equipment.\nRule 12-2308: NOT in damp/wet, corrosive, concealed, patient care, hazardous locations, or fire-rated assemblies (unless designed for it).\nRule 12-2312: Disconnecting means within sight of Class 2 power supply.\nRule 12-2320: Class 2 load-side circuits shall NOT be grounded.\n\nMANUFACTURED WIRING SYSTEMS (Rules 12-2500 to 12-2502):\n\nRule 12-2500: Accessible dry locations and environmental air spaces when marked. May extend into walls for switch/outlet connections.\nRule 12-2502: Installed per Rules 12-602 to 12-618 (armoured cable rules).\n\nBARE BUSBARS (Rule 12-2600):\n\nRule 12-2600: Bare conductors NOT as main risers/feeders unless deviation per Rule 2-030 AND: non-combustible building, in inaccessible chase/channel/shaft, fire cut-offs at floors, suitable supports. For busbars 1200 A or less: flat busbars 6.35 mm or less thick — max 1000 A/645 mm2 copper or 700 A/645 mm2 aluminum; supports max 750 mm apart; min 50 mm clearance between opposite polarity bars; min 25 mm to grounded surfaces.',
      fieldScenario:
        'An office building manager wants to add power outlets in an open-plan office without cutting into the concrete floor. You propose Type FCC under-carpet wiring. Rule 12-804 permits this on the hard concrete floor in a dry location. However, you verify the building is NOT a school, hospital, or institution (Rule 12-806(d) — offices within those buildings ARE permitted). The branch circuit is 20 A at 120 V — within the 30 A and 150 V-to-ground limits.\n\nYou install the bottom shield first per Rule 12-812(1), lay the FCC cable, apply the metal top shield per Rule 12-812(2), and cover with carpet squares not exceeding 750 mm per Rule 12-808. Where two FCC cable runs cross, you ensure a layer of metal shielding separates them per Rule 12-820. Stacked runs are NOT permitted per Rule 12-824.\n\nIn a different project, a modern office is using an extra-low-voltage suspended ceiling power distribution system for LED lighting. Rule 12-2306 permits this with Class 2 circuits in dry commercial applications. Rule 12-2312 requires a disconnecting means within sight of the Class 2 power supply, and Rule 12-2320 says the load-side circuits shall NOT be grounded.',
      keyPoints: [
        'FCC: under carpet only, dry/damp, hard smooth floors; max 150 V-to-ground, 300 V, 30 A (Rules 12-804, 12-806)',
        'FCC NOT in dwelling units, schools/hospitals/institutions (except offices), wet, under permanent partitions (Rule 12-806)',
        'FCC: carpet squares max 750 mm, release-type adhesive (Rule 12-808)',
        'FCC: bottom shield required, metal top shield over all components; bonded to ground (Rules 12-812, 12-814)',
        'FCC stacked runs NOT permitted; crossings need metal shield between cables (Rules 12-820, 12-824)',
        'Extra-low-voltage ceiling systems: Class 2, dry locations, complete identified system (Rules 12-2304, 12-2306)',
        'Extra-low-voltage ceiling: NOT in damp/wet, patient care, hazardous, concealed (Rule 12-2308)',
        'Disconnecting means within sight of Class 2 power supply (Rule 12-2312)',
        'Class 2 load-side circuits shall NOT be grounded (Rule 12-2320)',
        'Manufactured wiring: dry accessible locations, installed per armoured cable rules 12-602 to 12-618 (Rule 12-2502)',
        'Bare busbars: deviation required; non-combustible building, inaccessible chase, fire cut-offs at floors (Rule 12-2600)',
        'Busbars 1200 A or less: max 1000 A/645 mm2 Cu, 700 A/645 mm2 Al; supports max 750 mm; 50 mm between bars (Rule 12-2600)',
      ],
      diagramaMermaid: `graph TD
    A["Special Wiring\\nMethods"] --> B["FCC Under-Carpet\\n12-800"]
    A --> C["Extra-Low-Voltage\\nCeiling\\n12-2300"]
    A --> D["Manufactured\\nWiring\\n12-2500"]
    A --> E["Bare Busbars\\n12-2600"]
    B --> F["Max 150V-to-ground\\n300V / 30A\\nDry hard floors"]
    B --> G["NOT in dwellings\\nschools\\nhospitals"]
    C --> H["Class 2 circuits\\nDry locations\\nLoad NOT grounded"]
    D --> I["Dry accessible\\nPer AC cable rules"]
    E --> J["Deviation required\\nNon-combustible\\nInaccessible chase"]
    E --> K["Max 1000A/645mm2 Cu\\n750 mm support\\n50 mm bar spacing"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'FCC: Not in Dwellings', note: 'Prohibited in dwelling units, schools, hospitals — Rule 12-806', color: 'rose' },
        { icon: 'ruler', title: 'Carpet Squares Max 750 mm', note: 'FCC covered with carpet squares using release adhesive — Rule 12-808', color: 'sky' },
        { icon: 'bolt', title: 'Class 2 Not Grounded', note: 'Extra-low-voltage ceiling load circuits shall NOT be grounded — Rule 12-2320', color: 'amber' },
        { icon: 'lock', title: 'Deviation for Bare Busbars', note: 'Special permission required from inspection department — Rule 12-2600', color: 'violet' },
      ],
    },

    // =========================================================================
    // 14. OUTLET BOXES, CABINETS & FITTINGS (Rules 12-3000 to 12-3036)
    // =========================================================================
    {
      id: '12-outlet-boxes-fittings',
      title: 'Outlet Boxes, Cabinets & Fittings',
      rules: 'Rules 12-3000 to 12-3036',
      explanation:
        'These rules cover the installation of outlet boxes, cabinets, terminal fittings, and pull boxes.\n\nRule 12-3000 (Outlet boxes): A box or equivalent required at every outlet, switch, or junction of conduit, raceways, armoured cable, or NMD. Non-metallic boxes NOT with metal raceways or armoured/metal-sheathed cable unless bonding connections provided between all cable entries. At least 150 mm of free conductor at each outlet for connections. Pendant ceiling fans under 16 kg: box marked for fan support. Floor boxes per manufacturer instructions.\n\nRule 12-3002: Cover plates shall match box type (flush or surface).\n\nRule 12-3004: Terminal fittings may substitute for boxes where conductors run without splice — each conductor gets a separately bushed hole. NOT at luminaire outlets.\n\nRule 12-3008 (Concrete construction): Ceiling box knockouts spaced above lower edge by 2x rebar diameter. Sectional boxes NOT embedded in concrete/masonry. Aluminum boxes NOT in rebar concrete unless no chlorides or bituminous-treated.\n\nRule 12-3010 (Supports): Boxes firmly secured to studs, joists, or fixed structural units. Ganged sectional boxes on metal supports or 19 mm+ wood boards. Boxes over 100 mm on at least two sides. On metal studs: additional support to prevent movement after drywall. Mounting nails/screws: max 6.4 mm from back or ends, no interference with conductors. Fan-support boxes: secured directly to building structure or by bar hanger. Fans 16 kg+ supported independently of box.\n\nRule 12-3014 (Accessibility): Junction boxes, pull boxes, outlet boxes, and conductor joints must be accessible. Minimum 900 mm vertical space for ready access.\n\nRule 12-3016: Front edges of boxes max 6 mm from finished surface; flush with combustible surface or projecting. Wet location boxes: maintain seal between box and cover.\n\nRule 12-3022 (Cable entry): Protect insulation, prevent strain on connections, ensure electrical continuity with conduit/armour/sheath, prevent damage to outer jacket, close openings so 6.75 mm test rod cannot enter.\n\nRule 12-3024: Unused box openings effectively closed by plugs or plates equivalent to box wall.\n\nRule 12-3028 (Multi-outlet assemblies): Dry locations only, NOT in bathrooms or kitchens, NOT subject to mechanical damage. May pass through (not run within) dry partitions.\n\nRule 12-3030 (Conductors from different sources): NOT in same box unless separated by 1.3 mm steel or 1.6 mm non-metallic barrier, or conductors supply interconnected equipment insulated for highest voltage.\n\nRule 12-3032 (Wiring space): Enclosures for OCPDs/controllers NOT used as junction boxes or raceways — exceptions for single feeder tap with independent clamping, existing installations at 75% fill (junction) or 40% fill (raceway), and instrument transformer wiring at 75% fill.\n\nRule 12-3034 (Max conductors): Per Table 23 for standard box sizes. Count: running through = 1, connected = 1, internal only = 0, No. 16/18 fixture wire to box-mounted luminaire = 0. Deductions: one conductor per fixture stud/hickey, one per pair of wire connectors, two per flush device on single strap. Box volume per Table 22 for non-standard or mixed sizes.\n\nRule 12-3036 (Pull box sizes): For No. 4 AWG+ conductors — straight pulls: 8x largest raceway diameter. Angle/U pulls: 6x largest plus sum of others on same wall.',
      fieldScenario:
        'You are selecting a box for a junction with four 14/2 NMD cables. Rule 12-3034 requires checking Table 23. Each cable has 2 conductors (counted as running through = 1 each, so 4 conductors counted) plus a ground. You also install two wire connectors (deduct 1 conductor per pair) and need space for the bonding connection. You verify the box volume from Table 22 is adequate for the total conductor count.\n\nThe homeowner wants a ceiling fan weighing 12 kg hung from a ceiling box. Rule 12-3000(9) requires the box to be MARKED for fan support. Rule 12-3010(8) requires it to be secured directly to the building structure or by a bar hanger. If the fan weighed 16 kg or more, Rule 12-3010(9) would require it to be supported independently of the box entirely.\n\nIn a commercial panel, the electrician suggests running some branch circuit wires through the panel enclosure to reach a sub-panel on the other side. Rule 12-3032(1) says enclosures for overcurrent devices shall NOT be used as raceways or junction boxes for feed-through conductors — except per the limited exceptions in 12-3032(2).',
      keyPoints: [
        'Box required at every outlet, switch, or junction of conduit/raceways/cable (Rule 12-3000(1))',
        'Non-metallic boxes NOT with metal raceways or armoured cable unless bonding provided (Rule 12-3000(2))',
        'Minimum 150 mm free conductor at each outlet for connections (Rule 12-3000(6))',
        'Ceiling fans under 16 kg: box MARKED for fan support; 16 kg+: supported independently (Rules 12-3000(9), 12-3010(9))',
        'Boxes secured to studs/joists; over 100 mm dimension on at least 2 sides (Rules 12-3010(1)(3))',
        'Junction boxes and conductor joints must be accessible; min 900 mm vertical space (Rule 12-3014)',
        'Front edges max 6 mm from finished surface; flush with combustible walls (Rule 12-3016(1))',
        'Cable entry: protect insulation, prevent strain, ensure continuity, close openings to 6.75 mm test rod (Rule 12-3022)',
        'Unused openings closed by plugs/plates equivalent to box wall (Rule 12-3024)',
        'Multi-outlet assemblies: dry only, NOT in bathrooms or kitchens (Rule 12-3028)',
        'Different source conductors separated by 1.3 mm steel or 1.6 mm non-metallic barrier (Rule 12-3030)',
        'OCPD enclosures NOT as junction boxes/raceways except limited exceptions (Rule 12-3032)',
        'Max conductors per Table 23; deductions for fixture studs, wire connectors, flush devices (Rule 12-3034)',
        'Pull boxes: straight pulls 8x largest raceway; angle pulls 6x largest plus sum of others (Rule 12-3036)',
      ],
      diagramaMermaid: `graph TD
    A["Outlet Boxes & Fittings\\nRules 12-3000 to 12-3036"] --> B["Box Requirements\\nRule 12-3000"]
    A --> C["Support\\nRule 12-3010"]
    A --> D["Fill & Sizing\\nRule 12-3034"]
    A --> E["Wiring Space\\nRule 12-3032"]
    B --> F["At every outlet\\nswitch & junction"]
    B --> G["150 mm free\\nconductor"]
    B --> H["Fan box marked\\nfor purpose"]
    C --> I["Secured to structure\\n>100 mm on 2 sides"]
    C --> J["Fan 16 kg+:\\nindependent support"]
    D --> K["Per Table 23\\nStandard boxes"]
    D --> L["Per Table 22\\nNon-standard/mixed"]
    E --> M["OCPD enclosures:\\nNOT raceways\\nor junction boxes"]
    N["Pull Boxes\\nRule 12-3036"] --> O["Straight: 8x\\nAngle: 6x + sum"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style M fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style N fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'box', title: 'Box at Every Point', note: 'Every outlet, switch, or junction needs a box or equivalent — Rule 12-3000(1)', color: 'sky' },
        { icon: 'ruler', title: '150 mm Free Conductor', note: 'Leave at least 150 mm at each outlet for connections — Rule 12-3000(6)', color: 'emerald' },
        { icon: 'inspect', title: 'Accessible Always', note: 'Junction boxes and conductor joints must remain accessible — Rule 12-3014', color: 'amber' },
        { icon: 'warning', title: 'Panel Not a Raceway', note: 'OCPD enclosures cannot be used as raceways for feed-through — Rule 12-3032', color: 'rose' },
        { icon: 'shield', title: 'Pull Box Sizing', note: 'Straight: 8x largest raceway; Angle: 6x largest + sum of others — Rule 12-3036', color: 'violet' },
      ],
    },
  ],
}
