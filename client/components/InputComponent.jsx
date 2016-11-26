import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class InputComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      propertyValue: '',
      downPaymentValue: '',
      downPaymentUnit: 'dollars',
      loanDuration: '',
      interestRate: '',
      propertyTax: '',
      mortgageInsurance: '',
    };
    this.onPropertyValueChange = this.onPropertyValueChange.bind(this);
    this.onDownPaymentValueChange = this.onDownPaymentValueChange.bind(this);
    this.onloanDurationChange = this.onloanDurationChange.bind(this);
    this.onInterestRateChange = this.onInterestRateChange.bind(this);
    this.onPropertyTaxChange = this.onPropertyTaxChange.bind(this);
    this.onMortgageInsuranceChange = this.onMortgageInsuranceChange.bind(this);
    this.serverAPICall = this.serverAPICall.bind(this);
  }

  onPropertyValueChange(event) {
    this.setState({ propertyValue: event.target.value });
  }

  onDownPaymentValueChange(event) {
    this.setState({ downPaymentValue: event.target.value });
  }

  onloanDurationChange(event){
    this.setState({ loanDuration: event.target.value })
  }

  onInterestRateChange(event){
    this.setState({ interestRate: event.target.value })
  }

  onPropertyTaxChange(event){
    this.setState({ propertyTax: event.target.value})
  }

  onMortgageInsuranceChange(event){
    this.setState({ mortgageInsurance: event.target.value})
  }

  serverAPICall(this.state){
    // test to make sure each element of this.state has a legitimate value
    // if so make an API call to your node server.
    // the server will then make another API call to mlcalc.com and add the results to state.
  }

  render() {
    return (

      <div className="InputComponent">
        <div>Mortgage Payment Calculator</div>
        <div>Please enter required information below:</div>

        <form className="input-group">
          <TextField
            hintText="any number greater than 0"
            floatingLabelText="property value"
            fullWidth
            onChange={this.onPropertyValueChange}
            value={this.state.propertyValue}
          />
          <TextField
            hintText="any number greater than 0"
            floatingLabelText="down payment amount"
            fullWidth
            onChange={this.onDownPaymentValueChange}
            value={this.state.downPaymentValue}
          />
          <RadioButtonGroup name="downPaymentUnits" defaultSelected="dollars">
            <RadioButton value="dollars" label="Dollars"/>
            <RadioButton value="percent" label="Percent"/>
          </RadioButtonGroup>
          <TextField
            hintText="any number greater than 0"
            floatingLabelText="loan duration"
            fullWidth
            onChange={this.onloanDurationChange}
            value={this.state.loanDuration}
          />
          <TextField
            hintText="any number greater than 0"
            floatingLabelText="interest rate"
            fullWidth
            onChange={this.onInterestRateChange}
            value={this.state.interestRate}
          />
          <TextField
            hintText="any number greater than 0"
            floatingLabelText="property tax"
            fullWidth
            onChange={this.onPropertyTaxChange}
            value={this.state.propertyTax}
          />
          <RadioButtonGroup name="propertyTaxUnits" defaultSelected="dollars">
            <RadioButton value="dollars" label="Dollars"/>
            <RadioButton value="percent" label="Percent"/>
          </RadioButtonGroup>
          <TextField
            hintText="any number greater than 0"
            floatingLabelText="mortgage insurance amount"
            fullWidth
            onChange={this.onMortgageInsuranceChange}
            value={this.state.mortgageInsurance}
          />
        </form>

      </div>

    )
  }
}

export default InputComponent;