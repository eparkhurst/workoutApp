import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';

const History = ({ title, onPress, right }) => (
    <Text >
        History
        <Divider />
    </Text>
);

const styles = StyleSheet.create({
    item: {
        padding: 20,

        marginHorizontal: 16,
    },

});

export default History;