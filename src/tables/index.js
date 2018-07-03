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
    skills: ['deception', 'sleightOfHand'],
    feats: ['falseIdentity'],
    tools: ['Disguise Kit, Forgery Kit'],
    equipment: ['A set of fine clothes', 'a disguise kit', 'tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke)'],
    money: 15
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
    skills: ['acrobatics', 'performance'],
    feats: ['byPopularDemand'],
    tools: ['Disguise kit, one type of musical instrument'],
    equipment: ['A musical instrument (one of your choice)', 'the favor of an admirer (love letter, lock of hair, or trinket)', 'a costume'],
    money: 15
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
    skills: ['insight', 'persuasion'],
    feats: ['guildMembership'],
    tools: ['One type of artisan’s tools'],
    equipment: ['A set of artisan’s tools (one of your choice)', 'a letter of introduction from your guild', 'a set of traveler’s clothes'],
    money: 15,
    extraLanguage: 1
  },
  hermit: {
    title: 'Hermit',
    skills: ['medicine', 'religion'],
    feats: ['discovery'],
    tools: ['Herbalism kit'],
    equipment: ['A scroll case stuffed full of notes from your studies or prayers', 'a winter blanket', 'a set of common clothes', 'a herbalism kit'],
    money: 5,
    extraLanguage: 1
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
    skills: ['athletics', 'survival'],
    feats: ['wanderer'],
    tools: ['One type of musical instrument'],
    equipment: ['A staff', 'a hunting trap', 'a trophy from an animal you killed', 'a set of traveler’s clothes'],
    money: 10,
    extraLanguage: 1
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
    skills: ['athletics', 'perception'],
    feats: [],
    tools: ['Navigator’s tools, vehicles (water)'],
    equipment: ['A belaying pin (club)', '50 feet of silk rope', 'a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5)', 'a set of common clothes'],
    money: 10
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
    skills: ['stealth', 'sleightOfHand'],
    feats: ['citySecrets'],
    tools: ['Disguise kit, thieves tools'],
    equipment: ['A small knife', 'a map of the city you grew up in', 'a pet mouse', 'a token to remember your parents by', 'a set of common clothes'],
    money: 10
  }
}

