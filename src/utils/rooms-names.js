import Chance from "chance";

export const RoomName = (face) => {
  let cargoType = Chance(Math.random() * 9999).pickone([
    "Body Bags (Full)",
    "Ceramics",
    "Antique Books",
    "Garden Gnomes (Full of Illegal Stimulants)",
    "Opium",
    "Tea",
    "Silver Bars",
    "Sensitive Documents ",
    "Anthropology Mission",
    "Botanists / Horticulturists",
    "Industrial Engineers/Architects ",
    "Terraforming Equipment",
    "Hydroponic Plants",
    "Rare Wood",
    "Lab Rats",
    "Cultured Cells",
    "Cremains",
    "Drug Production Starter Equipment",
    "Common Cloth",
    "Designer Clothes",
    "Expensive Fish (food)",
    "Pets",
    "Plastic Junk (gewgaws)",
    "Legionaries (guns & ammo)",
    "Religious Pilgrims (texts & symbols)",
    "Compressed Algae Blocks ",
    "Disarmed ordinance",
    "Cars (high end)",
    "Medicine",
    "Cosmetics",
    "Race Horse Reproductive Material",
    "Livestock",
    `${Chance()
      .rpg("2d6")
      .reduce((a, b) => a + b, 0)} Prisoners`,
    "Mobile Black Site (illegal interrogation)",
    "Census Takers",
    "Cadmium",
    "Preserved Fruit",
    "Refugees",
  ]);
  let thing = {};
  switch (face) {
    case 1:
      let num = Chance().rpg("1d10");
      switch (num[0]) {
        case 1:
          thing = {
            name: "COMMAND",
            label: "Single cockpit scarred by gunfire",
          };
          break;
        case 2:
          thing = {
            name: "COMMAND",
            label: "Bridge with working comm station",
          };
          break;
        case 3:
          thing = { name: "LIFE SUPPORT", label: "Functional" };
          break;
        case 4:
          thing = { name: "LIFE SUPPORT", label: "Repairable" };
          break;
        case 5:
          thing = { name: "LIFE SUPPORT", label: "Non-repairable" };
          break;
        case 6:
          thing = {
            name: "LIFE SUPPORT",
            label: `Radiactive (Body Save or ${Chance().rpg("1d10")}) dmg`,
          };
          break;
        case 7:
          thing = {
            name: "COMPUTER",
            label: `Contains an intact map of the current sector`,
          };
          break;
        case 8:
          thing = {
            name: "COMPUTER",
            label: `Contains an intact map of a random sector`,
          };
          break;
        case 9:
          thing = {
            name: "WEAPON",
            label: `${Chance().pickone([
              "Laser Cutter",
              "Autocannon",
              "Railgun",
              "MG Turret",
              "Torpedoes",
              "Rigging Gun",
            ])}`,
          };
          break;
        case 10:
          thing = {
            name: "WEAPON",
            label: `${Chance().pickone([
              "Laser Cutter",
              "Autocannon",
              "Railgun",
              "MG Turret",
              "Torpedoes",
              "Rigging Gun",
            ])}`,
          };
          break;
      }

      break;
    case 2:
      let num1 = Chance().rpg("1d10");
      switch (num1[0]) {
        case 1:
          thing = {
            name: "JUMP DRIVE",
            label: `Intact and salveageable`,
          };
          break;
        case 2:
          thing = { name: "JUMP DRIVE", label: `Completely smelted` };
          break;
        case 3:
          thing = { name: "THRUSTERS", label: `Intact and salveageable` };
          break;
        case 4:
          thing = { name: "THRUSTERS", label: `Completely smelted` };
          break;
        case 5:
          thing = { name: "THRUSTERS", label: `Completely smelted` };
          break;
        case 6:
          thing = {
            name: "ENGINE",
            label: `Intact and salveageable (${Chance().rpg(
              "1d10"
            )} Fuel units)`,
          };
          break;
        case 7:
          thing = {
            name: "ENGINE",
            label: `Intact and salveageable (${Chance().rpg(
              "1d10"
            )} Fuel units)`,
          };
          break;
        case 8:
          thing = {
            name: "ENGINE",
            label: `Completely destroyed and unuseable`,
          };
          break;
        case 9:
          thing = {
            name: "ENGINE",
            label: `Completely destroyed and unuseable`,
          };
          break;
        case 10:
          thing = {
            name: "ENGINE",
            label: `Rigged to explode in ${Chance().rpg("1d10")} minutes`,
          };
          break;
      }
      break;
    case 3:
      let num2 = Chance().rpg("1d10");
      switch (num2[0]) {
        case 1:
          thing = {
            name: "GALLEY",
            label: `${Chance().rpg("1d10")} supply units remaining`,
          };
          break;
        case 2:
          thing = {
            name: "GALLEY",
            label: `${Chance().rpg("1d10")} supply units remaining`,
          };
          break;
        case 3:
          thing = {
            name: "GALLEY",
            label: `Completely barren, booby trapped`,
          };
          break;
        case 4:
          thing = { name: "GALLEY", label: `Roll on CACHE WEAPON` };
          break;
        case 5:
          thing = { name: "BARRACKS", label: `One survivor unconscious` };
          break;
        case 6:
          thing = {
            name: "BARRACKS",
            label: `Roll on Weapon Cache table on page 13`,
          };
          break;
        case 7:
          thing = { name: "BARRACKS", label: `Corpses` };
          break;
        case 8:
          thing = {
            name: "LIVING QUARTERS",
            label: `Roll on Weapon Cache table on page 13`,
          };
          break;
        case 9:
          thing = { name: "LIVING QUARTERS", label: `Booby trapped` };
          break;
        case 10:
          thing = {
            name: "LIVING QUARTERS",
            label: `Stowaway squatting here`,
          };
          break;
      }
      break;
    case 4:
      let num3 = Chance().rpg("1d10");
      switch (num3[0]) {
        case 1:
          thing = {
            name: "MEDBAY",
            label: `Stocked to the gills. Roll twice on Weapon Cache`,
          };
          break;
        case 2:
          thing = { name: "MEDBAY", label: `Completely picked over.` };
          break;
        case 3:
          thing = {
            name: "MEDBAY",
            label: `${Chance()
              .rpg("3d10")
              .reduce((a, b) => a + b, 0)} Pain Pills, ${Chance()
              .rpg("2d10")
              .reduce((a, b) => a + b, 0)} Stimpaks`,
          };
          break;
        case 4:
          thing = {
            name: "SCIENCE LAB",
            label: `Strange creature in containment`,
          };
          break;
        case 5:
          thing = {
            name: "SCIENCE LAB",
            label: `Quarantined. Body Save or ${Chance()
              .rpg("2d10")
              .reduce((a, b) => a + b, 0)} dmg`,
          };
          break;
        case 6:
          thing = {
            name: "CRYO CHAMBER",
            label: `Filled with corpses. Fear Save or 1 stress`,
          };
          break;
        case 7:
          thing = {
            name: "CRYO CHAMBER",
            label: `${Chance()
              .rpg("3d10")
              .reduce((a, b) => a + b, 0)} working cryopods`,
          };
          break;
        case 8:
          thing = {
            name: "CRYO CHAMBER",
            label: `${Chance()
              .rpg("3d10")
              .reduce((a, b) => a + b, 0)} working cryopods`,
          };
          break;
        case 9:
          thing = {
            name: "CRYO CHAMBER",
            label: `${Chance()
              .rpg("1d10")
              .reduce(
                (a, b) => a + b,
                0
              )} Cryopods that seem fine. 25% failure`,
          };
          break;
        case 10:
          thing = { name: "DESTROYED ROOM", label: `...` };
          break;
      }
      break;
    case 5:
      let num4 = Chance().rpg("1d10");
      switch (num4[0]) {
        case 1:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 2:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 3:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 4:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 5:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 6:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 7:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 8:
          thing = {
            name: "CARGO HOLD",
            label: `Completely and totally empty.`,
          };
          break;
        case 9:
          thing = {
            name: "CARGO HOLD",
            label: `Currently being picked by ${Chance()
              .rpg("2d10")
              .reduce((a, b) => a + b, 0)} armed scavengers. ${cargoType}`,
          };
          break;
        case 10:
          thing = {
            name: "CARGO HOLD",
            label: `Currently being picked by ${Chance()
              .rpg("2d10")
              .reduce((a, b) => a + b, 0)} armed scavengers. ${cargoType}`,
          };
          break;
      }
      break;
    case 6:
      let num5 = Chance().rpg("1d10");
      switch (num5[0]) {
        case 1:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 2:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 3:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 4:
          thing = {
            name: "CARGO HOLD",
            label: `Contains ${cargoType}`,
          };
          break;
        case 5:
          thing = {
            name: "ENGINES",
            label: `${Chance().pickone([
              1, 2, 3, 4, 5,
            ])} squatters in Vaccsuits huddling around the warmth of the engines.`,
          };
          break;
        case 6:
          thing = {
            name: "ENGINES",
            label: `${Chance().pickone([
              1, 2, 3, 4, 5,
            ])} squatters in Vaccsuits huddling around the warmth of the engines.`,
          };
          break;
        case 7:
          thing = {
            name: "ENGINES",
            label: `${Chance().pickone([
              1, 2, 3, 4, 5,
            ])} squatters in Vaccsuits huddling around the warmth of the engines.`,
          };
          break;
        case 8:
          thing = {
            name: "ENGINES",
            label: `Strange creature infestation.`,
          };
          break;
        case 9:
          thing = {
            name: "BARRACKS",
            label: `Fight between ${Chance()
              .rpg("2d10")
              .reduce(
                (a, b) => a + b,
                0
              )} scavengers and crewmembers of the ship’s original crew.`,
          };
          break;
        case 10:
          thing = {
            name: "BARRACKS",
            label: `Fight between ${Chance()
              .rpg("2d10")
              .reduce(
                (a, b) => a + b,
                0
              )} scavengers and crewmembers of the ship’s original crew.`,
          };
          break;
      }
      break;
  }
  return thing;
};
