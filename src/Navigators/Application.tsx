import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StartupContainer } from '@/Containers';
import { useTheme } from '@/Hooks';
import MainNavigator from './Main';
import { navigationRef } from './utils';
import { ApplicationStackParamList } from './types';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { NavigationTheme, NavigationColors } = useTheme();

  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <StatusBar hidden backgroundColor={NavigationColors.card} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={StartupContainer} />
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
