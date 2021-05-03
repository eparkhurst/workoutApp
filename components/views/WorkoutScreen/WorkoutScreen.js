import React from "react";
import { connect } from "react-redux";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { Button, Chip } from "react-native-paper";
import Item from "../../common/Item";

import {
  createWorkout,
  endWorkout,
} from "../../../data/session/sessionActions";
import { saveWorkout } from "../../../data/history/historyActions";

const WorkoutScreen = ({
  navigation,
  route,
  _createWorkout,
  currentSession,
  _saveWorkout,
  _endWorkout,
}) => {
  const workout = route.params.workout;
  const startWorkout = () => {
    _createWorkout({ workout });
  };

  const finishWorkout = () => {
    _saveWorkout({ workout: currentSession });
    _endWorkout();
  };

  const getHistory = (exerciseId) => {
    const sets = currentSession.exercises[exerciseId];
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
    <View>
      <FlatList
        data={workout.exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        extraData={currentSession}
      />
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
          onPress={() => {}}
          // contentStyle={styles.myButton}
          style={styles.myButton}
          mode="outlined"
        >
          Edit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  historyContainer: {
    display: "flex",
    flexDirection: "row",
  },
  myButton: {
    width: "fit-content",
  },
});

const mapStateToProps = ({ currentSession }) => ({ currentSession });

const mapDispatchToProps = (dispatch) => ({
  _createWorkout: (setDetails) => dispatch(createWorkout(setDetails)),
  _endWorkout: (setDetails) => dispatch(endWorkout(setDetails)),
  _saveWorkout: (setDetails) => dispatch(saveWorkout(setDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutScreen);
