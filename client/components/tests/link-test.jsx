import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
const {describe, it} = global;

import { default as Link } from '../Link.js';

describe('The Link item', () => {

  let onClickFunction = () => {};

  it( 'shows its text', () => {
    const wrapper = shallow(<Link onClick={onClickFunction} children={'baby'} active={true} />);
    expect(wrapper.contains('baby')).to.equal(true);
  });

});

