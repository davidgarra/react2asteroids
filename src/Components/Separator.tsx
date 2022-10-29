import { useTheme } from '@/Hooks';
import React from 'react';
import { ColorValue, FlexStyle, StyleProp, View, ViewStyle } from 'react-native';

type Props = {
  width?: FlexStyle['width'];
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
};

const Separator: React.FC<Props> = ({ width = 2, color, style }) => {
  const { Layout, Colors } = useTheme();
  color = color ?? Colors.primary;
  return <View style={[Layout.selfStretch, { flexBasis: width, backgroundColor: color }, style]} />;
};

export default Separator;
