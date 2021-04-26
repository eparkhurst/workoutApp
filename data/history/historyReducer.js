

const INITIAL_STATE = {
    123908625: {
        workoutId: '123abc',
        workoutTitle: 'Shoulders',
        exercises: {
            1: []
        }
    }
};

const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_SET':{
        console.log(action.payload);
        const { workoutId, exerciseId, set } = action.payload;
        const currentWorkout = {...state[workoutId]}
        const currentExercixeHistory = currentWorkout.exercises[exerciseId] ? [...currentWorkout.exercises[exerciseId], set]:[set]
        currentWorkout.exercises = {...currentWorkout.exercises, [exerciseId]: currentExercixeHistory}

        return {...state,  [workoutId]: currentWorkout}
    }
    case 'CREATE_WORKOUT': {
        const {workoutId, workoutTitle} = action.payload;
        const newWorkout = {
            workoutId,
            workoutTitle,
            exercises: {}
        }
        return {...state,  [workoutId]: newWorkout}
    }
    default:
      return state
  }
};

export default historyReducer;