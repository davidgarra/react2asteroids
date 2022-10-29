import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@/Hooks';

export type ButtonProps = {
  onPress?: TouchableWithoutFeedbackProps['onPress'];
  title: string;
  style?: StyleProp<ViewStyle>;
};

const Button: React.FC<ButtonProps> = ({ onPress, title, style }) => {
  const { Layout, Gutters, Fonts, Common } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[Layout.center, Gutters.regularPadding, Common.backgroundPrimary, style]}
    >
      <Text style={[Fonts.textRegular, styles.arrow]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
