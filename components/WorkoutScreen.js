import React, {useEffect} from 'react';
import { SafeAreaView, StyleSheet, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import Item from './Item';

import { createWorkout } from '../data/session/sessionActions';


const WorkoutScreen = ({navigation, route, _createWorkout, currentSession}) => {
    const workout = route.params.workout;
    console.log(currentSession)
    const startWorkout = () => {
        _createWorkout({ workoutTitle: workout.title })
    }

    const renderItem = ({ item }) => (
        <Item
            title={item.title}
            onPress={() => {
                console.log(currentSession)
                if(currentSession.id) {
                    navigation.navigate('Exercise', {exercise: item, title: item.title })
                }
            }}
        />
      );
    return ( 
        <SafeAreaView style={styles.container}>
            <Button 
                title="hey"
                onPress={startWorkout}
            />
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

const mapStateToProps = ({ currentSession}) => ({ currentSession });

const mapDispatchToProps = ((dispatch) => ({
    _createWorkout: (setDetails) => dispatch(createWorkout(setDetails))
}));
  
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutScreen);

