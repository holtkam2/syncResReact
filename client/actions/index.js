
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
