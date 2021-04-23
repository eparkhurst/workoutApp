import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const Item = ({ title, onPress }) => (
    <View >
        <TouchableOpacity
        style={styles.item}
            onPress={() => onPress()}
         >
             <Text style={styles.title}>
                {title}
             </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ccc',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default Item;