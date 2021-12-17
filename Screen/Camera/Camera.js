import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
const color = '#1f8b7f';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {Buttons} from '../../components/Button/Button';
import RNFS from 'react-native-fs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const Icons = <Icon name="camera-reverse-outline" size={30} color="white" />;
export const Camera = ({initialProps}) => {
  const navigation = useNavigation();
  const [name, setName] = useState(0);
  const [cameraChange, setCameraChange] = useState(true);
  const [image, setImage] = useState([
    {
      newFlePath:
        '/storage/emulated/0/Android/data/com.chatapp/filesimage0.jpg',
    },
  ]);
  const [{cameraRef}, {takePicture}] = useCamera(null);
  const handleCamera = async () => {
    setName(name + 1);
    try {
      const data = await takePicture();
      const filePath = data.uri;
      const newFlePath = RNFS.ExternalDirectoryPath + `image${name}.jpg`;
      RNFS.moveFile(filePath, newFlePath)
        .then(() => {
          console.log(newFlePath);
          setImage([...image, {newFlePath}]);
          console.log(image);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  };
  return (
    <RNCamera
      ref={cameraRef}
      type={cameraChange ? 'front' : 'back'}
      flashMode="auto"
      onPictureTaken={() => alert('Hi')}
      style={styles.preview}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <LinearGradient
          colors={['#833ab4', '#fd1d1d', '#fcb045']}
          style={{
            marginTop: 550,
            backgroundColor: 'blue',
            width: 50,
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="images-outline"
            size={30}
            color="white"
            onPress={() => navigation.navigate('Galery')}
          />
        </LinearGradient>

        <Buttons
          title="Capture"
          width="40%"
          marginTop={550}
          colors={['#11998e', '#38ef7d']}
          onPress={() => handleCamera()}
        />
        <Buttons
          title={Icons}
          width="14%"
          marginTop={550}
          colors={['#33ccff', '#ff99cc']}
          onPress={() => setCameraChange(!cameraChange)}
        />
      </View>
    </RNCamera>
  );
};

const styles = StyleSheet.create({
  preview: {flex: 1},
});
