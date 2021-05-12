export const addSet = (details) => ({
  type: "ADD_SET",
  payload: details,
});

export const addExerciseToSession = (details) => ({
  type: "ADD_EXERCISE_TO_SESSION",
  payload: details,
});

export const createWorkout = (details) => ({
  type: "CREATE_WORKOUT",
  payload: details,
});


export const endWorkout = (details) => ({
  type: "END_WORKOUT",
  payload: details,
});
