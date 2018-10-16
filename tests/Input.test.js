import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Input from '../src/Input';
import Text from '../src/Text';

describe('<Input />', () => {
  it('renders an Input correctly', () => {
    const tree = create(
      <Input label="My Input" id="example" type="text" />
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

      expect(input.find(Text.span).props().children).toEqual('My Caption');
    });
  });

  describe('caption does not exist', () => {
    it('does not render the caption', () => {
      const input = shallow(<Input id="example" />);

      expect(input.find(Text.span).length).toBe(0);
    });
  });
});
