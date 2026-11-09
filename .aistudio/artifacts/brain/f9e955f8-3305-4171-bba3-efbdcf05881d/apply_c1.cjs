"use strict";
const fs = require("fs");
const path = "/app/applet/index.html";
let html = fs.readFileSync(path, "utf8");

function replaceExact(target, replacement, label) {
  const idx = html.indexOf(target);
  if (idx === -1) {
    throw new Error("Could not find target for: " + label);
  }
  html = html.slice(0, idx) + replacement + html.slice(idx + target.length);
  console.log("Applied:", label);
}

// 1. Header comment & version & title
replaceExact(
`  GAME NAME: Bastion Breaker: The Kinetic Dredge
  VERSION: BB-R7 v1
  CHANGELOG:
  - BB-R7 v1: Added Simple UPGRADES Shop in the Foundry`,
`  GAME NAME: Bastion Breaker: The Kinetic Dredge
  VERSION: BB-C1 v1
  CHANGELOG:
  - BB-C1 v1: Added Story Mode Framework and the Prologue World (Step C1): 3 title screen buttons (SANDBOX, FREE RUN, STORY) where only STORY uses unlock gating, dialogue, intro slides, and objectives while Sandbox and Free Run remain unchanged; added STORY data table (Prologue km 0-2, Act 1 km 3-15, Act 2 km 16-30, Act 3 km 31-45, Finale km 46-50 with biome, boss, unlock list, and dialogue lines); added editable UNLOCKS table gating Story mode (starts with run, jump, Ember Pistol, Engine-Blade Cleaver/Standard Counterweight/Standard Motor Core/Standard Coil, Return button, and all 3 throttle notches; locks Anatomy Ledger & Smelter Car to Prologue boss, Vent Parry to C2 boss fight, and remaining wagons/tools/parts/drill tiers to Acts 1-3 with greyed-out buttons, lock icons, and 1-line hints); added non-blocking top-center radio dialogue system (Mara, Vanguard-07, System portraits, 30 chars/s typewriter, Tap/Enter or 4s auto-advance queue); added 6 code-drawn Story Intro slides with Skip button launching km 0 with the train STALLED and screen-edge frost; added objective line under the km bar, Use touch button & Enter key for floating USE prompts; added Prologue Rusted Sluice (km 0-2) gameplay: 1/s stalled Ember-Heart drain, 3 frozen drill teeth (40 HP each) cleared with the blade while Mara teaches swing & heat, engine room ignition lever roaring the Bastion to life with camera shake & spinning drill, Mite & Shell Brute waves, falling stalactites with 0.8s floor warning shadows (20 player dmg / 30 hull dmg), brittle scrap barricades on the track (15 hull dmg, x0.5 speed for 1s, debris & shake), Vanguard-01 black-box log at km 1.5 opening a LOG screen + Mara line; and added Skip intro, Skip dialogue, Jump to km 0 / 1 / 1.9, Unlock everything, and Show unlock table debug buttons.
  - BB-R7 v1: Added Simple UPGRADES Shop in the Foundry`,
  "1a. Header comment"
);

replaceExact(
  `<title>Bastion Breaker: The Kinetic Dredge - BB-R7 v1</title>`,
  `<title>Bastion Breaker: The Kinetic Dredge - BB-C1 v1</title>`,
  "1b. HTML title"
);

replaceExact(
`  <div id="version-tag" title="Tap 3 times or press F3 for Debug Panel">BB-R7 v1</div>

  <div id="debug-panel">
    <div class="dbg-title">DEBUG PANEL [BB-R7 v1]</div>`,
`  <div id="version-tag" title="Tap 3 times or press F3 for Debug Panel">BB-C1 v1</div>

  <div id="debug-panel">
    <div class="dbg-title">DEBUG PANEL [BB-C1 v1]</div>`,
  "1c. Version tag & debug title"
);

replaceExact(
`      <button id="dbg-prop-boxes" class="dbg-btn" type="button">Show prop boxes: OFF</button>
      <button id="dbg-particle-count" class="dbg-btn" type="button">Show particle count: OFF</button>
    </div>
  </div>

  <script>
    (function () {
      "use strict";

      /* =====================================================================
       * CONFIG
       * ===================================================================== */
      var CFG = {
        version: "BB-R7 v1",`,
`      <button id="dbg-prop-boxes" class="dbg-btn" type="button">Show prop boxes: OFF</button>
      <button id="dbg-particle-count" class="dbg-btn" type="button">Show particle count: OFF</button>
      <button id="dbg-skip-intro" class="dbg-btn" type="button">Skip intro</button>
      <button id="dbg-skip-dialogue" class="dbg-btn" type="button">Skip dialogue</button>
      <button id="dbg-jump-km0" class="dbg-btn" type="button">Jump to km 0</button>
      <button id="dbg-jump-km1" class="dbg-btn" type="button">Jump to km 1</button>
      <button id="dbg-jump-km19" class="dbg-btn" type="button">Jump to km 1.9</button>
      <button id="dbg-unlock-everything" class="dbg-btn" type="button">Unlock everything</button>
      <button id="dbg-show-unlock-table" class="dbg-btn" type="button">Show unlock table</button>
    </div>
  </div>

  <script>
    (function () {
      "use strict";

      /* =====================================================================
       * CONFIG
       * ===================================================================== */
      var CFG = {
        version: "BB-C1 v1",`,
  "1d. Debug buttons & CFG.version"
);

// 2. Add Use button to DATA_TABLES.controls & BB-C1 v1 to DATA_TABLES.changelog
replaceExact(
`          {
            id: "switch",
            label: "SWITCH",
            icon: "cycle",
            colour: "#FFC53A",
            shape: "circle",
            corner: "br",
            defaultPos: { fx: 236 / 960, fy: 50 / 540 },
            defaultSize: 64,
            key: "Q",
            visibility: "always"
          }
        ],

        changelog: [`,
`          {
            id: "switch",
            label: "SWITCH",
            icon: "cycle",
            colour: "#FFC53A",
            shape: "circle",
            corner: "br",
            defaultPos: { fx: 236 / 960, fy: 50 / 540 },
            defaultSize: 64,
            key: "Q",
            visibility: "always"
          },
          {
            id: "use",
            label: "USE",
            icon: "anvil",
            colour: "#2FE6A0",
            shape: "circle",
            corner: "br",
            defaultPos: { fx: 312 / 960, fy: 124 / 540 },
            defaultSize: 64,
            key: "Enter",
            visibility: "always"
          }
        ],

        changelog: [
          "BB-C1 v1: Added Story Mode Framework and the Prologue World (Step C1): 3 title screen buttons (SANDBOX, FREE RUN, STORY) where only STORY uses unlock gating, dialogue, intro slides, and objectives while Sandbox and Free Run remain unchanged; added STORY data table (Prologue km 0-2, Act 1 km 3-15, Act 2 km 16-30, Act 3 km 31-45, Finale km 46-50 with biome, boss, unlock list, and dialogue lines); added editable UNLOCKS table gating Story mode (starts with run, jump, Ember Pistol, Engine-Blade Cleaver/Standard Counterweight/Standard Motor Core/Standard Coil, Return button, and all 3 throttle notches; locks Anatomy Ledger & Smelter Car to Prologue boss, Vent Parry to C2 boss fight, and remaining wagons/tools/parts/drill tiers to Acts 1-3 with greyed-out buttons, lock icons, and 1-line hints); added non-blocking top-center radio dialogue system (Mara, Vanguard-07, System portraits, 30 chars/s typewriter, Tap/Enter or 4s auto-advance queue); added 6 code-drawn Story Intro slides with Skip button launching km 0 with the train STALLED and screen-edge frost; added objective line under the km bar, Use touch button & Enter key for floating USE prompts; added Prologue Rusted Sluice (km 0-2) gameplay: 1/s stalled Ember-Heart drain, 3 frozen drill teeth (40 HP each) cleared with the blade while Mara teaches swing & heat, engine room ignition lever roaring the Bastion to life with camera shake & spinning drill, Mite & Shell Brute waves, falling stalactites with 0.8s floor warning shadows (20 player dmg / 30 hull dmg), brittle scrap barricades on the track (15 hull dmg, x0.5 speed for 1s, debris & shake), Vanguard-01 black-box log at km 1.5 opening a LOG screen + Mara line; and added Skip intro, Skip dialogue, Jump to km 0 / 1 / 1.9, Unlock everything, and Show unlock table debug buttons.",`,
  "2. Controls USE button & changelog"
);

