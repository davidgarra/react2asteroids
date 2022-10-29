import { Game } from '@/Engine';
import { useCallback, useRef, useState } from 'react';

type GameState = {
  slots: Game['board']['slots'];
  status: Game['status'];
  elapsedSeconds: Game['elapsedSeconds'];
};

const useGame = () => {
  const game = useRef<Game>();
  const [gameState, setGameState] = useState<GameState | null>();

  const handleGameStateUpdate = useCallback(() => {
    if (game.current == null) setGameState(null);
    else
      setGameState({
        slots: game.current?.board.slots,
        status: game.current?.status,
        elapsedSeconds: game.current?.elapsedSeconds,
      });
  }, []);

  const create = useCallback(() => {
    game.current = new Game({ listeners: [handleGameStateUpdate] });
    handleGameStateUpdate();
  }, [handleGameStateUpdate]);

  const run = useCallback(() => {
    game.current?.run();
  }, []);

  const moveSpaceship = useCallback(
    (...args: Parameters<InstanceType<typeof Game>['moveSpaceship']>) => {
      game.current?.moveSpaceship(...args);
    },
    [],
  );

  const { slots, status, elapsedSeconds } = gameState ?? {};

  return { create, run, moveSpaceship, slots, status, elapsedSeconds };
};

export default useGame;
