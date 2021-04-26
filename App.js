import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Basic from './components/WorkoutScreen';
import Workouts from './components/Workouts';
import { PersistGate } from 'redux-persist/integration/react'
import Exercise from './components/Exercise';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import persist from './data/configureStore';

const Stack = createStackNavigator();
const {store, persistor} = persist();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Workouts"
              screenOptions={{
                headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"

                  />
                ),
              }}
            >
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
        </PaperProvider>
      </PersistGate>
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
