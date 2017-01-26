const numbers = (state = {currentNumber: "", previousNumber: ""}, action) => {
  switch (action.type) {
    case 'ADD_NUM_TO_CURRENTNUM':
      return {currentNumber: state.currentNumber+=action.payload, previousNumber: state.previousNumber}
    case 'ADD_OPERATION':
    	return {currentNumber: "", previousNumber: state.currentNumber}
    default:
      return state;
  }
};

export default numbers;