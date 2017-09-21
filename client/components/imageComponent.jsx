import React, { Component, PropTypes } from 'react';

class ImageComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ImageComponent'>
        <img src = {this.props.src} style={{margin: '3px'}}/>
        <h4 style={{margin: '3px', float: 'right'}}>{this.props.name}</h4>
      </div>
    );
  }
  
}


export default ImageComponent; 