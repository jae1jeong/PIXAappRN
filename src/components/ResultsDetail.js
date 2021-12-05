import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: result.webformatURL}} />
      <Text style={styles.tag}>tags: {result.tags}</Text>
      <Text>
        {result.views} Views, {result.likes} Likes
      </Text>
    </View>
  );
};

export default ResultsDetail;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  tag: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
