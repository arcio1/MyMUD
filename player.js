const attackStatsModifier = (attackAttributes, characterAttributes) => {
  let totalModifier = 0;
  const keys = Object.keys(characterAttributes)
  keys.forEach(attr => {
    if(attackAttributes[attr]) {
      totalModifier += characterAttributes[attr] * attackAttributes[attr]
    }
  })
  return totalModifier
}


class Player {
  constructor (name, strength, dexterity, stamina, hp){
    this.name = name;
    this.attributes = {
      [ATTRIBUTES.STRENGTH]: 1,
      [ATTRIBUTES.DEXTERITY]: 1,
      [ATTRIBUTES.SPEED]: 5,
      [ATTRIBUTES.STAMINA]: 5,
    }
    this.attack = 1;
    this.hp = 10;
  }
  updateStats() {
    DOM.playerStats.name.innerHTML = this.name 
    DOM.playerStats.strength.innerHTML =  `STR = ${this.attributes[ATTRIBUTES.STRENGTH]}` 
    DOM.playerStats.stamina.innerHTML = `STA = ${this.attributes[ATTRIBUTES.STAMINA]}`
    DOM.playerStats.dexterity.innerHTML = `DEX = ${this.attributes[ATTRIBUTES.DEXTERITY]}`
    DOM.playerStats.hp.innerHTML = `HP = ${this.hp}`
    DOM.playerStats.speed.innerHTML = `SP = ${this.attributes[ATTRIBUTES.SPEED]}`
  }
  applyDamage(damage) {
    addBattlelog(`Taking ${damage} damage`)
    this.hp -= damage;
    this.updateStats();
    if (this.hp <= 0) {
      appendText(`Game over bitch!!!`)
    }
  }

  rollDice(faces){
   return Math.floor((Math.random() * faces) + 1)
  }

  attackRoll(chance, damage) {
    const roll = this.rollDice(100)
    const successChance = chance;
    const successfulRoll = roll <= successChance;
    addBattlelog(`Roll Dice: ${roll}:${successChance}`)
    if (successfulRoll) {
      enemy.takeDamage(damage)
    }    
    else {
      addBattlelog(`You've Miss`)
    }
  }

  attackEnemy(type){
    const { chance, damageModifier } = type;
    const speed = this.attributes[ATTRIBUTES.SPEED];
    const playerSpeed = (0.5 * speed) + (this.rollDice(10)/10 * speed)
    const enemySpeed = (0.5 * enemy.attributes[ATTRIBUTES.SPEED]) + (this.rollDice(10)/10 * enemy.attributes[ATTRIBUTES.SPEED])
    addBattlelog(`Player speed: ${playerSpeed}`)
    addBattlelog(`Enemy speed: ${enemySpeed}`)
    if (playerSpeed > enemySpeed) {
      const characterModifier = attackStatsModifier(chance.attributes, this.attributes)
      const hitChance = chance.base + characterModifier
      this.attackRoll(hitChance, this.attack * damageModifier);
      enemy.hitPlayer(enemy[ATTRIBUTES.STRENGTH])  
    }
    else {
      const characterModifier = attackStatsModifier(chance.attributes, this.attributes)
      const hitChance = chance.base + characterModifier
      enemy.hitPlayer(enemy[ATTRIBUTES.STRENGTH])
      this.attackRoll(hitChance, this.attack * damageModifier);
    } 
  }
}

