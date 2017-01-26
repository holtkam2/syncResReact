import { combineReducers } from 'redux';
import numbers from './currentNumber';
import currentOperation from './currentOperation'

const reducers = combineReducers({
	numbers,
	currentOperation,
});

export default reducers;