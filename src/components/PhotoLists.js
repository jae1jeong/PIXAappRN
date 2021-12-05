import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

const PhotoLists = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PhotoLists;

const styles = StyleSheet.create({
  title: {
    fonstSize: 18,
    fontWeight: 'bold',
  },
});
