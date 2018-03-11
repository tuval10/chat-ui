import React from 'react';
import {create} from 'react-test-renderer';
import MessageItem from '../message_item';
import {user as myUser, message, otherUserMessage} from '../../test_helpers/fixtures'

describe('MessageItem component', () => {
  describe('renders correctly', () => {
    it('when message belongs to user', () => {
      const tree = create(
        <MessageItem {...{myUser, ...message}} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('when message does not belong to user', () => {
      const tree = create(
          <MessageItem {...{myUser, ...otherUserMessage}} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});