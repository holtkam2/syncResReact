import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

describe('front end tests', () => {
  it ('should have a InputComponent', () => {
    let wrapper = shallow(<InputComponent />)
    expect(wrapper).to.exist;
  })

  it ('should have a ResultComponent', () => {
    let wrapper = shallow(<ResultComponent />)
    expect(wrapper).to.exist;
  })

});