// 3. Add DATA_TABLES.story, DATA_TABLES.unlocks, DATA_TABLES.introSlides, DATA_TABLES.storyLogs
replaceExact(
`          {
            id: "tool_return_cooldown",
            category: "TOOLS",
            name: "Return cooldown",
            msgLabel: "Return cooldown",
            icon: "return",
            maxLevel: 5,
            values: CFG.upgradeValues.tool_return_cooldown,
            costs: CFG.upgradeCosts.tools,
            unit: " s",
            prefix: "",
            decimals: 1
          }
        ],

        // ZONES table (name, startTile, endTile, colours, spawnTableKey, biomeKey)`,
`          {
            id: "tool_return_cooldown",
            category: "TOOLS",
            name: "Return cooldown",
            msgLabel: "Return cooldown",
            icon: "return",
            maxLevel: 5,
            values: CFG.upgradeValues.tool_return_cooldown,
            costs: CFG.upgradeCosts.tools,
            unit: " s",
            prefix: "",
            decimals: 1
          }
        ],

        // Step C1 Requirement 2: STORY data table — stages Prologue (km 0-2), Act 1 (3-15), Act 2 (16-30), Act 3 (31-45), Finale (46-50)
        story: [
          {
            id: "prologue",
            name: "Prologue: The Rusted Sluice",
            shortName: "Prologue (km 0-2)",
            startKm: 0,
            endKm: 2,
            biome: "rust",
            boss: "Sluice Gate Warden",
            hasContent: true,
            unlockList: ["ledger_tab", "wagon_smelter", "vent_parry"],
            dialogueLines: [
              { speaker: "System", text: "EMERGENCY WAKE PROTOCOL: VANGUARD-07 ONLINE. BASTION DRILL-TRAIN STALLED AT KM 0.0." },
              { speaker: "Mara", text: "Seven! Thank the Core you're awake! The Ember-Heart is cooling fast — losing 1% every second we sit stalled!" },
              { speaker: "Vanguard-07", text: "Frost on the hull... The front drill head is jammed solid with glacial rime." },
              { speaker: "Mara", text: "Get to the front of the train and smash those 3 frozen drill teeth with your Engine-Blade [J / BLADE]!" }
            ]
          },
          {
            id: "act1",
            name: "Act 1: Fungal Chasm",
            shortName: "Act 1 (km 3-15)",
            startKm: 3,
            endKm: 15,
            biome: "fungal",
            boss: "Spore-Mother Mycelia",
            hasContent: false,
            unlockList: ["wagon_cryo_vent", "tool_tripwire", "cw_heavy", "cw_light", "drill_tier_2", "wagon_shield_pylon", "edge_twin_fang"],
            dialogueLines: [
              { speaker: "Mara", text: "We broke through the Rusted Sluice! Entering the Fungal Chasm — Free Run patrol rules active while scanning ahead." }
            ]
          },
          {
            id: "act2",
            name: "Act 2: Volt-Quartz Caverns",
            shortName: "Act 2 (km 16-30)",
            startKm: 16,
            endKm: 30,
            biome: "volt-quartz",
            boss: "Volt-Loom Sovereign",
            hasContent: false,
            unlockList: ["wagon_plasma_shield", "tool_hook", "wagon_artillery", "wagon_drone_bay", "edge_piercing_lance", "core_volt_core", "coil_reinforced", "drill_tier_3"],
            dialogueLines: [
              { speaker: "Mara", text: "Crossing km 16 into the Volt-Quartz Caverns. High-voltage crystalline veins detected ahead!" }
            ]
          },
          {
            id: "act3",
            name: "Act 3: Obsidian Crucible",
            shortName: "Act 3 (km 31-45)",
            startKm: 31,
            endKm: 45,
            biome: "obsidian",
            boss: "Crucible Behemoth",
            hasContent: false,
            unlockList: ["wagon_thermal_conduit", "overdrive_chassis", "harvester_drones", "wagon_med_station", "edge_buzzsaw", "core_cryo_core", "core_magma_core", "coil_long_haul", "drill_tier_4"],
            dialogueLines: [
              { speaker: "Mara", text: "Entering the Obsidian Crucible at km 31. Thermal pressure rising across all decks!" }
            ]
          },
          {
            id: "finale",
            name: "Finale: The Solar Core",
            shortName: "Finale (km 46-50)",
            startKm: 46,
            endKm: 50,
            biome: "solar",
            boss: "Litho-Core Prime",
            hasContent: false,
            unlockList: ["solar_heart_restoration"],
            dialogueLines: [
              { speaker: "Mara", text: "Final approach to the petrified Solar Core! Prepare for the ultimate breach!" }
            ]
          }
        ],

        // Step C1 Requirement 3: Editable UNLOCKS table for Story mode gating
        unlocks: {
          // Start unlocked in Story mode
          run: { id: "run", name: "Run Movement", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          jump: { id: "jump", name: "Jump & Double Jump", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          ember_pistol: { id: "ember_pistol", name: "Ember Pistol", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          edge_cleaver: { id: "edge_cleaver", name: "Cleaver Edge", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          cw_standard: { id: "cw_standard", name: "Standard Counterweight", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          core_standard: { id: "core_standard", name: "Standard Motor Core", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          coil_standard: { id: "coil_standard", name: "Standard Coil", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          tool_return: { id: "tool_return", name: "Return Button", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          throttle_1: { id: "throttle_1", name: "Throttle 1: Crawl", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          throttle_2: { id: "throttle_2", name: "Throttle 2: Cruise", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          throttle_3: { id: "throttle_3", name: "Throttle 3: Ramming Speed", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },
          drill_tier_1: { id: "drill_tier_1", name: "Drill Bit Tier 1", stage: "start", unlockedByDefault: true, hint: "Available from the start of Story mode." },

          // Prologue unlocks (granted when Prologue boss is defeated; Vent Parry during boss fight in C2)
          ledger_tab: { id: "ledger_tab", name: "Anatomy Ledger", stage: "prologue", unlockedByDefault: false, hint: "Locked: Defeat the Prologue Boss to unlock the Anatomy Ledger." },
          wagon_smelter: { id: "wagon_smelter", name: "Smelter Car", stage: "prologue", unlockedByDefault: false, hint: "Locked: Defeat the Prologue Boss to unlock the Smelter Car." },
          vent_parry: { id: "vent_parry", name: "Vent Parry", stage: "prologue_boss", unlockedByDefault: false, hint: "Locked: Unlocked during the Prologue Boss fight (Step C2)." },

          // Act 1 (km 3 to 15) unlocks
          wagon_cryo_vent: { id: "wagon_cryo_vent", name: "Cryo-Vent Car", stage: "act1", unlockedByDefault: false, hint: "Locked: Defeat the Act 1 Boss (km 15) to unlock the Cryo-Vent Car." },
          tool_tripwire: { id: "tool_tripwire", name: "Tripwire Button", stage: "act1", unlockedByDefault: false, hint: "Locked: Defeat the Act 1 Boss (km 15) to unlock the Tripwire button." },
          cw_heavy: { id: "cw_heavy", name: "Heavy Counterweight", stage: "act1", unlockedByDefault: false, hint: "Locked: Defeat the Act 1 Boss (km 15) to unlock Heavy Counterweight." },
          cw_light: { id: "cw_light", name: "Light Counterweight", stage: "act1", unlockedByDefault: false, hint: "Locked: Defeat the Act 1 Boss (km 15) to unlock Light Counterweight." },
          drill_tier_2: { id: "drill_tier_2", name: "Drill Bit Tier 2", stage: "act1", unlockedByDefault: false, hint: "Locked: Defeat the Act 1 Boss (km 15) to unlock Drill Bit Tier 2." },
          wagon_shield_pylon: { id: "wagon_shield_pylon", name: "Shield Pylon", stage: "act1", unlockedByDefault: false, hint: "Locked: Defeat the Act 1 Boss (km 15) to unlock the Shield Pylon." },
          edge_twin_fang: { id: "edge_twin_fang", name: "Twin-Fang", stage: "act1", unlockedByDefault: false, hint: "Locked: Defeat the Act 1 Boss (km 15) to unlock Twin-Fang." },

          // Act 2 (km 16 to 30) unlocks
          wagon_plasma_shield: { id: "wagon_plasma_shield", name: "Plasma Shield Generator", stage: "act2", unlockedByDefault: false, hint: "Locked: Defeat the Act 2 Boss (km 30) to unlock Plasma Shield Generator." },
          tool_hook: { id: "tool_hook", name: "Hook Button", stage: "act2", unlockedByDefault: false, hint: "Locked: Defeat the Act 2 Boss (km 30) to unlock the Hook button." },
          wagon_artillery: { id: "wagon_artillery", name: "Artillery Car", stage: "act2", unlockedByDefault: false, hint: "Locked: Defeat the Act 2 Boss (km 30) to unlock the Artillery Car." },
          wagon_drone_bay: { id: "wagon_drone_bay", name: "Drone Bay", stage: "act2", unlockedByDefault: false, hint: "Locked: Defeat the Act 2 Boss (km 30) to unlock the Drone Bay." },
          edge_piercing_lance: { id: "edge_piercing_lance", name: "Piercing Lance", stage: "act2", unlockedByDefault: false, hint: "Locked: Defeat the Act 2 Boss (km 30) to unlock Piercing Lance." },
          core_volt_core: { id: "core_volt_core", name: "Volt-Core", stage: "act2", unlockedByDefault: false, hint: "Locked: Defeat the Act 2 Boss (km 30) to unlock Volt-Core." },
          coil_reinforced: { id: "coil_reinforced", name: "Reinforced Coil", stage: "act2", unlockedByDefault: false, hint: "Locked: Defeat the Act 2 Boss (km 30) to unlock Reinforced Coil." },
          drill_tier_3: { id: "drill_tier_3", name: "Drill Bit Tier 3", stage: "act2", unlockedByDefault: false, hint: "Locked: Defeat the Act 2 Boss (km 30) to unlock Drill Bit Tier 3." },

          // Act 3 (km 31 to 45) unlocks
          wagon_thermal_conduit: { id: "wagon_thermal_conduit", name: "Thermal Conduit", stage: "act3", unlockedByDefault: false, hint: "Locked: Defeat the Act 3 Boss (km 45) to unlock Thermal Conduit." },
          overdrive_chassis: { id: "overdrive_chassis", name: "Overdrive Chassis", stage: "act3", unlockedByDefault: false, hint: "Locked: Defeat the Act 3 Boss (km 45) to unlock Overdrive Chassis." },
          harvester_drones: { id: "harvester_drones", name: "Harvester Drones", stage: "act3", unlockedByDefault: false, hint: "Locked: Defeat the Act 3 Boss (km 45) to unlock Harvester Drones." },
          wagon_med_station: { id: "wagon_med_station", name: "Med-Station", stage: "act3", unlockedByDefault: false, hint: "Locked: Defeat the Act 3 Boss (km 45) to unlock the Med-Station." },
          edge_buzzsaw: { id: "edge_buzzsaw", name: "Buzzsaw", stage: "act3", unlockedByDefault: false, hint: "Locked: Defeat the Act 3 Boss (km 45) to unlock Buzzsaw." },
          core_cryo_core: { id: "core_cryo_core", name: "Cryo-Core", stage: "act3", unlockedByDefault: false, hint: "Locked: Defeat the Act 3 Boss (km 45) to unlock Cryo-Core." },
          core_magma_core: { id: "core_magma_core", name: "Magma-Core", stage: "act3", unlockedByDefault: false, hint: "Locked: Defeat the Act 3 Boss (km 45) to unlock Magma-Core." },
          coil_long_haul: { id: "coil_long_haul", name: "Long-Haul Coil", stage: "act3", unlockedByDefault: false, hint: "Locked: Defeat the Act 3 Boss (km 45) to unlock Long-Haul Coil." },
          drill_tier_4: { id: "drill_tier_4", name: "Drill Bit Tier 4", stage: "act3", unlockedByDefault: false, hint: "Locked: Defeat the Act 3 Boss (km 45) to unlock Drill Bit Tier 4." }
        },

        // Step C1 Requirement 5: 6 short story slides drawn in code
        introSlides: [
          {
            id: 1,
            title: "I. THE LITHO-SWARM DESCENDS",
            scene: "swarm_core",
            lines: [
              "From the deep mantle came the Litho-Swarm — silicon parasites devouring heat and metal.",
              "They burrowed into the planetary Solar Core andencased its living fire in dead stone."
            ]
          },
          {
            id: 2,
            title: "II. THE SURFACE FREEZES",
            scene: "frozen_surface",
            lines: [
              "Robbed of geothermal warmth, oceans locked into black ice and the sky turned to ash.",
              "Towering glaciers swallowed the old cities beneath a silent, eternal winter."
            ]
          },
          {
            id: 3,
            title: "III. THE BASTION & THE EMBER-HEART",
            scene: "bastion_forge",
            lines: [
              "Survivors forged The Bastion: an armored nuclear dredge-train built to bore 50 km down.",
              "At its core burns the Ember-Heart — the last spark capable of re-igniting the Solar Core."
            ]
          },
          {
            id: 4,
            title: "IV. SILENCE IN THE RUSTED SLUICE",
            scene: "stalled_sluice",
            lines: [
              "Vanguard-01 led the first descent into the Rusted Sluice, then all radio telemetry died.",
              "Now the Bastion stands stalled at Kilometre 0.0, its drill bit choked in subterranean ice."
            ]
          },
          {
            id: 5,
            title: "V. THE COOLING HEART",
            scene: "cooling_heart",
            lines: [
              "Without forward momentum to feed the furnace, frost creeps across the iron hull.",
              "Every second the train sits stalled, the Ember-Heart bleeds away its remaining warmth."
            ]
          },
          {
            id: 6,
            title: "VI. VANGUARD-07 AWAKES",
            scene: "vanguard_wakes",
            lines: [
              "On the Foundry deck, cryo-clamps release and Vanguard-07's visor flares cyan.",
              "Chief Engineer Mara's voice crackles over the radio: 'Wake up, Seven! The drill is frozen!'"
            ]
          }
        ],

        // Step C1 Requirement 7e: Black-box log of Vanguard-01 at km 1.5
        storyLogs: {
          vanguard_01: {
            id: "vanguard_01",
            title: "BLACK-BOX LOG: VANGUARD-01 [KM 1.5 — RUSTED SLUICE]",
            speaker: "Vanguard-01 (Recovered Audio Transcript)",
            dateTag: "EXPEDITION 01 · DEPTH 1.5 KM · SIGNAL LOST",
            lines: [
              "LOG ENTRY 01-FINAL: 'The ceiling in the Rusted Sluice is collapsing under Swarm weight.'",
              "'Falling stalactites and scrap barricades slowed our drill to a crawl before km 2.0.'",
              "'Something massive is guarding the Sluice Gate ahead. My blade overheated before I could—'",
              "'If Vanguard-07 reads this: watch the floor shadows, keep the drill moving, and vent your heat!'"
            ],
            maraLine: "Vanguard-01's black box... So the Sluice Gate ahead wasn't a cave-in. Keep sharp, Seven — we're nearing km 2.0!"
          }
        },

        // ZONES table (name, startTile, endTile, colours, spawnTableKey, biomeKey)`,
  "3. DATA_TABLES.story, unlocks, introSlides, storyLogs"
);

// 4. Add GAME.story state and Story Mode helper functions right after GAME declaration
replaceExact(
`        settingsReturnToTitle: false,
        titleBtnRects: null,
        hudWeaponSlotRect: null,`,
`        settingsReturnToTitle: false,
        titleBtnRects: null,
        hudWeaponSlotRect: null,
        story: {
          active: false,
          stageIndex: 0,
          stageId: "prologue",
          stalled: false,
          unlocks: {},
          unlockAllDebug: false,
          showUnlockTableModal: false,
          unlockTableScrollY: 0,
          unlockTableCloseRect: null,
          lockHintBannerText: "",
          lockHintBannerTimer: 0,
          introActive: false,
          introSlideIndex: 0,
          introSlideTimer: 0,
          introSkipRect: null,
          introNextRect: null,
          dialogueQueue: [],
          currentDialogue: null,
          dialogueCharIndex: 0,
          dialogueHoldTimer: 0,
          dialogueBoxRect: null,
          objectiveText: "",
          prologueStep: 1,
          drillTeeth: [],
          teethClearedCount: 0,
          swingTipShown: false,
          heatTipShown: false,
          ignitionLever: {
            active: false,
            pulled: false,
            x: 0,
            y: 0,
            w: 36,
            h: 48
          },
          stalactites: [],
          stalactiteSpawnTimer: 1.6,
          barricades: [],
          nextBarricadeKm: 0.35,
          barricadeSlowTimer: 0,
          blackBoxLog: {
            active: false,
            collected: false,
            x: 0,
            y: 0,
            w: 34,
            h: 28
          },
          logModalOpen: false,
          logModalData: null,
          logModalCloseRect: null,
          activeUseTarget: null,
          usePromptScreenRect: null,
          frostAlpha: 0
        },`,
  "4a. GAME.story state object"
);

// 5. Update isControlVisible and add Story unlock/dialogue/prologue helper functions
replaceExact(
`      // Step R4 Requirement 7: Locks — In Story mode, Return is available from the start,
      // Tripwire unlocks in Act 1, and Hook in Act 2; locked buttons are hidden.
      // In Sandbox and Free Run all three are available.
      function isControlVisible(def) {
        if (!def) return false;
        var rule = def.visibility || "always";
        if (rule === "always" || rule === "unlocked") return true;
        if (rule === "tool_return") {
          return true;
        }
        if (rule === "tool_tripwire") {
          if (GAME.playMode === "STORY") {
            return (GAME.storyAct || 0) >= 1;
          }
          return true;
        }
        if (rule === "tool_hook") {
          if (GAME.playMode === "STORY") {
            return (GAME.storyAct || 0) >= 2;
          }
          return true;
        }
        if (rule === "run_only") {
          return GAME.playMode === "RUN";
        }
        return true;
      }`,
`      // Step C1 Requirement 3: Unlock gating (UNLOCKS table)
      // In Story mode the player starts with run, jump, Ember Pistol, Engine-Blade (Cleaver, Standard Counterweight,
      // Standard Motor Core, Standard Coil), the Return button, and all three throttle notches.
      // Everything else is greyed out with a lock icon and a one-line hint, and cannot be used.
      function initStoryUnlocks() {
        var map = {};
        var tbl = DATA_TABLES.unlocks || {};
        var k;
        for (k in tbl) {
          if (Object.prototype.hasOwnProperty.call(tbl, k)) {
            map[k] = !!tbl[k].unlockedByDefault;
          }
        }
        GAME.story.unlocks = map;
        GAME.story.unlockAllDebug = false;
      }

      function isStoryModeActive() {
        return !!(GAME.story && GAME.story.active && GAME.playMode === "RUN");
      }

      function isStoryUnlocked(unlockKey) {
        if (!unlockKey) return true;
        if (!isStoryModeActive()) return true;
        if (GAME.story.unlockAllDebug) return true;
        var tbl = DATA_TABLES.unlocks || {};
        var entry = tbl[unlockKey];
        if (!entry) return true;
        if (entry.unlockedByDefault) return true;
        return !!(GAME.story.unlocks && GAME.story.unlocks[unlockKey]);
      }

      function getStoryUnlockHint(unlockKey) {
        var tbl = DATA_TABLES.unlocks || {};
        var entry = tbl[unlockKey];
        if (entry && entry.hint) return entry.hint;
        return "Locked in Story mode until later stage boss is defeated.";
      }

      function showStoryLockHint(unlockKey) {
        var hint = getStoryUnlockHint(unlockKey);
        GAME.story.lockHintBannerText = hint;
        GAME.story.lockHintBannerTimer = 2.6;
        GAME.foundryStatusMsg = hint;
        GAME.foundryStatusColor = "#FF8A1E";
        if (GAME.player) {
          spawnDmgNumber(GAME.player.x + GAME.player.w * 0.5, GAME.player.y - 22, "LOCKED", "#FF8A1E");
        }
        AUDIO.playBeep(210, 0.06, "sawtooth", 0.07);
      }

      function getPartStoryUnlockKey(slotKey, partId) {
        if (slotKey === "edge") return "edge_" + partId;
        if (slotKey === "counterweight") return "cw_" + partId;
        if (slotKey === "core") return "core_" + partId;
        if (slotKey === "coil") return "coil_" + partId;
        return null;
      }

      function getWagonStoryUnlockKey(wagonId) {
        return "wagon_" + wagonId;
      }

      function getDrillTierStoryUnlockKey(tierNum) {
        return "drill_tier_" + tierNum;
      }

      function getControlStoryUnlockKey(ctrlId) {
        if (ctrlId === "parry") return "vent_parry";
        if (ctrlId === "tripwire") return "tool_tripwire";
        if (ctrlId === "hook") return "tool_hook";
        return null;
      }

      function isControlLockedInStory(ctrlId) {
        var uk = getControlStoryUnlockKey(ctrlId);
        if (!uk) return false;
        return !isStoryUnlocked(uk);
      }

      function unlockEverythingInStoryDebug() {
        var tbl = DATA_TABLES.unlocks || {};
        var k;
        for (k in tbl) {
          if (Object.prototype.hasOwnProperty.call(tbl, k)) {
            GAME.story.unlocks[k] = true;
          }
        }
        GAME.story.unlockAllDebug = true;
        unlockAllPartsDebug();
        GAME.wagonsUnlockedAll = true;
        GAME.story.lockHintBannerText = "DEBUG: Unlocked everything in Story mode!";
        GAME.story.lockHintBannerTimer = 2.2;
        AUDIO.playWagonBuild();
        updateDebugPanelUI();
      }

      // Step C1 Requirement 4: Non-blocking top-center radio dialogue system (30 chars/s, Tap/Enter or 4s auto-advance)
      function queueStoryDialogue(speaker, text) {
        if (!text) return;
        GAME.story.dialogueQueue.push({
          speaker: speaker || "Mara",
          text: String(text)
        });
        if (!GAME.story.currentDialogue) {
          popNextStoryDialogue();
        }
      }

      function queueStoryDialogueList(list) {
        if (!Array.isArray(list)) return;
        for (var i = 0; i < list.length; i++) {
          if (list[i] && list[i].text) {
            queueStoryDialogue(list[i].speaker || "Mara", list[i].text);
          }
        }
      }

      function popNextStoryDialogue() {
        if (GAME.story.dialogueQueue.length === 0) {
          GAME.story.currentDialogue = null;
          GAME.story.dialogueCharIndex = 0;
          GAME.story.dialogueHoldTimer = 0;
          return;
        }
        GAME.story.currentDialogue = GAME.story.dialogueQueue.shift();
        GAME.story.dialogueCharIndex = 0;
        GAME.story.dialogueHoldTimer = 0;
        AUDIO.playBeep(580, 0.03, "triangle", 0.04);
      }

      function advanceStoryDialogue() {
        var cur = GAME.story.currentDialogue;
        if (!cur) return false;
        var fullLen = cur.text.length;
        if (GAME.story.dialogueCharIndex < fullLen) {
          GAME.story.dialogueCharIndex = fullLen;
          GAME.story.dialogueHoldTimer = 0;
          AUDIO.playBeep(520, 0.02, "triangle", 0.04);
          return true;
        }
        popNextStoryDialogue();
        return true;
      }

      function skipAllStoryDialogue() {
        GAME.story.dialogueQueue = [];
        GAME.story.currentDialogue = null;
        GAME.story.dialogueCharIndex = 0;
        GAME.story.dialogueHoldTimer = 0;
      }

      function updateStoryDialogue(dt) {
        if (GAME.story.lockHintBannerTimer > 0) {
          GAME.story.lockHintBannerTimer = Math.max(0, GAME.story.lockHintBannerTimer - dt);
        }
        var cur = GAME.story.currentDialogue;
        if (!cur) {
          if (GAME.story.dialogueQueue.length > 0) {
            popNextStoryDialogue();
          }
          return;
        }
        var fullLen = cur.text.length;
        if (GAME.story.dialogueCharIndex < fullLen) {
          GAME.story.dialogueCharIndex = Math.min(fullLen, GAME.story.dialogueCharIndex + 30 * dt);
        } else {
          GAME.story.dialogueHoldTimer += dt;
          if (GAME.story.dialogueHoldTimer >= 4.0) {
            popNextStoryDialogue();
          }
        }
      }

      function isControlVisible(def) {
        if (!def) return false;
        var rule = def.visibility || "always";
        if (rule === "always" || rule === "unlocked") return true;
        if (rule === "tool_return" || rule === "tool_tripwire" || rule === "tool_hook") {
          return true;
        }
        if (rule === "run_only") {
          return GAME.playMode === "RUN";
        }
        return true;
      }`,
  "5. Story unlock & dialogue helpers + isControlVisible"
);

