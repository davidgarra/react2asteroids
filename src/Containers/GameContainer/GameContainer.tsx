import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useGame, useTheme } from '@/Hooks';
import { MainStackScreenProps } from '@/Navigators/types';
import { Board } from '@/Components/Game/Board';
import DirectionButton from './DirectionButton';
import GameOverModal from './GameOverModal';
import ElapsedTime from './ElapsedTime';

type Props = MainStackScreenProps<'Game'>;

const GameContainer = ({ navigation }: Props) => {
  const { Layout } = useTheme();
  const { create, run, moveSpaceship, slots, status, elapsedSeconds } = useGame();

  const start = useCallback(() => {
    create();
    run();
  }, [create, run]);

  useEffect(() => {
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status == null) return null;

  return (
    <SafeAreaView style={Layout.fill}>
      <GameOverModal
        seconds={elapsedSeconds ?? 0}
        visible={status === 'OVER'}
        onTryAgain={start}
        onReturn={() => navigation.goBack()}
      />
      <ElapsedTime seconds={elapsedSeconds ?? 0} />
      <Board slots={slots} style={Layout.fill} />
      <View style={Layout.row}>
        <DirectionButton
          containerStyle={Layout.fill}
          direction="LEFT"
          disabled={status !== 'RUNNING'}
          onPress={() => moveSpaceship('LEFT')}
        />
        <DirectionButton
          containerStyle={Layout.fill}
          direction="RIGHT"
          disabled={status !== 'RUNNING'}
          onPress={() => moveSpaceship('RIGHT')}
        />
      </View>
    </SafeAreaView>
  );
};

export default GameContainer;
