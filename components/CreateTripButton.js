import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

export default class PlusButton extends React.Component {
  render(){
    return (
      <View style={styles.button}>
        <Text style={styles.text}>+</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: '#417AE6',
      color: 'white',
      position: 'absolute',
      right: 15,
      bottom: 100,
    },
    text: {
      color: 'white',
      fontSize: 22,
      fontWeight: '600',
    },
});
