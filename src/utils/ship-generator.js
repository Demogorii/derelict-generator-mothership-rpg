/*{
    `ships`:[
        {`id`: 0, `ship`:'', `status`:'',salvage:'',ruination:'',weird:'' }
    ]
}
*/
import Chance from "chance";

export const ShipGenerator = (num) => {
  let ship;

  const name = `${Chance().pickone([
    `iago`,
    `hacate`,
    `oberon`,
    `whitehall`,
    `duncan`,
    `banquo`,
    `winter`,
    `marlow`,
    `tempest`,
    `faust`,
  ])} ${Chance().pickone([
    `valerfor`,
    `ophanim`,
    `marax`,
    `mariner`,
    `labolas`,
    `astaroth`,
    `cherubim`,
    `tyrant`,
    `balaam`,
    `murmur`,
  ])} ${Chance().pickone([
    `echo`,
    `alpha`,
    `omega`,
    `king`,
    `beggar`,
    `delta`,
    `epsilon`,
    `jibril`,
    `bravo`,
    `tango`,
  ])}`;

  const ruination = `${Chance().pickone([
    `Virus`,
    `Combat`,
    `Raided by Pirates`,
    `Hyperspace Malfunction`,
    `Abandoned Ship`,
    `Insane A.I`,
    `Mutiny`,
    `Crash: Other Ship`,
    `Crash: Space Debris`,
    `Crash: Jump Drive Miscalculation`,
    `Engine Failure`,
    `Cannibalism`,
    `Nerve Gas`,
    `Escape Pod Never Returned`,
    `Betrayal/Backstabbing`,
    `Succumbed to Nightmares`,
    `Hatch Opened, No Air`,
    `Cargo Created Mishap`,
    `Starvation`,
    `Part of a Conspiracy`,
    `Thrusters Slagged`,
    `Weapons System Malfunction`,
    `Cryosleep Never Disengaged`,
    `Complex Series of Events`,
    `Suicide Pact`,
    `Parasite Infestation`,
    `Environmental Systems Failure`,
    `Uncontrollable Fire`,
    `Failed Fraud Attempt`,
    `Void Worshipping`,
    `Bizarre Love Triangle`,
    `Fight Spiraled Out of Control`,
    `Chainsaw Rampage*`,
    `Drug Addled Debauchery`,
    `Fatal Depressurization`,
    `Nightmares Ending in Heart Attack`,
    `Mob Hit`,
    `Crew Members Vanished`,
    `Prank Taken Too Far`,
    `William Tell Trick`,
  ])}`;

  const weird = `${Chance().pickone([
    `Haunted`,
    `Inhabited by Alien Life`,
    `Terraformed by Strange Creatures`,
    `Crew Dressed for Costume Party`,
    `Crew All Identical`,
    `Crew was preparing Theatrical Performance`,
    `Morbid Artwork`,
    `Pet Hoarders`,
    `Erotic Sculptures`,
    `Communist Regalia`,
    `Company Uniform`,
    `Cult Members`,
    `Extensive Journals Kept`,
    `Strange Health Obsession`,
    `Unnervingly Clean`,
    `Android was Poisoning Captain`,
    `Ancient Ship`,
    `Temporal Distortions`,
    `Failed Utopia`,
    `Crew Weighed and Measured Weekly`,
    `Extensive Body Modification`,
    `Isolated Physics Anomalies`,
    `Sexual Deviants`,
    `Religious Extremists`,
    `Transhumanist Android Worshippers`,
    `Anti-Android Conspiracists`,
    `Nauseating Stench`,
    `Everything is Jury-Rigged`,
    `Crew Taking Video Through the Catastrophe`,
    `Body Horror`,
    `Scooby-Doo Crew`,
    `Interior Coated in Flesh, Doors are Membranes`,
    `Whispering Echoes Always a Room Ahead`,
    `Dolls in Macabre Tableaux`,
    `Dead Crew: Exploded Heads`,
    `Elaborately Posed Corpses (Hooks & Chains)`,
    `Flickering Lights and Frenzied Screams`,
    `Ship Rearranges Itself Frequently`,
    `Ship Has Infinite Depth`,
    `Fruit Basket, Greeting Card Inexplicably Addressed to Crew`,
  ])}`;

  switch (true) {
    case num === 0:
      ship = {
        id: 0,
        name,
        shipTyp: `Mining Frigate`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d100`)
          .reduce((a, b) => a + b, 0)} Scrap & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 12,
        shipLevels: 2,
      };
      break;
    case num >= 1 && num <= 9:
      ship = {
        id: 2,
        name,
        shipTyp: `Mining Frigate`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d100`)
          .reduce((a, b) => a + b, 0)} Scrap & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 12,
        shipLevels: 2,
      };
      break;
    case num >= 10 && num < 20:
      ship = {
        id: 3,
        name,
        shipTyp: `Mining Frigate`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d100`)
          .reduce((a, b) => a + b, 0)} Scrap & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 12,
        shipLevels: 2,
      };
      break;
    case num >= 20 && num < 25:
      ship = {
        id: 4,
        name,
        shipTyp: `Mining Frigate`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d100`)
          .reduce((a, b) => a + b, 0)} Scrap & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 12,
        shipLevels: 2,
      };
      break;
    case num >= 25 && num < 30:
      ship = {
        id: 5,
        name,
        shipTyp: `Mining Frigate`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d100`)
          .reduce((a, b) => a + b, 0)} Scrap & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 12,
        shipLevels: 2,
      };
      break;
    case num >= 30 && num < 35:
      ship = {
        id: 6,
        name,
        shipTyp: `Mining Frigate`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d100`)
          .reduce((a, b) => a + b, 0)} Scrap & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 12,
        shipLevels: 2,
      };
      break;
    case num >= 35 && num < 40:
      ship = {
        id: 7,
        name,
        shipTyp: `Freighter`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d100`)
          .reduce((a, b) => a + b, 0)} Scrap & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 17,
        shipLevels: 2,
      };
      break;
    case num >= 40 && num < 45:
      ship = {
        id: 8,
        name,
        shipTyp: `Freighter`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d100`)
          .reduce((a, b) => a + b, 0)} Scrap`,
        ruination,
        weird,
        shipdices: 17,
        shipLevels: 2,
      };
      break;
    case num >= 45 && num < 50:
      ship = {
        id: 8,
        name,
        shipTyp: `Freighter`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d100`)
          .reduce((a, b) => a + b, 0)} Scrap & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 17,
        shipLevels: 2,
      };
      break;
    case num >= 50 && num < 55:
      ship = {
        id: 9,
        name,
        shipTyp: `Freighter`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Fuel Units & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 17,
        shipLevels: 2,
      };
      break;
    case num >= 55 && num < 58:
      ship = {
        id: 10,
        name,
        shipTyp: `Freighter`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Fuel Units & ${Chance()
          .rpg(`4d10`)
          .reduce((a, b) => a + b, 0)} Ore`,
        ruination,
        weird,
        shipdices: 17,
        shipLevels: 2,
      };
      break;
    case num >= 58 && num < 61:
      ship = {
        id: 11,
        name,
        shipTyp: `Shuttle`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Fuel Units & ${Chance()
          .rpg(`3d10`)
          .reduce((a, b) => a + b, 0)} Metal`,
        ruination,
        weird,
        shipdices: 7,
        shipLevels: 1,
      };
      break;
    case num >= 61 && num < 64:
      ship = {
        id: 12,
        name,
        shipTyp: `Shuttle`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Fuel Units & ${Chance()
          .rpg(`3d10`)
          .reduce((a, b) => a + b, 0)} Metal`,
        ruination,
        weird,
        shipdices: 7,
        shipLevels: 1,
      };
      break;
    case num >= 64 && num < 67:
      ship = {
        id: 13,
        name,
        shipTyp: `Shuttle`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Fuel Units & ${Chance()
          .rpg(`3d10`)
          .reduce((a, b) => a + b, 0)} Metal`,
        ruination,
        weird,
        shipdices: 7,
        shipLevels: 1,
      };
      break;
    case num >= 67 && num < 70:
      ship = {
        id: 14,
        name,
        shipTyp: `Shuttle`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Fuel Units & ${Chance()
          .rpg(`3d10`)
          .reduce((a, b) => a + b, 0)} Metal`,
        ruination,
        weird,
        shipdices: 7,
        shipLevels: 1,
      };
      break;
    case num >= 70 && num < 72:
      ship = {
        id: 15,
        name,
        shipTyp: `Shuttle`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Fuel Units & ${Chance()
          .rpg(`3d10`)
          .reduce((a, b) => a + b, 0)} Metal`,
        ruination,
        weird,
        shipdices: 7,
        shipLevels: 1,
      };
      break;
    case num >= 72 && num < 74:
      ship = {
        id: 16,
        name,
        shipTyp: `Courier`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Fuel Units & ${Chance()
          .rpg(`3d10`)
          .reduce((a, b) => a + b, 0)} Metal`,
        ruination,
        weird,
        shipdices: 4,
        shipLevels: 1,
      };
      break;
    case num >= 74 && num < 76:
      ship = {
        id: 17,
        name,
        shipTyp: `Courier`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Fuel Units & ${Chance()
          .rpg(`3d10`)
          .reduce((a, b) => a + b, 0)} Metal`,
        ruination,
        weird,
        shipdices: 4,
        shipLevels: 1,
      };
      break;
    case num >= 76 && num < 78:
      ship = {
        id: 18,
        name,
        shipTyp: `Courier`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Galley Stock & ${Chance()
          .rpg(`1d100`)
          .reduce((a, b) => a + b, 0)} Trade Units of Random Cargo`,
        ruination,
        weird,
        shipdices: 4,
        shipLevels: 1,
      };
      break;
    case num >= 78 && num < 80:
      ship = {
        id: 19,
        name,
        shipTyp: `Courier`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Galley Stock & ${Chance()
          .rpg(`1d100`)
          .reduce((a, b) => a + b, 0)} Trade Units of Random Cargo`,
        ruination,
        weird,
        shipdices: 4,
        shipLevels: 1,
      };
      break;
    case num === 80:
      ship = {
        id: 20,
        name,
        shipTyp: `Courier`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Engine, Thrusters, Jump Drive non-functioning`,
        salvage: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Galley Stock & ${Chance()
          .rpg(`1d100`)
          .reduce((a, b) => a + b, 0)} Trade Units of Random Cargo`,
        ruination,
        weird,
        shipdices: 4,
        shipLevels: 1,
      };
      break;
    case num === 81:
      ship = {
        id: 21,
        name,
        shipTyp: `Research Vessel`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Galley Stock & ${Chance()
          .rpg(`1d100`)
          .reduce((a, b) => a + b, 0)} Trade Units of Random Cargo`,
        ruination,
        weird,
        shipdices: 8,
        shipLevels: 1,
      };
      break;
    case num === 82:
      ship = {
        id: 22,
        name,
        shipTyp: `Research Vessel`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Cryopods & ${Chance()
          .rpg(`1d100`)
          .reduce((a, b) => a + b, 0)} Trade Units of Random Cargo`,
        ruination,
        weird,
        shipdices: 8,
        shipLevels: 1,
      };
      break;
    case num === 83:
      ship = {
        id: 23,
        name,
        shipTyp: `Research Vessel`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Cryopods & ${Chance()
          .rpg(`1d100`)
          .reduce((a, b) => a + b, 0)} Trade Units of Random Cargo`,
        ruination,
        weird,
        shipdices: 8,
        shipLevels: 1,
      };
      break;
    case num === 84:
      ship = {
        id: 24,
        name,
        shipTyp: `Research Vessel`,
        status: `Uninhabitable`,
        survivors: `No Survivors`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Cryopods & ${Chance()
          .rpg(`1d100`)
          .reduce((a, b) => a + b, 0)} Trade Units of Random Cargo`,
        ruination,
        weird,
        shipdices: 8,
        shipLevels: 1,
      };
      break;
    case num === 85:
      ship = {
        id: 25,
        name,
        shipTyp: `Blockade Runner`,
        status: `Habitable (Non-Functioning)`,
        survivors: `No Survivors`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Cryopods & ${Chance()
          .rpg(`1d100`)
          .reduce((a, b) => a + b, 0)} Trade Units of Random Cargo`,
        ruination,
        weird,
        shipdices: 15,
        shipLevels: 1,
      };
      break;
    case num === 86:
      ship = {
        id: 26,
        name,
        shipTyp: `Blockade Runner`,
        status: `Habitable (Non-Functioning)`,
        survivors: `No Survivors`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `Medbay & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Precious Metal`,
        ruination,
        weird,
        shipdices: 15,
        shipLevels: 1,
      };
      break;
    case num === 87:
      ship = {
        id: 27,
        name,
        shipTyp: `Blockade Runner`,
        status: `Habitable (Non-Functioning)`,
        survivors: `No Survivors`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `Medbay & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Precious Metal`,
        ruination,
        weird,
        shipdices: 15,
        shipLevels: 1,
      };
      break;
    case num === 88:
      ship = {
        id: 28,
        name,
        shipTyp: `Blockade Runner`,
        status: `Habitable (Non-Functioning)`,
        survivors: `No Survivors`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `Medbay & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Precious Metal`,
        ruination,
        weird,
        shipdices: 15,
        shipLevels: 1,
      };
      break;
    case num === 89:
      ship = {
        id: 29,
        name,
        shipTyp: `Cutter`,
        status: `Habitable (Non-Functioning)`,
        survivors: `No Survivors`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `Weapon & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Precious Metal`,
        ruination,
        weird,
        shipdices: 10,
        shipLevels: 2,
      };
      break;
    case num === 90:
      ship = {
        id: 30,
        name,
        shipTyp: `Cutter`,
        status: `Habitable (Non-Functioning)`,
        survivors: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Survivors (In Cryosleep)`,
        engines: `Sable Engine, Thrusters, Jump Drive`,
        salvage: `Weapon & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Precious Metal`,
        ruination,
        weird,
        shipdices: 10,
        shipLevels: 2,
      };
      break;
    case num === 91:
      ship = {
        id: 31,
        name,
        shipTyp: `Cutter`,
        status: `Habitable (Non-Functioning)`,
        survivors: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Survivors (In Cryosleep)`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `Weapon & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Precious Metal`,
        ruination,
        weird,
        shipdices: 10,
        shipLevels: 2,
      };
      break;
    case num === 92:
      ship = {
        id: 32,
        name,
        shipTyp: `Troopship`,
        status: `Habitable (Non-Functioning)`,
        survivors: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Survivors (In Cryosleep)`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `Computer & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Precious Metal`,
        ruination,
        weird,
        shipdices: 15,
        shipLevels: 2,
      };
      break;
    case num === 93:
      ship = {
        id: 33,
        name,
        shipTyp: `Troopship`,
        status: `Habitable (Non-Functioning)`,
        survivors: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Survivors (In Cryosleep)`,
        engines: `Stable Engine, Thrusters, Jump Drive`,
        salvage: `Computer & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Contraband`,
        ruination,
        weird,
        shipdices: 15,
        shipLevels: 2,
      };
      break;
    case num === 94:
      ship = {
        id: 34,
        name,
        shipTyp: `Troopship`,
        status: `Habitable (Non-Functioning)`,
        survivors: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Survivors (In Cryosleep)`,
        engines: `Unstable Core`,
        salvage: `Computer & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Contraband`,
        ruination,
        weird,
        shipdices: 15,
        shipLevels: 2,
      };
      break;
    case num === 95:
      ship = {
        id: 35,
        name,
        shipTyp: `Troopship`,
        status: `Habitable (Functioning)`,
        survivors: `${Chance()
          .rpg(`2d10`)
          .reduce((a, b) => a + b, 0)} Survivors (In Cryosleep)`,
        engines: `Unstable Core`,
        salvage: `Computer & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Contraband`,
        ruination,
        weird,
        shipdices: 15,
        shipLevels: 2,
      };
      break;
    case num === 96:
      ship = {
        id: 36,
        name,
        shipTyp: `Colony Ship`,
        status: `Habitable (Functioning)`,
        survivors: `Survivors`,
        engines: `Unstable Core`,
        salvage: `Jump Drive & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Contraband`,
        ruination,
        weird,
        shipdices: 20,
        shipLevels: 3,
      };
      break;
    case num === 97:
      ship = {
        id: 37,
        name,
        shipTyp: `Colony Ship`,
        status: `Habitable (Functioning)`,
        survivors: `Survivors`,
        engines: `Unstable Core`,
        salvage: `Jump Drive & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Contraband`,
        ruination,
        weird,
        shipdices: 20,
        shipLevels: 3,
      };
      break;
    case num === 98:
      ship = {
        id: 38,
        name,
        shipTyp: `Colony Ship`,
        status: `Habitable (Functioning)`,
        survivors: `Survivors`,
        engines: `Unstable Core`,
        salvage: `Jump Drive & ${Chance()
          .rpg(`1d10`)
          .reduce((a, b) => a + b, 0)} Contraband`,
        ruination,
        weird,
        shipdices: 20,
        shipLevels: 3,
      };
      break;
    case num === 99:
      ship = {
        id: 39,
        name: `USCSS Colossus`,
        shipTyp: `Colony Ship`,
        status: `Habitable (Functioning)`,
        survivors: `Survivors`,
        engines: `Warp Cooldown...`,
        salvage: `None`,
        ruination,
        weird,
        shipdices: 20,
        shipLevels: 3,
      };
      break;
  }

  return ship;
};
