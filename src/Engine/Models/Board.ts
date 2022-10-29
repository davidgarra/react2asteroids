import { isAsteroid, isSpaceship, random } from '../utility';
import Asteroid from './Asteroid';
import Slot from './Slot';
import Spaceship from './Spaceship';

type Direction = 'LEFT' | 'RIGHT';

class Board {
  private _slots: Slot[][];
  private _spaceship?: Spaceship;
  private spaceshipPosition?: [number, number];
  private _collision = false;

  constructor({ width = 11, height = 25 } = {}) {
    if (width <= 0) throw new Error('Width must be greater than zero');
    if (height <= 0) throw new Error('Height must be greater than zero');

    this._slots = Array(height)
      .fill(null)
      .map(() => Array(width).fill(null));

    for (let row = 0; row < height; row++) {
      for (let column = 0; column < width; column++) {
        this._slots[row][column] = new Slot();
      }
    }
  }

  get height() {
    return this._slots.length;
  }

  get width() {
    return this._slots[0].length;
  }

  get slots() {
    return this._slots;
  }

  get spaceship() {
    return this._spaceship;
  }

  private add = (element: Slot['content'], row?: number, column?: number): [number, number] => {
    if (row != null && !Number.isInteger(row)) throw new Error('Row must be an integer value');
    if (column != null && !Number.isInteger(column))
      throw new Error('Column must be an integer value');

    if (row != null && row < 0) row = this.height + row;
    if (column != null && column < 0) column = this.width + column;
    let isTaken = false;
    let selectedRow: number, selectedColumn: number;
    do {
      selectedRow = row ?? random(0, this.height - 1);
      selectedColumn = column ?? random(0, this.width - 1);
      isTaken = this._slots[selectedRow][selectedColumn].content != null;
    } while (isTaken);
    this._slots[selectedRow][selectedColumn].content = element;
    return [selectedRow, selectedColumn];
  };

  nextStep = (asteroidNumber = 2) => {
    for (let row = this.height - 1; row >= 0; row--) {
      for (let column = 0; column < this.width; column++) {
        if (row === 0) {
          this._slots[row][column].content = null;
          continue;
        }
        const incoming = this._slots[row - 1][column].content;
        const occupant = this._slots[row][column].content;
        if (isAsteroid(incoming) && isSpaceship(occupant)) {
          occupant.collided = true;
          incoming.collided = true;
        } else {
          if (!isSpaceship(occupant)) this._slots[row][column].content = incoming;
        }
      }
    }
    for (let asteroidCount = 0; asteroidCount < asteroidNumber; asteroidCount++) {
      this.addAsteroid();
    }
  };

  addAsteroid = (asteroid?: Asteroid) => {
    if (asteroid == null) asteroid = new Asteroid();
    this.add(asteroid, 0);
    return asteroid;
  };

  addSpaceship = (spaceship?: Spaceship) => {
    if (spaceship == null) spaceship = new Spaceship();
    this.spaceshipPosition = this.add(spaceship, -1, Math.floor(this.width / 2));
    this._spaceship = spaceship;

    return spaceship;
  };

  moveSpaceship = (direction: Direction) => {
    if (this._spaceship == null) throw new Error('No spaceship found');
    if (this.spaceshipPosition == null)
      throw new Error('Something went wrong: No spaceship position found');

    const [row, column] = this.spaceshipPosition;
    const newRow = row;
    let newColumn = column;
    if (direction === 'LEFT' && column > 0) newColumn = column - 1;
    if (direction === 'RIGHT' && column < this.width - 1) newColumn = column + 1;

    const oldSlot = this._slots[row][column];
    const newSlot = this._slots[newRow][newColumn];

    if (!isSpaceship(oldSlot.content))
      throw new Error('Something went wrong: Spaceship not in the right position');

    if (newSlot !== oldSlot) {
      if (isAsteroid(newSlot.content)) {
        this._spaceship.collided = true;
        newSlot.content.collided = true;
      }
      newSlot.content = oldSlot.content;
      oldSlot.content = null;
    }
    this.spaceshipPosition = [newRow, newColumn];
    return this.spaceshipPosition;
  };

  public consoleLog = () => {
    let text = '\n';
    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        const cell = this._slots[row][column].content;
        text += isSpaceship(cell) ? 'A' : isAsteroid(cell) ? '*' : '_';
      }
      text += '\n';
    }
    console.clear();
    console.log(text);
  };
}

export default Board;
