import React from 'react';
import DisplayContainer from '../containers/DisplayContainer';
import OperationsListContainer from '../containers/OperationsListContainer';
import NumberListContainer from '../containers/NumberListContainer';
import CalculateButtonContainer from '../containers/CalculateButtonContainer';
import Paper from 'material-ui/Paper';

const App = () => (
	
  <div className="calculatorOuterBox">
    <DisplayContainer />
    <OperationsListContainer />
    <NumberListContainer />
    <CalculateButtonContainer />
  </div>

);

export default App;
