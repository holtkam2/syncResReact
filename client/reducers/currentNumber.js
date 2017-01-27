const numbers = (state = {currentNumber: "", previousNumber: "", pastNumbers: {}}, action) => {

    switch (action.type) {

    case 'ADD_NUM_TO_CURRENTNUM':
      return {currentNumber: state.currentNumber+=action.payload, previousNumber: state.previousNumber, pastNumbers: state.pastNumbers}

    case 'ADD_OPERATION':
    	return {currentNumber: "", previousNumber: state.currentNumber, pastNumbers: state.pastNumbers}

    case 'CALCULATE_ANSWER':
    	var answer;
        var num1 = action.payload.num1;
        var num2 = action.payload.num2;
        var operation = action.payload.operation;

        var argsToMemoize = num1+operation+num2;

        if (state.pastNumbers[argsToMemoize]){
            return {currentNumber: state.pastNumbers[argsToMemoize], previousNumber: state.pastNumbers[argsToMemoize], pastNumbers: state.pastNumbers}
        }
    	
    	if (operation === "+"){
    		answer = Number(num1) + Number(num2);
    	} else if (operation === "-"){
    		answer = Number(num1) - Number(num2);
    	} else if (operation === "*"){
    		answer = Number(num1) * Number(num2);
    	} else if (operation === "/"){
    		answer = Number(num1) / Number(num2);
    	}

        state.pastNumbers[argsToMemoize] = answer;

    	return {currentNumber: answer, previousNumber: answer, pastNumbers: state.pastNumbers }

    case 'CLEAR':
        return {currentNumber: "", previousNumber: "", pastNumbers: state.pastNumbers};

    default:
      return state;
  }
};

export default numbers;