export function sendStateToStore(state) {
  return {
    type: 'ADD_INPUTS_TO_STORE',
    payload: state,
  };
}

export function storeCurrentRates(ratesObj) {
  return {
    type: 'STORE_CURRENT_RATES',
    payload: ratesObj,
  };
}

export function changeDownPaymentUnits() {
  console.log("function called in actions")
  return {
    type: 'CHANGE_DOWN_PAYMENT_UNIT',
  };
}

export function changePropertyTaxUnits() {
  console.log("function called in actions")
  return {
    type: 'CHANGE_PROPERTY_TAX_UNIT',
  };
}