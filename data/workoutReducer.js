import { combineReducers } from 'redux';

const INITIAL_STATE = [
    {
        title: 'Shoulders',
        exercises: [
            {
                 title: 'Lat Raises',
                 id: '1',
            },
            { title: 'Delts', id: '2', }
        ]
    },
    {
        title: 'Chest',
        exercises: [
            { title: 'Bench', id: '3', },
            { title: 'Decline', id: '4', }
        ]
    },
    {
        title: 'Legs',
        exercises: [
            { title: 'Squats', id: '5', },
            { title: 'Calf Raises', id: '6', }
        ]
    },
];

const workoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT':
        return [...state, action.payload]
    default:
      return state
  }
};

export default combineReducers({
  workouts: workoutReducer
});