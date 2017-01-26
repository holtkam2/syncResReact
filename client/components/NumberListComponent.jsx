import React, { Component, PropTypes } from 'react';

class NumberListComponent extends Component {
  constructor(props){
    super(props);
    this.onNumberButtonClick = this.onNumberButtonClick.bind(this);
  }

  onNumberButtonClick(number){
    console.log(number);
    this.props.numberButtonClick(number);
  }

  render() {

    return (
      <div className="numberButtonBox">
        <div>
          <button onClick={() => {this.onNumberButtonClick(1)}}>1</button>
          <button onClick={() => {this.onNumberButtonClick(2)}}>2</button>
          <button onClick={() => {this.onNumberButtonClick(3)}}>3</button>
        </div>
        <div>
          <button onClick={() => {this.onNumberButtonClick(4)}}>4</button>
          <button onClick={() => {this.onNumberButtonClick(5)}}>5</button>
          <button onClick={() => {this.onNumberButtonClick(6)}}>6</button>
        </div>
        <div>
          <button onClick={() => {this.onNumberButtonClick(7)}}>7</button>
          <button onClick={() => {this.onNumberButtonClick(8)}}>8</button>
          <button onClick={() => {this.onNumberButtonClick(9)}}>9</button>
        </div>
          <button onClick={() => {this.onNumberButtonClick(0)}}>0</button>
          <button onClick={() => {this.onNumberButtonClick(".")}}>.</button>
      </div>
    )
  }
}

export default NumberListComponent;

// get the numbers into a state object as when they are clicked. Should be called currentlyEnteredNum.
