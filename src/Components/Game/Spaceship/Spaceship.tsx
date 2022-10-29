import { useTheme } from '@/Hooks';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export type SpaceshipProps = {
  variant?: 'retro';
  collided?: boolean;
};

const Spaceship: React.FC<SpaceshipProps> = ({ collided = false }) => {
  const { Layout } = useTheme();

  return (
    <Text
      adjustsFontSizeToFit
      minimumFontScale={0.01}
      numberOfLines={1}
      style={[Layout.fill, styles.spaceship, collided && styles.collided]}
    >
      A
    </Text>
  );
};

const styles = StyleSheet.create({
  spaceship: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '900',
    marginBottom: -5,
  },
  collided: {
    color: 'red',
  },
});

export default Spaceship;
