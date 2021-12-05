import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import useResults from '../hooks/useResults';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [getComputerhApi, computerResults] = useResults('computer');
  const [getFashoinApi, fashionResults] = useResults('fashion');
  const [getFoodApi, foodResults] = useResults('food');

  const filterPhotoByLikes = (views, results) => {
    return results.filter(res => {
      return res.views >= views;
    });
  };
  return (
    <View styles={styles.screenView}>
      <SearchBar
        term={term}
        onTermChange={newTerm => {
          setTerm(newTerm);
        }}
      />
      {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}
      <ScrollView>
        <SearchResults
          navigation={navigation}
          results={filterPhotoByLikes(0, computerResults)}
          title="Computer"
        />
        <SearchResults
          navigation={navigation}
          results={filterPhotoByLikes(0, fashionResults)}
          title="Fashion"
        />
        <SearchResults
          navigation={navigation}
          results={filterPhotoByLikes(0, foodResults)}
          title="Food"
        />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
  },
});
