import React from 'react';
import InputContainer from '../containers/InputContainer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>
      <InputContainer />
    </div>
  </MuiThemeProvider>
);

export default App;