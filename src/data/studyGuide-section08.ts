import type { StudyGuideSection } from '../lib/types'

/**
 * SECTION 8 — Circuit Loading and Demand Factors (CEC 2021, CSA C22.1:21)
 * COMPLETE — Every rule from 8-000 to 8-500 is covered.
 * Source: PDF scan of CEC Section 8
 */

export const section8Guide: StudyGuideSection = {
  section: '8',
  title: 'Section 8 — Circuit Loading and Demand Factors',
  description:
    'Section 8 determines how to calculate the electrical load for any building type in Canada. It covers maximum circuit loading rules, voltage drop limits, demand factors for services and feeders, specific load calculations for single dwellings, apartments, schools, hospitals, hotels, and commercial buildings, branch circuit outlet limits, electric range demands, vehicle heater receptacles, and EV energy management systems. Rules 8-000 through 8-500.',
  subsections: [
    // =========================================================================
    // 1. SCOPE & TERMINOLOGY (Rules 8-000, 8-002)
    // =========================================================================
    {
      id: '8-scope-terminology',
      title: 'Scope & Terminology',
      rules: 'Rules 8-000, 8-002',
      explanation:
        'Rule 8-000 defines the scope of Section 8. This section establishes how to determine the maximum circuit loading, calculated loads for services, feeders, and branch circuits, the application of demand factors, the number of branch circuit positions required for dwelling units, and requirements for heater receptacles for vehicles.\n\nSection 8 is the heart of load calculation in the CEC. Every electrical installation in Canada — whether a single dwelling, an apartment building, a hospital, or an industrial plant — must have its service, feeders, and branch circuits sized according to the rules in Section 8. This section does not tell you what wire size to use (that is Section 4) or what overcurrent protection to install (that is Section 14). Instead, it tells you how many amperes or watts of load to design for, which is the starting point for every other sizing decision.\n\nRule 8-002 defines special terminology used throughout Section 8:\n\n- Basic load: The load calculated from Table 14, which gives watts per square metre for different building types. Table 14 is the starting point for calculating feeder and service loads for most commercial and institutional buildings.\n\n- Calculated load: The total load determined by applying the rules of Section 8, including demand factors. This is the number you actually design the service or feeder for — it is always equal to or less than the total connected load.\n\n- Demonstrated load: A load based on actual measured consumption data over a minimum period of 24 consecutive months. This allows existing buildings with a proven load history to use their real consumption rather than the conservative calculated values. Only a qualified person may apply a demonstrated load.\n\n- Electric vehicle energy management system (EVEMS): A system that monitors and controls electric vehicle supply equipment (EVSE) to manage the electrical load. EVEMS can reduce the calculated EV load on a service by dynamically allocating available capacity among multiple EV chargers.',
      fieldScenario:
        'You are designing the electrical service for a new mixed-use building with retail on the ground floor and 20 apartment units above. The architect asks you: "How big does the electrical service need to be?"\n\nYou explain that Section 8 (Rule 8-000) is where you start. You will calculate the load for the retail space using Table 14 watts per square metre (the "basic load" per Rule 8-002), then calculate each apartment unit load per Rule 8-202, apply the demand factors for multiple units, add heating and cooling loads, and arrive at the "calculated load" for the entire building.\n\nThe building owner also wants 10 EV chargers in the parking garage. You explain that an electric vehicle energy management system (EVEMS per Rule 8-002) can dynamically share capacity among the chargers, potentially reducing the service size needed for EV charging.\n\nThree years later, the building owner wants to add more retail tenants. Instead of recalculating from scratch, you can use the "demonstrated load" — 24 months of actual metered data — to determine how much spare capacity exists (Rule 8-002). This real-world data often shows that actual consumption is well below the original calculated load.',
      keyPoints: [
        'Section 8 applies to maximum circuit loading, calculated loads for services/feeders/branch circuits, use of demand factors, dwelling branch circuit positions, and vehicle heater receptacles (Rule 8-000)',
        'Basic load is the load determined from Table 14 watts per square metre for the building type (Rule 8-002)',
        'Calculated load is the total load after applying Section 8 rules and demand factors — this is what you design for (Rule 8-002)',
        'Demonstrated load is based on actual measured consumption over a minimum 24 consecutive months (Rule 8-002)',
        'Only a qualified person may apply a demonstrated load (Rule 8-002)',
        'Electric vehicle energy management system (EVEMS) monitors and controls EVSE to manage EV charging load (Rule 8-002)',
        'Section 8 determines HOW MUCH load — Section 4 determines wire size, Section 14 determines overcurrent protection',
      ],
      diagramaMermaid: `graph TD
    A["Section 8 Scope\\n(Rule 8-000)"] --> B["Maximum Circuit\\nLoading"]
    A --> C["Calculated Loads\\nfor Services/Feeders/\\nBranch Circuits"]
    A --> D["Use of\\nDemand Factors"]
    A --> E["Dwelling Branch\\nCircuit Positions"]
    A --> F["Vehicle Heater\\nReceptacles"]
    G["Special Terminology\\n(Rule 8-002)"] --> H["Basic Load\\n(Table 14 W/m²)"]
    G --> I["Calculated Load\\n(After demand factors)"]
    G --> J["Demonstrated Load\\n(24-month measured)"]
    G --> K["EVEMS\\n(EV load management)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style G fill:#065f46,stroke:#10b981,color:#e2e8f0
    style I fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style K fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Basic Load', note: 'Table 14 W/m² starting point for commercial/institutional buildings — Rule 8-002', color: 'sky' },
        { icon: 'fee', title: 'Calculated Load', note: 'Total after demand factors — what you actually design the service for — Rule 8-002', color: 'emerald' },
        { icon: 'inspect', title: 'Demonstrated Load', note: '24-month measured history, qualified person only — Rule 8-002', color: 'amber' },
        { icon: 'bolt', title: 'EVEMS', note: 'Electric vehicle energy management system to reduce EV calculated load — Rule 8-002', color: 'violet' },
      ],
    },

    // =========================================================================
    // 2. CURRENT CALCULATIONS & VOLTAGE DROP (Rules 8-100, 8-102)
    // =========================================================================
    {
      id: '8-current-voltage-drop',
      title: 'Current Calculations & Voltage Drop',
      rules: 'Rules 8-100, 8-102',
      explanation:
        'Rule 8-100 specifies how to calculate current from a given load. When calculating the current drawn by a load, you must use the nominal system voltage as the divisor. The recognized nominal voltages are: 120V, 208V, 240V, 277V, 347V, 416V, 480V, or 600V. You always use the nominal voltage — not the actual measured voltage at the point of utilization. This ensures consistency in design calculations across all installations.\n\nFor example, a 2400W load on a 120V circuit draws 2400/120 = 20A. A 10kW load on a 208V three-phase circuit draws 10000/(208 x 1.732) = 27.8A.\n\nRule 8-102 establishes voltage drop limits, which are critical for ensuring that equipment receives adequate voltage to operate properly.\n\nSubrule (1) is the general rule: Voltage drop calculations must be based on the connected load of the circuit, OR 80% of the rating of the overcurrent device protecting the circuit, whichever results in the greater voltage drop. The maximum voltage drop must not exceed 3% in any feeder or branch circuit, and the total voltage drop from the supply authority service point to the point of utilization must not exceed 5%.\n\nSubrule (2) provides an exception: Where the overcurrent device rating is determined by another Section of the Code (for example, motor branch circuits per Section 28 where the OCPD may be 250% of motor FLA), the voltage drop calculation is based on the calculated demand load, not the OCPD rating.\n\nSubrule (3) provides a simplification for dwelling unit 120V circuits protected by 20A overcurrent devices: Conductors selected from Table 68 are deemed to comply with the voltage drop requirements without further calculation. Table 68 gives maximum circuit lengths for various conductor sizes at different loads.\n\nSubrule (4) addresses industrial establishments with qualified maintenance and supervision: The voltage must be maintained within the tolerance limits of the utilization equipment. This allows industrial facilities to use engineering judgment rather than strict 3%/5% limits, provided equipment voltage tolerances are respected.',
      fieldScenario:
        'You are wiring a new single dwelling. The panel is in the basement, and you need to run a 20A kitchen circuit to the far end of the house — about 25 metres.\n\nFor the voltage drop calculation per Rule 8-102(1), you check the connected load versus 80% of the OCPD rating: The kitchen counter receptacles will likely draw up to 1500W (12.5A), but 80% of the 20A breaker is 16A (1920W). You use the larger value — 16A — for the voltage drop calculation.\n\nAt 16A on a 25m run of #12 AWG copper, you calculate the voltage drop: VD = 2 x 25 x 16 x 0.00328 = 2.62V, which is 2.62/120 = 2.2%. This is under the 3% feeder/branch limit.\n\nBut you also need to check the total from the utility transformer to this outlet. The feeder from the meter to the panel already has 1.5% drop. So total = 1.5% + 2.2% = 3.7%, which is under the 5% total limit. Good.\n\nAlternatively, since this is a dwelling unit 120V circuit on a 20A breaker, you could simply refer to Table 68 per Rule 8-102(3) and confirm the maximum circuit length for #12 AWG is acceptable — no manual calculation needed.\n\nFor the current calculation, you use 120V as the divisor per Rule 8-100, regardless of whether the actual measured voltage at the panel is 118V or 122V.',
      keyPoints: [
        'Current calculations use nominal system voltage as divisor: 120, 208, 240, 277, 347, 416, 480, or 600V (Rule 8-100)',
        'Voltage drop is based on connected load OR 80% of OCPD rating, whichever gives greater drop (Rule 8-102(1))',
        'Maximum voltage drop: 3% for any single feeder or branch circuit (Rule 8-102(1))',
        'Maximum total voltage drop: 5% from supply authority service point to point of utilization (Rule 8-102(1))',
        'Where OCPD rating is set by another Section (e.g., motor circuits), use calculated demand load for VD calc (Rule 8-102(2))',
        'Dwelling unit 120V/20A circuits: conductors per Table 68 are deemed compliant without calculation (Rule 8-102(3))',
        'Industrial with qualified persons: maintain voltage within equipment tolerance limits (Rule 8-102(4))',
        'Always use nominal voltage, not measured voltage, for all load calculations (Rule 8-100)',
      ],
      diagramaMermaid: `graph TD
    A["Voltage Drop Limits\\n(Rule 8-102)"] --> B["Any Single Feeder\\nor Branch Circuit"]
    A --> C["Total: Supply to\\nPoint of Utilization"]
    B --> D["MAX 3%"]
    C --> E["MAX 5%"]
    F["VD Based On\\n(Rule 8-102-1)"] --> G{"Greater of:"}
    G --> H["Connected Load"]
    G --> I["80% of OCPD\\nRating"]
    J["Exceptions"] --> K["Rule 8-102(2):\\nOCPD set by other\\nSection → use\\ncalculated demand"]
    J --> L["Rule 8-102(3):\\nDwelling 120V/20A\\n→ Table 68"]
    J --> M["Rule 8-102(4):\\nIndustrial →\\nequipment tolerance"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style E fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'Nominal Voltages', note: '120, 208, 240, 277, 347, 416, 480, 600V — always use nominal, never measured — Rule 8-100', color: 'sky' },
        { icon: 'ruler', title: '3% / 5% Limits', note: '3% max per feeder or branch, 5% max total from supply to utilization — Rule 8-102(1)', color: 'rose' },
        { icon: 'wire', title: 'Table 68 Shortcut', note: 'Dwelling 120V/20A circuits: just check Table 68 for max length — Rule 8-102(3)', color: 'emerald' },
        { icon: 'shield', title: 'Industrial Exception', note: 'Qualified persons may use equipment voltage tolerance instead of 3%/5% — Rule 8-102(4)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 3. MAXIMUM CIRCUIT LOADING (Rule 8-104)
    // =========================================================================
    {
      id: '8-max-circuit-loading',
      title: 'Maximum Circuit Loading',
      rules: 'Rule 8-104',
      explanation:
        'Rule 8-104 is one of the most important rules in the CEC. It defines how much load you can put on any circuit and introduces the concept of continuous versus non-continuous loading.\n\nSubrule (1) defines the "ampere rating" of a circuit as the LESSER of: the rating of the overcurrent protective device (OCPD), or the allowable ampacity of the conductors. For example, if you have a 20A breaker protecting #10 AWG copper rated at 30A, the circuit ampere rating is 20A (the lesser value). This prevents confusion — the circuit is only as strong as its weakest link.\n\nSubrule (2) states that the calculated load on any circuit must not exceed the ampere rating of that circuit. Simple and absolute.\n\nSubrule (3) defines what constitutes a "continuous" load. A load is considered continuous UNLESS it can be demonstrated that in normal operation: for circuits rated 225A or less, the load will not persist for more than 1 hour in any 2-hour period; for circuits rated more than 225A, the load will not persist for more than 3 hours in any 6-hour period. If the load does not meet these exceptions, it is continuous.\n\nSubrule (4) clarifies that cyclic or intermittent loads are deemed continuous unless they meet the time limits in subrule (3). This catches loads like commercial kitchen equipment, welders on production lines, or HVAC compressors that cycle on and off but are "on" for extended periods.\n\nSubrule (5) applies when the overcurrent device is marked for 100% continuous duty. In this case, the continuous load must not exceed 100% of the conductor ampacity. However, for single conductors (such as those used with certain bolted pressure connectors), the load must not exceed 85% of the conductor ampacity.\n\nSubrule (6) applies when the overcurrent device is NOT marked for 100% continuous duty (the standard 80% rated device). Continuous loads must not exceed 80% of the conductor ampacity. For single conductors, the limit drops to 70% of conductor ampacity.\n\nSubrule (7) addresses cablebus installations, which must follow either subrule (5) or (6) depending on the device rating.\n\nThe practical impact: Most standard breakers are 80% rated (not marked 100%). So for continuous loads, you can only load the circuit to 80% of its ampere rating. A 20A circuit with a standard breaker carrying a continuous load can only carry 16A continuous. To carry the full 20A continuous, you need a 100%-rated breaker.',
      fieldScenario:
        'You are installing lighting in a new office building. The lighting circuits will run for 10+ hours per day — clearly continuous per Rule 8-104(3), since the load persists for more than 1 hour in any 2-hour period.\n\nThe lighting load on one circuit totals 14A. You have standard (80%-rated) 20A breakers. Per Rule 8-104(6), continuous loads must not exceed 80% of conductor ampacity. 80% of 20A = 16A. Since 14A < 16A, the circuit is properly loaded.\n\nAnother circuit has 18A of continuous lighting load. 80% of 20A = 16A, so 18A exceeds the limit. You have two options: upgrade to a 100%-rated 20A breaker (which allows 20A continuous per Rule 8-104(5)), or split the load across two circuits.\n\nIn a welding shop, a welder draws 40A but runs for only 30 minutes then is off for 90 minutes. Per Rule 8-104(3), since the load does not persist for more than 1 hour in any 2-hour period on a circuit rated 225A or less, it qualifies as non-continuous. You can load the circuit to 100% of its ampere rating instead of 80%.\n\nFor the 400A main feeder (rated above 225A), the time criterion changes per Rule 8-104(3): the load must not persist for more than 3 hours in any 6-hour period to be non-continuous.',
      keyPoints: [
        'Ampere rating of a circuit = LESSER of OCPD rating or conductor ampacity (Rule 8-104(1))',
        'Calculated load must never exceed the ampere rating of the circuit (Rule 8-104(2))',
        'A load is continuous UNLESS: <=225A circuits — load does not persist >1 hour in any 2-hour period (Rule 8-104(3))',
        'For circuits >225A: load is continuous unless it does not persist >3 hours in any 6-hour period (Rule 8-104(3))',
        'Cyclic or intermittent loads are deemed continuous unless they meet the time limits in (3) (Rule 8-104(4))',
        'Device marked 100% continuous: load <=100% conductor ampacity; single conductors <=85% (Rule 8-104(5))',
        'Device NOT marked 100% (standard 80%): continuous load <=80% conductor ampacity; single conductors <=70% (Rule 8-104(6))',
        'Cablebus installations follow subrule (5) or (6) depending on device marking (Rule 8-104(7))',
        'Most standard breakers are 80%-rated — a 20A breaker with continuous load can only carry 16A',
      ],
      diagramaMermaid: `graph TD
    A["Circuit Ampere Rating\\n(Rule 8-104-1)"] --> B{"Lesser of:"}
    B --> C["OCPD Rating"]
    B --> D["Conductor\\nAmpacity"]
    E["Is Load Continuous?\\n(Rule 8-104-3)"] --> F{"Circuit ≤225A?"}
    F -->|Yes| G{">1 hour in\\nany 2-hour\\nperiod?"}
    F -->|No| H{">3 hours in\\nany 6-hour\\nperiod?"}
    G -->|Yes| I["CONTINUOUS"]
    G -->|No| J["NON-CONTINUOUS"]
    H -->|Yes| I
    H -->|No| J
    I --> K{"Device Marked\\n100%?"}
    K -->|Yes| L["Load ≤ 100%\\nampacity\\n(85% single cond.)\\n(Rule 8-104-5)"]
    K -->|No| M["Load ≤ 80%\\nampacity\\n(70% single cond.)\\n(Rule 8-104-6)"]
    J --> N["Load ≤ 100%\\nof ampere\\nrating"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style I fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style J fill:#065f46,stroke:#10b981,color:#e2e8f0
    style L fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0
    style M fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'warning', title: '80% Standard Rule', note: 'Most breakers are 80%-rated: 20A breaker = max 16A continuous load — Rule 8-104(6)', color: 'rose' },
        { icon: 'thermometer', title: 'Continuous Definition', note: '<=225A: >1hr in 2hr = continuous. >225A: >3hr in 6hr = continuous — Rule 8-104(3)', color: 'amber' },
        { icon: 'shield', title: '100% Rated Devices', note: 'Must be specifically marked — allows full ampacity for continuous loads — Rule 8-104(5)', color: 'emerald' },
        { icon: 'bolt', title: 'Weakest Link', note: 'Circuit ampere rating = lesser of OCPD or conductor ampacity — Rule 8-104(1)', color: 'sky' },
        { icon: 'wire', title: 'Single Conductors', note: '85% for 100%-rated devices, 70% for standard devices — Rules 8-104(5),(6)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 4. USE OF DEMAND FACTORS (Rule 8-106)
    // =========================================================================
    {
      id: '8-demand-factors',
      title: 'Use of Demand Factors',
      rules: 'Rule 8-106',
      explanation:
        'Rule 8-106 is a comprehensive rule with 11 subrules that governs when and how demand factors can be applied to reduce the calculated load below the total connected load. Demand factors recognize the statistical improbability that all loads in a building will operate simultaneously at full capacity.\n\nSubrule (1): Where the electrical design provides significantly more capacity than the calculated load requires (excess design), the service or feeder capacity must be increased to match the greater design. You cannot use demand factors to justify undersizing when you have intentionally over-designed the distribution system.\n\nSubrule (2): Where two or more loads are served by the same circuit but only one load can operate at a time (due to mechanical or electrical interlocking), the calculated load is the greatest of the individual loads. For example, if a transfer switch selects between a 50A and a 30A load, the feeder need only be sized for 50A.\n\nSubrule (3): Where heating and air conditioning loads are interlocked so only one can operate at a time, the calculated load is the greater of the two. This is extremely common in buildings with reversible heat pumps or separate heating and cooling systems with interlocked controls.\n\nSubrule (4): For feeders supplying cyclic loads, the calculated load is the maximum load that will be connected at any one time. This applies to industrial processes with sequential operations where not all stages run simultaneously.\n\nSubrule (5): Motor and air conditioning loads may have demand factors applied by a qualified person, subject to Rule 2-030 (which requires professional engineering oversight for complex calculations). This recognizes that motor loads in industrial plants often have diversity.\n\nSubrule (6): Where another Section of the Code specifies demand factors, those specific factors apply. For example, Section 62 specifies demand factors for electric heating, and Section 28 has rules for motor feeder loads.\n\nSubrule (7): A feeder or branch circuit need not have an ampacity greater than that of the service or feeder from which it is supplied. This prevents absurd results where a downstream circuit calculates to a larger size than its upstream supply.\n\nSubrule (8): When additional loads are added to an existing installation, the new load (with applicable demand factors) is added to the maximum demand measured over the previous 12 months. This avoids recalculating the entire building from scratch.\n\nSubrule (9): A demonstrated load (24-month measured history) may be used by a qualified person to size services and feeders. This allows buildings with proven low utilization to avoid oversizing on expansion.\n\nSubrule (10): Where an electric vehicle energy management system (EVEMS) is installed, the EV load used in the calculated load is the maximum load the EVEMS will allow at any time, not the total nameplate of all chargers.\n\nSubrule (11): Where an EVEMS includes monitoring of the electrical service, the EV supply equipment load is not required to be included in the calculated load at all. The EVEMS dynamically adjusts EV charging based on available capacity, so the EV load effectively uses only spare capacity and does not increase the required service size.',
      fieldScenario:
        'You are upgrading an existing strip mall built 15 years ago. The owner wants to add 5 new tenant spaces and 10 EV chargers.\n\nFor the new tenant spaces, you apply Rule 8-106(8): You pull the utility bills for the last 12 months and find the maximum measured demand was 180A on a 400A service. You add the new tenant loads (calculated with proper demand factors per Rule 8-210) to the 180A measured maximum, rather than recalculating the entire mall from scratch. The new total is 260A — well within the 400A service.\n\nFor the EV chargers, each is a 40A Level 2 unit — 10 chargers = 400A total nameplate. But you install an EVEMS per Rule 8-106(10). The EVEMS limits total EV charging to 100A maximum at any time, dynamically distributing capacity among active chargers. You use 100A (not 400A) in the calculated load.\n\nEven better: If the EVEMS also monitors the main service per Rule 8-106(11), the EV load does not need to be included in the calculated load at all — the system will automatically throttle charging when the building load is high.\n\nThe mall also has heating and air conditioning with interlocked controls. Per Rule 8-106(3), you use the greater of the two loads, not both. The heating load is 45kW and the AC load is 38kW, so you use 45kW.\n\nA qualified engineer reviews the motor loads for the HVAC rooftop units and applies a demand factor per Rule 8-106(5) and Rule 2-030, reducing the motor load contribution by 15% based on operational data.',
      keyPoints: [
        'Excess design capacity means the service/feeder must be increased to match — no undersizing allowed (Rule 8-106(1))',
        'Loads that cannot operate simultaneously: use the greatest single load only (Rule 8-106(2))',
        'Interlocked heating and AC: use the greater of the two loads (Rule 8-106(3))',
        'Cyclic feeders: use maximum load connected at any one time (Rule 8-106(4))',
        'Motor/AC demand factors may be applied by a qualified person per Rule 2-030 (Rule 8-106(5))',
        'Where another Section specifies demand factors, those Section-specific factors apply (Rule 8-106(6))',
        'Feeder/branch circuit need not exceed the ampacity of its supply service or feeder (Rule 8-106(7))',
        'Additional loads on existing installations: add new load (with demand factors) to 12-month maximum measured demand (Rule 8-106(8))',
        'Demonstrated load (24-month history) may be used by a qualified person (Rule 8-106(9))',
        'EVEMS: calculated EV load = maximum the system will allow at any one time (Rule 8-106(10))',
        'EVEMS with service monitoring: EV load not required in calculated load at all (Rule 8-106(11))',
      ],
      diagramaMermaid: `graph TD
    A["Demand Factors\\n(Rule 8-106)"] --> B["Subrule 1:\\nExcess design →\\nincrease service"]
    A --> C["Subrule 2:\\nOne-at-a-time →\\nuse greatest"]
    A --> D["Subrule 3:\\nHeat/AC interlocked →\\nuse greater"]
    A --> E["Subrule 4:\\nCyclic → max at\\nany one time"]
    A --> F["Subrule 5:\\nMotor/AC → qualified\\nperson + Rule 2-030"]
    A --> G["Subrule 6:\\nPer applicable\\nSection"]
    A --> H["Subrules 7-11:\\nMore exceptions"]
    H --> I["(7) Feeder ≤\\nservice ampacity"]
    H --> J["(8) Existing: add to\\n12-month max demand"]
    H --> K["(9) Demonstrated\\nload — 24 months"]
    H --> L["(10) EVEMS:\\nmax allowed load"]
    H --> M["(11) EVEMS + monitoring:\\nEV not in calc load"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0
    style L fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0
    style M fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0`,
      infoCards: [
        { icon: 'fee', title: 'Heat/AC Interlock', note: 'Use the greater load only — never add both — Rule 8-106(3)', color: 'emerald' },
        { icon: 'inspect', title: 'Existing Buildings', note: 'Add new loads to 12-month measured max demand instead of recalculating — Rule 8-106(8)', color: 'sky' },
        { icon: 'bolt', title: 'EVEMS Reduction', note: 'EV load = max EVEMS allows; with monitoring, EV load may be excluded entirely — Rules 8-106(10),(11)', color: 'violet' },
        { icon: 'permit', title: 'Qualified Person', note: 'Motor demand factors (Rule 8-106(5)) and demonstrated loads (Rule 8-106(9)) require qualified person', color: 'amber' },
        { icon: 'shield', title: 'Feeder Cap', note: 'Feeder/branch never needs to exceed its supply service ampacity — Rule 8-106(7)', color: 'rose' },
      ],
    },

    // =========================================================================
    // 5. PANEL SPACES & AREA DETERMINATION (Rules 8-108, 8-110)
    // =========================================================================
    {
      id: '8-panel-spaces-area',
      title: 'Panel Spaces & Area Determination',
      rules: 'Rules 8-108, 8-110',
      explanation:
        'Rule 8-108 requires that panelboards in dwelling units include spare capacity for future loads, particularly for electric vehicle charging.\n\nSubrule (1) applies to single dwellings (detached houses, semi-detached, and townhouses with individual services). The panelboard must have a minimum of 4 additional branch circuit spaces beyond what is required for the calculated load. In addition, there must be provision for at least one 2-pole branch circuit breaker among those spare spaces. This 2-pole provision is specifically intended to accommodate future EV charging installation, which typically requires a 240V circuit.\n\nSubrule (2) applies to apartment units (individual suites within a multi-unit building). The panelboard must have a minimum of 2 additional branch circuit spaces, plus provision for at least one 2-pole branch circuit breaker. The requirement is smaller because apartment units typically have less future expansion potential than single dwellings.\n\nThese requirements were significantly enhanced in recent code cycles to address the growing adoption of electric vehicles. Previously, spare spaces were recommended but the 2-pole requirement did not exist. Now, every new dwelling is essentially "EV-ready" at the panel level.\n\nRule 8-110 defines how to determine the area of a dwelling unit for load calculation purposes. This is critical because the basic load for dwellings is calculated on a per-square-metre basis.\n\nThe area is determined using the inside dimensions of the building and includes:\n- 100% of the ground floor area\n- 100% of all above-ground finished living areas (second floor, third floor, etc.)\n- 75% of any below-ground finished living areas (finished basement)\n\nThe 75% factor for below-ground space recognizes that basements typically have lower electrical demand than above-ground living spaces — fewer windows mean less lighting, and basements are often used for storage and utility rather than primary living.\n\nOnly FINISHED living areas are included. Unfinished basements, crawl spaces, garages, and unheated storage areas are not counted in the area calculation.',
      fieldScenario:
        'You are installing a 200A panel in a new two-storey single dwelling with a finished basement.\n\nFirst, you calculate the area per Rule 8-110. The main floor is 95 m², the second floor is 85 m², and the finished basement is 80 m². The total area for load calculation is: 95 + 85 + (0.75 x 80) = 95 + 85 + 60 = 240 m².\n\nThe homeowner asks why the basement is only counted at 75%. You explain that Rule 8-110 recognizes below-ground spaces have lower electrical demand — less lighting, fewer convenience receptacles, and often simpler use.\n\nFor the panel, your calculated load requires 28 circuit spaces (kitchen circuits, lighting, bathroom, laundry, furnace, AC, hot tub, etc.). Per Rule 8-108(1), you must add 4 spare spaces, and at least one of those must accommodate a 2-pole breaker for future EV charging. So you need a panel with at least 32 spaces — but you recommend a 40-space panel because electrical demand only grows over time.\n\nFor an apartment unit panel in the same building (if it were a duplex), Rule 8-108(2) requires only 2 additional spaces plus the 2-pole provision.\n\nWhen the homeowner later decides to install a Level 2 EV charger, the 2-pole space is already there in the panel — no need for a panel upgrade or subpanel. This is exactly what Rule 8-108 was designed to achieve.',
      keyPoints: [
        'Single dwellings: minimum 4 additional branch circuit spaces in panelboard (Rule 8-108(1))',
        'Single dwellings: must include provision for at least one 2-pole breaker among spare spaces (Rule 8-108(1))',
        'Apartment units: minimum 2 additional branch circuit spaces in panelboard (Rule 8-108(2))',
        'Apartment units: must include provision for at least one 2-pole breaker among spare spaces (Rule 8-108(2))',
        'The 2-pole provision is intended for future EV charging (240V circuit) (Rule 8-108)',
        'Area calculation uses inside dimensions of the building (Rule 8-110)',
        'Ground floor: 100% of area included (Rule 8-110)',
        'Above-ground finished living areas: 100% included (Rule 8-110)',
        'Below-ground finished living areas: 75% included (Rule 8-110)',
        'Unfinished spaces, garages, crawl spaces are NOT counted in the area (Rule 8-110)',
      ],
      diagramaMermaid: `graph TD
    A["Panel Spaces\\n(Rule 8-108)"] --> B["Single Dwelling\\nRule 8-108(1)"]
    A --> C["Apartment Unit\\nRule 8-108(2)"]
    B --> D["4 spare spaces\\n+ provision for\\n1 × 2-pole breaker"]
    C --> E["2 spare spaces\\n+ provision for\\n1 × 2-pole breaker"]
    F["Area Determination\\n(Rule 8-110)"] --> G["Ground Floor\\n100%"]
    F --> H["Above-Ground\\nFinished Areas\\n100%"]
    F --> I["Below-Ground\\nFinished Areas\\n75%"]
    F --> J["Unfinished /\\nGarage / Crawl\\nNOT counted"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style D fill:#065f46,stroke:#10b981,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style F fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style I fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0`,
      infoCards: [
        { icon: 'box', title: 'Single Dwelling Panel', note: '4 spare spaces + at least one 2-pole provision for EV — Rule 8-108(1)', color: 'sky' },
        { icon: 'box', title: 'Apartment Panel', note: '2 spare spaces + at least one 2-pole provision for EV — Rule 8-108(2)', color: 'emerald' },
        { icon: 'ruler', title: 'Basement at 75%', note: 'Below-ground finished areas counted at 75% for load calculation — Rule 8-110', color: 'amber' },
        { icon: 'bolt', title: 'EV-Ready', note: '2-pole spare ensures every new dwelling can add a 240V EV charger without panel upgrade', color: 'violet' },
      ],
    },

    // =========================================================================
    // 6. SINGLE DWELLING LOAD CALCULATION (Rule 8-200)
    // =========================================================================
    {
      id: '8-single-dwelling',
      title: 'Single Dwelling Load Calculation',
      rules: 'Rule 8-200',
      explanation:
        'Rule 8-200 is the primary rule for calculating the electrical service load for a single dwelling (detached house, semi-detached, or townhouse with individual service). The calculated load is the GREATER of two methods: subrule (1)(a) — the itemized method, or subrule (1)(b) — the minimum floor method.\n\nMethod (a) — Itemized Calculation:\nStart with a basic load of 5000W for the first 90 m² of living space, plus 1000W for each additional 90 m² (or portion thereof). Then add:\n- Electric space heating: per Section 62 demand factors\n- Air conditioning: 100% of connected load\n- Electric range: 6000W for any range up to 12 kW nameplate; for ranges over 12 kW, use 6000W plus 40% of the amount exceeding 12 kW\n- Tankless water heaters and pool/hot tub heaters: 100% of connected load\n- Electric vehicle supply equipment (EVSE): 100% of connected load\n- Other loads over 1500W each (dryer, hot tub motor, sauna, etc.): If the dwelling HAS a range, these loads are added at 25%. If the dwelling has NO range, the first 6000W of these loads is at 100%, then 25% of the amount exceeding 6000W.\n\nMethod (b) — Minimum Floor:\n- (b)(i): If the dwelling is 80 m² or more (excluding the basement), the minimum calculated load is 24000W (equivalent to a 100A service at 240V).\n- (b)(ii): If the dwelling is less than 80 m², the minimum calculated load is 14400W (equivalent to a 60A service at 240V).\n\nYou always calculate BOTH methods and use the GREATER result.\n\nSubrule (2) addresses row housing (townhouses sharing a common service). For row housing, calculate each unit per subrule (1) excluding heating and AC loads, then apply the multiple-unit demand factors from Rule 8-202(3)(a), and add back the heating per Section 62 demand factors and AC loads per subrules (3)(b) through (3)(e) of Rule 8-202.\n\nSubrule (3) clarifies that the single dwelling load calculated under Rule 8-200 is NOT considered a continuous load for the purposes of Rule 8-104. This means you do not need to apply the 80% derating — you size the service at 100% of the calculated load.',
      fieldScenario:
        'You are calculating the service size for a new 2-storey home: main floor 100 m², second floor 90 m², finished basement 70 m². Total area per Rule 8-110 = 100 + 90 + (0.75 × 70) = 242.5 m².\n\nThe home has: electric forced-air furnace (10 kW), central AC (4 kW), electric range (14 kW nameplate), electric dryer (5.5 kW), tankless water heater (18 kW), hot tub (6 kW), and a 40A Level 2 EV charger (9.6 kW).\n\nMethod (a) — Itemized:\n- Basic load: 5000W + (ceiling((242.5-90)/90) × 1000W) = 5000 + 2000 = 7000W\n- Heating (10 kW): per Section 62 demand = 10000W (single unit, 100%)\n- AC: interlocked with heating, use greater per Rule 8-106(3) = heating is greater, so AC = 0W\n- Range: over 12 kW, so 6000 + 40% × (14000 - 12000) = 6000 + 800 = 6800W\n- Tankless water heater: 100% = 18000W\n- EV charger: 100% = 9600W\n- Other loads >1500W (dryer 5500W + hot tub 6000W = 11500W): dwelling HAS a range, so 25% = 2875W\n- Total Method (a) = 7000 + 10000 + 6800 + 18000 + 9600 + 2875 = 54275W\n\nMethod (b): House is >80 m² excluding basement, so minimum = 24000W.\n\nCalculated load = GREATER of 54275W and 24000W = 54275W.\n\nAt 240V: 54275/240 = 226A. You need a 200A service? No — 226A exceeds 200A. You will need either a 320A or 400A service, or explore load management options for the EV charger.\n\nPer Rule 8-200(3), this load is NOT continuous, so no 80% derating applies.',
      keyPoints: [
        'Calculated load = GREATER of Method (a) itemized or Method (b) minimum floor (Rule 8-200(1))',
        'Method (a) basic load: 5000W for first 90 m² + 1000W for each additional 90 m² (Rule 8-200(1)(a))',
        'Heating loads: per Section 62 demand factors (Rule 8-200(1)(a))',
        'Air conditioning: 100% of connected load, but if interlocked with heating use greater per Rule 8-106(3) (Rule 8-200(1)(a))',
        'Electric range: 6000W if <=12 kW nameplate; 6000W + 40% of excess over 12 kW if >12 kW (Rule 8-200(1)(a))',
        'Tankless water heaters and pool/hot tub heaters: 100% of connected load (Rule 8-200(1)(a))',
        'EV supply equipment: 100% of connected load (Rule 8-200(1)(a))',
        'Other loads >1500W with range: 25% demand. Without range: first 6000W at 100%, then 25% of excess (Rule 8-200(1)(a))',
        'Method (b)(i): >=80 m² excl. basement → minimum 24000W (100A at 240V) (Rule 8-200(1)(b))',
        'Method (b)(ii): <80 m² → minimum 14400W (60A at 240V) (Rule 8-200(1)(b))',
        'Row housing: per (1) excl heating/AC, apply Rule 8-202(3)(a) demand factors, then add heating/AC back (Rule 8-200(2))',
        'Single dwelling load is NOT continuous — no 80% derating required (Rule 8-200(3))',
      ],
      diagramaMermaid: `graph TD
    A["Single Dwelling\\n(Rule 8-200)"] --> B{"Calculate BOTH\\nmethods, use GREATER"}
    B --> C["Method (a)\\nItemized"]
    B --> D["Method (b)\\nMinimum Floor"]
    C --> E["Basic: 5000W +\\n1000W/90m²"]
    C --> F["+ Heating per S62"]
    C --> G["+ AC 100%"]
    C --> H["+ Range 6000W\\n+40% over 12kW"]
    C --> I["+ Tankless/Pool\\n100%"]
    C --> J["+ EV 100%"]
    C --> K["+ Other >1500W\\n25% (with range)"]
    D --> L["≥80m² excl.\\nbasement:\\n24000W min"]
    D --> M["<80m²:\\n14400W min"]
    N["Rule 8-200(3)"] --> O["NOT continuous\\nload — no 80%\\nderating"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style O fill:#065f46,stroke:#10b981,color:#e2e8f0`,
      infoCards: [
        { icon: 'power', title: 'Basic Load Formula', note: '5000W first 90m² + 1000W each additional 90m² — Rule 8-200(1)(a)', color: 'sky' },
        { icon: 'fire', title: 'Range Demand', note: '6000W if <=12kW; 6000W + 40% over 12kW if larger — Rule 8-200(1)(a)', color: 'rose' },
        { icon: 'bolt', title: 'EV at 100%', note: 'EV charger load included at full 100% — no demand factor — Rule 8-200(1)(a)', color: 'violet' },
        { icon: 'shield', title: 'Minimum Floor', note: '24000W (100A) for >=80m²; 14400W (60A) for <80m² — Rule 8-200(1)(b)', color: 'amber' },
        { icon: 'thermometer', title: 'Not Continuous', note: 'Single dwelling loads are NOT continuous — size at 100% — Rule 8-200(3)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 7. APARTMENT BUILDING LOAD CALCULATION (Rule 8-202)
    // =========================================================================
    {
      id: '8-apartment-buildings',
      title: 'Apartment Building Load Calculation',
      rules: 'Rule 8-202',
      explanation:
        'Rule 8-202 covers load calculations for apartment and similar multi-unit buildings. It works in two stages: first calculate the load for each individual unit, then apply demand factors for multiple units.\n\nSubrule (1) — Individual Unit Load: The load for each apartment unit is the GREATER of method (a) or method (b):\n\nMethod (a): 3500W for the first 45 m² of living area, plus 1500W for the second 45 m², plus 1000W for each additional 90 m² (or portion thereof). Then add heating per Section 62, AC at 100%, range demand per Rule 8-200 formula, tankless water heaters at 100%, and other loads over 1500W using the same rules as single dwellings.\n\nMethod (b): The minimum load for any apartment unit is 60A (equivalent to 14400W at 240V). This ensures that even the smallest studio apartment has an adequate electrical supply.\n\nSubrule (2) states that apartment unit loads are NOT considered continuous per Rule 8-104.\n\nSubrule (3) — Multiple Unit Demand Factors: This is the critical rule for sizing the building service and main feeders. The demand factors for the aggregate of all dwelling units are:\n- 100% of the heaviest (largest) unit load\n- 65% of the next 2 unit loads\n- 40% of the next 2 unit loads\n- 25% of the next 15 unit loads\n- 10% of all remaining unit loads\n\nThese demand factors apply to the dwelling unit loads calculated above, EXCLUDING heating, AC, and EV loads which are handled separately.\n\nThen you add:\n- Heating: per Section 62 demand factors for the total heating load\n- Air conditioning: 100% of the total connected AC load\n- Electric vehicle supply equipment: per Table 38 demand factors\n- Non-dwelling common area loads (corridors, lobby, laundry room, parking, amenity rooms): 75% of total\n\nThe stepped demand factor schedule is based on statistical analysis showing that in a building with many units, the probability of all units drawing maximum load simultaneously decreases dramatically as the number of units increases.',
      fieldScenario:
        'You are designing the electrical service for a 25-unit apartment building. Each unit is 75 m² with an electric range (10 kW), baseboard heating (5 kW per unit), and one Level 2 EV charger per 5 units (5 chargers total, 40A each).\n\nStep 1 — Individual Unit Load (Method a):\n- Basic load: 3500W (first 45m²) + 1500W (second 45m²) = 5000W (75m² uses only 2 tiers)\n- Range: 6000W (<=12 kW per Rule 8-200 formula)\n- Unit subtotal (excl. heating): 5000 + 6000 = 11000W\n\nCheck Method (b): minimum 60A = 14400W. Since 14400W > 11000W, each unit = 14400W.\n\nStep 2 — Multiple Unit Demand (Rule 8-202(3)(a)):\n- 1 unit at 100%: 14400W = 14400W\n- 2 units at 65%: 2 × 14400 × 0.65 = 18720W\n- 2 units at 40%: 2 × 14400 × 0.40 = 11520W\n- 15 units at 25%: 15 × 14400 × 0.25 = 54000W\n- 5 units at 10%: 5 × 14400 × 0.10 = 7200W\n- Dwelling subtotal = 105840W\n\nStep 3 — Add heating:\n- Total heating: 25 × 5000W = 125000W\n- Per Section 62 demand factors for 25 units\n\nStep 4 — Add EV:\n- 5 chargers × 9600W = 48000W nameplate\n- Per Table 38 demand factors\n\nStep 5 — Add common area loads at 75%:\n- Corridors, lobby, laundry, parking lighting: e.g., 15000W × 0.75 = 11250W\n\nThe demand factors dramatically reduce the required service size compared to simply adding all 25 units at full load.',
      keyPoints: [
        'Individual unit: GREATER of Method (a) itemized or Method (b) minimum 60A (Rule 8-202(1))',
        'Method (a): 3500W first 45m² + 1500W second 45m² + 1000W each additional 90m² (Rule 8-202(1)(a))',
        'Range, tankless, and other loads: same formulas as single dwelling Rule 8-200 (Rule 8-202(1)(a))',
        'Apartment unit loads are NOT continuous per Rule 8-104 (Rule 8-202(2))',
        'Multiple unit demand: 100% heaviest + 65% next 2 + 40% next 2 + 25% next 15 + 10% remaining (Rule 8-202(3)(a))',
        'Demand factors apply to dwelling unit loads EXCLUDING heating, AC, and EV (Rule 8-202(3))',
        'Heating: added separately per Section 62 demand factors (Rule 8-202(3)(b))',
        'Air conditioning: 100% of total connected load (Rule 8-202(3)(c))',
        'EV supply equipment: per Table 38 demand factors (Rule 8-202(3)(d))',
        'Non-dwelling common area loads (corridors, lobby, laundry, parking): 75% (Rule 8-202(3)(e))',
        'Minimum unit load of 60A ensures even smallest studio has adequate supply (Rule 8-202(1)(b))',
      ],
      diagramaMermaid: `graph TD
    A["Apartment Building\\n(Rule 8-202)"] --> B["Step 1:\\nEach Unit Load"]
    B --> C{"Greater of:"}
    C --> D["Method (a):\\n3500W + 1500W +\\n1000W/90m² + loads"]
    C --> E["Method (b):\\n60A minimum\\n(14400W)"]
    A --> F["Step 2:\\nMultiple Unit\\nDemand (3)(a)"]
    F --> G["100% heaviest"]
    F --> H["65% next 2"]
    F --> I["40% next 2"]
    F --> J["25% next 15"]
    F --> K["10% remaining"]
    A --> L["Step 3: Add\\nSeparately"]
    L --> M["Heating per S62"]
    L --> N["AC at 100%"]
    L --> O["EV per Table 38"]
    L --> P["Common areas\\nat 75%"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style L fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'fee', title: 'Unit Basic Load', note: '3500W first 45m² + 1500W second 45m² + 1000W/90m² thereafter — Rule 8-202(1)(a)', color: 'sky' },
        { icon: 'shield', title: 'Minimum 60A', note: 'Every apartment unit must be at least 60A (14400W) regardless of size — Rule 8-202(1)(b)', color: 'rose' },
        { icon: 'power', title: 'Demand Steps', note: '100% / 65% / 40% / 25% / 10% for 1 / 2 / 2 / 15 / remaining units — Rule 8-202(3)(a)', color: 'emerald' },
        { icon: 'bolt', title: 'EV per Table 38', note: 'EV charger demand factors from Table 38, separate from dwelling unit loads — Rule 8-202(3)(d)', color: 'violet' },
        { icon: 'label', title: 'Common Areas', note: 'Corridors, lobby, laundry, parking at 75% of connected load — Rule 8-202(3)(e)', color: 'amber' },
      ],
    },

    // =========================================================================
    // 8. SCHOOLS, HOSPITALS & HOTELS (Rules 8-204, 8-206, 8-208)
    // =========================================================================
    {
      id: '8-schools-hospitals-hotels',
      title: 'Schools, Hospitals & Hotels',
      rules: 'Rules 8-204, 8-206, 8-208',
      explanation:
        'Rules 8-204, 8-206, and 8-208 provide specific load calculation methods for three institutional/commercial building types that have unique electrical demand patterns.\n\nRule 8-204 — Schools:\nThe basic load for schools is calculated using two rates: 50 W/m² for classroom areas and 10 W/m² for all other areas (corridors, gyms, cafeterias, offices, mechanical rooms). This reflects the higher electrical density in classrooms (lighting, computers, projectors) versus circulation and support spaces.\n\nDemand factors for schools depend on size:\n- Schools with 900 m² or less of floor area: Heating load per Section 62 demand factors, plus 75% of the balance of the calculated load.\n- Schools with more than 900 m²: Heating load per Section 62, plus 75% of the first 900 m² of calculated load (excluding heating), plus 50% of the calculated load for area exceeding 900 m².\n\nThe stepped demand factor recognizes that larger schools have more diversity — not all classrooms are fully loaded simultaneously.\n\nRule 8-206 — Hospitals:\nThe basic load for hospitals uses 20 W/m² for general areas and 100 W/m² for high-intensity areas (operating rooms, radiology, intensive care units, etc.). The dramatically higher rate for high-intensity areas reflects the heavy equipment loads in these critical spaces.\n\nDemand factors for hospitals:\n- 900 m² or less: Heating per Section 62 + 80% of the balance.\n- More than 900 m²: Heating per Section 62 + 80% of the first 900 m² + 65% of the excess over 900 m².\n\nHospitals use higher demand factor percentages (80%/65%) compared to schools (75%/50%) because hospitals have more critical loads that must be available continuously.\n\nRule 8-208 — Hotels, Motels, and Dormitories:\nThe basic load is 20 W/m² for guest rooms and general areas, plus the full connected load of any special areas (restaurants, banquet halls, pools, spas, commercial kitchens). The demand factor schedule is identical to hospitals: 80%/65% at the 900 m² threshold, plus heating per Section 62.',
      fieldScenario:
        'You are designing electrical services for three buildings in a new community development.\n\nProject 1 — Elementary School (1200 m² total: 800 m² classrooms, 400 m² other):\nBasic load: (800 × 50) + (400 × 10) = 40000 + 4000 = 44000W.\nHeating: 30 kW electric baseboard, per Section 62 demand.\nDemand: School >900 m², so heating per S62 (say 30000W) + 75% of first 900m² load + 50% of excess.\nThe 75%/50% split significantly reduces the calculated service load.\n\nProject 2 — Small Hospital (2000 m²: 500 m² high-intensity OR/radiology, 1500 m² general):\nBasic load: (500 × 100) + (1500 × 20) = 50000 + 30000 = 80000W.\nDemand: >900 m², so heating + 80% of first 900m² + 65% of excess. The 80% and 65% factors are higher than schools because hospital loads are more critical.\n\nProject 3 — Hotel (3000 m² rooms + 500 m² restaurant/spa):\nBasic load: (3000 × 20) + restaurant/spa full connected load.\nDemand: Same formula as hospital — 80%/65% at 900 m² threshold.\n\nNote the pattern: All three use the 900 m² threshold as the breakpoint, but with different W/m² rates and different demand percentages reflecting each building type\'s electrical usage patterns.',
      keyPoints: [
        'Schools: 50 W/m² for classrooms, 10 W/m² for all other areas (Rule 8-204)',
        'Schools <=900 m²: heating per S62 + 75% of balance (Rule 8-204)',
        'Schools >900 m²: heating per S62 + 75% of first 900 m² load + 50% of excess (Rule 8-204)',
        'Hospitals: 20 W/m² general areas, 100 W/m² high-intensity areas (OR, radiology, ICU) (Rule 8-206)',
        'Hospitals <=900 m²: heating per S62 + 80% of balance (Rule 8-206)',
        'Hospitals >900 m²: heating per S62 + 80% of first 900 m² load + 65% of excess (Rule 8-206)',
        'Hotels/motels/dormitories: 20 W/m² general + full connected load of special areas (Rule 8-208)',
        'Hotels demand factors: same as hospitals — 80%/65% at 900 m² threshold (Rule 8-208)',
        'All three building types use 900 m² as the threshold for stepped demand factors',
        'Heating is always added separately per Section 62 demand factors for all three building types',
      ],
      diagramaMermaid: `graph TD
    A["Institutional\\nBuildings"] --> B["Schools\\n(Rule 8-204)"]
    A --> C["Hospitals\\n(Rule 8-206)"]
    A --> D["Hotels/Motels\\n(Rule 8-208)"]
    B --> E["50 W/m²\\nclassroom\\n10 W/m² other"]
    C --> F["20 W/m²\\ngeneral\\n100 W/m² high-\\nintensity"]
    D --> G["20 W/m²\\ngeneral\\n+ special areas\\n100%"]
    E --> H["Demand:\\n75% / 50%\\nat 900 m²"]
    F --> I["Demand:\\n80% / 65%\\nat 900 m²"]
    G --> I
    H --> J["+ Heating\\nper Section 62"]
    I --> J
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#065f46,stroke:#10b981,color:#e2e8f0
    style C fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style J fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0`,
      infoCards: [
        { icon: 'write', title: 'School Rates', note: '50 W/m² classrooms, 10 W/m² other areas. Demand: 75%/50% at 900m² — Rule 8-204', color: 'sky' },
        { icon: 'fire', title: 'Hospital Rates', note: '20 W/m² general, 100 W/m² high-intensity (OR, ICU). Demand: 80%/65% — Rule 8-206', color: 'rose' },
        { icon: 'post', title: 'Hotel Rates', note: '20 W/m² + 100% special areas. Same demand as hospitals: 80%/65% — Rule 8-208', color: 'amber' },
        { icon: 'ruler', title: '900 m² Threshold', note: 'All three building types use 900 m² as the breakpoint for stepped demand factors', color: 'emerald' },
        { icon: 'thermometer', title: 'Heating Separate', note: 'Heating always added separately per Section 62 for all institutional buildings', color: 'violet' },
      ],
    },

    // =========================================================================
    // 9. OTHER OCCUPANCIES & SPECIAL LOADS (Rules 8-210, 8-212)
    // =========================================================================
    {
      id: '8-other-occupancies-special',
      title: 'Other Occupancies & Special Loads',
      rules: 'Rules 8-210, 8-212',
      explanation:
        'Rule 8-210 covers all building types not specifically addressed by Rules 8-200 through 8-208. This is the catch-all rule for commercial, industrial, retail, office, warehouse, and other occupancies.\n\nThe basic load for "other occupancies" is determined from Table 14, which lists watts per square metre for numerous building types. Examples include:\n- Office buildings\n- Retail stores\n- Restaurants\n- Warehouses\n- Churches\n- Banks\n- Barber/beauty shops\n\nTo the Table 14 basic load, you add the full connected load of any special equipment or loads not covered by the W/m² rate. This includes commercial kitchen equipment, sign lighting, special manufacturing equipment, and any other load that exceeds what the basic W/m² rate contemplates.\n\nFor buildings with electric vehicle supply equipment, the EV load is added per Table 38 demand factors, which provide diversity factors based on the number of EV chargers installed.\n\nRule 8-210 does not specify its own demand factor schedule (unlike schools, hospitals, and hotels). The demand factors from Rule 8-106 apply as appropriate, and the qualified person may apply engineering judgment for specific load types.\n\nRule 8-212 addresses two specific load types that apply across all building types:\n\nSubrule (1) — Exit signs and emergency lighting: The load on circuits supplying exit signs and emergency lighting must be based on the actual connected load of the luminaires and signs. No demand factor is permitted because these are life-safety loads that must operate at full capacity during emergencies.\n\nSubrule (2) — Show windows: The minimum load for show window lighting is 650W per linear metre measured along the base of the window. This applies to retail display windows and ensures adequate power for high-intensity display lighting. This is a minimum — if the actual connected load exceeds 650 W/m, the actual connected load must be used.',
      fieldScenario:
        'You are designing the electrical service for a new strip mall with 6 retail units, a restaurant, and shared parking.\n\nFor each retail unit, you look up "retail store" in Table 14 per Rule 8-210 and find the W/m² rate. For a 200 m² retail space, the basic load might be 200 × 30 = 6000W (example rate). But one unit is a beauty salon with hair dryers, styling stations, and washers — those special loads are added at full connected load on top of the basic load.\n\nThe restaurant has its own Table 14 rate, plus you add the full connected load of the commercial kitchen equipment (ovens, fryers, walk-in coolers, dishwashers) which far exceeds the basic W/m² rate.\n\nFor EV chargers in the shared parking (8 Level 2 chargers), you apply Table 38 demand factors per Rule 8-210. The demand factor from Table 38 for 8 chargers reduces the total EV contribution compared to 8 × full nameplate.\n\nEach unit has a show window facing the street. The windows are 5 m wide each. Per Rule 8-212(2), the minimum load for show window lighting is 650 W/m × 5 m = 3250W per unit, regardless of what lighting is actually installed. If the tenant installs LED strips that only draw 500W total, you still use 3250W.\n\nThe strip mall has emergency exit signs and emergency lighting throughout the corridors. Per Rule 8-212(1), these are calculated at 100% connected load — no demand factor allowed for life-safety circuits.',
      keyPoints: [
        'Other occupancies: basic load from Table 14 W/m² for the specific building type (Rule 8-210)',
        'Add full connected load of special equipment not covered by Table 14 rate (Rule 8-210)',
        'EV supply equipment added per Table 38 demand factors (Rule 8-210)',
        'Demand factors from Rule 8-106 apply as appropriate for other occupancies (Rule 8-210)',
        'Exit signs and emergency lighting: calculated at 100% connected load — NO demand factor (Rule 8-212(1))',
        'Show windows: minimum 650W per linear metre along the base of the window (Rule 8-212(2))',
        'Show window minimum applies even if actual lighting load is lower — use the greater of 650 W/m or actual (Rule 8-212(2))',
        'Table 14 covers offices, retail, restaurants, warehouses, churches, banks, and many more (Rule 8-210)',
      ],
      diagramaMermaid: `graph TD
    A["Other Occupancies\\n(Rule 8-210)"] --> B["Table 14\\nW/m² Rate"]
    A --> C["+ Special\\nEquipment\\n100%"]
    A --> D["+ EV per\\nTable 38"]
    B --> E["Office, Retail,\\nRestaurant,\\nWarehouse, etc."]
    F["Special Loads\\n(Rule 8-212)"] --> G["Exit Signs &\\nEmergency Lighting\\n(Rule 8-212-1)"]
    F --> H["Show Windows\\n(Rule 8-212-2)"]
    G --> I["100% connected\\nload — NO demand\\nfactor"]
    H --> J["Minimum 650W\\nper linear metre\\nalong base"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style I fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style J fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'label', title: 'Table 14', note: 'Lists W/m² for every common building type — the starting point for Rule 8-210', color: 'sky' },
        { icon: 'fire', title: 'No Demand on Safety', note: 'Exit signs and emergency lighting at 100% — life safety loads cannot be reduced — Rule 8-212(1)', color: 'rose' },
        { icon: 'sun', title: 'Show Windows', note: 'Minimum 650W per linear metre at base — even if actual load is less — Rule 8-212(2)', color: 'amber' },
        { icon: 'bolt', title: 'EV via Table 38', note: 'EV charger loads added using Table 38 demand factors for all non-dwelling buildings — Rule 8-210', color: 'violet' },
      ],
    },

    // =========================================================================
    // 10. BRANCH CIRCUITS — RANGES, DATA & OUTLETS (Rules 8-300, 8-302, 8-304)
    // =========================================================================
    {
      id: '8-branch-ranges-data-outlets',
      title: 'Branch Circuits — Ranges, Data & Outlets',
      rules: 'Rules 8-300, 8-302, 8-304',
      explanation:
        'Rules 8-300, 8-302, and 8-304 address specific branch circuit load calculation requirements.\n\nRule 8-300 — Electric Ranges:\n\nSubrule (1): For dwelling units, the branch circuit load for an electric range is: 8000W if the range nameplate is 12 kW or less; for ranges exceeding 12 kW, use 8000W plus 40% of the amount by which the nameplate exceeds 12 kW. Note that this is a different base value (8000W) than the service/feeder calculation in Rule 8-200 (which uses 6000W). The branch circuit serves only the range, so a higher base is needed for adequate conductor sizing.\n\nSubrule (2): Multiple built-in cooking units (a cooktop plus one or more wall ovens) installed in the same dwelling are treated as a single range. Add up the nameplate ratings and apply the range demand formula as if it were one unit.\n\nSubrule (3): For commercial/industrial installations, the range or cooking equipment branch circuit must be rated for the full nameplate rating — no demand factor applies.\n\nSubrule (4): The range demand formulas do NOT apply to cord-connected hotplates or rangettes. These must be calculated at their full nameplate rating.\n\nRule 8-302 — Data Processing Equipment:\nThe total connected load of data processing equipment (servers, networking gear, UPS systems, storage arrays) is considered continuous. This means 80% derating applies with standard breakers per Rule 8-104(6). Data centres must be designed for the full connected load running continuously, reflecting the 24/7 nature of computing equipment.\n\nRule 8-304 — Maximum Number of Outlets per Circuit:\n\nSubrule (1) establishes the maximum number of outlets on a circuit based on OCPD rating and whether the device is rated for 80% or 100% continuous use:\n- 15A circuit at 80%: maximum 12 outlets\n- 15A circuit at 100%: maximum 15 outlets\n- 20A circuit at 80%: maximum 16 outlets\n- 20A circuit at 100%: maximum 20 outlets\n\nSubrule (2) defines how to count multi-gang receptacles: A duplex receptacle counts as 1 outlet, a triplex as 1.5 outlets, and a quadruplex (4-gang) as 2 outlets. So 12 duplex receptacles = 12 outlets, but 12 triplex receptacles = 18 outlets.\n\nSubrule (3): Where the actual connected load is known, the number of outlets may exceed the subrule (1) limits, provided the total load does not exceed the continuous rating of the OCPD.\n\nSubrule (4) addresses multi-outlet assemblies (plug strips/raceways). In normal use areas, each 1.5 m section counts as 1 outlet. In heavy-use areas (workshops, industrial benches), each 300 mm section counts as 1 outlet.',
      fieldScenario:
        'Scenario 1 — Range Branch Circuit:\nA new home has a 13.2 kW electric range. Per Rule 8-300(1), the branch circuit load = 8000 + 40% × (13200 - 12000) = 8000 + 480 = 8480W. At 240V, that is 35.3A. You install a 40A breaker with #8 AWG copper.\n\nThe same home has a built-in cooktop (6 kW) and a wall oven (5 kW). Per Rule 8-300(2), these are treated as one range: 6000 + 5000 = 11000W nameplate. Since <=12 kW, branch circuit load = 8000W. At 240V = 33.3A, use a 40A breaker.\n\nScenario 2 — Data Processing:\nA small server room has 15 kW of servers and 5 kW of networking gear. Per Rule 8-302, total 20 kW is considered continuous. With standard (80%) breakers per Rule 8-104(6): 20000/0.80 = 25000W required capacity at 208V 3-phase = 25000/(208×1.732) = 69.4A. You need at least a 70A (or more likely 100A) panel feed.\n\nScenario 3 — Outlet Counts:\nYou are wiring a general office floor on 20A circuits (80% rated). Per Rule 8-304(1), maximum 16 outlets per circuit. The architect specified duplex receptacles — each counts as 1 outlet per Rule 8-304(2). So 16 duplex receptacles per 20A circuit.\n\nA lab bench has a multi-outlet assembly (power strip raceway) that is 6 m long. It is a heavy-use area (instruments plugged in continuously). Per Rule 8-304(4), each 300 mm = 1 outlet, so 6000/300 = 20 outlets. That exceeds the 20A/80% limit of 16, so you need two circuits for this bench.',
      keyPoints: [
        'Dwelling range branch circuit: 8000W if <=12 kW; 8000W + 40% of excess over 12 kW if >12 kW (Rule 8-300(1))',
        'Branch circuit range base (8000W) is higher than service/feeder range base (6000W per Rule 8-200)',
        'Multiple built-in cooking units in same dwelling = one range for calculation (Rule 8-300(2))',
        'Commercial/industrial cooking: full nameplate rating — no demand factor (Rule 8-300(3))',
        'Cord-connected hotplates and rangettes: full nameplate, not range demand formula (Rule 8-300(4))',
        'Data processing equipment: total connected load is considered continuous (Rule 8-302)',
        '15A/80%: max 12 outlets. 15A/100%: max 15. 20A/80%: max 16. 20A/100%: max 20 (Rule 8-304(1))',
        'Duplex receptacle = 1 outlet. Triplex = 1.5 outlets. Quadruplex = 2 outlets (Rule 8-304(2))',
        'Known loads may exceed outlet count limits if within OCPD continuous rating (Rule 8-304(3))',
        'Multi-outlet assemblies: normal use = 1 outlet per 1.5 m; heavy use = 1 outlet per 300 mm (Rule 8-304(4))',
      ],
      diagramaMermaid: `graph TD
    A["Branch Circuits"] --> B["Electric Ranges\\n(Rule 8-300)"]
    A --> C["Data Processing\\n(Rule 8-302)"]
    A --> D["Outlet Limits\\n(Rule 8-304)"]
    B --> E["Dwelling:\\n8000W base\\n+40% over 12kW"]
    B --> F["Commercial:\\nFull nameplate"]
    B --> G["Built-in units\\n= one range"]
    C --> H["Total connected\\nload = CONTINUOUS"]
    D --> I["15A/80%: 12\\n15A/100%: 15\\n20A/80%: 16\\n20A/100%: 20"]
    D --> J["Duplex=1\\nTriplex=1.5\\nQuad=2"]
    D --> K["Multi-outlet:\\n1.5m = 1 outlet\\n300mm = 1 (heavy)"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style B fill:#065f46,stroke:#10b981,color:#e2e8f0
    style C fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0
    style H fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0`,
      infoCards: [
        { icon: 'fire', title: 'Range: Branch vs Service', note: 'Branch circuit = 8000W base (Rule 8-300). Service/feeder = 6000W base (Rule 8-200)', color: 'rose' },
        { icon: 'power', title: 'Data = Continuous', note: 'All data processing load is continuous — apply 80% derating with standard breakers — Rule 8-302', color: 'violet' },
        { icon: 'bolt', title: '20A Circuit Outlets', note: '80% rated: max 16 outlets. 100% rated: max 20 outlets — Rule 8-304(1)', color: 'sky' },
        { icon: 'ruler', title: 'Multi-Outlet Assembly', note: 'Normal: 1 outlet per 1.5m. Heavy use: 1 outlet per 300mm — Rule 8-304(4)', color: 'amber' },
        { icon: 'label', title: 'Duplex = 1', note: 'A duplex receptacle counts as 1 outlet, not 2 — Rule 8-304(2)', color: 'emerald' },
      ],
    },

    // =========================================================================
    // 11. VEHICLE HEATER RECEPTACLES (Rule 8-400)
    // =========================================================================
    {
      id: '8-vehicle-heater-receptacles',
      title: 'Vehicle Heater Receptacles',
      rules: 'Rule 8-400',
      explanation:
        'Rule 8-400 addresses the unique Canadian requirement for block heater receptacles in parking areas. In cold climates, vehicles need engine block heaters, battery warmers, and interior heaters plugged in during winter to ensure reliable starting. This rule provides demand factors that recognize not all vehicles will be plugged in or drawing full load simultaneously.\n\nSubrule (1) defines two key terms:\n- Controlled receptacle: A receptacle controlled by an automatic device (timer, thermostat, or energy management system) that cycles the receptacle on and off.\n- Restricted receptacle: A receptacle that limits the maximum current that can be drawn, typically through a current-limiting device.\n\nSubrule (2) establishes the branch circuit requirements: Each duplex receptacle or pair of single receptacles requires one dedicated branch circuit. The maximum branch circuit rating is 20A. This means you cannot put multiple duplex receptacles on one circuit.\n\nSubrule (3) provides demand factors for UNRESTRICTED and UNCONTROLLED receptacles (standard receptacles with no limiting or cycling devices):\n- First 30 receptacles: 1200W per duplex (or 1800W per pair of singles)\n- Next 30 receptacles (31-60): 1000W per duplex (or 1500W per pair of singles)\n- Over 60 receptacles: 800W per duplex (or 1200W per pair of singles)\n\nSubrule (4) provides reduced demand factors for RESTRICTED or CONTROLLED receptacles:\n- First 30 receptacles: 650W per duplex (or 975W per pair of singles)\n- Next 30 receptacles (31-60): 550W per duplex (or 825W per pair of singles)\n- Over 60 receptacles: 450W per duplex (or 675W per pair of singles)\n\nThe controlled/restricted demand factors are roughly 55% of the uncontrolled values, reflecting the significant load reduction achieved by cycling or current limiting.\n\nSubrule (5) states that where a parking lot can be completely filled with vehicles (full occupancy expected), the demand must be calculated for the greater demand — meaning you must account for the maximum number of receptacles that could be in use.',
      fieldScenario:
        'You are designing the electrical system for a 100-stall parking lot at a northern Alberta office building. Each stall gets a duplex receptacle for block heaters.\n\nScenario A — Uncontrolled (standard receptacles, no timers):\nPer Rule 8-400(3):\n- First 30 stalls: 30 × 1200W = 36000W\n- Next 30 stalls: 30 × 1000W = 30000W\n- Remaining 40 stalls: 40 × 800W = 32000W\n- Total demand: 98000W = 98 kW\n\nAt 208V 3-phase: 98000 / (208 × 1.732) = 272A\n\nScenario B — Timer-controlled (cycling 50% on/off):\nPer Rule 8-400(4):\n- First 30: 30 × 650W = 19500W\n- Next 30: 30 × 550W = 16500W\n- Remaining 40: 40 × 450W = 18000W\n- Total demand: 54000W = 54 kW\n\nAt 208V 3-phase: 54000 / (208 × 1.732) = 150A\n\nThe controlled option saves 44 kW and reduces the required feeder from approximately 300A to 175A — a massive cost saving in wire, conduit, and transformer capacity.\n\nPer Rule 8-400(2), each duplex gets its own 20A branch circuit. For 100 stalls, that is 100 branch circuits — which typically means multiple panels. You plan for 4 x 30-space outdoor panels.\n\nPer Rule 8-400(5), since this lot is expected to be full during business hours (all 100 stalls occupied), you must use the full 100-receptacle demand — you cannot assume partial occupancy.',
      keyPoints: [
        'Controlled receptacle: cycled by timer, thermostat, or energy management system (Rule 8-400(1))',
        'Restricted receptacle: limits maximum current draw via current-limiting device (Rule 8-400(1))',
        'One branch circuit per duplex or pair of singles, maximum 20A (Rule 8-400(2))',
        'Uncontrolled demand: first 30 at 1200/1800W, next 30 at 1000/1500W, over 60 at 800/1200W per receptacle (Rule 8-400(3))',
        'Controlled/restricted demand: first 30 at 650/975W, next 30 at 550/825W, over 60 at 450/675W per receptacle (Rule 8-400(4))',
        'Controlled demand is roughly 55% of uncontrolled — significant savings on feeder and service sizing',
        'Full parking lots: use demand for maximum expected occupancy (Rule 8-400(5))',
        'Duplex = one receptacle for demand purposes; pair of singles has higher demand values',
      ],
      diagramaMermaid: `graph TD
    A["Vehicle Heater\\nReceptacles\\n(Rule 8-400)"] --> B["Branch Circuit\\n(Rule 8-400-2)"]
    A --> C{"Controlled or\\nRestricted?"}
    B --> D["1 circuit per\\nduplex or pair\\nof singles\\nMax 20A"]
    C -->|"No"| E["Uncontrolled\\nDemand\\n(Rule 8-400-3)"]
    C -->|"Yes"| F["Controlled\\nDemand\\n(Rule 8-400-4)"]
    E --> G["1-30: 1200W\\n31-60: 1000W\\n>60: 800W\\n(per duplex)"]
    F --> H["1-30: 650W\\n31-60: 550W\\n>60: 450W\\n(per duplex)"]
    I["Rule 8-400(5)"] --> J["Full lot =\\nuse greater\\ndemand"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style E fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style F fill:#065f46,stroke:#10b981,color:#e2e8f0
    style D fill:#92400e,stroke:#f59e0b,color:#e2e8f0`,
      infoCards: [
        { icon: 'thermometer', title: 'Canadian Necessity', note: 'Block heater receptacles are critical in cold climates — unique to Canadian code', color: 'sky' },
        { icon: 'fee', title: 'Controlled Savings', note: 'Timer/thermostat control cuts demand to ~55% of uncontrolled — Rule 8-400(4)', color: 'emerald' },
        { icon: 'warning', title: 'One Circuit Each', note: 'Each duplex receptacle gets its own dedicated 20A branch circuit — Rule 8-400(2)', color: 'rose' },
        { icon: 'power', title: 'Stepped Demand', note: 'First 30, next 30, over 60 — demand per receptacle decreases with quantity — Rules 8-400(3),(4)', color: 'amber' },
        { icon: 'lock', title: 'Full Lot Rule', note: 'If lot will be full, calculate for maximum occupancy — Rule 8-400(5)', color: 'violet' },
      ],
    },

    // =========================================================================
    // 12. EV ENERGY MANAGEMENT SYSTEMS (Rule 8-500)
    // =========================================================================
    {
      id: '8-ev-energy-management',
      title: 'EV Energy Management Systems',
      rules: 'Rule 8-500',
      explanation:
        'Rule 8-500 is a relatively new addition to the CEC, addressing the growing need for electric vehicle charging infrastructure without requiring massive service upgrades. An Electric Vehicle Energy Management System (EVEMS) is a system that monitors and controls the electrical load of electric vehicle supply equipment (EVSE — the chargers).\n\nSubrule (1): An EVEMS is permitted to monitor and control the electrical load of EV supply equipment. This is the enabling provision that allows load management systems to be used. The EVEMS may dynamically allocate available electrical capacity among multiple EV chargers, throttle individual chargers up or down, and schedule charging to off-peak periods — all while ensuring the building\'s electrical system is not overloaded.\n\nSubrule (2): The EVEMS must not allow the total EV charging load to exceed the limits established by Rule 8-104(5) or Rule 8-104(6). This means the EVEMS must respect the continuous load ratings of the conductors and overcurrent devices in the system. If the feeder serving the EV chargers has an 80%-rated breaker, the EVEMS must ensure total EV load stays at or below 80% of the conductor ampacity. If the device is 100%-rated, the limit is 100% (or 85% for single conductors). The EVEMS is a load management tool, not a permission to exceed electrical system ratings.\n\nSubrule (3): The EVEMS is permitted to use remote control to manage the EV charging load. This means the system can use cloud-based platforms, building automation system integration, or utility demand response signals to control charging. Remote control enables sophisticated load management strategies such as responding to real-time electricity pricing, utility peak demand signals, or building energy management priorities.\n\nThe practical significance of Rule 8-500 is enormous. Without an EVEMS, 10 Level 2 chargers at 40A each would require 400A of dedicated capacity (or even 500A considering 80% continuous derating). With an EVEMS per Rules 8-106(10) and 8-106(11), the same 10 chargers might require only 100A of capacity — or potentially zero additional capacity if the EVEMS monitors the service and uses only spare capacity.\n\nThis rule is the key enabler for EV charging in existing buildings, parking garages, and multi-unit residential buildings where service upgrades would be prohibitively expensive.',
      fieldScenario:
        'You are retrofitting a 50-unit condo building with EV charging. The building has a 600A service with a measured peak demand of 450A. The condo board wants chargers for 30 parking stalls.\n\nWithout EVEMS: 30 × 40A Level 2 chargers = 1200A nameplate. Even with demand factors, this would require a massive service upgrade — potentially $200,000+.\n\nWith EVEMS per Rule 8-500(1): You install an EVEMS that monitors the building service (per Rule 8-106(11)) and controls all 30 chargers. The system dynamically allocates available capacity.\n\nPer Rule 8-106(11), since the EVEMS monitors the electrical service, the EV load does not need to be included in the calculated load at all. The EVEMS ensures that EV charging only uses spare capacity: when the building demand is 450A, charging gets up to 150A (600A service - 450A demand). At 3 AM when building demand drops to 200A, charging gets up to 400A.\n\nPer Rule 8-500(2), the EVEMS must not exceed Rule 8-104(5) or (6) limits. The 600A service feeder uses standard (80%-rated) equipment, so the EVEMS must keep total building load (including EV) at or below 480A (80% × 600A). You program the EVEMS to limit total facility load to 475A.\n\nPer Rule 8-500(3), the EVEMS uses cloud-based management. Residents use an app to set charging preferences, and the system responds to utility time-of-use rates to minimize charging costs.\n\nResult: 30 EV chargers installed with ZERO service upgrade. The EVEMS cost $15,000 instead of a $200,000 service upgrade.',
      keyPoints: [
        'EVEMS is permitted to monitor and control the electrical load of EV supply equipment (Rule 8-500(1))',
        'EVEMS may dynamically allocate capacity among multiple chargers, throttle, and schedule charging (Rule 8-500(1))',
        'EVEMS must not allow total EV load to exceed Rule 8-104(5) or (6) limits (Rule 8-500(2))',
        'For 80%-rated devices: EVEMS must keep EV load within 80% of conductor ampacity (Rule 8-500(2))',
        'For 100%-rated devices: EVEMS must keep EV load within 100% of conductor ampacity (85% for single conductors) (Rule 8-500(2))',
        'EVEMS is permitted to use remote control (cloud, BAS, utility signals) to manage EV load (Rule 8-500(3))',
        'Combined with Rule 8-106(10): calculated EV load = max EVEMS allows at any time',
        'Combined with Rule 8-106(11): EVEMS with service monitoring = EV load excluded from calculated load entirely',
        'EVEMS enables EV charging in existing buildings without costly service upgrades',
      ],
      diagramaMermaid: `graph TD
    A["EV Energy Management\\nSystem (EVEMS)\\n(Rule 8-500)"] --> B["Rule 8-500(1):\\nPermitted to monitor\\n& control EVSE load"]
    A --> C["Rule 8-500(2):\\nMust not exceed\\nRule 8-104(5)/(6)"]
    A --> D["Rule 8-500(3):\\nRemote control\\npermitted"]
    B --> E["Dynamic allocation\\namong chargers"]
    B --> F["Throttle up/down\\nindividual EVSE"]
    B --> G["Schedule charging\\nto off-peak"]
    C --> H{"Device rated\\n100%?"}
    H -->|"Yes"| I["EV ≤ 100%\\nampacity\\n(85% single cond.)"]
    H -->|"No"| J["EV ≤ 80%\\nampacity\\n(70% single cond.)"]
    D --> K["Cloud platforms"]
    D --> L["Building\\nautomation"]
    D --> M["Utility demand\\nresponse signals"]
    style A fill:#1e3a5f,stroke:#3b82f6,color:#e2e8f0
    style C fill:#991b1b,stroke:#ef4444,color:#e2e8f0
    style E fill:#065f46,stroke:#10b981,color:#e2e8f0
    style D fill:#5b21b6,stroke:#8b5cf6,color:#e2e8f0`,
      infoCards: [
        { icon: 'bolt', title: 'Dynamic Load Sharing', note: 'EVEMS distributes available capacity among chargers in real-time — Rule 8-500(1)', color: 'sky' },
        { icon: 'shield', title: 'Must Respect Limits', note: 'Total EV load must stay within Rule 8-104(5)/(6) continuous limits — Rule 8-500(2)', color: 'rose' },
        { icon: 'post', title: 'Remote Control OK', note: 'Cloud, BAS, utility signals all permitted for EVEMS control — Rule 8-500(3)', color: 'emerald' },
        { icon: 'fee', title: 'Massive Savings', note: 'With EVEMS + service monitoring, EV load may require ZERO service upgrade — Rules 8-106(10),(11)', color: 'amber' },
        { icon: 'lock', title: 'Key Enabler', note: 'Rule 8-500 makes EV charging feasible in existing buildings without service upgrades', color: 'violet' },
      ],
    },
  ],
}
