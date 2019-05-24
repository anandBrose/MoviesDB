import { combineReducers } from 'redux';
import headerReducer from "./headerReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
	headerReducer: headerReducer,
	profileReducer: profileReducer
});