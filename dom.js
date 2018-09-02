const DOM = {
  textInput: window.document.getElementById("text-input"),
  form: window.document.getElementById("form"),
  Battlelog: window.document.getElementById("battle-log"),
  textContainer: window.document.getElementById("text-container"),
  playerStats: {
    name: window.document.getElementById("player-name"),
    attack: window.document.getElementById("player-attack"),
    strength: window.document.getElementById("strength-value"),
    speed: window.document.getElementById("speed-value"),
    stamina: window.document.getElementById("stamina-value"),
    dexterity: window.document.getElementById("dexterity-value"),
    hp: window.document.getElementById("hp-value"),
    exp: window.document.getElementById("exp-value"),
    level: window.document.getElementById("player-level")
  },
  equipment: window.document.getElementById("equipment"),
  enemyStats: {
    name: window.document.getElementById("enemy-name"),
    strength: window.document.getElementById("enemy-strength"),
    speed: window.document.getElementById("enemy-speed"),
    stamina: window.document.getElementById("enemy-stamina"),
    dexterity: window.document.getElementById("enemy-dexterity"),
    hp: window.document.getElementById("enemy-hp")
  }
}