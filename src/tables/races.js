// Races
export const races = {
  dwarf: {
    title: 'Dwarf',
    constitution: 2,
    speed: 25,
    feats: ['darkvision', 'dwarvenResilience', 'stonecutting'],
    profCombat: ['battleaxe', 'handaxe', 'light hammer', 'war hammer'],
    languages: ['Common', 'Dwarvish'],
    tools: ['Artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools'],
    subraces: {
      hillDwarf: {
        title: 'Hill Dwarf',
        wisdom: 1,
        feats: ['dwarvenToughness'],
        profCombat: []
      },
      mountainDwarf: {
        title: 'Mountain Dwarf',
        strength: 2,
        feats: [],
        profCombat: ['light armor', 'medium armor']
      }
    }
  },
  // Elves
  elf: {
    title: 'Elf',
    dexterity: 2,
    speed: 30,
    feats: ['darkvision', 'keenSenses', 'feyAncestry', 'trance'],
    profCombat: [],
    languages: ['Common', 'Elvish'],
    skills: ['perception'],
    subraces: {
      highElf: {
        title: 'High Elf',
        intelligence: 1,
        feats: ['cantripWizard'], // you know one cantrip from wizard spell list
        profCombat: ['longsword', 'shortsword', 'shortbow', 'longbow'],
        extraLanguage: 1
      },
      woodElf: {
        title: 'Wood Elf',
        wisdom: 1,
        feats: ['maskOfTheWild'],
        profCombat: ['longsword', 'shortsword', 'shortbow', 'longbow'],
        speed: 35
      },
      drow: {
        title: 'Dark Elf',
        charisma: 1,
        feats: [],
        profCombat: []
      }
    }
  },
  // Halflings
  halfling: {
    title: 'Halfling',
    dexterity: 2,
    speed: 25,
    feats: ['lucky', 'brave', 'nimbleness'], // reroll 1's on d20 once !!!
    profCombat: [],
    languages: ['Common', 'Halfling'],
    subraces: {
      lightfootHalfling: {
        title: 'Lightfoot Halfling',
        charisma: 1,
        feats: ['naturallyStealthy'],
        profCombat: []
      },
      stoutHalfling: {
        title: 'Stout Halfling',
        constitution: 1,
        feats: ['stoutResilience'],
        profCombat: []
      }
    }
  },
  // Humans
  human: {
    title: 'Human',
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
    speed: 30,
    extraLanguage: 1,
    feats: [],
    profCombat: [],
    languages: ['Common']
  },
  // Dragonborn
  dragonborn: {
    title: 'Dragonborn',
    strength: 2,
    charisma: 1,
    speed: 30,
    feats: ['breathWeapon'],
    profCombat: [],
    languages: ['Common', 'Draconic'],
    subraces: {
      black: {
        title: 'Black Dragon Ancestry',
        feats: ['acidBreath', 'acidResistance'],
        profCombat: []
      },
      copper: {
        title: 'Copper Dragon Ancestry',
        feats: ['acidBreath', 'acidResistance'],
        profCombat: []
      },
      green: {
        title: 'Green Dragon Ancestry',
        feats: ['poisonBreath', 'poisonResistance'],
        profCombat: []
      },
      blue: {
        title: 'Blue Dragon Ancestry',
        feats: ['lightningdBreath', 'lightningResistance'],
        profCombat: []
      },
      bronze: {
        title: 'Bronze Dragon Ancestry',
        feats: ['lightningBreath', 'lightningResistance'],
        profCombat: []
      },
      brass: {
        title: 'Brass Dragon Ancestry',
        feats: ['fireBreath', 'fireResistance'],
        profCombat: []
      },
      gold: {
        title: 'Gold Dragon Ancestry',
        feats: ['fireBreath', 'fireResistance'],
        profCombat: []
      },
      red: {
        title: 'Red Dragon Ancestry',
        feats: ['fireBreath', 'fireResistance'],
        profCombat: []
      },
      silver: {
        title: 'Silver Dragon Ancestry',
        feats: ['coldBreath', 'coldResistance'],
        profCombat: []
      },
      white: {
        title: 'White Dragon Ancestry',
        feats: ['coldBreath', 'coldResistance'],
        profCombat: []
      }
    }
  },
  // Gnomes
  gnome: {
    title: 'Gnome',
    intelligence: 2,
    speed: 25,
    feats: ['darkvision', 'gnomeCunning'],
    profCombat: [],
    languages: ['Common', 'Gnomish'],
    subraces: {
      rockGnome: {
        title: 'Rock Gnome',
        constitution: 1,
        feats: ['artificersLore', 'tinker'],
        profCombat: []
      },
      deepGnome: {
        title: 'Deep Gnome',
        dexterity: 1,
        feats: ['darkvisionSuperior', 'stoneCamouflage'],
        profCombat: [],
        languages: ['Undercommon']
      }
    }
  },
  // Half Elf
  halfElf: {
    title: 'Half Elf',
    charisma: 2,
    speed: 30,
    feats: ['abilityScore2', 'darkvision', 'feyAncestry'],
    profCombat: [],
    languages: ['Common', 'Elvish'],
    skillpoints: 2,
    extraLanguage: 1
  },
  // Half Orc
  halfOrc: {
    title: 'Half Orc',
    strength: 2,
    constitution: 1,
    speed: 30,
    feats: ['darkvision', 'relentlessEndurance', 'savageAttacks'],
    profCombat: [],
    skills: ['intimidation'],
    languages: ['Common', 'Orc']
  },
  // Tiefling
  tiefling: {
    title: 'Tiefling',
    intelligence: 1,
    charisma: 2,
    speed: 30,
    feats: ['darkvision', 'fireResistance', 'infernalLegacy'],
    profCombat: [],
    languages: ['Common', 'Infernal']
  },
  // Kenku
  kenku: {
    title: 'Kenku',
    dexterity: 2,
    charisma: 1,
    speed: 30,
    feats: ['ambusher', 'mimicry'],
    profCombat: [],
    skills: ['deception'],
    languages: ['Common', 'Auran']
  }
}
