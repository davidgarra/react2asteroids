import React from 'react';
import { View, ImageBackground } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Brand, BrandTitle } from '@/Components';
import { useTheme } from '@/Hooks';
import { MainStackScreenProps } from '@/Navigators/types';
import MenuItem from './MenuItem';

type Props = MainStackScreenProps<'MainMenu'>;

const MainMenuContainer = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { Gutters, Layout, Images } = useTheme();

  return (
    <ImageBackground source={Images.outerSpaceBackground} style={Layout.fill} resizeMode="cover">
      <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
        <View style={[Layout.colCenter, Gutters.smallHPadding]}>
          <BrandTitle style={Gutters.regularVMargin} />
          <Brand style={Gutters.regularVMargin} />
          <MenuItem
            style={Gutters.largeVMargin}
            title={t('mainMenu.newGame')}
            onPress={() => navigation.navigate('Game')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default MainMenuContainer;
