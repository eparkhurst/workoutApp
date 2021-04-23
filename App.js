import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Basic from './components/WorkoutScreen';
import Workouts from './components/Workouts';
import Exercise from './components/Exercise';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import workoutReducer from './data/workoutReducer';

const Stack = createStackNavigator();
const store = createStore(workoutReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Workouts"
            component={Workouts}
            options={{ title: 'Get Strong' }}
          />
          <Stack.Screen
           name="Profile"
            component={Basic}
            options={({ route }) => ({ title: route.params.title })}
          />
          <Stack.Screen
            name="Exercise"
            component={Exercise}
            options={({ route }) => ({ title: route.params.title })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
