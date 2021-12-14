import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import auth, {firebase} from '@react-native-firebase/auth';
const image = '../../assets/login1.jpeg';
import {Buttons} from '../../components/Button/Button';
import {Back, Inputs, Texts} from '../../components/Input/Inpits';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const navigation = useNavigation();
  const [dataInput, setDataInput] = useState();
  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const onPress = async () => {
    try {
      let response = await auth().signInWithEmailAndPassword(
        value.email,
        value.password,
      );
      if (response && response.user) {
        // const uid = firebase.auth().currentUser.uid;
        alert('Success ✅', 'Authenticated successfully');
        setDataInput(response.user);
        console.log(dataInput);
        navigation.navigate('ChatList', {data: dataInput});
      }
    } catch (e) {
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
        <View style={{flex: 1}}>
          <Back />
        </View>

        <View style={{flex: 1}}>
          <Texts />
          <View style={styles.form}>
            <Inputs
              placeholder="Enter Email"
              value={value.email}
              onChangeText={text => setValue({...value, email: text})}
            />
            <Inputs
              placeholder="Enter Password"
              value={value.password}
              onChangeText={text => setValue({...value, password: text})}
            />
            <Buttons title="Log in" onPress={() => onPress()} />
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },

  form: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
  },
  input: {
    width: 300,
    height: 50,
    paddingLeft: 20,
    margin: 5,

    borderRadius: 50,
    backgroundColor: '#F4F5F244',
  },
  image: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
