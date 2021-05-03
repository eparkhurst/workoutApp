import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { TextInput } from "react-native-paper";
import Item from "../../common/Item";
import PredictiveInput from "../../common/PredictiveInput/PredictiveInput";
import jsonData from "../../../data/exerciseData";
import {
  createWorkout,
  updateWorkout,
} from "../../../data/workouts/workoutActions";
import { Card, IconButton } from "react-native-paper";

const CreateWorkout = ({ workouts, _createWorkout, _updateWorkout, navigation }) => {
  const [timeStamp] = useState(`${Date.now()}`);
  const [newExercise, updateNewExercise] = useState("");
  const [newTitle, updateTitle] = useState("");
  const currentWorkout =
    workouts.find((workout) => workout.id == timeStamp) || {};

  useEffect(() => {
    _createWorkout({
      id: timeStamp,
      exercises: [],
    });
  }, []);

  const onTextChange = (exercise) => {
    updateNewExercise(exercise);
  };

  const commitTitle = () => {
    navigation.setParams({ title: newTitle })
    _updateWorkout({ title: newTitle, ...currentWorkout });
  };

  const addExercise = (e) => {
    if(!newExercise.id) newExercise.id = Date.now();
    const exercises = [...currentWorkout.exercises, newExercise];
    _updateWorkout({ ...currentWorkout, exercises });
  };

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      disabled={true}
      onPress={() => {
        console.log('hit');
      }}
    ></Item>
  );

  console.log(currentWorkout);

  return (
    <View style={styles.pageView}>
      {!currentWorkout.title ? (
        <Card style={styles.newExerciseCard}>
          <Card.Title title="Add Workout Title" />
          <Card.Content style={styles.newExerciseCard}>
            <TextInput value={newTitle} onChangeText={updateTitle} />
            <IconButton
              icon="plus"
              color="blue"
              size={20}
              onPress={commitTitle}
            />
          </Card.Content>
        </Card>
      ) : (
        <Card style={styles.newExerciseCard}>
          <Card.Title title="Add Exercise" />
          <Card.Content style={styles.newExerciseCard}>
            <PredictiveInput
              data={jsonData}
              onChange={onTextChange}
              onSubmit={addExercise}
            />
          </Card.Content>
        </Card>
      )}
      <FlatList
        data={currentWorkout.exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageView: {
    padding: "20px",
  },
  newExerciseCard: {
    zIndex:1,
    display: "flex",
    flexDirection: "row",
  },
});

const mapStateToProps = ({ workouts }) => ({ workouts });

const mapDispatchToProps = (dispatch) => ({
  _createWorkout: (setDetails) => dispatch(createWorkout(setDetails)),
  _updateWorkout: (setDetails) => dispatch(updateWorkout(setDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkout);
