import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import {
  sendStateToStore,
  storeCurrentRates,
  changeDownPaymentUnits,
  changePropertyTaxUnits,
} from '../actions/index';

const mapDispatchToProps = dispatch => ({

  sendInputToState: (state) => {
    dispatch(sendStateToStore(state))
  },
  storeCurrentRates: (ratesObj) => {
    dispatch(storeCurrentRates(ratesObj))
  },
  changeDownPaymentUnits: () => {
    dispatch(changeDownPaymentUnits())
  },
  changePropertyTaxUnits: () => {
    dispatch(changePropertyTaxUnits())
  },

});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);

