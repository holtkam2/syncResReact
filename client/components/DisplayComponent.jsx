import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';

	class DisplayComponent extends Component {
  	constructor(props){
    	super(props);
  	}

  render() {

	  const style = {
	  	width: 200,
		  margin: 20,
		  textAlign: 'center',
		  display: 'inline-block',
		};

    return (
    	<Paper style={style} zDepth={3}>
      	<div className="DisplayComponent">{this.props.currentNumber}</div>
      </Paper>
    )
  }

}

export default DisplayComponent;