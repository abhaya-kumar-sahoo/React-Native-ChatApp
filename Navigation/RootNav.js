// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screen/Login/Login';
import ChatScreen from '../Screen/Chat/ChatScreen';
import ChatList from '../Screen/ChatList/ChatList';
import Signup from '../Screen/SignUp/Signup';
import SettingScreen from '../Screen/Setting/SettingScreen';
import {Welcome} from '../Screen/Welcome/Welcome';

const Stack = createNativeStackNavigator();

export const RootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
