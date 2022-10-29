import React, { useEffect } from 'react';
import { ActivityIndicator, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/Hooks';
import { Brand, BrandTitle } from '@/Components';
import { navigateAndSimpleReset } from '@/Navigators/utils';
import { ApplicationScreenProps } from '@/Navigators/types';
import { wait } from '@/utility';

type Props = ApplicationScreenProps<'Startup'>;

// eslint-disable-next-line no-empty-pattern
const StartupContainer = ({}: Props) => {
  const { Layout, Gutters, Fonts, Images } = useTheme();

  const { t } = useTranslation();

  const init = async () => {
    await wait(2000);
    navigateAndSimpleReset('Main');
  };

  useEffect(() => {
    init();
  });

  return (
    <ImageBackground
      source={Images.outerSpaceBackground}
      style={[Layout.fill, styles.container]}
      resizeMode="cover"
    >
      <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
        <View style={[Layout.colCenter, Gutters.smallHPadding]}>
          <BrandTitle style={Gutters.regularVMargin} />
          <Brand style={Gutters.regularVMargin} />
          <ActivityIndicator size={'large'} style={Gutters.largeVMargin} />
          <Text style={[Fonts.textCenter, Fonts.textSmall, styles.developedBy]}>
            {t('developedBy')}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#000000' },
  developedBy: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});

export default StartupContainer;
