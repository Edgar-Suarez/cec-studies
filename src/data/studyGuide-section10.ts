import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 10 — Grounding and Bonding (CEC 2021, CSA C22.1:21)
 * COMPLETE — Every rule from 10-000 to 10-708 is covered.
 * Source: PDF scan of CEC Section 10
 */

export const section10Guide: StudyGuideSection = {
  section: '10',
  title: 'Section 10 — Grounding and Bonding',
  description:
    'Section 10 is the safety backbone of the CEC — it establishes how electrical systems are connected to earth and how non-current-carrying metal parts are interconnected to protect people from electric shock. It covers grounding electrodes, grounding conductors, solidly grounded systems (AC and DC), impedance grounded systems, ungrounded systems, equipment bonding, bonding conductor sizing via Table 16, and equipotential bonding of water/gas/waste piping. Rules 10-000 through 10-708.',
  subsections: [
    // =========================================================================
    // 1. SCOPE, OBJECT & TERMINOLOGY (Rules 10-000, 10-002, 10-004)
    // =========================================================================
    {
      id: '10-scope-object-terminology',
      title: 'Scope, Object & Terminology',
      rules: 'Rules 10-000, 10-002, 10-004',
      explanation:
        'Rule 10-000 defines the scope of Section 10. This section applies to grounding of solidly grounded systems, impedance grounded systems, and ungrounded systems. It also covers bonding and equipotential bonding. Every electrical installation in Canada must comply with Section 10 to ensure that fault currents have a safe path to return to the source and that non-current-carrying metal parts are maintained at or near earth potential.\n\nRule 10-002 establishes the fundamental objects (purposes) of grounding and bonding. There are five distinct objectives:\n\n(a) Solidly grounded systems: The object is to provide a low-impedance connection to earth to stabilize the voltage-to-ground during normal operation. This keeps the neutral near earth potential so that a single line-to-ground fault does not cause dangerous overvoltages on the other phases.\n\n(b) Impedance grounded systems: The object is to limit ground fault currents to minimize damage to equipment while still stabilizing the voltage-to-ground. The grounding impedance (resistor or reactor) intentionally restricts how much current can flow during a ground fault.\n\n(c) Ungrounded systems: The object is to limit fault currents and minimize damage. Since there is no intentional connection to ground, a single ground fault does not cause large fault current — but a second ground fault on a different phase creates a phase-to-phase fault.\n\n(d) Bonding: The object is to interconnect all non-current-carrying metal parts with a low-impedance path to facilitate the operation of overcurrent protective devices (fuses and breakers) and to establish equipotentiality. Without bonding, a ground fault to an enclosure would not trip the breaker, leaving the enclosure energized and dangerous.\n\n(e) Equipotential bonding: The specific object is to establish equipotentiality between conductive parts — such as water pipes, gas pipes, and structural steel — so that a person touching two different metal parts simultaneously is not exposed to a voltage difference.\n\nRule 10-004 defines critical terminology used throughout Section 10:\n\n- Equipotentiality: The condition where all conductive parts are at substantially the same electrical potential.\n- Grounded conductor: A system or circuit conductor that is intentionally grounded (typically the neutral).\n- Impedance grounded system: A system grounded through an impedance device (resistor or reactor).\n- Impedance system bonding jumper: The conductor connecting the impedance device to the bonding system.\n- Separately derived system: A system whose power is derived from a source with no direct electrical connection to the supply conductors of another system (e.g., isolation transformer, generator).\n- Solidly grounded system: A system in which the grounded conductor is connected to ground without any intentional impedance.\n- System bonding jumper: The conductor connecting the grounded conductor (neutral) to the equipment bonding terminal at the service or source.\n- Ungrounded system: A system with no intentional connection to ground.',
      fieldScenario:
        'You are starting a new commercial installation — a two-storey office building with a 600A, 347/600V three-phase service. The consulting engineer asks you to review the grounding and bonding design.\n\nFirst, you confirm the system type: this is a solidly grounded system because it has a neutral conductor and the maximum voltage to ground is 347V (Rule 10-002(a)). The object of grounding is to stabilize the voltage and provide a low-impedance path to earth.\n\nNext, you verify that all non-current-carrying metal parts — panel enclosures, conduit, junction boxes, motor frames — will be bonded together with a low-impedance path back to the source (Rule 10-002(d)). This ensures that if a hot conductor contacts an enclosure, enough fault current flows to trip the breaker quickly.\n\nThe mechanical contractor asks whether the gas piping and water piping need to be connected to the electrical system. You explain that Rule 10-002(e) requires equipotential bonding — interconnecting these metallic systems so that no dangerous voltage difference can exist between them. A plumber touching a water pipe while standing on a grounded floor must not receive a shock because of a fault in a completely separate circuit.\n\nFinally, the engineer mentions that a future tenant may install a UPS with an isolation transformer. You note that this would be a "separately derived system" per Rule 10-004, requiring its own system bonding jumper and grounding connection per Rule 10-212.',
      keyPoints: [
        'Section 10 applies to grounding of solidly grounded, impedance grounded, and ungrounded systems, plus bonding and equipotential bonding (Rule 10-000)',
        'Solidly grounded systems: low impedance connection to earth stabilizes voltage-to-ground (Rule 10-002(a))',
        'Impedance grounded systems: limit fault currents, minimize damage, stabilize voltage (Rule 10-002(b))',
        'Ungrounded systems: limit fault currents and minimize damage (Rule 10-002(c))',
        'Bonding: interconnect non-current-carrying parts with low impedance to facilitate protective device operation and establish equipotentiality (Rule 10-002(d))',
        'Equipotential bonding: establish equipotentiality between conductive parts (Rule 10-002(e))',
        'Equipotentiality = all conductive parts at substantially the same electrical potential (Rule 10-004)',
        'Separately derived system = no direct electrical connection to supply conductors of another system (Rule 10-004)',
        'System bonding jumper connects the grounded conductor (neutral) to the equipment bonding terminal (Rule 10-004)',
        'Grounded conductor = a system conductor intentionally grounded, typically the neutral (Rule 10-004)',
      ],
      diagramaMermaid: `graph TD
    A["Section 10 Scope\\n(Rule 10-000)"] --> B["Solidly Grounded\\nSystems"]
    A --> C["Impedance Grounded\\nSystems"]
    A --> D["Ungrounded\\nSystems"]
    A --> E["Bonding"]
    A --> F["Equipotential\\nBonding"]
    G["Objects\\n(Rule 10-002)"] --> H["(a) Stabilize voltage\\nto ground"]
    G --> I["(b) Limit fault current\\n+ stabilize voltage"]
    G --> J["(c) Limit fault current\\n+ minimize damage"]
    G --> K["(d) Low-Z path for\\nprotective devices"]
    G --> L["(e) Establish\\nequipotentiality"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0
    style K fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style L fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Safety Backbone', note: 'Section 10 is the foundation for all grounding and bonding — every installation must comply (Rule 10-000)', color: 'sky' },
        { icon: 'bolt', title: 'Solidly Grounded', note: 'Low impedance to earth to stabilize voltage during normal operation (Rule 10-002(a))', color: 'emerald' },
        { icon: 'neutral', title: 'Bonding Purpose', note: 'Low-impedance path ensures breakers trip on ground faults — no bonding = no protection (Rule 10-002(d))', color: 'rose' },
        { icon: 'wire', title: 'Equipotentiality', note: 'All conductive parts at the same potential — touching two surfaces = zero shock (Rule 10-002(e))', color: 'amber' },
        { icon: 'label', title: 'Key Terms', note: 'System bonding jumper, separately derived system, grounded conductor, impedance grounded — Rule 10-004', color: 'violet' },
      ],
    },

    // =========================================================================
    // 2. GROUNDING — GENERAL (Rules 10-100, 10-102, 10-104, 10-106, 10-108)
    // =========================================================================
    {
      id: '10-grounding-general',
      title: 'Grounding — General',
      rules: 'Rules 10-100, 10-102, 10-104, 10-106, 10-108',
      explanation:
        'Rule 10-100 establishes a fundamental principle: there must be no objectionable passage of current over grounding conductors. Grounding conductors exist to carry fault current and to provide a reference to earth — they are NOT intended to carry normal operating current. If you detect current flowing on a grounding conductor during normal operation, something is wrong — typically a neutral-to-ground bond in the wrong location, or a shared neutral/ground path.\n\nRule 10-102 covers grounding electrodes — the physical connection between the electrical system and the earth. There are three categories:\n\n(1) Grounding electrodes may be manufactured, field-assembled, or in-situ.\n\n(2) Manufactured electrodes:\n(a) Rod electrodes: You must install TWO rods, spaced at least 3 metres apart, interconnected, and each driven to its full length into the earth. A single rod is never sufficient — the CEC always requires two rods.\n(b) Chemically charged rod electrodes: Driven to full length.\n(c) Plate electrodes: Must be buried at least 600mm below grade, or encased in the bottom 50mm of a concrete footing.\n\n(3) Field-assembled electrodes: Bare copper conductor at least 6 metres long, sized per Table 43, either encased in the bottom 50mm of a concrete footing (Ufer ground) or buried at least 600mm below grade.\n\n(4) In-situ electrodes: Any electrode with surface area equivalent to a manufactured electrode, buried at least 600mm below grade.\n\n(5) Where rock or permafrost is encountered, a lesser depth is permitted — you drive the rod as deep as conditions allow.\n\nRule 10-104 addresses spacing and interconnection of multiple electrodes. Where multiple electrodes are used, they must be spaced at least 2 metres apart and interconnected with grounding conductor material and size, with the interconnection protected from damage. Lightning protection electrodes must be interconnected at or below ground level.\n\nRule 10-106 restricts railway track usage: railway tracks may only be used as grounding electrodes for railway lightning arresters and railway circuits — never for building electrical systems.\n\nRule 10-108 addresses lightning protection systems:\n(1) Lightning protection down conductors must NOT be used for grounding electrical systems. They carry transient high-voltage surges that could damage electrical equipment.\n(2) Lightning protection electrodes must be dedicated solely to the lightning protection system.',
      fieldScenario:
        'You are installing the grounding electrode system for a new industrial building. The soil is clay with moderate resistivity.\n\nPer Rule 10-102(2)(a), you drive TWO copper-clad ground rods, each 3 metres (10 feet) long, to their full length. You space them at least 3 metres apart as required. You then interconnect them with bare #6 AWG copper conductor, protecting the interconnection where it passes through the foundation wall (Rule 10-104).\n\nThe consulting engineer suggests also using a Ufer ground — a bare copper conductor encased in the bottom 50mm of the concrete footing per Rule 10-102(3). This field-assembled electrode must be at least 6 metres of bare copper, sized per Table 43. You lay 8 metres of #4 AWG bare copper in the bottom of the footing before the concrete pour.\n\nDuring commissioning, you measure current on the grounding electrode conductor with a clamp meter. You read 0.3A — this is objectionable current per Rule 10-100. You investigate and find that a subcontractor bonded the neutral to a panel enclosure at a subpanel downstream of the service, creating a parallel path for neutral return current through the grounding system. You remove the improper bond and the current drops to zero.\n\nThe building also has a lightning protection system. The lightning contractor wants to connect his down conductors to your grounding electrode. Per Rule 10-108, the lightning protection system must have its own dedicated electrode — you cannot share. However, per Rule 10-104, the lightning electrode must be interconnected to the electrical grounding electrode at or below ground level.',
      keyPoints: [
        'No objectionable passage of current over grounding conductors — grounding conductors carry fault current only, not normal load current (Rule 10-100)',
        'Grounding electrodes may be manufactured, field-assembled, or in-situ (Rule 10-102(1))',
        'Rod electrodes: ALWAYS install TWO rods, spaced at least 3m apart, interconnected, driven to full length (Rule 10-102(2)(a))',
        'Chemically charged rod electrodes must be driven to their full length (Rule 10-102(2)(b))',
        'Plate electrodes: buried at least 600mm below grade or encased in bottom 50mm of concrete footing (Rule 10-102(2)(c))',
        'Field-assembled electrodes: bare copper at least 6m long, sized per Table 43, encased in bottom 50mm of footing or buried at least 600mm (Rule 10-102(3))',
        'In-situ electrodes: surface area equivalent to manufactured electrode, at least 600mm depth (Rule 10-102(4))',
        'Rock or permafrost: lesser depth permitted when full depth is not achievable (Rule 10-102(5))',
        'Multiple electrodes: spaced at least 2m apart, interconnected with grounding conductor material and size, protected (Rule 10-104)',
        'Lightning protection electrodes: interconnected to electrical grounding electrode at or below ground level (Rule 10-104)',
        'Railway track: only for railway lightning arresters and railway circuits — never for building electrical systems (Rule 10-106)',
        'Lightning protection down conductors must NOT be used for grounding electrical systems (Rule 10-108(1))',
        'Lightning protection electrode must be dedicated solely to the lightning protection system (Rule 10-108(2))',
      ],
      diagramaMermaid: `graph TD
    A["Grounding Electrodes\\n(Rule 10-102)"] --> B["Manufactured"]
    A --> C["Field-Assembled"]
    A --> D["In-Situ"]
    B --> E["Rod: TWO rods\\n>=3m apart\\nfull length"]
    B --> F["Chem. Charged Rod\\nfull length"]
    B --> G["Plate: >=600mm\\nor in 50mm\\nconcrete footing"]
    C --> H["Bare Cu >=6m\\nTable 43 size\\n50mm footing\\nor 600mm burial"]
    D --> I["Equivalent surface\\narea >=600mm depth"]
    J["Spacing\\n(Rule 10-104)"] --> K["Multiple: >=2m apart\\ninterconnected\\nprotected"]
    L["Lightning\\n(Rule 10-108)"] --> M["Down conductors\\nNOT for electrical\\ngrounding"]
    L --> N["Dedicated electrode\\nfor lightning only"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style L fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style J fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'Two Rods Always', note: 'CEC always requires TWO ground rods, spaced >=3m apart, driven full length (Rule 10-102(2)(a))', color: 'rose' },
        { icon: 'inspect', title: 'No Stray Current', note: 'Grounding conductors must never carry normal operating current (Rule 10-100)', color: 'amber' },
        { icon: 'post', title: 'Ufer Ground', note: 'Field-assembled: bare Cu >=6m in bottom 50mm of concrete footing per Table 43 (Rule 10-102(3))', color: 'emerald' },
        { icon: 'fire', title: 'Lightning Separation', note: 'Lightning down conductors and electrode are dedicated — never shared with electrical grounding (Rule 10-108)', color: 'violet' },
        { icon: 'ruler', title: 'Depth Requirements', note: 'Plate/in-situ: >=600mm below grade. Rock/permafrost: lesser depth OK (Rules 10-102(2)(c), 10-102(5))', color: 'sky' },
      ],
    },

    // =========================================================================
    // 3. GROUNDING CONDUCTOR RULES (Rules 10-110, 10-112, 10-114, 10-116, 10-118)
    // =========================================================================
    {
      id: '10-grounding-conductor-rules',
      title: 'Grounding Conductor Rules',
      rules: 'Rules 10-110, 10-112, 10-114, 10-116, 10-118',
      explanation:
        'Rule 10-110 requires continuity of the grounding conductor: no automatic cut-out or switch may be inserted in a grounding conductor unless the switch or cut-out simultaneously disconnects ALL sources of energy. This ensures the grounding conductor is always intact whenever the system is energized. If you could open the grounding conductor while the system remains live, a fault would have no path to ground and enclosures could become dangerously energized.\n\nRule 10-112 covers the material of grounding conductors:\n(1)(a) The grounding conductor must be copper, aluminum, or other acceptable material.\n(1)(b) It may be insulated or bare.\n(2) The conductor must be resistant to corrosion or suitably protected against corrosion. For example, aluminum conductors in contact with concrete or soil must be avoided because aluminum corrodes in those environments.\n\nRule 10-114 establishes minimum sizes for grounding conductors:\n(1) The minimum size is #6 AWG copper or #4 AWG aluminum.\n(2) Exception: the grounding conductor may be smaller than #6 Cu / #4 Al if it is not smaller than the current-carrying conductors of the circuit it serves. This exception applies to small circuits where the current-carrying conductors themselves are smaller than #6.\n\nRule 10-116 covers installation requirements:\n(1) The grounding conductor must be electrically continuous from the grounding electrode to the point of connection.\n(2) Stray current devices are permitted in the grounding conductor path (these are monitoring devices that detect unwanted current flow).\n(3) The grounding conductor must be protected from mechanical damage, either mechanically or by its location.\n(4) Where a grounding conductor passes through a magnetic raceway or sleeve (such as a single metallic conduit), the raceway or sleeve must be connected to the grounding conductor at both ends. This prevents inductive heating of the raceway. If you run a grounding conductor through a steel pipe without bonding both ends, the alternating magnetic field from fault current can heat the pipe.\n(5) Where the grounding conductor is run in a raceway with service conductors, it must be insulated — EXCEPT that it may be uninsulated if the raceway is not longer than 15 metres and contains not more than two 90-degree bends.\n\nRule 10-118 covers connections to electrodes:\n(1) The connection must be made by a bolted clamp, copper welding (exothermic/Cadweld), brazing, silver solder, or an equally substantial method. Typical wire nuts or standard connectors are not acceptable for electrode connections.\n(2) The connection must be accessible where practicable. "Where practicable" means you should try to make it accessible, but if the electrode is buried or encased in concrete, accessibility is not required.',
      fieldScenario:
        'You are running the grounding electrode conductor for a 200A residential service. The panel is in the basement and the ground rods are outside, 4 metres away.\n\nPer Rule 10-114(1), the minimum grounding conductor size is #6 AWG copper (or #4 Al). For a 200A service, you consult Table 43 and determine that #4 AWG copper is required based on the service size.\n\nYou run the #4 bare copper from the panel grounding bus, through the foundation wall, and out to the ground rods. Where it passes through the concrete block foundation, you protect it with a short piece of rigid PVC conduit per Rule 10-116(3) to prevent mechanical damage.\n\nAt the ground rods, you use an Acorn-style bolted clamp to connect the grounding conductor per Rule 10-118(1). You leave the clamp accessible above grade as required by Rule 10-118(2).\n\nThe inspector notices that part of the grounding conductor passes through a short piece of steel pipe (magnetic sleeve) where it goes through the foundation. Per Rule 10-116(4), the steel pipe must be bonded to the grounding conductor at both ends to prevent inductive heating. You add bonding bushings and bond them to the conductor with a listed clamp.\n\nLater, the homeowner asks if they can install a switch to disconnect the grounding conductor for maintenance. Per Rule 10-110, absolutely not — no switch or cut-out is allowed unless it disconnects all sources of energy simultaneously.',
      keyPoints: [
        'No switch or cut-out in grounding conductor unless it disconnects ALL sources of energy simultaneously (Rule 10-110)',
        'Grounding conductor material: copper, aluminum, or other acceptable material; may be insulated or bare (Rule 10-112(1))',
        'Must be resistant to corrosion or suitably protected (Rule 10-112(2))',
        'Minimum size: #6 AWG copper or #4 AWG aluminum (Rule 10-114(1))',
        'May be smaller than #6 Cu / #4 Al if not smaller than the current-carrying conductors of the circuit (Rule 10-114(2))',
        'Must be electrically continuous from electrode to point of connection (Rule 10-116(1))',
        'Stray current detection devices are permitted in the grounding conductor path (Rule 10-116(2))',
        'Must be protected from mechanical damage by physical protection or location (Rule 10-116(3))',
        'Magnetic raceway or sleeve: must be bonded to grounding conductor at BOTH ends to prevent inductive heating (Rule 10-116(4))',
        'In raceway with service conductors: must be insulated, EXCEPT uninsulated OK if raceway <=15m and <=two 90-degree bends (Rule 10-116(5))',
        'Electrode connections: bolted clamp, copper welding, brazing, silver solder, or equally substantial method (Rule 10-118(1))',
        'Electrode connections must be accessible where practicable (Rule 10-118(2))',
      ],
      diagramaMermaid: `graph TD
    A["Grounding Conductor\\nRules"] --> B["Material\\n(Rule 10-112)"]
    A --> C["Size\\n(Rule 10-114)"]
    A --> D["Installation\\n(Rule 10-116)"]
    A --> E["Connections\\n(Rule 10-118)"]
    B --> F["Cu, Al, or\\nacceptable material\\nInsulated or bare"]
    C --> G["Min #6 Cu\\nor #4 Al"]
    C --> H["Exception: may be\\nsmaller if not smaller\\nthan circuit conductors"]
    D --> I["Electrically\\ncontinuous"]
    D --> J["Protected from\\nmechanical damage"]
    D --> K["Magnetic raceway:\\nbond BOTH ends"]
    D --> L["In service raceway:\\ninsulated unless\\n<=15m + <=2 bends"]
    E --> M["Bolted clamp\\nCu welding\\nbrazing"]
    E --> N["Accessible where\\npracticable"]
    O["Rule 10-110"] --> P["NO switch/cut-out\\nunless disconnects\\nALL sources"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style O fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0
    style K fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'lock', title: 'No Interruption', note: 'Never insert a switch or cut-out in the grounding conductor unless all sources are disconnected (Rule 10-110)', color: 'rose' },
        { icon: 'ruler', title: 'Minimum Size', note: '#6 AWG Cu or #4 AWG Al minimum — may be smaller only if circuit conductors are smaller (Rule 10-114)', color: 'sky' },
        { icon: 'magnet', title: 'Magnetic Raceways', note: 'Bond steel pipe/sleeve to grounding conductor at BOTH ends to prevent inductive heating (Rule 10-116(4))', color: 'amber' },
        { icon: 'wire', title: 'Insulation Rule', note: 'In raceway with service conductors: insulated required unless <=15m and <=2 quarter bends (Rule 10-116(5))', color: 'emerald' },
        { icon: 'bolt', title: 'Electrode Connections', note: 'Bolted clamp, exothermic weld, brazing, or silver solder — no wire nuts (Rule 10-118(1))', color: 'violet' },
      ],
    },

    // =========================================================================
    // 4. SOLIDLY GROUNDED DC SYSTEMS (Rules 10-200, 10-202, 10-204)
    // =========================================================================
    {
      id: '10-dc-solidly-grounded',
      title: 'Solidly Grounded DC Systems',
      rules: 'Rules 10-200, 10-202, 10-204',
      explanation:
        'Rule 10-200 establishes that DC systems must be solidly grounded unless they are specifically designed as ungrounded or impedance grounded systems. The default for DC is solidly grounded — you need a specific reason and design to deviate.\n\nRule 10-202 specifies which conductor must be grounded in DC systems:\n(a) For a 2-wire DC system: one conductor must be grounded. In practice, the negative conductor is typically grounded, though the Code does not specify which one.\n(b) For a 3-wire DC system: the common (neutral) conductor must be grounded. A 3-wire DC system is typically +V, neutral (0V), and -V, so grounding the neutral establishes a balanced system with equal voltage-to-ground on both polarities.\n\nRule 10-204 requires that DC grounding connections be made at a single point, as close as practicable to the supply source. This prevents circulating currents that would occur if the system were grounded at multiple points. With DC systems, multiple ground points can cause continuous current flow through the earth between the ground points, leading to corrosion of underground metallic structures (electrolysis). This is especially critical for DC transit systems, industrial DC drives, and battery installations.\n\nDC systems are less common than AC in building installations, but they are critical in telecommunications, battery backup systems, solar PV arrays (before the inverter), and transit systems. Understanding the grounding rules is important because incorrect DC grounding can cause severe electrolytic corrosion of underground piping and structures.',
      fieldScenario:
        'You are installing a 48V DC battery backup system for a telecommunications room. The system has a rectifier providing +48V and 0V (return), making it a 2-wire DC system.\n\nPer Rule 10-200, this system must be solidly grounded unless designed otherwise. Per Rule 10-202(a), one conductor of the 2-wire system must be grounded. In telecom practice, the positive conductor is grounded (telecom convention), though the CEC allows either.\n\nYou make the grounding connection at a single point at the battery rack per Rule 10-204, as close to the supply source (rectifier/battery) as practicable. You run a grounding conductor from this single point to the building grounding electrode.\n\nThe facilities manager asks if you can add a second grounding connection at the far end of the DC distribution, 30 metres away. You explain that Rule 10-204 requires a single grounding point for DC to prevent circulating ground currents. DC current flowing through the earth between two ground points would cause electrolytic corrosion of any underground copper or iron piping in its path. This is a major concern for building infrastructure.\n\nLater, a solar PV system is installed on the roof. The DC side of the PV array (before the inverter) is another DC system that requires grounding per these same rules. The grounding connection is made at one point near the inverter, and a single grounding conductor connects to the building electrode system.',
      keyPoints: [
        'DC systems must be solidly grounded unless specifically designed as ungrounded or impedance grounded (Rule 10-200)',
        '2-wire DC: one conductor must be grounded (Rule 10-202(a))',
        '3-wire DC: the common (neutral) conductor must be grounded (Rule 10-202(b))',
        'DC grounding connection must be at a SINGLE point, as close as practicable to the supply source (Rule 10-204)',
        'Single-point grounding prevents circulating DC ground currents that cause electrolytic corrosion (Rule 10-204)',
        'Multiple DC ground points create continuous earth current between them — destructive to underground piping',
      ],
      diagramaMermaid: `graph TD
    A["DC Solidly Grounded\\n(Rule 10-200)"] --> B["Default: Must be\\nsolidly grounded"]
    A --> C["Exception: Ungrounded\\nor impedance grounded\\nby design"]
    D["Which Conductor?\\n(Rule 10-202)"] --> E["2-Wire DC:\\nOne conductor\\ngrounded"]
    D --> F["3-Wire DC:\\nCommon/neutral\\ngrounded"]
    G["Grounding Point\\n(Rule 10-204)"] --> H["SINGLE point\\nclose to\\nsupply source"]
    H --> I["Prevents circulating\\nDC ground currents"]
    I --> J["Prevents electrolytic\\ncorrosion of\\nunderground metal"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0
    style J fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'DC Default', note: 'DC systems must be solidly grounded unless specifically designed otherwise (Rule 10-200)', color: 'sky' },
        { icon: 'neutral', title: '3-Wire DC Neutral', note: '3-wire DC: always ground the common/neutral conductor (Rule 10-202(b))', color: 'emerald' },
        { icon: 'warning', title: 'Single Point Only', note: 'DC grounding at ONE point only — multiple points cause circulating current and corrosion (Rule 10-204)', color: 'rose' },
        { icon: 'shield', title: 'Electrolysis Risk', note: 'DC ground current corrodes underground pipes — single-point grounding prevents this (Rule 10-204)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 5. SOLIDLY GROUNDED AC SYSTEMS (Rules 10-206, 10-208, 10-210)
    // =========================================================================
    {
      id: '10-ac-solidly-grounded',
      title: 'Solidly Grounded AC Systems',
      rules: 'Rules 10-206, 10-208, 10-210',
      explanation:
        'Rule 10-206 establishes WHEN AC systems must be solidly grounded:\n\n(1)(a) An AC system MUST be solidly grounded if the maximum voltage-to-ground does not exceed 150V. This covers the most common residential and light commercial system: 120/240V single-phase, where the voltage-to-ground is 120V. It also covers 120/208V three-phase systems where the voltage-to-ground is 120V.\n\n(1)(b) An AC system must also be solidly grounded if it uses a grounded neutral conductor. This effectively requires grounding of any wye-connected system with a neutral, such as 347/600V three-phase — even though the voltage-to-ground (347V) exceeds 150V.\n\n(2) Systems with voltage-to-ground exceeding 150V that do not have a neutral MAY be ungrounded or impedance grounded. This covers delta systems at 240V, 480V, or 600V.\n\n(3) Extra-low-voltage systems (typically under 30V) must be grounded if they are run overhead outside the building, or if they are supplied by transformers from systems exceeding 150V to ground, or from ungrounded systems. This prevents dangerous voltages from appearing on extra-low-voltage circuits due to transformer insulation failure.\n\nRule 10-208 specifies WHICH conductor must be grounded:\n(1) The identified (grounded) conductor depends on the system configuration:\n(a) Single-phase 2-wire: one conductor.\n(b) Single-phase 3-wire: the neutral conductor.\n(c) Multi-phase system with a common (neutral) wire: the common wire.\n(d) Multi-phase system with one phase grounded: that one phase.\n(e) Multi-phase system with the midpoint of one phase grounded: the midpoint conductor.\n(2) Only ONE phase may be grounded. You cannot ground two phases of the same system.\n\nRule 10-210 covers grounding connections at the consumer\'s service where power comes from the supply authority:\n(a) The grounded conductor must be connected at ONE point at the consumer\'s service.\n(b) The minimum size of the connection must meet bonding and neutral requirements.\n(c) The grounded conductor must be connected to the equipment bonding terminal by a system bonding jumper. This is the critical neutral-to-ground bond at the service entrance.\n(d) No other connection between the grounded conductor and non-current-carrying parts may be made on either the supply side or the load side. This ensures there is only ONE neutral-to-ground bond in the system — at the service. Additional bonds downstream create parallel paths for neutral current through bonding conductors, which is both a Code violation and a safety hazard.',
      fieldScenario:
        'You are wiring a new single dwelling with a 200A, 120/240V single-phase service. Per Rule 10-206(1)(a), this system MUST be solidly grounded because the maximum voltage-to-ground is 120V (which does not exceed 150V).\n\nPer Rule 10-208(1)(b), you ground the neutral conductor of this single-phase 3-wire system. At the service panel, per Rule 10-210(c), you install the system bonding jumper — a green screw or strap that connects the neutral bus to the panel enclosure (equipment bonding terminal). This is the ONE and ONLY neutral-to-ground bond in the entire dwelling.\n\nThe homeowner later adds a detached garage with a subpanel. A helper suggests installing a bonding screw in the garage subpanel to bond neutral to ground again. You explain that Rule 10-210(d) prohibits any other connection between the grounded conductor and non-current-carrying metal parts on the load side of the service. The garage subpanel must have the neutral bus isolated from the enclosure. Bonding is provided by the bonding conductor run from the main panel.\n\nIn another project, you wire a commercial kitchen with a 600V delta supply for large motors. This system has no neutral — the voltage-to-ground exceeds 150V (it is 600V phase-to-phase). Per Rule 10-206(2), this system MAY be ungrounded or impedance grounded rather than solidly grounded.\n\nFor a low-voltage landscape lighting system (12V), you check Rule 10-206(3): since the transformer supplying it is connected to a 120V system (which exceeds 150V to ground if you consider the primary), the extra-low-voltage secondary must be grounded.',
      keyPoints: [
        'AC system MUST be solidly grounded if max voltage-to-ground does not exceed 150V (Rule 10-206(1)(a))',
        'AC system MUST be solidly grounded if it has a grounded neutral conductor (Rule 10-206(1)(b))',
        'Systems >150V to ground without neutral MAY be ungrounded or impedance grounded (Rule 10-206(2))',
        'Extra-low-voltage: must be grounded if overhead outside, or supplied by transformer from >150V or ungrounded system (Rule 10-206(3))',
        'Single-phase 2-wire: one conductor grounded; single-phase 3-wire: neutral grounded (Rule 10-208(1)(a),(b))',
        'Multi-phase with common wire: ground the common; multi-phase with one phase grounded: ground that phase (Rule 10-208(1)(c),(d))',
        'Only ONE phase may be grounded in any multi-phase system (Rule 10-208(2))',
        'Grounded conductor connected at ONE point at the consumer service (Rule 10-210(a))',
        'Minimum size per bonding and neutral requirements (Rule 10-210(b))',
        'System bonding jumper connects grounded conductor to equipment bonding terminal at service (Rule 10-210(c))',
        'NO other connection between grounded conductor and non-current-carrying parts on supply or load side (Rule 10-210(d))',
        'Only ONE neutral-to-ground bond in the entire system — at the service entrance (Rule 10-210)',
      ],
      diagramaMermaid: `graph TD
    A["When to Solidly Ground AC\\n(Rule 10-206)"] --> B{"V-to-ground\\n<=150V?"}
    B -->|Yes| C["MUST be\\nsolidly grounded\\n(1)(a)"]
    B -->|No| D{"Has neutral?"}
    D -->|Yes| E["MUST be\\nsolidly grounded\\n(1)(b)"]
    D -->|No| F["MAY be ungrounded\\nor impedance\\ngrounded (2)"]
    G["Which Conductor?\\n(Rule 10-208)"] --> H["1Ph 2W: one conductor"]
    G --> I["1Ph 3W: neutral"]
    G --> J["Multi-Ph: common wire\\nor one phase"]
    K["Service Connection\\n(Rule 10-210)"] --> L["ONE point at\\nconsumer service"]
    K --> M["System bonding jumper\\nneutral → enclosure"]
    K --> N["NO other N-G bonds\\non supply or load side"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style E fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style M fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: '150V Threshold', note: '<=150V to ground = MUST solidly ground. >150V without neutral = may use other methods (Rule 10-206)', color: 'sky' },
        { icon: 'neutral', title: 'One N-G Bond', note: 'System bonding jumper creates THE ONLY neutral-to-ground bond — at the service entrance (Rule 10-210)', color: 'rose' },
        { icon: 'warning', title: 'No Downstream Bonds', note: 'No neutral-to-ground connections on the load side of the service — isolate neutral in subpanels (Rule 10-210(d))', color: 'amber' },
        { icon: 'wire', title: 'One Phase Only', note: 'In multi-phase systems, only ONE phase may be grounded (Rule 10-208(2))', color: 'emerald' },
        { icon: 'sun', title: 'Extra-Low-Voltage', note: 'Must be grounded if overhead outside or supplied from >150V / ungrounded transformer (Rule 10-206(3))', color: 'violet' },
      ],
    },

    // =========================================================================
    // 6. SEPARATELY DERIVED & PORTABLE/MOBILE SYSTEMS (Rules 10-212, 10-214)
    // =========================================================================
    {
      id: '10-separately-derived-portable',
      title: 'Separately Derived & Portable/Mobile Systems',
      rules: 'Rules 10-212, 10-214',
      explanation:
        'Rule 10-212 covers separately derived systems — systems whose power comes from a source that has NO direct electrical connection to the supply conductors of another system. Common examples include isolation transformers, UPS systems with isolation, and standby generators that are not connected in parallel with the utility.\n\n(1) For a separately derived system, the system bonding jumper may be installed at one of three locations: at the source of the separately derived system, at the first disconnecting means or overcurrent device, or at the tie point between the derived system and the building wiring. The grounding conductor must be connected at the same point as the system bonding jumper. No other connection between the grounded conductor and non-current-carrying parts is permitted elsewhere. This mirrors the single-point bonding philosophy of Rule 10-210.\n\n(2) For separately derived systems rated 750V or less, there is an alternative: the system may be grounded via a system bonding jumper connected to the bonding conductor of the primary supply system. This avoids the need for a separate grounding electrode at each transformer — the derived system relies on the grounding already established by the primary supply.\n\nRule 10-214 covers portable and mobile generators:\n\n(1) Portable generators: A separate grounding electrode is NOT required if the generator\'s neutral conductor is bonded to the generator frame. The frame itself serves as the grounding reference. This is practical because portable generators are moved frequently and driving ground rods at every temporary location would be impractical.\n\n(2) Vehicle-mounted or mobile generators: A separate grounding electrode is NOT required if ALL of the following conditions are met:\n- The system is low voltage or less.\n- The neutral conductor is bonded to the generator frame.\n- The generator frame is bonded to the vehicle frame or enclosure.\n- The generator supplies only equipment mounted on the vehicle OR cord-connected equipment through receptacles mounted on the vehicle.\n- The circuit includes a bonding conductor.\n\nThis covers construction vehicles, mobile welders, utility trucks, and similar mobile power sources where the vehicle frame provides the grounding reference.',
      fieldScenario:
        'You are installing a 75 kVA isolation transformer in a hospital to create a separately derived 120/208V system for a sensitive equipment room. Per Rule 10-212(1), you must install a system bonding jumper at one location — you choose to install it at the transformer secondary terminals. At that same point, you connect the grounding conductor to the building grounding electrode system.\n\nThe electrical engineer asks if you need to drive a separate ground rod for this transformer. Per Rule 10-212(2), since the system is 750V or less, you can alternatively ground it by connecting the system bonding jumper to the bonding conductor of the primary supply system. Since the primary supply already has a robust grounding electrode system, you connect the transformer grounding to the existing bonding conductor rather than installing a new electrode.\n\nOn another project, you are setting up temporary power at a construction site using a portable Honda generator. The workers ask if they need to drive a ground rod. Per Rule 10-214(1), the portable generator does not need a separate grounding electrode as long as the neutral is bonded to the generator frame. You verify the bonding screw is installed inside the generator.\n\nA utility company parks a truck with a vehicle-mounted generator to power a temporary traffic signal. Per Rule 10-214(2), no separate electrode is needed because: the system is low voltage, the neutral is bonded to the generator frame, the frame is bonded to the truck chassis, only equipment on the truck and cord-connected devices through truck receptacles are powered, and a bonding conductor is included in the output circuit.',
      keyPoints: [
        'Separately derived system: no direct electrical connection to supply conductors of another system (Rule 10-212)',
        'System bonding jumper location: at the source, first disconnect/OCPD, or tie point — pick ONE (Rule 10-212(1))',
        'Grounding conductor connects at the SAME point as the system bonding jumper (Rule 10-212(1))',
        'No other neutral-to-ground connection permitted elsewhere in the derived system (Rule 10-212(1))',
        '<=750V separately derived: may ground via system bonding jumper to primary supply bonding conductor (Rule 10-212(2))',
        'Portable generators: no separate electrode required if neutral is bonded to generator frame (Rule 10-214(1))',
        'Mobile/vehicle-mounted generators: no electrode if low voltage, neutral bonded to frame, frame bonded to vehicle, supplies only vehicle or cord-connected equipment, and circuit has bonding conductor (Rule 10-214(2))',
      ],
      diagramaMermaid: `graph TD
    A["Separately Derived\\n(Rule 10-212)"] --> B["System Bonding Jumper\\nat ONE location"]
    B --> C["At source"]
    B --> D["At first disconnect\\nor OCPD"]
    B --> E["At tie point"]
    A --> F["Grounding conductor\\nat SAME point"]
    A --> G["<=750V: may use\\nprimary supply\\nbonding conductor"]
    H["Portable Generator\\n(Rule 10-214(1))"] --> I["No electrode if\\nneutral bonded\\nto frame"]
    J["Mobile Generator\\n(Rule 10-214(2))"] --> K["No electrode if\\nALL conditions met:"]
    K --> L["Low voltage"]
    K --> M["Neutral bonded\\nto frame"]
    K --> N["Frame bonded\\nto vehicle"]
    K --> O["Supplies only\\nvehicle/cord-connected"]
    K --> P["Has bonding\\nconductor"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0
    style J fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style B fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'One Bonding Point', note: 'System bonding jumper and grounding conductor at the SAME single location (Rule 10-212(1))', color: 'sky' },
        { icon: 'shield', title: '<=750V Shortcut', note: 'Separately derived <=750V can ground through primary supply bonding conductor (Rule 10-212(2))', color: 'emerald' },
        { icon: 'bolt', title: 'Portable Generators', note: 'No ground rod needed if neutral is bonded to the generator frame (Rule 10-214(1))', color: 'amber' },
        { icon: 'inspect', title: 'Mobile Generators', note: 'Five conditions must ALL be met to skip separate electrode — check every one (Rule 10-214(2))', color: 'rose' },
      ],
    },

    // =========================================================================
    // 7. IMPEDANCE GROUNDED SYSTEMS (Rules 10-300, 10-302, 10-304, 10-306, 10-308)
    // =========================================================================
    {
      id: '10-impedance-grounded',
      title: 'Impedance Grounded Systems',
      rules: 'Rules 10-300, 10-302, 10-304, 10-306, 10-308',
      explanation:
        'Impedance grounded systems are a specialized grounding method used primarily in industrial installations where continuous operation is critical and a single ground fault should not cause an immediate shutdown. Instead of a solid connection to ground, an impedance device (resistor or reactor) is inserted between the system neutral and ground, limiting the fault current to a controlled value.\n\nRule 10-300 requires that impedance grounded systems be maintained by a qualified person. These systems require more sophisticated monitoring and maintenance than solidly grounded systems because a single ground fault does not trip a breaker — it only activates an alarm.\n\nRule 10-302 covers the use requirements:\n(1) All conductors must be insulated for the full line-to-line voltage. In an impedance grounded system, a ground fault on one phase raises the voltage on the other phases to line-to-line voltage with respect to ground. If conductors are only insulated for line-to-neutral voltage, the increased voltage could break down the insulation.\n(2) The system must be monitored per Table 17 of the CEC, which specifies the type and frequency of monitoring required.\n(3) Ground fault alarms must be labeled, must annunciate (audible and/or visual), and must continue to signal until the fault is corrected. An alarm that resets itself could allow a second fault to go unnoticed, causing a phase-to-phase fault.\n\nRule 10-304 covers the impedance device itself:\n(1) The impedance device does not need a continuous current rating if the system is designed to automatically de-energize on a ground fault and the impedance is coordinated with the protective devices. In other words, if the system trips on ground fault (rather than just alarming), a lower-rated device is acceptable.\n(2) The insulation rating of the impedance device must be at least equal to the line-to-neutral voltage of the system.\n\nRule 10-306 requires warning signs at three locations: the supply source, the service box, and the metering equipment. Each sign must state that the system is impedance grounded and must indicate the maximum neutral voltage to ground. This alerts maintenance personnel that the grounding is not solid and that specific procedures must be followed.\n\nRule 10-308 covers the conductors in an impedance grounded system:\n(1) Conductors from the impedance device to the system source must be: insulated for the system voltage, identified with white or grey colour, routed directly (not through other equipment), NOT grounded at any other point, sized for the rated current of the impedance device (minimum #12 AWG copper or #10 AWG aluminum), and mechanically protected.\n(2) The impedance system bonding jumper (from the impedance device to the bonding system) must be sized for the rated current of the impedance device, with a minimum size of #12 AWG copper or #10 AWG aluminum.',
      fieldScenario:
        'You are wiring a 600V, three-phase industrial plant that runs a continuous manufacturing process. The plant engineer specifies a high-resistance grounded (HRG) system because they cannot afford to shut down for a single ground fault — each shutdown costs $50,000 in lost production.\n\nPer Rule 10-300, you confirm that the plant has qualified electrical maintenance personnel on staff who understand impedance grounded systems. Per Rule 10-302(1), you specify all conductors rated for 600V (line-to-line) rather than 347V (line-to-neutral), because a ground fault will raise the unfaulted phases to 600V with respect to ground.\n\nYou install the HRG unit — a grounding resistor — at the service transformer secondary neutral. The resistor limits ground fault current to 5A. Per Rule 10-304(2), the resistor insulation is rated for at least 347V (line-to-neutral). Since the system alarms on ground fault rather than tripping, the resistor must have a continuous current rating per Rule 10-304(1).\n\nPer Rule 10-306, you install warning signs at three locations: on the transformer (supply source), on the main switchboard (service box), and at the revenue metering panel. Each sign reads: "IMPEDANCE GROUNDED SYSTEM — Maximum neutral voltage to ground: 347V."\n\nThe conductor from the resistor to the transformer neutral is #10 AWG copper (above the minimum #12 per Rule 10-308(1)), insulated for 600V, identified with white tape, and routed directly from resistor to transformer. Per Rule 10-308(1), this conductor is NOT grounded — the whole point of impedance grounding is the resistor between neutral and ground.\n\nPer Rule 10-302(3), the ground fault relay annunciates with a flashing light and horn. It continues to signal until a qualified electrician locates and repairs the ground fault.',
      keyPoints: [
        'Impedance grounded systems must be maintained by a qualified person (Rule 10-300)',
        'All conductors insulated for full line-to-line voltage — ground fault raises unfaulted phases (Rule 10-302(1))',
        'System must be monitored per Table 17 (Rule 10-302(2))',
        'Ground fault alarms: labeled, annunciate, signal continuously until fault is corrected (Rule 10-302(3))',
        'Impedance device: non-continuous rating OK if system auto de-energizes on fault and device is coordinated with protective devices (Rule 10-304(1))',
        'Impedance device insulation rating >= line-to-neutral voltage (Rule 10-304(2))',
        'Warning signs required at THREE locations: supply source, service box, and metering (Rule 10-306)',
        'Signs must state: impedance grounded system + maximum neutral voltage to ground (Rule 10-306)',
        'Conductors to impedance device: insulated for system voltage, white/grey, routed directly, NOT grounded elsewhere (Rule 10-308(1))',
        'Conductor size: minimum #12 AWG Cu or #10 AWG Al, sized for impedance device rated current (Rule 10-308(1))',
        'Impedance system bonding jumper: sized for device rated current, min #12 Cu / #10 Al (Rule 10-308(2))',
      ],
      diagramaMermaid: `graph TD
    A["Impedance Grounded\\nSystem"] --> B["Rule 10-300\\nQualified person\\nmaintenance"]
    A --> C["Rule 10-302\\nUse Requirements"]
    A --> D["Rule 10-304\\nImpedance Device"]
    A --> E["Rule 10-306\\nWarning Signs"]
    A --> F["Rule 10-308\\nConductors"]
    C --> G["Insulate for\\nline-to-line V"]
    C --> H["Monitor per\\nTable 17"]
    C --> I["Alarms: labeled\\nannunciate\\ncontinuous"]
    D --> J["Non-continuous OK\\nif auto de-energize"]
    D --> K["Insulation >=\\nline-to-neutral V"]
    E --> L["3 Locations:\\nsource + service\\n+ metering"]
    F --> M["White/grey\\nrouted directly\\nNOT grounded"]
    F --> N["Min #12 Cu\\nor #10 Al"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style G fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style I fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'label', title: 'Three Warning Signs', note: 'Signs at supply source, service box, AND metering — state impedance grounded + max neutral V (Rule 10-306)', color: 'rose' },
        { icon: 'bolt', title: 'Line-to-Line Insulation', note: 'Ground fault raises voltage on healthy phases — insulate all conductors for full L-L voltage (Rule 10-302(1))', color: 'amber' },
        { icon: 'inspect', title: 'Continuous Alarm', note: 'Alarm must signal until fault is corrected — no auto-reset allowed (Rule 10-302(3))', color: 'sky' },
        { icon: 'wire', title: 'Conductor Requirements', note: 'White/grey, routed directly, NOT grounded elsewhere, min #12 Cu or #10 Al (Rule 10-308)', color: 'emerald' },
        { icon: 'shield', title: 'Qualified Persons', note: 'Impedance grounded systems require qualified maintenance personnel at all times (Rule 10-300)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 8. UNGROUNDED SYSTEMS (Rules 10-400, 10-402)
    // =========================================================================
    {
      id: '10-ungrounded-systems',
      title: 'Ungrounded Systems',
      rules: 'Rules 10-400, 10-402',
      explanation:
        'Ungrounded systems have no intentional connection to earth. They are used in specific industrial applications where continuous operation during a single ground fault is essential and where the consequences of an immediate shutdown are more dangerous than the fault itself.\n\nRule 10-400 permits ungrounded systems under strict conditions:\n(1) An ungrounded system is only permitted if ground fault detection equipment is installed AND the system is maintained by qualified persons. Both conditions must be met — you cannot have one without the other.\n(2) The ground fault detection must provide a visual and/or audible alarm to alert personnel to a ground fault. Unlike a solidly grounded system where a ground fault trips a breaker, an ungrounded system relies entirely on human detection and response.\n(3) The ground fault alarms must be labeled, must annunciate, and must continue to signal until the fault is corrected. This mirrors the impedance grounded system alarm requirements in Rule 10-302(3).\n(4) Exception: Extra-low-voltage systems may be ungrounded without ground fault detection. These systems (typically under 30V) pose minimal shock risk, so the added complexity of fault detection is not required.\n\nThe critical danger of ungrounded systems: A single ground fault does not cause high current or trip any protection — the system continues to operate normally. However, if a SECOND ground fault occurs on a DIFFERENT phase before the first is repaired, the result is a phase-to-phase fault through ground, which can cause severe arcing, equipment damage, and fire. This is why continuous monitoring and alarm signaling until correction is so critical.\n\nRule 10-402 covers equipment grounding on ungrounded systems:\n(1) There must be no connection between the grounding conductor and the neutral conductor. In a solidly grounded system, the neutral is bonded to ground at the service. In an ungrounded system, this bond does NOT exist — the neutral (if present) floats. Connecting them would defeat the purpose of the ungrounded system.\n(2) The grounding conductor must connect the grounding electrode to the enclosure of the supply source or service box. Even though the system conductors are not grounded, the enclosures and non-current-carrying parts must still be connected to a grounding electrode. This provides a reference to earth and helps the ground fault detection equipment function properly.',
      fieldScenario:
        'You are working in a chemical processing plant that uses a 600V, 3-phase ungrounded delta system to power critical process pumps. The plant cannot shut down instantly when a single ground fault occurs — an immediate trip could cause a chemical reaction hazard.\n\nPer Rule 10-400(1), you verify that ground fault detection lights are installed on each phase at the main switchboard. These "ground detector" lights dim on the faulted phase and brighten on the unfaulted phases when a ground fault occurs. You also verify that qualified electricians are on staff 24/7 to respond to alarms.\n\nPer Rule 10-400(2), the detection system includes both a visual indicator (phase lights) and an audible alarm (horn). Per Rule 10-400(3), the alarm is labeled "GROUND FAULT ALARM — UNGROUNDED SYSTEM" and it continues to sound until the electrician locates and clears the fault.\n\nDuring a night shift, the ground fault alarm activates — Phase A shows a fault. The electrician uses a megger to trace the fault to a pump motor with damaged insulation. Because this is an ungrounded system, the pump is still running and the process continues safely. However, the electrician knows that a second ground fault on Phase B or C would create a phase-to-phase short through ground — a catastrophic failure. They schedule an immediate shutdown of that pump circuit and replace the motor.\n\nAt the main switchboard, per Rule 10-402(1), there is no neutral-to-ground bond. The neutral bus (if present) is completely isolated from the enclosure. Per Rule 10-402(2), a grounding electrode conductor connects the switchboard enclosure to the building grounding electrode — this grounds the enclosures even though the system itself is ungrounded.',
      keyPoints: [
        'Ungrounded systems permitted ONLY if ground fault detection is installed AND system is maintained by qualified persons (Rule 10-400(1))',
        'Ground fault detection must provide visual and/or audible alarm (Rule 10-400(2))',
        'Alarms: labeled, annunciate, signal continuously until fault is corrected (Rule 10-400(3))',
        'Extra-low-voltage systems: may be ungrounded without ground fault detection (Rule 10-400(4))',
        'DANGER: single ground fault is harmless, but a SECOND fault on different phase = phase-to-phase fault through ground',
        'No connection between grounding conductor and neutral conductor on ungrounded systems (Rule 10-402(1))',
        'Grounding conductor must connect grounding electrode to enclosure of supply source or service box (Rule 10-402(2))',
        'Enclosures are grounded even though the system conductors are not (Rule 10-402(2))',
      ],
      diagramaMermaid: `graph TD
    A["Ungrounded Systems\\n(Rule 10-400)"] --> B["Permitted IF:"]
    B --> C["Ground fault\\ndetection installed"]
    B --> D["Maintained by\\nqualified persons"]
    C --> E["Visual + audible\\nalarm (2)"]
    E --> F["Labeled +\\nannunciates +\\ncontinuous (3)"]
    G["Exception (4)"] --> H["Extra-low-voltage:\\nungrounded OK\\nwithout detection"]
    I["Equipment Grounding\\n(Rule 10-402)"] --> J["NO connection\\nneutral to ground\\n(1)"]
    I --> K["Grounding conductor:\\nelectrode to\\nenclosure (2)"]
    L["DANGER"] --> M["1st ground fault\\n= alarm only"]
    M --> N["2nd fault on\\ndifferent phase\\n= PH-PH fault!"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style L fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style J fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'Double Fault Danger', note: 'First ground fault = alarm. Second fault on different phase = phase-to-phase through ground = catastrophic', color: 'rose' },
        { icon: 'inspect', title: 'Two Conditions', note: 'Ground fault detection AND qualified persons — both required, not optional (Rule 10-400(1))', color: 'amber' },
        { icon: 'neutral', title: 'No N-G Bond', note: 'No connection between neutral and grounding conductor — neutral floats in ungrounded systems (Rule 10-402(1))', color: 'sky' },
        { icon: 'shield', title: 'Enclosures Still Grounded', note: 'Metal enclosures connect to electrode even though system conductors are not grounded (Rule 10-402(2))', color: 'emerald' },
        { icon: 'sun', title: 'ELV Exception', note: 'Extra-low-voltage systems may be ungrounded without fault detection equipment (Rule 10-400(4))', color: 'violet' },
      ],
    },

    // =========================================================================
    // 9. BONDING — GENERAL (Rules 10-500, 10-502, 10-504, 10-506)
    // =========================================================================
    {
      id: '10-bonding-general',
      title: 'Bonding — General',
      rules: 'Rules 10-500, 10-502, 10-504, 10-506',
      explanation:
        'The bonding rules in Section 10 (starting at Rule 10-500) parallel the grounding rules but focus on the interconnection of non-current-carrying metal parts rather than the connection to earth. While grounding establishes a reference to earth, bonding establishes a low-impedance path between all metal parts so that fault current can flow and trip overcurrent devices.\n\nRule 10-500 mirrors Rule 10-100: there must be no objectionable passage of current over bonding conductors. Bonding conductors, like grounding conductors, exist to carry fault current — not normal operating current. If you measure current on a bonding conductor during normal operation, there is an installation error, typically a neutral conductor sharing a path with the bonding conductor or an improper neutral-to-ground connection downstream of the service.\n\nRule 10-502 addresses clean surfaces for bonding connections. You must remove paint, enamel, or other non-conductive coatings from threads and contact surfaces, OR you must penetrate the coating to establish a good electrical connection. This is a practical rule that is frequently violated in the field. Painted junction boxes, powder-coated enclosures, and anodized aluminum all create insulating barriers that can prevent effective bonding. A bonding bushing on a painted knockout does not make a good bond unless the paint is removed from the contact area or the bushing has a feature that penetrates the paint.\n\nRule 10-504 addresses dissimilar metals. When connecting different metals (such as copper to aluminum, or copper to steel), you must use methods and materials that minimize galvanic deterioration. The galvanic reaction between dissimilar metals in the presence of moisture can cause corrosion that destroys the connection over time. Anti-oxidant compound, bimetallic connectors, and proper torque values are all part of the solution.\n\nRule 10-506 mirrors Rule 10-110 for bonding: no switch or cut-out may be inserted in a bonding conductor unless it simultaneously disconnects all sources of energy. The bonding path must be intact whenever the system is energized.',
      fieldScenario:
        'You are roughing in the electrical for a new commercial building. The steel stud walls have powder-coated junction boxes. You are pulling MC cable (armoured cable) and connecting to the boxes with standard MC connectors.\n\nPer Rule 10-502, you must ensure that the bonding path through the connector to the box is effective. The powder-coat finish on the box is an insulating barrier. You have two options: scrape the coating off the knockout area where the connector seats, or use a connector designed to penetrate the coating (some connectors have sharp teeth or serrations specifically for this purpose).\n\nYour apprentice suggests using an anti-seize compound on the aluminum connector where it contacts the steel box. You correct them — per Rule 10-504, you need to use materials that minimize galvanic corrosion between dissimilar metals. Anti-seize may help with corrosion but you specifically need an anti-oxidant compound rated for the metal combination, and you should ensure the connector is listed for use with steel boxes.\n\nDuring testing, you clamp a meter on the bonding conductor at a subpanel and read 2A during normal operation. Per Rule 10-500, this is objectionable current. You trace the issue to an improperly bonded neutral in a downstream panel — someone used a green screw to bond the neutral bus to the enclosure at a subpanel, creating a parallel return path for neutral current through the bonding conductor. You remove the green screw (the neutral must float in subpanels) and the current on the bonding conductor drops to zero.\n\nThe fire alarm contractor asks if they can install a disconnect switch in the bonding conductor to their fire alarm panel for maintenance purposes. Per Rule 10-506, this is not permitted unless the switch disconnects all sources of energy to the panel simultaneously.',
      keyPoints: [
        'No objectionable passage of current over bonding conductors — fault current only, not normal load current (Rule 10-500)',
        'Remove paint, enamel, or coatings from threads and contact surfaces, OR penetrate the coating for good electrical connection (Rule 10-502)',
        'Use methods and materials that minimize galvanic deterioration when connecting dissimilar metals (Rule 10-504)',
        'No switch or cut-out in bonding conductor unless it disconnects ALL sources of energy simultaneously (Rule 10-506)',
        'Current on bonding conductor during normal operation = installation error — find and fix the improper bond',
        'Painted/coated boxes require coating removal or penetrating connectors for effective bonding (Rule 10-502)',
      ],
      diagramaMermaid: `graph TD
    A["Bonding General\\nRules"] --> B["Rule 10-500\\nNo objectionable\\ncurrent"]
    A --> C["Rule 10-502\\nClean surfaces"]
    A --> D["Rule 10-504\\nDissimilar metals"]
    A --> E["Rule 10-506\\nContinuity"]
    B --> F["Fault current\\nonly — not normal\\noperating current"]
    C --> G["Remove paint/enamel\\nfrom threads and\\ncontact surfaces"]
    C --> H["OR penetrate\\ncoating for good\\nconnection"]
    D --> I["Minimize galvanic\\ndeterioration\\nwith proper\\nmethods/materials"]
    E --> J["No switch/cut-out\\nunless disconnects\\nALL sources"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'palette', title: 'Remove Coatings', note: 'Paint, enamel, powder coat — remove from threads/contacts or penetrate the coating (Rule 10-502)', color: 'amber' },
        { icon: 'inspect', title: 'No Normal Current', note: 'Current on bonding conductor during normal operation = wiring error, investigate immediately (Rule 10-500)', color: 'rose' },
        { icon: 'wire', title: 'Dissimilar Metals', note: 'Cu to Al, Cu to steel — use listed connectors and anti-oxidant to prevent galvanic corrosion (Rule 10-504)', color: 'sky' },
        { icon: 'lock', title: 'No Interruption', note: 'Bonding conductor must be continuous whenever system is energized — no switches (Rule 10-506)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 10. EQUIPMENT BONDING (Rules 10-600 to 10-610)
    // =========================================================================
    {
      id: '10-equipment-bonding',
      title: 'Equipment Bonding',
      rules: 'Rules 10-600, 10-602, 10-604, 10-606, 10-608, 10-610',
      explanation:
        'Rule 10-600 establishes the fundamental requirement: all non-current-carrying metal parts of electrical equipment must be connected to a bonding conductor.\n(1) This is a blanket requirement — every metal enclosure, raceway, box, motor frame, and equipment housing must be bonded.\n(2) Exception: extra-low-voltage equipment is not required to be bonded. The voltage is too low to pose a shock hazard under normal conditions.\n\nRule 10-602 addresses parallel conductor runs. Where conductors are run in parallel (multiple sets of conductors making up one circuit), a bonding conductor must be run with EACH group of parallel conductors. You cannot run a single bonding conductor for multiple parallel groups — each group needs its own. This ensures that if a fault occurs in one parallel group, the bonding conductor in that group provides a low-impedance fault path.\n\nRule 10-604 covers bonding continuity at service equipment — the most critical bonding point in the system:\n(1)(a) Threaded couplings and fittings with threaded hubs are acceptable for rigid conduit bonding at the service.\n(b) Couplings and connectors approved for the purpose are acceptable for EMT bonding at the service.\n(c) Where standard locknuts are the only connection method, bonding bushings with a bonding conductor must be used. Standard locknuts alone are NOT adequate for service bonding — the connection through a single locknut is not reliable enough for the critical service bonding path.\n(2) Exception: Cable with an internal bonding conductor in continuous contact with the armour does not require bonding bushings. The internal bonding conductor provides the required bonding path.\n\nRule 10-606 covers bonding for equipment other than service equipment:\n(1) The methods from Rule 10-604(1) are acceptable, PLUS standard box connectors, two locknuts (one inside, one outside), or a locknut with a conduit bushing. These less rigorous methods are acceptable downstream of the service because the bonding path is less critical — the service bonding is already established.\n(2) Reducing washers are NOT acceptable as bonding means. They do not provide a reliable electrical connection.\n\nRule 10-608 addresses loosely jointed raceways: expansion joints and telescoping sections require a bonding conductor because the joint itself does not provide electrical continuity. The bonding conductor must bridge the joint.\n\nRule 10-610 covers the specific means of bonding for fixed equipment:\n(1) Acceptable bonding means:\n(a) Metal raceway, sheath, or armour — EXCEPT underground installations, installations per Section 22 (located in hazardous locations), or corrosive environments.\n(b) Bonding conductor contained within a cable.\n(c) Bonding conductor run inside a raceway.\n(2) Armoured cable armour is NOT considered a bonding means unless the armour and bonding conductor are in continuous contact.\n(3) Flexible conduit armour is NOT a bonding means — you must run a bonding conductor inside the flex conduit.\n(4) Mineral-insulated (MI) cable with a sheath that is not copper or aluminum is NOT a bonding means.\n(5) Single-conductor cable with an isolated sheath requires a separate bonding conductor.',
      fieldScenario:
        'You are wiring the main service entrance of a commercial building. The 600A main switch is fed by four 3-inch rigid conduit runs from the utility transformer.\n\nPer Rule 10-604(1)(a), the threaded couplings on the rigid conduit provide acceptable bonding at the service — but only if the threads are clean and tight. Where the conduits enter the main switch through concentric knockouts with standard locknuts, per Rule 10-604(1)(c), you must use bonding bushings with bonding conductors because standard locknuts alone are not sufficient at the service.\n\nYou install insulated bonding bushings on each conduit inside the switch enclosure and run bonding jumpers from each bushing to the equipment bonding terminal. An inspector notes that the conduits are run in parallel (two conduits per phase). Per Rule 10-602, you verify that a bonding conductor is included with each parallel group.\n\nDownstream, at a motor control centre, you connect EMT with compression connectors. Per Rule 10-606(1), this is acceptable for equipment other than service — you can use standard connectors, two locknuts, or a locknut with bushing. However, a helper uses a reducing washer to adapt a 1-inch connector to a 3/4-inch knockout. Per Rule 10-606(2), reducing washers are NOT acceptable bonding means. You replace it with the correct size connector.\n\nA large rooftop HVAC unit is connected with liquidtight flexible conduit. Per Rule 10-610(3), the flex conduit armour is NOT a bonding means — you must run a bonding conductor inside the flex. You pull a green insulated bonding conductor through the liquidtight and connect it at both ends.\n\nThe building has expansion joints in the conduit runs. Per Rule 10-608, you install bonding jumpers across each expansion joint to maintain bonding continuity.',
      keyPoints: [
        'ALL non-current-carrying metal parts must be connected to a bonding conductor (Rule 10-600(1))',
        'Exception: extra-low-voltage equipment bonding is not required (Rule 10-600(2))',
        'Parallel conductor runs: bonding conductor with EACH group of parallel conductors (Rule 10-602)',
        'Service bonding — rigid conduit: threaded couplings acceptable (Rule 10-604(1)(a))',
        'Service bonding — EMT: approved couplings/connectors required (Rule 10-604(1)(b))',
        'Service bonding — standard locknuts only: bonding bushings + bonding conductor required (Rule 10-604(1)(c))',
        'Exception: cable with internal bonding conductor in continuous contact with armour does not need bonding bushings (Rule 10-604(2))',
        'Other than service: standard box connectors, two locknuts, or locknut + conduit bushing acceptable (Rule 10-606(1))',
        'Reducing washers are NOT acceptable as bonding means (Rule 10-606(2))',
        'Expansion joints and telescoping sections: bonding conductor required across joint (Rule 10-608)',
        'Metal raceway/sheath/armour acceptable for bonding EXCEPT underground, Section 22, or corrosive environments (Rule 10-610(1)(a))',
        'Armoured cable armour NOT bonding unless armour + bonding conductor in continuous contact (Rule 10-610(2))',
        'Flexible conduit armour is NOT a bonding means — run bonding conductor inside (Rule 10-610(3))',
        'MI cable sheath not Cu/Al: NOT a bonding means (Rule 10-610(4))',
        'Single-conductor cable with isolated sheath: separate bonding conductor required (Rule 10-610(5))',
      ],
      diagramaMermaid: `graph TD
    A["Equipment Bonding\\n(Rule 10-600)"] --> B["ALL non-current-carrying\\nmetal parts bonded"]
    A --> C["Exception:\\nextra-low-voltage"]
    D["Service Bonding\\n(Rule 10-604)"] --> E["Rigid: threaded\\ncouplings OK"]
    D --> F["EMT: approved\\nconnectors"]
    D --> G["Standard locknuts:\\nNOT enough — need\\nbonding bushings"]
    H["Other Than Service\\n(Rule 10-606)"] --> I["Box connectors\\ntwo locknuts\\nor locknut + bushing"]
    H --> J["Reducing washers\\nNOT acceptable"]
    K["Bonding Means\\n(Rule 10-610)"] --> L["Metal raceway OK\\n(not underground/\\nhazardous/corrosive)"]
    K --> M["Flex conduit:\\nNOT bonding —\\nrun conductor inside"]
    K --> N["Armoured cable:\\nonly if armour +\\nbonding in contact"]
    O["Rule 10-602"] --> P["Bonding conductor\\nwith EACH parallel\\ngroup"]
    Q["Rule 10-608"] --> R["Bond across\\nexpansion joints"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style G fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style M fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style J fill:#991b1b,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'Service Locknuts', note: 'Standard locknuts alone are NOT enough at the service — bonding bushings required (Rule 10-604(1)(c))', color: 'rose' },
        { icon: 'wire', title: 'Flex Conduit', note: 'Flexible conduit armour is NEVER a bonding means — always run a bonding conductor inside (Rule 10-610(3))', color: 'amber' },
        { icon: 'shield', title: 'Parallel Runs', note: 'Each group of parallel conductors needs its own bonding conductor (Rule 10-602)', color: 'sky' },
        { icon: 'inspect', title: 'Reducing Washers', note: 'Reducing washers are NOT bonding means — use correct size connectors (Rule 10-606(2))', color: 'violet' },
        { icon: 'bolt', title: 'Expansion Joints', note: 'Always bond across expansion joints and telescoping sections (Rule 10-608)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 11. BONDING CONDUCTOR INSTALLATION & CONNECTIONS (Rules 10-612, 10-614, 10-616)
    // =========================================================================
    {
      id: '10-bonding-conductor-installation',
      title: 'Bonding Conductor Installation & Connections',
      rules: 'Rules 10-612, 10-614, 10-616',
      explanation:
        'Rule 10-612 covers the installation of bonding conductors with detailed requirements:\n\n(1) Bonding conductors may be spliced or tapped — unlike some other conductors, splicing is specifically permitted.\n(2) Where multiple bonding conductors enter a box, all must be in contact with each other via bonding screws or solderless connectors. Every box must maintain the bonding chain.\n(3) In a raceway: the bonding conductor must be insulated, EXCEPT uninsulated is acceptable if the raceway is not longer than 15 metres and contains not more than two quarter bends (90-degree bends). This mirrors Rule 10-116(5) for grounding conductors.\n(4) Where a bonding conductor is run in a raceway, it must be in the SAME raceway as the circuit conductors it serves.\n(5) Where single-conductor cables are used, the bonding conductor must follow the same route as the cables.\n(6) Copper bonding conductors #6 AWG or larger that are attached securely must be protected from mechanical damage. Copper bonding conductors smaller than #6 must be protected the same as the circuit conductors (in raceway, cable, etc.).\n(7) Aluminum bonding conductors #4 AWG or larger that are attached securely must be protected from mechanical damage. Aluminum bonding conductors smaller than #4 must be protected the same as the circuit conductors.\n\nRule 10-614 covers bonding conductor connections:\n(1) Connections must be made with lugs, pressure connectors, clamps, or equally substantial fittings.\n(2) Solder connections are NOT permitted for bonding. Solder can melt under fault current heat, destroying the connection when it is needed most.\n(3) A bonding connection must be made at every metallic AND non-metallic outlet box. Even non-metallic (plastic) boxes must have the bonding conductor connected within them to maintain the bonding chain to the device.\n(4) Where bonding continuity passes through an access cover, it must remain continuous when the cover is removed. You cannot have a bonding path that depends on a cover being in place.\n(5) Removal of a device (receptacle, switch) must NOT interrupt bonding continuity. The bonding path must be independent of the device. This is why pigtails are required for bonding conductors at receptacles — if you rely on the device terminals for bonding continuity and the device is removed, downstream bonding is lost.\n\nRule 10-616 covers bonding conductor and system bonding jumper sizing:\n(1) System bonding jumper: sized per Table 16, based on the rating of the overcurrent protective device (OCPD).\n(2) At the service: Table 16, based on the ampacity of the largest ungrounded conductor.\n(3) Other than service: Table 16, based on the OCPD rating, OR based on the conductor ampacity if conductors were upsized for voltage drop.\n(4) For parallel conductor runs: take the Table 16 size and divide by the number of parallel groups.\n(5) The bonding conductor need not be larger than the current-carrying conductors.\n(6) Metal raceway that serves as the bonding path meets the bonding conductor requirement.\n(7) Integral cable bonding conductors (built into the cable) meet the bonding conductor requirement.',
      fieldScenario:
        'You are wiring a large office floor with EMT raceway. Each circuit has a green insulated bonding conductor pulled through the EMT per Rule 10-612(4).\n\nAt each junction box, per Rule 10-612(2), all bonding conductors entering the box must be connected together using bonding screws or a solderless connector (wire nut or Wago). You use a green wire nut to pigtail all bonding conductors together with a tail going to the box bonding screw.\n\nThe conduit runs are typically 20 metres with three bends. Per Rule 10-612(3), since the runs exceed 15 metres, the bonding conductor must be insulated (green). If the run were under 15 metres with two or fewer bends, bare copper would be acceptable.\n\nAt receptacle outlets, per Rule 10-614(5), you pigtail the bonding conductor rather than relying on the receptacle\'s push-in terminal for continuity. If a maintenance worker removes the receptacle, all downstream devices maintain their bonding connection through the pigtail.\n\nFor the 400A feeder to the floor, you need to size the bonding conductor. Per Rule 10-616(3), you consult Table 16 based on the 400A OCPD rating. Table 16 gives you #3 AWG copper. However, the feeders were upsized from 500 kcmil to 750 kcmil for voltage drop. In this case, you can alternatively size the bonding conductor based on the actual conductor ampacity.\n\nThe feeder runs in two parallel conduit sets (two conduits, each carrying half the conductors). Per Rule 10-616(4), you divide the Table 16 bonding conductor size by the number of groups: #3 AWG divided by 2 groups could result in a smaller conductor per raceway, but per Rule 10-616(5), the bonding conductor never needs to be larger than the circuit conductors.\n\nA subcontractor solders a bonding conductor splice. Per Rule 10-614(2), solder connections are NOT permitted for bonding — you make them redo it with a listed mechanical splice.',
      keyPoints: [
        'Bonding conductors may be spliced or tapped (Rule 10-612(1))',
        'Multiple bonding conductors in a box: all must be in contact via bonding screws or solderless connector (Rule 10-612(2))',
        'In raceway: bonding conductor must be insulated, EXCEPT bare OK if <=15m and <=two quarter bends (Rule 10-612(3))',
        'Bonding conductor must be in the SAME raceway as the circuit conductors it serves (Rule 10-612(4))',
        'Single-conductor cables: bonding conductor follows same route (Rule 10-612(5))',
        'Cu >=# 6 attached securely: protect from mechanical damage; <#6: protect same as circuit conductor (Rule 10-612(6))',
        'Al >=#4 attached securely: protect from mechanical damage; <#4: protect same as circuit conductor (Rule 10-612(7))',
        'Connections: lugs, pressure connectors, clamps, or equally substantial fittings (Rule 10-614(1))',
        'Solder connections are NOT permitted for bonding — solder melts under fault current heat (Rule 10-614(2))',
        'Bonding connection required at every metallic AND non-metallic outlet box (Rule 10-614(3))',
        'Bonding continuity through access cover: must remain continuous when cover is removed (Rule 10-614(4))',
        'Device removal must NOT interrupt bonding continuity — use pigtails (Rule 10-614(5))',
        'System bonding jumper: Table 16 per OCPD rating (Rule 10-616(1))',
        'At service: Table 16 per largest ungrounded conductor ampacity (Rule 10-616(2))',
        'Other than service: Table 16 per OCPD or per conductor ampacity if upsized for voltage drop (Rule 10-616(3))',
        'Parallel runs: divide Table 16 size by number of parallel groups (Rule 10-616(4))',
        'Bonding conductor not required to be larger than current-carrying conductors (Rule 10-616(5))',
        'Metal raceway as bonding path meets bonding conductor requirement (Rule 10-616(6))',
        'Integral cable bonding conductor meets bonding conductor requirement (Rule 10-616(7))',
      ],
      diagramaMermaid: `graph TD
    A["Bonding Conductor\\nInstallation\\n(Rule 10-612)"] --> B["May be spliced\\nor tapped (1)"]
    A --> C["All conductors\\nin box must\\ncontact each other (2)"]
    A --> D["In raceway:\\ninsulated unless\\n<=15m + <=2 bends (3)"]
    A --> E["Same raceway as\\ncircuit conductors (4)"]
    F["Connections\\n(Rule 10-614)"] --> G["Lugs, pressure\\nconnectors, clamps (1)"]
    F --> H["NO solder (2)"]
    F --> I["At every box —\\nmetallic AND\\nnon-metallic (3)"]
    F --> J["Device removal\\nmust NOT break\\nbonding (5)"]
    K["Sizing\\n(Rule 10-616)"] --> L["Table 16\\nper OCPD rating"]
    K --> M["Service: per largest\\nconductor ampacity"]
    K --> N["Parallel: divide\\nby # of groups"]
    K --> O["Not larger than\\ncircuit conductors"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style H fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style K fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'No Solder', note: 'Solder melts under fault current — use mechanical connectors only for bonding (Rule 10-614(2))', color: 'rose' },
        { icon: 'wire', title: 'Pigtail Rule', note: 'Device removal must not interrupt bonding — always pigtail at receptacles (Rule 10-614(5))', color: 'amber' },
        { icon: 'ruler', title: 'Table 16 Sizing', note: 'System bonding jumper and bonding conductors sized from Table 16 per OCPD or conductor ampacity (Rule 10-616)', color: 'sky' },
        { icon: 'box', title: 'Every Box', note: 'Bonding connection required at every outlet box — metallic AND non-metallic (plastic) (Rule 10-614(3))', color: 'emerald' },
        { icon: 'shield', title: 'Parallel Groups', note: 'Bonding conductor in each parallel group — divide Table 16 size by number of groups (Rule 10-616(4))', color: 'violet' },
      ],
    },

    // =========================================================================
    // 12. EQUIPOTENTIAL BONDING (Rules 10-700, 10-702, 10-704, 10-706, 10-708)
    // =========================================================================
    {
      id: '10-equipotential-bonding',
      title: 'Equipotential Bonding',
      rules: 'Rules 10-700, 10-702, 10-704, 10-706, 10-708',
      explanation:
        'Equipotential bonding is the final layer of protection in Section 10. While equipment bonding (Rules 10-600 to 10-616) focuses on electrical equipment, equipotential bonding extends to other metallic systems in the building that could become energized or create a shock hazard.\n\nRule 10-700 identifies the metallic systems that must be equipotentially bonded:\n- Water piping: Metal water supply pipes can become energized if a fault occurs in equipment near the pipes, or if the pipes are used as a grounding electrode by other systems.\n- Waste water piping: Metal drain, waste, and vent (DWV) piping must be bonded for the same reasons as water piping.\n- Gas piping: Metal natural gas or propane piping is especially critical because a spark at a loose joint could ignite gas.\n- Conductive raised floors with wiring underneath: Computer room raised floors with plenum wiring below must be bonded because the floor panels are metal and people walk on them while touching equipment.\n- Metal parts accessible by livestock: Agricultural installations require bonding of stanchions, water bowls, feed troughs, and other metal parts that livestock contact. Animals are more sensitive to stray voltage than humans — even small voltages can affect milk production in dairy cattle and cause behavioral changes.\n\nRule 10-702 covers installation of equipotential bonding conductors:\n(1) Open wiring is acceptable if the conductor is secured. Unlike circuit wiring that must be in raceway or cable, equipotential bonding conductors can be run exposed as long as they are fastened in place.\n(2) Where run through structural members: the conductor must be installed like NMD cable (through bored holes in the centre of studs/joists), and bushed holes are NOT required where the conductor passes through metal studs. This simplifies installation in metal-framed buildings.\n\nRule 10-704 specifies that equipotential bonding conductor material must be the same as for grounding or bonding conductors — copper, aluminum, or other acceptable material per Rule 10-112.\n\nRule 10-706 requires that connections be mechanically secure and suitable for the conditions of use. This is a general requirement — the connection must withstand the environment (moisture, vibration, temperature) where it is installed.\n\nRule 10-708 establishes minimum sizes:\n(1) The general minimum is #6 AWG copper or #4 AWG aluminum — the same as grounding conductors per Rule 10-114.\n(2) Exception: where the conductor is concealed AND mechanically protected (inside walls, under floors), the minimum may be reduced to #10 AWG copper or #8 AWG aluminum. This recognizes that concealed conductors face less risk of physical damage.',
      fieldScenario:
        'You are completing the rough-in for a new dairy barn. The farmer is concerned about stray voltage affecting his cows — he has heard that even 1-2V can reduce milk production.\n\nPer Rule 10-700, you must equipotentially bond all metal parts accessible to livestock: stanchion frames, metal water bowls, feed troughs, the metal building frame, and any metal piping. You run #6 AWG bare copper (per Rule 10-708(1)) from the electrical panel bonding terminal to each metal component.\n\nPer Rule 10-702(1), you run the bonding conductor as open wiring secured with staples along the barn structure. The conductor runs through wood posts — you bore holes through the centre of the posts similar to NMD cable installation per Rule 10-702(2).\n\nAt each bonding point, per Rule 10-706, you use a bronze ground clamp suitable for the damp barn environment — standard steel clamps would corrode quickly in the moisture and ammonia.\n\nIn a commercial building on another project, you bond the water supply piping, waste piping, and gas piping per Rule 10-700. The gas pipe bonding is especially critical — you use a listed gas pipe bonding clamp on the gas line within 1 metre of where it enters the building. Per Rule 10-704, you use copper conductor for all bonding.\n\nFor the server room, the raised access floor has metal tiles with wiring in the plenum below. Per Rule 10-700, you bond the raised floor support structure to the electrical system. You run #10 AWG copper bonding conductors concealed under the subfloor, which is acceptable per Rule 10-708(2) because the conductors are concealed and mechanically protected.\n\nThe plumber asks if the plastic PEX water piping needs bonding. No — Rule 10-700 applies to metallic systems only. However, you verify that any transition from PEX to copper (at the water heater, for example) includes bonding of the copper section.',
      keyPoints: [
        'Equipotential bonding required for: water piping, waste water piping, gas piping, conductive raised floors with wiring underneath, and metal parts accessed by livestock (Rule 10-700)',
        'Open wiring acceptable if secured (Rule 10-702(1))',
        'Through structural members: install like NMD cable; bushed holes NOT required through metal studs (Rule 10-702(2))',
        'Material: same as grounding or bonding conductors — copper, aluminum, or acceptable material (Rule 10-704)',
        'Connections must be mechanically secure and suitable for conditions of use (Rule 10-706)',
        'Minimum size: #6 AWG copper or #4 AWG aluminum (Rule 10-708(1))',
        'Concealed AND mechanically protected: minimum may be #10 AWG copper or #8 AWG aluminum (Rule 10-708(2))',
        'Livestock are more sensitive to stray voltage than humans — bonding is critical in agricultural installations (Rule 10-700)',
        'Gas piping bonding is critical — spark at loose joint could ignite gas (Rule 10-700)',
        'Conductive raised floors in server rooms with plenum wiring require bonding (Rule 10-700)',
      ],
      diagramaMermaid: `graph TD
    A["Equipotential Bonding\\n(Rule 10-700)"] --> B["Water piping"]
    A --> C["Waste water\\npiping"]
    A --> D["Gas piping"]
    A --> E["Conductive raised\\nfloors with wiring"]
    A --> F["Metal parts\\naccessed by\\nlivestock"]
    G["Installation\\n(Rule 10-702)"] --> H["Open wiring OK\\nif secured (1)"]
    G --> I["Through structure:\\nlike NMD cable\\nno bushed holes\\nin metal studs (2)"]
    J["Size\\n(Rule 10-708)"] --> K["General: #6 Cu\\nor #4 Al (1)"]
    J --> L["Concealed +\\nprotected: #10 Cu\\nor #8 Al (2)"]
    M["Connections\\n(Rule 10-706)"] --> N["Mechanically secure\\nsuitable for\\nconditions"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style J fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Gas Piping', note: 'Metal gas piping MUST be bonded — spark at a loose joint could cause explosion (Rule 10-700)', color: 'rose' },
        { icon: 'inspect', title: 'Livestock Sensitivity', note: 'Animals feel stray voltage at 1-2V — bond stanchions, water bowls, and feed troughs (Rule 10-700)', color: 'amber' },
        { icon: 'ruler', title: 'Size Options', note: 'General: #6 Cu / #4 Al. Concealed and protected: #10 Cu / #8 Al minimum (Rule 10-708)', color: 'sky' },
        { icon: 'post', title: 'Open Wiring OK', note: 'Equipotential bonding conductors may be run as open wiring if secured in place (Rule 10-702(1))', color: 'emerald' },
        { icon: 'box', title: 'Raised Floors', note: 'Conductive raised floors with wiring in plenum underneath require bonding (Rule 10-700)', color: 'violet' },
      ],
    },
  ],
}
