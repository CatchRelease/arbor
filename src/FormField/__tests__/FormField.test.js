import React from 'react';
import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import FormField from '../FormField';

describe('<FormField />', () => {
  it('renders a FormField correctly', () => {
    const tree = createWithTheme(
      <FormField id="exmaple">Field Child</FormField>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders a FormField with a caption correctly', () => {
    const tree = createWithTheme(
      <FormField caption="I am a caption" id="example">
        Field Child
      </FormField>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  context('with label', () => {
    it('renders a FormField with a label correctly', () => {
      const tree = createWithTheme(
        <FormField id="example" label="My label">
          Field Child
        </FormField>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    it('associates the id with the label', () => {
      const formField = shallow(
        <FormField id="example" label="My label">
          Field Child
        </FormField>
      );

      expect(formField.find('Label').props().htmlFor).toEqual('example');
    });
  });
});
