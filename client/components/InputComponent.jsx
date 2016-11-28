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
      propertyTaxUnit: 'dollars',
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

  componentDidMount() {
    $.ajax({
      url: '/api/rates',
      dataType: 'json',
      method: 'GET',
      cache: false,
      success: (data) => {
        // put it in state
        this.props.storeCurrentRates(data);
      },
    });
  }

  onPropertyValueChange(event) {
    this.setState(
        { propertyValue: event.target.value },
        function () {
          this.serverAPICall();
        }
    )
  }

  onDownPaymentValueChange(event) {
    this.setState(
        { downPaymentValue: event.target.value },
        function () {
          this.serverAPICall();
        }
    )
  }

  onloanDurationChange(event){
    this.setState(
        { loanDuration: event.target.value },
        function () {
          this.serverAPICall();
        }
    )
  }

  onInterestRateChange(event){
    this.setState(
        { interestRate: event.target.value },
        function () {
          this.serverAPICall();
        }
    )
  }

  onPropertyTaxChange(event){
    this.setState(
        { propertyTax: event.target.value },
        function () {
          this.serverAPICall();
        }
    )
  }

  onMortgageInsuranceChange(event){
    this.setState(
        { mortgageInsurance: event.target.value },
        function () {
          this.serverAPICall();
        }
    )
  }

  serverAPICall(){
    // test to make sure each element of this.state has a legitimate value before making API call to server
    var readyToSend = true;
    for (var i in this.state){
      if (this.state[i] !== 'dollars' && this.state[i] === ''){
        readyToSend = false;
      }
    }
    if (readyToSend === true){
      // put it in redux store first
      this.props.sendInputToState(this.state);
      $.post({
        url: '/api/state',
        data: JSON.stringify(this.state),
        contentType: 'application/json',
        dataType: 'json',
      });
    }
  }

  render() {
    return (

      <div className="InputComponent">
        <h2>Mortgage Payment Calculator</h2>
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
          <RadioButtonGroup name="downPaymentUnits" onChange={this.props.changeDownPaymentUnits} defaultSelected="dollars">
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
          <RadioButtonGroup name="propertyTaxUnits" onChange={this.props.changePropertyTaxUnits} defaultSelected="dollars">
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