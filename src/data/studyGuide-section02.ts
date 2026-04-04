import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 2 — General Rules (CEC 2021, CSA C22.1:21, pages 70–77)
 * COMPLETE — Every rule from 2-000 to 2-404 is covered.
 * Source: PDF scan "Section 2-Canadian Electrical Code.pdf"
 */

export const section2Guide: StudyGuideSection = {
  section: '2',
  title: 'Section 2 — General Rules',
  description:
    'The foundation of all electrical work in Canada. Section 2 establishes the administrative framework (permits, inspections, approvals), equipment standards and markings, installation safety requirements, protection of persons and property, working space and maintenance rules, and enclosure type designations. These rules apply universally to every electrical installation in the country.',
  subsections: [
    // =========================================================================
    // 1. ADMINISTRATIVE — Permits & Inspections (Rules 2-000 to 2-018)
    // =========================================================================
    {
      id: '2-admin-permits',
      title: 'Administrative — Permits & Inspections',
      rules: 'Rules 2-000 to 2-018',
      explanation:
        'These are the "rules of the game" before any electrical work begins. The inspection department has full authority to adopt and enforce the CEC (Rule 2-000). Every job follows a strict sequence.\n\nRule 2-002 (Special requirements): Sections devoted to particular installations add to or amend the general rules — they don\'t replace them.\n\nRule 2-004 (Permit): Electrical contractors SHALL obtain a permit BEFORE commencing work on any installation, alteration, repair, or extension of electrical equipment. No exceptions.\n\nRule 2-006 (Application): An application for inspection must be filed on the department\'s form at the time the permit is obtained.\n\nRule 2-008 (Fees): Fees shall be paid at the time the permit is obtained — not after.\n\nRule 2-010 (Posting): The permit must be posted conspicuously at the work site and NOT removed until inspection is completed.\n\nRule 2-012 (Notification): The inspection department must be notified IN WRITING that work is ready for inspection, with enough lead time to inspect BEFORE any work is concealed.\n\nRule 2-014 (Plans): Plans and specifications in duplicate must be submitted before work begins on: (a) public buildings, industrial establishments, factories where public safety is involved; (b) large light/power installations, generators, transformers, switchboards, large batteries; (c) other installations as prescribed.\n\nRule 2-016 (Current-permit): No reconnection, installation, alteration, or addition shall be connected to any service until a current-permit has been obtained from the inspection department. This applies to supply authorities, contractors, and any other person.\n\nRule 2-018 (Reconnection): A supply authority does NOT require a current-permit for reconnection after service cutoff for non-payment or change of occupant, PROVIDED no alterations or additions were made since the last current-permit.',
      fieldScenario:
        'You\'re hired to add a 200A subpanel and 4 new circuits in a commercial shop. Before picking up your tools:\n\n1. Go to the city permit office, fill out the application form (Rule 2-006)\n2. Pay the fees at that time (Rule 2-008)\n3. Post the permit on the wall near the panel (Rule 2-010)\n4. Do the rough-in work\n5. Before drywall goes up, send written notification to the inspector (Rule 2-012) — email or paper\n6. Inspector comes, approves the work, you can cover walls\n7. Once everything is done, the inspection department issues a current-permit (Rule 2-016)\n8. Only then can the utility energize the service\n\nA tenant moves out and the new tenant wants power reconnected with no changes to the wiring. Rule 2-018 says the utility can reconnect WITHOUT a new current-permit since no alterations were made.',
      keyPoints: [
        'The inspection department has full authority to adopt and enforce the CEC (Rule 2-000)',
        'Special sections ADD TO general rules, they do not replace them (Rule 2-002)',
        'Permit BEFORE work starts — applies to installation, alteration, repair, or extension (Rule 2-004)',
        'Application for inspection filed on department form at time of permit (Rule 2-006)',
        'Fees paid at time of permit, not after (Rule 2-008)',
        'Post permit conspicuously — do NOT remove until inspection is COMPLETE (Rule 2-010)',
        'Written notification to inspector BEFORE concealing any work (Rule 2-012)',
        'Plans in duplicate for public buildings, large installations, generators, switchboards (Rule 2-014)',
        'Current-permit required BEFORE connecting to any power source — applies to everyone (Rule 2-016)',
        'Reconnection after non-payment or occupant change: NO current-permit needed IF no alterations were made (Rule 2-018)',
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

    // =========================================================================
    // 2. ADMINISTRATIVE — Powers, Approvals & Standards (Rules 2-020 to 2-032)
    // =========================================================================
    {
      id: '2-admin-powers',
      title: 'Administrative — Powers, Approvals & Standards',
      rules: 'Rules 2-020 to 2-032',
      explanation:
        'These rules give the inspection department broad powers to enforce safety and define what equipment is acceptable.\n\nRule 2-020 (Reinspection): The inspection department reserves the right to reinspect ANY installation if and when it considers it necessary. There is no limit on this power.\n\nRule 2-022 (Renovation): The inspection department MAY require changes to existing installations where dangerous conditions have developed through hard usage, wear and tear, or as a result of alterations or extensions.\n\nRule 2-024 (Approved equipment): ALL electrical equipment shall be approved and of a kind, type, and rating approved for the specific purpose. Exception: equipment described in Rule 16-222 1)(a) does not need approval.\n\nRule 2-026 (Powers of rejection): Even if approval was previously granted, the inspection department can reject equipment at ANY TIME if: (a) it\'s substandard compared to the approved sample; (b) conditions of use show it\'s not suitable; or (c) terms of the approval agreement aren\'t being met.\n\nRule 2-028 (Availability for inspection): No electrical work shall be rendered inaccessible by lathing, boarding, or other building construction until it has been accepted by the inspection department.\n\nRule 2-030 (Deviation): Any deviation or postponement from these rules requires SPECIAL PERMISSION before proceeding. This permission applies ONLY to the particular installation for which it is given — not to future work.\n\nRule 2-032 (Damage and interference): (1) No person shall damage any electrical installation. (2) If non-electrical work requires moving electrical components, the person doing the work must ensure the electrical installation is restored to safe condition. (3) Equipment exposed to water ingress must be evaluated before returning to service.',
      fieldScenario:
        'You\'re renovating a 40-year-old commercial kitchen. The inspector visits and notices deteriorated wiring behind the walls — melted insulation from years of heat exposure. Rule 2-022 gives the inspector authority to require you to replace that wiring, even though it wasn\'t part of your original scope.\n\nA supplier offers you a great deal on imported disconnect switches that have no CSA or cUL marking. Rule 2-024 says you CANNOT use them — all equipment must be approved for its specific purpose.\n\nDuring a flood, the basement panels were submerged. Rule 2-032(3) requires the equipment to be evaluated before being energized again — you can\'t just dry it off and flip the breaker.\n\nYou need to run conduit through an area that doesn\'t meet code spacing requirements. Rule 2-030 says you must get special permission from the inspection department BEFORE proceeding, and that permission only applies to THIS job.',
      keyPoints: [
        'Inspection department can reinspect ANY installation at any time (Rule 2-020)',
        'May require changes to existing installations where dangerous conditions developed (Rule 2-022)',
        'ALL electrical equipment must be approved for its specific purpose (Rule 2-024)',
        'Exception: equipment per Rule 16-222 1)(a) does not need approval (Rule 2-024(2))',
        'Inspection department can reject previously approved equipment if substandard, unsuitable, or terms not met (Rule 2-026)',
        'No electrical work rendered inaccessible until accepted by inspection department (Rule 2-028)',
        'Deviation from rules requires SPECIAL PERMISSION before proceeding — applies only to that specific installation (Rule 2-030)',
        'No person shall damage any electrical installation (Rule 2-032(1))',
        'If non-electrical work requires moving electrical components, must restore to safe condition (Rule 2-032(2))',
        'Equipment exposed to water ingress must be EVALUATED before returning to service (Rule 2-032(3))',
      ],
      diagramaMermaid: `graph TD
    A["Inspection Department\\nPowers"] --> B["Reinspect any\\ninstallation\\n(Rule 2-020)"]
    A --> C["Require changes to\\ndangerous existing\\ninstallations\\n(Rule 2-022)"]
    A --> D["Reject equipment\\nat any time\\n(Rule 2-026)"]
    E["Equipment Standards"] --> F["Must be APPROVED\\nfor specific purpose\\n(Rule 2-024)"]
    E --> G["No work hidden until\\naccepted by inspector\\n(Rule 2-028)"]
    E --> H["Deviation requires\\nSPECIAL PERMISSION\\n(Rule 2-030)"]
    I["Damage Rules"] --> J["No damage to\\ninstallations\\n(Rule 2-032-1)"]
    I --> K["Water-exposed equipment\\nmust be evaluated\\n(Rule 2-032-3)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'inspect', title: 'Reinspect Anytime', note: 'The department can revisit any installation — Rule 2-020', color: 'sky' },
        { icon: 'shield', title: 'Approved Only', note: 'Every piece of equipment must be approved for its purpose — Rule 2-024', color: 'emerald' },
        { icon: 'warning', title: 'Can Reject Anytime', note: 'Even previously approved equipment — Rule 2-026', color: 'rose' },
        { icon: 'lock', title: 'Special Permission', note: 'Any deviation needs written approval, for that job only — Rule 2-030', color: 'amber' },
      ],
    },

    // =========================================================================
    // 3. EQUIPMENT MARKING & RATINGS (Rules 2-100 to 2-108)
    // =========================================================================
    {
      id: '2-marking',
      title: 'Equipment Marking & Ratings',
      rules: 'Rules 2-100 to 2-108',
      explanation:
        'Every piece of electrical equipment must speak for itself through its markings.\n\nRule 2-100(1) (Required markings): Equipment must show: (a) maker\'s name/trademark; (b) catalogue number/type; (c) voltage; (d) rated load amperes; (e) watts/VA/HP; (f) AC/DC/both; (g) number of phases; (h) frequency in Hz; (i) rated speed in RPM; (j) terminal designations; (k) continuous or intermittent duty; (l) short-circuit current rating; (m) evidence of approval; (n) other markings for safe operation.\n\nRule 2-100(2) (Service box): At installation, each service box shall be marked conspicuously, legibly, and permanently to show the maximum rating of overcurrent device permitted.\n\nRule 2-100(3) (Distribution points): At each distribution point, breakers/fuses/switches shall be marked adjacent to indicate: (a) which installation they protect/control; AND (b) the maximum rating of overcurrent device permitted.\n\nRule 2-100(4) (Caution label): Where the maximum continuous load (per Rule 8-104(5)&(6)) is LESS than the continuous operating marking of the device, a permanent caution label must be field-applied adjacent to the nameplate.\n\nRule 2-100(5): Equipment markings shall NOT be changed to indicate a use not approved.\n\nRule 2-102 (Warning markings): Field-installed warning and caution markings must be in the language(s) mandated by the local authority.\n\nRule 2-104 (Equipment ratings): (1) Equipment with short-circuit/withstand rating must have sufficient rating for the voltage and fault current available at its terminals. (2) Equipment marked with dual voltage ratings (e.g., 208Y/120V) can ONLY be connected in solidly grounded circuits where line-to-ground doesn\'t exceed the lower value and line-to-line doesn\'t exceed the higher value.\n\nRule 2-106 (Rebuilt equipment): (1) Rebuilt/rewound equipment with changed rating needs a new nameplate with the rebuilder\'s name. (2) If original nameplate removed, original manufacturer data must be added to new plate. (3) Canadian safety standards for new equipment apply to rebuilt equipment. (4) CRITICAL: Rebuilt or refurbished MCCBs or moulded case switches are NOT considered approved.\n\nRule 2-108 (Substitution): If exact size/rating is not available, use a LARGER size/rating, except where smaller complies with Rule 2-030 (special permission).',
      fieldScenario:
        'You\'re installing a 400A service panel. Rule 2-100(2) requires you to permanently mark the service box with the maximum overcurrent device rating. Inside, each breaker must be labeled with what circuit/equipment it protects AND the maximum OCPD allowed (Rule 2-100(3)).\n\nA 100A fused disconnect has a maximum continuous load of 80A per Rule 8-104. But the disconnect is marked "100A continuous." Rule 2-100(4) requires you to field-apply a caution label saying the maximum continuous load is 80A.\n\nA client offers you used "reconditioned" circuit breakers. Rule 2-106(4) says NO — rebuilt or refurbished MCCBs are NOT considered approved. Reject them.\n\nYou need a 600A disconnect but only 800A is available. Rule 2-108 says you can use the larger 800A as long as it\'s consistent with the purpose.\n\nA panel is marked 208Y/120V. Rule 2-104(2) says it can ONLY be connected to a solidly grounded system where no conductor exceeds 120V to ground and no pair exceeds 208V.',
      keyPoints: [
        'Equipment must show: maker, catalog #, voltage, amps, watts/HP, AC/DC, phases, Hz, RPM, terminal ID, duty, short-circuit rating, approval (Rule 2-100(1))',
        'Service box permanently marked with max OCPD rating at installation (Rule 2-100(2))',
        'Distribution points: mark what is protected AND max OCPD rating (Rule 2-100(3))',
        'Caution label required when max continuous load < device continuous rating (Rule 2-100(4))',
        'Never change equipment markings to indicate unapproved use (Rule 2-100(5))',
        'Warning markings must be in language mandated by local authority (Rule 2-102)',
        'Equipment short-circuit rating must be ≥ available fault current at terminals (Rule 2-104(1))',
        'Dual voltage equipment (e.g., 208Y/120V): only in solidly grounded circuits, line-to-ground ≤ lower value, line-to-line ≤ higher value (Rule 2-104(2))',
        'Rebuilt equipment with changed rating: new nameplate with rebuilder name (Rule 2-106(1))',
        'Original manufacturer data must be on new nameplate if original removed (Rule 2-106(2))',
        'Canadian safety standards for new equipment also apply to rebuilt (Rule 2-106(3))',
        'Rebuilt MCCBs or moulded case switches are NOT approved (Rule 2-106(4))',
        'If exact size unavailable, use LARGER — never smaller without special permission (Rule 2-108)',
        'AWG size references mean COPPER unless otherwise specified (Rule 2-120)',
      ],
      diagramaMermaid: `graph TD
    A["Equipment Marking\\n(Rule 2-100)"] --> B["Required Info:\\nMaker, voltage, amps,\\nphases, Hz, approval"]
    A --> C["Service Box:\\nMax OCPD rating\\n(Rule 2-100-2)"]
    A --> D["Distribution Points:\\nWhat protected +\\nMax OCPD\\n(Rule 2-100-3)"]
    A --> E["Caution Label:\\nWhen load < rating\\n(Rule 2-100-4)"]
    F["Equipment Ratings\\n(Rule 2-104)"] --> G["Short-circuit rating >=\\navailable fault current"]
    F --> H["Dual voltage: solidly\\ngrounded only"]
    I["Rebuilt Equipment\\n(Rule 2-106)"] --> J["New nameplate\\nwith rebuilder name"]
    I --> K["Rebuilt MCCBs =\\nNOT APPROVED"]
    style K fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0`,
      infoCards: [
        { icon: 'label', title: 'Read the Nameplate', note: 'Voltage, amps, phases, Hz, approval — it must all be there', color: 'sky' },
        { icon: 'bolt', title: 'Service Box Mark', note: 'Permanently show max OCPD rating — Rule 2-100(2)', color: 'amber' },
        { icon: 'warning', title: 'Caution Label', note: 'When continuous load < device rating — Rule 2-100(4)', color: 'rose' },
        { icon: 'shield', title: 'Never Use Rebuilt MCCBs', note: 'Refurbished breakers are NOT approved — Rule 2-106(4)', color: 'rose' },
      ],
    },

    // =========================================================================
    // 4. VOLTAGE, QUALITY & MATERIALS (Rules 2-110 to 2-120)
    // =========================================================================
    {
      id: '2-voltage-materials',
      title: 'Voltage Limits, Quality & Materials',
      rules: 'Rules 2-110 to 2-120',
      explanation:
        'These rules govern voltage limits in dwellings and the quality standards for materials and workmanship.\n\nRule 2-110 (Voltage-to-ground in dwellings): Branch circuits in dwelling units shall NOT exceed 150V-to-ground. This is why standard outlets run at 120V (well within the 150V limit). EXCEPTION: In apartment or similar buildings where the calculated service load exceeds 250 kVA AND qualified electrical maintenance personnel are available, higher voltages up to 347V-to-ground (from a 600Y/347V system) are permitted for FIXED (not portable) equipment only: (a) space heating — but wall thermostats must not exceed 300V-to-ground; (b) water heating; (c) air conditioning.\n\nRule 2-112 (Quality of work): The mechanical arrangement and execution of all electrical work shall be acceptable. This is a catch-all rule — sloppy work can be rejected even if it technically meets other rules.\n\nRule 2-114 (Anchoring): Wood or similar material shall NOT be used as an anchor into masonry or concrete for supporting electrical equipment. Use proper masonry anchors.\n\nRule 2-116 (Corrosion protection): (1) Metals used in wiring (raceways, cable sheaths, armour, boxes, fittings) shall be protected against corrosion for the environment or made of corrosion-resistant material. (2) Where practicable, dissimilar metals shall NOT be used where galvanic action is possible.\n\nRule 2-118 (Soldering fluxes): Fluxes for soldering copper and its alloys shall be non-corrosive to copper.\n\nRule 2-120 (AWG sizes): Where the CEC refers to AWG size, it means COPPER AWG size unless otherwise specified.',
      fieldScenario:
        'You\'re wiring a duplex. Each unit\'s branch circuits run at 120/240V — well within the 150V-to-ground limit of Rule 2-110. A contractor suggests running 347V baseboard heaters to save on wire costs. For a single dwelling, that VIOLATES Rule 2-110. However, if this were a large apartment building with >250 kVA service and a maintenance electrician on staff, 347V fixed heating would be permitted.\n\nYou\'re mounting a panel on a concrete wall. The foreman grabs a piece of 2x4 to use as a backing board. Rule 2-114 says NO — wood cannot be used to anchor electrical equipment to masonry. Use Tapcon screws or proper expansion anchors directly into the concrete.\n\nYou need to connect an aluminum conduit to a copper grounding busbar. Rule 2-116(2) warns about galvanic action between dissimilar metals. Use a bi-metallic connector or apply anti-oxidant compound.',
      keyPoints: [
        'Dwelling branch circuits: max 150V-to-ground (Rule 2-110)',
        'Exception: apartments >250 kVA + qualified maintenance staff → up to 347V for fixed heating/water/AC (Rule 2-110)',
        'Wall thermostats for space heating: max 300V-to-ground even with the exception (Rule 2-110)',
        'The 347V exception applies ONLY to fixed equipment, never portable (Rule 2-110)',
        'Quality of work must be acceptable — catch-all for sloppy installations (Rule 2-112)',
        'Wood or similar material CANNOT anchor electrical equipment to masonry/concrete (Rule 2-114)',
        'Metals in wiring must be corrosion-protected for their environment (Rule 2-116(1))',
        'Avoid dissimilar metals where galvanic action is possible (Rule 2-116(2))',
        'Soldering flux on copper must be non-corrosive (Rule 2-118)',
        'AWG size references in the CEC mean COPPER unless otherwise specified (Rule 2-120)',
      ],
      diagramaMermaid: `graph TD
    A["Voltage in Dwellings\\n(Rule 2-110)"] --> B["Max 150V\\nto ground"]
    B --> C{"Service > 250 kVA +\\nqualified staff?"}
    C -->|Yes| D["Up to 347V for\\nfixed heating/water/AC"]
    C -->|No| E["Stay at 150V max"]
    D --> F["Thermostats max\\n300V-to-ground"]
    G["Materials"] --> H["No wood anchors\\nto masonry\\n(Rule 2-114)"]
    G --> I["Corrosion protection\\nrequired\\n(Rule 2-116)"]
    G --> J["Avoid dissimilar\\nmetals\\n(Rule 2-116-2)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'Max 150V to Ground', note: 'Dwelling branch circuits — the baseline safety limit — Rule 2-110', color: 'sky' },
        { icon: 'thermometer', title: '347V Exception', note: 'Only in >250 kVA buildings with qualified staff, fixed equipment only', color: 'amber' },
        { icon: 'shield', title: 'No Wood Anchors', note: 'Use proper masonry anchors, not wood — Rule 2-114', color: 'rose' },
        { icon: 'wire', title: 'AWG = Copper', note: 'Unless it says otherwise — Rule 2-120', color: 'slate' },
      ],
    },

    // =========================================================================
    // 5. INSTALLATION, FIRE & SUNLIGHT (Rules 2-122 to 2-140)
    // =========================================================================
    {
      id: '2-installation-fire',
      title: 'Installation, Thermal Insulation, Fire & Sunlight',
      rules: 'Rules 2-122 to 2-140',
      explanation:
        'These rules govern the physical installation of equipment, thermal insulation interaction, fire safety, and environmental protection.\n\nRule 2-122 (Equipment installation): Equipment must be installed to ensure ready access to nameplates and parts requiring maintenance.\n\nRule 2-124 (Non-electrical equipment): Non-electrical equipment or material must NOT be placed so close to electrical equipment as to create a dangerous condition.\n\nRule 2-126 (Thermal insulation): (1a) Ensure conductor temps not exceeded from mutual heating or reduced heat dissipation. (1b) Loose/free-flowing insulation (non-corrosive, fire-resisting, non-conductive, NBC-compliant): any wiring method OK, but watch for strain from weight/pressure. (1c) Batt/rigid sheets installed BEFORE wiring and secured: no special precaution needed. (1d) Metal-faced insulation: (i) 25mm separation from knob-and-tube wiring; (ii) NMD cable may touch it. (1e) MI cable, aluminum-sheathed, copper-sheathed: avoid corrosive thermal insulation. (2) Thermal insulation shall NOT be sprayed or introduced into outlet boxes, junction boxes, or enclosures.\n\nRule 2-128 (Fire spread): (1) Installations must minimize fire spread through firestopped partitions, floors, hollow spaces, firewalls, shafts, ducts. (2) Where a fire separation is pierced by raceway or cable, openings must be sealed per the National Building Code.\n\nRule 2-130 (Flame spread — cables): Conductors and cables in buildings must meet NBC flame spread requirements.\n\nRule 2-132 (Flame spread — raceways): Totally enclosed non-metallic raceways must meet NBC flame spread requirements.\n\nRule 2-134 (Seismic restraint): Where required by local legislation, electrical equipment must have seismic restraint per the NBC.\n\nRule 2-136 (Sunlight resistance): (1) Conductors, cables, and non-metallic raceways exposed to direct sunlight must be marked as sunlight resistant. (2) Where the outer covering of a sunlight-resistant cable is removed for termination and inner insulation is exposed to sun, the internal conductors must be: (a) marked sunlight resistant; OR (b) protected by sunlight-resistant tubing/tape.\n\nRule 2-138 (Insulation integrity): All wiring must be free from short-circuits and grounds when completed, except as permitted in Section 10 (grounding).\n\nRule 2-140 (GFCI): Class A GFCIs may be used as supplementary shock protection but are NOT a substitute for insulation or grounding, except per Rule 26-702(2).',
      fieldScenario:
        'You\'re wiring a new home. The insulation contractor says they\'ll blow in loose-fill cellulose after your rough-in. Rule 2-126(1b) says any wiring method is OK, but ensure no strain on cables from the insulation weight.\n\nThe drywaller asks if they can cover the junction boxes with insulation before the inspector arrives. Rule 2-126(2) says NO — thermal insulation must NOT be inside outlet boxes, junction boxes, or enclosures.\n\nA rooftop solar installation requires conduit running in direct sunlight. Rule 2-136(1) requires sunlight-resistant marking. Where you strip the outer jacket inside the inverter box, Rule 2-136(2) requires the exposed inner conductors to also be sunlight-resistant or protected with rated tape.\n\nYour conduit passes through a 2-hour fire-rated wall. Rule 2-128(2) requires you to seal the opening around the conduit with NBC-compliant firestopping material — usually intumescent caulk or fire putty.\n\nA homeowner says "I have GFCIs everywhere, so grounding isn\'t important." Rule 2-140 says GFCIs are supplementary protection ONLY — they are NOT a substitute for proper insulation or grounding.',
      keyPoints: [
        'Equipment installed with ready access to nameplates and maintenance parts (Rule 2-122)',
        'Non-electrical equipment must not create dangerous proximity to electrical equipment (Rule 2-124)',
        'Thermal insulation: watch for conductor overheating from mutual heating or reduced dissipation (Rule 2-126(1a))',
        'Loose fill insulation: any wiring method OK, but prevent strain from weight (Rule 2-126(1b))',
        'Batt insulation installed FIRST and secured: no special precaution (Rule 2-126(1c))',
        'Metal-faced insulation: 25mm separation from knob-and-tube; NMD cable may touch (Rule 2-126(1d))',
        'MI, aluminum-sheathed, copper-sheathed cables: avoid corrosive insulation types (Rule 2-126(1e))',
        'NO thermal insulation inside outlet boxes, junction boxes, or enclosures (Rule 2-126(2))',
        'Fire spread minimized through partitions, floors, firewalls, shafts, ducts (Rule 2-128(1))',
        'Fire separation penetrations sealed per NBC (Rule 2-128(2))',
        'Cables and conductors in buildings: NBC flame spread requirements (Rule 2-130)',
        'Non-metallic raceways in buildings: NBC flame spread requirements (Rule 2-132)',
        'Seismic restraint per NBC where required by local legislation (Rule 2-134)',
        'Sunlight-exposed conductors/cables/raceways must be marked sunlight resistant (Rule 2-136(1))',
        'Inner conductors exposed at termination: must be sunlight resistant or protected (Rule 2-136(2))',
        'Completed wiring must be free from short-circuits and grounds except Section 10 (Rule 2-138)',
        'Class A GFCIs = supplementary shock protection ONLY, not a substitute for insulation or grounding (Rule 2-140)',
      ],
      diagramaMermaid: `graph TD
    A["Installation Rules"] --> B["Access to nameplates\\nand maintenance\\n(Rule 2-122)"]
    A --> C["Non-electrical items\\nnot dangerously close\\n(Rule 2-124)"]
    D["Thermal Insulation\\n(Rule 2-126)"] --> E["Loose fill: any method\\nwatch for strain"]
    D --> F["Batt first: no precaution"]
    D --> G["Metal-faced: 25mm from\\nK&T, NMD may touch"]
    D --> H["NO insulation inside\\nboxes or enclosures"]
    I["Fire & Environment"] --> J["Seal fire penetrations\\nper NBC (Rule 2-128)"]
    I --> K["Sunlight resistant\\nmarking required\\n(Rule 2-136)"]
    I --> L["GFCIs = supplementary\\nonly (Rule 2-140)"]
    style D fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style L fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Seal Fire Penetrations', note: 'Every raceway/cable through a firewall — sealed per NBC — Rule 2-128', color: 'rose' },
        { icon: 'sun', title: 'Sunlight Resistant', note: 'Exposed to sun? Must be marked — Rule 2-136', color: 'amber' },
        { icon: 'box', title: 'No Insulation in Boxes', note: 'Never spray or fill outlet/junction boxes — Rule 2-126(2)', color: 'rose' },
        { icon: 'shield', title: 'GFCI ≠ Grounding', note: 'Supplementary only, never a substitute — Rule 2-140', color: 'violet' },
      ],
    },

    // =========================================================================
    // 6. PROTECTION OF PERSONS & PROPERTY (Rules 2-200 to 2-202)
    // =========================================================================
    {
      id: '2-protection',
      title: 'Protection of Persons & Property',
      rules: 'Rules 2-200 to 2-202',
      explanation:
        'These rules exist for one reason: keeping people alive.\n\nRule 2-200 (General): ALL electrical equipment shall be installed and GUARDED so that adequate provision is made for: (a) the safety of persons and property; AND (b) the protection of electrical equipment from mechanical or other damage.\n\nRule 2-202 (Guarding of bare live parts): (1) Bare live parts shall be guarded against accidental contact by suitable enclosures EXCEPT where: (a) located in a suitable room, vault, or enclosed area accessible ONLY to qualified persons; OR (b) as permitted elsewhere by the CEC.\n\n(2) Where electrical equipment has non-electrical components mounted within 900mm of bare live parts that require servicing by UNQUALIFIED persons, suitable barriers or covers shall be provided for the bare live parts.\n\n(3) Entrances to rooms and guarded locations containing exposed bare live parts shall be marked with conspicuous WARNING SIGNS forbidding entry to unqualified persons.',
      fieldScenario:
        'You\'re installing a 600V switchgear lineup in a manufacturing facility. The bus bars are bare copper energized at 600V. Rule 2-202(1) requires these to be in an enclosure. The electrical room is locked (Rule 2-202(1a)), restricting access to qualified persons.\n\nA process display screen is mounted on the outside of the switchgear that maintenance staff sometimes service. Since this non-electrical component is within 900mm of bare live parts and requires service by unqualified persons, Rule 2-202(2) requires barriers or covers over the live parts when that panel door is open.\n\nThe room has two doors. Both must have conspicuous warning signs forbidding entry to unqualified persons (Rule 2-202(3)).',
      keyPoints: [
        'All equipment installed and guarded for safety of persons, property, and equipment (Rule 2-200)',
        'Bare live parts must be enclosed (Rule 2-202(1))',
        'Exception: bare live parts OK in locked room/vault accessible only to qualified persons (Rule 2-202(1a))',
        'Non-electrical components within 900mm of bare live parts serviced by unqualified persons = barriers required (Rule 2-202(2))',
        'Entrances to rooms with exposed bare live parts: conspicuous WARNING SIGNS required (Rule 2-202(3))',
        'Warning signs must forbid entry to unqualified persons (Rule 2-202(3))',
      ],
      diagramaMermaid: `graph TD
    A["Bare Live Parts\\n(Rule 2-202)"] --> B{"Enclosed?"}
    B -->|Yes| C["OK"]
    B -->|No| D{"In locked room\\nfor qualified only?"}
    D -->|Yes| E["OK with\\nWARNING SIGNS\\nat all entrances"]
    D -->|No| F["VIOLATION"]
    E --> G{"Non-electrical parts\\nwithin 900mm?"}
    G -->|Yes| H["BARRIERS required\\n(Rule 2-202-2)"]
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

    // =========================================================================
    // 7. MAINTENANCE, DISCONNECTION & WORKING SPACE (Rules 2-300 to 2-314)
    // =========================================================================
    {
      id: '2-maintenance-space',
      title: 'Maintenance, Disconnection & Working Space',
      rules: 'Rules 2-300 to 2-314',
      explanation:
        'These rules protect the electrician doing the work.\n\nRule 2-300 (General maintenance): (1) All operating electrical equipment shall be kept in safe and proper working condition. (2) Emergency equipment: periodically inspected and tested for fitness. (3) Infrequently used equipment: thoroughly inspected before use. (4) Defective equipment: put in good order OR permanently disconnected.\n\nRule 2-302 (Hazardous locations): Equipment in hazardous locations shall comply with Rule 18-010.\n\nRule 2-304 (Disconnection): (1) No repairs or alterations on live equipment except where complete disconnection is not feasible. (2) Three-way and four-way switches are NOT disconnecting means. (3) Adequate precautions required: locks on breakers/switches, warning notices, sentries, or equally effective means to prevent accidental energization.\n\nRule 2-306 (Arc flash): (1) Switchboards, panelboards, industrial control panels, meter socket enclosures, and MCCs in NON-DWELLING locations that may be serviced while energized must be field marked for shock and arc flash hazards. (2) Marking must be visible BEFORE examination, adjustment, servicing, or maintenance.\n\nRule 2-308 (Working space): (1) Minimum 1m with secure footing around equipment with renewable parts, disconnects, or requiring maintenance. (2) Not required behind equipment with no renewable parts and accessible connections elsewhere. (3) Must allow full extension of drawout equipment, doors opening ≥90°. (4) Per Table 56 for switchboards/panels/MCCs with exposed live parts. (5) Minimum headroom 2.2m where bare live parts are exposed.\n\nRule 2-310 (Egress): (1) Each room with electrical equipment must have unobstructed egress per NBC. (2) Equipment rated ≥1200A or >750V: must allow escape without passing the failure point. If not possible, working space increases to minimum 1.5m. (3) Potential failure point = any point within or on the equipment. (4) Doors/gates operable from equipment side without key or tool.\n\nRule 2-312 (Transformer space): Transformers >50 kVA: minimum 1m horizontal working space on sides providing access to conductor connections.\n\nRule 2-314 (Accessibility): Passageways and working space shall NOT be used for storage and shall be kept clear, with ready access to all parts requiring attention.',
      fieldScenario:
        'You\'re doing maintenance on a 1600A MCC in an industrial plant. Rule 2-308 requires 1m clear working space. Headroom must be 2.2m minimum (Rule 2-308(5)).\n\nBecause the MCC is rated over 1200A, Rule 2-310(2) requires you to be able to exit the room WITHOUT passing the MCC in case of a failure. The room has two exits on opposite sides. If there were only one exit (past the MCC), working space would increase to 1.5m minimum.\n\nBefore working, you apply a lock on the supply breaker and a warning tag (Rule 2-304(3)). The three-way switch in the hallway is NOT a valid disconnect (Rule 2-304(2)).\n\nThe MCC must have arc flash labels already applied (Rule 2-306) — this applies to all panelboards, switchboards, meter sockets, and MCCs in non-dwelling locations.\n\nSomeone has stored boxes of parts in front of the switchgear. Rule 2-314 says this is a violation — working space cannot be used for storage.',
      keyPoints: [
        'All operating equipment: kept in safe and proper working condition (Rule 2-300(1))',
        'Emergency equipment: periodically inspected and tested (Rule 2-300(2))',
        'Infrequently used equipment: thoroughly inspected before use (Rule 2-300(3))',
        'Defective equipment: fix it or permanently disconnect it (Rule 2-300(4))',
        'Hazardous locations: comply with Rule 18-010 (Rule 2-302)',
        'No live work except where disconnect is not feasible (Rule 2-304(1))',
        'Three-way and four-way switches are NOT disconnecting means (Rule 2-304(2))',
        'Locks, warning notices, sentries required to prevent accidental energization (Rule 2-304(3))',
        'Arc flash labels: switchboards, panelboards, MCCs, meter sockets — NOT in dwelling units (Rule 2-306)',
        'Arc flash marking visible BEFORE any examination or maintenance (Rule 2-306(2))',
        'Minimum working space: 1m with secure footing (Rule 2-308(1))',
        'Working space NOT required behind equipment with no renewable parts and accessible connections elsewhere (Rule 2-308(2))',
        'Drawout equipment: working space + room for full extension, doors open ≥90° (Rule 2-308(3))',
        'Switchboards/MCCs with bare live parts: working space per Table 56 (Rule 2-308(4))',
        'Minimum headroom: 2.2m where bare live parts exposed (Rule 2-308(5))',
        'Equipment ≥1200A or >750V: must allow escape without passing failure point (Rule 2-310(2))',
        'If dual egress impossible: minimum working space increases to 1.5m (Rule 2-310(2))',
        'Failure point = any point within or on the equipment (Rule 2-310(3))',
        'Doors/gates operable from equipment side without key or tool (Rule 2-310(4))',
        'Transformers >50 kVA: 1m horizontal working space on conductor-access sides (Rule 2-312)',
        'Working space cannot be used for storage — kept clear at all times (Rule 2-314)',
      ],
      diagramaMermaid: `graph TD
    A["Working Space"] --> B["Min 1m clear\\n(Rule 2-308-1)"]
    B --> C{"Bare live parts?"}
    C -->|Yes| D["Headroom 2.2m\\n(Rule 2-308-5)"]
    C -->|No| E["Standard 1m"]
    D --> F{">= 1200A or > 750V?"}
    F -->|Yes| G{"Dual egress?"}
    G -->|Yes| H["Exit without\\npassing equipment"]
    G -->|No| I["Space increases\\nto 1.5m"]
    F -->|No| J["Standard egress"]
    K["Disconnection\\n(Rule 2-304)"] --> L["No live work\\nunless unavoidable"]
    K --> M["3-way/4-way switches\\nNOT disconnects"]
    K --> N["Locks + warnings\\n+ sentries"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '1m Clear Space', note: 'Minimum working distance in front of any equipment — Rule 2-308', color: 'sky' },
        { icon: 'warning', title: '2.2m Headroom', note: 'Where bare live parts are exposed — Rule 2-308(5)', color: 'amber' },
        { icon: 'shield', title: 'Escape Route', note: 'Equipment >= 1200A: exit without passing the failure point — Rule 2-310', color: 'rose' },
        { icon: 'label', title: 'Arc Flash Labels', note: 'Required on panels, MCCs, meter sockets — not in dwellings — Rule 2-306', color: 'violet' },
        { icon: 'lock', title: 'LOTO Required', note: 'Locks, warnings, sentries before work — Rule 2-304(3)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 8. MAINTENANCE FACILITIES (Rules 2-316 to 2-328)
    // =========================================================================
    {
      id: '2-maintenance-facilities',
      title: 'Maintenance Facilities & Environment',
      rules: 'Rules 2-316 to 2-328',
      explanation:
        'These rules ensure that electrical equipment has the supporting infrastructure it needs to be safely maintained and operated.\n\nRule 2-316 (Maintenance receptacles): Where HVAC or similar equipment is installed on a rooftop (other than at a dwelling unit), at least one receptacle shall be provided for maintenance, installed per Rule 26-710.\n\nRule 2-318 (Mobile structures): Where a mobile industrial or commercial structure has transfer equipment for an alternate power supply, at least one 5-15R or 5-20R receptacle must be provided connected to or capable of being connected to the alternate supply.\n\nRule 2-320 (Illumination): Adequate illumination shall be provided for proper operation and maintenance of electrical equipment.\n\nRule 2-322 (Flammable material): Flammable material shall NOT be stored or placed in dangerous proximity to electrical equipment.\n\nRule 2-324 (Ventilation): Adequate ventilation shall prevent ambient air temperatures around electrical equipment from exceeding normally permissible levels.\n\nRule 2-326 (Drainage): Equipment with provision for draining moisture shall be installed so the drainage path is not impeded.\n\nRule 2-328 (Combustible gas equipment): Clearance between arc-producing electrical equipment and combustible gas relief devices or vents shall comply with CSA B149.1.',
      fieldScenario:
        'You\'re installing rooftop HVAC equipment on a commercial building. Rule 2-316 requires at least one receptacle on the roof for maintenance — the tech needs somewhere to plug in tools and test equipment. It must be installed per Rule 26-710 (GFCI protected, weatherproof).\n\nInside the electrical room, someone has stacked cardboard boxes against the switchgear. Rule 2-322 says flammable material cannot be stored near electrical equipment — have them removed immediately.\n\nA transformer room has no ventilation. Rule 2-324 requires adequate ventilation to keep ambient temperatures within equipment ratings. Without it, the transformer may overheat and trip or fail.\n\nThe natural gas meter is right next to the main electrical panel. Rule 2-328 requires clearance between arc-producing equipment and gas relief devices per CSA B149.1.',
      keyPoints: [
        'Rooftop HVAC (non-dwelling): at least 1 receptacle required for maintenance (Rule 2-316)',
        'Mobile structures with transfer equipment: at least 1 receptacle (5-15R or 5-20R) from alternate supply (Rule 2-318)',
        'Adequate illumination required for operation and maintenance (Rule 2-320)',
        'Flammable material NOT stored near electrical equipment (Rule 2-322)',
        'Adequate ventilation to prevent excessive ambient temperatures (Rule 2-324)',
        'Drainage paths for moisture must not be impeded (Rule 2-326)',
        'Clearance between arc-producing equipment and combustible gas devices per CSA B149.1 (Rule 2-328)',
      ],
      diagramaMermaid: `graph TD
    A["Maintenance\\nFacilities"] --> B["Rooftop receptacle\\nfor HVAC maintenance\\n(Rule 2-316)"]
    A --> C["Adequate illumination\\n(Rule 2-320)"]
    A --> D["Adequate ventilation\\n(Rule 2-324)"]
    E["Hazards"] --> F["No flammable material\\nnear equipment\\n(Rule 2-322)"]
    E --> G["Gas clearance\\nper CSA B149.1\\n(Rule 2-328)"]
    E --> H["Drainage path\\nunimpeded\\n(Rule 2-326)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Rooftop Receptacle', note: 'Required for HVAC maintenance on non-dwelling rooftops — Rule 2-316', color: 'sky' },
        { icon: 'fire', title: 'No Flammables Nearby', note: 'Keep combustible materials away from electrical equipment — Rule 2-322', color: 'rose' },
        { icon: 'thermometer', title: 'Ventilation Required', note: 'Keep ambient temps within equipment ratings — Rule 2-324', color: 'amber' },
      ],
    },

    // =========================================================================
    // 9. ENCLOSURES (Rules 2-400 to 2-404)
    // =========================================================================
    {
      id: '2-enclosures',
      title: 'Enclosures',
      rules: 'Rules 2-400 to 2-404',
      explanation:
        'Enclosures are the armor that protects electrical equipment from the environment and the environment from the equipment.\n\nRule 2-400(1) (Type designations): The CEC recognizes specific enclosure types per Table 65:\n- Type 1: Indoors, ordinary locations\n- Type 2: Indoors, subject to dripping liquid from condensation\n- Type 3R: Outdoors (the most common outdoor rating)\n- Type 4: Subject to direct streams of water\n- Type 5: Indoors with settling non-hazardous dust, lint, fibres, or flyings\n- General-purpose: Indoors, ordinary locations (no type marking needed)\n\nRule 2-400(2) (Substitution): Other enclosure types from Table 65 may be substituted IF they: (a) offer equal or greater protection for the intended use; AND (b) are marked per Rule 2-402. You can ALWAYS go higher, NEVER lower.\n\nRule 2-400(3) (Hazardous locations): Enclosures for hazardous locations designated per Rule 18-052.\n\nRule 2-402 (Marking): (1) Except for general-purpose enclosures, ALL enclosures in Table 65 shall be marked with a type or enclosure designation. (2) In addition, enclosures may also be marked with an IP (Ingress Protection) designation.\n\nRule 2-404 (Motor markings): (1) Motors in non-hazardous locations marked as: (a) Drip-proof = "DP"; (b) Weatherproof = "WP"; (c) Totally Enclosed = "TE". (2) Special-purpose motors used only as components of specific equipment need not be marked.',
      fieldScenario:
        'You\'re installing a disconnect switch for an outdoor AC condenser. Rule 2-400(1c) requires a Type 3R enclosure minimum for outdoor use. Your supplier is out of 3R but has Type 4. Rule 2-400(2) says Type 4 is acceptable because it offers equal or greater protection.\n\nA client asks for the cheapest enclosure for an indoor dusty workshop. Rule 2-400(1e) says Type 5 is needed for settling dust, lint, and fibres. A Type 1 (ordinary indoor) would NOT be sufficient.\n\nThe motor on the condenser is marked "TE" — Totally Enclosed (Rule 2-404(1c)). The indoor supply fan motor is marked "DP" — Drip-proof (Rule 2-404(1a)), which is fine for indoor ordinary locations.\n\nYou see an enclosure with no type marking at all. If it\'s a general-purpose indoor enclosure, Rule 2-402(1) says that\'s acceptable — general-purpose enclosures don\'t need a type designation.',
      keyPoints: [
        'Type 1 = indoors, ordinary locations (Rule 2-400(1a))',
        'Type 2 = indoors, dripping liquid from condensation (Rule 2-400(1b))',
        'Type 3R = outdoors — most common outdoor rating (Rule 2-400(1c))',
        'Type 4 = direct streams of water (Rule 2-400(1d))',
        'Type 5 = indoors with settling dust, lint, fibres, flyings (Rule 2-400(1e))',
        'General-purpose = indoors, ordinary — no type mark needed (Rule 2-400(1f))',
        'Can substitute HIGHER protection types from Table 65, never lower (Rule 2-400(2))',
        'Substitutes must offer equal or greater protection AND be marked per Rule 2-402 (Rule 2-400(2))',
        'Hazardous location enclosures: per Rule 18-052 (Rule 2-400(3))',
        'All enclosures (except general-purpose) must be marked with type designation (Rule 2-402(1))',
        'Enclosures may also carry IP (Ingress Protection) designation (Rule 2-402(2))',
        'Motor: DP = Drip-proof (Rule 2-404(1a))',
        'Motor: WP = Weatherproof (Rule 2-404(1b))',
        'Motor: TE = Totally Enclosed (Rule 2-404(1c))',
        'Special-purpose motors as components of specific equipment: marking not required (Rule 2-404(2))',
      ],
      diagramaMermaid: `graph TD
    A["Select Enclosure Type"] --> B{"Location?"}
    B -->|Indoors, ordinary| C["Type 1"]
    B -->|Indoors, condensation| D["Type 2"]
    B -->|Outdoors| E["Type 3R"]
    B -->|Direct water streams| F["Type 4"]
    B -->|Dust, lint, fibres| G["Type 5"]
    H["Substitution Rule\\n(Rule 2-400-2)"] --> I["ALWAYS use\\nHIGHER type OK"]
    H --> J["NEVER use\\nLOWER type"]
    K["Motor Markings\\n(Rule 2-404)"] --> L["DP = Drip-proof"]
    K --> M["WP = Weatherproof"]
    K --> N["TE = Totally Enclosed"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style J fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'box', title: 'Type 1 — Indoors', note: 'Ordinary dry locations, the default choice', color: 'sky' },
        { icon: 'box', title: 'Type 3R — Outdoors', note: 'Most common outdoor rating — your go-to for exterior', color: 'emerald' },
        { icon: 'box', title: 'Type 4 — Water Streams', note: 'Direct hose-down or heavy rain exposure', color: 'amber' },
        { icon: 'box', title: 'Type 5 — Dusty', note: 'Settling dust, lint, fibres indoors — workshops, mills', color: 'violet' },
        { icon: 'shield', title: 'Substitution Rule', note: 'Always go HIGHER, never lower — Rule 2-400(2)', color: 'rose' },
      ],
    },
  ],
}
