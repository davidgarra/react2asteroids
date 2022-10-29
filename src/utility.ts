import { StyleProp, StyleSheet } from 'react-native';

export function composeStyles<T>(styles: StyleProp<T> | StyleProp<T>[]) {
  return Array.isArray(styles) ? StyleSheet.flatten(styles) : styles;
}

export const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
