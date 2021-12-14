import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const image = '../../assets/ScrollImages/im5.jpeg';

export const Card = ({
  content1,
  content2,
  time = '43 min ago ...',
  name = 'Natalie Romania',
  source = require(image),
}) => {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <View style={styles.contentHeader}>
        <View>
          <ImageLogo />
        </View>
        <View>
          <Text style={{color: 'white', fontWeight: '900', fontSize: 20}}>
            {name}
          </Text>
          <Text style={{color: 'white'}}>{time}</Text>
        </View>
      </View>

      <Image style={styles.image} source={source} />

      <View style={{marginTop: -90, marginLeft: 20}}>
        <Text style={{color: 'white', fontWeight: '800', fontSize: 20}}>
          {content1}
        </Text>
        <Text style={{color: 'white', fontWeight: '300', fontSize: 14}}>
          {content2}
        </Text>
      </View>
    </View>
  );
};

export const ImageLogo = ({
  width = 50,
  height = 50,
  borderRadius = 25,

  marginRight = 10,
  borderWidth = 2,
  borderColor = '#F54B65',
  source = require(image),
}) => {
  return (
    <Image
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,

        marginRight: marginRight,
        borderWidth: borderWidth,
        borderColor: borderColor,
      }}
      source={source}
    />
  );
};

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
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,

    marginRight: 10,
    borderWidth: 2,
    borderColor: '#F54B65',
  },
  content: {
    height: 400,
    width: 320,
    borderRadius: 10,
    marginTop: 80,
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 15,
  },
  contents: {
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  contentHeader: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
