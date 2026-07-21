export type HelpSegment =
  | string
  | {
      type: "input";
      label: string;
    };

export type HelpItem = readonly HelpSegment[];

export type HelpSection = {
  id: string;
  heading: string;
  items: readonly HelpItem[];
};

export type HelpTabId =
  | "getting-started"
  | "controls"
  | "garden-morale"
  | "advanced";

export type HelpTab = {
  id: HelpTabId;
  label: string;
  sections: readonly HelpSection[];
};

function input(label: string): HelpSegment {
  return { type: "input", label };
}

export const helpTabs = [
  {
    id: "getting-started",
    label: "Getting Started",
    sections: [
      {
        id: "inventory-and-quickbar",
        heading: "Inventory and Quickbar",
        items: [
          ["press ", input("I"), " to open or close inventory while playing"],
          [
            "in inventory, use ",
            input("Arrow keys"),
            " or ",
            input("Mouse"),
            " to move between groups and items",
          ],
          [
            "highlight an item and press ",
            input("1-9"),
            " to assign it to that quickbar slot",
          ],
          [
            "press ",
            input("R"),
            " in inventory to remove the highlighted item from quickbar",
          ],
          [
            "in the world, press ",
            input("1-9"),
            " to select a quickbar item and press ",
            input("Space"),
            " to use it",
          ],
        ],
      },
      {
        id: "start-planting",
        heading: "Start Planting",
        items: [
          [
            "turn soil first, then sow seeds on turned soil with ",
            input("Space"),
          ],
          ["use water can to water plants"],
          ["refill water can while standing next to the house or a water-well"],
          [
            "water system unlocks at morale stage 2, and waters your plants at 09:00 each day",
          ],
          ["fertilize plants to get more out of them"],
        ],
      },
      {
        id: "a-little-help",
        heading: "A Little Help",
        items: [
          [
            "double-tap ",
            input(","),
            " to slow down time and double-tap ",
            input("."),
            " to speed it up",
          ],
          [
            "you and your helpers automatically eat from your harvests at 06:00 every morning",
          ],
          ["you will eat less if you have a diverse diet"],
          ["press ", input("["), " to open 'Save As'"],
          ["press ", input("]"), " to save (overwrites current slot)"],
        ],
      },
      {
        id: "getting-started-notes",
        heading: "Getting Started",
        items: [
          [
            "you start new games with some food to eat, but you had better not waste any time",
          ],
          [
            "Remember ... your garden loves flowers, and flowers are the only way to grow Garden Morale",
          ],
          [
            "Garden Morale is how you unlock more items and abilities to get the most out of your garden",
          ],
        ],
      },
    ],
  },
  {
    id: "controls",
    label: "Controls",
    sections: [
      {
        id: "playing",
        heading: "Playing",
        items: [
          ["move: ", input("WASD"), " or ", input("Arrow keys")],
          ["use selected action/item on your tile: ", input("Space")],
          ["quickbar select: ", input("1-9")],
          ["open inventory: ", input("I")],
          ["pause/unpause: ", input("P")],
          [
            "fast travel map: ",
            input("F"),
            " (unlocks at morale stage 4)",
          ],
          [
            "sprint while moving: ",
            input("C"),
            " or ",
            input("Shift"),
            " (unlocks at morale stage 2)",
          ],
          [
            "save: ",
            input("]"),
            " (current slot if present, otherwise opens Save)",
          ],
          ["save as: ", input("[")],
          [
            "time speed change: double-tap ",
            input(","),
            " (min) or ",
            input("."),
            " (max)",
          ],
          ["zoom: ", input("Mouse wheel"), " or ", input("Z")],
          [
            input("Right-click"),
            " a plant to toggle the plant info panel",
          ],
        ],
      },
      {
        id: "inventory",
        heading: "Inventory",
        items: [
          ["close inventory: ", input("I"), " or ", input("Esc")],
          [
            "navigate items: ",
            input("Arrow keys"),
            " or ",
            input("Mouse click"),
          ],
          ["assign highlighted item to quickbar: ", input("1-9")],
          ["remove highlighted quickbar assignment: ", input("R")],
        ],
      },
      {
        id: "fast-travel",
        heading: "Fast Travel",
        items: [
          ["open: ", input("F"), " (unlocks at morale stage 4)"],
          ["close map view: ", input("F"), " or ", input("Esc")],
          [
            "pan map: ",
            input("WASD"),
            " , ",
            input("Arrow keys"),
            " , or ",
            input("Mouse wheel"),
          ],
          ["drag map scrollbars for precise panning"],
          [input("Click"), " a tile to fast-travel there"],
        ],
      },
      {
        id: "helper-toggles",
        heading: "Helper Toggles",
        items: [
          [input("M"), " pause/resume helper movement"],
          [input("N"), " show/hide helpers"],
        ],
      },
    ],
  },
  {
    id: "garden-morale",
    label: "Garden Morale",
    sections: [
      {
        id: "garden-morale-unlocks",
        heading: "Garden Morale Unlocks",
        items: [
          ["stage 1: +1,000 SEED, worker helper #1 unlock, watering can cap 25"],
          [
            "stage 2: +1,000 SEED, sprint unlock, water system unlock, watering can cap 40",
          ],
          [
            "stage 3: +2,500 SEED, flower mix fertilizer unlock, worker helper #2 unlock, watering can cap 100",
          ],
          [
            "stage 4: +2,500 SEED, fast travel unlock, worker helper #3 unlock, watering can cap 400",
          ],
          [
            "stage 5: +5,000 SEED + 10 water systems, watering can cap 9,999",
          ],
          ["stage 6: +7,500 SEED, apiary unlock, collect honey unlock"],
          ["stage 7: +7,500 SEED, apiary helper unlock"],
          ["stage 8: +10,000 SEED + 10 water systems (reward only)"],
          ["stage 9: +100,000 SEED + 10 water systems (reward only)"],
          ["stage 10: +250,000 SEED (reward only)"],
          [
            "stage 10 at 100% progress: +1,000,000 SEED + 1,000 water systems",
          ],
        ],
      },
    ],
  },
  {
    id: "advanced",
    label: "Advanced",
    sections: [
      {
        id: "water-and-plant-health",
        heading: "Water and Plant Health",
        items: [
          [
            "the white marker on each plant's moisture bar is that plant's low-water threshold",
          ],
          ["plant loses health if moisture is below threshold"],
        ],
      },
      {
        id: "beekeeping",
        heading: "Beekeeping",
        items: [
          [
            "plants can only heal when an apiary is installed (plants love pollinators)",
          ],
          ["apiaries fill with honey every 7 days"],
          ["collect the honey to sell in the store"],
        ],
      },
      {
        id: "plant-death",
        heading: "Plant Death",
        items: [
          ["plants die from losing health"],
          [
            "each plant only lives for a certain amount of days (but Hibiscus last a REALLY, REALLY long time)",
          ],
          [
            "even fertilized plants die after multiple rounds of harvests, and each plant is different",
          ],
        ],
      },
      {
        id: "fertilizers",
        heading: "Fertilizers",
        items: [
          ["fertilizers boost what you get at harvest"],
          ["base fertilizers affect BASE_YIELD"],
          ["supplementary fertilizers affect YIELD_MULTIPLIER"],
          [
            "some fertilizers have an NPK and work best when used on plants that prefer that NPK",
          ],
        ],
      },
      {
        id: "soil-moisture",
        heading: "Soil Moisture",
        items: [
          ["the ground remains as healthy as you left it"],
          ["water-levels do not reset when you start a new plant"],
          ["if you left it dry, the ground will start dry"],
        ],
      },
    ],
  },
] as const satisfies readonly HelpTab[];
