const createMapTile = (text, event, eventChance, eventArguments) => ({
  text, event, eventChance, eventArguments
})

const mapDirection = (direction, currentPosition) => ({
    x: currentPosition.x + direction.x,
    y: currentPosition.y + direction.y,
  })

class Board {
  constructor(){
    const cmt = createMapTile
    this.map = [
      [cmt('lt', this.beginEncounter, 50), cmt('top', this.beginEncounter, 50), cmt('rt', this.beginEncounter, 1)],
      [cmt('right', player.AddItemToEquipment, 100, {name:'sword'}), cmt('center', this.beginEncounter, 0), cmt('left', this.beginEncounter, 90)],
      [cmt('rb', this.beginEncounter, 1), cmt('bottom', player.AddExp, 100, 30), cmt('lb', this.beginEncounter, 1)],
    ]
    this.currentPosition = {x :1, y: 1}

  }
  beginEncounter(){
    enemy = new Enemy (ENEMIES.ORC)
    enemy.speak()
  }
  movePlayer(directionObject) {
    const newPosition = mapDirection(directionObject.direction, this.currentPosition);
    const {x, y} = newPosition;
    const isInsideMap = y<this.map.length && y>=0 && x<this.map[y].length && x>=0;
    if (isInsideMap) {
      this.currentPosition = newPosition;
      const tile = this.map[y][x];
      appendText(`Heading ${directionObject.text}, ${tile.text}`) 
      if (player.rollDice(100) <= tile.eventChance ){
        tile.event(tile.eventArguments);
      }
      
    } else {
      appendText('Wrong direction') 
    }
  }
}

const board = new Board();