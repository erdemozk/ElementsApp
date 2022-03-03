import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const Details = () => {

  const data = require('../../core/data.json');

  const Item = ({ item }) => (
    <View 
      style={[
        styles.item, 
        { backgroundColor: item.cpkHexColor != "" ? `#${item.cpkHexColor}` : "grey" }]
      }>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.atomicNumber}
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

export default Details;
