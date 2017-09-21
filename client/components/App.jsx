import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Results1Container from '../containers/Results1Container';
import InputContainer from '../containers/InputContainer';
import Results2Container from '../containers/Results2Container';

const App = () => (
	<MuiThemeProvider>
	  <div className="appOuterBox">
	  	<InputContainer />
	  	<Results1Container />
	  	<Results2Container />
	  </div>
  </MuiThemeProvider>

);

export default App;
