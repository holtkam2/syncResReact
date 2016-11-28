import { combineReducers } from 'redux';
import inputFields from './inputFields';
import ratesObj from './ratesObj';
import downPaymentIsInDollars from './downPaymentUnits';
import propertyTaxIsInDollars from './propertyTaxUnits';

const reducers = combineReducers({
  inputFields,
  ratesObj,
  downPaymentIsInDollars,
  propertyTaxIsInDollars,
});

export default reducers;