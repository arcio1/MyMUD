class Enemy {
  constructor ({name, strength, dexterity, stamina, hp, speed, attacks = ATTACKS, exp}) {
    this.name = name;
    this.attributes = {
      [ATTRIBUTES.STRENGTH]: strength,
      [ATTRIBUTES.DEXTERITY]: dexterity,
      [ATTRIBUTES.SPEED]: speed,
      [ATTRIBUTES.STAMINA]: stamina,
    }
    this.attack = 1;
    this.attacks = attacks;
    this.hp = 1;
    this.exp = exp
  }
  updateStats() {
    DOM.enemyStats.name.innerHTML = this.name 
    DOM.enemyStats.strength.innerHTML =  `STR = ${this.attributes[ATTRIBUTES.STRENGTH]}` 
    DOM.enemyStats.stamina.innerHTML = `STA = ${this.attributes[ATTRIBUTES.STAMINA]}`
    DOM.enemyStats.dexterity.innerHTML = `DEX = ${this.attributes[ATTRIBUTES.DEXTERITY]}`
    DOM.enemyStats.hp.innerHTML = `HP = ${this.hp}`
    DOM.enemyStats.speed.innerHTML = `SP = ${this.attributes[ATTRIBUTES.SPEED]}`
  }
  dismiss() {
    DOM.enemyStats.name.innerHTML = '' 
    DOM.enemyStats.strength.innerHTML ='' 
    DOM.enemyStats.stamina.innerHTML =''
    DOM.enemyStats.dexterity.innerHTML =''
    DOM.enemyStats.hp.innerHTML =''
    DOM.enemyStats.speed.innerHTML =''
  }
  speak() {
    addBattlelog(`${this.name}: GRRRR!!!`);
    this.updateStats();
  }

  rollDice(faces){
    return Math.floor((Math.random() * faces) + 1)
   }
 

  hitPlayer() {
    const attackType = this.attacks.NORMAL
    const roll = this.rollDice(100)
    const characterModifier = attackStatsModifier(attackType.chance.attributes, this.attributes)
    const successChance = attackType.chance.base + characterModifier
    if (roll <= successChance) {
      player.applyDamage(this.attributes[ATTRIBUTES.STRENGTH]);
   }
   else {
     addBattlelog(`Enemy Missed`)
   } 
  }

  takeDamage(damage) {
    addBattlelog(`${this.name} is taking ${damage} damage`)
    this.hp -= damage;
    this.updateStats();
    if (this.hp <= 0) {
      appendText(`Enemy defeated! You are badass!!!`)
      player.addExp(ENEMIES.ORC.exp)
      this.dismiss()
      enemy = {};
    }
  }
}