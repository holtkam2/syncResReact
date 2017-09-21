const results = (state = {}, action) => {
  switch (action.type) {

    case 'DISPLAY_RESULTS':
    	state = action.payload;
      return state;

    case 'RESET_EVERYTHING':
     	return {};

    default:
      return state;
  }
};

export default results;