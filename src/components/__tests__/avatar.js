import React from 'react';
import {create} from 'react-test-renderer';
import Avatar from '../avatar';
import {user} from '../../test_helpers/fixtures'
const {avatar} = user;

describe('Avatar component', () => {
  it('renders correctly', () => {
    const tree = create(<Avatar avatar={avatar} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});