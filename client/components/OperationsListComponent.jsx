import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

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
      <div className="numberListComponent">
        <FlatButton label="/" onClick= {() => {this.onOperationButtonClick("/")}}/>
        <FlatButton label="*" onClick= {() => {this.onOperationButtonClick("*")}}/>
        <FlatButton label="-" onClick= {() => {this.onOperationButtonClick("-")}}/>
        <FlatButton label="+" onClick= {() => {this.onOperationButtonClick("+")}}/>
      </div>
    )
  }
}

export default OperationsListComponent;