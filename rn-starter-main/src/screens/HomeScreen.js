import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <View style={styles.hr}></View>
      <View style={styles.mainContent}>
        <Text style={{ color: 'red', fontSize: 26, fontWeight: 'bold' }}>
          NEW CONTENT HERE
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    padding: 15,
  },
  hr: {
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
  },
  mainContent: {
    marginTop: 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'lightblue',
    padding: 45,
    borderRadius: 35
  },
});

export default HomeScreen;
