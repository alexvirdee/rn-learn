import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ImageDetail = (props) => {
  //
  return (
    <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 25 }}>
        {props.title}
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: 18}}>
       Score: {props.score}
      </Text>
      </View>
      <Image style={{ width: 250, height: 185, margin: 25 }} source={props.image} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ImageDetail;
