import React, {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import auth, {firebase} from '@react-native-firebase/auth';
import {Back, Inputs} from '../../components/Input/Inpits';
import {Buttons} from '../../components/Button/Button';
import LinearGradient from 'react-native-linear-gradient';
const image = '../../assets/background.jpeg';
const Signup = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState({
    username: '',
    email: '',
    password: '',
  });
  const signUpHandle = async () => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        value.username,
        value.email,
        value.password,
      );
      if (response && response.user) {
        alert('Success ✅', 'Account created successfully');
        navigation.navigate('Login');
      }
    } catch (e) {
      5;
      console.error(e.message);
    }
  };

  return (
    <ImageBackground
      source={require(image)}
      resizeMode="cover"
      style={styles.image}>
      <LinearGradient
        colors={['#E5E5E511', '#242A38']}
        style={styles.linearGradient}>
        <View style={{flex: 2}}>
          <Back />
          <Text
            style={{
              fontSize: 40,
              color: 'white',
              fontWeight: '900',
              marginHorizontal: 30,
              marginTop: 80,
            }}>
            Create your Account
          </Text>
        </View>
        <View style={styles.form}>
          <Inputs
            placeholder="Full name"
            onChangeText={text => setValue({...value, username: text})}
            value={value.username}
          />
          <Inputs onChangeText={text => setValue({...value, email: text})} />
          <Inputs
            placeholder="Password"
            onChangeText={text => setValue({...value, password: text})}
            value={value.email}
          />
          <Inputs
            placeholder="Confirm Password"
            onChangeText={text => setValue({...value, cpassword: text})}
            value={value.password}
          />

          <Buttons onPress={() => signUpHandle()} width="85%" title="Sign up" />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  form: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
    flex: 3,
  },
  linearGradient: {
    flex: 1,
  },
});
