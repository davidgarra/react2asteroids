import { wait } from '../utility';
import Board from './Board';

type Listener = () => void;
type Status = 'RUNNING' | 'PAUSED' | 'OVER';
type Options = {
  log?: boolean;
  listeners?: Listener[];
};

type Direction = Parameters<InstanceType<typeof Board>['moveSpaceship']>[0];

class Game {
  private _board: Board;
  public log = false;
  private listeners = new Set<Listener>();
  private _status: Status = 'PAUSED';
  private _elapsedTime = 0;
  private initialSpeed = 400;
  private maxSpeed = 900;
  private acceleration = 1;

  constructor({ log = false, listeners = [] }: Options = {}) {
    const board = new Board();
    board.addSpaceship();
    this._board = board;
    this.log = log;
    listeners.forEach(this.subscribe);
  }

  get board() {
    return this._board;
  }

  get status() {
    return this._status;
  }

  get elapsedSeconds() {
    return Math.round(this._elapsedTime / 1000);
  }

  public subscribe = (listener: Listener) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };

  private dispatch = () => {
    this.listeners.forEach((callback) => callback());
  };

  private startTime = async () => {
    const board = this._board;
    while (this._status === 'RUNNING') {
      const startTime = Date.now();
      await wait(500);
      const previousElapsedSeconds = this.elapsedSeconds;
      const elapsedTime = Date.now() - startTime;
      this._elapsedTime += elapsedTime;
      if (previousElapsedSeconds !== this.elapsedSeconds) {
        if (this.log) board.consoleLog();
        this.dispatch();
      }
    }
  };

  run = async () => {
    this._status = 'RUNNING';
    const board = this._board;
    this.startTime();
    while (!board.spaceship?.collided) {
      const computedSpeed = Math.round(
        this.initialSpeed + (this._elapsedTime / 1000) * this.acceleration,
      );
      const speed = Math.min(computedSpeed, this.maxSpeed);
      const nextStepTimeout = 1000 - speed;
      await wait(nextStepTimeout);
      board.nextStep();
      if (this.log) board.consoleLog();
      this.dispatch();
    }
    this._status = 'OVER';
    if (this.log) board.consoleLog();
    this.dispatch();
  };

  moveSpaceship = async (direction: Direction) => {
    this.board.moveSpaceship(direction);
    if (this.log) this.board.consoleLog();
    this.dispatch();
  };
}

export default Game;
