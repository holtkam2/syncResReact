import { connect } from 'react-redux';
import ResultsComponent1 from '../components/ResultsComponent1';

const mapStateToProps = state => ({
	results: state.results
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsComponent1);