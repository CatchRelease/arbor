import React from 'react';

import createWithTheme from '../../../utils/createWithTheme';
import Input from '../Input';

describe('<Input />', () => {
  it('renders an Input correctly', () => {
    const tree = createWithTheme(<Input id="example" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a large Input correctly', () => {
    const tree = createWithTheme(<Input large id="example" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an Input with a caption correctly', () => {
    const tree = createWithTheme(
      <Input id="example" caption="I am a caption" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an Input with a label correctly', () => {
    const tree = createWithTheme(
      <Input label="My Input" id="example" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders as Input with a labelAside correctly', () => {
    const tree = createWithTheme(
      <Input labelAside={<div>sup?</div>} id="example" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an Input with a type correctly', () => {
    const tree = createWithTheme(<Input type="number" id="example" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
