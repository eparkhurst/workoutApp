
const INITIAL_STATE = [
    {
        title: 'Shoulders',
        id:'123abc',
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
        id:'ergebc',
        exercises: [
            { title: 'Bench', id: '3', },
            { title: 'Decline', id: '4', }
        ]
    },
    {
        title: 'Legs',
        id:'00998bh',
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

export default workoutReducer;