import React from 'react';

import createWithTheme from '../../../utils/createWithTheme';
import RadioButton from '../RadioButton';

describe('<RadioButton />', () => {
  const baseProps = {
    id: 'example',
    name: 'example',
    label: 'My RadioButton',
    value: '1'
  };

  const createWithProps = (additionalProps) => {
    const props = { ...baseProps, ...additionalProps };

    return createWithTheme(<RadioButton {...{ ...props }} />);
  };

  it('properly renders a radio button', () => {
    const tree = createWithProps();

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a checked radio button', () => {
    const tree = createWithProps({ checked: true });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a disabled checkbox', () => {
    const tree = createWithProps({ disabled: true });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a disabled checked radio button', () => {
    const tree = createWithProps({ disabled: true, checked: true });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a radio button with an icon', () => {
    const tree = createWithProps({ icon: 'cr-logo' });

    expect(tree).toMatchSnapshot();
  });
});
