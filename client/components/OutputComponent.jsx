// the new component that will go below the first one

import React, { Component, PropTypes } from 'react';

class OutputComponent extends Component {

  componentDidMount() {

  }

  render() {

    console.log(this.props.textFieldInputs);

    if (this.props.textFieldInputs === undefined){
      return (
        <div className='OutputComponent'>
          Please enter in all fields above!
        </div>
      );

    } else {
      return (
        <div>
          This is where the result of the api call will be rendered
        </div>
      )
    }
  }
}

export default OutputComponent;