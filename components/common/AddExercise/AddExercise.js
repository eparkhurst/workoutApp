import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import PredictiveInput from "../PredictiveInput";
import jsonData from "../../../data/exerciseData";

const AddExercise = ({onSubmit}) => {

  const [exercise, updateExercise] = useState({})
  
  const onTextChange = (e) => {
    updateExercise(e)
  };

  const addExercise = (e) => {
    onSubmit(exercise)
  };

  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  newExerciseCard: {
    zIndex: 1,
    display: "flex",
    flexDirection: "row",
  },
});

export default AddExercise;
