import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Item from '../../common/Item';
import PredictiveInput from '../../common/predictiveInput';
import jsonData from '../../../data/exerciseData';
// import { createWorkout, endWorkout } from '../../data/session/sessionActions';
// import { saveWorkout } from '../../data/history/historyActions';


const CreateWorkout = ({ workout }) => {

    const renderItem = ({ item }) => (
        <Item
            right={currentSession.workoutTitle === workout.title && getHistory(item.id)}
            title={item.title}
            disabled={!currentSession.workoutTitle === workout.title}
            onPress={() => {
                navigation.navigate('Exercise', {exercise: item, title: item.title })
            }}
        >
        </Item>
      );
    return ( 
        <View>
            <Text>
                create new workout
            </Text>
            <PredictiveInput data={jsonData} />
            {/* <FlatList
                data={workout.exercises}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                extraData={currentSession}
            /> */}
        </View>
    )
    
}

const styles = StyleSheet.create({
});

const mapStateToProps = ({ currentSession }) => ({ currentSession });

const mapDispatchToProps = ((dispatch) => ({
    // _createWorkout: (setDetails) => dispatch(createWorkout(setDetails)),
    // _endWorkout: (setDetails) => dispatch(endWorkout(setDetails)),
    // _saveWorkout: (setDetails) => dispatch(saveWorkout(setDetails)),
}));
  
export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkout);
