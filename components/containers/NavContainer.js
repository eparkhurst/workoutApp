import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import WorkoutScreen from '../views/WorkoutScreen';
import Workouts from '../views/Workouts';
import Exercise from '../views/Exercise';
import History from '../views/History';
import CreateWorkout from '../views/CreateWorkout';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function WorkoutStuff({ currentSession }) {
  return (
    <Stack.Navigator
      initialRouteName="Workouts"
      screenOptions={{
        headerRight: () => {
          if (currentSession.id) {
            return (
              <Button
                onPress={() => alert('This is a button!')}
                title={`Doing ${currentSession.workoutTitle}`}
              />
            );
          }
        },
      }}
    >
      <Stack.Screen
        name="Workouts"
        component={Workouts}
        options={{ title: 'Get Strong' }}
      />
      <Stack.Screen
        name="WorkoutScreen"
        component={WorkoutScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="Exercise"
        component={Exercise}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="CreateWorkout"
        component={CreateWorkout}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

const NavContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
      >
        <Tab.Screen
          name="WorkoutApp"
          component={WorkoutApp}
          options={{
            tabBarColor: '#694fad',
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{
            tabBarColor: '#009688',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="chart-line"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = ({ currentSession }) => ({ currentSession });

const WorkoutApp = connect(mapStateToProps)(WorkoutStuff);

export default NavContainer;
