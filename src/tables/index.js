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

// Backgrounds
export const backgrounds = {
  acolyte: {
    title: 'Acolyte',
    skills: ['insight', 'religion'],
    feats: ['shelterOfTheFaithful'],
    tools: [],
    equipment: ['A holy symbol', 'a prayer book', 'vestments', '5 sticks of incense'],
    money: 15,
    extraLanguage: 2
  },
  charlatan: {
    title: 'Charlatan',
    skills: [],
    feats: [],
    tools: [],
    equipment: [],
    money: 1
  },
  criminal: {
    title: 'Criminal/Spy',
    skills: ['deception', 'stealth'],
    feats: ['criminalContact'],
    tools: ['One type of gaming set, thieves’ tools'],
    equipment: ['A crowbar', 'a set of dark common clothes including a hood'],
    money: 15
  },
  entertainer: {
    title: 'Entertainer',
    skills: [],
    feats: [],
    tools: [],
    equipment: [],
    money: 1
  },
  folkHero: {
    title: 'Folk Hero',
    skills: ['animalHandling', 'survival'],
    feats: ['rusticHospitality'],
    tools: ['A set of artisan’s tools (one of your choice)'],
    equipment: ['a shovel', 'an iron pot', 'a set of common clothes'],
    money: 10
  },
  guildArtisan: {
    title: 'Guild Artisan',
    skills: [],
    feats: [],
    tools: [],
    equipment: [],
    money: 1
  },
  hermit: {
    title: 'Hermit',
    skills: [],
    feats: [],
    tools: [],
    equipment: [],
    money: 1
  },
  noble: {
    title: 'Noble',
    skills: ['history', 'persuasion'],
    feats: ['positionOfPrivilege'],
    tools: ['One type of gaming set'],
    equipment: ['a set of fine clothes', 'a signet ring', 'a scroll of pedigree'],
    money: 25,
    extraLanguage: 1
  },
  outlander: {
    title: 'Outlander',
    skills: [],
    feats: [],
    tools: [],
    equipment: [],
    money: 1
  },
  sage: {
    title: 'Sage',
    skills: ['arcana', 'history'],
    feats: ['researcher'],
    tools: [],
    equipment: ['A bottle of black ink', 'a quill', 'a small knife', 'a letter from a dead colleague posing a question you have not yet been able to answer', 'a set of common clothes'],
    money: 10,
    extraLanguage: 2
  },
  sailor: {
    title: 'Sailor',
    skills: [],
    feats: [],
    tools: [],
    equipment: [],
    money: 1
  },
  soldier: {
    title: 'Soldier',
    skills: ['athletics', 'intimidation'],
    feats: ['militaryRank'],
    tools: ['One type of gaming set, vehicles (land)'],
    equipment: ['An insignia of rank', 'a trophy taken from a fallen enemy', 'a set of bone dice or deck of cards', 'a set of common clothes'],
    money: 10
  },
  urchin: {
    title: 'Urchin',
    skills: [],
    feats: [],
    tools: [],
    equipment: [],
    money: 1
  }
}

