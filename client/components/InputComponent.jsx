import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';

class InputComponent extends Component {
  constructor(props){
    super(props);
    this.state = { searchTerm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (

      <div className="InputComponent">
        <div>Mortgage Payment Calculator</div>
        <div>Please enter required information below:</div>

        <form className="input-group">
          <TextField
            hintText="any number greater than 0"
            floatingLabelText="enter property value"
            fullWidth
            onChange={this.onInputChange}
            value={this.state.searchTerm}
          />
        </form>

      </div>

    )
  }
}

export default InputComponent;