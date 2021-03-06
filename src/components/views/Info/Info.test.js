import React from 'react';
import { shallow } from 'enzyme';
import Info from './Info';

describe('Info', () => {
  it('renders without crashing', () => {
    shallow(
      <Info match={{ params: { pageId: 'id' }, isExact: true, path: '', url: '' }} />
    );
  });
});
