import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  //
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.hr}></View>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      ></Button>
       <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("Lists")}
      ></Button>
       <Button
        title="Go to Images"
        onPress={() => navigation.navigate("Images")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 15,
  },
  hr: {
    borderBottomWidth: 2,
  },
  mainContent: {
    marginTop: 100,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'red',
    padding: 45,
    borderRadius: 35,
  },
});

export default HomeScreen;
