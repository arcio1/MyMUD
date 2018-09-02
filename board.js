
const mapDirection = (direction, currentPosition) => ({
    x: currentPosition.x + direction.x,
    y: currentPosition.y + direction.y,
  })

class Board {
  constructor(){
    this.map = [
      [{text: 'lt'}, {text: 'top'}, {text: 'rt'}],
      [{text: 'left'}, {text: 'center'}, {text: 'right'}],
      [{text: 'lb'}, {text: 'bot'}, {text: 'rb'}],
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
      appendText(`Heading ${directionObject.text}, ${this.map[y][x].text}`) 
      this.beginEncounter();
    } else {
      appendText('Wrong direction') 
    }
  }
}

const board = new Board();