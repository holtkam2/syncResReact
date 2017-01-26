const numbers = (state = {currentNumber: "", previousNumber: ""}, action) => {
  switch (action.type) {
    case 'ADD_NUM_TO_CURRENTNUM':
      console.log("ADD_NUM_TO_CURRENTNUM heard in currentNumber reducer")
    case 'ADD_OPERATION':
    	console.log("ADD_OPERATION heard in currentNumber reducer")
    default:
      return state;
  }
};

export default numbers;