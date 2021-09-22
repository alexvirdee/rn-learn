import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageDetail from '../Components/ImageDetail';
import Forest from "../../assets/forest.jpg";
import City from "../../assets/city.jpg";
import Desert from "../../assets/desert.jpg";
import Mountains from "../../assets/mountains.jpg";

const ImageScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Images</Text>
      <View style={styles.hr}></View>
      <ImageDetail title="Forest" image={Forest} score="7" />
      <ImageDetail title="City" image={City} score="6" />
      <ImageDetail title="Desert" image={Desert} score="9" />
      <ImageDetail title="Mountains" image={Mountains} score="10" />
    </ScrollView>
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
    marginBottom: 10
  },
});

export default ImageScreen;
