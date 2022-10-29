import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/Hooks';
import { useTranslation } from 'react-i18next';

export type ElapsedTimeProps = {
  seconds: number;
};

const ElapsedTime: React.FC<ElapsedTimeProps> = ({ seconds }) => {
  const { Layout, Gutters, Fonts, Common } = useTheme();
  const { t } = useTranslation();

  return (
    <View style={[Gutters.smallPadding, Layout.center, Common.backgroundCard]}>
      <Text style={Fonts.textRegular}>{t('gameScreen.elapsedTime', { seconds })}</Text>
    </View>
  );
};

export default ElapsedTime;
