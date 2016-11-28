// the new component that will go below the first one

import React, { Component, PropTypes } from 'react';

class OutputComponent extends Component {

  componentDidMount() {

  }

  render() {

    console.log(this.props.textFieldInputs);

    if (this.props.textFieldInputs === undefined){
      return (
        <div className='OutputComponentBefore'>
          Please enter in all fields above!
        </div>
      );

    } else {
      // this is what is returned if all fields have been entered!
      return (
        <div className='OutputComponentAfter'>
          (This is where the output will go)
        </div>
      )
    }
  }
}

export default OutputComponent;