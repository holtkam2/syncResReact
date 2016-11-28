const downPaymentIsInDollars = (state = true, action) => {
  switch (action.type) {
    case 'CHANGE_DOWN_PAYMENT_UNIT':
      return !state;
    default:
      return state;
  }
};

export default downPaymentIsInDollars;