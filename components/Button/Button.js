import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Buttons = ({
  props,
  style,
  borderWidth,
  borderRadius,
  borderColor,
  width = '85%',
  height = 50,
  outlined = false,
  onPress = () => {},
  title = 'Log in',
  backgroundColor = 'white',
  marginTop = 20,
  marginHorizontal = 0,
  colors = ['#F88360', '#F54B65'],
  color = 'white',
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={{
        ...style,

        width: width,
        height: height,
        padding: 2,
        margin: 5,
        borderRadius: 50,
        marginHorizontal: marginHorizontal,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: marginTop,
      }}>
      <Text
        onPress={onPress}
        style={{
          fontSize: 18,
          fontWeight: '900',
          color: color,
          textAlign: 'center',
        }}>
        {title}
      </Text>
    </LinearGradient>
  );
};
