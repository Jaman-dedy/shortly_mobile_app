import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import SideMenu from '../../src/components/SideMenu';

import MockThemes from '../../mock/MockTheme';

afterEach(cleanup);
test('renders correctly', async () => {
  const tree = await renderer
    .create(
      <MockThemes>
        <SideMenu />
      </MockThemes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
