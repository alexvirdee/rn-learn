import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const componentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>New component screen</Text>
    </View>
  );
};

export default componentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 6,
    borderColor: 'magenta',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'red',
  },
});
