import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {MainStackParams, Screens} from '../navigation.types';
import Home from '../../ui/screens/home/home.screen';
import Detail from '../../ui/screens/detail/detail.screen';

const Stack = createNativeStackNavigator<MainStackParams>();

const MainStack = () => {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={Screens.home} component={Home} />
      <Stack.Screen name={Screens.detail} component={Detail} />
    </Stack.Navigator>
  );
};

export default MainStack;
