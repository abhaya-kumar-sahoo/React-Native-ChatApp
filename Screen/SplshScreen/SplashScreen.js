import React from 'react';
import {ImageBackground, StatusBar} from 'react-native';
const SplashScreen = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{flex: 1}}
      source={require('../../assets/splashScreen.jpeg')}>
      <StatusBar hidden={true} />
    </ImageBackground>
  );
};

export default SplashScreen;
