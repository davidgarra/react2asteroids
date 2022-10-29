import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableHighlightProps } from 'react-native';
import { useTheme } from '@/Hooks';

export type DirectionButtonProps = {
  direction: 'LEFT' | 'RIGHT';
  onPress?: TouchableHighlightProps['onPress'];
  containerStyle?: TouchableHighlightProps['style'];
  disabled?: boolean;
};

const DirectionButton: React.FC<DirectionButtonProps> = ({
  direction,
  onPress,
  containerStyle,
  disabled = false,
}) => {
  const { Layout, Gutters, Fonts, Colors, Common } = useTheme();
  return (
    <TouchableHighlight
      underlayColor={Colors.primary}
      onPress={onPress}
      disabled={disabled}
      style={[Layout.center, Gutters.regularPadding, Common.backgroundCard, containerStyle]}
    >
      <Text style={[Fonts.textRegular, styles.arrow]}>{direction === 'LEFT' ? '<' : '>'}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DirectionButton;
