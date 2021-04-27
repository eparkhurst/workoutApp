import React from 'react'
import { StyleSheet, Text, FlatList, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Item from './Item';

const Workouts = ({ workouts = [], navigation }) => {
    console.log(workouts)
    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            onPress={() => {
                navigation.navigate('WorkoutScreen', {workout:item, title: item.title })
            }}
        />
      );
    return ( 
        <SafeAreaView style={styles.container}>
            <FlatList
                data={workouts}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
    },
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

const mapStateToProps = ({workouts}) => ({ workouts });
  
export default connect(mapStateToProps)(Workouts);