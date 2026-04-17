import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 20 — Flammable Liquid and Gasoline Dispensing, Service Stations,
 *              Garages, Bulk Storage Plants, Finishing Processes, and Aircraft Hangars
 * (CEC 2021, CSA C22.1:21, pages 193–203)
 * COMPLETE — Every rule from 20-000 to 20-422 is covered.
 * Source: PDF scan "Section 20 — Flammable liquid and gasoline dispensing…"
 */

export const section20Guide: StudyGuideSection = {
  section: '20',
  title: 'Section 20 — Flammable Liquid and Gasoline Dispensing, Service Stations, Garages, Bulk Storage Plants, Finishing Processes, and Aircraft Hangars',
  description:
    'Section 20 supplements the general requirements of the CEC and applies to specific installations involving flammable liquids and gases. It covers seven distinct facility types: gasoline dispensing and service stations (Rules 20-002 to 20-014), propane vehicle fuel dispensers and container filling (Rules 20-030 to 20-042), compressed natural gas refuelling stations (Rules 20-060 to 20-070), commercial repair garages (Rules 20-100 to 20-112), bulk storage plants (Rules 20-200 to 20-212), finishing processes such as spray painting (Rules 20-300 to 20-314), and aircraft hangars (Rules 20-400 to 20-422). Each subsection defines hazardous area classifications, wiring requirements, sealing, equipment restrictions, circuit disconnects, and bonding. Definitions from Section 18 apply throughout.',
  subsections: [
    // =========================================================================
    // 1. SCOPE & GENERAL (Rules 20-000 to 20-002)
    // =========================================================================
    {
      id: '20-scope-general',
      title: 'Scope & General',
      rules: 'Rules 20-000 to 20-002',
      explanation:
        'Rule 20-000 (Scope): Section 20 supplements or amends the general requirements of the Code and applies to seven types of installations:\n\n(a) Gasoline dispensing and service stations — Rules 20-002 to 20-014\n(b) Propane vehicle fuel dispensers, container filling, and storage — Rules 20-030 to 20-042\n(c) Compressed natural gas refuelling stations, compressors, and storage facilities — Rules 20-060 to 20-070\n(d) Commercial repair garages — Rules 20-100 to 20-112\n(e) Bulk storage plants — Rules 20-200 to 20-212\n(f) Finishing processes — Rules 20-300 to 20-314\n(g) Aircraft hangars — Rules 20-400 to 20-422\n\nFor additions, modifications, or renovations to existing facilities that use the Division system of classification for Class I locations, the continued use of the Division system is permitted.\n\nWhere the Division system is used for Class I locations, as permitted by Subrule 2), the Rules for Class I locations found in Annex J20 of Appendix J shall apply.\n\nThe definitions stated in Rule 18-002 shall also apply to Section 20.\n\nRule 20-002 (General — Gasoline dispensing): Rules 20-004 to 20-014 apply to electrical apparatus and wiring installed in gasoline dispensing and service stations and other locations where gasoline or other similar volatile flammable liquids are dispensed or transferred to the fuel tanks of self-propelled vehicles. Other areas used as lubritoriums, service rooms, repair rooms, offices, salesrooms, compressor rooms, and similar locations shall conform to Rules 20-100 to 20-112 for electrical wiring and equipment.',
      fieldScenario:
        'You arrive at a gas station to install new electrical equipment. Before starting, you need to understand which rules apply to each area. The fuel dispenser area falls under Rules 20-002 to 20-014. The attached repair bay where vehicles are serviced falls under the commercial repair garage rules (20-100 to 20-112), even though it is part of the same gas station. The office area and convenience store are ordinary (non-hazardous) locations, but you still need to confirm they are properly separated from the hazardous areas.\n\nAn older station across the street still uses the Class I, Division system for its hazardous area classifications. Rule 20-000(2) permits this for additions, modifications, or renovations — you do not need to reclassify to the Zone system as long as you follow the Division rules in Annex J20. However, any brand-new construction would use the Zone system.\n\nYou also note that all the hazardous location definitions from Section 18 (Zone 0, 1, 2, equipment groups, etc.) apply here by reference through Rule 20-000(4).',
      keyPoints: [
        'Section 20 supplements the general CEC requirements — does not replace them (Rule 20-000(1))',
        'Covers seven facility types: gas stations, propane dispensers, CNG stations, repair garages, bulk storage plants, finishing processes, aircraft hangars (Rule 20-000(1))',
        'Existing Division-system facilities may continue using Division classification for additions, modifications, or renovations (Rule 20-000(2))',
        'Where Division system is used, rules in Annex J20 of Appendix J apply (Rule 20-000(3))',
        'Definitions from Rule 18-002 (Section 18) apply to all of Section 20 (Rule 20-000(4))',
        'Gasoline dispensing rules (20-004 to 20-014) apply where volatile flammable liquids are dispensed to vehicle fuel tanks (Rule 20-002(1))',
        'Lubritoriums, service rooms, repair rooms, offices, salesrooms at service stations follow commercial repair garage rules 20-100 to 20-112 (Rule 20-002(2))',
      ],
      diagramaMermaid: `graph TD
    A["Section 20\\nScope\\n(Rule 20-000)"] --> B["Gasoline Dispensing\\n& Service Stations\\n20-002 to 20-014"]
    A --> C["Propane Dispensers\\n& Container Filling\\n20-030 to 20-042"]
    A --> D["CNG Refuelling\\nStations\\n20-060 to 20-070"]
    A --> E["Commercial\\nRepair Garages\\n20-100 to 20-112"]
    A --> F["Bulk Storage\\nPlants\\n20-200 to 20-212"]
    A --> G["Finishing\\nProcesses\\n20-300 to 20-314"]
    A --> H["Aircraft\\nHangars\\n20-400 to 20-422"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'book', title: 'Seven Facility Types', note: 'Gas stations, propane, CNG, garages, bulk storage, finishing, hangars — Rule 20-000', color: 'sky' },
        { icon: 'shield', title: 'Division System Allowed', note: 'Existing facilities may keep Division classification for modifications — Rule 20-000(2)', color: 'amber' },
        { icon: 'link', title: 'Section 18 Definitions Apply', note: 'All hazardous location terms from Rule 18-002 carry into Section 20 — Rule 20-000(4)', color: 'emerald' },
        { icon: 'warning', title: 'Different Rules for Different Areas', note: 'A gas station office uses garage rules 20-100, not dispensing rules 20-002 — Rule 20-002(2)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 2. GASOLINE DISPENSING — Hazardous Areas (Rule 20-004)
    // =========================================================================
    {
      id: '20-gasoline-hazardous-areas',
      title: 'Gasoline Dispensing — Hazardous Areas',
      rules: 'Rule 20-004',
      explanation:
        'Rule 20-004 defines the hazardous area classifications around gasoline dispensing equipment. This is one of the most critical rules in Section 20 for exam purposes because of the detailed zone boundaries.\n\nSubrule 1) The space within a dispenser enclosure up to 1.2 m vertically above its base, including the space below the dispenser that may contain electrical wiring and equipment, shall be a Zone 1 location. Exception: see Subrule 3.\n\nSubrule 2) The space within a nozzle boot of a dispenser shall be a Zone 0 location.\n\nSubrule 3) The space within a dispenser enclosure above the Zone 1 location as specified in Subrule 1), or spaces within a dispenser enclosure isolated from the Zone 1 location by a solid vapour-tight partition or by a solid nozzle boot, shall be a Zone 2 location.\n\nSubrule 4) The space within 450 mm horizontally from the Zone 1 location within the dispenser enclosure as specified in Subrule 1) shall be a Zone 1 location.\n\nSubrule 5) The space outside the dispenser within 450 mm horizontally from the opening of a solid nozzle boot located above the vapour-tight partition shall be a Zone 2 location, except that the classified area need not extend beyond the plane in which the boot is located.\n\nSubrule 6) In an outside location, any area beyond the Zone 1 area (and in buildings not suitably cut off) within 6 m horizontally from the exterior enclosure of any dispenser shall be a Zone 2 location that extends to a level 450 mm above driveway or ground level.\n\nSubrule 7) In an outside location, any area beyond the Zone 1 location (and in buildings not suitably cut off) within 3 m horizontally from any tank fill-pipe shall be a Zone 2 location that extends upward to a level 450 mm above driveway or ground level.\n\nSubrule 8) Electrical wiring and equipment, any portion of which is below the surface of areas defined as Zone 1 or Zone 2 in Subrule 1), 4), 6), or 7), shall be considered to be within a Zone 1 location that extends at least to the point of emergence above grade.\n\nSubrule 9) Areas within the vicinity of tank vent pipes:\n(a) The spherical volume within a 900 mm radius from the point of discharge of any tank vent pipe shall be a Zone 1 location and the volume between the 900 mm radius and the 1.5 m radius from the point of discharge of a vent shall be a Zone 2 location.\n(b) For any vent that does not discharge upward, the cylindrical volume below both the Zone 1 and Zone 2 locations extending to the ground shall be a Zone 2 location.\n(c) The hazardous area shall not be considered to extend beyond an unpierced wall.\n\nSubrule 10) Areas within lubrication rooms:\n(a) The area within any pit or space below grade or floor level in a lubrication room shall be a Zone 1 location, unless the pit or space below grade is beyond the hazardous areas specified in Subrules 6), 7), and 9), in which case it shall be a Zone 2 location.\n(b) For each floor below grade beyond the hazardous area in Subrules 6), 7), and 9), with adequate ventilation, a Zone 2 location shall extend up to a level of only 50 mm above each such floor.\n(c) The area within the entire lubrication room up to 50 mm above the floor or grade (whichever is higher) and the area within 900 mm in any direction from the dispensing point of a hand-operated unit dispensing volatile flammable liquids shall be a Zone 2 location.',
      fieldScenario:
        'You are wiring a new gasoline dispenser at a gas station. Looking at the dispenser, you first identify the nozzle boot — Rule 20-004(2) classifies this as Zone 0 because fuel vapour concentrations are highest inside the nozzle boot area. The space inside the dispenser enclosure up to 1.2 m above its base is Zone 1 per Rule 20-004(1) — this is where the metering and piping connections are located.\n\nYou need to install a junction box near the dispenser. Rule 20-004(4) says the space within 450 mm horizontally from the Zone 1 area inside the dispenser is also Zone 1 — so your junction box must be mounted farther than 450 mm from the dispenser enclosure, or it must be rated for Zone 1.\n\nThe electrician asks about the area around the driveway near the dispenser. Rule 20-004(6) classifies a Zone 2 extending 6 m horizontally from the dispenser exterior, up to 450 mm above the driveway. This means that any receptacles, lights, or equipment within this area below 450 mm must be rated for Zone 2.\n\nThe underground tank fill pipe is located 4 m from the dispenser. Rule 20-004(7) creates a separate Zone 2 area within 3 m horizontally from the fill pipe, extending up to 450 mm above ground level.\n\nA tank vent pipe terminates on a post nearby. Rule 20-004(9)(a) creates a Zone 1 sphere of 900 mm radius around the discharge point, and a Zone 2 extending from 900 mm to 1.5 m radius. If the vent does not discharge upward, the cylindrical volume below both zones extending to the ground is Zone 2.\n\nAny wiring BELOW GRADE within the Zone 1 or Zone 2 areas is automatically classified as Zone 1 per Rule 20-004(8) — this is critical for underground conduit runs.',
      keyPoints: [
        'Dispenser enclosure up to 1.2 m above base = Zone 1 (includes space below dispenser) (Rule 20-004(1))',
        'Space within a nozzle boot = Zone 0 (Rule 20-004(2))',
        'Dispenser space above Zone 1 or isolated by vapour-tight partition = Zone 2 (Rule 20-004(3))',
        'Space within 450 mm horizontally from Zone 1 within dispenser enclosure = Zone 1 (Rule 20-004(4))',
        'Space within 450 mm horizontally from solid nozzle boot opening above vapour-tight partition = Zone 2 (Rule 20-004(5))',
        'Outside location: 6 m horizontally from dispenser exterior, up to 450 mm above driveway = Zone 2 (Rule 20-004(6))',
        'Outside location: 3 m horizontally from tank fill-pipe, up to 450 mm above driveway = Zone 2 (Rule 20-004(7))',
        'Any wiring/equipment BELOW the surface of Zone 1 or Zone 2 areas = Zone 1 extending to point of emergence above grade (Rule 20-004(8))',
        'Tank vent pipe: 900 mm radius sphere = Zone 1; between 900 mm and 1.5 m radius = Zone 2 (Rule 20-004(9)(a))',
        'Non-upward-discharging vent: cylindrical volume below zones extending to ground = Zone 2 (Rule 20-004(9)(b))',
        'Hazardous area does not extend beyond an unpierced wall (Rule 20-004(9)(c))',
        'Lubrication room pit or space below grade = Zone 1 (or Zone 2 if beyond the hazardous areas) (Rule 20-004(10)(a))',
        'Entire lubrication room up to 50 mm above floor + 900 mm from dispensing point of hand unit = Zone 2 (Rule 20-004(10)(c))',
      ],
      diagramaMermaid: `graph TD
    A["Gasoline Dispenser\\nHazardous Areas\\n(Rule 20-004)"] --> B["Nozzle Boot\\nZone 0\\n(Subrule 2)"]
    A --> C["Dispenser Enclosure\\nup to 1.2 m above base\\nZone 1\\n(Subrule 1)"]
    A --> D["450 mm from Zone 1\\nwithin enclosure\\nZone 1\\n(Subrule 4)"]
    A --> E["6 m from dispenser\\nup to 450 mm above\\ndriveway — Zone 2\\n(Subrule 6)"]
    A --> F["3 m from fill-pipe\\nup to 450 mm above\\ndriveway — Zone 2\\n(Subrule 7)"]
    A --> G["Below grade in\\nZone 1/2 areas\\n= Zone 1\\n(Subrule 8)"]
    A --> H["Tank Vent Pipe\\n900 mm = Zone 1\\n1.5 m = Zone 2\\n(Subrule 9)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style G fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style H fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Nozzle Boot = Zone 0', note: 'Highest hazard — fuel vapour concentrations are greatest here — Rule 20-004(2)', color: 'rose' },
        { icon: 'ruler', title: '1.2 m = Zone 1 Height', note: 'Dispenser enclosure up to 1.2 m above base is Zone 1 — Rule 20-004(1)', color: 'amber' },
        { icon: 'warning', title: '6 m Radius from Dispenser', note: 'Zone 2 extends 6 m horizontally, 450 mm above driveway — Rule 20-004(6)', color: 'sky' },
        { icon: 'bolt', title: 'Below Grade = Zone 1', note: 'Underground wiring in Zone 1 or 2 areas is automatically Zone 1 — Rule 20-004(8)', color: 'rose' },
        { icon: 'shield', title: 'Vent Pipe Zones', note: '900 mm sphere = Zone 1, to 1.5 m = Zone 2 — Rule 20-004(9)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 3. GASOLINE DISPENSING — Wiring, Equipment, Disconnects, Sealing & Bonding
    //    (Rules 20-006 to 20-014)
    // =========================================================================
    {
      id: '20-gasoline-wiring-bonding',
      title: 'Gasoline Dispensing — Wiring, Equipment, Disconnects, Sealing & Bonding',
      rules: 'Rules 20-006 to 20-014',
      explanation:
        'These rules cover all the electrical installation requirements for gasoline dispensing locations beyond the hazardous area classifications.\n\nRule 20-006 (Wiring and equipment within hazardous areas):\n1) Electrical wiring and equipment within the hazardous areas defined in Rule 20-004 shall conform to Section 18 requirements.\n2) Where dispensers are supplied by rigid metal conduit, a union and a flexible fitting shall be installed between the conduit and the dispenser junction box in addition to any sealing fittings required by Section 18.\n3) The flexible metal fitting shall be installed in a manner that allows relative movement of the conduit and the dispenser.\n4) Where dispensers are supplied by a cable, provision shall be made to separate the cable from the dispenser junction box without rendering ineffective the explosion-proof cable seal.\n\nRule 20-008 (Wiring and equipment above hazardous areas): Wiring and equipment above hazardous areas shall conform to Rules 20-106 and 20-110 (the commercial repair garage rules for wiring and equipment above hazardous areas).\n\nRule 20-010 (Circuit disconnects): Each circuit leading to or through a dispensing pump shall be provided with a switching means that will disconnect simultaneously all ungrounded conductors of the circuit from the source of supply. This is a critical safety requirement for emergency shutoffs.\n\nRule 20-012 (Sealing):\n1) Seals as required by Section 18 shall be provided in each conduit run entering or leaving a dispenser or any cavities or enclosures in direct communication with a dispenser.\n2) Additional seals shall be provided in conformance with Rules 18-104 and 18-154, and the requirements of Rules 18-104 and 18-154 shall include horizontal and vertical boundaries.\n\nRule 20-014 (Bonding): All non-current-carrying metal parts of dispensing pumps, metal raceways, and other electrical equipment shall be bonded to ground in accordance with Section 10.',
      fieldScenario:
        'You are running rigid metal conduit to a new fuel dispenser. Rule 20-006(2) requires three things between the conduit and the dispenser junction box: a union, a flexible fitting, and the appropriate sealing fittings per Section 18. The flexible fitting per Rule 20-006(3) allows the dispenser to move slightly due to vehicle impacts or thermal expansion without breaking the conduit connection.\n\nThe dispenser at the next island is fed by TECK cable instead of conduit. Rule 20-006(4) requires that you can separate the cable from the junction box without destroying the explosion-proof seal — this means using proper cable glands and seal fittings.\n\nThe canopy lights above the pumps are above the hazardous area (more than 450 mm above driveway level and beyond the 6 m Zone 2 boundary). Rule 20-008 directs you to the commercial garage rules (20-106 and 20-110) for these installations.\n\nFor each dispenser circuit, Rule 20-010 requires a disconnect switch that opens ALL ungrounded conductors simultaneously. This is the emergency shutoff — typically located inside the station building or at a visible location. It must cut all hot legs at once.\n\nYou install conduit seals per Rule 20-012(1) at every conduit entering or leaving the dispenser. Rule 20-012(2) adds that you must also seal per Rules 18-104 and 18-154, including both horizontal and vertical boundaries — this means sealing where conduit crosses from hazardous to non-hazardous areas in any direction.\n\nFinally, Rule 20-014 requires all metal parts of the dispenser, raceways, and equipment to be bonded to ground per Section 10.',
      keyPoints: [
        'Wiring and equipment in gasoline dispensing hazardous areas must conform to Section 18 (Rule 20-006(1))',
        'Rigid metal conduit to dispensers: a union AND a flexible fitting required between conduit and dispenser junction box (Rule 20-006(2))',
        'Flexible fitting must allow relative movement of conduit and dispenser (Rule 20-006(3))',
        'Cable-fed dispensers: cable must be separable from junction box without destroying explosion-proof seal (Rule 20-006(4))',
        'Wiring and equipment ABOVE hazardous areas: follow Rules 20-106 and 20-110 (commercial garage rules) (Rule 20-008)',
        'Each dispenser pump circuit must have a disconnect that opens ALL ungrounded conductors simultaneously (Rule 20-010)',
        'Conduit seals required per Section 18 at every run entering or leaving a dispenser (Rule 20-012(1))',
        'Additional seals per Rules 18-104 and 18-154, including horizontal AND vertical boundaries (Rule 20-012(2))',
        'All non-current-carrying metal parts bonded to ground per Section 10 (Rule 20-014)',
      ],
      diagramaMermaid: `graph TD
    A["Gasoline Dispensing\\nInstallation\\n(Rules 20-006 to 20-014)"] --> B["Within Hazardous\\nAreas — Section 18\\n(Rule 20-006)"]
    A --> C["Above Hazardous\\nAreas — Rules\\n20-106 & 20-110\\n(Rule 20-008)"]
    A --> D["Circuit Disconnect\\nAll ungrounded\\nconductors\\n(Rule 20-010)"]
    A --> E["Sealing\\nSection 18 + Rules\\n18-104 & 18-154\\n(Rule 20-012)"]
    A --> F["Bonding\\nPer Section 10\\n(Rule 20-014)"]
    B --> B1["Rigid conduit:\\nunion + flexible\\nfitting required"]
    B --> B2["Cable: separable\\nwithout destroying\\nseal"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Union + Flexible Fitting', note: 'Both required between conduit and dispenser junction box — Rule 20-006(2)', color: 'sky' },
        { icon: 'bolt', title: 'Simultaneous Disconnect', note: 'Emergency shutoff must open ALL ungrounded conductors at once — Rule 20-010', color: 'rose' },
        { icon: 'lock', title: 'Seal at Every Entry', note: 'Conduit seals at every run entering/leaving a dispenser — Rule 20-012(1)', color: 'amber' },
        { icon: 'neutral', title: 'Bonding Required', note: 'All metal parts of pumps, raceways, equipment bonded per Section 10 — Rule 20-014', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 4. PROPANE VEHICLE FUEL DISPENSERS, CONTAINER FILLING & STORAGE
    //    (Rules 20-030 to 20-042)
    // =========================================================================
    {
      id: '20-propane-dispensers',
      title: 'Propane Vehicle Fuel Dispensers, Container Filling & Storage',
      rules: 'Rules 20-030 to 20-042',
      explanation:
        'This subsection applies to locations where propane is dispensed to vehicle fuel tanks, to portable containers, and to locations where propane is stored or transferred from rail cars or tanker vehicles to storage containers.\n\nRule 20-030 (Scope): Rules 20-032 to 20-042 apply to propane dispensing to vehicle fuel tanks, to portable containers, and to propane storage/transfer locations.\n\nRule 20-032 (Special terminology): Key definitions specific to propane:\n- Container refill centre (propane service station): a facility in which a dispensing system is installed.\n- Dispensing system: a system consisting of a tank, a pump and motor, a propane dispenser, and associated piping and supports, for the storage, metering, and dispensing of liquid propane into containers.\n- Filling plant (bulk plant): a bulk propane storage, distribution, and transfer facility.\n- Vehicle fuel dispenser: a propane dispenser, specifically for the dispensing of liquid propane (by volume) into containers.\n\nRule 20-034 (Hazardous areas): In container refill centres and in filling plants, the hazardous areas shall be classified as listed in Table 63.\n\nRule 20-036 (Wiring and equipment in hazardous areas):\n1) All electrical wiring and equipment in the hazardous areas referred to in Rule 20-034 shall conform to the requirements of Section 18.\n2) Where dispensing devices are supplied by rigid metal conduit, the requirements of Rule 20-006(2) and (3) shall be met — i.e., a union and flexible fitting are required.\n\nRule 20-038 (Sealing):\n1) Seals shall be installed as required by Section 18 and the requirements shall be applied to horizontal as well as vertical boundaries of the defined hazardous locations.\n2) Seals for dispensing devices shall be provided as required by Rule 20-012.\n\nRule 20-040 (Circuit disconnects): Each circuit leading to or through a propane vehicle fuel dispenser or pump shall be provided with a switching means that will disconnect simultaneously all ungrounded conductors of the circuit from the source of supply.\n\nRule 20-042 (Bonding): All non-current-carrying metal parts of equipment and raceways shall be bonded to ground in accordance with Section 10.',
      fieldScenario:
        'You are installing electrical equipment at a propane refill station where customers can fill their BBQ tanks and where a propane vehicle fuelling station operates. Rule 20-030 confirms this subsection applies to both operations.\n\nFirst, you need to classify the hazardous areas. Rule 20-034 directs you to Table 63 for the specific zone boundaries at container refill centres and filling plants. The dispenser area will have Zone 1 and Zone 2 areas similar to gasoline dispensers but sized for propane vapour characteristics.\n\nFor wiring the propane dispenser, Rule 20-036(1) requires compliance with Section 18 — all wiring and equipment must be suitable for the zone classification. If you use rigid metal conduit, Rule 20-036(2) cross-references Rule 20-006(2) and (3), meaning you need a union and a flexible fitting between the conduit and the dispenser junction box, just like for a gasoline dispenser.\n\nRule 20-040 requires a disconnect switch for each dispenser circuit that opens all ungrounded conductors simultaneously — the same emergency shutoff requirement as gasoline dispensers.\n\nSealing follows the same pattern: Section 18 seals applied to horizontal AND vertical boundaries (Rule 20-038(1)), plus the specific dispenser seal requirements from Rule 20-012 (Rule 20-038(2)).\n\nAll metal parts are bonded to ground per Section 10 (Rule 20-042).',
      keyPoints: [
        'Applies to propane dispensing to vehicle fuel tanks, portable containers, and propane storage/transfer (Rule 20-030)',
        'Container refill centre = propane service station with dispensing system (Rule 20-032)',
        'Filling plant (bulk plant) = bulk propane storage, distribution, and transfer facility (Rule 20-032)',
        'Hazardous areas classified per Table 63 (Rule 20-034)',
        'All wiring and equipment in hazardous areas must conform to Section 18 (Rule 20-036(1))',
        'Rigid metal conduit to dispensers: same union + flexible fitting requirements as Rule 20-006(2)(3) (Rule 20-036(2))',
        'Seals per Section 18 applied to horizontal AND vertical hazardous area boundaries (Rule 20-038(1))',
        'Dispenser seals as required by Rule 20-012 (Rule 20-038(2))',
        'Circuit disconnect must open ALL ungrounded conductors simultaneously for each dispenser/pump circuit (Rule 20-040)',
        'All non-current-carrying metal parts bonded to ground per Section 10 (Rule 20-042)',
      ],
      diagramaMermaid: `graph TD
    A["Propane Dispensers\\n& Storage\\n(Rules 20-030 to 20-042)"] --> B["Hazardous Areas\\nPer Table 63\\n(Rule 20-034)"]
    A --> C["Wiring: Section 18\\n+ union & flexible\\nfitting for conduit\\n(Rule 20-036)"]
    A --> D["Sealing: Section 18\\nhorizontal + vertical\\nboundaries\\n(Rule 20-038)"]
    A --> E["Disconnect: ALL\\nungrounded conductors\\nsimultaneously\\n(Rule 20-040)"]
    A --> F["Bonding:\\nPer Section 10\\n(Rule 20-042)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Table 63 = Propane Zones', note: 'Hazardous areas at refill centres and filling plants classified per Table 63 — Rule 20-034', color: 'amber' },
        { icon: 'wire', title: 'Same as Gasoline Conduit', note: 'Propane dispenser conduit needs union + flexible fitting per Rule 20-006 — Rule 20-036(2)', color: 'sky' },
        { icon: 'bolt', title: 'Emergency Shutoff', note: 'Disconnect all ungrounded conductors simultaneously — Rule 20-040', color: 'rose' },
        { icon: 'neutral', title: 'Bond Everything', note: 'All non-current-carrying metal parts bonded per Section 10 — Rule 20-042', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 5. COMPRESSED NATURAL GAS REFUELLING STATIONS (Rules 20-060 to 20-070)
    // =========================================================================
    {
      id: '20-cng-refuelling',
      title: 'Compressed Natural Gas Refuelling Stations',
      rules: 'Rules 20-060 to 20-070',
      explanation:
        'This subsection covers CNG (compressed natural gas) refuelling stations, compressors, and storage facilities.\n\nRule 20-060 (Scope):\n1) Rules 20-062 to 20-070 apply to locations in which compressed natural gas is dispensed to the fuel tanks of self-propelled vehicles and to associated compressors and storage facilities.\n2) The Rules in this Subsection do NOT apply to vehicle refuelling appliances installed in accordance with CSA B149.1 that do not have storage facilities.\n\nRule 20-062 (Hazardous areas): CNG refuelling stations, compressors, and storage facilities shall be classified as shown in Table 64.\n\nRule 20-064 (Wiring and equipment in hazardous areas):\n1) All electrical wiring and equipment in the hazardous areas defined in Rule 20-062 shall comply with the requirements of Section 18.\n2) Where dispensing devices are supplied by rigid metal conduit, the requirements of Rule 20-006(2) and (3) shall be met.\n\nRule 20-066 (Sealing):\n1) Seals shall be installed as required by Section 18, and the requirements shall be applied to horizontal as well as vertical boundaries of the defined hazardous locations.\n2) Seals for dispensing devices shall be provided as required by Rule 20-012.\n\nRule 20-068 (Circuit disconnects): Each circuit leading to a compressor or a dispensing device shall be provided with a switching means that will disconnect simultaneously all ungrounded conductors of the circuit from the source of supply.\n\nRule 20-070 (Bonding): All non-current-carrying metal parts of equipment and raceways shall be bonded to ground in accordance with Section 10.',
      fieldScenario:
        'A municipality is building a CNG fuelling station for its bus fleet. You are responsible for the electrical installation.\n\nFirst, note Rule 20-060(2) — if a homeowner installs a small vehicle refuelling appliance per CSA B149.1 without storage tanks, these rules do NOT apply. But this is a commercial facility with compressors and storage, so Section 20 applies fully.\n\nRule 20-062 directs you to Table 64 for the hazardous area classification. The table defines the zone boundaries around CNG dispensers, compressors, and storage vessels — typically Zone 1 close to potential leak points and Zone 2 extending outward.\n\nThe installation pattern is nearly identical to gasoline and propane: wiring per Section 18 (Rule 20-064(1)), union and flexible fitting for conduit (Rule 20-064(2) cross-referencing Rule 20-006), sealing at horizontal and vertical boundaries (Rule 20-066), a simultaneous disconnect for all ungrounded conductors (Rule 20-068), and bonding per Section 10 (Rule 20-070).\n\nNote that Rule 20-068 specifically mentions compressor circuits in addition to dispensing devices — each compressor circuit also needs its own disconnect switch.',
      keyPoints: [
        'Applies to CNG dispensing to vehicle fuel tanks, associated compressors, and storage facilities (Rule 20-060(1))',
        'Does NOT apply to vehicle refuelling appliances per CSA B149.1 without storage facilities (Rule 20-060(2))',
        'Hazardous areas classified per Table 64 (Rule 20-062)',
        'All wiring and equipment in hazardous areas must comply with Section 18 (Rule 20-064(1))',
        'Rigid metal conduit to dispensers: union + flexible fitting per Rule 20-006(2)(3) (Rule 20-064(2))',
        'Seals per Section 18 applied to horizontal AND vertical boundaries (Rule 20-066(1))',
        'Dispenser seals per Rule 20-012 (Rule 20-066(2))',
        'Disconnect required for BOTH compressor and dispensing device circuits — all ungrounded conductors simultaneously (Rule 20-068)',
        'All non-current-carrying metal parts bonded to ground per Section 10 (Rule 20-070)',
      ],
      diagramaMermaid: `graph TD
    A["CNG Refuelling\\nStations\\n(Rules 20-060 to 20-070)"] --> B["Hazardous Areas\\nPer Table 64\\n(Rule 20-062)"]
    A --> C["Wiring: Section 18\\n+ conduit union &\\nflex fitting\\n(Rule 20-064)"]
    A --> D["Sealing: Section 18\\nhorizontal + vertical\\n(Rule 20-066)"]
    A --> E["Disconnect:\\nCompressor AND\\ndispenser circuits\\n(Rule 20-068)"]
    A --> F["Bonding:\\nPer Section 10\\n(Rule 20-070)"]
    G["Exemption:\\nCSA B149.1\\nappliances without\\nstorage"] -.->|"NOT covered"| A
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Table 64 = CNG Zones', note: 'Hazardous areas around CNG dispensers, compressors, storage per Table 64 — Rule 20-062', color: 'amber' },
        { icon: 'bolt', title: 'Compressors Need Disconnect Too', note: 'Both compressor AND dispenser circuits require simultaneous disconnect — Rule 20-068', color: 'rose' },
        { icon: 'shield', title: 'CSA B149.1 Exemption', note: 'Small refuelling appliances without storage are exempt from Section 20 — Rule 20-060(2)', color: 'emerald' },
        { icon: 'lock', title: 'Seal in All Directions', note: 'Seals must cover horizontal AND vertical hazardous boundaries — Rule 20-066(1)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 6. COMMERCIAL REPAIR GARAGES — Hazardous Areas, Wiring & Equipment
    //    (Rules 20-100 to 20-106)
    // =========================================================================
    {
      id: '20-garages-hazardous-wiring',
      title: 'Commercial Repair Garages — Hazardous Areas & Wiring',
      rules: 'Rules 20-100 to 20-106',
      explanation:
        'This subsection covers commercial garages where vehicles powered by gasoline, propane, or other flammable fuels are serviced or repaired.\n\nRule 20-100 (Scope): Rules 20-102 to 20-112 apply to commercial garages where vehicles powered by gasoline, propane, or other flammable fuels are serviced or repaired.\n\nRule 20-102 (Hazardous areas):\n1) For each floor at or above grade, the entire area up to a level 50 mm above the floor shall be a Zone 2 location except that adjacent areas shall not be classified as hazardous locations, provided that they are:\n(a) elevated from a service and repair area by at least 50 mm; OR\n(b) separated from a service and repair area by tight-fitting barriers such as curbs, ramps, or partitions at least 50 mm high.\n\n2) For each floor below grade, the entire area up to a level 50 mm above the bottom of outside doors or other openings that are at, or above, grade level shall be a Zone 2 location except that, where adequate ventilation is provided, the hazardous location shall extend up to a level of only 50 mm above each such floor.\n\n3) Any pit or depression below floor level shall be a Zone 2 location that extends up to 50 mm above the floor level.\n\nRule 20-104 (Wiring and equipment in hazardous areas): Within hazardous areas as defined in Rule 20-102, wiring and equipment shall conform to the applicable requirements of Section 18.\n\nRule 20-106 (Wiring above hazardous areas):\n1) All fixed wiring above hazardous areas shall be in accordance with Section 12 and suitable for the type of building and occupancy.\n2) For pendants, flexible cord of the hard-usage type shall be used.\n3) For connection of portable luminaires, portable motors, or other portable utilization equipment, flexible cord of the hard-usage type shall be used.',
      fieldScenario:
        'You are wiring a new commercial repair garage that services gasoline and propane vehicles. The garage has a flat concrete floor at grade level.\n\nRule 20-102(1) classifies the entire floor area up to 50 mm above the floor as a Zone 2 location. This means fuel vapours (heavier than air) could settle to the floor. Any receptacles, switches, or equipment mounted within 50 mm of the floor must be rated for Zone 2. Receptacles mounted at standard height (above 50 mm) are in a non-hazardous area.\n\nThe office area adjacent to the repair bay is separated by a 75 mm curb. Rule 20-102(1)(b) says this area is NOT classified as hazardous because the barrier (curb) is at least 50 mm high and tight-fitting.\n\nThe garage has a below-grade inspection pit. Rule 20-102(3) classifies the entire pit as a Zone 2 location extending up to 50 mm above the floor level. If the building has a basement floor below grade, the entire basement is Zone 2 up to 50 mm above the grade-level door openings — unless adequate ventilation is provided, in which case it only extends to 50 mm above the basement floor (Rule 20-102(2)).\n\nAbove the 50 mm Zone 2 boundary, wiring follows standard Section 12 rules (Rule 20-106(1)). However, any pendant lights or portable equipment must use hard-usage type flexible cord (Rules 20-106(2)(3)) — this prevents damage from vehicle contact or workshop use.',
      keyPoints: [
        'Applies to commercial garages where gasoline, propane, or flammable fuel vehicles are serviced or repaired (Rule 20-100)',
        'Floor at or above grade: entire area up to 50 mm above floor = Zone 2 (Rule 20-102(1))',
        'Adjacent areas NOT hazardous if elevated by 50 mm or separated by 50 mm high tight-fitting barriers (Rule 20-102(1)(a)(b))',
        'Floor below grade: Zone 2 up to 50 mm above bottom of grade-level outside doors/openings (Rule 20-102(2))',
        'With adequate ventilation below grade: Zone 2 extends only to 50 mm above the floor (Rule 20-102(2))',
        'Pits and depressions below floor level: Zone 2 extending up to 50 mm above floor level (Rule 20-102(3))',
        'Wiring and equipment within hazardous areas must conform to Section 18 (Rule 20-104)',
        'Fixed wiring above hazardous areas: per Section 12, suitable for building type and occupancy (Rule 20-106(1))',
        'Pendants and portable equipment: hard-usage type flexible cord required (Rules 20-106(2)(3))',
      ],
      diagramaMermaid: `graph TD
    A["Commercial Repair\\nGarage\\n(Rules 20-100 to 20-106)"] --> B["Floor at/above grade:\\n50 mm above floor\\n= Zone 2\\n(Rule 20-102-1)"]
    A --> C["Floor below grade:\\n50 mm above doors\\n= Zone 2\\n(Rule 20-102-2)"]
    A --> D["Pits/depressions:\\nZone 2 to 50 mm\\nabove floor\\n(Rule 20-102-3)"]
    A --> E["Adjacent areas:\\nNOT hazardous if\\n50 mm elevated or\\nbarrier"]
    B --> F["Within Zone 2:\\nSection 18\\n(Rule 20-104)"]
    B --> G["Above Zone 2:\\nSection 12 +\\nhard-usage cord\\n(Rule 20-106)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '50 mm = The Magic Number', note: 'Zone 2 extends only 50 mm above the floor — everything above is non-hazardous — Rule 20-102', color: 'amber' },
        { icon: 'shield', title: 'Curbs Create Safety', note: '50 mm barriers/curbs separate hazardous from non-hazardous areas — Rule 20-102(1)(b)', color: 'emerald' },
        { icon: 'warning', title: 'Pits Are Always Zone 2', note: 'Any pit or depression below floor level is Zone 2 to 50 mm above floor — Rule 20-102(3)', color: 'rose' },
        { icon: 'wire', title: 'Hard-Usage Cord Only', note: 'All pendant lights and portable equipment must use hard-usage flex cord — Rule 20-106(2)(3)', color: 'sky' },
      ],
    },

    // =========================================================================
    // 7. COMMERCIAL REPAIR GARAGES — Sealing, Equipment Above, Battery Charging
    //    (Rules 20-108 to 20-112)
    // =========================================================================
    {
      id: '20-garages-sealing-equipment',
      title: 'Commercial Repair Garages — Sealing, Equipment Above & Battery Charging',
      rules: 'Rules 20-108 to 20-112',
      explanation:
        'These rules complete the commercial repair garage requirements covering sealing, equipment above hazardous areas, and battery charging.\n\nRule 20-108 (Sealing):\n1) Seals shall be installed as required by Section 18, and the requirements of Rule 18-154(1)(b) shall include horizontal and vertical boundaries.\n2) Raceways embedded in a floor or buried beneath a floor shall be considered to be within the hazardous area above the floor if any connections or extensions lead into or through such an area.\n\nRule 20-110 (Equipment above hazardous areas):\n1) Fixed equipment that is less than 3.6 m above floor level and that may produce arcs, sparks, or particles of hot metal — such as cut-outs, switches, charging panels, generators, motors, or other equipment (excluding receptacles and luminaires) having make-and-break or sliding contacts — shall be of the totally enclosed type or constructed to prevent escape of sparks or hot metal particles.\n2) Permanently installed luminaires that are located over lanes through which vehicles are commonly driven shall be permitted to be suitable for non-hazardous locations and shall be:\n(a) located not less than 3.6 m above floor level; OR\n(b) protected from mechanical damage by a guard or by location.\n3) Portable luminaires shall:\n(a) be of the totally enclosed gasketted type, equipped with a handle, lampholder, hook, and substantial guard attached to the lampholder or handle, and all exterior surfaces that may come in contact with battery terminals, wiring terminals, or other objects shall be of non-conducting materials or shall be effectively protected with an insulating material;\n(b) be of the unswitched type; AND\n(c) not be provided with receptacles for attachment plugs.\n\nRule 20-112 (Battery charging equipment): Battery chargers and their control equipment, and batteries being charged, shall not be located within the hazardous areas classified in Rule 20-102.',
      fieldScenario:
        'You are completing the electrical installation in a commercial repair garage.\n\nConduit runs are embedded in the concrete floor slab. Rule 20-108(2) is critical here: even though the conduit is below the floor, because it has connections or extensions that lead into the Zone 2 area above the floor, the embedded raceway is considered to be within the hazardous area. This means seals are required per Section 18.\n\nThe garage owner wants to install a disconnect switch at 2.5 m height near the service bay. Rule 20-110(1) requires that any arc-producing equipment below 3.6 m (such as switches) must be totally enclosed or constructed to prevent spark escape. The switch must be in a totally enclosed enclosure.\n\nHe also wants overhead fluorescent lights at 3 m height over the vehicle lane. Rule 20-110(2) says luminaires over drive lanes must be at least 3.6 m above the floor OR protected from mechanical damage. At 3 m, they need guards or protective positioning.\n\nA mechanic uses a portable trouble light. Rule 20-110(3) specifies strict requirements: the light must be totally enclosed and gasketted with a handle, guard, and hook. It must be unswitched (no on/off switch on the light itself) and must have no receptacles for plugs. All exterior surfaces must be non-conducting or insulated.\n\nThe battery charging station needs to be located outside the Zone 2 area per Rule 20-112. This means battery chargers cannot be placed within 50 mm of the floor in the service area, and ideally should be in a separate room or elevated area.',
      keyPoints: [
        'Seals per Section 18, including Rule 18-154(1)(b) applied to horizontal AND vertical boundaries (Rule 20-108(1))',
        'Floor-embedded raceways with connections into hazardous area = considered within hazardous area (Rule 20-108(2))',
        'Arc-producing equipment below 3.6 m: must be totally enclosed or prevent spark escape (Rule 20-110(1))',
        'Excludes receptacles and luminaires from the 3.6 m rule (Rule 20-110(1))',
        'Luminaires over drive lanes: at least 3.6 m above floor OR protected from mechanical damage (Rule 20-110(2))',
        'Portable luminaires: totally enclosed, gasketted, with handle/hook/guard, non-conducting exterior surfaces (Rule 20-110(3)(a))',
        'Portable luminaires must be unswitched type — no on/off switch on the unit (Rule 20-110(3)(b))',
        'Portable luminaires must NOT have receptacles for attachment plugs (Rule 20-110(3)(c))',
        'Battery chargers, control equipment, and batteries being charged shall NOT be in hazardous areas (Rule 20-112)',
      ],
      diagramaMermaid: `graph TD
    A["Commercial Garage\\nEquipment Rules\\n(Rules 20-108 to 20-112)"] --> B["Sealing:\\nFloor raceways =\\nhazardous if connected\\nto haz area\\n(Rule 20-108)"]
    A --> C["Equipment < 3.6 m:\\nTotally enclosed\\nor spark-proof\\n(Rule 20-110-1)"]
    A --> D["Drive Lane Lights:\\n>= 3.6 m high OR\\nmechanically protected\\n(Rule 20-110-2)"]
    A --> E["Portable Lights:\\nEnclosed + gasketted\\nunswitched, no plugs\\n(Rule 20-110-3)"]
    A --> F["Battery Charging:\\nNOT in hazardous\\nareas\\n(Rule 20-112)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '3.6 m Threshold', note: 'Arc-producing equipment below 3.6 m must be totally enclosed — Rule 20-110(1)', color: 'amber' },
        { icon: 'lock', title: 'Floor Raceways Beware', note: 'Embedded conduit connected to haz area IS within hazardous area — Rule 20-108(2)', color: 'rose' },
        { icon: 'inspect', title: 'Portable Light Rules', note: 'Totally enclosed, gasketted, unswitched, no receptacles, insulated surfaces — Rule 20-110(3)', color: 'violet' },
        { icon: 'warning', title: 'No Battery Charging in Haz Areas', note: 'Chargers, controls, and batteries being charged kept OUT of Zone 2 — Rule 20-112', color: 'sky' },
      ],
    },

    // =========================================================================
    // 8. BULK STORAGE PLANTS (Rules 20-200 to 20-212)
    // =========================================================================
    {
      id: '20-bulk-storage',
      title: 'Bulk Storage Plants',
      rules: 'Rules 20-200 to 20-212',
      explanation:
        'This subsection applies to bulk storage plants — locations where gasoline or other similar volatile flammable liquids are stored in tanks having an aggregate capacity of one carload or more, and from which such products are distributed (usually by tank truck).\n\nRule 20-200 (Scope): Rules 20-202 to 20-212 apply to locations where gasoline or other similar volatile flammable liquids are stored in tanks having an aggregate capacity of one carload or more, and from which such products are distributed (usually by tank truck).\n\nRule 20-202 (Hazardous areas): Hazardous locations at bulk storage plants shall be classified as shown in Table 69.\n\nRule 20-204 (Wiring and equipment in hazardous areas): All electrical wiring and equipment in the hazardous areas defined in Rule 20-202 shall conform to the requirements of Section 18.\n\nRule 20-206 (Wiring and equipment above hazardous areas):\n1) Wiring installed above a hazardous location shall conform to the requirements of Section 12 and be suitable for the type of building and the occupancy.\n2) Fixed equipment that may produce arcs, sparks, or particles of hot metal — such as lamps and lampholders, cut-outs, switches, receptacles, motors, or other equipment having make-and-break or sliding contacts — shall be of the totally enclosed type or constructed to prevent the escape of sparks or hot metal particles.\n3) Portable lamps or utilization equipment and the flexible cords supplying them shall conform to the requirements of Section 18 for the class of location above which they are connected or used.\n\nRule 20-208 (Sealing):\n1) Seals shall be installed in accordance with Section 18 and shall be applied to horizontal as well as vertical boundaries of the defined hazardous locations.\n2) Buried raceways under defined hazardous areas shall be considered to be within such areas.\n\nRule 20-210 (Gasoline dispensing): Where gasoline dispensing is carried on in conjunction with bulk station operations, the applicable provisions of Rules 20-002 to 20-014 shall apply.\n\nRule 20-212 (Bonding): All non-current-carrying metal parts of equipment and raceways shall be bonded to ground in accordance with Section 10.',
      fieldScenario:
        'You are installing electrical equipment at a bulk fuel storage terminal that has 12 large tanks holding gasoline and diesel, with truck loading facilities.\n\nRule 20-200 confirms this is a bulk storage plant because the aggregate tank capacity exceeds one carload. Rule 20-202 directs you to Table 69 for the hazardous area classifications — this table defines the zone boundaries around tanks, loading racks, vents, and pump stations.\n\nAll wiring within the hazardous areas must comply with Section 18 (Rule 20-204). Wiring above hazardous areas follows Section 12 (Rule 20-206(1)), but there is an important difference from commercial garages: Rule 20-206(2) requires that ALL fixed arc-producing equipment above hazardous areas (including lamps, lampholders, switches, receptacles, and motors) must be totally enclosed or spark-proof — there is no 3.6 m height exemption like in garages.\n\nPortable lamps and their cords must conform to Section 18 for the class of location above which they are used (Rule 20-206(3)). This is stricter than the garage rules because bulk storage areas have higher vapour concentrations.\n\nBuried raceways under the hazardous area are considered WITHIN the hazardous area (Rule 20-208(2)) — this is critical for underground conduit runs between tanks.\n\nThe terminal also has a truck fuel dispensing island. Rule 20-210 says the gasoline dispensing rules (20-002 to 20-014) apply to this area, overlaying the bulk storage rules.',
      keyPoints: [
        'Applies to bulk flammable liquid storage with aggregate capacity of one carload or more, distributed by tank truck (Rule 20-200)',
        'Hazardous areas classified per Table 69 (Rule 20-202)',
        'All wiring and equipment in hazardous areas must conform to Section 18 (Rule 20-204)',
        'Wiring above hazardous areas: per Section 12, suitable for building type and occupancy (Rule 20-206(1))',
        'ALL fixed arc-producing equipment above hazardous areas must be totally enclosed or spark-proof — NO height exemption (Rule 20-206(2))',
        'Portable lamps and cords above hazardous areas: must conform to Section 18 for the location class (Rule 20-206(3))',
        'Seals per Section 18 applied to horizontal AND vertical boundaries (Rule 20-208(1))',
        'Buried raceways under hazardous areas = considered WITHIN hazardous areas (Rule 20-208(2))',
        'Gasoline dispensing at bulk stations: Rules 20-002 to 20-014 apply (Rule 20-210)',
        'All non-current-carrying metal parts bonded to ground per Section 10 (Rule 20-212)',
      ],
      diagramaMermaid: `graph TD
    A["Bulk Storage Plants\\n(Rules 20-200 to 20-212)"] --> B["Hazardous Areas\\nPer Table 69\\n(Rule 20-202)"]
    A --> C["Within Haz Areas:\\nSection 18\\n(Rule 20-204)"]
    A --> D["Above Haz Areas:\\nSection 12 +\\nTotally Enclosed\\n(Rule 20-206)"]
    A --> E["Sealing: Horiz +\\nVertical + Buried\\nraceways = within\\n(Rule 20-208)"]
    A --> F["Gasoline Dispensing:\\nRules 20-002\\nto 20-014\\n(Rule 20-210)"]
    A --> G["Bonding:\\nPer Section 10\\n(Rule 20-212)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Table 69 = Bulk Storage Zones', note: 'Tank farms, loading racks, vents, pump stations classified per Table 69 — Rule 20-202', color: 'amber' },
        { icon: 'warning', title: 'No Height Exemption', note: 'ALL arc-producing equipment above haz areas must be enclosed — no 3.6 m rule — Rule 20-206(2)', color: 'rose' },
        { icon: 'lock', title: 'Buried Raceways = Hazardous', note: 'Underground conduit under haz areas is within the hazardous area — Rule 20-208(2)', color: 'violet' },
        { icon: 'link', title: 'Dispensing Rules Overlay', note: 'If gasoline is dispensed at the bulk station, Rules 20-002 to 20-014 also apply — Rule 20-210', color: 'sky' },
      ],
    },

    // =========================================================================
    // 9. FINISHING PROCESSES — Scope, Hazardous Locations & Ventilation
    //    (Rules 20-300 to 20-304)
    // =========================================================================
    {
      id: '20-finishing-hazardous',
      title: 'Finishing Processes — Scope, Hazardous Locations & Ventilation',
      rules: 'Rules 20-300 to 20-304',
      explanation:
        'This subsection covers finishing processes — areas where paints, lacquers, or other flammable finishes are applied by spraying, dipping, brushing, or other means, and where volatile flammable solvents or thinners are used or where readily ignitable deposits or residues may occur.\n\nRule 20-300 (Scope): Rules 20-302 to 20-314 apply where paints, lacquers, or other flammable finishes are regularly or frequently applied by spraying, dipping, brushing, or by other means, and where volatile flammable solvents or thinners are used or where readily ignitable deposits or residues from such paints, lacquers, or finishes may occur.\n\nRule 20-302 (Hazardous locations): This is one of the most detailed rules in Section 20, covering nine subrules:\n\n1) Zone 1 locations include:\n(a) where adequate ventilation is provided, the interiors of spray booths and their exhaust ducts;\n(b) all space within 6 m horizontally from goods to be painted, extending to a height of 1 m above the goods, from spraying operations more extensive than touch-up spraying and not conducted within the spray booth (see Diagram 5);\n(c) all space within 6 m horizontally from dip tanks and their drain boards with the space extending to a height of 1 m above the dip tank and drain board;\n(d) all other spaces where hazardous concentrations of flammable vapours are likely to occur.\n\n2) For open-face spray booths, the Zone 2 location extends not less than 1.5 m from the open face (see Diagram 4).\n\n3) For closed spray booths or rooms, and paint mixing rooms, the space within 1 m in all directions from any openings shall be a Zone 2 location.\n\n4) All space within the room but beyond Zone 1 limits for extensive open spraying (Subrule 1) and for dip tanks (Diagram 5), shall be Zone 2.\n\n5) Adjacent areas cut off by tight partitions without communicating openings and within which hazardous vapours are not likely to be released shall be permitted to be classed as non-hazardous.\n\n6) Drying and baking areas with adequate ventilation and effective interlocks to de-energize all non-classified electrical equipment if ventilation fails shall be permitted to be classed as non-hazardous.\n\n7) Where adequate ventilation with effective interlocks is provided at floor level (see Diagram 6):\n(a) the space within 1 m horizontally in any direction from the goods and 1 m above the goods shall be Zone 1;\n(b) the space between 1 m and 1.5 m above goods and 6 m horizontally beyond Zone 1 limits shall be Zone 2.\n\n8) A baffle of sheet metal (not less than No. 18 MSG) installed vertically above the front face of an open-face spray booth to a height of 1 m (or to ceiling), extending back 1.5 m on the side edges, shall make the space behind the baffle non-hazardous.\n\n9) A baffle of sheet metal (not less than No. 18 MSG) installed vertically above an opening in a closed spray booth or room to a height of 1 m (or to ceiling), extending horizontally 1 m beyond each side of the opening, shall make the space behind the baffle non-hazardous.\n\nRule 20-304 (Ventilation and spraying equipment interlock): The spraying equipment for a spray booth SHALL be interlocked with the spray booth ventilation system so that the spraying equipment is made inoperable when the ventilation system is not in operation.',
      fieldScenario:
        'You are installing electrical equipment in an automotive body shop with a spray painting booth and a dip tank area.\n\nThe spray booth has adequate ventilation. Rule 20-302(1)(a) classifies the interior of the booth and its exhaust ducts as Zone 1. The booth is an open-face design, so Rule 20-302(2) extends a Zone 2 area at least 1.5 m from the open face — any electrical equipment within that 1.5 m must be Zone 2 rated.\n\nIn the main shop, a technician occasionally does extensive spray painting outside the booth. Rule 20-302(1)(b) creates a Zone 1 area within 6 m horizontally and 1 m above the goods being painted. Rule 20-302(4) classifies all remaining space in the room as Zone 2.\n\nThe dip tank area has the same 6 m horizontal, 1 m vertical Zone 1 classification per Rule 20-302(1)(c).\n\nA paint mixing room with a door opening has a Zone 2 area extending 1 m from the doorway in all directions per Rule 20-302(3).\n\nThe shop owner has installed a sheet metal baffle (No. 18 MSG) above the spray booth opening, extending up 1 m and back 1.5 m on each side. Rule 20-302(8) allows the space behind this baffle to be classified as non-hazardous — this is where you can safely install standard electrical panels.\n\nCritically, Rule 20-304 requires that the spray gun system be interlocked with the ventilation — if the ventilation fan stops, the spray equipment must automatically shut off. This is mandatory, not optional.',
      keyPoints: [
        'Applies where flammable finishes are regularly/frequently applied by spraying, dipping, brushing, etc. (Rule 20-300)',
        'Spray booth interiors and exhaust ducts with adequate ventilation = Zone 1 (Rule 20-302(1)(a))',
        'Extensive spraying outside booth: 6 m horizontal, 1 m above goods = Zone 1 (Rule 20-302(1)(b))',
        'Dip tanks: 6 m horizontal, 1 m above tank and drain board = Zone 1 (Rule 20-302(1)(c))',
        'Open-face spray booth: Zone 2 extends at least 1.5 m from the open face (Rule 20-302(2))',
        'Closed spray booth/paint mixing room: Zone 2 within 1 m of any opening (Rule 20-302(3))',
        'Room space beyond Zone 1 for open spraying and dip tanks = Zone 2 (Rule 20-302(4))',
        'Adjacent areas with tight partitions and no communicating openings = non-hazardous (Rule 20-302(5))',
        'Drying/baking areas with ventilation + interlocks to de-energize on vent failure = non-hazardous (Rule 20-302(6))',
        'Baffle: No. 18 MSG sheet metal, 1 m high (or to ceiling) — space behind baffle = non-hazardous (Rules 20-302(8)(9))',
        'Spray equipment SHALL be interlocked with ventilation — spraying inoperable when ventilation is off (Rule 20-304)',
      ],
      diagramaMermaid: `graph TD
    A["Finishing Processes\\nHazardous Locations\\n(Rule 20-302)"] --> B["Zone 1:\\nSpray booth interior\\n+ exhaust ducts\\n(Subrule 1a)"]
    A --> C["Zone 1:\\n6 m from goods /\\ndip tanks, 1 m high\\n(Subrule 1b,c)"]
    A --> D["Zone 2:\\n1.5 m from open\\nface of booth\\n(Subrule 2)"]
    A --> E["Zone 2:\\n1 m from openings\\nof closed booth\\n(Subrule 3)"]
    A --> F["Non-hazardous:\\nTight partitions\\nno openings\\n(Subrule 5)"]
    A --> G["Non-hazardous:\\nBehind baffle\\nNo. 18 MSG\\n(Subrules 8,9)"]
    H["Rule 20-304"] --> I["Spray equipment\\nINTERLOCKED with\\nventilation system"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style I fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Spray Booth = Zone 1', note: 'Interior and exhaust ducts with adequate ventilation — Rule 20-302(1)(a)', color: 'rose' },
        { icon: 'ruler', title: '6 m and 1 m', note: 'Zone 1 extends 6 m horizontal and 1 m above goods/dip tanks — Rule 20-302(1)(b)(c)', color: 'amber' },
        { icon: 'shield', title: 'Baffles Create Safety', note: 'No. 18 MSG sheet metal baffle makes space behind non-hazardous — Rule 20-302(8)(9)', color: 'emerald' },
        { icon: 'bolt', title: 'Mandatory Interlock', note: 'Spray equipment MUST stop when ventilation stops — Rule 20-304', color: 'violet' },
      ],
    },

    // =========================================================================
    // 10. FINISHING PROCESSES — Wiring, Equipment, Electrostatic (Rules 20-306 to 20-314)
    // =========================================================================
    {
      id: '20-finishing-wiring-equipment',
      title: 'Finishing Processes — Wiring, Equipment & Electrostatic Systems',
      rules: 'Rules 20-306 to 20-314',
      explanation:
        'These rules cover the wiring, equipment, electrostatic painting systems, and bonding requirements for finishing process locations.\n\nRule 20-306 (Wiring and equipment in hazardous areas):\n1) All electrical wiring and equipment within the hazardous areas as defined in Rule 20-302 shall conform to Section 18.\n2) Unless designed for both areas with readily ignitable deposits AND flammable vapour, no electrical equipment shall be installed or used where it may be subject to a hazardous accumulation of readily ignitable deposits or residue.\n3) Illumination of readily ignitable areas through panels of glass or other transparent/translucent materials is permitted only where:\n(a) fixed lighting units are used;\n(b) the panel is non-combustible and effectively isolates the hazardous area;\n(c) the panel is protected so breakage is unlikely; AND\n(d) the arrangement does not raise the panel surface temperature to a dangerous level by radiation or conduction.\n4) Portable electric lamps or other utilization equipment shall:\n(a) not be used within a hazardous area during operation of the finishing process; AND\n(b) meet the requirements for Zone 2 locations when used during cleaning or repairing.\n5) Notwithstanding Subrule 2):\n(a) totally enclosed and gasketted lighting is permitted on the ceiling of a spray room where adequate ventilation is provided;\n(b) infrared paint drying units may be used in a spray room if interlocked with spraying equipment so both operations cannot be performed simultaneously, and if portable, the drying unit shall not be brought in until spraying operations have ceased.\n\nRule 20-308 (Fixed electrostatic equipment): Electrostatic spraying and detearing equipment shall conform to detailed requirements:\n(a) No transformers, power packs, or control apparatus in hazardous areas unless classified for those areas;\n(b) High-voltage grids/electrodes: in non-combustible booths/enclosures with adequate ventilation, rigidly supported, and insulated from ground by non-porous, non-combustible insulators;\n(c) High-voltage leads: permanently supported on suitable insulators, guarded against accidental contact/grounding, and provided with automatic discharge-to-ground when supply voltage is interrupted;\n(d) Goods on conveyors: minimum clearance between goods and high-voltage grids must be at least twice the sparking distance, with conspicuous signs posted;\n(e) Automatic controls to disconnect power and signal operator for: stoppage of ventilating fans, failure of ventilating equipment, conveyor stoppage through high-voltage field, ground occurrence/imminent ground on high-voltage system, or reduction of clearance;\n(f) Adequate fencing, railings, or guards — electrically conducting, bonded to ground, with permanent danger signs.\n\nRule 20-310 (Electrostatic hand spraying equipment): Hand-held electrostatic spray apparatus must meet requirements:\n(a) High-voltage circuits: intrinsically safe, no sparks of sufficient intensity to ignite vapour-air mixtures;\n(b) Charged elements of the gun: energized only by a switch that also controls paint supply;\n(c) Transformers, power packs, all electrical portions (except the gun itself) located outside the hazardous area;\n(d) Gun handle: bonded to ground by metallic connection, designed for intimate electrical contact with the operator;\n(e) All conductive objects in the spraying area: bonded to ground, with prominent warning signs;\n(f) Precautions for metallic contact of objects with conveyor (clean hooks, sharp contact areas, concealed support points);\n(g) Spraying in adequately ventilated area, interlocked so equipment cannot operate unless ventilation is running.\n\nRule 20-312 (Wiring and equipment above hazardous areas):\n1) All fixed wiring above hazardous areas shall conform to Section 12.\n2) Equipment that may produce arcs, sparks, or hot metal particles — lamps, lampholders, switches, receptacles, motors, etc. — where installed above a hazardous area or above an area where freshly finished goods are handled, shall be of the totally enclosed type or constructed to prevent escape of sparks or hot metal particles.\n\nRule 20-314 (Bonding): All metal raceways and all non-current-carrying metal portions of fixed or portable equipment, regardless of voltage, shall be bonded to ground in accordance with Section 10.',
      fieldScenario:
        'You are wiring an industrial paint finishing facility with spray booths, an electrostatic painting line, and a drying oven.\n\nIn the spray booth (Zone 1), Rule 20-306(1) requires all wiring per Section 18. Rule 20-306(2) adds another layer: even if equipment is rated for Zone 1 for vapours, it still cannot be used if it will accumulate ignitable paint deposits — it must be rated for both hazards.\n\nThe booth has a viewing window. Rule 20-306(3) permits illumination through a glass panel, but the glass must be non-combustible, effectively isolate the hazardous area, be protected against breakage, and not create dangerous surface temperatures from the lights.\n\nA painter asks to bring a portable trouble light into the booth. Rule 20-306(4)(a) says NO — portable electric lamps cannot be used in the hazardous area while the finishing process is operating. They can only be used for cleaning/repair, and then must meet Zone 2 requirements.\n\nThe electrostatic painting line uses fixed high-voltage equipment. Rule 20-308(e) requires automatic controls that will disconnect power if ventilation fans stop, if the conveyor stops in the high-voltage field, if a ground fault occurs, or if clearance is reduced below twice the sparking distance. Signs must be posted indicating sparking distance (Rule 20-308(d)).\n\nFor the hand-held electrostatic spray guns, Rule 20-310(d) requires the gun handle to have a metallic bond to ground providing intimate electrical contact with the operator — this prevents static charge buildup on the operator. Rule 20-310(c) requires all transformers and power packs to be located outside the hazardous area.\n\nAbove the hazardous area, all arc-producing equipment must be totally enclosed (Rule 20-312(2)) — this includes the area above where freshly finished goods are handled, not just above the spray booth itself.',
      keyPoints: [
        'All wiring and equipment in hazardous areas per Section 18 (Rule 20-306(1))',
        'Equipment must be suitable for BOTH ignitable deposits AND flammable vapour if both hazards exist (Rule 20-306(2))',
        'Illumination through glass panels: fixed lighting, non-combustible panel, protected from breakage, safe temperature (Rule 20-306(3))',
        'Portable lamps NOT allowed during finishing process operation — Zone 2 rated for cleaning/repair only (Rule 20-306(4))',
        'Totally enclosed gasketted lighting permitted on spray room ceiling with adequate ventilation (Rule 20-306(5)(a))',
        'Infrared dryers in spray room: interlocked with spray equipment, not brought in until spraying has ceased (Rule 20-306(5)(b))',
        'Electrostatic equipment: automatic power disconnect on vent failure, conveyor stop, ground fault, or clearance reduction (Rule 20-308(e))',
        'Minimum clearance between goods and high-voltage grids: at least twice the sparking distance (Rule 20-308(d))',
        'Electrostatic hand spray: gun handle bonded to ground for operator contact, intrinsically safe high-voltage circuit (Rule 20-310(a)(d))',
        'All electrical portions of hand spray (except gun) located outside hazardous area (Rule 20-310(c))',
        'Wiring above hazardous areas: Section 12, arc-producing equipment totally enclosed (Rule 20-312)',
        'All metal raceways and non-current-carrying metal parts bonded to ground per Section 10 — regardless of voltage (Rule 20-314)',
      ],
      diagramaMermaid: `graph TD
    A["Finishing Processes\\nWiring & Equipment\\n(Rules 20-306 to 20-314)"] --> B["In Haz Areas:\\nSection 18 +\\nsuitable for deposits\\n(Rule 20-306)"]
    A --> C["Fixed Electrostatic:\\nauto disconnect,\\nmin clearance 2x\\nsparking distance\\n(Rule 20-308)"]
    A --> D["Hand Electrostatic:\\nIS high-voltage,\\ngun bonded to ground\\n(Rule 20-310)"]
    A --> E["Above Haz Areas:\\nSection 12 +\\ntotally enclosed\\n(Rule 20-312)"]
    A --> F["Bonding: ALL\\nmetal parts,\\nregardless of voltage\\n(Rule 20-314)"]
    C --> C1["Auto controls:\\nvent failure, conveyor\\nstop, ground fault"]
    D --> D1["Power packs\\nOUTSIDE haz area"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Dual Hazard', note: 'Equipment must handle both ignitable deposits AND flammable vapour — Rule 20-306(2)', color: 'rose' },
        { icon: 'bolt', title: 'Auto Disconnect Required', note: 'Electrostatic equipment auto-disconnects on vent failure, conveyor stop, ground fault — Rule 20-308(e)', color: 'amber' },
        { icon: 'neutral', title: 'Gun Handle = Ground Bond', note: 'Electrostatic spray gun handle bonded to ground for operator contact — Rule 20-310(d)', color: 'emerald' },
        { icon: 'inspect', title: 'No Portable Lights During Spraying', note: 'Portable lamps prohibited during finishing operations — Rule 20-306(4)(a)', color: 'violet' },
        { icon: 'lock', title: 'Bond Regardless of Voltage', note: 'ALL metal parts bonded to ground regardless of voltage — Rule 20-314', color: 'sky' },
      ],
    },

    // =========================================================================
    // 11. AIRCRAFT HANGARS — Scope, Hazardous Areas & Wiring (Rules 20-400 to 20-406)
    // =========================================================================
    {
      id: '20-hangars-hazardous-wiring',
      title: 'Aircraft Hangars — Scope, Hazardous Areas & Wiring',
      rules: 'Rules 20-400 to 20-406',
      explanation:
        'This subsection applies to aircraft hangars — locations used for storage or servicing of aircraft in which gasoline, jet fuels or other volatile flammable liquids, or flammable gases are used. It does NOT include locations used exclusively for aircraft that have never contained such liquids or gases, or that have been drained and properly purged.\n\nRule 20-400 (Scope): Rules 20-402 to 20-422 apply to locations used for storage or servicing of aircraft in which gasoline, jet fuels, or other volatile flammable liquids or flammable gases are used. Excluded are locations used exclusively for aircraft that have never contained such substances or that have been drained and properly purged.\n\nRule 20-402 (Hazardous areas):\n1) Any pit or depression below the level of the hangar floor shall be a Zone 1 location that extends up to the floor level. This is the ONLY Zone 1 area in aircraft hangars — it is more restrictive than the Zone 2 classification of garage pits because aircraft fuels are more volatile.\n2) The entire area of the hangar, including any adjacent and communicating areas not suitably cut off from the hangar, shall be a Zone 2 location up to a level 450 mm above the floor.\n3) The area within 1.5 m horizontally from aircraft power plants, aircraft fuel tanks, or aircraft structures containing fuel shall be a Zone 2 location that extends upward from the floor to a level 1.5 m above the upper surface of wings and of engine enclosures.\n4) Adjacent areas in which hazardous vapours are not likely to be released — stock rooms, electrical control rooms, and similar locations — shall be permitted to be classed as non-hazardous when adequately ventilated and when effectively cut off from the hangar itself in accordance with Rule 18-058.\n\nRule 20-404 (Wiring and equipment in hazardous areas):\n1) All fixed and portable wiring and equipment that is or may be installed or operated within any of the hazardous locations defined in Rule 20-402 shall conform to Section 18.\n2) All wiring installed in or under the hangar floor shall conform to the requirements for Zone 1 locations.\n3) Wiring systems installed in pits, or other spaces in or under the hangar floor, shall be provided with adequate drainage and shall not be placed in the same compartment with any other service except piped compressed air.\n4) Attachment plugs and receptacles in hazardous locations shall be explosion-proof, or shall be designed so that they cannot be energized while the connections are being made or broken.\n\nRule 20-406 (Wiring not within hazardous areas):\n1) All fixed wiring in a hangar not within a hazardous area as defined in Rule 20-402 shall be installed in metal raceways or shall be armoured cable, Type MI cable, aluminum-sheathed cable, or copper-sheathed cable, except that wiring in a non-hazardous location as set out in Rule 20-402(4) shall be permitted to be of any type recognized in Section 12 as suitable for the type of building and the occupancy.\n2) For pendants, flexible cord of the hard-usage type and containing a separate bonding conductor shall be used.\n3) For portable utilization equipment and lamps, flexible cord of the hard-usage type and containing a separate bonding conductor shall be used.\n4) Suitable means shall be provided for maintaining continuity and adequacy of the bonding between the fixed wiring system and the non-current-carrying metal portions of pendant luminaires, portable lamps, and other portable utilization equipment.',
      fieldScenario:
        'You are installing electrical systems in a new aircraft maintenance hangar. This hangar will service jet aircraft that use Jet-A fuel.\n\nFirst, check Rule 20-400 — this hangar qualifies because it services aircraft using volatile flammable liquids. If it were a hangar exclusively for electric aircraft that never had fuel, these rules would not apply.\n\nThe hangar floor has drainage trenches and a pit for landing gear access. Rule 20-402(1) classifies pits and depressions below floor level as Zone 1 — this is more restrictive than the Zone 2 classification for commercial garages because aviation fuels are more volatile and heavier-than-air vapours accumulate in low points.\n\nThe entire hangar floor area up to 450 mm above the floor is Zone 2 per Rule 20-402(2), including adjacent hallways and corridors that are not properly cut off from the hangar space.\n\nWhen an aircraft is parked inside, Rule 20-402(3) creates a Zone 2 envelope extending 1.5 m horizontally from fuel tanks, engines, and fuel-containing structures, reaching 1.5 m above the wings and engine enclosures. This dynamic zone moves with each aircraft.\n\nThe adjacent electrical room is classified non-hazardous per Rule 20-402(4) because it is adequately ventilated and effectively cut off from the hangar per Rule 18-058.\n\nAll wiring in or under the floor must meet Zone 1 requirements (Rule 20-404(2)) — not just Zone 2. The pit wiring system must have drainage and cannot share space with anything except compressed air piping (Rule 20-404(3)).\n\nEven in the non-hazardous areas above 450 mm in the hangar, Rule 20-406(1) requires metal raceways, armoured cable, MI cable, or metal-sheathed cable — standard NMD cable is NOT permitted in the hangar (except in properly cut-off rooms per Rule 20-402(4)).\n\nAll pendant and portable cords must be hard-usage type WITH a separate bonding conductor (Rules 20-406(2)(3)).',
      keyPoints: [
        'Applies to hangars for aircraft using gasoline, jet fuels, or flammable gases — NOT for fuel-free aircraft (Rule 20-400)',
        'Pits and depressions below hangar floor = Zone 1 extending to floor level (Rule 20-402(1))',
        'Entire hangar floor area up to 450 mm = Zone 2, including communicating areas not cut off (Rule 20-402(2))',
        '1.5 m horizontally from aircraft fuel tanks/engines/fuel structures = Zone 2 extending to 1.5 m above wings and engine enclosures (Rule 20-402(3))',
        'Adjacent stock rooms, electrical rooms = non-hazardous if ventilated and cut off per Rule 18-058 (Rule 20-402(4))',
        'All wiring in or under hangar floor = Zone 1 requirements (Rule 20-404(2))',
        'Pit wiring: adequate drainage, no sharing with other services except piped compressed air (Rule 20-404(3))',
        'Plugs and receptacles in hazardous areas: explosion-proof OR cannot be energized during connection/disconnection (Rule 20-404(4))',
        'Non-hazardous hangar areas: metal raceways, armoured cable, MI, AL-sheathed, or Cu-sheathed cable required (Rule 20-406(1))',
        'Pendant and portable cords: hard-usage type WITH separate bonding conductor (Rules 20-406(2)(3))',
        'Bonding continuity must be maintained between fixed wiring and portable/pendant equipment (Rule 20-406(4))',
      ],
      diagramaMermaid: `graph TD
    A["Aircraft Hangars\\n(Rules 20-400 to 20-406)"] --> B["Pits/Depressions:\\nZone 1 to\\nfloor level\\n(Rule 20-402-1)"]
    A --> C["Entire Hangar:\\nZone 2 up to\\n450 mm above floor\\n(Rule 20-402-2)"]
    A --> D["Near Aircraft:\\n1.5 m from fuel\\ntanks/engines,\\n1.5 m above wings\\n= Zone 2\\n(Rule 20-402-3)"]
    A --> E["Adjacent rooms:\\nNon-hazardous if\\nventilated + cut off\\n(Rule 20-402-4)"]
    F["Wiring"] --> G["In/Under floor:\\nZone 1 rules\\n(Rule 20-404-2)"]
    F --> H["Non-haz hangar:\\nMetal raceway /\\narmoured / MI only\\n(Rule 20-406-1)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Hangar Pits = Zone 1', note: 'More restrictive than garage pits (Zone 2) due to aviation fuel volatility — Rule 20-402(1)', color: 'rose' },
        { icon: 'ruler', title: '450 mm Floor Zone', note: 'Entire hangar floor area is Zone 2 to 450 mm above floor — Rule 20-402(2)', color: 'amber' },
        { icon: 'shield', title: 'Aircraft Envelope', note: '1.5 m from fuel tanks/engines, 1.5 m above wings = Zone 2 — Rule 20-402(3)', color: 'sky' },
        { icon: 'wire', title: 'No NMD in Hangars', note: 'Metal raceways or armoured/MI/sheathed cable required — no NMD — Rule 20-406(1)', color: 'violet' },
        { icon: 'neutral', title: 'Bonding Conductor Required', note: 'All pendant and portable cords must include a separate bonding conductor — Rule 20-406(2)(3)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 12. AIRCRAFT HANGARS — Equipment, Stanchions, Sealing, Batteries, Power Sources
    //     (Rules 20-408 to 20-422)
    // =========================================================================
    {
      id: '20-hangars-equipment-sealing',
      title: 'Aircraft Hangars — Equipment, Stanchions, Sealing, Batteries & Power Sources',
      rules: 'Rules 20-408 to 20-422',
      explanation:
        'These rules complete the aircraft hangar requirements covering equipment in non-hazardous areas, stanchions, sealing, aircraft electrical systems, battery charging, external power sources, mobile servicing equipment, and bonding.\n\nRule 20-408 (Equipment not within hazardous areas):\n1) In locations other than those described in Rule 20-402, equipment that is less than 3 m above wings and engine enclosures of aircraft and that may produce arcs, sparks, or hot metal — such as lamps, lampholders, switches, receptacles, charging panels, generators, motors, etc. — shall be totally enclosed or constructed to prevent spark escape. Exception: equipment in non-hazardous areas per Rule 20-402(4) may be of the general-purpose type.\n2) Lampholders of the metal shell, fibre-lined type shall NOT be used for fixed lighting.\n3) Portable lamps used in a hangar shall comply with Rule 18-100.\n4) Portable utilization equipment that is, or may be, used within a hangar shall be of a type suitable for use in Zone 2 locations.\n\nRule 20-410 (Stanchions, rostrums, and docks):\n1) Electrical wiring, outlets, and equipment on stanchions, rostrums, or docks that are located or likely to be located in a hazardous area as defined in Rule 20-402(3) shall conform to Zone 2 requirements.\n2) Where stanchions, rostrums, and docks are NOT located in a hazardous area per Rule 20-402(3), wiring and equipment shall conform to Rules 20-406 and 20-408, except: (a) receptacles and attachment plugs shall be of the locking type that will not break apart readily; AND (b) wiring and equipment not more than 450 mm above the floor in any position shall conform to Subrule 1) (Zone 2 requirements).\n3) Mobile stanchions with electrical equipment per Subrule 2) shall carry at least one permanently affixed warning sign stating that stanchions are to be kept 1.5 m clear of aircraft engines and fuel tank areas.\n\nRule 20-412 (Sealing):\n1) Seals shall be installed in accordance with Section 18 and shall apply to horizontal as well as to vertical boundaries of the defined hazardous areas.\n2) Raceways embedded in a masonry floor or buried beneath a floor shall be considered to be within the hazardous area above the floor when any connections or extensions lead into or through the hazardous area.\n\nRule 20-414 (Aircraft electrical systems): Aircraft electrical systems shall be de-energized when the aircraft is stored in a hangar and, whenever possible, while the aircraft is undergoing maintenance.\n\nRule 20-416 (Aircraft battery charging and equipment):\n1) Aircraft batteries shall not be charged when installed in an aircraft located inside or partially inside a hangar.\n2) Battery chargers and their control equipment shall not be located or operated within any of the hazardous areas defined in Rule 20-402, but shall be permitted in a separate building or in an area complying with Rule 20-402(4) (non-hazardous separated room).\n3) Mobile chargers shall carry at least one permanently affixed warning sign stating that the chargers are to be kept 1.5 m clear of aircraft engines and fuel tank areas.\n4) Tables, racks, trays, and wiring for batteries shall not be located within a hazardous area, and shall conform to Section 26 (storage batteries).\n\nRule 20-418 (External power sources for energizing aircraft):\n1) Aircraft energizers shall be designed and mounted so that all electrical equipment and fixed wiring are at least 450 mm above floor level, and they shall not be operated in a hazardous area as defined in Rule 20-402(3).\n2) Mobile energizers shall carry at least one permanently affixed sign stating that they must be kept 1.5 m clear of aircraft engines and fuel tank areas.\n3) Aircraft energizers shall be equipped with polarized external power plugs and with automatic controls to isolate the ground power unit electrically from the aircraft in case excessive voltage is generated.\n4) Flexible cords for aircraft energizers and ground support equipment shall be of the extra-hard-usage type and shall include a bonding conductor.\n\nRule 20-420 (Mobile servicing equipment with electrical components):\n1) Mobile servicing equipment such as vacuum cleaners, air compressors, air movers, etc., having electrical wiring and equipment not suitable for Zone 2 locations shall:\n(a) be designed and mounted so that all wiring and equipment is at least 450 mm above the floor;\n(b) not be operated within the hazardous areas defined in Rule 20-402(3); AND\n(c) carry at least one permanently affixed warning sign stating that the equipment is to be kept 1.5 m clear of aircraft engines and fuel tank areas.\n2) Flexible cords for mobile equipment shall be of the extra-hard-usage type and shall include a bonding conductor.\n3) Attachment plugs and receptacles shall provide for connection of the bonding conductor to the raceway system.\n4) Equipment shall not be operated in areas where maintenance operations likely to release hazardous vapours are in progress, unless the equipment is at least suitable for use in a Zone 2 location.\n\nRule 20-422 (Bonding): All metal raceways, and all non-current-carrying metal portions of fixed or portable equipment, regardless of voltage, shall be bonded to ground in accordance with Section 10.',
      fieldScenario:
        'You are completing the electrical installation in an aircraft maintenance hangar.\n\nThe hangar has overhead bridge cranes with pendant controls and work lights. Rule 20-408(1) requires that any equipment less than 3 m above the wings and engine enclosures must be totally enclosed or spark-proof. Since a Boeing 737 wing is about 4 m high and the crane is at 6 m, the crane motor and controls are more than 3 m above the wings — but the pendant controls hanging down could come within 3 m and must be totally enclosed.\n\nMechanics use portable trouble lights. Rule 20-408(4) requires these to be Zone 2 rated for use anywhere in the hangar. The hangar uses wall-mounted lamps — Rule 20-408(2) prohibits metal shell, fibre-lined lampholders for fixed lighting.\n\nMobile stanchions with power outlets are positioned around aircraft during maintenance. When located within 1.5 m of fuel tanks or engines (within Rule 20-402(3) Zone 2 area), all equipment on the stanchions must meet Zone 2 requirements per Rule 20-410(1). Each mobile stanchion must display a warning sign about the 1.5 m clearance from engines and fuel tanks (Rule 20-410(3)).\n\nAn aircraft needs a battery charge. Rule 20-416(1) says you CANNOT charge the battery while the aircraft is in or partially in the hangar. The battery must be removed and charged in a separate building or a properly separated room per Rule 20-402(4). Mobile battery chargers must also carry the 1.5 m warning sign (Rule 20-416(3)).\n\nA ground power unit (GPU) is used to power an aircraft. Rule 20-418(1) requires all GPU electrical equipment to be at least 450 mm above the floor, and the GPU cannot operate in the Zone 2 area near fuel tanks and engines. The GPU must have polarized plugs and automatic over-voltage protection (Rule 20-418(3)). Its cord must be extra-hard-usage type with a bonding conductor (Rule 20-418(4)).\n\nThe floor-cleaning vacuum cleaner is mobile servicing equipment per Rule 20-420. Its electrical components must be at least 450 mm above the floor, it cannot operate near fuel areas, and it must carry the 1.5 m warning sign. Its cord must be extra-hard-usage type with a bonding conductor.\n\nAll metal parts are bonded to ground per Section 10 regardless of voltage (Rule 20-422).',
      keyPoints: [
        'Equipment less than 3 m above wings/engines: totally enclosed or spark-proof — except in non-haz rooms (Rule 20-408(1))',
        'No metal shell, fibre-lined lampholders for fixed lighting in hangars (Rule 20-408(2))',
        'Portable lamps in hangars: comply with Rule 18-100; portable equipment: Zone 2 rated (Rules 20-408(3)(4))',
        'Stanchions in hazardous area per Rule 20-402(3): all equipment Zone 2 rated (Rule 20-410(1))',
        'Stanchions outside hazardous area: locking-type plugs/receptacles; equipment at or below 450 mm = Zone 2 rules (Rule 20-410(2))',
        'Mobile stanchions: permanently affixed warning sign — 1.5 m clear of engines and fuel tank areas (Rule 20-410(3))',
        'Seals per Section 18, horizontal AND vertical boundaries; floor raceways with connections to haz area = within haz area (Rule 20-412)',
        'Aircraft electrical systems: de-energized when stored and during maintenance when possible (Rule 20-414)',
        'Aircraft batteries shall NOT be charged while aircraft is in or partially in the hangar (Rule 20-416(1))',
        'Battery chargers: NOT in hazardous areas — separate building or non-haz room per Rule 20-402(4) (Rule 20-416(2))',
        'Aircraft energizers: all equipment at least 450 mm above floor, polarized plugs, auto over-voltage isolation (Rule 20-418)',
        'Mobile servicing equipment: electrical parts 450 mm above floor, extra-hard-usage cord with bonding conductor (Rule 20-420)',
        'Equipment not operated where maintenance releases hazardous vapours unless Zone 2 rated (Rule 20-420(4))',
        'All metal raceways and non-current-carrying metal parts bonded to ground regardless of voltage (Rule 20-422)',
      ],
      diagramaMermaid: `graph TD
    A["Aircraft Hangars\\nEquipment & Services\\n(Rules 20-408 to 20-422)"] --> B["< 3 m above\\nwings/engines:\\nTotally enclosed\\n(Rule 20-408-1)"]
    A --> C["Stanchions:\\nZone 2 in haz area,\\n1.5 m warning sign\\n(Rule 20-410)"]
    A --> D["Battery Charging:\\nNOT while aircraft\\nin hangar\\n(Rule 20-416)"]
    A --> E["Aircraft Energizers:\\n>= 450 mm above floor\\npolarized plugs\\n(Rule 20-418)"]
    A --> F["Mobile Equipment:\\n>= 450 mm above floor\\nextra-hard-usage cord\\n(Rule 20-420)"]
    A --> G["Bonding: ALL metal\\nregardless of voltage\\n(Rule 20-422)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '3 m Above Wings/Engines', note: 'Arc-producing equipment below this height must be totally enclosed — Rule 20-408(1)', color: 'amber' },
        { icon: 'warning', title: 'No In-Hangar Battery Charging', note: 'Aircraft batteries cannot be charged while aircraft is in or partially in hangar — Rule 20-416(1)', color: 'rose' },
        { icon: 'bolt', title: '450 mm Minimum Height', note: 'Energizers and mobile equipment: all electrical parts >= 450 mm above floor — Rules 20-418/420', color: 'sky' },
        { icon: 'label', title: '1.5 m Warning Signs', note: 'Mobile stanchions, chargers, energizers, and servicing equipment all need warning signs — Rules 20-410/416/418/420', color: 'violet' },
        { icon: 'neutral', title: 'Extra-Hard-Usage Cord', note: 'Aircraft energizers and mobile equipment require extra-hard-usage cord with bonding conductor — Rules 20-418(4)/20-420(2)', color: 'emerald' },
      ],
    },
  ],
}
