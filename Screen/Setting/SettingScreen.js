import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const SettingScreen = ({route}) => {
  const {profile} = {...route.params};
  const navigation = useNavigation();
  const [value, setValue] = useState({
    email: profile.State,
    password: profile.age,
    phone: '',
    name: '',
  });
  return (
    <View style={styles.main}>
      <Text
        style={{fontWeight: '900', fontSize: 29, marginLeft: 20}}
        onPress={() => navigation.goBack()}>
        ⬅
      </Text>
      <ScrollView>
        <View style={styles.top}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Hindu-Shiva-God-Wallpaper-Free-Download.jpg',
            }}
          />
          <Text style={styles.name}>{profile.name}</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomColor: 'green',
            borderBottomWidth: 1.5,
          }}
        />
        <View style={styles.bottom}>
          <TextInput
            name="input1"
            placeholder="Please enter emailID."
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={text => setValue({...value, email: text})}
            value={value.email}
            autoCorrect={false}
          />
          <TextInput
            name="input2"
            placeholder="Please enter emailID."
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={text => setValue({...value, password: text})}
            value={value.password.toString()}
            autoCorrect={false}
          />
          <TextInput
            name="input1"
            placeholder="Please enter emailID."
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={text => setValue({...value, email: text})}
            value={value.email}
            autoCorrect={false}
          />
          <TextInput
            name="input2"
            placeholder="Please enter emailID."
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={text => setValue({...value, password: text})}
            value={value.password.toString()}
            autoCorrect={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {},
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontWeight: '900',
    fontSize: 20,
    marginTop: 20,
    color: '#098',
  },
});
