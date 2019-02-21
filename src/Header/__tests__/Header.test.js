import React from 'react';

import Button from '../../Button';
import Heading from '../../Heading';
import Header from '../Header';
import createWithTheme from '../../../utils/createWithTheme';

describe('<Header />', () => {
  it('renders with heading and no buttons', () => {
    const tree = createWithTheme(
      <Header>
        <Heading.h1>My Heading</Heading.h1>
      </Header>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders with heading and a button', () => {
    const tree = createWithTheme(
      <Header>
        <Heading.h1>My Heading</Heading.h1>
        <Button variant="primary">Primary</Button>
      </Header>
    );

    expect(tree).toMatchSnapshot();
  });

  it('renders with heaeding and multiple buttons', () => {
    const tree = createWithTheme(
      <Header>
        <Heading.h1>My Heading</Heading.h1>
        <Button variant="secondary">Secondary</Button>
        <Button variant="primary">Primary</Button>
      </Header>
    );

    expect(tree).toMatchSnapshot();
  });
});
