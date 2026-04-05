import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 18 — Hazardous Locations (CEC 2021, CSA C22.1:21, pages 178–192)
 * COMPLETE — Every rule from 18-000 to 18-254 is covered.
 * Source: PDF scan "Section 18 — Hazardous Locations"
 */

export const section18Guide: StudyGuideSection = {
  section: '18',
  title: 'Section 18 — Hazardous Locations',
  description:
    'Section 18 governs electrical installations in locations where explosive gas or dust atmospheres may exist. It uses the Zone classification system — Zones 0, 1, and 2 for gas atmospheres and Zones 20, 21, and 22 for dust atmospheres. The section covers equipment selection, marking, temperature ratings, wiring methods, sealing requirements, bonding, intrinsically safe systems, pressurized equipment, and combustible gas detection. Rules 18-000 through 18-254.',
  subsections: [
    // =========================================================================
    // 1. SCOPE, TERMINOLOGY & CLASSIFICATION (Rules 18-000 to 18-010)
    // =========================================================================
    {
      id: '18-scope-classification',
      title: 'Scope, Terminology & Classification',
      rules: 'Rules 18-000 to 18-010',
      explanation:
        'Section 18 applies to all locations where electrical equipment and wiring are subject to explosive gas or dust atmospheres. It supplements the general requirements of the CEC — it does not replace them.\n\nRule 18-000 (Scope): This section covers hazardous locations classified under the Zone system. Existing facilities using the older Division system (Class I, II, III) may continue using it for additions, modifications, renovations, and maintenance — in that case, the Division rules in Annex J18 of Appendix J apply.\n\nRule 18-002 (Special terminology): Defines critical terms for hazardous work. Key definitions include:\n- Cable gland: a device providing cable entry into an enclosure in a hazardous location with strain relief and optional sealing.\n- Combustible dust: particles 500 micrometers or smaller (passing No. 35 sieve) that present fire/explosion hazard when dispersed in air.\n- Combustible flyings: solid particles >500 micrometers that can be suspended in air.\n- Conductive dust: combustible metal dust. Non-conductive dust: all other combustible dust.\n- Equipment Protection Level (EPL): Ga/Gb/Gc for gas (very high/high/enhanced), Da/Db/Dc for dust.\n- Explosive atmosphere: a mixture with air of flammable gas, vapour, dust, fibres, or flyings that permits self-sustaining propagation after ignition.\n- Intrinsically safe circuit: a circuit whose sparks or thermal effects cannot ignite an explosive atmosphere under prescribed conditions.\n- Seals: Explosion seal (prevents ignition passage), flammable fluid migration seal (minimizes fluid transmission), process seal (prevents process fluid migration — primary and secondary types), single vs. dual process seal equipment.\n- Zone 0: explosive gas present continuously or for long periods.\n- Zone 1: explosive gas likely in normal operation, or adjacent to Zone 0.\n- Zone 2: explosive gas not likely in normal operation, short duration if it occurs, or adjacent to Zone 1 with ventilation safeguards.\n- Zone 20: explosive dust cloud present continuously, for long periods, or frequently.\n- Zone 21: explosive dust cloud likely in normal operation occasionally.\n- Zone 22: explosive dust cloud not likely in normal operation, short period if it occurs.\n\nRule 18-004 (Classification): Hazardous locations are classified as either explosive gas or explosive dust atmospheres. Classification must be carried out by qualified persons, documented, and authenticated by the person assuming responsibility. Installations within Section 20 scope may be classified per Section 20.\n\nRule 18-006 (Gas atmospheres): Divided into Zones 0, 1, 2 based on frequency and duration.\n\nRule 18-008 (Dust atmospheres): Divided into Zones 20, 21, 22 based on frequency and duration.\n\nRule 18-010 (Maintenance): Unauthorized repairs or alterations shall not be made to live equipment, and electrical equipment shall be maintained in its original safe condition.',
      fieldScenario:
        'You arrive at a petroleum refinery to install new instrumentation. The first step is NOT picking up tools — it is reviewing the hazardous area classification documentation. Rule 18-004 requires that a qualified person has classified and documented each area. You find the classification drawings showing Zone 1 around the pump seals and Zone 2 extending outward. A maintenance supervisor asks if he can quickly swap out a junction box cover on an energized instrument circuit near a vessel. Rule 18-010 says NO — unauthorized repairs or alterations shall not be made to live equipment in hazardous locations. The area near a grain elevator discharge has a different classification — Zone 21 for dust rather than gas. Rule 18-008 requires it to be classified separately based on the dust atmosphere. You also note that the older tank farm still uses the Division system (Class I, Division 2). Rule 18-000(3) permits the continued use of the Division system for modifications to existing facilities.',
      keyPoints: [
        'Section 18 supplements the general requirements of the CEC — does not replace them (Rule 18-000(2))',
        'Existing facilities using the Division system may continue using it for additions, modifications, renovations, and maintenance (Rule 18-000(3))',
        'Where Division system is used, the rules in Annex J18 of Appendix J apply (Rule 18-000(4))',
        'Combustible dust is 500 micrometers or smaller (passes No. 35 sieve); combustible flyings are larger than 500 micrometers (Rule 18-002)',
        'EPL Ga/Da = very high protection (normal + expected + rare malfunctions); Gb/Db = high (normal + expected); Gc/Dc = enhanced (normal operation) (Rule 18-002)',
        'Zone 0 = gas present continuously; Zone 1 = gas likely in normal operation; Zone 2 = gas not likely, short duration (Rule 18-002)',
        'Zone 20 = dust cloud continuous/frequent; Zone 21 = dust cloud likely occasionally; Zone 22 = dust cloud not likely, short period (Rule 18-002)',
        'Hazardous location classification must be carried out and documented by qualified persons (Rule 18-004(2))',
        'Classification must be authenticated by the person assuming responsibility (Rule 18-004(3))',
        'Gas atmospheres: Zones 0, 1, 2 based on frequency and duration (Rule 18-006)',
        'Dust atmospheres: Zones 20, 21, 22 based on frequency and duration (Rule 18-008)',
        'Unauthorized repairs or alterations shall NOT be made to live equipment in hazardous locations (Rule 18-010(a))',
        'Equipment shall be maintained in its original safe condition (Rule 18-010(b))',
      ],
      diagramaMermaid: `graph TD
    A["Hazardous Location\\nClassification\\n(Rule 18-004)"] --> B["Explosive GAS\\nAtmosphere\\n(Rule 18-006)"]
    A --> C["Explosive DUST\\nAtmosphere\\n(Rule 18-008)"]
    B --> D["Zone 0\\nGas continuous\\nor long periods"]
    B --> E["Zone 1\\nGas likely in\\nnormal operation"]
    B --> F["Zone 2\\nGas unlikely,\\nshort duration"]
    C --> G["Zone 20\\nDust continuous\\nor frequent"]
    C --> H["Zone 21\\nDust likely\\noccasionally"]
    C --> I["Zone 22\\nDust unlikely,\\nshort period"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style H fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style I fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'Classified by Qualified Persons', note: 'Classification must be documented and authenticated — Rule 18-004', color: 'rose' },
        { icon: 'fire', title: 'Zone 0 = Highest Risk', note: 'Explosive gas present continuously or for long periods — Rule 18-002', color: 'rose' },
        { icon: 'shield', title: 'Division System Still Allowed', note: 'Existing facilities may continue using Class/Division — Rule 18-000(3)', color: 'amber' },
        { icon: 'lock', title: 'No Live Work', note: 'No unauthorized repairs on live equipment in hazardous locations — Rule 18-010', color: 'violet' },
        { icon: 'ruler', title: 'Dust Size Matters', note: 'Combustible dust <= 500 um (No. 35 sieve); flyings > 500 um — Rule 18-002', color: 'sky' },
      ],
    },

    // =========================================================================
    // 2. GENERAL REQUIREMENTS — Equipment, Marking, Temperature, Rooms (Rules 18-050 to 18-058)
    // =========================================================================
    {
      id: '18-general-equipment',
      title: 'General Requirements — Equipment, Marking, Temperature & Rooms',
      rules: 'Rules 18-050 to 18-058',
      explanation:
        'These rules apply broadly to ALL hazardous locations (gas and dust) and establish the fundamental requirements for equipment suitability, marking, temperature ratings, and room separation.\n\nRule 18-050 (Electrical equipment): Equipment must be suitable for the specific explosive atmosphere present. For gas atmospheres (Zone 0, 1, 2), equipment must be rated for one of the gas groups:\n- Group IIC: acetylene, carbon disulphide, hydrogen (most restrictive)\n- Group IIB: diethyl ether, ethylene, ethylene oxide, hydrogen sulphide, etc.\n- Group IIA: acetone, ammonia, benzine, butane, gasoline, hexane, natural gas, propane, etc. (least restrictive)\nGroup IIC equipment can be used where IIA or IIB is required. Group IIB can substitute for IIA. Equipment marked for a specific gas/vapour is permitted where that specific substance may be encountered.\n\nFor dust atmospheres (Zone 20, 21, 22), equipment must be rated for:\n- Group IIIC: combustible metal dusts (most restrictive)\n- Group IIIB: non-metallic combustible dust\n- Group IIIA: combustible flyings (>500 micrometers)\nWhere Class/Division equipment is used in Zone-classified locations, Table 18A provides the group correspondence.\n\nRule 18-052 (Marking): Equipment installed in hazardous locations must have markings suitable for the Zone in which it is installed.\n\nRule 18-054 (Temperature): For Zones 0, 1, 2 — the maximum surface temperature on equipment shall not exceed the minimum ignition temperature of the hazardous atmosphere. If no temperature is marked, it is deemed to be 100 degrees C. For Zones 20, 21, 22 — the maximum external surface temperature must not exceed the LOWER of the dust cloud ignition temperature or the dust layer ignition temperature. Equipment installed per Rule 18-150(2) must have surface temperatures that do not exceed the ignition temperature at any point exposed to the explosive gas atmosphere.\n\nRule 18-056 (Rooms, sections, areas): Each room, section, or area — including motor/generator rooms and control equipment rooms — is considered a SEPARATE location for classification purposes.\n\nRule 18-058 (Equipment rooms): Walls, partitions, floors, or ceilings used to create hazard-free rooms must be of substantial construction, built of or lined with non-combustible material, and ensure the room remains free from hazards. A non-hazardous location communicating with a Zone 2 or dust atmosphere must be separated by close-fitting, self-closing fire doors. Communication from a Zone 1 location shall be to a Zone 2 location unless adequate ventilation and safeguards are provided.',
      fieldScenario:
        'You are specifying equipment for a natural gas compressor station. The area around the compressors is classified Zone 1 with natural gas (Group IIA). A supplier offers you a junction box certified for Group IIC. Rule 18-050(3) says this is acceptable — Group IIC can be used where Group IIA is required because IIC is more restrictive. However, a junction box marked only "propane" cannot be used in a hydrogen environment because it is only rated for that specific gas (Rule 18-050(5)).\n\nInside the compressor building, you want to create a clean electrical room. Rule 18-058 requires the walls to be substantial, non-combustible construction. The door between the Zone 2 area and the electrical room must be a close-fitting, self-closing fire door per Rule 18-058(2). You check the motor nameplate and see no temperature marking. Rule 18-054(2) means you must treat it as having a maximum surface temperature of 100 degrees C — if the gas ignition temperature is below that, this equipment cannot be used.\n\nIn the adjacent grain dust area (Zone 22), you need to check both the dust cloud ignition temperature AND the dust layer ignition temperature for the specific grain dust, then ensure the equipment surface temperature does not exceed the lower of the two (Rule 18-054(3)).',
      keyPoints: [
        'Equipment must be suitable for the SPECIFIC explosive atmosphere present (Rule 18-050(1))',
        'Gas Groups: IIC (acetylene, hydrogen) > IIB (diethyl ether, ethylene) > IIA (natural gas, propane, gasoline) — higher group can substitute for lower (Rules 18-050(2)(3)(4))',
        'Dust Groups: IIIC (combustible metal dust) > IIIB (non-metallic combustible dust) > IIIA (combustible flyings) (Rule 18-050(7))',
        'Table 18A maps Division-system groups to Zone-system groups for cross-referenced equipment (Rule 18-050(6))',
        'Equipment markings must be suitable for the Zone in which it is installed (Rule 18-052)',
        'Gas zones: maximum surface temperature must NOT exceed the minimum ignition temperature of the atmosphere (Rule 18-054(1))',
        'If no temperature is marked on gas-zone equipment, it is deemed to be 100 degrees C (Rule 18-054(2))',
        'Dust zones: maximum surface temperature must not exceed the LOWER of dust cloud or dust layer ignition temperature (Rule 18-054(3))',
        'Each room, section, or area is a SEPARATE location for classification — including motor rooms and control rooms (Rule 18-056)',
        'Hazard-free rooms require substantial construction, non-combustible lining, and remain hazard-free (Rule 18-058(1))',
        'Non-hazardous to Zone 2 or dust atmosphere: separated by close-fitting, self-closing fire doors (Rule 18-058(2))',
        'Communication from Zone 1 shall be to Zone 2 unless ventilation and safeguards are provided (Rule 18-058(3))',
      ],
      diagramaMermaid: `graph TD
    A["Equipment Selection\\n(Rule 18-050)"] --> B["Gas Groups"]
    A --> C["Dust Groups"]
    B --> D["IIC — Acetylene\\nHydrogen\\nMost Restrictive"]
    B --> E["IIB — Ethylene\\nDiethyl Ether"]
    B --> F["IIA — Natural Gas\\nPropane, Gasoline"]
    C --> G["IIIC — Metal Dust\\nMost Restrictive"]
    C --> H["IIIB — Non-metallic\\nCombustible Dust"]
    C --> I["IIIA — Flyings\\n>500 um"]
    D -->|"Can substitute"| E
    E -->|"Can substitute"| F
    J["Temperature\\n(Rule 18-054)"] --> K["Gas: Surface temp\\n< Ignition temp"]
    J --> L["Dust: Surface temp\\n< LOWER of cloud\\nor layer ignition"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style J fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'label', title: 'Gas Group Hierarchy', note: 'IIC > IIB > IIA — a higher group can always substitute for a lower one', color: 'sky' },
        { icon: 'thermometer', title: 'Temperature is Critical', note: 'Unmarked gas-zone equipment defaults to 100 C max — Rule 18-054(2)', color: 'amber' },
        { icon: 'fire', title: 'Dust: Two Temperatures', note: 'Must not exceed LOWER of dust cloud OR dust layer ignition temp — Rule 18-054(3)', color: 'rose' },
        { icon: 'box', title: 'Separate Rooms = Separate Zones', note: 'Each room/section classified independently — Rule 18-056', color: 'emerald' },
        { icon: 'shield', title: 'Fire Doors Required', note: 'Non-hazardous to Zone 2/dust: close-fitting, self-closing fire doors — Rule 18-058(2)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 3. GENERAL REQUIREMENTS — Cables, Optical Fiber, Intrinsic Safety, Pressurization (Rules 18-060 to 18-068)
    // =========================================================================
    {
      id: '18-general-wiring-special',
      title: 'General — Cables, Optical Fiber, Intrinsic Safety & Pressurization',
      rules: 'Rules 18-060 to 18-068',
      explanation:
        'These general rules apply across all zones and cover specialized wiring, intrinsic safety systems, pressurized equipment, and cable trays in dust atmospheres.\n\nRule 18-060 (Metal-covered cable): Where exposed overhead conductors supply mineral-insulated cable in a hazardous location, surge arresters must be installed to limit surge voltage to 5 kV. Single-conductor metal-covered cables must be installed to prevent sparking between sheaths or between sheaths and grounded metal. Two methods are permitted: (a) clipped/strapped together at intervals not more than 1.8 m with metal coverings bonded to ground; or (b) metal coverings continuously covered with insulating material and bonded to ground only at the termination point in the hazardous location.\n\nRule 18-062 (Optical fiber cable): OFNP, OFCP, OFNR, OFCR, OFNG, OFCG, OFN, and OFC types are permitted in ALL hazardous locations, provided installation meets the applicable sealing requirements of Section 18.\n\nRule 18-064 (Pressurized equipment or rooms): Electrical equipment in explosive atmospheres may be located in pressurized enclosures or rooms where protective gas pressure is effectively maintained. When pressurization is used, the specific Zone wiring and equipment rules (18-100 to 18-158) are NOT required — the pressurization itself provides the protection.\n\nRule 18-066 (Intrinsically safe and non-incendive equipment): A descriptive system document is REQUIRED for any intrinsically safe system or non-incendive field wiring circuit in a hazardous location. Installation must follow that document. Intrinsically safe or non-incendive conductors must be separated from other circuits by at least one of: (a) 50 mm minimum separation; (b) metal armour or sheath of cable assemblies; (c) grounded metal barrier at least 1.34 mm thick (No. 16 MSG); or (d) non-metallic insulation at least 1.5 mm thick. Different IS or non-incendive circuits may share raceways if each circuit has grounded conductive shields/braids or insulation at least 0.25 mm thick. Raceways must be installed to minimize flammable fluid migration. All IS apparatus must be identified as part of the system, and circuits must be identified at terminal/junction locations. Wiring methods must be labeled with permanent labels OR colour coded light blue (where no other light blue is used).\n\nRule 18-068 (Cable trays in dust atmospheres): Cable trays in explosive dust atmospheres must be installed to minimize the buildup of dust or fibre on the cables.',
      fieldScenario:
        'You are installing mineral-insulated cable from an overhead line into a Zone 2 classified area at a chemical plant. Rule 18-060(1) requires you to install surge arresters rated to limit voltage to 5 kV at the transition point. You are running single-conductor MI cables — Rule 18-060(2) says you must either strap them together every 1.8 m maximum with sheaths bonded to ground, or continuously insulate the metal coverings.\n\nA process engineer asks if fiber optic cables can be run through the Zone 1 area. Rule 18-062 permits all standard fiber types (OFNP, OFCR, etc.) in any hazardous location as long as sealing requirements are met.\n\nYou are installing a 4-20 mA intrinsically safe level transmitter in a Zone 0 vessel area. Rule 18-066(1) requires you to have the descriptive system document (the IS system drawing from the barrier manufacturer). The blue IS cables must be separated from power cables by at least 50 mm, or by a grounded metal barrier at least 1.34 mm thick (Rule 18-066(3)). You mark all junction boxes with "Intrinsically Safe" labels per Rule 18-066(6) and use light blue cable to colour code the IS wiring (Rule 18-066(8)).\n\nIn a grain processing Zone 21 area, cable trays must be installed so dust does not accumulate on the cables — typically by using solid-bottom trays with covers or by routing to minimize horizontal surfaces (Rule 18-068).',
      keyPoints: [
        'Mineral-insulated cable fed from overhead conductors needs surge arresters limiting voltage to 5 kV (Rule 18-060(1))',
        'Single-conductor metal-covered cables: strap together every 1.8 m max with sheaths bonded to ground, OR continuously insulate sheaths (Rule 18-060(2))',
        'Optical fiber cables (OFNP, OFCP, OFNR, etc.) permitted in ALL hazardous locations with proper sealing (Rule 18-062)',
        'Pressurized enclosures/rooms with protective gas exempt equipment from Zone-specific rules 18-100 to 18-158 (Rule 18-064)',
        'Intrinsically safe and non-incendive systems REQUIRE a descriptive system document (Rule 18-066(1))',
        'IS conductors separated from other circuits by: 50 mm, metal armour, grounded metal barrier >= 1.34 mm, or non-metallic insulation >= 1.5 mm (Rule 18-066(3))',
        'Different IS circuits may share raceways if each has grounded shields or insulation >= 0.25 mm (Rule 18-066(4))',
        'IS raceways must minimize flammable fluid migration to other locations (Rule 18-066(5))',
        'All IS apparatus must be identified; circuits identified at terminal/junction locations (Rules 18-066(6)(7))',
        'IS wiring: permanently labeled OR colour coded light blue — no other light blue cables in same area (Rule 18-066(8))',
        'Cable trays in dust atmospheres must minimize dust/fibre buildup on cables (Rule 18-068)',
      ],
      diagramaMermaid: `graph TD
    A["General Wiring\\nRules"] --> B["Metal-Covered Cable\\n(Rule 18-060)"]
    A --> C["Optical Fiber\\n(Rule 18-062)"]
    A --> D["Pressurized Equipment\\n(Rule 18-064)"]
    A --> E["Intrinsically Safe\\n(Rule 18-066)"]
    A --> F["Cable Trays in Dust\\n(Rule 18-068)"]
    B --> B1["Surge arresters <= 5 kV\\nfor MI cable from overhead"]
    B --> B2["Single-conductor:\\nstrap every 1.8 m\\nOR insulate sheaths"]
    E --> E1["Descriptive System\\nDocument REQUIRED"]
    E --> E2["50 mm separation\\nOR metal barrier\\n>= 1.34 mm"]
    E --> E3["Light blue colour\\ncode OR permanent\\nlabels"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'Surge Arresters for MI Cable', note: 'Limit to 5 kV where overhead conductors feed hazardous area — Rule 18-060(1)', color: 'amber' },
        { icon: 'wire', title: 'IS Separation: 50 mm', note: 'Or metal barrier >= 1.34 mm, or insulation >= 1.5 mm — Rule 18-066(3)', color: 'sky' },
        { icon: 'label', title: 'Light Blue = IS', note: 'Colour code IS wiring light blue or use permanent labels — Rule 18-066(8)', color: 'violet' },
        { icon: 'shield', title: 'Pressurization Exempts', note: 'Protective gas pressure replaces Zone-specific equipment rules — Rule 18-064', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 4. COMBUSTIBLE GAS DETECTION, SEALS & BONDING (Rules 18-070 to 18-076)
    // =========================================================================
    {
      id: '18-gas-detection-seals-bonding',
      title: 'Combustible Gas Detection, Seals & Bonding',
      rules: 'Rules 18-070 to 18-076',
      explanation:
        'These general rules cover three critical topics that apply across hazardous locations: combustible gas detection as an alternative protection method, seal requirements for process and conduit seals, and bonding requirements.\n\nRule 18-070 (Combustible gas detection): This is the "downgrade" rule. Equipment rated for non-hazardous locations may be installed in Zone 2, and Zone 2 equipment may be installed in Zone 1, IF: (a) no specific equipment suitable for the purpose is available; (b) the equipment does not produce arcs, sparks, or hot surfaces capable of ignition during normal operation; AND (c) a continuous combustible gas detection system is provided that: (i) alarms at 20% LFL; (ii) activates ventilation at 20% LFL (if ventilation is provided); (iii) automatically de-energizes equipment at 40% LFL (if ventilation is provided); (iv) automatically de-energizes at 20% LFL if ventilation cannot be provided; and (v) automatically de-energizes on gas detection instrument failure. This is a strict, layered protection scheme.\n\nRule 18-072 (Seals): Process seals and their equipment must prevent migration of flammable fluid through wiring systems and must be used below the marked maximum working pressure (MWP). Where a secondary process seal is installed, primary seal failure must be indicated by either design features making failure obvious or markings indicating the enclosure may contain flammable fluid under pressure. Flammable fluid migration seals must be permanently identified. Field-installed seals must be: (a) accessible after installation; (b) free of splices and taps in seal fittings (fittings with splices/taps shall not be filled with compound); and (c) equipped with means to prevent accumulation of liquid or condensed vapour, or to permit periodic draining.\n\nRule 18-074 (Bonding): All exposed non-current-carrying metal parts — motor frames, luminaires, cabinets, conduit — must be bonded to ground using either: (a) bonding conductors sized per Rule 10-616; or (b) rigid metal conduit with threaded couplings and threaded bosses on enclosures with joints made up tight. Where raceways or cables have an internal bonding conductor, box connectors with standard locknuts are permitted to bond the metallic armour or raceway.\n\nRule 18-076 (Uninsulated exposed parts): No uninsulated exposed electrical parts (conductors, buses, terminals, components) are permitted in hazardous locations UNLESS: (a) protected by type of protection "ia", "ib", "ic", or "nA" suitable for the location and operating below 15 V in wet locations or 30 V in other locations; OR (b) installed per Rule 18-250(2) for electric cranes/hoists in Zone 22.',
      fieldScenario:
        'A chemical plant needs to install a specialized analytical instrument in a Zone 1 area, but no Zone 1-rated version exists. Rule 18-070 allows you to install Zone 2-rated equipment in Zone 1 IF you provide continuous gas detection. You install gas detectors that alarm at 20% LFL and automatically de-energize the instrument at 40% LFL (with ventilation) or 20% LFL (without ventilation). If the gas detector itself fails, the instrument must also be de-energized automatically.\n\nAt a refinery, a pressure transmitter with a single process seal is installed on a pipeline carrying flammable fluid. Rule 18-072(1) requires the seal to prevent fluid migration into the wiring. Since it is single-seal equipment, if that seal fails, flammable fluid could enter the conduit system. With dual process seal equipment, you would need a failure indication method — either a visible tell-tale or markings per Rule 18-072(2).\n\nYou are running TECK90 cable to a motor in Zone 2. Rule 18-074(1) requires the motor frame to be bonded to ground using conductors sized per Rule 10-616 or through rigid metal conduit with tight threaded joints. Since TECK90 has an internal bonding conductor, Rule 18-074(2) permits box connectors with standard locknuts to bond the armour.\n\nAn instrument technician wants to leave terminal strips exposed in a Zone 1 junction box. Rule 18-076 says NO — unless they are protected by intrinsic safety ("ia" or "ib") and operate below 30 V.',
      keyPoints: [
        'Gas detection allows non-hazardous equipment in Zone 2, or Zone 2 equipment in Zone 1 — strict conditions apply (Rule 18-070)',
        'Gas detection system must alarm at 20% LFL (Rule 18-070(c)(i))',
        'With ventilation: de-energize equipment at 40% LFL; without ventilation: de-energize at 20% LFL (Rules 18-070(c)(iii)(iv))',
        'Gas detection instrument failure must automatically de-energize protected equipment (Rule 18-070(c)(v))',
        'Process seals must prevent flammable fluid migration and operate below marked MWP (Rule 18-072(1))',
        'Secondary process seal: primary seal failure must be indicated by design features or markings (Rule 18-072(2))',
        'Flammable fluid migration seals must be permanently identified (Rule 18-072(3))',
        'Field-installed seals: accessible, no splices in seal fittings, means to drain condensed liquid (Rule 18-072(4))',
        'Bonding: use conductors per Rule 10-616 OR rigid metal conduit with threaded couplings made up tight (Rule 18-074(1))',
        'Internal bonding conductor in cable: box connectors with standard locknuts permitted (Rule 18-074(2))',
        'No uninsulated exposed parts in hazardous locations — except IS circuits below 15 V wet / 30 V dry (Rule 18-076)',
        'Exception for cranes/hoists in Zone 22, Group IIIA locations per Rule 18-250(2) (Rule 18-076(b))',
      ],
      diagramaMermaid: `graph TD
    A["Gas Detection\\n(Rule 18-070)"] --> B["Alarm at\\n20% LFL"]
    B --> C{"Ventilation\\nprovided?"}
    C -->|Yes| D["Activate ventilation\\nat 20% LFL"]
    D --> E["De-energize\\nat 40% LFL"]
    C -->|No| F["De-energize\\nat 20% LFL"]
    A --> G["De-energize on\\ndetector failure"]
    H["Seals\\n(Rule 18-072)"] --> I["Process Seal:\\nprevent fluid\\nmigration"]
    H --> J["Dual seal: indicate\\nprimary failure"]
    H --> K["Field seals:\\naccessible,\\nno splices"]
    L["Bonding\\n(Rule 18-074)"] --> M["Conductors per\\nRule 10-616"]
    L --> N["OR threaded rigid\\nconduit, tight joints"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'inspect', title: 'Gas Detection Override', note: 'Allows lower-rated equipment IF continuous monitoring is provided — Rule 18-070', color: 'amber' },
        { icon: 'warning', title: '20% LFL = Alarm', note: 'Gas detection must alarm and act at 20% of lower flammable limit — Rule 18-070(c)', color: 'rose' },
        { icon: 'lock', title: 'Seal Accessibility', note: 'Field-installed seals must be accessible after installation — Rule 18-072(4)(a)', color: 'sky' },
        { icon: 'neutral', title: 'Bonding is Mandatory', note: 'All exposed metal parts bonded to ground in hazardous locations — Rule 18-074', color: 'emerald' },
        { icon: 'bolt', title: 'No Exposed Parts', note: 'Unless IS-protected under 15 V wet or 30 V dry — Rule 18-076', color: 'violet' },
      ],
    },

    // =========================================================================
    // 5. ZONE 0 — Equipment, Wiring & Sealing (Rules 18-090 to 18-094)
    // =========================================================================
    {
      id: '18-zone0',
      title: 'Zone 0 — Equipment, Wiring & Sealing (Gas)',
      rules: 'Rules 18-090 to 18-094',
      explanation:
        'Zone 0 is the most dangerous gas classification — explosive gas atmospheres are present continuously or for long periods. The rules here are the most restrictive in Section 18.\n\nRule 18-090 (Equipment, Zone 0): Equipment installed in Zone 0 must comply with Table 18. Only equipment with EPL Ga (very high protection) is permitted — this means the equipment is not a source of ignition during normal operation, expected malfunctions, OR rare malfunctions. In practice, this limits Zone 0 to intrinsically safe equipment rated "ia".\n\nRule 18-092 (Wiring methods, Zone 0): Circuits terminating in Zone 0 SHALL be intrinsically safe — there are no alternatives for circuits that connect to equipment inside Zone 0. However, cables that have a continuous metallic or non-metallic outer jacket, are marked "HL", and contain non-intrinsically-safe circuits may PASS THROUGH Zone 0 if: (a) the cable passes completely through with no fittings or connections within Zone 0; AND (b) it is protected from mechanical damage by raceway or other effective means. Similarly, rigid metal conduit containing non-IS circuits may pass through Zone 0 if it passes completely through with no fittings, couplings, or connections within Zone 0.\n\nRule 18-094 (Sealing, Zone 0): Where conduit containing IS circuits terminates in Zone 0, a flammable fluid migration seal must be installed with no box, coupling, or fitting between the seal and the Zone 0 boundary crossing point. For cables, flammable fluid migration seals must be provided at the first point of termination after entering Zone 0.',
      fieldScenario:
        'You need to install a level transmitter inside a crude oil storage tank — the interior is Zone 0 because explosive vapours are present continuously. Rule 18-090 limits you to equipment from Table 18 with EPL Ga protection — in practice, this means an intrinsically safe level transmitter. Rule 18-092(1) requires the circuit to be intrinsically safe; you cannot run standard power cables to equipment terminating in Zone 0.\n\nA control cable route passes through the Zone 0 airspace above the tank. Rule 18-092(2) allows an "HL" marked cable with continuous jacket to pass through Zone 0, but only if it makes no connections inside the zone and is protected from mechanical damage. You install it in a rigid conduit to provide protection.\n\nA colleague suggests running a rigid conduit with power cables through the zone. Rule 18-092(3) permits this only if the conduit passes completely through with NO fittings, couplings, or connections in the Zone 0 area.\n\nAt the Zone 0 boundary, you install a flammable fluid migration seal on the IS conduit with no fittings between the seal and the boundary (Rule 18-094(1)). On the cable entering the tank, you install a seal at the first termination point (Rule 18-094(2)).',
      keyPoints: [
        'Zone 0 equipment must comply with Table 18 — only EPL Ga (very high protection) permitted (Rule 18-090)',
        'ALL circuits terminating in Zone 0 SHALL be intrinsically safe — no exceptions (Rule 18-092(1))',
        'HL-marked cables with continuous jacket may PASS THROUGH Zone 0: no fittings/connections, protected from mechanical damage (Rule 18-092(2))',
        'Rigid metal conduit with non-IS circuits may pass through Zone 0: no fittings, couplings, or connections permitted (Rule 18-092(3))',
        'Conduit terminating in Zone 0: flammable fluid migration seal required, no fittings between seal and Zone 0 boundary (Rule 18-094(1))',
        'Cable entering Zone 0: flammable fluid migration seal at first point of termination (Rule 18-094(2))',
        'Zone 0 is the highest risk gas classification — explosive gas present continuously or for long periods',
        'EPL Ga means not an ignition source during normal operation, expected malfunctions, AND rare malfunctions',
      ],
      diagramaMermaid: `graph TD
    A["ZONE 0\\nGas Continuous"] --> B["Equipment:\\nTable 18 — EPL Ga ONLY\\n(Rule 18-090)"]
    A --> C["Wiring:\\nINTRINSICALLY SAFE\\nonly for terminating\\ncircuits\\n(Rule 18-092-1)"]
    A --> D["Pass-Through:\\nHL cable or rigid conduit\\nNO connections inside\\n(Rule 18-092-2,3)"]
    A --> E["Sealing:\\nFlammable fluid\\nmigration seal\\n(Rule 18-094)"]
    C --> F["IS barriers in\\nnon-hazardous area"]
    E --> G["No fittings between\\nseal and Zone 0\\nboundary"]
    style A fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Most Restrictive Zone', note: 'Explosive gas present continuously — only IS circuits may terminate here', color: 'rose' },
        { icon: 'shield', title: 'EPL Ga Only', note: 'Very high protection — safe during normal ops, expected AND rare faults (Rule 18-090)', color: 'rose' },
        { icon: 'wire', title: 'Pass-Through Only', note: 'Non-IS cables/conduit may transit Zone 0 with zero connections inside (Rule 18-092)', color: 'amber' },
        { icon: 'lock', title: 'Seal at Boundary', note: 'No fittings between the seal and the Zone 0 boundary crossing (Rule 18-094)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 6. ZONE 1 — Equipment, Wiring, Sealing, Motors, Luminaires, Flexible Cords (Rules 18-100 to 18-110)
    // =========================================================================
    {
      id: '18-zone1',
      title: 'Zone 1 — Equipment, Wiring, Sealing, Motors, Luminaires & Cords (Gas)',
      rules: 'Rules 18-100 to 18-110',
      explanation:
        'Zone 1 is where explosive gas atmospheres are likely to occur in normal operation. The rules are strict but allow more wiring methods and equipment types than Zone 0.\n\nRule 18-100 (Equipment, Zone 1): Equipment must comply with Table 18. EPL Gb (high protection) or better is required — meaning not a source of ignition during normal operation or expected malfunctions.\n\nRule 18-102 (Wiring methods, Zone 1): Two primary methods: (a) threaded rigid metal conduit with explosion-proof, flameproof "d", or flameproof "db" fittings; or (b) hazardous location cables with suitable cable glands. All explosion-proof/flameproof boxes, fittings, and joints must be threaded. Tapered threads need at least 4-1/2 fully engaged threads with no running threads. Metric straight threads need tolerance class 6g/6H with at least 5 fully engaged threads. Where thread forms differ, suitable adapters must be used. Cable entries into increased safety "e" enclosures must maintain the enclosure degree of protection. Cables must be supported to avoid tensile stress at glands. IS circuits installed as "ia", "ib", or IS for Class I are exempt from these wiring requirements.\n\nRule 18-104 (Sealing, Zone 1): Explosion seals required where conduit enters an explosion-proof/flameproof enclosure containing ignition-capable devices, or where conduit is trade size 53 or larger. Seals must be within 450 mm of the enclosure. When conduit crosses the Zone 1 boundary and terminates inside, an explosion seal must be within Zone 1 or no more than 1 m outside the boundary, with uninterrupted conduit between seal and boundary/termination. Pass-through conduit with no termination in Zone 1 does not need a seal if the run is uninterrupted and terminates in non-hazardous areas. An uninterrupted conduit run allows only couplings — no boxes, fittings, unions, tees, etc. Only explosion-proof unions, reducers, and elbows (not larger than conduit trade size) are permitted between the seal and the enclosure. Cables need flammable fluid migration seals at first termination after Zone 1 entry. Explosion seals required where cable enters explosion-proof/flameproof enclosures. Cables with continuous sheaths may pass through Zone 1 without seals.\n\nRule 18-106 (Motors, Zone 1): Increased safety "eb" motors must meet thermal protection requirements of IEC 60079-14.\n\nRule 18-108 (Luminaires, Zone 1): Each luminaire must be protected by a guard or by location. Pendant luminaires on threaded conduit stems need set screws to prevent loosening. Stems longer than 300 mm need bracing within 300 mm of the lower end OR a flexible fitting within 300 mm of the support point.\n\nRule 18-110 (Flexible cords, Zone 1): Permitted for portable lamps/equipment connections. Must be: extra-hard-usage type, contain a bonding conductor, have sealing glands at explosion-proof/flameproof entries, and use increased safety "e" cord connectors for "e" enclosures. Also permitted where fixed wiring cannot provide necessary movement — must meet all above requirements and be protected from damage.',
      fieldScenario:
        'You are wiring a pump motor in a Zone 1 area at a petrochemical plant. Rule 18-102 gives you two options: threaded rigid metal conduit with explosion-proof fittings, or TECK90 HL-marked cable with cable glands. You choose rigid conduit — every threaded joint must have at least 4-1/2 fully engaged tapered threads (Rule 18-102(3)(a)).\n\nThe motor junction box is explosion-proof and contains terminal connections that can arc. Rule 18-104(1)(a) requires an explosion seal within 450 mm of this enclosure. The conduit enters from a non-hazardous MCC room, crossing the Zone 1 boundary — Rule 18-104(3) requires the seal within Zone 1 or no more than 1 m outside the boundary, with uninterrupted conduit between the seal and the boundary.\n\nThe pump motor is an increased safety "eb" type. Rule 18-106 requires it to have thermal protection per IEC 60079-14 — typically a PTC thermistor relay or current-monitoring system.\n\nA lighting contractor installs pendant fixtures on 450 mm conduit stems without bracing. Rule 18-108(2)(b) requires bracing or a flex fitting since the stems exceed 300 mm. He must add lateral bracing within 300 mm of the luminaire.\n\nA portable work light is needed in the zone. Rule 18-110 requires extra-hard-usage cord with a bonding conductor and a sealing gland where it enters the explosion-proof fixture.',
      keyPoints: [
        'Zone 1 equipment must comply with Table 18 — EPL Gb (high protection) or better (Rule 18-100)',
        'Wiring: threaded rigid metal conduit with Ex d/db fittings, or HL cables with cable glands (Rule 18-102(1))',
        'Tapered threads: minimum 4-1/2 fully engaged threads, no running threads (Rule 18-102(3)(a))',
        'Metric straight threads: tolerance 6g/6H, minimum 5 fully engaged threads (Rule 18-102(3)(b))',
        'IS circuits ("ia", "ib") exempt from Zone 1 wiring requirements (Rule 18-102(7))',
        'Explosion seals required: enclosure with ignition-capable devices, or conduit trade size 53+ (Rule 18-104(1))',
        'Seals within 450 mm of enclosure (Rule 18-104(2)(b))',
        'Boundary crossing: seal in Zone 1 or max 1 m outside, uninterrupted conduit to boundary (Rule 18-104(3))',
        'Pass-through conduit: no seal needed if uninterrupted and terminates in non-hazardous area (Rule 18-104(4))',
        'Cables with continuous sheaths may pass through Zone 1 without seals (Rule 18-104(9))',
        'Increased safety "eb" motors: thermal protection per IEC 60079-14 (Rule 18-106)',
        'Pendant luminaire stems > 300 mm: bracing or flex fitting required (Rule 18-108(2)(b))',
        'Flexible cords: extra-hard-usage, bonding conductor, sealing glands at Ex d entries (Rule 18-110(1))',
      ],
      diagramaMermaid: `graph TD
    A["ZONE 1\\nGas Likely"] --> B["Equipment:\\nTable 18 — EPL Gb+\\n(Rule 18-100)"]
    A --> C["Wiring Methods\\n(Rule 18-102)"]
    A --> D["Sealing\\n(Rule 18-104)"]
    A --> E["Special Equipment"]
    C --> C1["Threaded rigid conduit\\n+ Ex d/db fittings"]
    C --> C2["HL cables +\\ncable glands"]
    D --> D1["Explosion seal within\\n450 mm of enclosure"]
    D --> D2["Boundary: seal in Zone 1\\nor max 1 m outside"]
    D --> D3["Pass-through: no seal\\nif uninterrupted"]
    E --> E1["Motors: thermal\\nprotection\\n(Rule 18-106)"]
    E --> E2["Luminaires: guard\\nor location\\n(Rule 18-108)"]
    E --> E3["Flex cords:\\nextra-hard-usage\\n(Rule 18-110)"]
    style A fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Two Wiring Methods', note: 'Threaded rigid conduit with Ex d fittings, or HL cables with glands — Rule 18-102', color: 'sky' },
        { icon: 'lock', title: 'Seal Within 450 mm', note: 'Explosion seals close to enclosure, no farther than 450 mm — Rule 18-104(2)', color: 'rose' },
        { icon: 'bolt', title: '4.5 Engaged Threads', note: 'Tapered threads need minimum 4-1/2 fully engaged, no running threads — Rule 18-102(3)', color: 'amber' },
        { icon: 'thermometer', title: 'Motor Thermal Protection', note: 'Increased safety "eb" motors need protection per IEC 60079-14 — Rule 18-106', color: 'emerald' },
        { icon: 'sun', title: 'Guard Every Luminaire', note: 'Protected by guard or by location in Zone 1 — Rule 18-108(1)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 7. ZONE 2 — Equipment, Wiring, Sealing, Luminaires, Flexible Cords (Rules 18-150 to 18-158)
    // =========================================================================
    {
      id: '18-zone2',
      title: 'Zone 2 — Equipment, Wiring, Sealing, Luminaires & Cords (Gas)',
      rules: 'Rules 18-150 to 18-158',
      explanation:
        'Zone 2 is where explosive gas atmospheres are NOT likely in normal operation and, if they occur, exist only for a short time. The rules are the least restrictive for gas atmospheres, allowing a wider range of equipment and wiring methods.\n\nRule 18-150 (Equipment, Zone 2): Equipment must comply with Table 18. EPL Gc (enhanced protection) is the minimum. However, several specific exceptions are permitted without Zone-specific markings: (a) transformers, solenoids, and electromagnetic devices meeting temperature requirements of Rule 18-054; (b) conduit and cables per Rule 18-152(1); (c) non-sparking, non-heating equipment in Type 4, 4X, or IP65+ enclosures; (d) current-limiting fuses (non-indicating filled type, or indicating filled type where the blown indication does not penetrate the fuse body) for overload protection, or any fuse for short-circuit protection only; (e) open or non-explosion-proof motors, generators, and rotating machines that do not incorporate arcing/sparking/heat-producing components (or whose arcing components meet Rule 18-100). Anti-condensation heaters in these machines are permitted if they meet specific conditions: no arcing, no temperature-limiting controls, comply with Rule 18-054, and are marked with max surface temperature. Sliding contact shaft bonding devices are permitted if used for grounding the rotor and the potential discharge energy is documented as non-incendive.\n\nRule 18-152 (Wiring methods, Zone 2): Many methods are permitted: (a) threaded metal conduit; (b) HL cables; (c) Type TC cable in cable tray per Rule 12-2202; (d) armoured cable with non-metallic jacket (TECK90, ACWU90, RC90, RA90); (e) armoured fire alarm cable (FAS types); (f) Type ACIC cable; (g) Type CIC cable in cable tray (300 V+ rating, 150 V circuit, 5 A max); (h) rigid RTRC conduit Type XW (with "-XW" marked fittings, in industrial establishments with qualified personnel only); (i) liquid-tight flexible metal conduit marked heavy duty. Boxes and fittings need not be explosion-proof except where required by other rules. Cable glands must be compatible with enclosure protection level. IS and non-incendive circuits are exempt.\n\nRule 18-154 (Sealing, Zone 2): Explosion seals at conduit entries to explosion-proof/flameproof enclosures — within 450 mm of enclosure, or 50 mm for field-drilled entries. Flammable fluid migration seals where conduit leaves Zone 2, with no fittings between seal and boundary — EXCEPT rigid unbroken conduit passing completely through with no fittings less than 300 mm beyond each boundary, terminating in non-hazardous areas. For outdoor Zone 2, the seal may be more than 300 mm beyond boundary if placed before the conduit enters an enclosure or building. Only Ex d unions, couplings, reducers, elbows between seal and enclosure. Explosion seals where cable enters Ex d enclosures. Conduit from seal to Ex d enclosure must comply with Rule 18-102 standards. Cables with continuous sheaths may pass through without seals.\n\nRule 18-156 (Luminaires, Zone 2): Protected by guards or by location against physical damage. Pendant luminaires suspended by threaded conduit stems or as specified by manufacturer. Stems > 300 mm need bracing or flex fitting. Portable lamps must comply with Zone 1 Rule 18-108.\n\nRule 18-158 (Flexible cords, Zone 2): Same requirements as Zone 1 — extra-hard-usage, bonding conductor, sealing glands at Ex d entries, increased safety "e" connectors at "e" entries. Also permitted where fixed wiring cannot provide movement — protected from damage.',
      fieldScenario:
        'You are wiring a Zone 2 area in a paint spray booth exhaust duct corridor. The classification is Zone 2 because flammable vapours are unlikely during normal operation but may briefly occur. Rule 18-152 gives you many wiring options. You choose TECK90 cable — armoured with an overall non-metallic jacket, permitted by Rule 18-152(1)(d).\n\nYou need to install a motor for the exhaust fan. It is an open-type, non-explosion-proof motor with no arcing components. Rule 18-150(2)(e) permits this in Zone 2. The motor has an anti-condensation heater. Rule 18-150(3) allows it if the heater has no arcing components, no temperature-limiting controls, and is marked with maximum surface temperature.\n\nThe TECK90 cable enters a junction box. Rule 18-152(7) says boxes in Zone 2 need not be explosion-proof unless another rule requires it. However, where the conduit exits the Zone 2 area and enters the non-hazardous MCC room, Rule 18-154(2)(a) requires a flammable fluid migration seal at the boundary.\n\nA run of rigid conduit passes through the Zone 2 corridor without terminating. Rule 18-154(2)(a) says an unbroken conduit passing completely through Zone 2 with no fittings less than 300 mm beyond each boundary does not need a seal, provided it terminates in non-hazardous areas.\n\nThe lighting is pendant-mounted on 400 mm conduit stems. Rule 18-156(3) requires bracing or a flexible fitting since the stems exceed 300 mm.',
      keyPoints: [
        'Zone 2 equipment: Table 18 compliance, EPL Gc minimum (Rule 18-150(1))',
        'Non-sparking equipment in Type 4/4X or IP65+ enclosures permitted without Zone marking (Rule 18-150(2)(c))',
        'Current-limiting filled fuses for overload, or any fuse for short-circuit only (Rule 18-150(2)(d))',
        'Open/non-explosion-proof motors without arcing components permitted in Zone 2 (Rule 18-150(2)(e))',
        'Anti-condensation heaters: no arcing, no temp-limiting controls, marked with max surface temp (Rule 18-150(3))',
        'Wiring: threaded conduit, HL cables, TECK90, ACWU90, TC cable in tray, RTRC XW, liquid-tight flex (Rule 18-152(1))',
        'Type CIC in cable tray: 300 V+ rating, 150 V circuit max, 5 A max (Rule 18-152(1)(g))',
        'RTRC XW conduit: industrial only, qualified persons, "-XW" marked fittings (Rule 18-152(1)(h))',
        'Boxes/fittings need NOT be explosion-proof unless required by other rules (Rule 18-152(7))',
        'Explosion seals at Ex d enclosures: 450 mm max, or 50 mm for field-drilled entries (Rule 18-154(1))',
        'Unbroken conduit through Zone 2 with 300 mm+ clear beyond boundaries: no seal needed (Rule 18-154(2)(a))',
        'Conduit from explosion seal to Ex d enclosure must meet Rule 18-102 standards (Rule 18-154(5))',
        'Pendant luminaires: stems > 300 mm need bracing or flex fitting (Rule 18-156(3))',
        'Flexible cords: extra-hard-usage, bonding conductor, sealing glands — same as Zone 1 (Rule 18-158)',
      ],
      diagramaMermaid: `graph TD
    A["ZONE 2\\nGas Unlikely"] --> B["Equipment:\\nTable 18 — EPL Gc+\\n(Rule 18-150)"]
    A --> C["Many Wiring Methods\\n(Rule 18-152)"]
    A --> D["Sealing\\n(Rule 18-154)"]
    B --> B1["Exceptions: open motors,\\nType 4/4X enclosures,\\nfilled fuses"]
    C --> C1["Threaded conduit"]
    C --> C2["HL cables"]
    C --> C3["TECK90, ACWU90"]
    C --> C4["TC cable in tray"]
    C --> C5["RTRC XW conduit\\nindustrial only"]
    C --> C6["Liquid-tight flex\\nheavy duty"]
    D --> D1["Ex seal: 450 mm\\nof Ex d enclosure"]
    D --> D2["50 mm for\\nfield-drilled entries"]
    D --> D3["Migration seal\\nat Zone 2 boundary"]
    style A fill:#065f46,stroke:#10b981,color:#e2e8f0
    style D1 fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'box', title: 'Boxes Need Not Be Ex', note: 'In Zone 2, boxes/fittings are not required to be explosion-proof unless specified — Rule 18-152(7)', color: 'emerald' },
        { icon: 'wire', title: 'Many Cable Options', note: 'TECK90, ACWU90, TC in tray, HL cables, RTRC XW — Rule 18-152(1)', color: 'sky' },
        { icon: 'lock', title: '50 mm for Field-Drilled', note: 'Explosion seals at field-drilled entries must be within 50 mm — Rule 18-154(1)(b)', color: 'rose' },
        { icon: 'power', title: 'Open Motors Permitted', note: 'Non-sparking motors without arcing components allowed in Zone 2 — Rule 18-150(2)(e)', color: 'amber' },
        { icon: 'sun', title: 'Portable Lamps: Zone 1 Rules', note: 'Portable lamps in Zone 2 must comply with Zone 1 Rule 18-108 — Rule 18-156(4)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 8. ZONE 20 — Equipment, Wiring, Sealing & Flexible Cords (Rules 18-190 to 18-196)
    // =========================================================================
    {
      id: '18-zone20',
      title: 'Zone 20 — Equipment, Wiring, Sealing & Cords (Dust)',
      rules: 'Rules 18-190 to 18-196',
      explanation:
        'Zone 20 is the most dangerous dust classification — explosive dust clouds are present continuously, for long periods, or frequently. This is analogous to Zone 0 for gas but deals with combustible dust and flyings.\n\nRule 18-190 (Equipment, Zone 20): Equipment must comply with Table 18. Only equipment with EPL Da (very high protection for dust) is permitted — not a source of ignition during normal operation, expected malfunctions, or rare malfunctions.\n\nRule 18-192 (Wiring methods, Zone 20): Only two methods are permitted: (a) threaded rigid metal conduit; or (b) hazardous location cables. Cables must be supported to avoid tensile stress at cable glands. Where flexible connections are necessary, they must be: (a) liquid-tight flexible metal conduit and connectors marked heavy duty; or (b) extra-hard-usage flexible cord with hazardous location cable glands. Where flexible connections are subject to oil or corrosive conditions, conductor insulation must be suitable for the condition or protected by a suitable sheath. IS circuits installed as "ia" or IS for Class II/III locations are exempt from these wiring requirements.\n\nRule 18-194 (Sealing, Zone 20): Where a raceway communicates between a dust-tight enclosure and one that is not dust-tight, dust entry must be prevented by one of three methods: (a) a permanent and effective seal; (b) a horizontal raceway section not less than 3 m long; or (c) a vertical raceway section not less than 1.5 m extending downward from the dust-tight enclosure.\n\nRule 18-196 (Flexible cords, Zone 20): Flexible cords must be extra-hard-usage cord with cable glands suitable for the application.',
      fieldScenario:
        'You are wiring inside a grain silo where combustible grain dust is present continuously — this is Zone 20. Rule 18-190 restricts you to EPL Da equipment (the highest dust protection level). You choose threaded rigid metal conduit as your wiring method per Rule 18-192(1)(a).\n\nThe conduit runs from a dust-tight junction box inside the silo to a standard junction box in the clean electrical room outside. Rule 18-194 requires you to prevent dust from migrating through the conduit into the dust-tight box. You have three options: install a permanent seal fitting, run at least 3 m of horizontal conduit, or run at least 1.5 m of vertical conduit extending downward from the dust-tight enclosure. You choose the permanent seal since space is limited.\n\nA vibrating bin discharger needs a flexible connection. Rule 18-192(3) allows liquid-tight flex conduit marked heavy duty, or extra-hard-usage cord with HL cable glands. The connection is in an area with grain oil residue, so Rule 18-192(4) requires the conductor insulation to be suitable for this corrosive condition.\n\nA portable inspection light is needed inside the silo. Rule 18-196 requires extra-hard-usage cord with cable glands suitable for the application.',
      keyPoints: [
        'Zone 20 equipment: Table 18 compliance, EPL Da only — very high dust protection (Rule 18-190)',
        'Wiring limited to threaded rigid metal conduit or hazardous location cables (Rule 18-192(1))',
        'Cables must avoid tensile stress at cable glands (Rule 18-192(2))',
        'Flexible connections: liquid-tight flex conduit (heavy duty) or extra-hard-usage cord with HL glands (Rule 18-192(3))',
        'Corrosive conditions: conductor insulation must be suitable or protected by a sheath (Rule 18-192(4))',
        'IS circuits ("ia" or IS for Class II/III) exempt from Zone 20 wiring requirements (Rule 18-192(5))',
        'Dust-tight sealing: permanent seal, 3 m horizontal raceway, or 1.5 m downward vertical raceway (Rule 18-194)',
        'Flexible cords: extra-hard-usage with suitable cable glands (Rule 18-196)',
      ],
      diagramaMermaid: `graph TD
    A["ZONE 20\\nDust Continuous"] --> B["Equipment:\\nTable 18 — EPL Da\\n(Rule 18-190)"]
    A --> C["Wiring Methods\\n(Rule 18-192)"]
    A --> D["Dust Sealing\\n(Rule 18-194)"]
    A --> E["Flex Cords:\\nextra-hard-usage\\n(Rule 18-196)"]
    C --> C1["Threaded rigid\\nmetal conduit"]
    C --> C2["HL cables"]
    C --> C3["Flex: liquid-tight\\nheavy duty"]
    D --> D1["Permanent seal"]
    D --> D2["3 m horizontal\\nraceway"]
    D --> D3["1.5 m downward\\nvertical raceway"]
    style A fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Highest Dust Risk', note: 'Explosive dust cloud present continuously or frequently — EPL Da only', color: 'rose' },
        { icon: 'wire', title: 'Two Wiring Options Only', note: 'Threaded rigid conduit or HL cables — no other methods in Zone 20 (Rule 18-192)', color: 'amber' },
        { icon: 'ruler', title: '3 m Horizontal or 1.5 m Down', note: 'Alternative dust sealing: long horizontal or downward vertical raceway (Rule 18-194)', color: 'sky' },
        { icon: 'shield', title: 'Corrosion Protection', note: 'Flex connections in corrosive areas need suitable insulation or sheath (Rule 18-192(4))', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 9. ZONE 21 — Equipment, Wiring & Sealing (Rules 18-200 to 18-204)
    // =========================================================================
    {
      id: '18-zone21',
      title: 'Zone 21 — Equipment, Wiring & Sealing (Dust)',
      rules: 'Rules 18-200 to 18-204',
      explanation:
        'Zone 21 is where explosive dust clouds are likely to occur occasionally during normal operation. The requirements are similar to Zone 20 but with slightly more flexibility in equipment protection levels.\n\nRule 18-200 (Equipment, Zone 21): Equipment must comply with Table 18. EPL Db (high protection for dust) or better is required — not a source of ignition during normal operation or expected malfunctions.\n\nRule 18-202 (Wiring methods, Zone 21): Same primary methods as Zone 20: (a) threaded rigid metal conduit; or (b) hazardous location cables. Boxes, fittings, and joints must be threaded for connection to conduit or cable glands and must be suitable for Zone 21 use. Cables must be supported to avoid tensile stress at glands. Flexible connections: (a) liquid-tight flex conduit marked heavy duty; or (b) extra-hard-usage cord with HL cable glands. Corrosive conditions require suitable insulation or sheath protection. IS circuits installed as "ia", "ib", or IS for Class II/III locations are exempt — note that Zone 21 allows "ib" in addition to "ia", unlike Zone 20 which only allows "ia".\n\nRule 18-204 (Sealing, Zone 21): Same requirements as Zone 20: where a raceway communicates between a dust-tight and non-dust-tight enclosure, prevent dust entry by: (a) permanent seal; (b) 3 m horizontal raceway; or (c) 1.5 m downward vertical raceway.',
      fieldScenario:
        'You are installing electrical equipment in a flour mill processing area. Dust clouds are likely during normal operation when grain is being milled — this is Zone 21. Rule 18-200 requires equipment rated EPL Db or better from Table 18.\n\nYou install threaded rigid metal conduit per Rule 18-202(1)(a). All junction boxes must be threaded for conduit connection and suitable for Zone 21 (Rule 18-202(2)). A screw conveyor motor needs a flexible connection — Rule 18-202(4) permits liquid-tight flex conduit marked heavy duty or extra-hard-usage cord with HL glands.\n\nThe conduit from a dust-tight motor terminal box runs to a standard junction box in the hallway. Rule 18-204 requires a dust seal — you install a permanent seal fitting, though you could alternatively use a 3 m horizontal section or 1.5 m downward vertical section of raceway.\n\nAn instrument technician wants to run an "ib" intrinsically safe 4-20 mA signal. Rule 18-202(6) permits "ia" and "ib" IS circuits to be exempt from the standard wiring methods in Zone 21 — unlike Zone 20 where only "ia" is permitted.',
      keyPoints: [
        'Zone 21 equipment: Table 18 compliance, EPL Db (high protection) or better (Rule 18-200)',
        'Wiring: threaded rigid metal conduit or hazardous location cables (Rule 18-202(1))',
        'Boxes, fittings, joints must be threaded and suitable for Zone 21 (Rule 18-202(2))',
        'Cables: avoid tensile stress at cable glands (Rule 18-202(3))',
        'Flexible connections: liquid-tight flex (heavy duty) or extra-hard-usage cord with HL glands (Rule 18-202(4))',
        'Corrosive conditions: suitable insulation or sheath protection (Rule 18-202(5))',
        'IS exemption: "ia" AND "ib" permitted in Zone 21 — more flexible than Zone 20 which only allows "ia" (Rule 18-202(6))',
        'Dust sealing: same as Zone 20 — permanent seal, 3 m horizontal, or 1.5 m downward vertical (Rule 18-204)',
      ],
      diagramaMermaid: `graph TD
    A["ZONE 21\\nDust Likely\\nOccasionally"] --> B["Equipment:\\nTable 18 — EPL Db+\\n(Rule 18-200)"]
    A --> C["Wiring Methods\\n(Rule 18-202)"]
    A --> D["Dust Sealing\\n(Rule 18-204)"]
    C --> C1["Threaded rigid\\nmetal conduit"]
    C --> C2["HL cables"]
    C --> C3["Boxes: threaded,\\nsuitable for Zone 21"]
    C --> C4["IS exempt:\\nia AND ib"]
    D --> D1["Same as Zone 20:\\nseal, 3 m horiz,\\nor 1.5 m vert"]
    style A fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C4 fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'EPL Db or Better', note: 'High protection — safe during normal ops and expected malfunctions (Rule 18-200)', color: 'amber' },
        { icon: 'wire', title: 'Same Wiring as Zone 20', note: 'Threaded conduit or HL cables — boxes must be Zone 21 suitable (Rule 18-202)', color: 'sky' },
        { icon: 'bolt', title: 'IS "ib" Now Permitted', note: 'Zone 21 allows "ia" AND "ib" — Zone 20 only allows "ia" (Rule 18-202(6))', color: 'emerald' },
        { icon: 'lock', title: 'Dust Sealing Identical', note: 'Same three sealing options as Zone 20 — Rule 18-204 matches Rule 18-194', color: 'violet' },
      ],
    },

    // =========================================================================
    // 10. ZONE 22 — Equipment, Wiring & Sealing (Rules 18-250 to 18-254)
    // =========================================================================
    {
      id: '18-zone22',
      title: 'Zone 22 — Equipment, Wiring, Sealing & Cranes (Dust)',
      rules: 'Rules 18-250 to 18-254',
      explanation:
        'Zone 22 is the least restrictive dust classification — explosive dust clouds are not likely in normal operation and, if they occur, persist only briefly. The rules allow the widest range of wiring methods for dust atmospheres and include special provisions for cranes and hoists.\n\nRule 18-250 (Equipment, Zone 22): Equipment must comply with Table 18. EPL Dc (enhanced protection for dust) is the minimum. Special provisions exist for travelling cranes, hoists, and textile machine cleaners in Zone 22, Group IIIA (combustible flyings) locations. These must have: (a) an isolated, ungrounded power supply with recording ground detection that alarms and auto-de-energizes on ground fault, OR visual/audible ground fault alarm that persists while power is supplied; (b) contact conductors located/guarded to be inaccessible to unauthorized persons and protected against accidental contact with foreign objects; (c) current collectors that confine sparking, have two or more contact surfaces per conductor, keep conductors free of lint/flyings, and have control equipment suitable for Zone 22.\n\nRule 18-252 (Wiring methods, Zone 22): Same broad range as Zone 2 for gas: (a) threaded metal conduit; (b) HL cables; (c) Type TC cable in tray per Rule 12-2202 (enclosed in conduit when leaving tray); (d) armoured cable with non-metallic jacket (TECK90, ACWU90, RC90, RA90); (e) armoured fire alarm cable (FAS types); (f) Type ACIC cable; (g) Type CIC cable in tray (300 V+ rating, 150 V circuit, 5 A max); (h) RTRC XW conduit (industrial, qualified persons, "-XW" marked); (i) liquid-tight flex conduit marked heavy duty. Boxes and fittings where connections are made must be Enclosure Type 4 or 5, OR must have telescoping/close-fitting covers to prevent escape of sparks and have no openings through which sparks or burning material could escape or ignite external dust. Cables must avoid tensile stress at glands. Flexible connections per Rule 18-202(4)(b) and (5). IS circuits ("ia", "ib", "ic", IS for Class II/III, or non-incendive) are exempt.\n\nRule 18-254 (Sealing, Zone 22): Sealing requirements are the same as Zone 21 — conform to Rule 18-204 (permanent seal, 3 m horizontal, or 1.5 m downward vertical).',
      fieldScenario:
        'You are wiring a Zone 22 area in a woodworking shop where sawdust accumulates but explosive dust clouds are unlikely during normal operation. Rule 18-252 gives you many wiring choices — you select TECK90 cable (Rule 18-252(1)(d)).\n\nJunction boxes where connections are made must be Enclosure Type 4 or 5, or must have close-fitting covers that prevent sparks from escaping and have no openings that could ignite external dust accumulations (Rule 18-252(2)). This is a critical detail often missed — standard boxes are not sufficient.\n\nA textile plant has an overhead crane in a Zone 22, Group IIIA area for moving cotton bales. Rule 18-250(2) requires the crane power supply to be isolated and ungrounded with ground detection that either auto-de-energizes on fault or gives persistent visual/audible alarm. The contact conductors must be guarded, and current collectors must confine sparking with at least two contact surfaces per conductor (Rule 18-250(2)(c)). Reliable means must keep the conductors free of lint buildup.\n\nThe conduit from a dust-tight motor in the shop runs to a clean panel room. Rule 18-254 points to Rule 18-204 for sealing — you need a permanent seal, 3 m horizontal raceway, or 1.5 m downward vertical raceway.\n\nAn IS circuit installed as "ic" is exempt from all the Zone 22 wiring methods per Rule 18-252(5) — Zone 22 is the only dust zone that allows "ic" IS circuits.',
      keyPoints: [
        'Zone 22 equipment: Table 18 compliance, EPL Dc (enhanced protection) minimum (Rule 18-250(1))',
        'Cranes/hoists in Zone 22 Group IIIA: isolated ungrounded supply with ground detection (Rule 18-250(2)(a))',
        'Crane ground detection: auto-de-energize on fault OR persistent visual/audible alarm (Rule 18-250(2)(a)(i)(ii))',
        'Current collectors: confine sparking, 2+ contact surfaces, keep free of lint/flyings (Rule 18-250(2)(c))',
        'Wiring methods: same broad range as Zone 2 gas — TECK90, TC in tray, RTRC XW, liquid-tight flex, etc. (Rule 18-252(1))',
        'Boxes at connections: Enclosure Type 4/5, OR close-fitting covers with no openings for spark/dust escape (Rule 18-252(2))',
        'Type CIC in tray: 300 V+ rating, 150 V circuit max, 5 A max (Rule 18-252(1)(g))',
        'Flexible connections per Rule 18-202(4)(b) and (5) — extra-hard-usage cord with HL glands (Rule 18-252(4))',
        'IS exemption: "ia", "ib", "ic", or non-incendive all permitted — most flexible dust zone (Rule 18-252(5))',
        'Sealing: same as Zone 20/21 — permanent seal, 3 m horizontal, or 1.5 m downward vertical per Rule 18-204 (Rule 18-254)',
        'TC cable in tray must be enclosed in rigid conduit wherever it leaves the cable tray (Rule 18-252(1)(c))',
        'RTRC XW conduit: industrial establishments only, qualified persons, "-XW" marked fittings (Rule 18-252(1)(h))',
      ],
      diagramaMermaid: `graph TD
    A["ZONE 22\\nDust Unlikely"] --> B["Equipment:\\nTable 18 — EPL Dc+\\n(Rule 18-250)"]
    A --> C["Many Wiring Methods\\n(Rule 18-252)"]
    A --> D["Sealing per\\nRule 18-204\\n(Rule 18-254)"]
    A --> E["Cranes & Hoists\\n(Rule 18-250-2)"]
    C --> C1["TECK90, ACWU90"]
    C --> C2["TC cable in tray"]
    C --> C3["RTRC XW conduit"]
    C --> C4["HL cables"]
    C --> C5["Liquid-tight flex"]
    E --> E1["Isolated ungrounded\\npower supply"]
    E --> E2["Ground detection:\\nalarm + de-energize"]
    E --> E3["2+ contact surfaces\\nper conductor"]
    B --> B1["Boxes: Type 4/5\\nor close-fitting covers"]
    style A fill:#065f46,stroke:#10b981,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'box', title: 'Box Type Matters', note: 'Type 4/5 or close-fitting covers with no openings for sparks/dust — Rule 18-252(2)', color: 'amber' },
        { icon: 'wire', title: 'Widest Dust Wiring Options', note: 'Same range as Zone 2 gas — TECK90, TC, RTRC XW, flex conduit (Rule 18-252)', color: 'sky' },
        { icon: 'magnet', title: 'Crane Special Rules', note: 'Isolated supply, ground detection, confined sparking, lint-free collectors (Rule 18-250(2))', color: 'rose' },
        { icon: 'shield', title: 'IS "ic" Allowed Here', note: 'Zone 22 is the only dust zone permitting "ic" and non-incendive circuits (Rule 18-252(5))', color: 'emerald' },
        { icon: 'lock', title: 'Same Dust Sealing', note: 'Permanent seal, 3 m horizontal, or 1.5 m downward vertical — Rule 18-254/18-204', color: 'violet' },
      ],
    },
  ],
}
