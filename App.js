import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.topRow}>
        <View style={[styles.box, styles.red]}></View>
        <View style={[styles.box, styles.blue]}></View>
        <View style={[styles.box, styles.green]}></View>
        <View style={[styles.box, styles.yellow]}></View>
      </View>

      <View style={styles.bottom}></View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topRow: {
    flexDirection: 'row',
    height: 150,
    backgroundColor: '#e8f0ed',
    alignItems: 'flex-start', 
  },

  box: {
    flex: 1,
  },

  red: {
    backgroundColor: 'red',
    height: 30,
  },

  blue: {
    backgroundColor: 'blue',
    height: 60,
  },

  green: {
    backgroundColor: 'green',
    height: 90,
  },

  yellow: {
    backgroundColor: 'orange',
    height: 120,
  },

  bottom: {
    flex: 1,
    backgroundColor: 'gray',
  },
});