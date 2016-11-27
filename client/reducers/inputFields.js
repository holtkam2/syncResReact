const inputFields = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_INPUTS_TO_STORE':
      return {
        inputs: action.payload
      };
    default:
      return state;
  }
};

export default inputFields;