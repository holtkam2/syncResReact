import { connect } from 'react-redux';
import OutputComponent from '../components/OutputComponent';

const mapStateToProps = state => ({
  textFieldInputs: state.inputFields.inputs,
  stateAsProp: state,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OutputComponent);