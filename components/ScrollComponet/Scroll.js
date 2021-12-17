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
export const Scroll = () => {
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
      content: 'Be',
      content2: 'Famous',
    },
    {
      url: require('../../assets/login2.jpeg'),
      content: 'Create',
      content2: 'Content',
    },
    {
      url: require('../../assets/login3.jpeg'),
      content: 'Shoot',
      content2: 'Potraits',
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
          <View style={{}}>
            <Text style={styles.titleLogin}>{value.content}</Text>
            <Text style={styles.titleLogin}>{value.content2}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  titleLogin: {
    fontSize: 50,
    textAlign: 'left',
    color: 'white',
    fontWeight: '900',
    marginLeft: 40,
    lineHeight: 50,
  },
});
