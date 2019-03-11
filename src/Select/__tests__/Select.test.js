import React from 'react';

import createWithTheme from '../../../utils/createWithTheme';
import Select from '../Select';

describe('<Select />', () => {
  it('renders an Select correctly', () => {
    const tree = createWithTheme(<Select id="example" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a large Select correctly', () => {
    const tree = createWithTheme(<Select large id="example" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an Select with a caption correctly', () => {
    const tree = createWithTheme(
      <Select id="example" caption="I am a caption" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an Select with a label correctly', () => {
    const tree = createWithTheme(
      <Select label="My Select" id="example" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
