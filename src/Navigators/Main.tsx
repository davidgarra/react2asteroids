import React from 'react';
import { MainMenuContainer, GameContainer } from '@/Containers';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './types';

const Stack = createStackNavigator<MainStackParamList>();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="MainMenu" component={MainMenuContainer} />
      <Stack.Screen name="Game" component={GameContainer} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
