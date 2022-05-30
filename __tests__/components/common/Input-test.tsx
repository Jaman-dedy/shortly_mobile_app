import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import Input from '../../../src/components/common/Input';

import MockThemes from '../../../mock/MockTheme';

afterEach(cleanup);

describe('Text Input component', () => {
  const mockPlaceholder = 'shorten a link here';
  const mockData = {
    link: 'www.example.com',
  };
  const mockError = {
    error: 'invalid url',
  };
  const mockInput = jest.fn();
  test('renders correctly', async () => {
    const tree = await renderer
      .create(
        <MockThemes>
          <Input
            placeholder={mockPlaceholder}
            formData={mockData}
            errors={mockError}
            onChangeText={mockInput}
          />
        </MockThemes>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
