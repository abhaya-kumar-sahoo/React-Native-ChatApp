import React, {useState, useEffect} from 'react';
import {
  FlatList,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Back} from '../../components/Input/Inpits';

export const Galery = () => {
  const [visible, setIsVisible] = useState([]);

  useEffect(() => {
    checkPermission().then(() => {
      getPhotos();
    });
  }, []);
  const checkPermission = async () => {
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Image Permission',
        message: 'Images Gallery',
        buttonPositive: 'OK',
      },
    );
    return status === 'granted';
  };
  const getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 1000,
    });
    console.log('===============Barsa=====================');
    console.log(photos.edges);
    console.log('====================================');
    setIsVisible(photos.edges.map(edge => edge.node));
  };
  console.log('================Abhaya====================');
  console.log(visible);
  console.log('====================================');
  return (
    <LinearGradient colors={['#7F7FD5', '#86A8E7', '#91EAE4']}>
      <LinearGradient
        angle={90}
        colors={['#2B4339', '#2B4339']}
        style={{
          height: 60,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'gray',
          flexDirection: 'row',
        }}>
        <Back padding={5} />
        <Text
          style={{
            fontWeight: '900',
            color: 'white',
            fontSize: 30,
            marginLeft: 30,
          }}>
          Gallery
        </Text>
      </LinearGradient>
      <FlatList
        data={visible}
        numColumns={3}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{uri: item.image.uri}}
                style={{
                  width: 107,
                  height: 165,
                  padding: 10,
                  flex: 1,
                  backgroundColor: 'gray',
                  resizeMode: 'cover',
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#1ACA7E',
                }}
              />
            </View>
          );
        }}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});