// 6. Gate triggerDirectHook, triggerDirectTripwire, cycleEquippedBladeEdge
replaceExact(
`      function triggerDirectHook() {
        if (GAME.mode !== "PLAYING" || GAME.ledgerOpen) return false;
        if (GAME.playMode === "STORY" && (GAME.storyAct || 0) < 2) return false;
        GAME.player.heldItemType = "hook";
        GAME.player.heldItemTimer = 0.30;
        return fireHarpoonBolt(GAME.player);
      }

      function triggerDirectReturn() {
        if (GAME.mode !== "PLAYING" || GAME.ledgerOpen) return false;
        return startTetherRecall(GAME.player);
      }

      function triggerDirectTripwire() {
        if (GAME.mode !== "PLAYING" || GAME.ledgerOpen) return false;
        if (GAME.playMode === "STORY" && (GAME.storyAct || 0) < 1) return false;
        var pl = GAME.player;`,
`      function triggerDirectHook() {
        if (GAME.mode !== "PLAYING" || GAME.ledgerOpen) return false;
        if (!isStoryUnlocked("tool_hook")) {
          showStoryLockHint("tool_hook");
          return false;
        }
        GAME.player.heldItemType = "hook";
        GAME.player.heldItemTimer = 0.30;
        return fireHarpoonBolt(GAME.player);
      }

      function triggerDirectReturn() {
        if (GAME.mode !== "PLAYING" || GAME.ledgerOpen) return false;
        return startTetherRecall(GAME.player);
      }

      function triggerDirectTripwire() {
        if (GAME.mode !== "PLAYING" || GAME.ledgerOpen) return false;
        if (!isStoryUnlocked("tool_tripwire")) {
          showStoryLockHint("tool_tripwire");
          return false;
        }
        var pl = GAME.player;`,
  "6. Gate Hook and Tripwire in Story mode"
);

// 7. Gate buyOrEquipPart, upgradePartTier, upgradeDrillBitTier, buildWagonInSlot
replaceExact(
`      function buyOrEquipPart(slotKey, partId) {
        var pDef = getPartDef(slotKey, partId);
        if (!pDef) return false;`,
`      function buyOrEquipPart(slotKey, partId) {
        var pDef = getPartDef(slotKey, partId);
        if (!pDef) return false;
        var storyKey = getPartStoryUnlockKey(slotKey, partId);
        if (storyKey && !isStoryUnlocked(storyKey)) {
          showStoryLockHint(storyKey);
          return false;
        }`,
  "7a. Gate buyOrEquipPart in Story mode"
);

replaceExact(
`      function upgradePartTier(slotKey, partId) {
        var pDef = getPartDef(slotKey, partId);
        if (!pDef) return false;`,
`      function upgradePartTier(slotKey, partId) {
        var pDef = getPartDef(slotKey, partId);
        if (!pDef) return false;
        var storyKey = getPartStoryUnlockKey(slotKey, partId);
        if (storyKey && !isStoryUnlocked(storyKey)) {
          showStoryLockHint(storyKey);
          return false;
        }`,
  "7b. Gate upgradePartTier in Story mode"
);

replaceExact(
`      function upgradeDrillBitTier() {
        var curTier = GAME.drillBitTier || 1;
        if (curTier >= 4) {
          GAME.foundryStatusMsg = "Train Drill Bit is already at Max Tier 4 (Mythril-Alloy x1.7).";
          return false;
        }`,
`      function upgradeDrillBitTier() {
        var curTier = GAME.drillBitTier || 1;
        if (curTier >= 4) {
          GAME.foundryStatusMsg = "Train Drill Bit is already at Max Tier 4 (Mythril-Alloy x1.7).";
          return false;
        }
        var nextTierKey = getDrillTierStoryUnlockKey(curTier + 1);
        if (nextTierKey && !isStoryUnlocked(nextTierKey)) {
          showStoryLockHint(nextTierKey);
          return false;
        }`,
  "7c. Gate upgradeDrillBitTier in Story mode"
);

replaceExact(
`      function buildWagonInSlot(slotIdx, wagonId) {
        var b = GAME.bastion;
        if (slotIdx < 0 || slotIdx >= CFG.wagonSlotCount) return false;
        var wDef = getWagonDef(wagonId);
        if (!wDef || !wDef.availableInB8) {
          GAME.foundryStatusMsg = "Wagon design unavailable.";
          return false;
        }`,
`      function buildWagonInSlot(slotIdx, wagonId) {
        var b = GAME.bastion;
        if (slotIdx < 0 || slotIdx >= CFG.wagonSlotCount) return false;
        var wDef = getWagonDef(wagonId);
        if (!wDef || !wDef.availableInB8) {
          GAME.foundryStatusMsg = "Wagon design unavailable.";
          return false;
        }
        var wStoryKey = getWagonStoryUnlockKey(wagonId);
        if (wStoryKey && !isStoryUnlocked(wStoryKey)) {
          showStoryLockHint(wStoryKey);
          return false;
        }`,
  "7d. Gate buildWagonInSlot in Story mode"
);

// 8. Gate Vent Parry in Story mode (unlocked during boss fight in C2)
replaceExact(
`        if (
          pl.overheatTimer <= 0 &&
          pl.parryWindowTimer <= 0 &&
          pl.parryLockoutTimer <= 0 &&
          INPUT.justPressedParry
        ) {
          pl.parryWindowTimer = CFG.parryWindow;
          AUDIO.playParryStart();
          updateDebugPanelUI();
        }`,
`        if (
          pl.overheatTimer <= 0 &&
          pl.parryWindowTimer <= 0 &&
          pl.parryLockoutTimer <= 0 &&
          INPUT.justPressedParry
        ) {
          if (!isStoryUnlocked("vent_parry")) {
            showStoryLockHint("vent_parry");
          } else {
            pl.parryWindowTimer = CFG.parryWindow;
            AUDIO.playParryStart();
            updateDebugPanelUI();
          }
        }`,
  "8. Gate Vent Parry in Story mode"
);

