import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';

const Item = ({ title, onPress, right }) => (
    <View >
            <List.Item
             title={title}
              onPress={() => onPress()}
              right={props => right}
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