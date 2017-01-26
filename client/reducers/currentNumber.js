const currentNumber = (state = "", action) => {
  switch (action.type) {
    case 'ADD_NUM_TO_CURRENTNUM':
      return state+action.payload.toString();
    default:
      return state;
  }
};

export default currentNumber;