// 9. Add Prologue entities, frozen drill teeth, ignition lever, stalactites, barricades, black-box log, and Use action
replaceExact(
`      function checkBladeHitsTargets(pl) {`,
`      // Step C1 Requirement 5, 6 & 7: Story Intro, Use Interaction, and Prologue World (km 0 to 2)
      function setupStoryPrologueWorld(atKm) {
        var b = GAME.bastion;
        var rs = GAME.runState;
        var st = GAME.story;
        var startKm = typeof atKm === "number" ? Math.max(0, atKm) : 0;

        st.stageIndex = 0;
        st.stageId = "prologue";
        st.dialogueQueue = [];
        st.currentDialogue = null;
        st.dialogueCharIndex = 0;
        st.dialogueHoldTimer = 0;
        st.logModalOpen = false;
        st.logModalData = null;
        st.barricadeSlowTimer = 0;
        st.stalactites = [];
        st.stalactiteSpawnTimer = 1.5;
        st.barricades = [];

        if (startKm <= 0.02) {
          // Train starts STALLED at km 0 with frost on the screen edges and 3 frozen drill teeth
          st.stalled = true;
          b.moving = false;
          st.frostAlpha = 1.0;
          st.prologueStep = 1;
          st.teethClearedCount = 0;
          st.swingTipShown = false;
          st.heatTipShown = false;
          st.drillTeeth = [
            { id: 0, label: "Upper Drill Tooth", relX: 54, relY: 18, w: 30, h: 28, hp: 40, maxHp: 40, flashTimer: 0, lastBladeSwingId: -1 },
            { id: 1, label: "Center Drill Tooth", relX: 82, relY: 46, w: 32, h: 30, hp: 40, maxHp: 40, flashTimer: 0, lastBladeSwingId: -1 },
            { id: 2, label: "Lower Drill Tooth", relX: 56, relY: 76, w: 30, h: 28, hp: 40, maxHp: 40, flashTimer: 0, lastBladeSwingId: -1 }
          ];
          st.ignitionLever = {
            active: false,
            pulled: false,
            x: b.engineFrontX - 96,
            y: b.floorY - 68,
            w: 36,
            h: 48
          };
          st.objectiveText = "OBJECTIVE: Clear 3 frozen drill teeth at the drill head with your Blade (0/3)";
          queueStoryDialogueList(DATA_TABLES.story[0].dialogueLines);
        } else {
          // Jumping directly to km 1 or km 1.9 starts with drill cleared & train moving
          st.stalled = false;
          b.moving = true;
          st.frostAlpha = 0;
          st.prologueStep = 3;
          st.teethClearedCount = 3;
          st.drillTeeth = [];
          st.ignitionLever = {
            active: false,
            pulled: true,
            x: b.engineFrontX - 96,
            y: b.floorY - 68,
            w: 36,
            h: 48
          };
          st.objectiveText = "OBJECTIVE: Travel km 0 to 2.0 through the Rusted Sluice (" + fmt(startKm, 1) + " / 2.0 km)";
          queueStoryDialogue("Mara", "Bastion underway at km " + fmt(startKm, 1) + "! Watch for falling stalactites and scrap barricades on the rails!");
        }

        // Pre-place brittle scrap barricades along km 0.35 to 1.85
        var barKms = [0.35, 0.68, 1.05, 1.35, 1.72];
        for (var bi = 0; bi < barKms.length; bi++) {
          if (barKms[bi] > startKm + 0.08) {
            var bx = rs.startRearX + Math.round(barKms[bi] * CFG.kmLengthPx) + 520;
            st.barricades.push({
              id: bi + 1,
              x: bx,
              y: b.floorY - 88,
              w: 44,
              h: 88,
              hp: 50,
              maxHp: 50,
              active: true,
              flashTimer: 0,
              lastBladeSwingId: -1
            });
          }
        }

        // Place black-box log of Vanguard-01 at km 1.5
        var logWorldX = rs.startRearX + Math.round(1.5 * CFG.kmLengthPx) + 340;
        st.blackBoxLog = {
          active: true,
          collected: startKm > 1.55,
          x: logWorldX,
          y: b.floorY - 28,
          w: 36,
          h: 28
        };
      }

      function computeStoryUseTarget() {
        var pl = GAME.player;
        if (!pl || GAME.mode !== "PLAYING" || GAME.ledgerOpen) return null;
        var px = pl.x + pl.w * 0.5;
        var py = pl.y + pl.h * 0.5;

        if (isStoryModeActive()) {
          var st = GAME.story;
          if (st.introActive || st.logModalOpen || st.showUnlockTableModal) return null;

          // 1. Ignition lever in the Engine Room (Objective 2)
          var lev = st.ignitionLever;
          if (lev && lev.active && !lev.pulled) {
            var lcx = lev.x + lev.w * 0.5;
            var lcy = lev.y + lev.h * 0.5;
            if (Math.abs(px - lcx) <= 95 && Math.abs(py - lcy) <= 95) {
              return {
                type: "ignition_lever",
                label: "USE: PULL IGNITION LEVER",
                x: lcx,
                y: lev.y - 14
              };
            }
          }

          // 2. Black-box log of Vanguard-01 at km 1.5
          var logObj = st.blackBoxLog;
          if (logObj && logObj.active && !logObj.collected) {
            var bx = logObj.x + logObj.w * 0.5;
            var by = logObj.y + logObj.h * 0.5;
            if (Math.abs(px - bx) <= 110 && Math.abs(py - by) <= 95) {
              return {
                type: "vanguard_log",
                label: "USE: VANGUARD-01 BLACK BOX",
                x: bx,
                y: logObj.y - 14
              };
            }
          }
        }

        // 3. Chief Engineer Mara workbench (opens Foundry)
        if (GAME.maraInRange && GAME.maraWorldPos) {
          return {
            type: "mara_foundry",
            label: "USE: OPEN FOUNDRY",
            x: GAME.maraWorldPos.x,
            y: GAME.maraWorldPos.y - 36
          };
        }

        return null;
      }

      function triggerPlayerUseAction() {
        if (GAME.story && GAME.story.introActive) {
          advanceStoryIntroSlide();
          return true;
        }
        if (GAME.story && GAME.story.logModalOpen) {
          GAME.story.logModalOpen = false;
          AUDIO.playBeep(480, 0.05, "triangle", 0.06);
          return true;
        }
        if (GAME.story && GAME.story.showUnlockTableModal) {
          GAME.story.showUnlockTableModal = false;
          AUDIO.playBeep(480, 0.05, "triangle", 0.06);
          return true;
        }

        var target = computeStoryUseTarget();
        if (target) {
          if (target.type === "ignition_lever") {
            var st = GAME.story;
            var b = GAME.bastion;
            st.ignitionLever.pulled = true;
            st.ignitionLever.active = false;
            st.stalled = false;
            st.prologueStep = 3;
            b.moving = true;
            b.throttleEaseTimer = CFG.throttleEaseTime;
            b.easeStartSpeed = 12;
            shake(8, 0.45);
            spawnSparkBurst(st.ignitionLever.x + 18, st.ignitionLever.y + 16, 22, "#FFC53A");
            spawnSparkBurst(b.drillTipX - 20, b.floorY - 56, 24, "#FF8A1E");
            spawnDmgNumber(st.ignitionLever.x + 18, st.ignitionLever.y - 18, "BASTION IGNITED!", "#2FE6A0");
            AUDIO.playWagonBuild();
            skipAllStoryDialogue();
            queueStoryDialogue("System", "EMBER-HEART IGNITION CONFIRMED. MAIN DRILL TURBINE ONLINE.");
            queueStoryDialogue("Mara", "She's roaring! Keep us moving to km 2.0 — watch for falling stalactites (floor shadows) and scrap barricades!");
            st.objectiveText = "OBJECTIVE: Travel km 0 to 2.0 through the Rusted Sluice (find Vanguard-01's log at km 1.5)";
            // Spawn initial Mite & Shell Brute ahead once moving
            spawnEnemy(Math.round(b.drillTipX + 520), b.floorY - CFG.miteHeight, "ash_mite", -1, false);
            spawnEnemy(Math.round(b.drillTipX + 780), b.floorY - CFG.bruteHeight, "rust_brute", -1, false);
            recountActiveEnemies();
            updateDebugPanelUI();
            return true;
          }
          if (target.type === "vanguard_log") {
            var logSt = GAME.story;
            logSt.blackBoxLog.collected = true;
            logSt.logModalOpen = true;
            logSt.logModalData = DATA_TABLES.storyLogs.vanguard_01;
            spawnSparkBurst(logSt.blackBoxLog.x + 18, logSt.blackBoxLog.y + 10, 18, "#35E0F0");
            spawnDmgNumber(logSt.blackBoxLog.x + 18, logSt.blackBoxLog.y - 18, "LOG RECOVERED", "#35E0F0");
            AUDIO.playCheckpoint();
            if (logSt.logModalData && logSt.logModalData.maraLine) {
              queueStoryDialogue("Mara", logSt.logModalData.maraLine);
            }
            updateDebugPanelUI();
            return true;
          }
          if (target.type === "mara_foundry") {
            toggleLedger(true);
            return true;
          }
        }

        // If no interactable object is in range, Enter advances active radio dialogue if present, otherwise opens Foundry if near Mara
        if (isStoryModeActive() && GAME.story.currentDialogue) {
          return advanceStoryDialogue();
        }
        if (GAME.maraInRange) {
          toggleLedger(true);
          return true;
        }
        return false;
      }

      function advanceStoryIntroSlide() {
        var st = GAME.story;
        if (!st || !st.introActive) return;
        var slides = DATA_TABLES.introSlides || [];
        st.introSlideIndex++;
        st.introSlideTimer = 0;
        AUDIO.playBeep(520, 0.04, "triangle", 0.05);
        if (st.introSlideIndex >= slides.length) {
          finishStoryIntro();
        }
      }

      function finishStoryIntro() {
        var st = GAME.story;
        if (!st) return;
        st.introActive = false;
        st.introSlideIndex = 0;
        st.introSlideTimer = 0;
        AUDIO.playCheckpoint();
      }

      function jumpToStoryKmDebug(targetKm) {
        if (!isStoryModeActive()) {
          startStoryMode(true);
        }
        finishStoryIntro();
        var b = GAME.bastion;
        var rs = GAME.runState;
        var kmVal = Math.max(0, Number(targetKm) || 0);
        if (kmVal <= 0.02) {
          b.rearX = rs.startRearX;
          syncBastionGeometry(true);
          setupStoryPrologueWorld(0);
          var spX0 = getSafeFoundryRoofSpawnX();
          var spY0 = b.roofY - CFG.playerHeight;
          resetPlayerToCoords(spX0, spY0);
          GAME.player.onGround = true;
          GAME.player.onTrainRoof = true;
        } else {
          b.rearX = rs.startRearX + kmVal * CFG.kmLengthPx;
          rs.distancePx = b.rearX - rs.startRearX;
          rs.distanceKm = kmVal;
          syncBastionGeometry(true);
          WORLD.updateRunSegments();
          setupStoryPrologueWorld(kmVal);
          var spX = getSafeFoundryRoofSpawnX();
          var spY = b.roofY - CFG.playerHeight;
          resetPlayerToCoords(spX, spY);
          GAME.player.onGround = true;
          GAME.player.onTrainRoof = true;
        }
        snapCameraToPlayer();
        updateDebugPanelUI();
      }

      function updateStoryPrologue(dt) {
        if (!isStoryModeActive()) return;
        var st = GAME.story;
        var b = GAME.bastion;
        var rs = GAME.runState;
        var pl = GAME.player;

        updateStoryDialogue(dt);

        // Update frost overlay alpha: strong while stalled, fades out once Bastion ignites
        if (st.stalled) {
          st.frostAlpha = Math.min(1, st.frostAlpha + dt * 0.8);
        } else {
          st.frostAlpha = Math.max(0, st.frostAlpha - dt * 0.45);
        }

        // Update ignition lever position on the Engine Car
        var engCar = b.cars && b.cars.length > 0 ? b.cars[b.cars.length - 1] : null;
        if (st.ignitionLever) {
          st.ignitionLever.x = (engCar ? engCar.x + 74 : b.engineFrontX - 96);
          st.ignitionLever.y = b.roofY - 46;
        }

        // Update frozen drill teeth world rects & flash timers
        if (st.drillTeeth && st.drillTeeth.length > 0) {
          for (var ti = 0; ti < st.drillTeeth.length; ti++) {
            var tooth = st.drillTeeth[ti];
            tooth.wx = b.engineFrontX + tooth.relX;
            tooth.wy = b.roofY + tooth.relY;
            if (tooth.flashTimer > 0) {
              tooth.flashTimer = Math.max(0, tooth.flashTimer - dt);
            }
          }
        }

        // Teach heat management when player's heat reaches >= 24% in Prologue Step 1
        if (st.prologueStep === 1 && !st.heatTipShown && pl.heat >= 24) {
          st.heatTipShown = true;
          queueStoryDialogue("Mara", "Watch your Thermal Gauge! Each swing builds Heat — hit 75-95% for Redline bonus damage, but 100% Overheats you for 2s!");
        }

        // Update stage transitions by distanceKm
        var km = rs.distanceKm;
        var stages = DATA_TABLES.story || [];
        for (var si = 0; si < stages.length; si++) {
          var sDef = stages[si];
          if (km >= sDef.startKm && km <= sDef.endKm && st.stageIndex < si) {
            st.stageIndex = si;
            st.stageId = sDef.id;
            queueStoryDialogueList(sDef.dialogueLines);
          }
        }

        // In Prologue (km 0 to 2) once moving: update objective text, falling stalactites, and scrap barricades
        if (st.prologueStep === 3) {
          if (km < 2.0) {
            var logHint = (st.blackBoxLog && !st.blackBoxLog.collected && km >= 1.25 && km <= 1.75)
              ? " — [Vanguard-01 Black Box nearby at km 1.5!]"
              : "";
            st.objectiveText = "OBJECTIVE: Reach km 2.0 through the Rusted Sluice (" + fmt(km, 2) + " / 2.00 km)" + logHint;
          } else {
            st.prologueStep = 4;
            st.objectiveText = "PROLOGUE COMPLETE (KM 2.0 REACHED) — Free Run patrol rules active ahead";
            queueStoryDialogue("Mara", "We made it to km 2.0 of the Rusted Sluice! The Sluice Gate Boss arrives in Step C2 — continuing on Free Run patrol!");
          }
        }

        // Falling stalactites in the Rusted Sluice (km 0 to 2 while train is moving)
        if (!st.stalled && km < 2.05) {
          st.stalactiteSpawnTimer -= dt;
          if (st.stalactiteSpawnTimer <= 0) {
            st.stalactiteSpawnTimer = 2.1 + Math.random() * 1.4;
            var anchorX = Math.random() < 0.55
              ? (pl.x + pl.w * 0.5 + (Math.random() * 260 - 60))
              : (b.engineFrontX - 180 + Math.random() * 380);
            st.stalactites.push({
              x: Math.round(anchorX),
              y: b.roofY - 190,
              floorY: b.floorY,
              w: 22,
              h: 46,
              warnTimer: 0.80,
              maxWarn: 0.80,
              vy: 0,
              state: "WARN",
              active: true
            });
          }
        }

        // Step active falling stalactites (0.8s floor shadow telegraph -> falls -> 20 dmg to player, 30 to hull)
        for (var sti = st.stalactites.length - 1; sti >= 0; sti--) {
          var stl = st.stalactites[sti];
          if (!stl.active) {
            st.stalactites.splice(sti, 1);
            continue;
          }
          if (stl.state === "WARN") {
            stl.warnTimer -= dt;
            if (stl.warnTimer <= 0) {
              stl.state = "FALLING";
              stl.vy = 420;
            }
          } else if (stl.state === "FALLING") {
            stl.vy = Math.min(820, stl.vy + 1400 * dt);
            stl.y += stl.vy * dt;

            // Check player hit (20 damage)
            if (
              pl.invulnTimer <= 0 &&
              pl.x + pl.w > stl.x - stl.w * 0.5 &&
              pl.x < stl.x + stl.w * 0.5 &&
              pl.y + pl.h > stl.y &&
              pl.y < stl.y + stl.h
            ) {
              applyDamageToPlayer(pl, 20, stl.x, stl.y);
              pl.invulnTimer = CFG.playerInvulnTime;
              spawnSparkBurst(stl.x, stl.y + stl.h * 0.5, 12, "#FF8A1E");
              shake(4, 0.16);
              if (pl.hp <= 0) {
                handlePlayerDeath(pl);
              } else {
                AUDIO.playPlayerHurt();
              }
              stl.active = false;
              continue;
            }

            // Check Bastion train hull hit (30 damage if falling onto any train car)
            if (
              stl.x >= b.rearX &&
              stl.x <= b.engineFrontX &&
              stl.y + stl.h >= b.roofY
            ) {
              applyBastionHullDamage(30, false);
              spawnSparkBurst(stl.x, b.roofY, 14, "#FF6A1A");
              spawnDmgNumber(stl.x, b.roofY - 14, "-30 HULL", "#FF6A1A");
              shake(5, 0.20);
              AUDIO.playHitEnemy();
              stl.active = false;
              continue;
            }

            // Hit floor
            if (stl.y + stl.h >= b.floorY) {
              spawnSparkBurst(stl.x, b.floorY - 4, 10, "#8C95A3");
              stl.active = false;
              continue;
            }
          }
        }

        // Update brittle scrap barricades across the track (drill smashes: 15 hull damage, train speed x0.5 for 1s, debris and shake)
        for (var bri = 0; bri < st.barricades.length; bri++) {
          var bar = st.barricades[bri];
          if (!bar.active) continue;
          if (bar.flashTimer > 0) {
            bar.flashTimer = Math.max(0, bar.flashTimer - dt);
          }
          if (b.moving && b.drillTipX >= bar.x && b.engineFrontX - 40 <= bar.x + bar.w) {
            bar.active = false;
            st.barricadeSlowTimer = 1.0;
            applyBastionHullDamage(15, false);
            spawnSparkBurst(bar.x + bar.w * 0.5, bar.y + bar.h * 0.5, 24, "#FF8A1E");
            spawnDmgNumber(bar.x + bar.w * 0.5, bar.y - 14, "BARRICADE SMASH -15 HULL (SPEED x0.5)", "#FF8A1E");
            shake(6, 0.28);
            AUDIO.playHitEnemy();
          }
        }

        // Keep activeUseTarget updated for HUD / floating prompt
        st.activeUseTarget = computeStoryUseTarget();
      }

      function checkBladeHitsTargets(pl) {`,
  "9a. Prologue world setup, Use target, stalactites & barricades"
);

// 9b. Allow blade swings in checkBladeHitsTargets to hit frozen drill teeth and brittle scrap barricades
replaceExact(
`        if (hitAny) {
          var baseHitStop = pl.buzzsawActive ? 0.012 : CFG.bladeHitStopTime;`,
`        // Step C1 Requirement 7b & 7d: Blade hits frozen drill teeth (40 HP each) and brittle scrap barricades in Story mode
        if (isStoryModeActive() && GAME.story) {
          var stBlade = GAME.story;
          if (stBlade.drillTeeth && stBlade.drillTeeth.length > 0) {
            for (i = 0; i < stBlade.drillTeeth.length; i++) {
              var dtTooth = stBlade.drillTeeth[i];
              if (dtTooth.hp <= 0 || dtTooth.lastBladeSwingId === pl.bladeSwingId) continue;
              var tx = b.engineFrontX ? (b.engineFrontX + dtTooth.relX) : dtTooth.wx;
              var ty = b.roofY ? (b.roofY + dtTooth.relY) : dtTooth.wy;
              if (
                isBoxInBladeArc(
                  tx,
                  ty,
                  dtTooth.w,
                  dtTooth.h,
                  shoulderX,
                  shoulderY,
                  pl.bladeAngle,
                  CFG.bladeReach + 12,
                  halfArcRad
                )
              ) {
                dtTooth.lastBladeSwingId = pl.bladeSwingId;
                dtTooth.hp = Math.max(0, dtTooth.hp - dmg);
                dtTooth.flashTimer = 0.10;
                hitAny = true;
                spawnSparkBurst(tx + dtTooth.w * 0.5, ty + dtTooth.h * 0.5, 14, "#35E0F0");
                spawnDmgNumber(tx + dtTooth.w * 0.5, ty - 10, "-" + dmg + " ICE", "#35E0F0");
                AUDIO.playBladeHit(isRedline);
                if (!stBlade.swingTipShown) {
                  stBlade.swingTipShown = true;
                  queueStoryDialogue("Mara", "Good strike! Keep swinging [J / BLADE] to shatter the ice — each tooth has 40 HP!");
                }
                if (dtTooth.hp <= 0) {
                  stBlade.teethClearedCount = (stBlade.teethClearedCount || 0) + 1;
                  spawnSparkBurst(tx + dtTooth.w * 0.5, ty + dtTooth.h * 0.5, 22, "#8AF7FF");
                  spawnDmgNumber(tx + dtTooth.w * 0.5, ty - 24, "DRILL TOOTH CLEARED (" + stBlade.teethClearedCount + "/3)", "#2FE6A0");
                  shake(4, 0.15);
                  AUDIO.playShatterStrike();
                  if (stBlade.teethClearedCount < 3) {
                    stBlade.objectiveText = "OBJECTIVE: Clear 3 frozen drill teeth at the drill head with your Blade (" + stBlade.teethClearedCount + "/3)";
                  } else {
                    stBlade.prologueStep = 2;
                    stBlade.ignitionLever.active = true;
                    stBlade.ignitionLever.pulled = false;
                    stBlade.objectiveText = "OBJECTIVE: Use the Ignition Lever on the Engine Car roof [Enter / USE]";
                    queueStoryDialogue("Mara", "All 3 drill teeth cleared! Climb onto the Engine Car roof and pull the Ignition Lever [Enter / USE]!");
                  }
                }
              }
            }
          }
          if (stBlade.barricades && stBlade.barricades.length > 0) {
            for (i = 0; i < stBlade.barricades.length; i++) {
              var brObj = stBlade.barricades[i];
              if (!brObj.active || brObj.lastBladeSwingId === pl.bladeSwingId) continue;
              if (
                isBoxInBladeArc(
                  brObj.x,
                  brObj.y,
                  brObj.w,
                  brObj.h,
                  shoulderX,
                  shoulderY,
                  pl.bladeAngle,
                  CFG.bladeReach + 10,
                  halfArcRad
                )
              ) {
                brObj.lastBladeSwingId = pl.bladeSwingId;
                brObj.hp = Math.max(0, brObj.hp - dmg);
                brObj.flashTimer = 0.10;
                hitAny = true;
                spawnSparkBurst(brObj.x + brObj.w * 0.5, brObj.y + brObj.h * 0.5, 12, "#FFC53A");
                spawnDmgNumber(brObj.x + brObj.w * 0.5, brObj.y - 10, "-" + dmg, "#FFC53A");
                AUDIO.playBladeHit(isRedline);
                if (brObj.hp <= 0) {
                  brObj.active = false;
                  spawnSparkBurst(brObj.x + brObj.w * 0.5, brObj.y + brObj.h * 0.5, 20, "#FF8A1E");
                  spawnDmgNumber(brObj.x + brObj.w * 0.5, brObj.y - 22, "BARRICADE CLEARED!", "#2FE6A0");
                  shake(3, 0.12);
                }
              }
            }
          }
        }

        if (hitAny) {
          var baseHitStop = pl.buzzsawActive ? 0.012 : CFG.bladeHitStopTime;`,
  "9b. Blade hits frozen drill teeth and scrap barricades"
);

// Note: in checkBladeHitsTargets, let's make sure `var b = GAME.bastion;` is defined or use `GAME.bastion.engineFrontX`.
replaceExact(
`              var tx = b.engineFrontX ? (b.engineFrontX + dtTooth.relX) : dtTooth.wx;
              var ty = b.roofY ? (b.roofY + dtTooth.relY) : dtTooth.wy;`,
`              var tx = GAME.bastion.engineFrontX ? (GAME.bastion.engineFrontX + dtTooth.relX) : dtTooth.wx;
              var ty = GAME.bastion.roofY ? (GAME.bastion.roofY + dtTooth.relY) : dtTooth.wy;`,
  "9c. Use GAME.bastion in checkBladeHitsTargets"
);

