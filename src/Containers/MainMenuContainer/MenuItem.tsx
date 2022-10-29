import React from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export type MenuItemProps = {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  style: StyleProp<ViewStyle>;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MenuItem;
