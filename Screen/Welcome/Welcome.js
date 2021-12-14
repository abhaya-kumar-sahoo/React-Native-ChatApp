import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Buttons} from '../../components/Button/Button';

const image = '../../assets/login1.jpeg';
var list = [
  {
    image: '../../assets/login1.jpeg',
    content: 'Be Famous',
    id: 1,
  },
  {
    image: '../../assets/login2.jpeg',
    content: 'Create Content',
    id: 2,
  },
  {
    image: '../../assets/login3.jpeg',
    content: 'Shoot Potraits',
    id: 3,
  },
];
export const Welcome = () => {
  useEffect(() => {}, []);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require(image)}
      resizeMode="cover"
      style={styles.image}>
      <StatusBar hidden />
      <LinearGradient
        colors={['#E5E5E511', '#242A38']}
        style={styles.linearGradient}>
        <View style={{flex: 8, marginTop: 230}}>
          <Text style={styles.titleLogin}>Be </Text>
          <Text style={styles.titleLogin}>Famous</Text>
          <Text
            style={{
              color: 'white',
              marginHorizontal: 40,
              fontSize: 20,
              marginVertical: 25,
            }}>
            Shoot potraits through our best AI driven Camera Feature
          </Text>
          <View style={styles.buttons}>
            <Buttons
              title="Log in"
              width="45%"
              colors={['#ffffff', '#ffffff']}
              color="#F54B65"
              marginHorizontal={50}
              onPress={() => navigation.navigate('Login')}
            />

            <Buttons
              title=" Sign up"
              width={'45%'}
              marginHorizontal={50}
              onPress={() => navigation.navigate('Signup')}
            />
          </View>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              marginTop: 20,
              fontSize: 16,
              fontWeight: '300',
            }}>
            Or login with
          </Text>
        </View>
        <View style={{justifyContent: 'center', flex: 1, marginVertical: 15}}>
          <Icon
            style={{textAlign: 'center', color: 'white', marginTop: 10}}
            name="logo-google"
            size={30}
            color="white"
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleLogin: {
    fontSize: 50,
    textAlign: 'left',
    color: 'white',
    fontWeight: '900',
    marginLeft: 40,
    lineHeight: 50,
  },

  image: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 320,
    marginLeft: 20,
  },
  linearGradient: {
    flex: 1,
  },
});
