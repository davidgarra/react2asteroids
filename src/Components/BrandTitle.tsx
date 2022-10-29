import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

export type BrandTitleProps = {
  style?: StyleProp<ViewStyle>;
};

const BrandTitle: React.FC<BrandTitleProps> = ({ style }) => {
  return (
    <View style={style}>
      <View>
        <Text style={styles.text}>React</Text>
      </View>
      <View>
        <Text style={styles.text}>2</Text>
      </View>
      <View>
        <Text style={styles.text}>Asteroids</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'Starborn',
    textAlign: 'center',
  },
});

export default BrandTitle;
