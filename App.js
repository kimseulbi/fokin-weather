import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>Hello</Text>
      </View>
      <View style={styles.blueView}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueView: {
    flex: 3,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
