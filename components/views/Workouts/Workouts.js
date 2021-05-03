import React from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import PredictiveInput from "../../common/PredictiveInput/PredictiveInput";
import Item from "../../common/Item";

const Workouts = ({ workouts = [], navigation }) => {
  const createWorkout = () => {
    navigation.navigate("CreateWorkout", { title: "Create Workout" });
  };

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      onPress={() => {
        navigation.navigate("WorkoutScreen", {
          workout: item,
          title: item.title,
        });
      }}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button onPress={createWorkout}>Create New Workout</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#ccc",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

const mapStateToProps = ({ workouts }) => ({ workouts });

export default connect(mapStateToProps)(Workouts);
