import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import 'firebase/database';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const DATA2 = [
  {
    id: '6',
    name: 'Ajay',
    message: 'Hii',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIX4fdymadei7FiL-19pxFAWPLEJgQlNEww&usqp=CAU',
  },
  {
    id: '7',
    name: 'Abhaya',
    message: 'Kya yarr yee sab kyaa kar rahe ho tum logo sab',
    img: 'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Hindu-Shiva-God-Wallpaper-Free-Download.jpg',
  },
  {
    id: '8',
    name: 'Kumar',
    message: 'kichii thila hele tame bhuil gala',
    img: 'https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg',
  },
  {
    id: '9',
    name: 'Sahoo',
    message: 'yes ',
    img: 'http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg',
  },
];

const Item = ({item}) => {
  const navigation = useNavigation();
  const {name, message, img} = {...item};
  return (
    <Pressable
      style={[styles.contactItem]}
      onPress={() => navigation.navigate('ChatScreen', {item})}>
      <View style={styles.contactDP}>
        <Image
          style={styles.logo}
          source={{
            uri: img,
          }}
        />
      </View>
      <View style={styles.contactDetais}>
        <Text style={{fontWeight: '900', fontSize: 18}}>{name}</Text>
        <Text ellipsizeMode="tail" numberOfLines={1}>
          {message}
        </Text>
      </View>
    </Pressable>
  );
};

const ChatList = ({route}) => {
  const {data} = {...route.params};
  const navigation = useNavigation();
  const [userData, setUserData] = useState();
  const getData = async () => {
    try {
      const ref = await firestore()
        .collection('users')
        .doc(data.uid)
        .get()
        .then(querySnapshot => {
          setUserData(querySnapshot._data);
          console.log('Total users: ', querySnapshot._data);
        });
    } catch (error) {
      console.log('====================================');
      console.log('Unable to find data');
      console.log('====================================');
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
        console.log('====================================');
        console.log(users);
        console.log('====================================');
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const addTodo = async () => {
    try {
      const ref = await firestore()
        .collection('users')
        .doc(data.uid)
        .set({
          name: 'Abhaya',
          age: 22,
          college: 'OUTR,BBSR',
          State: 'Odisha',
          Country: 'India',
        })
        .then(() => {
          console.log('User added!');
        });
    } catch (error) {
      console.log('====================================');
      console.log('Unable to find data');
      console.log('====================================');
      console.log(error);
    }
  };

  return (
    <View style={styles.Home}>
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>Chat</Text>

          <Text
            style={styles.mark}
            onPress={() => {
              auth().signOut();
              navigation.goBack();
            }}>
            monk
          </Text>
        </View>
        <View>
          <Text
            onPress={() =>
              navigation.navigate('SettingScreen', {profile: userData})
            }
            style={{
              color: 'orange',
              fontSize: 20,
              fontWeight: '900',
              marginLeft: '50%',
            }}>
            Profile
          </Text>
        </View>
      </View>
      <View style={styles.searchbar}>
        <TextInput style={styles.searchbarInput} placeholder="Search" />
      </View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={item => item.key}
          renderItem={({item}) => <Item item={item} />}
        />
      </SafeAreaView>
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  Home: {
    backgroundColor: 'white',
  },
  header: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerBox: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
    marginLeft: 15,

    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 15,
    flexDirection: 'row',
  },
  headerText: {
    backgroundColor: 'blue',
    borderRadius: 13,
    paddingLeft: 15,
    paddingVertical: 14,
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
  mark: {
    backgroundColor: 'white',

    paddingVertical: 14,
    fontSize: 20,
    fontWeight: '700',
    color: 'blue',
  },
  searchbar: {
    height: 80,

    alignItems: 'center',
    justifyContent: 'center',
  },
  searchbarInput: {
    width: '92%',
    backgroundColor: '#E9EAE7',
    borderRadius: 12,
    fontWeight: '900',
    paddingHorizontal: 20,
  },
  pressable: {
    borderRadius: 20,
    backgroundColor: 'gray',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    marginLeft: 15,
  },
  contactList: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
  },
  contactItem: {
    height: 70,
    flexDirection: 'row',
    marginVertical: 3,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  contactDP: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDetais: {
    width: '70%',
    paddingLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
