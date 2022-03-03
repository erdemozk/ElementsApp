import React from 'react'
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    SafeAreaView,
  } from 'react-native';

const ElementReact = ({selected}) => {
    return (
        
        <View
            style={{
                height: Dimensions.get('window').width / 1.5,
                width: Dimensions.get('window').width / 1.5,
                alignSelf: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 30,
            }}>
            <View
                style={{
                    flex: 0.5,
                }}>
                <Text
                    style={{
                        alignSelf: 'flex-start',
                        justifyContent: 'flex-start',
                        fontSize: 24,
                        paddingLeft: 7,
                        paddingTop: 5,
                    }}>
                    {selected.number}
                </Text>
            </View>
            <View
                style={{
                    flex: 0.9,
                }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        fontSize: 50,
                    }}>
                    {selected.symbol}
                </Text>
            </View>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        fontSize: 18,
                        paddingBottom: 10,
                        color: '#1D2326',
                        textAlign: 'center',
                    }}>
                    {selected.name}
                    {"\n"}
                    {selected.atomic_mass}
                </Text>
            </View>
        </View>
    )
}

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

export default ElementReact
