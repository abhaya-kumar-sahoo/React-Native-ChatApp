import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
const list = {
  image1: '../../assets/login1.jpeg',
  content1: 'Be Famous',
  image2: '../../assets/login2.jpeg',
  content2: 'Create Content',
  image3: '../../assets/login3.jpeg',
  content3: 'Shoot Potraits',
};
export const BackgroundImage = ({style = {}}) => {
  return (
    <ImageBackground
      source={require('../../assets/login1.jpeg')}
      resizeMode="cover"
      style={style}
    />
  );
};

const styles = StyleSheet.create({});
