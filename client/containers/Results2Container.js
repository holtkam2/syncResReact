import { connect } from 'react-redux';
import ResultsComponent2 from '../components/ResultsComponent2';

const mapStateToProps = state => ({
	images: state.images
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsComponent2);