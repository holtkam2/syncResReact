import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';

class DisplayComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="DisplayComponent">{this.props.currentNumber}</div>
    )
  
  }
}

export default DisplayComponent;