

const INITIAL_STATE = {
    id: undefined,
    exercises: {}
};

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_SET':{
        const { exerciseId, set } = action.payload;
        const nextSession = {...state}
        const currentExercise = state.exercises[exerciseId] || [];
        nextSession.exercises[exerciseId] = [...currentExercise, set]
        return nextSession
    }
    case 'CREATE_WORKOUT': {
        const nextSession = {
            id: Date.now(),
            exercises: {},
            workoutTitle: action.payload.workoutTitle
        }
        return nextSession
    }
    default:
      return state
  }
};

export default sessionReducer;