// Armors
// If armors str requirement is not met, wearer is slowed by 10 feet
export const armors = {
  noArmor: {
    title: 'No Armor',
    type: 'light',
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
