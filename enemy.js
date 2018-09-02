class Enemy {
  constructor ({name, strength, dexterity, stamina, hp, speed}) {
    this.name = name;
    this.attributes = {
      [ATTRIBUTES.STRENGTH]: strength,
      [ATTRIBUTES.DEXTERITY]: dexterity,
      [ATTRIBUTES.SPEED]: speed,
      [ATTRIBUTES.STAMINA]: stamina,
    }
    this.attack = 1;
    this.hp = hp;
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
  hitPlayer() {
    player.applyDamage(this.attributes[ATTRIBUTES.STRENGTH]);
  }
  takeDamage(damage) {
    addBattlelog(`${this.name} is taking ${damage} damage`)
    this.hp -= damage;
    this.updateStats();
    if (this.hp <= 0) {
      appendText(`Enemy defeated! You are badass!!!`)
      this.dismiss()
      enemy = {};
    }
  }
}