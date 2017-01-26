import { combineReducers } from 'redux';
import currentNumber from './currentNumber';

const reducers = combineReducers({
	currentNumber,
});

export default reducers;