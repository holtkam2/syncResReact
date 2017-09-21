import React, { Component, PropTypes } from 'react';
import ImageComponent from './ImageComponent';

class ResultsComponent2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id='ResultsComponent2'>
        {this.props.images.map(image => (
          <div key={image.src}>
            <ImageComponent src={image.src} name={image.name}/>
          </div>
        ))}
      </div>
      
    );
  }
  
}


export default ResultsComponent2;

