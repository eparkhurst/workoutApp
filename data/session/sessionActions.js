export const addSet = details => (
    {
      type: 'ADD_SET',
      payload: details,
    }
  );

export const createWorkout = details => (
    {
      type: 'CREATE_WORKOUT',
      payload: details,
    }
  );