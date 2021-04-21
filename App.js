import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkoutContext } from './workoutContext';
import Basic from './components/Basic';
import Workouts from './components/workouts';

const Stack = createStackNavigator();

export default function App() {
  const [workouts, setWorkouts] = useState(['Monday', 'Tuesday'])
  return (
    <WorkoutContext.Provider
      value={{
        workouts
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Workouts"
            component={Workouts}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={Basic} />
        </Stack.Navigator>
      </NavigationContainer>
    </WorkoutContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
