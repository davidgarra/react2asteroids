import React from 'react';
import { View, Image, ImageProps } from 'react-native';
import { useTheme } from '@/Hooks';

type Props = { width?: string | number; height?: string | number } & Omit<ImageProps, 'source'>;

const Brand = ({ width, height, style, ...props }: Props) => {
  const { Images, Layout } = useTheme();
  if (width == null && height == null) {
    width = 300;
  }

  return (
    <View>
      <Image
        style={[Layout.fullSize, { width, height, aspectRatio: 1119 / 900 }, style]}
        resizeMode={'contain'}
        source={Images.logo}
        {...props}
      />
    </View>
  );
};

export default Brand;
