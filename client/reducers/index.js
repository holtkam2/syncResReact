import { combineReducers } from 'redux';
import inputParams from './inputParamsReducer';
import results from './resultsReducer';
import images from './imagesReducer';

const reducers = combineReducers({
	inputParams,
	results,
	images
});

export default reducers;