// 10. Update updateBastionAndRun for Story mode:
// - 1/s Ember-Heart drain while stalled in Prologue
// - x0.5 train speed for 1s when smashing a barricade
// - Prologue Mite & Shell Brute spawns (only while moving)
// - Drill contact only when b.moving is true
replaceExact(
`        // Train movement, hull wear per second (0 / 0.5 / 2), & Ember-Heart drain/refill (Requirement 2 & 6)
        var actualSpeed = b.moving ? b.speed : 0;
        var trainDx = actualSpeed * dt;
        if (b.moving && actualSpeed > 0) {
          b.rearX += trainDx;
          b.wheelAngle += (trainDx / 18);
          b.drillPhase += dt * 12 * num(tCfg.speedMult, 1.0);
          b.emberHeart = Math.min(num(b.maxEmberHeart, 100), num(b.emberHeart, 100) + num(CFG.emberHeartRefillRate, 10) * dt);
          sanitizeBastionAndResources();

          // Step B7 Requirement 2: Hull wear per second (0 at Crawl, 0.5 at Cruise, 2 at Ramming Speed)
          if (num(tCfg.hullWearDps, 0) > 0 && GAME.mode === "PLAYING") {
            applyBastionHullDamage(num(tCfg.hullWearDps, 0) * dt, true);
            if (GAME.mode === "DEFEAT") return;
          }
        } else {
          b.drillPhase += dt * 4;
          // Requirement 6: The Ember-Heart still drains only when the train is stopped
          b.emberHeart = Math.max(0, num(b.emberHeart, 100) - num(CFG.emberHeartDrainRate, 5) * dt);`,
`        // Step C1 Requirement 7d: Barricade smash slows train speed by x0.5 for 1 s
        if (isStoryModeActive() && GAME.story.barricadeSlowTimer > 0) {
          GAME.story.barricadeSlowTimer = Math.max(0, GAME.story.barricadeSlowTimer - dt);
        }
        var storySpeedMult = (isStoryModeActive() && GAME.story.barricadeSlowTimer > 0) ? 0.5 : 1.0;

        // Train movement, hull wear per second (0 / 0.5 / 2), & Ember-Heart drain/refill (Requirement 2 & 6)
        var actualSpeed = b.moving ? (b.speed * storySpeedMult) : 0;
        var trainDx = actualSpeed * dt;
        if (b.moving && actualSpeed > 0) {
          b.rearX += trainDx;
          b.wheelAngle += (trainDx / 18);
          b.drillPhase += dt * 12 * num(tCfg.speedMult, 1.0) * storySpeedMult;
          b.emberHeart = Math.min(num(b.maxEmberHeart, 100), num(b.emberHeart, 100) + num(CFG.emberHeartRefillRate, 10) * dt);
          sanitizeBastionAndResources();

          // Step B7 Requirement 2: Hull wear per second (0 at Crawl, 0.5 at Cruise, 2 at Ramming Speed)
          if (num(tCfg.hullWearDps, 0) > 0 && GAME.mode === "PLAYING") {
            applyBastionHullDamage(num(tCfg.hullWearDps, 0) * dt, true);
            if (GAME.mode === "DEFEAT") return;
          }
        } else {
          // When stalled in Story Prologue, the drill is frozen still until ignited
          if (!(isStoryModeActive() && GAME.story.stalled)) {
            b.drillPhase += dt * 4;
          }
          // Step C1 Requirement 7a: While stalled in the Prologue, Ember-Heart drains only 1 per second
          var drainRate = (isStoryModeActive() && rs.distanceKm < 2.0)
            ? 1.0
            : num(CFG.emberHeartDrainRate, 5);
          b.emberHeart = Math.max(0, num(b.emberHeart, 100) - drainRate * dt);`,
  "10a. Prologue 1/s Ember-Heart drain & x0.5 barricade slow"
);

replaceExact(
`        // Step B7 Requirement 2 & 3 + Step B12 Requirement 6 + Step B14 Requirement 3:
        // Zone-based SPAWN_TABLES in Run mode with throttle spawn density & Elite chance
        rs.miteSpawnTimer -= dt;
        if (rs.miteSpawnTimer <= 0) {
          var baseInterval = CFG.runMiteSpawnInterval / tCfg.spawnDensityMult;
          rs.miteSpawnTimer = baseInterval * (0.9 + Math.random() * 0.2);
          rs.spawnCounter++;
          var zoneKeyRun = getRunZoneKeyForDistance();
          var spVariant = pickWeightedVariantForZone(zoneKeyRun);
          var spResolved = resolveEnemyTypeAndVariant(spVariant);`,
`        // Step C1 Requirement 7: Update Story Prologue entities, dialogue, stalactites, barricades, and Use prompts
        if (isStoryModeActive()) {
          updateStoryPrologue(dt);
        }

        // Step B7 Requirement 2 & 3 + Step B12 Requirement 6 + Step B14 Requirement 3 + Step C1 Requirement 7d:
        // Zone-based SPAWN_TABLES in Run mode (in Story Prologue km 0-2: Mites and Shell Brutes once moving)
        if (!(isStoryModeActive() && GAME.story.stalled)) {
          rs.miteSpawnTimer -= dt;
        }
        if (rs.miteSpawnTimer <= 0 && !(isStoryModeActive() && GAME.story.stalled)) {
          var baseInterval = CFG.runMiteSpawnInterval / tCfg.spawnDensityMult;
          rs.miteSpawnTimer = baseInterval * (0.9 + Math.random() * 0.2);
          rs.spawnCounter++;
          var zoneKeyRun = getRunZoneKeyForDistance();
          var spVariant = pickWeightedVariantForZone(zoneKeyRun);
          if (isStoryModeActive() && rs.distanceKm < 2.0) {
            spVariant = (rs.spawnCounter % 3 === 0) ? "rust_brute" : "ash_mite";
          }
          var spResolved = resolveEnemyTypeAndVariant(spVariant);`,
  "10b. Prologue enemy spawns & updateStoryPrologue call"
);

replaceExact(
`        // Requirement 5 & 6: Cannot be hit by the drill again until leaving the drill area, and while immune standing in the drill area is allowed
        if (pl.inDrillZone || pl.drillImmuneTimer > 0 || pl.invulnTimer > 0) {
          return;
        }`,
`        // Requirement 5 & 6 + Step C1: While the train is stalled (!b.moving), the drill is not spinning and deals no contact damage
        if (!b.moving || pl.inDrillZone || pl.drillImmuneTimer > 0 || pl.invulnTimer > 0) {
          return;
        }`,
  "10c. No drill contact damage while train is stalled"
);

// 11. Wire keyboard (Enter, Title screen keys, modal close) & pointerdown (Intro slides, Dialogue box, Log modal, Unlock table modal, Use button, Ledger tab lock, Title Story button)
replaceExact(
`          if (GAME.mode === "TITLE") {
            if (code === "Digit1" || code === "KeyS") {
              startSandboxMode();
              return;
            }
            if (code === "Digit2" || code === "Space" || code === "Enter") {
              startRunMode();
              return;
            }
          }`,
`          if (GAME.mode === "TITLE") {
            if (code === "Digit1" || code === "KeyS") {
              startSandboxMode();
              return;
            }
            if (code === "Digit2" || code === "Space" || code === "Enter") {
              startStoryMode();
              return;
            }
            if (code === "Digit3") {
              startRunMode();
              return;
            }
          }
          if (GAME.story && GAME.story.introActive) {
            if (code === "Escape") {
              finishStoryIntro();
              return;
            }
            if (code === "Enter" || code === "Space") {
              advanceStoryIntroSlide();
              return;
            }
            return;
          }
          if (GAME.story && (GAME.story.logModalOpen || GAME.story.showUnlockTableModal)) {
            if (code === "Escape" || code === "Enter" || code === "Space") {
              GAME.story.logModalOpen = false;
              GAME.story.showUnlockTableModal = false;
              AUDIO.playBeep(480, 0.04, "triangle", 0.05);
              return;
            }
            return;
          }`,
  "11a. Keyboard Title & Story modals"
);

replaceExact(
`            if (code === "Enter" || code === "KeyU") {
              toggleLedger(true);
              return;
            }`,
`            if (code === "Enter" || code === "KeyU") {
              if (isStoryModeActive() && GAME.story.currentDialogue && !computeStoryUseTarget()) {
                advanceStoryDialogue();
                return;
              }
              triggerPlayerUseAction();
              return;
            }`,
  "11b. Keyboard Enter / Use action & dialogue advance"
);

// 11c. Bind the 7 new debug buttons in INPUT.init
replaceExact(
`        bindDbg("dbg-reset-upgrades", function () {
          resetUpgradesDebug();
          updateDebugPanelUI();
        });`,
`        bindDbg("dbg-reset-upgrades", function () {
          resetUpgradesDebug();
          updateDebugPanelUI();
        });
        bindDbg("dbg-skip-intro", function () {
          finishStoryIntro();
          updateDebugPanelUI();
        });
        bindDbg("dbg-skip-dialogue", function () {
          skipAllStoryDialogue();
          updateDebugPanelUI();
        });
        bindDbg("dbg-jump-km0", function () {
          jumpToStoryKmDebug(0);
        });
        bindDbg("dbg-jump-km1", function () {
          jumpToStoryKmDebug(1.0);
        });
        bindDbg("dbg-jump-km19", function () {
          jumpToStoryKmDebug(1.9);
        });
        bindDbg("dbg-unlock-everything", function () {
          unlockEverythingInStoryDebug();
        });
        bindDbg("dbg-show-unlock-table", function (el) {
          GAME.story.showUnlockTableModal = !GAME.story.showUnlockTableModal;
          if (el) el.classList.toggle("active", GAME.story.showUnlockTableModal);
          updateDebugPanelUI();
        });`,
  "11c. Bind 7 new debug buttons"
);

// 11d. Gate LEDGER tab click in Story mode & handle Title Story button + Story overlays on pointerdown
replaceExact(
`              var ldTab = GAME.foundryTabLedgerRect;
              if (ldTab && ux >= ldTab.x && ux <= ldTab.x + ldTab.w && pt.y >= ldTab.y && pt.y <= ldTab.y + ldTab.h) {
                GAME.foundryTab = "LEDGER";
                AUDIO.playLedgerToggle();
                return;
              }`,
`              var ldTab = GAME.foundryTabLedgerRect;
              if (ldTab && ux >= ldTab.x && ux <= ldTab.x + ldTab.w && pt.y >= ldTab.y && pt.y <= ldTab.y + ldTab.h) {
                if (!isStoryUnlocked("ledger_tab")) {
                  showStoryLockHint("ledger_tab");
                  return;
                }
                GAME.foundryTab = "LEDGER";
                AUDIO.playLedgerToggle();
                return;
              }`,
  "11d. Gate LEDGER tab in Story mode"
);

replaceExact(
`            // 2. Title Screen (Step R7 Requirement 9: STORY, FREE RUN, SANDBOX, SETTINGS buttons)
            if (GAME.mode === "TITLE") {
              var tb = GAME.titleBtnRects;
              if (tb) {
                if (tb.story && ux >= tb.story.x && ux <= tb.story.x + tb.story.w && pt.y >= tb.story.y && pt.y <= tb.story.y + tb.story.h) {
                  startRunMode();
                  return;
                }`,
`            // 1c. Story Intro Slides, Log Modal, and Unlock Table Modal
            if (GAME.story && GAME.story.introActive) {
              var skR = GAME.story.introSkipRect;
              if (skR && pt.x >= skR.x && pt.x <= skR.x + skR.w && pt.y >= skR.y && pt.y <= skR.y + skR.h) {
                finishStoryIntro();
                return;
              }
              advanceStoryIntroSlide();
              return;
            }
            if (GAME.story && GAME.story.logModalOpen) {
              GAME.story.logModalOpen = false;
              AUDIO.playBeep(480, 0.05, "triangle", 0.06);
              return;
            }
            if (GAME.story && GAME.story.showUnlockTableModal) {
              GAME.story.showUnlockTableModal = false;
              var dbgBtnUT = document.getElementById("dbg-show-unlock-table");
              if (dbgBtnUT) dbgBtnUT.classList.remove("active");
              AUDIO.playBeep(480, 0.05, "triangle", 0.06);
              return;
            }

            // 2. Title Screen (Step C1 Requirement 1: STORY, FREE RUN, SANDBOX, SETTINGS buttons)
            if (GAME.mode === "TITLE") {
              var tb = GAME.titleBtnRects;
              if (tb) {
                if (tb.story && ux >= tb.story.x && ux <= tb.story.x + tb.story.w && pt.y >= tb.story.y && pt.y <= tb.story.y + tb.story.h) {
                  startStoryMode();
                  return;
                }`,
  "11e. Title Screen STORY button & Story modal pointerdown"
);

// 11f. Handle pointerdown on Use touch button, floating Use prompt, and top-center radio dialogue box
replaceExact(
`                if (cid === "switch") {
                  INPUT.activePointers[e.pointerId] = {
                    id: "switch",
                    startX: pt.x,
                    startY: pt.y,
                    lx: pt.x,
                    ly: pt.y
                  };
                  cycleEquippedBladeEdge();
                  return;
                }`,
`                if (cid === "switch") {
                  INPUT.activePointers[e.pointerId] = {
                    id: "switch",
                    startX: pt.x,
                    startY: pt.y,
                    lx: pt.x,
                    ly: pt.y
                  };
                  cycleEquippedBladeEdge();
                  return;
                }
                if (cid === "use") {
                  INPUT.activePointers[e.pointerId] = {
                    id: "use",
                    startX: pt.x,
                    startY: pt.y,
                    lx: pt.x,
                    ly: pt.y
                  };
                  triggerPlayerUseAction();
                  return;
                }`,
  "11f. Use touch button pointerdown"
);

replaceExact(
`              var mp = GAME.maraUsePromptRect;
              if (
                mp &&
                GAME.maraInRange &&
                pt.x >= mp.x - 8 &&
                pt.x <= mp.x + mp.w + 8 &&
                pt.y >= mp.y - 8 &&
                pt.y <= mp.y + mp.h + 8
              ) {
                toggleLedger(true);
                return;
              }`,
`              // Tapping the top-center Radio Dialogue Box advances the current line
              if (isStoryModeActive() && GAME.story.currentDialogue && GAME.story.dialogueBoxRect) {
                var dbr = GAME.story.dialogueBoxRect;
                if (pt.x >= dbr.x && pt.x <= dbr.x + dbr.w && pt.y >= dbr.y && pt.y <= dbr.y + dbr.h) {
                  advanceStoryDialogue();
                  return;
                }
              }
              // Tapping a floating USE prompt triggers the Use action
              if (GAME.story && GAME.story.usePromptScreenRect && GAME.story.activeUseTarget) {
                var upr = GAME.story.usePromptScreenRect;
                if (pt.x >= upr.x - 8 && pt.x <= upr.x + upr.w + 8 && pt.y >= upr.y - 8 && pt.y <= upr.y + upr.h + 8) {
                  triggerPlayerUseAction();
                  return;
                }
              }
              var mp = GAME.maraUsePromptRect;
              if (
                mp &&
                GAME.maraInRange &&
                pt.x >= mp.x - 8 &&
                pt.x <= mp.x + mp.w + 8 &&
                pt.y >= mp.y - 8 &&
                pt.y <= mp.y + mp.h + 8
              ) {
                toggleLedger(true);
                return;
              }`,
  "11g. Tap Radio Dialogue Box & floating USE prompt"
);

