import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red)
  //  
  return (
    <View style={styles.container}>
      <ColorCounter
        color="Red"
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
      />
      <ColorCounter color="Blue" />
      <ColorCounter color="Green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SquareScreen;
