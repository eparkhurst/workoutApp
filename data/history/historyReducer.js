const INITIAL_STATE = [];

const historyReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
  case 'SAVE_WORKOUT':{
      const { workout } = action.payload;
      return [...state, workout ]
  }
  default:
    return state
}
};

export default historyReducer;