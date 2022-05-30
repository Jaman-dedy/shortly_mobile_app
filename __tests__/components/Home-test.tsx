import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import HomeComponent from '../../src/components/Home';

import MockThemes from '../../mock/MockTheme';

afterEach(cleanup);
test('renders correctly', async () => {
  const tree = await renderer
    .create(
      <MockThemes>
        <HomeComponent />
      </MockThemes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
