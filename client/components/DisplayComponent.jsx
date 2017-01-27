import React, { Component, PropTypes } from 'react';

class DisplayComponent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  
  }

  render() {

    return (
      <div className="DisplayComponent">{this.props.currentNumber}</div>
    )
  
  }
}

export default DisplayComponent;