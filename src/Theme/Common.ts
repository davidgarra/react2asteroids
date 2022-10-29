/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native';
import { CommonParams } from './theme';

export default function <C>({ Colors, NavigationColors }: CommonParams<C>) {
  return {
    ...StyleSheet.create({
      backgroundScreen: {
        backgroundColor: NavigationColors.background,
      },
      backgroundPrimary: {
        backgroundColor: NavigationColors.primary,
      },
      backgroundCard: {
        backgroundColor: NavigationColors.card,
      },
      backgroundSurface: {
        backgroundColor: Colors.surface,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
    }),
  };
}
