import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import persist from './data/configureStore';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StyleSheet, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import WorkoutScreen from './components/WorkoutScreen';
import Workouts from './components/Workouts';
import Exercise from './components/Exercise';
import History from './components/History';

const Stack = createStackNavigator();
const {store, persistor} = persist();


const Tab = createMaterialBottomTabNavigator();

function WorkoutApp() {
  return (
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
      name="WorkoutScreen"
      component={WorkoutScreen}
      options={({ route }) => ({ title: route.params.title })}
    />
    <Stack.Screen
      name="Exercise"
      component={Exercise}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Tab.Navigator
               activeColor="#f0edf6"
               inactiveColor="#3e2465"
               barStyle={{ backgroundColor: '#694fad' }}
            >
              <Tab.Screen
                name="WorkoutApp"
                component={WorkoutApp}
                options={{
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
                  tabColor: '#009688',
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="chart-line" color={color} size={26} />
                  ),
                }}
              />
            </Tab.Navigator>
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
