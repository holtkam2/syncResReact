const inputParams = (state = {deleteFiles: false, clearCache: false, runType: "test"}, action) => {
	const newState = {...state}
  switch (action.type) {

    case 'SET_RESOURCE_TYPE':
    	newState.resourceType = action.payload;
      return newState;

    case 'SET_LOCATION':
    	newState.location = action.payload;
    	return newState;

    case 'SET_DELETE_FILES':
    	newState.deleteFiles = !newState.deleteFiles;
    	return newState;

    case 'SET_CLEAR_CACHE':
    	newState.clearCache = !newState.clearCache;
    	return newState;

    case 'SET_RUN_TYPE':
    	if (newState.runType === "test"){
    		newState.runType = "live"
    	} else {
    		newState.runType = "test"
    	}
    	return newState;

  	case 'SET_EMAIL':
  		newState.email = action.payload;
  	  return newState;

    case 'RESET_EVERYTHING':
      return {deleteFiles: false, clearCache: false, runType: "test"}

    default:
      return state;
  }
};

export default inputParams;