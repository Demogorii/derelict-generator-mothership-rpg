import create from "zustand";
import Dungeon from "dungeon-generator";

const useStore = create((set, get) => ({
  view: "",
  ship: null,
  selectedText: "",
  selectedLabel: "",
  lightMode: false,
  showGrid: true,
  showHud: true,
  setShowGrid: () => {
    const light = !get().showGrid;
    set({ showGrid: light });
  },
  setShowHud: () => {
    const light = !get().showHud;
    set({ showHud: light });
  },
  setLightMode: () => {
    const light = !get().lightMode;
    set({ lightMode: light });
  },
  setSelectedText: (selectedText) => {
    set({ selectedText });
  },
  setSelectedLabel: (selectedLabel) => {
    set({ selectedLabel });
  },
  setShip: (pecio) => {
    const ship = new Dungeon({
      size: [100, 100],
      rooms: {
        initial: {
          min_size: [1, 1],
          max_size: [1, 1],
          max_exits: 1,
        },
        any: {
          min_size: [1, 1],
          max_size: [1, 1],
          max_exits: 4,
        },
      },
      max_corridor_length: 0,
      min_corridor_length: 0,
      corridor_density: 0,
      symmetric_rooms: true,
      interconnects: 1,
      max_interconnect_length: 10,
      room_count: pecio.shipdices,
    });

    ship.generate();

    const s = Object.assign({}, { ship, pecio });

    set({ ship: s });
  },
  setView: (view) => set({ view }),
}));

export { useStore };
