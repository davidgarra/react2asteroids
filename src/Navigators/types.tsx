import { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
  Startup: undefined;
  Main: undefined;
};

export type ApplicationScreenProps<T extends keyof ApplicationStackParamList> = StackScreenProps<
  ApplicationStackParamList,
  T
>;

export type MainStackParamList = {
  MainMenu: undefined;
  Game: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> = CompositeScreenProps<
  StackScreenProps<MainStackParamList, T>,
  StackScreenProps<ApplicationStackParamList, 'Main'>
>;
