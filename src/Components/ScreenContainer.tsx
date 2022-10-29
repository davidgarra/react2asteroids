import React from 'react';
import { SafeAreaView } from 'react-native';
import { useTheme } from '@/Hooks';

type Props = { children?: React.ReactNode };

const ScreenContainer: React.FC<Props> = ({ children }) => {
  const { Layout } = useTheme();
  return <SafeAreaView style={Layout.fill}>{children}</SafeAreaView>;
};

export default ScreenContainer;
