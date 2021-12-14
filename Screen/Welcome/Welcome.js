import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState, useRef, useCallback} from 'react';
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
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {Buttons} from '../../components/Button/Button';

const image1 = '../../assets/login1.jpeg';
const image2 = '../../assets/login2.jpeg';
const image3 = '../../assets/login2.jpeg';

const list = {
  image1: '../../assets/login1.jpeg',
  content1: 'Be Famous',
  image2: '../../assets/login2.jpeg',
  content2: 'Create Content',
  image3: '../../assets/login3.jpeg',
  content3: 'Shoot Potraits',
};
export const Welcome = () => {
  const [state, setState] = useState(1);
  var curTime = new Date().getSeconds();

  const navigation = useNavigation();

  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollRef = useRef();
  let intervalId = null;

  const onChange = () => {
    setDimension(Dimensions.get('window'));
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

  const onSlideChange = useCallback(() => {
    // Calculate newIndex here and use it to update your state and to scroll to the new slide
    const newIndex =
      selectedIndex === carouselImages.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: dimension.width * newIndex,
    });
  }, [selectedIndex]);

  const startInterval = useCallback(() => {
    intervalId = setInterval(onSlideChange, 3000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {
      // Clear the interval when component unmounts, otherwise you could have memory leaks
      clearInterval(intervalId);
    };
  }, [onSlideChange]);

  const onTouchStart = () => {
    // As soon as the user touches the slide, stop the automatic sliding
    clearInterval(intervalId);
  };

  const onTouchEnd = () => {
    // As soon as the user stops touching the slide, releases it, start the automatic sliding again
    startInterval();
  };

  const carouselImages = [
    {
      url: require('../../assets/login1.jpeg'),
      content1: 'Be Famous',
    },
    {
      url: require('../../assets/login2.jpeg'),
      content2: 'Create Content',
    },
    {
      url: require('../../assets/login3.jpeg'),
      content3: 'Shoot Potraits',
    },
  ];

  const setIndex = event => {
    let viewSize = event.nativeEvent.layoutMeasurement.width;
    let contentOffset = event.nativeEvent.contentOffset.x;
    let carouselIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(carouselIndex);
  };
  return (
    <View style={{width: dimension.width, flex: 1}}>
      <ScrollView
        horizontal
        ref={scrollRef}
        onMomentumScrollEnd={setIndex}
        showsHorizontalScrollIndicator={false}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        pagingEnabled>
        {carouselImages.map((value, key) => (
          <ImageBackground
            source={value.url}
            resizeMode="cover"
            style={[styles.image, {width: dimension?.width}]}
          />
        ))}
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          alignSelf: 'center',
        }}>
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
              Shoot potraits through our best AI driven Camera Feature{state}
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
      </View>
    </View>
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
