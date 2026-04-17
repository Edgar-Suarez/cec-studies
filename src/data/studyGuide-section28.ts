import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 28 — Motors and Generators (CEC 2021, CSA C22.1:21, pages 239–252)
 * COMPLETE — Every rule from 28-000 to 28-908 is covered.
 * Source: PDF scan "Section 28 — Motors and generators"
 */

export const section28Guide: StudyGuideSection = {
  section: '28',
  title: 'Section 28 — Motors and Generators',
  description:
    'Section 28 supplements or amends the general requirements of the Code and applies to the installation, wiring methods, conductors, protection, and control of electric motors and generators. It covers guarding, ventilation, conductor sizing (the famous 125% rule), branch circuit overcurrent protection, overload and overheating protection, undervoltage protection, control equipment, disconnecting means, refrigerant motor-compressors, multi-winding and part-winding-start motors, and protection and control of generators. Rules 28-000 through 28-908.',
  subsections: [
    // =========================================================================
    // 1. SCOPE, SPECIAL TERMINOLOGY & GENERAL (Rules 28-000 to 28-016)
    // =========================================================================
    {
      id: '28-scope-terminology-general',
      title: 'Scope, Special Terminology, Guarding & Ventilation',
      rules: 'Rules 28-000 to 28-016',
      explanation:
        'Section 28 supplements or amends the general requirements of the Code and applies to the installation, wiring methods, conductors, protection, and control of electric motors and generators.\n\nRule 28-000 (Scope): "This Section supplements or amends the general requirements of this Code and applies to the installation, wiring methods, conductors, protection, and control of electric motors and generators."\n\nRule 28-010 (Special terminology) defines critical terms used throughout the section:\n- Locked rotor current rating: a current rating marked on electric equipment or, where not marked, deemed to be equal to six times the full load current rating from the nameplate of the equipment or from Table 44 or 45 as applicable.\n- Non-continuous duty motor: a motor having characteristics or ratings described in Section 0, Definitions, under Duty, as Short-time duty, Intermittent duty, Periodic duty, and Varying duty.\n- Rated load current (for a hermetic refrigerant motor-compressor): a value marked on a hermetic refrigerant motor-compressor intended for use where applicable to ascertain wiring, protection, and control for the unit.\n- Refrigerant motor-compressor: an appliance consisting of a refrigerant gas compressing section and a motor that may include a terminal box and cover and other electrical components.\n- Hermetic refrigerant motor-compressor: a refrigerant motor-compressor in which the refrigerant gas compressing section and motor are enclosed in the same housing, permanently sealed by welding or brazing, with no external shaft seals, such that the motor operates in a refrigerant atmosphere with or without oil.\n- Semi-hermetic refrigerant motor-compressor: same function but each enclosed in separate housings secured together by gasketted joints and may include shaft seals, such that the motor does NOT operate in a refrigerant atmosphere.\n- Service — Continuous duty service: any application of a motor where the motor can operate continuously with load under any normal or abnormal condition of use.\n- Service — Non-continuous duty service: an application of a motor where the apparatus driven by the motor has the characteristics described in Section 0 (Short-time, Intermittent, Periodic, and Varying duty).\n- Service factor: a multiplier that, when applied to the rated horsepower of an ac motor, to the rated armature current of a dc motor, or to the rated output of a generator, indicates a permissible loading that may be carried continuously at rated voltage and frequency.\n\nRule 28-012 (Guarding): Exposed live parts of motors and controllers operating at 50 V or more between terminals shall be guarded against accidental contact by means of enclosures or by location, except that stationary motors having commutators, collectors, and brush rigging located inside motor end brackets and not conductively connected to supply circuits operating at more than 150 volts-to-ground shall be permitted to have live parts exposed.\n\nRule 28-014 (Methods of guarding): Methods of guarding of motors having exposed live parts shall be by (a) installation in a room or enclosure that is accessible only to authorized persons; (b) installation on a suitable balcony, gallery, or platform elevated and arranged to exclude other than qualified persons; (c) elevation by 2.5 m or more above the floor; or (d) guard rails if the motor operates at 750 V or less.\n\nRule 28-016 (Ventilation): (1) Adequate ventilation shall be provided to prevent the development around motors of ambient air temperatures exceeding 40 degrees C for integral horsepower motors and 30 degrees C for fractional horsepower motors. (2) Notwithstanding Subrule 1), motors suitable for use in higher ambient temperatures shall be specifically marked for the temperatures in which they will operate. (3) In locations where dust or flying material will collect in or on motors in quantities that interfere with the ventilating or cooling of motors, thereby causing dangerous temperatures, suitable types of enclosed motors that will not overheat under prevailing conditions shall be used.',
      fieldScenario:
        'You arrive at a pump house to commission a new 25 hp three-phase motor. Before energizing, you must verify the motor guarding (Rule 28-012): the motor is in a locked mechanical room (Rule 28-014(a)), so the exposed commutator and brush rigging are acceptable. You check the nameplate for the locked rotor current rating — it is not marked, so Rule 28-010 says you must use Table 44 or 45, OR treat it as 6 times the full load current. The ambient air temperature in the enclosed room reaches 38 degrees C on hot days — Rule 28-016(1) allows up to 40 degrees C for this integral hp motor, so you are within limits. Inside a flour mill area, Rule 28-016(3) requires you to use a totally enclosed (TEFC) motor because flour dust will collect and interfere with open-motor cooling. When asked about duty cycle, you confirm the motor is "Continuous duty service" per Rule 28-010 because it runs 24/7 with load — that distinction drives how you size conductors and overload devices.',
      keyPoints: [
        'Section 28 supplements or amends the general requirements of the Code for motors and generators (Rule 28-000)',
        'Locked rotor current rating = marked value, else deemed to be 6 times the FLA from nameplate or from Table 44 or 45 (Rule 28-010)',
        'Continuous duty service = motor can operate continuously with load under any normal or abnormal condition (Rule 28-010)',
        'Service factor is a multiplier applied to rated hp (ac), rated armature current (dc), or rated output (generator) for permissible continuous loading (Rule 28-010)',
        'Hermetic vs semi-hermetic motor-compressor: hermetic = motor operates in refrigerant atmosphere; semi-hermetic = motor NOT in refrigerant atmosphere (Rule 28-010)',
        'Exposed live parts of motors/controllers at 50 V or more between terminals must be guarded (Rule 28-012)',
        'Exception: stationary motors with commutators/brushes inside end brackets on systems at 150 V-to-ground or less may be exposed (Rule 28-012)',
        'Guarding methods: authorized-access room, elevated platform, 2.5 m minimum elevation, or guard rails at 750 V or less (Rule 28-014)',
        'Ventilation: ambient air around motors must NOT exceed 40 C for integral hp or 30 C for fractional hp motors (Rule 28-016(1))',
        'Motors marked for higher ambient temperatures may be used in those conditions (Rule 28-016(2))',
        'Where dust or flying material collects and interferes with motor cooling, suitable enclosed motors must be used (Rule 28-016(3))',
      ],
      diagramaMermaid: `graph TD
    A["Section 28\\nMotors & Generators\\n(Rule 28-000)"] --> B["Guarding\\n(Rule 28-012)"]
    A --> C["Ventilation\\n(Rule 28-016)"]
    A --> D["Terminology\\n(Rule 28-010)"]
    B --> B1["Live parts >= 50 V\\nmust be guarded"]
    B --> E["Methods\\n(Rule 28-014)"]
    E --> E1["Authorized\\naccess room"]
    E --> E2["Elevated platform\\nor gallery"]
    E --> E3["2.5 m elevation\\nabove floor"]
    E --> E4["Guard rails\\n(<= 750 V)"]
    C --> C1["Integral hp:\\nambient <= 40 C"]
    C --> C2["Fractional hp:\\nambient <= 30 C"]
    C --> C3["Dust/flying material:\\nuse enclosed motor"]
    D --> D1["LRC = 6x FLA\\nif not marked"]
    D --> D2["Continuous vs\\nNon-continuous duty"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style C fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'LRC Default = 6x FLA', note: 'If locked rotor current not marked, use 6 times the FLA or Table 44/45 — Rule 28-010', color: 'sky' },
        { icon: 'shield', title: 'Guard at 50 V or More', note: 'Any exposed live part at 50 V+ between terminals must be guarded — Rule 28-012', color: 'rose' },
        { icon: 'ruler', title: '2.5 m Elevation', note: 'Guarding by elevation requires minimum 2.5 m above floor — Rule 28-014(c)', color: 'amber' },
        { icon: 'thermometer', title: 'Ambient Temp Limit', note: '40 C for integral hp, 30 C for fractional hp motors — Rule 28-016(1)', color: 'emerald' },
        { icon: 'warning', title: 'Dusty Locations', note: 'Where dust collects on motors, use enclosed types that will not overheat — Rule 28-016(3)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 2. WIRING METHODS (Rules 28-100 to 28-104)
    // =========================================================================
    {
      id: '28-wiring-methods',
      title: 'Wiring Methods — Stationary, Portable, Supply Insulation & Ampacity',
      rules: 'Rules 28-100 to 28-104',
      explanation:
        'Wiring methods set the foundation for how conductors get to the motor — what kinds of cables and conduits are allowed, and what insulation ratings the supply conductors must have.\n\nRule 28-100 (Stationary motors — see Appendix B): "The wiring method for stationary motors shall be in accordance with the applicable requirements of Sections 12 and 36." Section 12 governs general wiring methods and Section 36 governs high-voltage installations.\n\nRule 28-102 (Portable motors): "Connections to portable motors shall be permitted using flexible cord that has a serviceability not less than that of Type S cord, unless the motor forms part of a motor-operated device." This means you can feed a portable drill, mixer, or construction tool with flexible cord, but it must be at least as robust as Type S.\n\nRule 28-104 (Motor supply conductor insulation temperature rating and ampacity — see Appendix B):\n(1) Supply conductors to a motor connection box shall have:\n  (a) an insulation temperature rating equal to or greater than that required by Table 37, unless the motor is marked otherwise;\n  (b) the insulation temperature rating derived from Item a) increased by the difference between the maximum ambient temperature and 30 degrees C, where the ambient temperature is higher than 30 degrees C; and\n  (c) an ampacity based on a 75 degrees C conductor insulation rating.\n(2) Notwithstanding Subrule 1) c), where a 90 degrees C insulated conductor is used as the supply conductor to a Class A motor, the conductor ampacity shall be permitted to be based on a 90 degrees C conductor insulation rating.\n(3) Where Table 37 requires insulation temperature ratings in excess of 75 degrees C, the motor supply insulated conductors shall:\n  (a) be not less than 1.2 m long; and\n  (b) terminate in a location not less than:\n    (i) 600 mm from any part of the motor, for motors rated less than 100 hp; or\n    (ii) 1.2 m from any part of the motor, for motors rated 100 hp or larger.',
      fieldScenario:
        'You are wiring a new 50 hp motor at a water treatment plant. Per Rule 28-100, you must follow Section 12 wiring methods — EMT, rigid, liquidtight flex in the last 1.8 m to the motor (for vibration). Per Rule 28-104(1)(a) you check Table 37 and see the motor terminal box is rated for 90 degrees C insulation; you select RW90 XLPE. Rule 28-104(1)(c) says you size the ampacity at the 75 degree column even though the insulation is 90. A handheld portable grinder comes in — Rule 28-102 says you can use Type S cord or better as the supply. At a steel mill with ambient 45 degrees C around the motor terminal box, Rule 28-104(1)(b) says you must increase the insulation temperature rating by the difference (45 minus 30 = 15 degrees C) above the Table 37 base rating. Because Table 37 demands insulation higher than 75 degrees C for this hot location, Rule 28-104(3) requires the motor supply insulated conductors to be at least 1.2 m long and terminate at least 600 mm from the motor (since the motor is 50 hp, less than 100 hp).',
      keyPoints: [
        'Stationary motors: wiring method must follow Sections 12 and 36 (Rule 28-100)',
        'Portable motors: flexible cord must be at least as robust as Type S, unless the motor forms part of a motor-operated device (Rule 28-102)',
        'Supply conductor insulation must equal or exceed the rating required by Table 37, unless the motor is marked otherwise (Rule 28-104(1)(a))',
        'Where ambient exceeds 30 C, increase the Table 37 insulation rating by the difference (ambient minus 30 C) (Rule 28-104(1)(b))',
        'Ampacity is based on a 75 C column rating — this is a key exam fact (Rule 28-104(1)(c))',
        'Exception: a 90 C conductor supplying a Class A motor may use the 90 C column for ampacity (Rule 28-104(2))',
        'Where Table 37 requires insulation >75 C, supply conductors must be at least 1.2 m long (Rule 28-104(3)(a))',
        'Termination location: >= 600 mm from motor for motors under 100 hp (Rule 28-104(3)(b)(i))',
        'Termination location: >= 1.2 m from motor for motors 100 hp or larger (Rule 28-104(3)(b)(ii))',
      ],
      diagramaMermaid: `graph TD
    A["Motor Supply\\nWiring Methods"] --> B["Stationary Motor\\n(Rule 28-100)"]
    A --> C["Portable Motor\\n(Rule 28-102)"]
    A --> D["Supply Conductors\\n(Rule 28-104)"]
    B --> B1["Use Sections 12 and 36\\nstandard wiring methods"]
    C --> C1["Flexible cord\\n>= Type S serviceability"]
    D --> D1["Insulation >= Table 37"]
    D --> D2["Increase for ambient\\n> 30 C by difference"]
    D --> D3["Ampacity at 75 C\\ncolumn"]
    D --> D4["Exception: 90 C conductor\\nto Class A motor = 90 C ampacity"]
    D --> E["If Table 37 > 75 C"]
    E --> E1["Length >= 1.2 m"]
    E --> E2["< 100 hp:\\n>= 600 mm from motor"]
    E --> E3[">= 100 hp:\\n>= 1.2 m from motor"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0`,
      infoCards: [
        { icon: 'wire', title: 'Section 12 Rules Apply', note: 'Stationary motor wiring follows standard Section 12 and 36 methods — Rule 28-100', color: 'sky' },
        { icon: 'bolt', title: 'Type S Cord Minimum', note: 'Portable motors need flexible cord at least as robust as Type S — Rule 28-102', color: 'amber' },
        { icon: 'thermometer', title: 'Insulation per Table 37', note: 'Supply conductor insulation temperature must meet Table 37 — Rule 28-104(1)(a)', color: 'rose' },
        { icon: 'ruler', title: 'Size at 75 C', note: 'Ampacity is based on the 75 C column regardless of insulation — Rule 28-104(1)(c)', color: 'emerald' },
        { icon: 'fire', title: 'High Temp = Long Run', note: 'If Table 37 > 75 C, conductors >= 1.2 m long and offset from motor — Rule 28-104(3)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 3. CONDUCTOR SIZING — INDIVIDUAL, GROUPS, FEEDER, SECONDARY (Rules 28-106 to 28-112)
    // =========================================================================
    {
      id: '28-conductor-sizing',
      title: 'Conductor Sizing — The 125% Rule for Motors',
      rules: 'Rules 28-106 to 28-112',
      explanation:
        'This is the heart of Section 28 and appears on nearly every exam. The rules cover how to size the branch circuit insulated conductors to individual motors, groups of motors, feeders, and wound-rotor secondaries.\n\nRule 28-106 (Insulated conductors — Individual motors):\n(1) "The insulated conductors of a branch circuit supplying a motor for use on continuous duty service shall have an ampacity not less than 125% of the full load current rating of the motor." This is THE 125% rule.\n(2) The insulated conductors of a branch circuit supplying a motor for use on non-continuous duty service shall have an ampacity not less than the current value obtained by multiplying the full load current rating of the motor by the applicable percentage given in Table 27 for the duty involved, or for varying duty service where a deviation has been allowed in accordance with Rule 2-030 by a percentage less than that specified in Table 27.\n(3) Tap conductors supplying individual motors from a single set of branch circuit overcurrent devices supplying two or more motors shall have an ampacity at least equal to that of the branch circuit insulated conductors, except that where the tap conductors do not exceed 7.5 m in length, they shall be permitted to be sized in accordance with Subrule 1) or 2), provided that the ampacity so determined is not less than one-third of the ampacity of the branch circuit insulated conductors.\n\nRule 28-108 (Insulated conductors — Two or more motors):\n(1) Insulated conductors supplying a group of two or more motors shall have an ampacity not less than:\n  (a) 125% of the full load current rating of the motor having the largest full load current rating plus the full load current ratings of all the other motors in the group, where all motors in the group are for use on continuous duty service;\n  (b) the total of the calculated currents determined in accordance with Rule 28-106 2) for each motor, where all motors in the group are for use on non-continuous duty service; or\n  (c) the total of the following, where the group consists of two or more motors for use on both continuous and non-continuous duty service:\n    (i) 125% of the current of the motor having the largest full load current rating for use on continuous duty service;\n    (ii) the full load current ratings of all other motors for use on continuous duty service; and\n    (iii) the calculated current determined in accordance with Rule 28-106 2) for motors for use on non-continuous duty service.\n(2) Where the circuitry is interlocked in order to prevent all motors of the group from running at the same time, the size of the conductors feeding the group shall be permitted to be determined for the motor, or group of motors operating at the same time, that has the largest rating selected as determined in Subrule 1).\n(3) Demand factors shall be permitted to be applied where the character of the motor loading justifies reduction of the ampacity of the insulated conductors to less than the ampacity specified in Subrule 1), provided that:\n  (a) the insulated conductors have sufficient ampacity for the maximum demand load; and\n  (b) the rating or setting of the overcurrent devices protecting them is in accordance with Rule 28-204 4).\n\nRule 28-110 (Feeder conductors):\n(1) Where a feeder supplies both motor loads and other loads, the ampacity of the insulated conductors shall be calculated in accordance with Rules 28-106 and 28-108 plus the requirements of the other loads.\n(2) The ampacity of a tap from a feeder to a single set of overcurrent devices protecting a motor branch circuit shall be not less than that of the feeder, except that the ampacity of the tap shall be permitted to be calculated in accordance with Rules 28-106 and 28-108 if the tap does not exceed:\n  (a) 3 m in length and is enclosed in metal; or\n  (b) 7.5 m in length, has an ampacity not less than one-third that of the feeder, and is suitably protected from mechanical damage.\n\nRule 28-112 (Secondary insulated conductors):\n(1) Insulated conductors connecting the secondaries of wound rotor motors to their controllers shall have an ampacity not less than:\n  (a) 125% of the rated full load secondary current for motors used on continuous duty service; or\n  (b) the percentage of rated full load current specified in Table 27 for motors used on non-continuous duty service.\n(2) Ampacities of insulated conductors connecting secondary resistors to their controllers shall be not less than that determined by applying the appropriate percentage in Table 28 to the maximum current that the devices are required to carry.',
      fieldScenario:
        'A 10 hp, 230 V three-phase motor runs a compressor 24/7 (continuous duty). From Table 44, the FLA is 28 A. Rule 28-106(1) requires the branch circuit conductors to carry at least 125 percent of 28 A = 35 A. You select #8 RW90 (40 A at 75 C column) per Rule 28-104(1)(c).\n\nNext, a grouped machine tool has three motors: 25 A, 20 A, and 15 A, all continuous duty. Rule 28-108(1)(a) says to take 125 percent of the LARGEST (25 A x 1.25 = 31.25 A) PLUS the FLA of the others (20 + 15 = 35 A), giving 66.25 A. That is the group branch circuit ampacity.\n\nA conveyor has four motors but is interlocked so only two ever run together. Rule 28-108(2) lets you size for just those two motors operating simultaneously. For a feeder that supplies both the motors and lighting loads, Rule 28-110(1) says compute the motor portion per 28-106/28-108 THEN add the lighting load at its demand factor. For a tap from a 400 A feeder to a 100 A motor overcurrent device, Rule 28-110(2)(a) lets you drop to conductors sized per 28-106 if the tap is under 3 m in metal conduit. For a 7.5 m tap, the ampacity must be at least one-third of the 400 A feeder = 133 A and protected from mechanical damage.\n\nOn a wound rotor motor rated 40 A secondary current, Rule 28-112(1)(a) says the rotor-to-controller leads must carry 125 percent x 40 = 50 A minimum (continuous duty).',
      keyPoints: [
        'THE 125% RULE: branch circuit conductors to a single continuous duty motor = >= 125% of FLA (Rule 28-106(1))',
        'Non-continuous duty: use Table 27 percentages, NOT 125% (Rule 28-106(2))',
        'Tap conductors for individual motors within a group can be sized like branch circuit conductors if <= 7.5 m and >= 1/3 of the branch circuit ampacity (Rule 28-106(3))',
        'Group of continuous duty motors: 125% of LARGEST FLA + 100% of all other FLAs (Rule 28-108(1)(a))',
        'Mixed continuous/non-continuous group: 125% of largest continuous + 100% of other continuous + Table 27 for non-continuous (Rule 28-108(1)(c))',
        'Interlocked motors: size for the largest combination that can run simultaneously (Rule 28-108(2))',
        'Demand factors permitted where loading justifies, provided sufficient ampacity for max demand and OCPD meets Rule 28-204(4) (Rule 28-108(3))',
        'Feeder with both motor + other loads: motor portion per 28-106/28-108 PLUS other load requirements (Rule 28-110(1))',
        'Feeder tap <= 3 m enclosed in metal: sized per 28-106/28-108 (Rule 28-110(2)(a))',
        'Feeder tap <= 7.5 m: >= 1/3 of feeder ampacity and protected from mechanical damage (Rule 28-110(2)(b))',
        'Wound rotor secondary conductors: 125% of rated secondary current (continuous duty) or Table 27 % (non-continuous) (Rule 28-112(1))',
        'Secondary resistor conductors: use Table 28 percentages (Rule 28-112(2))',
      ],
      diagramaMermaid: `graph TD
    A["Conductor Sizing\\n(Rule 28-106)"] --> B["Continuous Duty\\n125% of FLA"]
    A --> C["Non-Continuous\\nTable 27 %"]
    D["Group of Motors\\n(Rule 28-108)"] --> E["All Continuous:\\n125% LARGEST FLA\\n+ 100% OTHERS"]
    D --> F["All Non-Continuous:\\nSum of Rule 28-106(2)\\nfor each"]
    D --> G["Mixed:\\n125% largest continuous\\n+ 100% other continuous\\n+ Table 27 non-continuous"]
    H["Feeder\\n(Rule 28-110)"] --> I["Motor loads\\nper 28-106/28-108"]
    H --> J["Plus other loads"]
    K["Feeder Tap"] --> L["<= 3 m in metal\\n(Rule 28-110(2)(a))"]
    K --> M["<= 7.5 m\\n>= 1/3 feeder\\nprotected\\n(Rule 28-110(2)(b))"]
    N["Wound Rotor\\nSecondary\\n(Rule 28-112)"] --> O["125% of rated\\nsecondary current"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style H fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'The 125% Rule', note: 'Continuous duty motor branch conductors >= 125% of FLA — Rule 28-106(1)', color: 'rose' },
        { icon: 'ruler', title: 'Group Rule', note: '125% of LARGEST motor FLA + 100% of the rest — Rule 28-108(1)(a)', color: 'amber' },
        { icon: 'wire', title: 'Tap 3 m in Metal', note: 'Feeder tap to motor OCPD up to 3 m in metal OK at motor ampacity — Rule 28-110(2)(a)', color: 'sky' },
        { icon: 'magnet', title: 'Interlocked Groups', note: 'Size for max combination that can run at the same time — Rule 28-108(2)', color: 'emerald' },
        { icon: 'power', title: 'Wound Rotor Secondary', note: 'Rotor-to-controller leads also use 125% rule for continuous duty — Rule 28-112(1)(a)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 4. BRANCH CIRCUIT OVERCURRENT PROTECTION (Rules 28-200 to 28-212)
    // =========================================================================
    {
      id: '28-branch-ocpd',
      title: 'Branch Circuit Overcurrent Protection — Table 29 & Percentages',
      rules: 'Rules 28-200 to 28-212',
      explanation:
        'Branch circuit overcurrent protection (OCPD) on motor circuits is unusual — it is set much higher than the conductor ampacity because the overload relay at the starter (not the breaker/fuse) handles steady-state overload. The branch OCPD is there ONLY for short circuit and ground fault.\n\nRule 28-200 (Branch circuit overcurrent protection — see Appendix B):\n(1) Each ungrounded conductor of a motor branch circuit shall be protected by an overcurrent device in accordance with Subrules 2) to 5).\n(2) The overcurrent device required by Subrule 1) shall be: (a) a non-time-delay fuse; (b) a time-delay fuse; (c) an inverse-time circuit breaker; (d) an instantaneous-trip (magnetic only) circuit interrupter applied in accordance with Rule 28-210; or (e) a self-protected combination motor controller selected in accordance with Rule 28-500.\n(3) The rating of the overcurrent device required by Subrule 1) shall:\n  (a) not exceed the values given in Table 29 using the rated full load current of the motor, except that an overcurrent device having a minimum rating or setting of 15 A shall be permitted even though it exceeds the values specified in Table 29; and\n  (b) for a branch circuit supplying two or more motors, not exceed the maximum value permitted by Rule 28-206.\n(4) Where an overcurrent device rated in accordance with Subrule 3) a) will not permit the motor to start, the rating or setting of the overcurrent device shall be permitted to be increased as follows:\n  (a) for a non-time-delay fuse, not more than:\n    (i) 400% of the motor full load current, for fuses rated up to 600 A; or\n    (ii) 300% of the motor full load current, for fuses rated 601 to 6000 A;\n  (b) for a time-delay fuse, not more than 225% of the motor full load current; and\n  (c) for an inverse time circuit breaker, not more than:\n    (i) 400% of the motor full load current, for circuit breakers rated up to 100 A; or\n    (ii) 300% of the motor full load current, for circuit breakers rated greater than 100 A.\n(5) Where the overcurrent device required by Subrule 1) is a thermal magnetic circuit breaker that has separate instantaneous-trip settings, the instantaneous-trip setting shall not be greater than that specified in Rule 28-210.\n\nRule 28-202 (Overcurrent protection marked on equipment): Where branch circuit protective device characteristics and ratings or settings are specified in the marking of motor control equipment, they shall not be exceeded, notwithstanding any greater rating or setting permitted by Rule 28-200.\n\nRule 28-204 (Feeder overcurrent protection):\n(1) For a feeder supplying motor branch circuits only, the ratings or settings of the feeder overcurrent device shall not exceed the calculated value of the overcurrent device permitted by Rule 28-200 for the motor that is permitted the highest rated overcurrent devices of any motor supplied by the feeder, plus the sum of the full load current ratings of all other motors that will be in operation at the same time.\n(2) Where a feeder supplies a group of motors, two or more of which are required to start simultaneously, and the feeder overcurrent devices as calculated in accordance with Subrule 1) are not sufficient to allow the motors to start, the rating or setting of the feeder overcurrent devices shall be permitted to be increased as necessary, to a maximum that does not exceed the rating permitted for a single motor having a full load current rating not less than the sum of the full load current ratings of the greatest number of motors that start simultaneously, plus the sum of the full load current ratings of all other motors that will be in operation at the same time, provided that this value does not exceed 300% of the ampacity of the feeder conductors.\n(3) Where a feeder supplies one or more motor branch circuits together with other loads, the overcurrent protection required shall be determined by calculating the overcurrent protection required for the motor circuits and adding to this value the requirements of the other loads supplied by the feeder.\n(4) Where a demand factor has been applied as permitted in Rule 28-108(3), the rating or setting of the overcurrent device(s) protecting a feeder shall not exceed the ampacity of the feeder, except as permitted by Rule 14-104 and Table 13.\n\nRule 28-206 (Grouping of motors on a single branch circuit): Two or more motors shall be permitted to be grouped under the protection of a single set of branch circuit overcurrent devices having a rating or setting calculated in accordance with Rule 28-204 1), provided that the protection conforms to one of the following:\n(a) the rating or setting of the overcurrent devices does not exceed 15 A;\n(b) protection is provided for the control equipment of the motors by having the branch circuit overcurrent devices rated or set at (i) values not in excess of those marked on the control equipment for the lowest rated motor of the group as suitable for the protection of that control equipment, or (ii) in the absence of such markings, values not in excess of 400% of the full load current of the lowest rated motor;\n(c) the motors are used on a machine tool or woodworking machine under specific construction conditions: (i) control equipment is arranged so that all contacts that open motor primary circuits are in enclosures forming part of the machine base or separate mounting with wall thickness not less than 1.69 mm for steel, 2.4 mm for malleable cast iron, or 6.3 mm for other cast metal, with hinged doors and substantial catches and no openings to the floor or foundation; and (ii) the branch OCPD does not exceed that permitted by Table 29 for the largest motor in the group plus the sum of FLA of all others in operation, but in no case more than 200 A at 250 V or less, or 100 A at 251 to 750 V;\n(d) all the motors are operated by a single controller, as provided for in Rule 28-500 3) d);\n(e) where a deviation is allowed in accordance with Rule 2-030 for a group of motors that form part of the coordinated drive of a single machine or process, whereby the failure of one motor to operate creates a hazard unless all the other motors in the group are stopped; or\n(f) the motors are contained within and form part of refrigerant equipment on a 120 V branch circuit protected at not more than 20 A, where each motor is rated not more than 1 hp and has a full load current rating of not more than 6 A.\n\nRule 28-208 (Size of fuseholders): Where fuses are used for motor branch circuit or feeder protection, the fuseholders shall not be of a size smaller than those required to accommodate fuses of the maximum rating permitted by Table 29, except that fuseholders of a smaller size shall be permitted to be used:\n(a) where Rule 28-202 is applicable;\n(b) where fuses having time delay appropriate for the starting characteristics of the motor are used, in which case the fuseholders shall not be smaller than those required to accommodate fuses rated at 125% of the full load current of the motor; or\n(c) in the case of a circuit supplying a group of motors, where the fuseholders accommodate fuses of a size calculated by taking 150% of the largest motor current and adding to this value the applicable full load currents of all other motors in the group that may be in operation at the same time.\n\nRule 28-210 (Instantaneous-trip circuit breakers — see Appendix B): When used for branch circuit protection, instantaneous-trip circuit breakers shall be part of a combination motor starter or controller that also provides overload protection and:\n(a) rated or adjusted, for an ac motor, to trip at not more than 1300% of the motor full load current or at not more than 215% of the motor locked rotor current, where given, except that ratings or settings for trip currents need not be less than 15 A; or\n(b) rated or adjusted, for a dc motor rated at 50 hp or less, to trip at not more than 250% of the motor full load current, or for a dc motor rated at more than 50 hp, to trip at not more than 200% of the motor full load current.\n\nRule 28-212 (Semiconductor fuses — see Appendix B): Where power electronic devices are used in a solid-state motor controller system, semiconductor fuses integral to the controller shall be permitted in addition to the protection determined by Rule 28-200 1).',
      fieldScenario:
        'Your 10 hp, 230 V three-phase motor has FLA of 28 A. You need to size the branch circuit OCPD. First, Rule 28-200(3)(a) sends you to Table 29 — say that value yields a maximum time-delay fuse of 175% x 28 = 49 A, so you choose a standard 50 A time-delay fuse. When the motor trips on startup, Rule 28-200(4)(b) lets you bump the time-delay fuse to 225% of FLA = 63 A, and you size up to 60 A standard. If the manufacturer marked the starter "Max 40 A time-delay fuse", Rule 28-202 says you must NOT exceed 40 A regardless of what Rule 28-200 would allow.\n\nTwo motors share a feeder — one 10 hp at 28 A and a 5 hp at 15.2 A. Under Rule 28-204(1), you size the feeder OCPD at the highest OCPD permitted for one motor (say 50 A for the 10 hp) PLUS the 15.2 A of the other: 65.2 A max.\n\nYou have two 5 hp motors ganged on one branch circuit per Rule 28-206. You can group them only if one of the six conditions applies — for example, (b): the OCPD does not exceed the marking on the lowest rated motor controller, OR 400% of its FLA.\n\nAn instantaneous-trip breaker on an ac motor — Rule 28-210(a) caps the setting at 1300% of FLA or 215% of LRC. A 100 hp, 150 A FLA motor: 1300% of 150 = 1950 A max setting.\n\nA time-delay fuse set per Rule 28-208(b) means the fuseholder must accommodate a fuse rated at least 125% of the FLA — not smaller.',
      keyPoints: [
        'Motor branch OCPD protects against short circuit and ground fault ONLY — overload handled by the starter overload relay (Rule 28-200)',
        'Permitted OCPDs: non-time-delay fuse, time-delay fuse, inverse-time breaker, instantaneous-trip breaker (per 28-210), or self-protected combination controller (Rule 28-200(2))',
        'Max rating = Table 29 % x FLA, but minimum 15 A OCPD always permitted even if it exceeds Table 29 (Rule 28-200(3)(a))',
        'Non-time-delay fuse max bump: 400% of FLA (up to 600 A) or 300% (601–6000 A) (Rule 28-200(4)(a))',
        'Time-delay fuse max bump: 225% of FLA (Rule 28-200(4)(b))',
        'Inverse time CB max bump: 400% of FLA (up to 100 A) or 300% (over 100 A) (Rule 28-200(4)(c))',
        'Marking on equipment OVERRIDES Rule 28-200 — never exceed it (Rule 28-202)',
        'Feeder OCPD = highest single-motor OCPD per Rule 28-200 + sum of FLA of other running motors (Rule 28-204(1))',
        'Feeder OCPD may be increased for simultaneous starts but never more than 300% of feeder ampacity (Rule 28-204(2))',
        'Grouping motors on one branch circuit: one of six conditions in Rule 28-206 must apply',
        'Instantaneous-trip CB: <= 1300% of FLA or 215% of LRC for ac motors (Rule 28-210(a))',
        'Instantaneous-trip CB for dc motors: <= 250% FLA (<= 50 hp) or <= 200% FLA (> 50 hp) (Rule 28-210(b))',
        'Fuseholders sized per Table 29 max, except 125% of FLA for time-delay fuses (Rule 28-208(b))',
      ],
      diagramaMermaid: `graph TD
    A["Motor Branch OCPD\\n(Rule 28-200)"] --> B["Table 29 x FLA\\n(max allowed)"]
    B --> C{"Will motor start?"}
    C -->|No| D["Increase per\\nRule 28-200(4)"]
    D --> E["NTD Fuse:\\n400% (<=600A)\\n300% (601-6000A)"]
    D --> F["TD Fuse:\\n225% of FLA"]
    D --> G["Inverse Time CB:\\n400% (<=100A)\\n300% (>100A)"]
    C -->|Yes| H["Size OK"]
    I["Equipment Marking\\n(Rule 28-202)"] --> J["NEVER exceed\\nmarked rating"]
    K["Instantaneous CB\\n(Rule 28-210)"] --> L["AC: 1300% FLA\\nor 215% LRC"]
    K --> M["DC <=50 hp: 250% FLA\\nDC >50 hp: 200% FLA"]
    N["Feeder OCPD\\n(Rule 28-204)"] --> O["Highest motor OCPD\\n+ FLA of others"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style I fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style K fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'shield', title: 'Branch OCPD = SC/GF Only', note: 'Branch OCPD protects short circuit/ground fault; overload relay does overload — Rule 28-200', color: 'rose' },
        { icon: 'bolt', title: 'Table 29 First', note: 'Start with Table 29 percentages of FLA; 15 A minimum always OK — Rule 28-200(3)(a)', color: 'sky' },
        { icon: 'fire', title: 'Starting Bump Limits', note: 'TD fuse 225%, inverse time CB up to 400% (<=100 A) — Rule 28-200(4)', color: 'amber' },
        { icon: 'label', title: 'Marking Wins', note: 'If controller is marked, that value caps the OCPD — Rule 28-202', color: 'violet' },
        { icon: 'lock', title: 'Instantaneous Trip Limits', note: 'AC motor: max 1300% FLA or 215% LRC — Rule 28-210(a)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 5. OVERLOAD AND OVERHEATING PROTECTION (Rules 28-300 to 28-318)
    // =========================================================================
    {
      id: '28-overload-overheating',
      title: 'Overload and Overheating Protection',
      rules: 'Rules 28-300 to 28-318',
      explanation:
        'Overload protection is separate from branch circuit overcurrent protection. Overload protection prevents motor damage from prolonged, sustained currents that exceed the motor rating. It is typically the overload relay in the starter.\n\nRule 28-300 (Overload protection required): "The branch circuit conductors and control equipment of each motor shall have overload protection, except as permitted by Rule 28-308."\n\nRule 28-302 (Types of overload protection):\n(1) Overload devices shall be either:\n  (a) a separate overload device that is responsive to motor current and that shall be permitted to combine the function of overload and overcurrent protection if it is capable of protecting the circuit and motor under both overload and short-circuit conditions; or\n  (b) a protective device, integral with the motor and responsive to motor current or to motor current and temperature, provided that such a device will protect the insulated circuit conductors and control equipment as well as the motor.\n(2) Fuses used as separate overload protection of motors shall be time-delay fuses of the type referred to in Rule 14-200.\n\nRule 28-304 (Number and location of overload devices — see Appendix B):\n(1) The number and location of current-responsive devices shall, unless otherwise required, be as follows:\n  (a) if fuses are used, one in each ungrounded conductor; or\n  (b) if devices other than fuses are used, as specified in Table 25.\n(2) Unless a deviation has been allowed in accordance with Rule 2-030, where current-responsive devices are used for the overload protection of three-phase motors, such devices shall consist of three current-responsive elements that shall be permitted to be:\n  (a) connected directly in the motor circuit insulated conductors as required by Subrule 1); or\n  (b) fed by two or three current transformers connected so that all three phases will be protected.\n\nRule 28-306 (Rating or trip selection of overload devices — see Appendix B):\n(1) Overload devices responsive to motor current, if of the fixed type, shall be selected or rated or, if of the adjustable type, shall be set to trip at not more than the following:\n  (a) 125% of the full load current rating of a motor having a marked service factor of 1.15 or greater; or\n  (b) 115% of the full load current rating of a motor that does not have a marked service factor or where the marked service factor is less than 1.15.\n(2) Where a motor overload device is connected so that it does not carry the total current designated on the motor nameplate, such as wye-delta starting, the percentage of motor nameplate current applying to the selection or setting of the overload device shall be clearly marked on the motor starter shown in the motor starter manufacturer\'s overload selection table.\n\nRule 28-308 (Overload protection not required — see Appendix B): Overload protection shall not be required for motors complying with any of the following:\n(a) a manually started motor rated at 1 hp or less that is continuously attended while in operation and is on: (i) a branch circuit having overcurrent protection rated or set at not more than 15 A; or (ii) an individual branch circuit having overcurrent protection as required by Table 29 if it can be readily determined from the starting location that the motor is running;\n(b) an automatically started motor having a rating of 1 hp or less forming part of an assembly equipped with other safety controls that protect the motor from damage due to stalled rotor current and on which a nameplate, located so that it is visible after installation, indicates that such protection features are provided; or\n(c) a motor that conforms with CSA C22.2 No. 77.\n\nRule 28-310 (Shunting of overload protection during starting): Overload protection shall be permitted to be shunted or cut out of the circuit during the starting period, provided that the device by which the protection is shunted or cut out cannot be left in the starting position and that the overcurrent device is in the motor circuit during the starting period.\n\nRule 28-312 (Automatic restarting after overload): Where automatic restarting of a motor after a shutdown on overload could cause injury to persons, the overload or overheating devices protecting the motor shall be arranged so that automatic restarting cannot occur.\n\nRule 28-314 (Overheating protection required — see Appendix B): "Each motor shall be provided with overheating protection, except as permitted by Rule 28-318."\n\nRule 28-316 (Types of overheating protection — see Appendix B): Where required by Rule 28-314, overheating protection shall be provided by devices integral with the motor and responsive to both motor current and temperature or to motor temperature only, and shall be arranged to cut off power to the motor or, where a deviation has been allowed in accordance with Rule 2-030, to activate a warning signal when the temperature exceeds the safe limit for the motor.\n\nRule 28-318 (Overheating protection not required): Overheating protection shall not be required:\n(a) where the motor circuit requires no overload protection under Rule 28-308; or\n(b) where overload protective devices required by Rule 28-302 adequately protect the motor against overheating due to excess current, and the motor is in a location where: (i) ambient temperatures are not more than 10 degrees C higher than those at the location of the overload devices; and (ii) dust or other conditions will not interfere with the normal dissipation of heat from the motor.',
      fieldScenario:
        'A 25 hp, 230 V three-phase motor with a service factor of 1.15 has a nameplate FLA of 68 A. Rule 28-306(1)(a) lets you set the overload relay at 125% of 68 A = 85 A maximum. If the same motor had no service factor marked, Rule 28-306(1)(b) would limit you to 115% x 68 A = 78.2 A maximum.\n\nBeing a three-phase motor, Rule 28-304(2) requires three current-responsive elements (three OL heaters or electronic channels), either directly in the circuit or fed by two/three CTs. A thermistor embedded in the stator windings satisfies Rule 28-302(1)(b) as an integral protective device responsive to current and temperature.\n\nDuring wye-delta starting, the OL relay is in the delta loop and only sees 58% of the line current — Rule 28-306(2) says the starter manufacturer\'s overload selection table must clearly mark the percentage applying to the selection.\n\nOn a small 1/2 hp bench grinder that is only used under operator supervision and is on a 15 A breaker, Rule 28-308(a)(i) exempts it from overload protection. An automatic sump pump rated 3/4 hp with integral thermal cutout meets Rule 28-308(b). An industrial fan motor that automatically restarts could pull operator into a belt drive — Rule 28-312 says the overload must be arranged so it cannot auto-restart. A motor in a hot boiler room that is much hotter than the OL relay location needs its OWN overheating protection because Rule 28-318(b)(i) requires the ambient to be within 10 degrees C of the OL device location to skip overheating protection.',
      keyPoints: [
        'Overload protection is REQUIRED on branch conductors and control equipment of each motor, except per Rule 28-308 (Rule 28-300)',
        'Overload may be a separate current-responsive device or integral to the motor responsive to current or current + temperature (Rule 28-302(1))',
        'Fuses used as overload protection MUST be time-delay fuses per Rule 14-200 (Rule 28-302(2))',
        'Fuse overload: one in each ungrounded conductor; non-fuse devices per Table 25 (Rule 28-304(1))',
        'Three-phase motors need THREE current-responsive elements (directly in the circuit or via 2-3 CTs) (Rule 28-304(2))',
        'Overload setting: <= 125% FLA for SF >= 1.15; <= 115% FLA for SF < 1.15 or no SF marked (Rule 28-306(1))',
        'Wye-delta or similar: percentage must be marked on the manufacturer\'s overload selection table (Rule 28-306(2))',
        'Overload NOT required: manual <=1 hp continuously attended on <=15 A OCPD (Rule 28-308(a))',
        'Overload NOT required: automatic <=1 hp with integral protection and visible nameplate (Rule 28-308(b))',
        'Overload shunting allowed during start if the shunt device cannot stay in the start position (Rule 28-310)',
        'Automatic restart after overload NOT permitted where restart could injure persons (Rule 28-312)',
        'Each motor requires overheating protection except per Rule 28-318 (Rule 28-314)',
        'Overheating protection must be integral, responsive to current + temperature or temperature alone (Rule 28-316)',
        'Overheating exemption: motor ambient must be within 10 C of the overload device location (Rule 28-318(b)(i))',
      ],
      diagramaMermaid: `graph TD
    A["Overload Protection\\n(Rule 28-300)"] --> B["Types\\n(Rule 28-302)"]
    B --> C["Separate device\\nresponsive to current"]
    B --> D["Integral to motor\\ncurrent or current+temp"]
    A --> E["Trip Setting\\n(Rule 28-306)"]
    E --> F["SF >= 1.15:\\n125% FLA max"]
    E --> G["SF < 1.15 or none:\\n115% FLA max"]
    H["3-phase:\\n3 OL elements\\n(Rule 28-304(2))"]
    I["Exemptions\\n(Rule 28-308)"] --> J["<=1 hp manual\\nattended, 15A OCPD"]
    I --> K["<=1 hp auto\\nintegral protection"]
    I --> L["CSA C22.2 No.77\\ncompliant"]
    M["Overheating\\n(Rule 28-314)"] --> N["Integral sensor\\ncurrent + temp"]
    O["Auto-restart forbidden\\nwhere injury risk\\n(Rule 28-312)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style I fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style M fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'thermometer', title: '125% vs 115%', note: 'SF >= 1.15 allows 125% of FLA; otherwise 115% — Rule 28-306(1)', color: 'rose' },
        { icon: 'shield', title: 'Three Elements for Three Phases', note: 'Three-phase motors need 3 current-responsive elements — Rule 28-304(2)', color: 'sky' },
        { icon: 'warning', title: 'No Auto-Restart if Unsafe', note: 'If restart after overload could injure, prevent auto-restart — Rule 28-312', color: 'amber' },
        { icon: 'fire', title: 'Overheating is Separate', note: 'Every motor needs overheating protection unless exempted by Rule 28-318', color: 'violet' },
        { icon: 'bolt', title: '10 C Ambient Rule', note: 'Skip overheating protection only if motor ambient <= OL device + 10 C — Rule 28-318(b)(i)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 6. UNDERVOLTAGE PROTECTION (Rule 28-400)
    // =========================================================================
    {
      id: '28-undervoltage',
      title: 'Undervoltage Protection',
      rules: 'Rule 28-400',
      explanation:
        'Undervoltage is not the same as overload or overcurrent — it addresses what happens when supply voltage drops or fails and then returns. An unexpected restart can be dangerous.\n\nRule 28-400 (Undervoltage protection required for motors — see Appendix B): "Motors shall be disconnected from the source of supply in case of undervoltage by one of the following means, unless it is evident that no hazard will be incurred through lack of such disconnection:\n(a) when automatic restarting is liable to create a hazard, the motor control device shall provide low-voltage protection; or\n(b) when it is necessary or desirable that a motor stop on failure or reduction of voltage and automatically restart on return of voltage, the motor control device shall provide low-voltage release."\n\nThere are two distinct concepts:\n- Low-voltage protection (LVP): drops out on undervoltage and stays dropped out until manually reset. A 3-wire start/stop control circuit with a seal-in contact is the classic LVP.\n- Low-voltage release (LVR): drops out on undervoltage and automatically picks up again when voltage returns. A 2-wire (maintained contact) control is the classic LVR.\n\nThe designer chooses based on hazard: if an unattended restart could hurt someone (conveyor, machine tool, hoist), use LVP. If it is desirable for the motor to restart (pump that must keep running, HVAC fan), use LVR. Some applications (a small fractional hp fan where nothing can get hurt) do not need either — the rule lets you skip it if "it is evident that no hazard will be incurred".',
      fieldScenario:
        'You are wiring a conveyor at a packaging plant. Workers are sometimes standing at the loading end. Rule 28-400(a) applies — automatic restart could seriously injure them — so you must use low-voltage protection. You wire a 3-wire start/stop control with a contactor seal-in: when the voltage dips and the coil drops out, the seal-in opens and the operator must press START again to restart.\n\nNext door, a chilled water circulation pump must keep running for process safety. If power blips, the pump should restart on its own. Rule 28-400(b) permits low-voltage release: you use a 2-wire maintained-contact control (like a pressure switch or float). When voltage returns, the contactor re-energizes automatically.\n\nA small desk fan on a 120 V receptacle clearly poses no hazard on automatic restart — the rule\'s "unless it is evident that no hazard will be incurred" clause lets you skip both LVP and LVR.',
      keyPoints: [
        'Undervoltage protection required unless "it is evident that no hazard will be incurred" (Rule 28-400)',
        'Low-voltage PROTECTION (LVP): drops out on UV and requires manual restart — use when automatic restart creates hazard (Rule 28-400(a))',
        'Low-voltage RELEASE (LVR): drops out on UV and automatically restarts when voltage returns — use when automatic restart is desired (Rule 28-400(b))',
        'LVP classic implementation: 3-wire start/stop with seal-in contactor',
        'LVR classic implementation: 2-wire maintained contact (pressure switch, float, thermostat)',
        'Choice between LVP and LVR is based on HAZARD assessment, not just convenience',
      ],
      diagramaMermaid: `graph TD
    A["Undervoltage\\nProtection\\n(Rule 28-400)"] --> B["Hazard if motor\\nrestarts automatically?"]
    B -->|"Yes"| C["Low Voltage PROTECTION\\n(Rule 28-400(a))"]
    B -->|"No, restart desired"| D["Low Voltage RELEASE\\n(Rule 28-400(b))"]
    B -->|"No hazard evident"| E["Neither required\\n(opening clause)"]
    C --> C1["3-wire start/stop\\nSeal-in contactor"]
    C --> C2["Manual restart\\nafter UV event"]
    D --> D1["2-wire maintained\\ncontact control"]
    D --> D2["Auto-restart\\nwhen voltage returns"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: 'LVP vs LVR', note: 'LVP = manual restart after UV; LVR = auto restart after UV — Rule 28-400', color: 'rose' },
        { icon: 'lock', title: 'Hazard Decides', note: 'If auto-restart could injure, use LVP — Rule 28-400(a)', color: 'amber' },
        { icon: 'power', title: '3-Wire Control = LVP', note: 'Standard seal-in start/stop contactor implements low-voltage protection', color: 'sky' },
        { icon: 'bolt', title: '2-Wire Control = LVR', note: 'Maintained contact (float, pressure switch) implements low-voltage release', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 7. MOTOR CONTROL (Rules 28-500 to 28-506)
    // =========================================================================
    {
      id: '28-control',
      title: 'Motor Control — Starters, Location, Starting Positions & Control Circuits',
      rules: 'Rules 28-500 to 28-506',
      explanation:
        'Control rules determine what starts and stops a motor, where the control equipment is located, and how ground faults in control wiring must be handled.\n\nRule 28-500 (Control required):\n(1) "Except as permitted by Subrule 3), each motor shall be provided with a motor starter or controller for starting and stopping it that has a rating in horsepower not less than the rating of the motor it serves."\n(2) "A motor controller need not open the circuit in all ungrounded conductors to a motor unless it also serves as a disconnecting means." This is important — a 3-phase starter does not need to open all three phases unless it doubles as the disconnect.\n(3) The motor starter or controller specified in Subrule 1) shall not be required for motors in the following applications:\n  (a) a single-phase portable motor rated at 1/3 hp or less connected by means of a receptacle and attachment plug rated not in excess of 15 A, 125 V;\n  (b) a motor controlled by a manually operated general-use switch complying with Rule 14-510 having an ampere rating not less than 125% of the full load current rating of the motor;\n  (c) a 2-wire portable ac or dc motor having a rating not in excess of 1/3 hp, 125 V controlled by a horsepower rated single-pole motor switch;\n  (d) two or more motors that are required to operate together shall be permitted to be operated from a single controller; or\n  (e) for a motor where the controller is specifically designed for use with that motor, it need not be rated in horsepower.\n\nRule 28-502 (Control location): "A motor controlled manually, either directly or by remote control of a motor starter, shall have the means to operate of the controller located as follows:\n(a) the controller shall be located such that safe operation of the motor and the machinery driven by it is assured, or the motor and the machinery shall be guarded or enclosed to prevent accidents due to contact of persons with live or moving parts; or\n(b) where compliance with Item a) is not practicable because of the type, size, or location of the motor or machinery and its parts, devices shall be provided at each point where the danger of accidents exists by which means the machine or parts of the machine may be stopped in an emergency."\n\nRule 28-504 (Starters having different starting and running positions):\n(1) "Manual motor starters having different starting and running positions shall be constructed so that they cannot remain in the starting position."\n(2) "Magnetic motor starters having different starting and running positions shall be constructed so that they cannot remain in the starting position under normal operating conditions."\n\nRule 28-506 (Grounded control circuit): "When power for a control circuit for a motor controller is obtained conductively from a grounded system, the control circuit shall be arranged so that an accidental ground in the wiring from the controller to any remote or signal device will not:\n(a) start the motor; or\n(b) prevent the stopping of the motor by the normal operation of any control or safety device in the control circuit."\n\nThe 28-506 rule is why 3-wire control stations are typically wired with the STOP button between the common and the coil — a ground fault in the wire running to a remote start button cannot energize the coil.',
      fieldScenario:
        'You are installing a 50 hp motor on a grinder. Rule 28-500(1) says the starter must be rated at least 50 hp. The starter is a three-phase magnetic contactor rated 75 hp at 575 V — acceptable. Because this starter is NOT the disconnect, Rule 28-500(2) means you only need to open at least one phase (realistically all three) to stop the motor; the disconnect must open all ungrounded conductors.\n\nA 1/3 hp portable drill press plugs into a 15 A, 125 V receptacle — Rule 28-500(3)(a) says no starter is required; the cord cap and receptacle act as the control.\n\nThe manual push-button station for an overhead crane lives on the operator\'s platform, 20 m from the motor. Rule 28-502(a) says that is fine because safe operation is assured from that station. But a second e-stop must be mounted at the loading zone where an operator might stand in the path — Rule 28-502(b).\n\nYou are replacing a wye-delta starter. Rule 28-504(2) means the magnetic version is designed with timer logic so it cannot stay in the wye (start) position.\n\nThe control circuit uses a grounded 120 V transformer secondary. You wire STOP button between the common (grounded) side and the coil, with START before STOP to the hot — Rule 28-506 requires this arrangement so a ground fault upstream of the coil cannot start the motor, and a ground fault in the wiring cannot prevent STOP from dropping the contactor.',
      keyPoints: [
        'Every motor must have a starter/controller with hp rating >= motor hp rating (Rule 28-500(1))',
        'A motor controller need NOT open all ungrounded conductors unless it also serves as the disconnect (Rule 28-500(2))',
        'Starter exemption: single-phase portable <=1/3 hp plugged into <=15 A, 125 V receptacle (Rule 28-500(3)(a))',
        'Starter exemption: manually operated general-use switch rated >= 125% of FLA per Rule 14-510 (Rule 28-500(3)(b))',
        'Starter exemption: 2-wire portable ac/dc <=1/3 hp, 125 V with hp-rated single-pole switch (Rule 28-500(3)(c))',
        'Single controller may operate two or more motors required to run together (Rule 28-500(3)(d))',
        'Controller specifically designed for one motor need not be hp-rated (Rule 28-500(3)(e))',
        'Controller location must assure safe operation or be supplemented by e-stops at hazard points (Rule 28-502)',
        'Manual starters with different start/run positions must not remain in the start position (Rule 28-504(1))',
        'Magnetic starters with start/run positions: must not remain in start under normal conditions (Rule 28-504(2))',
        'Grounded control circuit: ground fault must NOT start motor OR prevent normal stopping (Rule 28-506)',
        'Classic wiring: STOP button goes between grounded common and coil to satisfy Rule 28-506',
      ],
      diagramaMermaid: `graph TD
    A["Motor Control\\n(Rule 28-500)"] --> B["Starter hp >=\\nmotor hp"]
    A --> C["Exemptions\\n(Rule 28-500(3))"]
    C --> C1["<=1/3 hp portable\\n15A/125V plug"]
    C --> C2["Manual GU switch\\n>= 125% FLA"]
    C --> C3["2-wire <=1/3 hp\\nhp-rated switch"]
    D["Location\\n(Rule 28-502)"] --> D1["Safe operation\\nassured"]
    D --> D2["E-stops at\\nhazard points"]
    E["Start/Run Positions\\n(Rule 28-504)"] --> E1["Manual: cannot\\nstay in start"]
    E --> E2["Magnetic: cannot\\nstay in start under\\nnormal conditions"]
    F["Grounded Control\\n(Rule 28-506)"] --> F1["Ground fault cannot\\nstart motor"]
    F --> F2["Ground fault cannot\\nprevent stopping"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style E fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Starter hp = Motor hp', note: 'Starter horsepower rating must be >= motor horsepower — Rule 28-500(1)', color: 'sky' },
        { icon: 'lock', title: 'Cannot Stay in Start', note: 'Manual and magnetic starters must not remain in start position — Rule 28-504', color: 'amber' },
        { icon: 'shield', title: 'E-stops at Hazards', note: 'Where remote control is not practicable, provide local stops — Rule 28-502(b)', color: 'rose' },
        { icon: 'warning', title: 'Stop-Then-Start Wiring', note: 'Ground fault must not start the motor or prevent stopping — Rule 28-506', color: 'violet' },
        { icon: 'bolt', title: 'Starter Is Not a Disconnect', note: 'Starter need not open all phases unless it doubles as the disconnect — Rule 28-500(2)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 8. DISCONNECTING MEANS (Rules 28-600 to 28-604)
    // =========================================================================
    {
      id: '28-disconnects',
      title: 'Disconnecting Means — Required, Types, Ratings & Location',
      rules: 'Rules 28-600 to 28-604',
      explanation:
        'Every motor needs a way to be isolated for service. Section 28 specifies what counts as a disconnect, how it must be rated (typically 115% of FLA), and where it must be located — the famous "within sight and within 9 m" rule.\n\nRule 28-600 (Disconnecting means required):\n(1) "Except as permitted by Subrules 2) and 3), a separate disconnecting means shall be provided for:\n  (a) each motor branch circuit;\n  (b) each motor starter or controller; and\n  (c) each motor."\n(2) A single disconnecting means shall be permitted to serve more than one of the functions described in Subrule 1).\n(3) A single disconnecting means shall be permitted to serve two or more motors and their associated starting and control equipment grouped on a single branch circuit.\n\nRule 28-602 (Types and ratings of disconnecting means — see Appendix B):\n(1) A disconnecting means for a motor branch circuit shall be:\n  (a) a manually operable fused or unfused motor-circuit switch that complies with Rule 14-010 b) and has a horsepower rating not less than that of the motor it serves;\n  (b) a moulded case switch or circuit breaker that complies with Rule 14-010 b) and has a current rating not less than 115% of the full load current rating of the motor it serves;\n  (c) an instantaneous-trip circuit breaker that complies with Rules 14-010 b) and 28-210;\n  (d) an equivalent device that opens all ungrounded conductors of the branch circuit simultaneously and is capable of safely making and interrupting the locked rotor current of the connected load;\n  (e) a single plug fuse for a branch circuit having one grounded conductor feeding a 2-wire single-phase or dc motor rated at not more than 1/3 hp, provided that it is used only as an isolating means and is not used to interrupt current; or\n  (f) the draw-out feature of a high-voltage motor starter or controller of the draw-out type that complies with Rule 14-010 b), provided that it is used only as an isolating means and is not used to interrupt current.\n(2) A disconnecting means serving a group of motors on a single branch circuit shall have:\n  (a) a current rating not less than 115% of the full load current rating of the largest motor in the group plus the sum of the full load current ratings of all the other motors in the group that may be in operation at the same time; and\n  (b) a horsepower rating not less than that of the largest motor in the group if a motor-circuit switch is used.\n(3) A disconnecting means for a motor, motor starter, or controller shall comply with Subrule 1), except that:\n  (a) an isolating switch or a general-use switch used as an isolating switch, if lockable in the open position as required by Rule 26-100 2), and having a current rating not less than 115% of the full load current rating of the motor it serves, shall be permitted to serve as the disconnecting means for a motor or motor starter (i) rated at more than 100 hp if for three-phase operation; or (ii) rated at more than 50 hp if for other than three-phase operation;\n  (b) a manually operated across-the-line type of motor starter marked "Suitable for Motor Disconnect" shall be permitted to serve as both starter and disconnecting means for (i) a single motor with a hp rating not less than the motor it serves; (ii) a group of motors with hp rating >= the largest motor and 115% current rating rule; or (iii) a motor or group of motors in HVACR equipment without OCPD when the starter complies with items (i) or (ii);\n  (c) an attachment plug shall be permitted as the disconnect for a portable motor and its starting/control equipment, provided that the plug current rating is >= the minimum conductor ampacity and is used only as an isolating means;\n  (d) the draw-out feature of a high-voltage starter/controller of the draw-out type used only as an isolating means;\n  (e) a manually operated general-use ac switch per Rule 14-510 with current rating >= 125% FLA and need not be hp-rated, for a single-phase motor; and\n  (f) a fused or unfused motor-circuit switch for a group of motors served from a single circuit without needing to exceed the proper fuse rating required, with hp rating >= largest motor and current rating >= 115% of largest FLA plus sum of other simultaneously operating motors.\n(4) The disconnecting means shall NOT be of a type that is electrically operated either automatically or by remote control.\n(5) An enclosure that contains the disconnecting means for an air-conditioning, refrigeration, or heating unit and that is located outdoors shall be suitable for the environment, and where conduit is used as part of the wiring to the disconnecting means located in the enclosure, the conduit shall be drained and sealed in accordance with Rule 22-302.\n\nRule 28-604 (Location of disconnecting means):\n(1) The motor branch circuit disconnecting means described in Rule 28-602 1) a) to d) shall:\n  (a) be located at the distribution centre from where the motor branch circuit originates; and\n  (b) where intended to serve as a single disconnecting means for a motor branch circuit, motor, and controller or starter, also be (i) located in accordance with Subrule 3); or (ii) capable of being locked in the open position by a lock-off device and be clearly labelled to describe the load or loads connected.\n(2) The motor branch circuit disconnecting means described in Rule 28-602 1) f) shall be located in accordance with Subrule 3).\n(3) Except as required in Subrule 5), the motor and motor starter or controller disconnecting means shall be located:\n  (a) within sight of and within 9 m of the motor and the machinery driven by it; and\n  (b) within sight of and within 9 m of the motor starter or controller.\n(4) Notwithstanding Subrule 3), where a motor or group of motors is fed from a single branch circuit in which the branch circuit disconnecting means is not capable of being acceptably locked in the open position and where the motor disconnecting means is a manually operable across-the-line type of motor starter, the motor disconnecting means shall be permitted to be located beyond the limits defined in Subrule 3), provided that: (a) it is capable of safely making and interrupting the locked rotor current of the connected load; (b) it is capable of being locked in the open position; and (c) it can be demonstrated that the location specified in Subrule 3) is clearly impracticable.\n(5) The motor disconnecting means for air-conditioning and refrigeration equipment shall be located within sight of and within 3 m of the equipment.\n(6) The disconnecting means shall be readily accessible or have the means for operating them readily accessible.\n(7) Motor-driven machinery of a movable or portable type for industrial use shall have a motor-circuit switch or circuit breaker mounted on the machine and accessible to the operator.',
      fieldScenario:
        'You install a 30 hp motor inside a pump house. Rule 28-600(1) requires a disconnecting means for the motor branch circuit, the starter, and the motor — but Rule 28-600(2) lets a single disconnect cover all three. You choose a 40 hp, 100 A disconnect switch: the current rating is 115% of FLA (28 A x 115% = 32.2 A, and 40 A well exceeds that) and hp >= motor per Rule 28-602(1)(a).\n\nThe disconnect is mounted in an electrical room 25 m away from the pump. Rule 28-604(3) requires the disconnect to be "within sight of AND within 9 m" of the motor AND the starter — 25 m fails. Solution: mount a local disconnect at the pump within 9 m of the motor, or use the Rule 28-604(1)(b) approach of labelling and lockability if this is the single disconnect for the branch, motor, and controller, AND the Rule 28-604(4) exception applies for a lockable manual across-the-line starter.\n\nAn outdoor condensing unit for an HVAC system requires a special rule — Rule 28-604(5) shortens the distance to within sight and within 3 m, not 9 m. The outdoor enclosure must be rated for the environment and drained/sealed per Rule 22-302 if conduit is used (Rule 28-602(5)).\n\nRule 28-602(4) forbids an electrically-operated-only disconnect — the disconnect must be manually operable. And per Rule 28-604(6) it must be readily accessible — not behind a locked gate or above a ceiling grid.\n\nOn a portable industrial floor sander, Rule 28-604(7) says the motor-circuit switch or CB must be mounted on the machine itself where the operator can reach it.',
      keyPoints: [
        'Disconnecting means required for: each motor branch circuit, each starter/controller, and each motor (Rule 28-600(1))',
        'A single disconnect may serve multiple functions (Rule 28-600(2))',
        'Single disconnect may serve a group of motors on a single branch circuit (Rule 28-600(3))',
        'Motor-circuit switch must be hp-rated >= motor hp (Rule 28-602(1)(a))',
        'Moulded case switch or CB must have current rating >= 115% of motor FLA (Rule 28-602(1)(b))',
        'Disconnect for group: 115% of LARGEST FLA + sum of others in simultaneous operation (Rule 28-602(2)(a))',
        'Isolating switch (lockable, >= 115% FLA) may disconnect motors > 100 hp 3-phase or > 50 hp otherwise (Rule 28-602(3)(a))',
        'Across-the-line manual starter marked "Suitable for Motor Disconnect" may be both starter and disconnect (Rule 28-602(3)(b))',
        'Single-phase motor: general-use ac switch per Rule 14-510 with >= 125% FLA, need not be hp-rated (Rule 28-602(3)(e))',
        'Disconnect must NOT be electrically operated automatically or by remote (Rule 28-602(4))',
        'Outdoor HVACR disconnect enclosure: environment-suitable, drained and sealed per Rule 22-302 (Rule 28-602(5))',
        'Disconnect must be WITHIN SIGHT OF and WITHIN 9 m of motor AND starter (Rule 28-604(3))',
        'A/C and refrigeration: disconnect WITHIN SIGHT and WITHIN 3 m (Rule 28-604(5))',
        'Disconnects must be readily accessible (Rule 28-604(6))',
        'Portable industrial motor-driven machinery: switch/CB mounted ON the machine (Rule 28-604(7))',
      ],
      diagramaMermaid: `graph TD
    A["Disconnect Required\\n(Rule 28-600)"] --> B["Each branch circuit\\nEach starter\\nEach motor"]
    B --> C["Single disconnect\\nmay cover all three"]
    D["Types & Ratings\\n(Rule 28-602)"] --> E["Motor-circuit switch:\\nhp >= motor hp"]
    D --> F["MCSwitch/CB:\\n>= 115% FLA"]
    D --> G["Group: 115% of\\nlargest + sum of others"]
    D --> H["NOT electrically\\noperated only"]
    I["Location\\n(Rule 28-604)"] --> J["Within sight AND\\nwithin 9 m of\\nmotor & starter"]
    I --> K["HVACR: within sight\\nAND within 3 m"]
    I --> L["Readily accessible"]
    I --> M["Portable machinery:\\nmounted on machine"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style I fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'lock', title: 'Within Sight & 9 m', note: 'Motor disconnect must be within sight AND within 9 m of motor and starter — Rule 28-604(3)', color: 'rose' },
        { icon: 'ruler', title: 'HVACR = 3 m', note: 'Air conditioning and refrigeration: within sight AND within 3 m — Rule 28-604(5)', color: 'amber' },
        { icon: 'bolt', title: '115% of FLA', note: 'MCS/CB disconnect current rating >= 115% of motor FLA — Rule 28-602(1)(b)', color: 'sky' },
        { icon: 'shield', title: 'Manual Only', note: 'Disconnect must not be electrically operated automatically/remotely — Rule 28-602(4)', color: 'violet' },
        { icon: 'post', title: 'Label if Remote', note: 'If single disconnect is remote, label it and make it lockable — Rule 28-604(1)(b)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 9. REFRIGERANT MOTOR-COMPRESSORS (Rules 28-700 to 28-714)
    // =========================================================================
    {
      id: '28-refrigerant-motor-compressors',
      title: 'Refrigerant Motor-Compressors — Marking, Conductors, OCPD & Disconnects',
      rules: 'Rules 28-700 to 28-714',
      explanation:
        'Refrigerant motor-compressors (hermetic and semi-hermetic) are sized using rated load current (RLC), not FLA, because the compressor may not have a discrete "motor" with nameplate FLA. A separate set of percentages applies.\n\nRule 28-700 (Rules for refrigerant motor-compressors): Rules 28-702 to 28-714 (a) apply to refrigerant motor-compressors, including hermetic refrigerant motor-compressors and semi-hermetic refrigerant motor-compressors, hereafter referred to as motor-compressors; and (b) supplement or amend the general Rules of this Section.\n\nRule 28-702 (Marking): "Motor-compressors, or equipment that incorporates them, shall be marked as required by Rule 2-100; specifically, the marking shall show the rated load current and the locked rotor current rating."\n\nRule 28-704 (Horsepower rated equipment):\n(1) "Horsepower rated equipment used for the control of motor-compressors and not having a locked rotor current rating shall be given an equivalent locked rotor current rating equal to 6 times the full load current rating."\n(2) Where the full load current rating is not marked, an equivalent full load current rating shall be determined from the horsepower rating by referring to Table 44 or 45 as applicable.\n\nRule 28-706 (Insulated conductor ampacity): "The allowable ampacity of insulated conductors of a branch circuit supplying a motor-compressor, or equipment consisting of one or more motor-compressors and other loads, shall be based on the marked rated load current of the motor-compressor or equipment and shall comply with the general requirements of this Section." Note that you use the MARKED RLC, not an assumed FLA.\n\nRule 28-708 (Overcurrent protection):\n(1) "Except as permitted in Subrule 2), each ungrounded conductor of a branch circuit feeding a motor-compressor shall be protected by an overcurrent device rated or set at not more than 50% of the locked rotor current of the motor-compressor, unless such a device will not permit the motor-compressor to start, in which case the rating or setting shall be permitted to be increased to a value not exceeding 65% of the locked rotor current of the motor-compressor."\n(2) "Subrule 1) shall not be deemed to require use of overcurrent devices rated or set at less than 15 A."\n\nThis 50% / 65% of LRC rule is COMPLETELY DIFFERENT from the Table 29 / FLA approach used for ordinary motors. For compressors, the OCPD is defined against locked rotor current.\n\nRule 28-710 (Overload protection): "The branch circuit insulated conductors and control equipment for each motor-compressor shall be provided with overload protection complying with Rules 28-302 to 28-306, except that:\n(a) the rating or setting of overload relays shall not exceed 140% of the marked rated load current of the motor-compressor;\n(b) the rating or setting of other overload devices, such as fuses, shall not exceed 125% of the marked rated load current of the motor-compressor; and\n(c) assemblies consisting of one or more motor-compressors with or without other loads in combination shall be permitted to include the overload protection as part of the assembly."\n\nNote the higher overload ceiling for relays (140%) than for normal motors (125%).\n\nRule 28-712 (Control equipment):\n(1) "Control equipment used for the control of motor-compressors shall have: (a) either a marked or an equivalent locked rotor current rating not less than that of the motor-compressor that it controls; and (b) either a marked or an equivalent full load current rating not less than that of the rated load current of the motor-compressor that it controls."\n(2) "In all other respects, control equipment for motor-compressors shall be in accordance with Rules 28-500, 28-502, and 28-506."\n\nRule 28-714 (Disconnecting means):\n(1) The disconnecting means serving a motor-compressor shall have: (a) a continuous duty current rating not less than 115% of the rated load current of the motor-compressor; and (b) an interrupting capacity, or an equivalent locked rotor current rating as determined in accordance with Rule 28-704, that is not less than the locked rotor current rating of the motor-compressor.\n(2) Where one disconnecting means serves one or more motor-compressors together with other loads, the disconnecting means shall have: (a) a continuous duty current rating not less than 115% of the rated load current of the motor or motor-compressor having the largest rated load current plus the sum of the rated load currents and full load currents of all other loads that may be in operation at the same time; and (b) an interrupting capacity, or equivalent locked rotor current rating as determined in accordance with Rule 28-704, that is not less than the locked rotor current rating of the motor or motor-compressor having the largest marked or equivalent locked rotor current rating plus the sum of the full load current rating of all other loads that may be in operation at the same time.',
      fieldScenario:
        'You install a 10-ton rooftop air conditioning unit. The compressor nameplate reads: RLC = 24 A, LRC = 150 A. Per Rule 28-702 you confirm both values are marked. Per Rule 28-706 you size the branch circuit conductors using RLC = 24 A with the general Section 28 rules (essentially 125% x 24 = 30 A for continuous duty — though the RTU nameplate typically lists the MCA, which is the calculated minimum circuit ampacity you follow in practice).\n\nOCPD sizing under Rule 28-708(1): start at 50% of LRC = 75 A. If the compressor will not start, bump to 65% of LRC = 97.5 A, rounded down to 90 A standard. Note this is radically different from a regular motor where you use Table 29 against FLA.\n\nOverload is limited by Rule 28-710(a) — the overload relay trip must not exceed 140% of 24 A = 33.6 A. If a fuse is used instead of a relay, Rule 28-710(b) caps it at 125% of 24 A = 30 A.\n\nThe contactor controlling this compressor must have LRC rating >= 150 A and FLA rating >= 24 A per Rule 28-712(1).\n\nThe disconnect must have a continuous current rating >= 115% of 24 = 27.6 A (so a 30 A disconnect is minimum), and an interrupting capacity >= 150 A locked rotor (Rule 28-714(1)).',
      keyPoints: [
        'Rules 28-702 to 28-714 SUPPLEMENT or AMEND the general Section 28 rules for motor-compressors (Rule 28-700)',
        'Motor-compressors must be marked with rated load current (RLC) AND locked rotor current (LRC) (Rule 28-702)',
        'hp-rated equipment without LRC marking: LRC = 6 times FLA (Rule 28-704(1))',
        'Conductor ampacity based on the MARKED RLC per the general rules (Rule 28-706)',
        'OCPD: max 50% of LRC, bumpable to 65% of LRC if motor will not start (Rule 28-708(1))',
        'OCPD never required to be smaller than 15 A (Rule 28-708(2))',
        'Overload RELAY setting: max 140% of RLC (Rule 28-710(a))',
        'Overload FUSE setting: max 125% of RLC (Rule 28-710(b))',
        'Assemblies may include overload protection as part of the assembly (Rule 28-710(c))',
        'Control equipment: LRC rating >= motor-compressor LRC and FLA rating >= RLC (Rule 28-712(1))',
        'Control equipment otherwise per Rules 28-500, 28-502, 28-506 (Rule 28-712(2))',
        'Disconnect for single compressor: >= 115% of RLC continuous AND interrupting capacity >= LRC (Rule 28-714(1))',
        'Disconnect for multi-load: 115% of largest RLC + sum of others, interrupting >= largest LRC + sum of others (Rule 28-714(2))',
      ],
      diagramaMermaid: `graph TD
    A["Refrigerant Motor-\\nCompressor\\n(Rule 28-700)"] --> B["Marking\\n(Rule 28-702)"]
    B --> B1["Must show RLC\\nand LRC"]
    A --> C["Conductors\\n(Rule 28-706)"]
    C --> C1["Based on marked RLC\\n(not FLA)"]
    A --> D["OCPD\\n(Rule 28-708)"]
    D --> D1["50% of LRC\\n(max)"]
    D --> D2["Bump to 65% LRC\\nif cannot start"]
    D --> D3["Never < 15 A"]
    A --> E["Overload\\n(Rule 28-710)"]
    E --> E1["Relay: 140% RLC"]
    E --> E2["Fuse: 125% RLC"]
    A --> F["Disconnect\\n(Rule 28-714)"]
    F --> F1["115% RLC continuous"]
    F --> F2["Interrupting >= LRC"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'label', title: 'RLC and LRC Marked', note: 'Motor-compressor must show rated load current AND locked rotor current — Rule 28-702', color: 'sky' },
        { icon: 'bolt', title: '50% / 65% of LRC', note: 'Compressor branch OCPD starts at 50% LRC, bumps to 65% if needed — Rule 28-708(1)', color: 'rose' },
        { icon: 'thermometer', title: '140% for Relays', note: 'Overload relay set point max is 140% of RLC (higher than regular 125%) — Rule 28-710(a)', color: 'amber' },
        { icon: 'fire', title: '125% for Fuses', note: 'Overload fuse rating cannot exceed 125% of RLC — Rule 28-710(b)', color: 'violet' },
        { icon: 'shield', title: 'Disconnect by LRC', note: 'Disconnect needs 115% RLC continuous AND interrupting >= LRC — Rule 28-714(1)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 10. MULTI-WINDING & PART-WINDING-START MOTORS (Rules 28-800 to 28-812)
    // =========================================================================
    {
      id: '28-multi-winding-part-winding',
      title: 'Multi-Winding and Part-Winding-Start Motors',
      rules: 'Rules 28-800 to 28-812',
      explanation:
        'Multi-winding motors have two or more separate sets of windings (for example, two-speed motors). Part-winding-start motors energize only a portion of the winding during start to reduce inrush, then bring in the rest for run.\n\nRule 28-800 (Rules for multi-winding and part-winding-start motors): "Rules 28-802 to 28-812 apply to the installation of multi-winding and part-winding-start motors."\n\nRule 28-802 (Permanent connection): "Where a multi-winding motor is used with windings connected in a permanent configuration, it shall be treated as a single-winding motor with ratings corresponding to the winding configuration used." So a two-speed motor strapped to only run at high speed becomes an ordinary single-winding motor.\n\nRule 28-804 (Conductor sizes):\n(1) "The insulated circuit conductors on the supply side of the controller for a multi-winding or part-winding-start motor shall be of a size specified by Rule 28-106 for the largest full load current of any winding configuration provided by the controller as connected."\n(2) "Each insulated conductor run from the controller to the motor shall be of the size specified by Rule 28-106 for the largest full load current of any winding or winding configuration that it must supply."\n\nRule 28-806 (Overcurrent protection):\n(1) "Each ungrounded conductor on the supply side of the controller shall be protected by an overcurrent device rated or set in accordance with Rule 28-200 for the largest full load current rating of any winding configuration provided by the controller as connected."\n(2) "Each ungrounded conductor run from the controller to the motor shall be protected by an overcurrent device rated or set in accordance with Rule 28-200 for the largest full load current of any winding or winding configuration served by the insulated conductor so protected, unless the overcurrent device required by Subrule 1) adequately protects it."\n(3) "Notwithstanding Subrules 1) and 2), if the motor is a part-winding-start motor, a single set of overcurrent devices on the supply side of the controller shall be permitted to protect both windings, and if a time-delay fuse is used, it shall be permitted to have a maximum rating of 150% of full load current."\n\nRule 28-808 (Overload protection):\n(1) "Each winding or configuration shall be provided with overload protection in accordance with Rules 28-300 to 28-310, rated or set at not more than 125% of the full load current rating of the winding or configuration so protected."\n(2) "For a part-winding-start motor, separate overload devices need not be supplied for each winding, provided that overload devices are:\n  (a) located in the circuit, feeding the winding that is used for starting;\n  (b) arranged to de-energize both windings when an overload occurs; and\n  (c) selected in accordance with the motor or equipment manufacturer\'s recommendation."\n\nRule 28-810 (Controls): "Each multi-winding or part-winding-start motor shall be provided with starting and control equipment in accordance with Rules 28-500, 28-502, and 28-506, except that\n(a) the controller shall be specifically designed for use with the motor that it controls;\n(b) where separate control equipment is provided for each winding or configuration, the individual controllers shall be rated in horsepower (or locked rotor current) not less than the rating of the winding or configuration controlled by each, and interlocks shall be provided where necessary to prevent simultaneous operation of controllers not intended to be so operated; or\n(c) the starting and control equipment for each primary winding of a part-winding-start motor shall have a horsepower (or locked rotor current) rating not less than that of the motor or be specifically designed for use with that motor and so marked."\n\nRule 28-812 (Disconnecting means): "Each multi-winding motor and its control equipment shall be provided with disconnecting means in accordance with Rules 28-600 to 28-604 except that, for the purpose of Rule 28-602, the horsepower (or locked rotor current) rating of the motor shall be that for the winding or configuration having the largest horsepower (or locked rotor current) rating, and the full load current rating of the motor shall be that for the winding or configuration having the largest full load current rating."',
      fieldScenario:
        'You install a two-speed, two-winding motor with high-speed FLA = 45 A and low-speed FLA = 25 A. Rule 28-804(1) says the supply-side conductors to the controller must be sized per Rule 28-106 using the LARGEST FLA (45 A x 125% = 56.25 A). The individual conductors from the controller to each winding must be sized for the largest FLA each winding will see (Rule 28-804(2)).\n\nBranch OCPD per Rule 28-806(1) is sized per Rule 28-200 for the largest winding FLA of 45 A, using Table 29 percentages.\n\nOverload protection: Rule 28-808(1) requires each winding to have its own overload protection at <=125% of its FLA — so a 45 A winding gets 56.25 A max setting; the 25 A winding gets 31.25 A max setting.\n\nA separate example: a part-winding-start motor on a 100 hp chiller. Rule 28-806(3) lets you use a single set of time-delay fuses on the supply side to protect BOTH windings, sized up to 150% of full (full-winding) FLA. Rule 28-808(2) lets you use a single overload device in the start-winding circuit as long as it de-energizes BOTH windings when it trips, arranged per the manufacturer\'s recommendation.\n\nThe disconnect is sized per Rule 28-812 at the largest winding\'s hp and FLA rating.',
      keyPoints: [
        'Rules 28-802 to 28-812 apply to multi-winding and part-winding-start motors (Rule 28-800)',
        'Permanent-configuration multi-winding motor is treated as single-winding with matching ratings (Rule 28-802)',
        'Supply-side conductors sized per Rule 28-106 for the LARGEST FLA of any winding configuration (Rule 28-804(1))',
        'Conductors from controller to motor sized for the largest FLA of any winding they must supply (Rule 28-804(2))',
        'Supply-side OCPD sized per Rule 28-200 for the largest FLA of any configuration (Rule 28-806(1))',
        'Conductors from controller to motor individually protected unless supply OCPD adequately protects them (Rule 28-806(2))',
        'Part-winding-start motors: single set of OCPD allowed; time-delay fuse up to 150% of FLA (Rule 28-806(3))',
        'Each winding or configuration needs overload protection at <=125% of its FLA (Rule 28-808(1))',
        'Part-winding-start: single overload device in the start winding circuit OK if it de-energizes BOTH windings (Rule 28-808(2))',
        'Controller must be specifically designed for the motor (Rule 28-810(a))',
        'Separate controllers: each must meet hp/LRC of its winding, with interlocks if required (Rule 28-810(b))',
        'Disconnect sized using the LARGEST hp/LRC and FLA of any winding configuration (Rule 28-812)',
      ],
      diagramaMermaid: `graph TD
    A["Multi-Winding &\\nPart-Winding-Start\\n(Rule 28-800)"] --> B["Conductors\\n(Rule 28-804)"]
    B --> B1["Supply: largest FLA\\nof any configuration"]
    B --> B2["Controller-to-motor:\\nlargest FLA of winding"]
    A --> C["OCPD\\n(Rule 28-806)"]
    C --> C1["Supply: Rule 28-200\\nlargest FLA"]
    C --> C2["Part-winding-start:\\nsingle OCPD OK\\nTD fuse up to 150% FLA"]
    A --> D["Overload\\n(Rule 28-808)"]
    D --> D1["Each winding:\\n125% of its FLA"]
    D --> D2["Part-winding: single OL\\nthat drops BOTH windings"]
    A --> E["Controls\\n(Rule 28-810)"]
    E --> E1["Specifically designed\\nfor the motor"]
    A --> F["Disconnect\\n(Rule 28-812)"]
    F --> F1["Largest hp/LRC\\nand largest FLA"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style C fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'magnet', title: 'Largest Rules', note: 'Size everything for the LARGEST FLA of any winding configuration — Rules 28-804, 28-806, 28-812', color: 'sky' },
        { icon: 'bolt', title: '150% TD Fuse', note: 'Part-winding-start: time-delay fuse up to 150% of FLA — Rule 28-806(3)', color: 'amber' },
        { icon: 'fire', title: 'OL at 125% Each Winding', note: 'Every winding/config needs OL at 125% of ITS FLA — Rule 28-808(1)', color: 'rose' },
        { icon: 'shield', title: 'Single OL for PW Start', note: 'OL in start winding must drop BOTH windings when it trips — Rule 28-808(2)', color: 'violet' },
        { icon: 'lock', title: 'Purpose-Built Controller', note: 'Controller must be specifically designed for the motor — Rule 28-810(a)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 11. PROTECTION AND CONTROL OF GENERATORS (Rules 28-900 to 28-908)
    // =========================================================================
    {
      id: '28-generators',
      title: 'Protection and Control of Generators',
      rules: 'Rules 28-900 to 28-908',
      explanation:
        'The final set of rules covers generators — the disconnecting means for a generator and the protection of constant-voltage, balancer, and 3-wire dc generators.\n\nRule 28-900 (Disconnecting means required for generators — see Appendix B):\n(1) "Except as provided for in Subrule 3), a separate disconnecting means shall be provided for each generator and for each circuit supplying all protective devices and control apparatus required for operation of the generator."\n(2) "The disconnecting means specified in Subrule 1) shall disconnect the generator and all protective devices and control apparatus from the circuits connected to the generator."\n(3) The disconnecting means specified in Subrule 1) need not be provided where the generator is:\n  (a) constructed with an integral disconnecting means that disconnects the generator and all protective devices and control apparatus from the circuits connected to the generator; or\n  (b) provided with a disconnecting means in accordance with CSA C282.\n\nCSA C282 is the emergency power supply standard for buildings.\n\nRule 28-902 (Protection of constant-voltage generators):\n(1) "Constant-voltage generators, whether dc or ac, shall be protected from excess current by overcurrent devices, except that:\n  (a) where the type of apparatus used and the nature of the system operated make protective devices inadvisable or unnecessary, the protective devices need not be provided; or\n  (b) where an ac generator and a transformer are located in the same building and are intended to operate as a unit for stepping up or stepping down voltage, the protective devices shall be permitted to be connected to the primary or the secondary of the transformer."\n(2) "Subrule 1) shall not apply to exciters for ac machines."\n\nRule 28-904 (Generator not driven by electricity): "Where a generator not driven by electricity supplies a 2-wire grounded system, the protective device shall be capable of disconnecting the generator from both insulated conductors of the circuit."\n\nThis rule addresses the fact that in a 2-wire grounded system on a non-electrically-driven prime mover (an engine generator), a fault on the "grounded" side still leaves the generator live because nothing can shut off the prime mover electrically; thus the protective device must open both conductors.\n\nRule 28-906 (Balancer sets): "Where a 3-wire dc system is supplied by 2-wire generators operated in conjunction with a balancer set to obtain a neutral, the system shall be equipped with protective devices that disconnect the system in the event of an excessive unbalancing of voltages."\n\nRule 28-908 (Three-wire dc generators):\n(1) "Three-wire dc generators, whether shunt or compound wound, shall be equipped with:\n  (a) a 2-pole circuit breaker with two tripping elements; or\n  (b) a 4-pole circuit breaker connected in the main-and-equalizer leads and tripped by two tripping elements."\n(2) "The circuit breaker shall be connected so that it is actuated by the entire armature current."\n(3) "One tripping element shall be connected in each armature lead."',
      fieldScenario:
        'You install a 100 kW standby diesel generator at a hospital. Rule 28-900(1) normally requires a disconnecting means for the generator AND for each circuit supplying its protective and control apparatus. But Rule 28-900(3)(b) exempts you because this generator is provided with a disconnect per CSA C282 (the emergency power supply standard), so the integral listed transfer switch provides the disconnect for you.\n\nA 480 V constant-voltage synchronous generator feeds the plant switchgear. Rule 28-902(1) requires overcurrent protection. Because the generator and a downstream 480/208 V stepdown transformer are in the same building operating as a unit, Rule 28-902(1)(b) allows the protective devices to be on either the primary or secondary of that transformer — effectively one set can do both.\n\nAn independent 120 V engine-driven generator supplies a well pump (2-wire grounded system). Rule 28-904 says the protective device (a 2-pole breaker) must disconnect BOTH conductors when it trips — you cannot rely on a single-pole breaker because a ground fault on the grounded side would leave the pump energized with the generator still running.\n\nA 3-wire 125/250 V dc generator used in legacy industrial setting: Rule 28-908(1)(a) requires a 2-pole CB with two tripping elements, connected so the whole armature current flows through it (Rule 28-908(2)) with one tripping element in each armature lead (Rule 28-908(3)).',
      keyPoints: [
        'Separate disconnecting means required for each generator and for each circuit supplying protective/control apparatus (Rule 28-900(1))',
        'Disconnect must isolate the generator AND all protective devices and control apparatus from the connected circuits (Rule 28-900(2))',
        'Exempt if generator has integral disconnecting means or is per CSA C282 (Rule 28-900(3))',
        'Constant-voltage generators (ac or dc) require overcurrent protection (Rule 28-902(1))',
        'Exception: OCPD may be omitted where type and system make it inadvisable or unnecessary (Rule 28-902(1)(a))',
        'Exception: generator+transformer unit in same building — OCPD may be on either primary or secondary (Rule 28-902(1)(b))',
        'Rule 28-902(1) does NOT apply to exciters for ac machines (Rule 28-902(2))',
        'Non-electrically-driven generator on 2-wire grounded system: protective device must open BOTH insulated conductors (Rule 28-904)',
        '3-wire dc system with 2-wire generators and balancer set: protective devices must disconnect on excessive unbalance (Rule 28-906)',
        '3-wire dc generators need 2-pole CB with 2 trip elements OR 4-pole CB in main-and-equalizer leads with 2 trip elements (Rule 28-908(1))',
        'CB must be actuated by the entire armature current (Rule 28-908(2))',
        'One tripping element must be in each armature lead (Rule 28-908(3))',
      ],
      diagramaMermaid: `graph TD
    A["Generators\\n(Rule 28-900)"] --> B["Disconnecting Means\\nRequired"]
    B --> B1["For generator AND\\nfor protective/control\\napparatus circuits"]
    B --> C["Exemptions"]
    C --> C1["Integral disconnect\\nbuilt in"]
    C --> C2["CSA C282\\n(emergency power)"]
    D["Constant-Voltage\\nGenerators\\n(Rule 28-902)"] --> D1["OCPD required"]
    D1 --> D2["Except: inadvisable\\nor unnecessary"]
    D1 --> D3["Except: unit with\\ntransformer — primary\\nor secondary OK"]
    E["Non-Electric Drive\\n2-Wire Grounded\\n(Rule 28-904)"] --> E1["Open BOTH\\nconductors"]
    F["3-Wire DC\\n(Rule 28-908)"] --> F1["2-pole CB\\n2 trip elements"]
    F --> F2["or 4-pole CB in\\nmain-and-equalizer"]
    F --> F3["Full armature current\\nOne trip per\\narmature lead"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#7f1d1d,stroke:#ef4444,color:#e2e8f0
    style E fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Separate Disconnect', note: 'Each generator + each protection/control circuit needs a disconnect — Rule 28-900(1)', color: 'sky' },
        { icon: 'shield', title: 'CSA C282 Exemption', note: 'Emergency generators per CSA C282 are exempt — Rule 28-900(3)(b)', color: 'amber' },
        { icon: 'bolt', title: 'OCPD Unit Option', note: 'Generator+xfmr unit: OCPD on primary OR secondary is OK — Rule 28-902(1)(b)', color: 'rose' },
        { icon: 'warning', title: 'Open Both Conductors', note: 'Non-electric 2-wire grounded generator must open BOTH conductors — Rule 28-904', color: 'violet' },
        { icon: 'magnet', title: '3-Wire DC Protection', note: '2-pole (2 trip) or 4-pole main-and-equalizer (2 trip) — Rule 28-908', color: 'emerald' },
      ],
    },
  ],
}