// 12. Render Prologue world elements in RENDER.drawBastion:
// - 3 Frozen Drill Teeth on the drill cone
// - Engine Room Ignition Lever
// - Brittle Scrap Barricades on the track
// - Falling Stalactites + 0.8s dark floor warning shadow
// - Vanguard-01 Black-Box Log at km 1.5
// - Floating USE prompt above active interactable
replaceExact(
`          // 3. Step R6 Requirement 1 & 2: Spinning Pixel-Art Drill Cone at the front of the Engine Car
          // (28 x 30 art px = 112 x 120 world px, 4 rotating hazard-stripe frames at 12 fps, faster with throttle)
          var drillBaseX = Math.round(b.engineFrontX - camX);
          var drillTipX = Math.round(b.drillTipX - camX);
          if (drillTipX >= -40 && drillBaseX <= viewW + 40) {
            var drillFrame = ((Math.floor(b.drillPhase) % 4) + 4) % 4;
            drawSprite(ctx, "bastion_drill", drillFrame, drillBaseX, roofScreenY, false, 4);
          }`,
`          // 3. Step R6 Requirement 1 & 2: Spinning Pixel-Art Drill Cone at the front of the Engine Car
          // (28 x 30 art px = 112 x 120 world px, 4 rotating hazard-stripe frames at 12 fps, faster with throttle)
          var drillBaseX = Math.round(b.engineFrontX - camX);
          var drillTipX = Math.round(b.drillTipX - camX);
          if (drillTipX >= -40 && drillBaseX <= viewW + 40) {
            var drillFrame = ((Math.floor(b.drillPhase) % 4) + 4) % 4;
            drawSprite(ctx, "bastion_drill", drillFrame, drillBaseX, roofScreenY, false, 4);

            // Step C1 Requirement 7b: Draw the 3 frozen drill teeth at the drill head (40 HP each)
            if (isStoryModeActive() && GAME.story.drillTeeth) {
              for (var dti = 0; dti < GAME.story.drillTeeth.length; dti++) {
                var tooth = GAME.story.drillTeeth[dti];
                if (!tooth || tooth.hp <= 0) continue;
                var tsx = Math.round(b.engineFrontX + tooth.relX - camX);
                var tsy = Math.round(b.roofY + tooth.relY - camY);
                ctx.save();
                ctx.fillStyle = tooth.flashTimer > 0 ? "#FFFFFF" : "#35E0F0";
                ctx.strokeStyle = "#0C0A10";
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.moveTo(tsx, tsy + 4);
                ctx.lineTo(tsx + tooth.w * 0.55, tsy - 6);
                ctx.lineTo(tsx + tooth.w + 4, tsy + tooth.h * 0.5);
                ctx.lineTo(tsx + tooth.w * 0.5, tsy + tooth.h + 4);
                ctx.lineTo(tsx, tsy + tooth.h - 4);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Inner frost crystal highlight
                ctx.fillStyle = "#D8FBFF";
                ctx.fillRect(tsx + 6, tsy + 6, 8, 6);

                // Mini HP bar above tooth
                var thPct = Math.max(0, Math.min(1, tooth.hp / tooth.maxHp));
                ctx.fillStyle = "#0C0A10";
                ctx.fillRect(tsx - 4, tsy - 14, 38, 7);
                ctx.fillStyle = "#35E0F0";
                ctx.fillRect(tsx - 3, tsy - 13, Math.round(36 * thPct), 5);
                ctx.restore();
              }
            }
          }

          // Step C1 Requirement 7c, 7d, 7e: Draw Ignition Lever, Scrap Barricades, Falling Stalactites, and Black-Box Log
          if (isStoryModeActive() && GAME.story) {
            var stDraw = GAME.story;

            // (c) Ignition Lever on the Engine Car roof
            if (stDraw.ignitionLever && (stDraw.ignitionLever.active || stDraw.ignitionLever.pulled)) {
              var lvx = Math.round(stDraw.ignitionLever.x - camX);
              var lvy = Math.round(stDraw.ignitionLever.y - camY);
              ctx.save();
              // Base housing
              ctx.fillStyle = "#2B2B33";
              ctx.strokeStyle = "#0C0A10";
              ctx.lineWidth = 2.5;
              ctx.fillRect(lvx + 4, lvy + 26, 28, 18);
              ctx.strokeRect(lvx + 4, lvy + 26, 28, 18);
              // Lever arm
              ctx.strokeStyle = stDraw.ignitionLever.pulled ? "#2FE6A0" : "#FF8A1E";
              ctx.lineWidth = 4;
              ctx.beginPath();
              ctx.moveTo(lvx + 18, lvy + 30);
              var tipX = stDraw.ignitionLever.pulled ? (lvx + 30) : (lvx + 6);
              var tipY = lvy + 6;
              ctx.lineTo(tipX, tipY);
              ctx.stroke();
              // Handle knob
              ctx.fillStyle = stDraw.ignitionLever.pulled ? "#2FE6A0" : "#FFC53A";
              ctx.beginPath();
              ctx.arc(tipX, tipY, 6, 0, Math.PI * 2);
              ctx.fill();
              ctx.strokeStyle = "#0C0A10";
              ctx.lineWidth = 2;
              ctx.stroke();
              ctx.restore();
            }

            // (d) Brittle scrap barricades across the track
            if (stDraw.barricades) {
              for (var bdi = 0; bdi < stDraw.barricades.length; bdi++) {
                var bar = stDraw.barricades[bdi];
                if (!bar || !bar.active) continue;
                var bsx = Math.round(bar.x - camX);
                var bsy = Math.round(bar.y - camY);
                if (bsx + bar.w < -40 || bsx > viewW + 40) continue;
                ctx.save();
                ctx.fillStyle = bar.flashTimer > 0 ? "#FFFFFF" : "#8A4B2A";
                ctx.strokeStyle = "#0C0A10";
                ctx.lineWidth = 2.5;
                // Crossed scrap girders & rust plates
                ctx.fillRect(bsx + 4, bsy, 12, bar.h);
                ctx.strokeRect(bsx + 4, bsy, 12, bar.h);
                ctx.fillRect(bsx + 24, bsy + 8, 12, bar.h - 8);
                ctx.strokeRect(bsx + 24, bsy + 8, 12, bar.h - 8);
                ctx.fillStyle = bar.flashTimer > 0 ? "#FFFFFF" : "#C9962E";
                ctx.fillRect(bsx, bsy + 18, bar.w, 12);
                ctx.strokeRect(bsx, bsy + 18, bar.w, 12);
                ctx.fillRect(bsx + 2, bsy + 52, bar.w - 4, 12);
                ctx.strokeRect(bsx + 2, bsy + 52, bar.w - 4, 12);
                ctx.restore();
              }
            }

            // (d) Falling stalactites with 0.8s dark floor warning shadow
            if (stDraw.stalactites) {
              for (var sdi = 0; sdi < stDraw.stalactites.length; sdi++) {
                var stl = stDraw.stalactites[sdi];
                if (!stl || !stl.active) continue;
                var stx = Math.round(stl.x - camX);
                var sty = Math.round(stl.y - camY);
                var flY = Math.round(stl.floorY - camY);
                if (stx < -60 || stx > viewW + 60) continue;

                // Dark shadow marking the floor 0.8 s before it falls
                ctx.save();
                var warnFrac = stl.state === "WARN" ? (1 - stl.warnTimer / stl.maxWarn) : 1.0;
                var shRad = 16 + warnFrac * 14;
                ctx.fillStyle = "rgba(12, 10, 16, 0.82)";
                ctx.beginPath();
                ctx.ellipse(stx, flY - 2, shRad, 7, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#FF8A1E";
                ctx.lineWidth = 2;
                ctx.stroke();

                // Stalactite rock spike
                ctx.fillStyle = "#5A6270";
                ctx.strokeStyle = "#0C0A10";
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                ctx.moveTo(stx - stl.w * 0.5, sty);
                ctx.lineTo(stx + stl.w * 0.5, sty);
                ctx.lineTo(stx, sty + stl.h);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                ctx.restore();
              }
            }

            // (e) Black-box log of Vanguard-01 on the track at km 1.5
            if (stDraw.blackBoxLog && stDraw.blackBoxLog.active && !stDraw.blackBoxLog.collected) {
              var lgx = Math.round(stDraw.blackBoxLog.x - camX);
              var lgy = Math.round(stDraw.blackBoxLog.y - camY);
              if (lgx >= -60 && lgx <= viewW + 60) {
                ctx.save();
                // Beacon pulse
                var pulseR = 18 + Math.sin(GAME.time * 8) * 5;
                ctx.fillStyle = "rgba(53, 224, 240, 0.22)";
                ctx.beginPath();
                ctx.arc(lgx + 18, lgy + 12, pulseR, 0, Math.PI * 2);
                ctx.fill();

                // Black-box casing
                ctx.fillStyle = "#2B2B33";
                ctx.strokeStyle = "#0C0A10";
                ctx.lineWidth = 2.5;
                ctx.fillRect(lgx, lgy + 4, 36, 22);
                ctx.strokeRect(lgx, lgy + 4, 36, 22);
                ctx.fillStyle = "#FF8A1E";
                ctx.fillRect(lgx + 4, lgy + 8, 28, 5);
                ctx.fillStyle = "#35E0F0";
                ctx.fillRect(lgx + 12, lgy + 16, 12, 6);
                ctx.restore();
              }
            }

            // Floating USE prompt above active Story object (ignition lever or black-box log)
            stDraw.usePromptScreenRect = null;
            if (stDraw.activeUseTarget && stDraw.activeUseTarget.type !== "mara_foundry") {
              var ut = stDraw.activeUseTarget;
              var upx = Math.round(ut.x - camX);
              var upy = Math.round(ut.y - camY + Math.sin(GAME.time * 6) * 3);
              ctx.save();
              ctx.font = "bold 12px monospace";
              var utW = Math.max(150, Math.ceil(ctx.measureText(ut.label).width) + 22);
              var utH = 26;
              var utLeft = Math.round(upx - utW * 0.5);
              var utTop = Math.round(upy - utH);
              ctx.fillStyle = "rgba(12, 10, 16, 0.92)";
              ctx.strokeStyle = "#2FE6A0";
              ctx.lineWidth = 2;
              RENDER.fillRoundRect(ctx, utLeft, utTop, utW, utH, 6);
              RENDER.strokeRoundRect(ctx, utLeft, utTop, utW, utH, 6);
              ctx.fillStyle = "#2FE6A0";
              ctx.textAlign = "center";
              ctx.fillText(ut.label + " [ENTER]", upx, utTop + 17);
              ctx.restore();
              var zEff = getEffectiveZoom();
              stDraw.usePromptScreenRect = {
                x: utLeft * zEff,
                y: utTop * zEff,
                w: utW * zEff,
                h: utH * zEff
              };
            }
          }`,
  "12. Render Prologue world objects in RENDER.drawBastion"
);

// 13. Draw lock icons and greyed-out state on locked touch controls in RENDER.drawTouchControls
replaceExact(
`              var icSz = Math.round(geom.r * 1.05);
              RENDER.drawIcon(ctx, def.icon, geom.cx - icSz * 0.5, geom.cy - icSz * 0.5, icSz);`,
`              var ctrlLocked = isControlLockedInStory(def.id);
              var icSz = Math.round(geom.r * 1.05);
              if (ctrlLocked) {
                ctx.save();
                ctx.globalAlpha = baseAlpha * 0.45;
                RENDER.drawIcon(ctx, def.icon, geom.cx - icSz * 0.5, geom.cy - icSz * 0.5, icSz);
                ctx.restore();
                // Draw lock overlay badge in center of locked touch button
                ctx.save();
                ctx.fillStyle = "rgba(12, 10, 16, 0.86)";
                ctx.beginPath();
                ctx.arc(geom.cx, geom.cy, 15, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#FF8A1E";
                ctx.lineWidth = 2;
                ctx.stroke();
                ctx.strokeStyle = "#FFC53A";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(geom.cx, geom.cy - 4, 5, Math.PI, 0, false);
                ctx.stroke();
                ctx.fillStyle = "#FFC53A";
                ctx.fillRect(geom.cx - 6, geom.cy - 3, 12, 10);
                ctx.restore();
              } else {
                RENDER.drawIcon(ctx, def.icon, geom.cx - icSz * 0.5, geom.cy - icSz * 0.5, icSz);
              }`,
  "13. Draw lock badge on locked touch buttons in Story mode"
);

