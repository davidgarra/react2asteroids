import { isAsteroid, isSpaceship, Slot as EngineSlot } from '@/Engine';
import { composeStyles } from '@/utility';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Asteroid } from '../Asteroid';
import { Spaceship } from '../Spaceship';

export type SlotProps = {
  variant?: 'retro';
  style?: StyleProp<ViewStyle>;
  content?: EngineSlot['content'] | null;
};

const Slot: React.FC<SlotProps> = ({ style, content = null }) => {
  return (
    <View style={[styles.slot, composeStyles(style)]}>
      {isAsteroid(content) ? (
        <Asteroid variant="retro" />
      ) : isSpaceship(content) ? (
        <Spaceship variant="retro" collided={content.collided} />
      ) : undefined}
    </View>
  );
};

const styles = StyleSheet.create({
  slot: {},
});

export default Slot;
