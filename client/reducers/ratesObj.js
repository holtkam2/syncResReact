const ratesObj = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_CURRENT_RATES':
      return {
        ratesObjFromZillow: JSON.parse(action.payload),
      };
    default:
      return state;
  }
};

export default ratesObj;