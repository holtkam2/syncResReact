import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

class NumberListComponent extends Component {
  constructor(props){
    super(props);
    this.onNumberButtonClick = this.onNumberButtonClick.bind(this);
  }

  onNumberButtonClick(number){
    this.props.numberButtonClick(number);
  }

  render() {

    return (
      <div className="numberButtonBox">
        <div>
          <FlatButton label="1" rippleColor="blue" onClick= {() => {this.onNumberButtonClick(1)}}/>
          <FlatButton label="2" rippleColor="yellow" onClick= {() => {this.onNumberButtonClick(2)}}/>
          <FlatButton label="3" rippleColor="red" onClick= {() => {this.onNumberButtonClick(3)}}/>
        </div>
        <div>
          <FlatButton label="4" rippleColor="pink" onClick= {() => {this.onNumberButtonClick(4)}}/>
          <FlatButton label="5" rippleColor="purple" onClick= {() => {this.onNumberButtonClick(5)}}/>
          <FlatButton label="6" rippleColor="orange" onClick= {() => {this.onNumberButtonClick(6)}}/>
        </div>
        <div>
          <FlatButton label="7" rippleColor="red" onClick= {() => {this.onNumberButtonClick(7)}}/>
          <FlatButton label="8" rippleColor="yellow" onClick= {() => {this.onNumberButtonClick(8)}}/>
          <FlatButton label="9" rippleColor="orange" onClick= {() => {this.onNumberButtonClick(9)}}/>
        </div>
          <FlatButton label="0" rippleColor="green" onClick= {() => {this.onNumberButtonClick(0)}}/>
          <FlatButton label="." rippleColor="blue" onClick= {() => {this.onNumberButtonClick(".")}}/>
      </div>
    )
  }
}

export default NumberListComponent;

// get the numbers into a state object as when they are clicked. Should be called currentlyEnteredNum.
