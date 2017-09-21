const images = (state = [], action) => {
  switch (action.type) {

    case 'ADD_IMAGES':
    	state = action.payload;
      return state;

    case 'RESET_EVERYTHING':
    	return [];

    default:
      return state;
  }
};

export default images;