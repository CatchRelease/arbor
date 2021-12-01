import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import createWithTheme from '../../../utils/createWithTheme';
import renderWithTheme from '../../../utils/renderWithTheme';
import theme from '../../theme';
import Input, { Props as InputProps } from '../Input';

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
    const render = (props?: Partial<InputProps>) =>
      renderWithTheme(
        <Input
          caption="The caption"
          id="example"
          validate={(value) => (value === '42' ? null : 'Value must be 42')}
          value="42"
          {...props}
        />
      );

    it('displays the caption when valid both before and after blur', () => {
      render();

      expect(screen.getByText('The caption')).toBeInTheDocument();

      fireEvent.blur(screen.getByRole('textbox'));

      expect(screen.getByText('The caption')).toBeInTheDocument();
    });

    it('displays the caption when invalid but not yet blurred', () => {
      render();

      const input = screen.getByRole('textbox');

      userEvent.type(input, '123');

      expect(screen.getByText('The caption')).toBeInTheDocument();
    });

    it('marks the input valid when valid', () => {
      render();

      const input = screen.getByRole('textbox');

      expect(input).not.toHaveStyleRule(
        'background',
        // eslint-disable-next-line import/no-named-as-default-member
        theme.colors.palette.red.lighter
      );

      expect(input).not.toHaveStyleRule(
        'border',
        // eslint-disable-next-line import/no-named-as-default-member
        `${theme.borderWidth.small} solid ${theme.colors.palette.red.default}`
      );
    });

    it('marks the input invalid when invalid and blurred', () => {
      render();

      const input = screen.getByRole('textbox');

      userEvent.type(input, '123');
      fireEvent.blur(input);

      expect(screen.getByText('Value must be 42')).toBeInTheDocument();

      expect(input).toHaveStyleRule(
        'background',
        // eslint-disable-next-line import/no-named-as-default-member
        theme.colors.palette.red.lighter
      );

      expect(input).toHaveStyleRule(
        'border',
        // eslint-disable-next-line import/no-named-as-default-member
        `${theme.borderWidth.small} solid ${theme.colors.palette.red.default}`
      );
    });

    it('calls onBlur with the original event', () => {
      const onBlur = jest.fn();

      render({ onBlur });

      const input = screen.getByRole('textbox');
      fireEvent.blur(input);

      expect(onBlur).toHaveBeenCalledWith(
        expect.objectContaining({ target: input })
      );
    });

    it('calls onChange', () => {
      const onChange = jest.fn();

      render({ onChange });

      const input = screen.getByRole('textbox');
      userEvent.type(input, '42');

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ target: input })
      );
    });
  });
});
