import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider, Portal, Modal, Button, Colors, TextInput } from 'react-native-paper';

const Exercise = ({ route}) => {
    const [showInputs, toggleInputs] = useState(false);
    const [sets, updateSets] = useState([]);
    const [reps, updateReps] = useState();
    const [weight, updateWeight] = useState();

    const exercise = route.params.exercise;

    const hideModal = () => toggleInputs(false);

    const addSet = () => {
        updateSets([...sets, { weight, reps }])
        updateReps()
        updateWeight()
        toggleInputs(false)
    }
    return ( 
        <Provider style={styles.container}>
            {sets.map((set, i) => {
                return (<Text key={`set${i}`}>
                    {`${set.wieght} / ${set.reps}`}
                </Text>)
            })}
    
            <Button
                title='add set'
                onPress={() =>{
                    toggleInputs(!showInputs)
                }}
            >Add Set</Button>
            { showInputs &&
                <Portal>
                    <Modal visible={showInputs} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                    <TextInput
                        style={styles.input}
                        mode="outlined"
                        label="Weight"
                        onChangeText={updateWeight}
                        value={weight}
                        keyboardType="numeric"
                        />
                    <TextInput
                        mode="outlined"
                        style={styles.input}
                        label='Reps'
                        onChangeText={updateReps}
                        value={reps}
                        />
                    <Button
                        title="Add Set"
                        icon="plus-circle"
                        color={Colors.red500}
                        size={20}
                        onPress={addSet}
                        mode="contained"
                    >Add Set</Button>
                    </Modal>
                </Portal>
            }
        </Provider>
    )
    
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    inputContainer: {
        flexDirection: 'row'
    },
    containerStyle: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        minHeight: 350,
    },
    input: {
        marginBottom: 20,
    }
});

export default Exercise;