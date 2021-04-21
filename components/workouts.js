import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native';
import { WorkoutContext } from '../workoutContext';

export default class  Workouts extends React.Component{
    render(){
        return (
            <View style={styles.container}>
            <Text>workout</Text>   
            {this.context.workouts.map((workout)=>{           
                return <Text>{workout}</Text>   
            })}
            <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Jane' })
                }
            />     
          </View>
        )
    }
    
}

Workouts.contextType = WorkoutContext;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });