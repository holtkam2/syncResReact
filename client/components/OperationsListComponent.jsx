import React, { Component, PropTypes } from 'react';

class OperationsListComponent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
  
  }

  render() {

    return (
      <div>
        <button>/</button>
        <button>*</button>
        <button>+</button>
        <button>-</button>
      </div>
    )
  }
}

export default OperationsListComponent;