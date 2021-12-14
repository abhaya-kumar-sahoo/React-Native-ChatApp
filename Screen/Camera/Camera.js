import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
const color = '#1f8b7f';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {Buttons} from '../../components/Button/Button';
import RNFS from 'react-native-fs';
export const Camera = ({initialProps}) => {
  const [name, setName] = useState(0);
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
    <RNCamera ref={cameraRef} type={'front'} style={styles.preview}>
      <Buttons
        title="Capture"
        width="40%"
        marginTop={550}
        onPress={() => handleCamera()}
      />
    </RNCamera>
  );
};

const styles = StyleSheet.create({
  preview: {flex: 1, alignItems: 'center'},
});