// 14. Draw Frost screen edges, Objective line under the km bar, Top-Center Radio Dialogue Box, and Lock Hint Banner in RENDER.drawHudStatus
replaceExact(
`          var zoneNameRaw = curBiome
            ? up(curBiome.name)
            : (curZone ? up(curZone.name) : "RUST CAVERN");
          RENDER.drawOutlinedHudText(ctx, zoneNameRaw, cx + cw * 0.5, cy + ch + 18, "#f5e8d3", "center", 16);
          GAME.hudBoxes.push({ x: cx, y: cy + ch + 2, w: cw, h: 20 });

          // Checkpoint Banner (at least 20 px text)
          var bannerOffsetY = 56;`,
`          var zoneNameRaw = curBiome
            ? up(curBiome.name)
            : (curZone ? up(curZone.name) : "RUST CAVERN");
          RENDER.drawOutlinedHudText(ctx, zoneNameRaw, cx + cw * 0.5, cy + ch + 18, "#f5e8d3", "center", 16);
          GAME.hudBoxes.push({ x: cx, y: cy + ch + 2, w: cw, h: 20 });

          // Step C1 Requirement 5: Frost on screen edges when stalled in Prologue
          if (isStoryModeActive() && GAME.story.frostAlpha > 0.01) {
            var fa = Math.min(1, GAME.story.frostAlpha);
            ctx.save();
            ctx.fillStyle = "rgba(53, 224, 240, " + fmt(0.18 * fa, 3) + ")";
            ctx.fillRect(0, 0, lw, 18);
            ctx.fillRect(0, lh - 18, lw, 18);
            ctx.fillRect(0, 0, 22, lh);
            ctx.fillRect(lw - 22, 0, 22, lh);
            // Jagged frost rime triangles along edges
            ctx.fillStyle = "rgba(190, 248, 255, " + fmt(0.32 * fa, 3) + ")";
            for (var fi = 0; fi < lw; fi += 48) {
              ctx.beginPath();
              ctx.moveTo(fi, 0);
              ctx.lineTo(fi + 24, 26);
              ctx.lineTo(fi + 48, 0);
              ctx.closePath();
              ctx.fill();
              ctx.beginPath();
              ctx.moveTo(fi, lh);
              ctx.lineTo(fi + 24, lh - 24);
              ctx.lineTo(fi + 48, lh);
              ctx.closePath();
              ctx.fill();
            }
            ctx.restore();
          }

          // Checkpoint Banner (at least 20 px text)
          var bannerOffsetY = 56;

          // Step C1 Requirement 6: Small objective line under the km bar in Story mode
          if (isStoryModeActive() && GAME.story.objectiveText) {
            ctx.save();
            ctx.font = "bold 13px sans-serif";
            var objW = Math.min(lw - 320, Math.max(300, Math.ceil(ctx.measureText(GAME.story.objectiveText).width) + 24));
            var objX = Math.round((lw - objW) * 0.5);
            var objY = bannerOffsetY;
            ctx.fillStyle = "rgba(14, 22, 30, 0.90)";
            ctx.strokeStyle = GAME.story.stalled ? "#35E0F0" : "#2FE6A0";
            ctx.lineWidth = 1.5;
            RENDER.fillRoundRect(ctx, objX, objY, objW, 24, 5);
            RENDER.strokeRoundRect(ctx, objX, objY, objW, 24, 5);
            RENDER.drawOutlinedHudText(ctx, GAME.story.objectiveText, lw * 0.5, objY + 17, "#E8FCFF", "center", 13);
            ctx.restore();
            bannerOffsetY += 28;
          }

          // Step C1 Requirement 4: Top-center Radio Dialogue Box (portrait, speaker name, typewriter text 30 chars/s, Tap/Enter)
          GAME.story.dialogueBoxRect = null;
          if (isStoryModeActive() && GAME.story.currentDialogue) {
            var dlg = GAME.story.currentDialogue;
            var dBoxW = Math.min(480, lw - 340);
            var dBoxH = 68;
            var dBoxX = Math.round((lw - dBoxW) * 0.5);
            var dBoxY = bannerOffsetY;
            GAME.story.dialogueBoxRect = { x: dBoxX, y: dBoxY, w: dBoxW, h: dBoxH };

            ctx.save();
            ctx.fillStyle = "rgba(14, 18, 26, 0.94)";
            ctx.strokeStyle = "#35E0F0";
            ctx.lineWidth = 2;
            RENDER.fillRoundRect(ctx, dBoxX, dBoxY, dBoxW, dBoxH, 7);
            RENDER.strokeRoundRect(ctx, dBoxX, dBoxY, dBoxW, dBoxH, 7);

            // Portrait frame (52x52)
            var pX = dBoxX + 8;
            var pY = dBoxY + 8;
            ctx.fillStyle = "#1E1612";
            ctx.fillRect(pX, pY, 52, 52);
            ctx.strokeStyle = "#C9962E";
            ctx.lineWidth = 1.5;
            ctx.strokeRect(pX, pY, 52, 52);

            if (dlg.speaker === "Mara") {
              if (SPRITES.mara_portrait && SPRITES.mara_portrait[0]) {
                drawSprite(ctx, "mara_portrait", 0, pX + 2, pY + 2, false, 2);
              }
            } else if (dlg.speaker === "Vanguard-07") {
              if (SPRITES.hero_idle && SPRITES.hero_idle[0]) {
                drawSprite(ctx, "hero_idle", 0, pX + 5, pY + 2, false, 2.6);
              }
            } else {
              // System radio waveform icon
              ctx.strokeStyle = "#35E0F0";
              ctx.lineWidth = 2.2;
              ctx.beginPath();
              ctx.moveTo(pX + 6, pY + 26);
              ctx.lineTo(pX + 16, pY + 14);
              ctx.lineTo(pX + 26, pY + 38);
              ctx.lineTo(pX + 36, pY + 16);
              ctx.lineTo(pX + 46, pY + 26);
              ctx.stroke();
            }

            // Speaker header + Tap/Enter prompt
            var spkLabel = dlg.speaker === "Mara"
              ? "MARA (CHIEF ENGINEER)"
              : (dlg.speaker === "Vanguard-07" ? "VANGUARD-07 (THOUGHTS)" : "SYSTEM RADIO");
            ctx.textAlign = "left";
            ctx.font = "bold 12px monospace";
            ctx.fillStyle = dlg.speaker === "Mara" ? "#FFC53A" : (dlg.speaker === "Vanguard-07" ? "#35E0F0" : "#2FE6A0");
            ctx.fillText(spkLabel, pX + 60, dBoxY + 20);

            ctx.textAlign = "right";
            ctx.font = "bold 10px monospace";
            ctx.fillStyle = "#9FB0C6";
            ctx.fillText("[TAP / ENTER]", dBoxX + dBoxW - 10, dBoxY + 20);

            // Typewriter text (wrapped across up to 2 lines)
            var shownTxt = dlg.text.slice(0, Math.floor(GAME.story.dialogueCharIndex));
            ctx.textAlign = "left";
            ctx.font = "13px sans-serif";
            ctx.fillStyle = "#F4EFE6";
            var maxTxtW = dBoxW - 76;
            var words = shownTxt.split(" ");
            var line1 = "";
            var line2 = "";
            for (var wi = 0; wi < words.length; wi++) {
              var test1 = line1 ? (line1 + " " + words[wi]) : words[wi];
              if (!line2 && ctx.measureText(test1).width <= maxTxtW) {
                line1 = test1;
              } else {
                line2 = line2 ? (line2 + " " + words[wi]) : words[wi];
              }
            }
            ctx.fillText(line1, pX + 60, dBoxY + 40);
            if (line2) {
              ctx.fillText(line2, pX + 60, dBoxY + 57);
            }
            ctx.restore();
            bannerOffsetY += dBoxH + 6;
          }

          // Step C1 Requirement 3: Lock hint banner when a locked button/item is pressed in Story mode
          if (isStoryModeActive() && GAME.story.lockHintBannerTimer > 0 && GAME.story.lockHintBannerText) {
            ctx.save();
            var lhW = Math.min(lw - 260, 480);
            var lhX = Math.round((lw - lhW) * 0.5);
            var lhY = bannerOffsetY;
            ctx.fillStyle = "rgba(28, 14, 14, 0.94)";
            ctx.strokeStyle = "#FF8A1E";
            ctx.lineWidth = 2;
            RENDER.fillRoundRect(ctx, lhX, lhY, lhW, 28, 6);
            RENDER.strokeRoundRect(ctx, lhX, lhY, lhW, 28, 6);
            RENDER.drawOutlinedHudText(ctx, "🔒 " + GAME.story.lockHintBannerText, lw * 0.5, lhY + 19, "#FFC53A", "center", 13);
            ctx.restore();
            bannerOffsetY += 32;
          }`,
  "14. Render Frost edges, Objective line, Radio Dialogue Box, and Lock Hint banner in HUD"
);

// 15. Grey out locked Wagons in drawFoundryTrainTab, locked Parts/Drill in drawFoundryForgeTab, and locked LEDGER tab in drawAnatomyLedger
replaceExact(
`            // Card BUILD Button (64 px tall, green when affordable, grey when not)
            var cbW = 86;
            var cbH = 64;
            var cbX = cx + wCardW - cbW - 8;
            var cbY = cy + 24;
            var buildGreen = affordable && GAME.playMode === "RUN";
            ctx.fillStyle = buildGreen ? "#2FE6A0" : "#3A3D4A";
            RENDER.fillRoundRect(ctx, cbX, cbY, cbW, cbH, 6);
            ctx.strokeStyle = buildGreen ? "#E6FFF5" : "#6C7385";
            ctx.lineWidth = 2;
            RENDER.strokeRoundRect(ctx, cbX, cbY, cbW, cbH, 6);
            ctx.textAlign = "center";
            ctx.font = "bold 16px sans-serif";
            ctx.fillStyle = buildGreen ? "#0C0A10" : "#B0B8C8";
            ctx.fillText("BUILD", cbX + cbW * 0.5, cbY + 38);`,
`            // Card BUILD Button (64 px tall, green when affordable, grey with lock & hint when Story-locked)
            var wLockKey = getWagonStoryUnlockKey(w.id);
            var wStoryLocked = wLockKey ? !isStoryUnlocked(wLockKey) : false;
            if (wStoryLocked) {
              ctx.fillStyle = "#FF8A1E";
              ctx.font = "bold 11px sans-serif";
              ctx.textAlign = "left";
              ctx.fillText("🔒 " + getStoryUnlockHint(wLockKey).slice(0, 44), infoX, cy + 88);
            }
            var cbW = 86;
            var cbH = 64;
            var cbX = cx + wCardW - cbW - 8;
            var cbY = cy + 24;
            var buildGreen = !wStoryLocked && affordable && GAME.playMode === "RUN";
            ctx.fillStyle = wStoryLocked ? "#222530" : (buildGreen ? "#2FE6A0" : "#3A3D4A");
            RENDER.fillRoundRect(ctx, cbX, cbY, cbW, cbH, 6);
            ctx.strokeStyle = wStoryLocked ? "#FF8A1E" : (buildGreen ? "#E6FFF5" : "#6C7385");
            ctx.lineWidth = 2;
            RENDER.strokeRoundRect(ctx, cbX, cbY, cbW, cbH, 6);
            ctx.textAlign = "center";
            ctx.font = "bold 15px sans-serif";
            ctx.fillStyle = wStoryLocked ? "#FF8A1E" : (buildGreen ? "#0C0A10" : "#B0B8C8");
            ctx.fillText(wStoryLocked ? "🔒 LOCKED" : "BUILD", cbX + cbW * 0.5, cbY + 38);`,
  "15a. Grey out & lock icon on Story-locked wagons in Train tab"
);

replaceExact(
`            // Equip / Buy button (64 px tall)
            var eqGreen = !isEquipped && (isOwned || canBuy);
            ctx.fillStyle = isEquipped ? "#4A3B1C" : (eqGreen ? "#2FE6A0" : "#3A3D4A");
            RENDER.fillRoundRect(ctx, eqBtnX, btnY, eqBtnW, eqBtnH, 6);
            ctx.strokeStyle = isEquipped ? "#FFC53A" : (eqGreen ? "#E6FFF5" : "#6C7385");
            ctx.lineWidth = 1.8;
            RENDER.strokeRoundRect(ctx, eqBtnX, btnY, eqBtnW, eqBtnH, 6);
            ctx.textAlign = "center";
            ctx.font = "bold 14px sans-serif";
            ctx.fillStyle = isEquipped ? "#FFC53A" : (eqGreen ? "#0C0A10" : "#B0B8C8");
            ctx.fillText(isEquipped ? "EQUIPPED" : (isOwned ? "EQUIP" : "BUILD"), eqBtnX + eqBtnW * 0.5, btnY + 37);`,
`            // Equip / Buy button (64 px tall) with Story lock support
            var pStoryKey = getPartStoryUnlockKey(activeSlotKey, pDef.id);
            var pStoryLocked = pStoryKey ? !isStoryUnlocked(pStoryKey) : false;
            if (pStoryLocked) {
              ctx.textAlign = "left";
              ctx.font = "bold 11px sans-serif";
              ctx.fillStyle = "#FF8A1E";
              ctx.fillText("🔒 " + getStoryUnlockHint(pStoryKey).slice(0, 42), rx + 14, ry + 67);
            }
            var eqGreen = !pStoryLocked && !isEquipped && (isOwned || canBuy);
            ctx.fillStyle = pStoryLocked ? "#222530" : (isEquipped ? "#4A3B1C" : (eqGreen ? "#2FE6A0" : "#3A3D4A"));
            RENDER.fillRoundRect(ctx, eqBtnX, btnY, eqBtnW, eqBtnH, 6);
            ctx.strokeStyle = pStoryLocked ? "#FF8A1E" : (isEquipped ? "#FFC53A" : (eqGreen ? "#E6FFF5" : "#6C7385"));
            ctx.lineWidth = 1.8;
            RENDER.strokeRoundRect(ctx, eqBtnX, btnY, eqBtnW, eqBtnH, 6);
            ctx.textAlign = "center";
            ctx.font = "bold 14px sans-serif";
            ctx.fillStyle = pStoryLocked ? "#FF8A1E" : (isEquipped ? "#FFC53A" : (eqGreen ? "#0C0A10" : "#B0B8C8"));
            ctx.fillText(pStoryLocked ? "🔒 LOCKED" : (isEquipped ? "EQUIPPED" : (isOwned ? "EQUIP" : "BUILD")), eqBtnX + eqBtnW * 0.5, btnY + 37);`,
  "15b. Grey out & lock icon on Story-locked parts in PARTS (ADVANCED) tab"
);

replaceExact(
`            var td = tabDefs[ti];
            var isAct = curTab === td.id;
            ctx.fillStyle = isAct ? "#C9962E" : "#232734";
            RENDER.fillRoundRect(ctx, td.x, topRowY, td.w, tabH, 6);
            ctx.strokeStyle = isAct ? "#FFE699" : "#6C7385";
            ctx.lineWidth = isAct ? 2.5 : 1.6;
            RENDER.strokeRoundRect(ctx, td.x, topRowY, td.w, tabH, 6);
            ctx.textAlign = "center";
            ctx.fillStyle = isAct ? "#0C0A10" : "#F4EFE6";
            if (td.id === "FORGE") {
              ctx.font = "bold 16px sans-serif";
              ctx.fillText("PARTS", td.x + td.w * 0.5, topRowY + 29);
              ctx.font = "bold 13px sans-serif";
              ctx.fillText("(ADVANCED)", td.x + td.w * 0.5, topRowY + 49);
            } else {
              ctx.font = "bold 17px sans-serif";
              ctx.fillText(td.label, td.x + td.w * 0.5, topRowY + 39);
            }`,
`            var td = tabDefs[ti];
            var isAct = curTab === td.id;
            var tabLocked = (td.id === "LEDGER" && !isStoryUnlocked("ledger_tab"));
            ctx.fillStyle = tabLocked ? "#1A1C24" : (isAct ? "#C9962E" : "#232734");
            RENDER.fillRoundRect(ctx, td.x, topRowY, td.w, tabH, 6);
            ctx.strokeStyle = tabLocked ? "#FF8A1E" : (isAct ? "#FFE699" : "#6C7385");
            ctx.lineWidth = isAct ? 2.5 : 1.6;
            RENDER.strokeRoundRect(ctx, td.x, topRowY, td.w, tabH, 6);
            ctx.textAlign = "center";
            ctx.fillStyle = tabLocked ? "#8C95A3" : (isAct ? "#0C0A10" : "#F4EFE6");
            if (td.id === "FORGE") {
              ctx.font = "bold 16px sans-serif";
              ctx.fillText("PARTS", td.x + td.w * 0.5, topRowY + 29);
              ctx.font = "bold 13px sans-serif";
              ctx.fillText("(ADVANCED)", td.x + td.w * 0.5, topRowY + 49);
            } else if (tabLocked) {
              ctx.font = "bold 15px sans-serif";
              ctx.fillText("🔒 LEDGER", td.x + td.w * 0.5, topRowY + 39);
            } else {
              ctx.font = "bold 17px sans-serif";
              ctx.fillText(td.label, td.x + td.w * 0.5, topRowY + 39);
            }`,
  "15c. Lock icon on LEDGER tab in Story mode"
);

// 16. Draw Story Intro 6-slide overlay, Vanguard-01 Black-Box LOG modal, and Show Unlock Table debug modal in drawOverlays
replaceExact(
`        // Step R5, R6 & R7: Interactive Sprite Viewer Modal (grid of every sprite in SPRITES; tapping any sprite enlarges it)
        if (GAME.spriteViewerOpen) {
          drawSpriteViewerModal(ctx, CFG.logicalWidth, CFG.logicalHeight);
        }`,
`        // Step C1 Requirement 5: 6 short story slides drawn in code with a Skip button
        if (GAME.story && GAME.story.introActive) {
          drawStoryIntroSlidesModal(ctx, CFG.logicalWidth, CFG.logicalHeight);
        }

        // Step C1 Requirement 7e: Black-box LOG screen modal when Vanguard-01 log is picked up at km 1.5
        if (GAME.story && GAME.story.logModalOpen && GAME.story.logModalData) {
          drawStoryLogModal(ctx, CFG.logicalWidth, CFG.logicalHeight);
        }

        // Step C1 Requirement 8: Show unlock table debug modal
        if (GAME.story && GAME.story.showUnlockTableModal) {
          drawStoryUnlockTableModal(ctx, CFG.logicalWidth, CFG.logicalHeight);
        }

        // Step R5, R6 & R7: Interactive Sprite Viewer Modal (grid of every sprite in SPRITES; tapping any sprite enlarges it)
        if (GAME.spriteViewerOpen) {
          drawSpriteViewerModal(ctx, CFG.logicalWidth, CFG.logicalHeight);
        }`,
  "16a. Call Story modals in drawOverlays"
);

