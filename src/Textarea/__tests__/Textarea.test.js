import React from 'react';

import createWithTheme from '../../../utils/createWithTheme';
import Textarea from '../Textarea';

describe('<Textarea />', () => {
  it('renders an Textarea correctly', () => {
    const tree = createWithTheme(<Textarea id="example" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a large Textarea correctly', () => {
    const tree = createWithTheme(<Textarea large id="example" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a Textarea with a caption correctly', () => {
    const tree = createWithTheme(
      <Textarea id="example" caption="I am a caption" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a Textarea with a label correctly', () => {
    const tree = createWithTheme(
      <Textarea label="My Textarea" id="example" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a Textarea with a labelAside correctly', () => {
    const tree = createWithTheme(
      <Textarea labelAside={<div>sup?</div>} id="example" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
