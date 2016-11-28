const propertyTaxIsInDollars = (state = true, action) => {
  switch (action.type) {
    case 'CHANGE_PROPERTY_TAX_UNIT':
      return !state;
    default:
      return state;
  }
};

export default propertyTaxIsInDollars;