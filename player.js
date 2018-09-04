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

const EQUIPMENT = {
  POTION: {
    name: `potion`,
    onUse: 'applyDamage',
    useArguments: -10
  }
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
    this.progress = {
      exp: 0,
      level: 1,
      nextLevelExp: 20,
      statsPoint: 0,
    }
    this.equipment = [{name:'wyjebany miecz'}, {name:'super wyjebany miecz'}, {name:'ULTRA super wyjebany miecz'}, EQUIPMENT.POTION]
    this.AddExp = this.addExp.bind(this);
    this.AddItemToEquipment = this.addItemToEquipment.bind(this)
  }
  
  addExp(exp){
   this.progress.exp += exp
   if (this.progress.exp >= this.progress.nextLevelExp) {
    this.levelup()
   }
   this.updateStats();
  }

  addItemToEquipment(item) {
    this.equipment.push(item)
    this.updateStats();
  }

  levelup(){
      this.progress.level++
      this.progress.nextLevelExp += 20;
      this.progress.statsPoint++
  }

  statsIncrease(userInput){
    const increseAttribute = (attr) => {
      this.attributes[attr]++;
      this.progress.statsPoint--
    }
    switch (userInput.toLowerCase()) {
      case 'str+': increseAttribute(ATTRIBUTES.STRENGTH); break
      case 'dex+': increseAttribute(ATTRIBUTES.DEXTERITY); break
      case 'sta+': increseAttribute(ATTRIBUTES.STAMINA); break
      case 'sp+': increseAttribute(ATTRIBUTES.SPEED); break
    }
    player.updateStats();
  }

  useItem(name){
    const item = this.equipment.find(i => i.name === name)
    if(item.onUse) {
      this[item.onUse](item.useArguments);
      this.updateStats();
      this.equipment = this.equipment.filter(i => i.name !== name)
    }
  }

  updateStats() {
    DOM.playerStats.name.innerHTML = this.name 
    DOM.playerStats.strength.innerHTML =  `STR = ${this.attributes[ATTRIBUTES.STRENGTH]}` 
    DOM.playerStats.stamina.innerHTML = `STA = ${this.attributes[ATTRIBUTES.STAMINA]}`
    DOM.playerStats.dexterity.innerHTML = `DEX = ${this.attributes[ATTRIBUTES.DEXTERITY]}`
    DOM.playerStats.hp.innerHTML = `HP = ${this.hp}`
    DOM.playerStats.speed.innerHTML = `SP = ${this.attributes[ATTRIBUTES.SPEED]}`
    DOM.playerStats.exp.innerHTML = `EXP = ${this.progress.exp}`
    DOM.playerStats.level.innerHTML = `LEVEL = ${this.progress.level}`
    DOM.playerStats.statsPoint.innerHTML = `StatP = ${this.progress.statsPoint}`
    DOM.equipment.innerHTML = '';
    this.equipment.forEach(item => {
      const node = window.document.createElement('p')
      node.innerHTML = item.name
      DOM.equipment.append(node)
    })
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

  attackRoll(successChance, damage) {
    const roll = this.rollDice(100)
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
      if(enemy.hitPlayer) {
        enemy.hitPlayer(enemy[ATTRIBUTES.STRENGTH])  
      }
    }
    else {
      const characterModifier = attackStatsModifier(chance.attributes, this.attributes)
      const hitChance = chance.base + characterModifier
      enemy.hitPlayer(enemy[ATTRIBUTES.STRENGTH])
      this.attackRoll(hitChance, this.attack * damageModifier);
    } 
  }
}

let player = new Player('Artur');


