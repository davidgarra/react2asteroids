import Asteroid from './Models/Asteroid';
import Slot from './Models/Slot';
import Spaceship from './Models/Spaceship';

export function random(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const isSpaceship = (element: Slot['content']): element is Spaceship =>
  element instanceof Spaceship;

export const isAsteroid = (element: Slot['content']): element is Asteroid =>
  element instanceof Asteroid;
