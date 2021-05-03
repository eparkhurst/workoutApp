import { combineReducers } from "redux";
import workoutReducer from "./workouts/workoutReducer";
import historyReducer from "./history/historyReducer";
import sessionReducer from "./session/sessionReducer";

export default combineReducers({
  history: historyReducer,
  workouts: workoutReducer,
  currentSession: sessionReducer,
});
