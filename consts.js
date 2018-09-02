const ATTRIBUTES = {
  STRENGTH:'STRENGTH',
  DEXTERITY:'DEXTERITY',
  SPEED:'SPEED',
  STAMINA:'STAMINA',
}

const ATTACKS = {
  HEAVY: {
    chance: {
      base: 10,
      attributes: {
        [ATTRIBUTES.STRENGTH]: 5
      }
    },
    damageModifier: 1.5
  },
  FAST: {
    chance: { 
      base: 50,
      attributes: {
        [ATTRIBUTES.DEXTERITY]: 5
      }
    }, 
    damageModifier: 0.5
  },
  NORMAL: {
    chance: {
      base:  30,
      attributes: {
        [ATTRIBUTES.DEXTERITY]: 5,
        [ATTRIBUTES.STRENGTH]: 5
      }
    },
    damageModifier: 1
  }
}

const DIRECTIONS = {
  NORTH: {
    text: 'north',
    direction: { x: 0, y: -1}
  },
  WEST: {
    text: 'west',
    direction: { x: -1, y: 0}
  },
  EAST: {
    text: 'east',
    direction: { x: 1, y: 0}
  },
  SOUTH: {
    text: 'south',
    direction: { x: 0, y: 1}
  },
}

const ENEMIES = {
  ORC: {
    name: `Orc`,
    
    strength: 1,
    dexterity: 0,
    stamina: 5,
    hp: 5,
    speed: 2,
    exp: 10
  },
  DEMON: {
    
  }
}
