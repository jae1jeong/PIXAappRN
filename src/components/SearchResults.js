import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
import useResults from '../hooks/useResults';
import ResultsDetail from './ResultsDetail';

const SearchResults = ({title, results, navigation}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={res => res.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default withNavigation(SearchResults);

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginStart: 10,
    fonstSize: 18,
    fontWeight: 'bold',
  },
});
