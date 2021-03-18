import { ThemeProvider } from '@emotion/react';
import { mount } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import theme from '../../theme';
import FormField from '../../FormField';
import Input from '../Input';
import StyledInput from '../StyledInput';

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

  context('with a validate function', () => {
    const render = (props) =>
      mount(
        <ThemeProvider theme={theme}>
          <Input
            caption="The caption"
            id="example"
            validate={(value) => (value === '42' ? null : 'Value must be 42')}
            value="42"
            {...props}
          />
        </ThemeProvider>
      );

    it('displays the caption when valid', () => {
      const wrapper = render();

      expect(wrapper.find(FormField)).toHaveProp('caption', 'The caption');
    });

    it('displays the caption when valid and blurred', () => {
      const wrapper = render();

      wrapper.find(StyledInput).simulate('blur');

      expect(wrapper.find(FormField)).toHaveProp('caption', 'The caption');
    });

    it('displays the caption when invalid but not yet blurred', () => {
      const wrapper = render();
      const input = wrapper.find(StyledInput);

      input.simulate('change', { target: { value: '123' } });

      expect(wrapper.find(FormField)).toHaveProp('caption', 'The caption');
    });

    it('displays the error message when invalid and blurred', () => {
      const wrapper = render();
      const input = wrapper.find(StyledInput);

      input.simulate('change', { target: { value: '123' } });
      input.simulate('blur');

      expect(wrapper.find(FormField)).toHaveProp('caption', 'Value must be 42');
    });

    it('marks the input valid when valid', () => {
      const wrapper = render();

      expect(wrapper.find(StyledInput)).toHaveProp('isInvalid', false);
    });

    it('marks the input invalid when invalid', () => {
      const wrapper = render();
      const input = wrapper.find(StyledInput);

      input.simulate('change', { target: { value: '123' } });
      input.simulate('blur');

      expect(wrapper.find(StyledInput)).toHaveProp('isInvalid', true);
    });

    it('calls onBlur with the original event', () => {
      const onBlur = jest.fn();
      const wrapper = render({ onBlur });

      const fakeEvent = { id: 'fake-event' };

      wrapper.find(StyledInput).simulate('blur', fakeEvent);

      expect(onBlur).toHaveBeenCalledWith(expect.objectContaining(fakeEvent));
    });

    it('calls onChange', () => {
      const onChange = jest.fn();
      const wrapper = render({ onChange });

      const fakeEvent = { id: 'fake-event', target: { value: '42' } };

      wrapper.find(StyledInput).simulate('change', fakeEvent);

      expect(onChange).toHaveBeenCalledWith(expect.objectContaining(fakeEvent));
    });
  });
});
