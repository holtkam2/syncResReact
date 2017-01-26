import React, { Component, PropTypes } from 'react';

class OperationsListComponent extends Component {
  constructor(props){
    super(props);
    this.onOperationButtonClick = this.onOperationButtonClick.bind(this);
  }

  componentDidMount() {

  }

  onOperationButtonClick(operation){
    this.props.operationButtonClick(operation);
  }

  render() {

    return (
      <div>
        <button onClick={() => {this.onOperationButtonClick("/")}}>/</button>
        <button onClick={() => {this.onOperationButtonClick("*")}}>*</button>
        <button onClick={() => {this.onOperationButtonClick("-")}}>-</button>
        <button onClick={() => {this.onOperationButtonClick("+")}}>+</button>
      </div>
    )
  }
}

export default OperationsListComponent;