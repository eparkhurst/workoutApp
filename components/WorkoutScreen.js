import React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import Item from './Item';

const Basic = ({navigation, route}) => {
    const workout = route.params.workout;
    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            onPress={() => {
                navigation.navigate('Exercise', {exersize:item, title: item.title })
            }}
        />
      );
    return ( 
        <SafeAreaView style={styles.container}>
            <FlatList
                data={workout.exercises}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Basic;

