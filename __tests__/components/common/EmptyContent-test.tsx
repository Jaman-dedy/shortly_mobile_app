import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import EmptyContent from '../../../src/components/common/EmptyContent';

import MockThemes from '../../../mock/MockTheme';

afterEach(cleanup);
test('renders correctly', async () => {
  const tree = await renderer
    .create(
      <MockThemes>
        <EmptyContent />
      </MockThemes>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
