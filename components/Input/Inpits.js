import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Inputs = ({
  props,
  style,
  width = 300,
  height = 50,
  paddingLeft = 20,
  margin = 5,
  borderRadius = 50,
  backgroundColor = '#F4F5F244',
  value = value,
  onChangeText = onChangeText,
  placeholder = 'Enter Email',
  marginTop = 10,
  color = 'white',
  fontWeight = '800',
}) => {
  return (
    <TextInput
      style={{
        width: width,
        height: height,
        paddingLeft: paddingLeft,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        marginTop: marginTop,
        color: color,
        fontWeight: fontWeight,
      }}
      placeholder={placeholder}
      placeholderTextColor="lightgrey"
      onChangeText={onChangeText}
      value={value}
      autoCompleteType="off"
    />
  );
};

export const Texts = ({
  fontSize = 36,
  color = 'white',
  fontWeight = '900',
  paddingLeft = 20,
  content = 'Welcome back',
}) => {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: fontSize,
          color: color,
          fontWeight: fontWeight,
          paddingLeft: paddingLeft,
        }}>
        {content}
      </Text>
      <Text style={{fontSize: 16, paddingLeft: paddingLeft, color: color}}>
        Login to your account
      </Text>
    </View>
  );
};

export const Back = ({title = 'Back', padding = 20, style}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: padding,
      }}>
      <Icon name="caret-back-outline" color={'white'} size={30} />

      <Text
        style={{
          fontWeight: '600',
          color: 'white',
          fontSize: 18,
        }}
        onPress={() => navigation.goBack()}>
        {title}
      </Text>
    </View>
  );
};
