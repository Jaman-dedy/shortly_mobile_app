import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import Button from '../../../src/components/common/Button';

import MockThemes from '../../../mock/MockTheme';

afterEach(cleanup);
test('renders correctly', async () => {
  const tree = await renderer
    .create(
      <MockThemes>
        <Button />
      </MockThemes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
