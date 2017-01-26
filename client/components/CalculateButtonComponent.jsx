import React, { Component, PropTypes } from 'react';

class CalculateButtonComponent extends Component {
  constructor(props){
    super(props);
    this.onEqualsButtonClick = this.onEqualsButtonClick.bind(this);
  }

  componentDidMount() {
  
  }

  onEqualsButtonClick(num1, operation, num2){
    this.props.calculateAnswer(num1, operation, num2);
  }

  render() {

    return (
      <button onClick={() => {this.onEqualsButtonClick(this.props.previousNumber, this.props.operation, this.props.currentNumber)}}>=</button>
    )
  }
}

export default CalculateButtonComponent;