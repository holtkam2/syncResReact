import React, { Component, PropTypes } from 'react';

class ResultsComponent1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {

  	let results = this.props.results;
  	let header = "Enter parameters and click the sync button to run syncRes"
    
  	if (results.live === 0){
  		header = "Test successful!"

  		results.runType = "Run Type: Test"
  		results.clearCache = "Cache Cleared: " + results.cache
  		results.deleteFiles = "Files Deleted: " + results.delete
  		results.email = "Email sent to: " + results.email
  		results.imagesCount = "Number of Images Found: " + results.imagesCount
  		results.location = "Location: " + results.loc

  		$('#resultsComponentHeader').css('background-color', '#09ba1e')
  	} else {
      $('#resultsComponentHeader').css('background-color', '')
    }

    return (
    	<div id='ResultsComponent1'>
    		<h2 id="resultsComponentHeader">{header}</h2>
      	<h3>{results.runType}</h3>
      	<h3>{results.clearCache}</h3>
      	<h3>{results.deleteFiles}</h3>
      	<h3>{results.email}</h3>
      	<h3>{results.imagesCount}</h3>
      	<h3>{results.location}</h3>
      </div>
    );
  }
  
}


export default ResultsComponent1;