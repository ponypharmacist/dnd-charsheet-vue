// Races
export const races = {
  dwarf: {
    title: 'Dwarf',
    constitution: 2,
    speed: 25,
    feats: ['darkvision', 'dwarvenResilience', 'stonecutting'],
    profCombat: ['battleaxe', 'handaxe', 'light hammer', 'war hammer'],
    languages: ['Common', 'Dwarvish'],
    profTools: ['Artisan Tools'], // of your choice: smith’s tools, brewer’s supplies, or mason’s tools.
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
    dexterity: 2,
    speed: 0,
    feats: [],
    profCombat: [],
    languages: ['Common'],
    subraces: {
      stoutHalfling: {
        title: 'A Subrace',
        constitution: 1,
        feats: [''],
        profCombat: []
      }
    }
  },
  // Gnomes
  gnome: {
    title: 'Gnome',
    dexterity: 2,
    speed: 0,
    feats: [],
    profCombat: [],
    languages: ['Common'],
    subraces: {
      stoutHalfling: {
        title: 'A Subrace',
        constitution: 1,
        feats: [''],
        profCombat: []
      }
    }
  },
  // Half Elf
  halfElf: {
    title: 'Half Elf',
    dexterity: 2,
    speed: 0,
    feats: [],
    profCombat: [],
    languages: ['Common'],
    subraces: {
      stoutHalfling: {
        title: 'A Subrace',
        constitution: 1,
        feats: [''],
        profCombat: []
      }
    }
  },
  // Half Orc
  halfOrc: {
    title: 'Half Orc',
    dexterity: 2,
    speed: 0,
    feats: [],
    profCombat: [],
    languages: ['Common'],
    subraces: {
      stoutHalfling: {
        title: 'A Subrace',
        constitution: 1,
        feats: [''],
        profCombat: []
      }
    }
  },
  // Tiefling
  tiefling: {
    title: 'Tiefling',
    dexterity: 2,
    speed: 0,
    feats: [],
    profCombat: [],
    languages: ['Common'],
    subraces: {
      stoutHalfling: {
        title: 'A Subrace',
        constitution: 1,
        feats: [''],
        profCombat: []
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
    skillProficiencies: [],
    equipment: []
  },
  criminal: {
    title: 'Criminal',
    skillProficiencies: [],
    equipment: []
  },
  entertainer: {
    title: 'Entertainer',
    skillProficiencies: [],
    equipment: []
  },
  folkHero: {
    title: 'Folk Hero',
    skillProficiencies: [],
    equipment: []
  },
  guildArtisan: {
    title: 'Guild Artisan',
    skillProficiencies: [],
    equipment: []
  },
  hermit: {
    title: 'Hermit',
    skillProficiencies: [],
    equipment: []
  },
  noble: {
    title: 'Noble',
    skillProficiencies: [],
    equipment: []
  },
  outlander: {
    title: 'Outlander',
    skillProficiencies: [],
    equipment: []
  },
  sage: {
    title: 'Sage',
    skillProficiencies: [],
    equipment: []
  },
  sailor: {
    title: 'Sailor',
    skillProficiencies: [],
    equipment: []
  },
  soldier: {
    title: 'Soldier',
    skillProficiencies: [],
    equipment: []
  },
  urchin: {
    title: 'Urchin',
    skillProficiencies: [],
    equipment: []
  }
}

// Classes
export const classes = {
  barbarian: {
    title: 'Barbarian',
    hitDie: 12,
    savingThrowProficiency: ['strength', 'constitution'],
    skillProficiencies: [],
    profCombat: ['light armor', 'medium armor', 'shields', 'simple weapons', 'martial weapons'],
    feats: ['rage', 'unarmoredDefence'] // on level 1
  },
  bard: {
    title: 'Bard',
    feats: []
  },
  cleric: {
    title: 'Cleric',
    feats: []
  },
  druid: {
    title: 'Druid',
    feats: []
  },
  fighter: {
    title: 'Fighter',
    feats: []
  },
  monk: {
    title: 'Monk',
    feats: []
  },
  paladin: {
    title: 'Paladin',
    feats: []
  },
  ranger: {
    title: 'Ranger',
    feats: []
  },
  rogue: {
    title: 'Rogue',
    feats: []
  },
  sorcerer: {
    title: 'Sorcerer',
    feats: []
  },
  warlock: {
    title: 'Warlock',
    feats: []
  },
  wizard: {
    title: 'Wizard',
    feats: []
  }
}

// Feats
export const feats = {
  // Racial feats
  darkvision: {
    title: 'Darkvision',
    description: 'You can see 60 feet in the dark.'
  },
  dwarvenResilience: {
    title: 'Dwarven Resilience',
    description: 'You have poison resistance and advantage on saving throws against poison.'
  },
  stonecutting: {
    title: 'Stonecutting',
    description: 'On History (Int) checks related to the origin of stonework you are considered proficient and add double your proficiency bonus.'
  },
  dwarvenToughness: {
    title: 'Dwarven Toughness',
    description: '+1 maximum hit points per level.'
  },
  keenSenses: {
    title: 'Keen Senses',
    description: 'You have proficiency in the Perception skill.'
  },
  feyAncestry: {
    title: 'Fey Ancestry',
    description: 'Advantage on saving throws vs. charmed, immune to magic sleep.'
  },
  trance: {
    title: 'Trance',
    description: 'Instead of sleeping you meditate for 4 hours.'
  },
  cantripWizard: {
    title: 'Cantrip (wizard)',
    description: 'You know one cantrip from the wizard spell list.'
  },
  maskOfTheWild: {
    title: 'Mask of the Wild',
    description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
  },
  lucky: {
    title: 'Lucky',
    description: 'You can reroll a 1 on d20 (attack, ability, saving throw) and must use the new roll.'
  },
  brave: {
    title: 'Brave',
    description: 'Advantage on saving throws against being frightened.'
  },
  nimbleness: {
    title: 'Halfling Nimbleness',
    description: 'You can move through the space of any creature of larger size (medium+).'
  },
  naturallyStealthy: {
    title: 'Naturally Stealthy',
    description: 'You can attempt to hide behind a creature that one size larger (or more) than you.'
  },
  stoutResilience: {
    title: 'Stout Resilience',
    description: 'You have poison resistance and advantage on saving throws against poison.'
  },
  brave2: {
    title: '',
    description: ''
  },
  // Class feats
  rage: {
    title: 'Rage',
    description: ''
  },
  unarmoredDefence: {
    title: 'Unarmored Defence',
    description: ''
  }
  // Background feats
}

// Dwarf 'artisanTools': Tool Proficiency. You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.
