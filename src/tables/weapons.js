// Weapons
// one can silver a weapon for 100 gp
export const weapons = {
  deadGoblin: {
    title: 'Dead Goblin',
    damage: '1d4',
    damageType: 'bludgeoning',
    category: 'simple',
    modifiers: ['heavy', 'light', 'reach', 'twohanded', 'thrown']
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
  },
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
    modifiers: ['twohanded', 'finesse'],
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
    damage: '1',
    damageType: 'piercing',
    category: 'martial',
    modifiers: ['finesse'],
    range: '25/100'
  },
  crossbowLight: {
    title: 'Crossbow, light',
    damage: '1d8',
    damageType: 'piercing',
    category: 'simple',
    modifiers: ['twohanded', 'finesse'],
    range: '80/320'
  },
  crossbowHand: {
    title: 'Crossbow, hand',
    damage: '1d6',
    damageType: 'piercing',
    category: 'martial',
    modifiers: ['light', 'finesse'],
    range: '30/120'
  },
  crossbowHeavy: {
    title: 'Crossbow, heavy',
    damage: '1d10',
    damageType: 'piercing',
    category: 'martial',
    modifiers: ['heavy', 'twohanded', 'finesse'],
    range: '100/400'
  },
  longbow: {
    title: 'Longbow',
    damage: '1d8',
    damageType: 'piercing',
    category: 'martial',
    modifiers: ['heavy', 'twohanded', 'finesse'],
    range: '150/600'
  }
}
