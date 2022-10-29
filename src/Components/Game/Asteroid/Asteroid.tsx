import { useTheme } from '@/Hooks';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export type AsteroidProps = {
  variant?: 'retro';
};

const Asteroid: React.FC<AsteroidProps> = () => {
  const { Layout } = useTheme();

  return (
    <Text
      adjustsFontSizeToFit
      minimumFontScale={0.01}
      numberOfLines={1}
      style={[Layout.fill, styles.text]}
    >
      ✱
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
  },
});

export default Asteroid;
