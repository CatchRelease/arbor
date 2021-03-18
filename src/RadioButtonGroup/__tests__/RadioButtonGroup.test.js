import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';
import RadioButtonGroup from '../RadioButtonGroup';
import RadioButton from '../../RadioButton';

describe('<RadioButtonGroup />', () => {
  const options = [
    {
      label: 'FOO',
      value: 'foo'
    },
    {
      label: 'BAR',
      value: 'bar'
    },
    {
      label: 'BAZ',
      value: 'baz',
      disabled: true
    },
    {
      label: 'QUUX',
      value: 'quux'
    }
  ];

  const onChange = jest.fn();

  const baseProps = {
    name: 'radio-button-group-test',
    options,
    onChange
  };

  const createWithProps = (additionalProps) => {
    const props = { ...baseProps, ...additionalProps };

    return createWithTheme(<RadioButtonGroup {...{ ...props }} />);
  };

  it('properly renders a radio button group', () => {
    const tree = createWithProps();

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a disabled radio button group', () => {
    const tree = createWithProps({ disabled: true });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a group with an initially checked value', () => {
    const tree = createWithProps({ checkedValue: options[0].value });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a group with additional button props', () => {
    const tree = createWithProps({ buttonProps: { mr: 'large' } });

    expect(tree).toMatchSnapshot();
  });

  it('calls the passed onChange when one of the items is clicked', () => {
    const wrapper = shallow(<RadioButtonGroup {...{ ...baseProps }} />);
    const event = { target: { value: options[1].value } };

    wrapper.find(RadioButton).at(1).simulate('change', event);

    expect(onChange).toHaveBeenLastCalledWith(event);
  });
});