// Classes
// ToDo: leveling system, spells, feats and iterations for every level
export const classes = {
  barbarian: {
    title: 'Barbarian',
    hitDie: 12,
    feats: ['rage', 'unarmoredDefence'],
    profCombat: ['light armor', 'medium armor', 'shields', 'simple weapons', 'martial weapons'],
    tools: [],
    skills: ['strength', 'constitution'],
    skillsChoice: ['animalHandling', 'athletics', 'intimidation', 'nature', 'perception', 'survival'],
    skillsAllowed: 2,
    equipment: ['an explorer’s pack', '4 javelins'],
    wealth: 0
  },
  bard: {
    title: 'Bard',
    hitDie: 8,
    feats: ['spellcasting', 'bardicInspiration'],
    profCombat: ['light armor', 'simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'],
    skills: ['dexterity', 'charisma'],
    tools: ['Three musical instruments of your choice'],
    skillpoints: 3, // any 3, yes
    equipment: ['(a diplomat’s pack) or (an entertainer’s pack)', '(a lute) or (any other musical instrument)', 'leather armor', 'a dagger'],
    wealth: 0
  },
  cleric: {
    title: 'Cleric',
    hitDie: 8,
    feats: ['spellcasting', 'divineDomain'],
    profCombat: ['light armor', 'medium armor', 'shields', 'simple weapons'],
    tools: [],
    skills: ['wisdom', 'charisma'],
    skillsChoice: ['history', 'insight', 'medicine', 'persuasion', 'religion'],
    skillsAllowed: 2,
    equipment: ['(a priest’s pack) or (an explorer’s pack)', 'a shield', 'a holy symbol'],
    wealth: 0
  },
  druid: {
    title: 'Druid',
    hitDie: 8,
    feats: ['spellcasting', 'druidic'],
    profCombat: ['light armor', 'medium armor', 'shields', 'clubs', 'daggers', 'darts', 'javelins', 'maces', 'quarterstaffs', 'scimitars', 'sickles', 'slings', 'spears'],
    tools: ['Herbalism kit'],
    skills: ['intelligence', 'wisdom'],
    skillsChoice: ['arcana', 'animalHandling', 'insight', 'medicine', 'nature', 'perception', 'religion', 'survival'],
    skillsAllowed: 2,
    equipment: ['wooden shield', 'leather armor', 'an explorer’s pack', 'a druidic focus', '(druids will not wear armor or use shields made of metal)'],
    wealth: 0
  },
  fighter: {
    title: 'Fighter',
    hitDie: 10,
    feats: ['fightingStyle', 'secondWind'],
    profCombat: ['light armor', 'medium armor', 'heavy armor', 'shields', 'martial weapons'],
    tools: [],
    skills: ['strength', 'constitution'],
    skillsChoice: ['acrobatics', 'animalHandling', 'athletics', 'history', 'insight', 'intimidation', 'perception', 'survival'],
    skillsAllowed: 2,
    equipment: ['(chain mail) or (leather armor, longbow, and 20 arrows)', '(a dungeoneer’s pack) or (an explorer’s pack)'],
    wealth: 0
  },
  monk: {
    title: 'Monk',
    hitDie: 8,
    feats: ['unarmoredDefence', 'martialArts'],
    profCombat: ['simple weapons', 'shortswords'],
    tools: ['one type of artisan’s tools or one musical instrument'],
    skills: ['strength', 'dexterity'],
    skillsChoice: ['acrobatics', 'athletics', 'history', 'insight', 'religion', 'stealth'],
    skillsAllowed: 2,
    equipment: ['(a dungeoneer’s pack) or (an explorer’s pack)', '10 darts'],
    wealth: 0
  },
  paladin: {
    title: 'Paladin',
    hitDie: 10,
    feats: ['divineSense', 'layOnHands'],
    profCombat: ['light armor', 'medium armor', 'heavy armor', 'shields', 'martial weapons'],
    tools: [],
    skills: ['wisdom', 'charisma'],
    skillsChoice: ['athletics', 'insight', 'intimidation', 'medicine', 'persuasion', 'religion'],
    skillsAllowed: 2,
    equipment: ['(a priest’s pack) or (an explorer’s pack)', 'chain mail', 'a holy symbol'],
    wealth: 0
  },
  ranger: {
    title: 'Ranger',
    hitDie: 10,
    feats: ['favoredEnemy', 'naturalExplorer'],
    profCombat: ['light armor', 'medium armor', 'shields', 'martial weapons'],
    tools: [],
    skills: ['strength', 'dexterity'],
    skillsChoice: ['animalHandling', 'athletics', 'insight', 'investigation', 'nature', 'perception', 'stealth', 'survival'],
    skillsAllowed: 3,
    equipment: ['(scale mail) or (leather armor)', '(a dungeoneer’s pack) or (an explorer’s pack)', 'a longbow', 'a quiver of 20 arrows'],
    wealth: 0
  },
  rogue: {
    title: 'Rogue',
    hitDie: 8,
    feats: ['expertise', 'sneakAttack', 'thievesCant'],
    profCombat: ['light armor', 'simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'],
    tools: ['Thieves’ tools'],
    skills: ['dexterity', 'intelligence'],
    skillsChoice: ['acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleightOfHand', 'stealth'],
    skillsAllowed: 4,
    equipment: ['(a burglar’s pack), (a dungeoneer’s pack), or (an explorer’s pack)', 'leather armor', 'two daggers', 'thieves’ tools'],
    wealth: 0
  },
  sorcerer: {
    title: 'Sorcerer',
    hitDie: 6,
    feats: ['spellcasting', 'sorcerousOrigin'],
    profCombat: ['daggers', 'darts', 'slings', 'quarterstaffs', 'light crossbows'],
    tools: [],
    skills: ['constitution', 'charisma'],
    skillsChoice: ['arcana', 'deception', 'insight', 'intimidation', 'persuasion', 'religion'],
    skillsAllowed: 2,
    equipment: ['(a dungeoneer’s pack) or (an explorer’s pack)', '2 daggers'],
    wealth: 0
  },
  warlock: {
    title: 'Warlock',
    hitDie: 8,
    feats: ['otherworldlyPatron', 'pactMagic'],
    profCombat: ['light armor', 'simple weapons'],
    tools: [],
    skills: ['wisdom', 'charisma'],
    skillsChoice: ['arcana', 'deception', 'history', 'intimidation', 'investigation', 'nature', 'religion'],
    skillsAllowed: 2,
    equipment: ['(a scholar’s pack) or (a dungeoneer’s pack)', 'leather armor', 'any simple weapon', '2 daggers'],
    wealth: 0
  },
  wizard: {
    title: 'Wizard',
    hitDie: 6,
    feats: ['spellcasting', 'arcaneRecovery'],
    profCombat: ['daggers', 'darts', 'slings', 'quarterstaffs', 'light crossbows'],
    tools: [],
    skills: ['intelligence', 'wisdom'],
    skillsChoice: ['arcana', 'history', 'insight', 'investigation', 'medicine', 'religion'],
    skillsAllowed: 2,
    equipment: ['spellbook', '(a scholar’s pack) or (an explorer’s pack)'],
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
    description: 'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your (Constitution for barbarians, Wisdom for monks) modifier. You can use a shield and still gain this benefit.'
  },
  spellcasting: {
    title: 'Spellcasting',
    description: '(Google for full description)'
  },
  bardicInspiration: {
    title: 'Bardic Inspiration',
    description: 'As a bonus action one creature of your choice gains Inspiration d6 die. It lasts 10 minutes, allows to add 1d6 to ability check, attack roll or saving throw it makes.'
  },
  divineDomain: {
    title: 'Divine Domain',
    description: '(Google for full description)'
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
  falseIdentity: {
    title: 'False Identity',
    description: 'You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy. '
  },
  byPopularDemand: {
    title: 'By Popular Demand',
    description: 'You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble’s court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.'
  },
  guildMembership: {
    title: 'Guild Membership',
    description: 'As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild’s coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild’s good graces.'
  },
  discovery: {
    title: 'Discovery',
    description: 'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who consigned you to exile, and hence the reason for your return to society. Work with your DM to determine the details of your discovery and its impact on the campaign.'
  },
  wanderer: {
    title: 'Wanderer',
    description: 'You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.'
  },
  citySecrets: {
    title: 'City Secrets',
    description: 'You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.'
  },
  druidic: {
    title: 'Druidic',
    description: 'You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message’s presence with a successful DC 15 Wisdom (Perception) check but can’t decipher it without magic.'
  },
  fightingStyle: {
    title: 'Fighting Style',
    description: '(Google for full description) You adopt a particular style of fighting as your specialty. Choose one of the following options. You can’t take a Fighting Style option more than once, even if you later get to choose again. (Archery, Defence, Dueling, Great Weapon Fighting, Protection, Two Weapon Fighting). See players handbook for more details.'
  },
  secondWind: {
    title: 'Second Wind',
    description: 'On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. You must finish a short or long rest before you can use it again.'
  },
  martialArts: {
    title: 'Martial Arts',
    description: '(Google for full description) At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.'
  },
  divineSense: {
    title: 'Divine Sense',
    description: 'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell. You can use this feature a number of times equal to 1 + your Charisma modifier per long rest.'
  },
  layOnHands: {
    title: 'Lay On Hands',
    description: 'As an action you can touch a creature and restore a number of its HP. You have a pool of healing power that equals your paladin level x 5. Pool restores after long rest. Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.'
  },
  favoredEnemy: {
    title: 'Favored Enemy',
    description: '(Google for full description) You have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. You also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.'
  },
  naturalExplorer: {
    title: 'Natural Explorer',
    description: '(Google for full description)'
  },
  expertise: {
    title: 'Expertise',
    description: 'Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.'
  },
  sneakAttack: {
    title: 'Sneak Attack',
    description: 'Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll.'
  },
  thievesCant: {
    title: 'Thieves’ Cant',
    description: 'During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.'
  },
  sorcerousOrigin: {
    title: 'Sorcerous Origin',
    description: 'Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline, detailed at the end of the class description, or one from another source.'
  },
  otherworldlyPatron: {
    title: 'Otherworldly Patron',
    description: 'At 1st level, you have struck a bargain with an otherworldly being of your choice: (google class description). It grants you feats.'
  },
  pactMagic: {
    title: 'Pact Magic',
    description: 'Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See Spells Rules for the general rules of spellcasting and the Spells Listing for the warlock spell list.'
  },
  arcaneRecovery: {
    title: 'Arcane Recovery',
    description: 'You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.'
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
  noArmor: {
    title: 'No Armor',
    type: 'none',
    stealth: true,
    ac: 10
  },
  padded: {
    title: 'Padded Armor',
    ac: 11,
    type: 'light',
    stealth: false, // disadvantage
    cost: 5
  },
  leather: {
    title: 'Leather Armor',
    ac: 11,
    type: 'light',
    stealth: true,
    cost: 10
  },
  studded: {
    title: 'Studded Leather Armor',
    ac: 12,
    type: 'light',
    stealth: true,
    cost: 45
  },
  hide: {
    title: 'Hide Armor',
    ac: 12,
    type: 'medium',
    stealth: true,
    cost: 10
  },
  chainShirt: {
    title: 'Chain Shirt',
    ac: 13,
    type: 'medium',
    stealth: true,
    cost: 50
  },
  scaleMail: {
    title: 'Scale Mail',
    ac: 14,
    type: 'medium',
    stealth: false,
    cost: 50
  },
  breastplate: {
    title: 'Breastplate',
    ac: 14,
    type: 'medium',
    stealth: true,
    cost: 400
  },
  halfPlate: {
    title: 'Half Plate Armor',
    ac: 15,
    type: 'medium',
    stealth: false,
    cost: 750
  },
  ringMail: {
    title: 'Ring Mail Armor',
    ac: 14,
    type: 'heavy',
    stealth: false,
    cost: 30
  },
  chainMail: {
    title: 'Chain Mail Armor',
    ac: 16,
    type: 'heavy',
    stealth: false,
    cost: 75
  },
  splint: {
    title: 'Splint Armor',
    ac: 17,
    type: 'heavy',
    stealth: false,
    cost: 200
  },
  plate: {
    title: 'Plate Armor',
    ac: 18,
    type: 'heavy',
    stealth: false,
    cost: 1500
  }
}

// Weapons
// one can silver a weapon for 100 gp
export const weaponsM = {
  deadGoblin: {
    title: 'Dead Goblin',
    damage: '1d4',
    damageType: 'bludgeoning',
    category: 'simple',
    modifiers: ['finesse', 'heavy', 'light', 'reach', 'twohanded', 'thrown'],
    range: '20/60'
    // finesse uses larger modifier (str or dex), light can be used double
    // throwind uses strength if there's no finesse modifier
    // light weapon, You don’t add your ability modifier to the damage of the bonus attack
  },
  unarmed: {
    title: 'Unarmed Strike',
    damage: '1d1',
    damageType: 'bludgeoning',
    category: 'simple',
    modifiers: []
  },
  club: {
    title: 'Club',
    damage: '1d4',
    damageType: 'bludgeoning',
    category: 'simple',
    modifiers: ['light']
  },
  dagger: {
    title: 'Dagger',
    damage: '1d4',
    damageType: 'piercing',
    category: 'simple',
    modifiers: ['finesse', 'light', 'thrown'],
    range: '20/60'
  },
  greatclub: {
    title: 'Greatclub',
    damage: '1d8',
    damageType: 'bludgeoning',
    category: 'simple',
    modifiers: ['twohanded']
  },
  handaxe: {
    title: 'Handaxe',
    damage: '1d6',
    damageType: 'slashing',
    category: 'simple',
    modifiers: ['light', 'thrown'],
    range: '20/60'
  },
  javelin: {
    title: 'Javelin',
    damage: '1d6',
    damageType: 'piercing',
    category: 'simple',
    modifiers: ['thrown'],
    range: '30/120'
  },
  lightHammer: {
    title: 'Light Hammer',
    damage: '1d4',
    damageType: 'bludgeoning',
    category: 'simple',
    modifiers: ['light', 'thrown'],
    range: '20/60'
  },
  mace: {
    title: 'Mace',
    damage: '1d6',
    damageType: 'bludgeoning',
    category: 'simple',
    modifiers: []
  },
  quarterstaffs: {
    title: 'Quarterstaff',
    damage: '1d6',
    damageType: 'bludgeoning',
    category: 'simple',
    modifiers: ['versatile'] // hits for 1d8 when twohanded
  },
  sickle: {
    title: 'Sickle',
    damage: '1d4',
    damageType: 'slashing',
    category: 'simple',
    modifiers: ['light']
  },
  spear: {
    title: 'Spear',
    damage: '1d6',
    damageType: 'piercing',
    category: 'simple',
    modifiers: ['thrown', 'versatile'],
    range: '20/60'
  },
  battleaxe: {
    title: 'Battleaxe',
    damage: '1d8',
    damageType: 'slashing',
    category: 'martial',
    modifiers: ['versatile'] // for 1d10 when twohanded
  },
  flail: {
    title: 'Flail',
    damage: '1d8',
    damageType: 'bludgeoning',
    category: 'martial',
    modifiers: []
  },
  glaive: {
    title: 'Glaive',
    damage: '1d10',
    damageType: 'slashing',
    category: 'martial',
    modifiers: ['heavy', 'reach', 'twohanded']
  },
  greataxe: {
    title: 'Greataxe',
    damage: '1d12',
    damageType: 'slashing',
    category: 'martial',
    modifiers: ['hevay', 'twohanded']
  },
  greatsword: {
    title: 'Greatsword',
    damage: '2d6',
    damageType: 'slashing',
    category: 'martial',
    modifiers: ['heavy', 'twohanded']
  },
  halberd: {
    title: 'Halberd',
    damage: '1d10',
    damageType: 'slashing',
    category: 'martial',
    modifiers: ['heavy', 'reach', 'twohanded']
  },
  lance: {
    title: 'Lance',
    damage: '1d12',
    damageType: 'piercing',
    category: 'martial',
    modifiers: ['reach', 'special'] // for mounted combat
  },
  longsword: {
    title: 'Longsword',
    damage: '1d8',
    damageType: 'slashing',
    category: 'martial',
    modifiers: ['versatile']
  },
  maul: {
    title: 'Maul',
    damage: '2d6',
    damageType: 'bludgeoning',
    category: 'martial',
    modifiers: ['heavy', 'twohanded']
  },
  morningstar: {
    title: 'Morningstar',
    damage: '1d8',
    damageType: 'piercing',
    category: 'martial',
    modifiers: []
  },
  pike: {
    title: 'Pike',
    damage: '1d10',
    damageType: 'piercing',
    category: 'martial',
    modifiers: ['heavy', 'reach', 'twohanded']
  },
  rapier: {
    title: 'Rapier',
    damage: '1d8',
    damageType: 'piercing',
    category: 'martial',
    modifiers: ['finesse']
  },
  scimitar: {
    title: 'Scimitar',
    damage: '1d6',
    damageType: 'slashing',
    category: 'martial',
    modifiers: ['finesse', 'light']
  },
  shortsword: {
    title: 'Shortsword',
    damage: '1d6',
    damageType: 'piercing',
    category: 'martial',
    modifiers: ['finesse', 'light']
  },
  trident: {
    title: 'Trident',
    damage: '1d6',
    damageType: 'piercing',
    category: 'martial',
    modifiers: ['thrown', 'versatile'],
    range: '20/60'
  },
  warPick: {
    title: 'War pick',
    damage: '1d8',
    damageType: 'piercing',
    category: 'martial',
    modifiers: []
  },
  warhammer: {
    title: 'Warhammer',
    damage: '1d8',
    damageType: 'bludgeoning',
    category: 'martial',
    modifiers: ['versatile']
  },
  whip: {
    title: 'Whip',
    damage: '1d4',
    damageType: 'slashing',
    category: 'martial',
    modifiers: ['finesse', 'reach']
  }
}

export const weaponsR = {
  dart: {
    title: 'Dart',
    damage: '1d4',
    damageType: 'piercing',
    category: 'simple',
    modifiers: ['finesse'],
    range: '20/60'
  },
  shortbow: {
    title: 'Shortbow',
    damage: '1d6',
    damageType: 'piercing',
    category: 'simple',
    modifiers: ['twohanded'],
    range: '80/320'
  },
  sling: {
    title: 'Sling',
    damage: '1d4',
    damageType: 'bludgeoning',
    category: 'simple',
    modifiers: [],
    range: '30/120'
  },
  blowgun: {
    title: 'Blowgun',
    damage: '',
    damageType: 'piercing',
    category: 'martial',
    modifiers: [],
    range: '0/0'
  },
  crossbowLight: {
    title: 'Crossbow, light',
    damage: '',
    damageType: 'piercing',
    category: 'simple',
    modifiers: ['twohanded'],
    range: '80/320'
  },
  crossbowHand: {
    title: 'Crossbow, hand',
    damage: '',
    damageType: 'piercing',
    category: 'martial',
    modifiers: [],
    range: '0/0'
  },
  crossbowHeavy: {
    title: 'Crossbow, heavy',
    damage: '',
    damageType: 'piercing',
    category: 'martial',
    modifiers: [],
    range: '0/0'
  },
  longbow: {
    title: 'Longbow',
    damage: '',
    damageType: 'piercing',
    category: 'martial',
    modifiers: [],
    range: '0/0'
  }
}
