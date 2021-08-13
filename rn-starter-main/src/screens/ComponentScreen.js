import React from 'react';
import { TextBase, StyleSheet } from 'react-native';


const componentScreen = () => {
    return (
        <Text style={styles.textStyle}>New component screen</Text>
    )
}

export default componentScreen;

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: "bold",
        fontSize: 30,
        color: "lightblue"
    }
});
