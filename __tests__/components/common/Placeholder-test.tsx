import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import Placeholder from '../../../src/components/common/PlaceHolder';

import MockThemes from '../../../mock/MockTheme';

afterEach(cleanup);
test('renders correctly', async () => {
  const tree = await renderer
    .create(
      <MockThemes>
        <Placeholder />
      </MockThemes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
