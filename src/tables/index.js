// Races
export const races = {
  dwarf: {
    title: 'Dwarf',
    abilityScore: ['con+2'],
    speed: 25,
    feats: ['darkvision', 'dwarvenResilience', 'stonecutting'],
    languages: ['Common', 'Dwarvish'],
    proficiencies: ['battleaxe', 'handaxe', 'lightHammer', 'warhammer', 'artisanTools'],
    subraces: {
      hillDwarf: {
        title: 'Hill Dwarf',
        abilityScore: ['wis+1'],
        feats: ['dwarvenToughness'] // +1 to hp every level
      },
      mountainDwarf: {
        title: 'Mountain Dwarf',
        abilityScore: ['str+2'],
        proficiencies: ['lightArmor', 'mediumArmor']
      }
    }
  },
  // Elves
  elf: {
    title: 'Elf',
    abilityScore: ['dex+2'],
    speed: 30,
    feats: ['darkvision', 'keenSenses', 'feyAncestry', 'trance'],
    languages: ['Common', 'Elvish'],
    subraces: {
      highElf: {
        title: 'High Elf',
        abilityScore: ['int+1'],
        proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
        feats: ['cantripWizard'], // you know one cantrip from wizard spell list
        extraLanguage: 1
      },
      woodElf: {
        title: 'Wood Elf',
        abilityScore: ['wis+1'],
        proficiencies: ['longsword', 'shortsword', 'shortbow', 'longbow'],
        feats: ['maskOfTheWild'],
        speed: 35
      },
      drow: {
        title: 'Dark Elf',
        abilityScore: ['cha+1']
      }
    }
  },
  // Halflings
  halfling: {
    title: 'Halfling',
    abilityScore: ['+'],
    speed: 0,
    feats: [''],
    languages: ['Common', ''],
    subraces: {
      hammerDwarf: {
        title: 'Hammer Dwarf'
      }
    }
  },
  // Humans
  human: {
    title: 'Human',
    abilityScore: ['+'],
    speed: 0,
    feats: [''],
    languages: ['Common', ''],
    subraces: {
      hammerDwarf: {
        title: 'Hammer Dwarf'
      }
    }
  },
  // Dragonborn
  dragonborn: {
    title: 'Dragonborn',
    abilityScore: ['+'],
    speed: 0,
    feats: [''],
    languages: ['Common', ''],
    subraces: {
      hammerDwarf: {
        title: 'Hammer Dwarf'
      }
    }
  },
  // Gnomes
  gnome: {
    title: 'Gnome',
    abilityScore: ['+'],
    speed: 0,
    feats: [''],
    languages: ['Common', ''],
    subraces: {
      hammerDwarf: {
        title: 'Hammer Dwarf'
      }
    }
  },
  // Half Elf
  halfElf: {
    title: 'Half Elf',
    abilityScore: ['+'],
    speed: 0,
    feats: [''],
    languages: ['Common', ''],
    subraces: {
      hammerDwarf: {
        title: 'Hammer Dwarf'
      }
    }
  },
  // Half Orc
  halfOrc: {
    title: 'Half Orc',
    abilityScore: ['+'],
    speed: 0,
    feats: [''],
    languages: ['Common', ''],
    subraces: {
      hammerDwarf: {
        title: 'Hammer Dwarf'
      }
    }
  },
  // Tiefling
  tiefling: {
    title: 'Tiefling',
    abilityScore: ['+'],
    speed: 0,
    feats: [''],
    languages: ['Common', ''],
    subraces: {
      hammerDwarf: {
        title: 'Hammer Dwarf'
      }
    }
  }
}

// Backgrounds
export const backgrounds = {
  acolyte: {},
  charlatan: {},
  criminal: {},
  entertainer: {},
  folkHero: {},
  guildArtisan: {},
  hermit: {},
  noble: {},
  outlander: {},
  sage: {},
  sailor: {},
  soldier: {},
  urchin: {}
}

// Classes
export const classes = {
  barbarian: {
    hitDie: 12,
    savingThrowProficiency: ['strength', 'constitution'],
    proficiencies: ['']
  },
  bard: {},
  cleric: {},
  druid: {},
  fighter: {},
  monk: {},
  paladin: {},
  ranger: {},
  rogue: {},
  sorcerer: {},
  warlock: {},
  wizard: {}
}

// Feats
export const feats = {
}

// Dwarf 'artisanTools': Tool Proficiency. You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.
