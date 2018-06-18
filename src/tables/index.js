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
  acolyte: {
    title: 'Acolyte',
    skillProficiencies: ['insight', 'religion'],
    extraLanguage: 2,
    equipment: ['A holy symbol', 'a prayer book', 'vestments', '5 sticks of incense'],
    money: 15
  },
  charlatan: {
    title: 'Charlatan',
    skillProficiencies: [''],
    equipment: ['']
  },
  criminal: {
    title: 'Criminal',
    skillProficiencies: [''],
    equipment: ['']
  },
  entertainer: {
    title: 'Entertainer',
    skillProficiencies: [''],
    equipment: ['']
  },
  folkHero: {
    title: 'Folk Hero',
    skillProficiencies: [''],
    equipment: ['']
  },
  guildArtisan: {
    title: 'Guild Artisan',
    skillProficiencies: [''],
    equipment: ['']
  },
  hermit: {
    title: 'Hermit',
    skillProficiencies: [''],
    equipment: ['']
  },
  noble: {
    title: 'Noble',
    skillProficiencies: [''],
    equipment: ['']
  },
  outlander: {
    title: 'Outlander',
    skillProficiencies: [''],
    equipment: ['']
  },
  sage: {
    title: 'Sage',
    skillProficiencies: [''],
    equipment: ['']
  },
  sailor: {
    title: 'Sailor',
    skillProficiencies: [''],
    equipment: ['']
  },
  soldier: {
    title: 'Soldier',
    skillProficiencies: [''],
    equipment: ['']
  },
  urchin: {
    title: 'Urchin',
    skillProficiencies: [''],
    equipment: ['']
  }
}

// Classes
export const classes = {
  barbarian: {
    title: 'Barbarian',
    hitDie: 12,
    savingThrowProficiency: ['strength', 'constitution'],
    proficiencies: [''],
    feats: ['rage', 'unarmoredDefence'] // on level 1
  },
  bard: {
    title: 'Bard'
  },
  cleric: {
    title: 'Cleric'
  },
  druid: {
    title: 'Druid'
  },
  fighter: {
    title: 'Fighter'
  },
  monk: {
    title: 'Monk'
  },
  paladin: {
    title: 'Paladin'
  },
  ranger: {
    title: 'Ranger'
  },
  rogue: {
    title: 'Rogue'
  },
  sorcerer: {
    title: 'Sorcerer'
  },
  warlock: {
    title: 'Warlock'
  },
  wizard: {
    title: 'Wizard'
  }
}

// Feats
export const feats = {
}

// Dwarf 'artisanTools': Tool Proficiency. You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.
