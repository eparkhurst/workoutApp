export const addWorkout = workout => (
    {
      type: 'ADD_WORKOUT',
      payload: workout,
    }
  );

export const updateWorkout = workout => (
    {
      type: 'UPDATE_WORKOUT',
      payload: workout,
    }
  );