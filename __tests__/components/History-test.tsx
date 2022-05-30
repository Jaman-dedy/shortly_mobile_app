import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup} from '@testing-library/react-native';

import History from '../../src/components/History';

import MockThemes from '../../mock/MockTheme';

afterEach(cleanup);
describe('History component', () => {
  test('History component renders correctly with the loading component', () => {
    const mockCallBack = jest.fn();
    const mockData = {
      loading: true,
      result: [
        {code: '8djdii', link: 'wwww.example.com'},
        {code: '8djdiid', link: 'wwww.example.com'},
        {code: '8dj4dii', link: 'wwww.example.com'},
      ],
    };
    const tree = renderer
      .create(
        <MockThemes>
          <History
            shortenLinkState={mockData}
            handleDeleteLink={mockCallBack}
          />
        </MockThemes>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('History component renders correctly with box history component', () => {
    const mockCallBack = jest.fn();
    const mockData = {
      loading: false,
      result: [
        {code: '8djdii', link: 'wwww.example.com'},
        {code: '8djdiid', link: 'wwww.example.com'},
        {code: '8dj4dii', link: 'wwww.example.com'},
      ],
    };
    const tree = renderer
      .create(
        <MockThemes>
          <History
            shortenLinkState={mockData}
            handleDeleteLink={mockCallBack}
          />
        </MockThemes>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('History component renders correctly with the empty content component', () => {
    const mockCallBack = jest.fn();
    const mockData = {
      loading: false,
      result: [],
    };
    const tree = renderer
      .create(
        <MockThemes>
          <History
            shortenLinkState={mockData}
            handleDeleteLink={mockCallBack}
          />
        </MockThemes>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
