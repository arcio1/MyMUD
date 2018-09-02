class Enemy {
  constructor ({name, strength, dexterity, stamina, hp, speed}) {
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.stamina = stamina;
    this.dexterity = dexterity;
    this.hp = hp;
  }
  updateStats() {
    DOM.enemyStats.name.innerHTML = this.name 
    DOM.enemyStats.strength.innerHTML =  `STR = ${this.strength}` 
    DOM.enemyStats.stamina.innerHTML = `STA = ${this.stamina}`
    DOM.enemyStats.dexterity.innerHTML = `DEX = ${this.dexterity}`
    DOM.enemyStats.hp.innerHTML = `HP = ${this.hp}`
    DOM.enemyStats.speed.innerHTML = `SP = ${this.speed}`
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
    player.applyDamage(this.strength);
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