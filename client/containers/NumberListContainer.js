import { connect } from 'react-redux';
import NumberListComponent from '../components/NumberListComponent';
import {addNumberToCurrentNum} from '../actions/index';

const mapDispatchToProps = dispatch => ({

	numberButtonClick : (number) => {
		dispatch(addNumberToCurrentNum(number));
	}

});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NumberListComponent);