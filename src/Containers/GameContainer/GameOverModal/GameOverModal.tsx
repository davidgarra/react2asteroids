import React from 'react';
import { GestureResponderEvent, Modal, ModalProps, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/Hooks';
import { useTranslation } from 'react-i18next';
import { Separator, Spacer } from '@/Components';
import Button from './Button';

export type GameOverModalProps = {
  seconds: number;
  onTryAgain?: (event: GestureResponderEvent) => void;
  onReturn?: (event: GestureResponderEvent) => void;
} & ModalProps;

const GameOverModal: React.FC<GameOverModalProps> = ({
  seconds,
  style,
  onTryAgain,
  onReturn,
  ...props
}) => {
  const { Layout, Gutters, Fonts, Common } = useTheme();
  const { t } = useTranslation();

  return (
    <View>
      <Modal transparent={true} {...props} style={[Layout.center, Layout.fullSize, style]}>
        <View style={[styles.overlay, Layout.center, Layout.fill]}>
          <View style={[Common.backgroundCard, Gutters.largePadding, styles.container]}>
            <Text style={[Fonts.textCenter, Fonts.titleSmall]}>{t('gameOver.main')}</Text>
            <Separator style={Gutters.regularVMargin} />
            <Text style={[Fonts.textCenter, Fonts.textRegular, Gutters.regularBMargin]}>
              {t('gameOver.elapsedSeconds', { seconds })}
            </Text>
            <View>
              <Button title={t('gameOver.returnToMenu')} onPress={onReturn}></Button>
              <Spacer />
              <Button title={t('gameOver.tryAgain')} onPress={onTryAgain}></Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  container: {
    borderRadius: 8,
    color: 'black',
  },
});

export default GameOverModal;
