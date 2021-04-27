import React, {useState} from 'react';
import { StyleSheet, Text } from 'react-native';
import { Provider, Portal, Modal, Button, Colors, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';

import { addSet } from '../data/session/sessionActions';

const Exercise = ({ route, addThatSet, currentSession }) => {
    const [showInputs, toggleInputs] = useState(false);
    const [reps, updateReps] = useState('');
    const [weight, updateWeight] = useState('');

    const { exercise } = route.params;
    const exerciseHistory = currentSession.exercises[exercise.id] || [];

    const hideModal = () => toggleInputs(false);

    const addSet = () => {
        addThatSet({ set: { weight, reps }, exerciseId: exercise.id})
        updateReps('')
        updateWeight('')
        toggleInputs(false)
    }

    return ( 
        <Provider style={styles.container}>
            {exerciseHistory.map((set, i) => {
                return (<Text key={`set${i}`}>
                    {`${set.weight} lbs / ${set.reps} reps`}
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

const mapStateToProps = ({currentSession}) => ({ currentSession });

const mapDispatchToProps = ((dispatch) => ({
    addThatSet: (setDetails) => dispatch(addSet(setDetails))
}));
  
export default connect(mapStateToProps, mapDispatchToProps)(Exercise);