import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import {
  Button,
  Chip,
  Colors,
  IconButton,
  Modal,
  Provider,
  Portal,
  TextInput,
} from 'react-native-paper';
import Item from '../../common/Item';
import {
  addSet,
  addExerciseToSession,
  createWorkout,
  endWorkout,
} from '../../../data/session/sessionActions';
import { saveWorkout } from '../../../data/history/historyActions';
import { updateWorkout } from '../../../data/workouts/workoutActions';
import AddExercise from '../../common/AddExercise';

const WorkoutScreen = ({
  route,
  addThatSet,
  currentSession,
  _addExerciseToSession,
  _createWorkout,
  _saveWorkout,
  _endWorkout,
  _updateWorkout,
  workouts,
}) => {
  const [showAddExercise, updateShowExercise] = useState(false);
  const [editing, updateEditing] = useState(false);
  const [showInputs, toggleInputs] = useState(false);
  const [exercise, updateExercise] = useState();
  const [reps, updateReps] = useState('');
  const [weight, updateWeight] = useState('');
  const workout = route.params.workout;
  const currentWorkout = workouts.find((wo) => wo.id == workout.id) || {};
  console.log(currentWorkout);

  const hideModal = () => toggleInputs(false);

  const startWorkout = () => {
    _createWorkout({ workout: currentWorkout });
  };

  const finishWorkout = () => {
    _saveWorkout({ workout: currentSession });
    _endWorkout();
  };

  const addSetSubmit = () => {
    addThatSet({ set: { weight, reps }, exerciseId: exercise.id });
    updateReps('');
    updateWeight('');
    toggleInputs(false);
  };

  const addExercise = (newExercise) => {
    updateShowExercise(false);
    if (!newExercise.id) newExercise.id = Date.now();
    newExercise.id = String(newExercise.id);
    _addExerciseToSession({ exercise: newExercise });
    const exercises = [...currentWorkout.exercises, newExercise];
    _updateWorkout({ ...currentWorkout, exercises });
  };

  const getHistory = (exerciseId) => {
    const sets = currentSession.exercises[exerciseId];
    console.log('prettier');
    return (
      <View style={styles.historyContainer}>
        {sets.map((set, i) => (
          <Chip
            key={i + set.weight}
          >{`${set.weight} lbs / ${set.reps} reps`}</Chip>
        ))}
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Item
      right={
        currentSession.workoutTitle === currentWorkout.title &&
        getHistory(item.id)
      }
      left={
        editing && (
          <IconButton
            icon="close-box-outline"
            color={Colors.red500}
            size={20}
            onPress={() => console.log('Pressed')}
          />
        )
      }
      title={item.title}
      disabled={currentSession.workoutTitle !== currentWorkout.title}
      onPress={() => {
        toggleInputs(!showInputs);
        updateExercise(item);
      }}
    ></Item>
  );

  return (
    <Provider>
      <View style={styles.buttonContainer}>
        {!currentSession.id ? (
          <Button
            onPress={startWorkout}
            // contentStyle={styles.myButton}
            style={styles.myButton}
            mode="contained"
          >
            START
          </Button>
        ) : (
          <Button
            onPress={finishWorkout}
            // contentStyle={styles.myButton}
            style={styles.myButton}
            mode="contained"
          >
            END
          </Button>
        )}
        <Button
          onPress={() => {
            updateEditing(!editing);
          }}
          // contentStyle={styles.myButton}
          style={styles.myButton}
          mode="outlined"
        >
          Edit
        </Button>
      </View>

      <FlatList
        data={currentWorkout.exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        extraData={{ ...currentSession, editing }}
      />

      <Button
        onPress={() => {
          console.log(showAddExercise);
          updateShowExercise(true);
        }}
      >
        Add Exercise
      </Button>

      <Portal>
        <Modal
          visible={showInputs}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          <Text>{exercise?.title}</Text>
          <TextInput
            style={styles.input}
            mode="outlined"
            label="Weight"
            onChangeText={updateWeight}
            value={weight}
            keyboardType="numeric"
          />
          <TextInput
            mode="outlined"
            style={styles.input}
            label="Reps"
            onChangeText={updateReps}
            value={reps}
          />
          <Button
            title="Add Set"
            icon="plus-circle"
            color={Colors.red500}
            size={20}
            onPress={addSetSubmit}
            mode="contained"
          >
            Add Set
          </Button>
        </Modal>
      </Portal>

      <Portal>
        <Modal
          visible={showAddExercise}
          onDismiss={() => {
            updateShowExercise(false);
          }}
          contentContainerStyle={styles.containerStyle}
        >
          <AddExercise onSubmit={addExercise} />
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  historyContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  myButton: {
    width: 'fit-content',
  },
  container: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    minHeight: 350,
  },
  input: {
    marginBottom: 20,
  },
});

const mapStateToProps = ({ currentSession, workouts }) => ({
  currentSession,
  workouts,
});

const mapDispatchToProps = (dispatch) => ({
  addThatSet: (setDetails) => dispatch(addSet(setDetails)),
  _addExerciseToSession: (setDetails) =>
    dispatch(addExerciseToSession(setDetails)),
  _createWorkout: (setDetails) => dispatch(createWorkout(setDetails)),
  _endWorkout: (setDetails) => dispatch(endWorkout(setDetails)),
  _saveWorkout: (setDetails) => dispatch(saveWorkout(setDetails)),
  _updateWorkout: (setDetails) => dispatch(updateWorkout(setDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutScreen);
