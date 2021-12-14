import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAccessoryView} from 'react-native-keyboard-accessory';

var today = new Date();

const Item = ({item}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{width: '100%', alignItems: 'flex-end'}}>
        <View style={styles.rightChat}>
          <Text style={{color: '#161616', fontSize: 17}}>{item}</Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{color: '#524848', fontSize: 11}}></Text>
          </View>
        </View>
      </View>
      <View style={{width: '100%', alignItems: 'flex-start'}}>
        <View
          style={[
            styles.rightChat,
            {backgroundColor: '#E0E0E0', marginLeft: 15},
          ]}>
          <Text style={{fontSize: 17, color: '#161616'}}>
            Left side Message
          </Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{color: '#E0E0E0', fontSize: 11}}></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const ChatScreen = ({route}) => {
  const {item} = {...route.params};
  const {name, img, message} = item;
  const [messages, setMessage] = useState(null);
  const [data, setData] = useState([]);
  const [result, setResult] = React.useState([]);

  const submitHandler = () => {
    if (messages != null) {
      setData([...data, messages]);
      setMessage(null);
      setResult([]);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          borderRadius={20}
          height={40}
          width={40}
          source={{
            uri: img,
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
            fontWeight: '800',
            color: '#524848',
          }}>
          {name}
        </Text>
      </View>
      <FlatList
        data={data}
        // keyExtractor={(item) => item.key}
        renderItem={({item}) => <Item item={item} />}
      />
      <View style={styles.buttom}>
        <View style={{flex: 3}}>
          <TextInput
            style={styles.input}
            onChangeText={messages => setMessage(messages)}
            value={messages}
            placeholder="Write a comment ..."
            keyboardType="default"
            multiline
          />
        </View>
        <View style={styles.btnImog}>
          <Button
            title="Send"
            onPress={() => {
              submitHandler();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 20,
    backgroundColor: '#c2d6d6',
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  buttom: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#c2d6d6',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  btnImog: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flex: 2,
  },
  logo1: {
    fontSize: 25,
  },
  input: {
    fontSize: 20,
  },
  rightChat: {
    maxWidth: '76%',
    minWidth: '20%',
    backgroundColor: '#E0E0E0',
    marginRight: 20,
    borderRadius: 20,
    padding: 12,
    marginTop: 15,
  },

  knobStyles: {
    backgroundColor: '#766dfc',
  },
  containerStyles: {
    backgroundColor: 'white',
    opacity: 1,
  },
  headerStyles: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '900',
  },
});
