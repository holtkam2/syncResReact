import React from 'react';
import InputContainer from '../containers/InputContainer';
import OutputContainer from '../containers/OutputContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <InputContainer />
      <OutputContainer />
    </div>
  </MuiThemeProvider>
);

export default App;