import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { connect } from 'react-redux';

const getExerciseNumber = (workout) => {
    return Object.keys(workout.exercises).reduce((p, c) => {
        const next =  workout.exercises[c].length > 0 ? p += 1 : p
        return next
    }, 0)
}

const History = ({ history }) => {
    return(
    <View >
        {history.map(workout => (
        <Card key={workout.id} style={styles.card}>
            <Card.Title title={workout.workoutTitle}/>
            <Card.Content>
                <Text>{`completed: ${new Date(workout.id).toLocaleDateString("en-US")}`}</Text>
                <Text>{`exercises: ${getExerciseNumber(workout)}`}</Text>
            </Card.Content>
        </Card>))}
    </View>)
}

const styles = StyleSheet.create({
    card: {
        marginBottom: '20px',
    },

});

const mapStateToProps = ({ history }) => ({ history });

export default connect(mapStateToProps)(History);