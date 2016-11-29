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
      textFieldInputs: this.props.textFieldInputs,
    };
    this.calculateMonthlyPayment = this.calculateMonthlyPayment.bind(this);
  }

  componentDidMount() {

  }

  calculateMonthlyPayment(){
    var inputsObj = this.props.textFieldInputs
    $.ajax({
      url: '/api/calculate',
      dataType: 'json',
      method: 'GET',
      cache: false,
      success: (data) => {
        this.state.paymentBreakdown.totalMonthlyPayment = data.monthlyPayment;
      },
    });
  }

  render() {
    if (this.props.textFieldInputs === undefined){
      return (
        <div className='OutputComponentBefore'>
          Please enter in all fields above! To see your results!
        </div>
      );

    } else {
      // this is what is returned if all fields have been entered!
      this.calculateMonthlyPayment()
      return (
        <div className='OutputComponentAfter'>
          <h4>Your monthly payment:</h4>
          <div>{this.state.paymentBreakdown.totalMonthlyPayment}</div>
        </div>
      )
    }
  }
}

export default OutputComponent;