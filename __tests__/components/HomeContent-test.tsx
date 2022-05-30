import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import HomeContentComponent from '../../src/components/HomeContent';

import MockThemes from '../../mock/MockTheme';

afterEach(cleanup);
test('renders correctly', async () => {
  const tree = await renderer
    .create(
      <MockThemes>
        <HomeContentComponent />
      </MockThemes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
