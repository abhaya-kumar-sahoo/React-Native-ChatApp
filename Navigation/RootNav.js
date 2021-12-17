import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screen/Login/Login';
import ChatScreen from '../Screen/Chat/ChatScreen';
import ChatList from '../Screen/ChatList/ChatList';
import Signup from '../Screen/SignUp/Signup';
import SettingScreen from '../Screen/Setting/SettingScreen';
import {Welcome} from '../Screen/Welcome/Welcome';
import Content from '../Screen/Content/Content';
import {Camera} from '../Screen/Camera/Camera';
import SplashScreen from '../Screen/SplshScreen/SplashScreen';
import {Galery} from '../Screen/Galary/Galary';

export const RootStack = () => {
  const Stack = createNativeStackNavigator();
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      {appLoading ? (
        <Stack.Navigator
          initialRouteName={'SplashScreen'}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        </Stack.Navigator>
      ) : (
        <RootNav />
      )}
    </NavigationContainer>
  );
};

export const RootNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="ContentScreen" component={Content} />
      <Stack.Screen name="CameraScreen" component={Camera} />
      <Stack.Screen name="Galery" component={Galery} />
    </Stack.Navigator>
  );
};
