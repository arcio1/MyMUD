const addBattlelog = (text) => {
  const node = window.document.createElement('p')
  node.innerHTML = text
  DOM.Battlelog.append(node)
}
let player = new Player('Artur');
let enemy = {};

const appendText = (text) => {
  const node = window.document.createElement('p')
  node.innerHTML = text
  DOM.textContainer.append(node)
}
const handleInput = (e) => {
  e.preventDefault();
  const userInput = DOM.textInput.value
  DOM.textInput.value = "" 
  if (!player.name) {
    player.name = userInput
    appendText(`Hello ${player.name}`)
    player.updateStats();
    return
  }
  if (userInput == `normal attack` && enemy.hp > 0) {
    player.attackEnemy(ATTACKS.NORMAL);  
  }
  if (userInput == `fast attack` && enemy.hp > 0) {
    player.attackEnemy(ATTACKS.FAST)
  }
  if (userInput == `heavy attack` && enemy.hp > 0) {
    player.attackEnemy(ATTACKS.HEAVY)
  }
  switch (userInput.toUpperCase()) {
    case 'W': board.movePlayer(DIRECTIONS.WEST); break
    case 'E': board.movePlayer(DIRECTIONS.EAST); break
    case 'S': board.movePlayer(DIRECTIONS.SOUTH); break
    case 'N': board.movePlayer(DIRECTIONS.NORTH); break
  }
  player.updateStats();
}
DOM.form.onsubmit = handleInput;