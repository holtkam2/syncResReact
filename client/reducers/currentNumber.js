const numbers = (state = {currentNumber: "", previousNumber: ""}, action) => {
  switch (action.type) {

    case 'ADD_NUM_TO_CURRENTNUM':
      return {currentNumber: state.currentNumber+=action.payload, previousNumber: state.previousNumber}

    case 'ADD_OPERATION':
    	return {currentNumber: "", previousNumber: state.currentNumber}

    case 'DISPLAY_ANSWER':
    	var answer;
    	if (action.payload.operation === "+"){
    		answer = Number(action.payload.num1) + Number(action.payload.num2);
    	} else if (action.payload.operation === "-"){
    		answer = Number(action.payload.num1) - Number(action.payload.num2);
    	} else if (action.payload.operation === "*"){
    		answer = Number(action.payload.num1) * Number(action.payload.num2);
    	} else if (action.payload.operation === "/"){
    		answer = Number(action.payload.num1) / Number(action.payload.num2);
    	}
    	return {currentNumber: answer, previousNumber: answer}

    default:
      return state;
  }
};

export default numbers;