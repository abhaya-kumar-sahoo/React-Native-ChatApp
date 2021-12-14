import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Buttons} from '../../components/Button/Button';
import {Card, ImageLogo} from '../../components/Card/Card';
import {Inputs} from '../../components/Input/Inpits';
const camera = <Icon name="camera" size={24} color={'white'} />;
const image = '../../assets/ScrollImages/im5.jpeg';
const images = [
  {
    image: require('../../assets/ScrollImages/im1.jpeg'),
    id: 1,
  },
  {
    image: require('../../assets/ScrollImages/im2.jpeg'),
    id: 2,
  },
  {
    image: require('../../assets/ScrollImages/im3.jpeg'),
    id: 3,
  },
  {
    image: require('../../assets/ScrollImages/im4.jpeg'),
    id: 4,
  },
  {
    image: require('../../assets/ScrollImages/im5.jpeg'),
    id: 5,
  },
  {
    image: require('../../assets/ScrollImages/im2.jpeg'),
    id: 6,
  },
  {
    image: require('../../assets/ScrollImages/im1.jpeg'),
    id: 7,
  },
  {
    image: require('../../assets/ScrollImages/im2.jpeg'),
    id: 8,
  },
  {
    image: require('../../assets/ScrollImages/im3.jpeg'),
    id: 9,
  },
  {
    image: require('../../assets/ScrollImages/im4.jpeg'),
    id: 10,
  },
  {
    image: require('../../assets/ScrollImages/im5.jpeg'),
    id: 11,
  },
  {
    image: require('../../assets/ScrollImages/im2.jpeg'),
    id: 12,
  },
];

const content = [
  {
    image: require('../../assets/ScrollImages/content1.jpeg'),
    content1: 'Beach Love',
    content2: 'How am i supposed to leave this heaven',
  },
  {
    image: require('../../assets/ScrollImages/content2.jpeg'),
    content1: 'Beach Love',
    content2: 'How am i supposed to leave this heaven',
  },
];
const Content = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#2E3443'}}
      showsVerticalScrollIndicator={false}>
      <View style={{height: 250, backgroundColor: '#2E3450'}}>
        <View style={styles.header}>
          <Text style={{color: '#FFFFFF', fontWeight: '800', fontSize: 24}}>
            Hearme
          </Text>
        </View>
        <View style={styles.search}>
          <Inputs placeholder="Discover" fontWeight="300" width={260} />
          <Buttons
            width="16%"
            title={camera}
            onPress={() => navigation.navigate('CameraScreen')}
          />
        </View>
        <View style={styles.scroll}>
          <FlatList
            data={images}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <ImageLogo source={item.image} />;
            }}
          />
        </View>
      </View>
      <View style={styles.contents}>
        <FlatList
          data={content}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.content}>
                <Card
                  source={item.image}
                  content1={item.content1}
                  content2={item.content2}
                />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Content;

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    marginLeft: 20,
  },

  scroll: {
    marginLeft: 20,
    marginTop: 25,
  },
  content: {
    height: 400,
    width: 320,
    borderRadius: 10,
    marginTop: 50,
  },

  contents: {
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
});
