import { connect } from 'react-redux';
import CalculateButtonComponent from '../components/CalculateButtonComponent';
import {calculateAnswer} from '../actions/index';

const mapDispatchToProps = dispatch => ({

	calculateAnswer : (num1, operation, num2) => {
		dispatch(calculateAnswer(num1, operation, num2));
	}

});

const mapStateToProps = state => ({
	currentNumber: state.numbers.currentNumber,
	previousNumber: state.numbers.previousNumber,
	operation: state.currentOperation,
});

export default connect(mapStateToProps, mapDispatchToProps)(CalculateButtonComponent);