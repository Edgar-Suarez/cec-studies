import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 24 — Patient Care Areas (CEC 2021, CSA C22.1:21, pages 210–216)
 * COMPLETE — Every rule from 24-000 to 24-306 is covered.
 * Source: PDF scan "Section 24 — Patient care areas"
 */

export const section24Guide: StudyGuideSection = {
  section: '24',
  title: 'Section 24 — Patient Care Areas',
  description:
    'Section 24 governs electrical wiring and equipment in patient care areas of health care facilities and the essential electrical systems that keep them running if normal power fails. It classifies patient care areas as basic, intermediate, or critical; sets rules for circuits, bonding to ground, receptacles, and equipment; specifies requirements for single-phase and three-phase isolated power systems with line isolation monitors; and defines the vital, delayed vital, and conditional branches of essential electrical systems fed by emergency generators. Rules 24-000 through 24-306.',
  subsections: [
    // =========================================================================
    // 1. SCOPE & SPECIAL TERMINOLOGY (Rules 24-000 to 24-002)
    // =========================================================================
    {
      id: '24-scope-terminology',
      title: 'Scope & Special Terminology',
      rules: 'Rules 24-000 to 24-002',
      explanation:
        'Section 24 establishes the rules for electrical installations in health care facilities where patients receive diagnosis, therapy, or care. It also covers the essential electrical systems that must keep operating if normal power is lost.\n\nRule 24-000 (Scope): This Section applies to the installation of (a) electrical wiring and equipment within patient care areas of health care facilities; and (b) the portions of the electrical systems of health care facilities designated as essential electrical systems. Except as noted in Rules 24-104(7) and 24-108, this Section does NOT apply to installations of electrical communication systems as covered in Section 60, nor to radio and television installations as covered in Section 54. This Section supplements or amends the general requirements of this Code — it does not replace them.\n\nRule 24-002 (Special terminology): Defines the key terms used throughout the section:\n- Anaesthetizing location: any area of a health care facility where the induction and maintenance of general anaesthesia are routinely carried out in the course of the examination or treatment of patients.\n- Applied part: the part or parts of medical electrical equipment, including the patient leads, that come intentionally into contact with the patient to be examined or treated.\n- Basic care area: a patient care area where body contact between a patient and medical electrical equipment is neither frequent nor usual.\n- Body contact: an intentional contact at the skin surface or internally, but no direct contact to the heart.\n- Cardiac contact: an intentional contact directly to the heart by means of an invasive procedure.\n- Casual contact: contact by voluntary action with a device that has no applied part and is not intended to be connected to a patient.\n- Conditional branch: the portion of an essential electrical system in which circuits require power restoration by emergency service within 24 h, depending on special circumstances such as environmental or climatic conditions.\n- Critical care area: a patient care area that is an anaesthetizing location, or in which cardiac contact between a patient and medical electrical equipment is frequent or normal.\n- Delayed vital branch: the portion of an essential electrical system in which the circuits require power restoration within 2 min.\n- Emergency electrical power supply system: one or more electrical generator sets located on health care facility premises, intended to be available if all other supplies fail and capable of supplying all the loads of the essential electrical system.\n- Essential electrical system: one or more electrical generator sets located on health care facility premises, intended to be available if all other supplies fail and capable of supplying all the loads of the essential electrical system.\n- Hazard index: for a given set of conditions in an isolated power system, the current, expressed in milliamperes and consisting of resistive and capacitive leakage and fault currents, that would flow through a low impedance if the low impedance were to be connected between either isolated conductor and ground.\n- Health care facility: a set of physical infrastructure elements intended to support the delivery of specific health-related services.\n- Health care facility administration: the unit responsible for planning, organizing, directing, and controlling the health care facility in accordance with policies of the facility and government statutes.\n- Intermediate care area: a patient care area in which body contact between a patient and medical electrical equipment is frequent or normal.\n- Isolated system: an electrical distribution system in which no circuit conductor is connected directly to ground.\n- Line isolation monitor: a device that measures and displays the total hazard index of an isolated electrical system and provides warning when the index reaches a preset limit.\n- Normal supply: the main electrical supply into a building or a building complex; it may consist of one or more consumer services capable of supplying all loads in the building or building complex.\n- Patient: a person undergoing medical investigation or treatment.\n- Patient care area: an area intended primarily for the provision of diagnosis, therapy, or care.\n- Patient care environment: a zone in a patient care area that has been pre-selected for the accommodation of a patient bed, table, or other supporting mechanism, and for the accommodation of equipment involved in patient treatment, and that includes the space within the room 1.5 m beyond the perimeter of the bed, table, or other supporting mechanism in its normal location and to within 2.3 m of the floor.\n- Patient care environment bonding point: a common bus, in a patient care environment, that is bonded to ground, and that serves as a common point to which equipment and other bonding connections can be made by means of a group of jacks.\n- Total hazard index: the hazard index of a given isolated system with all appliances, including the line isolation monitor, connected.\n- Vital branch: the portion of an essential electrical system in which the circuits require power restoration within 10 s.',
      fieldScenario:
        'You are called to a new community hospital addition. Before touching a wire, you sit down with the health care facility administration and the electrical engineer to classify each room under Rule 24-002. The general medical/surgical ward beds are basic care areas — staff occasionally check vitals but body contact with medical electrical equipment is neither frequent nor usual. The intensive care unit (ICU) rooms and the dialysis unit are intermediate care areas — patients are frequently connected to monitors, IV pumps, and ventilators, so body contact is normal. The operating rooms and cardiac catheterization labs are critical care areas — they are anaesthetizing locations where invasive procedures occur and cardiac contact is frequent.\n\nYou mark the patient care environment in each room: the 1.5 m zone around the bed or table, up to 2.3 m above the floor. This is the three-dimensional box where stricter bonding, receptacle, and circuiting rules apply. You note that Section 24 does not cover the nurse call wiring in itself — that is Section 60 — but Rule 24-104(7) still requires the exposed metal parts of communication/radio/TV equipment in a patient care environment to be bonded per Section 24.',
      keyPoints: [
        'Section 24 covers wiring within patient care areas AND the essential electrical systems of health care facilities (Rule 24-000(1))',
        'Section 24 supplements the general CEC requirements; it does not replace them (Rule 24-000(3))',
        'Communications (Section 60) and radio/TV (Section 54) are excluded except for Rules 24-104(7) and 24-108 (Rule 24-000(2))',
        'Basic care area: body contact with medical electrical equipment is neither frequent nor usual (Rule 24-002)',
        'Intermediate care area: body contact with medical electrical equipment is frequent or normal (Rule 24-002)',
        'Critical care area: an anaesthetizing location OR where cardiac contact is frequent or normal (Rule 24-002)',
        'Patient care environment: 1.5 m around the bed/table and up to 2.3 m above the floor (Rule 24-002)',
        'Patient care environment bonding point: a grounded common bus with jacks for equipment bonding (Rule 24-002)',
        'Vital branch: power restoration within 10 s (Rule 24-002)',
        'Delayed vital branch: power restoration within 2 min (Rule 24-002)',
        'Conditional branch: power restoration within 24 h depending on special circumstances (Rule 24-002)',
        'Isolated system: no circuit conductor is connected directly to ground (Rule 24-002)',
        'Line isolation monitor: measures and displays total hazard index and warns at a preset limit (Rule 24-002)',
        'Hazard index: resistive + capacitive leakage and fault current between an isolated conductor and ground (Rule 24-002)',
      ],
      diagramaMermaid: `graph TD
    A["Patient Care Area\\n(Rule 24-002)"] --> B["BASIC Care Area\\nBody contact neither\\nfrequent nor usual"]
    A --> C["INTERMEDIATE Care Area\\nBody contact frequent\\nor normal"]
    A --> D["CRITICAL Care Area\\nAnaesthetizing OR\\ncardiac contact frequent"]
    D --> E["Applies Rules\\n24-110 to 24-116\\n+ isolated systems"]
    C --> E
    B --> F["Applies Rules\\n24-102 to 24-108"]
    A --> G["Patient Care\\nEnvironment\\n1.5 m x 2.3 m high"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#065f46,stroke:#10b981,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style G fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Three Care Area Classes', note: 'Basic, Intermediate, Critical — based on how often patients contact medical equipment (Rule 24-002)', color: 'sky' },
        { icon: 'ruler', title: 'Patient Care Environment Box', note: '1.5 m around the bed/table and up to 2.3 m above the floor (Rule 24-002)', color: 'emerald' },
        { icon: 'warning', title: 'Critical = Anaesthetizing', note: 'Anaesthetizing locations and rooms with cardiac contact are always critical care (Rule 24-002)', color: 'rose' },
        { icon: 'bolt', title: 'Vital Branch = 10 s', note: 'Power must be restored within 10 s on the vital branch (Rule 24-002)', color: 'amber' },
        { icon: 'power', title: 'Isolated System = No Ground', note: 'No circuit conductor is connected directly to ground in an isolated system (Rule 24-002)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 2. BASIC CARE AREAS — CIRCUITS (Rules 24-100 to 24-102)
    // =========================================================================
    {
      id: '24-basic-care-circuits',
      title: 'Basic Care Areas — Circuits',
      rules: 'Rules 24-100 to 24-102',
      explanation:
        'Rules 24-100 through 24-116 establish the requirements for all three classes of patient care areas — basic, intermediate, and critical. Rule 24-102 focuses specifically on the branch circuits that feed basic care areas, but its requirements carry forward to the higher classes.\n\nRule 24-100 (Rules for patient care areas): Rules 24-102 to 24-116 shall apply to those patient care areas that have been designated as (a) basic care areas; (b) intermediate care areas; or (c) critical care areas.\n\nRule 24-102 (Circuits in basic care areas):\n(1) The branch circuits supplying receptacles or permanently connected equipment in basic care areas shall be supplied from a grounded distribution system.\n(2) Branch circuit insulated conductors shall be copper and shall be sized not smaller than No. 12 AWG.\n(3) Except as permitted by Subrule (4), branch circuits that supply receptacles or permanently connected medical electrical equipment within a patient care environment shall supply only loads within that patient care environment.\n(4) A branch circuit described in Subrule (3) shall be permitted to be extended to supply loads within one additional patient care environment, provided that the two patient care environments are adjacent to each other.\n(5) Where an electrical system in a health care facility includes loads that are designated as essential in accordance with Subrule 24-302(1), each patient care environment described in Subrule (3), or pair of patient care environments described in Subrule (4), shall be supplied by at least one branch circuit from a panelboard that is part of an essential electrical system.\n(6) Branch circuits shall be supplied at not more than 150 volts-to-ground, unless designated for special-purpose use (e.g., to supply mobile X-ray, laser, and similar equipment) or for permanently connected equipment.\n(7) A branch circuit that supplies receptacles or permanently connected electrical equipment as described in Rule 24-300 shall not supply receptacles or permanently connected equipment that is not part of the essential electrical system.\n(8) A circuit consisting of conductors connected to communication or nurse call equipment that is installed within a patient care area shall be deemed a Class 1 circuit in accordance with the applicable Rules of Section 16.',
      fieldScenario:
        'You are wiring a medical ward with six private rooms designated as basic care areas. Each room has a hospital bed with its 1.5 m patient care environment around it. Rule 24-102(1) requires the branch circuits to be supplied from a grounded distribution system — a standard 120/240 V grounded service works. Rule 24-102(2) requires copper conductors sized No. 12 AWG minimum.\n\nYou start to plan the layout. Rule 24-102(3) means a branch circuit feeding the receptacles at Bed A cannot also feed receptacles at Bed B — each patient care environment gets its own branch circuit. However, Rule 24-102(4) lets you extend that branch to one adjacent patient care environment — useful in semi-private rooms where two beds sit side-by-side. Rooms C and D are adjacent, so one branch circuit can feed both.\n\nThe hospital has a generator-backed essential electrical system. Rule 24-102(5) requires at least one branch circuit per patient care environment (or per pair of adjacent environments) to come from a panelboard that is part of the essential electrical system — so when the utility fails, at least one receptacle near each bed stays alive.\n\nRule 24-102(6) limits circuits to 150 V-to-ground — so standard 120 V works, but you could not use 240 V-to-ground for a bedside receptacle. Exceptions exist for special-purpose equipment like mobile X-ray or laser units and for permanently connected equipment. Rule 24-102(7) says a circuit feeding essential-system loads in a patient care area cannot also feed non-essential equipment — no mixing.\n\nThe nurse call wiring between the bed station and the nurses desk is a Class 1 circuit per Rule 24-102(8) and Section 16.',
      keyPoints: [
        'Rules 24-102 to 24-116 apply to basic, intermediate, and critical care areas (Rule 24-100)',
        'Basic care area branch circuits must be from a grounded distribution system (Rule 24-102(1))',
        'Conductors shall be copper, No. 12 AWG minimum (Rule 24-102(2))',
        'A branch circuit feeding a patient care environment shall supply only loads within that environment (Rule 24-102(3))',
        'A branch circuit may be extended to ONE adjacent patient care environment (Rule 24-102(4))',
        'Each patient care environment (or adjacent pair) needs at least one branch from an essential-system panelboard (Rule 24-102(5))',
        'Branch circuits limited to 150 V-to-ground — exceptions for special-purpose and permanently connected equipment (Rule 24-102(6))',
        'Essential-system circuits shall not supply equipment that is not part of the essential electrical system (Rule 24-102(7))',
        'Communication/nurse call circuits in a patient care area are treated as Class 1 circuits per Section 16 (Rule 24-102(8))',
      ],
      diagramaMermaid: `graph TD
    A["Basic Care Area\\nBranch Circuit\\n(Rule 24-102)"] --> B["Grounded distribution\\nsystem\\n(1)"]
    A --> C["Copper\\nNo. 12 AWG min\\n(2)"]
    A --> D["Serves ONE patient\\ncare environment\\n(3)"]
    D --> E["May extend to ONE\\nadjacent environment\\n(4)"]
    A --> F["Max 150 V-to-ground\\n(6)"]
    F --> G["Exceptions:\\nX-ray, laser,\\npermanent equipment"]
    A --> H["At least 1 circuit from\\nessential panel per\\nenvironment (5)"]
    A --> I["Nurse call = Class 1\\nper Section 16 (8)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0
    style H fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Copper #12 Minimum', note: 'Branch circuit conductors must be copper, No. 12 AWG or larger (Rule 24-102(2))', color: 'sky' },
        { icon: 'box', title: 'One Environment Per Circuit', note: 'A branch circuit may serve only its own patient care environment — plus ONE adjacent (Rules 24-102(3)(4))', color: 'emerald' },
        { icon: 'bolt', title: '150 V-to-Ground Limit', note: 'Unless for special-purpose or permanently connected equipment (Rule 24-102(6))', color: 'amber' },
        { icon: 'power', title: 'Essential System Feed', note: 'Each environment needs at least one circuit from an essential-system panelboard (Rule 24-102(5))', color: 'rose' },
        { icon: 'lock', title: 'No Mixing with Non-Essential', note: 'Essential-system circuits cannot feed non-essential equipment (Rule 24-102(7))', color: 'violet' },
      ],
    },

    // =========================================================================
    // 3. BASIC CARE AREAS — BONDING TO GROUND (Rule 24-104)
    // =========================================================================
    {
      id: '24-basic-care-bonding',
      title: 'Basic Care Areas — Bonding to Ground',
      rules: 'Rule 24-104',
      explanation:
        'Bonding is the core safety concept in patient care areas. Because patients may be in simultaneous contact with multiple pieces of electrical equipment — and may have reduced resistance to ground through applied parts — every exposed conductive surface in a patient care environment must be bonded together at the same potential. Rule 24-104 spells out exactly how.\n\nRule 24-104 (Bonding to ground in basic care areas):\n(1) Bonding conductors shall be insulated unless they are (a) installed in non-metallic conduit; or (b) incorporated into a cable that is constructed in such a manner that contact between any metal shield or armour, if it is present, and a bare bonding conductor is not possible.\n(2) All receptacles and other permanently connected equipment shall be bonded to ground by copper equipment bonding conductors, sized in accordance with Table 16 but in no case smaller than No. 12 AWG, installed in accordance with Rule 10-614 and run with the circuit conductors in accordance with the following:\n  (a) each multi-wire branch circuit shall be provided with its own equipment bonding conductor;\n  (b) except as permitted by Items (c) and (d), each 2-wire branch circuit supplying a receptacle in a patient care environment shall be provided with its own equipment bonding conductor;\n  (c) when the receptacles in a patient care environment are supplied from two 2-wire branch circuits in the same raceway, a single equipment bonding conductor shall be permitted to be shared by the two circuits; or\n  (d) when receptacles intended for a pair of adjacent patient care environments are supplied by three 2-wire branch circuits and one of the circuits is intended to be shared by both environments, the three circuits shall be permitted to share two equipment bonding conductors.\n(3) Utilization equipment bonding conductors required by Subrules (2), (6), and (7) shall terminate either at the panelboard supplying the branch circuits to the patient care environment from which they arise or on a separately installed busbar that is bonded to that panelboard.\n(4) Where branch circuits for a patient care environment are supplied from more than one panelboard, the panelboards shall be bonded together with a single copper equipment bonding conductor sized in accordance with Table 16, but in no case smaller than No. 6 AWG.\n(5) Each panelboard supplying branch circuits as described in Rule 24-102(3) shall be bonded to ground by a copper utilization equipment bonding conductor that is (a) installed in the same raceway as the circuit conductors supplying that panelboard or installed in accordance with Rule 10-614, and sized in accordance with Table 16; or (b) incorporated into the assembly of the cable supplying that panelboard.\n(6) Each item of three-phase equipment shall be bonded to ground with a copper equipment bonding conductor that is (a) sized in accordance with Table 16, but is in no case smaller than No. 12 AWG; and (b) connected to its own terminal at the equipment and the panelboard.\n(7) If they could become energized, exposed non-current-carrying metal parts of communication, radio, or television equipment, other than telephone sets, in a patient care environment shall be bonded to ground using a copper equipment bonding conductor sized in accordance with Subrule (6), by (a) connection to the bonding screw in the communication section of a barriered and ganged metal outlet box that serves a patient care environment; or (b) connection to an equipment bonding conductor or bonding busbar for that patient care environment as identified in Subrule (3).\n(8) If they could become energized, exposed non-current-carrying metal parts of non-electrical equipment, in a patient care environment, shall be bonded to ground using a copper equipment bonding conductor sized in accordance with Subrule (6) by connection to an equipment bonding conductor or bonding busbar for that patient care environment as identified in Subrule (3).\n(9) Notwithstanding Subrules (1) and (2), recessed and surface-mounted luminaires located more than 2.3 m above floor level, and their associated switches located outside a patient care environment, shall be permitted to be bonded in accordance with Section 10.',
      fieldScenario:
        'You are wiring a four-bed bay in a medical ward — four adjacent patient care environments. You pull a multi-wire branch circuit (two hots, one neutral) to feed bedside receptacles. Rule 24-104(2)(a) requires this circuit to have its own dedicated copper bonding conductor sized per Table 16, minimum No. 12 AWG.\n\nBed 1 and Bed 2 share a single 2-wire branch circuit. Each receptacle needs a bonding conductor, but because both receptacles are in the same raceway and supplied from a shared 2-wire circuit pair, Rule 24-104(2)(c) lets you use ONE shared equipment bonding conductor for both. Bed 3 and Bed 4 are an adjacent pair, and you supply them with three 2-wire branch circuits where one is shared between the two environments — Rule 24-104(2)(d) allows three circuits to share TWO equipment bonding conductors.\n\nAll those bonding conductors terminate at the panelboard serving that patient care environment, or on a bonding busbar that is itself bonded to that panelboard (Rule 24-104(3)). Because this wing happens to be fed from two different panelboards (one normal, one essential), you run a single copper bonding conductor between the two panels, sized per Table 16 but not smaller than No. 6 AWG (Rule 24-104(4)).\n\nA three-phase dialysis machine is installed in Bed 3. Rule 24-104(6) requires a copper bonding conductor to this machine, sized per Table 16, minimum No. 12 AWG, with its own dedicated terminal at both the equipment and at the panelboard.\n\nA TV bracket on the wall above Bed 2 is metal. Its exposed parts could become energized if a loose internal wire touched the chassis — Rule 24-104(7) requires bonding to the patient care environment bonding busbar. A metal IV pole — non-electrical but nearby and could pick up stray voltage — Rule 24-104(8) requires it to be bonded as well.\n\nThe recessed ceiling fixtures 2.8 m above the floor are outside the 2.3 m patient care environment box. Rule 24-104(9) permits these to be bonded per Section 10, using standard methods — no special bonding busbar required.',
      keyPoints: [
        'Bonding conductors must be insulated UNLESS in non-metallic conduit or a cable where contact with metal shield is impossible (Rule 24-104(1))',
        'Equipment bonding conductors: copper, sized per Table 16, No. 12 AWG minimum, run with the circuit (Rule 24-104(2))',
        'Each multi-wire branch circuit needs its own bonding conductor (Rule 24-104(2)(a))',
        'Each 2-wire branch circuit to a patient care environment needs its own bonding conductor (Rule 24-104(2)(b))',
        'Exception: two 2-wire circuits in the same raceway may share ONE bonding conductor (Rule 24-104(2)(c))',
        'Exception: three 2-wire circuits for adjacent environments (one shared) may share TWO bonding conductors (Rule 24-104(2)(d))',
        'All equipment bonding conductors terminate at the panelboard or on a bonding busbar bonded to it (Rule 24-104(3))',
        'Panelboards feeding the same environment: bonded together with No. 6 AWG minimum (Rule 24-104(4))',
        'Each patient care environment panelboard: bonded to ground with a copper conductor per Table 16 (Rule 24-104(5))',
        'Three-phase equipment: bonded by copper conductor with its own dedicated terminal at both ends, min No. 12 AWG (Rule 24-104(6))',
        'Communication/radio/TV exposed metal (not telephone sets) must be bonded to the environment bonding bus (Rule 24-104(7))',
        'Non-electrical equipment exposed metal (that could become energized) must also be bonded to the environment bus (Rule 24-104(8))',
        'Luminaires > 2.3 m above floor and switches outside the environment may be bonded per Section 10 (Rule 24-104(9))',
      ],
      diagramaMermaid: `graph TD
    A["Rule 24-104\\nBonding in Basic Care"] --> B["Copper bonding\\nper Table 16\\n#12 AWG min"]
    A --> C["Per-circuit bonding\\n(multi-wire & 2-wire)"]
    C --> D["Exception: 2 circuits\\nsame raceway\\nshare 1 bond"]
    C --> E["Exception: 3 circuits\\nadjacent envs\\nshare 2 bonds"]
    A --> F["Terminate at panel\\nor bonding busbar"]
    F --> G["Multiple panels:\\nbond together #6 AWG"]
    A --> H["3-phase equipment:\\ndedicated terminal\\nboth ends"]
    A --> I["Comm/radio/TV metal\\nbonded to env bus"]
    A --> J["Non-electrical metal\\nbonded to env bus"]
    A --> K["Luminaires >2.3 m:\\nSection 10 bonding"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'neutral', title: 'Copper #12 Minimum Bond', note: 'Equipment bonding conductors: copper, Table 16 sized, never smaller than No. 12 AWG (Rule 24-104(2))', color: 'sky' },
        { icon: 'wire', title: 'One Bond Per Circuit', note: 'Each branch circuit in a patient care environment needs its own bonding conductor (Rule 24-104(2))', color: 'emerald' },
        { icon: 'bolt', title: '#6 AWG Panel-to-Panel', note: 'Panelboards feeding the same environment are bonded together, No. 6 AWG minimum (Rule 24-104(4))', color: 'rose' },
        { icon: 'shield', title: 'Bond Everything Metal', note: 'Even non-electrical metal parts that could become energized must be bonded (Rule 24-104(8))', color: 'amber' },
        { icon: 'sun', title: 'Ceiling Lights Exempt', note: 'Luminaires more than 2.3 m above the floor may be bonded per Section 10 (Rule 24-104(9))', color: 'violet' },
      ],
    },

    // =========================================================================
    // 4. BASIC CARE AREAS — RECEPTACLES & OTHER EQUIPMENT (Rules 24-106 to 24-108)
    // =========================================================================
    {
      id: '24-basic-care-receptacles',
      title: 'Basic Care Areas — Receptacles & Other Equipment',
      rules: 'Rules 24-106 to 24-108',
      explanation:
        'Once the circuits and bonding are in place, Rules 24-106 and 24-108 govern the physical installation of receptacles and the rules that let specialized equipment live inside wet areas like shower stalls.\n\nRule 24-106 (Receptacles in basic care areas):\n(1) Receptacles intended for a given patient care environment shall be located to minimize the likelihood of their inadvertent use for a patient care environment for which they are not intended.\n(2) Receptacles located in areas that are routinely cleaned using liquids that normally splash against the walls shall be installed not less than 300 mm above the floor.\n(3) Receptacles located in bathrooms or washrooms shall be located (a) within 1.5 m of the wash basin; and (b) outside of any bathtub enclosure or shower stall.\n(4) Receptacles intended for housekeeping equipment and other non-medical loads shall be so identified.\n(5) Except for receptacles as described in Subrule (1), all 15 A and 20 A non-locking receptacles shall be hospital grade.\n(6) All receptacles that are supplied from circuits in an essential electrical system as described in Rule 24-302 shall be coloured red, and no other receptacles shall be so coloured.\n(7) Receptacles shall not be of the isolated ground type.\n\nRule 24-108 (Other equipment in basic care areas): Notwithstanding the requirements of Rule 60-400, emergency signalling and similar equipment manufactured in conformance with the additional watertightness requirements of the CAN/CSA-C22.2 No. 60601 series of standards, and intended for use in shower stalls and bathtub enclosures, shall be permitted to be installed at normal heights within such stalls and enclosures.',
      fieldScenario:
        'You are installing receptacles in a four-bed room. Rule 24-106(1) says to physically place them so a nurse pushing a pump cord does not accidentally plug it into the wrong bed circuit — use labels, colour coding, and physical separation. Rule 24-106(5) requires all the 15 A and 20 A non-locking receptacles to be HOSPITAL GRADE — marked with a green dot, built for extra-hard use, with a gripping device that resists accidental unplugging.\n\nHalf of the receptacles in each patient care environment are fed from the normal panel, half from the essential electrical system. Rule 24-106(6) requires the essential-system receptacles to be coloured RED — and no non-essential receptacle may be coloured red, so staff can identify them at a glance. Rule 24-106(7) prohibits isolated-ground receptacles in basic care areas.\n\nHousekeeping plugs in the corridor used for floor scrubbers must be identified per Rule 24-106(4) so nobody mistakes them for a patient care receptacle.\n\nIn the patient bathroom, you install a receptacle for the patients grooming kit. Rule 24-106(3) requires it to be within 1.5 m of the wash basin AND outside any bathtub enclosure or shower stall. Rule 24-106(2) says the receptacle in the soiled utility room (where walls are routinely hosed down) must be mounted not less than 300 mm above the floor.\n\nThe hospital has installed special emergency call pushbuttons inside the shower stalls. Rule 24-108 allows these at normal heights within the stall IF they are manufactured to the watertightness requirements of the CAN/CSA-C22.2 No. 60601 series — this is an explicit override of the general Rule 60-400 restriction.',
      keyPoints: [
        'Receptacles must be located to minimize inadvertent use for the wrong environment (Rule 24-106(1))',
        'In liquid-cleaned areas: receptacles not less than 300 mm above the floor (Rule 24-106(2))',
        'Bathroom/washroom receptacles: within 1.5 m of the wash basin, outside any tub/shower enclosure (Rule 24-106(3))',
        'Housekeeping and non-medical receptacles must be identified (Rule 24-106(4))',
        'All 15 A and 20 A non-locking receptacles shall be HOSPITAL GRADE (Rule 24-106(5))',
        'Essential-system receptacles shall be coloured RED, and no others may be red (Rule 24-106(6))',
        'Receptacles shall NOT be of the isolated ground type (Rule 24-106(7))',
        'Emergency signalling equipment in showers/tubs is allowed at normal heights IF built to CAN/CSA-C22.2 No. 60601 watertightness (Rule 24-108)',
        'Rule 24-108 is an explicit override of Rule 60-400',
      ],
      diagramaMermaid: `graph TD
    A["Receptacles in\\nBasic Care Areas\\n(Rule 24-106)"] --> B["Locate to prevent\\ncross-environment use\\n(1)"]
    A --> C["Wet-clean rooms:\\n300 mm min height\\n(2)"]
    A --> D["Bathroom: within\\n1.5 m of basin,\\noutside shower (3)"]
    A --> E["Housekeeping/non-med\\nmust be identified (4)"]
    A --> F["15A/20A = Hospital\\nGrade (5)"]
    A --> G["Essential = RED\\ncolour exclusive (6)"]
    A --> H["NO isolated ground\\ntype (7)"]
    I["Rule 24-108\\nShowers/Tubs"] --> J["CAN/CSA 60601 series\\nwatertightness = OK\\nat normal height"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style G fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style H fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Hospital Grade Required', note: 'All 15 A and 20 A non-locking receptacles must be hospital grade (Rule 24-106(5))', color: 'sky' },
        { icon: 'palette', title: 'Red = Essential System', note: 'Essential-system receptacles must be RED, and no others may be red (Rule 24-106(6))', color: 'rose' },
        { icon: 'warning', title: 'No Isolated Ground', note: 'Isolated-ground type receptacles are prohibited in basic care areas (Rule 24-106(7))', color: 'amber' },
        { icon: 'ruler', title: '1.5 m from Wash Basin', note: 'Bathroom receptacles within 1.5 m of the basin and outside any shower enclosure (Rule 24-106(3))', color: 'emerald' },
        { icon: 'shield', title: '60601 Waterproof Exception', note: 'Emergency call buttons in showers allowed at normal heights if built to CAN/CSA 60601 (Rule 24-108)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 5. INTERMEDIATE & CRITICAL CARE AREAS (Rules 24-110 to 24-116)
    // =========================================================================
    {
      id: '24-intermediate-critical',
      title: 'Intermediate & Critical Care Areas',
      rules: 'Rules 24-110 to 24-116',
      explanation:
        'Intermediate and critical care areas inherit all the basic care rules and add more stringent requirements: 2-wire circuits only, enhanced bonding with an optional bonding point bus, receptacle identification for isolated systems, and GFCI or isolated system protection where standing fluids can cover the floor.\n\nRule 24-110 (Circuits in intermediate and critical care areas): The branch circuits supplying receptacles or other permanently connected equipment in intermediate or critical care areas shall be supplied from either a grounded system meeting the requirements of Rule 24-102 or an isolated system meeting the requirements of Rule 24-200, except that all branch circuits supplying loads within patient care environments, other than those supplying multi-phase equipment, shall be 2-wire circuits.\n\nRule 24-112 (Bonding to ground in intermediate and critical care areas):\n(1) Bonding to ground in intermediate and critical care areas shall conform to Rule 24-104 whether the supply is derived from a grounded or an isolated system.\n(2) If a patient care environment bonding point is provided, it shall be bonded to the panelboard serving the patient care environment with which it is associated by either:\n  (a) a bonding jumper connecting it to the bonding terminal in an enclosure that accommodates the bonding point along with receptacles for a patient care environment; or\n  (b) a copper conductor that is installed for that purpose and is run in the same raceway as the equipment bonding conductors serving that patient care environment.\n\nRule 24-114 (Receptacles in intermediate and critical care areas): Receptacles in intermediate and critical care areas shall (a) meet the requirements of Rule 24-106; and (b) where supplied from an isolated system, be identified as such.\n\nRule 24-116 (Receptacles subject to standing fluids on the floor or drenching of the work area): All receptacles in areas subject to standing fluids on the floor or drenching of the work area shall be (a) protected by a ground fault circuit interrupter of the Class A type; or (b) supplied by an isolated system conforming to Rule 24-200.',
      fieldScenario:
        'You are wiring an ICU room. This is an intermediate care area because patients are on continuous monitors and IV pumps. Rule 24-110 gives you a choice: feed the receptacles from a grounded system per Rule 24-102, or from an isolated system per Rule 24-200. You decide on a grounded system for the ICU and reserve isolated power for the OR suite down the hall (which is a critical care area and anaesthetizing location).\n\nRule 24-110 requires all branch circuits within the patient care environment to be 2-WIRE circuits — no multi-wire branch circuits here, except for the three-phase dialysis machine. This eliminates shared neutrals that could cause voltage spikes on bonded equipment during a fault.\n\nYou install a patient care environment bonding point — a small busbar with banana jacks behind the bed. Rule 24-112(2) requires it to be bonded back to the panelboard either via (a) a jumper inside the ganged outlet box that also holds the receptacles, or (b) a dedicated copper conductor run in the same raceway as the equipment bonding conductors. You run option (b) through the conduit.\n\nThe ICU receptacles still follow all of Rule 24-106 — hospital grade, red if essential, no isolated ground type (Rule 24-114(a)). The OR suite runs on an isolated system, so those receptacles are also labelled "ISOLATED POWER" per Rule 24-114(b).\n\nThe hospital has a cystoscopy room where the floor is routinely drenched during procedures. Rule 24-116 requires every receptacle in that room to be either protected by a Class A GFCI or supplied by an isolated system. You choose Class A GFCIs because a full isolated system would be overkill for the occasional procedure.',
      keyPoints: [
        'Intermediate and critical care circuits: grounded system (Rule 24-102) or isolated system (Rule 24-200) (Rule 24-110)',
        'All branch circuits in patient care environments must be 2-WIRE, except multi-phase equipment (Rule 24-110)',
        'Bonding to ground follows Rule 24-104 whether source is grounded or isolated (Rule 24-112(1))',
        'Patient care environment bonding point: bonded to its panelboard via jumper in the outlet box OR dedicated copper in same raceway (Rule 24-112(2))',
        'Receptacles must meet Rule 24-106 (hospital grade, red essential, no isolated ground, etc.) (Rule 24-114(a))',
        'Receptacles supplied from an isolated system must be identified as such (Rule 24-114(b))',
        'Standing-fluid or drenching areas: Class A GFCI OR isolated system per Rule 24-200 (Rule 24-116)',
      ],
      diagramaMermaid: `graph TD
    A["Intermediate &\\nCritical Care Areas"] --> B["Circuits\\n(Rule 24-110)"]
    A --> C["Bonding\\n(Rule 24-112)"]
    A --> D["Receptacles\\n(Rule 24-114)"]
    A --> E["Standing Fluids\\n(Rule 24-116)"]
    B --> B1["Grounded system\\n(Rule 24-102) OR"]
    B --> B2["Isolated system\\n(Rule 24-200)"]
    B --> B3["2-wire circuits only\\n(except multi-phase)"]
    C --> C1["Follow Rule 24-104"]
    C --> C2["Bonding POINT:\\njumper or raceway\\nto panelboard"]
    D --> D1["Meet Rule 24-106"]
    D --> D2["Isolated = identified"]
    E --> E1["Class A GFCI"]
    E --> E2["OR isolated system\\n(Rule 24-200)"]
    style A fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style B3 fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: '2-Wire Only', note: 'All patient care environment circuits must be 2-wire, except multi-phase equipment (Rule 24-110)', color: 'sky' },
        { icon: 'neutral', title: 'Bonding Point Busbar', note: 'If installed, the patient care environment bonding point must be bonded back to its panelboard (Rule 24-112(2))', color: 'emerald' },
        { icon: 'label', title: 'Label Isolated Power', note: 'Receptacles fed from an isolated system must be identified (Rule 24-114(b))', color: 'violet' },
        { icon: 'warning', title: 'Wet Work Areas', note: 'Standing-fluid or drenching areas need Class A GFCI OR an isolated system (Rule 24-116)', color: 'rose' },
        { icon: 'shield', title: 'Two Supply Options', note: 'Intermediate/critical circuits may be grounded (24-102) OR isolated (24-200) (Rule 24-110)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 6. ISOLATED SYSTEMS — RULES & SOURCES OF SUPPLY (Rules 24-200 to 24-202)
    // =========================================================================
    {
      id: '24-isolated-systems-sources',
      title: 'Isolated Systems — Rules & Sources of Supply',
      rules: 'Rules 24-200 to 24-202',
      explanation:
        'An isolated power system is an ungrounded distribution system that limits the current that can flow through a patient if a single fault develops. Rules 24-200 through 24-208 establish how these systems must be built.\n\nRule 24-200 (Rules for isolated systems):\n(1) Rules 24-202 to 24-208 shall apply to isolated systems installed under the provisions of Rules 24-110 and 24-116.\n(2) In a patient care environment supplied by an isolated system, branch circuits supplying only fixed luminaires and permanently connected medical electrical equipment shall be permitted to be supplied by a conventional grounded system, provided that wiring for grounded and isolated circuits does not occupy the same raceway.\n\nRule 24-202 (Sources of supply):\n(1) The means of supply to an isolated system shall be (a) the secondary of one or more isolating transformers having no direct electrical connection between primary and secondary windings; (b) a motor-generator set; or (c) a suitably isolated, battery-powered inverter supply.\n(2) Where more than one single-phase isolated power system serves a single patient care environment, the grounding buses of all of these systems shall be bonded together with a copper bonding conductor (a) having a total impedance not greater than 0.2 ohm; and (b) sized not smaller than that permitted by Table 16.',
      fieldScenario:
        'You are designing the electrical system for a new operating room suite — a critical care area and an anaesthetizing location. Rule 24-200 governs the isolated power system. You install a dedicated isolation transformer (Rule 24-202(1)(a)): a two-winding transformer with no electrical connection between the primary and secondary windings. The primary is fed from the essential electrical system and the secondary feeds the OR receptacles with an ungrounded 120 V output.\n\nThe operating suite has three ORs and needs two independent isolated systems in the main OR (one for the anaesthesia side, one for the surgical side — both within the same patient care environment). Rule 24-202(2) requires the grounding buses of both systems to be bonded together with a copper conductor that has a total impedance not greater than 0.2 ohm, sized per Table 16. You run a No. 6 copper conductor a short distance and measure the end-to-end resistance at 0.08 ohm — well within the limit.\n\nA surgical lamp above the OR table is fixed — it never moves, it is hard-wired, and a simple ground-fault there cannot shock the patient in the same way a plug-in device could. Rule 24-200(2) permits this fixed luminaire and other permanently connected medical equipment to be fed from the conventional grounded system INSTEAD of the isolated system, saving cost — provided the grounded wiring and the isolated wiring are in SEPARATE raceways.\n\nFor a remote critical care bay with no room for a transformer, you specify an isolated battery-backed inverter per Rule 24-202(1)(c). A motor-generator set per Rule 24-202(1)(b) is an older technology still allowed by the Code.',
      keyPoints: [
        'Rules 24-202 to 24-208 apply to isolated systems installed per Rules 24-110 and 24-116 (Rule 24-200(1))',
        'Fixed luminaires and permanently connected medical equipment MAY be fed from a grounded system even in an isolated-system room (Rule 24-200(2))',
        'Grounded and isolated wiring must NOT share the same raceway (Rule 24-200(2))',
        'Source options for isolated systems: isolating transformer, motor-generator set, or isolated battery-powered inverter (Rule 24-202(1))',
        'Isolating transformer: no direct electrical connection between primary and secondary windings (Rule 24-202(1)(a))',
        'Multiple single-phase isolated systems serving the same environment: grounding buses bonded together (Rule 24-202(2))',
        'Inter-system bonding conductor: copper, total impedance not greater than 0.2 ohm (Rule 24-202(2)(a))',
        'Inter-system bonding conductor: sized not smaller than Table 16 permits (Rule 24-202(2)(b))',
      ],
      diagramaMermaid: `graph TD
    A["Isolated Power\\nSystem"] --> B["Rule 24-200\\nScope"]
    A --> C["Rule 24-202\\nSources"]
    B --> B1["Covers rooms per\\n24-110 and 24-116"]
    B --> B2["Fixed lights + perm.\\nmed equip MAY be\\ngrounded system"]
    B --> B3["Separate raceways\\nmandatory"]
    C --> C1["Isolating transformer\\nno primary-secondary\\nconnection (a)"]
    C --> C2["Motor-generator set (b)"]
    C --> C3["Battery-powered\\nisolated inverter (c)"]
    C --> D["Multiple systems:\\nbond ground buses\\n<= 0.2 ohm"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C1 fill:#065f46,stroke:#10b981,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Three Source Types', note: 'Isolating transformer, motor-generator set, or battery inverter (Rule 24-202(1))', color: 'sky' },
        { icon: 'shield', title: 'No Primary-Secondary Link', note: 'Isolating transformer must have NO direct electrical connection between windings (Rule 24-202(1)(a))', color: 'emerald' },
        { icon: 'ruler', title: '0.2 Ohm Max Bond', note: 'Multiple isolated systems: grounding buses bonded, total impedance max 0.2 ohm (Rule 24-202(2))', color: 'amber' },
        { icon: 'wire', title: 'Separate Raceways', note: 'Grounded and isolated circuits cannot share a raceway, even in the same room (Rule 24-200(2))', color: 'rose' },
        { icon: 'sun', title: 'Fixed Lights Exception', note: 'Fixed luminaires and permanently connected med equip may stay on the grounded system (Rule 24-200(2))', color: 'violet' },
      ],
    },

    // =========================================================================
    // 7. ISOLATED SYSTEMS — SINGLE-PHASE, INDIVIDUALLY ISOLATED, THREE-PHASE (Rules 24-204 to 24-208)
    // =========================================================================
    {
      id: '24-isolated-systems-circuits',
      title: 'Isolated Systems — Single-Phase, Individually Isolated & Three-Phase Circuits',
      rules: 'Rules 24-204 to 24-208',
      explanation:
        'These rules spell out the detailed construction of isolated power circuits: conductor types, colour codes, overcurrent devices, line isolation monitors, receptacle limits, and the special cases for individually isolated branches and three-phase isolated systems.\n\nRule 24-204 (Single-phase isolated circuits):\n(1) Except where Rule 24-206 applies, isolated circuits shall meet the requirements of Subrules (2) to (7).\n(2) Isolated circuits shall:\n  (a) not be deliberately grounded, except through the impedance of an isolation-sensing device (e.g., an isolation monitor);\n  (b) have insulated circuit conductors of one of the following types: (i) RW75 EP; (ii) RW75 XLPE; (iii) RW90 EP; or (iv) RW90 XLPE;\n  (c) have the insulation of one circuit conductor coloured orange and the other coloured brown;\n  (d) have the orange-insulated conductor connected to the nickel screw of receptacles; and\n  (e) have overcurrent devices that will open all ungrounded conductors simultaneously.\n(3) Any disconnecting means controlling an isolated circuit shall safely and simultaneously disconnect all ungrounded conductors.\n(4) Single-phase isolated circuits shall be 2-wire circuits with copper equipment bonding conductors, operating at voltages (rms) between conductors not exceeding (a) 300 V for special-use receptacles and for permanently connected equipment; and (b) 150 V for other receptacles.\n(5) A single-phase isolated system shall include automatic means (a line isolation monitor), with an indicator located where visible to persons using the system, to monitor the impedance-to-ground of the system together with any loads connected to it.\n(6) At the time of installation the total impedance (capacitive and resistive) between ground and each energized conductor of a single-phase isolated system shall exceed 200 000 ohms without utilization equipment or the line isolation monitor connected.\n(7) Where a single-phase isolated system is employed, it shall supply:\n  (a) general-purpose receptacles in (i) a single anaesthetizing location; (ii) one or more patient care environments in a single room; or (iii) a maximum of two patient care environments in separate but adjacent rooms, provided that the alarm indicator clearly identifies the patient care environments affected by the fault; or\n  (b) special-purpose receptacles at different locations or in different patient care environments, provided that the system is used only for one purpose and is arranged so that only one receptacle can be energized at a time.\n\nRule 24-206 (Individually isolated branch circuits): A single-phase isolated system that supplies only a single load via a single branch circuit shall meet the requirements of Rule 24-204(2) to (6), except that (a) overcurrent devices need not be installed in the isolated circuit; and (b) the use of a line isolation monitor shall be optional.\n\nRule 24-208 (Three-phase isolated systems): A three-phase isolated system shall (a) supply (i) permanently connected medical equipment; or (ii) special-purpose receptacles in one or more anaesthetizing locations or patient care environments, provided that the system is used only for the one purpose and is arranged so that only one receptacle can be energized at a time; (b) meet the requirements of Rule 24-204(2)(a), (b), and (e); (c) have its insulated circuit conductors identified as follows: (i) isolated conductor No. A — orange; (ii) isolated conductor No. B — brown; and (iii) isolated conductor No. C — yellow; and (d) meet the requirements of Rule 24-204(3).',
      fieldScenario:
        'You are completing the wiring inside the OR isolation transformer panel. Rule 24-204(2)(b) requires RW75 EP, RW75 XLPE, RW90 EP, or RW90 XLPE insulation — you choose RW90 XLPE for the extra temperature margin. One conductor is coloured ORANGE and the other BROWN per Rule 24-204(2)(c), and you verify the orange conductor lands on the NICKEL screw of each isolated receptacle per Rule 24-204(2)(d). The 2-pole breaker opens both ungrounded conductors simultaneously per Rule 24-204(2)(e) and (3).\n\nThe isolated system is NOT deliberately grounded except through the line isolation monitor itself (Rule 24-204(2)(a)). You install a line isolation monitor on the panel and locate the warning indicator on the OR wall where everyone can see it (Rule 24-204(5)).\n\nYou commission the system. With no utilization equipment and no line isolation monitor connected, you measure 350 000 ohms between each phase and ground — that exceeds the 200 000 ohm minimum required at installation by Rule 24-204(6). The system passes.\n\nThe voltage from conductor to conductor is 120 V — within the 150 V limit of Rule 24-204(4)(b) for general-purpose receptacles. If you had a special-use receptacle (say 208 V for imaging equipment), Rule 24-204(4)(a) would allow up to 300 V.\n\nRule 24-204(7) governs what the isolated system can feed. Your isolated system feeds the one OR (a single anaesthetizing location) — OK under (7)(a)(i). The system in the ICU feeds patient care environments in two adjacent rooms — OK under (7)(a)(iii) because the LIM indicator clearly identifies which room is affected by a fault.\n\nThe CT scanner across the corridor is a single load fed by a single isolated branch. Rule 24-206 applies — you may skip the overcurrent device in the isolated side and the line isolation monitor is optional. You install a monitor anyway for extra safety.\n\nThe hospital also has a three-phase isolated system feeding a 208 V surgical microscope. Rule 24-208 applies. Conductor A is coloured ORANGE, B is BROWN, C is YELLOW per Rule 24-208(c). The overcurrent device opens all three simultaneously per Rule 24-208(b) (which invokes Rule 24-204(2)(e)).',
      keyPoints: [
        'Isolated circuits: not deliberately grounded except through an isolation-sensing device (Rule 24-204(2)(a))',
        'Conductor insulation: RW75 EP, RW75 XLPE, RW90 EP, or RW90 XLPE (Rule 24-204(2)(b))',
        'Colour code: ONE conductor ORANGE, the other BROWN (Rule 24-204(2)(c))',
        'Orange conductor lands on the NICKEL screw of receptacles (Rule 24-204(2)(d))',
        'Overcurrent devices open ALL ungrounded conductors simultaneously (Rule 24-204(2)(e))',
        'Disconnect must safely and simultaneously disconnect all ungrounded conductors (Rule 24-204(3))',
        '2-wire circuits with copper bonding; max 300 V special-use, 150 V other receptacles (Rule 24-204(4))',
        'Line isolation monitor with visible indicator is REQUIRED (Rule 24-204(5))',
        'Installation test: impedance to ground > 200 000 ohms (without LIM or utilization equipment) (Rule 24-204(6))',
        'Single-phase system scope: single anaesthetizing location, one room, or max two adjacent rooms with clear LIM indication (Rule 24-204(7))',
        'Individually isolated branch: one load, one circuit — overcurrent device and LIM optional (Rule 24-206)',
        'Three-phase isolated: permanent med equipment or special-purpose receptacles (one purpose, one receptacle at a time) (Rule 24-208(a))',
        'Three-phase colour code: A = orange, B = brown, C = yellow (Rule 24-208(c))',
        'Three-phase must meet Rule 24-204(2)(a)(b)(e) and (3) (Rule 24-208(b)(d))',
      ],
      diagramaMermaid: `graph TD
    A["Single-Phase\\nIsolated Circuit\\n(Rule 24-204)"] --> B["Insulation: RW75/RW90\\nEP or XLPE"]
    A --> C["Colours: ORANGE +\\nBROWN"]
    C --> C1["Orange -> Nickel screw"]
    A --> D["OCPD opens all\\nungrounded conductors\\nsimultaneously"]
    A --> E["Max V: 300 special,\\n150 general"]
    A --> F["LIM with visible\\nindicator"]
    A --> G["Install test:\\n> 200 000 ohms"]
    A --> H["Scope: 1 anaes loc,\\n1 room, or 2 adjacent"]
    I["Rule 24-206\\nIndividual Branch"] --> I1["Single load/circuit\\nOCPD & LIM optional"]
    J["Rule 24-208\\n3-Phase"] --> J1["A=orange B=brown\\nC=yellow"]
    J --> J2["Perm med OR special\\npurpose receptacles"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style J1 fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style F fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'palette', title: 'Orange + Brown', note: 'Single-phase isolated conductors: one orange, one brown; orange to nickel screw (Rule 24-204(2)(c)(d))', color: 'amber' },
        { icon: 'warning', title: 'Line Isolation Monitor', note: 'Mandatory with a visible indicator on single-phase isolated systems (Rule 24-204(5))', color: 'rose' },
        { icon: 'inspect', title: '> 200 kOhms at Install', note: 'Impedance to ground must exceed 200 000 ohms before energizing (Rule 24-204(6))', color: 'sky' },
        { icon: 'bolt', title: 'Open Both Poles', note: 'Overcurrent and disconnects must open all ungrounded conductors simultaneously (Rules 24-204(2)(e) & (3))', color: 'violet' },
        { icon: 'label', title: '3-Phase: A-B-C Colours', note: 'Orange-Brown-Yellow for A-B-C phases in three-phase isolated systems (Rule 24-208(c))', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 8. ESSENTIAL ELECTRICAL SYSTEMS — BRANCHES & TRANSFER (Rules 24-300 to 24-306)
    // =========================================================================
    {
      id: '24-essential-systems',
      title: 'Essential Electrical Systems — Branches, Transfer Switches & Emergency Supply',
      rules: 'Rules 24-300 to 24-306',
      explanation:
        'Essential electrical systems are the "will not go dark" backbone of the hospital. They consist of on-site generators that pick up critical loads in three branches — vital (10 s), delayed vital (2 min), and conditional (24 h) — connected to the emergency electrical power supply system through transfer switches.\n\nRule 24-300 (Rules for essential electrical systems): Rules 24-302 to 24-306 shall apply to those portions of a health care facility electrical system in which the interruption of a normal supply of power would jeopardize the effective and safe care of patients, with the object of reducing hazards that might arise from such an interruption.\n\nRule 24-302 (Circuits in essential electrical systems):\n(1) An essential electrical system shall consist of circuits that supply loads designated by the health care facility administration as being essential for (a) life safety in accordance with Section 46; (b) care of the patient; and (c) effective operation of the health care facility.\n(2) An essential electrical system shall consist of at the minimum a vital branch and may also include a delayed vital branch or a conditional branch, or both.\n(3) The wiring of the essential electrical system shall be kept entirely independent of all other wiring and equipment and shall not enter a luminaire, raceway, box, or cabinet occupied by other wiring except where necessary: (a) in transfer switches; and (b) in emergency lights supplied from two sources.\n(4) Where the essential electrical system includes conductors as specified in Rule 46-108(1), the wiring separation requirements of Rule 46-108(4) and (5) shall not apply, provided that: (a) all overcurrent devices of the essential electrical system are selectively coordinated; or (b) the vital branch and delayed vital branch of the essential electrical system are kept entirely separate from the conditional branch.\n\nRule 24-304 (Transfer switches):\n(1) All transfer switches shall comply with the requirements of the supply authority.\n(2) In low-voltage installations, automatic transfer switches used in essential electrical systems shall conform to the requirements of CSA C22.2 No. 178.1 and, in addition, shall: (a) be electrically operated and mechanically held; and (b) include means for safe manual operation.\n(3) In high-voltage installations, automatic transfer switches used in essential electrical systems shall conform to the requirements of CSA C22.2 No. 178.3.\n(4) Manual transfer switches shall conform to the following: (a) the switching means shall be mechanically held and the operation shall be by direct manual control or by electrical remote manual control utilizing control power from the supply to which the load is being transferred; (b) a manual transfer switch that is operated by electrical remote manual control shall include a means for safe manual mechanical operation; (c) reliable mechanical interlocking (and, in the case of a switch operated by electrical remote manual control, electrical interlocking) to prevent interconnection of the normal and the emergency electrical power supply systems shall be inherent in the design of a manual transfer switch; and (d) a manual transfer switch shall include a readily visible mechanical indicator showing the switch position.\n(5) The vital and delayed vital branches shall be connected to the emergency electrical power supply system by means of one or more automatic transfer switches.\n(6) The conditional branch shall be connected to the emergency electrical power supply system by either a manual or an automatic transfer switch.\n\nRule 24-306 (Emergency electrical power supply system): An emergency electrical power supply system shall be (a) one or more generator sets in accordance with CSA Z32; and (b) located on the health care facility premises and installed in a service room or enclosure in accordance with CSA C282.',
      fieldScenario:
        'You are designing the essential electrical system for a 200-bed hospital. The facility administration hands you a list of loads they have designated essential per Rule 24-302(1): operating room lights and isolation transformers, ICU beds, ventilators, elevators serving patient floors, fire alarm, exit signs, nurse call, certain laboratory refrigerators, the IT data centre that runs the electronic health record, and general illumination in corridors and stairwells.\n\nYou split these into branches per Rule 24-302(2). The VITAL branch (10 s restoration per Rule 24-002) includes ORs, ICU life support, emergency lighting, fire alarm, and a sub-set of critical exit pathways. The DELAYED VITAL branch (2 min) picks up the rest of the patient care floors, the data centre UPS bypass, and the kitchen refrigeration for patient meals. The CONDITIONAL branch (24 h) serves the HVAC chillers that only matter in a heat wave.\n\nRule 24-302(3) requires ALL of the essential wiring to be kept entirely independent of other wiring — no shared raceways, no shared boxes, no shared cabinets. The only exceptions are the inside of the transfer switches themselves and emergency luminaires supplied from two sources.\n\nRule 24-302(4) gives you a pass on the separation requirements of Rule 46-108(4)(5) if either: (a) all overcurrent devices are selectively coordinated (so a branch fault opens only the closest breaker); or (b) the vital and delayed vital branches are kept separate from the conditional branch. Your design keeps the conditional branch in a separate physical room, so you pick option (b).\n\nAt the main distribution level, you install automatic transfer switches per Rule 24-304(2): electrically operated, mechanically held, certified to CSA C22.2 No. 178.1, with a safe manual override. Rule 24-304(5) requires the vital and delayed vital branches to transfer automatically. The conditional branch transfers via a manual transfer switch per Rule 24-304(6) because it is non-critical. That manual switch is mechanically held, has electrical and mechanical interlocking to prevent paralleling the normal and emergency sources, and has a readily visible position indicator per Rule 24-304(4).\n\nThe emergency power supply is two parallel diesel gensets installed in a dedicated service room. Rule 24-306 requires the gensets to meet CSA Z32 and the room installation to meet CSA C282.',
      keyPoints: [
        'Rules 24-302 to 24-306 apply to the essential electrical system portions of a health care facility (Rule 24-300)',
        'Essential system loads are designated by facility administration for: life safety (Section 46), patient care, and facility operation (Rule 24-302(1))',
        'An essential system MUST have a vital branch; MAY also have delayed vital and/or conditional branches (Rule 24-302(2))',
        'Essential wiring kept ENTIRELY independent of other wiring — no shared luminaires, raceways, boxes, or cabinets (Rule 24-302(3))',
        'Exception: transfer switches and emergency lights supplied from two sources (Rule 24-302(3))',
        'Separation relief: selectively coordinated OCPDs OR vital/delayed vital kept separate from conditional branch (Rule 24-302(4))',
        'Transfer switches must comply with the supply authority (Rule 24-304(1))',
        'Low-voltage automatic TS: CSA C22.2 No. 178.1, electrically operated, mechanically held, safe manual operation (Rule 24-304(2))',
        'High-voltage automatic TS: CSA C22.2 No. 178.3 (Rule 24-304(3))',
        'Manual TS: mechanically held, remote-control uses power from the source being transferred TO, interlocking prevents paralleling (Rule 24-304(4))',
        'Manual TS must have a readily visible mechanical position indicator (Rule 24-304(4)(d))',
        'Vital and delayed vital branches: connected via AUTOMATIC transfer switches (Rule 24-304(5))',
        'Conditional branch: connected via manual OR automatic transfer switch (Rule 24-304(6))',
        'Emergency electrical power supply system: generator sets per CSA Z32 (Rule 24-306(a))',
        'Emergency supply located on the health care facility premises in a service room per CSA C282 (Rule 24-306(b))',
      ],
      diagramaMermaid: `graph TD
    A["Essential Electrical\\nSystem\\n(Rules 24-300 to 306)"] --> B["VITAL Branch\\n10 s restoration"]
    A --> C["DELAYED VITAL\\n2 min restoration"]
    A --> D["CONDITIONAL\\n24 h restoration"]
    B --> E["Automatic TS\\n(Rule 24-304-5)"]
    C --> E
    D --> F["Manual OR Automatic TS\\n(Rule 24-304-6)"]
    E --> G["Emergency Power\\nSupply System\\n(Rule 24-306)"]
    F --> G
    G --> H["Generator sets\\nCSA Z32"]
    G --> I["Service room\\nCSA C282"]
    A --> J["Independent wiring:\\nno shared raceways\\nor boxes (24-302-3)"]
    J --> K["Exceptions:\\ntransfer switches,\\ntwo-source lights"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0
    style G fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'Three Branches', note: 'Vital (10 s), Delayed Vital (2 min), Conditional (24 h) (Rules 24-002 & 24-302(2))', color: 'sky' },
        { icon: 'lock', title: 'Independent Wiring', note: 'No shared raceways, boxes, or cabinets with other systems (Rule 24-302(3))', color: 'rose' },
        { icon: 'power', title: 'Automatic for Vital', note: 'Vital and delayed vital branches MUST use automatic transfer switches (Rule 24-304(5))', color: 'amber' },
        { icon: 'inspect', title: 'CSA Z32 & C282', note: 'Generator sets per CSA Z32, installation per CSA C282 (Rule 24-306)', color: 'emerald' },
        { icon: 'shield', title: 'Selective Coordination', note: 'Separation relief available if OCPDs are selectively coordinated (Rule 24-302(4))', color: 'violet' },
      ],
    },
  ],
}
