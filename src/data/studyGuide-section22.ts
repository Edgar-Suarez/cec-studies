import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 22 — Locations in Which Corrosive Liquids, Vapours, or Excessive
 *              Moisture Are Likely to Be Present
 * (CEC 2021, CSA C22.1:21, pages 204–209)
 * COMPLETE — Every rule from 22-000 to 22-808 is covered.
 * Source: PDF scan "Section 22 — Locations in which corrosive liquids…"
 */

export const section22Guide: StudyGuideSection = {
  section: '22',
  title: 'Section 22 — Locations in Which Corrosive Liquids, Vapours, or Excessive Moisture Are Likely to Be Present',
  description:
    'Section 22 supplements the general CEC requirements and applies to electrical equipment and installations in locations where corrosive liquids, vapours, or excessive moisture are likely to be present. It defines two categories: Category 1 (moisture from vapour, liquid, condensation, dripping, or splashing) and Category 2 (corrosive liquids or vapours likely to interfere with equipment). The section covers equipment selection (Rules 22-100 to 22-108), wiring methods for each category (Rules 22-200 to 22-204), drainage and sealing (Rules 22-300 to 22-302), circuit control (Rule 22-400), corrosion-resistant materials (Rule 22-500), bonding (Rule 22-600), sewage lift and treatment plants (Rules 22-700 to 22-710), and farm buildings housing livestock (Rules 22-800 to 22-808).',
  subsections: [
    // =========================================================================
    // 1. SCOPE, CATEGORY DEFINITIONS & APPLICATION (Rules 22-000 to 22-004)
    // =========================================================================
    {
      id: '22-scope-categories',
      title: 'Scope, Category Definitions & Application',
      rules: 'Rules 22-000 to 22-004',
      explanation:
        'Rule 22-000 (Scope): This Section applies to electrical equipment and installations in locations in which corrosive liquids, vapours, or excessive moisture are likely to be present, and supplements or amends the general requirements of this Code.\n\nRule 22-002 (Category definitions): Locations covered in this Section shall be classified as follows:\n\n(a) Category 1 — the location is one in which moisture in the form of vapour or liquid is present in quantities that are liable to interfere with the normal operation of electrical equipment, whether the moisture is caused by condensation, the dripping or splashing of liquid, or otherwise.\n\n(b) Category 2 — the location is one in which corrosive liquids or vapours are likely to be present in quantities that are likely to interfere with the normal operation of electrical equipment.\n\nThe distinction is critical: Category 1 deals with MOISTURE (water, condensation, steam, splashing), while Category 2 deals with CORROSION (acids, chemical fumes, corrosive vapours). Category 2 is more severe because corrosive agents actively deteriorate equipment materials.\n\nRule 22-004 (Application of category definitions): Where the expressions "Category 1" or "Category 2" do not appear in any Rule in this Section, the Rule shall apply to BOTH categories. This is important for exam purposes — many rules in Section 22 apply to both categories unless they specifically reference one.',
      fieldScenario:
        'You are assessing a food processing plant for electrical installations. The production floor has steam wash-down stations that spray hot water at high pressure — this is a Category 1 location because excessive moisture is present from condensation and splashing (Rule 22-002(a)).\n\nDown the hall, the chemical storage room contains open vats of acidic cleaning solution. The vapours rising from these vats are corrosive — this is a Category 2 location (Rule 22-002(b)).\n\nThe general bonding rule (Rule 22-600) does not mention Category 1 or Category 2 specifically, so per Rule 22-004 it applies to BOTH locations. The same applies to the drainage and sealing rules (22-300 to 22-302).\n\nHowever, the wiring method rules are specific: Rule 22-200 applies only to Category 1, and Rule 22-202 applies only to Category 2. You must use the correct rule for each area.',
      keyPoints: [
        'Section 22 supplements the general CEC requirements for corrosive and wet locations (Rule 22-000)',
        'Category 1 = moisture (vapour, liquid, condensation, dripping, splashing) that interferes with equipment operation (Rule 22-002(a))',
        'Category 2 = corrosive liquids or vapours that interfere with equipment operation (Rule 22-002(b))',
        'Category 1 = wet/moisture hazard; Category 2 = corrosion/chemical hazard — Category 2 is more severe',
        'Where a Rule does NOT specify Category 1 or Category 2, it applies to BOTH categories (Rule 22-004)',
      ],
      diagramaMermaid: `graph TD
    A["Section 22\\nScope\\n(Rule 22-000)"] --> B["Category 1\\nMOISTURE\\nVapour, liquid,\\ncondensation,\\ndripping, splashing\\n(Rule 22-002a)"]
    A --> C["Category 2\\nCORROSION\\nCorrosive liquids\\nor vapours\\n(Rule 22-002b)"]
    B --> D["Equipment:\\nWet location rated\\n(Rule 22-102-1)"]
    C --> E["Equipment:\\nCorrosion-resistant\\n(Rule 22-102-2)"]
    F["Rule 22-004"] --> G["If Rule does NOT\\nspecify category\\n= applies to BOTH"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'water', title: 'Category 1 = Moisture', note: 'Vapour, condensation, dripping, splashing — wet location rules — Rule 22-002(a)', color: 'sky' },
        { icon: 'fire', title: 'Category 2 = Corrosion', note: 'Corrosive liquids or vapours — more severe, attacks materials — Rule 22-002(b)', color: 'rose' },
        { icon: 'shield', title: 'No Category = Both', note: 'Rules without a category reference apply to BOTH Category 1 and 2 — Rule 22-004', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 2. EQUIPMENT — Essential Equipment, Ratings & Devices (Rules 22-100 to 22-108)
    // =========================================================================
    {
      id: '22-equipment',
      title: 'Equipment — Essential Equipment, Ratings, Luminaires & Devices',
      rules: 'Rules 22-100 to 22-108',
      explanation:
        'These rules establish which equipment may be installed in Category 1 and Category 2 locations, and the construction requirements for that equipment.\n\nRule 22-100 (Essential equipment only):\n1) Only electrical equipment that is essential for the processes being carried on in a room or section of a building shall be installed in Category 1 and Category 2 locations. This is a key principle — minimize the amount of equipment exposed to harsh conditions.\n2) Service equipment, motors, panelboards, switchboards, and other electrical equipment shall, where practicable, be installed in rooms or sections of the building that are NOT Category 1 or Category 2 locations.\n3) Enclosures containing moulded case circuit breakers shall not be located in a Category 2 location unless marked as suitable for the application.\n\nRule 22-102 (Electrical equipment):\n1) Electrical equipment located in a Category 1 location shall be suitable for wet locations.\n2) Electrical equipment located in a Category 2 location shall be corrosion-resistant.\n3) Where the electrical equipment is, or is likely to be, partially or wholly submerged, it shall be of a submersible type of construction.\n\nRule 22-104 (Pendant lampholders):\n1) Pendant lampholders shall be of the weatherproof type and hung from insulated stranded copper conductors of not less than No. 14 AWG.\n2) Where the pendant insulated conductors exceed 900 mm in length, they shall be twisted together.\n\nRule 22-106 (Luminaires):\n1) Every luminaire in a Category 1 location shall be constructed so that water cannot enter or accumulate within the luminaire.\n2) Every luminaire in a Category 2 location shall be totally enclosed, gasketted, and of a corrosion-resistant type of construction.\n\nRule 22-108 (Wiring devices and connectors):\n1) Receptacles, inlets, attachment plugs, and connectors shall be:\n(a) of the weather-resistant type when installed in a Category 1 location; and\n(b) of the corrosion-resistant type when installed in a Category 2 location.\n2) Devices in Subrule 1) shall be protected by suitable enclosures, and such protection shall be present whether or not an attachment plug is inserted into the receptacle or a connector is inserted into the inlet.\n3) Flexible cords, portable power cables, and attachment plugs for portable equipment shall comply with the requirements of Subrules 1) and 2) and be of the outdoor type suitable for hard usage as selected in accordance with Rules 12-402(1) and 12-406(1).',
      fieldScenario:
        'You are designing the electrical layout for a brewery. The brew house has steam and constant water splashing — Category 1. The quality lab uses acidic cleaning solutions — Category 2.\n\nIn the brew house, Rule 22-100(1) says install ONLY equipment essential to the brewing process. The main distribution panel should be in the dry office area per Rule 22-100(2). All equipment must be wet-location rated per Rule 22-102(1). Luminaires must prevent water entry per Rule 22-106(1). Receptacles must be weather-resistant with protective enclosures that remain in place even when no plug is inserted (Rule 22-108(1)(a) and (2)).\n\nIn the quality lab (Category 2), circuit breaker enclosures can only be there if marked as suitable for the application (Rule 22-100(3)). All equipment must be corrosion-resistant (Rule 22-102(2)). Luminaires must be totally enclosed, gasketted, and corrosion-resistant (Rule 22-106(2)) — a higher standard than Category 1. Receptacles must be corrosion-resistant type (Rule 22-108(1)(b)).\n\nA pump motor is partially submerged in a floor drain — it must be submersible construction per Rule 22-102(3). The overhead pendant lights use No. 14 AWG stranded copper conductors (Rule 22-104(1)), and since the pendant cords are 1.2 m long (exceeding 900 mm), they must be twisted together (Rule 22-104(2)).\n\nPortable tools used in both areas require outdoor-rated, hard-usage cords and matching plugs per Rule 22-108(3).',
      keyPoints: [
        'Only ESSENTIAL equipment shall be installed in Category 1 or 2 locations — minimize exposure (Rule 22-100(1))',
        'Service equipment, panelboards, switchboards should be installed OUTSIDE Category 1 or 2 areas where practicable (Rule 22-100(2))',
        'Moulded case circuit breaker enclosures NOT in Category 2 unless marked suitable (Rule 22-100(3))',
        'Category 1 equipment: suitable for wet locations (Rule 22-102(1))',
        'Category 2 equipment: corrosion-resistant (Rule 22-102(2))',
        'Equipment likely to be submerged: submersible type of construction (Rule 22-102(3))',
        'Pendant lampholders: weatherproof type, hung from No. 14 AWG minimum insulated stranded copper (Rule 22-104(1))',
        'Pendant conductors exceeding 900 mm: shall be twisted together (Rule 22-104(2))',
        'Category 1 luminaires: water cannot enter or accumulate (Rule 22-106(1))',
        'Category 2 luminaires: totally enclosed, gasketted, corrosion-resistant (Rule 22-106(2))',
        'Category 1 devices: weather-resistant; Category 2 devices: corrosion-resistant (Rule 22-108(1))',
        'Device enclosures must protect whether or not a plug/connector is inserted (Rule 22-108(2))',
        'Portable equipment: outdoor type, hard usage cords per Rules 12-402(1) and 12-406(1) (Rule 22-108(3))',
      ],
      diagramaMermaid: `graph TD
    A["Equipment Rules\\n(Rules 22-100 to 22-108)"] --> B["Essential Only:\\nMinimize equipment\\nin harsh areas\\n(Rule 22-100)"]
    A --> C["Category 1\\nWet-location rated\\n(Rule 22-102-1)"]
    A --> D["Category 2\\nCorrosion-resistant\\n(Rule 22-102-2)"]
    C --> E["Luminaires:\\nNo water entry\\n(Rule 22-106-1)"]
    D --> F["Luminaires:\\nEnclosed + gasketted\\n+ corrosion-resistant\\n(Rule 22-106-2)"]
    C --> G["Devices:\\nWeather-resistant\\n(Rule 22-108-1a)"]
    D --> H["Devices:\\nCorrosion-resistant\\n(Rule 22-108-1b)"]
    I["Submerged?"] --> J["Submersible\\nconstruction\\n(Rule 22-102-3)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style J fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Essential Equipment Only', note: 'Keep panelboards, switchboards, etc. OUT of Category 1/2 areas — Rule 22-100(2)', color: 'emerald' },
        { icon: 'water', title: 'Cat 1: Wet-Location Rated', note: 'Equipment suitable for wet locations, luminaires prevent water entry — Rules 22-102/106', color: 'sky' },
        { icon: 'fire', title: 'Cat 2: Corrosion-Resistant', note: 'Equipment + luminaires must be corrosion-resistant, enclosed, gasketted — Rules 22-102/106', color: 'rose' },
        { icon: 'wire', title: 'Pendant > 900 mm = Twist', note: 'Pendant conductors exceeding 900 mm must be twisted together — Rule 22-104(2)', color: 'amber' },
        { icon: 'lock', title: 'Enclosures Always On', note: 'Device enclosures must protect whether or not plug is inserted — Rule 22-108(2)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 3. WIRING — Category 1 Locations (Rule 22-200)
    // =========================================================================
    {
      id: '22-wiring-category1',
      title: 'Wiring Methods in Category 1 Locations',
      rules: 'Rule 22-200',
      explanation:
        'Rule 22-200 specifies wiring methods permitted in Category 1 (moisture) locations.\n\nSubrule 1) Where insulated conductors or cables are exposed to moisture in a Category 1 location, they shall:\n(a) if used in exposed wiring, be of the types selected in accordance with Rule 12-102(3) and rated:\n(i) for exposed wiring in wet locations; OR\n(ii) for exposed wiring where exposed to the weather, provided that they are located more than 1.5 m horizontally or 2.5 m vertically from floors, decks, balconies, or stairs.\n(b) if used in a raceway, be of the types selected in accordance with Rule 12-102(3) for use in raceways in wet locations.\n\nSubrule 2) Non-metallic-sheathed cable of the NMW or NMWU type shall be permitted to be used in a Category 1 location. These are the moisture-rated versions of NMD cable.\n\nSubrule 3) Armoured cable, aluminum-sheathed cable, and copper-sheathed cable installed in a Category 1 location shall be of the type selected in accordance with Rule 12-102(3) for direct earth burial. This ensures the cable jacket can withstand continuous moisture exposure.\n\nSubrule 4) Split knobs or cleats shall NOT be used in a Category 1 location.\n\nSubrule 5) Mineral-insulated cable shall be permitted to be used in a Category 1 location, but if the cable is secured to walls, it shall be spaced at least 6 mm from the wall at each point of support. This air gap allows moisture to drain and prevents trapping water between the cable and wall.\n\nSubrule 6) Aluminum conductors shall NOT be used in Category 1 locations unless the termination or joint is adequately sealed against ingress of moisture. Moisture causes aluminum to oxidize and develop high-resistance connections.',
      fieldScenario:
        'You are wiring an indoor swimming pool facility — a Category 1 location due to constant humidity and condensation.\n\nFor the main feeder run, you choose NMW cable (Rule 22-200(2)) — this is the wet-rated non-metallic sheathed cable. Standard NMD cable is NOT acceptable here.\n\nThe pool pump motors are fed by armoured cable. Rule 22-200(3) requires that armoured cable in Category 1 must be the type rated for direct earth burial per Rule 12-102(3) — this means the cable jacket must withstand continuous moisture.\n\nAn electrician suggests mounting MI cable along the wall near the pool. Rule 22-200(5) permits this, but the cable must be spaced at least 6 mm from the wall at each support point — this prevents moisture from being trapped behind the cable where it would cause corrosion.\n\nSomeone asks about using aluminum conductors for the large feeder to save cost. Rule 22-200(6) says aluminum is NOT permitted unless every termination and joint is sealed against moisture. This is because aluminum oxidizes rapidly in wet environments, creating dangerous high-resistance connections. If you do use aluminum, every connection must be thoroughly sealed.\n\nYou cannot use split knobs or cleats for any wiring per Rule 22-200(4). For exposed wiring, conductors must be wet-location rated per Rule 22-200(1)(a)(i), or weather-rated if located more than 1.5 m horizontally or 2.5 m vertically from floors.',
      keyPoints: [
        'Exposed wiring in Category 1: wet-location rated OR weather-rated if >1.5 m horizontal / >2.5 m vertical from floors (Rule 22-200(1)(a))',
        'Raceways in Category 1: conductors rated for wet locations per Rule 12-102(3) (Rule 22-200(1)(b))',
        'NMW or NMWU cable (moisture-rated non-metallic sheathed) permitted in Category 1 (Rule 22-200(2))',
        'Armoured, aluminum-sheathed, copper-sheathed cable: must be direct-earth-burial type per Rule 12-102(3) (Rule 22-200(3))',
        'Split knobs or cleats shall NOT be used in Category 1 (Rule 22-200(4))',
        'Mineral-insulated cable permitted, but spaced at least 6 mm from wall at each support point (Rule 22-200(5))',
        'Aluminum conductors NOT permitted in Category 1 unless every termination/joint is sealed against moisture (Rule 22-200(6))',
      ],
      diagramaMermaid: `graph TD
    A["Category 1\\nWiring Methods\\n(Rule 22-200)"] --> B["NMW / NMWU\\ncable permitted\\n(Subrule 2)"]
    A --> C["Armoured / AL-sheath /\\nCu-sheath: direct earth\\nburial type\\n(Subrule 3)"]
    A --> D["MI cable: 6 mm\\nmin from wall\\n(Subrule 5)"]
    A --> E["NO split knobs\\nor cleats\\n(Subrule 4)"]
    A --> F["Aluminum: NOT\\npermitted unless\\njoints sealed\\n(Subrule 6)"]
    A --> G["Exposed wiring:\\nwet-location or\\nweather-rated\\n(Subrule 1)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'NMW / NMWU Only', note: 'Standard NMD not allowed — use moisture-rated NMW or NMWU — Rule 22-200(2)', color: 'sky' },
        { icon: 'ruler', title: '6 mm Wall Spacing for MI', note: 'Mineral-insulated cable spaced 6 mm from wall to allow drainage — Rule 22-200(5)', color: 'amber' },
        { icon: 'warning', title: 'No Aluminum (Usually)', note: 'Aluminum conductors prohibited unless every joint/termination is moisture-sealed — Rule 22-200(6)', color: 'rose' },
        { icon: 'shield', title: 'No Split Knobs/Cleats', note: 'Split knobs and cleats not permitted in Category 1 locations — Rule 22-200(4)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 4. WIRING — Category 2 Locations & Rinks (Rules 22-202, 22-204)
    // =========================================================================
    {
      id: '22-wiring-category2-rinks',
      title: 'Wiring Methods in Category 2 Locations & Rinks',
      rules: 'Rules 22-202, 22-204',
      explanation:
        'Rule 22-202 (Wiring method in Category 2 locations):\n\nSubrule 1) Where insulated conductors or cables are exposed to corrosive liquids or vapours in a Category 2 location, they shall:\n(a) if used in exposed wiring, be of a type with corrosion-resistant protection and be located more than 1.5 m horizontally or 2.5 m vertically from floors, decks, balconies, or stairs;\n(b) if used in conduit, be of a type with corrosion-resistant protection.\n\nSubrule 2) Non-metallic-sheathed cable of the NMW or NMWU type shall be permitted to be used in a Category 2 location.\n\nSubrule 3) The following shall NOT be used in Category 2 locations: surface metal raceways, underfloor raceways, bare conductors, armoured cable (except where permitted in Table 19 for exposure to corrosive action), wireways, busways, and split knobs.\n\nSubrule 4) Mineral-insulated cable shall be permitted to be used in a Category 2 location if the corrosive action is not of such a nature as to cause deterioration of the outer sheath.\n\nSubrule 5) Aluminum-sheathed cable and copper-sheathed cable shall be permitted in a Category 2 location, provided that they have suitable corrosion-resistant protection where necessary.\n\nSubrule 6) Aluminum conductors shall NOT be used in Category 2 locations unless the termination or joint is adequately sealed against ingress of corrosive liquids or vapours.\n\nRule 22-204 (Rinks):\n1) Insulated conductors run as open wiring in accordance with Rules 12-200 and 12-206 shall be permitted for lighting of curling or skating rink areas subject to condensation, provided the conductors are suitable for wet locations as selected per Rule 12-102(3).\n2) The wiring method used in waiting rooms and other portions of rinks shall be in accordance with Section 12 based on the area and moisture conditions involved.\n3) Rink areas that are provided with positive mechanical ventilation capable of changing the air at least three times per hour shall be permitted to be regarded as dry locations.',
      fieldScenario:
        'You are wiring a chemical plant laboratory where corrosive acid fumes are present — a Category 2 location.\n\nRule 22-202(3) is your first check: surface metal raceways, underfloor raceways, bare conductors, wireways, busways, and split knobs are all PROHIBITED. Armoured cable is also prohibited unless Table 19 specifically permits it for the type of corrosive action present.\n\nYou can use NMW/NMWU cable (Rule 22-202(2)) or MI cable if the corrosive action will not deteriorate its outer sheath (Rule 22-202(4)). Aluminum-sheathed or copper-sheathed cable is permitted with corrosion-resistant protection (Rule 22-202(5)).\n\nFor exposed wiring, the conductors must have corrosion-resistant protection AND be mounted more than 1.5 m horizontally or 2.5 m vertically from floors (Rule 22-202(1)(a)). For conduit runs, conductors inside must also have corrosion-resistant protection (Rule 22-202(1)(b)).\n\nAluminum conductors are not permitted unless joints are sealed against corrosive ingress (Rule 22-202(6)) — in a chemical environment, this is even more critical than in Category 1 because acid fumes accelerate aluminum corrosion.\n\nLater, you are asked to wire a curling rink. The ice surface area has condensation issues but no corrosive chemicals. Rule 22-204(1) permits open wiring with wet-rated conductors for the rink lighting. The heated waiting room can be wired per standard Section 12 rules (Rule 22-204(2)). If the rink has mechanical ventilation changing the air at least 3 times per hour, the rink area can be treated as a dry location (Rule 22-204(3)).',
      keyPoints: [
        'Category 2 exposed wiring: corrosion-resistant protection, located >1.5 m horizontal / >2.5 m vertical from floors (Rule 22-202(1)(a))',
        'Category 2 conduit: conductors must have corrosion-resistant protection (Rule 22-202(1)(b))',
        'NMW / NMWU cable permitted in Category 2 (Rule 22-202(2))',
        'NOT permitted in Category 2: surface metal raceways, underfloor raceways, bare conductors, armoured cable (unless Table 19), wireways, busways, split knobs (Rule 22-202(3))',
        'MI cable permitted in Category 2 if corrosive action does not deteriorate the outer sheath (Rule 22-202(4))',
        'AL-sheathed and Cu-sheathed cable permitted with corrosion-resistant protection where necessary (Rule 22-202(5))',
        'Aluminum conductors NOT permitted in Category 2 unless joints sealed against corrosive ingress (Rule 22-202(6))',
        'Rinks: open wiring with wet-rated conductors permitted for rink area lighting (Rule 22-204(1))',
        'Rink waiting rooms: wired per Section 12 based on moisture conditions (Rule 22-204(2))',
        'Rinks with mechanical ventilation >= 3 air changes per hour = dry locations (Rule 22-204(3))',
      ],
      diagramaMermaid: `graph TD
    A["Category 2\\nWiring Methods\\n(Rule 22-202)"] --> B["NMW / NMWU\\npermitted\\n(Subrule 2)"]
    A --> C["MI cable: permitted\\nif sheath not\\ndeteriorated\\n(Subrule 4)"]
    A --> D["AL/Cu-sheathed:\\npermitted with\\ncorrosion protection\\n(Subrule 5)"]
    A --> E["PROHIBITED:\\nSurface raceways,\\nbusways, wireways,\\nbare conductors,\\nsplit knobs\\n(Subrule 3)"]
    A --> F["No aluminum unless\\njoints sealed\\n(Subrule 6)"]
    G["Rinks\\n(Rule 22-204)"] --> H["Open wiring OK\\nfor rink lighting\\nwet-rated conductors"]
    G --> I["3+ air changes/hr\\n= dry location\\n(Subrule 3)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'Many Methods Prohibited', note: 'Surface raceways, wireways, busways, bare conductors, split knobs banned — Rule 22-202(3)', color: 'rose' },
        { icon: 'shield', title: 'Corrosion-Resistant Protection', note: 'All exposed wiring and conduit conductors need corrosion-resistant protection — Rule 22-202(1)', color: 'amber' },
        { icon: 'wire', title: 'MI Cable Conditional', note: 'Permitted only if corrosive action does not deteriorate the outer sheath — Rule 22-202(4)', color: 'sky' },
        { icon: 'inspect', title: 'Rink Ventilation Trick', note: '3+ air changes per hour = dry location, simplifies wiring — Rule 22-204(3)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 5. DRAINAGE, SEALING & EXCLUSION OF MOISTURE (Rules 22-300 to 22-302)
    // =========================================================================
    {
      id: '22-drainage-sealing',
      title: 'Drip Loops, Drainage, Sealing & Exclusion of Moisture',
      rules: 'Rules 22-300 to 22-302',
      explanation:
        'These rules apply to BOTH Category 1 and Category 2 locations (neither rule specifies a category, so Rule 22-004 makes them universal).\n\nRule 22-300 (Drip loops): Where exposed insulated conductors or non-metallic-sheathed cables enter into or issue from a Category 1 or Category 2 location, the insulated conductors or cables shall pass through the wall of the location in an upward direction from the Category 1 or Category 2 location. In the case of exposed insulated conductors or cables, they shall be in non-combustible, non-absorptive insulating tubes. This creates a drip loop — moisture runs downward away from the clean area rather than wicking along the cable into the non-hazardous location.\n\nRule 22-302 (Drainage, sealing, and exclusion of moisture):\n\nSubrule 1) Where conduit is used, it shall be:\n(a) arranged to drain at frequent intervals to suitable locations;\n(b) equipped with fittings that permit the moisture to drain out of the system;\n(c) installed to give 12 mm clearance from the supporting surface when either the conduit or supporting surface is metallic; and\n(d) sealed to prevent the migration of corrosive vapour where, due to the location of equipment, such migration is considered possible.\n\nSubrule 2) Where a conduit, aluminum-sheathed cable, or copper-sheathed cable leaves a warm room and enters a cooler atmosphere, it shall be sealed off to prevent breathing and subsequent condensation, and shall be sealed in such a manner that condensate will not be trapped at the seal.\n\nSubrule 3) Every joint in a conduit in a Category 1 location shall be watertight.\n\nSubrule 4) Every cabinet and fitting in a Category 1 location shall be:\n(a) of splash-proof or drip-proof construction;\n(b) placed so as to prevent moisture or water from entering and accumulating within; and\n(c) mounted to give at least 12 mm clearance from the supporting surface when either the enclosure or supporting surface is metallic.',
      fieldScenario:
        'You are running conduit from a dry utility room into a dairy processing plant wash area (Category 1).\n\nRule 22-300 requires the cable to pass through the wall in an UPWARD direction from the wet side. This creates a drip loop — any moisture on the cable runs downhill back into the Category 1 area rather than following the cable into the dry room. If using exposed conductors, they must be in non-combustible, non-absorptive insulating tubes through the wall penetration.\n\nInside the wash area, the conduit run must be arranged to drain at frequent intervals (Rule 22-302(1)(a)) — you install the conduit with a slight pitch toward drain fittings. The conduit fittings must allow moisture to drain out (Rule 22-302(1)(b)). Where the conduit or wall is metallic, you maintain 12 mm clearance between them (Rule 22-302(1)(c)) — this prevents galvanic corrosion and allows air circulation.\n\nA conduit run passes from the heated interior into a cold loading dock area. Rule 22-302(2) requires you to seal this transition to prevent "breathing" — when warm moist air inside the conduit cools in the cold section, it condenses. The seal must be positioned so that condensate does not become trapped.\n\nAll conduit joints in the Category 1 area must be watertight (Rule 22-302(3)). Every cabinet and junction box must be splash-proof or drip-proof, positioned to prevent water accumulation, and mounted with 12 mm clearance from metallic surfaces (Rule 22-302(4)).',
      keyPoints: [
        'Cables entering/exiting Category 1 or 2 locations: pass through wall in UPWARD direction from the hazardous side (drip loop) (Rule 22-300)',
        'Exposed conductors through walls: in non-combustible, non-absorptive insulating tubes (Rule 22-300)',
        'Conduit: arranged to drain at frequent intervals to suitable locations (Rule 22-302(1)(a))',
        'Conduit fittings: must permit moisture to drain out of the system (Rule 22-302(1)(b))',
        'Conduit on metallic surfaces: 12 mm minimum clearance (Rule 22-302(1)(c))',
        'Conduit sealed to prevent corrosive vapour migration where possible (Rule 22-302(1)(d))',
        'Warm-to-cold transitions: conduit/cable sealed to prevent breathing and condensation, condensate not trapped at seal (Rule 22-302(2))',
        'Category 1 conduit joints: every joint shall be watertight (Rule 22-302(3))',
        'Category 1 cabinets: splash-proof/drip-proof, prevent water accumulation, 12 mm clearance from metallic surfaces (Rule 22-302(4))',
      ],
      diagramaMermaid: `graph TD
    A["Drainage & Sealing\\n(Rules 22-300 to 22-302)"] --> B["Drip Loop:\\nCables pass UPWARD\\nthrough wall from\\nhazardous side\\n(Rule 22-300)"]
    A --> C["Conduit Drainage:\\nPitch to drain,\\nfittings allow\\nmoisture exit\\n(Rule 22-302-1)"]
    A --> D["12 mm Clearance:\\nConduit/cabinet from\\nmetallic surface\\n(Rules 22-302-1c, 4c)"]
    A --> E["Warm-to-Cold Seal:\\nPrevent breathing\\n& condensation\\n(Rule 22-302-2)"]
    A --> F["Watertight Joints:\\nEvery conduit joint\\nin Category 1\\n(Rule 22-302-3)"]
    A --> G["Cabinets: Splash-proof\\nprevent accumulation\\n(Rule 22-302-4)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'water', title: 'Drip Loop Principle', note: 'Cables always pass UPWARD through wall from wet/corrosive side — Rule 22-300', color: 'sky' },
        { icon: 'ruler', title: '12 mm Clearance', note: 'Conduit and cabinets: 12 mm from metallic surfaces — Rules 22-302(1)(c) and (4)(c)', color: 'amber' },
        { icon: 'lock', title: 'Seal Warm-to-Cold', note: 'Prevent breathing and condensation at temperature transitions — Rule 22-302(2)', color: 'rose' },
        { icon: 'shield', title: 'Watertight Joints', note: 'Every conduit joint in Category 1 must be watertight — Rule 22-302(3)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 6. CIRCUIT CONTROL, MATERIALS & BONDING (Rules 22-400 to 22-600)
    // =========================================================================
    {
      id: '22-circuit-materials-bonding',
      title: 'Circuit Control, Corrosion-Resistant Materials & Bonding',
      rules: 'Rules 22-400 to 22-600',
      explanation:
        'These three short but important rules apply to BOTH Category 1 and Category 2 locations (none specifies a category).\n\nRule 22-400 (Circuit control): Every circuit in a Category 1 or Category 2 location shall, where practicable, be arranged so that the current-carrying conductors can be entirely cut off from the supply of electrical power or energy at a convenient point OUTSIDE the location. This ensures that circuits can be de-energized without entering the hazardous environment — critical for safety during maintenance and emergencies.\n\nRule 22-500 (Corrosion-resistant material): All conduits, metal enclosures, and fittings, including every bolt and screw used to secure electrical equipment, shall be protected by or be of material resistant to the specific corrosive environment. This rule emphasizes "specific" — the protection must match the actual corrosive agent present. A material resistant to acid fumes may not resist alkaline solutions. Even the smallest components like screws and bolts must be corrosion-resistant.\n\nRule 22-600 (Exposed, non-current-carrying metal parts): Exposed, non-current-carrying metal parts of fixed or portable equipment shall be bonded to ground in accordance with Section 10. This is the standard bonding requirement applied to all corrosive and wet locations.',
      fieldScenario:
        'You are completing the electrical installation in a wastewater treatment facility. The main pump room is a Category 1 location (moisture from splashing and condensation) and the chemical dosing room is Category 2 (chlorine vapour).\n\nRule 22-400 requires that each circuit in both rooms can be disconnected at a convenient point OUTSIDE these locations. You install disconnects in the adjacent dry electrical room. This way, maintenance electricians do not need to enter the wet or corrosive environment to shut off power.\n\nIn the chemical dosing room, Rule 22-500 requires every component — conduit, enclosures, fittings, bolts, and screws — to be resistant to chlorine vapour specifically. You specify PVC-coated rigid conduit, stainless steel hardware, and corrosion-resistant enclosures. Using standard zinc-plated hardware would not meet the requirement because zinc corrodes rapidly in chlorine environments.\n\nAll exposed metal parts of pumps, motor frames, junction boxes, and portable equipment must be bonded to ground per Section 10 (Rule 22-600). In a wet environment, this is especially important because moisture reduces the resistance of the human body, making ground faults more dangerous.',
      keyPoints: [
        'Every circuit in Category 1 or 2 shall be disconnectable from supply at a convenient point OUTSIDE the location (Rule 22-400)',
        'All conduits, metal enclosures, fittings, bolts, and screws must be resistant to the SPECIFIC corrosive environment (Rule 22-500)',
        'Protection must match the actual corrosive agent — not just generic "corrosion resistance" (Rule 22-500)',
        'All exposed non-current-carrying metal parts of fixed or portable equipment bonded to ground per Section 10 (Rule 22-600)',
        'These three rules apply to BOTH Category 1 and Category 2 locations (Rule 22-004)',
      ],
      diagramaMermaid: `graph TD
    A["General Rules\\n(Both Categories)"] --> B["Circuit Control\\n(Rule 22-400)"]
    A --> C["Materials\\n(Rule 22-500)"]
    A --> D["Bonding\\n(Rule 22-600)"]
    B --> B1["Disconnect at\\nconvenient point\\nOUTSIDE the location"]
    C --> C1["ALL components\\nresistant to SPECIFIC\\ncorrosive environment\\n— even bolts & screws"]
    D --> D1["All exposed metal\\nbonded to ground\\nper Section 10"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B1 fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'Disconnect OUTSIDE', note: 'Circuits must be de-energizable from outside the corrosive/wet area — Rule 22-400', color: 'amber' },
        { icon: 'shield', title: 'Every Bolt and Screw', note: 'ALL hardware must resist the specific corrosive agent — not just enclosures — Rule 22-500', color: 'rose' },
        { icon: 'neutral', title: 'Bonding Per Section 10', note: 'All exposed non-current-carrying metal parts bonded to ground — Rule 22-600', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 7. SEWAGE LIFT & TREATMENT PLANTS — Scope, Terminology & Classification
    //    (Rules 22-700 to 22-704)
    // =========================================================================
    {
      id: '22-sewage-scope-classification',
      title: 'Sewage Lift & Treatment Plants — Scope, Terminology & Classification',
      rules: 'Rules 22-700 to 22-704',
      explanation:
        'This subsection applies to sewage lift and pumping stations and primary/secondary sewage treatment plants — environments that combine multiple hazards: moisture, corrosion, explosions, fire, and atmospheric poisoning.\n\nRule 22-700 (Scope):\n1) Rules 22-702 to 22-710 apply to the installation of electrical facilities in sewage lift and pumping stations, and in primary and secondary sewage treatment plants where the environment could contain multiple hazards, such as moisture, corrosion, explosions, fire, and atmospheric poisoning.\n2) Rules 22-702 to 22-710 do NOT apply to methane generation facilities associated with some treatment facilities.\n\nRule 22-702 (Special terminology): Key definitions:\n- Continuous positive pressure ventilation: a ventilation system capable of maintaining a positive pressure in a room or area and of changing the air at least six times an hour with means for detecting ventilation failure.\n- Dry well: the location below ground designed to accommodate equipment associated with waste water pumping and isolated from the wet well location to prevent the migration of gases and vapours into the dry well.\n- Suitably cut off: an area rendered impermeable and cut off from an adjoining area with no means of liquid, gas, or vapour communication between the areas at atmospheric pressure.\n- Wet well: the location below ground where the raw sewage is collected and temporarily stored before passing through the lift pumps or being processed in a treatment plant.\n\nRule 22-704 (Classification of areas):\n1) Sewage lift and treatment plants shall be classified for:\n(a) hazardous areas in accordance with Section 18; AND\n(b) corrosive liquids, vapours, or moisture in accordance with this Section.\nThis dual classification is critical — areas can be BOTH hazardous (explosive gases) AND corrosive/wet.\n\n2) Wet wells provided with adequate continuous positive pressure ventilation shall be considered Zone 2.\n\n3) Except as permitted by Subrule 5)(c), all locations below ground suitably cut off from locations in which sewage gases may be present shall be considered Category 1.\n\n4) All locations in which sewage gases may be present in explosive concentrations shall be considered hazardous areas AND Category 2.\n\n5) The following areas shall be permitted to be classified as ordinary locations:\n(a) all locations suitably cut off from a Category 2 location and not classified as a Category 1 location;\n(b) all locations not suitably cut off from a Category 2 location but with adequate continuous positive pressure ventilation; and\n(c) dry well locations below ground where adequate heating and adequate continuous positive pressure ventilation is installed.',
      fieldScenario:
        'You are designing the electrical system for a municipal sewage lift station. This is one of the most challenging electrical environments because it combines multiple hazards.\n\nRule 22-704(1) requires dual classification: first classify areas per Section 18 for explosive sewage gases (methane, hydrogen sulphide), then classify per Section 22 for corrosion and moisture. Many areas will carry BOTH classifications simultaneously.\n\nThe wet well is where raw sewage collects below ground. If it has continuous positive pressure ventilation (at least 6 air changes per hour with ventilation failure detection per Rule 22-702), it is classified as Zone 2 per Rule 22-704(2). Without adequate ventilation, it would be Zone 1 due to explosive gas buildup.\n\nThe dry well is separated from the wet well and houses the pumps. Rule 22-704(5)(c) permits the dry well to be classified as an ordinary location IF it has both adequate heating AND adequate continuous positive pressure ventilation. Without both, it is Category 1 per Rule 22-704(3).\n\nThe headworks area where sewage gases may be present in explosive concentrations is classified as BOTH a hazardous area (Section 18) AND Category 2 per Rule 22-704(4). This means you need explosion-proof AND corrosion-resistant equipment.\n\nAn adjacent control room that is suitably cut off from the Category 2 areas and not classified as Category 1 can be treated as an ordinary location per Rule 22-704(5)(a). A room that is NOT cut off from Category 2 but has continuous positive pressure ventilation also qualifies as ordinary per Rule 22-704(5)(b).\n\nNote: Rule 22-700(2) excludes methane generation facilities — those have their own separate requirements.',
      keyPoints: [
        'Applies to sewage lift stations, pumping stations, and primary/secondary treatment plants (Rule 22-700(1))',
        'Does NOT apply to methane generation facilities (Rule 22-700(2))',
        'Continuous positive pressure ventilation: positive pressure + 6 air changes/hour + ventilation failure detection (Rule 22-702)',
        'Dry well: below ground, for equipment, ISOLATED from wet well to prevent gas migration (Rule 22-702)',
        'Wet well: below ground, collects raw sewage before processing (Rule 22-702)',
        'DUAL classification required: Section 18 (hazardous) AND Section 22 (corrosive/moisture) (Rule 22-704(1))',
        'Wet well with continuous positive pressure ventilation = Zone 2 (Rule 22-704(2))',
        'Below-ground locations suitably cut off from sewage gas areas = Category 1 (Rule 22-704(3))',
        'Locations with explosive sewage gas concentrations = hazardous areas AND Category 2 (Rule 22-704(4))',
        'Ordinary location exemptions: (a) cut off from Cat 2 and not Cat 1; (b) not cut off but has ventilation; (c) dry well with heating + ventilation (Rule 22-704(5))',
      ],
      diagramaMermaid: `graph TD
    A["Sewage Lift &\\nTreatment Plants\\n(Rules 22-700 to 22-704)"] --> B["DUAL Classification\\n(Rule 22-704-1)"]
    B --> C["Section 18:\\nHazardous Areas\\n(explosive gases)"]
    B --> D["Section 22:\\nCorrosive / Moisture\\n(Category 1 or 2)"]
    E["Wet Well\\nwith ventilation"] --> F["Zone 2\\n(Rule 22-704-2)"]
    G["Below ground\\ncut off from\\nsewage gas"] --> H["Category 1\\n(Rule 22-704-3)"]
    I["Explosive sewage\\ngas present"] --> J["Hazardous +\\nCategory 2\\n(Rule 22-704-4)"]
    K["Dry well + heating\\n+ ventilation"] --> L["Ordinary\\nlocation\\n(Rule 22-704-5c)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style J fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style H fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style L fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'Dual Classification', note: 'Areas classified BOTH per Section 18 (explosive) AND Section 22 (corrosive/wet) — Rule 22-704(1)', color: 'rose' },
        { icon: 'fire', title: 'Explosive + Category 2', note: 'Where sewage gas is explosive = hazardous area AND Category 2 simultaneously — Rule 22-704(4)', color: 'rose' },
        { icon: 'shield', title: 'Ventilation Downgrades', note: 'Wet well with positive pressure ventilation (6x/hr) = Zone 2 instead of Zone 1 — Rule 22-704(2)', color: 'emerald' },
        { icon: 'inspect', title: 'Dry Well Exemption', note: 'Dry well = ordinary location IF adequate heating + ventilation installed — Rule 22-704(5)(c)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 8. SEWAGE LIFT & TREATMENT PLANTS — Wiring, Equipment, Grounding
    //    (Rules 22-706 to 22-710)
    // =========================================================================
    {
      id: '22-sewage-wiring-equipment',
      title: 'Sewage Lift & Treatment Plants — Wiring, Equipment & Grounding',
      rules: 'Rules 22-706 to 22-710',
      explanation:
        'These rules specify the wiring methods, electrical equipment, and grounding requirements for sewage facilities.\n\nRule 22-706 (Wiring methods):\n1) Wiring methods within hazardous areas shall be in accordance with Section 18.\n2) Wiring methods in a Category 1 or a dry Category 2 location shall be in accordance with Rules 22-200 and 22-202, respectively.\n3) Wiring methods in a wet or damp Category 2 location shall be in accordance with Rule 22-202, with the following exceptions:\n(a) rigid steel conduit and electrical metallic tubing shall NOT be used;\n(b) armoured cable, mineral-insulated cable, aluminum-sheathed cable, and copper-sheathed cable shall be permitted to be used, provided that the cable is spaced from walls by at least 12 mm, has a corrosion-resistant jacket, and the cable connectors are adequately sealed against ingress of corrosive liquids or vapours;\n(c) grounding and bonding conductors shall be insulated or otherwise protected from corrosion, and the point of connection to ground, if exposed to a corrosive atmosphere, shall be protected from corrosion or be of a material resistant to the specific corrosive environment.\n4) Conduits installed from the wet well to an electrical enclosure shall be sealed with a suitable compound to prevent the entrance of moisture, vapour, or gases into the enclosure.\n\nRule 22-708 (Electrical equipment):\n1) Electrical equipment installed in hazardous areas shall be in accordance with Section 18.\n2) Electrical equipment installed in a Category 1 or a dry Category 2 location shall be in accordance with the applicable requirements of this Code.\n3) Electrical equipment installed in a wet or damp Category 2 location shall be in accordance with the applicable requirements of this Code, with the following exceptions:\n(a) receptacles: fitted with self-closing covers; duplex type must have individual covers over each half;\n(b) lighting switches: shall have weatherproof covers;\n(c) unit emergency lighting and emergency lighting control units (other than remote lamps) shall NOT be located in such locations;\n(d) heating equipment: shall be marked for use in such locations or installed outside the corrosive location;\n(e) motors: shall be totally enclosed and fan cooled and shall NOT incorporate dissimilar metals relative to the motor frame and connection box;\n(f) electrical equipment in wet well areas: shall not contain devices that will cause an open arc or spark during normal operation.\n4) Ventilation fans shall NOT be located within the wet well, and fan blades shall be of spark-resistant material.\n5) Areas provided with continuous positive pressure ventilation shall be interlocked to de-energize all electrical equipment not marked for use in an explosive gas atmosphere in case the ventilating equipment is inoperative.\n\nRule 22-710 (Grounding of structural steel): Structural steel below ground in contact with the surrounding earth shall be bonded to the system ground.',
      fieldScenario:
        'You are wiring a sewage lift station with a wet well, dry well, and above-ground control building.\n\nIn the wet well area (hazardous + Category 2), Rule 22-706(1) requires Section 18 wiring methods for the explosive gas hazard. Rule 22-706(3) adds that rigid steel conduit and EMT are NOT permitted because of the corrosive environment — you must use alternatives. Armoured cable or MI cable is permitted if spaced 12 mm from walls, with corrosion-resistant jackets, and sealed connectors (Rule 22-706(3)(b)).\n\nConduit running from the wet well to the control room must be sealed with compound to prevent moisture, vapour, and gas migration (Rule 22-706(4)). The grounding conductor in the wet/damp area must be insulated or corrosion-protected, and the ground connection point itself must be protected from the specific corrosive atmosphere (Rule 22-706(3)(c)).\n\nFor equipment in the wet/damp Category 2 areas, Rule 22-708(3) imposes strict requirements:\n- All receptacles need self-closing covers with individual covers for each half of duplex outlets.\n- Motors must be TEFC (totally enclosed fan cooled) with no dissimilar metals between the frame and connection box — dissimilar metals cause galvanic corrosion in wet/corrosive environments.\n- Equipment in the wet well cannot have open arcs or sparks during normal operation (Rule 22-708(3)(f)).\n- Emergency lighting equipment (except remote lamp heads) cannot be in these locations (Rule 22-708(3)(c)).\n\nVentilation fans are prohibited inside the wet well per Rule 22-708(4), and their blades must be spark-resistant. The continuous positive pressure ventilation system must have interlocks that automatically de-energize non-explosion-rated equipment if the ventilation fails (Rule 22-708(5)).\n\nThe structural steel piling below ground must be bonded to the system ground per Rule 22-710.',
      keyPoints: [
        'Hazardous areas: wiring per Section 18 (Rule 22-706(1))',
        'Category 1 or dry Category 2: wiring per Rules 22-200 and 22-202 (Rule 22-706(2))',
        'Wet/damp Category 2: NO rigid steel conduit or EMT (Rule 22-706(3)(a))',
        'Armoured/MI/sheathed cable in wet Cat 2: 12 mm from walls, corrosion-resistant jacket, sealed connectors (Rule 22-706(3)(b))',
        'Ground conductors: insulated or corrosion-protected; ground connection point also protected (Rule 22-706(3)(c))',
        'Wet well to enclosure conduit: sealed with compound against moisture, vapour, gas (Rule 22-706(4))',
        'Wet/damp Cat 2 receptacles: self-closing covers, individual covers on duplex (Rule 22-708(3)(a))',
        'Lighting switches: weatherproof covers (Rule 22-708(3)(b))',
        'Emergency lighting units NOT in wet/damp Category 2 locations (except remote lamps) (Rule 22-708(3)(c))',
        'Motors: TEFC, no dissimilar metals between frame and connection box (Rule 22-708(3)(e))',
        'Wet well equipment: no devices causing open arc or spark during normal operation (Rule 22-708(3)(f))',
        'Ventilation fans NOT in wet well; fan blades must be spark-resistant (Rule 22-708(4))',
        'Continuous positive pressure ventilation: interlock to de-energize non-explosion-rated equipment on vent failure (Rule 22-708(5))',
        'Structural steel below ground bonded to system ground (Rule 22-710)',
      ],
      diagramaMermaid: `graph TD
    A["Sewage Facilities\\nWiring & Equipment\\n(Rules 22-706 to 22-710)"] --> B["Hazardous areas:\\nSection 18 wiring\\n(Rule 22-706-1)"]
    A --> C["Wet/Damp Cat 2:\\nNO rigid steel\\nconduit or EMT\\n(Rule 22-706-3a)"]
    A --> D["Equipment:\\nTEFC motors,\\nself-closing covers,\\nno arcs in wet well\\n(Rule 22-708-3)"]
    A --> E["Vent Fans:\\nNOT in wet well,\\nspark-resistant blades\\n(Rule 22-708-4)"]
    A --> F["Interlock:\\nDe-energize on\\nvent failure\\n(Rule 22-708-5)"]
    A --> G["Structural Steel:\\nBonded to system\\nground\\n(Rule 22-710)"]
    C --> C1["Cable 12 mm from\\nwalls, corrosion-\\nresistant, sealed"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'No Steel Conduit/EMT', note: 'Rigid steel conduit and EMT banned in wet/damp Category 2 — Rule 22-706(3)(a)', color: 'rose' },
        { icon: 'inspect', title: 'TEFC Motors Only', note: 'Totally enclosed fan cooled, no dissimilar metals on frame/connection box — Rule 22-708(3)(e)', color: 'amber' },
        { icon: 'bolt', title: 'Vent Failure Interlock', note: 'All non-explosion-rated equipment de-energized on ventilation failure — Rule 22-708(5)', color: 'violet' },
        { icon: 'neutral', title: 'Structural Steel Bonded', note: 'Below-ground structural steel bonded to system ground — Rule 22-710', color: 'emerald' },
        { icon: 'lock', title: 'Self-Closing Covers', note: 'Receptacles in wet/damp Cat 2: self-closing covers, individual on duplex — Rule 22-708(3)(a)', color: 'sky' },
      ],
    },

    // =========================================================================
    // 9. FARM BUILDINGS HOUSING LIVESTOCK — Scope, Terminology & Classification
    //    (Rules 22-800 to 22-804)
    // =========================================================================
    {
      id: '22-farm-scope-classification',
      title: 'Farm Buildings Housing Livestock — Scope, Terminology & Classification',
      rules: 'Rules 22-800 to 22-804',
      explanation:
        'This subsection addresses the unique electrical challenges in farm buildings that house livestock — environments combining moisture, corrosion from animal waste, wash-down operations, and rodent damage.\n\nRule 22-800 (Scope): Rules 22-802 to 22-808 apply to electrical equipment and installations in farm buildings housing livestock.\n\nRule 22-802 (Special terminology): Key definitions:\n- Livestock: farm animals including, but not limited to, cattle, horses, swine, sheep, goats, poultry, ratites, cultured fish, fur-bearing animals, game animals, game birds, deer, elk, and bees.\n- Specialty-type equipment: equipment designed and used for a specific and unique agricultural purpose.\n- Suitably cut off: an area that is separated from and rendered impermeable to an adjoining area with no means of liquid, gas, or vapour communication between the areas at atmospheric pressure.\n- Wash-down: cleaning that includes direct spray of liquid under pressure.\n\nRule 22-804 (Classification of areas):\n1) Farm buildings housing livestock shall be classified as Category 1 and Category 2 locations in accordance with this Section, unless a deviation is allowed in accordance with Rule 2-030. This means the inspector has authority to grant deviations where appropriate.\n2) Notwithstanding Subrule 1), locations in a farm building housing livestock that are suitably cut off from a Category 1 or Category 2 location shall be considered dry locations. This provides a practical exemption — a properly separated feed room or office within a barn can be treated as ordinary.',
      fieldScenario:
        'You are wiring a dairy barn. The building houses 200 dairy cattle with milking parlour, wash areas, and a feed room.\n\nRule 22-800 confirms this is a farm building housing livestock — the rules apply. Rule 22-802 defines "livestock" broadly — it covers not just cattle but also poultry barns, hog operations, fish farms, and even apiaries (bee keeping).\n\nThe main barn area where cattle are housed is exposed to moisture from animal respiration, urine, and regular wash-downs. It also faces corrosion from ammonia in animal waste. Rule 22-804(1) classifies this as both Category 1 (moisture) and Category 2 (corrosion from ammonia and waste products).\n\nThe adjacent feed room is separated from the barn by a solid, sealed wall with a self-closing door. Rule 22-804(2) says this room, being suitably cut off, can be classified as a dry location — you can use standard wiring methods per Section 12.\n\nThe farm owner asks if the inspector can grant any exemptions for the small chicken coop attached to the barn. Rule 22-804(1) references Rule 2-030, which allows the inspector to grant deviations when justified.',
      keyPoints: [
        'Applies to electrical equipment and installations in farm buildings housing livestock (Rule 22-800)',
        'Livestock includes cattle, horses, swine, sheep, goats, poultry, ratites, cultured fish, fur-bearing animals, game animals, game birds, deer, elk, and bees (Rule 22-802)',
        'Specialty-type equipment: designed for a specific and unique agricultural purpose (Rule 22-802)',
        'Wash-down: cleaning that includes direct spray of liquid under pressure (Rule 22-802)',
        'Farm buildings classified as Category 1 and Category 2 unless inspector grants deviation per Rule 2-030 (Rule 22-804(1))',
        'Locations suitably cut off from Category 1 or 2 areas in a farm building = dry locations (Rule 22-804(2))',
      ],
      diagramaMermaid: `graph TD
    A["Farm Buildings\\nHousing Livestock\\n(Rules 22-800 to 22-804)"] --> B["Classification:\\nCategory 1 + Category 2\\n(Rule 22-804-1)"]
    B --> C["Moisture from\\nanimals, wash-down\\n= Category 1"]
    B --> D["Corrosion from\\nwaste, ammonia\\n= Category 2"]
    A --> E["Suitably cut off\\nareas = Dry Location\\n(Rule 22-804-2)"]
    A --> F["Deviations per\\nRule 2-030\\npermitted"]
    G["Livestock includes:\\ncattle, horses, swine,\\nsheep, poultry, fish,\\nbees, elk, deer..."]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'Dual Category', note: 'Farm livestock buildings are BOTH Category 1 (moisture) and Category 2 (corrosion) — Rule 22-804(1)', color: 'rose' },
        { icon: 'shield', title: 'Cut Off = Dry', note: 'Rooms suitably separated from livestock areas = dry locations — Rule 22-804(2)', color: 'emerald' },
        { icon: 'book', title: 'Broad Livestock Definition', note: 'Cattle, horses, swine, poultry, fish, bees, deer, elk and more — Rule 22-802', color: 'sky' },
        { icon: 'inspect', title: 'Inspector Deviations', note: 'Inspector may grant deviations per Rule 2-030 — Rule 22-804(1)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 10. FARM BUILDINGS — Equipment, Luminaires, Receptacles & Wiring
    //     (Rules 22-806 to 22-808)
    // =========================================================================
    {
      id: '22-farm-equipment-wiring',
      title: 'Farm Buildings — Equipment, Luminaires, Receptacles & Wiring Methods',
      rules: 'Rules 22-806 to 22-808',
      explanation:
        'These rules specify the equipment and wiring requirements for farm buildings housing livestock.\n\nRule 22-806 (Electrical equipment, luminaires, and receptacles):\n1) Except for specialty-type equipment and ventilation fans, electrical equipment shall be installed in accordance with Rules 22-102 to 22-108. This means all the general Section 22 equipment rules apply: wet-location rated for Category 1, corrosion-resistant for Category 2, etc.\n2) Where electrical equipment is permanently connected to an outlet, wire connectors shall incorporate anti-corrosion compound. This prevents corrosion at the connection point in the harsh agricultural environment.\n3) Electrical equipment incorporating overcurrent devices shall be installed in:\n(a) locations suitably cut off from Category 1 or Category 2 locations; OR\n(b) a suitable enclosure with continuous positive pressure ventilation in accordance with Rule 22-702.\nThis keeps panelboards and breakers out of the corrosive livestock area.\n4) Devices such as receptacles and general-use switches installed where wash-down operation is performed shall be protected by a suitable enclosure in accordance with Rule 2-400.\n5) Pendant lampholders shall NOT be permitted. Hanging lights can be damaged by livestock and accumulate moisture.\n6) Exposed lamps shall be shatter-resistant in design. This prevents glass contamination of feed and injury to animals.\n\nRule 22-808 (Wiring methods):\n1) Wiring methods shall be in accordance with Rule 22-202 (Category 2 methods), with the following exceptions:\n(a) electrical metallic tubing shall NOT be permitted;\n(b) grounding and bonding conductors shall be insulated or otherwise protected from corrosion; and\n(c) connections, if exposed to a corrosive atmosphere, shall be protected from corrosion or be of a material resistant to the specific corrosive environment.\n2) Except for feeders supplying panelboards installed in accordance with Rule 22-806(3), aluminum conductors shall NOT be used in farm buildings housing livestock. This is a near-total ban on aluminum — the only exception is large feeders going to properly protected panelboards.\n3) Cables without metallic armour shall be provided with protection from rodents, in the form of rigid steel or rigid non-metallic conduit or other suitable material, when installed in:\n(a) exposed locations less than 300 mm above any horizontal surface;\n(b) exposed locations on the side of floor joists or other structural members less than 100 mm below the upper surface of the floor joists or other structural members;\n(c) attics; or\n(d) concealed spaces.\n4) All raceways, fittings, junction boxes, cable assemblies and associated connectors, devices, and device boxes and covers shall be of the corrosion-resistant type.',
      fieldScenario:
        'You are wiring a hog barn with 500-head capacity. The building has a central feeding alley, pen areas, a wash-down area, and a feed preparation room.\n\nIn the pen areas (Category 1 + Category 2), all equipment must meet Rules 22-102 to 22-108 per Rule 22-806(1). Exception: the specialty feed dispensing system and ventilation fans can be agricultural-specific types.\n\nYou are making permanent connections to a feed auger motor. Rule 22-806(2) requires anti-corrosion compound in every wire connector — the ammonia from hog waste corrodes standard connections rapidly.\n\nThe electrical panel must be located in the feed room (suitably cut off from the barn per Rule 22-806(3)(a)) OR in a ventilated enclosure. It cannot be mounted on the barn wall in the livestock area.\n\nThe wash-down area has receptacles — Rule 22-806(4) requires suitable enclosures per Rule 2-400. Rule 22-806(5) prohibits pendant lampholders entirely — all lights must be surface-mounted. Rule 22-806(6) requires shatter-resistant lamps — falling glass into feed troughs is a contamination and animal injury hazard.\n\nFor wiring, Rule 22-808(1) prohibits EMT — it corrodes too quickly. You use PVC conduit or corrosion-resistant cable instead. Rule 22-808(2) bans aluminum conductors almost entirely — only the main feeder to the panel in the protected room is exempt.\n\nNMW cable runs along the barn walls must be protected from rodents per Rule 22-808(3). Any cable less than 300 mm above a horizontal surface, or in concealed spaces and attics, must have rigid conduit or other protection. This is because rodents are a constant presence in farm buildings and will chew through unprotected cable.\n\nEvery raceway, fitting, junction box, connector, and device box must be corrosion-resistant per Rule 22-808(4).',
      keyPoints: [
        'Equipment per Rules 22-102 to 22-108, except specialty-type equipment and ventilation fans (Rule 22-806(1))',
        'Permanent connections: wire connectors must incorporate anti-corrosion compound (Rule 22-806(2))',
        'Overcurrent devices: installed in suitably cut off areas OR ventilated enclosures per Rule 22-702 (Rule 22-806(3))',
        'Wash-down area devices: protected by suitable enclosure per Rule 2-400 (Rule 22-806(4))',
        'Pendant lampholders NOT permitted in farm buildings housing livestock (Rule 22-806(5))',
        'Exposed lamps must be shatter-resistant (Rule 22-806(6))',
        'Wiring per Rule 22-202 (Category 2) but EMT NOT permitted (Rule 22-808(1)(a))',
        'Grounding/bonding conductors: insulated or corrosion-protected (Rule 22-808(1)(b))',
        'Connections exposed to corrosion: protected or of resistant material (Rule 22-808(1)(c))',
        'Aluminum conductors NOT permitted except for feeders to panelboards per Rule 22-806(3) (Rule 22-808(2))',
        'Cables without metallic armour: rodent protection required <300 mm above surfaces, in attics, and concealed spaces (Rule 22-808(3))',
        'All raceways, fittings, junction boxes, connectors, devices, and covers must be corrosion-resistant (Rule 22-808(4))',
      ],
      diagramaMermaid: `graph TD
    A["Farm Buildings\\nEquipment & Wiring\\n(Rules 22-806 to 22-808)"] --> B["Equipment:\\nPer Rules 22-102\\nto 22-108\\n(Rule 22-806-1)"]
    A --> C["Anti-Corrosion\\nCompound at all\\npermanent connections\\n(Rule 22-806-2)"]
    A --> D["Panels: OUTSIDE\\nlivestock area\\nor ventilated\\n(Rule 22-806-3)"]
    A --> E["NO pendant lights\\nShatter-resistant\\nlamps\\n(Rules 22-806-5,6)"]
    A --> F["NO EMT\\nNO aluminum\\n(except feeders)\\n(Rule 22-808)"]
    A --> G["Rodent Protection:\\nConduit for cables\\n<300 mm above surface,\\nattics, concealed\\n(Rule 22-808-3)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'No Pendant Lights', note: 'Pendant lampholders completely prohibited in farm buildings — Rule 22-806(5)', color: 'rose' },
        { icon: 'shield', title: 'Anti-Corrosion Compound', note: 'Required in every permanent wire connector — Rule 22-806(2)', color: 'amber' },
        { icon: 'bolt', title: 'Near-Total Aluminum Ban', note: 'Only permitted for feeders to panels in protected rooms — Rule 22-808(2)', color: 'violet' },
        { icon: 'inspect', title: 'Rodent Protection', note: 'Non-armoured cables need conduit protection near surfaces, in attics, concealed spaces — Rule 22-808(3)', color: 'sky' },
        { icon: 'lock', title: 'All Components Corrosion-Resistant', note: 'Every raceway, fitting, box, connector, device, and cover — Rule 22-808(4)', color: 'emerald' },
      ],
    },
  ],
}
