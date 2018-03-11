import React from 'react';
import {create} from 'react-test-renderer';
import MessagesList from '../messages_list';
import {user as myUser, message, otherUserMessage} from '../../test_helpers/fixtures'

describe('MessagesList component', () => {
  describe('renders correctly', () => {
    // noinspection ES6ModulesDependencies
    it('when there are messages', () => {
      const tree = create(
        <MessagesList {...{myUser, messages: [message, otherUserMessage]}} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('when there are no messages', () => {
      const tree = create(
        <MessagesList {...{myUser, messages: []}} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});