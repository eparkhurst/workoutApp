const INITIAL_STATE = {
  id: undefined,
  exercises: {},
};

const sessionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_EXERCISE_TO_SESSION": {
      const { exercise } = action.payload;
      const nextSession = { ...state };
      nextSession.exercises[exercise.id] = [];
      return nextSession;
    }
    case "ADD_SET": {
      const { exerciseId, set } = action.payload;
      const nextSession = { ...state };
      const currentExercise = state.exercises[exerciseId] || [];
      nextSession.exercises[exerciseId] = [...currentExercise, set];
      return nextSession;
    }
    case "CREATE_WORKOUT": {
      const { workout } = action.payload;
      const nextSession = {
        id: Date.now(),
        exercises: workout.exercises.reduce((p, c) => {
          p[c.id] = [];
          return p;
        }, {}),
        workoutTitle: workout.title,
      };
      return nextSession;
    }
    case "END_WORKOUT": {
      return {
        id: undefined,
        exercises: {},
      };
    }
    default:
      return state;
  }
};

export default sessionReducer;
