import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

const SquareScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Square Screen App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default SquareScreen;