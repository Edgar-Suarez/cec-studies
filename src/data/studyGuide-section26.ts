import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 26 — Installation of Electrical Equipment (CEC 2021, CSA C22.1:21, pages 217-238)
 * COMPLETE — Every rule from 26-000 to 26-1000 is covered.
 * Source: PDF scan "Section 26 — Installation of electrical equipment"
 */

export const section26Guide: StudyGuideSection = {
  section: '26',
  title: 'Section 26 — Installation of Electrical Equipment',
  description:
    'Section 26 is the largest equipment-specific section of the CEC. It covers the installation of capacitors, circuit breakers, fuses, transformers, panelboards, branch circuits, receptacles, electric heating and cooking appliances, heating equipment, pipe organs, submersible pumps, and permanently connected data processing units. It also covers dielectric liquid-filled equipment (indoors/outdoors), isolating switches, fences around outdoor equipment, electrical equipment vaults, cellulose nitrate film storage, lightning arresters, low-voltage surge protective devices, and resistance devices. Rules 26-000 through 26-1000.',
  subsections: [
    // =========================================================================
    // 1. GENERAL — Scope, Identified Terminals, Combustible Surfaces, Outdoors (Rules 26-000 to 26-008)
    // =========================================================================
    {
      id: '26-general',
      title: 'General — Identified Terminals, Combustible Surfaces, Ventilated & Outdoor Installations',
      rules: 'Rules 26-000 to 26-008',
      explanation:
        'The opening rules of Section 26 establish foundational requirements that apply to ALL electrical equipment installations regardless of type. They cover identified conductor connections, fire protection over combustible surfaces, enclosure ventilation, and the fencing/bonding of outdoor apparatus.\n\nRule 26-000 (General): Reserved for future use.\n\nRule 26-002 (Connection to identified terminals or leads): "Wherever a device having an identified terminal or lead is connected in a circuit having an identified conductor, the identified conductor shall be connected to the identified terminal or lead." This ensures the grounded (neutral) conductor always lands on the correct terminal so switched devices open the ungrounded (hot) conductor — a safety-critical detail at every screw-in lampholder, switch, and receptacle.\n\nRule 26-004 (Equipment over combustible surfaces): Where there is a combustible surface directly under stationary or fixed electrical equipment, that surface shall be covered with a steel plate at least 1.6 mm thick that shall extend not less than 150 mm beyond the equipment on all sides, if (a) the equipment is marked to require such protection; or (b) the equipment is open on the bottom.\n\nRule 26-006 (Installation of ventilated enclosures): Ventilated enclosures shall be installed in a manner that does not restrict ventilation. A "ventilated" rating is worthless if the enclosure is butted against a wall or stacked so air cannot flow.\n\nRule 26-008 (Outdoor installations): (1) Outdoor installations of apparatus, unless housed in suitable enclosures, shall be surrounded by suitable fencing in accordance with Rules 26-300 to 26-324. (2) Outdoor equipment shall be bonded to ground.',
      fieldScenario:
        'You are installing a medium-voltage disconnect switch marked "Bottom Open — Provide Fire Protection". Rule 26-004(a) requires a steel plate at least 1.6 mm thick under the equipment, extending not less than 150 mm beyond all sides. You fabricate a 16-gauge plate and install it on the combustible plywood backboard before mounting the disconnect.\n\nA technician wires a snap switch in a junction box but ties the white (identified) conductor to the brass-colored terminal instead of the silver-colored one. Rule 26-002 requires the identified conductor to be connected to the identified terminal. You correct it so the neutral lands on the silver terminal and the line on the brass terminal.\n\nAt a substation site, a contractor wants to set an outdoor pad-mount transformer without a fence and without an enclosure. Rule 26-008(1) forbids this — outdoor apparatus must be housed in suitable enclosures OR surrounded by fencing conforming to Rules 26-300 through 26-324. Rule 26-008(2) further requires that the outdoor transformer frame be bonded to ground.\n\nAnother installer stacks two ventilated dry-type transformer cabinets back-to-back. Rule 26-006 prohibits restricting the ventilation — you require them to be spaced apart so the louvers can breathe.',
      keyPoints: [
        'Rule 26-000 is Reserved for future use',
        'Identified conductor must connect to the identified terminal or lead on any device with an identified terminal (Rule 26-002)',
        'Combustible surface under stationary/fixed equipment: steel plate >= 1.6 mm thick, extending >= 150 mm beyond equipment on all sides (Rule 26-004)',
        'Steel plate protection is required if equipment is marked to require it OR if it is open on the bottom (Rule 26-004(a)(b))',
        'Ventilated enclosures must be installed so ventilation is NOT restricted (Rule 26-006)',
        'Outdoor apparatus, unless in suitable enclosures, must be surrounded by fencing per Rules 26-300 to 26-324 (Rule 26-008(1))',
        'Outdoor equipment must be bonded to ground (Rule 26-008(2))',
      ],
      diagramaMermaid: `graph TD
    A["Section 26 General\\n(Rules 26-000 to 26-008)"] --> B["Rule 26-002\\nIdentified terminal =\\nidentified conductor"]
    A --> C["Rule 26-004\\nCombustible surface\\nprotection"]
    A --> D["Rule 26-006\\nVentilated enclosures\\nmust breathe"]
    A --> E["Rule 26-008\\nOutdoor equipment"]
    C --> C1["Steel plate\\n>= 1.6 mm thick"]
    C --> C2["Extends >= 150 mm\\nbeyond equipment"]
    C --> C3["Required if marked\\nOR open on bottom"]
    E --> E1["Fence per\\n26-300 to 26-324"]
    E --> E2["OR suitable\\nenclosure"]
    E --> E3["Bonded to ground"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'neutral', title: 'Identified to Identified', note: 'White (neutral) always lands on the silver/identified terminal — Rule 26-002', color: 'sky' },
        { icon: 'fire', title: 'Steel Plate 1.6 mm', note: 'Over combustible surfaces, extend 150 mm beyond equipment on all sides — Rule 26-004', color: 'amber' },
        { icon: 'box', title: 'Let Vents Breathe', note: 'Ventilated enclosures must not be installed so as to restrict ventilation — Rule 26-006', color: 'emerald' },
        { icon: 'shield', title: 'Outdoor = Fence or Enclosure', note: 'Plus bonded to ground — Rule 26-008', color: 'rose' },
        { icon: 'ruler', title: '150 mm Margin', note: 'Fire plate must extend 150 mm past equipment on ALL sides — Rule 26-004', color: 'violet' },
      ],
    },

    // =========================================================================
    // 2. DIELECTRIC LIQUID-FILLED EQUIPMENT — Indoors & Outdoors (Rules 26-010 to 26-012)
    // =========================================================================
    {
      id: '26-dielectric-liquid',
      title: 'Dielectric Liquid-Filled Equipment — Indoors & Outdoors',
      rules: 'Rules 26-010 to 26-012',
      explanation:
        'These rules govern electrical equipment containing dielectric (insulating) liquids — transformers, capacitors, and circuit breakers filled with mineral oil, askarel, PCBs, or newer non-propagating fluids. The liquid itself is a fire and environmental hazard; these rules minimize its consequences.\n\nRule 26-010 (Dielectric liquid-filled equipment — Indoors): (1) Except as permitted in Subrule 5), dielectric liquid-filled electrical equipment containing more than 23 L of liquid in one tank, or more than 69 L in a group of tanks, shall be located in an electrical equipment vault. (2) Except as permitted in Subrule 4), equipment with 23 L or less in one tank, or 69 L or less in a group of tanks, shall be: (a) installed in a service room conforming to the National Building Code of Canada; (b) provided with a metal pan or concrete curbing capable of collecting and retaining all the liquid; (c) isolated from other apparatus by fire-resisting barriers (metal-enclosed equipment considered to provide segregation); and (d) separated from other dielectric liquid-filled equipment containing PCBs by a distance such that, if the liquid were spread at 12 L/m², the areas so covered would not overlap. (3) Motor starters are permitted to have these quantities DOUBLED. (4) Capacitors filled with flammable liquids of 14 L or less per tank are exempt from the service room requirement provided (a) a liquid-collecting pan/curbing is installed; (b) no other dielectric equipment or combustible material is within 4.5 m unless segregated by fire-resisting barriers; and (c) each capacitor tank has overcurrent protection to minimize rupture. (5) Equipment over 23 L per tank / 69 L per group MAY be installed per Subrule 2) (instead of a vault) if: (a) protected from mechanical damage by location or guarding; (b) the liquid is non-propagating with a flash point >= 275 °C; (c) for equipment other than transformers, provided with gas absorption OR a pressure relief device; (d) transformers with ratings exceeding 25 kV·A at 25 Hz or 37.5 kV·A at 60 Hz provided with gas absorption OR a pressure relief vent; and (e) transformers rated 15 000 V or more — the service room accessible only to authorized persons.\n\nRule 26-012 (Dielectric liquid-filled equipment — Outdoors): (1) Except as permitted by Subrule 3), equipment containing more than 46 L of liquid in one tank, or 137 L in a group of tanks, installed outdoors shall not be located within 6 m of: (a) any combustible surfaces or material on a building; (b) any door or window; or (c) any ventilation inlet or outlet. (2) The 6 m dimension is the shortest line-of-sight distance from the face of the container containing the liquid to the building part in question. (3) Equipment MAY be installed within 6 m of any item in Subrule 1) if a wall or barrier with non-combustible surfaces is constructed between the equipment and that item. (4) Outdoor equipment over 46 L per tank / 137 L per group shall: (a) be inaccessible to unauthorized persons; (b) not obstruct firefighting operations; (c) if at ground level, be located on a concrete pad draining away from structures or be in a curbed area filled with coarse crushed stone; and (d) not have open drains for liquid disposal in proximity to combustible construction or materials.',
      fieldScenario:
        'You are specifying an indoor mineral-oil-filled transformer containing 30 L of oil (above 23 L). Rule 26-010(1) requires a vault unless Subrule 5) applies. You verify the oil is actually a non-propagating fluid with a flash point of 285 °C — that qualifies it for Subrule 5). The transformer is rated 50 kV·A at 60 Hz, so Rule 26-010(5)(d) requires a pressure relief vent OR gas absorption. You install it in a service room with a concrete curb to collect the oil (Rule 26-010(2)(b)), separated from a nearby PCB-filled unit so that at 12 L/m² the spread areas do not overlap (Rule 26-010(2)(d)).\n\nAn outdoor 250 kVA pad-mount transformer contains 300 L of oil. Rule 26-012(1) prohibits locating it within 6 m of combustible walls, doors/windows, or ventilation openings. Measured line-of-sight from the tank face to the nearest window is 5.2 m — a violation. You resolve it by building a non-combustible masonry barrier between the transformer and the window per Rule 26-012(3).\n\nAt ground level, Rule 26-012(4)(c) requires the transformer to sit on a concrete pad draining away from structures, or in a curbed area filled with coarse crushed stone. The open drain in the curbed area must not lead to combustible construction (Rule 26-012(4)(d)).\n\nFor a small 14 L capacitor installation, Rule 26-010(4) exempts it from the service room requirement provided a liquid-collecting pan is installed, nothing combustible is within 4.5 m unless segregated, and each tank has overcurrent protection to minimize rupture.',
      keyPoints: [
        'Indoor dielectric equipment > 23 L in one tank or > 69 L in group: electrical equipment vault required (Rule 26-010(1))',
        'Indoor equipment at or below 23 L / 69 L: service room per NBCC, liquid containment, fire barriers, PCB separation (Rule 26-010(2))',
        'PCB spread separation: calculated at 12 L/m², areas must not overlap (Rule 26-010(2)(d))',
        'Motor starters: the 23 L / 69 L quantities are DOUBLED (Rule 26-010(3))',
        'Capacitors <= 14 L per tank: exempt from service room requirement with pan, 4.5 m separation, overcurrent protection (Rule 26-010(4))',
        'Subrule 5) alternative to vault: mechanical protection + non-propagating fluid (flash point >= 275 °C) + gas/pressure relief (Rule 26-010(5))',
        'Transformers > 25 kV·A at 25 Hz or > 37.5 kV·A at 60 Hz: gas absorption or pressure relief vent required (Rule 26-010(5)(d))',
        'Transformers 15 000 V or more: service room accessible only to authorized persons (Rule 26-010(5)(e))',
        'Outdoor equipment > 46 L per tank / 137 L per group: 6 m from combustible surfaces, doors, windows, vents (Rule 26-012(1))',
        '6 m is shortest line-of-sight distance from container face to the building part (Rule 26-012(2))',
        'Non-combustible barrier permits installation within 6 m (Rule 26-012(3))',
        'Outdoor equipment: inaccessible to unauthorized persons, not obstruct firefighting, concrete pad or crushed stone, no open drains near combustibles (Rule 26-012(4))',
      ],
      diagramaMermaid: `graph TD
    A["Dielectric Liquid\\nEquipment"] --> B["INDOORS\\n(Rule 26-010)"]
    A --> C["OUTDOORS\\n(Rule 26-012)"]
    B --> B1["> 23 L / tank\\nor > 69 L / group\\n= VAULT required"]
    B --> B2["<= 23 L / 69 L\\n= Service room +\\ncontainment"]
    B --> B3["Motor starters:\\nquantities DOUBLED"]
    B --> B4["Capacitors <= 14 L:\\nExempt with pan +\\n4.5 m segregation"]
    B1 --> B5["OR Subrule 5):\\nflash >= 275 C\\n+ pressure relief"]
    C --> C1["> 46 L / tank\\nor > 137 L / group"]
    C1 --> C2["6 m from combustibles,\\ndoors, windows, vents"]
    C1 --> C3["Barrier permits\\nwithin 6 m"]
    C1 --> C4["Pad + drain away\\nor crushed stone"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C2 fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: '23 L / 69 L Vault Threshold', note: 'Indoor dielectric > 23 L per tank or > 69 L per group goes in a vault — Rule 26-010(1)', color: 'rose' },
        { icon: 'ruler', title: '6 m Outdoor Setback', note: 'Line-of-sight 6 m from combustibles, doors, windows, vents — Rule 26-012(1)(2)', color: 'amber' },
        { icon: 'shield', title: 'Non-combustible Barrier', note: 'Permits outdoor equipment within 6 m of building features — Rule 26-012(3)', color: 'sky' },
        { icon: 'fire', title: 'Flash Point 275 C', note: 'Non-propagating liquid threshold for vault exemption — Rule 26-010(5)(b)', color: 'violet' },
        { icon: 'box', title: 'Curbing & Pans', note: 'Metal pan or concrete curbing must collect and retain all the liquid — Rule 26-010(2)(b)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 3. ISOLATING SWITCHES, CIRCUIT BREAKERS & FUSES (Rules 26-100 to 26-142)
    // =========================================================================
    {
      id: '26-isolating-breakers-fuses',
      title: 'Isolating Switches, Circuit Breakers & Fuses',
      rules: 'Rules 26-100 to 26-142',
      explanation:
        'These short but critical rules govern three fundamental protective and disconnecting devices.\n\nRule 26-100 (Location of isolating switches): (1) Isolating switches shall be permitted to be located so that a hook stick is required to operate them. (2) Isolating switches shall be plainly marked to minimize the chance that they will be opened under load, unless (a) they are located or guarded so that they are inaccessible to unauthorized persons; or (b) they are interlocked so that they cannot normally be opened under load.\n\nRule 26-120 (Indoor installation of circuit breakers): (1) Dielectric liquid-filled circuit breakers installed indoors shall be installed in accordance with Rule 26-010. (2) Circuit breakers installed in electrical equipment vaults shall be operable without opening the door of the vault.\n\nRule 26-140 (Installation of fuses): Fuses shall be located so that (a) their operation will not result in injury to persons or damage to property or other equipment; and (b) they can be readily inserted or removed.\n\nRule 26-142 (Fusible equipment): Fusible equipment shall employ low-melting-point fuses of the type referred to in Rule 14-200 or fuses as referred to in Rule 14-212 b) when connected to conductors whose ampacity is based on Table 1 or 3 or on Column 4 of Table 2 or 4, unless equipment using other types of fuses is marked as being suitable for such use.',
      fieldScenario:
        'On a 25 kV overhead pole line, the utility installs a gang-operated isolating switch that can only be opened with a hook stick. Rule 26-100(1) permits this mounting height. Because the switch has no load-break capability, Rule 26-100(2) requires plain marking warning against opening under load — unless the switch is interlocked with an upstream breaker so it cannot open under load.\n\nInside an electrical equipment vault, a contractor wants to install a liquid-filled circuit breaker. Rule 26-120(1) routes you back to Rule 26-010 for the dielectric-liquid rules. Rule 26-120(2) also requires that the breaker be operable from outside the vault without opening the door — typically through an external operating handle.\n\nAn apprentice installs ribbon fuses in a distribution cabinet inside a narrow equipment room. Rule 26-140(a) requires fuse operation to not cause injury or damage — meaning the fuse must have adequate interrupting rating and arc-venting clearance. Rule 26-140(b) requires the fuses to be readily removable — you confirm there is enough clearance around the fuse to use a fuse puller.\n\nA panel is being wired with Type NMD90 copper conductors where ampacity is taken from Column 4 of Table 2 (90 °C termination). Rule 26-142 requires low-melting-point (Type P) fuses per Rule 14-200, or the fuses permitted by Rule 14-212(b), unless the panel is specifically marked as suitable for other fuse types.',
      keyPoints: [
        'Isolating switches may be located high enough to require a hook stick (Rule 26-100(1))',
        'Isolating switches must be plainly marked to warn against opening under load (Rule 26-100(2))',
        'Marking NOT required if switch is inaccessible to unauthorized persons OR interlocked to prevent opening under load (Rule 26-100(2)(a)(b))',
        'Indoor dielectric liquid-filled circuit breakers follow Rule 26-010 (Rule 26-120(1))',
        'Circuit breakers in electrical equipment vaults must be operable without opening the vault door (Rule 26-120(2))',
        'Fuses must be located so their operation cannot injure persons or damage property/equipment (Rule 26-140(a))',
        'Fuses must be readily insertable and removable (Rule 26-140(b))',
        'Fusible equipment must use low-melting-point fuses per Rule 14-200 or Rule 14-212(b) with Table 1/3 or Column 4 of Table 2/4 ampacity (Rule 26-142)',
        'Alternative fuses permitted only if equipment is marked as suitable for such use (Rule 26-142)',
      ],
      diagramaMermaid: `graph TD
    A["Protective Devices\\n(Rules 26-100 to 26-142)"] --> B["Isolating Switches\\n(Rule 26-100)"]
    A --> C["Circuit Breakers\\n(Rule 26-120)"]
    A --> D["Fuses\\n(Rules 26-140, 142)"]
    B --> B1["Hook stick operation\\npermitted"]
    B --> B2["Plain marking to\\nprevent opening\\nunder load"]
    B --> B3["Unless guarded or\\ninterlocked"]
    C --> C1["Dielectric liquid:\\nper Rule 26-010"]
    C --> C2["In vault: operable\\nwithout opening\\nvault door"]
    D --> D1["Rule 26-140:\\nSafe location\\n+ readily removable"]
    D --> D2["Rule 26-142:\\nLow-melting-point\\n(Type P) fuses\\nrequired"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D2 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'Isolating = No Load', note: 'Mark plainly to warn against opening under load unless interlocked — Rule 26-100(2)', color: 'rose' },
        { icon: 'lock', title: 'Vault Breaker Access', note: 'Must be operable without opening the vault door — Rule 26-120(2)', color: 'amber' },
        { icon: 'bolt', title: 'Fuses: Safe & Accessible', note: 'Operation must not injure or damage; readily insertable/removable — Rule 26-140', color: 'sky' },
        { icon: 'label', title: 'Low-Melting Point Required', note: 'Type P fuses unless equipment is marked for other types — Rule 26-142', color: 'violet' },
      ],
    },

    // =========================================================================
    // 4. CAPACITORS — Part 1: Installation, Guarding, Conductors, Overcurrent (Rules 26-200 to 26-210)
    // =========================================================================
    {
      id: '26-capacitors-general',
      title: 'Capacitors — Installation, Guarding, Conductors & Overcurrent',
      rules: 'Rules 26-200 to 26-210',
      explanation:
        'Capacitors store dangerous amounts of energy and require unique installation rules covering indoor placement, guarding of live parts, bonding, conductor sizing, and overcurrent protection.\n\nRule 26-200 (Capacitors exempted): The requirements of Rules 26-202 to 26-222 shall not apply to capacitors that form component parts of factory-assembled electrical equipment nor to surge protective capacitors. These embedded or snubber capacitors are covered by their parent equipment listing.\n\nRule 26-202 (Capacitors installed indoors): Dielectric liquid-filled capacitors located indoors shall be installed in accordance with Rule 26-010. (This routes back to the dielectric liquid rules — vault thresholds, service room, containment, PCB spacing.)\n\nRule 26-204 (Guarding of capacitors): All live parts of capacitors shall be inaccessible to unauthorized persons. This is essential because capacitors retain a hazardous stored charge even after disconnection.\n\nRule 26-206 (Grounding of capacitors): Non-current-carrying metal parts of capacitors shall be bonded to ground.\n\nRule 26-208 (Conductor size for capacitors): (1) The ampacity of capacitor feeder circuits and branch circuits shall be not less than 135% of the rated current of the capacitor. (2) Where a branch circuit supplies two or more capacitors, the overcurrent device protecting the conductors shall be considered as protecting the taps made thereto to supply single capacitors, provided that (a) the tap is not more than 7.5 m long; and (b) its conductors comply with Subrule 1) and also have an ampacity not less than one-third that of the branch circuit conductors from which they are supplied.\n\nRule 26-210 (Overcurrent protection): An overcurrent device, rated or set as low as practicable without causing unnecessary unwanted opening of the circuit, but not exceeding 250% of the rated current of the capacitor, shall be provided in each ungrounded conductor of a capacitor feeder or branch circuit, unless a deviation has been allowed in accordance with Rule 2-030.',
      fieldScenario:
        'At a foundry with a power factor correction bank, you are sizing feeder conductors for a 100 kvar, 480 V, 3-phase capacitor with a rated current of 120 A. Rule 26-208(1) requires 135% of rated current = 162 A. You select RW90 copper conductors sized for 165 A minimum.\n\nThe feeder overcurrent device must be "as low as practicable without causing unnecessary unwanted opening", but not more than 250% of rated current = 300 A (Rule 26-210). You install a 300 A fuse.\n\nThree capacitors are tapped from a single branch circuit. Rule 26-208(2) lets the branch circuit overcurrent device protect the taps IF each tap is no more than 7.5 m long AND each tap conductor has at least 135% of its capacitor current AND not less than one-third the branch circuit conductor ampacity.\n\nA supervisor wants the capacitor cabinet to be accessible to general plant personnel. Rule 26-204 requires all live parts to be inaccessible to unauthorized persons. You add a lockable barrier with "Authorized Personnel Only" signage.\n\nThe steel frame of the capacitor bank must be bonded to ground per Rule 26-206 — you run a bonding conductor sized per Rule 10-616.\n\nA factory-assembled VFD contains internal DC bus capacitors. Rule 26-200 exempts these embedded capacitors from Rules 26-202 through 26-222 since they are component parts of listed equipment.',
      keyPoints: [
        'Rules 26-202 to 26-222 do NOT apply to capacitors that are component parts of factory-assembled equipment or to surge protective capacitors (Rule 26-200)',
        'Indoor dielectric liquid-filled capacitors must follow Rule 26-010 (Rule 26-202)',
        'All live parts of capacitors must be inaccessible to unauthorized persons (Rule 26-204)',
        'Non-current-carrying metal parts of capacitors must be bonded to ground (Rule 26-206)',
        'Capacitor feeder/branch circuit conductors must be rated >= 135% of capacitor current (Rule 26-208(1))',
        'Tap to single capacitor: <= 7.5 m long AND >= 135% of capacitor current AND >= 1/3 of branch circuit conductor ampacity (Rule 26-208(2))',
        'Overcurrent protection: as low as practicable, NOT exceeding 250% of capacitor rated current (Rule 26-210)',
        'Overcurrent device required in EACH ungrounded conductor of capacitor feeder or branch circuit (Rule 26-210)',
        'Deviation from overcurrent rule requires Rule 2-030 approval (Rule 26-210)',
      ],
      diagramaMermaid: `graph TD
    A["Capacitors\\n(Rules 26-200 to 26-210)"] --> B["26-200: Exemption\\nFactory-assembled\\nor surge caps"]
    A --> C["26-202: Indoors\\nper Rule 26-010"]
    A --> D["26-204: Guarding\\nlive parts"]
    A --> E["26-206: Bond to\\nground"]
    A --> F["26-208: Conductor\\n>= 135% rated current"]
    A --> G["26-210: Overcurrent\\n<= 250% rated current"]
    F --> F1["Tap to single cap:\\n<= 7.5 m\\n>= 135%\\n>= 1/3 branch"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: '135% Ampacity', note: 'Capacitor feeder/branch conductors sized >= 135% of rated current — Rule 26-208(1)', color: 'sky' },
        { icon: 'warning', title: '250% Overcurrent Max', note: 'Protection as low as practicable, max 250% of capacitor rated current — Rule 26-210', color: 'rose' },
        { icon: 'lock', title: 'Guard Live Parts', note: 'Live parts inaccessible to unauthorized persons — Rule 26-204', color: 'amber' },
        { icon: 'neutral', title: 'Bond to Ground', note: 'Non-current-carrying metal parts bonded — Rule 26-206', color: 'emerald' },
        { icon: 'ruler', title: '7.5 m Tap Rule', note: 'Tap to single capacitor max 7.5 m with 1/3 ampacity — Rule 26-208(2)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 5. CAPACITORS — Part 2: Disconnecting, Contactors, Motor Circuits, Discharge (Rules 26-212 to 26-222)
    // =========================================================================
    {
      id: '26-capacitors-disconnect-discharge',
      title: 'Capacitors — Disconnecting Means, Contactors, Motor Circuits & Discharge',
      rules: 'Rules 26-212 to 26-222',
      explanation:
        'These rules cover how capacitors are switched, controlled, integrated with motor circuits, and made safe after de-energization.\n\nRule 26-212 (Disconnecting means for capacitor feeders or branch circuits): (1) A disconnecting means shall be provided in each ungrounded conductor connected to each capacitor bank in order that the capacitors can be made dead without having to disconnect other loads. (2) The disconnecting means shall be within sight of and not more than 9 m from the capacitor unless the disconnecting means can be locked in the open position. (3) A warning notice shall be affixed to the disconnecting means used on circuits having capacitors only, stating that (a) the circuit has capacitors; and (b) a waiting period of 5 min is necessary when the circuit is opened, after which the capacitors shall be discharged before handling.\n\nRule 26-214 (Rating of the disconnecting means for capacitor feeders or branch circuits): The disconnecting means for a capacitor feeder or branch circuit shall be rated not less than 135% of the rated current of the capacitor.\n\nRule 26-216 (Rating of contactors for capacitor feeders or branch circuits): Contactors used for switching of capacitors shall have a current rating not less than the following percentage of the rated capacitor current: (a) open-type contactor: 135%; and (b) enclosed-type contactor: 150%.\n\nRule 26-218 (Special provisions for motor circuit capacitors): (1) Where a capacitor is connected on the LOAD side of a motor circuit disconnecting means, (a) individual disconnecting means need not be provided; (b) ratings of the disconnect, overcurrent device, and motor circuit conductors need not be greater than without the capacitor; and (c) the ampacity of the conductors connecting the capacitor to the motor circuit shall be in accordance with Rule 26-208 and not less than 1/3 of the motor circuit conductors. (2) Where a capacitor is connected on the LOAD side of a motor controller: (a) the capacitor rating shall not exceed the value required to raise the no-load power factor to unity; (b) the overload device rating or setting shall be reduced to correspond with the improved power factor; (c) individual overcurrent protection for the capacitor need not be provided; (d) the motor shall NOT be subject to star-delta starting, auto-transformer starting, or switching service such as plugging, rapid reversals, reclosings, jogging, or other similar operations that generate overvoltages and overtorques; and (e) time-delay devices shall be installed in the motor control circuit of motors driving high inertia loads, so that the motor cannot be restarted until the residual voltage is reduced to 10% of the nominal value.\n\nRule 26-220 (Transformers supplying capacitors): The volt-ampere rating of a transformer supplying a capacitor shall be not less than 135% of the capacitor volt-ampere rating.\n\nRule 26-222 (Drainage of stored charge of capacitors): (1) Capacitors shall be provided with a means of draining the stored charge. (2) The draining means shall be such that the residual voltage will be reduced to 50 V or less after the capacitor is disconnected from the source of supply (a) within 1 min in the case of capacitors rated at 750 V or less; and (b) within 5 min in the case of capacitors rated at more than 750 V. (3) The discharge circuit shall be (a) permanently connected to the terminals of the capacitor bank; or (b) provided with automatic means of connecting it on removal of voltage from the line. (4) The discharge circuit shall not be switched or connected by manual means. (5) Motors, transformers, or other electrical equipment capable of constituting a suitable discharge path, connected directly to capacitors without the interposition of a switch or overcurrent device, shall be considered to constitute a suitable discharge path.',
      fieldScenario:
        'You are commissioning a 480 V, 150 A capacitor bank feeding a motor control center. Rule 26-212(1) requires a disconnect in each ungrounded conductor so the capacitors can be de-energized without shutting off other loads. Rule 26-212(2) requires the disconnect to be within sight and within 9 m of the capacitor, unless it can be locked open — you install a lockable disconnect 3 m from the bank.\n\nRule 26-212(3) requires a warning notice on the disconnect stating the circuit has capacitors and that a 5-minute waiting period is required after opening before the capacitors may be handled. You affix a permanent engraved label.\n\nRule 26-214 requires the disconnect to be rated at least 135% × 150 A = 203 A — you select a 225 A switch. Rule 26-216 requires the switching contactor to be rated 135% if open-type or 150% if enclosed-type — for an enclosed contactor: 150% × 150 A = 225 A.\n\nA supply transformer feeds the capacitor bank. Rule 26-220 requires the transformer VA rating to be at least 135% of the capacitor VA rating — for a 100 kvar bank, the transformer must be rated at least 135 kVA.\n\nA 600 V capacitor is installed on the motor LOAD side of a motor controller to improve power factor. Rule 26-218(2)(a) limits its rating to no more than what is required to raise no-load power factor to unity — oversizing causes leading current problems. Rule 26-218(2)(b) requires the motor overload device setting to be reduced to match the improved-PF current. Rule 26-218(2)(d) prohibits this arrangement on a motor that plugs, jogs, or reverses rapidly. For a high-inertia load, Rule 26-218(2)(e) requires a time-delay in the restart control so the residual voltage drops to 10% of nominal before the motor can be re-energized.\n\nFor discharge: Rule 26-222(2) requires the residual voltage to drop to 50 V or less within 1 minute (caps rated 750 V or less) or 5 minutes (caps rated over 750 V). Rule 26-222(3)(a) requires the discharge resistor to be permanently connected to the capacitor terminals, or Rule 26-222(3)(b) allows an automatic connection on voltage removal. Rule 26-222(4) prohibits manual switching of the discharge circuit. Rule 26-222(5) permits a motor connected directly to the capacitor with no intervening switch/overcurrent device to count as a suitable discharge path.',
      keyPoints: [
        'Disconnect in each ungrounded conductor of capacitor bank (Rule 26-212(1))',
        'Disconnect within sight and <= 9 m of capacitor, unless lockable in open position (Rule 26-212(2))',
        'Warning notice required: "has capacitors" + "wait 5 min after opening before handling" (Rule 26-212(3))',
        'Disconnect rated >= 135% of capacitor rated current (Rule 26-214)',
        'Contactor rating: open-type >= 135%, enclosed-type >= 150% of capacitor current (Rule 26-216)',
        'Capacitor on motor-circuit LOAD side: no individual disconnect/overcurrent needed (Rule 26-218(1))',
        'Capacitor on motor-controller LOAD side: sized to unity no-load PF, overload setting reduced (Rule 26-218(2)(a)(b))',
        'No capacitor on controller load side for star-delta, auto-transformer, plugging, jogging, rapid reversals (Rule 26-218(2)(d))',
        'High-inertia loads: time-delay device requires residual voltage to drop to 10% before restart (Rule 26-218(2)(e))',
        'Transformer supplying capacitor: VA rating >= 135% of capacitor VA rating (Rule 26-220)',
        'Discharge: residual <= 50 V within 1 min (<= 750 V caps) or 5 min (> 750 V caps) (Rule 26-222(2))',
        'Discharge circuit: permanently connected OR automatic on voltage removal; NO manual switching (Rules 26-222(3)(4))',
        'Motor/transformer connected without intervening switch or OCPD = suitable discharge path (Rule 26-222(5))',
      ],
      diagramaMermaid: `graph TD
    A["Capacitor Control\\n& Discharge"] --> B["26-212\\nDisconnect"]
    A --> C["26-214/216\\nRatings"]
    A --> D["26-218\\nMotor Circuits"]
    A --> E["26-220\\nTransformer"]
    A --> F["26-222\\nDischarge"]
    B --> B1["In sight\\n<= 9 m"]
    B --> B2["5 min wait\\nwarning notice"]
    C --> C1["Disconnect: 135%"]
    C --> C2["Open contactor: 135%"]
    C --> C3["Enclosed contactor: 150%"]
    D --> D1["Load side of motor\\n= no separate OCPD"]
    D --> D2["Load side of controller\\n= unity no-load PF"]
    D --> D3["NO plugging, jogging,\\nstar-delta, reversals"]
    E --> E1["Xfmr VA >= 135%\\ncap VA"]
    F --> F1["<= 750 V: 50 V in 1 min"]
    F --> F2["> 750 V: 50 V in 5 min"]
    F --> F3["No manual switching\\nof discharge"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style D3 fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: '5 min Wait', note: 'Warning notice: wait 5 min after opening before handling — Rule 26-212(3)', color: 'rose' },
        { icon: 'bolt', title: 'Contactor Ratings', note: 'Open 135%, enclosed 150% of capacitor current — Rule 26-216', color: 'amber' },
        { icon: 'ruler', title: '9 m From Capacitor', note: 'Disconnect within sight and 9 m unless lockable open — Rule 26-212(2)', color: 'sky' },
        { icon: 'power', title: 'Unity PF Limit', note: 'Cap on controller load side: no more than unity no-load PF — Rule 26-218(2)(a)', color: 'violet' },
        { icon: 'lock', title: 'Discharge: 50 V', note: 'Residual 50 V in 1 min (<=750 V) or 5 min (>750 V) — Rule 26-222(2)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 6. TRANSFORMERS — Part 1: General, Outdoor, Roof, Dry-Core, Disconnect (Rules 26-240 to 26-248)
    // =========================================================================
    {
      id: '26-transformers-general',
      title: 'Transformers — General, Outdoor, Roof, Dry-Core & Disconnect',
      rules: 'Rules 26-240 to 26-248',
      explanation:
        'Section 26 transformer rules cover single-phase, polyphase, and banked transformers plus unit substations. These first rules address physical installation — enclosures, clearances, outdoor siting, and disconnection.\n\nRule 26-240 (Transformers — General): (1) In this Subsection, (a) "transformer" shall mean a single-phase transformer, a polyphase transformer, or a bank of two or three single-phase transformers connected to operate as a polyphase transformer; and (b) "unit substation" shall mean an integrated unit consisting of one or more transformers, disconnecting means, overcurrent devices, and other associated equipment, each contained in a suitable enclosure designed and constructed to restrict access to live parts. (2) Transformers shall be constructed so that all live parts are enclosed unless they are installed to be inaccessible to unauthorized persons. (3) Conductors and cables used for connection to air-cooled (dry-type) transformers shall be permitted to enter a transformer enclosure through the top only where the transformer is marked to permit such entry. (4) Transformers shall be protected from mechanical damage. (5) Dielectric liquid-filled transformers shall be mounted so that there is an air space of 150 mm between transformers, and between transformers and adjacent surfaces of combustible material except the plane on which the transformer is mounted.\n\nRule 26-242 (Outdoor transformer and unit substation installations): (1) Except as permitted by Subrule 2), where transformers or unit substations, including their conductors, cables, and control and protective equipment, are installed outdoors, they shall (a) be installed in accordance with Rule 26-012 if they are dielectric liquid-filled; (b) have the bottom of their platform not less than 3.6 m above ground if they are isolated by elevation; (c) have the entire installation surrounded by a suitable fence in accordance with Rules 26-300 to 26-324 if they are not isolated by elevation or not housed in suitable enclosures; and (d) have conspicuously posted, suitable warning signs indicating the highest voltage employed except where there is no exposed live part. (2) Dielectric liquid-filled, pad-mounted distribution transformers, either independently installed or forming part of a unit substation, shall be installed at least 3 m from any combustible surface or material on a building and at least 6 m from any window, door, or ventilation inlet or outlet on a building, except where (a) a wall or barrier with non-combustible surfaces is constructed between the transformer and any door, window, ventilation opening, or combustible surface; or (b) the transformer is protected by an internal current-limiting fuse equipped with a pressure relief device, with working spaces around the transformer of at least 3 m on the access side and on all other sides, as follows: (i) 1 m for three-phase transformers; and (ii) 0.6 m for single-phase transformers.\n\nRule 26-244 (Transformers mounted on roofs): (1) Except as permitted by Subrule 2), dielectric liquid-filled transformers installed on the roof of a building shall be located in an electrical equipment vault in accordance with Rules 26-350 to 26-356 and adequately supported by means of non-combustible construction. (2) Transformers containing a non-propagating liquid, suitable for the purpose and having a flash point not less than 275 °C, that are installed on the roof of a building need not be located in an electrical equipment vault but shall not be placed adjacent to doors or windows, nor within 4.5 m of discharge vents for flammable fumes or combustible or electrically conductive dusts.\n\nRule 26-246 (Dry-core, open-ventilated-type transformers): (1) Transformers of the dry-core, open-ventilated type shall be mounted so that there is an air space of not less than 150 mm between transformer enclosures and between a transformer enclosure and any adjacent surface except floors. (2) Notwithstanding Subrule 1), where the adjacent surface is a combustible material, the minimum permissible separation between the transformer enclosure and the adjacent surface shall be 300 mm. (3) Notwithstanding Subrule 1), where the adjacent surface is the wall on which the transformer is mounted, the minimum permissible separation between the enclosure and the mounting wall shall be 6 mm if the adjacent surface is made of (a) non-combustible material; (b) combustible material adequately protected by non-combustible heat insulating material other than sheet metal; or (c) combustible material shielded by grounded sheet metal with an air space of not less than 50 mm between the sheet metal and the combustible material. (4) Dry-type transformers not of the sealed type shall not be installed below grade level unless adequate provision is made to prevent flooding. (5) Dry-type transformers not of the sealed type shall be installed in such a manner that water or other liquids cannot fall onto the windings.\n\nRule 26-248 (Disconnecting means for transformers): A disconnecting means shall be installed in the primary circuit of each power and distribution transformer.',
      fieldScenario:
        'You are installing an outdoor 3-phase unit substation with a 1500 kVA dielectric liquid-filled transformer. Rule 26-242(1)(a) routes you to Rule 26-012 for outdoor liquid-filled rules. The platform is not elevated 3.6 m, so Rule 26-242(1)(c) requires the entire installation to be enclosed by fencing per Rules 26-300 to 26-324. You post warning signs showing "DANGER HIGH VOLTAGE 25 000 V" per Rule 26-242(1)(d).\n\nFor a separate pad-mounted 3-phase distribution transformer, Rule 26-242(2) demands at least 3 m from combustible surfaces and 6 m from any window, door, or ventilation inlet — unless a non-combustible barrier is built, OR the transformer has an internal current-limiting fuse with pressure relief and working spaces of 3 m on the access side and 1 m on all other sides.\n\nYou set two dry-core open-ventilated transformers inside a mechanical room. Rule 26-246(1) requires 150 mm air space between enclosures and between enclosure and adjacent non-floor surfaces. The wall behind is combustible drywall — Rule 26-246(2) would demand 300 mm clearance — but you apply Rule 26-246(3)(c) and back the transformer with grounded sheet metal with a 50 mm air space to the drywall, then mount the transformer enclosure 6 mm from the sheet metal.\n\nRule 26-246(4) forbids installing dry-type transformers below grade unless flooding protection is provided. The transformers must also be installed so no liquid can fall on windings (Rule 26-246(5)) — you verify no sprinkler heads are directly above them, or install drip shields.\n\nFor a rooftop transformer project, the liquid is standard mineral oil. Rule 26-244(1) requires an electrical equipment vault per Rules 26-350 to 26-356 and non-combustible structural support. Switching to a non-propagating dielectric with flash point >= 275 °C would qualify for Rule 26-244(2) — no vault required, but the unit must be 4.5 m from any flammable/combustible/dust discharge vents and not next to doors or windows.\n\nOn the primary of every power transformer, Rule 26-248 requires a disconnecting means — typically an MV fused switch or air-break disconnect.',
      keyPoints: [
        '"Transformer" = single-phase, polyphase, or bank of 2/3 single-phase operating as polyphase (Rule 26-240(1)(a))',
        '"Unit substation" = integrated transformer + disconnect + OCPD + associated equipment in one enclosure (Rule 26-240(1)(b))',
        'Live parts must be enclosed unless inaccessible to unauthorized persons (Rule 26-240(2))',
        'Top-entry into dry-type transformers only permitted if transformer is marked for top entry (Rule 26-240(3))',
        'Dielectric liquid-filled: 150 mm air space between transformers and between transformer and combustible surface (except mounting plane) (Rule 26-240(5))',
        'Outdoor platform isolated by elevation: bottom >= 3.6 m above ground (Rule 26-242(1)(b))',
        'Outdoor warning signs required showing highest voltage (unless no exposed live parts) (Rule 26-242(1)(d))',
        'Pad-mounted transformers: 3 m from combustibles, 6 m from doors/windows/vents — unless barrier OR internal CLF with pressure relief (Rule 26-242(2))',
        'Rooftop liquid-filled transformer: vault required unless non-propagating liquid with flash point >= 275 °C (Rule 26-244)',
        'Non-propagating rooftop transformer: not adjacent to doors/windows, not within 4.5 m of flammable vents (Rule 26-244(2))',
        'Dry-core open-ventilated: 150 mm air space (300 mm if combustible surface) (Rule 26-246(1)(2))',
        'Dry-core mounting wall: 6 mm with grounded sheet metal + 50 mm air space shield for combustibles (Rule 26-246(3))',
        'Dry-type non-sealed: not below grade unless flood-protected; water cannot fall on windings (Rules 26-246(4)(5))',
        'Disconnecting means required in primary circuit of every power/distribution transformer (Rule 26-248)',
      ],
      diagramaMermaid: `graph TD
    A["Transformers\\nGeneral\\n(Rules 26-240 to 248)"] --> B["26-240\\nDefinitions &\\n150 mm air space"]
    A --> C["26-242\\nOutdoor"]
    A --> D["26-244\\nRoof-mounted"]
    A --> E["26-246\\nDry-core\\nopen-ventilated"]
    A --> F["26-248\\nPrimary\\ndisconnect"]
    C --> C1["3.6 m platform\\nor fenced"]
    C --> C2["Pad-mount:\\n3 m combustible\\n6 m openings"]
    D --> D1["Vault required\\nfor oil-filled"]
    D --> D2["Non-propagating\\nflash >= 275 C\\n= no vault"]
    E --> E1["150 mm clearance"]
    E --> E2["300 mm to\\ncombustibles"]
    E --> E3["6 mm mounting wall\\nwith shield"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C2 fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '150 mm Air Space', note: 'Between liquid-filled or dry-core transformers and combustibles — Rules 26-240(5), 26-246(1)', color: 'sky' },
        { icon: 'fire', title: 'Rooftop Vault', note: 'Oil-filled transformers on roof must be in a vault unless flash >= 275 C — Rule 26-244', color: 'rose' },
        { icon: 'warning', title: '3.6 m Elevation', note: 'Outdoor platforms isolated by elevation: bottom >= 3.6 m above ground — Rule 26-242(1)(b)', color: 'amber' },
        { icon: 'shield', title: 'Pad-Mount Setback', note: '3 m from combustibles, 6 m from doors/windows/vents — Rule 26-242(2)', color: 'violet' },
        { icon: 'power', title: 'Primary Disconnect', note: 'Required for every power/distribution transformer — Rule 26-248', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 7. TRANSFORMERS — Part 2: Overcurrent Protection (Rules 26-250 to 26-256)
    // =========================================================================
    {
      id: '26-transformer-ocp',
      title: 'Transformers — Overcurrent Protection & Conductor Sizing',
      rules: 'Rules 26-250 to 26-256',
      explanation:
        'These are some of the most frequently cited transformer rules on CEC exams. They establish overcurrent protection limits based on transformer type and voltage class, and they set minimum conductor ampacity.\n\nRule 26-250 (Overcurrent protection for power and distribution transformer circuits rated over 750 V): (1) Each ungrounded conductor of the transformer feeder or branch circuit supplying the transformer shall have overcurrent protection (a) rated not more than 150% of the rated primary current in the case of fuses; and (b) rated or set at not more than 300% of the rated primary current in the case of breakers. (2) Where 150% does not correspond to a standard fuse rating, the next higher standard rating is permitted. (3) Individual OCPD not required where the feeder/branch circuit OCPD provides the protection specified in this Rule. (4) A transformer having secondary-side OCPD rated/set at not more than the values in Table 50, OR equipped with manufacturer-coordinated thermal overload protection, need not have primary-side individual OCPD, provided the primary feeder OCPD is rated/set at not more than the values in Table 50.\n\nRule 26-252 (Overcurrent protection for power and distribution transformer circuits rated 750 V or less, other than dry-type transformers): (1) Each ungrounded conductor of the transformer feeder/branch circuit shall have overcurrent protection rated/set at not more than 125% of the rated primary current. (2) Where the rated primary current is (a) 9 A or more and 125% does not correspond to a standard rating, the next higher standard rating is permitted; or (b) less than 9 A, an OCPD rated/set at not more than 167% is permitted, EXCEPT where the rated primary current is less than 2 A, an OCPD rated/set at not more than 300% is permitted. (3) Individual primary OCPD not required where feeder/branch circuit OCPD provides specified protection. (4) A transformer with secondary OCPD rated/set at not more than 125% of rated secondary current need not have individual primary OCPD, provided the primary feeder OCPD is rated/set at not more than 300% of rated primary current. (5) Where the rated secondary current is (a) 9 A or more and 125% does not match a standard rating, the next higher is permitted; or (b) less than 9 A, the OCPD may be rated/set at not more than 167%. (6) A transformer with manufacturer-coordinated thermal overload protection arranged to interrupt the primary current need not have individual primary OCPD if the primary feeder OCPD is rated at not more than (a) 6 × rated current for transformers <= 7.5% impedance; or (b) 4 × rated current for transformers between 7.5% and 10% impedance.\n\nRule 26-254 (Overcurrent protection for dry-type transformer circuits rated 750 V or less): (1) Each ungrounded conductor of the feeder/branch shall have OCPD rated/set at not more than 125% of rated primary current; this primary OCPD is considered to protect secondary conductors rated at 125% or more of rated secondary current. (2) A dry-type transformer with secondary OCPD set at not more than 125% of rated secondary current need not have individual primary OCPD if the primary feeder OCPD is set at not more than 300% of rated primary current. (3) Where 125% of rated primary current does not correspond to a standard rating, the next higher standard rating is permitted.\n\nRule 26-256 (Conductor size for transformers): (1) Primary conductors supplying transformers shall have ampacity (a) not less than 125% of rated primary current for a single transformer; or (b) not less than the sum of rated primary currents of all transformers + 25% of rated primary current of the largest transformer for a group operated in parallel or on a common feeder. (2) Secondary conductors shall have ampacity (a) not less than 125% of rated secondary current for a single transformer; or (b) not less than 125% of the sum of rated secondary currents for paralleled transformers. (3) Notwithstanding 1) and 2), primary/secondary conductors may have ampacity no less than that required by the demand load, provided they are protected per Rules 14-100 and 14-104. (4) Where the transformer overcurrent protection exceeds 125% of rated primary/secondary current per Rules 26-250(1)(2) or 26-254(3), the primary/secondary conductors shall be protected per Rules 14-100 and 14-104. (5) Multi-rating transformers: conductors sized for at least 125% of rated primary/secondary current at the utilization voltage.',
      fieldScenario:
        'You are protecting a 75 kVA, 600 V dry-type transformer (rated primary current 72.2 A). Rule 26-254(1) requires the primary OCPD set at no more than 125% × 72.2 = 90.25 A. The next higher standard fuse is 100 A (Rule 26-254(3)). The primary conductors must be sized for at least 125% × 72.2 = 90.25 A (Rule 26-256(1)(a)) — you select conductors with ampacity >= 90 A.\n\nFor a 2 kVA control transformer with rated primary current of 1.8 A (less than 2 A), Rule 26-252(2)(b) allows the OCPD to be rated at up to 300% × 1.8 = 5.4 A — a 5 A fuse satisfies the rule.\n\nAn oil-filled 2500 kVA, 13.8 kV / 600 V distribution transformer (over 750 V primary) has primary rated current ~105 A. Rule 26-250(1)(a) limits primary fuses to 150% × 105 = 157.5 A (next higher standard 175 A per Subrule 2) or breakers to 300% × 105 = 315 A (Rule 26-250(1)(b)). Rule 26-250(4) allows the primary individual OCPD to be omitted if the secondary breaker is at or below Table 50 values AND the primary feeder OCPD is also at or below Table 50 values.\n\nFor a transformer with manufacturer thermal overload protection (Rule 26-252(6)) having 6% impedance, the primary feeder OCPD may be up to 6 × rated current. Between 7.5% and 10% impedance, the multiplier drops to 4 × rated current.\n\nTwo transformers operate in parallel on a common feeder: the feeder conductor ampacity must equal the sum of both rated primary currents + 25% of the largest (Rule 26-256(1)(b)).',
      keyPoints: [
        'Over 750 V primary: fuse <= 150%, breaker <= 300% of rated primary current (Rule 26-250(1))',
        'Next higher standard fuse rating permitted where 150% does not match (Rule 26-250(2))',
        '>750 V: individual primary OCPD not needed if feeder OCPD + secondary OCPD satisfy Table 50 (Rules 26-250(3)(4))',
        '<= 750 V non-dry-type: primary OCPD <= 125% of rated primary current (Rule 26-252(1))',
        '<= 750 V: primary 9 A or more and no standard rating = next higher; < 9 A = 167%; < 2 A = up to 300% (Rule 26-252(2))',
        '<= 750 V: no individual primary OCPD if secondary <= 125% rated sec current AND primary feeder <= 300% rated prim current (Rule 26-252(4))',
        'Manufacturer thermal overload protection: feeder OCPD <= 6× rated current (<=7.5% impedance) or 4× (7.5–10%) (Rule 26-252(6))',
        'Dry-type <= 750 V: primary OCPD <= 125% of rated primary current (Rule 26-254(1))',
        'Dry-type: no individual primary OCPD if secondary OCPD <= 125% AND primary feeder <= 300% (Rule 26-254(2))',
        'Primary conductors: >= 125% of rated primary current for single transformer (Rule 26-256(1)(a))',
        'Paralleled transformers: sum of rated primary currents + 25% of largest (Rule 26-256(1)(b))',
        'Secondary conductors: >= 125% of rated secondary current (single), or 125% of sum (parallel) (Rule 26-256(2))',
        'Conductors may be sized for demand load if protected per Rules 14-100 and 14-104 (Rule 26-256(3))',
      ],
      diagramaMermaid: `graph TD
    A["Transformer OCPD\\n& Conductor Sizing"] --> B["> 750 V\\n(Rule 26-250)"]
    A --> C["<= 750 V\\nnon-dry-type\\n(Rule 26-252)"]
    A --> D["<= 750 V\\nDry-type\\n(Rule 26-254)"]
    A --> E["Conductors\\n(Rule 26-256)"]
    B --> B1["Fuse <= 150%\\nBreaker <= 300%"]
    C --> C1["125% primary"]
    C --> C2["< 9 A: 167%\\n< 2 A: 300%"]
    C --> C3["Thermal OL:\\n6x or 4x rated"]
    D --> D1["125% primary"]
    D --> D2["Next higher std OK"]
    E --> E1["125% of rated\\nprimary/secondary"]
    E --> E2["Parallel: sum +\\n25% of largest"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: '125% Dry-Type', note: 'Dry-type primary OCPD <= 125% of rated primary current — Rule 26-254(1)', color: 'sky' },
        { icon: 'warning', title: '150/300% Over 750 V', note: 'Fuses <= 150%, breakers <= 300% of rated primary — Rule 26-250(1)', color: 'rose' },
        { icon: 'bolt', title: 'Small Transformers', note: '< 9 A = 167%; < 2 A = 300% — Rule 26-252(2)(b)', color: 'amber' },
        { icon: 'ruler', title: 'Conductor 125%', note: 'Primary/secondary conductors sized to 125% rated current — Rule 26-256(1)(2)', color: 'violet' },
        { icon: 'thermometer', title: 'Manufacturer Thermal', note: 'Feeder OCPD 6x or 4x rated with coordinated thermal protection — Rule 26-252(6)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 8. TRANSFORMERS — Part 3: Continuous Load, Instrument VTs, Marking, Auto-Xfmrs, Zero Sequence (Rules 26-258 to 26-266)
    // =========================================================================
    {
      id: '26-transformers-instrument-auto-zero',
      title: 'Transformers — Continuous Load, Instrument VTs, Marking, Auto-Transformers & Zero Sequence Filters',
      rules: 'Rules 26-258 to 26-266',
      explanation:
        'The remaining transformer rules address continuous load, instrument voltage transformer protection, nameplate marking, auto-transformers, and specialized zero-sequence filter transformers.\n\nRule 26-258 (Transformer continuous load): For the purpose of transformer overcurrent protection and conductor sizes selected in accordance with Rules 26-250 to 26-256, the continuous load as determined from the calculated load connected to the transformer secondary shall not exceed the values specified in Rule 8-104 5) or 6).\n\nRule 26-260 (Overcurrent protection of instrument voltage transformers): (1) Except under the conditions of Subrules 2) and 3), instrument voltage transformers shall have primary fuses rated not more than (a) 10 A for low-voltage circuits; and (b) 3 A for high-voltage circuits. (2) Primary fuses shall NOT be installed where they would be connected in the grounded primary neutral connection of "Y" or "Open Y" connected voltage transformers. (3) Primary fuses shall be permitted to be omitted: (a) where the transformers are protected by adequate power fuses or other protective devices, with convenient disconnecting means on the primary side; (b) where voltage transformers and meters, operating at low voltage and installed in suitable enclosures, are used in place of self-contained meters; or (c) where both voltage and current transformers are supplied by the manufacturer in a single enclosure filled with an insulating medium (which may be air for low-voltage circuits if the enclosure is non-combustible), where (i) the primary terminals outside the enclosure are common to both voltage and current transformers; and (ii) the enclosures are installed outdoors if filled with an insulating medium that will burn in air.\n\nRule 26-262 (Marking of transformers): Each transformer shall be provided with a nameplate bearing the following marking: (a) manufacturer\'s name; (b) rating in kilovolt amperes; (c) rated full load temperature rise; (d) primary and secondary voltage ratings; (e) frequency in hertz; (f) liquid capacity, if of the liquid-filled type; (g) type of liquid to be used; (h) rated impedance, if of the power or distribution type; and (i) basic impulse insulation level (BIL) for transformers rated 2.5 kV voltage class and higher.\n\nRule 26-264 (Auto-transformers): (1) For the purposes of this Rule, "auto-transformers" shall mean transformers in which part of the turns are common to both primary and secondary ac circuits. (2) Auto-transformers shall NOT be connected to interior wiring systems, other than a wiring system or circuit used wholly for motor purposes, unless (a) the system supplied contains an identified grounded conductor solidly connected to a similar identified grounded conductor of the system supplying the auto-transformer; (b) the auto-transformer is used for starting or controlling an induction motor; or (c) the auto-transformer supplies a circuit wholly within the apparatus that contains the auto-transformer. (3) Where an auto-transformer is used for starting or controlling an induction motor, it shall be permitted to be included in a starter case or installed as a separate unit. (4) Notwithstanding Subrule 2), auto-transformers shall be permitted for fixed voltage transformation in circuits not incorporating a grounded circuit conductor.\n\nRule 26-266 (Zero sequence filters): (1) For the purposes of this Rule, a "zero sequence filter" shall mean a zig-zag or otherwise wound transformer installed to reduce unbalanced current in a three-phase, 4-wire circuit. (2) Ampacities of conductors supplying zero sequence filters in conformance with Rule 4-004 shall be based on the neutral conductor being a current-carrying conductor. (3) Phase conductors shall have an ampacity of at least 125% of the rated primary current. (4) The neutral conductor shall have an ampacity equal to at least 125% of the neutral current rating. (5) Overcurrent protection for the filter shall not exceed 125% of the rated primary current. (6) The overcurrent protection required by Subrule 5) shall be equipped with an integral device arranged to activate a warning signal or alarm when operation of the overcurrent protection occurs.',
      fieldScenario:
        'You are protecting a 4160/120 V high-voltage instrument voltage transformer (VT) on a utility metering installation. Rule 26-260(1)(b) limits primary fuses to 3 A for high-voltage circuits. You install 3 A primary fuses — except on the grounded wye primary neutral, where Rule 26-260(2) forbids a fuse.\n\nFor a revenue metering installation where the voltage and current transformers are supplied together in a single oil-filled enclosure with common outdoor primary terminals, Rule 26-260(3)(c) permits omission of the primary fuses.\n\nA 75 kVA auto-transformer is proposed to step 600 V to 480 V for a general lighting circuit in a commercial building. Rule 26-264(2) forbids this unless the supplied system has a solidly connected identified grounded conductor to the supply system, OR the auto-transformer is for motor starting/control, OR it supplies a circuit wholly within the apparatus containing the auto-transformer. A grounded-wye-to-grounded-wye system satisfies 26-264(2)(a).\n\nFor a harmonic mitigation project, you install a zig-zag zero-sequence filter. Rule 26-266(2) says Rule 4-004 applies with the neutral treated as a current-carrying conductor (derating). Rule 26-266(3)(4) requires phase conductors at 125% of rated primary current and the neutral at 125% of the rated neutral current. Rule 26-266(5) limits the overcurrent device to 125% of rated primary current, and Rule 26-266(6) requires an integral alarm on OCPD operation.\n\nWhen you energize the new 500 kVA transformer, Rule 26-258 reminds you that the calculated continuous secondary load must not exceed the values in Rule 8-104(5) or (6).\n\nFinally, you verify the transformer nameplate shows manufacturer, kVA, temperature rise, primary/secondary voltages, frequency, liquid capacity and type, impedance, and BIL (because it is > 2.5 kV class) per Rule 26-262.',
      keyPoints: [
        'Continuous load from calculated secondary load must not exceed Rule 8-104(5) or (6) values (Rule 26-258)',
        'Instrument VT primary fuses: <= 10 A low-voltage circuits, <= 3 A high-voltage circuits (Rule 26-260(1))',
        'NO primary fuse in grounded primary neutral of "Y" or "Open Y" VTs (Rule 26-260(2))',
        'VT primary fuses may be omitted with adequate upstream protection + disconnect, low-voltage meter applications, or combined CT/VT in insulated enclosure (Rule 26-260(3))',
        'Nameplate required: manufacturer, kVA, temp rise, voltages, Hz, liquid capacity/type, impedance, BIL (>= 2.5 kV) (Rule 26-262)',
        'Auto-transformer = transformer with turns common to both primary and secondary (Rule 26-264(1))',
        'Auto-transformers NOT permitted on interior wiring unless: common grounded conductor OR motor starting OR wholly internal circuit (Rule 26-264(2))',
        'Auto-transformers permitted for fixed voltage transformation in circuits without a grounded conductor (Rule 26-264(4))',
        'Zero sequence filter = zig-zag transformer to reduce unbalance in 3-phase 4-wire circuit (Rule 26-266(1))',
        'Zero sequence: conductors per Rule 4-004 with neutral as current-carrying; phase >= 125% primary, neutral >= 125% neutral current (Rule 26-266(2)(3)(4))',
        'Zero sequence OCPD <= 125% of rated primary current, with integral alarm on operation (Rule 26-266(5)(6))',
      ],
      diagramaMermaid: `graph TD
    A["Transformer Rules\\n(26-258 to 26-266)"] --> B["26-258\\nContinuous load\\nper Rule 8-104"]
    A --> C["26-260\\nInstrument VT\\nfuses"]
    A --> D["26-262\\nNameplate\\nmarking"]
    A --> E["26-264\\nAuto-transformers"]
    A --> F["26-266\\nZero sequence\\nfilters"]
    C --> C1["10 A LV / 3 A HV"]
    C --> C2["No fuse in\\ngrounded neutral"]
    E --> E1["Motor OR grounded\\ncommon conductor"]
    E --> E2["OR internal circuit"]
    F --> F1["125% phase\\n125% neutral"]
    F --> F2["OCPD <= 125%\\n+ alarm"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: '10 A / 3 A VT Fuses', note: 'Instrument VT primary: 10 A low-voltage, 3 A high-voltage — Rule 26-260(1)', color: 'sky' },
        { icon: 'warning', title: 'No Fuse in Neutral', note: 'Never fuse the grounded neutral of Y or Open Y VT primary — Rule 26-260(2)', color: 'rose' },
        { icon: 'label', title: 'Nameplate Must Show', note: 'Name, kVA, temp rise, voltages, Hz, liquid, impedance, BIL — Rule 26-262', color: 'amber' },
        { icon: 'power', title: 'Auto-Transformer Limits', note: 'Not on general interior wiring unless common grounded conductor or motor — Rule 26-264(2)', color: 'violet' },
        { icon: 'magnet', title: 'Zero Sequence 125%', note: 'Phase and neutral conductors + OCPD all at 125% with alarm — Rule 26-266', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 9. FENCES — Clearance, Construction, Materials (Rules 26-300 to 26-324)
    // =========================================================================
    {
      id: '26-fences',
      title: 'Fences — Guarding Outdoor Electrical Equipment',
      rules: 'Rules 26-300 to 26-324',
      explanation:
        'Rules 26-300 to 26-324 apply to fences for guarding outdoor electrical equipment, especially transformers. They establish minimum clearances, dimensions, and material specifications.\n\nRule 26-300 (General): Rules 26-302 to 26-324 apply to fences for guarding electrical equipment, especially transformers, located outdoors.\n\nRule 26-302 (Clearance of equipment): (1) The minimum clearance between the fence and unguarded live parts shall be in accordance with Table 33. (2) The minimum clearance between the fence and enclosures containing live parts shall be 1.1 m. (3) The clearance shall provide adequate working space around the equipment, taking into consideration the space required for draw-out types of equipment and the opening of enclosure doors.\n\nRule 26-304 (Height of fence): The fence, excluding barbed wire, shall be not less than 1.8 m high.\n\nRule 26-306 (Barbed wire): The fence shall be topped with not less than three strands of barbed wire.\n\nRule 26-308 (Setting of posts): (1) Posts shall be set at a depth of 1.1 m for end, gate, and corner posts and 1 m for intermediate posts wherever ground conditions permit. (2) Where ground conditions do not permit the depth specified in Subrule 1), extra bracing or concrete footings shall be provided. (3) Concrete footings may be required for metal posts in any case. (4) The spacing between posts shall be 3 m maximum. (5) End, gate, and corner posts shall be adequately braced against strain.\n\nRule 26-310 (Gates): (1) Gates shall open outwardly wherever possible but, if it is necessary that they open inwardly, they shall not, when open, come into contact with the frame or enclosure of any electrical equipment. (2) Gates shall be adequately braced as necessary, and double gates shall be used where the width of the opening exceeds 1.5 m. (3) Centre stops shall be provided for double gates. (4) Gates shall have provision for securing with padlocks.\n\nRule 26-312 (Chain link fabric): (1) Chain link fabric shall be securely attached to all posts and gate frames. (2) Chain link fabric shall be reinforced as necessary at top and bottom to prevent distortion. (3) Chain link fabric shall extend to within 50 mm of the ground. (4) Chain link fabric shall (a) be made of galvanized steel not less than 3.6 mm in diameter; (b) have a mesh not greater than 50 mm; and (c) be not less than 1.8 m in width.\n\nRule 26-314 (Use of wood): Where wood slats are acceptable, they shall (a) extend to within 50 mm of the ground; (b) be placed on the outside of the stringers; and (c) be spaced not more than 40 mm apart, except that where the frame or enclosure of any electrical equipment is less than 2 m from the fence, there shall be no spacing permitted.\n\nRule 26-316 (Posts): (1) Metal posts shall be (a) made of galvanized steel; (b) 88.9 mm specified outside diameter nominal pipe size (11.31 kg/m) for corner, end, and gate posts; and (c) 60.3 mm specified outside diameter nominal pipe size (5.44 kg/m) for intermediate posts. (2) Wood posts shall be not less than 140 × 140 mm and shall be suitably protected against decay.\n\nRule 26-318 (Top rails): Top rails shall (a) be made of galvanized steel; (b) have a 42.2 mm specified outside diameter nominal pipe size (3.35 kg/m); and (c) be provided with suitable expansion joints where necessary.\n\nRule 26-320 (Wood stringers): Wood stringers shall be not less than 38 × 140 mm nominal size if two are used and not less than 38 × 89 mm nominal size if three are used.\n\nRule 26-322 (Wood slats): Wood slats shall be not less than 19 × 89 mm nominal size.\n\nRule 26-324 (Preservative treatment): (1) Steel or iron parts shall be either hot dip galvanized or electroplated with non-ferrous metal. (2) Wood shall be impregnated, treated, or well painted before assembly and, where in contact with the earth or concrete, shall be impregnated or otherwise suitably treated against decay.',
      fieldScenario:
        'You are designing a fence around an outdoor unit substation. Rule 26-302(1) sends you to Table 33 for the minimum clearance between the fence and unguarded live parts — dependent on voltage. For enclosures containing live parts, Rule 26-302(2) requires at least 1.1 m of clearance. You also verify there is enough space to open the switchgear doors and draw out a breaker (Rule 26-302(3)).\n\nThe fence must be at least 1.8 m high excluding barbed wire (Rule 26-304), with at least three strands of barbed wire on top (Rule 26-306). You set corner/end/gate posts 1.1 m deep and intermediate posts 1 m deep (Rule 26-308(1)), with 3 m maximum post spacing (Rule 26-308(4)) and end/gate/corner posts adequately braced (Rule 26-308(5)).\n\nThe gate opens outward (Rule 26-310(1)) to prevent contact with equipment. Because the opening is 2 m wide (> 1.5 m), you install double gates with a center stop (Rules 26-310(2)(3)) and provide padlock hardware (Rule 26-310(4)).\n\nYou specify the chain link fabric: galvanized steel wire >= 3.6 mm diameter, mesh <= 50 mm, fabric >= 1.8 m wide, securely attached to posts, reinforced at top and bottom, extending to within 50 mm of the ground (Rule 26-312).\n\nFor metal posts: 88.9 mm OD pipe (11.31 kg/m) for corner/end/gate posts, 60.3 mm OD pipe (5.44 kg/m) for intermediates (Rule 26-316). Top rail is 42.2 mm OD pipe with expansion joints (Rule 26-318). All steel is hot-dip galvanized (Rule 26-324(1)).',
      keyPoints: [
        'Rules 26-302 to 26-324 apply to fences for guarding outdoor electrical equipment, especially transformers (Rule 26-300)',
        'Clearance from fence to unguarded live parts per Table 33; to enclosures containing live parts: 1.1 m (Rule 26-302)',
        'Fence height >= 1.8 m excluding barbed wire (Rule 26-304)',
        'At least three strands of barbed wire on top (Rule 26-306)',
        'Post depth: 1.1 m for end/gate/corner; 1 m for intermediate (Rule 26-308(1))',
        'Maximum post spacing 3 m; end/gate/corner posts adequately braced (Rules 26-308(4)(5))',
        'Gates open outward where possible; double gates required if opening > 1.5 m; padlockable (Rule 26-310)',
        'Chain link fabric: galvanized steel wire >= 3.6 mm diameter, mesh <= 50 mm, width >= 1.8 m, within 50 mm of ground (Rule 26-312)',
        'Wood slats: within 50 mm of ground, outside stringers, <= 40 mm spacing (0 mm if equipment within 2 m) (Rule 26-314)',
        'Metal posts: 88.9 mm OD for corner/end/gate, 60.3 mm OD for intermediates, galvanized steel (Rule 26-316(1))',
        'Wood posts: >= 140 × 140 mm, protected against decay (Rule 26-316(2))',
        'Top rail: 42.2 mm OD galvanized steel with expansion joints (Rule 26-318)',
        'Wood stringers: >= 38 × 140 mm if two used, >= 38 × 89 mm if three used (Rule 26-320)',
        'Wood slats: >= 19 × 89 mm nominal (Rule 26-322)',
        'Steel/iron parts: hot-dip galvanized or electroplated with non-ferrous metal (Rule 26-324(1))',
        'Wood: impregnated/treated/painted; earth-contact wood suitably treated against decay (Rule 26-324(2))',
      ],
      diagramaMermaid: `graph TD
    A["Fences\\n(Rules 26-300 to 324)"] --> B["Clearance\\n(Rule 26-302)"]
    A --> C["Height & Top\\n(26-304/306)"]
    A --> D["Posts\\n(26-308/316)"]
    A --> E["Gates\\n(26-310)"]
    A --> F["Fabric\\n(26-312)"]
    B --> B1["Live parts:\\nTable 33"]
    B --> B2["Enclosures:\\n1.1 m minimum"]
    C --> C1["1.8 m high\\n+ 3 strands barbed wire"]
    D --> D1["End/gate/corner:\\n1.1 m deep\\n88.9 mm pipe"]
    D --> D2["Intermediate:\\n1 m deep\\n60.3 mm pipe"]
    D --> D3["Max 3 m spacing"]
    E --> E1["Open outward"]
    E --> E2["Double gates\\nif > 1.5 m"]
    E --> E3["Padlockable"]
    F --> F1["Wire >= 3.6 mm"]
    F --> F2["Mesh <= 50 mm"]
    F --> F3["Within 50 mm\\nof ground"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C1 fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '1.8 m Height', note: 'Fence excluding barbed wire must be >= 1.8 m high — Rule 26-304', color: 'sky' },
        { icon: 'shield', title: '3 Strands Barbed Wire', note: 'Top the fence with at least three strands — Rule 26-306', color: 'amber' },
        { icon: 'ruler', title: '1.1 m From Enclosures', note: 'Minimum clearance from fence to enclosed live parts — Rule 26-302(2)', color: 'violet' },
        { icon: 'lock', title: 'Padlockable Gates', note: 'Double gates if opening > 1.5 m, outward swing — Rule 26-310', color: 'rose' },
        { icon: 'box', title: 'Posts 88.9 / 60.3 mm', note: 'Corner/end/gate 88.9 mm pipe; intermediate 60.3 mm pipe — Rule 26-316', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 10. ELECTRICAL EQUIPMENT VAULTS & CELLULOSE NITRATE FILM STORAGE (Rules 26-350 to 26-368)
    // =========================================================================
    {
      id: '26-vaults-film',
      title: 'Electrical Equipment Vaults & Cellulose Nitrate Film Storage',
      rules: 'Rules 26-350 to 26-368',
      explanation:
        'These rules cover two specialized occupancies — electrical equipment vaults that house dielectric-liquid-filled equipment and cellulose nitrate film-vaults where extreme fire hazard dictates unique wiring requirements.\n\nRule 26-350 (General): (1) For the purposes of Rules pertaining to the construction of electrical equipment vaults, the single word "vault(s)" shall be understood to have the same meaning as "electrical equipment vault(s)". (2) Vaults shall not be used for storage purposes.\n\nRule 26-352 (Vault size): Vaults shall be of such dimensions as to accommodate the installed equipment with at least the minimum clearances specified in the pertinent Sections of this Code.\n\nRule 26-354 (Electrical equipment vault construction): Every electrical equipment vault, including the doors, ventilation, and drainage, shall be constructed in accordance with the applicable requirements of the National Building Code of Canada.\n\nRule 26-356 (Illumination): (1) Each vault shall be provided with adequate lighting, controlled by one or more switches located near the entrance. (2) Luminaires shall be located so that they can be relamped without danger to personnel. (3) Each vault shall have a grounding-type receptacle installed in accordance with Rule 26-700 and located in a convenient location inside the vault and near the entrance.\n\nRule 26-360 (General — Cellulose nitrate film storage): Rules 26-360 to 26-368 apply to any portion of a building in which cellulose nitrate film is stored.\n\nRule 26-362 (Equipment in film-vaults): No electrical equipment other than that necessary for fixed lighting shall be installed in film-vaults.\n\nRule 26-364 (Wiring methods in film-vaults): (1) The wiring method in film-vaults shall comply with any of the methods specified in Rule 18-152 1) a), b), and d). (2) Conduit or cable shall not run directly from vault to vault, but only from the switch to the luminaire within the vault. (3) Conduit shall be sealed off near the switch enclosure with a fitting and compound.\n\nRule 26-366 (Luminaires in film-vaults): Luminaires shall comply with Rule 18-150. (This routes to Zone 2 luminaire rules — Section 18.)\n\nRule 26-368 (Circuits in film-vaults): (1) Luminaires shall be controlled by a switch located outside the film-vault. (2) A red pilot light shall be provided to indicate when the switch is closed and shall be located outside the film-vault. (3) Wiring shall be arranged so that when the switch is open, all ungrounded conductors within the film-vault will be de-energized.',
      fieldScenario:
        'You are designing an electrical equipment vault for a 5000 kVA liquid-filled transformer. Rule 26-354 requires vault construction to follow the National Building Code of Canada — fire-resistive walls, doors, ventilation, and drainage. Rule 26-352 requires enough interior space for the equipment plus minimum clearances from Sections 2, 6, and 36.\n\nThe vault must not be used for storage (Rule 26-350(2)) — no miscellaneous tools, flammable materials, or spare parts. Rule 26-356(1) requires adequate lighting with switches near the entrance. The luminaires must be positioned so that maintenance personnel can relamp safely (Rule 26-356(2)). Finally, Rule 26-356(3) requires a grounding-type receptacle per Rule 26-700 near the entrance.\n\nFor a film archive storing cellulose nitrate motion picture reels, Rule 26-360 scopes Rules 26-360 to 26-368. Rule 26-362 prohibits any electrical equipment in the film-vault except fixed lighting. Rule 26-364(1) limits wiring to the methods of Rule 18-152(1)(a), (b), and (d) — threaded metal conduit, HL cables, or armoured cables with non-metallic jacket (TECK90, ACWU90, RC90, RA90). Conduit/cable must not run from one film-vault to another; it may run only from the switch to the luminaire within one vault (Rule 26-364(2)). The conduit is sealed near the switch with a fitting and compound (Rule 26-364(3)).\n\nLuminaires in the film-vault must comply with Rule 18-150 (Zone 2 gas equipment) per Rule 26-366. The lighting switch is located OUTSIDE the film-vault (Rule 26-368(1)), with a red pilot light outside to indicate when it is closed (Rule 26-368(2)). Opening the switch must de-energize ALL ungrounded conductors inside the film-vault (Rule 26-368(3)).',
      keyPoints: [
        '"Vault" = "electrical equipment vault" for construction rules (Rule 26-350(1))',
        'Vaults shall NOT be used for storage purposes (Rule 26-350(2))',
        'Vault size must accommodate equipment plus code-specified clearances (Rule 26-352)',
        'Vault construction per the National Building Code of Canada, including doors/ventilation/drainage (Rule 26-354)',
        'Lighting with switches near the entrance; luminaires located for safe relamping (Rule 26-356(1)(2))',
        'Grounding-type receptacle per Rule 26-700 near the entrance (Rule 26-356(3))',
        'Film-vault rules apply to any building portion storing cellulose nitrate film (Rule 26-360)',
        'Film-vault: ONLY fixed-lighting equipment permitted (Rule 26-362)',
        'Film-vault wiring limited to Rule 18-152(1) methods a/b/d — threaded metal conduit, HL cables, non-metallic-jacket armour (Rule 26-364(1))',
        'Conduit/cable runs from switch to luminaire within one vault only — not vault-to-vault (Rule 26-364(2))',
        'Conduit sealed near switch enclosure with fitting and compound (Rule 26-364(3))',
        'Film-vault luminaires per Rule 18-150 (Rule 26-366)',
        'Film-vault lighting switch OUTSIDE vault with red pilot light outside (Rules 26-368(1)(2))',
        'Open switch must de-energize ALL ungrounded conductors in the film-vault (Rule 26-368(3))',
      ],
      diagramaMermaid: `graph TD
    A["Specialized Spaces"] --> B["Electrical\\nEquipment Vaults\\n(26-350 to 356)"]
    A --> C["Cellulose Nitrate\\nFilm-vaults\\n(26-360 to 368)"]
    B --> B1["No storage"]
    B --> B2["Per NBCC\\nconstruction"]
    B --> B3["Lighting + switch\\n+ receptacle"]
    C --> C1["Fixed lighting only"]
    C --> C2["Rule 18-152 methods:\\nthreaded conduit,\\nHL cable, armour"]
    C --> C3["Switch OUTSIDE\\nwith red pilot"]
    C --> C4["No vault-to-vault\\nrun of conduit"]
    C --> C5["Sealed at switch"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'No Vault Storage', note: 'Vaults shall not be used for storage purposes — Rule 26-350(2)', color: 'rose' },
        { icon: 'sun', title: 'Receptacle in Vault', note: 'Grounding-type receptacle near entrance per Rule 26-700 — Rule 26-356(3)', color: 'sky' },
        { icon: 'fire', title: 'Film-Vault: Lighting Only', note: 'No electrical equipment except fixed lighting — Rule 26-362', color: 'amber' },
        { icon: 'lock', title: 'Switch OUTSIDE Film-vault', note: 'Red pilot outside indicates switch closed — Rule 26-368(1)(2)', color: 'violet' },
        { icon: 'wire', title: 'Rule 18-152 Wiring', note: 'Only threaded conduit, HL cable, or non-metallic armour — Rule 26-364(1)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 11. LIGHTNING ARRESTERS & LOW-VOLTAGE SURGE PROTECTIVE DEVICES (Rules 26-400 to 26-420)
    // =========================================================================
    {
      id: '26-arresters-spd',
      title: 'Lightning Arresters & Low-Voltage Surge Protective Devices',
      rules: 'Rules 26-400 to 26-420',
      explanation:
        'These rules cover two related surge protection device families — medium/high voltage lightning arresters and low-voltage surge protective devices (SPDs).\n\nRule 26-400 (Use and location of lightning arresters): (1) Lightning arresters shall be installed in every distributing substation in locations where lightning disturbances occur frequently and no other adequate protection is provided. (2) Lightning arresters installed for the protection of utilization equipment shall (a) be permitted to be installed either inside or outside the building or enclosure containing the equipment to be protected; and (b) be isolated by elevation, enclosed, or otherwise made inaccessible to unauthorized persons.\n\nRule 26-402 (Indoor installations of lightning arresters): (1) Where lightning arresters are installed in a building, they shall be located well away from all equipment other than that which they protect and from passageways and combustible parts of buildings. (2) Where lightning arresters containing oil are installed in a building, they shall be separated from other equipment by walls conforming to electrical equipment vault construction requirements in accordance with Rules 26-350 to 26-356.\n\nRule 26-404 (Outdoor installations of lightning arresters): Where arresters containing oil are located outdoors, means of draining or absorbing oil shall be provided by (a) ditches or drains; or (b) paving the yard in which the arrester is contained with cinders or other absorbent material to an adequate depth.\n\nRule 26-406 (Choke coils for lightning arresters): Where choke coils are used in connection with a lightning arrester, the coils shall be installed between the lightning arrester tap and the apparatus to be protected.\n\nRule 26-408 (Connection of lightning arresters): The connection between arrester and line conductor shall be (a) made of a copper conductor not smaller than No. 6 AWG; (b) as short and as straight as practicable with a minimum of bends; and (c) free of sharp bends and turns.\n\nRule 26-410 (Insulation of lightning arrester accessories): The insulation from ground and from other conductors for accessories such as gap electrodes and choke coils shall be at least equal to the insulation required at other points of the circuit.\n\nRule 26-420 (Low-voltage surge protectors): (1) Except as provided for in Subrule 2), where low-voltage surge protective devices are to be connected to a consumer\'s service, they shall be installed outdoors at least 12.5 mm from combustible material (a) at the service head supplying the consumer\'s service; (b) at any supply point on the overhead distribution; (c) on the load side of a self-contained utility revenue meter socket, provided that the socket is fitted with lugs for the termination; or (d) on any outdoor distribution enclosure supplied from underground distribution. (2) Low-voltage surge protective devices shall be permitted to be connected to an overcurrent device or to a branch circuit supplying utilization equipment in the building.\n\nRule 26-500 — Reserved for future use.',
      fieldScenario:
        'At a 25 kV distribution substation in a rural area with frequent lightning, Rule 26-400(1) requires lightning arresters unless other protection exists. The 13.8 kV feeder arresters are mounted on a pole and guarded by elevation (Rule 26-400(2)(b)). The arrester-to-line connection uses a minimum No. 6 AWG copper conductor, kept as short and straight as practicable with no sharp bends (Rule 26-408).\n\nA choke coil is used in conjunction with the arrester — Rule 26-406 requires the choke to be installed between the arrester tap and the apparatus being protected. Insulation on gap electrodes and choke coil accessories must match the line insulation rating (Rule 26-410).\n\nIndoors at a plant substation, oil-filled lightning arresters must be separated from other equipment by walls built to the electrical equipment vault standards of Rules 26-350 to 26-356 (Rule 26-402(2)). They must be located well away from passageways and combustible building parts (Rule 26-402(1)).\n\nOutdoors, oil arresters require either ditches/drains to carry away oil, or a yard paved with cinders or other absorbent material of adequate depth to contain a leak (Rule 26-404).\n\nAt a single-family house, the electrician installs a low-voltage SPD at the service head. Rule 26-420(1)(a) permits this outdoor location, at least 12.5 mm from combustible wood trim. Alternatively, Rule 26-420(2) permits an SPD inside the panel connected to an overcurrent device feeding branch circuits.',
      keyPoints: [
        'Lightning arresters required in substations with frequent lightning unless other adequate protection exists (Rule 26-400(1))',
        'Arresters may be installed inside or outside the building/enclosure containing the protected equipment (Rule 26-400(2)(a))',
        'Arresters must be isolated by elevation, enclosed, or inaccessible to unauthorized persons (Rule 26-400(2)(b))',
        'Indoor arresters located well away from other equipment, passageways, and combustibles (Rule 26-402(1))',
        'Oil-filled indoor arresters separated by walls meeting electrical equipment vault construction (Rule 26-402(2))',
        'Outdoor oil arresters: drain ditches OR cinder/absorbent paving (Rule 26-404)',
        'Choke coils installed between the lightning arrester tap and the protected apparatus (Rule 26-406)',
        'Arrester-to-line connection: No. 6 AWG copper minimum, short and straight, no sharp bends (Rule 26-408)',
        'Insulation on arrester accessories (gap electrodes, chokes) >= circuit insulation level (Rule 26-410)',
        'Rule 26-500 is Reserved for future use',
        'Low-voltage SPDs on consumer service: outdoor, >= 12.5 mm from combustibles, at service head, overhead supply point, meter socket with lugs, or outdoor distribution enclosure (Rule 26-420(1))',
        'Low-voltage SPDs may alternatively connect to an overcurrent device or branch circuit supplying utilization equipment (Rule 26-420(2))',
      ],
      diagramaMermaid: `graph TD
    A["Surge Protection"] --> B["Lightning Arresters\\n(Rules 26-400 to 410)"]
    A --> C["Low-Voltage SPDs\\n(Rule 26-420)"]
    B --> B1["Required in\\nsubstations with\\nfrequent lightning"]
    B --> B2["Indoor oil: vault\\nconstruction walls"]
    B --> B3["Outdoor oil:\\nditch or cinder paving"]
    B --> B4["Connection:\\nNo. 6 AWG Cu,\\nshort & straight"]
    C --> C1["Outdoor service:\\n>= 12.5 mm\\nfrom combustibles"]
    C --> C2["Locations: head,\\nsupply point,\\nmeter socket,\\ndistribution enclosure"]
    C --> C3["Or connect to OCPD/\\nbranch circuit"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'No. 6 AWG Cu', note: 'Arrester-to-line copper connection: short, straight, no sharp bends — Rule 26-408', color: 'sky' },
        { icon: 'warning', title: 'Vault Walls for Oil', note: 'Indoor oil-filled arresters separated by vault-grade walls — Rule 26-402(2)', color: 'rose' },
        { icon: 'shield', title: 'Choke Coil Placement', note: 'Install between the arrester tap and the protected apparatus — Rule 26-406', color: 'amber' },
        { icon: 'ruler', title: '12.5 mm Clearance', note: 'Low-voltage SPDs outdoor: >= 12.5 mm from combustibles — Rule 26-420(1)', color: 'violet' },
        { icon: 'fire', title: 'Oil Drainage Outdoors', note: 'Ditches, drains, or cinder paving for outdoor oil arresters — Rule 26-404', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 12. RESISTANCE DEVICES & PANELBOARDS (Rules 26-550 to 26-602)
    // =========================================================================
    {
      id: '26-resistance-panelboards',
      title: 'Resistance Devices & Panelboards',
      rules: 'Rules 26-550 to 26-602',
      explanation:
        'These rules address resistance devices (resistor banks, braking resistors) and panelboards (distribution breaker panels), including the special requirements for dwelling units.\n\nRule 26-550 (Location of resistance devices): Resistance devices, including wiring to the resistance elements, shall be installed so that the danger of igniting adjacent combustible material is reduced to a minimum.\n\nRule 26-552 (Conductors for resistance devices): Insulated conductors used for connection between resistance elements and controllers, unless used for infrequent motor starting, (a) shall be selected in accordance with Rule 12-102(3) as being suitable for the temperature involved and in no case less than 90 °C; and (b) shall be permitted to be grouped where the voltage between any two insulated conductors in the group does not exceed a maximum of 75 V, provided that the insulated conductors have a flame-retardant insulation or jacket.\n\nRule 26-554 (Use of incandescent lamps as resistance devices): (1) Incandescent lamps shall be permitted to be used (a) as protective resistors for automatic controllers; or (b) where a deviation has been allowed in accordance with Rule 2-030, as resistors in series with other devices, provided that the resulting installation is acceptable. (2) Where incandescent lamps are used as resistors, they shall (a) be mounted in porcelain lampholders on non-combustible supports; (b) be arranged so that they cannot be subjected to a voltage greater than that for which they are rated; (c) be provided with a permanently attached nameplate showing the wattage and voltage of the lamp to be used in each lampholder; (d) not carry or control the main current; and (e) not constitute the regulating resistance of the device.\n\nRule 26-600 (Location of panelboards): (1) Panelboards shall NOT be located in coal bins, clothes closets, bathrooms, stairways, high ambient rooms, dangerous or hazardous locations, nor in any similar undesirable places. (2) Panelboards in dwelling units shall be installed as high as possible, with no overcurrent device operating handle positioned more than 1.7 m above the finished floor level.\n\nRule 26-602 (Panelboards in dwelling units): (1) A panelboard shall be installed in every dwelling unit except for (a) dwelling units in hotels and motels; and (b) dwelling units that have been created by subdivision of a single dwelling and are not individually metered for electrical power consumption. (2) Every panelboard installed in accordance with Subrule 1) shall have a single supply protected by overcurrent devices, and this supply shall be capable of being disconnected without disconnecting the supply to any other dwelling unit.',
      fieldScenario:
        'You are installing a dynamic braking resistor bank for a large hoist. Rule 26-550 requires the resistors to be located so that the danger of igniting combustible material is minimized — you mount them on a non-combustible wall clear of stored materials.\n\nThe conductors from the resistor elements to the controller are not for infrequent starting duty. Rule 26-552(a) requires conductors selected per Rule 12-102(3) rated for the operating temperature and in no case less than 90 °C. Because the voltage between any two conductors in the group is below 75 V, Rule 26-552(b) permits grouping them provided they have flame-retardant insulation.\n\nFor a small control panel, an engineer wants to use an incandescent lamp as a protective resistor for an automatic controller — permitted by Rule 26-554(1)(a). The lamp is mounted in a porcelain lampholder on a steel plate (non-combustible support) per Rule 26-554(2)(a), cannot be overvolted (Rule 26-554(2)(b)), has a nameplate specifying the lamp wattage/voltage (Rule 26-554(2)(c)), and does NOT carry the main current or constitute the regulating resistance (Rule 26-554(2)(d)(e)).\n\nIn a single-family dwelling, Rule 26-602(1) requires a panelboard in every dwelling unit except hotel/motel rooms and un-metered subdivision units. Rule 26-602(2) requires a single supply to the panelboard protected by overcurrent devices and capable of being disconnected without affecting other dwelling units. Rule 26-600(2) requires the panelboard to be as high as possible with no operating handle more than 1.7 m above the finished floor.\n\nAn apprentice wants to install a panel in a bathroom. Rule 26-600(1) forbids panelboards in coal bins, clothes closets, bathrooms, stairways, high-ambient rooms, dangerous/hazardous locations, or similar places.',
      keyPoints: [
        'Resistance devices installed to minimize the danger of igniting adjacent combustible material (Rule 26-550)',
        'Conductors for resistance devices: selected per Rule 12-102(3), minimum 90 °C (Rule 26-552(a))',
        'Grouped resistance conductors: voltage between any two <= 75 V and flame-retardant insulation/jacket (Rule 26-552(b))',
        'Incandescent lamps permitted as protective resistors for automatic controllers (Rule 26-554(1)(a))',
        'Incandescent lamp resistors: porcelain lampholders on non-combustible supports (Rule 26-554(2)(a))',
        'Incandescent lamp resistors: cannot be over-voltaged, must have wattage/voltage nameplate (Rules 26-554(2)(b)(c))',
        'Incandescent lamp resistors: must NOT carry main current or be the regulating resistance (Rules 26-554(2)(d)(e))',
        'Panelboards NOT in coal bins, clothes closets, bathrooms, stairways, high-ambient rooms, or hazardous locations (Rule 26-600(1))',
        'Dwelling unit panelboards: as high as possible, max handle height 1.7 m above finished floor (Rule 26-600(2))',
        'Panelboard required in every dwelling unit except hotels/motels and un-metered subdivisions of a single dwelling (Rule 26-602(1))',
        'Single supply protected by OCPD, disconnectable without affecting other dwelling units (Rule 26-602(2))',
      ],
      diagramaMermaid: `graph TD
    A["Resistance Devices\\n& Panelboards"] --> B["Resistance Devices\\n(26-550/552/554)"]
    A --> C["Panelboards\\n(26-600/602)"]
    B --> B1["Away from\\ncombustibles"]
    B --> B2["Conductors:\\n90 C min,\\n<= 75 V grouped"]
    B --> B3["Incandescent lamps\\nporcelain holders\\nnon-combustible"]
    C --> C1["NOT in bathrooms,\\nclosets, stairways,\\ncoal bins"]
    C --> C2["Dwelling: max\\nhandle 1.7 m"]
    C --> C3["One panelboard\\nper dwelling unit"]
    C --> C4["Single protected\\nsupply"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C1 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: '90 C Conductors', note: 'Resistance element conductors minimum 90 C rating — Rule 26-552(a)', color: 'amber' },
        { icon: 'warning', title: 'No Panels in Bathrooms', note: 'Or closets, stairways, coal bins, high-ambient rooms — Rule 26-600(1)', color: 'rose' },
        { icon: 'ruler', title: '1.7 m Handle Max', note: 'Dwelling panelboards: no OCPD handle above 1.7 m — Rule 26-600(2)', color: 'sky' },
        { icon: 'power', title: 'One Panel Per Unit', note: 'Every dwelling unit requires a panelboard except hotels/motels — Rule 26-602(1)', color: 'emerald' },
        { icon: 'sun', title: 'Lamp Resistor Rules', note: 'Porcelain on non-combustible; cannot carry main current — Rule 26-554', color: 'violet' },
      ],
    },

    // =========================================================================
    // 13. BRANCH CIRCUITS — Definitions, Flood Zones, Residential, Dwelling, AFCI (Rules 26-650 to 26-658)
    // =========================================================================
    {
      id: '26-branch-circuits',
      title: 'Branch Circuits — Definitions, Flood Zones, Residential, Dwelling & AFCI',
      rules: 'Rules 26-650 to 26-658',
      explanation:
        'Branch circuit requirements for residential occupancies and dwelling units are among the most commonly referenced CEC rules. These rules also cover arc-fault protection and flood-zone protection.\n\nRule 26-650 (Special terminology): Defines three critical terms for branch circuits:\n- "Arc-fault protection": a means of recognizing characteristics unique to both series and parallel arc-faults and de-energizing the circuit when an arc-fault is detected.\n- "Combination-type arc-fault circuit interrupter": a device that provides both series and parallel arc-fault protection to the ENTIRE branch circuit wiring, including cord sets and power supply cords connected to the outlets, against the unwanted effects of arcing.\n- "Outlet branch-circuit-type arc-fault circuit interrupter": a device that provides both series and parallel arc-fault protection to DOWNSTREAM branch circuit wiring, cord sets, and power supply cords against arcing, and also provides series arc-fault protection to upstream branch circuit wiring.\n\nRule 26-652 (Branch circuits below ground level in areas designated as flood hazard zones): Where branch circuits are located below ground level in areas designated as flood hazard zones, ground fault protection shall be provided to de-energize all normally ungrounded conductors with a ground fault setting sufficient to allow normal operation of connected loads under normal conditions.\n\nRule 26-654 (Branch circuits for residential occupancies): Branch circuits for all residential occupancies (including dwelling units and single dwellings) shall meet these requirements: (a) receptacles for refrigerators per Rule 26-722(d)(i) shall be supplied by at least one branch circuit that does not supply any other outlets, except a recessed clock receptacle; (b) at least one branch circuit shall be provided solely for receptacles in the laundry room or in a space where complete plumbing is installed to accommodate a washing machine; (c) at least one branch circuit provided solely for receptacles in the utility room; (d) each receptacle installed in a cupboard/cabinet/enclosure for a microwave oven per Rule 26-720(h) shall be supplied by a branch circuit that does not supply any other outlets, not counted under Rule 26-658(d); (e) a separate branch circuit shall be provided solely to supply power to each central vacuum system; and (f) a separate branch circuit shall be provided solely to supply power to each receptacle described in Rule 26-720(n) (EV supply equipment).\n\nRule 26-656 (Branch circuits for dwelling units): (a) branch circuits from a panelboard installed per Rule 26-602 shall NOT be connected to outlets or electrical equipment in any other dwelling unit; (b) where an additional dwelling unit is created by subdivision, smoke/CO alarms in the additional unit may be connected to a branch circuit in the original unit (per Rule 32-200) provided both panelboards are conspicuously labeled about the arrangement; (c) where a single panelboard is installed per Rule 26-602(1)(b), its branch circuits may supply both dwellings created by the subdivision; (d) at least two branch circuits shall be provided for receptacles (5-15R split or 5-20R) installed at kitchen counters per Rule 26-722(d)(iii)(iv)(v), with no more than two receptacles per branch circuit and no other outlets on these circuits; (e) if Rule 26-722(d)(iii) requires only one receptacle, only one branch circuit is needed; (f) receptacles identified in Rule 26-720(d) may connect to those required by Rule 26-722(d)(iii), even if the circuit supplies two receptacles; (g) outdoor receptacles readily accessible from ground level per Rule 26-722(a) must be supplied from at least one dedicated outdoor receptacle circuit; and (h) at least one branch circuit shall supply the receptacles in a carport/garage of a single dwelling, with luminaires/garage door operator permitted on that circuit.\n\nRule 26-658 (Arc-fault protection of branch circuits for dwelling units): (1) Each branch circuit supplying 125 V receptacles rated 20 A or less shall be provided with arc-fault protection by a combination-type AFCI, except for branch circuits supplying (a) receptacles installed per (i) Rule 26-720(f) — no other receptacles connected, or (ii) Rule 26-722(d)(i), (iii), (iv), and (v); and (b) a single receptacle for a sump pump where (i) the receptacle is labeled as a sump pump receptacle; and (ii) the branch circuit does not supply any other receptacles. (2) The entire branch circuit need not be provided with arc-fault protection where (a) an outlet branch-circuit-type AFCI is installed at the first outlet on the branch circuit; AND (b) the wiring method between the branch circuit overcurrent device and the first outlet consists of metal raceway, armoured cable, or non-metallic conduit or tubing. (3) Where one or more 125 V receptacles rated 20 A or less are added to an existing branch circuit without arc-fault protection, the entire branch circuit need not be AFCI-protected where an outlet branch-circuit-type AFCI is installed at the first added receptacle.',
      fieldScenario:
        'You are wiring a new single-family house. Rule 26-654(a) requires a dedicated branch circuit for the refrigerator receptacle, with only a recessed clock receptacle permitted to share. Rule 26-654(b) requires a separate branch circuit for the laundry room, and Rule 26-654(c) a separate branch circuit for the utility room. Rule 26-654(e) requires a separate branch circuit for the central vacuum. Rule 26-654(f) requires a dedicated branch circuit for the EV charger receptacle (Rule 26-720(n)).\n\nIn the kitchen, Rule 26-656(d) requires at least two branch circuits for counter receptacles, each with no more than two receptacles and no other outlets. Rule 26-656(h) requires at least one branch circuit for the garage receptacles — the garage door opener and lights can be on the same circuit.\n\nRule 26-658(1) requires combination-type AFCI protection for every 125 V, 20 A branch circuit feeding receptacles, EXCEPT kitchen counter receptacles per Rule 26-722(d)(iii)(iv)(v), refrigerator receptacles per Rule 26-722(d)(i), and sump pump receptacles (labeled, dedicated single receptacle). You install combination-type AFCIs in the panel for bedroom, living room, and outdoor receptacle circuits.\n\nIn a retrofit where a new outlet is added to an existing non-AFCI circuit, Rule 26-658(3) allows an outlet branch-circuit-type AFCI at the first added receptacle instead of AFCI-protecting the entire original circuit.\n\nA basement suite in a flood hazard zone has branch circuits below ground level. Rule 26-652 requires ground fault protection that de-energizes all normally ungrounded conductors with a GF setting that still allows normal load operation.',
      keyPoints: [
        'AFCI definitions: arc-fault protection detects series and parallel arcs (Rule 26-650)',
        'Combination-type AFCI protects the ENTIRE branch circuit, cord sets, and supply cords (Rule 26-650)',
        'Outlet branch-circuit-type AFCI protects downstream series+parallel and upstream series arcs (Rule 26-650)',
        'Branch circuits below grade in flood hazard zones: GF protection that allows normal operation (Rule 26-652)',
        'Residential: dedicated circuit for refrigerator, laundry, utility, microwave (in cabinet), central vacuum, EV supply (Rule 26-654)',
        'Dwelling unit panel circuits shall NOT feed outlets in another dwelling unit (Rule 26-656(a))',
        'Kitchen counters: >= 2 branch circuits, max 2 receptacles each, no other outlets (Rule 26-656(d))',
        'Outdoor ground-level receptacles: at least one dedicated branch circuit (Rule 26-656(g))',
        'Carport/garage: at least one branch circuit for receptacles; lights/door opener may share (Rule 26-656(h))',
        'Combination-type AFCI required on every 125 V, 20 A or less receptacle branch circuit in dwelling units (Rule 26-658(1))',
        'AFCI exceptions: kitchen counter receptacles, refrigerator, labeled dedicated sump pump receptacle (Rule 26-658(1)(a)(b))',
        'Outlet branch-circuit-type AFCI at first outlet acceptable if wiring to it is metal raceway, armoured cable, or non-metallic conduit/tubing (Rule 26-658(2))',
        'Adding receptacle to existing non-AFCI circuit: outlet branch-circuit-type AFCI at first added receptacle acceptable (Rule 26-658(3))',
      ],
      diagramaMermaid: `graph TD
    A["Branch Circuits\\n(Rules 26-650 to 658)"] --> B["26-652\\nFlood hazard:\\nGF protection"]
    A --> C["26-654\\nResidential\\ndedicated circuits"]
    A --> D["26-656\\nDwelling\\nrequirements"]
    A --> E["26-658\\nAFCI protection"]
    C --> C1["Refrigerator"]
    C --> C2["Laundry"]
    C --> C3["Utility room"]
    C --> C4["Microwave in cabinet"]
    C --> C5["Central vacuum"]
    C --> C6["EV supply"]
    D --> D1["Kitchen counters:\\n>= 2 circuits"]
    D --> D2["Outdoor ground-level"]
    D --> D3["Garage/carport"]
    E --> E1["Combination-type\\n125 V, 20 A or less"]
    E --> E2["Exceptions: kitchen,\\nfridge, sump pump"]
    E --> E3["OB-type at first outlet\\nif metal raceway upstream"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Combination AFCI', note: 'Protects entire circuit, cords, cord sets — Rule 26-650', color: 'rose' },
        { icon: 'power', title: 'Dedicated Circuits', note: 'Refrigerator, laundry, utility, microwave, central vac, EV — Rule 26-654', color: 'sky' },
        { icon: 'bolt', title: '2 Kitchen Circuits', note: '>= 2 counter receptacle circuits, max 2 outlets each — Rule 26-656(d)', color: 'amber' },
        { icon: 'warning', title: 'AFCI Mandatory', note: 'Every dwelling 125 V 20 A receptacle branch circuit — Rule 26-658(1)', color: 'violet' },
        { icon: 'sun', title: 'Sump Pump Exception', note: 'Labeled dedicated single sump pump receptacle exempt from AFCI — Rule 26-658(1)(b)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 14. RECEPTACLES — General, Bonding, GFCI, TR, Weather, Rooftop, Sump (Rules 26-700 to 26-712)
    // =========================================================================
    {
      id: '26-receptacles',
      title: 'Receptacles — General, Bonding, GFCI, Tamper-Resistant, Weather & Rooftop',
      rules: 'Rules 26-700 to 26-712',
      explanation:
        'These rules cover all receptacles regardless of occupancy — configuration, bonding, GFCI protection, tamper-resistance, outdoor protection, and specialty rules for rooftops and sump pumps.\n\nRule 26-700 (General): (1) Receptacle configurations shall be in accordance with Diagrams 1 and 2, except (a) for receptacles used on equipment solely for interconnection purposes; (b) for receptacles for specific applications as required by other Rules; or (c) where other configurations are suitable. (2) Receptacles with configurations per Diagrams 1 and 2 shall be connected only to circuits having a nominal system voltage and ampere rating corresponding to the rating of the configurations. (3) Receptacles connected to circuits having different voltages, frequencies, or types of current on the same premises shall be designed so that attachment plugs are not interchangeable. (4) Receptacles with exposed terminals shall be used only in fittings, metal troughs, and similar devices. (5) Receptacles located in floors shall be enclosed in floor boxes. (6) Receptacles rated 30 A or more and installed facing downward shall have provision for locking or latching to prevent unintentional detachment. (7) After installation: (a) receptacle faces shall project a minimum of 0.4 mm from metal or conductive faceplates; (b) any openings around the receptacle or cover shall be such that a rod 6.75 mm in diameter will not enter; and (c) receptacles, faceplates, and covers shall not prevent an attachment plug from being used in the manner intended. (8) 5-15R or 5-20R receptacles installed within 1.5 m of sinks shall NOT be located (a) on the counter area directly in front of the sink; and (b) on the wall area directly behind the sink, except where the distance between the wall and the inside edge of the sink exceeds 450 mm.\n\nRule 26-702 (Bonding of receptacles): (1) Where grounding-type receptacles replace ungrounded types in existing installations, the grounding terminal shall be effectively bonded to ground by (a) connection to a metal raceway or cable sheath bonded to ground; (b) connection to the system ground by a separate bonding conductor; or (c) bonding to an adjacent grounded metal cold-water pipe. (2) Where no bonding means exists, grounding-type receptacles may be installed provided each is protected by a Class A GFCI. (3) A bonding conductor shall NOT be extended from any receptacle protected by a Class A GFCI per Subrule 2) to any other outlet.\n\nRule 26-704 (Protection of receptacles by a GFCI of the Class A type): (1) 5-15R/5-20R within 1.5 m of sinks (wash basins, bathtubs, showers) shall be protected by Class A GFCI, except where the receptacle (a) is intended for a stationary appliance designated for the location; and (b) is located behind the stationary appliance such that it is inaccessible for general-purpose portable appliances. (2) All 5-15R/5-20R receptacles installed outdoors and within 2.5 m of finished grade shall be protected by Class A GFCI.\n\nRule 26-706 (Tamper-resistant receptacles): (1) All 5-15R/5-20R receptacles installed in the following locations shall be tamper-resistant and marked: (a) child care facilities; (b) guest rooms and suites of hotels and motels; (c) preschools and elementary education facilities; or (d) dwelling units. (2) Receptacles dedicated for stationary appliances rendered inaccessible, and receptacles above 2 m from floor/grade, need not be tamper-resistant.\n\nRule 26-708 (Receptacles exposed to the weather): (1) Receptacles exposed to the weather shall have wet location cover plates. (2) Configurations 5-15R, 5-20R, 5-20RA, 6-15R, 6-20R, and 6-20RA receptacles must have cover plates suitable for wet locations, whether or not a plug is inserted, marked "Extra Duty". (3) "Wet Location Only When Cover Closed" covers are permitted for receptacles (a) installed facing downward at 45° or less from horizontal; or (b) located at least 1 m above finished grade/floor and not in a wet location. (4) Receptacles in surface-mounted outlet boxes: cover plates held in place by four screws or equivalent. (5) Receptacles in flush-mounted outlet boxes: boxes per Rule 12-3016 with weatherproof cover plate seal.\n\nRule 26-710 (Receptacles for maintenance of equipment located on rooftops): Receptacles required by Rule 2-316 for maintenance of HVAC and similar rooftop equipment shall be (a) protected by a Class A GFCI; (b) on a separate branch circuit; (c) of CSA configuration 5-20R; (d) located within 7.5 m of the rooftop electrical equipment; (e) located not less than 750 mm above the finished roof; and (f) protected from mechanical damage.\n\nRule 26-712 (Sump pump receptacles): For buildings located in a flood hazard zone, sump pump receptacles referred to in Rule 26-658(1)(b) shall be (a) located above the flood elevation; or (b) marked as suitable for submersion.',
      fieldScenario:
        'You are installing receptacles in a commercial kitchen. A 5-15R near the prep sink is 1.2 m away — inside the 1.5 m trigger for Rule 26-700(8). It cannot be on the counter area in front of the sink or on the wall directly behind unless the gap exceeds 450 mm. Rule 26-704(1) further requires Class A GFCI protection since it is within 1.5 m of a sink.\n\nAn outdoor receptacle at ground level (within 2.5 m of finished grade) needs Class A GFCI protection per Rule 26-704(2), and an "Extra Duty" wet-location cover that remains weatherproof with or without a plug (Rule 26-708(2)).\n\nFor a daycare renovation, all 5-15R/5-20R receptacles must be tamper-resistant and marked per Rule 26-706(1)(a). A receptacle dedicated for a stationary dishwasher inside a cabinet is exempt (Rule 26-706(2)).\n\nOn a rooftop, you install a HVAC maintenance receptacle per Rule 2-316. Rule 26-710 requires it to be Class A GFCI-protected, on a separate branch circuit, CSA 5-20R, within 7.5 m of the rooftop equipment, at least 750 mm above the finished roof, and protected from mechanical damage.\n\nIn a flood-prone basement, Rule 26-712 requires the sump pump receptacle to be above the flood elevation OR marked as suitable for submersion.\n\nFor a 1970s house receptacle replacement with no ground: Rule 26-702(1)(c) allows bonding to an adjacent grounded metal cold-water pipe. If no bonding is available, Rule 26-702(2) permits a grounding-type receptacle protected by Class A GFCI — but Rule 26-702(3) forbids extending a bonding conductor from that GFCI-protected receptacle to any other outlet.',
      keyPoints: [
        'Receptacle configurations per Diagrams 1 and 2 unless other configurations are suitable (Rule 26-700(1))',
        'Receptacles match system voltage and ampere rating of the circuit (Rule 26-700(2))',
        'Exposed-terminal receptacles only in fittings, metal troughs, and similar devices (Rule 26-700(4))',
        'Floor receptacles enclosed in floor boxes (Rule 26-700(5))',
        '30 A or more receptacles facing downward: provision for locking/latching (Rule 26-700(6))',
        'Receptacle face projects >= 0.4 mm from conductive faceplate; opening < 6.75 mm rod (Rule 26-700(7))',
        '5-15R/5-20R within 1.5 m of sink: not in front of sink or behind sink unless wall > 450 mm (Rule 26-700(8))',
        'Ungrounded-to-grounded replacement: bond via raceway, bonding conductor, or adjacent grounded cold-water pipe (Rule 26-702(1))',
        'No bonding means: grounding-type receptacle permitted if Class A GFCI protected; cannot extend bond to other outlets (Rules 26-702(2)(3))',
        'Class A GFCI required within 1.5 m of sinks/tubs/showers (except inaccessible stationary appliance) (Rule 26-704(1))',
        'Class A GFCI required for outdoor 5-15R/5-20R within 2.5 m of finished grade (Rule 26-704(2))',
        'Tamper-resistant required: daycare, hotel/motel, preschool/elementary, dwelling units (Rule 26-706(1))',
        'TR not required: stationary appliances inaccessible; receptacles > 2 m above floor (Rule 26-706(2))',
        'Weather-exposed receptacles: wet location cover plates, "Extra Duty" for listed configurations (Rule 26-708)',
        'Rooftop maintenance receptacle: Class A GFCI, separate circuit, 5-20R, within 7.5 m, >= 750 mm above roof, protected (Rule 26-710)',
        'Flood-zone sump pump receptacle: above flood elevation or submersion-rated (Rule 26-712)',
      ],
      diagramaMermaid: `graph TD
    A["Receptacles\\n(Rules 26-700 to 712)"] --> B["26-700\\nGeneral rules"]
    A --> C["26-702\\nBonding replacements"]
    A --> D["26-704\\nGFCI protection"]
    A --> E["26-706\\nTamper-resistant"]
    A --> F["26-708\\nWeather"]
    A --> G["26-710\\nRooftop"]
    A --> H["26-712\\nSump pump"]
    B --> B1["Face >= 0.4 mm\\nNo 6.75 mm gap"]
    B --> B2["Sink: not in\\nfront or behind\\n(unless >450 mm)"]
    D --> D1["1.5 m from sink"]
    D --> D2["Outdoor\\n2.5 m from grade"]
    G --> G1["Class A GFCI\\nseparate circuit\\n5-20R\\n750 mm above roof\\n<= 7.5 m"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: '1.5 m Sink GFCI', note: '5-15R/5-20R within 1.5 m of sink/tub/shower: Class A GFCI — Rule 26-704(1)', color: 'rose' },
        { icon: 'shield', title: 'Outdoor 2.5 m', note: 'All outdoor 5-15R/5-20R within 2.5 m of grade: Class A GFCI — Rule 26-704(2)', color: 'amber' },
        { icon: 'lock', title: 'Tamper-Resistant', note: 'Daycare, hotel, preschool, dwelling — Rule 26-706(1)', color: 'sky' },
        { icon: 'sun', title: 'Extra Duty Covers', note: 'Wet location cover suitable with or without plug — Rule 26-708(2)', color: 'violet' },
        { icon: 'ruler', title: 'Rooftop 750 mm / 7.5 m', note: '>= 750 mm above roof, within 7.5 m of equipment — Rule 26-710', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 15. RECEPTACLES FOR RESIDENTIAL OCCUPANCIES (Rules 26-720 to 26-724)
    // =========================================================================
    {
      id: '26-residential-receptacles',
      title: 'Receptacles for Residential Occupancies — Dwelling, Kitchen, Outdoor & Single Dwellings',
      rules: 'Rules 26-720 to 26-724',
      explanation:
        'These are among the most heavily used rules in Section 26. They define where and how residential receptacles must be placed — living spaces, kitchens, bathrooms, hallways, garages, and outdoors.\n\nRule 26-720 (General — Residential occupancies): Applies to all residential occupancies including dwelling units and single dwellings. (a) "Finished wall" = any wall finished to within 450 mm of the floor with drywall, wood panelling, or like material. "Controlled outlet duplex receptacle" = an outlet with an integral switching means for remote switching. (b) All receptacles shall be CSA configuration 5-15R or 5-20R (see Diagram 1). (c) Receptacles shall NOT be mounted facing up in the work surfaces or counters in the kitchen or dining area. (d) Split-type or 5-20R receptacles installed on a side of a counter work surface in a kitchen designed for use by persons with disabilities shall not count as the receptacles required by Rule 26-722(d). (e) At least one duplex receptacle shall be provided (i) in each space where complete plumbing is installed to accommodate a washing machine; (ii) in each laundry room; (iii) in each utility room; and (iv) in any unfinished basement area. (f) At least one receptacle in each bathroom/washroom with a wash basin, located within 1 m of any wash basin. (g) Bathroom receptacles shall be at least 1 m but not less than 500 mm from the bathtub/shower, measured horizontally between the receptacle and stall without piercing walls. (h) Receptacles shall not be placed in cupboards/cabinets/enclosures, except (i) an integral part of a factory-built enclosure; (ii) for an appliance suitable for installation in the enclosure; (iii) intended for a microwave; (iv) for a cord-connected range hood; or (v) for a combination microwave/range hood. (i) Receptacles in cupboards/cabinets for dishwashers, garbage disposals, etc. shall be de-energized unless the enclosure door is fully opened. (j) Receptacles that are part of a luminaire, located within cabinets/cupboards per Item h), or more than 1.7 m above floor shall NOT count as the wall-mounted receptacles required by this Rule. (k) Switched duplex or controlled outlet duplex receptacles: may count as one of the wall-mounted receptacles if only half is switched. (l) At least one receptacle for each cord-connected central vacuum system where complete duct is installed. (m) Public corridors in residential buildings: at least one duplex receptacle in each 10 m of length or fraction. (n) Where required by NBCC: receptacles for EV supply equipment per Rule 86-306 in garage/carport spaces of residential buildings.\n\nRule 26-722 (Receptacles for dwelling units): Applies to dwelling units including single dwellings. (a) Duplex receptacles shall be installed in finished walls of every room (except bathrooms, hallways, laundry/water closet rooms, utility rooms, closets) so that no point along the floor line of any usable wall space is more than 1.8 m horizontally from a receptacle in that or an adjoining space, measured along floor line. (b) At least one duplex receptacle in each unfinished balcony/porch. (c) Usable wall space = 900 mm or more width; excludes doorways, door-swing areas, windows to floor, fireplaces, permanent installations. (d) Kitchens: (i) one receptacle for each refrigerator; (ii) for a free-standing gas range with gas supply piping, one receptacle behind the intended range location not more than 130 mm above floor and as near midpoint as practicable; (iii) sufficient 5-15R split or 5-20R receptacles along counter work surfaces (excluding sinks, built-in equipment, isolated work surfaces <300 mm long) so no point along wall is more than 900 mm from a receptacle; (iv) at least one receptacle for each permanently fixed island counter >= 600 mm × 300 mm; (v) at least one receptacle for each peninsular counter >= 600 mm × 300 mm; and (vi) sufficient duplex receptacles on remaining finished walls per Item a). (e) Hallway receptacles: no point in a hallway shall be more than 4.5 m from a duplex receptacle measured by shortest cord path through any door opening.\n\nRule 26-724 (Receptacles for single dwellings): Applies to single dwellings only. (a) At least one duplex receptacle outdoors, readily accessible from ground/grade level for outdoor appliances. (b) At least one duplex receptacle readily accessible from floor/grade in each car space in a garage/carport. (c) One receptacle in a garage for each cord-connected overhead garage door opener, located within 1 m of the opener.',
      fieldScenario:
        'You are wiring a new single-family house. Rule 26-720(b) says all receptacles must be 5-15R or 5-20R. In the kitchen, Rule 26-722(d)(iii) requires enough split or 5-20R receptacles along counters so no point on the wall line is more than 900 mm from a receptacle — sinks and surfaces under 300 mm don\'t count. The peninsular counter (700 mm × 320 mm) needs at least one receptacle per Rule 26-722(d)(v). The island counter (1100 mm × 500 mm) needs at least one receptacle per Rule 26-722(d)(iv).\n\nThe refrigerator requires one dedicated receptacle (Rule 26-722(d)(i)). The dishwasher receptacle goes inside the lower cabinet with interlock — Rule 26-720(i) requires it to be de-energized unless the cabinet door is fully opened.\n\nIn the living room, Rule 26-722(a) requires duplex receptacles so no point along the floor line is more than 1.8 m horizontally from a receptacle. Usable wall space means at least 900 mm wide (Rule 26-722(c)), excluding doorways, windows to floor, and fireplaces.\n\nIn the hallway, Rule 26-722(e) requires no point more than 4.5 m from a duplex receptacle, measured by shortest cord path through doorways.\n\nIn the bathroom, Rule 26-720(f) requires a receptacle within 1 m of the wash basin, and Rule 26-720(g) requires it to be at least 1 m but not less than 500 mm horizontally from the bathtub/shower (without piercing walls).\n\nIn the utility room and laundry room, Rule 26-720(e) requires at least one duplex receptacle each. In the unfinished basement, Rule 26-720(e)(iv) requires at least one duplex receptacle.\n\nOutside, Rule 26-724(a) requires at least one outdoor receptacle accessible from grade. In the attached garage, Rule 26-724(b) requires a receptacle accessible from floor level per car space, and Rule 26-724(c) requires a dedicated receptacle within 1 m of each cord-connected overhead garage door opener.\n\nA central vacuum system needs a dedicated receptacle per Rule 26-720(l). For a residential building with public corridors, Rule 26-720(m) requires a duplex receptacle in each 10 m of corridor length.',
      keyPoints: [
        'All residential receptacles must be CSA 5-15R or 5-20R (Rule 26-720(b))',
        'Receptacles cannot face up in kitchen/dining counters (Rule 26-720(c))',
        'Minimum one duplex receptacle in laundry, utility, unfinished basement, washing machine space (Rule 26-720(e))',
        'Bathroom/washroom with wash basin: receptacle within 1 m of basin (Rule 26-720(f))',
        'Bathroom receptacles: 1 m minimum (but not less than 500 mm) from tub/shower, horizontal, without piercing walls (Rule 26-720(g))',
        'No receptacles in cabinets/cupboards except factory-integral, dedicated appliances, microwaves, range hoods (Rule 26-720(h))',
        'Cabinet receptacles for dishwashers/disposals: de-energized unless cabinet door fully opened (Rule 26-720(i))',
        'Controlled outlet / half-switched duplex can count as wall-mounted receptacle (Rule 26-720(k))',
        'Central vacuum system: dedicated receptacle required (Rule 26-720(l))',
        'Residential public corridor: at least one duplex receptacle each 10 m or fraction (Rule 26-720(m))',
        'EV supply equipment receptacles per Rule 86-306 where NBCC requires (Rule 26-720(n))',
        'Dwelling finished walls: no point > 1.8 m horizontal from a receptacle along floor line (Rule 26-722(a))',
        'Usable wall space = >= 900 mm wide; exclude doorways, door-swing, window-to-floor, fireplaces (Rule 26-722(c))',
        'Kitchen counter receptacles: no point > 900 mm from a receptacle (Rule 26-722(d)(iii))',
        'Island counter >= 600 × 300 mm: >= 1 receptacle (Rule 26-722(d)(iv))',
        'Peninsular counter >= 600 × 300 mm: >= 1 receptacle (Rule 26-722(d)(v))',
        'Hallway: no point > 4.5 m from duplex receptacle by shortest cord path (Rule 26-722(e))',
        'Single dwelling: outdoor duplex readily accessible from grade (Rule 26-724(a))',
        'Single dwelling: receptacle per car space in garage/carport (Rule 26-724(b))',
        'Single dwelling: dedicated receptacle within 1 m of each cord-connected garage door opener (Rule 26-724(c))',
      ],
      diagramaMermaid: `graph TD
    A["Residential\\nReceptacles\\n(26-720 to 724)"] --> B["26-720\\nAll residential"]
    A --> C["26-722\\nDwelling units"]
    A --> D["26-724\\nSingle dwellings"]
    B --> B1["5-15R / 5-20R only"]
    B --> B2["Not facing up\\nin counters"]
    B --> B3["Bathroom: <= 1 m\\nfrom basin"]
    B --> B4["Corridor: every 10 m"]
    C --> C1["Wall: <= 1.8 m\\nto a receptacle"]
    C --> C2["Kitchen counter:\\n<= 900 mm"]
    C --> C3["Islands/peninsulas:\\n>= 600 x 300 mm"]
    C --> C4["Hallway: <= 4.5 m"]
    D --> D1["Outdoor accessible\\nfrom grade"]
    D --> D2["Car space in\\ngarage/carport"]
    D --> D3["1 m of garage\\ndoor opener"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'ruler', title: '1.8 m Wall Rule', note: 'No point along wall > 1.8 m from receptacle — Rule 26-722(a)', color: 'sky' },
        { icon: 'ruler', title: '900 mm Counters', note: 'Kitchen counter: no point > 900 mm from a receptacle — Rule 26-722(d)(iii)', color: 'amber' },
        { icon: 'ruler', title: '4.5 m Hallway', note: 'Hallway: no point > 4.5 m from a duplex receptacle — Rule 26-722(e)', color: 'violet' },
        { icon: 'warning', title: 'Not Facing Up', note: 'Kitchen/dining counter receptacles cannot face up — Rule 26-720(c)', color: 'rose' },
        { icon: 'box', title: 'Island >= 600 x 300', note: 'Permanent islands/peninsulas >= 600 x 300 mm need a receptacle — Rule 26-722(d)(iv)(v)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 16. ELECTRIC HEATING & COOKING APPLIANCES (Rules 26-740 to 26-750)
    // =========================================================================
    {
      id: '26-heating-cooking',
      title: 'Electric Heating & Cooking Appliances',
      rules: 'Rules 26-740 to 26-750',
      explanation:
        'These rules apply to fixed electric heating and cooking appliances in all occupancies, including kitchens and laundries.\n\nRule 26-740 (Location of non-portable appliances): Non-portable electric heating and cooking appliances shall be installed so that the danger of igniting adjacent combustible material is reduced to a minimum.\n\nRule 26-742 (Separate built-in cooking units): Tap conductors feeding individual built-in cooking units from a single branch circuit shall be permitted to be smaller than the branch circuit conductors, provided that the tap conductors (a) are not more than 7.5 m in length; (b) have an ampacity not less than the ampere rating of the built-in cooking unit they supply; and (c) have an ampacity not less than one-third the ampere rating of the branch circuit overcurrent device.\n\nRule 26-744 (Supply connections for appliances): (1) Except as permitted in Subrule 10), all electric heating and cooking appliances shall have only ONE point of connection for supply. (2) An electric clothes dryer with input exceeding 1500 W at 115 V but not exceeding 30 A, intended for installation in a dwelling unit, shall have a CSA 14-30R receptacle installed for its supply. (3) Such a dryer shall be cord-connected using a cord and attachment plug of CSA 14-30P to the receptacle in Subrule 2). (4) A free-standing electric range in a dwelling unit with calculated demand 50 A or less shall have a CSA 14-50R receptacle installed for its supply. (5) The receptacle in Subrule 4) may be connected to a branch circuit rated not less than 40 A. (6) The range receptacle shall be installed (a) above the finished floor not more than 130 mm to the center; (b) as near midpoint as practicable along the floor line of wall space intended for the range; and (c) with the U-ground slot oriented to either side. (7) A free-standing range with demand 50 A or less shall be cord-connected using a 14-50P. (8) Appliances intended for connection by a Section 12 wiring method may be cord-connected using an attachment plug and receptacle. (9) Receptacles required by Subrules 2) and 4) shall be flush-mounted wherever practicable. (10) A permanently connected heating/cooking appliance provided with multiple points of connection may be supplied from more than one branch circuit, provided (a) the appliance is marked accordingly; and (b) connection to the different branch circuits conforms to Rule 14-414.\n\nRule 26-746 (Appliances exceeding 1500 W): (1) Every electric heating and cooking appliance rated more than 1500 W shall be supplied from a branch circuit used solely for one appliance, except that more than one may be connected to a single circuit provided: (a) a multiple-throw manually operated device permits only one appliance to be energized at a time; or (b) an automatic device limits the total load to a value that will not cause operation of the overcurrent devices. (2) Every such appliance shall be controlled by an indicating switch in the circuit or on the appliance, except (a) if the rating does not exceed 30 A, an attachment plug and receptacle may be used instead of a switch; and (b) if the appliance has more than one individual heating element, each controlled by a switch, no main switch need be provided. (3) Two or more separate built-in cooking units shall be considered as one appliance.\n\nRule 26-748 (Signals for heated appliances): Where glue pots, soldering irons, or appliances intended to be applied to combustible materials are used in other than dwelling units, (a) each appliance or group of appliances shall be provided with an indicating switch and a red pilot light; or (b) each appliance shall be equipped with an integral temperature-limiting device, in which case the pilot light may be omitted where a deviation has been allowed per Rule 2-030.\n\nRule 26-750 (Control of ventilation of commercial cooking equipment): Where a fan is used to ventilate commercial cooking equipment, the control for the fan motor shall be readily accessible, within reach of the cooking equipment, and external to the ventilation duct or hood.',
      fieldScenario:
        'You are wiring a new kitchen in a single-family home. Rule 26-744(4) requires a CSA 14-50R receptacle for a free-standing range rated 50 A or less. Rule 26-744(5) permits the range circuit to be rated 40 A or more. Rule 26-744(6) requires the receptacle mounted within 130 mm of the finished floor to the center, near the midpoint of the range wall space, with the U-ground slot to either side. Rule 26-744(7) requires the range to be cord-connected with a 14-50P. The receptacle is flush-mounted wherever practicable (Rule 26-744(9)).\n\nFor the clothes dryer (more than 1500 W, <= 30 A), Rule 26-744(2)(3) requires a 14-30R receptacle and 14-30P cord and plug.\n\nTwo separate built-in cooking units (a cooktop and a wall oven) are fed from a single branch circuit. Rule 26-742 allows tap conductors to each unit to be smaller than the branch circuit conductor, provided the tap is <= 7.5 m long, has ampacity at least equal to each unit\'s rating, and has ampacity at least one-third the branch circuit OCPD. Rule 26-746(3) notes that two built-in cooking units count as one appliance.\n\nThe oven is rated 4.5 kW (more than 1500 W). Rule 26-746(1) requires a dedicated branch circuit for it.\n\nIn a restaurant, commercial cooking equipment has an exhaust fan. Rule 26-750 requires the fan control to be readily accessible, within reach of the cooking equipment, and OUTSIDE the ventilation duct/hood.\n\nIn an industrial workshop using a soldering iron (Rule 26-748), the iron must have an indicating switch and red pilot light, or an integral temperature-limiting device.',
      keyPoints: [
        'Non-portable heating/cooking appliances: install to minimize danger of igniting combustibles (Rule 26-740)',
        'Tap to built-in cooking unit: <= 7.5 m, >= unit rating, >= 1/3 of branch circuit OCPD ampacity (Rule 26-742)',
        'Heating/cooking appliances: ONE point of connection unless marked for multiple (Rules 26-744(1), (10))',
        'Dwelling dryer > 1500 W at 115 V and <= 30 A: CSA 14-30R receptacle, cord-connected with 14-30P (Rule 26-744(2)(3))',
        'Free-standing range dwelling unit <= 50 A demand: CSA 14-50R receptacle (Rule 26-744(4))',
        'Range receptacle may be on branch circuit rated >= 40 A (Rule 26-744(5))',
        'Range receptacle: <= 130 mm above floor to centre, near midpoint, U-ground to either side (Rule 26-744(6))',
        'Free-standing range <= 50 A demand: cord-connected with 14-50P (Rule 26-744(7))',
        'Required receptacles flush-mounted wherever practicable (Rule 26-744(9))',
        'Appliances > 1500 W: dedicated branch circuit, or multi-throw/automatic load control (Rule 26-746(1))',
        '> 1500 W appliance: indicating switch (on-circuit or on-appliance); rating <= 30 A may use plug/receptacle instead (Rule 26-746(2))',
        'Two built-in cooking units = ONE appliance (Rule 26-746(3))',
        'Non-dwelling glue pots/soldering irons: indicating switch + red pilot light, OR integral temp limiter (Rule 26-748)',
        'Commercial cooking exhaust fan: control readily accessible, within reach, external to duct/hood (Rule 26-750)',
      ],
      diagramaMermaid: `graph TD
    A["Heating & Cooking\\n(26-740 to 750)"] --> B["26-742\\nBuilt-in cooking\\ntaps"]
    A --> C["26-744\\nSupply connections"]
    A --> D["26-746\\n> 1500 W"]
    A --> E["26-750\\nCommercial fan"]
    B --> B1["<= 7.5 m tap\\n>= unit rating\\n>= 1/3 branch"]
    C --> C1["Dryer: 14-30R\\n> 1500 W, <= 30 A"]
    C --> C2["Range: 14-50R\\nor less demand"]
    C --> C3["Range: <= 130 mm\\nabove floor"]
    D --> D1["Dedicated circuit\\nOR load control"]
    D --> D2["Indicating switch\\nunless <= 30 A plug"]
    E --> E1["Accessible external\\nto duct/hood"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: '14-50R Range', note: 'Dwelling free-standing range <= 50 A demand: 14-50R receptacle — Rule 26-744(4)', color: 'sky' },
        { icon: 'bolt', title: '14-30R Dryer', note: 'Dwelling dryer > 1500 W, <= 30 A: 14-30R receptacle — Rule 26-744(2)', color: 'amber' },
        { icon: 'ruler', title: '130 mm Height', note: 'Range receptacle <= 130 mm to centre above floor — Rule 26-744(6)', color: 'violet' },
        { icon: 'power', title: '1500 W Threshold', note: '> 1500 W appliance gets a dedicated branch circuit — Rule 26-746(1)', color: 'rose' },
        { icon: 'fire', title: 'Fan External', note: 'Commercial cooking fan control external to duct/hood — Rule 26-750', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 17. HEATING EQUIPMENT (Rules 26-800 to 26-808)
    // =========================================================================
    {
      id: '26-heating-equipment',
      title: 'Heating Equipment — Solid/Liquid/Gaseous Fuel Systems',
      rules: 'Rules 26-800 to 26-808',
      explanation:
        'These rules apply to non-portable heating equipment that burns solid, liquid, or gaseous fuel (furnaces, boilers, water heaters with gas/oil). They do NOT apply to purely electric heating.\n\nRule 26-800 (Scope): Rules 26-802 to 26-808 apply to circuits supplying power for the operation and control of non-portable heating equipment that uses solid, liquid, or gaseous fuel.\n\nRule 26-802 (Mechanical protection of cables): Cables for all branch circuit or tap conductors within 1.5 m from the floor shall be adequately protected from mechanical damage.\n\nRule 26-804 (Fuel burner safety controls): Fuel burner safety controls shall be installed in accordance with the requirements of CSA C22.2 No. 3.\n\nRule 26-806 (Heating equipment rated 117 kW and less): (1) Except as permitted by Subrule 3), all electric power for a heating unit and associated equipment operating in connection with it shall be obtained from a single branch circuit that shall be used for no other purpose. (2) Circulating pumps and similar equipment need not be considered as associated equipment, provided such equipment is not essential for safe operation of the heating unit. (3) Subrule 1) shall not apply to a water heater using a gaseous fuel. (4) The branch circuit shall be permitted to be tapped as necessary to supply the various pieces of associated equipment, but there shall be no overcurrent protection supplied in the tap to any piece of associated equipment the operation of which is essential to proper operation of the heating unit, unless the control equipment is such that the heating unit will be shut down if the associated equipment fails to function due to operation of the overcurrent device. (5) Suitable disconnecting means shall be provided for the branch circuit. (6) The disconnecting means shall be permitted to be a branch circuit breaker at the distribution panelboard, provided that the panelboard is located between the furnace and the point of entry to the area where the furnace is located. (7) Where a separate switch is required due to the unsuitable location of the branch circuit breaker, it shall (a) NOT be located on the furnace nor in a location that can be reached only by passing close to the furnace; and (b) be marked to indicate the equipment it controls.\n\nRule 26-808 (Heating equipment rated at more than 117 kW): (1) All electric power for the heating unit and associated equipment shall be obtained from a single feeder or branch circuit that shall not be used for other purposes. (2) A suitable disconnecting means shall be provided for the feeder or branch circuit.',
      fieldScenario:
        'You are wiring a residential oil-fired furnace (rated below 117 kW). Rule 26-806(1) requires a dedicated branch circuit for the furnace and its associated equipment. Rule 26-806(2) says the circulating pump need not be considered "associated" if it isn\'t essential to safe operation of the furnace — but because the zone valve controller IS essential, it must be on the same circuit without an individual overcurrent device in the tap (Rule 26-806(4)), unless the controls are designed to shut down the furnace if the tap OCPD opens.\n\nThe cables on the furnace feed pass through the mechanical room within 1 m of the floor. Rule 26-802 requires mechanical protection for any cable within 1.5 m of the floor — you install armoured cable or route the NMD90 inside EMT for that segment.\n\nThe branch circuit disconnect is a 15 A breaker in the adjacent panelboard. Rule 26-806(6) permits this provided the panelboard is located between the furnace and the point of entry — you confirm the room layout. If it weren\'t, Rule 26-806(7) would require a separate switch, not on the furnace itself and not where it can only be reached by passing close to the furnace, and marked to indicate what it controls.\n\nFor a gas water heater with an electronic ignition control, Rule 26-806(3) exempts it from the single-dedicated-circuit rule of Subrule 1.\n\nThe fuel burner safety controls (flame detector, combustion limit, high-limit) must be installed per CSA C22.2 No. 3 (Rule 26-804).\n\nFor a large industrial boiler rated 200 kW (> 117 kW), Rule 26-808 requires a single feeder/branch circuit used for no other purpose and a suitable disconnect.',
      keyPoints: [
        'Rules 26-802 to 26-808 apply to non-portable heating equipment using solid/liquid/gaseous fuel (Rule 26-800)',
        'Cables within 1.5 m of floor must be mechanically protected (Rule 26-802)',
        'Fuel burner safety controls installed per CSA C22.2 No. 3 (Rule 26-804)',
        '<= 117 kW heating: single dedicated branch circuit, no other purpose (Rule 26-806(1))',
        'Circulating pumps not "associated" if not essential for safe operation (Rule 26-806(2))',
        '<= 117 kW exemption: gaseous-fuel water heaters (Rule 26-806(3))',
        'Taps to associated equipment permitted without individual OCPD if essential, OR with OCPD if controls shut heating unit down on tap trip (Rule 26-806(4))',
        'Disconnect required for the branch circuit (Rule 26-806(5))',
        'Disconnect may be the panelboard breaker if the panelboard is between the furnace and the entry to the furnace area (Rule 26-806(6))',
        'Separate switch: not on furnace, not in location requiring passing close to furnace, marked (Rule 26-806(7))',
        '> 117 kW heating: single feeder or branch circuit used for nothing else, with disconnect (Rule 26-808)',
      ],
      diagramaMermaid: `graph TD
    A["Heating Equipment\\n(Non-electric fuel)\\n(Rules 26-800 to 808)"] --> B["26-802\\nCable protection\\n< 1.5 m floor"]
    A --> C["26-804\\nFuel burner\\nCSA C22.2 No. 3"]
    A --> D["26-806\\n<= 117 kW"]
    A --> E["26-808\\n> 117 kW"]
    D --> D1["Single dedicated\\nbranch circuit"]
    D --> D2["Disconnect:\\npanel breaker or\\nseparate switch"]
    D --> D3["Tap OCPD only if\\nunit shuts down on trip"]
    D --> D4["Gas water heater\\nexempt"]
    E --> E1["Single feeder\\nor branch circuit"]
    E --> E2["Suitable disconnect"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: '117 kW Threshold', note: 'Single branch circuit below; single feeder/branch circuit above — Rules 26-806/808', color: 'rose' },
        { icon: 'ruler', title: '1.5 m Cable Protect', note: 'Mechanical protection for cables within 1.5 m of floor — Rule 26-802', color: 'amber' },
        { icon: 'lock', title: 'Disconnect Location', note: 'Not on furnace; not reachable only by passing close to furnace — Rule 26-806(7)', color: 'sky' },
        { icon: 'shield', title: 'Fuel Burner Controls', note: 'Per CSA C22.2 No. 3 — Rule 26-804', color: 'violet' },
        { icon: 'power', title: 'Gas Water Heater', note: 'Exempt from the single-dedicated-circuit requirement — Rule 26-806(3)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 18. PIPE ORGANS, SUBMERSIBLE PUMPS & DATA PROCESSING (Rules 26-900 to 26-1000)
    // =========================================================================
    {
      id: '26-organs-pumps-data',
      title: 'Pipe Organs, Submersible Pumps & Data Processing',
      rules: 'Rules 26-900 to 26-1000',
      explanation:
        'The final rules in Section 26 cover three specialized equipment categories: pipe organs, submersible pumps (both well and body-of-water), and permanently connected data processing units.\n\nRule 26-900 (Installation of electrically operated pipe organs): (1) Organ blower motors, when located remote from the organ console, shall be provided with a pilot lamp located at the organ console. (2) A receptacle shall be provided in the organ loft to facilitate the use of a portable lamp.\n\nRule 26-950 (Special terminology — Submersible pumps): Defines two key terms:\n- "Deep well submersible pump" = a submersible pump intended for use in a well casing or similar protective enclosure that does not have provision for electrical connection by conduit.\n- "Submersible pump" = a pump-motor combination where the enclosed electrical equipment is intended to operate submerged in water.\n\nRule 26-952 (General — Submersible pumps): Submersible pumps shall be installed in accordance with the manufacturer\'s instructions and Rule 26-954 or 26-956 as applicable.\n\nRule 26-954 (Deep well submersible pumps installed in wells): Deep well submersible pumps installed in wells shall comply with the following: (a) the power supply cable from the well head to the pump shall be marked -40 °C and shall be (i) submersible pump cable; (ii) twisted assemblies of Type RWU75, RWU90, TWU, or TWU75; or (iii) Type SOW, G, G-GC, or W; (b) the supply cables shall be suitably supported at intervals not exceeding 3 m to the discharge pipe; (c) the supply cables shall be run from the well head to the main distribution panelboard in accordance with the requirements of Section 12; and (d) pumps shall be bonded to ground in accordance with Section 10 except that when the discharge pipe is of metal and is continuous from the pump to the well head, the equipment bonding conductor shall be permitted to be terminated by connection to a discharge pipe at the well head location.\n\nRule 26-956 (Submersible pumps installed in bodies of water): (1) Submersible pumps installed in bodies of water shall comply with the following: (a) the voltage supplying the submersible pump shall NOT exceed 150 volts-to-ground; (b) the pump motor shall be bonded to ground by a bonding conductor that (i) is sized in accordance with Rule 10-616; (ii) is integral with the supply cable or within the same protective enclosure as the power supply cables if single-conductor cables are used; (iii) has the same type of insulation as the supply conductors; and (iv) terminates adjacent to the location where the branch circuit conductors receive their supply; (c) the wiring method to the pump shall be marked -40 °C and shall be (i) Type SOW, G, G-GC, W, or jacketed submersible pump cable; or (ii) where enclosed in non-metallic rigid or flexible conduit: (A) unjacketed submersible pump cable; (B) single-conductor cables; or (C) twisted assemblies of Type RWU75, RWU90, TWU, or TWU75; (d) ground fault protection shall be provided to de-energize all normally ungrounded conductors supplying the submersible pump, with a ground fault current trip setting adjusted to function as low as practicable to permit normal operation, but in no case shall the ground fault current setting be greater than 10 mA for an operating time period not exceeding 2.7 s; and (e) the supply cables shall be run from an outdoor connection facility, above or below ground, to the main distribution panelboard per Section 12. (2) Notwithstanding 1)(a), submersible pumps in bodies of water may operate at voltages exceeding 150 volts-to-ground where (a) a deviation has been allowed per Rule 2-030; (b) the operating voltage does not exceed 5.5 kV; (c) the electrical installation is maintained by qualified electrical maintenance staff; and (d) the area around the submersible pump is protected from access by the public by fencing, cribbing, or isolation and so marked.\n\nRule 26-1000 (Permanently connected data processing units): Branch circuits supplying permanently connected data processing units shall not supply any other types of loads.',
      fieldScenario:
        'You are installing an electrically operated pipe organ in a church. The blower motor is in a mechanical room remote from the organ console. Rule 26-900(1) requires a pilot lamp at the organ console so the organist knows whether the blower is running. Rule 26-900(2) requires a receptacle in the organ loft for portable inspection lamps.\n\nFor a residential well installation, a deep-well submersible pump is used. Rule 26-954(a) requires the power supply cable to be marked -40 °C and be a listed submersible pump cable, RWU/TWU twisted assembly, or SOW/G/G-GC/W cord. The cable is supported to the discharge pipe at intervals not exceeding 3 m (Rule 26-954(b)). From the well head, the cable runs per Section 12 to the panelboard (Rule 26-954(c)). Rule 26-954(d) allows the bonding conductor to terminate on the metal discharge pipe at the well head provided the pipe is metal and continuous from pump to well head.\n\nFor a decorative fountain pump installed in a pond, Rule 26-956(1)(a) limits the supply voltage to 150 V-to-ground or less — so a 120 V line-to-neutral circuit is acceptable, but a 240 V two-pole circuit is not without deviation. The motor is bonded to ground with a conductor sized per Rule 10-616, integral with the supply cable, with the same insulation type, terminating at the branch circuit origin (Rule 26-956(1)(b)).\n\nThe wiring method is -40 °C marked Type SOW cord (Rule 26-956(1)(c)(i)). Rule 26-956(1)(d) requires ground fault protection adjusted as low as practicable but not more than 10 mA trip at <= 2.7 s operating time.\n\nFor a municipal well with a submersible pump operating at 4.16 kV, Rule 26-956(2) permits voltages up to 5.5 kV with a Rule 2-030 deviation, maintained by qualified electrical staff, with fencing/cribbing restricting public access and suitable warning signage.\n\nIn an office server room, Rule 26-1000 requires the branch circuit supplying permanently connected data processing units NOT supply any other type of load.',
      keyPoints: [
        'Remote organ blower motor: pilot lamp at the organ console (Rule 26-900(1))',
        'Organ loft: receptacle for portable lamp (Rule 26-900(2))',
        'Deep well submersible pump definition: no conduit connection provision (Rule 26-950)',
        'Submersible pump: pump-motor with electrical equipment designed to operate submerged (Rule 26-950)',
        'Submersible pumps: install per manufacturer instructions + Rule 26-954 or 26-956 (Rule 26-952)',
        'Deep well: -40 °C marked cable — submersible pump cable, RWU/TWU twisted, or SOW/G/G-GC/W (Rule 26-954(a))',
        'Deep well: cable supported at intervals <= 3 m along discharge pipe (Rule 26-954(b))',
        'Deep well bonding may terminate on metal discharge pipe at well head if pipe is continuous (Rule 26-954(d))',
        'Body of water: supply voltage <= 150 V-to-ground (Rule 26-956(1)(a))',
        'Body of water: bonding conductor sized per Rule 10-616, integral with cable, same insulation, terminates at branch circuit origin (Rule 26-956(1)(b))',
        'Body of water cable: -40 °C marked SOW/G/G-GC/W or unjacketed submersible pump cable in non-metallic conduit (Rule 26-956(1)(c))',
        'Body of water: ground fault protection <= 10 mA trip at <= 2.7 s operating time (Rule 26-956(1)(d))',
        'Body of water > 150 V-to-ground: Rule 2-030 deviation, <= 5.5 kV, qualified staff, fenced/marked area (Rule 26-956(2))',
        'Permanently connected data processing units: branch circuits shall not supply any other types of loads (Rule 26-1000)',
      ],
      diagramaMermaid: `graph TD
    A["Specialty Equipment\\n(26-900 to 1000)"] --> B["26-900\\nPipe organs"]
    A --> C["26-950 to 956\\nSubmersible pumps"]
    A --> D["26-1000\\nData processing"]
    B --> B1["Pilot lamp at\\nconsole for remote\\nblower"]
    B --> B2["Receptacle in\\norgan loft"]
    C --> C1["26-954\\nDeep well:\\n-40 C cable\\n3 m supports"]
    C --> C2["26-956\\nBody of water:\\n<= 150 V-to-ground"]
    C --> C3["GF: 10 mA\\ntrip <= 2.7 s"]
    C --> C4["> 150 V: <= 5.5 kV,\\nqualified staff,\\nfenced"]
    D --> D1["Dedicated branch\\ncircuit - no other\\nloads"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C2 fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C3 fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'sun', title: 'Organ Pilot Lamp', note: 'Remote blower motor needs a pilot lamp at the console — Rule 26-900(1)', color: 'sky' },
        { icon: 'thermometer', title: '-40 C Cable Marking', note: 'Well and body-of-water submersible pump cables — Rules 26-954(a), 26-956(1)(c)', color: 'amber' },
        { icon: 'warning', title: '150 V-to-Ground Max', note: 'Submersible pumps in bodies of water: 150 V-to-ground unless deviation — Rule 26-956(1)(a)', color: 'rose' },
        { icon: 'bolt', title: '10 mA / 2.7 s GFP', note: 'Ground fault protection max 10 mA trip within 2.7 s — Rule 26-956(1)(d)', color: 'violet' },
        { icon: 'power', title: 'Data Processing Dedicated', note: 'Branch circuit cannot supply any other loads — Rule 26-1000', color: 'emerald' },
      ],
    },
  ],
}