// Classes
// ToDo: leveling system, spells, feats and iterations for every level
export const classes = {
  barbarian: {
    title: 'Barbarian',
    hitDie: 12,
    savingThrowProficiency: ['strength', 'constitution'],
    feats: ['rage', 'unarmoredDefence'],
    profCombat: ['light armor', 'medium armor', 'shields', 'simple weapons', 'martial weapons'],
    tools: [],
    skillsChoice: ['animalHandling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
    skillsAllowed: 2,
    wealth: 0
  },
  bard: {
    title: 'Bard',
    hitDie: 8,
    savingThrowProficiency: ['dexterity', 'charisma'],
    feats: ['spellcasting', 'bardicInspiration'],
    profCombat: ['light armor', 'simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'],
    tools: ['Three musical instruments of your choice'],
    skillpoints: 3, // any 3, yes
    wealth: 0
  },
  cleric: {
    title: 'Cleric',
    hitDie: 8,
    savingThrowProficiency: ['wisdom', 'charisma'],
    feats: ['spellcasting', 'divineDomain'],
    profCombat: ['light armor', 'medium armor', 'shields', 'simple weapons'],
    tools: [],
    skillsChoice: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
    skillsAllowed: 2,
    wealth: 0
  },
  druid: {
    title: 'Druid',
    hitDie: 10,
    savingThrowProficiency: [],
    feats: [],
    profCombat: [],
    tools: [],
    skillsChoice: [],
    skillsAllowed: 2,
    wealth: 0
  },
  fighter: {
    title: 'Fighter',
    hitDie: 10,
    savingThrowProficiency: [],
    feats: [],
    profCombat: [],
    tools: [],
    skillsChoice: [],
    skillsAllowed: 2,
    wealth: 0
  },
  monk: {
    title: 'Monk',
    hitDie: 10,
    savingThrowProficiency: [],
    feats: [],
    profCombat: [],
    tools: [],
    skillsChoice: [],
    skillsAllowed: 2,
    wealth: 0
  },
  paladin: {
    title: 'Paladin',
    hitDie: 10,
    savingThrowProficiency: [],
    feats: [],
    profCombat: [],
    tools: [],
    skillsChoice: [],
    skillsAllowed: 2,
    wealth: 0
  },
  ranger: {
    title: 'Ranger',
    hitDie: 10,
    savingThrowProficiency: [],
    feats: [],
    profCombat: [],
    tools: [],
    skillsChoice: [],
    skillsAllowed: 2,
    wealth: 0
  },
  rogue: {
    title: 'Rogue',
    hitDie: 10,
    savingThrowProficiency: [],
    feats: [],
    profCombat: [],
    tools: [],
    skillsChoice: [],
    skillsAllowed: 2,
    wealth: 0
  },
  sorcerer: {
    title: 'Sorcerer',
    hitDie: 10,
    savingThrowProficiency: [],
    feats: [],
    profCombat: [],
    tools: [],
    skillsChoice: [],
    skillsAllowed: 2,
    wealth: 0
  },
  warlock: {
    title: 'Warlock',
    hitDie: 10,
    savingThrowProficiency: [],
    feats: [],
    profCombat: [],
    tools: [],
    skillsChoice: [],
    skillsAllowed: 2,
    wealth: 0
  },
  wizard: {
    title: 'Wizard',
    hitDie: 10,
    savingThrowProficiency: [],
    feats: [],
    profCombat: [],
    tools: [],
    skillsChoice: [],
    skillsAllowed: 2,
    wealth: 0
  }
}

// Feats
export const feats = {
  // Racial feats
  darkvision: {
    title: 'Darkvision',
    description: 'You can see 60 feet in the dark.'
  },
  darkvisionSuperior: {
    title: 'Superior Darkvision',
    description: 'Your darkvision radius is 120 feet.'
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
  breathWeapon: {
    title: 'Breath Weapon',
    description: 'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.'
  },
  acidBreath: {
    title: 'Acid Breath',
    description: '5 by 30 ft. line acid breath. Dex save.'
  },
  acidResistance: {
    title: 'Acid Resistance',
    description: 'You take 50% less damage from acid.'
  },
  poisonBreath: {
    title: 'Poison Breath',
    description: '15 ft. cone poison breath. Cex save.'
  },
  poisonResistance: {
    title: 'Poison Resistance',
    description: 'You take 50% less damage from poison.'
  },
  lightningBreath: {
    title: 'Lightning Breath',
    description: '5 by 30 ft. line lightning breath. Dex save.'
  },
  lightningResistance: {
    title: 'Lightning Resistance',
    description: 'You take 50% less damage from lightning.'
  },
  fireBreath: {
    title: 'Fire Breath',
    description: '15 ft. cone fire breath. Dex save.'
  },
  fireResistance: {
    title: 'Fire Resistance',
    description: 'You take 50% less damage from fire.'
  },
  coldBreath: {
    title: 'Acid Breath',
    description: '15 ft. cone cold breath. Dex save.'
  },
  coldResistance: {
    title: 'Acid Resistance',
    description: 'You take 50% less damage from cold.'
  },
  gnomeCunning: {
    title: 'Gnome Cunning',
    description: 'You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.'
  },
  artificersLore: {
    title: 'Artificers Lore',
    description: 'You can add twice your proficiency bonus to Intelligence (History) check related to magic items, alchemical objects, or technological devices.'
  },
  tinker: {
    title: 'Tinker',
    description: 'You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). Options: Clockwork toy, fire starter, music box.'
  },
  stoneCamouflage: {
    title: 'Stone Camouflage',
    description: 'You have advantage on Dexterity (stealth) checks to hide in rocky terrain.'
  },
  abilityScore2: {
    title: '+2 ability points',
    description: 'Increase two ability scores of your choice by 1.'
  },
  relentlessEndurance: {
    title: 'Relentless Endurance',
    description: 'Once per long rest. When you are reduced to 0 HP but not killed outright, you can drop to 1 HP instead.'
  },
  savageAttacks: {
    title: 'Savage Attacks',
    description: 'When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.'
  },
  infernalLegacy: {
    title: 'Infernal Legacy',
    description: 'You know the thaumaturgy cantrip. At lvl. 3, you can cast the hellish rebuke spell as a 2nd-level spell once per long rest. At lvl. 5, you can cast the darkness spell once per long rest. Charisma is your spellcasting ability for these spells.'
  },
  // Class feats
  rage: {
    title: 'Rage',
    description: 'You can enter a rage for 1 minute as a bonus action. If you don\'t wear heavy armor, you get: advantage on Str checks and saves. Bonus (+2 at lvl 1) to the damage roll. Resistance to  bludgeoning, piercing, and slashing damage. You also can\'t cast spells or concentrate on them while raging. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.'
  },
  unarmoredDefence: {
    title: 'Unarmored Defence',
    description: 'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.'
  },
  spellcasting: {
    title: 'Spellcasting',
    description: 'ToDo: decr.'
  },
  bardicInspiration: {
    title: 'Bardic Inspiration',
    description: 'As a bonus action one creature of your choice gains Inspiration d6 die. It lasts 10 minutes, allows to add 1d6 to ability check, attack roll or saving throw it makes.'
  },
  divineDomain: {
    title: 'Divine Domain',
    description: ''
  },
  criminalContact: {
    title: 'Criminal Contact',
    description: 'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.'
  },
  rusticHospitality: {
    title: 'Rustic Hospitality',
    description: 'Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.'
  },
  positionOfPrivilege: {
    title: 'Position of Privilege',
    description: 'Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.'
  },
  researcher: {
    title: 'Researcher',
    description: 'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.'
  },
  ambusher: {
    title: 'Ambusher',
    description: 'You have advantage on attack rolls against any creature you have surprised.'
  },
  mimicry: {
    title: 'Mimicry',
    description: 'You can mimic any sounds you have heard, including voices. This talent extends to handwriting. A creature that hears your sounds can tell they are imitations with a successful Wisdom (Insight) check, and a creature that sees your forgery can tell it is a forgery with a successful Intelligence (Investigation) check. The DCs of these checks are each equal to 8 + your Charisma modifier + your proficiency bonus.'
  },
  militaryRank: {
    title: 'Military Rank',
    description: 'You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.'
  },
  shelterOfTheFaithful: {
    title: 'Shelter of the Faithful',
    description: 'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.'
  },
  spellcasting3: {
    title: '',
    description: ''
  }
  // Background feats
}

// Armors
// If armors str requirement is not met, wearer is slowed by 10 feet
export const armors = {
  acolyte: {}
}

// Weapons
export const weapons = {
  acolyte: {}
}
