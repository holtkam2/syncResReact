import { connect } from 'react-redux';
import OperationsListComponent from '../components/OperationsListComponent';
import {addOperation} from '../actions/index';

const mapDispatchToProps = dispatch => ({

	operationButtonClick: (operation) => {
		dispatch(addOperation(operation));
	}

});

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(OperationsListComponent);