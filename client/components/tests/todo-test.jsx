import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
const {describe, it} = global;

import { default as Todo } from '../Todo.js';

describe('The todo item', () => {

  let onClickFunction = () => {};

  it( 'shows its text', () => {
    const wrapper = shallow(<Todo onClick={onClickFunction} text={'one'} completed={true} />);
    expect(wrapper.contains('one')).to.equal(true);
  });

});

