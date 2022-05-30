import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import IconButton from '../../../src/components/common/IconButton';

import MockThemes from '../../../mock/MockTheme';

afterEach(cleanup);
test('renders correctly', async () => {
  const tree = await renderer
    .create(
      <MockThemes>
        <IconButton />
      </MockThemes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
