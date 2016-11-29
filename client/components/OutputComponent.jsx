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
      paymentPercentages: {
        taxes: 0,
        insurance: 0,
        principal: .5,
        interest: .5,
      }
    };
    this.calculateMonthlyPayment = this.calculateMonthlyPayment.bind(this);
  }

  calculateMonthlyPayment(){
    var inputsObj = this.props.textFieldInputs
    $.ajax({
      url: '/api/calculate',
      dataType: 'json',
      method: 'GET',
      cache: false,
      success: (data) => {
        this.state.paymentBreakdown.totalMonthlyPayment = Math.floor(data.monthlyPayment);
        this.state.paymentBreakdown.principal = data.amortizeResult.principalRound;
        this.state.paymentBreakdown.interest = data.amortizeResult.interestRound;
      },
    });

    this.state.paymentPercentages.principal = this.state.paymentBreakdown.principal / this.state.paymentBreakdown.totalMonthlyPayment;

    this.state.paymentPercentages.interest = this.state.paymentBreakdown.interest / this.state.paymentBreakdown.totalMonthlyPayment;

  }

  render() {
    if (this.props.textFieldInputs === undefined){
      return (
        <div className='OutputComponentBefore'>
          Please enter in all fields above to see your results!
        </div>
      );

    } else {
      // this is what is returned if all fields have been entered!
      this.calculateMonthlyPayment()
      return (
        <div>
          <div className='OutputComponentAfter'>
            <h4>Your monthly payment:</h4>
            <div>${this.state.paymentBreakdown.totalMonthlyPayment}</div>
            <h4>Breakdown of the first payment installation:</h4>
            <p>Interest: ${this.state.paymentBreakdown.interest}</p>
            <p>Principal: ${this.state.paymentBreakdown.principal}</p>
            <h4>Your monthly payment is represented as the bar below:</h4>
            <div className="PaymentBreakdownBar">
              <div className="PrincipalBar" style={{ width: `${this.state.paymentPercentages.principal * 100}%` }} />

              <div className="InterestBar" style={{ width: `${this.state.paymentPercentages.interest * 100}%` }} />

              <div className="TaxesBar" style={{ width: `${this.state.paymentPercentages.taxes * 100}%` }} />

              <div className="InsuranceBar" style={{ width: `${this.state.paymentPercentages.insurance * 100}%` }} />
            </div>
            <p>The red section is the amount of money that goes toward principal, </p>
            <p>the purple section is the amount of money that goes toward interest, </p>
            <p>the green section is the amount of money that goes toward taxes, </p>
            <p>and the yellow section is the amount of money that goes toward insurance. </p>
          </div>
        </div>
      )
    }
  }
}

export default OutputComponent;