const ATTACKS = {
  HEAVY: {
    chance: {
      base: 10,
      strength: 5
    },
    damageModifier: 1.5
  },
  FAST: {
    chance: { 
     base: 50,
     dexterity: 5
    }, 
    damageModifier: 0.5
  },
  NORMAL: {
    chance: {
     base:  30,
     dexterity: 5,
     strength: 5
    },
    damageModifier: 1
  }
}


class Player {
  constructor (name, strength, dexterity, stamina, hp){
    this.name = name;
    this.attack = 1;
    this.strength = 1;
    this.dexterity = 1;
    this.speed = 5;
    this.stamina = 5;
    this.hp = 10;
  }
  updateStats() {
    DOM.playerStats.name.innerHTML = this.name 
    DOM.playerStats.strength.innerHTML =  `STR = ${this.strength}` 
    DOM.playerStats.stamina.innerHTML = `STA = ${this.stamina}`
    DOM.playerStats.dexterity.innerHTML = `DEX = ${this.dexterity}`
    DOM.playerStats.hp.innerHTML = `HP = ${this.hp}`
    DOM.playerStats.speed.innerHTML = `SP = ${this.speed}`
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
    const playerSpeed = (0.5 * player.speed) + (this.rollDice(10)/10 * player.speed)
    const enemySpeed = (0.5 * enemy.speed) + (this.rollDice(10)/10 * enemy.speed)
    addBattlelog(`Player speed: ${playerSpeed}`)
    addBattlelog(`Enemy speed: ${enemySpeed}`)
    if (playerSpeed > enemySpeed) {
      const hitChance = chance.base + (this.strength * chance.strength + this.dexterity * chance.dexterity)
      this.attackRoll(hitChance, player.attack * damageModifier);
      enemy.hitPlayer(enemy.strength)  
    }
    else {
      enemy.hitPlayer(enemy.strength)
      this.attackRoll(chance, player.attack * damageModifier);
    } 
  }
}

