import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

class CalculateButtonComponent extends Component {
  constructor(props){
    super(props);
    this.onEqualsButtonClick = this.onEqualsButtonClick.bind(this);
  }

  onEqualsButtonClick(num1, operation, num2){
    this.props.calculateAnswer(num1, operation, num2);
  }

  render() {

    return (
      <div className="CalculateButtonComponent">
        <FlatButton label="=" onClick={() => {this.onEqualsButtonClick(this.props.previousNumber, this.props.operation, this.props.currentNumber)}}/>
        <FlatButton label="clear" onClick={() => {this.props.clear()}}/>
      </div>
    )
  }
}

export default CalculateButtonComponent;