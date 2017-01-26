import { connect } from 'react-redux';
import CalculateButtonComponent from '../components/CalculateButtonComponent';
import {} from '../actions/index';

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
	currentNumber: state.numbers.currentNumber,
	previousNumber: state.numbers.previousNumber,
	operation: state.currentOperation,
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculateButtonComponent);