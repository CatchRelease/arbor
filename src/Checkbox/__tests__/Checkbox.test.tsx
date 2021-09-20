import createWithTheme from '../../../utils/createWithTheme';
import Checkbox, { Props } from '../Checkbox';

describe('<Checkbox />', () => {
  const baseProps = {
    id: 'example',
    name: 'example',
    label: 'My Checkbox',
    value: '1'
  };

  const createWithProps = (additionalProps?: Partial<Props>) => {
    const props = { ...baseProps, ...additionalProps };

    return createWithTheme(<Checkbox {...{ ...props }} />);
  };

  it('properly renders a checkbox', () => {
    const tree = createWithProps();

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a checked checkbox', () => {
    const tree = createWithProps({ checked: true });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders an indeterminate checkbox', () => {
    const tree = createWithProps({ indeterminate: true });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a checked and indeterminate checkbox', () => {
    const tree = createWithProps({ indeterminate: true, checked: true });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a disabled checkbox', () => {
    const tree = createWithProps({ disabled: true });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a disabled indeterminate checkbox', () => {
    const tree = createWithProps({ disabled: true, indeterminate: true });

    expect(tree).toMatchSnapshot();
  });

  it('properly renders a checkbox with an icon', () => {
    const tree = createWithProps({ icon: 'cr-logo' });

    expect(tree).toMatchSnapshot();
  });
});
