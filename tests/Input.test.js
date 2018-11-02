import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import theme from '../src/theme';
import { Input } from '../src/Input';
import Paragraph from '../src/Paragraph';

describe('<Input />', () => {
  it('renders an Input correctly', () => {
    const tree = create(
      <Input theme={theme} label="My Input" id="example" type="text" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a large Input correctly', () => {
    const tree = create(
      <Input large theme={theme} label="My Input" id="example" type="text" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an Input with a caption correctly', () => {
    const tree = create(
      <Input
        label="My Input"
        id="example"
        type="text"
        theme={theme}
        caption="I am a caption"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('associates label with input', () => {
    const input = shallow(<Input theme={theme} type="text" id="example" />);

    expect(input.find('Label').props().htmlFor).toEqual('example');
  });

  describe('caption exists', () => {
    it('renders the caption', () => {
      const input = shallow(
        <Input theme={theme} caption="My Caption" id="example" />
      );

      expect(input.find(Paragraph.span).props().children).toEqual('My Caption');
    });
  });

  describe('caption does not exist', () => {
    it('does not render the caption', () => {
      const input = shallow(<Input theme={theme} id="example" />);

      expect(input.find(Paragraph.span).length).toBe(0);
    });
  });
});
