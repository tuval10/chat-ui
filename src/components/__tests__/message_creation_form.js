import React from 'react';
import MessageCreationForm from '../message_creation_form';
import {noop} from 'lodash';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

const actions = {
  validate: noop,
  onSubmit: noop,
  handleSubmit: func => func
};

const createShallowForm = (props) =>
  shallow(<MessageCreationForm {...actions} {...props}/>);

describe('MessageItem component', () => {
  describe('renders correctly', () => {
    it('when form is pristine', () => {
      expect(createShallowForm({pristine: true, submitting: false})).toMatchSnapshot();
    });

    it('when submitting', () => {
      expect(createShallowForm({pristine: false, submitting: true})).toMatchSnapshot();
    });

    it('when ready to submit', () => {
      expect(createShallowForm({pristine: false, submitting: false})).toMatchSnapshot();
    });
  });
});