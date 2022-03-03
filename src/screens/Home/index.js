import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Home = ({navigation}) => {

  const data = require('../../core/data.json');

  const Item = ({ item, hex }) => (
    <TouchableOpacity 
      onPress={() => navigation.navigate('Details', {selected: item, hex: hex})}
      style={[
        styles.item, 
        { backgroundColor: hex != null ? `#${hex}` : "#A0AFB7" }]
      }>
      <Text 
        adjustsFontSizeToFit
        numberOfLines={1}
        style={styles.title}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item item={item} hex={item["cpk-hex"]}/>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data.elements}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.number}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'grey',
    paddingVertical: 15,
    paddingHorizontal: 3,
    width: Dimensions.get('window').width / 2 - 22,
    marginVertical: 10,
    marginHorizontal: 11,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 32,
    color: '#1D2326',
  },
});

export default Home;
