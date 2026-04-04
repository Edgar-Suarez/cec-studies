import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 6 — Services and Service Equipment (CEC 2021, CSA C22.1:21)
 * COMPLETE — Every rule from 6-000 to 6-412 is covered.
 * Source: PDF scan of CEC Section 6
 */

export const section6Guide: StudyGuideSection = {
  section: '6',
  title: 'Section 6 — Services and Service Equipment',
  description:
    'Section 6 governs the installation of services and service equipment — the point where utility power enters a building. It covers the number of supply services and consumer services allowed, overhead and underground conductor installation, service head location and clearances, service box placement, wiring methods, bare neutral rules, metering equipment, and instrument transformers. Rules 6-000 through 6-412.',
  subsections: [
    // =========================================================================
    // 1. SCOPE & TERMINOLOGY (Rules 6-000, 6-100)
    // =========================================================================
    {
      id: '6-scope-terminology',
      title: 'Scope & Terminology',
      rules: 'Rules 6-000, 6-100',
      explanation:
        'Rule 6-000 defines the scope of Section 6. This section covers services, service equipment, and metering equipment for installations operating at 750 V or less, as well as installations operating at more than 750 V (which are modified by Section 36 — High-Voltage Installations). The scope is broad: it encompasses everything from the utility connection point through the service equipment and metering apparatus.\n\nA "service" in the CEC means the conductors and equipment that deliver electrical energy from the supply authority (utility) to the wiring system of the building or premises being served. This includes both the supply service (utility-owned infrastructure up to the point of connection) and the consumer\'s service (customer-owned conductors and equipment from the connection point to and including the service box).\n\nRule 6-100 establishes special terminology used in Section 6. The key defined term is "transformer rated meter mounting device" — a device designed and approved for mounting metering equipment where current transformers (CTs) and/or potential transformers (PTs) are used to step down the current or voltage to levels suitable for standard meters. This distinction matters because transformer-rated installations have different rules for meter loop sizing, conductor ratings, and enclosure requirements compared to self-contained (direct-connected) metering.\n\nUnderstanding these definitions is foundational. On the exam, questions about Section 6 scope often test whether you know that the section applies to both low-voltage (≤750 V) and high-voltage (>750 V) installations, and that high-voltage services must also comply with Section 36.',
      fieldScenario:
        'You are called to a commercial plaza where the owner wants to add a new tenant space. The building has a 600 V, 3-phase supply service and an existing 347/600 V distribution system. You need to add a new consumer\'s service for the tenant.\n\nFirst, you confirm that Section 6 governs this work because the system operates at ≤750 V (Rule 6-000). If this were a 4.16 kV service to an industrial plant, Section 6 would still apply, but modified by Section 36.\n\nThe utility requires transformer-rated metering for the new 400A tenant service. Per Rule 6-100, you know this means a meter mounting device designed for CTs and PTs — not a self-contained meter base. This affects your equipment selection, conductor sizing for the meter loop, and the enclosure requirements you must follow later in the section.\n\nYour apprentice asks why we call it a "consumer\'s service" instead of just "service." You explain that the CEC distinguishes between the supply service (utility side) and the consumer\'s service (customer side) — and Section 6 governs both, but with different rules for each.',
      keyPoints: [
        'Section 6 applies to services, service equipment, and metering equipment (Rule 6-000)',
        'Applies to installations operating at ≤750 V (Rule 6-000)',
        'Also applies to installations >750 V, modified by Section 36 (Rule 6-000)',
        'A "service" includes both supply service (utility) and consumer\'s service (customer) components',
        'Rule 6-100 defines "transformer rated meter mounting device" — a device for mounting metering equipment using CTs and/or PTs',
        'Transformer-rated vs. self-contained metering affects equipment selection and conductor requirements throughout Section 6',
      ],
      diagramaMermaid: `graph TD
    A["Section 6 Scope\\n(Rule 6-000)"] --> B["≤750 V\\nInstallations"]
    A --> C[">750 V\\nInstallations"]
    C --> D["Modified by\\nSection 36"]
    A --> E["Services"]
    A --> F["Service Equipment"]
    A --> G["Metering Equipment"]
    H["Special Terminology\\n(Rule 6-100)"] --> I["Transformer Rated\\nMeter Mounting Device"]
    I --> J["Uses CTs / PTs"]
    I --> K["Different rules than\\nself-contained meters"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: '≤750 V', note: 'Section 6 directly applies to all services at or below 750 V — Rule 6-000', color: 'sky' },
        { icon: 'power', title: '>750 V', note: 'High-voltage services also governed by Section 6, but modified by Section 36 — Rule 6-000', color: 'rose' },
        { icon: 'inspect', title: 'Transformer Rated', note: 'Meter mounting device using CTs and/or PTs for measuring — Rule 6-100', color: 'amber' },
        { icon: 'ruler', title: 'Scope Is Broad', note: 'Covers everything from utility connection to service box and metering', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 2. NUMBER OF SERVICES & SUPPLY RULES (Rules 6-102, 6-104, 6-106, 6-108, 6-110)
    // =========================================================================
    {
      id: '6-number-services-supply',
      title: 'Number of Services & Supply Rules',
      rules: 'Rules 6-102, 6-104, 6-106, 6-108, 6-110',
      explanation:
        'Rule 6-102 is one of the most important and most tested rules in Section 6. Subrule (1) establishes the general principle: only ONE supply service of the same voltage and characteristics is permitted per building. This prevents confusion for firefighters and maintenance personnel — they need to know that disconnecting one service makes the building safe.\n\nHowever, Rule 6-102(1) provides three critical exceptions where multiple supply services ARE allowed:\n\n(a) Fire pump installations per Rule 32-304(1): Fire pumps require an independent, dedicated service so they continue to operate even if the building\'s main service is disconnected during an emergency.\n\n(b) Industrial establishments or buildings of complex structures: Large factories, hospitals, or campus-style buildings may need multiple services for load management, redundancy, or physical routing constraints.\n\n(c) Self-contained occupancies that are not located above each other and each have a separate entrance at ground level: Think of side-by-side townhouses or strip malls — each unit can have its own supply service because they function as independent occupancies.\n\nRule 6-102(2) requires that when multiple service boxes exist for a building, they shall be grouped together where practicable. This makes it easy for emergency responders to locate and operate all disconnects.\n\nRule 6-102(3) addresses the case where grouping is not practicable: a permanent diagram must be posted at each service box location showing the locations of all other service boxes. This ensures that anyone working on the electrical system can identify and locate every point of supply.\n\nRule 6-104 limits the number of consumer\'s services: a maximum of 4 consumer\'s services are permitted from a single supply service, unless a deviation is granted per Rule 2-030. This means if a building has one supply service, you can subdivide it into at most 4 separate consumer\'s services (each with its own service box and metering).\n\nRule 6-106 deals with current from multiple systems. When a building has connections to two different electrical systems (for example, normal utility power and an emergency generator, or two different utility feeds), the switching arrangement must prevent accidental paralleling — one system must be switched off before the other is switched on. This is the code basis for requiring transfer switches.\n\nRule 6-108 restricts railway supply services: no supply service shall be taken from an electric railway system that uses the ground as a return conductor, unless the building is directly related to railway operations. Railway ground return systems create stray currents and voltage gradients that make them unsuitable for general building supply.\n\nRule 6-110 requires three-wire (120/240 V) services when a building has more than 2 branch circuits rated at 120 V, unless the three-wire supply is not available from the utility. This ensures efficient power delivery and balanced loading for most residential and small commercial installations.',
      fieldScenario:
        'You are designing the electrical service for a new 6-unit strip mall. Each unit has its own ground-level entrance and is self-contained (not above another unit). The developer asks if each unit can have its own separate utility meter and service.\n\nPer Rule 6-102(1)(c), each self-contained occupancy with a separate ground-level entrance can have its own supply service — so yes, 6 separate supply services are permitted. However, per Rule 6-102(2), all 6 service boxes must be grouped together where practicable — typically on one exterior wall at the rear.\n\nThe developer then asks about a second building on the property — a 2-storey office building with 8 tenant suites. This building needs ONE supply service per Rule 6-102(1) because the suites are above each other (ground floor and second floor). From that single supply service, you can have a maximum of 4 consumer\'s services per Rule 6-104. Since there are 8 suites, you will need a deviation per Rule 2-030 to exceed the 4-consumer limit, or you can use a different metering arrangement.\n\nThe strip mall also has a fire pump. Per Rule 6-102(1)(a) and 32-304(1), the fire pump gets its own dedicated supply service — separate from all tenant services. This service must remain energized even if every tenant service is disconnected.\n\nEach unit has more than 2 circuits at 120 V, so per Rule 6-110, three-wire 120/240 V services are required.',
      keyPoints: [
        'Only ONE supply service of the same voltage/characteristics per building — Rule 6-102(1)',
        'Exception: Fire pumps may have a dedicated supply service — Rule 6-102(1)(a) per 32-304(1)',
        'Exception: Industrial establishments or buildings of complex structures may have multiple services — Rule 6-102(1)(b)',
        'Exception: Self-contained occupancies not above each other with separate ground-level entrances — Rule 6-102(1)(c)',
        'Multiple service boxes must be grouped where practicable — Rule 6-102(2)',
        'If not grouped: a permanent diagram must be posted at each location showing all other service box locations — Rule 6-102(3)',
        'Maximum 4 consumer\'s services per single supply service, unless deviation per Rule 2-030 — Rule 6-104',
        'Switching between multiple systems must prevent accidental parallel — one off before other on — Rule 6-106',
        'No supply service from electric railway with ground return unless building is railway-related — Rule 6-108',
        'Three-wire (120/240 V) service required when >2 branch circuits at 120 V, unless supply not available — Rule 6-110',
      ],
      diagramaMermaid: `graph TD
    A["Supply Service\\nRule 6-102(1)"] --> B["ONE per building\\n(same voltage)"]
    B --> C{"Exceptions?"}
    C -->|"Fire pump"| D["Dedicated service\\nRule 32-304(1)"]
    C -->|"Industrial/complex"| E["Multiple OK\\nRule 6-102(1)(b)"]
    C -->|"Self-contained units"| F["Separate entrance\\nat ground level\\nRule 6-102(1)(c)"]
    B --> G["Multiple boxes?\\nGroup together\\nRule 6-102(2)"]
    G --> H["Not grouped?\\nPost diagram\\nRule 6-102(3)"]
    I["Consumer's Services\\nRule 6-104"] --> J["Max 4 per\\nsupply service"]
    J --> K["Need more?\\nDeviation per\\nRule 2-030"]
    L["Rule 6-106"] --> M["No accidental\\nparallel"]
    N["Rule 6-110"] --> O[">2 circuits @120V\\n= 3-wire required"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#065f46,stroke:#10b981,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style L fill:#7c2d12,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'One Service Rule', note: 'Only ONE supply service of the same voltage per building — Rule 6-102(1)', color: 'sky' },
        { icon: 'fire', title: 'Fire Pump Exception', note: 'Fire pumps get their own dedicated supply service — Rule 6-102(1)(a)', color: 'rose' },
        { icon: 'label', title: 'Diagram Required', note: 'If service boxes are not grouped, post a permanent diagram at each — Rule 6-102(3)', color: 'amber' },
        { icon: 'bolt', title: 'Max 4 Consumer Services', note: 'Maximum 4 consumer\'s services from one supply service — Rule 6-104', color: 'emerald' },
        { icon: 'warning', title: 'No Parallel', note: 'Switching must prevent accidental paralleling of multiple systems — Rule 6-106', color: 'violet' },
      ],
    },

    // =========================================================================
    // 3. OVERHEAD SUPPORT & ATTACHMENT (Rule 6-112)
    // =========================================================================
    {
      id: '6-overhead-support',
      title: 'Overhead Support & Attachment',
      rules: 'Rule 6-112',
      explanation:
        'Rule 6-112 is a detailed rule that governs how overhead service conductors are physically supported and attached to a building. It contains 9 subrules covering attachment means, location, clearances, proximity to openings, and service mast requirements.\n\nSubrule (1) requires that a suitable means of attachment be provided at the building for the overhead service conductors. This is the basic requirement — you cannot just drape wires over the building without proper hardware.\n\nSubrule (2) specifies where the point of attachment must be located: on the same side of the building as the service head, solidly anchored, angled away from the building, and positioned per the supply authority\'s requirements. The angle-away requirement ensures the service drop conductor maintains clearance from the building surface.\n\nSubrule (3) establishes the critical clearance requirements:\n- Maximum height of the point of attachment: 9 m above grade\n- Clearance over highways: 5.5 m minimum\n- Clearance over residential driveways: 4 m minimum\n- Clearance over commercial driveways: 5 m minimum\n- Clearance over pedestrian-only areas: 3.5 m minimum\n\nThese clearances protect people and vehicles from contact with energized conductors. They are among the most commonly tested values on the CEC exam.\n\nSubrule (4) addresses proximity to windows, doors, and porches: the point of attachment must be within 1 m of these openings, unless the attachment point is higher than the opening. This prevents service conductors from running directly across operable windows or doors where someone could reach out and contact them.\n\nSubrules (5) through (9) cover service masts. Subrule (5) requires that service masts be made of metal with suitable components. Subrule (6) specifies that when rigid steel conduit is used as a mast, the minimum trade size is 63 (2½ inches). Subrule (7) requires bolts for attachment to the building, with wood structural members being at least 38 mm thick. Subrule (8) prohibits attaching the service mast to the roof — except subrule (9) permits the upper mast support or guy wire to be fastened to a roof rafter or truss. This exception recognizes that the top of a mast often needs roof-level support while keeping the main structural load on the wall.',
      fieldScenario:
        'You are installing a new residential overhead service. The house has a single-car driveway on the left side and the electrical panel is in the basement on the right side.\n\nYou plan the service mast on the right side of the house (same side as the panel for the shortest interior run). Per Rule 6-112(2), the point of attachment must be on the same side as the service head, solidly anchored, and angled away from the building.\n\nThe driveway crosses below where the service drop will run from the pole. Since it is a residential driveway, you need a minimum clearance of 4 m per Rule 6-112(3). You measure and find the lowest point of the service drop will be 4.3 m above the driveway — you\'re good.\n\nThe homeowner\'s second-floor bedroom window is 1.5 m to the left of your planned attachment point. Per Rule 6-112(4), you must be within 1 m of the window OR higher than it. Since you are 1.5 m away (more than 1 m) but at the same height, you need to raise the attachment point above the window.\n\nYou install a service mast using 63 trade size rigid steel conduit per Rule 6-112(6), bolted to the wall studs with through-bolts per Rule 6-112(7). The wood framing members are 2×6 (38 mm actual thickness), meeting the minimum. You run a guy wire from the top of the mast to a roof rafter per Rule 6-112(9) — this is the one exception that permits roof attachment.',
      keyPoints: [
        'A suitable means of attachment must be provided at the building — Rule 6-112(1)',
        'Point of attachment must be on the same side as the service head, solidly anchored, angled away — Rule 6-112(2)',
        'Maximum height of attachment point: 9 m above grade — Rule 6-112(3)',
        'Clearance over highways: 5.5 m minimum — Rule 6-112(3)',
        'Clearance over residential driveways: 4 m minimum — Rule 6-112(3)',
        'Clearance over commercial driveways: 5 m minimum — Rule 6-112(3)',
        'Clearance over pedestrian-only areas: 3.5 m minimum — Rule 6-112(3)',
        'Within 1 m of windows/doors/porches, unless attachment point is higher — Rule 6-112(4)',
        'Service masts must be metal with suitable components — Rule 6-112(5)',
        'Rigid steel conduit used as mast: minimum 63 trade size — Rule 6-112(6)',
        'Bolts required for attachment; wood members minimum 38 mm thick — Rule 6-112(7)',
        'Service mast shall NOT be attached to the roof — Rule 6-112(8)',
        'Exception: Upper mast support or guy wire may be fastened to roof rafter/truss — Rule 6-112(9)',
      ],
      diagramaMermaid: `graph TD
    A["Overhead Support\\nRule 6-112"] --> B["Means of Attachment\\n(1)"]
    A --> C["Point of Attachment\\n(2)"]
    A --> D["Clearances\\n(3)"]
    A --> E["Near Windows/Doors\\n(4)"]
    A --> F["Service Masts\\n(5)-(9)"]
    C --> C1["Same side as\\nservice head"]
    C --> C2["Solidly anchored,\\nangled away"]
    D --> D1["Max 9m above grade"]
    D --> D2["Highway: 5.5m"]
    D --> D3["Residential drive: 4m"]
    D --> D4["Commercial drive: 5m"]
    D --> D5["Pedestrian: 3.5m"]
    E --> E1["Within 1m unless\\nhigher than opening"]
    F --> F1["Metal, min 63\\ntrade size RSC"]
    F --> F2["Bolts, wood ≥38mm"]
    F --> F3["NOT on roof\\nexcept guy wire\\nto rafter/truss"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: 'Key Clearances', note: 'Highway 5.5m, Residential drive 4m, Commercial drive 5m, Pedestrian 3.5m — Rule 6-112(3)', color: 'sky' },
        { icon: 'post', title: 'Mast Size', note: 'Rigid steel conduit mast minimum 63 trade size (2½") — Rule 6-112(6)', color: 'amber' },
        { icon: 'warning', title: 'Window Proximity', note: 'Within 1m of windows/doors/porches — unless attachment is higher — Rule 6-112(4)', color: 'rose' },
        { icon: 'shield', title: 'No Roof Attachment', note: 'Mast cannot attach to roof — except guy wire to rafter/truss — Rule 6-112(8)(9)', color: 'emerald' },
        { icon: 'bolt', title: 'Max Height', note: 'Point of attachment shall not exceed 9 m above grade — Rule 6-112(3)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 4. SERVICE HEAD & TERMINATIONS (Rules 6-114, 6-116)
    // =========================================================================
    {
      id: '6-service-head-terminations',
      title: 'Service Head & Terminations',
      rules: 'Rules 6-114, 6-116',
      explanation:
        'Rule 6-114 governs how service conductors are terminated at the top of the service entrance — the service head (also called a weatherhead). The primary purpose is to prevent moisture from entering the raceway or cable.\n\nSubrule (1) requires that the service head be suitable for use in a wet location. Since it is exposed to rain, snow, and ice, the fitting must be rated for continuous exposure to moisture.\n\nSubrule (2) provides an exception for continuous service cables: if the cable is continuous (no splice at the service head), the service head fitting may be omitted entirely. This recognizes that a continuous cable jacket provides its own moisture protection.\n\nSubrule (3) further relaxes the service head requirement for single-conductor or multi-conductor cables: the head may be omitted if three conditions are met — the cable end is sealed with weather-resistant tape or heat-shrink tubing, the cable is bent downward (creating a drip loop), and the cable is secured by a proper clamp. All three conditions must be satisfied.\n\nSubrule (4) requires that conductors of different polarity enter the service head through separate bushed holes. This prevents the conductors from contacting each other at the entrance point and provides mechanical protection for the insulation.\n\nSubrule (5) references Rule 6-302(3), which requires conductors to extend at least 750 mm beyond the service head to form drip loops. The drip loops prevent water from running along the conductor and into the raceway.\n\nSubrule (6) requires that conductors be arranged in accordance with Rule 6-116 to prevent moisture from entering the raceway.\n\nRule 6-116 specifies the location of the service head relative to the attachment point:\n(a) The service head must be located as required by the supply authority.\n(b) The service head must be 150 mm to 300 mm above the point of attachment, and no more than 600 mm horizontally from the support. The elevated position ensures that water runs away from the head, and the horizontal limit keeps the head close to the structural support for mechanical stability.',
      fieldScenario:
        'You are installing a service entrance on a new house using rigid PVC conduit with individual THWN-2 conductors. At the top, you install a service head rated for wet locations per Rule 6-114(1). You pull the conductors through so they extend 750 mm beyond the head per Rule 6-114(5) referencing 6-302(3), forming proper drip loops.\n\nEach conductor exits through its own separate bushed hole — the two hot legs and the neutral each get their own opening per Rule 6-114(4). You verify the head is 200 mm above the attachment bracket (within the 150-300 mm range) and 400 mm horizontally from the bracket (within the 600 mm maximum) per Rule 6-116(b).\n\nOn a different job, you are using TECK90 cable for a commercial service entrance. Because the cable is continuous (it runs unbroken from the utility connection through the service mast), you can omit the service head per Rule 6-114(2). However, you still seal the end with heat-shrink tubing, bend the cable downward, and clamp it securely per Rule 6-114(3) as an additional precaution.\n\nYour inspector asks why you didn\'t use a service head on the TECK cable. You cite Rule 6-114(2) for continuous cables and Rule 6-114(3) for the alternative sealing method. The inspector is satisfied.',
      keyPoints: [
        'Service head must be suitable for wet location — Rule 6-114(1)',
        'Continuous service cables: service head may be omitted — Rule 6-114(2)',
        'Single/multi-conductor cables: head may be omitted if sealed with weather-resistant tape/heat-shrink, bent downward, and held by clamp — Rule 6-114(3)',
        'Conductors of different polarity must enter through separate bushed holes — Rule 6-114(4)',
        'Conductors arranged per Rule 6-302(3): minimum 750 mm beyond head for drip loops — Rule 6-114(5)',
        'Arrangement must prevent moisture entry per Rule 6-116 — Rule 6-114(6)',
        'Service head location per supply authority — Rule 6-116(a)',
        'Service head 150-300 mm above and max 600 mm horizontally from the support — Rule 6-116(b)',
      ],
      diagramaMermaid: `graph TD
    A["Service Head\\nRule 6-114"] --> B["Wet Location\\nRated (1)"]
    A --> C{"Cable Type?"}
    C -->|"Continuous cable"| D["Head may be\\nomitted (2)"]
    C -->|"Individual conductors\\nin raceway"| E["Head required\\nwet-rated"]
    C -->|"Single/multi cable"| F["Head omitted IF:\\n• Sealed tape/heat-shrink\\n• Bent downward\\n• Clamped (3)"]
    A --> G["Separate bushed\\nholes per polarity (4)"]
    A --> H["750mm drip loops\\n(5) per 6-302(3)"]
    I["Service Head Location\\nRule 6-116"] --> J["150-300mm ABOVE\\nattachment point"]
    I --> K["Max 600mm\\nhorizontally\\nfrom support"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#065f46,stroke:#10b981,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Wet Location', note: 'Service head must be rated for wet location — Rule 6-114(1)', color: 'sky' },
        { icon: 'wire', title: 'Drip Loops', note: 'Conductors extend min 750 mm beyond head for drip loops — Rule 6-114(5)', color: 'amber' },
        { icon: 'ruler', title: 'Head Position', note: '150-300 mm above attachment, max 600 mm horizontally — Rule 6-116(b)', color: 'emerald' },
        { icon: 'lock', title: 'Separate Holes', note: 'Each polarity through its own bushed hole — Rule 6-114(4)', color: 'rose' },
        { icon: 'inspect', title: 'Head Omission', note: 'Continuous cables or sealed/bent/clamped cables may omit head — Rule 6-114(2)(3)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 5. SERVICE EQUIPMENT & LOCATION (Rules 6-200, 6-202, 6-204, 6-206)
    // =========================================================================
    {
      id: '6-service-equipment-location',
      title: 'Service Equipment & Location',
      rules: 'Rules 6-200, 6-202, 6-204, 6-206',
      explanation:
        'Rule 6-200 establishes the fundamental requirement: each service shall consist of a single service box (the main disconnect/overcurrent protection device). This is the "single disconnect" principle — anyone needing to de-energize a building\'s electrical system should be able to do so at one point.\n\nHowever, Rule 6-200(2) provides important exceptions allowing multiple service boxes. Multiple boxes are permitted when: (a) subdivision is provided in a dual-lug meter mounting device rated ≤600 A and with voltage ≤150 V to ground; and (b) the meter mounting device is installed outdoors. Both conditions must be met. This exception is commonly used in residential multi-unit buildings (duplexes, fourplexes) where a single outdoor meter stack feeds multiple panels.\n\nRule 6-200(3) clarifies that each subdivision in such an arrangement counts as a separate consumer\'s service for the purposes of Rule 6-104 (the 4-consumer maximum).\n\nRule 6-202 addresses subdivision requirements. Each subdivision of a service must have its own separate service box or be served through multi-service equipment. When a main overcurrent protective device (OCPD) protects the subdivision, the requirement for a separate service box may be omitted. This means if there is an upstream main breaker protecting a sub-section, that sub-section does not need its own main disconnect.\n\nRule 6-204 deals with fuse enclosures in service boxes. If the service box contains accessible fuses (replaceable fuses that someone might need to touch), the fuse compartment must have either a separate spring-closed door or a door with a substantial catch. This prevents accidental contact with energized fuse clips when the main door is open.\n\nRule 6-206 is one of the longest and most practically important rules in Section 6, governing service equipment location. Subrule (1)(a) requires placement per the supply authority\'s requirements. Subrule (1)(b) requires the equipment to be readily accessible, or at minimum the means of operation must be accessible.\n\nSubrule (1)(c) requires the service equipment to be installed inside the building, close to the point where service conductors enter. Critically, it lists locations where service equipment shall NOT be placed: coal bins, clothes closets, bathrooms, stairways, rooms where ambient temperature exceeds 30°C, hazardous locations, areas with less than 2 m headroom, areas below flood level, and other undesirable places.\n\nSubrule (2) addresses unauthorized operation: where there is a risk that unauthorized persons might operate the service equipment, protection must be provided by an integral lock, an external lockable cover over the operating handle, or installation in a separate locked room.\n\nSubrule (3) permits outdoor or pole-mounted installation if the equipment is in a weatherproof outdoor enclosure and is protected against mechanical damage if installed less than 2 m above ground.',
      fieldScenario:
        'You are installing service equipment for a new duplex. The utility provides one supply service, and you need two consumer\'s services (one per unit). You install an outdoor dual-lug meter stack with two meter positions. Since the meter device is outdoors and rated ≤600 A at 120/240 V (≤150 V to ground), you can subdivide per Rule 6-200(2). Each subdivision counts as one consumer\'s service per Rule 6-200(3), and since you have only 2, you are well within the 4-consumer limit of Rule 6-104.\n\nInside each unit, you install the service box (panel with main breaker) close to where the service entrance cable enters the building per Rule 6-206(1)(c). One unit has a bathroom near the entry point — you route the cable past the bathroom and locate the panel in the adjacent hallway because bathrooms are a prohibited location per Rule 6-206(1)(c).\n\nThe basement mechanical room runs hot in summer — you check the temperature. If it exceeds 30°C, you cannot place the service box there per Rule 6-206(1)(c). You relocate to a cooler area with at least 2 m of headroom.\n\nThe service box for Unit B has a fused disconnect (not a breaker panel). The fuses are accessible for replacement. Per Rule 6-204, you ensure the fuse compartment has a spring-closed door that snaps shut when released — preventing accidental contact with energized clips.\n\nThe building is on a flood plain. Per Rule 6-206(1)(c), the service equipment must be above the flood level. You mount the panels high on the wall in the ground-floor utility closet, well above the historical flood line.',
      keyPoints: [
        'Each service shall consist of a single service box — Rule 6-200(1)',
        'Multiple boxes OK if subdivision in dual-lug meter device ≤600 A and ≤150 V to ground, AND meter device is outdoors — Rule 6-200(2)',
        'Each subdivision counts as a consumer\'s service for Rule 6-104 limits — Rule 6-200(3)',
        'Each subdivision gets a separate service box or multi-service equipment — Rule 6-202',
        'Main OCPD protecting a subdivision: separate service box may be omitted — Rule 6-202',
        'Accessible fuses in service box: separate spring-closed door or substantial catch required — Rule 6-204',
        'Service equipment location per supply authority — Rule 6-206(1)(a)',
        'Must be readily accessible, or means of operation accessible — Rule 6-206(1)(b)',
        'Inside building, close to entry point — Rule 6-206(1)(c)',
        'NOT in: coal bins, clothes closets, bathrooms, stairways, rooms >30°C, hazardous areas, headroom <2 m, below flood level — Rule 6-206(1)(c)',
        'Risk of unauthorized operation: integral lock, external lockable cover, or locked room — Rule 6-206(2)',
        'Outdoor/pole OK if weatherproof enclosure + protected if <2 m above ground — Rule 6-206(3)',
      ],
      diagramaMermaid: `graph TD
    A["Service Equipment\\nRule 6-200"] --> B["Single service box\\nper service (1)"]
    B --> C{"Multiple boxes?"}
    C -->|"Yes IF"| D["Dual-lug meter device\\n≤600A, ≤150V-to-ground\\noutdoors (2)"]
    D --> E["Each subdivision =\\nconsumer's service (3)"]
    F["Subdivision\\nRule 6-202"] --> G["Separate box per\\nsubdivision"]
    F --> H["Main OCPD protects?\\nSeparate box omitted"]
    I["Location\\nRule 6-206"] --> J["Inside, close\\nto entry point"]
    I --> K["NOT IN:\\n• Bathroom\\n• Closet\\n• Stairway\\n• >30°C\\n• <2m headroom\\n• Below flood"]
    I --> L["Outdoor OK:\\nweatherproof +\\nprotected <2m"]
    I --> M["Unauthorized risk:\\nlock/lockable cover/\\nlocked room (2)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#065f46,stroke:#10b981,color:#e2e8f0
    style K fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'box', title: 'Single Box Rule', note: 'Each service = one service box. Multiple only with outdoor dual-lug meter ≤600A — Rule 6-200', color: 'sky' },
        { icon: 'warning', title: 'Prohibited Locations', note: 'No bathrooms, closets, stairways, >30°C rooms, <2m headroom, below flood — Rule 6-206(1)(c)', color: 'rose' },
        { icon: 'lock', title: 'Unauthorized Access', note: 'Integral lock, lockable cover, or locked room if unauthorized operation risk — Rule 6-206(2)', color: 'amber' },
        { icon: 'thermometer', title: '30°C Limit', note: 'Service equipment shall not be in rooms exceeding 30°C ambient — Rule 6-206(1)(c)', color: 'emerald' },
        { icon: 'shield', title: 'Fuse Safety', note: 'Accessible fuses need spring-closed door or substantial catch — Rule 6-204', color: 'violet' },
      ],
    },

    // =========================================================================
    // 6. SERVICE CONDUCTOR LOCATION & ENCLOSURES (Rules 6-208, 6-210, 6-212, 6-214)
    // =========================================================================
    {
      id: '6-conductor-location-enclosures',
      title: 'Service Conductor Location & Enclosures',
      rules: 'Rules 6-208, 6-210, 6-212, 6-214',
      explanation:
        'Rule 6-208 addresses where service conductors can be located relative to buildings. The general rule in subrule (1) is that service conductors shall be installed outside buildings. This is a safety principle — service conductors are typically on the supply side of the main overcurrent protection, so a fault on these conductors cannot be cleared by the building\'s own protective devices.\n\nHowever, three exceptions permit service conductors inside a building:\n(a) When embedded in at least 50 mm of concrete or masonry — this provides fire resistance and physical protection.\n(b) When installed under a concrete slab at least 50 mm thick — again providing mechanical and fire protection.\n(c) When routed through a crawl space that is 1.8 m or less in height, is of non-combustible construction, and has no combustible storage. The limited height means it is unlikely to be used as occupied space.\n\nSubrule (2) permits service conductors to enter a building for the purpose of connecting to the service box — this is obviously necessary since the service box is typically inside.\n\nRule 6-210 covers oil-filled switches and breakers used in service equipment. Subrule (1) requires isolating switches on the supply side of oil switches/breakers, and these must be interlocked so the oil switch cannot be opened while under load (which would cause dangerous arcing in the oil). Subrule (2) requires overcurrent trip coils on each ungrounded conductor — ensuring fault protection on every phase.\n\nRule 6-212 governs wiring space in service equipment enclosures. Subrule (1) prohibits using service equipment enclosures as junction boxes, wire troughs, or raceways for conductors feeding through to other equipment. Service enclosures are for service conductors only. Subrule (2) provides one exception: current monitoring devices (CTs for metering or monitoring) may be installed on the line side of the service equipment. Subrule (3) addresses layouts where there is no barrier between line and load terminals: incoming conductors must enter close to the line terminals and must not cross over load-side conductors. This prevents accidental contact between supply-side (unprotected) and load-side (protected) conductors.\n\nRule 6-214 requires that when multiple service boxes serve a building, each must be conspicuously labeled to indicate which part of the installation it controls. This is critical for safety — emergency responders and maintenance personnel must be able to quickly identify which disconnect controls which portion of the building.',
      fieldScenario:
        'You are running service conductors from the meter base on the exterior wall to the service panel inside a commercial building. The most direct route goes through the building\'s concrete block wall. Per Rule 6-208(1)(a), you embed the conduit in the concrete masonry wall (which provides ≥50 mm of concrete/masonry coverage), so the service conductors can pass through the interior legally.\n\nThe panel room is 15 m from the entry point. You route the conductors outside the building along the exterior wall (per the general rule of 6-208(1)) and re-enter at a point close to the panel room, entering the building per Rule 6-208(2) to connect to the service box.\n\nInside the service panel, the utility wants to install a CT for revenue metering on the line side. Per Rule 6-212(2), this is permitted — current monitoring devices on the line side are the one exception to the "no junction box" rule of 6-212(1).\n\nAn electrician on your crew suggests pulling a feeder through the service panel enclosure to reach a subpanel on the other side of the wall. You stop him — Rule 6-212(1) prohibits using the service enclosure as a junction box or raceway for feed-through conductors. He must route the feeder separately.\n\nThe building has 3 service boxes: one for the restaurant, one for the retail space, and one for the common area. Per Rule 6-214, each panel must be conspicuously labeled: "SERVICE — RESTAURANT," "SERVICE — RETAIL," and "SERVICE — COMMON AREAS." This ensures anyone can quickly identify which disconnect controls which space.',
      keyPoints: [
        'Service conductors shall be installed outside buildings — Rule 6-208(1)',
        'Exception: Embedded in ≥50 mm concrete or masonry — Rule 6-208(1)(a)',
        'Exception: Under a concrete slab ≥50 mm thick — Rule 6-208(1)(b)',
        'Exception: Through crawl space ≤1.8 m height, non-combustible, no combustible storage — Rule 6-208(1)(c)',
        'Service conductors may enter building to connect to service box — Rule 6-208(2)',
        'Oil switches/breakers: isolating switches on supply side, interlocked — Rule 6-210(1)',
        'Overcurrent trip coils required on each ungrounded conductor — Rule 6-210(2)',
        'Service enclosures NOT used as junction boxes, troughs, or raceways for feed-through — Rule 6-212(1)',
        'Exception: Current monitoring devices on line side permitted — Rule 6-212(2)',
        'No barrier between line/load: conductors enter close to line terminals, do not cross load conductors — Rule 6-212(3)',
        'Multiple service boxes: each labeled conspicuously to show which installation it controls — Rule 6-214',
      ],
      diagramaMermaid: `graph TD
    A["Service Conductors\\nRule 6-208"] --> B["OUTSIDE buildings\\n(general rule)"]
    B --> C{"Exceptions?"}
    C -->|"Embedded"| D["≥50mm concrete\\nor masonry (1)(a)"]
    C -->|"Under slab"| E["≥50mm concrete\\nslab (1)(b)"]
    C -->|"Crawl space"| F["≤1.8m, non-combustible\\nno combustible storage\\n(1)(c)"]
    B --> G["May enter building\\nfor service box\\nconnection (2)"]
    H["Enclosures\\nRule 6-212"] --> I["NOT junction box\\nor raceway (1)"]
    I --> J["Exception: CT / current\\nmonitoring on line\\nside OK (2)"]
    H --> K["No barrier?\\nEnter near line\\nterminals (3)"]
    L["Labeling\\nRule 6-214"] --> M["Each box labeled:\\nwhich installation\\nit controls"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0
    style L fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Outside Rule', note: 'Service conductors installed outside buildings — exceptions for concrete/masonry embedding — Rule 6-208', color: 'sky' },
        { icon: 'box', title: 'No Feed-Through', note: 'Service enclosures cannot be used as junction boxes or raceways — Rule 6-212(1)', color: 'rose' },
        { icon: 'inspect', title: 'CT Exception', note: 'Current monitoring devices on line side of service equipment are permitted — Rule 6-212(2)', color: 'amber' },
        { icon: 'label', title: 'Label Each Box', note: 'Multiple service boxes: conspicuous label showing which installation each controls — Rule 6-214', color: 'emerald' },
        { icon: 'lock', title: 'Oil Switch Interlock', note: 'Oil switches need interlocked isolating switches on supply side — Rule 6-210(1)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 7. UNDERGROUND SERVICE CONDUCTORS (Rule 6-300)
    // =========================================================================
    {
      id: '6-underground-service',
      title: 'Underground Service Conductors',
      rules: 'Rule 6-300',
      explanation:
        'Rule 6-300 governs underground service conductor installations. It has three subrules covering wiring methods, building entry, and connection to underground supply.\n\nSubrule (1) specifies the permitted wiring methods for underground service conductors. There are two main approaches:\n\nFirst, rigid conduit or electrical nonmetallic tubing (ENT) may be used for the underground portion only, with conductors rated for wet locations pulled through them. The wet-location rating is essential because underground raceways inevitably accumulate moisture. ENT is restricted to the underground portion — it cannot be used above ground for service entrance conductors.\n\nSecond, single-conductor or multi-conductor cable approved for underground service use may be installed per Rule 12-012 (which governs underground wiring methods, including burial depths). This includes cables like TECK90, ACWU90, and other types specifically listed for direct burial or underground installation.\n\nSubrule (2) addresses where raceways enter the building. Raceways must be sealed at the building entry point. Where practicable, the raceway should enter the building above ground level. The raceway must be drained (to prevent water accumulation) and must prevent moisture and gas from entering the building. Underground utility tunnels, sewer gas, and groundwater are real hazards — an improperly sealed raceway becomes a conduit for water, gas, and even vermin into the building.\n\nSubrule (3) deals with the connection to the underground supply system (typically the utility\'s underground transformer or vault). The connection point must be sealed with a suitable compound to prevent moisture ingress at the splice point. This is where the customer\'s service conductors connect to the utility\'s underground network, and a proper seal is critical to prevent long-term degradation.',
      fieldScenario:
        'You are installing an underground service for a new commercial building. The utility transformer is in a pad-mount enclosure 20 m from the building. You run rigid PVC conduit underground from the transformer pad to the building, pulling THWN-2 conductors (wet-location rated) per Rule 6-300(1).\n\nAt the building, you bring the conduit above grade before entering the foundation wall per Rule 6-300(2) — entering above ground where practicable. You install a condulet fitting at the transition point and seal the raceway with duct seal compound to prevent moisture and gas from entering the building.\n\nInside the conduit near the building entry, you notice condensation has formed. Per Rule 6-300(2), the raceway must be drained — you verify the conduit slopes away from the building slightly so any water drains back toward the transformer pad rather than pooling at the entry.\n\nAt the utility connection point (the transformer pad), you make the splices using utility-approved connectors and seal the conduit entry with an approved compound per Rule 6-300(3). The utility inspector checks that no moisture can migrate through the splice point.\n\nFor a second project — a residential underground service — you use TECK90 cable directly buried per Rule 12-012, which is permitted by Rule 6-300(1) as single/multi-conductor cable for underground service. You still seal the cable entry at the building per Rule 6-300(2).',
      keyPoints: [
        'Underground service conductors: rigid conduit or ENT (underground portion only) with wet-location conductors — Rule 6-300(1)',
        'OR single/multi-conductor cable approved for underground service per Rule 12-012 — Rule 6-300(1)',
        'ENT restricted to underground portion only — Rule 6-300(1)',
        'Raceways entering building must be sealed — Rule 6-300(2)',
        'Enter above ground where practicable — Rule 6-300(2)',
        'Raceways must be drained to prevent water accumulation — Rule 6-300(2)',
        'Must prevent moisture and gas entry into building — Rule 6-300(2)',
        'Connection to underground supply must be sealed with compound — Rule 6-300(3)',
      ],
      diagramaMermaid: `graph TD
    A["Underground Service\\nRule 6-300"] --> B["Wiring Methods (1)"]
    B --> C["Rigid conduit / ENT\\n+ wet-location\\nconductors"]
    B --> D["Single/multi cable\\nper Rule 12-012"]
    C --> E["ENT: underground\\nportion ONLY"]
    A --> F["Building Entry (2)"]
    F --> G["Sealed at entry"]
    F --> H["Enter above ground\\nwhere practicable"]
    F --> I["Drained"]
    F --> J["Prevent moisture\\n& gas entry"]
    A --> K["Supply Connection (3)"]
    K --> L["Sealed with\\ncompound"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style K fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Wet Location Required', note: 'Conductors in underground raceways must be rated for wet locations — Rule 6-300(1)', color: 'sky' },
        { icon: 'shield', title: 'Seal at Entry', note: 'Raceways sealed at building entry, drained, preventing moisture/gas — Rule 6-300(2)', color: 'rose' },
        { icon: 'post', title: 'Above Ground Entry', note: 'Raceway should enter building above ground where practicable — Rule 6-300(2)', color: 'amber' },
        { icon: 'lock', title: 'Compound Seal', note: 'Connection to underground supply sealed with suitable compound — Rule 6-300(3)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 8. OVERHEAD SERVICE CONDUCTORS & WIRING METHODS (Rules 6-302, 6-304, 6-306, 6-308)
    // =========================================================================
    {
      id: '6-overhead-conductors-wiring',
      title: 'Overhead Service Conductors & Wiring Methods',
      rules: 'Rules 6-302, 6-304, 6-306, 6-308',
      explanation:
        'Rule 6-302 is the primary rule for overhead service conductor wiring methods. Subrule (1) lists all permitted methods: rigid conduit, busway, steel EMT, flexible conduit with lead sheath, MI cable (but not lightweight MI cable), aluminum-sheathed cable, copper-sheathed cable, ACWU75/90 cable, AC90 cable, and TECK90 cable. This is an exhaustive list — if a wiring method is not on this list, it cannot be used for overhead service entrance conductors.\n\nSubrule (2) addresses exposed wiring between buildings on the supply side of the service head. Where service conductors run between buildings (as exposed wiring), they must follow the rules for exposed wiring in Rules 12-302 through 12-318, which cover supports, clearances, and protection requirements.\n\nSubrule (3) requires that conductors extend a minimum of 750 mm beyond the service head, with drip loops formed. The drip loops are the low point of the conductor loop between the service head and the utility connection — water runs to the lowest point of the loop and drips off instead of entering the raceway.\n\nSubrule (4) establishes minimum conductor sizes: #10 AWG for copper and #8 AWG for aluminum. These minimums ensure adequate mechanical strength for overhead service conductors that must withstand wind, ice, and the weight of the service drop span.\n\nSubrule (5) requires that conductor insulation be suitable for the local temperature conditions. In cold climates, some insulation types become brittle; in hot areas, some may soften. The insulation must be rated for the extremes of the installation environment.\n\nRule 6-304 governs MI (mineral-insulated) cable and aluminum-sheathed cable used as service conductors. Subrule (1) requires multi-conductor cable, unless single-conductor cable larger than #4 AWG is used. Subrule (2) permits these cables to be exposed and surface-mounted, with mechanical protection per Rule 6-306(b).\n\nRule 6-306 sets additional requirements for service raceways. Subrule (a) requires that only service conductors be installed in a service raceway, and only one service per raceway. No mixing of different services or non-service conductors. Subrule (b) requires protection against mechanical damage per Rule 12-934. Subrule (c) specifies that circular raceways must be minimum 21 trade size (3/4 inch).\n\nRule 6-308 permits bare neutral conductors in service installations under specific conditions:\n(a) Copper bare neutral in a raceway — always permitted.\n(b) Aluminum bare neutral above ground in a non-metallic or aluminum raceway — permitted because the non-metallic/aluminum raceway prevents galvanic corrosion.\n(c) Bare neutral as part of a busway or service entrance cable — permitted because the cable assembly provides protection.\n(d) Bare neutral as part of neutral-supported cable per Rule 6-302(2) for exposed wiring between buildings.',
      fieldScenario:
        'You are selecting the wiring method for a 200A commercial service entrance. You decide to use rigid steel conduit from the service head down to the meter base, then TECK90 cable from the meter to the service panel inside. Both methods are on the permitted list in Rule 6-302(1).\n\nYou pull #3/0 copper THWN-2 conductors through the rigid conduit. At the service head, you extend each conductor 750 mm beyond the head to form drip loops per Rule 6-302(3). Your apprentice asks if you can use #12 AWG copper for a small 15A service entrance. You explain the minimum is #10 copper or #8 aluminum per Rule 6-302(4) — overhead service conductors need mechanical strength.\n\nThe rigid conduit is 21 trade size (the minimum for circular raceways per Rule 6-306(c)). You verify that only service conductors are in the conduit — no communication cables, no other circuits — per Rule 6-306(a). Only one service per raceway.\n\nFor the neutral, you consider running a bare copper conductor in the rigid conduit. Per Rule 6-308(a), this is permitted — copper bare neutral in a raceway is allowed. However, if you were using aluminum neutral, you would need a non-metallic or aluminum raceway per Rule 6-308(b), and only above ground.\n\nThe conduit passes close to a loading dock where forklifts operate. Per Rule 6-306(b), you protect it against mechanical damage — installing steel bollards to shield the exposed raceway per Rule 12-934.',
      keyPoints: [
        'Permitted wiring methods: rigid conduit, busway, steel EMT, flex with lead sheath, MI (not lightweight), Al-sheathed, Cu-sheathed, ACWU75/90, AC90, TECK90 — Rule 6-302(1)',
        'Supply-side exposed wiring between buildings: per Rules 12-302 to 12-318 — Rule 6-302(2)',
        'Conductors must extend minimum 750 mm beyond service head with drip loops — Rule 6-302(3)',
        'Minimum conductor size: #10 AWG copper or #8 AWG aluminum — Rule 6-302(4)',
        'Insulation must be suitable for local temperature conditions — Rule 6-302(5)',
        'MI/Al-sheathed cable: multi-conductor, or single-conductor if >No. 4 AWG — Rule 6-304(1)',
        'MI/Al-sheathed may be exposed/surface-mounted with protection per 6-306(b) — Rule 6-304(2)',
        'Service raceway: only service conductors, only one service per raceway — Rule 6-306(a)',
        'Service raceway: protected against mechanical damage per Rule 12-934 — Rule 6-306(b)',
        'Circular service raceways: minimum 21 trade size — Rule 6-306(c)',
        'Bare neutral copper in raceway: permitted — Rule 6-308(a)',
        'Bare neutral aluminum: only above ground in non-metallic or aluminum raceway — Rule 6-308(b)',
        'Bare neutral as part of busway or service entrance cable: permitted — Rule 6-308(c)',
        'Bare neutral as part of neutral-supported cable per 6-302(2): permitted — Rule 6-308(d)',
      ],
      diagramaMermaid: `graph TD
    A["Overhead Service\\nConductors\\nRule 6-302"] --> B["Permitted Methods (1):\\nRigid conduit, busway,\\nsteel EMT, MI, TECK90,\\nACWU, AC90, etc."]
    A --> C["750mm drip loops\\nbeyond head (3)"]
    A --> D["Min size:\\n#10 Cu / #8 Al (4)"]
    E["Service Raceways\\nRule 6-306"] --> F["One service only\\nservice conductors only (a)"]
    E --> G["Protected per\\n12-934 (b)"]
    E --> H["Circular: min 21\\ntrade size (c)"]
    I["Bare Neutral\\nRule 6-308"] --> J["Cu in raceway (a)"]
    I --> K["Al above ground\\nnon-metallic/Al\\nraceway (b)"]
    I --> L["Part of busway /\\nservice cable (c)"]
    I --> M["Neutral-supported\\ncable (d)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style I fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Min Conductor Size', note: '#10 AWG copper or #8 AWG aluminum minimum for overhead service — Rule 6-302(4)', color: 'sky' },
        { icon: 'ruler', title: 'Drip Loop Length', note: 'Minimum 750 mm beyond service head for drip loops — Rule 6-302(3)', color: 'amber' },
        { icon: 'neutral', title: 'Bare Neutral Rules', note: 'Cu in raceway OK; Al only above ground in non-metallic/Al raceway — Rule 6-308', color: 'emerald' },
        { icon: 'shield', title: 'One Service Per Raceway', note: 'Only service conductors from one service in each raceway — Rule 6-306(a)', color: 'rose' },
        { icon: 'post', title: 'Min Raceway Size', note: 'Circular service raceways minimum 21 trade size (¾") — Rule 6-306(c)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 9. JOINTS, SPLICES & CONDENSATION (Rules 6-310, 6-312)
    // =========================================================================
    {
      id: '6-joints-splices-condensation',
      title: 'Joints, Splices & Condensation',
      rules: 'Rules 6-310, 6-312',
      explanation:
        'Rule 6-310 establishes a critical safety principle: NO joints or splices are permitted between the point of connection (where utility meets customer conductors) and the service box. Service conductors must run unbroken from the connection point to the service equipment. This is because service conductors are on the supply side of overcurrent protection — any fault at a joint or splice cannot be cleared by the building\'s protective devices and could cause a fire or arc flash.\n\nHowever, the rule provides specific exceptions where joints are unavoidable:\n\n(a) Where a conductor transition is required per Rule 4-006 (conductor sizing transitions) or Rule 8-102 (grounding conductor connections). For example, transitioning from a large aluminum utility conductor to a smaller copper building conductor.\n\n(b)(i) A clamp, connector, or lug within a meter mounting device, or a connector at the service head when exposed wiring is used per Rule 6-302(2). Meter connections inherently require joints — the meter must be removable. Service head connectors for exposed wiring between buildings are also necessary joints.\n\n(b)(ii) An underground joint made per Rule 12-112(5) for the purpose of repair or relocation of existing underground service conductors. This recognizes that underground conductors sometimes need to be repaired or rerouted, and digging up the entire run to replace a conductor without a splice is impractical.\n\nRule 6-312 addresses condensation, which is a serious but often overlooked issue with service raceways. Temperature differences between indoor and outdoor air cause moisture to condense inside raceways, potentially damaging conductors and equipment.\n\nSubrule (1) requires that raceways entering a building be sealed and drained above grade. The seal prevents warm, moist interior air from entering the cold raceway (or vice versa), and draining above grade ensures any condensation exits the system rather than pooling.\n\nSubrule (2) prohibits terminating a raceway on the top of the service box unless the raceway is drained to the outdoors. If a raceway enters from the top, condensation would drip directly into the live service equipment. If top entry is necessary, a drain must route condensation outside before it reaches the enclosure.',
      fieldScenario:
        'You are connecting a new underground service. The utility conductor terminates at a handhole 5 m from the building. You need to splice your service entrance conductor to the utility conductor in the handhole. Per Rule 6-310(a), this transition joint is permitted because you are transitioning from the utility\'s aluminum conductors to your copper service entrance conductors per Rule 4-006.\n\nInside the building, the service entrance conduit runs from the basement wall penetration up to the service panel. You realize the conduit run is 3 m short. Your apprentice suggests adding a splice in the basement. You refuse — Rule 6-310 prohibits joints between the connection point and the service box. You order longer conductors and pull a continuous run.\n\nAt the meter base, the conductors terminate on the meter\'s line-side lugs and reconnect on the load-side lugs. Per Rule 6-310(b)(i), these connections within the meter mounting device are permitted exceptions.\n\nThe service conduit enters the building through the basement wall. Per Rule 6-312(1), you seal the conduit at the wall penetration with duct seal and ensure the conduit slopes slightly toward the exterior so any condensation drains outside above grade. The conduit enters the service panel from the side — not from the top — because a top entry would require a separate outdoor drain per Rule 6-312(2).',
      keyPoints: [
        'NO joints or splices between connection point and service box — Rule 6-310',
        'Exception: Conductor transition per Rule 4-006 or grounding per Rule 8-102 — Rule 6-310(a)',
        'Exception: Clamp/lug in meter device or connector at service head for exposed wiring — Rule 6-310(b)(i)',
        'Exception: Underground joint per Rule 12-112(5) for repair or relocation — Rule 6-310(b)(ii)',
        'Raceways entering building must be sealed and drained above grade — Rule 6-312(1)',
        'Raceway shall NOT terminate on top of service box unless drained to outdoors — Rule 6-312(2)',
      ],
      diagramaMermaid: `graph TD
    A["Joints & Splices\\nRule 6-310"] --> B["NO joints between\\nconnection point\\nand service box"]
    B --> C{"Exceptions?"}
    C -->|"Transition"| D["Conductor transition\\nper 4-006 / 8-102 (a)"]
    C -->|"Meter"| E["Clamp/lug in meter\\ndevice (b)(i)"]
    C -->|"Service head"| F["Connector at head\\nexposed wiring (b)(i)"]
    C -->|"Underground repair"| G["Joint per 12-112(5)\\nrepair/relocation (b)(ii)"]
    H["Condensation\\nRule 6-312"] --> I["Seal raceway at\\nbuilding entry (1)"]
    H --> J["Drain above\\ngrade (1)"]
    H --> K["NOT on top of\\nservice box unless\\ndrained outdoors (2)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'No Splices', note: 'No joints between connection point and service box — service conductors run unbroken — Rule 6-310', color: 'rose' },
        { icon: 'wire', title: 'Meter Connections OK', note: 'Clamps and lugs within meter mounting device are a permitted exception — Rule 6-310(b)(i)', color: 'sky' },
        { icon: 'shield', title: 'Seal & Drain', note: 'Raceways entering building sealed and drained above grade — Rule 6-312(1)', color: 'emerald' },
        { icon: 'box', title: 'No Top Entry', note: 'Raceway cannot terminate on top of service box unless drained outdoors — Rule 6-312(2)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 10. METERING EQUIPMENT & METER LOOPS (Rules 6-400, 6-402)
    // =========================================================================
    {
      id: '6-metering-meter-loops',
      title: 'Metering Equipment & Meter Loops',
      rules: 'Rules 6-400, 6-402',
      explanation:
        'Rule 6-400 defines metering equipment broadly: it includes current transformers (CTs), potential transformers (PTs), and the instruments (meters) themselves. This definition is important because the rules that follow apply to all of these components, not just the visible meter.\n\nRule 6-402 is a detailed rule governing meter loops — the conductors and fittings that connect the service conductors to the metering equipment and back. This rule has two subrules with multiple requirements.\n\nSubrule (1) sets four requirements for all meter loops:\n(a) Conductors must be inaccessible to unauthorized persons. Meter loop conductors are on the supply side of overcurrent protection and carry unprotected current — unauthorized access creates both a safety and a tampering risk.\n(b) Permitted wiring methods are: rigid conduit, flexible conduit, EMT, aluminum-sheathed cable, or armoured cable. These are robust methods that provide physical protection.\n(c) Spare conductors must be at least 450 mm long at each meter position and CT connection point. This spare length allows the utility to connect, disconnect, and service meters without the conductors being too short to work with.\n(d) A suitable fitting or junction box with a meter backplate must be provided. The backplate is the mounting surface for the meter socket.\n\nSubrule (2) addresses where the meter loop is installed relative to the service box. Normally, metering is on the LOAD side of the service box (after the main disconnect). However, metering may be installed on the SUPPLY side of the service box if three conditions are all met:\n(a) No exposed live parts — all connections must be enclosed and insulated.\n(b) The AC voltage does not exceed 300 V — limiting the hazard level.\n(c) The rating does not exceed 200 A for a self-contained meter, 320 A for a meter with bypass provision, or 600 A for a transformer-rated outdoor meter mounting device.\n\nThese supply-side metering provisions are commonly used because utilities prefer to meter before the main disconnect — it prevents customers from drawing unmetered power. The voltage and current limits ensure that supply-side metering is only used in lower-risk situations.',
      fieldScenario:
        'You are installing metering for a 100A residential service. The utility requires the meter on the supply side of the main disconnect (before the panel). Per Rule 6-402(2), this is permitted because: (a) the meter socket has no exposed live parts — all connections are enclosed; (b) the voltage is 240 V (under 300 V); and (c) the rating is 100 A (under the 200 A limit for self-contained meters).\n\nYou run the meter loop using EMT per Rule 6-402(1)(b). At the meter socket, you leave 500 mm of spare conductor per Rule 6-402(1)(c) — more than the 450 mm minimum — so the utility meter installer has enough slack to make clean connections.\n\nFor a commercial building with a 400A service, the utility requires transformer-rated metering. The meter and CTs will be installed outdoors. Per Rule 6-402(2)(c), a transformer-rated outdoor meter mounting device can be on the supply side up to 600 A — your 400A installation qualifies. You install CTs in a metal enclosure and run the CT secondary leads to the meter position, leaving 450 mm spare at each CT and at the meter per Rule 6-402(1)(c).\n\nThe meter loop conductors run through a common area of the building. Per Rule 6-402(1)(a), these conductors must be inaccessible to unauthorized persons. You run them in locked metal raceway above the suspended ceiling, accessible only to the utility and building maintenance.',
      keyPoints: [
        'Metering equipment includes CTs, PTs, and instruments — Rule 6-400',
        'Meter loop conductors must be inaccessible to unauthorized persons — Rule 6-402(1)(a)',
        'Meter loop wiring: rigid conduit, flex, EMT, Al-sheathed, or armoured cable — Rule 6-402(1)(b)',
        'Spare conductors minimum 450 mm at each meter/CT point — Rule 6-402(1)(c)',
        'Suitable fitting or box with meter backplate required — Rule 6-402(1)(d)',
        'Metering normally on LOAD side of service box — Rule 6-402',
        'Supply-side metering OK if: no exposed live parts — Rule 6-402(2)(a)',
        'Supply-side metering OK if: AC voltage ≤300 V — Rule 6-402(2)(b)',
        'Supply-side metering OK if: ≤200 A self-contained, ≤320 A with bypass, ≤600 A transformer-rated outdoor — Rule 6-402(2)(c)',
      ],
      diagramaMermaid: `graph TD
    A["Metering Equipment\\nRule 6-400"] --> B["CTs + PTs +\\nInstruments"]
    C["Meter Loops\\nRule 6-402"] --> D["Conductors\\ninaccessible to\\nunauthorized (1)(a)"]
    C --> E["Wiring: conduit,\\nflex, EMT, Al-sheathed,\\narmoured (1)(b)"]
    C --> F["Spare 450mm at\\nmeter/CT (1)(c)"]
    C --> G["Fitting/box with\\nbackplate (1)(d)"]
    C --> H{"Location?"}
    H -->|"Normal"| I["Load side of\\nservice box"]
    H -->|"Supply side OK IF"| J["No exposed live parts\\n+ ≤300V AC\\n+ Rating limits"]
    J --> K["≤200A self-contained"]
    J --> L["≤320A with bypass"]
    J --> M["≤600A transformer\\nrated outdoor"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#065f46,stroke:#10b981,color:#e2e8f0
    style J fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'inspect', title: 'Metering = CTs + PTs + Meters', note: 'Metering equipment includes all current/potential transformers and instruments — Rule 6-400', color: 'sky' },
        { icon: 'ruler', title: '450 mm Spare', note: 'Minimum 450 mm spare conductor at every meter and CT connection — Rule 6-402(1)(c)', color: 'amber' },
        { icon: 'lock', title: 'Inaccessible', note: 'Meter loop conductors must be inaccessible to unauthorized persons — Rule 6-402(1)(a)', color: 'rose' },
        { icon: 'bolt', title: 'Supply-Side Limits', note: '≤200A self-contained, ≤320A bypass, ≤600A transformer outdoor — Rule 6-402(2)(c)', color: 'emerald' },
        { icon: 'power', title: '300V Max', note: 'Supply-side metering only permitted at AC voltage ≤300 V — Rule 6-402(2)(b)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 11. INSTRUMENT TRANSFORMERS & DISCONNECTING (Rules 6-404, 6-406)
    // =========================================================================
    {
      id: '6-instrument-transformers-disconnecting',
      title: 'Instrument Transformers & Disconnecting',
      rules: 'Rules 6-404, 6-406',
      explanation:
        'Rule 6-404 governs instrument transformer enclosures — the housings for current transformers (CTs) and potential transformers (PTs) used in metering installations.\n\nSubrule (1) requires that instrument transformer enclosures be made of metal, with one exception: where access is limited to authorized persons only (such as a locked utility room), non-metallic enclosures may be used. The metal requirement provides grounding continuity, mechanical protection, and shielding.\n\nSubrule (2) requires that enclosures be installed per the supply authority\'s requirements. Each utility may have specific dimensions, mounting heights, and configuration standards for their metering equipment.\n\nSubrule (3) establishes when CT enclosures are required: for services rated over 200 A. Below 200 A, self-contained meters (which measure current directly without CTs) are typically used. Two exceptions exist: CT enclosures are not required when the CTs are integral to switchgear (built into the switchgear enclosure), or when the meters being used do not require CTs (modern electronic meters may handle higher currents directly).\n\nSubrule (4) requires that provision be made for securing the transformers within the enclosure — CTs and PTs must be properly fastened and not loose.\n\nRule 6-406 addresses disconnecting means for meters in multiple-occupancy buildings. Each occupancy must have either a separate service box or a sealable meter fitting for each meter. This ensures that each tenant\'s metering can be individually disconnected for testing, maintenance, or meter replacement without affecting other tenants.\n\nThe "sealable" requirement is important — utility seals on meter fittings prevent tampering with the metering. If a meter is sealed, it can only be removed or accessed by the utility. A separate service box per meter provides the same function by giving each meter its own disconnect.',
      fieldScenario:
        'You are installing metering for a 6-unit apartment building with a 600A, 120/208V, 3-phase service. Each unit has a 100A service. The total building service is over 200A, so CT enclosures are required per Rule 6-404(3).\n\nYou install a CT cabinet (metal enclosure per Rule 6-404(1)) adjacent to the meter stack. The CTs are mounted on a bracket and secured with bolts per Rule 6-404(4). The enclosure is installed at the height and configuration specified by the local utility per Rule 6-404(2).\n\nThe utility inspector checks that the CT enclosure meets their dimensional standards and that the CTs are properly secured. The enclosure is metal, providing a grounding path per Rule 6-404(1).\n\nFor the individual unit meters, each unit needs its own disconnecting means per Rule 6-406. You install a meter stack with 6 sealable meter positions — each meter has its own sealable ring that prevents unauthorized removal. Alternatively, you could have installed 6 separate service boxes (one per unit), but the meter stack with sealable fittings is more space-efficient.\n\nOne of the upper units is a superintendent\'s suite — the building owner asks if you can skip the separate metering for that unit. You explain that Rule 6-406 requires a separate disconnect/sealable fitting for EACH meter in a multiple-occupancy building. No exceptions.',
      keyPoints: [
        'Instrument transformer enclosures must be metal — Rule 6-404(1)',
        'Exception: Non-metallic OK where access is limited to authorized persons only — Rule 6-404(1)',
        'Enclosure installation per supply authority requirements — Rule 6-404(2)',
        'CT enclosures required for services >200 A — Rule 6-404(3)',
        'Exception: CTs integral to switchgear do not need separate enclosure — Rule 6-404(3)',
        'Exception: Meters not requiring CTs do not trigger the enclosure requirement — Rule 6-404(3)',
        'Provision for securing transformers within enclosure — Rule 6-404(4)',
        'Multiple occupancy: separate service box or sealable meter fitting per meter — Rule 6-406',
      ],
      diagramaMermaid: `graph TD
    A["Instrument Transformer\\nEnclosures\\nRule 6-404"] --> B["Metal enclosure\\nrequired (1)"]
    B --> C["Exception:\\nauthorized access\\nonly → non-metallic OK"]
    A --> D["Per supply\\nauthority (2)"]
    A --> E["CT enclosure\\nrequired >200A (3)"]
    E --> F["Exceptions:\\n• CTs integral to\\nswitchgear\\n• Meters not\\nneeding CTs"]
    A --> G["Secure transformers\\nwithin enclosure (4)"]
    H["Disconnecting\\nfor Meters\\nRule 6-406"] --> I["Multiple occupancy"]
    I --> J["Separate service box\\nper meter"]
    I --> K["OR sealable meter\\nfitting per meter"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'box', title: 'Metal Enclosures', note: 'CT/PT enclosures must be metal unless authorized-access-only location — Rule 6-404(1)', color: 'sky' },
        { icon: 'bolt', title: '>200A = CTs', note: 'CT enclosures required for services exceeding 200 A — Rule 6-404(3)', color: 'amber' },
        { icon: 'lock', title: 'Sealable Fittings', note: 'Each meter needs its own separate service box or sealable meter fitting — Rule 6-406', color: 'rose' },
        { icon: 'permit', title: 'Supply Authority', note: 'Instrument transformer enclosures installed per supply authority specs — Rule 6-404(2)', color: 'emerald' },
        { icon: 'shield', title: 'Secure CTs/PTs', note: 'Transformers must be properly secured within their enclosures — Rule 6-404(4)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 12. METER LOCATION & IMPEDANCE GROUNDING (Rules 6-408, 6-410, 6-412)
    // =========================================================================
    {
      id: '6-meter-location-impedance',
      title: 'Meter Location & Impedance Grounding',
      rules: 'Rules 6-408, 6-410, 6-412',
      explanation:
        'Rule 6-408 governs where metering equipment must be located. Subrule (1) lists six requirements:\n\n(a) Near the service box — this minimizes the length of unprotected conductors between the meter and the service equipment.\n(b) Grouped together — when multiple meters serve a building, they should be in one location for ease of reading and maintenance.\n(c) Readily accessible — utility personnel must be able to reach the meters without difficulty.\n(d) Not in prohibited locations — the same prohibited locations as service equipment apply: not in closets, bathrooms, stairways, hazardous locations, or high-temperature areas.\n(e) If outdoor installation: must be in a weatherproof enclosure.\n(f) Per the supply authority — each utility has specific requirements for meter height, clearances, and accessibility.\n\nSubrule (2) addresses current transformers (CTs) that may be located outside the premises: the secondary leads from CTs located outside must be continuous (no splices) from the CT to the meter. This ensures the integrity of the metering signal — a splice in a CT secondary lead could introduce resistance that affects measurement accuracy.\n\nRule 6-410 is brief but important: the space provided for meters must comply with the supply authority\'s requirements. Utilities publish detailed specifications for meter rooms, meter panels, and clearance zones. This rule gives the utility\'s specifications the force of code.\n\nRule 6-412 addresses impedance-grounded metering systems — a specialized configuration used on certain industrial and commercial systems where the neutral is grounded through an impedance (resistor or reactor) rather than solidly.\n\nSubrule (1) requires that impedance-grounded metering be installed per the supply authority\'s requirements.\n\nSubrule (2) specifies requirements for the neutral reference conductor in impedance-grounded systems:\n(a) The conductor must be insulated for the full system voltage — not just 600 V, but the phase-to-phase voltage of the system, because under fault conditions the neutral can rise to system voltage.\n(b) The conductor must be isolated from ground — it cannot be bonded to the building grounding system the way a solidly-grounded neutral would be.\n(c) The neutral reference conductor is permitted to be installed in the same raceway as the service conductors.\n\nImpedance grounding is used to limit fault current while maintaining a voltage reference for metering. The insulation and isolation requirements protect both people and equipment from the elevated voltages that can appear on the neutral during ground faults.',
      fieldScenario:
        'You are installing meters for a 12-unit condominium. Per Rule 6-408(1)(b), all 12 meters must be grouped together. You designate a meter room on the ground floor, near the main service entrance per Rule 6-408(1)(a). The room has a locking door and is climate-controlled — it is not a closet, bathroom, or stairway per Rule 6-408(1)(d).\n\nThe utility provides specific dimensions for the meter panel: 1.5 m clearance in front, meters mounted between 1.0 m and 1.8 m above floor, and specific spacing between meter sockets. Per Rule 6-410, you build the meter room to meet these supply authority specifications exactly.\n\nThree meters will be outdoors (for the commercial units at grade level). Per Rule 6-408(1)(e), these outdoor meters are installed in weatherproof NEMA 3R enclosures with drip shields.\n\nOn another project — an industrial plant — the 4.16 kV service uses impedance grounding. The metering system needs a neutral reference conductor. Per Rule 6-412(2)(a), you install the neutral reference conductor with insulation rated for the full 4.16 kV system voltage. Per Rule 6-412(2)(b), this conductor is NOT bonded to the building ground — it is isolated. You run the neutral reference conductor in the same raceway as the service conductors, which is explicitly permitted by Rule 6-412(2)(c).\n\nThe utility\'s metering engineer reviews the installation and confirms it meets their impedance-grounding metering requirements per Rule 6-412(1).',
      keyPoints: [
        'Meters must be near the service box — Rule 6-408(1)(a)',
        'Multiple meters must be grouped together — Rule 6-408(1)(b)',
        'Meters must be readily accessible — Rule 6-408(1)(c)',
        'Meters NOT in closets, bathrooms, stairways, hazardous locations, high-temperature areas — Rule 6-408(1)(d)',
        'Outdoor meters: weatherproof enclosure required — Rule 6-408(1)(e)',
        'Meter location per supply authority — Rule 6-408(1)(f)',
        'CTs outside premises: secondary leads must be continuous to meter — Rule 6-408(2)',
        'Meter space per supply authority requirements — Rule 6-410',
        'Impedance-grounded metering per supply authority — Rule 6-412(1)',
        'Neutral reference conductor insulated for system voltage — Rule 6-412(2)(a)',
        'Neutral reference conductor isolated from ground — Rule 6-412(2)(b)',
        'Neutral reference conductor permitted in same raceway as service conductors — Rule 6-412(2)(c)',
      ],
      diagramaMermaid: `graph TD
    A["Meter Location\\nRule 6-408"] --> B["Near service box (a)"]
    A --> C["Grouped together (b)"]
    A --> D["Readily accessible (c)"]
    A --> E["NOT in closets /\\nbathrooms / stairways /\\nhazardous / high-temp (d)"]
    A --> F["Outdoor =\\nweatherproof (e)"]
    A --> G["Per supply\\nauthority (f)"]
    H["CTs outside\\npremises (2)"] --> I["Continuous secondary\\nleads to meter"]
    J["Meter Space\\nRule 6-410"] --> K["Per supply\\nauthority specs"]
    L["Impedance Grounding\\nRule 6-412"] --> M["Per supply\\nauthority (1)"]
    L --> N["Neutral Reference\\nConductor (2)"]
    N --> O["Insulated for\\nsystem voltage (a)"]
    N --> P["Isolated from\\nground (b)"]
    N --> Q["Permitted in same\\nraceway as service\\nconductors (c)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style L fill:#065f46,stroke:#10b981,color:#e2e8f0
    style N fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'inspect', title: 'Grouped & Accessible', note: 'Meters must be grouped, readily accessible, and near the service box — Rule 6-408(1)', color: 'sky' },
        { icon: 'warning', title: 'Prohibited Meter Locations', note: 'No closets, bathrooms, stairways, hazardous areas, or high-temperature rooms — Rule 6-408(1)(d)', color: 'rose' },
        { icon: 'neutral', title: 'Impedance Neutral', note: 'Insulated for system voltage and isolated from ground — Rule 6-412(2)(a)(b)', color: 'amber' },
        { icon: 'permit', title: 'Supply Authority Rules', note: 'Meter space and impedance grounding per supply authority — Rules 6-410, 6-412(1)', color: 'emerald' },
        { icon: 'wire', title: 'CT Secondary Leads', note: 'CTs outside premises: continuous secondary leads (no splices) to meter — Rule 6-408(2)', color: 'violet' },
      ],
    },
  ],
}
