import React from 'react';
import { shallow } from 'enzyme';

import createWithTheme from '../../../tests/utils/createWithTheme';
import Input from '../Input';
import Paragraph from '../../Paragraph';

describe('<Input />', () => {
  it('renders an Input correctly', () => {
    const tree = createWithTheme(
      <Input label="My Input" id="example" type="text" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a large Input correctly', () => {
    const tree = createWithTheme(
      <Input large label="My Input" id="example" type="text" />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders an Input with a caption correctly', () => {
    const tree = createWithTheme(
      <Input
        label="My Input"
        id="example"
        type="text"
        caption="I am a caption"
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('associates label with input', () => {
    const input = shallow(<Input type="text" id="example" />);

    expect(input.find('Label').props().htmlFor).toEqual('example');
  });

  describe('caption exists', () => {
    it('renders the caption', () => {
      const input = shallow(<Input caption="My Caption" id="example" />);

      expect(input.find(Paragraph.span).props().children).toEqual('My Caption');
    });
  });

  describe('caption does not exist', () => {
    it('does not render the caption', () => {
      const input = shallow(<Input id="example" />);

      expect(input.find(Paragraph.span).length).toBe(0);
    });
  });
});
