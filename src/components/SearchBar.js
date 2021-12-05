import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.searchBarView}>
      <Icon style={styles.searchIcon} name="search" color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarView: {
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  searchIcon: {
    alignSelf: 'center',
    fontSize: 10,
    padding: 10,
  },

  inputStyle: {
    flex: 1,
  },
});
