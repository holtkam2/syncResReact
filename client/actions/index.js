
export function addNumberToCurrentNum(number) {
  return {
    type: 'ADD_NUM_TO_CURRENTNUM',
    payload: number,
  };
}

export function addOperation(operation) {
  return {
  	type: 'ADD_OPERATION',
  	payload: operation,
  };
}

export function calculateAnswer(num1, operation, num2) {
	return {
		type: 'DISPLAY_ANSWER',
		payload: {num1: num1, operation: operation, num2: num2},
	};
}
