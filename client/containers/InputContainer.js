import { connect } from 'react-redux';
import InputComponent from '../components/InputComponent';
import { sendStateToStore } from '../actions/index';

const mapDispatchToProps = dispatch => ({
  sendInputToState: (state) => {
    dispatch(sendStateToStore(state))
  },
});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);