replaceExact(
`      function drawSpriteViewerModal(ctx, w, h) {`,
`      function drawStoryIntroSlidesModal(ctx, w, h) {
        try {
          ctx.save();
          ctx.fillStyle = "#08070C";
          ctx.fillRect(0, 0, w, h);

          var slides = DATA_TABLES.introSlides || [];
          var idx = Math.max(0, Math.min(slides.length - 1, GAME.story.introSlideIndex || 0));
          var slide = slides[idx] || slides[0];

          var cardW = Math.min(820, w - 48);
          var cardH = 440;
          var cx = Math.round((w - cardW) * 0.5);
          var cy = Math.round((h - cardH) * 0.5);

          RENDER.drawRivetedSteelPanel(ctx, cx, cy, cardW, cardH, "BASTION BREAKER — STORY PROLOGUE (" + (idx + 1) + " / " + slides.length + ")", true);

          // Code-drawn procedural scene viewport
          var artX = cx + 28;
          var artY = cy + 56;
          var artW = cardW - 56;
          var artH = 220;
          ctx.fillStyle = "#0E1822";
          ctx.fillRect(artX, artY, artW, artH);
          ctx.strokeStyle = "#C9962E";
          ctx.lineWidth = 2;
          ctx.strokeRect(artX, artY, artW, artH);

          var midX = artX + artW * 0.5;
          var midY = artY + artH * 0.5;
          var t = GAME.time || 0;

          if (slide.scene === "swarm_core") {
            // Slide 1: The Litho-Swarm petrifies the Solar Core
            var g1 = ctx.createRadialGradient(midX, midY, 12, midX, midY, 110);
            g1.addColorStop(0, "#FFC53A");
            g1.addColorStop(0.45, "#FF6A1A");
            g1.addColorStop(1, "#0E1822");
            ctx.fillStyle = g1;
            ctx.fillRect(artX + 2, artY + 2, artW - 4, artH - 4);
            ctx.fillStyle = "#2B2B33";
            ctx.strokeStyle = "#0C0A10";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(midX, midY, 48, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            // Swarm tendrils encasing the core
            ctx.strokeStyle = "#35E0F0";
            ctx.lineWidth = 2.5;
            for (var s1 = 0; s1 < 8; s1++) {
              var ang = (s1 / 8) * Math.PI * 2 + t * 0.3;
              ctx.beginPath();
              ctx.moveTo(midX + Math.cos(ang) * 32, midY + Math.sin(ang) * 32);
              ctx.lineTo(midX + Math.cos(ang) * 95, midY + Math.sin(ang) * 75);
              ctx.stroke();
            }
          } else if (slide.scene === "frozen_surface") {
            // Slide 2: The surface freezes beneath glaciers
            ctx.fillStyle = "#102838";
            ctx.fillRect(artX + 2, artY + 2, artW - 4, artH - 4);
            ctx.fillStyle = "#35E0F0";
            for (var s2 = 0; s2 < 7; s2++) {
              var gx = artX + 30 + s2 * 105;
              var gh = 80 + (s2 % 3) * 34;
              ctx.beginPath();
              ctx.moveTo(gx, artY + artH - 2);
              ctx.lineTo(gx + 48, artY + artH - gh);
              ctx.lineTo(gx + 96, artY + artH - 2);
              ctx.closePath();
              ctx.fill();
            }
          } else if (slide.scene === "bastion_forge") {
            // Slide 3: The Bastion & the Ember-Heart
            ctx.fillStyle = "#1A1216";
            ctx.fillRect(artX + 2, artY + 2, artW - 4, artH - 4);
            if (SPRITES.bastion_engine && SPRITES.bastion_engine[0]) {
              drawSprite(ctx, "bastion_engine", 0, midX - 110, midY - 40, false, 3);
            }
            if (SPRITES.bastion_drill && SPRITES.bastion_drill[0]) {
              drawSprite(ctx, "bastion_drill", 0, midX + 28, midY - 40, false, 3);
            }
          } else if (slide.scene === "stalled_sluice") {
            // Slide 4: Stalled at km 0 in the Rusted Sluice
            ctx.fillStyle = "#0E2B2E";
            ctx.fillRect(artX + 2, artY + 2, artW - 4, artH - 4);
            if (SPRITES.bastion_engine && SPRITES.bastion_engine[0]) {
              drawSprite(ctx, "bastion_engine", 0, midX - 90, midY - 30, false, 3);
            }
            ctx.fillStyle = "#35E0F0";
            ctx.fillRect(midX + 35, midY - 22, 42, 68);
          } else if (slide.scene === "cooling_heart") {
            // Slide 5: Frost creeping across the hull as the Ember-Heart cools
            ctx.fillStyle = "#0B1E28";
            ctx.fillRect(artX + 2, artY + 2, artW - 4, artH - 4);
            ctx.strokeStyle = "#35E0F0";
            ctx.lineWidth = 4;
            ctx.strokeRect(artX + 14, artY + 14, artW - 28, artH - 28);
            ctx.fillStyle = "#FF6A1A";
            ctx.beginPath();
            ctx.arc(midX, midY, 34, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Slide 6: Vanguard-07 wakes and Mara calls on the radio
            ctx.fillStyle = "#141A24";
            ctx.fillRect(artX + 2, artY + 2, artW - 4, artH - 4);
            if (SPRITES.hero_idle && SPRITES.hero_idle[0]) {
              drawSprite(ctx, "hero_idle", 0, midX - 80, midY - 36, false, 4);
            }
            if (SPRITES.mara_portrait && SPRITES.mara_portrait[0]) {
              drawSprite(ctx, "mara_portrait", 0, midX + 30, midY - 36, false, 3);
            }
          }

          // Slide Title & Lines
          ctx.textAlign = "center";
          ctx.font = "bold 20px sans-serif";
          ctx.fillStyle = "#FFC53A";
          ctx.fillText(slide.title, cx + cardW * 0.5, artY + artH + 34);

          ctx.font = "15px sans-serif";
          ctx.fillStyle = "#F4EFE6";
          for (var li = 0; li < slide.lines.length; li++) {
            ctx.fillText(slide.lines[li], cx + cardW * 0.5, artY + artH + 64 + li * 24);
          }

          // Bottom Buttons: NEXT SLIDE (Tap / Enter) & SKIP button
          var skipR = { x: cx + cardW - 154, y: cy + cardH - 56, w: 126, h: 42 };
          GAME.story.introSkipRect = skipR;
          ctx.fillStyle = "#3A2228";
          ctx.strokeStyle = "#FF8A1E";
          ctx.lineWidth = 2;
          RENDER.fillRoundRect(ctx, skipR.x, skipR.y, skipR.w, skipR.h, 6);
          RENDER.strokeRoundRect(ctx, skipR.x, skipR.y, skipR.w, skipR.h, 6);
          ctx.fillStyle = "#FFC53A";
          ctx.font = "bold 15px sans-serif";
          ctx.fillText("SKIP [ESC]", skipR.x + skipR.w * 0.5, skipR.y + 27);

          ctx.fillStyle = "#35E0F0";
          ctx.font = "bold 14px monospace";
          ctx.fillText("TAP ANYWHERE OR PRESS [ENTER] FOR NEXT SLIDE (" + (idx + 1) + "/" + slides.length + ")", cx + cardW * 0.5 - 60, cy + cardH - 30);

          ctx.restore();
        } catch (err) {
          reportDrawErrorOnce("drawStoryIntroSlidesModal", err);
        }
      }

      function drawStoryLogModal(ctx, w, h) {
        try {
          var logData = GAME.story.logModalData;
          if (!logData) return;
          ctx.save();
          ctx.fillStyle = "rgba(6, 8, 14, 0.86)";
          ctx.fillRect(0, 0, w, h);

          var mw = Math.min(720, w - 48);
          var mh = 340;
          var mx = Math.round((w - mw) * 0.5);
          var my = Math.round((h - mh) * 0.5);

          RENDER.drawRivetedSteelPanel(ctx, mx, my, mw, mh, logData.title || "BLACK-BOX LOG", true);

          ctx.textAlign = "left";
          ctx.font = "bold 14px monospace";
          ctx.fillStyle = "#35E0F0";
          ctx.fillText(logData.dateTag || "RECOVERED ARCHIVE", mx + 26, my + 68);

          ctx.font = "bold 15px sans-serif";
          ctx.fillStyle = "#FFC53A";
          ctx.fillText(logData.speaker || "Vanguard-01", mx + 26, my + 94);

          ctx.font = "14px sans-serif";
          ctx.fillStyle = "#F4EFE6";
          var lines = logData.lines || [];
          for (var i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], mx + 26, my + 130 + i * 30);
          }

          ctx.textAlign = "center";
          ctx.font = "bold 15px monospace";
          ctx.fillStyle = "#2FE6A0";
          ctx.fillText("TAP OR PRESS [ENTER] TO CLOSE LOG", mx + mw * 0.5, my + mh - 24);
          ctx.restore();
        } catch (err) {
          reportDrawErrorOnce("drawStoryLogModal", err);
        }
      }

      function drawStoryUnlockTableModal(ctx, w, h) {
        try {
          ctx.save();
          ctx.fillStyle = "rgba(8, 10, 16, 0.90)";
          ctx.fillRect(0, 0, w, h);

          var mw = Math.min(860, w - 36);
          var mh = Math.min(490, h - 28);
          var mx = Math.round((w - mw) * 0.5);
          var my = Math.round((h - mh) * 0.5);

          RENDER.drawRivetedSteelPanel(ctx, mx, my, mw, mh, "STORY UNLOCK GATING TABLE (DATA_TABLES.unlocks)", true);

          var tbl = DATA_TABLES.unlocks || {};
          var keys = Object.keys(tbl);
          var colW = Math.floor((mw - 48) / 2);
          ctx.textAlign = "left";
          ctx.font = "11.5px monospace";

          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var item = tbl[k];
            var unlocked = isStoryUnlocked(k);
            var col = i % 2;
            var row = Math.floor(i / 2);
            var rx = mx + 24 + col * colW;
            var ry = my + 62 + row * 21;
            if (ry > my + mh - 36) break;
            ctx.fillStyle = unlocked ? "#2FE6A0" : "#FF8A1E";
            ctx.fillText((unlocked ? "[UNLOCKED] " : "[LOCKED:" + item.stage + "] ") + item.name, rx, ry);
          }

          ctx.textAlign = "center";
          ctx.font = "bold 14px monospace";
          ctx.fillStyle = "#FFC53A";
          ctx.fillText("TAP ANYWHERE OR PRESS [ENTER / ESC] TO CLOSE", mx + mw * 0.5, my + mh - 14);
          ctx.restore();
        } catch (err) {
          reportDrawErrorOnce("drawStoryUnlockTableModal", err);
        }
      }

      function drawSpriteViewerModal(ctx, w, h) {`,
  "16b. Implement drawStoryIntroSlidesModal, drawStoryLogModal, and drawStoryUnlockTableModal"
);

// 17. Update startSandboxMode, startRunMode, startStoryMode, restartGame, stepSimulation, and updateDebugPanelUI
replaceExact(
`      function startSandboxMode() {
        GAME.playMode = "SANDBOX";
        GAME.settingsReturnToTitle = false;`,
`      function startSandboxMode() {
        GAME.playMode = "SANDBOX";
        if (GAME.story) {
          GAME.story.active = false;
          GAME.story.introActive = false;
          GAME.story.logModalOpen = false;
        }
        GAME.settingsReturnToTitle = false;`,
  "17a. Ensure startSandboxMode clears story.active"
);

replaceExact(
`      function startRunMode() {
        GAME.playMode = "RUN";
        GAME.settingsReturnToTitle = false;
        GAME.ledgerOpen = false;
        GAME.confirmDialog = null;
        recomputeStats(GAME.loadout);`,
`      function startRunMode() {
        GAME.playMode = "RUN";
        if (GAME.story) {
          GAME.story.active = false;
          GAME.story.stalled = false;
          GAME.story.introActive = false;
          GAME.story.logModalOpen = false;
          GAME.story.frostAlpha = 0;
        }
        // Step C1 Requirement 1: FREE RUN is the B15 Run mode with everything unlocked, for testing
        GAME.wagonsUnlockedAll = true;
        GAME.partsUnlockedAllDebug = true;
        var slotKeysFree = ["edge", "counterweight", "core", "coil"];
        for (var sfi = 0; sfi < slotKeysFree.length; sfi++) {
          var skFree = slotKeysFree[sfi];
          var arrFree = DATA_TABLES.parts[skFree] || [];
          for (var pfi = 0; pfi < arrFree.length; pfi++) {
            GAME.ownedParts[skFree][arrFree[pfi].id] = true;
          }
        }
        GAME.settingsReturnToTitle = false;
        GAME.ledgerOpen = false;
        GAME.confirmDialog = null;
        recomputeStats(GAME.loadout);`,
  "17b. Make FREE RUN unlock everything for testing & clear story.active"
);

replaceExact(
`      function quitToTitle() {`,
`      // Step C1 Requirement 1, 3, 5 & 7: Start Story Mode with gating, 6 intro slides, and Prologue stalled train at km 0
      function startStoryMode(skipIntroFlag) {
        GAME.playMode = "RUN";
        GAME.settingsReturnToTitle = false;
        GAME.ledgerOpen = false;
        GAME.confirmDialog = null;

        // Reset loadout to starting Story items (Cleaver, Standard Counterweight, Standard Motor Core, Standard Coil, Drill Bit Tier 1)
        GAME.wagonsUnlockedAll = false;
        GAME.partsUnlockedAllDebug = false;
        GAME.ownedParts = {
          edge: { cleaver: true, twin_fang: false, piercing_lance: false, buzzsaw: false },
          counterweight: { light: false, standard: true, heavy: false },
          core: { standard: true, cryo_core: false, volt_core: false, magma_core: false },
          coil: { standard: true, reinforced: false, long_haul: false }
        };
        GAME.loadout = {
          edge: "cleaver",
          counterweight: "standard",
          core: "standard",
          coil: "standard"
        };
        GAME.drillBitTier = 1;
        initStoryUnlocks();
        recomputeStats(GAME.loadout);

        GAME.story.active = true;
        GAME.story.introActive = !skipIntroFlag;
        GAME.story.introSlideIndex = 0;
        GAME.story.introSlideTimer = 0;

        initBastionForRun();
        var spawnX = getSafeFoundryRoofSpawnX();
        var spawnY = GAME.bastion.roofY - CFG.playerHeight;
        resetPlayerToCoords(spawnX, spawnY);
        GAME.player.onGround = true;
        GAME.player.onTrainRoof = true;
        GAME.player.invulnTimer = CFG.rebuildImmuneTime || 1.50;
        GAME.player.drillImmuneTimer = CFG.drillImmuneTime || 1.50;
        initBoltPool();
        initPickupPool();
        GAME.dummies = [];
        initEnemyPool();
        initEnemyProjectilePool();
        GAME.runState.spawnCounter = 0;
        recountActiveEnemies();
        initDmgNumberPool();
        initParticlePool();
        GAME.crawlersDestroyed = 0;
        setupStoryPrologueWorld(0);
        snapCameraToPlayer();
        initAmbientPool();
        GAME.mode = "PLAYING";
        GAME.lastTimestamp = 0;
        INPUT.clearAll();
        AUDIO.playBeep(520, 0.08, "triangle", 0.08);
        updateDebugPanelUI();
      }

      function quitToTitle() {`,
  "17c. Add startStoryMode function"
);

replaceExact(
`      function restartGame() {
        GAME.confirmDialog = null;
        if (GAME.playMode === "RUN") {
          startRunMode();
        } else {
          startSandboxMode();
        }
      }`,
`      function restartGame() {
        GAME.confirmDialog = null;
        if (GAME.playMode === "RUN") {
          if (GAME.story && GAME.story.active) {
            startStoryMode(true);
          } else {
            startRunMode();
          }
        } else {
          startSandboxMode();
        }
      }`,
  "17d. Update restartGame to support Story mode"
);

replaceExact(
`        if (GAME.ledgerOpen || GAME.isPortrait || GAME.confirmDialog) {
          return;
        }`,
`        if (
          GAME.ledgerOpen ||
          GAME.isPortrait ||
          GAME.confirmDialog ||
          (GAME.story && (GAME.story.introActive || GAME.story.logModalOpen || GAME.story.showUnlockTableModal))
        ) {
          return;
        }`,
  "17e. Pause simulation while Story Intro, Log Modal, or Unlock Table Modal is open"
);

// Check inline script syntax!
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  throw new Error("Could not locate inline <script> tag!");
}
new Function(scriptMatch[1]);
console.log("JavaScript syntax check PASSED!");

fs.writeFileSync(path, html, "utf8");
console.log("Successfully wrote updated /app/applet/index.html (" + html.split("\n").length + " lines)");
