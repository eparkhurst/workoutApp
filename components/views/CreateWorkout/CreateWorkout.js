import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Item from "../../common/Item";
import PredictiveInput from "../../common/PredictiveInput/PredictiveInput";
import jsonData from "../../../data/exerciseData";
import {
  createWorkout,
  updateWorkout,
} from "../../../data/workouts/workoutActions";
import { Card, IconButton } from "react-native-paper";
// import { saveWorkout } from '../../data/history/historyActions';

const CreateWorkout = ({ workouts, _createWorkout, _updateWorkout }) => {
  const [timeStamp] = useState(Date.now());
  const [newExercise, updateNewExercise] = useState("");
  const currentWorkout = workouts.find((workout) => workout.id == timeStamp);

  // useEffect(() => {
  //     _createWorkout({
  //         id: timeStamp,
  //     })
  // }, [])

  const onTextChange = (exercise) => {
    updateNewExercise(exercise);
  };

  console.log(currentWorkout);
  const renderItem = ({ item }) => (
    <Item
      right={
        currentSession.workoutTitle === workout.title && getHistory(item.id)
      }
      title={item.title}
      disabled={!currentSession.workoutTitle === workout.title}
      onPress={() => {
        navigation.navigate("Exercise", { exercise: item, title: item.title });
      }}
    ></Item>
  );
  return (
    <View style={styles.pageView}>
      <Text>create new workout</Text>
      <Card style={styles.newExerciseCard}>
        <Card.Content style={styles.newExerciseCard}>
          <PredictiveInput data={jsonData} onChange={onTextChange} />
          <IconButton
            icon="plus"
            color="blue"
            size={20}
            onPress={() => console.log("Pressed")}
          />
        </Card.Content>
      </Card>
      {/* <FlatList
                data={workout.exercises}
                renderItem={renderItem}
                keyExtractor={item => item.title}
                extraData={currentSession}
            /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  pageView: {
    padding: "20px",
  },
  newExerciseCard: {
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
