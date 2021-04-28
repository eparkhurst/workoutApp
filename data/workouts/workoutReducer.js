
const INITIAL_STATE = [
    {
        title: 'Shoulder Day',
        id:'123abc',
        exercises: [
            {
                 title: 'Lat Raises',
                 id: '1',
            },
            { title: 'Delts', id: '2', },
            { title: 'Pull Downs', id: '18', }
        ]
    },
    {
        title: 'Chest Day',
        id:'ergebc',
        exercises: [
            { title: 'Bench', id: '3', },
            { title: 'Decline', id: '4', }
        ]
    },
    {
        title: 'Leg Day',
        id:'00998bh',
        exercises: [
            { title: 'Squats', id: '5', },
            { title: 'Calf Raises', id: '6', }
        ]
    },
    {
        title: 'Other',
        id:'1p998bh',
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