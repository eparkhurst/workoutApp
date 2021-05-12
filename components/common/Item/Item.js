import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';

const Item = ({ disabled, title, onPress, right, left }) => (
  <View>
    <List.Item
      title={title}
      onPress={() => onPress()}
      right={(props) => right}
      left={(props) => left}
      disabled={disabled}
    />
    <Divider />
  </View>
);

const styles = StyleSheet.create({
  item: {
    padding: 20,

    marginHorizontal: 16,
  },
});
export default Item;
