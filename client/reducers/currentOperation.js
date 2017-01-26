const currentOperation = (state = "", action) => {
  switch (action.type) {
    case 'ADD_OPERATION':
      return action.payload.toString();
    default:
      return state;
  }
};

export default currentOperation;