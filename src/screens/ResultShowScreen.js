import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const [result, setResult] = useState(null);

  const getPhoto = async id => {
    const response = await yelp.get(`&id=${id}`);
    setResult(response.data.hits[0]);
  };

  useEffect(() => {
    getPhoto(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      {result !== null ? (
        <View>
          <Text style={styles.detailTitle}>Tag: {result.tags}</Text>
          <Image
            style={styles.detailImage}
            source={{uri: result.webformatURL}}
          />
        </View>
      ) : null}
    </View>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
  detailImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    alignSelf: 'center',
  },
  detailTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 30,
  },
});
