import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

describe('front end tests', () => {
  it ('should have a ThemeButton component', () => {
    let wrapper = shallow(<ThemeButton />)
    expect(wrapper).to.exist;
  })

  describe('SettingsDispContainer container', () => {
    it ('should have a SettingsDisp container', () => {
      let wrapper = mount(<SettingsDispContainer />)
      expect(wrapper).to.exist;
    })
  })

});