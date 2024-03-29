import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';
import {render, fireEvent} from '@testing-library/react-native';

import BoxComponent from '../../src/components/Box';

import MockThemes from '../../mock/MockTheme';

afterEach(cleanup);
describe('Box component', () => {
  const link = {
    code: 'dfdfdfd',
    short_link: 'dfdfdfd',
  };
  const mockFunction = jest.fn();
  test('renders correctly', async () => {
    const tree = await renderer
      .create(
        <MockThemes>
          <BoxComponent link={link} handleDeleteLink={mockFunction} />
        </MockThemes>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should copy text to the clipboard', () => {
    const {getByText} = render(
      <MockThemes>
        <BoxComponent link={link} handleDeleteLink={mockFunction} />
      </MockThemes>,
    );
    const copyText = getByText('COPY');
    fireEvent.press(copyText);
  });
  test('should delete an history', () => {
    const {getByLabelText} = render(
      <MockThemes>
        <BoxComponent link={link} handleDeleteLink={mockFunction} />
      </MockThemes>,
    );
    const deleteButton = getByLabelText('button');
    fireEvent.press(deleteButton);
  });
});
