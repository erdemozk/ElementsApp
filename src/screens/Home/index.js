import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const Home = () => {

  const data = require('../../core/data.json');

  const Item = ({ item, hex }) => (
    <View 
      style={[
        styles.item, 
        { backgroundColor: hex != "" ? `#${hex}` : "grey" }]
      }>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item item={item} hex={item["cpk-hex"]}/>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data.elements}
        renderItem={renderItem}
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
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 22,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
