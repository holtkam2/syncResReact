import React, { Component, PropTypes } from 'react';

class NumberListComponent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  
  }

  render() {

    return (
      <div className="numberButtonBox">
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
          <button>0</button>
          <button>.</button>
      </div>
    )
  }
}

export default NumberListComponent;

// get the numbers into a state object as when they are clicked. Should be called currentlyEnteredNum.
