import Asteroid from './Asteroid';
import Spaceship from './Spaceship';

class Slot {
  constructor(public content: Asteroid | Spaceship | null = null) {}
}

export default Slot;
