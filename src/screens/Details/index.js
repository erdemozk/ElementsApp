import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import ElementReact from '../../components/ElementRect';


const Details = ({ route }) => {

  //const data = require('../../core/data.json');
  const { selected, hex } = route.params;

  return (
    <SafeAreaView
      style={{
        backgroundColor: hex != null ? `#${hex}` : "#A0AFB7",
        flex: 1,
      }}>
      <ScrollView>
        <ElementReact selected={selected}/>

        <View
          style={{
            padding: 22,
          }}>
          <Text
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              paddingBottom: 10,
            }}>
            Element Summary
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
            }}>
            {selected.summary}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 22,
  },
  headerTitle: {
    fontSize: 24,
    paddingBottom: 10,
    color: '#1D2326',
  },
});

export default Details;
