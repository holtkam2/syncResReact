import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.onSyncButtonClick = this.onSyncButtonClick.bind(this);
    this.onResetFormButtonClick = this.onResetFormButtonClick.bind(this);
    this.handleResourceTypeChange = this.handleResourceTypeChange.bind(this);
    this.onLocationInputChange = this.onLocationInputChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.resourceType = this.props.resourceType;
  }

  onSyncButtonClick(){

    $('.siteFooter').toggle()

  	let formInputObj = {
  		resourceType: this.props.resourceType,
  		clearCache: this.props.clearCache,
  		deleteFiles: this.props.deleteFiles,
  		email: this.props.email,
  		location: this.props.location,
  		runType: this.props.runType
  	}

  	if (this.props.runType === "test"){
  		formInputObj.runType = 0;
  	} else {
      formInputObj.runType = 1;
    }

    this.props.syncResApiCall(formInputObj);
  }

  onResetFormButtonClick(){
    if ($('.siteFooter').is(":hidden") === true){
      $('.siteFooter').toggle();
    }
    this.props.reset();
  }

  handleResourceTypeChange(event, index, value){
  	this.resourceType = value;
  	this.props.setResourceType(value);
  }

  onLocationInputChange(event){
  	this.props.setLocation(event.target.value);
  }

  onEmailChange(event, index, value){
  	this.props.setEmail(event.target.value)
  }

  render() {

    return (
    	<div id='InputComponent'>

      <div>
      	<DropDownMenu value={this.resourceType} onChange={this.handleResourceTypeChange}>
      	  <MenuItem value={"default"} primaryText="Type of Resource" />
      	  <MenuItem value={"images"} primaryText="images" />
      	  <MenuItem value={"fonts"} primaryText="fonts" />
      	  <MenuItem value={"gs"} primaryText="gs" />
      	  <MenuItem value={"video"} primaryText="video" />
      	</DropDownMenu>
      </div>

      <div className="InputField">
        <label className="InputField-label">Location
          <input className="InputField-input" onChange={this.onLocationInputChange}></input>
        </label>
      </div>

      <div>
	    	<Checkbox label="Delete Files From Destination" onCheck={this.props.setDeleteFiles}/>
    	  <Checkbox label="Clear Akamai Cache" onCheck={this.props.setClearCache}/>
      </div>

    	<RadioButtonGroup name="liveOrTest" defaultSelected="test" onChange={this.props.setRunType}>
	    	  <RadioButton value="test" label="test"/>
	    	  <RadioButton value="live" label="live"/>
    	</RadioButtonGroup>

      <div className="InputField">
        <label className="InputField-label">Confirmation Email
          <input className="InputField-input" onChange={this.onEmailChange}></input>
        </label>
      </div>

    	<div>
        <button style={{margin: '10px'}} onClick={() => { this.onSyncButtonClick(); }} type="button" className="Button u-floatRight">Sync</button>
        <button style={{margin: '10px'}} onClick={() => { this.onResetFormButtonClick(); }} type="button" className="Button u-floatLeft">Reset</button>
    	</div>

    </div>
    );

  }
}

InputComponent.defaultProps = {
  resourceType: "default"
}

export default InputComponent;
