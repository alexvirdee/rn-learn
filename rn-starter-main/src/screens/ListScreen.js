import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const friends = [
  { name: 'friend#1' },
  { name: 'friend#2' },
  { name: 'friend#3' },
  { name: 'friend#4' },
  { name: 'friend#5' },
  { name: 'friend#6' },
  { name: 'friend#7' },
  { name: 'friend#8' },
  { name: 'friend#9' },
  { name: 'friend#10' },
];

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return <Text style={styles.textStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d2d2',
  },
  textStyle: {
      marginVertical: 50
  }
});
