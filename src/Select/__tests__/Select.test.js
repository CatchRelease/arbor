import React from 'react';

import createWithTheme from '../../../utils/createWithTheme';
import Select from '../Select';

const render = (props = {}) =>
  createWithTheme(
    <Select id="example" {...props}>
      <option>Some Option</option>
    </Select>
  ).toJSON();

describe('<Select />', () => {
  it('renders an Select correctly', () => {
    const tree = render();

    expect(tree).toMatchSnapshot();
  });

  it('renders a large Select correctly', () => {
    const tree = render({ large: true });

    expect(tree).toMatchSnapshot();
  });

  it('renders a Select with a caption correctly', () => {
    const tree = render({
      caption: 'I am a caption'
    });

    expect(tree).toMatchSnapshot();
  });

  it('renders a Select with a label correctly', () => {
    const tree = render({
      label: 'My Select'
    });

    expect(tree).toMatchSnapshot();
  });

  it('renders a Select with a labelAside correctly', () => {
    const labelAside = <div>hello</div>;

    const tree = render({
      labelAside
    });

    expect(tree).toMatchSnapshot();
  });
});
