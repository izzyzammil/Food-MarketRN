import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';

const FoodCard = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>Cherry Healthy</Text>
        <Rating />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {height: 7, width: 0},
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  image: {width: 200, height: 140, resizeMode: 'cover'},
  content: {padding: 12},
  text: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  ratingContainer: {flexDirection: 'row'},
  starContainer: {flexDirection: 'row'},
});
