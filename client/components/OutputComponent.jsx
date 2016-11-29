// the new component that will go below the first one

import React, { Component, PropTypes } from 'react';

class OutputComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      paymentBreakdown: {
        totalMonthlyPayment: 0,
        taxes: 0,
        insurance: 0,
        principal: 0,
        interest: 0,
      },
    };
    this.calculateMonthlyPayment = this.calculateMonthlyPayment.bind(this);
  }

  componentDidMount() {

  }

  calculateMonthlyPayment(inputsObj){
    console.log("calculateMonthlyPayment called.");
    console.log("here is the total loan amount:")
    console.log(inputsObj.inputFields.inputs.propertyValue);
    console.log("here is the number of months:")
    console.log(inputsObj.inputFields.inputs.loanDuration * 12);
    console.log("here is the interest rate:")
    console.log(inputsObj.inputFields.inputs.interestRate);
  }

  render() {

    console.log(this.props.textFieldInputs);

    if (this.props.textFieldInputs === undefined){
      return (
        <div className='OutputComponentBefore'>
          Please enter in all fields above!
        </div>
      );

    } else {
      // this is what is returned if all fields have been entered!
      this.calculateMonthlyPayment(this.props.stateAsProp);
      return (
        <div className='OutputComponentAfter'>
          (This is where the output will go)
        </div>
      )
    }
  }
}

export default OutputComponent;