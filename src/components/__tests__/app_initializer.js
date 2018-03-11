import React from 'react';
import {create} from 'react-test-renderer';
import AppInitializer from '../app_initializer';
import {user, serverConnectionState} from '../../test_helpers/fixtures'
import {noop} from 'lodash'

describe('AppInitializer component', () => {
  describe('renders correctly when the app is uninitialized', () => {
    it('when server connection uninitialized', () => {
      const tree = create(
        <AppInitializer
          initialize={noop}
          user={user}
          serverConnection={serverConnectionState['uninitialized']}
        >
          <div>should not see this div</div>
        </AppInitializer>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('when did not connect to the server yet', () => {
      const tree = create(
        <AppInitializer
          initialize={noop}
          user={user}
          serverConnection={serverConnectionState['connectionInitialized']}
        >
          <div>should not see this div</div>
        </AppInitializer>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('when there is no user', () => {
      const tree = create(
        <AppInitializer
          initialize={noop}
          serverConnection={serverConnectionState['connected']}
        >
        <div>should not see this div</div>
        </AppInitializer>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it('renders correctly when the app is initialized - including children', () => {
    const tree = create(
      <AppInitializer
        initialize={noop}
        user={user}
        serverConnection={serverConnectionState['connected']}
      >
        <div>should see this div</div>
      </AppInitializer>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});