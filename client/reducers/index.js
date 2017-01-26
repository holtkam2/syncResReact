import { combineReducers } from 'redux';
import currentNumber from './currentNumber';
import currentOperation from './currentOperation'

const reducers = combineReducers({
	currentNumber,
	currentOperation,
});

export default reducers;