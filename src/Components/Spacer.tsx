import React from 'react';
import { View } from 'react-native';
import { MetricsSizes } from '@/Theme/Variables';

type Props = { size?: keyof typeof MetricsSizes; direction?: 'Vertical' | 'Horizontal' | 'Both' };

const Spacer: React.FC<Props> = ({ size = 'regular', direction = 'Both' }) => {
  const width = ['Both', 'Horizontal'].includes(direction) ? MetricsSizes[size] : 0;
  const height = ['Both', 'Vertical'].includes(direction) ? MetricsSizes[size] : 0;
  return <View style={{ width, height }} />;
};

export default Spacer;
